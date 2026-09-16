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
      roughness: 0.14,
      metalness: 0.3,
      emissive: 0x4aa8c8,
      emissiveIntensity: 0.42,
    }),
  amber: () =>
    phys(0xffc24a, {
      emissive: 0xff9900,
      emissiveIntensity: 0.7,
      roughness: 0.28,
      flatShading: false,
    }),
  wrap: () => phys(0x3a2414, { roughness: 0.9 }),
  sinew: () => phys(0x5a3a22, { roughness: 0.86, flatShading: false }),
  clawTip: () => phys(0x2a2c32, { roughness: 0.22, metalness: 0.42, flatShading: false }),
  iceHot: () =>
    phys(0xd4f4ff, {
      roughness: 0.1,
      metalness: 0.34,
      emissive: 0x5ec8e8,
      emissiveIntensity: 0.55,
    }),
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
  peltDeep: () => phys(0x8fa4ba, { roughness: 0.97, side: THREE.DoubleSide }),
  peltDeepU: () => phys(0x74899f, { roughness: 0.98, side: THREE.DoubleSide }),
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
  arc = Math.PI * 2,
  yaw = 0,
): void {
  const pos: number[] = [];
  const push = (a: number, y: number, r: number) => {
    pos.push(Math.cos(a) * r, y, cz + Math.sin(a) * r);
  };
  for (let i = 0; i < count; i++) {
    const a0 = yaw - arc / 2 + ((i + phase) / count) * arc;
    const a1 = yaw - arc / 2 + ((i + 1 + phase) / count) * arc;
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
  arc = Math.PI * 2,
  yaw = 0,
): void {
  addFurSkirt(parent, cy + drop * 0.1, radius * 0.98, count, drop * 1.18, flare * 0.96, under, cz, 0.5, arc, yaw);
  addFurSkirt(parent, cy, radius, count, drop, flare, top, cz, 0, arc, yaw);
}

function clawHook(len: number, rad: number, pitch = 0.35): THREE.Group {
  const g = new THREE.Group();
  const joint = rad * 0.55;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(rad, joint, len * 0.55, 6), pal.claw());
  base.position.y = -len * 0.275;
  add(g, base);
  const curl = new THREE.Group();
  curl.position.y = -len * 0.55;
  curl.rotation.x = -0.86;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(joint, len * 0.58, 6), pal.clawTip());
  tip.rotation.x = Math.PI;
  tip.position.y = -len * 0.28;
  add(curl, tip);
  g.add(curl);
  g.rotation.x = -pitch;
  return g;
}

/** Hide sleeve + sinew turns on a bone core so a haft reads as crafted, not a stick. */
function wrapHaft(len: number, r: number): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.88, r * 1.04, len, 8), pal.bone());
  shaft.position.y = len * 0.5;
  add(g, shaft);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.16, r * 1.26, Math.min(len * 0.48, 0.2), 8), pal.hide());
  sleeve.position.y = 0.03 + Math.min(len * 0.18, 0.08);
  add(g, sleeve);
  const turns = 7;
  for (let i = 0; i < turns; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(r * 1.3, 0.0075, 5, 10), pal.sinew());
    band.rotation.x = Math.PI / 2;
    band.rotation.z = i * 0.35;
    band.position.y = 0.02 + i * 0.026;
    g.add(band);
  }
  const swell = new THREE.Mesh(new THREE.SphereGeometry(r * 1.45, 8, 6), pal.boneDark());
  swell.scale.set(1, 1.3, 1);
  add(g, swell);
  return g;
}

function rimIce(parent: THREE.Object3D, y: number, count: number, radius: number, size: number): void {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(size, 0), pal.ice());
    shard.position.set(Math.cos(a) * radius, y, Math.sin(a) * radius);
    shard.rotation.set(0.4, a, 0.3);
    shard.scale.set(0.4, 1.9, 0.4);
    add(parent, shard);
  }
}

/** Frost crust on a surface — same language as the beast's rime. */
function addRime(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  spread: number,
  count: number,
  size: number,
  seed = 1,
): void {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + seed;
    const r = spread * (0.35 + (((i * 5 + seed) % 4) / 4) * 0.75);
    const s = size * (0.65 + (((i * 3) % 5) / 5) * 0.9);
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(s, 0), i % 2 ? pal.iceHot() : pal.ice());
    shard.position.set(x + Math.cos(a) * r, y + ((i % 3) - 1) * size * 0.28, z + Math.sin(a) * r);
    shard.rotation.set(a * 0.7, a, ((i % 5) - 2) * 0.25);
    shard.scale.set(0.4, 1.7 + ((i * 7) % 4) * 0.35, 0.4);
    add(parent, shard);
  }
}

function addStitch(parent: THREE.Object3D, x: number, y: number, z: number, count: number, step: number, axis: 'x' | 'y' = 'y'): void {
  for (let i = 0; i < count; i++) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.014, 0.004), pal.sinew());
    if (axis === 'y') dash.position.set(x, y + i * step, z);
    else {
      dash.rotation.z = Math.PI / 2;
      dash.position.set(x + i * step, y, z);
    }
    parent.add(dash);
  }
}

/** Right-hand origin: fist closes around y ≈ 0, blade runs +Y. */
export function createFrostSword(): THREE.Group {
  const g = new THREE.Group();
  const grip = wrapHaft(0.18, 0.028);
  grip.position.y = -0.02;
  g.add(grip);
  const pommelBone = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), pal.boneDark());
  pommelBone.scale.set(1, 0.85, 1);
  pommelBone.position.y = -0.1;
  add(g, pommelBone);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), pal.amber());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.1;
  add(g, pommel);

  // Guard: a pair of hooked yeti claws with a shag tuft and ice at the ricasso.
  for (const sx of [-1, 1]) {
    const q = clawHook(0.28, 0.028, 0.18);
    q.rotation.z = sx * 1.45;
    q.position.set(sx * 0.04, 0.1, 0);
    g.add(q);
    const ice = new THREE.Mesh(new THREE.OctahedronGeometry(0.022, 0), pal.iceHot());
    ice.position.set(sx * 0.05, 0.12, 0.02);
    ice.scale.set(0.45, 1.6, 0.45);
    add(g, ice);
  }
  addShagBand(g, 0.1, 0.055, 10, 0.09, 1.28, pal.pelt(), pal.peltU());

  // Wide bone face so the blade reads from the camp camera, not a needle.
  const slices = 6;
  for (let i = 0; i < slices; i++) {
    const t = i / slices;
    const w = 0.074 - t * 0.028;
    const slice = new THREE.Mesh(new THREE.BoxGeometry(w, 0.58 / slices + 0.006, 0.028 - t * 0.008), pal.bone());
    slice.position.y = 0.18 + (0.58 / slices) * (i + 0.5);
    add(g, slice);
  }
  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.46, 0.032), pal.boneDark());
  fuller.position.y = 0.42;
  add(g, fuller);
  const iceEdge = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.56, 0.048), pal.iceHot());
  iceEdge.position.set(-0.034, 0.42, 0);
  add(g, iceEdge);
  addRime(g, -0.03, 0.48, 0, 0.04, 5, 0.018, 2);
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const tooth = clawHook(0.24 - t * 0.05, 0.022 - t * 0.003, 0.12);
    tooth.rotation.z = -1.28;
    tooth.position.set(0.036, 0.2 + i * 0.11, 0);
    g.add(tooth);
  }
  const tip = clawHook(0.24, 0.02, 0.04);
  tip.name = 'toolEdge';
  tip.position.y = 0.82;
  g.add(tip);
  return g;
}

export function createFrostHammer(): THREE.Group {
  const g = new THREE.Group();
  const haft = wrapHaft(0.46, 0.028);
  haft.position.y = -0.06;
  g.add(haft);

  const head = new THREE.Group();
  head.position.y = 0.4;
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.044, 0.08, 8), pal.boneDark());
  collar.position.y = -0.08;
  add(head, collar);
  // Frozen knuckle: hide pad with ice bursting out of the strike face.
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), pal.hideDark());
  knuckle.scale.set(1.2, 1.0, 1.4);
  add(head, knuckle);
  const iceCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), pal.iceHot());
  iceCore.scale.set(0.9, 0.75, 1.25);
  iceCore.position.z = 0.08;
  add(head, iceCore);
  const iceFace = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.08), pal.iceHot());
  iceFace.position.z = 0.1;
  add(head, iceFace);
  addShagBand(head, 0.05, 0.1, 12, 0.1, 1.22, pal.pelt(), pal.peltU());
  addRime(head, 0, 0.04, 0.08, 0.08, 7, 0.028, 3);
  const face = clawHook(0.26, 0.03, 1.2);
  face.position.z = 0.14;
  head.add(face);
  const poll = clawHook(0.2, 0.024, 0.12);
  poll.rotation.x = Math.PI;
  poll.position.z = -0.14;
  head.add(poll);
  for (const sx of [-1, 1]) {
    const side = clawHook(0.16, 0.018, 0.35);
    side.rotation.z = sx * 1.25;
    side.position.set(sx * 0.09, 0.02, 0.02);
    head.add(side);
  }
  const edge = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.02), pal.claw());
  edge.name = 'toolEdge';
  edge.position.z = 0.17;
  head.add(edge);
  const heel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), pal.hideDark());
  heel.name = 'toolHeel';
  heel.position.z = -0.16;
  head.add(heel);
  g.add(head);
  return g;
}

export function createFrostSpear(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.036, 1.02, 8), pal.bone());
  shaft.position.y = 0.28;
  add(g, shaft);
  const hideRun = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.04, 0.28, 8), pal.hide());
  hideRun.position.y = 0.02;
  add(g, hideRun);
  for (let i = 0; i < 7; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.042, 0.007, 5, 10), pal.sinew());
    band.rotation.x = Math.PI / 2;
    band.rotation.z = i * 0.4;
    band.position.y = -0.06 + i * 0.026;
    g.add(band);
  }
  addShagBand(g, 0.14, 0.05, 10, 0.1, 1.32, pal.pelt(), pal.peltU());

  // Paw head: hide pad, ice knuckle, three talons and side fangs.
  const paw = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), pal.hideDark());
  paw.scale.set(1.25, 0.85, 1.15);
  paw.position.y = 0.7;
  add(g, paw);
  const ice = new THREE.Mesh(new THREE.SphereGeometry(0.068, 8, 6), pal.iceHot());
  ice.scale.set(1.05, 0.5, 1.05);
  ice.position.y = 0.66;
  add(g, ice);
  addRime(g, 0, 0.7, 0.02, 0.06, 6, 0.022, 4);

  const tip = clawHook(0.28, 0.024, 0.06);
  tip.name = 'toolEdge';
  tip.position.y = 0.8;
  g.add(tip);
  for (const sx of [-1, 1]) {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.22, 6), pal.fang());
    fang.position.set(sx * 0.034, 0.88, 0);
    fang.rotation.z = sx * 0.34;
    add(g, fang);
    const barb = clawHook(0.2, 0.02, 0.32);
    barb.rotation.z = sx * 1.22;
    barb.position.set(sx * 0.038, 0.7, 0.01);
    g.add(barb);
  }
  const heel = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 6), pal.boneDark());
  heel.name = 'toolHeel';
  heel.position.y = -0.24;
  add(g, heel);
  const heelSpike = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.06, 5), pal.ice());
  heelSpike.position.y = -0.28;
  heelSpike.rotation.x = Math.PI;
  add(g, heelSpike);
  return g;
}

export function createFrostBow(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.04, 0.17, 8), pal.hide());
  add(g, grip);
  const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.08, 6), pal.bone());
  pin.rotation.z = Math.PI / 2;
  add(g, pin);
  addShagBand(g, 0.02, 0.045, 9, 0.08, 1.28, pal.pelt(), pal.peltU());
  addStitch(g, 0.02, -0.05, 0.03, 5, 0.022);

  for (const sy of [-1, 1] as const) {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, sy * 0.08, 0),
      new THREE.Vector3(0, sy * 0.36, -0.08),
      new THREE.Vector3(0, sy * 0.6, -0.38),
    );
    const bone = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.024, 7, false), pal.bone());
    add(g, bone);
    const hide = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.018, 6, false), pal.hide());
    hide.position.x = 0.014;
    g.add(hide);
    const nock = new THREE.Mesh(new THREE.OctahedronGeometry(0.038, 0), pal.iceHot());
    nock.position.set(0, sy * 0.6, -0.38);
    nock.scale.set(0.7, 1.35, 0.7);
    add(g, nock);
    const hook = clawHook(0.15, 0.016, 0.22);
    hook.position.set(0, sy * 0.58, -0.36);
    g.add(hook);
    addRime(g, 0, sy * 0.38, -0.16, 0.04, 3, 0.016, sy + 2);
  }

  const string = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 1.2, 5), pal.claw());
  string.position.set(0, 0, -0.38);
  g.add(string);
  return g;
}

export function createFrostShield(): THREE.Group {
  const g = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.07, 12), pal.hideDark());
  disc.rotation.x = Math.PI / 2;
  add(g, disc);
  const hideFace = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.26, 0.04, 12), pal.hide());
  hideFace.rotation.x = Math.PI / 2;
  hideFace.position.z = 0.03;
  add(g, hideFace);
  // Padded pelt bosses, not a flat white pancake — patches keep hide showing.
  for (const [x, y, s] of [
    [0.08, 0.1, 0.1],
    [-0.1, 0.06, 0.09],
    [0.02, -0.12, 0.1],
    [-0.08, -0.04, 0.08],
  ] as const) {
    const tuft = new THREE.Mesh(new THREE.SphereGeometry(s, 8, 6), pal.fur());
    tuft.scale.set(1.15, 1.1, 0.45);
    tuft.position.set(x, y, 0.05);
    add(g, tuft);
  }
  const boneRim = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.022, 6, 16), pal.bone());
  boneRim.position.z = 0.02;
  add(g, boneRim);
  const rim = new THREE.Group();
  rim.rotation.x = Math.PI / 2;
  addShagBand(rim, 0, 0.3, 18, 0.12, 1.18, pal.pelt(), pal.peltU());
  g.add(rim);

  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), pal.iceHot());
  boss.scale.set(1, 1, 0.62);
  boss.position.z = 0.055;
  add(g, boss);
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), pal.hideDark());
  knuckle.position.z = 0.1;
  add(g, knuckle);
  const bossClaw = clawHook(0.2, 0.024, 1.15);
  bossClaw.position.z = 0.13;
  g.add(bossClaw);
  addRime(g, 0, 0, 0.08, 0.1, 6, 0.024, 5);
  addStitch(g, 0.09, -0.08, 0.055, 6, 0.028);
  addStitch(g, -0.1, -0.08, 0.055, 6, 0.028);

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const spike = clawHook(0.22, 0.022, 1.18);
    spike.position.set(Math.cos(a) * 0.31, Math.sin(a) * 0.31, 0.03);
    spike.rotation.z = a + Math.PI / 2;
    g.add(spike);
    if (i % 2 === 0) {
      const chip = new THREE.Mesh(new THREE.OctahedronGeometry(0.028, 0), pal.ice());
      chip.position.set(Math.cos(a) * 0.27, Math.sin(a) * 0.27, 0.05);
      chip.scale.set(0.4, 1.6, 0.4);
      add(g, chip);
    }
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
  // Narrow through the ribs so the vest stops at the armpits instead of
  // swallowing the gauntlets. The plated sternum still sits proud in Z.
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.29, 12, 10), pal.hideDark());
  vest.scale.set(0.88, 1.14, 0.78);
  vest.position.set(0, 0.02, 0.03);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), pal.hide());
  belly.scale.set(0.95, 0.88, 0.55);
  belly.position.set(0, -0.14, 0.1);
  add(g, belly);
  for (const sx of [-1, 1]) {
    const pec = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), pal.hide());
    pec.scale.set(1.15, 0.7, 0.55);
    pec.position.set(sx * 0.1, 0.06, 0.18);
    add(g, pec);
  }

  // Shoulder shag stays a collar. Hem is front and back only so the hanging
  // triangles do not wrap through the forearms.
  addShagBand(g, 0.28, 0.26, 16, 0.14, 1.14, pal.pelt(), pal.peltU());
  addShagBand(g, -0.22, 0.15, 8, 0.1, 1.1, pal.peltMid(), pal.peltMidU(), 0, Math.PI * 0.7, Math.PI / 2);
  addShagBand(g, -0.22, 0.14, 8, 0.1, 1.1, pal.peltMid(), pal.peltMidU(), 0, Math.PI * 0.7, -Math.PI / 2);

  const cape = new THREE.Group();
  cape.position.set(0, 0.22, -0.12);
  cape.rotation.x = 0.52;
  addShagBand(cape, 0, 0.21, 16, 0.4, 1.26, pal.pelt(), pal.peltU());
  addShagBand(cape, -0.06, 0.18, 12, 0.28, 1.18, pal.peltDeep(), pal.peltDeepU());
  g.add(cape);

  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), pal.hide());
  yoke.scale.set(1.45, 0.24, 1.0);
  yoke.position.set(0, 0.28, 0.02);
  add(g, yoke);

  // Bone ribs down the sternum so the chest is plated, not just fur.
  for (let i = 0; i < 4; i++) {
    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.2 - i * 0.018, 0.028, 0.04), pal.bone());
    rib.position.set(0, 0.12 - i * 0.07, 0.2);
    rib.rotation.x = -0.12;
    add(g, rib);
    addStitch(g, -0.09, 0.12 - i * 0.07, 0.22, 1, 0);
    addStitch(g, 0.09, 0.12 - i * 0.07, 0.22, 1, 0);
  }

  for (const sx of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), pal.hide());
    pad.scale.set(1.15, 0.64, 1.05);
    pad.position.set(sx * 0.24, 0.22, 0.03);
    add(g, pad);
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), pal.iceHot());
    shard.position.set(sx * 0.28, 0.36, 0.05);
    shard.scale.set(0.4, 2.05, 0.36);
    add(g, shard);
    addRime(g, sx * 0.26, 0.3, 0.08, 0.06, 4, 0.02, sx + 3);
    const claw = clawHook(0.22, 0.022, 0.1);
    claw.position.set(sx * 0.28, 0.26, 0.12);
    claw.rotation.z = sx * 0.98;
    g.add(claw);
    const clasp = clawHook(0.16, 0.02, 0.48);
    clasp.position.set(sx * 0.1, -0.02, 0.21);
    clasp.rotation.z = sx * 0.42;
    g.add(clasp);
  }
  const bezel = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.008, 5, 10), pal.boneDark());
  bezel.position.set(0, 0.05, 0.23);
  add(g, bezel);
  const gem = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 6), pal.amber());
  gem.position.set(0, 0.05, 0.236);
  add(g, gem);
  return g;
}

/** Hide bracer that rides the existing gauntlet so a frost chest still shows arms. */
export function createFrostBracer(): THREE.Group {
  const g = new THREE.Group();
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.07, 0.22, 10), pal.hideDark());
  sleeve.position.set(0, -0.14, 0.008);
  add(g, sleeve);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.028), pal.bone());
  plate.position.set(0, -0.14, 0.062);
  add(g, plate);
  const ice = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.14, 0.02), pal.iceHot());
  ice.position.set(0, -0.14, 0.078);
  add(g, ice);
  addShagBand(g, -0.03, 0.072, 9, 0.06, 1.16, pal.pelt(), pal.peltU());
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 5, 10), pal.boneDark());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.set(0, -0.24, 0.008);
  add(g, cuff);
  addRime(g, 0, -0.12, 0.08, 0.03, 3, 0.012, 4);
  addStitch(g, -0.03, -0.2, 0.06, 4, 0.028);
  addStitch(g, 0.03, -0.2, 0.06, 4, 0.028);
  const claw = clawHook(0.1, 0.012, 0.15);
  claw.position.set(0.02, -0.06, 0.07);
  claw.rotation.z = 0.4;
  g.add(claw);
  return g;
}

export function createFrostGreave(): THREE.Group {
  const g = new THREE.Group();
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.088, 0.3, 10), pal.hideDark());
  plate.position.y = -0.12;
  add(g, plate);
  addShagBand(g, 0.03, 0.115, 12, 0.12, 1.2, pal.pelt(), pal.peltU());
  const boneShin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.03), pal.bone());
  boneShin.position.set(0, -0.12, 0.09);
  add(g, boneShin);
  for (let i = 0; i < 3; i++) {
    const ridge = clawHook(0.13, 0.016, 0.22);
    ridge.position.set(0, -0.02 - i * 0.065, 0.1);
    g.add(ridge);
  }
  const ice = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.2, 0.038), pal.iceHot());
  ice.position.set(0, -0.12, 0.11);
  add(g, ice);
  addRime(g, 0, -0.08, 0.12, 0.04, 4, 0.016, 6);
  addStitch(g, -0.045, -0.2, 0.1, 5, 0.03);
  addStitch(g, 0.045, -0.2, 0.1, 5, 0.03);
  return g;
}

export function createFrostLeg(): THREE.Group {
  const g = new THREE.Group();
  const chap = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.095, 0.4, 10), pal.hideDark());
  chap.position.y = -0.2;
  add(g, chap);
  addShagBand(g, 0.02, 0.14, 14, 0.2, 1.16, pal.pelt(), pal.peltU());
  addShagBand(g, -0.14, 0.12, 13, 0.18, 1.14, pal.peltMid(), pal.peltMidU());
  addShagBand(g, -0.28, 0.1, 11, 0.12, 1.12, pal.peltDeep(), pal.peltDeepU());
  const hide = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.26, 0.055), pal.hide());
  hide.position.set(0, -0.16, 0.105);
  add(g, hide);
  addStitch(g, -0.05, -0.26, 0.13, 6, 0.032);
  addStitch(g, 0.05, -0.26, 0.13, 6, 0.032);
  const hipClaw = clawHook(0.14, 0.016, 0.2);
  hipClaw.position.set(0.04, 0.02, 0.12);
  hipClaw.rotation.z = 0.6;
  g.add(hipClaw);
  return g;
}

export function createFrostBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.092, 0.14, 10), pal.hideDark());
  shaft.position.y = 0.04;
  add(g, shaft);
  addShagBand(g, 0.11, 0.095, 11, 0.1, 1.22, pal.pelt(), pal.peltU());
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.086, 10, 8), pal.hide());
  toe.scale.set(1.25, 0.58, 1.85);
  toe.position.set(0, -0.03, 0.11);
  add(g, toe);
  const ice = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.1), pal.ice());
  ice.position.set(0, 0.0, 0.14);
  add(g, ice);
  for (let i = 0; i < 4; i++) {
    const x = (i - 1.5) * 0.032;
    const c = clawHook(0.16 + (i === 1 || i === 2 ? 0.03 : 0), 0.016, 1.18);
    c.position.set(x, -0.03, 0.22);
    g.add(c);
  }
  addRime(g, 0, 0.04, 0.08, 0.04, 3, 0.014, 7);
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
    chest.scale.setScalar(1.02);
    torso.add(chest);
  }

  for (const side of [-1, 1] as const) {
    const forearm = player.getObjectByName(side < 0 ? 'forearmL' : 'forearmR');
    if (forearm) {
      const bracer = createFrostBracer();
      bracer.name = side < 0 ? 'wear_bracerL' : 'wear_bracerR';
      bracer.visible = false;
      forearm.add(bracer);
    }
  }

  const gripL = player.getObjectByName('handL')?.getObjectByName('grip');
  if (gripL) {
    const shield = createFrostShield();
    shield.name = 'wear_shield';
    shield.visible = false;
    // Handle in the fist; poseEquippedTool rolls the boss toward the threat.
    shield.position.set(0, -0.008, 0.083);
    shield.rotation.set(0.05, 0.1, 0.04);
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
  show('wear_bracerL', chestOn);
  show('wear_bracerR', chestOn);
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
