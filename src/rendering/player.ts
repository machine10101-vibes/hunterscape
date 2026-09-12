import * as THREE from 'three';

type PhysOpts = Partial<THREE.MeshPhysicalMaterialParameters>;

const matCache = new Map<string, THREE.MeshPhysicalMaterial>();

function mat(color: number, opts: PhysOpts = {}): THREE.MeshPhysicalMaterial {
  const key = `${color}_${opts.roughness ?? 0.62}_${opts.metalness ?? 0.06}_${opts.clearcoat ?? 0}_${opts.sheen ?? 0}_${opts.emissive ?? 0}_${opts.emissiveIntensity ?? 0}_${opts.envMapIntensity ?? 1}_${opts.flatShading === false ? 0 : 1}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      roughness: opts.roughness ?? 0.62,
      metalness: opts.metalness ?? 0.06,
      envMapIntensity: opts.envMapIntensity ?? 1,
      flatShading: opts.flatShading ?? false,
      ...opts,
    });
    matCache.set(key, m);
  }
  return m;
}

function hash2(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function valueNoise(x: number, y: number): number {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash2(x0, y0);
  const b = hash2(x0 + 1, y0);
  const c = hash2(x0, y0 + 1);
  const d = hash2(x0 + 1, y0 + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function fbm(x: number, y: number, oct = 5): number {
  let v = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < oct; i++) {
    v += a * valueNoise(x * f, y * f);
    a *= 0.5;
    f *= 2.05;
  }
  return v;
}

function bakeMaps(
  size: number,
  sample: (u: number, v: number) => { r: number; g: number; b: number; rough: number; bump: number },
): { map: THREE.CanvasTexture; roughnessMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const albedo = document.createElement('canvas');
  const rough = document.createElement('canvas');
  const bump = document.createElement('canvas');
  albedo.width = albedo.height = rough.width = rough.height = bump.width = bump.height = size;
  const a = albedo.getContext('2d')!;
  const r = rough.getContext('2d')!;
  const b = bump.getContext('2d')!;
  const ai = a.createImageData(size, size);
  const ri = r.createImageData(size, size);
  const bi = b.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const s = sample(x / size, y / size);
      const i = (y * size + x) * 4;
      ai.data[i] = s.r;
      ai.data[i + 1] = s.g;
      ai.data[i + 2] = s.b;
      ai.data[i + 3] = 255;
      const rv = Math.max(0, Math.min(255, s.rough));
      ri.data[i] = ri.data[i + 1] = ri.data[i + 2] = rv;
      ri.data[i + 3] = 255;
      const bv = Math.max(0, Math.min(255, s.bump));
      bi.data[i] = bi.data[i + 1] = bi.data[i + 2] = bv;
      bi.data[i + 3] = 255;
    }
  }
  a.putImageData(ai, 0, 0);
  r.putImageData(ri, 0, 0);
  b.putImageData(bi, 0, 0);
  const wrap = (c: HTMLCanvasElement, srgb: boolean) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.needsUpdate = true;
    return t;
  };
  return { map: wrap(albedo, true), roughnessMap: wrap(rough, false), bumpMap: wrap(bump, false) };
}

let leatherTex: ReturnType<typeof bakeMaps> | null = null;
let clothTex: ReturnType<typeof bakeMaps> | null = null;
let skinTex: ReturnType<typeof bakeMaps> | null = null;

function leatherMaps() {
  if (!leatherTex) {
    leatherTex = bakeMaps(256, (u, v) => {
      const grain = fbm(u * 18, v * 42);
      const pores = valueNoise(u * 70, v * 70);
      const blotch = fbm(u * 4.5, v * 3.2, 3);
      const scratch = Math.pow(valueNoise(u * 9 + v * 40, v * 2), 8);
      const tone = 0.42 + grain * 0.28 + blotch * 0.16 - scratch * 0.22 + pores * 0.06;
      const r = 138 + tone * 108;
      const g = 112 + tone * 92;
      const b = 92 + tone * 74;
      return { r, g, b, rough: 110 + grain * 90 - scratch * 40, bump: 90 + grain * 110 + pores * 30 - scratch * 50 };
    });
    leatherTex.map.repeat.set(2.2, 2.2);
    leatherTex.roughnessMap.repeat.copy(leatherTex.map.repeat);
    leatherTex.bumpMap.repeat.copy(leatherTex.map.repeat);
  }
  return leatherTex;
}

function clothMaps() {
  if (!clothTex) {
    clothTex = bakeMaps(256, (u, v) => {
      const weave = Math.abs(Math.sin(u * Math.PI * 64)) * 0.12 + Math.abs(Math.sin(v * Math.PI * 64)) * 0.12;
      const n = fbm(u * 10, v * 10, 4);
      const tone = 0.28 + n * 0.18 + weave;
      return {
        r: 124 + tone * 74,
        g: 130 + tone * 78,
        b: 126 + tone * 70,
        rough: 170 + weave * 80,
        bump: 100 + weave * 90 + n * 40,
      };
    });
    clothTex.map.repeat.set(3, 3);
    clothTex.roughnessMap.repeat.copy(clothTex.map.repeat);
    clothTex.bumpMap.repeat.copy(clothTex.map.repeat);
  }
  return clothTex;
}

function skinMaps() {
  if (!skinTex) {
    skinTex = bakeMaps(256, (u, v) => {
      const n = fbm(u * 6, v * 8, 4);
      const freck = Math.pow(valueNoise(u * 40, v * 40), 6);
      const r = 212 + n * 24 - freck * 22;
      const g = 196 + n * 18 - freck * 18;
      const b = 184 + n * 14 - freck * 14;
      return { r, g, b, rough: 96 + n * 40, bump: 118 + n * 28 };
    });
  }
  return skinTex;
}

function leatherMat(tint: number, extra: PhysOpts = {}): THREE.MeshPhysicalMaterial {
  const t = leatherMaps();
  return new THREE.MeshPhysicalMaterial({
    color: tint,
    map: t.map,
    roughnessMap: t.roughnessMap,
    bumpMap: t.bumpMap,
    bumpScale: 0.018,
    roughness: 0.58,
    metalness: 0.08,
    clearcoat: 0.16,
    clearcoatRoughness: 0.55,
    sheen: 0.22,
    sheenColor: new THREE.Color(0x6a4028),
    sheenRoughness: 0.7,
    envMapIntensity: 0.7,
    flatShading: false,
    ...extra,
  });
}

function clothMat(tint: number): THREE.MeshPhysicalMaterial {
  const t = clothMaps();
  return new THREE.MeshPhysicalMaterial({
    color: tint,
    map: t.map,
    roughnessMap: t.roughnessMap,
    bumpMap: t.bumpMap,
    bumpScale: 0.02,
    roughness: 0.86,
    metalness: 0.02,
    sheen: 0.18,
    sheenColor: new THREE.Color(0x3a4438),
    sheenRoughness: 0.85,
    envMapIntensity: 0.4,
    flatShading: false,
  });
}

function skinMat(tint: number, extra: PhysOpts = {}): THREE.MeshPhysicalMaterial {
  const t = skinMaps();
  return new THREE.MeshPhysicalMaterial({
    color: tint,
    map: t.map,
    roughnessMap: t.roughnessMap,
    bumpMap: t.bumpMap,
    bumpScale: 0.012,
    roughness: 0.48,
    metalness: 0,
    sheen: 0.35,
    sheenColor: new THREE.Color(0xc07050),
    sheenRoughness: 0.55,
    envMapIntensity: 0.32,
    emissive: new THREE.Color(0x2a1410),
    emissiveIntensity: 0.012,
    flatShading: false,
    ...extra,
  });
}

function addPart(mesh: THREE.Mesh, parent: THREE.Object3D): THREE.Mesh {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function latheBody(radii: [number, number][], segs = 16): THREE.LatheGeometry {
  const pts = radii.map(([r, y]) => new THREE.Vector2(r, y));
  return new THREE.LatheGeometry(pts, segs);
}

function triangleTasset(w: number, h: number, thick: number, material: THREE.Material): THREE.Mesh {
  const shape = new THREE.Shape();
  shape.moveTo(-w * 0.5, 0);
  shape.lineTo(w * 0.5, 0);
  shape.lineTo(0, -h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: false });
  geo.translate(0, 0, -thick * 0.5);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;
  return mesh;
}

function addCrissCross(
  parent: THREE.Object3D,
  y0: number,
  y1: number,
  radius: number,
  material: THREE.Material,
  z = 0,
): void {
  const len = Math.hypot(radius * 1.7, y1 - y0);
  for (const dir of [-1, 1]) {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.028, len, 0.016), material);
    strap.position.set(0, (y0 + y1) * 0.5, z);
    strap.rotation.z = dir * Math.atan2(radius * 0.95, (y1 - y0) * 0.5);
    strap.castShadow = true;
    parent.add(strap);
  }
}

function squareBuckle(size: number, thick: number, _hole: number, metal: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size, size, thick), metal);
  mesh.castShadow = true;
  const inner = new THREE.Mesh(
    new THREE.BoxGeometry(size * 0.42, size * 0.42, thick + 0.008),
    new THREE.MeshPhysicalMaterial({ color: 0x2a2418, roughness: 0.7, metalness: 0.2, flatShading: false }),
  );
  mesh.add(inner);
  return mesh;
}

/** Drive-style faceted fur: overlapping icosa lumps forming a cuff, not cones or popcorn. */
function addFurCuff(
  parent: THREE.Object3D,
  cx: number,
  cy: number,
  cz: number,
  radius: number,
  count: number,
  size: number,
  fur: THREE.Material,
  furDark: THREE.Material,
): void {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const clump = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 0), i % 2 ? furDark : fur);
    clump.position.set(cx + Math.cos(a) * radius, cy + (i % 2) * 0.012, cz + Math.sin(a) * radius);
    clump.rotation.set(0.2, a, 0.15);
    clump.scale.set(1.15, 0.85, 1.05);
    clump.castShadow = true;
    parent.add(clump);
  }
}

/**
 * Grip geometry contract for the hunter's hands.
 *
 * Fingers hang on -Y from the knuckle row and curl toward +Z (negative
 * rotation.x), so the cylinder they enclose runs along the grip group's local
 * X. Every handle — sword, hatchet, pickaxe, spear — is therefore mounted at
 * GRIP_POINT with its shaft along +X, and the tool exits on the thumb side.
 */
/*
 * Centre of the tube the closed fingers actually enclose, measured off the
 * curled chain rather than eyeballed: knuckle row at z 0.012, fingertips back
 * up at y +0.011 / z 0.064. Mounting lower than this leaves the haft resting
 * against the outside of the fingers instead of inside them.
 */
const GRIP_POINT = new THREE.Vector3(0, -0.008, 0.041);

type FingerChain = { root: THREE.Group; mid: THREE.Group; tip: THREE.Group };

function makeFinger(
  skin: THREE.Material,
  leather: THREE.Material,
  len: number,
  rad: number,
): FingerChain {
  const root = new THREE.Group();
  const prox = new THREE.Mesh(new THREE.CapsuleGeometry(rad, len * 0.34, 3, 8), leather);
  prox.position.y = -len * 0.25;
  addPart(prox, root);

  const mid = new THREE.Group();
  mid.position.y = -len * 0.48;
  const midMesh = new THREE.Mesh(new THREE.CapsuleGeometry(rad * 0.88, len * 0.24, 3, 8), skin);
  midMesh.position.y = -len * 0.16;
  addPart(midMesh, mid);
  root.add(mid);

  const tip = new THREE.Group();
  tip.position.y = -len * 0.32;
  const tipMesh = new THREE.Mesh(new THREE.CapsuleGeometry(rad * 0.74, len * 0.16, 3, 8), skin);
  tipMesh.position.y = -len * 0.12;
  addPart(tipMesh, tip);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(rad * 0.6, 6, 5), skin);
  nail.scale.set(0.9, 0.5, 0.45);
  nail.position.set(0, -len * 0.19, -rad * 0.55);
  tip.add(nail);
  mid.add(tip);

  return { root, mid, tip };
}

/** Close a hand built by makeHand. 0 = flat, 1 = clenched around the handle. */
export function setHandGrip(hand: THREE.Object3D | undefined, amount: number): void {
  if (!hand) return;
  const chains = hand.userData.fingers as FingerChain[] | undefined;
  const thumb = hand.userData.thumb as FingerChain | undefined;
  if (!chains) return;
  const c = Math.max(0, Math.min(1.15, amount));
  for (let i = 0; i < chains.length; i++) {
    // Pinky leads and index trails, so a closing fist rolls instead of snapping shut.
    const lag = 1 + (i - 1.5) * -0.07;
    const f = chains[i];
    f.root.rotation.x = -c * 0.98 * lag;
    f.mid.rotation.x = -c * 1.22 * lag;
    f.tip.rotation.x = -c * 0.82 * lag;
  }
  if (thumb) {
    thumb.root.rotation.x = -0.55 - c * 0.35;
    thumb.mid.rotation.x = -c * 0.55;
    thumb.tip.rotation.x = -c * 0.45;
  }
}

function makeHand(
  skin: THREE.Material,
  leather: THREE.Material,
  leatherDark: THREE.Material,
  grip: 'open' | 'pole' | 'fist',
): THREE.Group {
  const hand = new THREE.Group();

  const back = new THREE.Mesh(new THREE.SphereGeometry(0.047, 12, 10), leather);
  back.scale.set(1.02, 0.98, 0.66);
  back.position.set(0, -0.016, 0.01);
  addPart(back, hand);

  const wrist = new THREE.Mesh(new THREE.CapsuleGeometry(0.037, 0.022, 4, 10), leatherDark);
  wrist.position.set(0, 0.018, 0.006);
  addPart(wrist, hand);

  const gripGroup = new THREE.Group();
  gripGroup.name = 'grip';
  gripGroup.position.set(0, -0.036, 0.012);
  // Rotating the grip aims the handle: level-ish for a fist, and just past
  // vertical for a pole so a carried spear leans away from the head.
  gripGroup.rotation.z = grip === 'pole' ? 1.79 : grip === 'fist' ? 0.22 : 0;
  hand.add(gripGroup);

  const knuckleRidge = new THREE.Mesh(new THREE.CapsuleGeometry(0.014, 0.058, 4, 8), leather);
  knuckleRidge.rotation.z = Math.PI / 2;
  knuckleRidge.position.set(0, 0.004, 0.014);
  addPart(knuckleRidge, gripGroup);

  const fingers: FingerChain[] = [];
  for (let i = 0; i < 4; i++) {
    const len = 0.074 - Math.abs(i - 1.1) * 0.007;
    const f = makeFinger(skin, leather, len, 0.0118 - i * 0.0009);
    f.root.position.set(-0.031 + i * 0.0207, 0, 0.012 - Math.abs(i - 1.5) * 0.005);
    gripGroup.add(f.root);
    fingers.push(f);
  }

  // Thumb sits on +X and lies back along the handle, pinning it against the fingers.
  const thumb = makeFinger(skin, leather, 0.064, 0.0136);
  thumb.root.position.set(0.04, 0.014, 0.03);
  thumb.root.rotation.z = -1.18;
  gripGroup.add(thumb.root);

  hand.userData.fingers = fingers;
  hand.userData.thumb = thumb;
  hand.userData.gripPoint = GRIP_POINT.clone();
  setHandGrip(hand, grip === 'fist' ? 0.98 : grip === 'pole' ? 0.88 : 0.22);
  return hand;
}

/**
 * Male hunter — Drive-ref faceted leather outfit, spiky fur, plantigrade idle.
 */
export function createPlayerMesh(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'player';
  g.userData.locomotionY = 0;

  const skin = skinMat(0xc08c62);
  const skinDark = skinMat(0xa2724c, { roughness: 0.56 });
  const hairCol = mat(0x30231a, {
    roughness: 0.94,
    sheen: 0.22,
    sheenColor: new THREE.Color(0x3a2818),
    flatShading: true,
  });
  const leather = leatherMat(0x9a6238);
  const leatherDark = leatherMat(0x52321c, { roughness: 0.78, clearcoat: 0.04 });
  const leatherMid = leatherMat(0xc08a52, { roughness: 0.58, clearcoat: 0.12 });
  const fur = mat(0xc9a874, {
    roughness: 0.92,
    metalness: 0,
    sheen: 0.22,
    sheenColor: new THREE.Color(0xc8a070),
    sheenRoughness: 0.7,
    envMapIntensity: 0.12,
    flatShading: true,
  });
  const furDark = mat(0x8d6c44, {
    roughness: 0.95,
    sheen: 0.16,
    sheenColor: new THREE.Color(0x8a6038),
    flatShading: true,
  });
  const furMid = mat(0xac8859, {
    roughness: 0.93,
    sheen: 0.18,
    sheenColor: new THREE.Color(0xaa8048),
    flatShading: true,
  });
  const cloth = clothMat(0x555d57);
  const clothDark = clothMat(0x3e463f);
  const metal = mat(0xe8eef4, {
    metalness: 0.92,
    roughness: 0.18,
    clearcoat: 0.55,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.35,
  });
  const metalBright = mat(0xf6fafc, {
    metalness: 0.96,
    roughness: 0.1,
    clearcoat: 0.7,
    clearcoatRoughness: 0.08,
    emissive: 0xc8d4e0,
    emissiveIntensity: 0.38,
    envMapIntensity: 1.55,
  });
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.38, 24),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.38, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.025;
  shadow.name = 'contactShadow';
  g.add(shadow);

  const hips = new THREE.Group();
  hips.name = 'playerHips';
  g.add(hips);

  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'legL' : 'legR';
    hip.position.set(side * 0.16, 0.94, 0);

    const hipBall = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 12), cloth);
    addPart(hipBall, hip);

    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.26, 6, 14), cloth);
    thigh.position.set(0, -0.18, 0);
    addPart(thigh, hip);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'shinL' : 'shinR';
    shin.position.set(0, -0.44, 0);

    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.086, 14, 12), cloth);
    addPart(knee, shin);

    // Trousers stop above the boot cuff.
    const calf = new THREE.Mesh(new THREE.CapsuleGeometry(0.076, 0.1, 5, 14), clothDark);
    calf.position.set(0, -0.09, -0.024);
    addPart(calf, shin);

    // Short boot shaft — two fur rings live on this, not on the ankle.
    const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.098, 0.1, 14), leather);
    boot.position.set(0, -0.2, -0.016);
    addPart(boot, shin);
    addCrissCross(shin, -0.15, -0.25, 0.094, leatherDark, 0.02);

    const bootFurTop = new THREE.Mesh(new THREE.TorusGeometry(0.092, 0.022, 6, 10), fur);
    bootFurTop.rotation.x = Math.PI / 2;
    bootFurTop.position.set(0, -0.14, 0.02);
    shin.add(bootFurTop);
    const bootFurLow = new THREE.Mesh(new THREE.TorusGeometry(0.082, 0.018, 6, 10), furDark);
    bootFurLow.rotation.x = Math.PI / 2;
    bootFurLow.position.set(0, -0.24, 0);
    shin.add(bootFurLow);

    // Long, skinny ankle so the joint reads between shaft and foot.
    const ankleCol = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.058, 0.14, 12), leatherDark);
    ankleCol.position.set(0, -0.36, -0.006);
    addPart(ankleCol, shin);
    const ankleWrap = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.055, 0.045, 12), leather);
    ankleWrap.position.set(0, -0.34, -0.006);
    addPart(ankleWrap, shin);

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'footL' : 'footR';
    foot.position.set(0, -0.48, 0.04);
    const ankle = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 10), leatherDark);
    addPart(ankle, foot);
    const heel = new THREE.Mesh(new THREE.SphereGeometry(0.046, 10, 8), leatherDark);
    heel.position.set(0, -0.016, -0.05);
    addPart(heel, foot);
    const toe = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.16, 5, 12), leather);
    toe.rotation.x = Math.PI / 2;
    toe.position.set(0, -0.004, 0.12);
    toe.scale.set(1.2, 1, 0.68);
    addPart(toe, foot);
    // Tucked inside the boot's footprint; any wider and it reads as a black
    // rectangle floating under each foot.
    const sole = new THREE.Mesh(new THREE.CapsuleGeometry(0.052, 0.16, 4, 10), mat(0x1c1410, { roughness: 0.96 }));
    sole.rotation.x = Math.PI / 2;
    sole.scale.set(1.12, 1, 0.36);
    sole.position.set(0, -0.032, 0.1);
    foot.add(sole);
    shin.add(foot);


    hip.add(shin);
    return hip;
  };
  hips.add(makeLeg(-1));
  hips.add(makeLeg(1));

  const pelvis = new THREE.Mesh(latheBody([[0.2, -0.1], [0.24, -0.02], [0.22, 0.1]], 16), leather);
  pelvis.position.y = 0.92;
  addPart(pelvis, hips);

  for (const [z, ry] of [
    [0.22, 0],
    [-0.22, Math.PI],
  ] as const) {
    const flap = triangleTasset(0.26, 0.2, 0.038, leatherDark);
    flap.position.set(0, 0.86, z);
    flap.rotation.y = ry;
    hips.add(flap);
  }
  for (const sx of [-1, 1]) {
    const flap = triangleTasset(0.18, 0.18, 0.032, leatherMid);
    flap.position.set(sx * 0.24, 0.86, 0);
    flap.rotation.y = sx * Math.PI * 0.5;
    hips.add(flap);
  }

  const torso = new THREE.Group();
  torso.name = 'playerTorso';
  torso.position.y = 1.18;
  g.add(torso);

  const vest = new THREE.Mesh(
    latheBody(
      [
        [0.2, -0.3],
        [0.24, -0.18],
        [0.27, -0.02],
        [0.28, 0.12],
        [0.25, 0.24],
        [0.16, 0.32],
      ],
      12,
    ),
    leather,
  );
  addPart(vest, torso);

  const pecs = new THREE.Mesh(new THREE.SphereGeometry(0.145, 14, 12), leatherMid);
  pecs.scale.set(1.28, 0.68, 0.52);
  pecs.position.set(0, 0.08, 0.11);
  addPart(pecs, torso);

  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.032, 10, 18), leatherDark);
  belt.rotation.x = Math.PI / 2;
  belt.position.y = -0.26;
  torso.add(belt);
  const beltBuckle = squareBuckle(0.1, 0.028, 0.042, metalBright);
  beltBuckle.position.set(0, -0.26, 0.24);
  torso.add(beltBuckle);

  const makeStrap = (rotZ: number, z: number) => {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.078, 0.56, 0.045), leatherDark);
    strap.position.set(0, 0.02, z);
    strap.rotation.z = rotZ;
    strap.castShadow = true;
    torso.add(strap);
  };
  makeStrap(0.55, 0.24);
  makeStrap(-0.55, 0.24);
  makeStrap(0.55, -0.2);
  makeStrap(-0.55, -0.2);

  const bucklePad = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.03), leatherDark);
  bucklePad.position.set(0, 0.05, 0.215);
  torso.add(bucklePad);
  const chestBuckle = squareBuckle(0.14, 0.038, 0.058, metalBright);
  chestBuckle.name = 'chestBuckle';
  chestBuckle.position.set(0, 0.05, 0.255);
  torso.add(chestBuckle);

  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), leatherMid);
    pad.scale.set(1.15, 0.55, 1.05);
    pad.position.set(sx * 0.24, 0.16, 0.01);
    pad.rotation.z = sx * -0.32;
    addPart(pad, torso);
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.094, 14, 11), skin);
    deltoid.scale.set(1.08, 0.98, 1.0);
    deltoid.position.set(sx * 0.25, 0.1, -0.008);
    addPart(deltoid, torso);
    // Studded leather cap: breaks up the bare shoulder ball in silhouette.
    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(0.102, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.56),
      leatherMid,
    );
    cap.scale.set(1.06, 0.92, 1.02);
    cap.rotation.z = sx * -0.36;
    cap.position.set(sx * 0.248, 0.114, -0.006);
    addPart(cap, torso);
    for (let i = 0; i < 3; i++) {
      const stud = new THREE.Mesh(new THREE.SphereGeometry(0.011, 6, 5), metalBright);
      const a = -0.5 + i * 0.5;
      stud.position.set(sx * (0.248 + Math.cos(a) * 0.02), 0.166, Math.sin(a) * 0.078);
      torso.add(stud);
    }
  }

  const collarBase = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.055, 8, 12), furMid);
  collarBase.rotation.x = Math.PI / 2;
  collarBase.position.set(0, 0.28, 0.01);
  collarBase.scale.set(1.08, 1.0, 0.92);
  addPart(collarBase, torso);
  addFurCuff(torso, 0, 0.29, 0.01, 0.18, 8, 0.042, fur, furDark);

  const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.08, 6, 14), skin);
  neck.position.set(0, 0.34, 0.01);
  addPart(neck, torso);

  const makeArm = (side: number) => {
    const clav = new THREE.Group();
    clav.name = side < 0 ? 'clavL' : 'clavR';
    clav.position.set(side * 0.18, 0.14, 0);

    const arm = new THREE.Group();
    arm.name = side < 0 ? 'armL' : 'armR';
    arm.position.set(side * 0.07, 0, 0);

    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.072, 0.2, 4, 10), skin);
    upper.position.set(0, -0.08, 0);
    addPart(upper, arm);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'forearmL' : 'forearmR';
    forearm.position.set(0, -0.34, 0);

    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.068, 8, 6), skin);
    addPart(elbow, forearm);

    const gauntlet = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.16, 4, 10), leather);
    gauntlet.position.set(0, -0.14, 0.01);
    addPart(gauntlet, forearm);
    addCrissCross(forearm, -0.06, -0.2, 0.074, leatherDark, 0.01);
    const elbowFur = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.02, 6, 10), fur);
    elbowFur.rotation.x = Math.PI / 2;
    elbowFur.position.set(0, -0.02, 0.01);
    forearm.add(elbowFur);
    const wristFur = new THREE.Mesh(new THREE.TorusGeometry(0.068, 0.018, 6, 10), furDark);
    wristFur.rotation.x = Math.PI / 2;
    wristFur.position.set(0, -0.22, 0.01);
    forearm.add(wristFur);

    // Both hands start open. Pole tilt used to be baked into the left grip so
    // the hunter always looked like he was carrying a spear, even empty-handed.
    const hand = makeHand(skin, leather, leatherDark, 'open');
    hand.name = side < 0 ? 'handL' : 'handR';
    hand.position.set(0, -0.28, 0.02);
    forearm.add(hand);

    arm.add(forearm);
    clav.add(arm);
    return clav;
  };
  torso.add(makeArm(-1));
  torso.add(makeArm(1));

  const head = new THREE.Group();
  head.name = 'playerHead';
  head.position.set(0, 0.5, 0.015);

  const hairShade = mat(0x3b2b1f, { roughness: 0.95, sheen: 0.18, sheenColor: new THREE.Color(0x53402c) });

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.163, 22, 18), skin);
  skull.scale.set(0.95, 1.07, 0.94);
  addPart(skull, head);

  // Brow shelf and cheekbones give the face structure that a single sphere cannot.
  const browRidge = new THREE.Mesh(new THREE.SphereGeometry(0.112, 16, 12), skin);
  browRidge.scale.set(1.1, 0.3, 0.5);
  browRidge.position.set(0, 0.05, 0.068);
  addPart(browRidge, head);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.114, 16, 13), skinDark);
  jaw.scale.set(1.04, 0.74, 0.95);
  jaw.position.set(0, -0.093, 0.04);
  addPart(jaw, head);

  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 8), skinDark);
  chin.scale.set(1.2, 0.9, 1.12);
  chin.position.set(0, -0.15, 0.105);
  head.add(chin);

  for (const sx of [-1, 1]) {
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.044, 12, 9), skin);
    cheek.scale.set(0.8, 0.6, 0.5);
    cheek.position.set(sx * 0.088, -0.026, 0.076);
    head.add(cheek);
  }

  // Short beard: a jaw-hugging mass plus a moustache, not a flat decal.
  const beard = new THREE.Mesh(new THREE.SphereGeometry(0.113, 14, 11), hairShade);
  beard.scale.set(1.03, 0.74, 0.92);
  beard.position.set(0, -0.112, 0.03);
  addPart(beard, head);
  const beardFront = new THREE.Mesh(new THREE.SphereGeometry(0.056, 10, 8), hairShade);
  beardFront.scale.set(1.12, 0.9, 0.82);
  beardFront.position.set(0, -0.146, 0.082);
  head.add(beardFront);
  for (const sx of [-1, 1]) {
    const chop = new THREE.Mesh(new THREE.CapsuleGeometry(0.016, 0.062, 4, 8), hairShade);
    chop.position.set(sx * 0.128, -0.03, 0.006);
    chop.rotation.z = sx * 0.16;
    head.add(chop);
    const tache = new THREE.Mesh(new THREE.CapsuleGeometry(0.0105, 0.026, 3, 8), hairShade);
    tache.rotation.z = Math.PI / 2;
    tache.rotation.y = sx * 0.3;
    tache.position.set(sx * 0.019, -0.069, 0.133);
    head.add(tache);
  }

  const nose = new THREE.Mesh(
    latheBody(
      [
        [0.005, 0.046],
        [0.013, 0.016],
        [0.021, -0.01],
        [0.025, -0.03],
        [0.013, -0.044],
      ],
      10,
    ),
    skin,
  );
  nose.rotation.x = 0.3;
  nose.position.set(0, -0.006, 0.152);
  addPart(nose, head);
  const bridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.013, 0.05, 4, 8), skin);
  bridge.rotation.x = 0.2;
  bridge.position.set(0, 0.018, 0.14);
  head.add(bridge);
  for (const sx of [-1, 1]) {
    const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.0105, 8, 6), skinDark);
    nostril.scale.set(1, 0.8, 0.9);
    nostril.position.set(sx * 0.02, -0.05, 0.148);
    head.add(nostril);
  }

  for (const sx of [-1, 1]) {
    const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.0105, 0.046, 3, 8), hairShade);
    brow.rotation.z = Math.PI / 2 + sx * -0.2;
    brow.rotation.x = -0.25;
    brow.position.set(sx * 0.052, 0.064, 0.134);
    head.add(brow);

    // Eye: a small dark socket with a recessed ball, so it does not read as a
    // pasted-on white disc at gameplay distance.
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.029, 12, 9), skinDark);
    socket.scale.set(1.15, 0.9, 0.62);
    socket.position.set(sx * 0.053, 0.014, 0.114);
    head.add(socket);
    const eyeball = new THREE.Mesh(new THREE.SphereGeometry(0.0182, 14, 11), mat(0xcabdae, { roughness: 0.32 }));
    eyeball.position.set(sx * 0.053, 0.014, 0.126);
    head.add(eyeball);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.0108, 10, 8),
      mat(0x4a3a22, { roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.1 }),
    );
    iris.position.set(sx * 0.053, 0.014, 0.143);
    head.add(iris);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.005, 8, 6), mat(0x0a0806, { roughness: 0.25 }));
    pupil.position.set(sx * 0.053, 0.014, 0.15);
    head.add(pupil);
    // Upper lid keeps the eye from staring.
    const lid = new THREE.Mesh(new THREE.SphereGeometry(0.0208, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.52), skin);
    lid.scale.set(1.08, 1, 0.9);
    lid.rotation.x = -0.42;
    lid.position.set(sx * 0.053, 0.019, 0.124);
    head.add(lid);

    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), skin);
    ear.scale.set(0.34, 1.05, 0.6);
    ear.position.set(sx * 0.152, 0.006, -0.004);
    head.add(ear);
    const lobe = new THREE.Mesh(new THREE.SphereGeometry(0.013, 8, 6), skinDark);
    lobe.scale.set(0.45, 0.85, 0.65);
    lobe.position.set(sx * 0.152, -0.024, -0.002);
    head.add(lobe);
  }

  const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.008, 0.034, 3, 8), mat(0x5c3026, { roughness: 0.55 }));
  mouth.rotation.z = Math.PI / 2;
  mouth.position.set(0, -0.105, 0.142);
  head.add(mouth);

  // Hair: one swept cap with a few broad locks. Small round lumps read as
  // gravel at gameplay distance, so the locks are flattened and aligned.
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.171, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.47),
    hairCol,
  );
  hairCap.position.set(0, 0.052, -0.016);
  hairCap.scale.set(1.06, 1.0, 1.1);
  addPart(hairCap, head);
  const locks: [number, number, number, number, number][] = [
    [0, 0.15, 0.062, 0.082, 0.5],
    [-0.078, 0.142, 0.05, 0.074, 0.35],
    [0.078, 0.142, 0.05, 0.074, -0.35],
    [-0.128, 0.098, -0.01, 0.07, 0.2],
    [0.128, 0.098, -0.01, 0.07, -0.2],
    [-0.072, 0.122, -0.108, 0.078, 0.1],
    [0.072, 0.122, -0.108, 0.078, -0.1],
    [0, 0.1, -0.152, 0.082, 0],
  ];
  for (const [x, y, z, s, tilt] of locks) {
    const lock = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), hairCol);
    lock.position.set(x, y, z);
    lock.rotation.set(-0.4 + z * 1.2, x * 1.6, tilt);
    lock.scale.set(1.1, 0.52, 1.25);
    head.add(lock);
  }
  const fringe = new THREE.Mesh(new THREE.IcosahedronGeometry(0.082, 0), hairCol);
  fringe.scale.set(1.6, 0.3, 0.62);
  fringe.rotation.set(0.42, 0, 0.12);
  fringe.position.set(0.014, 0.125, 0.098);
  head.add(fringe);
  torso.add(head);

  const toolRoot = new THREE.Group();
  toolRoot.name = 'toolRoot';
  toolRoot.visible = false;
  const armR = torso.getObjectByName('armR') as THREE.Group;
  const handR = armR.getObjectByName('handR') as THREE.Group;
  const gripR = handR.getObjectByName('grip') as THREE.Group;
  gripR.add(toolRoot);
  poseToolRoot(toolRoot, null);

  const hatchet = createHatchetTool();
  hatchet.name = 'tool_hatchet';
  hatchet.visible = false;
  toolRoot.add(hatchet);
  const pickaxe = createPickaxeTool();
  pickaxe.name = 'tool_pickaxe';
  pickaxe.visible = false;
  toolRoot.add(pickaxe);
  const sword = createSwordTool();
  sword.name = 'tool_sword';
  sword.visible = false;
  toolRoot.add(sword);

  return g;
}

/** Steel that reads as a forged edge rather than a flat grey slab. */
/**
 * Stylised steel. Metalness stays well below 1 on purpose: a near-pure metal
 * takes almost all its colour from reflections, so every face turned away from
 * the key light went black and each part of a tool head read as a separate dark
 * block instead of one piece of forged metal.
 */
function steel(tint = 0xc2cedc, extra: PhysOpts = {}): THREE.MeshPhysicalMaterial {
  return mat(tint, {
    metalness: 0.42,
    roughness: 0.28,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
    envMapIntensity: 1.0,
    ...extra,
  });
}

/** Wrapped wooden haft with a swell at the butt so the fist has something to hold. */
function makeHaft(len: number, topR: number, buttR: number): THREE.Group {
  const g = new THREE.Group();
  const grain = mat(0x6a4420, { roughness: 0.78, clearcoat: 0.1, clearcoatRoughness: 0.7 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(topR, topR * 1.06, len, 12), grain);
  shaft.position.y = len * 0.5;
  addPart(shaft, g);
  const swell = new THREE.Mesh(new THREE.SphereGeometry(buttR, 10, 8), grain);
  swell.scale.set(1, 1.35, 1);
  addPart(swell, g);
  const wrapMat = mat(0x3a2414, { roughness: 0.88 });
  for (let i = 0; i < 5; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(topR * 1.12, 0.007, 5, 10), wrapMat);
    band.rotation.x = Math.PI / 2;
    band.rotation.z = i * 0.4;
    band.position.y = 0.03 + i * 0.032;
    g.add(band);
  }
  return g;
}

export function createHatchetTool(): THREE.Group {
  const g = new THREE.Group();
  // Origin sits a thumb's width up the haft, where the fist actually closes.
  const haft = makeHaft(0.46, 0.021, 0.03);
  haft.position.y = -0.06;
  g.add(haft);

  const head = new THREE.Group();
  head.position.y = 0.36;

  const eye = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.11, 10), steel(0x8f9ba8));
  eye.scale.set(0.68, 1, 1);
  addPart(eye, head);

  // Bit profile drawn in the swing plane: x runs out to the edge, y is the
  // beard/toe flare. The extrude depth is the blade's thin side-to-side axis.
  const bitShape = new THREE.Shape();
  bitShape.moveTo(0.0, -0.046);
  bitShape.lineTo(0.075, -0.058);
  bitShape.lineTo(0.155, -0.112);
  bitShape.lineTo(0.192, -0.092);
  bitShape.lineTo(0.2, 0.082);
  bitShape.lineTo(0.15, 0.096);
  bitShape.lineTo(0.065, 0.054);
  bitShape.lineTo(0.0, 0.046);
  bitShape.closePath();
  // A thin extrusion under a deep bevel gives the cross-section its wedge. The
  // slab this replaced was a constant 0.04 thick and read as a sledgehammer.
  const bit = new THREE.Mesh(
    new THREE.ExtrudeGeometry(bitShape, {
      depth: 0.008,
      bevelEnabled: true,
      bevelSize: 0.013,
      bevelThickness: 0.017,
      bevelSegments: 2,
    }),
    steel(0xb2c0d0),
  );
  bit.rotation.y = -Math.PI / 2;
  bit.position.set(0.021, 0, 0);
  addPart(bit, head);

  // Bright honed edge along the bit's leading face.
  // Deliberately low metalness: a mirror-finish edge reflects the dark sky and
  // renders as a black bar welded to the end of the bit.
  const edge = new THREE.Mesh(
    new THREE.BoxGeometry(0.007, 0.185, 0.01),
    mat(0xeaf2fb, { metalness: 0.22, roughness: 0.16, clearcoat: 0.6, envMapIntensity: 0.9 }),
  );
  edge.name = 'toolEdge';
  edge.position.set(0, -0.006, 0.206);
  edge.rotation.x = 0.06;
  head.add(edge);

  // A small hammer butt. Anything chunkier balances the bit and the whole head
  // reads as a double-ended maul.
  const poll = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.058, 0.038), steel(0x93a0ae, { roughness: 0.34 }));
  poll.name = 'toolHeel';
  poll.position.set(0, 0.004, -0.042);
  addPart(poll, head);
  const wedge = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.01, 0.014), steel(0x5e6a76, { roughness: 0.5 }));
  wedge.position.set(0, 0.052, 0.004);
  head.add(wedge);

  g.add(head);
  return g;
}

export function createPickaxeTool(): THREE.Group {
  const g = new THREE.Group();
  const haft = makeHaft(0.52, 0.021, 0.03);
  haft.position.y = -0.07;
  g.add(haft);

  const head = new THREE.Group();
  head.position.y = 0.43;

  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.038, 0.09, 10), steel(0x8a95a2));
  addPart(collar, head);

  // Curved pick arm plus a stubby chisel on the opposite side. The arm has to
  // reach well past the haft or the whole head reads as a claw hammer.
  for (let i = 0; i < 6; i++) {
    const t = i / 5;
    const seg = new THREE.Mesh(
      new THREE.BoxGeometry(0.058 - t * 0.034, 0.056 - t * 0.031, 0.062 - t * 0.032),
      steel(0x9aa8b8 - i * 0x030303),
    );
    seg.position.set(0, 0.02 - t * t * 0.125, 0.055 + t * 0.2);
    seg.rotation.x = t * 0.72;
    addPart(seg, head);
  }
  const spike = new THREE.Mesh(
    new THREE.ConeGeometry(0.018, 0.085, 6),
    mat(0xe4ecf4, { metalness: 0.24, roughness: 0.18, clearcoat: 0.5, envMapIntensity: 0.9 }),
  );
  spike.name = 'toolEdge';
  spike.rotation.x = Math.PI * 0.66;
  spike.position.set(0, -0.128, 0.292);
  addPart(spike, head);

  const chisel = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.048, 0.17), steel(0x8a95a2));
  chisel.name = 'toolHeel';
  chisel.position.set(0, 0.014, -0.088);
  chisel.rotation.x = -0.22;
  addPart(chisel, head);
  const chiselEdge = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.012, 0.02),
    mat(0xdfe8f2, { metalness: 0.24, roughness: 0.18, clearcoat: 0.5, envMapIntensity: 0.9 }),
  );
  chiselEdge.position.set(0, 0.042, -0.175);
  head.add(chiselEdge);

  g.add(head);
  return g;
}

export function createSwordTool(): THREE.Group {
  const g = new THREE.Group();
  const gold = mat(0xd8b458, { metalness: 0.78, roughness: 0.26, clearcoat: 0.4, envMapIntensity: 1.2 });

  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.023, 0.17, 10), mat(0x4a2a12, { roughness: 0.8 }));
  addPart(core, g);
  const cordMat = mat(0x2e1c10, { roughness: 0.9 });
  for (let i = 0; i < 7; i++) {
    const cord = new THREE.Mesh(new THREE.TorusGeometry(0.024, 0.006, 5, 10), cordMat);
    cord.rotation.x = Math.PI / 2;
    cord.rotation.y = i * 0.3;
    cord.position.y = -0.062 + i * 0.021;
    g.add(cord);
  }

  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.031, 12, 10), gold);
  pommel.name = 'toolHeel';
  pommel.scale.set(1, 0.85, 1);
  pommel.position.y = -0.098;
  addPart(pommel, g);
  const pommelCap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.026, 0.016, 10), gold);
  pommelCap.position.y = -0.076;
  g.add(pommelCap);

  // Cross-guard sweeps toward the blade instead of sitting as a plain bar.
  const guardShape = new THREE.Shape();
  guardShape.moveTo(-0.1, 0);
  guardShape.quadraticCurveTo(-0.05, 0.034, 0, 0.018);
  guardShape.quadraticCurveTo(0.05, 0.034, 0.1, 0);
  guardShape.quadraticCurveTo(0.05, -0.02, 0, -0.016);
  guardShape.quadraticCurveTo(-0.05, -0.02, -0.1, 0);
  const guard = new THREE.Mesh(
    new THREE.ExtrudeGeometry(guardShape, { depth: 0.036, bevelEnabled: true, bevelSize: 0.005, bevelThickness: 0.004, bevelSegments: 1 }),
    gold,
  );
  guard.position.set(0, 0.092, -0.018);
  addPart(guard, g);
  const ricasso = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.05, 0.026), steel(0xaab6c4));
  ricasso.position.y = 0.128;
  addPart(ricasso, g);

  // Tapered blade built from stacked slices so it narrows toward the point.
  const bladeMat = steel(0xd4e0ec, { roughness: 0.14, clearcoat: 0.6, emissive: 0x1d2c3c, emissiveIntensity: 0.1 });
  const slices = 6;
  for (let i = 0; i < slices; i++) {
    const t = i / slices;
    const w = 0.044 - t * 0.016;
    const slice = new THREE.Mesh(new THREE.BoxGeometry(w, 0.58 / slices + 0.004, 0.013 - t * 0.004), bladeMat);
    slice.position.y = 0.17 + (0.58 / slices) * (i + 0.5);
    addPart(slice, g);
  }
  const fuller = new THREE.Mesh(
    new THREE.BoxGeometry(0.011, 0.44, 0.017),
    steel(0x9fb0c2, { roughness: 0.3, clearcoat: 0.3 }),
  );
  fuller.position.y = 0.4;
  g.add(fuller);
  for (const sx of [-1, 1]) {
    const bevel = new THREE.Mesh(
      new THREE.BoxGeometry(0.006, 0.58, 0.009),
      steel(0xf4f9ff, { roughness: 0.08, clearcoat: 0.75 }),
    );
    bevel.position.set(sx * 0.019, 0.46, 0);
    g.add(bevel);
  }
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.12, 4), bladeMat);
  tip.name = 'toolEdge';
  tip.rotation.y = Math.PI / 4;
  tip.scale.set(1, 1, 0.42);
  tip.position.y = 0.81;
  addPart(tip, g);
  return g;
}

/**
 * Seat a tool in the fist. The handle always runs along the grip group's +X so
 * the fingers close around it; aiming the weapon is the wrist's job, not this
 * transform's. rotation.y cants the handle forward, rotation.x rolls the head.
 */
function poseToolRoot(root: THREE.Object3D, tool: 'hatchet' | 'pickaxe' | 'sword' | null): void {
  root.position.copy(GRIP_POINT);
  if (tool === 'hatchet') {
    root.rotation.set(0.12, -0.14, -Math.PI / 2);
  } else if (tool === 'pickaxe') {
    root.rotation.set(0.08, -0.1, -Math.PI / 2);
  } else {
    root.rotation.set(0, -0.1, -Math.PI / 2);
  }
}

export function poseEquippedTool(player: THREE.Group): void {
  const root = player.getObjectByName('toolRoot');
  if (!root || !root.visible) return;
  const sword = root.getObjectByName('tool_sword');
  const hatchet = root.getObjectByName('tool_hatchet');
  const pickaxe = root.getObjectByName('tool_pickaxe');
  const kind = sword?.visible ? 'sword' : hatchet?.visible ? 'hatchet' : pickaxe?.visible ? 'pickaxe' : null;
  poseToolRoot(root, kind);
}

export function setPlayerTool(player: THREE.Group, tool: 'hatchet' | 'pickaxe' | 'sword' | null): void {
  const root = player.getObjectByName('toolRoot');
  if (!root) return;
  root.visible = tool !== null;
  for (const name of ['tool_hatchet', 'tool_pickaxe', 'tool_sword']) {
    const t = root.getObjectByName(name);
    if (t) t.visible = name === `tool_${tool}`;
  }
  poseToolRoot(root, tool);
}
