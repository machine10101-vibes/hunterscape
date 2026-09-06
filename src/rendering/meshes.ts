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

  // --- Palette (Hunter Drive male hunter) ---
  const skin = mat(0xb8866b, { roughness: 0.88 });
  const skinDark = mat(0x9a6a4e, { roughness: 0.9 });
  const hairCol = mat(0x2a1a0c, { roughness: 0.95 });
  const leather = mat(0x3e2a18, { roughness: 0.82 });
  const leatherDark = mat(0x2a1c10, { roughness: 0.88 });
  const leatherMid = mat(0x5a3c28, { roughness: 0.72 });
  const fur = mat(0xa88868, { roughness: 0.97 });
  const furDark = mat(0x7a5e44, { roughness: 0.97 });
  const cloth = mat(0x2c322c, { roughness: 0.92 }); // charcoal/olive
  const clothDark = mat(0x1e221e, { roughness: 0.94 });
  const metal = mat(0xc8d0d8, { metalness: 0.72, roughness: 0.28 });
  const wood = mat(0x4a3014, { roughness: 0.88 });

  const addPart = (
    mesh: THREE.Mesh,
    parent: THREE.Object3D = g,
    outlineScale?: number,
    outlineColor = 0x0a0806,
  ) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    if (outlineScale) addOutline(mesh, outlineScale, outlineColor);
    parent.add(mesh);
    return mesh;
  };

  /** Spiky fur ring / clump helper */
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
      const spike = new THREE.Mesh(new THREE.ConeGeometry(tipRadius, length, 4), i % 3 === 0 ? furDark : fur);
      spike.position.set(
        cx + Math.cos(a) * radius,
        cy + length * 0.25,
        cz + Math.sin(a) * radius,
      );
      // Point outward-up
      spike.rotation.z = -Math.cos(a) * 0.55;
      spike.rotation.x = Math.sin(a) * 0.55;
      spike.castShadow = true;
      parent.add(spike);
    }
  };

  // ===== Legs / trousers =====
  const makeLeg = (side: number) => {
    const leg = new THREE.Group();
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.42, 6), cloth);
    thigh.position.set(0, 0.55, 0);
    addPart(thigh, leg);

    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.28, 6), clothDark);
    shin.position.set(0, 0.28, 0.02);
    addPart(shin, leg);

    // Boot shaft
    const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.13, 0.38, 6), leather);
    boot.position.set(0, 0.2, 0.02);
    addPart(boot, leg, 1.06);

    // Boot foot
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), leatherDark);
    foot.position.set(0, 0.05, 0.08);
    addPart(foot, leg);

    // Horizontal straps on shin
    for (let i = 0; i < 3; i++) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.125, 0.018, 4, 10), leatherMid);
      strap.rotation.x = Math.PI / 2;
      strap.position.set(0, 0.12 + i * 0.1, 0.02);
      leg.add(strap);
    }

    // Fur trim at boot top (below knee)
    addFurSpikes(leg, 0, 0.36, 0.02, 0.12, 8, 0.1, 0.035);
    // Fur trim at ankle
    addFurSpikes(leg, 0, 0.08, 0.04, 0.11, 7, 0.08, 0.03);

    leg.position.x = side * 0.16;
    return leg;
  };
  g.add(makeLeg(-1));
  g.add(makeLeg(1));

  // Hip / lower tunic flaps
  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.22, 8), leather);
  hips.position.y = 0.78;
  addPart(hips, g);

  // Faulds / leather flaps front+back
  for (const [z, ry] of [
    [0.16, 0],
    [-0.16, Math.PI],
  ] as const) {
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.06), leatherDark);
    flap.position.set(0, 0.68, z);
    flap.rotation.y = ry;
    addPart(flap, g);
  }
  // Side flaps
  for (const sx of [-1, 1]) {
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.2, 0.18), leatherMid);
    flap.position.set(sx * 0.22, 0.68, 0);
    addPart(flap, g);
  }

  // ===== Torso / leather vest =====
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.55, 8), leather);
  torso.position.y = 1.12;
  addPart(torso, g, 1.08, 0x0a0806);

  // Chest plate facets (extra low-poly plates)
  const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.32, 0.18), leatherMid);
  chestPlate.position.set(0, 1.2, 0.14);
  addPart(chestPlate, g);

  // Thick belt
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.1, 10), leatherDark);
  belt.position.y = 0.88;
  addPart(belt, g);
  const beltBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.06), metal);
  beltBuckle.position.set(0, 0.88, 0.28);
  g.add(beltBuckle);

  // X chest straps (front)
  const makeStrap = (rotZ: number, z = 0.22) => {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.55, 0.035), leatherDark);
    strap.position.set(0, 1.18, z);
    strap.rotation.z = rotZ;
    g.add(strap);
  };
  makeStrap(0.55, 0.24);
  makeStrap(-0.55, 0.24);
  // X on back
  makeStrap(0.55, -0.22);
  makeStrap(-0.55, -0.22);

  // Silver chest buckle at X center
  const chestBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.05), metal);
  chestBuckle.position.set(0, 1.18, 0.27);
  g.add(chestBuckle);
  const chestBuckleRing = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 4, 8), metal);
  chestBuckleRing.position.set(0, 1.18, 0.3);
  g.add(chestBuckleRing);

  // Shoulder strap anchors
  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.16), leatherMid);
    pad.position.set(sx * 0.22, 1.4, 0);
    addPart(pad, g);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.01, 4, 8), metal);
    ring.position.set(sx * 0.2, 1.38, 0.12);
    g.add(ring);
  }

  // ===== Fur collar (thick spiky around neck/shoulders) =====
  const collarBase = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.09, 6, 12), fur);
  collarBase.rotation.x = Math.PI / 2;
  collarBase.position.set(0, 1.42, 0);
  collarBase.scale.set(1.15, 1.0, 0.95);
  addPart(collarBase, g);

  // Dense spike clumps for collar volume (studio-ref fidelity)
  addFurSpikes(g, 0, 1.4, 0, 0.28, 20, 0.2, 0.048);
  addFurSpikes(g, 0, 1.5, -0.04, 0.24, 16, 0.17, 0.042, 0.18);
  addFurSpikes(g, 0, 1.36, 0.06, 0.3, 12, 0.14, 0.038, 0.35);
  // Shoulder drapes — thicker layered spikes
  for (const sx of [-1, 1]) {
    addFurSpikes(g, sx * 0.28, 1.35, 0.05, 0.13, 10, 0.15, 0.038);
    addFurSpikes(g, sx * 0.34, 1.22, 0.02, 0.1, 8, 0.12, 0.034);
    const drape = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.32, 5), furDark);
    drape.position.set(sx * 0.34, 1.26, 0);
    drape.rotation.z = sx * 0.72;
    drape.rotation.x = -0.32;
    addPart(drape, g);
    const drape2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 4), fur);
    drape2.position.set(sx * 0.38, 1.18, 0.06);
    drape2.rotation.z = sx * 0.85;
    drape2.rotation.x = -0.2;
    addPart(drape2, g);
  }

  // ===== Arms (olive sleeves + leather gauntlets) =====
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    // Upper arm / sleeve
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.32, 6), cloth);
    upper.position.set(0, 0, 0);
    upper.rotation.z = side * 0.35;
    addPart(upper, arm);

    // Forearm gauntlet
    const gauntlet = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.11, 0.28, 6), leather);
    gauntlet.position.set(side * 0.12, -0.28, 0.02);
    gauntlet.rotation.z = side * 0.2;
    addPart(gauntlet, arm, 1.05);

    // Gauntlet straps
    for (let i = 0; i < 2; i++) {
      const s = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.015, 4, 8), leatherDark);
      s.rotation.x = Math.PI / 2;
      s.position.set(side * 0.12, -0.22 - i * 0.1, 0.02);
      arm.add(s);
    }

    // Fur trim at top of gauntlet (near elbow)
    const furGroup = new THREE.Group();
    furGroup.position.set(side * 0.08, -0.12, 0.02);
    addFurSpikes(furGroup, 0, 0, 0, 0.1, 8, 0.09, 0.03);
    arm.add(furGroup);

    // Hand
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.12), skin);
    hand.position.set(side * 0.16, -0.44, 0.04);
    addPart(hand, arm);

    arm.position.set(side * 0.34, 1.28, 0);
    return arm;
  };
  g.add(makeArm(-1));
  g.add(makeArm(1));

  // ===== Head =====
  const head = new THREE.Group();
  head.position.set(0, 1.58, 0);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), skin);
  skull.scale.set(1.02, 1.1, 0.96);
  addPart(skull, head, 1.12, 0x1a1008);

  // Strong jaw / chin — readable from elevated camera
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.18), skinDark);
  jaw.position.set(0, -0.11, 0.05);
  addPart(jaw, head);
  const chin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.1), skinDark);
  chin.position.set(0, -0.16, 0.1);
  head.add(chin);

  // Cheek planes
  for (const sx of [-1, 1]) {
    const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.11, 0.11), skinDark);
    cheek.position.set(sx * 0.13, -0.02, 0.09);
    head.add(cheek);
  }

  // Nose bridge + tip
  const noseBridge = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.06), skinDark);
  noseBridge.position.set(0, 0.02, 0.15);
  head.add(noseBridge);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.06, 0.09), skinDark);
  nose.position.set(0, -0.03, 0.18);
  head.add(nose);

  // Heavy brows
  for (const sx of [-1, 1]) {
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.03, 0.045), hairCol);
    brow.position.set(sx * 0.075, 0.07, 0.15);
    brow.rotation.z = sx * -0.18;
    head.add(brow);
  }

  // Eyes (larger sockets + iris + highlight for distance read)
  for (const sx of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.042, 6, 5), mat(0x120c0a));
    socket.position.set(sx * 0.07, 0.02, 0.145);
    head.add(socket);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.024, 6, 5),
      mat(0x4a3420, { emissive: 0x2a1810, emissiveIntensity: 0.25 }),
    );
    iris.position.set(sx * 0.07, 0.02, 0.175);
    head.add(iris);
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.01, 4, 3), mat(0xf0e8d8, { emissive: 0xffffff, emissiveIntensity: 0.4 }));
    hl.position.set(sx * 0.065, 0.03, 0.19);
    head.add(hl);
  }

  // Mouth line
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.018, 0.035), mat(0x4a2818));
  mouth.position.set(0, -0.13, 0.15);
  head.add(mouth);

  // Ears
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.08, 0.04), skin);
    ear.position.set(sx * 0.17, 0.02, 0);
    head.add(ear);
  }

  // Short spiky dark brown hair
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.175, 7, 5), hairCol);
  hairCap.position.set(0, 0.06, -0.02);
  hairCap.scale.set(1.05, 0.7, 1.05);
  addPart(hairCap, head);

  // Spiky clumps
  const spikePts: [number, number, number, number][] = [
    [0, 0.2, 0.05, 1.1],
    [-0.08, 0.18, 0.08, 0.95],
    [0.08, 0.18, 0.08, 0.95],
    [-0.12, 0.14, -0.02, 0.9],
    [0.12, 0.14, -0.02, 0.9],
    [0, 0.16, -0.12, 1.0],
    [-0.1, 0.12, -0.1, 0.85],
    [0.1, 0.12, -0.1, 0.85],
    [-0.06, 0.2, -0.04, 1.05],
    [0.06, 0.2, -0.04, 1.05],
    [0, 0.22, 0.12, 0.8],
  ];
  for (const [x, y, z, s] of spikePts) {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.05 * s, 0.14 * s, 4), hairCol);
    spike.position.set(x, y, z);
    spike.rotation.x = z * 1.2;
    spike.rotation.z = -x * 1.5;
    head.add(spike);
  }

  g.add(head);

  // ===== Idle spear (held when no gather/combat tool) =====
  const idleSpear = new THREE.Group();
  idleSpear.name = 'idleSpear';
  idleSpear.position.set(-0.42, 0.15, 0.12);
  // Shaft
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 1.85, 5), wood);
  shaft.position.y = 0.95;
  addPart(shaft, idleSpear);
  // Faceted diamond spearhead (studio-ref fidelity)
  const tipCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 0), metal);
  tipCore.scale.set(0.55, 1.55, 0.4);
  tipCore.position.y = 1.95;
  addPart(tipCore, idleSpear);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.08, 6), metal);
  tipCollar.position.y = 1.78;
  idleSpear.add(tipCollar);
  // Side barbs / facets
  for (const sx of [-1, 1]) {
    const barb = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 4), metal);
    barb.position.set(sx * 0.055, 1.86, 0);
    barb.rotation.z = sx * 1.15;
    idleSpear.add(barb);
  }
  const tipEdge = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 5), mat(0xe8eef4, { metalness: 0.8, roughness: 0.22 }));
  tipEdge.position.y = 2.08;
  idleSpear.add(tipEdge);
  // Butt cap
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), metal);
  butt.rotation.x = Math.PI;
  butt.position.y = 0.02;
  idleSpear.add(butt);
  g.add(idleSpear);

  // Tool holders (shown during gather/combat) — right hand
  const toolRoot = new THREE.Group();
  toolRoot.name = 'toolRoot';
  toolRoot.position.set(0.42, 0.95, 0.15);
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
  // Default spear held when idle; hide while swinging gather/combat tools
  const spear = player.getObjectByName('idleSpear');
  if (spear) spear.visible = tool === null;
}

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

  const canopyA = seed % 2 === 0 ? 0x2a6a2a : 0x357a32;
  const canopyB = seed % 3 === 0 ? 0x1e5a22 : 0x458040;
  const canopyC = 0x1a4a1c;
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
  const zenith = new THREE.Color(0x3a6aaa);
  const mid = new THREE.Color(0x7aa0c8);
  const horizon = new THREE.Color(0xd0b898);
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
  const segments = 72;
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);

  const grassA = new THREE.Color(0x3d6b35);
  const grassB = new THREE.Color(0x4f8240);
  const grassC = new THREE.Color(0x2a5628);
  const dirt = new THREE.Color(0x6b5a3a);
  const dirtDark = new THREE.Color(0x524028);
  const moss = new THREE.Color(0x355a30);
  const snow = new THREE.Color(0xd8e8f0);
  const snowBlue = new THREE.Color(0xb8d0e0);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i); // plane local Y = world Z after rotate
    const n =
      Math.sin(x * 0.35) * Math.cos(y * 0.3) * 0.12 +
      Math.sin(x * 0.9 + y * 0.4) * 0.05 +
      Math.sin(x * 2.4 + y * 1.8) * 0.02;
    pos.setZ(i, n);

    // Dirt paths: camp spokes + west trail toward orc clearing
    const pathT = Math.exp(-Math.pow(x * 0.15 + 0.05, 2) * 8 - Math.pow(y * 0.12 - 0.15, 2) * 3);
    const path2 = Math.exp(-Math.pow(x + 0.5 - y * 0.35, 2) * 2.2 - Math.pow(y - 1.2, 2) * 0.08);
    const pathWest = Math.exp(-Math.pow(x + 3.2 - y * 0.15, 2) * 1.4 - Math.pow(y + 2.5, 2) * 0.06);
    const pathAmt = Math.max(pathT, path2 * 0.85, pathWest * 0.75);

    // Snowy NE yeti clearing
    const snowAmt = Math.exp(-Math.pow(x - 4.2, 2) * 0.12 - Math.pow(y - 7.2, 2) * 0.1);

    const noise = (Math.sin(x * 1.7) * Math.cos(y * 1.3) + 1) * 0.5;
    const noise2 = (Math.sin(x * 3.1 + 1.7) * Math.cos(y * 2.6) + 1) * 0.5;
    if (snowAmt > 0.28) {
      tmp.copy(snow).lerp(snowBlue, noise);
      tmp.lerp(grassA, 1 - Math.min(1, snowAmt * 1.6));
    } else if (pathAmt > 0.32) {
      tmp.copy(dirt).lerp(dirtDark, noise);
      tmp.lerp(grassA, 1 - Math.min(1, pathAmt * 1.4));
    } else if (noise > 0.74) {
      tmp.copy(moss).lerp(grassC, noise2 * 0.4);
    } else {
      tmp.copy(grassA).lerp(noise > 0.5 ? grassB : grassC, noise * 0.85 + noise2 * 0.15);
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
      roughness: 0.94,
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
  const eyeMat = uniq(0xffc820, {
    emissive: 0xff9900,
    emissiveIntensity: 2.1,
    roughness: 0.22,
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
  makeManeClump(-0.55, 1.85, -0.15, 1.25);
  makeManeClump(0.55, 1.85, -0.15, 1.25);
  makeManeClump(-0.35, 2.0, -0.35, 1.1);
  makeManeClump(0.35, 2.0, -0.35, 1.1);
  makeManeClump(0, 2.08, -0.42, 1.25);
  makeManeClump(-0.7, 1.65, 0.05, 1.0);
  makeManeClump(0.7, 1.65, 0.05, 1.0);
  makeManeClump(-0.45, 1.95, 0.1, 0.85);
  makeManeClump(0.45, 1.95, 0.1, 0.85);
  makeManeClump(-0.2, 2.12, -0.25, 0.95);
  makeManeClump(0.2, 2.12, -0.25, 0.95);
  makeManeClump(0, 1.75, -0.55, 1.05);
  // Extra stripe fur strips for shaggy read
  for (let i = 0; i < 6; i++) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.55, 0.08), stripe);
    const a = (i / 6) * Math.PI * 2;
    strip.position.set(Math.cos(a) * 0.48, 1.45, Math.sin(a) * 0.35 - 0.05);
    strip.rotation.z = Math.cos(a) * 0.25;
    strip.rotation.x = 0.15;
    g.add(strip);
  }

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
    // Claws — longer, sharper, dark glint
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.28, 4), claw);
      c.rotation.x = Math.PI / 2 + 0.35;
      c.position.set(side * 0.42 + (i - 1.5) * 0.065, -0.8, 0.66);
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

  // Frost breath cone (animated via name)
  const breath = new THREE.Mesh(
    new THREE.ConeGeometry(0.18, 0.55, 6, 1, true),
    new THREE.MeshStandardMaterial({
      color: 0xb8e8ff,
      emissive: 0x66ccee,
      emissiveIntensity: 0.65,
      transparent: true,
      opacity: 0.35,
      flatShading: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  breath.rotation.x = Math.PI / 2;
  breath.position.set(0, 2.0, 0.85);
  breath.name = 'yetiBreath';
  g.add(breath);

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
    color: 0xffe8c0,
    transparent: true,
    opacity: 0.06,
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

  const skin = uniq(0x6a8a3a, { roughness: 0.82 }); // olive-green
  const skinDark = uniq(0x4e6a2a, { roughness: 0.88 });
  const hair = uniq(0x1a1a1c, { roughness: 0.95 });
  const leather = uniq(0x3e2a18, { roughness: 0.8 });
  const leatherDark = uniq(0x2a1c10, { roughness: 0.86 });
  const leatherMid = uniq(0x5a3c28, { roughness: 0.72 });
  const fur = uniq(0xc4a878, { roughness: 0.96 });
  const furDark = uniq(0x9a7a52, { roughness: 0.96 });
  const cloth = uniq(0x1e2220, { roughness: 0.92 });
  const metal = uniq(0xc0c8d0, { metalness: 0.75, roughness: 0.28 });
  const wood = uniq(0x4a3014, { roughness: 0.88 });
  const tusk = uniq(0xf2ece0, { roughness: 0.45 });

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
      const spike = new THREE.Mesh(
        new THREE.ConeGeometry(tipRadius, length, 4),
        i % 3 === 0 ? furDark : fur,
      );
      spike.position.set(cx + Math.cos(a) * radius, cy + length * 0.22, cz + Math.sin(a) * radius);
      spike.rotation.z = -Math.cos(a) * 0.55;
      spike.rotation.x = Math.sin(a) * 0.55;
      spike.castShadow = true;
      parent.add(spike);
    }
  };

  // Contact shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.4, 18),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  // ===== Legs / dark trousers + fur-trimmed boots =====
  const makeLeg = (side: number) => {
    const leg = new THREE.Group();
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.135, 0.42, 7), cloth);
    thigh.position.set(0, 0.55, 0);
    addPart(thigh, leg);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.115, 0.28, 7), cloth);
    shin.position.set(0, 0.28, 0.02);
    addPart(shin, leg);

    const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.135, 0.38, 7), leather);
    boot.position.set(0, 0.2, 0.02);
    addPart(boot, leg, 1.05);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), leatherDark);
    foot.position.set(0, 0.05, 0.08);
    addPart(foot, leg);

    for (let i = 0; i < 3; i++) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 4, 10), leatherMid);
      strap.rotation.x = Math.PI / 2;
      strap.position.set(0, 0.12 + i * 0.1, 0.02);
      leg.add(strap);
    }
    addFurSpikes(leg, 0, 0.36, 0.02, 0.125, 9, 0.1, 0.032);
    leg.position.x = side * 0.17;
    return leg;
  };
  g.add(makeLeg(-1));
  g.add(makeLeg(1));

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

  // X chest straps + silver buckle
  const makeStrap = (rotZ: number, z = 0.22) => {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.55, 0.032), leatherDark);
    strap.position.set(0, 1.18, z);
    strap.rotation.z = rotZ;
    g.add(strap);
  };
  makeStrap(0.55, 0.24);
  makeStrap(-0.55, 0.24);
  makeStrap(0.55, -0.22);
  makeStrap(-0.55, -0.22);

  const chestBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.11, 0.05), metal);
  chestBuckle.position.set(0, 1.18, 0.28);
  g.add(chestBuckle);

  // Small pouch on hip
  const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.08), leatherMid);
  pouch.position.set(0.28, 0.82, 0.12);
  addPart(pouch, g);

  // ===== Thick spiky tan fur collar =====
  const collarBase = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.1, 6, 12), fur);
  collarBase.rotation.x = Math.PI / 2;
  collarBase.position.set(0, 1.42, 0);
  collarBase.scale.set(1.2, 1.05, 0.95);
  addPart(collarBase, g);
  addFurSpikes(g, 0, 1.4, 0, 0.3, 18, 0.2, 0.05);
  addFurSpikes(g, 0, 1.5, -0.04, 0.24, 14, 0.16, 0.042, 0.2);
  for (const sx of [-1, 1]) {
    addFurSpikes(g, sx * 0.3, 1.34, 0.04, 0.12, 8, 0.14, 0.038);
    const drape = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.3, 5), furDark);
    drape.position.set(sx * 0.34, 1.26, 0);
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
    addFurSpikes(furGroup, 0, 0, 0, 0.105, 9, 0.09, 0.03);
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

  // White tusks from lower jaw
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.14, 5), tusk);
    t.position.set(sx * 0.07, -0.14, 0.16);
    t.rotation.x = Math.PI;
    t.rotation.z = sx * -0.25;
    head.add(t);
  }

  // Deep-set eyes
  for (const sx of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), uniq(0x1a1208));
    socket.position.set(sx * 0.07, 0.03, 0.14);
    head.add(socket);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 5, 4),
      uniq(0x2a3a18, { emissive: 0x1a2808, emissiveIntensity: 0.35 }),
    );
    iris.position.set(sx * 0.07, 0.03, 0.17);
    head.add(iris);
  }

  // Pointed ears (signature orc)
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.2, 5), skin);
    ear.position.set(sx * 0.2, 0.06, -0.02);
    ear.rotation.z = sx * -0.85;
    ear.rotation.y = sx * 0.35;
    ear.rotation.x = -0.2;
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

  // ===== Long spear (held in right hand) =====
  const spear = new THREE.Group();
  spear.name = 'orcSpear';
  spear.position.set(0.42, 0.2, 0.12);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 2.05, 6), wood);
  shaft.position.y = 1.05;
  addPart(shaft, spear);
  // Faceted metal tip
  const tip = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), metal);
  tip.scale.set(0.5, 1.6, 0.35);
  tip.position.y = 2.15;
  addPart(tip, spear);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.036, 0.09, 6), metal);
  tipCollar.position.y = 1.95;
  spear.add(tipCollar);
  const tipEdge = new THREE.Mesh(
    new THREE.ConeGeometry(0.055, 0.18, 5),
    uniq(0xe8eef4, { metalness: 0.85, roughness: 0.2 }),
  );
  tipEdge.position.y = 2.28;
  spear.add(tipEdge);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), metal);
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

/** Animate orc spear thrust (progress 0→1) */
export function animateOrcSpear(orc: THREE.Group, progress: number): void {
  const spear = orc.getObjectByName('orcSpear');
  const armR = orc.getObjectByName('orcArmR');
  const swing = Math.sin(progress * Math.PI);
  if (spear) {
    spear.rotation.x = -swing * 0.85;
    spear.position.z = 0.12 + swing * 0.35;
  }
  if (armR) {
    armR.rotation.x = -swing * 0.9;
  }
  const head = orc.getObjectByName('orcHead');
  if (head) head.rotation.x = -swing * 0.12;
}
