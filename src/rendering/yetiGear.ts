import * as THREE from 'three';

/**
 * Frost-yeti kit. Every piece is built from the same palette as the beast:
 * ice-white fur, grey hide, cream bone, hooked black claws, and rime ice.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.78,
    metalness: opts.metalness ?? 0.04,
    flatShading: opts.flatShading ?? true,
    envMapIntensity: opts.envMapIntensity ?? 0.7,
    ...opts,
  });
}

function add(parent: THREE.Object3D, mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

const pal = {
  fur: () => phys(0xd6e3f0, { roughness: 0.96, sheen: 0.28, sheenColor: new THREE.Color(0xc4d7e8) }),
  furMid: () => phys(0xa9bdd0, { roughness: 0.97 }),
  hide: () => phys(0x6d7c8a, { roughness: 0.82, flatShading: false }),
  hideDark: () => phys(0x29313a, { roughness: 0.86, flatShading: false }),
  claw: () => phys(0x14161a, { roughness: 0.3, metalness: 0.32, flatShading: false }),
  bone: () => phys(0xe8dcc4, { roughness: 0.48, flatShading: false }),
  boneDark: () => phys(0xc4b090, { roughness: 0.62 }),
  ice: () =>
    phys(0xb8e8ff, {
      roughness: 0.16,
      metalness: 0.28,
      emissive: 0x4aa8c8,
      emissiveIntensity: 0.28,
    }),
  amber: () =>
    phys(0xffc24a, {
      emissive: 0xff9900,
      emissiveIntensity: 0.7,
      roughness: 0.28,
      flatShading: false,
    }),
  wrap: () => phys(0x3a2414, { roughness: 0.9 }),
};

function clawHook(len: number, rad: number, pitch = 0.35): THREE.Group {
  const g = new THREE.Group();
  const joint = rad * 0.55;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(rad, joint, len * 0.55, 6), pal.claw());
  base.position.y = -len * 0.275;
  add(g, base);
  const curl = new THREE.Group();
  curl.position.y = -len * 0.55;
  curl.rotation.x = -0.72;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(joint, len * 0.5, 6), pal.claw());
  tip.rotation.x = Math.PI;
  tip.position.y = -len * 0.25;
  add(curl, tip);
  g.add(curl);
  g.rotation.x = -pitch;
  return g;
}

function furTuft(s: number): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), pal.fur());
  m.scale.set(1.5, 0.55, 1.05);
  m.castShadow = true;
  return m;
}

function wrapHaft(len: number, r: number): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r, len, 8), pal.bone());
  shaft.position.y = len * 0.5;
  add(g, shaft);
  for (let i = 0; i < 6; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(r * 1.12, 0.006, 5, 10), pal.wrap());
    band.rotation.x = Math.PI / 2;
    band.position.y = 0.03 + i * 0.028;
    g.add(band);
  }
  const swell = new THREE.Mesh(new THREE.SphereGeometry(r * 1.35, 8, 6), pal.boneDark());
  swell.scale.set(1, 1.2, 1);
  add(g, swell);
  return g;
}

function rimIce(parent: THREE.Object3D, y: number, count: number, radius: number, size: number): void {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(size, 0), pal.ice());
    shard.position.set(Math.cos(a) * radius, y, Math.sin(a) * radius);
    shard.rotation.set(0.4, a, 0.3);
    shard.scale.set(0.4, 1.7, 0.4);
    add(parent, shard);
  }
}

/** Right-hand origin: fist closes around y ≈ 0, blade runs +Y. */
export function createFrostSword(): THREE.Group {
  const g = new THREE.Group();
  const grip = wrapHaft(0.16, 0.02);
  grip.position.y = -0.02;
  g.add(grip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), pal.amber());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.1;
  add(g, pommel);

  // Quillons are two hooked claws, the same shape as the yeti's hands.
  for (const sx of [-1, 1]) {
    const q = clawHook(0.16, 0.018, 0.15);
    q.rotation.z = sx * 1.35;
    q.position.set(sx * 0.02, 0.08, 0);
    g.add(q);
  }
  const fur = furTuft(0.04);
  fur.position.set(0, 0.09, 0);
  g.add(fur);

  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.52, 0.016), pal.bone());
  spine.position.y = 0.38;
  add(g, spine);
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const claw = new THREE.Mesh(new THREE.ConeGeometry(0.028 - t * 0.012, 0.14 - t * 0.02, 6), pal.claw());
    claw.rotation.z = Math.PI;
    claw.position.set(0.012, 0.2 + i * 0.1, 0);
    claw.rotation.x = 0.12;
    add(g, claw);
    const ice = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.09, 0.022), pal.ice());
    ice.position.set(-0.006, 0.2 + i * 0.1, 0);
    g.add(ice);
  }
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.12, 6), pal.claw());
  tip.name = 'toolEdge';
  tip.position.y = 0.74;
  add(g, tip);
  return g;
}

export function createFrostHammer(): THREE.Group {
  const g = new THREE.Group();
  const haft = wrapHaft(0.42, 0.022);
  haft.position.y = -0.06;
  g.add(haft);

  const head = new THREE.Group();
  head.position.y = 0.36;
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.16), pal.hide());
  add(head, block);
  const iceCap = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.04, 0.17), pal.ice());
  iceCap.position.y = 0.07;
  add(head, iceCap);
  const fur = furTuft(0.055);
  fur.position.set(0, 0.02, 0);
  head.add(fur);
  for (const z of [0.1, -0.1]) {
    const spike = clawHook(0.14, 0.02, z > 0 ? 1.1 : 0.2);
    spike.position.set(0, 0, z);
    if (z < 0) spike.rotation.x = Math.PI;
    head.add(spike);
  }
  const edge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), pal.claw());
  edge.name = 'toolEdge';
  edge.position.z = 0.1;
  head.add(edge);
  const heel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), pal.hideDark());
  heel.name = 'toolHeel';
  heel.position.z = -0.1;
  head.add(heel);
  g.add(head);
  return g;
}

export function createFrostSpear(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.95, 8), pal.bone());
  shaft.position.y = 0.28;
  add(g, shaft);
  for (let i = 0; i < 4; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.005, 5, 10), pal.wrap());
    band.rotation.x = Math.PI / 2;
    band.position.y = -0.04 + i * 0.03;
    g.add(band);
  }
  const fur = furTuft(0.04);
  fur.position.y = 0.08;
  g.add(fur);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.2, 6), pal.claw());
  tip.name = 'toolEdge';
  tip.position.y = 0.86;
  add(g, tip);
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.12, 6), phys(0xf2ead6, { roughness: 0.32, flatShading: false }));
  fang.position.y = 0.78;
  fang.position.x = 0.012;
  fang.rotation.z = 0.25;
  add(g, fang);
  for (const sx of [-1, 1]) {
    const barb = clawHook(0.1, 0.012, 0.4);
    barb.rotation.z = sx * 1.1;
    barb.position.set(sx * 0.01, 0.7, 0);
    g.add(barb);
  }
  const heel = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), pal.boneDark());
  heel.name = 'toolHeel';
  heel.position.y = -0.2;
  add(g, heel);
  return g;
}

export function createFrostBow(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.12, 8), pal.hide());
  add(g, grip);
  const wrap = furTuft(0.032);
  g.add(wrap);

  for (const sy of [-1, 1]) {
    const limb = new THREE.Group();
    limb.position.y = sy * 0.06;
    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const bone = new THREE.Mesh(
        new THREE.CylinderGeometry(0.016 - t * 0.006, 0.014 - t * 0.005, 0.1, 6),
        pal.bone(),
      );
      bone.position.y = sy * (0.05 + i * 0.085);
      bone.position.z = -t * 0.05;
      bone.rotation.x = sy * t * 0.45;
      add(limb, bone);
    }
    const nock = new THREE.Mesh(new THREE.OctahedronGeometry(0.018, 0), pal.ice());
    nock.position.set(0, sy * 0.48, -0.2);
    add(limb, nock);
    g.add(limb);
  }

  const string = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.96, 5), pal.claw());
  string.position.set(0, 0, -0.2);
  g.add(string);
  const claw = clawHook(0.1, 0.012, 0.2);
  claw.position.set(0, 0, 0.02);
  g.add(claw);
  return g;
}

export function createFrostShield(): THREE.Group {
  const g = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.21, 0.04, 12), pal.hide());
  disc.rotation.x = Math.PI / 2;
  add(g, disc);
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), pal.ice());
  boss.scale.set(1, 1, 0.55);
  boss.position.z = 0.03;
  add(g, boss);
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), pal.hideDark());
  knuckle.position.z = 0.055;
  add(g, knuckle);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const tuft = furTuft(0.04);
    tuft.position.set(Math.cos(a) * 0.19, Math.sin(a) * 0.19, 0);
    tuft.rotation.z = a;
    g.add(tuft);
    const spike = clawHook(0.1, 0.014, 1.15);
    spike.position.set(Math.cos(a) * 0.21, Math.sin(a) * 0.21, 0.01);
    spike.rotation.z = a + Math.PI / 2;
    g.add(spike);
  }
  return g;
}

export function createFrostChest(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), pal.hide());
  vest.scale.set(1.15, 1.05, 0.72);
  vest.position.y = 0.02;
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), pal.hideDark());
  belly.scale.set(1.1, 0.9, 0.55);
  belly.position.set(0, -0.12, 0.08);
  add(g, belly);
  const mantle = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), pal.fur());
  mantle.scale.set(1.55, 0.55, 1.05);
  mantle.position.set(0, 0.2, -0.02);
  add(g, mantle);
  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), pal.furMid());
    pad.scale.set(1.15, 0.7, 1);
    pad.position.set(sx * 0.22, 0.18, 0.02);
    add(g, pad);
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.07, 0), pal.ice());
    shard.position.set(sx * 0.24, 0.26, -0.04);
    shard.scale.set(0.45, 1.6, 0.4);
    add(g, shard);
    const clasp = clawHook(0.1, 0.014, 0.5);
    clasp.position.set(sx * 0.1, -0.02, 0.16);
    clasp.rotation.z = sx * 0.4;
    g.add(clasp);
  }
  const gem = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), pal.amber());
  gem.position.set(0, 0.04, 0.18);
  add(g, gem);
  return g;
}

export function createFrostGreave(): THREE.Group {
  const g = new THREE.Group();
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.078, 0.07, 0.22, 10), pal.hide());
  plate.position.y = -0.1;
  add(g, plate);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 6, 10), pal.fur());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.0;
  g.add(cuff);
  for (let i = 0; i < 3; i++) {
    const ridge = clawHook(0.08, 0.01, 0.2);
    ridge.position.set(0, -0.04 - i * 0.05, 0.07);
    g.add(ridge);
  }
  const ice = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.02), pal.ice());
  ice.position.set(0, -0.1, 0.075);
  g.add(ice);
  return g;
}

export function createFrostLeg(): THREE.Group {
  const g = new THREE.Group();
  const chap = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.085, 0.36, 10), pal.fur());
  chap.position.y = -0.18;
  add(g, chap);
  const hide = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.04), pal.hide());
  hide.position.set(0, -0.16, 0.08);
  add(g, hide);
  const tuft = furTuft(0.05);
  tuft.position.set(0, -0.02, 0.04);
  g.add(tuft);
  return g;
}

export function createFrostBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.078, 0.1, 10), pal.fur());
  shaft.position.y = 0.02;
  add(g, shaft);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), pal.hide());
  toe.scale.set(1.1, 0.55, 1.45);
  toe.position.set(0, -0.04, 0.08);
  add(g, toe);
  for (let i = 0; i < 3; i++) {
    const x = (i - 1) * 0.032;
    const c = clawHook(0.08, 0.01, 1.15);
    c.position.set(x, -0.04, 0.16);
    g.add(c);
  }
  return g;
}

export function createForge(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'forge';

  const stone = phys(0x5a5a58, { roughness: 0.94 });
  const brick = phys(0x6a4030, { roughness: 0.9 });
  const soot = phys(0x2a2420, { roughness: 0.96 });

  const base = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.42, 0.85), stone);
  base.position.y = 0.21;
  add(g, base);
  const hearth = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.28, 0.5), soot);
  hearth.position.set(0, 0.48, 0.05);
  add(g, hearth);
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.95, 0.38), brick);
  chimney.position.set(0, 1.05, -0.18);
  add(g, chimney);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.1, 0.46), stone);
  cap.position.set(0, 1.55, -0.18);
  add(g, cap);

  const coals = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 8, 6),
    phys(0xff6622, { emissive: 0xff4400, emissiveIntensity: 1.4, roughness: 0.5 }),
  );
  coals.scale.set(1.4, 0.5, 1.1);
  coals.position.set(0, 0.58, 0.08);
  coals.name = 'forgeEmber';
  add(g, coals);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.32, depthWrite: false }),
  );
  glow.position.copy(coals.position);
  glow.name = 'forgeGlow';
  g.add(glow);
  const light = new THREE.PointLight(0xff8844, 1.15, 8);
  light.position.set(0, 0.85, 0.1);
  g.add(light);

  const anvil = new THREE.Group();
  anvil.position.set(0.52, 0.62, 0.12);
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.14, 0.16), phys(0x4a4e54, { metalness: 0.45, roughness: 0.4 }));
  add(anvil, block);
  const horn = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.07, 0.08), phys(0x3a3e44, { metalness: 0.4, roughness: 0.45 }));
  horn.position.set(0.18, 0.02, 0);
  add(anvil, horn);
  g.add(anvil);

  // Trophy rack — a yeti pelt and a claw so the station reads as a frost-yeti forge.
  const rack = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 1.1, 6), pal.boneDark());
  rack.position.set(-0.55, 0.7, -0.1);
  add(g, rack);
  const pelt = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), pal.fur());
  pelt.scale.set(0.9, 1.4, 0.2);
  pelt.position.set(-0.55, 0.85, 0.05);
  add(g, pelt);
  const hanging = clawHook(0.18, 0.02, 0.2);
  hanging.position.set(-0.55, 0.55, 0.12);
  g.add(hanging);
  rimIce(g, 1.48, 5, 0.16, 0.04);

  const workClaw = clawHook(0.14, 0.016, 0.4);
  workClaw.position.set(0.5, 0.74, 0.12);
  workClaw.rotation.z = 0.8;
  g.add(workClaw);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 0.8, 1.7, 10),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.85;
  hit.name = 'hit';
  g.add(hit);
  return g;
}

/** Portrait extras for the new yeti parts. */
export function createYetiHideItem(): THREE.Group {
  const g = new THREE.Group();
  const sheet = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), pal.hide());
  sheet.scale.set(1.4, 0.35, 1.1);
  add(g, sheet);
  const tuft = furTuft(0.06);
  tuft.position.y = 0.04;
  g.add(tuft);
  return g;
}

export function createFrostFangItem(): THREE.Group {
  const g = new THREE.Group();
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.26, 7), phys(0xf2ead6, { roughness: 0.32, flatShading: false }));
  fang.rotation.z = 0.2;
  add(g, fang);
  const ice = new THREE.Mesh(new THREE.OctahedronGeometry(0.03, 0), pal.ice());
  ice.position.y = -0.1;
  add(g, ice);
  return g;
}

export function createYetiBoneItem(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.32, 8), pal.bone());
  shaft.rotation.z = 0.4;
  add(g, shaft);
  for (const y of [-0.14, 0.14]) {
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), pal.boneDark());
    knob.position.set(y * 0.35, y, 0);
    add(g, knob);
  }
  return g;
}

export function createRimeShardItem(): THREE.Group {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), pal.ice());
  core.scale.set(0.55, 1.6, 0.55);
  add(g, core);
  const chip = new THREE.Mesh(new THREE.OctahedronGeometry(0.06, 0), pal.ice());
  chip.position.set(0.05, -0.04, 0.02);
  chip.rotation.z = 0.6;
  add(g, chip);
  return g;
}

export function attachYetiWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const chest = createFrostChest();
    chest.name = 'wear_chest';
    chest.visible = false;
    chest.position.set(0, 0.02, 0.02);
    torso.add(chest);
  }

  const armL = player.getObjectByName('forearmL');
  if (armL) {
    const shield = createFrostShield();
    shield.name = 'wear_shield';
    shield.visible = false;
    shield.position.set(-0.12, -0.14, 0.02);
    shield.rotation.set(0.15, -1.15, 0.2);
    shield.scale.setScalar(0.85);
    armL.add(shield);
  }

  for (const side of [-1, 1] as const) {
    const leg = player.getObjectByName(side < 0 ? 'legL' : 'legR');
    if (leg) {
      const wrap = createFrostLeg();
      wrap.name = side < 0 ? 'wear_legL' : 'wear_legR';
      wrap.visible = false;
      wrap.position.set(0, -0.02, 0);
      leg.add(wrap);
    }
    const shin = player.getObjectByName(side < 0 ? 'shinL' : 'shinR');
    if (shin) {
      const greave = createFrostGreave();
      greave.name = side < 0 ? 'wear_greaveL' : 'wear_greaveR';
      greave.visible = false;
      greave.position.set(0, -0.02, 0);
      shin.add(greave);
    }
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (foot) {
      const boot = createFrostBoot();
      boot.name = side < 0 ? 'wear_bootL' : 'wear_bootR';
      boot.visible = false;
      boot.position.set(0, 0.02, 0.02);
      foot.add(boot);
    }
  }
}

export function setYetiWear(player: THREE.Group, equipped: {
  shield: string | null;
  chest: string | null;
  greaves: string | null;
  legs: string | null;
  boots: string | null;
}): void {
  const show = (name: string, on: boolean) => {
    const o = player.getObjectByName(name);
    if (o) o.visible = on;
  };
  show('wear_shield', equipped.shield === 'frost_shield');
  show('wear_chest', equipped.chest === 'frost_chest');
  show('wear_legL', equipped.legs === 'frost_legs');
  show('wear_legR', equipped.legs === 'frost_legs');
  show('wear_greaveL', equipped.greaves === 'frost_greaves');
  show('wear_greaveR', equipped.greaves === 'frost_greaves');
  show('wear_bootL', equipped.boots === 'frost_boots');
  show('wear_bootR', equipped.boots === 'frost_boots');
}
