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
  fur: () =>
    phys(0xd6e3f0, {
      roughness: 0.96,
      sheen: 0.3,
      sheenColor: new THREE.Color(0xc4d7e8),
      sheenRoughness: 0.8,
    }),
  furMid: () =>
    phys(0xa9bdd0, {
      roughness: 0.97,
      sheen: 0.18,
      sheenColor: new THREE.Color(0x9cb2c6),
    }),
  hide: () => phys(0x6d7c8a, { roughness: 0.82, flatShading: false }),
  hideDark: () => phys(0x29313a, { roughness: 0.86, flatShading: false }),
  claw: () => phys(0x14161a, { roughness: 0.3, metalness: 0.32, flatShading: false }),
  bone: () => phys(0xe8dcc4, { roughness: 0.48, flatShading: false }),
  boneDark: () => phys(0xc4b090, { roughness: 0.62 }),
  fang: () => phys(0xf2ead6, { roughness: 0.3, flatShading: false }),
  ice: () =>
    phys(0xb8e8ff, {
      roughness: 0.16,
      metalness: 0.28,
      emissive: 0x4aa8c8,
      emissiveIntensity: 0.32,
    }),
  amber: () =>
    phys(0xffc24a, {
      emissive: 0xff9900,
      emissiveIntensity: 0.7,
      roughness: 0.28,
      flatShading: false,
    }),
  wrap: () => phys(0x3a2414, { roughness: 0.9 }),
  pelt: () =>
    phys(0xd6e3f0, {
      roughness: 0.96,
      side: THREE.DoubleSide,
      sheen: 0.26,
      sheenColor: new THREE.Color(0xc4d7e8),
    }),
  peltU: () => phys(0xb5c8db, { roughness: 0.97, side: THREE.DoubleSide }),
  peltMid: () => phys(0xb0c3d6, { roughness: 0.97, side: THREE.DoubleSide }),
  peltMidU: () => phys(0x92a8be, { roughness: 0.97, side: THREE.DoubleSide }),
};

/**
 * Same joined shag as the frost yeti: a ring of hanging triangles, not a
 * scatter of tufts. `flare` > 1 kicks the tips off the hide.
 */
function addFurSkirt(
  parent: THREE.Object3D,
  cy: number,
  radius: number,
  count: number,
  drop: number,
  flare: number,
  mat: THREE.Material,
  cz = 0,
  phase = 0,
): void {
  const pos: number[] = [];
  const push = (a: number, y: number, r: number) => {
    pos.push(Math.cos(a) * r, y, cz + Math.sin(a) * r);
  };
  for (let i = 0; i < count; i++) {
    const a0 = ((i + phase) / count) * Math.PI * 2;
    const a1 = ((i + 1 + phase) / count) * Math.PI * 2;
    const am = (a0 + a1) / 2;
    const jitter = ((i * 7) % 5) / 5;
    const d = drop * (0.7 + jitter * 0.55);
    push(a0, cy, radius);
    push(a1, cy, radius);
    push(am, cy - d, radius * flare);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  const skirt = new THREE.Mesh(geo, mat);
  skirt.castShadow = true;
  parent.add(skirt);
}

function addShagBand(
  parent: THREE.Object3D,
  cy: number,
  radius: number,
  count: number,
  drop: number,
  flare: number,
  top: THREE.Material,
  under: THREE.Material,
  cz = 0,
): void {
  addFurSkirt(parent, cy + drop * 0.1, radius * 0.98, count, drop * 1.18, flare * 0.96, under, cz, 0.5);
  addFurSkirt(parent, cy, radius, count, drop, flare, top, cz);
}

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
  const grip = wrapHaft(0.17, 0.026);
  grip.position.y = -0.02;
  g.add(grip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 8), pal.amber());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.1;
  add(g, pommel);

  for (const sx of [-1, 1]) {
    const q = clawHook(0.22, 0.024, 0.2);
    q.rotation.z = sx * 1.4;
    q.position.set(sx * 0.034, 0.09, 0);
    g.add(q);
  }
  addShagBand(g, 0.1, 0.045, 8, 0.07, 1.25, pal.pelt(), pal.peltU());

  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.56, 0.036), pal.bone());
  spine.position.y = 0.4;
  add(g, spine);
  const iceEdge = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.54, 0.055), pal.ice());
  iceEdge.position.set(-0.02, 0.4, 0);
  add(g, iceEdge);
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const tooth = clawHook(0.2 - t * 0.04, 0.02 - t * 0.004, 0.15);
    tooth.rotation.z = -1.25;
    tooth.position.set(0.028, 0.18 + i * 0.112, 0);
    g.add(tooth);
  }
  const tip = clawHook(0.2, 0.018, 0.05);
  tip.name = 'toolEdge';
  tip.position.y = 0.78;
  g.add(tip);
  return g;
}

export function createFrostHammer(): THREE.Group {
  const g = new THREE.Group();
  const haft = wrapHaft(0.44, 0.026);
  haft.position.y = -0.06;
  g.add(haft);

  const head = new THREE.Group();
  head.position.y = 0.38;
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), pal.hideDark());
  knuckle.scale.set(1.15, 0.95, 1.35);
  add(head, knuckle);
  const ice = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.22), pal.ice());
  add(head, ice);
  addShagBand(head, 0.04, 0.09, 10, 0.08, 1.2, pal.pelt(), pal.peltU());
  const face = clawHook(0.2, 0.026, 1.15);
  face.position.z = 0.12;
  head.add(face);
  const poll = clawHook(0.18, 0.024, 0.15);
  poll.rotation.x = Math.PI;
  poll.position.z = -0.12;
  head.add(poll);
  for (const sx of [-1, 1]) {
    const side = clawHook(0.12, 0.016, 0.4);
    side.rotation.z = sx * 1.2;
    side.position.set(sx * 0.08, 0.02, 0);
    head.add(side);
  }
  const edge = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), pal.claw());
  edge.name = 'toolEdge';
  edge.position.z = 0.14;
  head.add(edge);
  const heel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), pal.hideDark());
  heel.name = 'toolHeel';
  heel.position.z = -0.14;
  head.add(heel);
  g.add(head);
  return g;
}

export function createFrostSpear(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.036, 1.0, 8), pal.bone());
  shaft.position.y = 0.28;
  add(g, shaft);
  for (let i = 0; i < 5; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 5, 10), pal.wrap());
    band.rotation.x = Math.PI / 2;
    band.position.y = -0.05 + i * 0.028;
    g.add(band);
  }
  addShagBand(g, 0.12, 0.04, 8, 0.08, 1.3, pal.pelt(), pal.peltU());

  const paw = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), pal.hideDark());
  paw.scale.set(1.15, 0.8, 1.1);
  paw.position.y = 0.7;
  add(g, paw);
  const ice = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), pal.ice());
  ice.scale.set(1, 0.55, 1);
  ice.position.y = 0.66;
  add(g, ice);

  const tip = clawHook(0.24, 0.022, 0.08);
  tip.name = 'toolEdge';
  tip.position.y = 0.78;
  g.add(tip);
  for (const sx of [-1, 1]) {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.2, 6), pal.fang());
    fang.position.set(sx * 0.03, 0.86, 0);
    fang.rotation.z = sx * 0.32;
    add(g, fang);
    const barb = clawHook(0.18, 0.018, 0.35);
    barb.rotation.z = sx * 1.2;
    barb.position.set(sx * 0.03, 0.7, 0);
    g.add(barb);
  }
  const heel = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 6), pal.boneDark());
  heel.name = 'toolHeel';
  heel.position.y = -0.22;
  add(g, heel);
  return g;
}

export function createFrostBow(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.036, 0.16, 8), pal.hide());
  add(g, grip);
  addShagBand(g, 0.02, 0.04, 8, 0.07, 1.25, pal.pelt(), pal.peltU());

  for (const sy of [-1, 1] as const) {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, sy * 0.08, 0),
      new THREE.Vector3(0, sy * 0.36, -0.08),
      new THREE.Vector3(0, sy * 0.6, -0.38),
    );
    const bone = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.022, 7, false), pal.bone());
    add(g, bone);
    const hide = new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.016, 6, false), pal.hide());
    hide.position.x = 0.012;
    g.add(hide);
    const nock = new THREE.Mesh(new THREE.OctahedronGeometry(0.032, 0), pal.ice());
    nock.position.set(0, sy * 0.6, -0.38);
    add(g, nock);
    const hook = clawHook(0.12, 0.014, 0.25);
    hook.position.set(0, sy * 0.58, -0.36);
    g.add(hook);
  }

  const string = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 1.2, 5), pal.claw());
  string.position.set(0, 0, -0.38);
  g.add(string);
  return g;
}

export function createFrostShield(): THREE.Group {
  const g = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.3, 0.06, 12), pal.hide());
  disc.rotation.x = Math.PI / 2;
  add(g, disc);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), pal.fur());
  face.scale.set(1, 1, 0.26);
  face.position.z = 0.02;
  add(g, face);
  const rim = new THREE.Group();
  rim.rotation.x = Math.PI / 2;
  addShagBand(rim, 0, 0.28, 16, 0.1, 1.15, pal.pelt(), pal.peltU());
  g.add(rim);
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), pal.ice());
  boss.scale.set(1, 1, 0.55);
  boss.position.z = 0.045;
  add(g, boss);
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), pal.hideDark());
  knuckle.position.z = 0.08;
  add(g, knuckle);
  const bossClaw = clawHook(0.14, 0.02, 1.1);
  bossClaw.position.z = 0.1;
  g.add(bossClaw);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const spike = clawHook(0.18, 0.02, 1.15);
    spike.position.set(Math.cos(a) * 0.3, Math.sin(a) * 0.3, 0.02);
    spike.rotation.z = a + Math.PI / 2;
    g.add(spike);
  }

  // Center grip on the back: a hide-wrapped bone bar the fist actually closes
  // around, plus a short enarme so the forearm still reads as strapped in.
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.018, 0.15, 8), pal.bone());
  handle.name = 'shieldHandle';
  handle.rotation.z = Math.PI / 2;
  handle.position.z = -0.042;
  add(g, handle);
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.1, 8), pal.hide());
  wrap.rotation.z = Math.PI / 2;
  wrap.position.z = -0.042;
  add(g, wrap);
  for (const x of [-0.055, 0.055]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.028, 0.05), pal.boneDark());
    post.position.set(x, 0, -0.03);
    add(g, post);
  }
  const pad = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.02), pal.hideDark());
  pad.position.set(0, 0.04, -0.028);
  add(g, pad);
  const strap = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.01, 5, 10, Math.PI * 1.15), pal.wrap());
  strap.rotation.set(0.15, Math.PI / 2, 0.2);
  strap.position.set(0.01, 0.05, -0.03);
  g.add(strap);
  return g;
}

export function createFrostChest(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.29, 12, 10), pal.hide());
  vest.scale.set(1.26, 1.16, 0.84);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), pal.hideDark());
  belly.scale.set(1.12, 0.92, 0.6);
  belly.position.set(0, -0.14, 0.1);
  add(g, belly);
  for (const sx of [-1, 1]) {
    const pec = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), pal.hideDark());
    pec.scale.set(1.25, 0.7, 0.55);
    pec.position.set(sx * 0.12, 0.06, 0.18);
    add(g, pec);
  }

  // Joined yeti shag instead of a white sphere — same coat language as the beast.
  addShagBand(g, 0.24, 0.3, 18, 0.15, 1.16, pal.pelt(), pal.peltU());
  addShagBand(g, 0.12, 0.28, 16, 0.16, 1.1, pal.peltMid(), pal.peltMidU());
  addShagBand(g, -0.22, 0.24, 14, 0.1, 1.12, pal.peltMid(), pal.peltMidU());

  const cape = new THREE.Group();
  cape.position.set(0, 0.2, -0.12);
  cape.rotation.x = 0.5;
  addShagBand(cape, 0, 0.2, 14, 0.34, 1.22, pal.pelt(), pal.peltU());
  g.add(cape);

  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), pal.hideDark());
  yoke.scale.set(1.75, 0.26, 1.05);
  yoke.position.set(0, 0.28, 0.02);
  add(g, yoke);

  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), pal.hide());
    pad.scale.set(1.2, 0.65, 1.05);
    pad.position.set(sx * 0.26, 0.2, 0.04);
    add(g, pad);
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.08, 0), pal.ice());
    shard.position.set(sx * 0.3, 0.32, 0.04);
    shard.scale.set(0.42, 1.7, 0.38);
    add(g, shard);
    const claw = clawHook(0.18, 0.02, 0.12);
    claw.position.set(sx * 0.3, 0.26, 0.1);
    claw.rotation.z = sx * 0.95;
    g.add(claw);
    const clasp = clawHook(0.14, 0.018, 0.5);
    clasp.position.set(sx * 0.09, -0.02, 0.2);
    clasp.rotation.z = sx * 0.4;
    g.add(clasp);
  }
  const gem = new THREE.Mesh(new THREE.SphereGeometry(0.034, 8, 6), pal.amber());
  gem.position.set(0, 0.05, 0.22);
  add(g, gem);
  return g;
}

export function createFrostGreave(): THREE.Group {
  const g = new THREE.Group();
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.088, 0.3, 10), pal.hide());
  plate.position.y = -0.12;
  add(g, plate);
  addShagBand(g, 0.02, 0.11, 12, 0.1, 1.18, pal.pelt(), pal.peltU());
  for (let i = 0; i < 3; i++) {
    const ridge = clawHook(0.11, 0.014, 0.25);
    ridge.position.set(0, -0.04 - i * 0.06, 0.09);
    g.add(ridge);
  }
  const ice = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.032), pal.ice());
  ice.position.set(0, -0.12, 0.095);
  add(g, ice);
  return g;
}

export function createFrostLeg(): THREE.Group {
  const g = new THREE.Group();
  const chap = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.095, 0.4, 10), pal.hide());
  chap.position.y = -0.2;
  add(g, chap);
  addShagBand(g, 0.0, 0.135, 14, 0.18, 1.14, pal.pelt(), pal.peltU());
  addShagBand(g, -0.16, 0.115, 12, 0.16, 1.12, pal.peltMid(), pal.peltMidU());
  const hide = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.05), pal.hideDark());
  hide.position.set(0, -0.16, 0.1);
  add(g, hide);
  return g;
}

export function createFrostBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.13, 10), pal.hide());
  shaft.position.y = 0.04;
  add(g, shaft);
  addShagBand(g, 0.1, 0.09, 10, 0.08, 1.2, pal.pelt(), pal.peltU());
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.082, 10, 8), pal.hideDark());
  toe.scale.set(1.2, 0.55, 1.75);
  toe.position.set(0, -0.03, 0.1);
  add(g, toe);
  for (let i = 0; i < 3; i++) {
    const x = (i - 1) * 0.04;
    const c = clawHook(0.14, 0.015, 1.15);
    c.position.set(x, -0.03, 0.2);
    g.add(c);
  }
  return g;
}

export function createForge(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'forge';

  const stone = phys(0x6a6a66, { roughness: 0.94 });
  const brick = phys(0x7a4530, { roughness: 0.88 });
  const soot = phys(0x2a2420, { roughness: 0.96 });
  const iron = phys(0x3a4048, { metalness: 0.5, roughness: 0.38 });

  // Wide hearth so the station reads from the high game camera.
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.16, 0), stone);
    rock.position.set(Math.cos(a) * 0.62, 0.14, Math.sin(a) * 0.5);
    rock.rotation.set(0.2, a, 0.15);
    add(g, rock);
  }
  const pit = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.16, 12), soot);
  pit.position.y = 0.12;
  add(g, pit);

  const coals = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    phys(0xff6622, { emissive: 0xff4400, emissiveIntensity: 1.6, roughness: 0.45 }),
  );
  coals.scale.set(1.35, 0.55, 1.15);
  coals.position.set(0, 0.28, 0);
  coals.name = 'forgeEmber';
  add(g, coals);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.34, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.34, depthWrite: false }),
  );
  glow.position.set(0, 0.32, 0);
  glow.name = 'forgeGlow';
  g.add(glow);
  const light = new THREE.PointLight(0xff8844, 1.35, 9);
  light.position.set(0, 0.7, 0);
  g.add(light);

  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.7, 0.42), brick);
  chimney.position.set(0, 0.62, -0.42);
  add(g, chimney);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.52), stone);
  cap.position.set(0, 1.0, -0.42);
  add(g, cap);
  rimIce(g, 1.08, 6, 0.2, 0.045);

  // Anvil — a dark T from above.
  const anvil = new THREE.Group();
  anvil.position.set(0.72, 0.28, 0.08);
  const stump = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.28, 8), pal.boneDark());
  stump.position.y = 0.14;
  add(anvil, stump);
  const face = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 0.18), iron);
  face.position.y = 0.32;
  add(anvil, face);
  const horn = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.1), iron);
  horn.position.set(0.26, 0.3, 0);
  add(anvil, horn);
  g.add(anvil);

  // Trophy rack: a spread yeti pelt with claws, readable from above.
  const rack = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 1.15, 6), pal.boneDark());
  rack.position.set(-0.7, 0.58, -0.05);
  add(g, rack);
  const pelt = new THREE.Group();
  pelt.position.set(-0.7, 0.78, 0.1);
  pelt.rotation.x = -0.4;
  addShagBand(pelt, 0, 0.22, 14, 0.2, 1.2, pal.pelt(), pal.peltU());
  g.add(pelt);
  for (const [x, z] of [
    [-0.82, 0.28],
    [-0.58, 0.3],
    [-0.7, 0.38],
  ] as const) {
    const c = clawHook(0.14, 0.016, 1.1);
    c.position.set(x, 0.62, z);
    g.add(c);
  }

  const workClaw = clawHook(0.16, 0.02, 0.5);
  workClaw.position.set(0.72, 0.66, 0.08);
  workClaw.rotation.z = 0.9;
  g.add(workClaw);
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.16, 6), pal.bone());
  fang.position.set(0.58, 0.62, 0.16);
  fang.rotation.z = 0.8;
  add(g, fang);
  const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.28, 6), pal.boneDark());
  bone.position.set(-0.52, 0.42, 0.28);
  bone.rotation.z = 1.1;
  add(g, bone);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 1.05, 1.4, 10),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.7;
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
  addShagBand(g, 0.04, 0.12, 10, 0.08, 1.2, pal.pelt(), pal.peltU());
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
    chest.position.set(0, 0.0, 0.02);
    chest.scale.setScalar(1.05);
    torso.add(chest);
  }

  const gripL = player.getObjectByName('handL')?.getObjectByName('grip');
  if (gripL) {
    const shield = createFrostShield();
    shield.name = 'wear_shield';
    shield.visible = false;
    // Seated in the left fist like the weapons: handle along grip +X,
    // boss in front of the knuckles. poseEquippedTool keeps it there.
    shield.position.set(0, -0.008, -0.001);
    shield.rotation.set(0.06, Math.PI + 0.1, 0.04);
    shield.scale.setScalar(1.12);
    gripL.add(shield);
  }

  for (const side of [-1, 1] as const) {
    const leg = player.getObjectByName(side < 0 ? 'legL' : 'legR');
    if (leg) {
      const wrap = createFrostLeg();
      wrap.name = side < 0 ? 'wear_legL' : 'wear_legR';
      wrap.visible = false;
      wrap.position.set(0, -0.02, 0);
      wrap.scale.setScalar(1.08);
      leg.add(wrap);
    }
    const shin = player.getObjectByName(side < 0 ? 'shinL' : 'shinR');
    if (shin) {
      const greave = createFrostGreave();
      greave.name = side < 0 ? 'wear_greaveL' : 'wear_greaveR';
      greave.visible = false;
      greave.position.set(0, -0.04, 0.02);
      greave.scale.setScalar(1.12);
      shin.add(greave);
    }
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (foot) {
      const boot = createFrostBoot();
      boot.name = side < 0 ? 'wear_bootL' : 'wear_bootR';
      boot.visible = false;
      boot.position.set(0, 0.02, 0.02);
      boot.scale.setScalar(1.2);
      foot.add(boot);
    }
  }
}

function setBaseLayer(player: THREE.Group, layer: string, visible: boolean): void {
  player.traverse((o) => {
    if (o.userData.baseLayer === layer) o.visible = visible;
  });
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
  const chestOn = equipped.chest === 'frost_chest';
  const legsOn = equipped.legs === 'frost_legs';
  const greavesOn = equipped.greaves === 'frost_greaves';
  const bootsOn = equipped.boots === 'frost_boots';
  const bowHeld = !!player.getObjectByName('bowRoot')?.visible;
  show('wear_shield', equipped.shield === 'frost_shield' && !bowHeld);
  show('wear_chest', chestOn);
  show('wear_legL', legsOn);
  show('wear_legR', legsOn);
  show('wear_greaveL', greavesOn);
  show('wear_greaveR', greavesOn);
  show('wear_bootL', bootsOn);
  show('wear_bootR', bootsOn);
  setBaseLayer(player, 'chest', !chestOn);
  setBaseLayer(player, 'legs', !legsOn);
  setBaseLayer(player, 'greaves', !greavesOn);
  setBaseLayer(player, 'boots', !bootsOn);
}
