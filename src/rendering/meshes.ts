import * as THREE from 'three';

const matCache = new Map<string, THREE.MeshStandardMaterial>();

function mat(
  color: number,
  opts: Partial<THREE.MeshStandardMaterialParameters> = {},
): THREE.MeshStandardMaterial {
  const key = `${color}_${opts.roughness ?? 0.8}_${opts.metalness ?? 0.05}_${opts.flatShading ? 1 : 0}_${opts.emissive ?? 0}_${opts.emissiveIntensity ?? 0}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.85,
      metalness: opts.metalness ?? 0.05,
      flatShading: opts.flatShading ?? true,
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

export function createPlayerMesh(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'player';

  // Soft contact shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 20),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  shadow.name = 'contactShadow';
  g.add(shadow);

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.55, 4, 8), mat(0x3a5a8a));
  body.position.y = 0.85;
  body.castShadow = true;
  addOutline(body, 1.1, 0x061018);
  g.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), mat(0xd4a574));
  head.position.y = 1.45;
  head.castShadow = true;
  addOutline(head, 1.12, 0x1a1008);
  g.add(head);

  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.23, 8, 6), mat(0x2a1a0a));
  hair.position.y = 1.55;
  hair.scale.set(1, 0.55, 1);
  g.add(hair);

  const tunic = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.5, 8), mat(0x4a6a3a));
  tunic.position.y = 0.75;
  tunic.castShadow = true;
  g.add(tunic);

  // Belt / pouch for silhouette detail
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.04, 6, 12), mat(0x3a2a12, { roughness: 0.7 }));
  belt.rotation.x = Math.PI / 2;
  belt.position.y = 0.55;
  g.add(belt);

  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.12), mat(0xc09060));
  nose.position.set(0, 1.42, 0.2);
  g.add(nose);

  // Tool holders (shown during gather/combat)
  const toolRoot = new THREE.Group();
  toolRoot.name = 'toolRoot';
  toolRoot.position.set(0.38, 0.95, 0.15);
  toolRoot.visible = false;
  g.add(toolRoot);

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

function createHatchetTool(): THREE.Group {
  const g = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.55, 5), mat(0x5a3a1a));
  handle.rotation.z = 0.35;
  g.add(handle);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.04), mat(0x8a9aaa, { metalness: 0.55, roughness: 0.4 }));
  blade.position.set(0.12, 0.22, 0);
  blade.rotation.z = 0.35;
  g.add(blade);
  return g;
}

function createPickaxeTool(): THREE.Group {
  const g = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.6, 5), mat(0x5a3a1a));
  handle.rotation.z = -0.2;
  g.add(handle);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.06), mat(0x7a8a9a, { metalness: 0.5, roughness: 0.45 }));
  head.position.set(0.05, 0.28, 0);
  g.add(head);
  return g;
}

function createSwordTool(): THREE.Group {
  const g = new THREE.Group();
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.02), mat(0xa0b0c0, { metalness: 0.6, roughness: 0.35 }));
  blade.position.y = 0.15;
  g.add(blade);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.04), mat(0xc4a040, { metalness: 0.4 }));
  guard.position.y = -0.1;
  g.add(guard);
  const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.18, 5), mat(0x4a2a10));
  hilt.position.y = -0.2;
  g.add(hilt);
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
}

export function createTree(seed = 0): THREE.Group {
  const g = new THREE.Group();
  g.name = 'tree';
  const h = 1.55 + (seed % 5) * 0.18;
  const trunkTint = seed % 3 === 0 ? 0x4a3218 : seed % 3 === 1 ? 0x5a3a1a : 0x3e2a12;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.28, h, 7), mat(trunkTint));
  trunk.position.y = h / 2;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  g.add(trunk);

  // Bark ridge
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.06, h * 0.7, 0.08), mat(0x2e1c0c));
  ridge.position.set(0.14, h * 0.45, 0);
  g.add(ridge);

  const canopyA = seed % 2 === 0 ? 0x2a6a2a : 0x357a32;
  const canopyB = seed % 3 === 0 ? 0x1e5a22 : 0x458040;
  for (let i = 0; i < 4; i++) {
    const r = 0.85 - i * 0.12;
    const leaf = new THREE.Mesh(
      new THREE.ConeGeometry(r, 1.05 - i * 0.12, 8),
      mat(i % 2 === 0 ? canopyA : canopyB),
    );
    leaf.position.y = h + 0.28 + i * 0.48;
    leaf.rotation.y = (seed + i) * 0.4;
    leaf.castShadow = true;
    g.add(leaf);
  }

  // Root flare
  const roots = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 0.18, 6), mat(0x3a2810));
  roots.position.y = 0.08;
  roots.receiveShadow = true;
  g.add(roots);

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
    mat(seed % 2 === 0 ? 0x6a6a6a : 0x5a5e62, { roughness: 0.92 }),
  );
  base.position.y = 0.4;
  base.rotation.set(0.2, seed, 0.1);
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);

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
  const canvas = new THREE.Mesh(new THREE.ConeGeometry(1.15, 1.45, 4), mat(0x6a5030));
  canvas.position.y = 0.72;
  canvas.rotation.y = Math.PI / 4;
  canvas.castShadow = true;
  canvas.receiveShadow = true;
  g.add(canvas);

  // Entrance flap darker
  const flap = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.7), mat(0x4a3818));
  flap.position.set(0.55, 0.4, 0.55);
  flap.rotation.y = Math.PI / 4;
  g.add(flap);

  // Pegs
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
  const zenith = new THREE.Color(0x4a7ab8);
  const mid = new THREE.Color(0x87a8c8);
  const horizon = new THREE.Color(0xc8b898);
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

export function createGround(size = 48): THREE.Mesh {
  const segments = 48;
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);

  const grassA = new THREE.Color(0x3d6b35);
  const grassB = new THREE.Color(0x4a7a3a);
  const grassC = new THREE.Color(0x2f5a2a);
  const dirt = new THREE.Color(0x6b5a3a);
  const dirtDark = new THREE.Color(0x5a4a2e);
  const moss = new THREE.Color(0x355a30);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i); // plane local Y = world Z after rotate
    const n =
      Math.sin(x * 0.35) * Math.cos(y * 0.3) * 0.1 +
      Math.sin(x * 0.9 + y * 0.4) * 0.04;
    pos.setZ(i, n);

    // Dirt path: curve from camp toward trees/rocks
    const pathT = Math.exp(-Math.pow(x * 0.15 + 0.05, 2) * 8 - Math.pow(y * 0.12 - 0.15, 2) * 3);
    const path2 = Math.exp(-Math.pow(x + 0.5 - y * 0.35, 2) * 2.2 - Math.pow(y - 1.2, 2) * 0.08);
    const pathAmt = Math.max(pathT, path2 * 0.85);

    const noise = (Math.sin(x * 1.7) * Math.cos(y * 1.3) + 1) * 0.5;
    if (pathAmt > 0.35) {
      tmp.copy(dirt).lerp(dirtDark, noise);
      tmp.lerp(grassA, 1 - Math.min(1, pathAmt * 1.4));
    } else if (noise > 0.72) {
      tmp.copy(moss);
    } else {
      tmp.copy(grassA).lerp(noise > 0.5 ? grassB : grassC, noise);
    }

    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.96,
      metalness: 0.0,
      flatShading: true,
    }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  mesh.name = 'ground';
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

  const fur = uniq(0xe8f0f8); // alice-blue white
  const furBlue = uniq(0xc8dce8); // cool blue tint
  const stripe = uniq(0x333338);
  const claw = uniq(0x0a0a0c, { roughness: 0.35, metalness: 0.25 });
  const noseMat = uniq(0x0a0a0a, { roughness: 0.4 });
  const mouthMat = uniq(0x8a3040, { roughness: 0.7 });
  const fangMat = uniq(0xf0e8d0, { roughness: 0.45 });
  const eyeMat = uniq(0xffbf00, {
    emissive: 0xffaa00,
    emissiveIntensity: 1.35,
    roughness: 0.3,
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
    // Toes / claws
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.18, 4), claw);
      c.rotation.x = Math.PI / 2;
      c.position.set(-0.1 + i * 0.07, 0.06, 0.42);
      leg.add(c);
    }
    leg.position.x = side * 0.32;
    return leg;
  };
  g.add(makeLeg(-1));
  g.add(makeLeg(1));

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

  // Shoulder mane / spiky fur clumps
  const makeManeClump = (x: number, y: number, z: number, s: number) => {
    const clump = new THREE.Mesh(new THREE.ConeGeometry(0.18 * s, 0.4 * s, 5), fur);
    clump.position.set(x, y, z);
    clump.rotation.x = -0.55 - s * 0.08;
    clump.castShadow = true;
    g.add(clump);
  };
  makeManeClump(-0.55, 1.85, -0.15, 1.2);
  makeManeClump(0.55, 1.85, -0.15, 1.2);
  makeManeClump(-0.35, 2.0, -0.35, 1.0);
  makeManeClump(0.35, 2.0, -0.35, 1.0);
  makeManeClump(0, 2.05, -0.4, 1.15);
  makeManeClump(-0.7, 1.65, 0.05, 0.9);
  makeManeClump(0.7, 1.65, 0.05, 0.9);

  // Arms
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'yetiArmL' : 'yetiArmR';
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.4, 3, 6), fur);
    upper.position.set(0, 0, 0);
    upper.rotation.z = side * 0.55;
    upper.rotation.x = -0.35;
    upper.castShadow = true;
    arm.add(upper);
    const uStripe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.09, 0.28), stripe);
    uStripe.position.set(side * 0.05, -0.05, 0.05);
    uStripe.rotation.z = side * 0.55;
    arm.add(uStripe);
    const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.35, 3, 6), furBlue);
    forearm.position.set(side * 0.28, -0.45, 0.25);
    forearm.rotation.z = side * 0.35;
    forearm.rotation.x = -0.5;
    forearm.castShadow = true;
    arm.add(forearm);
    const fStripe = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.08, 0.24), stripe);
    fStripe.position.set(side * 0.28, -0.4, 0.28);
    arm.add(fStripe);
    // Hand
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 5), fur);
    hand.position.set(side * 0.42, -0.72, 0.45);
    hand.castShadow = true;
    arm.add(hand);
    // Claws
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.22, 4), claw);
      c.rotation.x = Math.PI / 2 + 0.3;
      c.position.set(side * 0.42 + (i - 1.5) * 0.06, -0.78, 0.62);
      arm.add(c);
    }
    arm.position.set(side * 0.72, 1.7, 0.05);
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

  // Glowing amber eyes
  const makeEye = (sx: number) => {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), uniq(0x1a1010));
    socket.position.set(sx, 0.06, 0.32);
    head.add(socket);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 6), eyeMat);
    eye.position.set(sx, 0.06, 0.36);
    eye.name = 'yetiEye';
    head.add(eye);
  };
  makeEye(-0.14);
  makeEye(0.14);

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

/** Animate yeti arms for a melee swipe */
export function animateYetiSwipe(yeti: THREE.Group, progress: number): void {
  const armR = yeti.getObjectByName('yetiArmR');
  const armL = yeti.getObjectByName('yetiArmL');
  // progress 0→1 swing
  const swing = Math.sin(progress * Math.PI);
  if (armR) {
    armR.rotation.x = -swing * 1.1;
    armR.rotation.y = swing * 0.4;
  }
  if (armL) {
    armL.rotation.x = -swing * 0.5;
  }
  const head = yeti.getObjectByName('yetiHead');
  if (head) head.rotation.x = -0.15 - swing * 0.2;
}
