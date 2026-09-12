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

/** Low-poly Frost Yeti — white/blue fur, charcoal stripes, amber eyes, black claws */
export function createFrostYeti(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'yeti';

  const uniq = (color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
    new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.92,
      metalness: opts.metalness ?? 0.02,
      flatShading: false,
      ...opts,
    });

  const fur = uniq(0xe4edf6, { roughness: 0.94 }); // bright white shag
  const furBlue = uniq(0xbacfe2, { roughness: 0.9 }); // cool blue tint
  const furShade = uniq(0xcbdae8, { roughness: 0.96 });
  const furDeep = uniq(0x93aabf, { roughness: 0.97 }); // shadowed undercoat
  const hide = uniq(0x4a5666, { roughness: 0.88 }); // bare face/palm leather
  const hideDark = uniq(0x323c4a, { roughness: 0.9 });
  const claw = uniq(0x1d222b, { roughness: 0.3, metalness: 0.4 }); // dark horn
  const noseMat = uniq(0x22202a, { roughness: 0.5 });
  const mouthMat = uniq(0x5c2430, { roughness: 0.85 });
  const fangMat = uniq(0xf2ebd4, { roughness: 0.4 });

  /**
   * Ring of overlapping fur tufts used for every silhouette break on the body.
   * Each tuft is a flattened wedge sunk most of the way into the surface so only
   * a ruffled edge shows: cones long enough to read on their own just look like
   * icicles glued to the fur.
   */
  const addShag = (
    parent: THREE.Object3D,
    cx: number,
    cy: number,
    cz: number,
    radius: number,
    count: number,
    size: number,
    droop = 0.5,
    matA: THREE.Material = fur,
    matB: THREE.Material = furShade,
  ) => {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + radius * 9;
      const s = size * (0.82 + (i % 3) * 0.12);
      const tuft = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), i % 2 ? matB : matA);
      tuft.position.set(cx + Math.cos(a) * radius * 0.8, cy - s * 0.45, cz + Math.sin(a) * radius * 0.8);
      // Long axis laid tangentially around the ring so neighbouring tufts
      // overlap into one scalloped edge instead of bristling outward.
      tuft.rotation.set(droop * (0.8 + (i % 3) * 0.2), Math.PI / 2 - a, (i % 4) * 0.16);
      tuft.scale.set(1.7, 0.55, 0.95);
      tuft.castShadow = true;
      parent.add(tuft);
    }
  };

  /** Short, blunt, slightly hooked claw with a frost-glass tip. */
  const frost = uniq(0xb8e8ff, { roughness: 0.22, metalness: 0.35, emissive: 0x4aa8c8, emissiveIntensity: 0.18 });
  const addClaw = (parent: THREE.Object3D, x: number, y: number, z: number, len: number, rad: number) => {
    const c = new THREE.Mesh(new THREE.ConeGeometry(rad, len, 6), claw);
    c.rotation.x = Math.PI / 2 + 0.45;
    c.position.set(x, y, z);
    c.castShadow = true;
    parent.add(c);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(rad * 0.55, len * 0.42, 5), frost);
    tip.rotation.x = Math.PI / 2 + 0.45;
    tip.position.set(x, y - 0.01, z + len * 0.38);
    parent.add(tip);
  };

  /** Small ice shard grown out of the fur — octahedron, not a hanging cone. */
  const addIce = (parent: THREE.Object3D, x: number, y: number, z: number, s: number, rx = 0.2, rz = 0.15) => {
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(s, 0), frost);
    shard.position.set(x, y, z);
    shard.rotation.set(rx, 0.4, rz);
    shard.scale.set(0.55, 1.6, 0.45);
    shard.castShadow = true;
    parent.add(shard);
  };

  // Contact shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.85, 20),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    }),
  );
  shadow.name = 'contactShadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  // Legs hang from the hip. The old chain was rooted at the sole, so every
  // walk rotation pivoted around the foot and the gait looked like a wobble.
  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'yetiLegL' : 'yetiLegR';
    hip.position.set(side * 0.34, 0.94, 0.02);

    const hipBall = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), fur);
    hipBall.position.set(0, -0.02, 0.02);
    hipBall.castShadow = true;
    hip.add(hipBall);
    const glute = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), furShade);
    glute.scale.set(1.05, 0.85, 0.95);
    glute.position.set(side * -0.02, 0.02, -0.08);
    hip.add(glute);
    const quad = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), fur);
    quad.scale.set(1.15, 1.35, 0.85);
    quad.position.set(0, -0.2, 0.1);
    hip.add(quad);

    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.28, 6, 12), fur);
    thigh.position.set(0, -0.22, 0.04);
    thigh.castShadow = true;
    hip.add(thigh);
    addShag(hip, 0, -0.12, 0.04, 0.22, 12, 0.065, 0.45);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'yetiShinL' : 'yetiShinR';
    shin.position.set(0, -0.46, 0.06);
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), fur);
    knee.castShadow = true;
    shin.add(knee);
    const calf = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.22, 6, 12), furBlue);
    calf.position.set(0, -0.18, 0.02);
    calf.castShadow = true;
    shin.add(calf);
    addShag(shin, 0, -0.16, 0.02, 0.175, 11, 0.055, 0.4, furShade, furDeep);

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'yetiFootL' : 'yetiFootR';
    foot.position.set(0, -0.38, 0.06);
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), fur);
    pad.scale.set(0.95, 0.42, 1.3);
    pad.position.set(0, -0.02, 0.1);
    pad.castShadow = true;
    foot.add(pad);
    const sole = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), hideDark);
    sole.position.set(0, -0.055, 0.12);
    sole.scale.set(0.9, 0.22, 1.05);
    foot.add(sole);
    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.078;
      const toe = new THREE.Mesh(new THREE.SphereGeometry(0.052, 8, 6), fur);
      toe.position.set(x, -0.02, 0.24);
      toe.scale.set(1, 0.75, 1.25);
      foot.add(toe);
      addClaw(foot, x, -0.02, 0.32, 0.12, 0.026);
    }
    shin.add(foot);
    hip.add(shin);
    return hip;
  };
  const yetiLegL = makeLeg(-1);
  yetiLegL.name = 'yetiLegL';
  g.add(yetiLegL);
  const yetiLegR = makeLeg(1);
  yetiLegR.name = 'yetiLegR';
  g.add(yetiLegR);

  // Torso group — chest, ice, and arms ride the lean so a slam tips the
  // whole mass instead of rotating a lone capsule inside a static barrel.
  const body = new THREE.Group();
  body.name = 'yetiBody';
  body.position.set(0, 1.32, -0.12);
  body.rotation.x = 0.32;
  g.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 0.55, 6, 12), fur);
  torso.scale.set(1.22, 0.95, 0.92);
  torso.castShadow = true;
  addOutline(torso, 1.06, 0x0a1520);
  body.add(torso);

  // Shag skirt around the bottom of the ribcage and a second tier over the
  // shoulders — the two silhouette breaks that keep the torso from reading as
  // one smooth egg.
  addShag(body, 0, -0.18, 0.08, 0.68, 24, 0.095, 0.5);
  addShag(body, 0, 0.42, 0.02, 0.66, 22, 0.09, 0.7, furShade, furDeep);

  // Barrel chest — one wide slab, not two spheres that read as a bust.
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 12), furBlue);
  belly.position.set(0, -0.2, 0.38);
  belly.scale.set(1.2, 0.95, 0.58);
  body.add(belly);
  const barrel = new THREE.Mesh(new THREE.SphereGeometry(0.46, 14, 12), fur);
  barrel.scale.set(1.28, 0.72, 0.68);
  barrel.position.set(0, 0.16, 0.32);
  barrel.castShadow = true;
  body.add(barrel);
  for (const sx of [-1, 1]) {
    const lat = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), furShade);
    lat.scale.set(1.05, 1.35, 0.75);
    lat.position.set(sx * 0.48, 0.08, -0.02);
    body.add(lat);
  }
  const cleft = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.28, 4, 8), uniq(0x3a4a58, { roughness: 0.96 }));
  cleft.position.set(0, 0.14, 0.5);
  body.add(cleft);
  for (const sx of [-1, 1]) {
    const rib = new THREE.Mesh(new THREE.CapsuleGeometry(0.032, 0.2, 4, 8), uniq(0x3a4a58, { roughness: 0.96 }));
    rib.position.set(sx * 0.16, -0.12, 0.5);
    rib.rotation.z = sx * 0.4;
    body.add(rib);
  }

  // Ice grown into the shoulder ruff and spine — crystals, not icicles.
  addIce(body, -0.56, 0.5, -0.08, 0.18, 0.4, 0.35);
  addIce(body, 0.56, 0.5, -0.08, 0.18, 0.4, -0.35);
  addIce(body, 0, 0.6, -0.24, 0.2, 0.15, 0);
  addIce(body, -0.32, 0.32, -0.3, 0.14, 0.5, 0.2);
  addIce(body, 0.32, 0.32, -0.3, 0.14, 0.5, -0.2);
  addIce(body, -0.18, 0.18, -0.34, 0.1, 0.7, 0.15);
  addIce(body, 0.18, 0.18, -0.34, 0.1, 0.7, -0.15);

  // Shoulder / head ruff — a few pointed clumps, parented to the body so they
  // never read as extra floating arms.
  const makeManeClump = (parent: THREE.Object3D, x: number, y: number, z: number, s: number, matUse = fur) => {
    const base = new THREE.Mesh(new THREE.CapsuleGeometry(0.08 * s, 0.22 * s, 5, 10), matUse);
    base.position.set(x, y, z);
    base.rotation.x = -0.45;
    base.rotation.z = (x > 0 ? 1 : x < 0 ? -1 : 0) * 0.12 * s;
    base.castShadow = true;
    parent.add(base);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + s;
      const strand = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.028 * s, 0.16 * s, 4, 8),
        i % 2 === 0 ? furShade : matUse,
      );
      strand.position.set(x + Math.cos(a) * 0.05 * s, y + 0.03 * s, z + Math.sin(a) * 0.04 * s);
      strand.rotation.x = -0.55;
      strand.rotation.z = (x > 0 ? 1 : -1) * 0.14;
      strand.castShadow = true;
      parent.add(strand);
    }
  };
  for (const sx of [-1, 1]) {
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), fur);
    shoulder.position.set(sx * 0.52, 0.38, 0.02);
    shoulder.scale.set(1.15, 0.85, 1.05);
    torso.add(shoulder);
  }
  makeManeClump(torso, -0.42, 0.42, -0.12, 1.05);
  makeManeClump(torso, 0.42, 0.42, -0.12, 1.05);
  makeManeClump(torso, 0, 0.52, -0.28, 1.0, furShade);
  makeManeClump(torso, -0.28, 0.48, 0.12, 0.75, furBlue);
  makeManeClump(torso, 0.28, 0.48, 0.12, 0.75, furBlue);
  makeManeClump(torso, 0, 0.38, -0.36, 1.15, furDeep);
  makeManeClump(torso, -0.2, 0.32, -0.3, 0.85, furShade);
  makeManeClump(torso, 0.2, 0.32, -0.3, 0.85, furShade);

  // Arms — parented chain so walk/attack rotate a real limb, not disconnected chunks.
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'yetiArmL' : 'yetiArmR';
    arm.position.set(side * 0.74, 0.32, 0.26);
    arm.rotation.z = side * 0.4;
    arm.rotation.x = -0.42;

    // Long simian upper arm — a yeti reaches past its knees.
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.48, 6, 12), fur);
    upper.position.set(0, -0.22, 0);
    upper.castShadow = true;
    arm.add(upper);
    addShag(arm, 0, -0.02, 0, 0.215, 13, 0.072, 0.6);
    addShag(arm, 0, -0.48, 0, 0.205, 12, 0.062, 0.45, furShade, furDeep);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'yetiForearmL' : 'yetiForearmR';
    forearm.position.set(0, -0.56, 0);
    forearm.rotation.x = -0.48;
    const forearmMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.38, 6, 12), furBlue);
    forearmMesh.position.set(0, -0.2, 0);
    forearmMesh.castShadow = true;
    forearm.add(forearmMesh);
    addShag(forearm, 0, -0.3, 0, 0.175, 12, 0.055, 0.4, furShade, furDeep);

    const hand = new THREE.Group();
    hand.name = side < 0 ? 'yetiHandL' : 'yetiHandR';
    hand.position.set(0, -0.48, 0.05);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), fur);
    palm.scale.set(1, 0.85, 0.95);
    palm.castShadow = true;
    hand.add(palm);
    const palmPad = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), hideDark);
    palmPad.position.set(0, -0.02, 0.1);
    palmPad.scale.set(1, 0.95, 0.35);
    hand.add(palmPad);
    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.075;
      const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), fur);
      knuckle.position.set(x, -0.05, 0.14);
      knuckle.scale.set(1, 0.9, 1.2);
      hand.add(knuckle);
      addClaw(hand, x, -0.06, 0.22, 0.2, 0.032);
    }
    const thumbBase = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), fur);
    thumbBase.position.set(side * 0.13, -0.01, 0.06);
    hand.add(thumbBase);
    addClaw(hand, side * 0.17, -0.02, 0.12, 0.1, 0.024);
    for (let i = 0; i < 4; i++) {
      const tuft = new THREE.Mesh(new THREE.IcosahedronGeometry(0.034, 0), i % 2 ? furShade : fur);
      tuft.position.set((i - 1.5) * 0.07, 0.04, 0.1);
      tuft.scale.set(1.3, 0.55, 0.9);
      hand.add(tuft);
    }

    forearm.add(hand);
    arm.add(forearm);
    return arm;
  };
  body.add(makeArm(-1));
  body.add(makeArm(1));

  // Head — bear-like snout, roaring
  const head = new THREE.Group();
  head.name = 'yetiHead';
  head.position.set(0, 2.02, 0.28);
  head.rotation.x = -0.28;

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.38, 14, 12), fur);
  skull.scale.set(1.0, 0.88, 1.22);
  skull.castShadow = true;
  addOutline(skull, 1.08, 0x0a1520);
  head.add(skull);
  makeManeClump(head, 0, 0.28, -0.18, 0.85, furShade);
  makeManeClump(head, -0.22, 0.22, -0.08, 0.7);
  makeManeClump(head, 0.22, 0.22, -0.08, 0.7);

  // Bare slate-grey face mask. Without it every feature is white-on-white and
  // the head reads as a blank snowball from gameplay distance.
  // The skull is a 0.38 sphere scaled 1.1 deep, so its front surface sits at
  // z ~0.42. Every facial feature has to be pushed out past that or it ends up
  // buried inside the head.
  const mask = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 14), hide);
  // Kept low enough that the brow hides its upper rim; any taller and the seam
  // between mask and skull cuts across the forehead as a visible polygon edge.
  mask.scale.set(0.84, 0.74, 0.76);
  mask.position.set(0, -0.08, 0.18);
  head.add(mask);

  // Brow: a heavy shelf shading the eyes from above, split so it is not a
  // solid black bar welded over the sockets.
  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), hideDark);
  brow.scale.set(1.0, 0.28, 0.58);
  brow.position.set(0, 0.175, 0.2);
  head.add(brow);
  for (const sx of [-1, 1]) {
    const ridge = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), hideDark);
    ridge.scale.set(1.2, 0.5, 0.7);
    ridge.rotation.z = sx * -0.38;
    ridge.position.set(sx * 0.16, 0.1, 0.38);
    head.add(ridge);
  }

  // Amber eyes with a vertical slit pupil, set on the mask so they catch light.
  const makeEye = (sx: number) => {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.078, 12, 10), hideDark);
    socket.scale.set(1.15, 0.95, 0.62);
    socket.position.set(sx, 0.05, 0.36);
    head.add(socket);
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.052, 12, 10),
      uniq(0xf0a838, { emissive: 0xc06800, emissiveIntensity: 0.7, roughness: 0.25 }),
    );
    eye.scale.set(0.95, 0.78, 0.72);
    eye.position.set(sx, 0.042, 0.41);
    eye.name = 'yetiEye';
    head.add(eye);
    const slit = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.042, 3, 6), uniq(0x140a04));
    slit.position.set(sx, 0.054, 0.445);
    head.add(slit);
    const eyeLight = new THREE.PointLight(0xff9900, 0.22, 1.2);
    eyeLight.name = 'yetiEyeLight';
    eyeLight.position.set(sx, 0.06, 0.54);
    head.add(eyeLight);
  };
  makeEye(-0.15);
  makeEye(0.15);
  // Heavy lids so the amber slits sit in a real socket, not on a blank mask.
  for (const sx of [-1, 1]) {
    const lid = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), hideDark);
    lid.scale.set(1.15, 0.32, 0.55);
    lid.position.set(sx * 0.15, 0.088, 0.41);
    lid.rotation.x = -0.35;
    head.add(lid);
    const bag = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), hide);
    bag.scale.set(1.2, 0.35, 0.5);
    bag.position.set(sx * 0.15, 0.008, 0.41);
    head.add(bag);
  }

  // Muzzle — short and broad, the bridge sunk between the brows.
  const bridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.1, 5, 10), hide);
  bridge.rotation.x = Math.PI / 2 - 0.4;
  bridge.position.set(0, 0.015, 0.42);
  head.add(bridge);
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.175, 14, 12), hide);
  snout.scale.set(1.0, 0.8, 1.0);
  snout.position.set(0, -0.1, 0.44);
  head.add(snout);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.052, 12, 10), noseMat);
  nose.scale.set(1.3, 0.8, 0.85);
  nose.position.set(0, -0.03, 0.585);
  head.add(nose);
  for (const sx of [-1, 1]) {
    const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 6), uniq(0x0e0c10));
    nostril.position.set(sx * 0.03, -0.047, 0.608);
    head.add(nostril);
  }

  // Open maw: a recessed throat inside a wrapping jaw, rimmed so it reads as
  // a mouth and not a red ball glued to the snout.
  const maw = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), mouthMat);
  maw.scale.set(0.92, 0.28, 0.48);
  maw.position.set(0, -0.24, 0.44);
  head.add(maw);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 8, 16, Math.PI), hideDark);
  lip.rotation.x = 1.15;
  lip.scale.set(1.15, 0.7, 1);
  lip.position.set(0, -0.2, 0.52);
  head.add(lip);
  const lowerJaw = new THREE.Mesh(new THREE.SphereGeometry(0.175, 12, 10), hide);
  lowerJaw.scale.set(1.02, 0.38, 0.9);
  lowerJaw.position.set(0, -0.32, 0.4);
  head.add(lowerJaw);
  const scar = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.11, 0.012), uniq(0x2a1c18, { roughness: 0.9 }));
  scar.position.set(-0.07, -0.02, 0.58);
  scar.rotation.z = 0.7;
  head.add(scar);
  addShag(head, 0, -0.32, 0.24, 0.27, 11, 0.052, 0.6, furShade, furDeep);

  // Fangs — long enough to clear the lip, planted in the jaw not the snout.
  const makeFang = (x: number, y: number, z: number, upper: boolean) => {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.155, 7), fangMat);
    fang.rotation.x = upper ? Math.PI + 0.18 : -0.12;
    fang.position.set(x, y, z);
    head.add(fang);
  };
  makeFang(-0.08, -0.175, 0.575, true);
  makeFang(0.08, -0.175, 0.575, true);
  makeFang(-0.07, -0.335, 0.56, false);
  makeFang(0.07, -0.335, 0.56, false);
  addIce(head, -0.18, 0.24, 0.1, 0.06, 0.6, 0.3);
  addIce(head, 0.18, 0.24, 0.1, 0.06, 0.6, -0.3);
  addIce(head, 0, 0.36, -0.08, 0.07, 0.2, 0);

  for (let i = 0; i < 5; i++) {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.028, 0.022), fangMat);
    t.position.set(-0.08 + i * 0.04, -0.178, 0.542);
    head.add(t);
  }

  // Small round ears buried in the mane
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), fur);
    ear.position.set(s * 0.28, 0.18, -0.08);
    ear.scale.set(0.7, 0.85, 0.55);
    head.add(ear);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), hide);
    inner.scale.set(0.5, 0.85, 0.55);
    inner.position.set(s * 0.3, 0.18, -0.05);
    head.add(inner);
  }
  addShag(head, 0, 0.02, -0.08, 0.43, 16, 0.08, 0.55, fur, furShade);

  g.add(head);

  // Dewlap / neck ruff so the skull is planted on the torso instead of floating.
  const dewlap = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), fur);
  dewlap.scale.set(1.15, 0.7, 0.85);
  dewlap.position.set(0, 0.6, 0.2);
  dewlap.castShadow = true;
  body.add(dewlap);
  addShag(body, 0, 0.56, 0.18, 0.34, 14, 0.07, 0.55, furShade, furDeep);

  // Frost breath sits on the muzzle, not as a trail of spheres in front of the body.
  const breath = new THREE.Mesh(
    new THREE.ConeGeometry(0.12, 0.38, 8, 1, true),
    new THREE.MeshStandardMaterial({
      color: 0xd0f6ff,
      emissive: 0x66eeff,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.32,
      flatShading: false,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  breath.rotation.x = Math.PI / 2;
  breath.position.set(0, -0.15, 0.62);
  breath.name = 'yetiBreath';
  head.add(breath);
  for (let i = 0; i < 3; i++) {
    const mist = new THREE.Mesh(
      new THREE.SphereGeometry(0.07 + i * 0.025, 6, 5),
      new THREE.MeshBasicMaterial({
        color: 0xb8e8ff,
        transparent: true,
        opacity: 0.22 - i * 0.04,
        depthWrite: false,
      }),
    );
    mist.position.set((i - 1) * 0.04, -0.13, 0.75 + i * 0.1);
    mist.name = 'yetiBreathMist';
    head.add(mist);
  }

  // Invisible hit volume
  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.85, 0.95, 2.4, 10),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 1.2;
  hit.name = 'hit';
  g.add(hit);

  // Slight overall scale — massive presence
  g.scale.setScalar(1.15);
  return g;
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

/**
 * Orc Scout — olive skin, white tusks, pointed ears, spiky dark hair,
 * brown leather vest with X straps + silver buckle, tan spiky fur collar,
 * fur-trimmed gauntlets/boots, dark trousers, long faceted spear.
 * Distinct orc head (NOT a green recolor of the player).
 */
export function createOrcScout(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'orc';

  const uniq = (color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
    new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.85,
      metalness: opts.metalness ?? 0.05,
      flatShading: false,
      ...opts,
    });

  const skin = uniq(0x7a9844, { roughness: 0.82 });
  const skinDark = uniq(0x4a6428, { roughness: 0.88 });
  const paint = uniq(0x2a1c10, { roughness: 0.92 });
  const paintRed = uniq(0x6a2218, { roughness: 0.88 });
  const hair = uniq(0x2a2730, { roughness: 0.96 });
  const hairLit = uniq(0x3c3844, { roughness: 0.94 });
  const leather = uniq(0x6b4526, { roughness: 0.82 });
  const leatherDark = uniq(0x3e2814, { roughness: 0.88 });
  const leatherMid = uniq(0x8b5f3a, { roughness: 0.7 });
  const fur = uniq(0xac9068, { roughness: 0.97 });
  const furDark = uniq(0x7d6743, { roughness: 0.97 });
  const cloth = uniq(0x33383a, { roughness: 0.93 });
  const metal = uniq(0xd0d6de, { metalness: 0.82, roughness: 0.2 });
  const wood = uniq(0x4a3014, { roughness: 0.88 });
  const tusk = uniq(0xf5f0e4, { roughness: 0.4, metalness: 0.08 });

  const addPart = (mesh: THREE.Mesh, parent: THREE.Object3D = g, outlineScale?: number) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    if (outlineScale) addOutline(mesh, outlineScale, 0x0a1208);
    parent.add(mesh);
    return mesh;
  };

  /**
   * Fur trim as a ring of matted clumps around a band. Rings read as fur at
   * gameplay distance; the ring of outward-pointing capsules this replaced read
   * as a crown of sausages.
   */
  const addFurBand = (
    parent: THREE.Object3D,
    cx: number,
    cy: number,
    cz: number,
    radius: number,
    thickness: number,
    clumps = 0,
  ) => {
    const band = new THREE.Mesh(new THREE.TorusGeometry(radius, thickness, 6, 14), fur);
    band.rotation.x = Math.PI / 2;
    band.position.set(cx, cy, cz);
    band.castShadow = true;
    parent.add(band);
    for (let i = 0; i < clumps; i++) {
      const a = (i / clumps) * Math.PI * 2 + 0.3;
      const lump = new THREE.Mesh(new THREE.IcosahedronGeometry(thickness * 1.45, 0), i % 2 ? furDark : fur);
      lump.position.set(cx + Math.cos(a) * radius, cy + (i % 2) * thickness * 0.4, cz + Math.sin(a) * radius);
      lump.rotation.set(0.3, a, 0.2);
      lump.scale.set(1.2, 0.8, 1.1);
      lump.castShadow = true;
      parent.add(lump);
    }
  };

  // Contact shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.4, 18),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }),
  );
  shadow.name = 'contactShadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  // ===== Legs hang from the hip so a walk rotates the thigh, not the sole. =====
  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'orcLegL' : 'orcLegR';
    hip.position.set(side * 0.18, 0.8, 0);

    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.2, 5, 12), cloth);
    thigh.position.set(0, -0.16, 0);
    addPart(thigh, hip);
    const quad = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), cloth);
    quad.scale.set(1.15, 1.35, 0.85);
    quad.position.set(0, -0.14, 0.06);
    addPart(quad, hip);
    const ham = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), cloth);
    ham.scale.set(1.05, 1.2, 0.8);
    ham.position.set(0, -0.16, -0.05);
    addPart(ham, hip);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'orcShinL' : 'orcShinR';
    shin.position.set(0, -0.36, 0);
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), cloth);
    addPart(knee, shin);
    const calf = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.08, 5, 12), cloth);
    calf.position.set(0, -0.1, 0.01);
    addPart(calf, shin);

    const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.112, 0.14, 12), leather);
    boot.position.set(0, -0.22, 0.02);
    addPart(boot, shin, 1.05);
    const ankle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.065, 0.08, 12), leatherDark);
    ankle.position.set(0, -0.32, 0.025);
    addPart(ankle, shin);
    const footG = new THREE.Group();
    footG.name = side < 0 ? 'orcFootL' : 'orcFootR';
    footG.position.set(0, -0.36, 0);
    const foot = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.13, 4, 10), leatherDark);
    foot.rotation.x = Math.PI / 2;
    foot.position.set(0, 0, 0.09);
    foot.scale.set(1.1, 1, 0.7);
    addPart(foot, footG);
    shin.add(footG);

    for (const dir of [-1, 1]) {
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.018), leatherMid);
      strap.position.set(0, -0.24, 0.02);
      strap.rotation.z = dir * 0.7;
      shin.add(strap);
    }
    addFurBand(shin, 0, -0.16, 0.02, 0.11, 0.02, 6);
    hip.add(shin);
    return hip;
  };
  const orcLegL = makeLeg(-1);
  orcLegL.name = 'orcLegL';
  g.add(orcLegL);
  const orcLegR = makeLeg(1);
  orcLegR.name = 'orcLegR';
  g.add(orcLegR);

  // Hips / leather skirt flaps
  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.27, 0.22, 14), leather);
  hips.position.y = 0.78;
  addPart(hips, g);
  for (const [z, ry] of [
    [0.18, 0],
    [-0.18, Math.PI],
  ] as const) {
    const shape = new THREE.Shape();
    shape.moveTo(-0.14, 0);
    shape.lineTo(0.14, 0);
    shape.lineTo(0, -0.22);
    shape.closePath();
    const flap = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.04, bevelEnabled: false }), leatherDark);
    flap.position.set(0, 0.72, z);
    flap.rotation.y = ry;
    addPart(flap, g);
  }
  for (const sx of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-0.1, 0);
    shape.lineTo(0.1, 0);
    shape.lineTo(0, -0.18);
    shape.closePath();
    const flap = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.035, bevelEnabled: false }), leatherMid);
    flap.position.set(sx * 0.24, 0.72, 0);
    flap.rotation.y = sx * Math.PI * 0.5;
    addPart(flap, g);
  }

  // ===== Torso / brown leather vest =====
  // Body group so a lunge tips the vest, plate, and arms together.
  const body = new THREE.Group();
  body.name = 'orcBody';
  body.position.set(0, 1.12, 0);
  g.add(body);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.27, 0.55, 14), leather);
  addPart(torso, body, 1.07);

  // Flat vest plate — a slab, not two spheres.
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.07), leatherMid);
  plate.position.set(0, 0.1, 0.2);
  addPart(plate, body);
  const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.24, 0.035), leatherDark);
  sternum.position.set(0, 0.1, 0.24);
  addPart(sternum, body);

  // Bare upper arms / shoulders peek (olive skin). Left pauldron marks him
  // as a scout — one shoulder armoured, the spear arm free.
  for (const sx of [-1, 1]) {
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), skin);
    deltoid.position.set(sx * 0.34, 0.26, 0);
    deltoid.scale.set(0.95, 0.9, 1.05);
    addPart(deltoid, body);
  }
  const pauldron = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.58),
    leatherMid,
  );
  pauldron.scale.set(1.15, 0.85, 1.1);
  pauldron.rotation.z = 0.4;
  pauldron.position.set(-0.36, 0.3, 0.02);
  addPart(pauldron, body, 1.04);
  for (let i = 0; i < 3; i++) {
    const stud = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5), metal);
    const a = -0.4 + i * 0.4;
    stud.position.set(-0.36 + Math.cos(a) * 0.02, 0.38, Math.sin(a) * 0.08);
    body.add(stud);
  }

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.09, 10), leatherDark);
  belt.position.y = 0.88;
  addPart(belt, g);
  const beltBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.05), metal);
  beltBuckle.position.set(0, 0.88, 0.29);
  g.add(beltBuckle);

  // X chest straps + diamond silver buckle (Drive leather X-vest)
  const makeStrap = (rotZ: number, z = 0.22) => {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.58, 0.038), leatherDark);
    strap.position.set(0, 0.06, z);
    strap.rotation.z = rotZ;
    body.add(strap);
    // Rivets along strap for motion-read
    for (const t of [-0.18, 0.18]) {
      const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), metal);
      rivet.position.set(Math.sin(rotZ) * t * 0.15, 0.06 + Math.cos(rotZ) * t, z + 0.025);
      body.add(rivet);
    }
  };
  makeStrap(0.55, 0.27);
  makeStrap(-0.55, 0.27);
  makeStrap(0.55, -0.27);
  makeStrap(-0.55, -0.27);
  const backJoin = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 6), metal);
  backJoin.rotation.x = Math.PI / 2;
  backJoin.position.set(0, 0.06, -0.29);
  body.add(backJoin);

  const chestBuckle = new THREE.Mesh(new THREE.OctahedronGeometry(0.075, 0), metal);
  chestBuckle.scale.set(1.15, 0.9, 0.45);
  chestBuckle.position.set(0, 0.06, 0.29);
  body.add(chestBuckle);

  // Small pouch on hip
  const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.08), leatherMid);
  pouch.position.set(0.28, 0.82, 0.12);
  addPart(pouch, g);

  // Draped shoulder pelts only — a ring around the neck still reads as a buoy.
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const lump = new THREE.Mesh(new THREE.IcosahedronGeometry(0.055, 0), i % 2 ? furDark : fur);
      lump.position.set(sx * (0.2 + (i % 3) * 0.05), 0.28 + (i % 2) * 0.03, -0.02 + (i % 3) * 0.06);
      lump.rotation.set(0.4, sx * 0.6, sx * 0.25);
      lump.scale.set(1.4, 0.55, 1.1);
      addPart(lump, body);
    }
  }

  // ===== Arms hang −Y from the deltoid so a punch actually swings the limb. =====
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'orcArmL' : 'orcArmR';
    arm.position.set(side * 0.32, 0.26, 0.02);
    arm.rotation.z = side * 0.18;
    arm.rotation.x = side > 0 ? -0.32 : -0.1;

    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.22, 5, 12), skin);
    upper.position.set(0, -0.14, 0);
    addPart(upper, arm);
    const bicep = new THREE.Mesh(new THREE.SphereGeometry(0.088, 10, 8), skin);
    bicep.scale.set(1.15, 1.25, 0.9);
    bicep.position.set(0, -0.06, 0.03);
    addPart(bicep, arm);
    const armBar = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.16, 0.04), paint);
    armBar.position.set(0, -0.1, 0.09);
    arm.add(armBar);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'orcForearmL' : 'orcForearmR';
    forearm.position.set(0, -0.34, 0);
    forearm.rotation.x = side > 0 ? -0.42 : -0.28;

    // The bracer tapers with the forearm; a straight sleeve at the same radius
    // as the elbow reads as a bucket strapped to the wrist.
    const gauntlet = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.086, 0.24, 12), leather);
    gauntlet.position.set(0, -0.14, 0);
    addPart(gauntlet, forearm, 1.04);
    for (const dir of [-1, 1]) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.22, 0.014), leatherDark);
      s.position.set(0, -0.14, 0.02);
      s.rotation.z = dir * 0.55;
      forearm.add(s);
    }
    addFurBand(forearm, 0, 0.0, 0, 0.09, 0.016, 0);

    const hand = new THREE.Group();
    hand.name = side < 0 ? 'orcHandL' : 'orcHandR';
    hand.position.set(0, -0.28, 0.02);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.062, 10, 8), skin);
    palm.scale.set(0.85, 1, 0.95);
    addPart(palm, hand);
    // Fingers wrap around the hanging shaft (along −Y).
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.016, 0.05, 3, 6), skin);
      f.position.set((i - 1.5) * 0.028, -0.055, 0.02);
      f.rotation.x = 0.35;
      hand.add(f);
    }
    const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.016, 0.045, 3, 6), skin);
    thumb.position.set(side * 0.05, -0.02, 0.035);
    thumb.rotation.set(0.6, 0, side * 0.7);
    hand.add(thumb);
    forearm.add(hand);
    arm.add(forearm);
    return arm;
  };
  body.add(makeArm(-1));
  const armR = makeArm(1);
  body.add(armR);

  // ===== Distinct orc head: tusks, pointed ears, heavy brow, spiky hair =====
  // Thick neck lifting the skull clear of the mantle — without it the jaw rests
  // straight on the collar and the orc looks decapitated.
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.115, 0.22, 10), skin);
  neck.position.set(0, 1.46, 0.005);
  addPart(neck, g);
  const trap = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), skin);
  trap.scale.set(1.25, 0.55, 0.9);
  trap.position.set(0, 1.37, 0);
  addPart(trap, g);

  const head = new THREE.Group();
  head.name = 'orcHead';
  head.position.set(0, 1.72, 0.008);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 12), skin);
  skull.scale.set(1.05, 1.05, 0.95);
  addPart(skull, head, 1.1);

  // Brow sits high enough to shade the eyes without swallowing them.
  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10), skin);
  brow.scale.set(1.12, 0.48, 0.7);
  brow.position.set(0, 0.118, 0.1);
  addPart(brow, head);
  for (const sx of [-1, 1]) {
    const ridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.016, 0.055, 3, 8), skinDark);
    ridge.rotation.z = Math.PI / 2 + sx * -0.24;
    ridge.rotation.x = -0.2;
    ridge.position.set(sx * 0.06, 0.088, 0.152);
    head.add(ridge);
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), skin);
    cheek.scale.set(0.78, 0.58, 0.45);
    cheek.position.set(sx * 0.1, -0.035, 0.105);
    head.add(cheek);
  }

  // Broad flat orc nose: a bridge running down from the brow into a wide tip.
  const bridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.026, 0.06, 4, 8), skin);
  bridge.rotation.x = 0.35;
  bridge.position.set(0, 0.03, 0.158);
  head.add(bridge);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.048, 10, 8), skin);
  nose.scale.set(1.25, 0.78, 1.0);
  nose.position.set(0, -0.034, 0.178);
  head.add(nose);
  for (const sx of [-1, 1]) {
    const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 6), skinDark);
    nostril.scale.set(0.8, 1, 0.7);
    nostril.position.set(sx * 0.032, -0.052, 0.195);
    head.add(nostril);
  }

  // Prognathic jaw: pushed forward and down off the skull.
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.152, 14, 11), skinDark);
  jaw.scale.set(1.08, 0.78, 1.12);
  jaw.position.set(0, -0.135, 0.1);
  addPart(jaw, head);
  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), skinDark);
  chin.scale.set(1.2, 0.85, 1.05);
  chin.position.set(0, -0.175, 0.16);
  head.add(chin);
  const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.055, 3, 8), uniq(0x3a1c18));
  mouth.rotation.z = Math.PI / 2;
  mouth.position.set(0, -0.095, 0.185);
  head.add(mouth);

  // Tusks rise in front of the mouth, curving up so they read from the
  // gameplay camera instead of hiding in the cheeks.
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.24, 7), tusk);
    t.position.set(sx * 0.058, -0.1, 0.205);
    t.rotation.set(0.62, 0, sx * 0.28);
    head.add(t);
    const root = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 6), tusk);
    root.position.set(sx * 0.05, -0.132, 0.175);
    head.add(root);
  }

  // War paint: a thin brow streak plus cheek slashes — not a glasses bar.
  const warBar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.014, 0.012), paint);
  warBar.position.set(0, 0.095, 0.155);
  head.add(warBar);
  const scar = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.09, 0.012), paintRed);
  scar.position.set(-0.055, 0.01, 0.175);
  scar.rotation.z = 0.55;
  head.add(scar);
  for (const sx of [-1, 1]) {
    const cheekBar = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.07, 0.012), paint);
    cheekBar.position.set(sx * 0.11, -0.05, 0.132);
    cheekBar.rotation.z = sx * -0.2;
    head.add(cheekBar);
  }

  // Eyes: pale sclera with a dark iris, sunk under the brow but still catching
  // light so the face has a direction to read from.
  for (const sx of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.048, 10, 8), skinDark);
    socket.scale.set(1.1, 0.9, 0.6);
    socket.position.set(sx * 0.072, 0.022, 0.135);
    head.add(socket);
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.027, 10, 8), uniq(0xd8d2b8, { roughness: 0.45 }));
    sclera.scale.set(1.1, 0.82, 0.66);
    sclera.position.set(sx * 0.072, 0.022, 0.149);
    head.add(sclera);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.014, 8, 6),
      uniq(0xc45a18, { emissive: 0x802808, emissiveIntensity: 0.45, roughness: 0.32 }),
    );
    iris.position.set(sx * 0.074, 0.022, 0.163);
    head.add(iris);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 5), uniq(0x120a04));
    pupil.position.set(sx * 0.075, 0.022, 0.172);
    head.add(pupil);
  }

  // Pointed ears swept nearly horizontal
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), skin);
    ear.scale.set(0.55, 1.7, 0.45);
    ear.position.set(sx * 0.24, 0.04, -0.02);
    ear.rotation.z = sx * -1.25;
    ear.rotation.y = sx * 0.18;
    ear.rotation.x = -0.12;
    addPart(ear, head);
  }

  // Spiky dark charcoal hair
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.192, 14, 11, 0, Math.PI * 2, 0, Math.PI * 0.46),
    hair,
  );
  hairCap.position.set(0, 0.072, -0.018);
  hairCap.scale.set(1.04, 1.0, 1.06);
  addPart(hairCap, head);
  const spikePts: [number, number, number, number][] = [
    [0, 0.22, 0.04, 1.15],
    [-0.09, 0.2, 0.08, 1.0],
    [0.09, 0.2, 0.08, 1.0],
    [-0.14, 0.16, -0.02, 0.95],
    [0.14, 0.16, -0.02, 0.95],
    [0, 0.18, -0.12, 1.05],
    [-0.1, 0.14, -0.1, 0.9],
    [0.1, 0.14, -0.1, 0.9],
    [-0.05, 0.24, -0.02, 1.1],
    [0.05, 0.24, -0.02, 1.1],
    [0, 0.2, 0.14, 0.85],
  ];
  spikePts.forEach(([x, y, z, s], i) => {
    // Flattened wedges swept back off the crown, so it reads as a matted
    // topknot rather than a bundle of upright pegs. They hug the cap closely —
    // stacked any higher the crown builds into a pine cone.
    const lock = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07 * s, 0), i % 3 === 0 ? hairLit : hair);
    lock.position.set(x, y + 0.02, z);
    lock.rotation.set(-0.55 + z * 1.2, x * 1.8, -x * 1.2);
    lock.scale.set(0.95, 0.85, 1.15);
    head.add(lock);
  });

  g.add(head);

  // ===== Long spear held in the right hand =====
  const spear = new THREE.Group();
  spear.name = 'orcSpear';
  // Shaft along −Y so it follows the hanging / punching arm. Local +Y was
  // cancelling a forward swing and leaving the tip vertical through the thrust.
  spear.position.set(0.02, -0.02, 0.03);
  spear.rotation.set(-0.88, 0.08, 0.08);
  spear.userData.rest = { x: 0.02, y: -0.02, z: 0.03, rx: -0.88, ry: 0.08, rz: 0.08 };
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 2.05, 6), wood);
  shaft.position.y = -0.95;
  addPart(shaft, spear);
  const binding = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.04, 0.1, 6), leatherDark);
  binding.position.y = -1.8;
  spear.add(binding);
  const tip = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), metal);
  tip.scale.set(0.42, 2.05, 0.3);
  tip.position.y = -2.12;
  addPart(tip, spear);
  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.018, 0.34, 0.085),
    uniq(0xeef2f6, { metalness: 0.9, roughness: 0.14 }),
  );
  ridge.position.y = -2.1;
  spear.add(ridge);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.038, 0.1, 6), metal);
  tipCollar.position.y = -1.86;
  spear.add(tipCollar);
  for (const sx of [-1, 1]) {
    const barb = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 4), metal);
    barb.position.set(sx * 0.055, -1.98, 0);
    barb.rotation.z = sx * 2.0;
    spear.add(barb);
  }
  const tipEdge = new THREE.Mesh(
    new THREE.ConeGeometry(0.06, 0.22, 4),
    uniq(0xf0f4f8, { metalness: 0.88, roughness: 0.15 }),
  );
  tipEdge.rotation.x = Math.PI;
  tipEdge.position.y = -2.3;
  spear.add(tipEdge);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.1, 4), metal);
  butt.position.y = 0.12;
  spear.add(butt);
  const handR = armR.getObjectByName('orcHandR');
  (handR ?? armR).add(spear);

  // Hit volume
  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.5, 1.9, 8),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.95;
  hit.name = 'hit';
  g.add(hit);

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
