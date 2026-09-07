import * as THREE from 'three';

type PhysOpts = Partial<THREE.MeshPhysicalMaterialParameters>;

const matCache = new Map<string, THREE.MeshPhysicalMaterial>();

function mat(color: number, opts: PhysOpts = {}): THREE.MeshPhysicalMaterial {
  const key = `${color}_${opts.roughness ?? 0.62}_${opts.metalness ?? 0.06}_${opts.clearcoat ?? 0}_${opts.sheen ?? 0}_${opts.emissive ?? 0}_${opts.emissiveIntensity ?? 0}_${opts.envMapIntensity ?? 1}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      roughness: opts.roughness ?? 0.62,
      metalness: opts.metalness ?? 0.06,
      envMapIntensity: opts.envMapIntensity ?? 1,
      flatShading: false,
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
    bumpScale: 0.035,
    roughness: 0.58,
    metalness: 0.08,
    clearcoat: 0.16,
    clearcoatRoughness: 0.55,
    sheen: 0.22,
    sheenColor: new THREE.Color(0x6a4028),
    sheenRoughness: 0.7,
    envMapIntensity: 0.9,
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
    envMapIntensity: 0.45,
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
    emissiveIntensity: 0.035,
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

function latheBody(radii: [number, number][], segs = 20): THREE.LatheGeometry {
  const pts = radii.map(([r, y]) => new THREE.Vector2(r, y));
  return new THREE.LatheGeometry(pts, segs);
}

function squareBuckle(size: number, thick: number, hole: number, metal: THREE.Material): THREE.Mesh {
  const s = size / 2;
  const h = hole / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-s, -s);
  shape.lineTo(s, -s);
  shape.lineTo(s, s);
  shape.lineTo(-s, s);
  shape.lineTo(-s, -s);
  const inner = new THREE.Path();
  inner.moveTo(-h, -h);
  inner.lineTo(-h, h);
  inner.lineTo(h, h);
  inner.lineTo(h, -h);
  inner.lineTo(-h, -h);
  shape.holes.push(inner);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: thick,
    bevelEnabled: true,
    bevelThickness: 0.006,
    bevelSize: 0.005,
    bevelSegments: 2,
    curveSegments: 1,
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, metal);
  mesh.castShadow = true;
  return mesh;
}

/** Dense smooth fur tufts for collar, cuffs, and boot rims */
function addFurFringe(
  parent: THREE.Object3D,
  cx: number,
  cy: number,
  cz: number,
  radius: number,
  count: number,
  length: number,
  fur: THREE.Material,
  furDark: THREE.Material,
  furMid: THREE.Material,
  upBias = 0.55,
): void {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + (i % 5) * 0.03;
    const ring = radius * (0.86 + (i % 4) * 0.045);
    const len = length * (0.7 + (i % 7) * 0.05);
    const rad = 0.01 + (i % 3) * 0.004;
    const tuft = new THREE.Mesh(new THREE.CapsuleGeometry(rad, len, 4, 7), i % 4 === 0 ? furDark : i % 3 === 0 ? furMid : fur);
    tuft.position.set(cx + Math.cos(a) * ring, cy + len * 0.18, cz + Math.sin(a) * ring);
    tuft.rotation.z = -Math.cos(a) * upBias;
    tuft.rotation.x = Math.sin(a) * upBias;
    tuft.castShadow = true;
    parent.add(tuft);
  }
}

function makeHand(skin: THREE.Material, grip: 'open' | 'spear' | 'fist'): THREE.Group {
  const hand = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.CapsuleGeometry(0.042, 0.05, 4, 8), skin);
  palm.rotation.x = Math.PI / 2;
  palm.scale.set(1.15, 0.85, 1.35);
  palm.castShadow = true;
  hand.add(palm);
  const curl = grip === 'fist' ? 1.05 : grip === 'spear' ? 0.72 : 0.22;
  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.055, 3, 6), skin);
    f.position.set(-0.036 + i * 0.024, -0.062, 0.03);
    f.rotation.x = curl;
    f.castShadow = true;
    hand.add(f);
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.04, 3, 6), skin);
  thumb.position.set(-0.055, -0.012, 0.018);
  thumb.rotation.z = 0.85;
  thumb.rotation.x = 0.4;
  hand.add(thumb);
  return hand;
}

/**
 * Male hunter — Drive-ref leather outfit, RS3-like smooth PBR body and joints.
 */
export function createPlayerMesh(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'player';
  g.userData.locomotionY = 0;

  const skin = skinMat(0xe0b894);
  const skinDark = skinMat(0xc4926e, { roughness: 0.56 });
  const hairCol = mat(0x1a120c, { roughness: 0.92, sheen: 0.35, sheenColor: new THREE.Color(0x3a2818) });
  const leather = leatherMat(0x6a4a32);
  const leatherDark = leatherMat(0x3a2418, { roughness: 0.7, clearcoat: 0.08 });
  const leatherMid = leatherMat(0x8a5a38, { roughness: 0.52, clearcoat: 0.22 });
  const fur = mat(0xb08452, {
    roughness: 0.92,
    metalness: 0,
    sheen: 0.85,
    sheenColor: new THREE.Color(0xe0c090),
    sheenRoughness: 0.45,
    envMapIntensity: 0.25,
  });
  const furDark = mat(0x6a4428, { roughness: 0.95, sheen: 0.7, sheenColor: new THREE.Color(0xa07040) });
  const furMid = mat(0x8e5e34, { roughness: 0.93, sheen: 0.8, sheenColor: new THREE.Color(0xc09058) });
  const cloth = clothMat(0x8a9488);
  const clothDark = clothMat(0x5a6458);
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
    emissive: 0xb8c8d8,
    emissiveIntensity: 0.18,
    envMapIntensity: 1.5,
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
    hip.position.set(side * 0.125, 0.92, 0);

    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.22, 6, 14), cloth);
    thigh.position.set(0, -0.2, 0);
    addPart(thigh, hip);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'shinL' : 'shinR';
    shin.position.set(0, -0.42, 0);

    const calf = new THREE.Mesh(new THREE.CapsuleGeometry(0.082, 0.16, 5, 12), clothDark);
    calf.position.set(0, -0.12, 0.01);
    addPart(calf, shin);

    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.2, 5, 12), leather);
    boot.position.set(0, -0.22, 0.018);
    addPart(boot, shin);

    for (let i = 0; i < 3; i++) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.112, 0.012, 8, 16), leatherMid);
      strap.rotation.x = Math.PI / 2;
      strap.position.set(0, -0.1 - i * 0.085, 0.018);
      shin.add(strap);
    }

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'footL' : 'footR';
    foot.position.set(0, -0.4, 0.02);
    const toe = new THREE.Mesh(new THREE.CapsuleGeometry(0.072, 0.16, 5, 10), leatherDark);
    toe.rotation.x = Math.PI / 2;
    toe.position.set(0, 0.02, 0.1);
    toe.scale.set(1.15, 1, 0.7);
    addPart(toe, foot);
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.3), mat(0x140e0a, { roughness: 0.96 }));
    sole.position.set(0, -0.018, 0.08);
    foot.add(sole);
    shin.add(foot);

    addFurFringe(shin, 0, -0.01, 0.02, 0.11, 16, 0.07, fur, furDark, furMid, 0.7);
    addFurFringe(shin, 0, -0.3, 0.04, 0.1, 14, 0.055, fur, furDark, furMid, 0.55);

    hip.add(shin);
    return hip;
  };
  hips.add(makeLeg(-1));
  hips.add(makeLeg(1));

  const pelvis = new THREE.Mesh(latheBody([[0.2, -0.1], [0.24, -0.02], [0.22, 0.1]], 18), leather);
  pelvis.position.y = 0.92;
  addPart(pelvis, hips);

  for (const [z, ry] of [
    [0.15, 0],
    [-0.15, Math.PI],
  ] as const) {
    const flap = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.12, 4, 10), leatherDark);
    flap.scale.set(1.55, 1, 0.45);
    flap.position.set(0, 0.78, z);
    flap.rotation.y = ry;
    addPart(flap, hips);
  }
  for (const sx of [-1, 1]) {
    const flap = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.1, 4, 8), leatherMid);
    flap.scale.set(0.55, 1, 1.3);
    flap.position.set(sx * 0.2, 0.78, 0);
    addPart(flap, hips);
  }

  const torso = new THREE.Group();
  torso.name = 'playerTorso';
  torso.position.y = 1.18;
  g.add(torso);

  const vest = new THREE.Mesh(
    latheBody(
      [
        [0.2, -0.3],
        [0.255, -0.18],
        [0.28, -0.02],
        [0.3, 0.12],
        [0.26, 0.24],
        [0.16, 0.32],
      ],
      22,
    ),
    leather,
  );
  addPart(vest, torso);

  const pecs = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), leatherMid);
  pecs.scale.set(1.35, 0.72, 0.55);
  pecs.position.set(0, 0.08, 0.12);
  addPart(pecs, torso);

  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.255, 0.038, 10, 22), leatherDark);
  belt.rotation.x = Math.PI / 2;
  belt.position.y = -0.26;
  torso.add(belt);
  const beltBuckle = squareBuckle(0.1, 0.028, 0.042, metalBright);
  beltBuckle.position.set(0, -0.26, 0.27);
  torso.add(beltBuckle);

  const makeStrap = (rotZ: number, z: number) => {
    const strap = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.46, 4, 8), leatherDark);
    strap.position.set(0, 0.02, z);
    strap.rotation.z = rotZ;
    strap.castShadow = true;
    torso.add(strap);
  };
  makeStrap(0.5, 0.2);
  makeStrap(-0.5, 0.2);
  makeStrap(0.5, -0.16);
  makeStrap(-0.5, -0.16);

  const bucklePad = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.13, 0.03), leatherDark);
  bucklePad.position.set(0, 0.05, 0.24);
  torso.add(bucklePad);
  const chestBuckle = squareBuckle(0.115, 0.032, 0.05, metalBright);
  chestBuckle.name = 'chestBuckle';
  chestBuckle.position.set(0, 0.05, 0.28);
  torso.add(chestBuckle);

  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), leatherMid);
    pad.scale.set(1.15, 0.55, 1.05);
    pad.position.set(sx * 0.26, 0.24, 0.02);
    pad.rotation.z = sx * -0.28;
    addPart(pad, torso);
  }

  const collarBase = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.075, 10, 22), furMid);
  collarBase.rotation.x = Math.PI / 2;
  collarBase.position.set(0, 0.26, 0.01);
  collarBase.scale.set(1.22, 1.05, 0.95);
  addPart(collarBase, torso);
  addFurFringe(torso, 0, 0.28, 0.01, 0.26, 28, 0.13, fur, furDark, furMid, 0.62);
  addFurFringe(torso, 0, 0.34, -0.03, 0.2, 18, 0.1, fur, furDark, furMid, 0.5);
  for (const sx of [-1, 1]) {
    addFurFringe(torso, sx * 0.28, 0.2, 0.03, 0.1, 12, 0.1, fur, furDark, furMid, 0.7);
  }

  const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.08, 5, 12), skin);
  neck.position.set(0, 0.34, 0.01);
  addPart(neck, torso);

  const makeArm = (side: number) => {
    const clav = new THREE.Group();
    clav.name = side < 0 ? 'clavL' : 'clavR';
    clav.position.set(side * 0.12, 0.22, 0);

    const arm = new THREE.Group();
    arm.name = side < 0 ? 'armL' : 'armR';
    arm.position.set(side * 0.26, 0, 0);

    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), skin);
    deltoid.scale.set(1.12, 0.82, 1.05);
    addPart(deltoid, arm);

    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.078, 0.18, 5, 12), skin);
    upper.position.set(0, -0.15, 0);
    addPart(upper, arm);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'forearmL' : 'forearmR';
    forearm.position.set(0, -0.32, 0);

    const gauntlet = new THREE.Mesh(new THREE.CapsuleGeometry(0.078, 0.16, 5, 12), leather);
    gauntlet.position.set(0, -0.13, 0.012);
    addPart(gauntlet, forearm);
    for (let i = 0; i < 2; i++) {
      const s = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.011, 8, 14), leatherDark);
      s.rotation.x = Math.PI / 2;
      s.position.set(0, -0.05 - i * 0.09, 0.012);
      forearm.add(s);
    }
    addFurFringe(forearm, 0, 0.02, 0.015, 0.09, 14, 0.065, fur, furDark, furMid, 0.65);

    const hand = makeHand(skin, side < 0 ? 'spear' : 'fist');
    hand.name = side < 0 ? 'handL' : 'handR';
    hand.position.set(0, -0.3, 0.025);
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

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.168, 20, 16), skin);
  skull.scale.set(0.98, 1.08, 0.94);
  addPart(skull, head);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 12), skinDark);
  jaw.scale.set(1.02, 0.7, 0.92);
  jaw.position.set(0, -0.095, 0.045);
  addPart(jaw, head);

  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), skinDark);
  chin.scale.set(1.15, 0.85, 1.1);
  chin.position.set(0, -0.155, 0.11);
  head.add(chin);

  const stubble = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 10, 8),
    mat(0x4a382c, { roughness: 0.95, sheen: 0.2, sheenColor: new THREE.Color(0x2a1c14) }),
  );
  stubble.scale.set(1.05, 0.45, 0.55);
  stubble.position.set(0, -0.12, 0.12);
  head.add(stubble);

  for (const sx of [-1, 1]) {
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), skinDark);
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
      10,
    ),
    skinDark,
  );
  nose.rotation.x = 0.15;
  nose.position.set(0, -0.01, 0.155);
  head.add(nose);

  for (const sx of [-1, 1]) {
    const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.055, 3, 8), hairCol);
    brow.rotation.z = Math.PI / 2 + sx * -0.18;
    brow.position.set(sx * 0.055, 0.055, 0.145);
    head.add(brow);

    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.038, 10, 8), mat(0x1a100c, { roughness: 0.8 }));
    socket.position.set(sx * 0.052, 0.018, 0.132);
    head.add(socket);
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), mat(0xf2ebe0, { roughness: 0.28, metalness: 0.04 }));
    sclera.position.set(sx * 0.052, 0.018, 0.155);
    head.add(sclera);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 10, 8),
      mat(0x5a3c28, { roughness: 0.35, emissive: 0x3a2414, emissiveIntensity: 0.25 }),
    );
    iris.position.set(sx * 0.052, 0.018, 0.172);
    head.add(iris);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), mat(0x080604));
    pupil.position.set(sx * 0.052, 0.018, 0.184);
    head.add(pupil);
    const hl = new THREE.Mesh(
      new THREE.SphereGeometry(0.006, 6, 5),
      mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.85, roughness: 0.2 }),
    );
    hl.position.set(sx * 0.046, 0.026, 0.188);
    head.add(hl);

    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), skin);
    ear.scale.set(0.45, 1.15, 0.7);
    ear.position.set(sx * 0.162, 0.01, -0.01);
    head.add(ear);
  }

  const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.008, 0.05, 3, 8), mat(0x6a3028, { roughness: 0.45 }));
  mouth.rotation.z = Math.PI / 2;
  mouth.position.set(0, -0.11, 0.155);
  head.add(mouth);

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.58), hairCol);
  hairCap.position.set(0, 0.04, -0.02);
  hairCap.scale.set(1.05, 0.85, 1.08);
  addPart(hairCap, head);
  const spikePts: [number, number, number, number][] = [
    [0, 0.2, 0.02, 1.15],
    [-0.07, 0.19, 0.05, 1.0],
    [0.07, 0.19, 0.05, 1.0],
    [-0.12, 0.15, -0.02, 0.95],
    [0.12, 0.15, -0.02, 0.95],
    [0, 0.18, -0.12, 1.05],
    [-0.1, 0.14, -0.1, 0.9],
    [0.1, 0.14, -0.1, 0.9],
    [-0.05, 0.21, -0.04, 1.1],
    [0.05, 0.21, -0.04, 1.1],
    [0, 0.22, 0.06, 0.85],
    [-0.14, 0.1, 0.02, 0.8],
    [0.14, 0.1, 0.02, 0.8],
    [-0.04, 0.24, 0.0, 1.05],
    [0.04, 0.24, 0.0, 1.05],
    [0, 0.16, 0.1, 0.75],
    [-0.08, 0.17, -0.08, 0.88],
    [0.08, 0.17, -0.08, 0.88],
  ];
  for (const [x, y, z, s] of spikePts) {
    const spike = new THREE.Mesh(new THREE.CapsuleGeometry(0.022 * s, 0.09 * s, 3, 6), hairCol);
    spike.position.set(x, y, z);
    spike.rotation.x = z * 0.7 - 0.12;
    spike.rotation.z = -x * 1.15;
    head.add(spike);
  }
  torso.add(head);

  const idleSpear = createIdleSpear(wood, leatherDark, metal);
  idleSpear.name = 'idleSpear';
  const armL = torso.getObjectByName('armL') as THREE.Group;
  const forearmL = armL.getObjectByName('forearmL') as THREE.Group;
  idleSpear.position.set(-0.035, -0.26, 0.05);
  idleSpear.rotation.set(0.1, 0, 0.06);
  forearmL.add(idleSpear);

  const toolRoot = new THREE.Group();
  toolRoot.name = 'toolRoot';
  toolRoot.visible = false;
  const armR = torso.getObjectByName('armR') as THREE.Group;
  const forearmR = armR.getObjectByName('forearmR') as THREE.Group;
  toolRoot.position.set(0.02, -0.28, 0.07);
  forearmR.add(toolRoot);

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
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 1.72, 12), wood);
  shaft.position.y = 0.52;
  shaft.castShadow = true;
  idleSpear.add(shaft);
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.028, 0.16, 10), leatherDark);
  wrap.position.y = 0.12;
  idleSpear.add(wrap);
  const binding = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.03, 0.08, 10), leatherDark);
  binding.position.y = 1.26;
  idleSpear.add(binding);
  const tipCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 1), metal);
  tipCore.scale.set(0.42, 1.7, 0.28);
  tipCore.position.y = 1.5;
  tipCore.castShadow = true;
  idleSpear.add(tipCore);
  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.014, 0.28, 0.07),
    mat(0xf2f6fa, { metalness: 0.94, roughness: 0.1, clearcoat: 0.6 }),
  );
  ridge.position.y = 1.5;
  idleSpear.add(ridge);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.03, 0.07, 10), metal);
  tipCollar.position.y = 1.32;
  idleSpear.add(tipCollar);
  for (const sx of [-1, 1]) {
    const barb = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.12, 8), metal);
    barb.position.set(sx * 0.048, 1.4, 0);
    barb.rotation.z = sx * 1.12;
    idleSpear.add(barb);
  }
  const tipEdge = new THREE.Mesh(
    new THREE.ConeGeometry(0.042, 0.15, 8),
    mat(0xf4f8fc, { metalness: 0.9, roughness: 0.12, clearcoat: 0.65 }),
  );
  tipEdge.position.y = 1.66;
  idleSpear.add(tipEdge);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.08, 8), metal);
  butt.rotation.x = Math.PI;
  butt.position.y = -0.34;
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
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.045, 0.64, 0.016),
    mat(0xd0dce8, { metalness: 0.88, roughness: 0.16, clearcoat: 0.55, emissive: 0x223344, emissiveIntensity: 0.08 }),
  );
  blade.position.y = 0.18;
  g.add(blade);
  const tip = new THREE.Mesh(
    new THREE.ConeGeometry(0.032, 0.11, 8),
    mat(0xe4eef6, { metalness: 0.92, roughness: 0.12, clearcoat: 0.6 }),
  );
  tip.position.y = 0.54;
  g.add(tip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.038, 0.042), mat(0xd4b050, { metalness: 0.7, roughness: 0.28 }));
  guard.position.y = -0.12;
  g.add(guard);
  const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.18, 10), mat(0x5a3214, { roughness: 0.75 }));
  hilt.position.y = -0.24;
  g.add(hilt);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), mat(0xd4b050, { metalness: 0.68, roughness: 0.3 }));
  pommel.position.y = -0.35;
  g.add(pommel);
  return g;
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
}
