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
      const r = 48 + tone * 110;
      const g = 28 + tone * 62;
      const b = 16 + tone * 32;
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
        r: 28 + tone * 40,
        g: 32 + tone * 46,
        b: 30 + tone * 38,
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
      const r = 198 + n * 28 - freck * 18;
      const g = 148 + n * 18 - freck * 14;
      const b = 112 + n * 12 - freck * 10;
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
    emissive: new THREE.Color(0x3a1810),
    emissiveIntensity: 0.02,
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

function makeHand(
  skin: THREE.Material,
  leather: THREE.Material,
  grip: 'open' | 'spear' | 'fist',
): THREE.Group {
  const hand = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.CapsuleGeometry(0.038, 0.04, 4, 8), leather);
  palm.rotation.x = Math.PI / 2;
  palm.scale.set(1.15, 0.85, 1.25);
  palm.castShadow = true;
  hand.add(palm);
  const curl = grip === 'fist' ? 1.05 : grip === 'spear' ? 0.72 : 0.22;
  for (let i = 0; i < 4; i++) {
    const knuckle = new THREE.Mesh(new THREE.CapsuleGeometry(0.01, 0.022, 3, 6), leather);
    knuckle.position.set(-0.034 + i * 0.022, -0.048, 0.028);
    knuckle.rotation.x = curl * 0.35;
    knuckle.castShadow = true;
    hand.add(knuckle);
    const tip = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.028, 3, 6), skin);
    tip.position.set(-0.034 + i * 0.022, -0.078, 0.04);
    tip.rotation.x = curl;
    tip.castShadow = true;
    hand.add(tip);
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.032, 3, 6), skin);
  thumb.position.set(-0.052, -0.01, 0.02);
  thumb.rotation.z = 0.85;
  thumb.rotation.x = 0.4;
  hand.add(thumb);
  return hand;
}

/**
 * Male hunter — Drive-ref faceted leather outfit, spiky fur, plantigrade idle.
 */
export function createPlayerMesh(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'player';
  g.userData.locomotionY = 0;

  const skin = skinMat(0xd4a07a);
  const skinDark = skinMat(0xb8845e, { roughness: 0.56 });
  const hairCol = mat(0x1a120c, {
    roughness: 0.94,
    sheen: 0.22,
    sheenColor: new THREE.Color(0x3a2818),
    flatShading: true,
  });
  const leather = leatherMat(0x5a3a22);
  const leatherDark = leatherMat(0x2e1c10, { roughness: 0.78, clearcoat: 0.04 });
  const leatherMid = leatherMat(0x7a4e2c, { roughness: 0.58, clearcoat: 0.12 });
  const fur = mat(0xb08a58, {
    roughness: 0.92,
    metalness: 0,
    sheen: 0.22,
    sheenColor: new THREE.Color(0xc8a070),
    sheenRoughness: 0.7,
    envMapIntensity: 0.12,
    flatShading: true,
  });
  const furDark = mat(0x6a4a28, {
    roughness: 0.95,
    sheen: 0.16,
    sheenColor: new THREE.Color(0x8a6038),
    flatShading: true,
  });
  const furMid = mat(0x8e6840, {
    roughness: 0.93,
    sheen: 0.18,
    sheenColor: new THREE.Color(0xaa8048),
    flatShading: true,
  });
  const cloth = clothMat(0x3a403c);
  const clothDark = clothMat(0x2a302c);
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
  const wood = mat(0x6a4824, { roughness: 0.72, clearcoat: 0.12, clearcoatRoughness: 0.6, envMapIntensity: 0.4 });

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
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.028, 0.3), mat(0x140e0a, { roughness: 0.96 }));
    sole.position.set(0, -0.026, 0.1);
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
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), leatherMid);
    pad.scale.set(1.35, 0.7, 1.15);
    pad.position.set(sx * 0.22, 0.2, 0.01);
    pad.rotation.z = sx * -0.4;
    addPart(pad, torso);
    const bridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.1, 4, 8), skin);
    bridge.rotation.z = sx * (Math.PI / 2);
    bridge.position.set(sx * 0.2, 0.18, 0);
    addPart(bridge, torso);
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
    clav.position.set(side * 0.16, 0.2, 0);

    const arm = new THREE.Group();
    arm.name = side < 0 ? 'armL' : 'armR';
    arm.position.set(side * 0.06, 0, 0);

    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), skin);
    deltoid.scale.set(1.2, 0.9, 1.05);
    deltoid.position.set(-side * 0.05, 0.02, 0);
    addPart(deltoid, arm);

    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.2, 4, 10), skin);
    upper.position.set(0, -0.16, 0);
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

    const hand = makeHand(skin, leather, side < 0 ? 'spear' : 'fist');
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

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.165, 20, 16), skin);
  skull.scale.set(0.96, 1.06, 0.92);
  addPart(skull, head);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.118, 14, 12), skinDark);
  jaw.scale.set(1.02, 0.7, 0.92);
  jaw.position.set(0, -0.095, 0.045);
  addPart(jaw, head);

  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), skinDark);
  chin.scale.set(1.15, 0.85, 1.1);
  chin.position.set(0, -0.155, 0.11);
  head.add(chin);

  const stubble = new THREE.Mesh(
    new THREE.SphereGeometry(0.088, 8, 6),
    mat(0x4a382c, { roughness: 0.95, sheen: 0.2, sheenColor: new THREE.Color(0x2a1c14) }),
  );
  stubble.scale.set(1.05, 0.45, 0.55);
  stubble.position.set(0, -0.12, 0.12);
  head.add(stubble);

  for (const sx of [-1, 1]) {
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.052, 8, 6), skinDark);
    cheek.scale.set(0.7, 1, 0.85);
    cheek.position.set(sx * 0.11, -0.02, 0.09);
    head.add(cheek);
  }

  const nose = new THREE.Mesh(
    latheBody(
      [
        [0.008, 0.05],
        [0.016, 0.02],
        [0.022, -0.01],
        [0.012, -0.03],
      ],
      8,
    ),
    skinDark,
  );
  nose.rotation.x = 0.15;
  nose.position.set(0, -0.01, 0.155);
  head.add(nose);

  for (const sx of [-1, 1]) {
    const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.05, 3, 8), hairCol);
    brow.rotation.z = Math.PI / 2 + sx * -0.18;
    brow.position.set(sx * 0.055, 0.055, 0.145);
    head.add(brow);

    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), mat(0x1a100c, { roughness: 0.8 }));
    socket.position.set(sx * 0.05, 0.02, 0.128);
    head.add(socket);
    const sclera = new THREE.Mesh(new THREE.CircleGeometry(0.018, 12), mat(0xe8ddd0, { roughness: 0.4 }));
    sclera.position.set(sx * 0.05, 0.02, 0.158);
    head.add(sclera);
    const iris = new THREE.Mesh(
      new THREE.CircleGeometry(0.011, 12),
      mat(0x4a301c, { roughness: 0.45, emissive: 0x2a180c, emissiveIntensity: 0.15 }),
    );
    iris.position.set(sx * 0.05, 0.02, 0.162);
    head.add(iris);
    const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.005, 10), mat(0x080604));
    pupil.position.set(sx * 0.05, 0.02, 0.164);
    head.add(pupil);

    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), skin);
    ear.scale.set(0.45, 1.15, 0.7);
    ear.position.set(sx * 0.162, 0.01, -0.01);
    head.add(ear);
  }

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.016), mat(0x6a3028, { roughness: 0.5 }));
  mouth.position.set(0, -0.11, 0.155);
  head.add(mouth);

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.172, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.58), hairCol);
  hairCap.position.set(0, 0.04, -0.02);
  hairCap.scale.set(1.06, 0.88, 1.08);
  addPart(hairCap, head);
  const hairClumps: [number, number, number, number][] = [
    [0, 0.16, 0.04, 0.07],
    [-0.08, 0.14, 0.05, 0.06],
    [0.08, 0.14, 0.05, 0.06],
    [-0.1, 0.12, -0.04, 0.055],
    [0.1, 0.12, -0.04, 0.055],
    [0, 0.14, -0.1, 0.065],
    [-0.05, 0.17, -0.02, 0.05],
    [0.05, 0.17, -0.02, 0.05],
  ];
  for (const [x, y, z, s] of hairClumps) {
    const clump = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), hairCol);
    clump.position.set(x, y, z);
    clump.rotation.set(z * 0.5, x * 1.2, 0);
    clump.scale.set(1.15, 0.9, 1.05);
    head.add(clump);
  }
  torso.add(head);

  const idleSpear = createIdleSpear(wood, leatherDark, metal);
  idleSpear.name = 'idleSpear';
  const armL = torso.getObjectByName('armL') as THREE.Group;
  const handL = armL.getObjectByName('handL') as THREE.Group;
  idleSpear.position.set(0.02, -0.5, 0.02);
  idleSpear.rotation.set(0.04, 0.02, 0.03);
  handL.add(idleSpear);

  const toolRoot = new THREE.Group();
  toolRoot.name = 'toolRoot';
  toolRoot.visible = false;
  const armR = torso.getObjectByName('armR') as THREE.Group;
  const handR = armR.getObjectByName('handR') as THREE.Group;
  handR.add(toolRoot);
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

function createIdleSpear(
  wood: THREE.MeshPhysicalMaterial,
  leatherDark: THREE.MeshPhysicalMaterial,
  metal: THREE.MeshPhysicalMaterial,
): THREE.Group {
  const idleSpear = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 1.92, 6), wood);
  shaft.position.y = 0.58;
  shaft.castShadow = true;
  idleSpear.add(shaft);
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.03, 0.14, 6), leatherDark);
  wrap.position.y = 0.16;
  idleSpear.add(wrap);
  const binding = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.032, 0.08, 6), leatherDark);
  binding.position.y = 1.38;
  idleSpear.add(binding);
  const tipCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), metal);
  tipCore.scale.set(0.38, 1.85, 0.26);
  tipCore.position.y = 1.64;
  tipCore.castShadow = true;
  idleSpear.add(tipCore);
  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.016, 0.34, 0.08),
    mat(0xf2f6fa, { metalness: 0.94, roughness: 0.12, clearcoat: 0.45 }),
  );
  ridge.position.y = 1.64;
  idleSpear.add(ridge);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.032, 0.08, 6), metal);
  tipCollar.position.y = 1.42;
  idleSpear.add(tipCollar);
  for (const sx of [-1, 1]) {
    const barb = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.14, 4), metal);
    barb.position.set(sx * 0.055, 1.52, 0);
    barb.rotation.z = sx * 1.12;
    idleSpear.add(barb);
  }
  const tipEdge = new THREE.Mesh(
    new THREE.ConeGeometry(0.048, 0.18, 4),
    mat(0xf4f8fc, { metalness: 0.9, roughness: 0.12, clearcoat: 0.5 }),
  );
  tipEdge.position.y = 1.86;
  idleSpear.add(tipEdge);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.1, 4), metal);
  butt.rotation.x = Math.PI;
  butt.position.y = -0.42;
  idleSpear.add(butt);
  return idleSpear;
}

function createHatchetTool(): THREE.Group {
  const g = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.55, 10), mat(0x6a4420, { roughness: 0.75 }));
  handle.rotation.z = 0.35;
  g.add(handle);
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.12, 0.035),
    mat(0xb0c0d0, { metalness: 0.72, roughness: 0.28, clearcoat: 0.35 }),
  );
  blade.position.set(0.12, 0.22, 0);
  blade.rotation.z = 0.35;
  g.add(blade);
  return g;
}

function createPickaxeTool(): THREE.Group {
  const g = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.6, 10), mat(0x6a4420, { roughness: 0.75 }));
  handle.rotation.z = -0.2;
  g.add(handle);
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.07, 0.05),
    mat(0x9aa8b8, { metalness: 0.65, roughness: 0.32, clearcoat: 0.25 }),
  );
  head.position.set(0.05, 0.28, 0);
  g.add(head);
  return g;
}

function createSwordTool(): THREE.Group {
  const g = new THREE.Group();
  const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.16, 10), mat(0x5a3214, { roughness: 0.75 }));
  g.add(hilt);
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.05, 10), mat(0x3a2414, { roughness: 0.85 }));
  wrap.position.y = 0.02;
  g.add(wrap);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), mat(0xd4b050, { metalness: 0.68, roughness: 0.3 }));
  pommel.position.y = -0.1;
  g.add(pommel);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.032, 0.04), mat(0xd4b050, { metalness: 0.7, roughness: 0.28 }));
  guard.position.y = 0.09;
  g.add(guard);
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.038, 0.58, 0.012),
    mat(0xd0dce8, { metalness: 0.88, roughness: 0.16, clearcoat: 0.55, emissive: 0x223344, emissiveIntensity: 0.08 }),
  );
  blade.position.y = 0.4;
  g.add(blade);
  const fuller = new THREE.Mesh(
    new THREE.BoxGeometry(0.01, 0.46, 0.014),
    mat(0xe8eef4, { metalness: 0.9, roughness: 0.12, clearcoat: 0.5 }),
  );
  fuller.position.y = 0.38;
  g.add(fuller);
  const tip = new THREE.Mesh(
    new THREE.ConeGeometry(0.028, 0.1, 8),
    mat(0xe4eef6, { metalness: 0.92, roughness: 0.12, clearcoat: 0.6 }),
  );
  tip.position.y = 0.73;
  g.add(tip);
  return g;
}

function poseToolRoot(root: THREE.Object3D, tool: 'hatchet' | 'pickaxe' | 'sword' | null): void {
  if (tool === 'sword') {
    // Hammer grip: blade leaves the fist forward, then reads upright once the elbow bends.
    root.position.set(0.012, -0.018, 0.038);
    root.rotation.set(Math.PI / 2, 0.16, 0.22);
  } else if (tool === 'hatchet') {
    root.position.set(0.02, -0.02, 0.03);
    root.rotation.set(1.25, 0.2, 0.45);
  } else if (tool === 'pickaxe') {
    root.position.set(0.02, -0.02, 0.03);
    root.rotation.set(1.2, -0.15, 0.2);
  } else {
    root.position.set(0.012, -0.018, 0.038);
    root.rotation.set(Math.PI / 2, 0.16, 0.22);
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
  const spear = player.getObjectByName('idleSpear');
  if (spear) spear.visible = tool === null;
  poseToolRoot(root, tool);
}
