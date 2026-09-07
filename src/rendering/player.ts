import * as THREE from 'three';

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
      envMapIntensity: opts.envMapIntensity ?? 0.9,
      ...opts,
    });
    matCache.set(key, m);
  }
  return m;
}

function addOutline(target: THREE.Mesh, scale = 1.08, color = 0x0a1208): void {
  const outline = new THREE.Mesh(
    target.geometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.BackSide, depthWrite: false }),
  );
  outline.scale.setScalar(scale);
  outline.name = 'outline';
  target.add(outline);
}

function addPart(mesh: THREE.Mesh, parent: THREE.Object3D, outlineScale?: number): THREE.Mesh {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  if (outlineScale) addOutline(mesh, outlineScale, 0x0a0806);
  parent.add(mesh);
  return mesh;
}

/** Dense faceted fur clumps — Drive hunter collar/cuffs/boots */
function addFurSpikes(
  parent: THREE.Object3D,
  cx: number,
  cy: number,
  cz: number,
  radius: number,
  count: number,
  length: number,
  tipRadius: number,
  yawBias = 0,
): void {
  const fur = mat(0xa07848, { roughness: 0.99, metalness: 0 });
  const furDark = mat(0x5c3a22, { roughness: 0.99, metalness: 0 });
  const furMid = mat(0x8a5e36, { roughness: 0.99, metalness: 0 });
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + yawBias;
    const radJ = radius * (0.9 + (i % 4) * 0.04);
    const lenJ = length * (0.78 + (i % 5) * 0.07);
    const tipJ = tipRadius * (0.62 + (i % 3) * 0.1);
    const matUse = i % 4 === 0 ? furDark : i % 3 === 0 ? furMid : fur;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(tipJ, lenJ, 4), matUse);
    spike.position.set(cx + Math.cos(a) * radJ, cy + lenJ * 0.18, cz + Math.sin(a) * radJ);
    spike.rotation.z = -Math.cos(a) * 0.52;
    spike.rotation.x = Math.sin(a) * 0.52;
    spike.castShadow = true;
    parent.add(spike);
  }
}

function makeHand(skin: THREE.MeshStandardMaterial, fist: boolean): THREE.Group {
  const hand = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.09, 0.13), skin);
  palm.castShadow = true;
  hand.add(palm);
  const curl = fist ? 0.85 : 0.18;
  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.08, 0.024), skin);
    f.position.set(-0.038 + i * 0.026, -0.07, 0.04);
    f.rotation.x = curl;
    f.castShadow = true;
    hand.add(f);
  }
  const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.06, 0.022), skin);
  thumb.position.set(-0.06, -0.02, 0.02);
  thumb.rotation.z = 0.7;
  thumb.rotation.x = 0.35;
  hand.add(thumb);
  return hand;
}

/**
 * Male hunter — Drive-ref faceted leather hunter.
 * Jointed hips/knees/elbows so the walk reads like RS3 locomotion.
 */
export function createPlayerMesh(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'player';
  g.userData.locomotionY = 0;

  const skin = mat(0xc8a07c, { roughness: 0.68, metalness: 0.03 });
  const skinDark = mat(0x9a7454, { roughness: 0.76, metalness: 0.03 });
  const hairCol = mat(0x1e1208, { roughness: 0.97 });
  const leather = mat(0x322012, { roughness: 0.78, metalness: 0.08 });
  const leatherDark = mat(0x1a1008, { roughness: 0.86, metalness: 0.06 });
  const leatherMid = mat(0x5c3a26, { roughness: 0.68, metalness: 0.1 });
  const furMid = mat(0x8a5e36, { roughness: 0.99, metalness: 0 });
  const furDark = mat(0x5c3a22, { roughness: 0.99, metalness: 0 });
  const cloth = mat(0x2a3228, { roughness: 0.92 });
  const clothDark = mat(0x161a16, { roughness: 0.94 });
  const metal = mat(0xe4ecf4, { metalness: 0.9, roughness: 0.16 });
  const metalBright = mat(0xf6fafc, {
    metalness: 0.96,
    roughness: 0.1,
    emissive: 0xb8c8d8,
    emissiveIntensity: 0.42,
  });
  const wood = mat(0x3e2810, { roughness: 0.88 });

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  shadow.name = 'contactShadow';
  g.add(shadow);

  // ===== Legs with knee joints =====
  const hips = new THREE.Group();
  hips.name = 'playerHips';
  g.add(hips);

  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'legL' : 'legR';
    hip.position.set(side * 0.17, 0.8, 0);

    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.125, 0.145, 0.4, 6), cloth);
    thigh.position.set(0, -0.2, 0);
    addPart(thigh, hip);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'shinL' : 'shinR';
    shin.position.set(0, -0.4, 0);

    const calf = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.26, 6), clothDark);
    calf.position.set(0, -0.13, 0.015);
    addPart(calf, shin);

    const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.125, 0.145, 0.36, 6), leather);
    boot.position.set(0, -0.22, 0.02);
    addPart(boot, shin, 1.05);

    for (let i = 0; i < 3; i++) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.016, 4, 8), leatherMid);
      strap.rotation.x = Math.PI / 2;
      strap.position.set(0, -0.1 - i * 0.09, 0.02);
      shin.add(strap);
    }

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'footL' : 'footR';
    foot.position.set(0, -0.4, 0.02);
    const toe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.32), leatherDark);
    toe.position.set(0, 0.02, 0.1);
    addPart(toe, foot);
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.045, 0.34), mat(0x120c08, { roughness: 0.95 }));
    sole.position.set(0, -0.02, 0.09);
    foot.add(sole);
    shin.add(foot);

    addFurSpikes(shin, 0, -0.02, 0.02, 0.13, 12, 0.09, 0.022);
    addFurSpikes(shin, 0, -0.32, 0.05, 0.12, 10, 0.07, 0.018);

    hip.add(shin);
    return hip;
  };
  hips.add(makeLeg(-1));
  hips.add(makeLeg(1));

  const hipMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.22, 8), leather);
  hipMesh.position.y = 0.8;
  addPart(hipMesh, hips);

  for (const [z, ry] of [
    [0.17, 0],
    [-0.17, Math.PI],
  ] as const) {
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.24, 0.07), leatherDark);
    flap.position.set(0, 0.68, z);
    flap.rotation.y = ry;
    addPart(flap, hips);
  }
  for (const sx of [-1, 1]) {
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.22, 0.2), leatherMid);
    flap.position.set(sx * 0.24, 0.68, 0);
    addPart(flap, hips);
  }

  // ===== Torso group (chest + head + arms) =====
  const torso = new THREE.Group();
  torso.name = 'playerTorso';
  torso.position.y = 1.16;
  g.add(torso);

  const vest = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.31, 0.56, 8), leather);
  vest.position.y = 0;
  addPart(vest, torso, 1.06);

  const pecs = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.28, 0.18), leatherMid);
  pecs.position.set(0, 0.08, 0.14);
  addPart(pecs, torso);
  const abs = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.14), leatherDark);
  abs.position.set(0, -0.12, 0.12);
  addPart(abs, torso);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 8), leatherDark);
  belt.position.y = -0.28;
  addPart(belt, torso);
  const beltBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.1, 0.06), metalBright);
  beltBuckle.position.set(0, -0.28, 0.3);
  torso.add(beltBuckle);

  const makeStrap = (rotZ: number, z: number) => {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.54, 0.04), leatherDark);
    strap.position.set(0, 0.04, z);
    strap.rotation.z = rotZ;
    torso.add(strap);
  };
  makeStrap(0.52, 0.24);
  makeStrap(-0.52, 0.24);
  makeStrap(0.52, -0.2);
  makeStrap(-0.52, -0.2);

  const bucklePad = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.04), leatherDark);
  bucklePad.position.set(0, 0.06, 0.28);
  torso.add(bucklePad);
  const chestBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.055), metalBright);
  chestBuckle.position.set(0, 0.06, 0.34);
  chestBuckle.name = 'chestBuckle';
  torso.add(chestBuckle);
  const buckleShine = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.02),
    mat(0xffffff, { metalness: 0.98, roughness: 0.08, emissive: 0xd0e0f0, emissiveIntensity: 0.5 }),
  );
  buckleShine.position.set(0, 0.06, 0.38);
  torso.add(buckleShine);

  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.2), leatherMid);
    pad.position.set(sx * 0.28, 0.26, 0);
    pad.rotation.z = sx * -0.22;
    addPart(pad, torso);
    const pad2 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.16), leatherDark);
    pad2.position.set(sx * 0.33, 0.2, 0.02);
    pad2.rotation.z = sx * -0.32;
    addPart(pad2, torso);
  }

  const collarBase = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.09, 6, 12), furMid);
  collarBase.rotation.x = Math.PI / 2;
  collarBase.position.set(0, 0.28, 0);
  collarBase.scale.set(1.18, 1.02, 0.96);
  addPart(collarBase, torso);
  const collarUnder = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.065, 5, 10), furDark);
  collarUnder.rotation.x = Math.PI / 2;
  collarUnder.position.set(0, 0.24, 0.02);
  torso.add(collarUnder);
  addFurSpikes(torso, 0, 0.28, 0, 0.28, 22, 0.16, 0.028);
  addFurSpikes(torso, 0, 0.36, -0.04, 0.22, 16, 0.12, 0.022, 0.2);
  for (const sx of [-1, 1]) {
    addFurSpikes(torso, sx * 0.3, 0.2, 0.04, 0.12, 10, 0.12, 0.022);
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.14, 6), skin);
  neck.position.set(0, 0.36, 0.01);
  addPart(neck, torso);

  // ===== Arms with elbows =====
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'armL' : 'armR';
    arm.position.set(side * 0.4, 0.22, 0);

    const deltoid = new THREE.Mesh(new THREE.IcosahedronGeometry(0.12, 0), skin);
    deltoid.position.set(0, 0.02, 0);
    deltoid.scale.set(1.05, 0.85, 1);
    addPart(deltoid, arm);

    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.115, 0.32, 6), skin);
    upper.position.set(0, -0.16, 0);
    addPart(upper, arm);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'forearmL' : 'forearmR';
    forearm.position.set(0, -0.34, 0);

    const gauntlet = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 6), leather);
    gauntlet.position.set(0, -0.14, 0.015);
    addPart(gauntlet, forearm, 1.04);
    for (let i = 0; i < 2; i++) {
      const s = new THREE.Mesh(new THREE.TorusGeometry(0.115, 0.014, 4, 8), leatherDark);
      s.rotation.x = Math.PI / 2;
      s.position.set(0, -0.06 - i * 0.1, 0.015);
      forearm.add(s);
    }
    addFurSpikes(forearm, 0, 0.02, 0.02, 0.11, 10, 0.08, 0.02);

    const hand = makeHand(skin, side > 0);
    hand.name = side < 0 ? 'handL' : 'handR';
    hand.position.set(0, -0.32, 0.03);
    forearm.add(hand);

    arm.add(forearm);
    return arm;
  };
  torso.add(makeArm(-1));
  torso.add(makeArm(1));

  // ===== Head =====
  const head = new THREE.Group();
  head.name = 'playerHead';
  head.position.set(0, 0.52, 0.02);
  head.rotation.x = -0.12;

  const skull = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), skin);
  skull.scale.set(1.0, 1.12, 0.96);
  addPart(skull, head, 1.08);

  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.16, 0.2), skinDark);
  jaw.position.set(0, -0.12, 0.07);
  addPart(jaw, head);
  const chin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.12), skinDark);
  chin.position.set(0, -0.19, 0.14);
  head.add(chin);
  const stubble = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.06), mat(0x5a4030, { roughness: 0.95 }));
  stubble.position.set(0, -0.14, 0.16);
  head.add(stubble);

  for (const sx of [-1, 1]) {
    const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.12, 0.12), skinDark);
    cheek.position.set(sx * 0.14, -0.02, 0.11);
    head.add(cheek);
  }

  const noseBridge = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.1, 0.08), skinDark);
  noseBridge.position.set(0, 0.03, 0.18);
  head.add(noseBridge);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.065, 0.11), skinDark);
  nose.position.set(0, -0.03, 0.23);
  head.add(nose);

  for (const sx of [-1, 1]) {
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.05), hairCol);
    brow.position.set(sx * 0.082, 0.09, 0.18);
    brow.rotation.z = sx * -0.2;
    head.add(brow);
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), mat(0x0c0806));
    socket.position.set(sx * 0.078, 0.028, 0.165);
    head.add(socket);
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.036, 6, 5), mat(0xe8e0d4, { roughness: 0.45 }));
    sclera.position.set(sx * 0.078, 0.028, 0.2);
    head.add(sclera);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.024, 6, 5),
      mat(0x4a3424, { emissive: 0x3a2818, emissiveIntensity: 0.65 }),
    );
    iris.position.set(sx * 0.078, 0.028, 0.224);
    head.add(iris);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.011, 4, 3), mat(0x0a0604));
    pupil.position.set(sx * 0.078, 0.028, 0.24);
    head.add(pupil);
    const hl = new THREE.Mesh(
      new THREE.SphereGeometry(0.009, 4, 3),
      mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.7 }),
    );
    hl.position.set(sx * 0.07, 0.038, 0.245);
    head.add(hl);
    const ear = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.095, 0.045), skin);
    ear.position.set(sx * 0.185, 0.015, 0);
    head.add(ear);
  }

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.04), mat(0x3a2014));
  mouth.position.set(0, -0.135, 0.19);
  head.add(mouth);

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.195, 8, 5), hairCol);
  hairCap.position.set(0, 0.08, -0.04);
  hairCap.scale.set(1.08, 0.7, 1.05);
  addPart(hairCap, head);
  const spikePts: [number, number, number, number][] = [
    [0, 0.24, 0.0, 1.2],
    [-0.09, 0.22, 0.04, 1.05],
    [0.09, 0.22, 0.04, 1.05],
    [-0.14, 0.17, -0.04, 1.0],
    [0.14, 0.17, -0.04, 1.0],
    [0, 0.2, -0.14, 1.1],
    [-0.12, 0.15, -0.12, 0.95],
    [0.12, 0.15, -0.12, 0.95],
    [-0.07, 0.24, -0.06, 1.15],
    [0.07, 0.24, -0.06, 1.15],
    [0, 0.26, 0.06, 0.9],
    [-0.16, 0.11, 0.0, 0.85],
    [0.16, 0.11, 0.0, 0.85],
    [-0.05, 0.28, -0.02, 1.0],
    [0.05, 0.28, -0.02, 1.0],
  ];
  for (const [x, y, z, s] of spikePts) {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.04 * s, 0.14 * s, 4), hairCol);
    spike.position.set(x, y, z);
    spike.rotation.x = z * 0.9 - 0.15;
    spike.rotation.z = -x * 1.4;
    head.add(spike);
  }
  torso.add(head);

  // Spear in left hand (Drive rest pose)
  const idleSpear = createIdleSpear(wood, leatherDark, metal);
  idleSpear.name = 'idleSpear';
  const armL = torso.getObjectByName('armL') as THREE.Group;
  const forearmL = armL.getObjectByName('forearmL') as THREE.Group;
  idleSpear.position.set(-0.04, -0.28, 0.06);
  idleSpear.rotation.set(0.12, 0, 0.08);
  forearmL.add(idleSpear);

  const toolRoot = new THREE.Group();
  toolRoot.name = 'toolRoot';
  toolRoot.visible = false;
  const armR = torso.getObjectByName('armR') as THREE.Group;
  const forearmR = armR.getObjectByName('forearmR') as THREE.Group;
  toolRoot.position.set(0.02, -0.3, 0.08);
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
  wood: THREE.MeshStandardMaterial,
  leatherDark: THREE.MeshStandardMaterial,
  metal: THREE.MeshStandardMaterial,
): THREE.Group {
  const idleSpear = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 1.7, 6), wood);
  shaft.position.y = 0.55;
  shaft.castShadow = true;
  idleSpear.add(shaft);
  const binding = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.036, 0.09, 6), leatherDark);
  binding.position.y = 1.28;
  idleSpear.add(binding);
  const tipCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.095, 0), metal);
  tipCore.scale.set(0.48, 1.65, 0.32);
  tipCore.position.y = 1.52;
  tipCore.castShadow = true;
  idleSpear.add(tipCore);
  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.018, 0.26, 0.075),
    mat(0xf0f4f8, { metalness: 0.92, roughness: 0.12 }),
  );
  ridge.position.y = 1.52;
  idleSpear.add(ridge);
  const tipCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.036, 0.08, 6), metal);
  tipCollar.position.y = 1.34;
  idleSpear.add(tipCollar);
  for (const sx of [-1, 1]) {
    const barb = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 4), metal);
    barb.position.set(sx * 0.055, 1.42, 0);
    barb.rotation.z = sx * 1.15;
    idleSpear.add(barb);
  }
  const tipEdge = new THREE.Mesh(
    new THREE.ConeGeometry(0.05, 0.16, 5),
    mat(0xf2f6fa, { metalness: 0.88, roughness: 0.14 }),
  );
  tipEdge.position.y = 1.68;
  idleSpear.add(tipEdge);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.09, 4), metal);
  butt.rotation.x = Math.PI;
  butt.position.y = -0.3;
  idleSpear.add(butt);
  return idleSpear;
}

function createHatchetTool(): THREE.Group {
  const g = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.55, 5), mat(0x5a3a1a));
  handle.rotation.z = 0.35;
  g.add(handle);
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.12, 0.04),
    mat(0x8a9aaa, { metalness: 0.55, roughness: 0.4 }),
  );
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
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.08, 0.06),
    mat(0x7a8a9a, { metalness: 0.5, roughness: 0.45 }),
  );
  head.position.set(0.05, 0.28, 0);
  g.add(head);
  return g;
}

function createSwordTool(): THREE.Group {
  const g = new THREE.Group();
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.055, 0.62, 0.02),
    mat(0xc8d4e0, { metalness: 0.85, roughness: 0.22, emissive: 0x223344, emissiveIntensity: 0.15 }),
  );
  blade.position.y = 0.18;
  g.add(blade);
  const tip = new THREE.Mesh(
    new THREE.ConeGeometry(0.04, 0.12, 4),
    mat(0xd8e4f0, { metalness: 0.9, roughness: 0.18 }),
  );
  tip.position.y = 0.52;
  g.add(tip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.045, 0.05), mat(0xd4b050, { metalness: 0.55, roughness: 0.35 }));
  guard.position.y = -0.12;
  g.add(guard);
  const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.2, 5), mat(0x4a2a10, { roughness: 0.8 }));
  hilt.position.y = -0.24;
  g.add(hilt);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), mat(0xd4b050, { metalness: 0.5 }));
  pommel.position.y = -0.36;
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
