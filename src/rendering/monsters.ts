import * as THREE from 'three';

/**
 * Frost Yeti and Orc Scout — built to the Drive concept sheets.
 *
 * Joint names and hang convention stay the same as the previous rig
 * (limbs hang −Y, +rotation.x = back, knee() only folds one way) so
 * walk / attack clips keep working.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.88,
    metalness: opts.metalness ?? 0.02,
    flatShading: opts.flatShading ?? true,
    envMapIntensity: opts.envMapIntensity ?? 0.55,
    ...opts,
  });
}

function addOutline(target: THREE.Mesh, scale = 1.07, color = 0x0a1520): void {
  const outline = new THREE.Mesh(
    target.geometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.BackSide, depthWrite: false }),
  );
  outline.scale.setScalar(scale);
  outline.name = 'outline';
  target.add(outline);
}

function lathe(radii: [number, number][], segs = 10): THREE.LatheGeometry {
  return new THREE.LatheGeometry(
    radii.map(([r, y]) => new THREE.Vector2(r, y)),
    segs,
  );
}

/**
 * One layer of shag: a continuous ring of triangles whose tips hang below the
 * band they spring from, with uneven lengths so the hem reads ragged.
 *
 * Scattering separate tufts around a body looks like confetti stuck to it —
 * a joined skirt keeps the silhouette while the overlap between layers does
 * the work of depth. `flare` > 1 kicks the tips outward, away from the hide.
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
): void {
  const pos: number[] = [];
  const push = (a: number, y: number, r: number) => {
    pos.push(Math.cos(a) * r, y, cz + Math.sin(a) * r);
  };
  for (let i = 0; i < count; i++) {
    const a0 = (i / count) * Math.PI * 2;
    const a1 = ((i + 1) / count) * Math.PI * 2;
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

/** Fur patch that hugs a curved surface — the sheet's charcoal marbling. */
function addPatch(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  d: number,
  mat: THREE.Material,
  rz = 0,
): void {
  const p = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), mat);
  p.scale.set(w, h, d);
  p.position.set(x, y, z);
  p.rotation.z = rz;
  parent.add(p);
}

/**
 * Two-segment hooked talon. (x, y, z) is where it leaves the digit; `pitch`
 * aims it — 0 hangs straight down, ~1.2 runs forward along the ground — and
 * the second segment always curls further forward so it reads as a hook.
 */
function addClaw(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  len: number,
  rad: number,
  mat: THREE.Material,
  pitch = 0.3,
  splay = 0,
): void {
  const root = new THREE.Group();
  root.position.set(x, y, z);
  root.rotation.order = 'ZXY';
  root.rotation.z = splay;
  root.rotation.x = -pitch;

  const base = new THREE.Mesh(new THREE.ConeGeometry(rad, len * 0.6, 6), mat);
  base.rotation.x = Math.PI;
  base.position.y = -len * 0.3;
  base.castShadow = true;
  root.add(base);

  const curl = new THREE.Group();
  curl.position.y = -len * 0.56;
  curl.rotation.x = -0.55;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(rad * 0.66, len * 0.52, 6), mat);
  tip.rotation.x = Math.PI;
  tip.position.y = -len * 0.26;
  tip.castShadow = true;
  curl.add(tip);
  root.add(curl);

  parent.add(root);
}

/**
 * Rest pose shared by the mesh and every yeti clip in anim.ts. The mesh bakes
 * these so a freshly built yeti stands the same way the idle loop holds it.
 */
export const YETI_REST = {
  bodyX: 0.22,
  headX: -0.12,
  armX: -0.18,
  armZ: 0.22,
  forearmX: -0.34,
  legX: 0.05,
  kneeX: 0.13,
  footX: -0.04,
} as const;

/**
 * Frost Yeti — Drive sheet: a hunched ice-bear. Shoulders carry the mass, the
 * legs are short columns under the hips, and the arms hang to knee height and
 * finish in broad paws whose talons hook down and forward.
 */
export function createFrostYeti(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'yeti';

  const fur = phys(0xd6e3f0, {
    roughness: 0.96,
    sheen: 0.3,
    sheenColor: new THREE.Color(0xc4d7e8),
    sheenRoughness: 0.8,
  });
  const furMid = phys(0xa9bdd0, {
    roughness: 0.97,
    sheen: 0.18,
    sheenColor: new THREE.Color(0x9cb2c6),
  });
  const furDeep = phys(0x7d91a6, { roughness: 0.97 });
  const furShade = phys(0x51627a, { roughness: 0.98 });
  const charcoal = phys(0x2b333e, { roughness: 0.96 });
  const hide = phys(0x6d7c8a, { roughness: 0.8, flatShading: false });
  const hideDark = phys(0x29313a, { roughness: 0.85, flatShading: false });
  const claw = phys(0x14161a, { roughness: 0.3, metalness: 0.3, flatShading: false });
  const noseMat = phys(0x1b1b21, { roughness: 0.62, flatShading: false });
  const gum = phys(0x3d1a22, { roughness: 0.9, flatShading: false });
  const fang = phys(0xf2ead6, { roughness: 0.3, flatShading: false });
  const ice = phys(0xb8e8ff, {
    roughness: 0.18,
    metalness: 0.28,
    emissive: 0x4aa8c8,
    emissiveIntensity: 0.22,
  });
  // Skirt layers are open shells, so they need both faces.
  const pelt = phys(0xd6e3f0, {
    roughness: 0.96,
    side: THREE.DoubleSide,
    sheen: 0.26,
    sheenColor: new THREE.Color(0xc4d7e8),
  });
  const peltMid = phys(0xa8bcd0, { roughness: 0.97, side: THREE.DoubleSide });
  const peltDeep = phys(0x7e93aa, { roughness: 0.97, side: THREE.DoubleSide });
  const peltDark = phys(0x54657c, { roughness: 0.98, side: THREE.DoubleSide });

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.85, 20),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.44,
      depthWrite: false,
    }),
  );
  shadow.name = 'contactShadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  // ── Legs ──────────────────────────────────────────────────────────────
  // Hips sit at y 1.18 directly under the pelvis, narrow enough that the
  // thighs read as columns beneath the body rather than struts on its sides.
  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'yetiLegL' : 'yetiLegR';
    hip.position.set(side * 0.3, 1.18, 0);
    hip.rotation.x = YETI_REST.legX;
    hip.rotation.z = side * 0.04;

    const haunch = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), fur);
    haunch.scale.set(1, 1.08, 1.12);
    haunch.position.set(0, -0.05, -0.02);
    haunch.castShadow = true;
    hip.add(haunch);

    const thigh = new THREE.Mesh(
      lathe(
        [
          [0.25, 0.02],
          [0.26, -0.14],
          [0.22, -0.32],
          [0.19, -0.48],
        ],
        12,
      ),
      fur,
    );
    thigh.castShadow = true;
    hip.add(thigh);
    addFurSkirt(hip, -0.16, 0.26, 15, 0.2, 1.05, pelt);
    addFurSkirt(hip, -0.34, 0.225, 14, 0.18, 1.08, peltMid);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'yetiShinL' : 'yetiShinR';
    shin.position.set(0, -0.5, 0.03);
    shin.rotation.x = YETI_REST.kneeX;

    const kneeCap = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), furMid);
    kneeCap.scale.set(1, 0.95, 1.05);
    kneeCap.castShadow = true;
    shin.add(kneeCap);
    const calf = new THREE.Mesh(
      lathe(
        [
          [0.2, 0.02],
          [0.21, -0.12],
          [0.17, -0.3],
          [0.145, -0.44],
        ],
        12,
      ),
      furDeep,
    );
    calf.castShadow = true;
    shin.add(calf);
    addFurSkirt(shin, -0.14, 0.205, 14, 0.17, 1.08, peltDeep);
    addFurSkirt(shin, -0.32, 0.17, 13, 0.15, 1.1, peltDark);

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'yetiFootL' : 'yetiFootR';
    foot.position.set(0, -0.46, 0.02);
    foot.rotation.x = YETI_REST.footX;

    const ankle = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), furMid);
    ankle.position.set(0, -0.02, 0);
    foot.add(ankle);
    const paw = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), fur);
    paw.scale.set(1.05, 0.5, 1.5);
    paw.position.set(0, -0.09, 0.12);
    paw.castShadow = true;
    foot.add(paw);
    const sole = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), hideDark);
    sole.scale.set(0.95, 0.2, 1.45);
    sole.position.set(0, -0.15, 0.13);
    foot.add(sole);
    addFurSkirt(foot, 0, 0.17, 12, 0.13, 1.3, peltDeep);

    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.095;
      const toe = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 6), fur);
      toe.scale.set(1, 0.85, 1.3);
      toe.position.set(x, -0.1, 0.3);
      toe.castShadow = true;
      foot.add(toe);
      const toePad = new THREE.Mesh(new THREE.SphereGeometry(0.04, 7, 5), hideDark);
      toePad.scale.set(1, 0.5, 1);
      toePad.position.set(x, -0.15, 0.3);
      foot.add(toePad);
      addClaw(foot, x, -0.11, 0.36, 0.19, 0.03, claw, 1.15, x * 1.2);
    }

    shin.add(foot);
    hip.add(shin);
    return hip;
  };
  g.add(makeLeg(-1));
  g.add(makeLeg(1));

  // ── Torso ─────────────────────────────────────────────────────────────
  // The body pivots at the waist so the lean carries the chest, arms, and
  // head forward over the hips instead of spinning inside a static barrel.
  const body = new THREE.Group();
  body.name = 'yetiBody';
  body.position.set(0, 1.14, -0.02);
  body.rotation.x = YETI_REST.bodyX;
  g.add(body);

  const torso = new THREE.Mesh(
    lathe(
      [
        [0.3, -0.12],
        [0.42, 0.04],
        [0.47, 0.24],
        [0.52, 0.46],
        [0.56, 0.66],
        [0.5, 0.82],
        [0.3, 0.95],
      ],
      14,
    ),
    fur,
  );
  torso.scale.set(1.24, 1, 0.9);
  torso.castShadow = true;
  addOutline(torso, 1.04, 0x121c26);
  body.add(torso);

  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.42, 14, 12), fur);
  chest.scale.set(1.32, 0.92, 0.7);
  chest.position.set(0, 0.6, 0.18);
  chest.castShadow = true;
  body.add(chest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 10), furMid);
  belly.scale.set(1.2, 1, 0.7);
  belly.position.set(0, 0.2, 0.18);
  body.add(belly);
  // Bear shoulder hump — the highest point of the silhouette from the side.
  const hump = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 10), fur);
  hump.scale.set(1.55, 0.78, 1);
  hump.position.set(0, 0.82, -0.1);
  hump.castShadow = true;
  body.add(hump);

  for (const sx of [-1, 1]) {
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.29, 12, 10), fur);
    deltoid.scale.set(1.1, 0.98, 1.08);
    deltoid.position.set(sx * 0.5, 0.74, 0.02);
    deltoid.castShadow = true;
    body.add(deltoid);
    const lat = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), furMid);
    lat.scale.set(0.9, 1.5, 0.85);
    lat.position.set(sx * 0.56, 0.42, 0);
    body.add(lat);

  }

  const coatShell = new THREE.Group();
  coatShell.scale.set(1.24, 1, 0.9);
  body.add(coatShell);
  addFurSkirt(coatShell, 0.8, 0.51, 22, 0.24, 1.08, pelt, -0.02);
  addFurSkirt(coatShell, 0.56, 0.56, 24, 0.24, 1.05, pelt);
  addFurSkirt(coatShell, 0.3, 0.5, 22, 0.24, 1.05, peltMid);
  addFurSkirt(coatShell, 0.04, 0.44, 20, 0.22, 1.07, peltDeep);

  addPatch(body, 0, 0.8, -0.26, 0.85, 0.4, 0.36, charcoal);
  addPatch(body, 0, 0.42, -0.38, 0.62, 0.46, 0.24, furShade);

  for (const [x, y, z, s, rx, rz] of [
    [-0.42, 0.88, -0.2, 0.15, 0.35, 0.45],
    [0.42, 0.88, -0.2, 0.15, 0.35, -0.45],
    [0, 0.94, -0.32, 0.17, 0.25, 0],
    [-0.2, 0.6, -0.44, 0.12, 0.5, 0.25],
    [0.2, 0.6, -0.44, 0.12, 0.5, -0.25],
  ] as const) {
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(s, 0), ice);
    shard.position.set(x, y, z);
    shard.rotation.set(rx, 0.4, rz);
    shard.scale.set(0.45, 1.6, 0.4);
    shard.castShadow = true;
    body.add(shard);
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.22, 12), furMid);
  neck.position.set(0, 0.96, 0.05);
  neck.rotation.x = -0.18;
  body.add(neck);

  // ── Arms ──────────────────────────────────────────────────────────────
  // Shoulders at x ±0.58 line up with the deltoid caps, and the rest pose
  // only sets the arms out by YETI_REST.armZ so the paws hang beside the
  // hips instead of winging out sideways.
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'yetiArmL' : 'yetiArmR';
    arm.position.set(side * 0.58, 0.72, 0.03);
    arm.rotation.x = YETI_REST.armX;
    arm.rotation.z = side * YETI_REST.armZ;

    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), fur);
    cap.position.set(0, 0.02, 0);
    cap.castShadow = true;
    arm.add(cap);
    const upper = new THREE.Mesh(
      lathe(
        [
          [0.23, 0.04],
          [0.24, -0.12],
          [0.2, -0.34],
          [0.175, -0.54],
        ],
        12,
      ),
      fur,
    );
    upper.castShadow = true;
    arm.add(upper);
    addFurSkirt(arm, 0.04, 0.265, 16, 0.22, 1.12, pelt);
    addFurSkirt(arm, -0.14, 0.235, 15, 0.19, 1.08, peltMid);
    addFurSkirt(arm, -0.38, 0.195, 14, 0.17, 1.1, peltDeep);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'yetiForearmL' : 'yetiForearmR';
    forearm.position.set(0, -0.58, 0.02);
    forearm.rotation.x = YETI_REST.forearmX;

    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 8), furMid);
    elbow.castShadow = true;
    forearm.add(elbow);
    const lower = new THREE.Mesh(
      lathe(
        [
          [0.2, 0.02],
          [0.22, -0.12],
          [0.195, -0.3],
          [0.17, -0.46],
        ],
        12,
      ),
      furMid,
    );
    lower.castShadow = true;
    forearm.add(lower);
    addFurSkirt(forearm, -0.14, 0.2, 14, 0.17, 1.08, peltMid);
    addFurSkirt(forearm, -0.36, 0.172, 13, 0.16, 1.14, peltDeep);

    // ── Paw ─────────────────────────────────────────────────────────────
    // Digits continue the forearm's downward line with a slight forward set,
    // and each talon leaves the fingertip hooking down and forward.
    const hand = new THREE.Group();
    hand.name = side < 0 ? 'yetiHandL' : 'yetiHandR';
    hand.position.set(0, -0.5, 0.02);

    const wrist = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), furMid);
    hand.add(wrist);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 10), fur);
    palm.scale.set(1.2, 0.92, 0.92);
    palm.position.set(0, -0.1, 0.03);
    palm.castShadow = true;
    hand.add(palm);
    const palmPad = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), hideDark);
    palmPad.scale.set(1.2, 0.8, 0.5);
    palmPad.position.set(0, -0.14, 0.11);
    hand.add(palmPad);
    // Sits at the wrist — any lower and the cuff swallows the knuckles and
    // the paw reads as a mitten.
    addFurSkirt(hand, 0.02, 0.18, 13, 0.11, 1.18, peltDeep);

    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.1;
      const reach = 1 - Math.abs(i - 1.5) * 0.1;
      const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.058, 8, 6), fur);
      knuckle.position.set(x, -0.17, 0.08);
      knuckle.castShadow = true;
      hand.add(knuckle);
      const digit = new THREE.Mesh(new THREE.ConeGeometry(0.052, 0.14, 6), furMid);
      digit.rotation.x = Math.PI - 0.25;
      digit.position.set(x, -0.24, 0.1);
      digit.castShadow = true;
      hand.add(digit);
      addClaw(hand, x, -0.3, 0.115, 0.26 * reach, 0.032, claw, 0.3, x * 1.4);
    }

    // Thumb rides the inside of the paw, claw turned in toward the body.
    const thumbX = -side * 0.2;
    const thumb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), fur);
    thumb.scale.set(1, 1.1, 1);
    thumb.position.set(thumbX, -0.09, 0.04);
    thumb.castShadow = true;
    hand.add(thumb);
    addClaw(hand, thumbX - side * 0.03, -0.16, 0.06, 0.2, 0.028, claw, 0.4, -side * 0.55);

    forearm.add(hand);
    arm.add(forearm);
    return arm;
  };
  body.add(makeArm(-1));
  body.add(makeArm(1));

  // ── Head ──────────────────────────────────────────────────────────────
  // Parented to the body so the hunch pushes the skull out over the chest.
  const head = new THREE.Group();
  head.name = 'yetiHead';
  head.position.set(0, 1.06, 0.1);
  head.rotation.x = YETI_REST.headX;
  body.add(head);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 12), fur);
  skull.scale.set(1, 0.95, 1.12);
  skull.position.set(0, 0.02, -0.02);
  skull.castShadow = true;
  head.add(skull);
  addPatch(head, 0, 0.2, -0.16, 0.42, 0.26, 0.34, furDeep);

  // Mane: a near-horizontal outer fringe behind a softer inner one.
  addFurSkirt(head, 0.2, 0.27, 16, 0.22, 1.2, pelt, -0.08);
  addFurSkirt(head, 0.1, 0.3, 18, 0.24, 1.3, pelt, -0.06);
  addFurSkirt(head, -0.05, 0.31, 18, 0.24, 1.2, peltMid, -0.04);

  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), fur);
  brow.scale.set(1.25, 0.44, 0.6);
  brow.position.set(0, 0.13, 0.16);
  brow.castShadow = true;
  head.add(brow);

  const makeEye = (sx: number) => {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), hideDark);
    socket.scale.set(1.3, 1, 0.6);
    socket.position.set(sx, 0.04, 0.25);
    head.add(socket);

    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.044, 10, 8),
      phys(0xffc24a, {
        emissive: 0xff9900,
        emissiveIntensity: 1.05,
        roughness: 0.2,
        flatShading: false,
      }),
    );
    eye.scale.set(1.15, 0.68, 0.7);
    eye.position.set(sx, 0.04, 0.285);
    eye.name = 'yetiEye';
    head.add(eye);

    const slit = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.006, 0.03, 3, 6),
      phys(0x0a0604, { flatShading: false }),
    );
    slit.position.set(sx, 0.042, 0.312);
    head.add(slit);

    // Shadowed mask around the socket, then an angled lid that pinches the
    // glow into a glare instead of leaving a round cartoon eye.
    addPatch(head, sx * 1.12, 0.03, 0.15, 0.34, 0.26, 0.3, furDeep, Math.sign(sx) * 0.3);
    const lid = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), fur);
    lid.scale.set(1.3, 0.56, 0.5);
    lid.position.set(sx, 0.098, 0.235);
    lid.rotation.z = Math.sign(sx) * 0.55;
    head.add(lid);

    const eyeLight = new THREE.PointLight(0xff9900, 0.3, 1.4);
    eyeLight.name = 'yetiEyeLight';
    eyeLight.position.set(sx, 0.04, 0.38);
    head.add(eyeLight);
  };
  makeEye(-0.125);
  makeEye(0.125);

  const bridge = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), fur);
  bridge.scale.set(1.1, 0.85, 1.7);
  bridge.position.set(0, 0.04, 0.24);
  head.add(bridge);
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), furDeep);
  muzzle.scale.set(0.95, 0.78, 1.2);
  muzzle.position.set(0, -0.05, 0.28);
  muzzle.castShadow = true;
  head.add(muzzle);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), noseMat);
  nose.scale.set(1.4, 0.85, 0.8);
  nose.position.set(0, 0.005, 0.43);
  head.add(nose);
  for (const sx of [-1, 1]) {
    const nostril = new THREE.Mesh(
      new THREE.SphereGeometry(0.013, 7, 5),
      phys(0x08080c, { flatShading: false }),
    );
    nostril.position.set(sx * 0.028, -0.012, 0.47);
    head.add(nostril);
  }

  // Roar: dark throat between a fixed upper lip and a dropped jaw.
  const maw = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), gum);
  maw.scale.set(1.08, 0.9, 0.8);
  maw.position.set(0, -0.23, 0.26);
  head.add(maw);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), gum);
  tongue.scale.set(1, 0.35, 1.5);
  tongue.position.set(0, -0.27, 0.29);
  head.add(tongue);

  const upperLip = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), hideDark);
  upperLip.scale.set(0.94, 0.26, 1.1);
  upperLip.position.set(0, -0.115, 0.3);
  head.add(upperLip);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), hide);
  jaw.scale.set(0.95, 0.44, 1.15);
  jaw.position.set(0, -0.33, 0.25);
  jaw.rotation.x = 0.28;
  jaw.castShadow = true;
  head.add(jaw);
  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), furMid);
  chin.scale.set(1.1, 0.8, 0.9);
  chin.position.set(0, -0.38, 0.14);
  head.add(chin);

  const makeTooth = (x: number, y: number, z: number, len: number, rad: number, down: boolean) => {
    const t = new THREE.Mesh(new THREE.ConeGeometry(rad, len, 6), fang);
    t.rotation.x = down ? Math.PI : 0;
    t.position.set(x, y + (down ? -len / 2 : len / 2), z);
    head.add(t);
  };
  makeTooth(-0.075, -0.15, 0.35, 0.11, 0.023, true);
  makeTooth(0.075, -0.15, 0.35, 0.11, 0.023, true);
  for (let i = 0; i < 5; i++) {
    makeTooth((i - 2) * 0.033, -0.155, 0.375, 0.05, 0.012, true);
  }
  // Lower canines sit wider so they pass outside the uppers in the gape.
  makeTooth(-0.1, -0.285, 0.33, 0.095, 0.021, false);
  makeTooth(0.1, -0.285, 0.33, 0.095, 0.021, false);
  for (let i = 0; i < 5; i++) {
    makeTooth((i - 2) * 0.031, -0.29, 0.355, 0.045, 0.011, false);
  }

  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), fur);
    ear.scale.set(0.85, 1, 0.4);
    ear.position.set(s * 0.245, 0.25, -0.11);
    ear.rotation.z = s * 0.3;
    ear.castShadow = true;
    head.add(ear);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.034, 8, 6), hide);
    inner.scale.set(0.75, 0.85, 0.35);
    inner.position.set(s * 0.25, 0.245, -0.145);
    head.add(inner);
  }

  const breath = new THREE.Mesh(
    new THREE.ConeGeometry(0.11, 0.36, 8, 1, true),
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
  breath.position.set(0, -0.22, 0.5);
  breath.name = 'yetiBreath';
  head.add(breath);
  for (let i = 0; i < 3; i++) {
    const mist = new THREE.Mesh(
      new THREE.SphereGeometry(0.065 + i * 0.025, 6, 5),
      new THREE.MeshBasicMaterial({
        color: 0xb8e8ff,
        transparent: true,
        opacity: 0.22 - i * 0.04,
        depthWrite: false,
      }),
    );
    mist.position.set((i - 1) * 0.04, -0.21, 0.62 + i * 0.1);
    mist.name = 'yetiBreathMist';
    head.add(mist);
  }

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.9, 2.4, 10),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 1.2;
  hit.name = 'hit';
  g.add(hit);
  g.scale.setScalar(1.15);
  return g;
}

/**
 * Orc Scout — Drive sheet: faceted olive scout, brown X-vest, tan spike-fur
 * collar / cuffs / boot tops, short dark spikes of hair, thin spear.
 */
export function createOrcScout(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'orc';

  const skin = phys(0x6d8c42, { roughness: 0.72, sheen: 0.12, sheenColor: new THREE.Color(0x7a9848), flatShading: true });
  const skinDark = phys(0x4a6428, { roughness: 0.78, flatShading: true });
  const leather = phys(0x5c3a22, { roughness: 0.78, flatShading: true });
  const leatherMid = phys(0x7a5330, { roughness: 0.7, flatShading: true });
  const leatherDark = phys(0x3a2414, { roughness: 0.84, flatShading: true });
  const fur = phys(0xc4a57a, { roughness: 0.94, sheen: 0.16, sheenColor: new THREE.Color(0xc8a878), flatShading: true });
  const furDark = phys(0x8d7048, { roughness: 0.95, flatShading: true });
  const cloth = phys(0x2a2e30, { roughness: 0.92, flatShading: true });
  const hair = phys(0x1c1a20, { roughness: 0.96, flatShading: true });
  const metal = phys(0xd4dae2, { metalness: 0.78, roughness: 0.22, flatShading: true });
  const wood = phys(0x4a3014, { roughness: 0.88, flatShading: true });
  const tusk = phys(0xf3eee2, { roughness: 0.38, flatShading: false });
  const paint = phys(0x2a1c10, { roughness: 0.92, flatShading: true });

  const addPart = (mesh: THREE.Mesh, parent: THREE.Object3D, outlineScale?: number) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    if (outlineScale) addOutline(mesh, outlineScale, 0x0a1208);
    parent.add(mesh);
    return mesh;
  };

  /** Drive sheet fur: chunky faceted pyramids, not a necklace of needles. */
  const addSpikeFur = (
    parent: THREE.Object3D,
    cx: number,
    cy: number,
    cz: number,
    radius: number,
    count: number,
    len: number,
    tilt = 0.15,
  ) => {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + 0.2;
      const elev = ((i % 3) - 1) * 0.18;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(len * 0.48, len * 0.85, 5), i % 3 === 0 ? furDark : fur);
      spike.position.set(cx + Math.cos(a) * radius, cy + elev * len * 0.25, cz + Math.sin(a) * radius);
      spike.lookAt(cx, cy - tilt, cz);
      spike.rotateX(Math.PI);
      spike.castShadow = true;
      parent.add(spike);
    }
  };

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.4, 18),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }),
  );
  shadow.name = 'contactShadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'orcLegL' : 'orcLegR';
    hip.position.set(side * 0.18, 0.8, 0);

    const thigh = new THREE.Mesh(
      lathe(
        [
          [0.11, 0.02],
          [0.125, -0.1],
          [0.11, -0.22],
          [0.09, -0.34],
        ],
        10,
      ),
      cloth,
    );
    addPart(thigh, hip);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'orcShinL' : 'orcShinR';
    shin.position.set(0, -0.36, 0);
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.085, 9, 7), cloth);
    addPart(knee, shin);
    const calf = new THREE.Mesh(
      lathe(
        [
          [0.085, 0.0],
          [0.09, -0.08],
          [0.08, -0.16],
        ],
        10,
      ),
      cloth,
    );
    addPart(calf, shin);

    // Tall wrapped boot from the sheet, spike-fur cuff at the top.
    const boot = new THREE.Mesh(
      lathe(
        [
          [0.095, 0.02],
          [0.1, -0.08],
          [0.092, -0.2],
          [0.078, -0.3],
        ],
        10,
      ),
      leatherMid,
    );
    boot.position.set(0, -0.12, 0.01);
    addPart(boot, shin, 1.04);
    for (const t of [-0.08, -0.18, -0.26]) {
      const wrap = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.018, 0.016), leatherDark);
      wrap.position.set(0, t - 0.12, 0.02);
      wrap.rotation.z = 0.35;
      shin.add(wrap);
    }
    addSpikeFur(shin, 0, -0.08, 0.01, 0.1, 12, 0.055, 0.05);

    const footG = new THREE.Group();
    footG.name = side < 0 ? 'orcFootL' : 'orcFootR';
    footG.position.set(0, -0.36, 0);
    const foot = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.14, 4, 8), leatherDark);
    foot.rotation.x = Math.PI / 2;
    foot.position.set(0, 0, 0.1);
    foot.scale.set(1.15, 1, 0.65);
    addPart(foot, footG);
    shin.add(footG);
    hip.add(shin);
    return hip;
  };
  g.add(makeLeg(-1));
  g.add(makeLeg(1));

  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.2, 10), cloth);
  hips.position.y = 0.78;
  addPart(hips, g);

  const body = new THREE.Group();
  body.name = 'orcBody';
  body.position.set(0, 1.12, 0);
  g.add(body);

  // Fitted tunic — tapers at the waist, not a soup-can.
  const tunic = new THREE.Mesh(
    lathe(
      [
        [0.24, -0.3],
        [0.27, -0.12],
        [0.26, 0.08],
        [0.24, 0.26],
      ],
      12,
    ),
    leather,
  );
  addPart(tunic, body, 1.06);

  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.34, 0.05), leatherMid);
  panel.position.set(0, 0.04, 0.22);
  addPart(panel, body);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.07, 10), leatherDark);
  belt.position.y = 0.88;
  addPart(belt, g);
  const beltBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.055, 0.04), metal);
  beltBuckle.position.set(0, 0.88, 0.28);
  g.add(beltBuckle);

  const makeStrap = (rotZ: number, z: number) => {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.52, 0.03), leatherDark);
    strap.position.set(0, 0.02, z);
    strap.rotation.z = rotZ;
    body.add(strap);
    for (const t of [-0.16, 0.16]) {
      const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.014, 5, 4), metal);
      rivet.position.set(Math.sin(rotZ) * t * 0.12, 0.02 + Math.cos(rotZ) * t, z + 0.02);
      body.add(rivet);
    }
  };
  makeStrap(0.5, 0.26);
  makeStrap(-0.5, 0.26);
  makeStrap(0.5, -0.26);
  makeStrap(-0.5, -0.26);
  const chestBuckle = new THREE.Mesh(new THREE.OctahedronGeometry(0.055, 0), metal);
  chestBuckle.scale.set(1.2, 0.85, 0.4);
  chestBuckle.position.set(0, 0.02, 0.29);
  body.add(chestBuckle);

  for (const sx of [-1, 1]) {
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), skin);
    deltoid.position.set(sx * 0.32, 0.24, 0);
    addPart(deltoid, body);
  }

  // Signature tan spike collar from the sheet.
  addSpikeFur(body, 0, 0.3, 0, 0.22, 22, 0.09, 0.05);
  addSpikeFur(body, 0, 0.34, 0, 0.18, 16, 0.07, -0.1);

  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'orcArmL' : 'orcArmR';
    arm.position.set(side * 0.32, 0.26, 0.02);
    arm.rotation.z = side * 0.18;
    arm.rotation.x = side > 0 ? -0.32 : -0.1;

    const upper = new THREE.Mesh(
      lathe(
        [
          [0.095, 0.02],
          [0.1, -0.1],
          [0.088, -0.22],
          [0.075, -0.32],
        ],
        10,
      ),
      skin,
    );
    addPart(upper, arm);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'orcForearmL' : 'orcForearmR';
    forearm.position.set(0, -0.34, 0);
    forearm.rotation.x = side > 0 ? -0.42 : -0.28;

    const gauntlet = new THREE.Mesh(
      lathe(
        [
          [0.078, 0.02],
          [0.082, -0.08],
          [0.07, -0.18],
          [0.058, -0.26],
        ],
        10,
      ),
      leather,
    );
    addPart(gauntlet, forearm, 1.03);
    addSpikeFur(forearm, 0, 0.0, 0, 0.082, 10, 0.05, 0.05);

    const hand = new THREE.Group();
    hand.name = side < 0 ? 'orcHandL' : 'orcHandR';
    hand.position.set(0, -0.28, 0.02);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.058, 9, 7), skin);
    palm.scale.set(0.85, 1, 0.95);
    addPart(palm, hand);
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.014, 0.048, 3, 5), skin);
      f.position.set((i - 1.5) * 0.026, -0.052, 0.018);
      f.rotation.x = 0.35;
      hand.add(f);
    }
    const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.014, 0.04, 3, 5), skin);
    thumb.position.set(side * 0.048, -0.018, 0.03);
    thumb.rotation.set(0.55, 0, side * 0.65);
    hand.add(thumb);
    forearm.add(hand);
    arm.add(forearm);
    return arm;
  };
  body.add(makeArm(-1));
  const armR = makeArm(1);
  body.add(armR);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.2, 8), skin);
  neck.position.set(0, 1.46, 0.005);
  addPart(neck, g);

  const head = new THREE.Group();
  head.name = 'orcHead';
  head.position.set(0, 1.72, 0.008);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.185, 12, 10), skin);
  skull.scale.set(1.02, 1.06, 0.92);
  addPart(skull, head, 1.08);

  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.145, 10, 8), skinDark);
  brow.scale.set(1.18, 0.38, 0.72);
  brow.position.set(0, 0.112, 0.1);
  addPart(brow, head);
  for (const sx of [-1, 1]) {
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.016, 0.02), skinDark);
    ridge.rotation.z = sx * -0.22;
    ridge.position.set(sx * 0.05, 0.082, 0.168);
    head.add(ridge);
  }

  const bridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.055, 4, 7), skin);
  bridge.rotation.x = 0.4;
  bridge.position.set(0, 0.028, 0.16);
  head.add(bridge);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), skin);
  nose.scale.set(1.15, 0.75, 1.05);
  nose.position.set(0, -0.03, 0.178);
  head.add(nose);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.14, 11, 9), skinDark);
  jaw.scale.set(1.02, 0.7, 1.0);
  jaw.position.set(0, -0.12, 0.08);
  addPart(jaw, head);
  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), skinDark);
  chin.position.set(0, -0.16, 0.14);
  head.add(chin);
  const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.01, 0.05, 3, 6), phys(0x3a1c18, { flatShading: true }));
  mouth.rotation.z = Math.PI / 2;
  mouth.position.set(0, -0.09, 0.185);
  head.add(mouth);

  // Tusks from the lower jaw corners — visible from the gameplay camera.
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.11, 6), tusk);
    t.position.set(sx * 0.052, -0.085, 0.188);
    t.rotation.set(0.7, 0, sx * 0.28);
    head.add(t);
  }

  for (const sx of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), skinDark);
    socket.scale.set(1.1, 0.8, 0.55);
    socket.position.set(sx * 0.068, 0.03, 0.145);
    head.add(socket);
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), phys(0xe4dcc4, { roughness: 0.4, flatShading: false }));
    sclera.scale.set(1.1, 0.8, 0.65);
    sclera.position.set(sx * 0.068, 0.03, 0.158);
    head.add(sclera);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.012, 7, 5),
      phys(0x3a2210, { roughness: 0.35, flatShading: false }),
    );
    iris.position.set(sx * 0.069, 0.03, 0.17);
    head.add(iris);
  }

  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 5), skin);
    ear.position.set(sx * 0.22, 0.05, -0.01);
    ear.rotation.z = sx * -1.15;
    ear.rotation.x = -0.2;
    addPart(ear, head);
  }

  // Short upright hair spikes from the sheet, not a pancake cap.
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.175, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.48),
    hair,
  );
  hairCap.position.set(0, 0.07, -0.02);
  addPart(hairCap, head);
  const spikes: [number, number, number, number][] = [
    [0, 0.26, 0.02, 1.2],
    [-0.07, 0.24, 0.05, 1.05],
    [0.07, 0.24, 0.05, 1.05],
    [-0.12, 0.2, 0.0, 0.95],
    [0.12, 0.2, 0.0, 0.95],
    [0, 0.22, -0.1, 1.1],
    [-0.08, 0.18, -0.08, 0.9],
    [0.08, 0.18, -0.08, 0.9],
    [-0.04, 0.27, -0.02, 1.15],
    [0.04, 0.27, -0.02, 1.15],
  ];
  for (const [x, y, z, s] of spikes) {
    const lock = new THREE.Mesh(new THREE.ConeGeometry(0.035 * s, 0.11 * s, 5), hair);
    lock.position.set(x, y, z);
    lock.rotation.x = 0.25 + z * 0.8;
    lock.rotation.z = -x * 0.6;
    head.add(lock);
  }

  const browPaint = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.012, 0.01), paint);
  browPaint.position.set(0, 0.072, 0.16);
  head.add(browPaint);

  g.add(head);

  const spear = new THREE.Group();
  spear.name = 'orcSpear';
  spear.position.set(0.02, -0.02, 0.03);
  spear.rotation.set(-0.88, 0.08, 0.08);
  spear.userData.rest = { x: 0.02, y: -0.02, z: 0.03, rx: -0.88, ry: 0.08, rz: 0.08 };
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 2.15, 6), wood);
  shaft.position.y = -0.95;
  addPart(shaft, spear);
  const tip = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), metal);
  tip.scale.set(0.32, 2.2, 0.22);
  tip.position.y = -2.12;
  addPart(tip, spear);
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.022, 0.06, 6), metal);
  collar.position.y = -1.92;
  spear.add(collar);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.07, 4), metal);
  butt.position.y = 0.14;
  spear.add(butt);
  const handR = armR.getObjectByName('orcHandR');
  (handR ?? armR).add(spear);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.5, 1.9, 8),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.95;
  hit.name = 'hit';
  g.add(hit);
  return g;
}
