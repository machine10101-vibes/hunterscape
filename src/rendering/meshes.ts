import * as THREE from 'three';

export { createGround } from './terrain';

const matCache = new Map<string, THREE.MeshStandardMaterial>();

function mat(
  color: number,
  opts: Partial<THREE.MeshStandardMaterialParameters> = {},
): THREE.MeshStandardMaterial {
  const key = `${color}_${opts.roughness ?? 0.78}_${opts.metalness ?? 0.08}_${opts.flatShading === false ? 0 : 1}_${opts.emissive ?? 0}_${opts.emissiveIntensity ?? 0}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.78,
      metalness: opts.metalness ?? 0.08,
      flatShading: opts.flatShading ?? true,
      envMapIntensity: opts.envMapIntensity ?? 0.85,
      ...opts,
    });
    matCache.set(key, m);
  }
  return m;
}

/** Dark back-face outline for silhouette readability */
function addOutline(target: THREE.Mesh, scale = 1.08, color = 0x0a1208): void {
  const outline = new THREE.Mesh(
    target.geometry,
    new THREE.MeshBasicMaterial({
      color,
      side: THREE.BackSide,
      depthWrite: false,
    }),
  );
  outline.scale.setScalar(scale);
  outline.name = 'outline';
  target.add(outline);
}

export {
  createHatchetTool,
  createPickaxeTool,
  createPlayerMesh,
  createSwordTool,
  setPlayerTool,
} from './player';

export { createFrostYeti, createOrcScout } from './monsters';


export function createTree(seed = 0): THREE.Group {
  const g = new THREE.Group();
  g.name = 'tree';
  const h = 1.55 + (seed % 5) * 0.18;
  const trunkTint = seed % 3 === 0 ? 0x4a3218 : seed % 3 === 1 ? 0x5a3a1a : 0x3e2a12;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.16, 0.28, h, 8),
    mat(trunkTint, { roughness: 0.95 }),
  );
  trunk.position.y = h / 2;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  g.add(trunk);

  // Bark ridges + dark AO seams for depth
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + seed * 0.3;
    const ridge = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, h * (0.55 + (i % 2) * 0.15), 0.07),
      mat(0x2a1808, { roughness: 1 }),
    );
    ridge.position.set(Math.cos(a) * 0.15, h * 0.45, Math.sin(a) * 0.15);
    ridge.rotation.y = a;
    g.add(ridge);
  }
  // Horizontal bark rings
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.18 + i * 0.02, 0.02, 4, 10),
      mat(0x2e1c0c, { roughness: 1 }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.35 + i * (h * 0.28);
    g.add(ring);
  }

  const canopyA = seed % 2 === 0 ? 0x2f7230 : 0x3a8638;
  const canopyB = seed % 3 === 0 ? 0x226628 : 0x4c8c48;
  const canopyC = 0x1c5220;
  for (let i = 0; i < 5; i++) {
    const r = 0.9 - i * 0.12;
    const col = i % 3 === 0 ? canopyA : i % 3 === 1 ? canopyB : canopyC;
    const leaf = new THREE.Mesh(
      new THREE.ConeGeometry(r, 1.0 - i * 0.1, 9),
      mat(col, { roughness: 0.88 }),
    );
    leaf.position.y = h + 0.22 + i * 0.42;
    leaf.rotation.y = (seed + i) * 0.45;
    leaf.castShadow = true;
    g.add(leaf);
    // Inner darker canopy for depth
    if (i < 3) {
      const inner = new THREE.Mesh(
        new THREE.ConeGeometry(r * 0.55, 0.55, 7),
        mat(0x143818, { roughness: 0.95 }),
      );
      inner.position.y = h + 0.35 + i * 0.42;
      g.add(inner);
    }
  }

  // Root flare
  const roots = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.44, 0.2, 7), mat(0x3a2810, { roughness: 1 }));
  roots.position.y = 0.08;
  roots.receiveShadow = true;
  g.add(roots);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + seed;
    const root = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.35), mat(0x2e1c0c));
    root.position.set(Math.cos(a) * 0.28, 0.06, Math.sin(a) * 0.28);
    root.rotation.y = a;
    g.add(root);
  }

  const stumpHit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.55, 0.2, 8),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  stumpHit.position.y = 0.1;
  stumpHit.name = 'hit';
  g.add(stumpHit);

  return g;
}

export function createRock(kind: 'copper' | 'tin', seed = 0): THREE.Group {
  const g = new THREE.Group();
  g.name = 'rock';
  const base = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.55 + (seed % 3) * 0.06, 0),
    mat(seed % 2 === 0 ? 0x5e6268 : 0x4e5258, { roughness: 0.9 }),
  );
  base.position.y = 0.4;
  base.rotation.set(0.2, seed, 0.1);
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);

  // Soft contact / AO darkening under rock
  const ao = new THREE.Mesh(
    new THREE.CircleGeometry(0.55, 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }),
  );
  ao.rotation.x = -Math.PI / 2;
  ao.position.y = 0.02;
  g.add(ao);

  const chunk = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.28, 0),
    mat(0x4a4e52),
  );
  chunk.position.set(0.35, 0.22, -0.15);
  chunk.rotation.set(0.4, seed * 0.5, 0.2);
  chunk.castShadow = true;
  g.add(chunk);

  const veinColor = kind === 'copper' ? 0xb87333 : 0xc0c0c8;
  for (let i = 0; i < 4; i++) {
    const vein = new THREE.Mesh(
      new THREE.SphereGeometry(0.1 + (i % 2) * 0.03, 6, 4),
      mat(veinColor, {
        metalness: 0.55,
        roughness: 0.4,
        emissive: veinColor,
        emissiveIntensity: 0.15,
      }),
    );
    const a = (i / 4) * Math.PI * 2 + seed;
    vein.position.set(Math.cos(a) * 0.32, 0.42 + (i % 2) * 0.18, Math.sin(a) * 0.32);
    g.add(vein);
  }

  const moss = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 5, 4),
    mat(0x3a6a30, { roughness: 1 }),
  );
  moss.position.set(-0.25, 0.55, 0.2);
  moss.scale.set(1.2, 0.5, 1);
  g.add(moss);

  const hit = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 8, 6),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.4;
  hit.name = 'hit';
  g.add(hit);

  return g;
}

export function createDummy(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'dummy';

  const uniq = (color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
    new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.85,
      metalness: opts.metalness ?? 0.05,
      flatShading: true,
      ...opts,
    });

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.4, 6), uniq(0x5a3a1a));
  pole.position.y = 0.7;
  pole.castShadow = true;
  g.add(pole);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.7, 8), uniq(0x8a6a40));
  torso.position.y = 1.15;
  torso.castShadow = true;
  torso.name = 'dummyBody';
  addOutline(torso, 1.06, 0x1a1008);
  g.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), uniq(0xc4a060));
  head.position.y = 1.65;
  head.name = 'dummyHead';
  g.add(head);

  const markMat = uniq(0x4a2010);
  const m1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.06, 0.04), markMat);
  m1.position.set(0, 1.2, 0.3);
  m1.rotation.z = 0.6;
  g.add(m1);
  const m2 = m1.clone();
  m2.rotation.z = -0.6;
  g.add(m2);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.12, 8), uniq(0x3a2a15));
  base.position.y = 0.06;
  base.receiveShadow = true;
  g.add(base);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.45, 1.8, 8),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.9;
  hit.name = 'hit';
  g.add(hit);

  return g;
}

export function flashDummy(dummy: THREE.Group, durationMs = 140): void {
  const bodies: THREE.Mesh[] = [];
  dummy.traverse((c) => {
    if ((c as THREE.Mesh).isMesh && c.name !== 'hit' && c.name !== 'outline') {
      bodies.push(c as THREE.Mesh);
    }
  });
  const originals: { mesh: THREE.Mesh; emissive: THREE.Color; intensity: number }[] = [];
  for (const mesh of bodies) {
    const m = mesh.material as THREE.MeshStandardMaterial;
    if (!m || !m.emissive) continue;
    originals.push({ mesh, emissive: m.emissive.clone(), intensity: m.emissiveIntensity ?? 0 });
    m.emissive.setHex(0xffeeaa);
    m.emissiveIntensity = 0.85;
  }
  setTimeout(() => {
    for (const o of originals) {
      const m = o.mesh.material as THREE.MeshStandardMaterial;
      m.emissive.copy(o.emissive);
      m.emissiveIntensity = o.intensity;
    }
  }, durationMs);
}

export function createCampfire(): THREE.Group {
  const g = new THREE.Group();
  // Stone ring
  for (let i = 0; i < 8; i++) {
    const stone = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.12, 0),
      mat(0x5a5a58),
    );
    const a = (i / 8) * Math.PI * 2;
    stone.position.set(Math.cos(a) * 0.45, 0.08, Math.sin(a) * 0.45);
    stone.rotation.set(Math.random(), a, 0.2);
    stone.castShadow = true;
    g.add(stone);
  }
  for (let i = 0; i < 5; i++) {
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.7, 5), mat(0x4a2a10));
    log.rotation.z = Math.PI / 2;
    log.rotation.y = (i / 5) * Math.PI * 2;
    log.position.y = 0.1;
    g.add(log);
  }
  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.2, 0.55, 5),
    new THREE.MeshStandardMaterial({
      color: 0xff6622,
      emissive: 0xff4400,
      emissiveIntensity: 1.4,
      flatShading: true,
      transparent: true,
      opacity: 0.92,
    }),
  );
  flame.position.y = 0.42;
  flame.name = 'flame';
  g.add(flame);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 8, 6),
    new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    }),
  );
  glow.position.y = 0.28;
  glow.name = 'flameGlow';
  g.add(glow);

  const light = new THREE.PointLight(0xff8844, 1.6, 14);
  light.position.y = 0.65;
  light.castShadow = false;
  g.add(light);
  return g;
}

export function createTent(): THREE.Group {
  const g = new THREE.Group();
  const canvasMat = mat(0x6a5030, { roughness: 0.92, side: THREE.DoubleSide });
  const shadeMat = mat(0x4a3818, { roughness: 0.94, side: THREE.DoubleSide });

  const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.55, 6), mat(0x3a2a10, { roughness: 1 }));
  ridge.rotation.z = Math.PI / 2;
  ridge.position.y = 1.18;
  g.add(ridge);

  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 1.42), canvasMat);
    wall.position.set(side * 0.52, 0.62, 0);
    wall.rotation.y = side * -0.72;
    wall.castShadow = true;
    wall.receiveShadow = true;
    g.add(wall);
    const inner = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.36), shadeMat);
    inner.position.set(side * 0.5, 0.62, 0);
    inner.rotation.y = side * -0.72 + Math.PI;
    g.add(inner);
  }

  const back = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 1.05), shadeMat);
  back.position.set(0, 0.52, -0.72);
  back.castShadow = true;
  g.add(back);

  const flapL = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.85), shadeMat);
  flapL.position.set(-0.18, 0.42, 0.7);
  flapL.rotation.y = 0.35;
  g.add(flapL);
  const flapR = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.85), canvasMat);
  flapR.position.set(0.22, 0.42, 0.68);
  flapR.rotation.y = -0.55;
  g.add(flapR);

  for (const [x, z] of [
    [-0.9, -0.9],
    [0.9, -0.9],
    [-0.9, 0.9],
    [0.9, 0.9],
  ] as [number, number][]) {
    const peg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.25, 4), mat(0x3a2a10));
    peg.position.set(x * 0.85, 0.12, z * 0.85);
    g.add(peg);
  }
  return g;
}

export function createCrate(): THREE.Group {
  const g = new THREE.Group();
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.4, 0.45), mat(0x6a4a28));
  box.position.y = 0.2;
  box.castShadow = true;
  box.receiveShadow = true;
  g.add(box);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.06, 0.48), mat(0x5a3a1a));
  lid.position.y = 0.43;
  g.add(lid);
  return g;
}

export function createBarrel(): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.55, 10), mat(0x5a3a1a));
  body.position.y = 0.28;
  body.castShadow = true;
  g.add(body);
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.025, 6, 12), mat(0x8a8a8a, { metalness: 0.5 }));
  band.rotation.x = Math.PI / 2;
  band.position.y = 0.35;
  g.add(band);
  return g;
}

export function createBedroll(): THREE.Group {
  const g = new THREE.Group();
  const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.7, 8), mat(0x3a4a6a));
  roll.rotation.z = Math.PI / 2;
  roll.position.y = 0.12;
  roll.castShadow = true;
  g.add(roll);
  return g;
}

export function createSkyDome(radius = 60): THREE.Mesh {
  const geo = new THREE.SphereGeometry(radius, 24, 12);
  // Vertex colors: zenith blue → horizon warm
  const colors = new Float32Array(geo.attributes.position.count * 3);
  const pos = geo.attributes.position;
  const zenith = new THREE.Color(0x4a96e0);
  const mid = new THREE.Color(0x8ebce8);
  const horizon = new THREE.Color(0xf2d6a4);
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / radius; // -1..1
    const t = Math.max(0, Math.min(1, (y + 0.15) / 1.0));
    if (t < 0.45) {
      tmp.copy(horizon).lerp(mid, t / 0.45);
    } else {
      tmp.copy(mid).lerp(zenith, (t - 0.45) / 0.55);
    }
    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    }),
  );
  mesh.name = 'sky';
  return mesh;
}

/** Animate yeti arms for a melee swipe (compat wrapper) */
export function animateYetiSwipe(yeti: THREE.Group, progress: number): void {
  const armR = yeti.getObjectByName('yetiArmR');
  const armL = yeti.getObjectByName('yetiArmL');
  const p = Math.max(0, Math.min(1, progress));
  let raise = 0;
  let swipe = 0;
  if (p <= 0) {
    return;
  } else if (p < 0.35) {
    const w = p / 0.35;
    raise = -1.35 * w;
    swipe = -0.4 * w;
  } else if (p < 0.55) {
    const w = (p - 0.35) / 0.2;
    raise = -1.35 + 2.4 * w;
    swipe = -0.4 + 1.6 * w;
  } else {
    const w = (p - 0.55) / 0.45;
    raise = 1.05 * (1 - w);
    swipe = 1.2 * (1 - w);
  }
  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.y = swipe * 0.55;
  }
  if (armL) armL.rotation.x = raise * 0.55;
  const head = yeti.getObjectByName('yetiHead');
  if (head) head.rotation.x = -0.15 - Math.min(p, 1) * 0.2;
}

/** Snow mounds / icy rocks for Frost Yeti NE clearing */
export function createSnowProps(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'snowProps';
  const snow = mat(0xe8f2f8, { roughness: 0.78 });
  const ice = mat(0xa8d0e8, { roughness: 0.35, metalness: 0.15, emissive: 0x4488aa, emissiveIntensity: 0.12 });
  const rock = mat(0x6a7078, { roughness: 0.92 });

  const spots: [number, number, number][] = [
    [3.2, 6.4, 0.9],
    [5.4, 8.0, 1.1],
    [4.8, 5.8, 0.7],
    [2.6, 7.8, 0.85],
    [5.8, 6.6, 0.75],
    [3.6, 8.6, 0.95],
  ];
  for (const [x, z, s] of spots) {
    const mound = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35 * s, 0), snow);
    mound.position.set(x, 0.12 * s, z);
    mound.scale.set(1.4, 0.55, 1.2);
    mound.castShadow = true;
    mound.receiveShadow = true;
    g.add(mound);
    if (s > 0.85) {
      const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.18 * s, 0), ice);
      shard.position.set(x + 0.15, 0.28 * s, z - 0.1);
      shard.rotation.set(0.3, 0.5, 0.2);
      g.add(shard);
    }
  }
  // Icy rock outcrops
  for (const [x, z] of [
    [6.2, 7.5],
    [2.2, 6.0],
  ] as [number, number][]) {
    const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4, 0), rock);
    r.position.set(x, 0.25, z);
    r.castShadow = true;
    g.add(r);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 4), snow);
    cap.position.set(x, 0.48, z);
    cap.scale.set(1.2, 0.45, 1);
    g.add(cap);
  }
  return g;
}

/** Soft volumetric god-rays-lite shafts */
export function createGodRays(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'godRays';
  const matRay = new THREE.MeshBasicMaterial({
    color: 0xfff0c8,
    transparent: true,
    opacity: 0.09,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  for (let i = 0; i < 5; i++) {
    const shaft = new THREE.Mesh(new THREE.PlaneGeometry(1.2 + i * 0.15, 18), matRay);
    shaft.position.set(-4 + i * 2.4, 9, -2 + (i % 3) * 3);
    shaft.rotation.z = -0.35 - i * 0.04;
    shaft.rotation.y = 0.25;
    g.add(shaft);
  }
  return g;
}

/** Animate orc spear thrust (progress 0→1, compat wrapper) */
export function animateOrcSpear(orc: THREE.Group, progress: number): void {
  const spear = orc.getObjectByName('orcSpear');
  const armR = orc.getObjectByName('orcArmR');
  const p = Math.max(0, Math.min(1, progress));
  let pull = 0;
  let thrust = 0;
  if (p <= 0) {
    const r = spear?.userData.rest as
      | { x: number; y: number; z: number; rx: number; ry: number; rz: number }
      | undefined;
    if (spear && r) {
      spear.position.set(r.x, r.y, r.z);
      spear.rotation.set(r.rx, r.ry, r.rz);
    }
    return;
  } else if (p < 0.32) {
    pull = p / 0.32;
    thrust = -0.35 * pull;
  } else if (p < 0.52) {
    const w = (p - 0.32) / 0.2;
    pull = 1 - w;
    thrust = -0.35 + 1.45 * w;
  } else {
    const w = (p - 0.52) / 0.48;
    thrust = 1.1 * (1 - w);
  }
  if (spear) {
    const r = spear.userData.rest as { x: number; y: number; z: number; rx: number; ry: number; rz: number } | undefined;
    if (r) {
      spear.rotation.x = r.rx - thrust * 0.35;
      spear.position.z = r.z + thrust * 0.22 - pull * 0.1;
    } else {
      spear.rotation.x = -thrust * 0.95;
      spear.position.z = 0.12 + thrust * 0.55 - pull * 0.25;
    }
  }
  if (armR) armR.rotation.x = -thrust * 1.05 + pull * 0.4;
  const head = orc.getObjectByName('orcHead');
  if (head) head.rotation.x = -thrust * 0.12;
}
