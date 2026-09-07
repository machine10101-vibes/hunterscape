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

export { createPlayerMesh, setPlayerTool } from './player';


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
      flatShading: true,
      ...opts,
    });

  const fur = uniq(0xeef4fa, { roughness: 0.94 }); // bright white shag
  const furBlue = uniq(0xc4d8e8, { roughness: 0.9 }); // cool blue tint
  const furShade = uniq(0xd0dde8, { roughness: 0.96 });
  const stripe = uniq(0x2a2a30, { roughness: 0.88 });
  const claw = uniq(0x08080a, { roughness: 0.16, metalness: 0.62 }); // polished obsidian
  const clawEdge = uniq(0x3a3a42, { roughness: 0.12, metalness: 0.7, emissive: 0x121218, emissiveIntensity: 0.25 });
  const noseMat = uniq(0x0a0a0a, { roughness: 0.35 });
  const mouthMat = uniq(0x8a3040, { roughness: 0.7 });
  const fangMat = uniq(0xf2ebd4, { roughness: 0.4 });
  const eyeMat = uniq(0xffe070, {
    emissive: 0xff8800,
    emissiveIntensity: 6.2,
    roughness: 0.08,
    metalness: 0.15,
  });

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

  // Legs (thick, slightly bent forward for hunched stance)
  const makeLeg = (side: number) => {
    const leg = new THREE.Group();
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.35, 3, 6), fur);
    thigh.position.set(0, 0.55, 0.05);
    thigh.rotation.x = 0.25;
    thigh.castShadow = true;
    leg.add(thigh);
    // stripe on thigh
    const thStripe = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.1, 0.38), stripe);
    thStripe.position.set(0, 0.62, 0.08);
    leg.add(thStripe);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.28, 3, 6), furBlue);
    shin.position.set(0, 0.22, 0.12);
    shin.rotation.x = -0.15;
    shin.castShadow = true;
    leg.add(shin);
    const shStripe = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.32), stripe);
    shStripe.position.set(0, 0.28, 0.14);
    leg.add(shStripe);
    // Foot
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.48), fur);
    foot.position.set(0, 0.07, 0.18);
    foot.castShadow = true;
    leg.add(foot);
    // Toes / claws — longer knife-clear polished claws (Drive ref, pass2)
    for (let i = 0; i < 5; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.34, 5), i % 2 ? clawEdge : claw);
      c.rotation.x = Math.PI / 2 + 0.22;
      c.position.set(-0.13 + i * 0.065, 0.05, 0.52);
      leg.add(c);
      // Subtle highlight edge for polished read
      if (i % 2 === 0) {
        const edge = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.22, 4), clawEdge);
        edge.rotation.x = Math.PI / 2 + 0.22;
        edge.position.set(-0.13 + i * 0.065, 0.06, 0.58);
        leg.add(edge);
      }
    }
    leg.position.x = side * 0.32;
    return leg;
  };
  const yetiLegL = makeLeg(-1);
  yetiLegL.name = 'yetiLegL';
  g.add(yetiLegL);
  const yetiLegR = makeLeg(1);
  yetiLegR.name = 'yetiLegR';
  g.add(yetiLegR);

  // Torso — bulky upper body, hunched
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 0.55, 4, 10), fur);
  torso.position.set(0, 1.35, -0.08);
  torso.scale.set(1.15, 1, 0.95);
  torso.rotation.x = 0.2;
  torso.castShadow = true;
  torso.name = 'yetiBody';
  addOutline(torso, 1.06, 0x0a1520);
  g.add(torso);

  // Horizontal charcoal stripes on torso
  for (let i = 0; i < 4; i++) {
    const band = new THREE.Mesh(
      new THREE.TorusGeometry(0.58 + i * 0.02, 0.055, 5, 16),
      stripe,
    );
    band.rotation.x = Math.PI / 2 + 0.15;
    band.position.set(0, 1.55 - i * 0.18, -0.05 + i * 0.02);
    band.scale.set(1.05, 0.85, 1);
    g.add(band);
  }

  // Belly slightly bluer
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.38, 8, 6), furBlue);
  belly.position.set(0, 1.15, 0.28);
  belly.scale.set(1.1, 1.0, 0.55);
  g.add(belly);

  // Shoulder mane — layered strand clumps (less chunky than pass1 fat cones)
  const makeManeClump = (x: number, y: number, z: number, s: number, matUse = fur) => {
    const base = new THREE.Mesh(new THREE.ConeGeometry(0.11 * s, 0.36 * s, 5), matUse);
    base.position.set(x, y, z);
    base.rotation.x = -0.55 - s * 0.08;
    base.rotation.z = (x > 0 ? 1 : -1) * 0.08 * s;
    base.castShadow = true;
    g.add(base);
    // 3–4 thinner strand spikes around the base clump
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + s;
      const strand = new THREE.Mesh(
        new THREE.ConeGeometry(0.035 * s, 0.26 * s, 4),
        i % 2 === 0 ? furShade : matUse,
      );
      strand.position.set(
        x + Math.cos(a) * 0.06 * s,
        y + 0.04 * s,
        z + Math.sin(a) * 0.05 * s,
      );
      strand.rotation.x = -0.65 - (i % 3) * 0.08;
      strand.rotation.z = (x > 0 ? 1 : -1) * (0.12 + i * 0.04);
      strand.rotation.y = a * 0.3;
      strand.castShadow = true;
      g.add(strand);
    }
  };
  makeManeClump(-0.55, 1.85, -0.15, 1.25);
  makeManeClump(0.55, 1.85, -0.15, 1.25);
  makeManeClump(-0.35, 2.0, -0.35, 1.1, furShade);
  makeManeClump(0.35, 2.0, -0.35, 1.1, furShade);
  makeManeClump(0, 2.08, -0.42, 1.2);
  makeManeClump(-0.7, 1.65, 0.05, 1.0);
  makeManeClump(0.7, 1.65, 0.05, 1.0);
  makeManeClump(-0.45, 1.95, 0.1, 0.85, furBlue);
  makeManeClump(0.45, 1.95, 0.1, 0.85, furBlue);
  makeManeClump(-0.2, 2.12, -0.25, 0.95);
  makeManeClump(0.2, 2.12, -0.25, 0.95);
  makeManeClump(0, 1.75, -0.55, 1.05, furShade);
  // Extra layered shag around chest / back
  makeManeClump(-0.6, 1.5, -0.25, 0.8, furShade);
  makeManeClump(0.6, 1.5, -0.25, 0.8, furShade);
  makeManeClump(-0.25, 1.9, 0.25, 0.7, fur);
  makeManeClump(0.25, 1.9, 0.25, 0.7, fur);
  makeManeClump(0, 2.2, -0.15, 0.85, furShade);
  makeManeClump(-0.5, 1.75, -0.45, 0.9);
  makeManeClump(0.5, 1.75, -0.45, 0.9);
  makeManeClump(-0.15, 2.05, -0.5, 0.75, furBlue);
  makeManeClump(0.15, 2.05, -0.5, 0.75, furBlue);
  // Limb shag tufts
  for (const sx of [-1, 1]) {
    makeManeClump(sx * 0.38, 0.75, 0.15, 0.5, furShade);
    makeManeClump(sx * 0.35, 0.4, 0.2, 0.42, furBlue);
    makeManeClump(sx * 0.55, 1.4, 0.1, 0.55, fur);
  }
  // Extra stripe fur strips for shaggy read
  for (let i = 0; i < 8; i++) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.58, 0.075), stripe);
    const a = (i / 8) * Math.PI * 2;
    strip.position.set(Math.cos(a) * 0.5, 1.45, Math.sin(a) * 0.36 - 0.05);
    strip.rotation.z = Math.cos(a) * 0.28;
    strip.rotation.x = 0.15;
    g.add(strip);
  }

  // Arms — parented chain so walk/attack rotate a real limb, not disconnected chunks.
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'yetiArmL' : 'yetiArmR';
    arm.position.set(side * 0.68, 1.72, 0.08);
    arm.rotation.z = side * 0.28;
    arm.rotation.x = -0.22;

    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.38, 3, 6), fur);
    upper.position.set(0, -0.22, 0);
    upper.castShadow = true;
    arm.add(upper);
    const uStripe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.09, 0.28), stripe);
    uStripe.position.set(0, -0.18, 0.04);
    arm.add(uStripe);

    const forearm = new THREE.Group();
    forearm.position.set(0, -0.46, 0);
    forearm.rotation.x = -0.38;
    const forearmMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.32, 3, 6), furBlue);
    forearmMesh.position.set(0, -0.2, 0);
    forearmMesh.castShadow = true;
    forearm.add(forearmMesh);
    const fStripe = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.08, 0.24), stripe);
    fStripe.position.set(0, -0.18, 0.04);
    forearm.add(fStripe);

    const hand = new THREE.Group();
    hand.position.set(0, -0.4, 0.05);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 5), fur);
    palm.castShadow = true;
    hand.add(palm);
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.034, 0.28, 5), i % 2 ? clawEdge : claw);
      c.rotation.x = Math.PI / 2 + 0.18;
      c.position.set((i - 1.5) * 0.068, -0.06, 0.18);
      hand.add(c);
      const edge = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.18, 4), clawEdge);
      edge.rotation.x = Math.PI / 2 + 0.18;
      edge.position.set((i - 1.5) * 0.068, -0.05, 0.26);
      hand.add(edge);
    }
    const thumb = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.22, 5), claw);
    thumb.rotation.x = Math.PI / 2 + 0.1;
    thumb.rotation.z = side * 0.7;
    thumb.position.set(side * 0.12, -0.02, 0.1);
    hand.add(thumb);

    forearm.add(hand);
    arm.add(forearm);
    return arm;
  };
  g.add(makeArm(-1));
  g.add(makeArm(1));

  // Head — bear-like snout, roaring
  const head = new THREE.Group();
  head.name = 'yetiHead';
  head.position.set(0, 2.15, 0.15);
  head.rotation.x = -0.15;

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 8), fur);
  skull.scale.set(1.05, 0.95, 1.1);
  skull.castShadow = true;
  addOutline(skull, 1.08, 0x0a1520);
  head.add(skull);

  // Brow ridge / shadowed sockets
  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.12, 0.2), uniq(0xb8c8d4));
  brow.position.set(0, 0.12, 0.28);
  head.add(brow);

  // Glowing amber eyes — larger + stronger emissive for fight readability
  const makeEye = (sx: number) => {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 5), uniq(0x0a0606));
    socket.position.set(sx, 0.06, 0.3);
    head.add(socket);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), eyeMat);
    eye.position.set(sx, 0.06, 0.42);
    eye.name = 'yetiEye';
    head.add(eye);
    const pupil = new THREE.Mesh(
      new THREE.SphereGeometry(0.038, 6, 5),
      uniq(0x1a0800, { emissive: 0x441800, emissiveIntensity: 0.55 }),
    );
    pupil.position.set(sx, 0.06, 0.5);
    head.add(pupil);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 8, 6),
      new THREE.MeshBasicMaterial({
        color: 0xffaa22,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
      }),
    );
    glow.position.set(sx, 0.06, 0.4);
    glow.name = 'yetiEyeGlow';
    head.add(glow);
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 6),
      new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
      }),
    );
    halo.position.set(sx, 0.06, 0.38);
    halo.name = 'yetiEyeGlow';
    head.add(halo);
    const eyeLight = new THREE.PointLight(0xff9900, 1.15, 4.2);
    eyeLight.name = 'yetiEyeLight';
    eyeLight.position.set(sx, 0.06, 0.55);
    head.add(eyeLight);
  };
  makeEye(-0.15);
  makeEye(0.15);

  // Snout
  const snout = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.18, 3, 6), furBlue);
  snout.rotation.x = Math.PI / 2;
  snout.position.set(0, -0.08, 0.42);
  head.add(snout);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 5), noseMat);
  nose.position.set(0, -0.02, 0.58);
  head.add(nose);

  // Open roaring mouth
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.16, 0.28), mouthMat);
  jaw.position.set(0, -0.22, 0.38);
  head.add(jaw);

  // Fangs
  const makeFang = (x: number, y: number, upper: boolean) => {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.16, 4), fangMat);
    fang.rotation.x = upper ? Math.PI : 0;
    fang.position.set(x, y, 0.5);
    head.add(fang);
  };
  makeFang(-0.1, -0.12, true);
  makeFang(0.1, -0.12, true);
  makeFang(-0.08, -0.28, false);
  makeFang(0.08, -0.28, false);

  // Smaller teeth row
  for (let i = 0; i < 5; i++) {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.04), fangMat);
    t.position.set(-0.12 + i * 0.06, -0.14, 0.52);
    head.add(t);
  }

  // Ear tufts
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 5), fur);
    ear.position.set(s * 0.32, 0.22, -0.05);
    ear.rotation.z = s * 0.4;
    head.add(ear);
  }

  g.add(head);

  // Frost breath sits on the muzzle, not as a trail of spheres in front of the body.
  const breath = new THREE.Mesh(
    new THREE.ConeGeometry(0.12, 0.38, 8, 1, true),
    new THREE.MeshStandardMaterial({
      color: 0xd0f6ff,
      emissive: 0x66eeff,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.32,
      flatShading: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  breath.rotation.x = Math.PI / 2;
  breath.position.set(0, -0.12, 0.72);
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
    mist.position.set((i - 1) * 0.04, -0.1, 0.85 + i * 0.1);
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
    raise = 0;
    swipe = 0;
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
      flatShading: true,
      ...opts,
    });

  const skin = uniq(0x7a8d52, { roughness: 0.8 }); // Drive olive
  const skinDark = uniq(0x556838, { roughness: 0.86 });
  const hair = uniq(0x141416, { roughness: 0.96 });
  const leather = uniq(0x3a2614, { roughness: 0.82 });
  const leatherDark = uniq(0x24180c, { roughness: 0.88 });
  const leatherMid = uniq(0x5a3e2b, { roughness: 0.7 });
  const fur = uniq(0xc4a878, { roughness: 0.97 });
  const furDark = uniq(0x9a7a52, { roughness: 0.97 });
  const cloth = uniq(0x1a1e1c, { roughness: 0.93 });
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

  const addFurSpikes = (
    parent: THREE.Object3D,
    cx: number,
    cy: number,
    cz: number,
    radius: number,
    count: number,
    length: number,
    tipRadius: number,
    yawBias = 0,
  ) => {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + yawBias;
      const lenJ = length * (0.8 + (i % 4) * 0.08);
      const spike = new THREE.Mesh(
        new THREE.ConeGeometry(tipRadius * (0.9 + (i % 3) * 0.08), lenJ, 4),
        i % 3 === 0 ? furDark : fur,
      );
      spike.position.set(
        cx + Math.cos(a) * radius,
        cy + lenJ * 0.2 + (i % 3) * 0.012,
        cz + Math.sin(a) * radius,
      );
      spike.rotation.z = -Math.cos(a) * 0.55;
      spike.rotation.x = Math.sin(a) * 0.55;
      spike.rotation.y = (i % 5) * 0.1;
      spike.castShadow = true;
      parent.add(spike);
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

  // ===== Legs / dark trousers + fur-trimmed boots =====
  const makeLeg = (side: number) => {
    const leg = new THREE.Group();
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.135, 0.36, 7), cloth);
    thigh.position.set(0, 0.62, 0);
    addPart(thigh, leg);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.115, 0.22, 7), cloth);
    shin.position.set(0, 0.34, 0.015);
    addPart(shin, leg);

    const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.22, 7), leather);
    boot.position.set(0, 0.16, 0.02);
    addPart(boot, leg, 1.05);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), leatherDark);
    foot.position.set(0, 0.05, 0.08);
    addPart(foot, leg);

    for (let i = 0; i < 3; i++) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 4, 10), leatherMid);
      strap.rotation.x = Math.PI / 2;
      strap.position.set(0, 0.1 + i * 0.07, 0.02);
      leg.add(strap);
    }
    addFurSpikes(leg, 0, 0.26, 0.02, 0.13, 12, 0.11, 0.03);
    leg.position.x = side * 0.17;
    return leg;
  };
  const orcLegL = makeLeg(-1);
  orcLegL.name = 'orcLegL';
  g.add(orcLegL);
  const orcLegR = makeLeg(1);
  orcLegR.name = 'orcLegR';
  g.add(orcLegR);

  // Hips / leather skirt flaps
  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.29, 0.22, 8), leather);
  hips.position.y = 0.78;
  addPart(hips, g);
  for (const [z, ry] of [
    [0.16, 0],
    [-0.16, Math.PI],
  ] as const) {
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.055), leatherDark);
    flap.position.set(0, 0.68, z);
    flap.rotation.y = ry;
    addPart(flap, g);
  }
  for (const sx of [-1, 1]) {
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.2, 0.18), leatherMid);
    flap.position.set(sx * 0.23, 0.68, 0);
    addPart(flap, g);
  }

  // ===== Torso / brown leather vest =====
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.29, 0.55, 9), leather);
  torso.position.y = 1.12;
  addPart(torso, g, 1.07);
  torso.name = 'orcBody';

  const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.32, 0.16), leatherMid);
  chestPlate.position.set(0, 1.2, 0.14);
  addPart(chestPlate, g);

  // Bare upper arms / shoulders peek (olive skin)
  for (const sx of [-1, 1]) {
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 5), skin);
    deltoid.position.set(sx * 0.3, 1.38, 0);
    deltoid.scale.set(0.9, 0.85, 1);
    addPart(deltoid, g);
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
    strap.position.set(0, 1.18, z);
    strap.rotation.z = rotZ;
    g.add(strap);
    // Rivets along strap for motion-read
    for (const t of [-0.18, 0.18]) {
      const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), metal);
      rivet.position.set(Math.sin(rotZ) * t * 0.15, 1.18 + Math.cos(rotZ) * t, z + 0.025);
      g.add(rivet);
    }
  };
  makeStrap(0.55, 0.25);
  makeStrap(-0.55, 0.25);
  makeStrap(0.55, -0.22);
  makeStrap(-0.55, -0.22);

  const chestBuckle = new THREE.Mesh(new THREE.OctahedronGeometry(0.075, 0), metal);
  chestBuckle.scale.set(1.15, 0.9, 0.45);
  chestBuckle.position.set(0, 1.18, 0.29);
  g.add(chestBuckle);

  // Small pouch on hip
  const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.08), leatherMid);
  pouch.position.set(0.28, 0.82, 0.12);
  addPart(pouch, g);

  // ===== Thick spiky tan fur collar (denser Drive silhouette) =====
  const collarBase = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.11, 6, 14), fur);
  collarBase.rotation.x = Math.PI / 2;
  collarBase.position.set(0, 1.42, 0);
  collarBase.scale.set(1.22, 1.08, 0.98);
  addPart(collarBase, g);
  addFurSpikes(g, 0, 1.4, 0, 0.31, 26, 0.22, 0.048);
  addFurSpikes(g, 0, 1.52, -0.04, 0.25, 18, 0.17, 0.04, 0.18);
  addFurSpikes(g, 0, 1.34, 0.06, 0.33, 14, 0.14, 0.036, 0.35);
  for (const sx of [-1, 1]) {
    addFurSpikes(g, sx * 0.32, 1.34, 0.04, 0.13, 12, 0.15, 0.036);
    const drape = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.32, 5), furDark);
    drape.position.set(sx * 0.35, 1.26, 0);
    drape.rotation.z = sx * 0.7;
    drape.rotation.x = -0.28;
    addPart(drape, g);
  }

  // ===== Arms: bare olive upper + leather gauntlets with fur =====
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'orcArmL' : 'orcArmR';
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.105, 0.34, 7), skin);
    upper.position.set(0, 0, 0);
    upper.rotation.z = side * 0.32;
    addPart(upper, arm);

    const gauntlet = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.115, 0.3, 7), leather);
    gauntlet.position.set(side * 0.12, -0.3, 0.02);
    gauntlet.rotation.z = side * 0.18;
    addPart(gauntlet, arm, 1.04);
    for (let i = 0; i < 2; i++) {
      const s = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.015, 4, 8), leatherDark);
      s.rotation.x = Math.PI / 2;
      s.position.set(side * 0.12, -0.22 - i * 0.1, 0.02);
      arm.add(s);
    }
    const furGroup = new THREE.Group();
    furGroup.position.set(side * 0.08, -0.12, 0.02);
    addFurSpikes(furGroup, 0, 0, 0, 0.108, 12, 0.1, 0.028);
    arm.add(furGroup);

    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.12), skin);
    hand.position.set(side * 0.16, -0.48, 0.04);
    addPart(hand, arm);

    arm.position.set(side * 0.36, 1.28, 0);
    return arm;
  };
  g.add(makeArm(-1));
  const armR = makeArm(1);
  g.add(armR);

  // ===== Distinct orc head: tusks, pointed ears, heavy brow, spiky hair =====
  const head = new THREE.Group();
  head.name = 'orcHead';
  head.position.set(0, 1.58, 0);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 8), skin);
  skull.scale.set(1.05, 1.05, 0.95);
  addPart(skull, head, 1.1);

  // Heavy brow ridge
  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.07, 0.12), skinDark);
  brow.position.set(0, 0.08, 0.12);
  head.add(brow);

  // Broad flat nose
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.1), skinDark);
  nose.position.set(0, -0.02, 0.18);
  head.add(nose);

  // Strong prognathic jaw
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.18), skinDark);
  jaw.position.set(0, -0.12, 0.06);
  addPart(jaw, head);

  // White tusks from lower jaw — larger Drive-ref silhouette
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.22, 5), tusk);
    t.position.set(sx * 0.08, -0.1, 0.2);
    t.rotation.x = Math.PI + 0.2;
    t.rotation.z = sx * -0.38;
    head.add(t);
    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.02, 0.07, 4),
      uniq(0xfff8f0, { roughness: 0.28, metalness: 0.12 }),
    );
    tip.position.set(sx * 0.08, 0.02, 0.26);
    tip.rotation.x = Math.PI + 0.2;
    tip.rotation.z = sx * -0.38;
    head.add(tip);
  }

  // Deep-set eyes
  for (const sx of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 4), uniq(0x1a1208));
    socket.position.set(sx * 0.075, 0.03, 0.15);
    head.add(socket);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 5, 4),
      uniq(0x2a3a18, { emissive: 0x1a2808, emissiveIntensity: 0.4 }),
    );
    iris.position.set(sx * 0.075, 0.03, 0.185);
    head.add(iris);
  }

  // Pointed swept-back ears (signature orc — larger in motion)
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.24, 5), skin);
    ear.position.set(sx * 0.22, 0.08, -0.04);
    ear.rotation.z = sx * -0.9;
    ear.rotation.y = sx * 0.4;
    ear.rotation.x = -0.28;
    addPart(ear, head);
  }

  // Spiky dark charcoal hair
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.185, 8, 5), hair);
  hairCap.position.set(0, 0.08, -0.02);
  hairCap.scale.set(1.05, 0.65, 1.05);
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
    [-0.16, 0.1, 0.04, 0.8],
    [0.16, 0.1, 0.04, 0.8],
  ];
  for (const [x, y, z, s] of spikePts) {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.05 * s, 0.15 * s, 4), hair);
    spike.position.set(x, y, z);
    spike.rotation.x = z * 1.1;
    spike.rotation.z = -x * 1.4;
    head.add(spike);
  }

  g.add(head);

  // ===== Long spear (held in right hand) — clearer diamond facets =====
  const spear = new THREE.Group();
  spear.name = 'orcSpear';
  spear.position.set(0.42, 0.2, 0.12);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 2.05, 7), wood);
  shaft.position.y = 1.05;
  addPart(shaft, spear);
  const binding = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.04, 0.1, 6), leatherDark);
  binding.position.y = 1.9;
  spear.add(binding);
  // Faceted metal tip with ridge
  const tip = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), metal);
  tip.scale.set(0.45, 1.75, 0.3);
  tip.position.y = 2.18;
  addPart(tip, spear);
  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.018, 0.3, 0.085),
    uniq(0xeef2f6, { metalness: 0.9, roughness: 0.14 }),
  );
  ridge.position.y = 2.18;
  spear.add(ridge);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.038, 0.1, 7), metal);
  tipCollar.position.y = 1.96;
  spear.add(tipCollar);
  for (const sx of [-1, 1]) {
    const barb = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 4), metal);
    barb.position.set(sx * 0.055, 2.05, 0);
    barb.rotation.z = sx * 1.15;
    spear.add(barb);
  }
  const tipEdge = new THREE.Mesh(
    new THREE.ConeGeometry(0.06, 0.2, 5),
    uniq(0xf0f4f8, { metalness: 0.88, roughness: 0.15 }),
  );
  tipEdge.position.y = 2.34;
  spear.add(tipEdge);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.1, 4), metal);
  butt.rotation.x = Math.PI;
  butt.position.y = 0.02;
  spear.add(butt);
  g.add(spear);

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
    pull = 0;
    thrust = 0;
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
    spear.rotation.x = -thrust * 0.95;
    spear.position.z = 0.12 + thrust * 0.55 - pull * 0.25;
  }
  if (armR) armR.rotation.x = -thrust * 1.05 + pull * 0.4;
  const head = orc.getObjectByName('orcHead');
  if (head) head.rotation.x = -thrust * 0.12;
}
