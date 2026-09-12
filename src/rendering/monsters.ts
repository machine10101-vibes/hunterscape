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

/** Outward-pointing fur tufts that break a smooth balloon silhouette. */
function addFurBurst(
  parent: THREE.Object3D,
  cx: number,
  cy: number,
  cz: number,
  radius: number,
  count: number,
  size: number,
  mats: THREE.Material[],
  droop = 0.35,
): void {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + size * 7;
    const elev = -0.35 + (i % 5) * 0.22;
    const s = size * (0.75 + (i % 4) * 0.12);
    const tuft = new THREE.Mesh(new THREE.ConeGeometry(s * 0.55, s * 1.8, 5), mats[i % mats.length]);
    const x = cx + Math.cos(a) * radius;
    const z = cz + Math.sin(a) * radius;
    tuft.position.set(x, cy + Math.sin(elev) * radius * 0.35, z);
    tuft.lookAt(cx, cy - droop, cz);
    tuft.rotateX(Math.PI);
    tuft.castShadow = true;
    parent.add(tuft);
  }
}

/** Dark charcoal stripe laid across fur — the yeti sheet's black banding. */
function addStripe(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  d: number,
  mat: THREE.Material,
  rx = 0,
  rz = 0,
): void {
  const s = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  s.position.set(x, y, z);
  s.rotation.set(rx, 0, rz);
  parent.add(s);
}

/** Long hooked claw — the sheet's black talons, not short nubs. */
function addTalon(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  len: number,
  rad: number,
  claw: THREE.Material,
  hook = 0.55,
): void {
  const c = new THREE.Mesh(new THREE.ConeGeometry(rad, len, 6), claw);
  c.rotation.x = Math.PI / 2 + hook;
  c.position.set(x, y, z + len * 0.22);
  c.castShadow = true;
  parent.add(c);
}

/**
 * Frost Yeti — Drive sheet: shaggy ice-bear, roaring maw, glowing amber
 * eyes, charcoal stripes, long black talons.
 */
export function createFrostYeti(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'yeti';

  const fur = phys(0xd5e2ee, { roughness: 0.96, sheen: 0.28, sheenColor: new THREE.Color(0xc8d8e8), sheenRoughness: 0.8 });
  const furMid = phys(0xb4c6d6, { roughness: 0.97, sheen: 0.18, sheenColor: new THREE.Color(0xa8bcc8) });
  const furDeep = phys(0x6a7c8c, { roughness: 0.98 });
  const stripe = phys(0x2a323c, { roughness: 0.95 });
  const hide = phys(0x3a4450, { roughness: 0.86, flatShading: false });
  const hideDark = phys(0x1e262e, { roughness: 0.88, flatShading: false });
  const claw = phys(0x16181c, { roughness: 0.28, metalness: 0.35, flatShading: false });
  const noseMat = phys(0x141418, { roughness: 0.42, flatShading: false });
  const gum = phys(0x6a2430, { roughness: 0.78, flatShading: false });
  const throat = phys(0x2a1016, { roughness: 0.9, flatShading: false });
  const fang = phys(0xf4ecd8, { roughness: 0.32, flatShading: false });
  const ice = phys(0xb8e8ff, {
    roughness: 0.18,
    metalness: 0.28,
    emissive: 0x4aa8c8,
    emissiveIntensity: 0.22,
    flatShading: true,
  });
  const furMats = [fur, furMid, furDeep];

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.9, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.44, depthWrite: false }),
  );
  shadow.name = 'contactShadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  g.add(shadow);

  const makeLeg = (side: number) => {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'yetiLegL' : 'yetiLegR';
    hip.position.set(side * 0.34, 0.94, 0.02);

    const hipBall = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), fur);
    hipBall.position.set(0, -0.02, 0.02);
    hipBall.castShadow = true;
    hip.add(hipBall);
    const thigh = new THREE.Mesh(
      lathe(
        [
          [0.2, 0.02],
          [0.22, -0.12],
          [0.18, -0.28],
          [0.15, -0.4],
        ],
        10,
      ),
      fur,
    );
    thigh.castShadow = true;
    hip.add(thigh);
    addFurBurst(hip, 0, -0.16, 0.04, 0.2, 10, 0.09, furMats, 0.5);
    addStripe(hip, 0, -0.18, 0.16, 0.28, 0.05, 0.04, stripe, 0.15);

    const shin = new THREE.Group();
    shin.name = side < 0 ? 'yetiShinL' : 'yetiShinR';
    shin.position.set(0, -0.46, 0.06);
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), furMid);
    knee.castShadow = true;
    shin.add(knee);
    const calf = new THREE.Mesh(
      lathe(
        [
          [0.15, 0.02],
          [0.16, -0.1],
          [0.13, -0.24],
          [0.11, -0.34],
        ],
        10,
      ),
      furMid,
    );
    calf.castShadow = true;
    shin.add(calf);
    addFurBurst(shin, 0, -0.14, 0.02, 0.15, 8, 0.07, furMats, 0.4);
    addStripe(shin, 0, -0.14, 0.14, 0.22, 0.04, 0.03, stripe);

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'yetiFootL' : 'yetiFootR';
    foot.position.set(0, -0.38, 0.06);
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), fur);
    pad.scale.set(1.05, 0.4, 1.45);
    pad.position.set(0, -0.02, 0.12);
    pad.castShadow = true;
    foot.add(pad);
    const sole = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), hideDark);
    sole.scale.set(0.95, 0.22, 1.15);
    sole.position.set(0, -0.055, 0.14);
    foot.add(sole);
    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.08;
      const toe = new THREE.Mesh(new THREE.SphereGeometry(0.05, 7, 5), fur);
      toe.scale.set(1, 0.7, 1.35);
      toe.position.set(x, -0.02, 0.28);
      foot.add(toe);
      addTalon(foot, x, -0.015, 0.34, 0.16, 0.022, claw, 0.4);
    }
    shin.add(foot);
    hip.add(shin);
    return hip;
  };
  g.add(makeLeg(-1));
  g.add(makeLeg(1));

  const body = new THREE.Group();
  body.name = 'yetiBody';
  body.position.set(0, 1.32, -0.12);
  body.rotation.x = 0.32;
  g.add(body);

  const torso = new THREE.Mesh(
    lathe(
      [
        [0.42, -0.55],
        [0.58, -0.28],
        [0.62, 0.02],
        [0.56, 0.32],
        [0.4, 0.52],
      ],
      12,
    ),
    fur,
  );
  torso.scale.set(1.18, 1, 0.95);
  torso.castShadow = true;
  addOutline(torso, 1.05, 0x0a1520);
  body.add(torso);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 10), furMid);
  belly.scale.set(1.15, 0.9, 0.62);
  belly.position.set(0, -0.18, 0.36);
  body.add(belly);
  const barrel = new THREE.Mesh(new THREE.SphereGeometry(0.44, 12, 10), fur);
  barrel.scale.set(1.3, 0.7, 0.7);
  barrel.position.set(0, 0.14, 0.3);
  barrel.castShadow = true;
  body.add(barrel);
  for (const sx of [-1, 1]) {
    const lat = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), furMid);
    lat.scale.set(1.05, 1.4, 0.8);
    lat.position.set(sx * 0.5, 0.08, -0.04);
    body.add(lat);
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), fur);
    shoulder.scale.set(1.2, 0.85, 1.05);
    shoulder.position.set(sx * 0.52, 0.38, 0.02);
    torso.add(shoulder);
  }

  addFurBurst(body, 0, -0.2, 0.08, 0.62, 18, 0.12, furMats, 0.55);
  addFurBurst(body, 0, 0.36, 0.0, 0.58, 16, 0.13, furMats, 0.4);
  addFurBurst(body, 0, 0.12, -0.38, 0.42, 10, 0.11, [furDeep, furMid], 0.2);

  // Charcoal banding from the sheet — across chest, belly, and the back.
  addStripe(body, 0, 0.22, 0.48, 0.85, 0.07, 0.05, stripe, 0.1);
  addStripe(body, 0, -0.06, 0.5, 0.7, 0.06, 0.04, stripe, 0.08);
  addStripe(body, 0, 0.28, -0.48, 0.7, 0.06, 0.04, stripe);
  addStripe(body, 0, -0.08, -0.46, 0.55, 0.05, 0.04, stripe);

  for (const [x, y, z, s, rx, rz] of [
    [-0.5, 0.48, -0.1, 0.16, 0.4, 0.4],
    [0.5, 0.48, -0.1, 0.16, 0.4, -0.4],
    [0, 0.58, -0.28, 0.18, 0.2, 0],
    [-0.28, 0.3, -0.36, 0.12, 0.5, 0.2],
    [0.28, 0.3, -0.36, 0.12, 0.5, -0.2],
  ] as const) {
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(s, 0), ice);
    shard.position.set(x, y, z);
    shard.rotation.set(rx, 0.4, rz);
    shard.scale.set(0.5, 1.7, 0.4);
    shard.castShadow = true;
    body.add(shard);
  }

  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'yetiArmL' : 'yetiArmR';
    arm.position.set(side * 0.74, 0.32, 0.26);
    arm.rotation.z = side * 0.4;
    arm.rotation.x = -0.42;

    const upper = new THREE.Mesh(
      lathe(
        [
          [0.2, 0.04],
          [0.21, -0.12],
          [0.18, -0.32],
          [0.15, -0.5],
        ],
        10,
      ),
      fur,
    );
    upper.castShadow = true;
    arm.add(upper);
    addFurBurst(arm, 0, -0.08, 0, 0.2, 10, 0.085, furMats, 0.45);
    addFurBurst(arm, 0, -0.36, 0, 0.17, 8, 0.075, furMats, 0.4);
    addStripe(arm, 0, -0.16, 0.16, 0.28, 0.05, 0.04, stripe);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'yetiForearmL' : 'yetiForearmR';
    forearm.position.set(0, -0.56, 0);
    forearm.rotation.x = -0.48;
    const forearmMesh = new THREE.Mesh(
      lathe(
        [
          [0.15, 0.02],
          [0.16, -0.12],
          [0.14, -0.28],
          [0.12, -0.42],
        ],
        10,
      ),
      furMid,
    );
    forearmMesh.castShadow = true;
    forearm.add(forearmMesh);
    addFurBurst(forearm, 0, -0.22, 0, 0.15, 8, 0.07, furMats, 0.35);
    addStripe(forearm, 0, -0.18, 0.14, 0.22, 0.045, 0.03, stripe);

    const hand = new THREE.Group();
    hand.name = side < 0 ? 'yetiHandL' : 'yetiHandR';
    hand.position.set(0, -0.48, 0.05);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.16, 9, 7), fur);
    palm.scale.set(1.05, 0.8, 1);
    palm.castShadow = true;
    hand.add(palm);
    const palmPad = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), hideDark);
    palmPad.scale.set(1, 0.9, 0.35);
    palmPad.position.set(0, -0.02, 0.1);
    hand.add(palmPad);
    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.078;
      const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.048, 7, 5), fur);
      knuckle.position.set(x, -0.04, 0.14);
      hand.add(knuckle);
      addTalon(hand, x, -0.05, 0.2, 0.24, 0.028, claw, 0.5);
    }
    const thumb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 7, 5), fur);
    thumb.position.set(side * 0.13, 0, 0.06);
    hand.add(thumb);
    addTalon(hand, side * 0.16, -0.01, 0.1, 0.14, 0.022, claw, 0.45);

    forearm.add(hand);
    arm.add(forearm);
    return arm;
  };
  body.add(makeArm(-1));
  body.add(makeArm(1));

  const dewlap = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), fur);
  dewlap.scale.set(1.2, 0.72, 0.9);
  dewlap.position.set(0, 0.6, 0.2);
  dewlap.castShadow = true;
  body.add(dewlap);
  addFurBurst(body, 0, 0.58, 0.16, 0.32, 12, 0.09, furMats, 0.45);

  // Head — snarling ice-bear, not a closed cute muzzle.
  const head = new THREE.Group();
  head.name = 'yetiHead';
  head.position.set(0, 2.02, 0.28);
  head.rotation.x = -0.28;

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 10), fur);
  skull.scale.set(1.02, 0.92, 1.12);
  skull.castShadow = true;
  addOutline(skull, 1.07, 0x0a1520);
  head.add(skull);
  addFurBurst(head, 0, 0.12, -0.12, 0.38, 14, 0.1, furMats, 0.25);
  addFurBurst(head, 0, 0.28, -0.06, 0.28, 8, 0.09, [furMid, furDeep], 0.15);

  const mask = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), hide);
  mask.scale.set(0.88, 0.78, 0.72);
  mask.position.set(0, -0.04, 0.2);
  head.add(mask);

  // Heavy V-brow from the sheet — shades the glowing slits.
  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), hideDark);
  brow.scale.set(1.15, 0.32, 0.62);
  brow.position.set(0, 0.16, 0.22);
  head.add(brow);
  for (const sx of [-1, 1]) {
    const ridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.14, 4, 8), hideDark);
    ridge.rotation.z = sx * -0.55;
    ridge.rotation.x = -0.35;
    ridge.position.set(sx * 0.12, 0.12, 0.4);
    head.add(ridge);
  }

  const makeEye = (sx: number) => {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), hideDark);
    socket.scale.set(1.15, 0.85, 0.55);
    socket.position.set(sx, 0.055, 0.4);
    head.add(socket);
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.042, 10, 8),
      phys(0xffc24a, {
        emissive: 0xff9900,
        emissiveIntensity: 1.15,
        roughness: 0.2,
        flatShading: false,
      }),
    );
    eye.scale.set(1, 0.72, 0.7);
    eye.position.set(sx, 0.05, 0.44);
    eye.name = 'yetiEye';
    head.add(eye);
    const slit = new THREE.Mesh(new THREE.CapsuleGeometry(0.006, 0.034, 3, 6), phys(0x0a0604, { flatShading: false }));
    slit.position.set(sx, 0.058, 0.468);
    head.add(slit);
    const eyeLight = new THREE.PointLight(0xff9900, 0.35, 1.6);
    eyeLight.name = 'yetiEyeLight';
    eyeLight.position.set(sx, 0.06, 0.56);
    head.add(eyeLight);
  };
  makeEye(-0.13);
  makeEye(0.13);

  // Short broad muzzle sitting over a wide-open roar.
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), hide);
  snout.scale.set(1.05, 0.72, 1.05);
  snout.position.set(0, -0.02, 0.46);
  head.add(snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), noseMat);
  nose.scale.set(1.35, 0.75, 0.85);
  nose.position.set(0, 0.02, 0.62);
  head.add(nose);
  for (const sx of [-1, 1]) {
    const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.014, 7, 5), phys(0x08080c, { flatShading: false }));
    nostril.position.set(sx * 0.028, 0.0, 0.64);
    head.add(nostril);
  }

  // The sheet's roar: a dropped jaw, dark throat, and a full tooth fence.
  const maw = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), throat);
  maw.scale.set(1.05, 0.7, 0.85);
  maw.position.set(0, -0.2, 0.46);
  head.add(maw);
  const gumPad = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.028, 8, 16, Math.PI), gum);
  gumPad.rotation.x = 1.05;
  gumPad.scale.set(1.2, 0.75, 1);
  gumPad.position.set(0, -0.12, 0.54);
  head.add(gumPad);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), hide);
  jaw.scale.set(1.08, 0.42, 0.95);
  jaw.position.set(0, -0.34, 0.4);
  jaw.rotation.x = 0.35;
  head.add(jaw);
  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.08, 9, 7), hideDark);
  chin.scale.set(1.2, 0.7, 1);
  chin.position.set(0, -0.4, 0.5);
  head.add(chin);

  const makeFang = (x: number, y: number, z: number, len: number, upper: boolean, tilt = 0) => {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.022, len, 6), fang);
    f.rotation.x = upper ? Math.PI + 0.15 + tilt : -0.1 - tilt;
    f.position.set(x, y, z);
    head.add(f);
  };
  makeFang(-0.07, -0.1, 0.6, 0.18, true);
  makeFang(0.07, -0.1, 0.6, 0.18, true);
  makeFang(-0.065, -0.36, 0.58, 0.14, false);
  makeFang(0.065, -0.36, 0.58, 0.14, false);
  for (let i = 0; i < 7; i++) {
    const x = -0.12 + i * 0.04;
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.055, 5), fang);
    t.rotation.x = Math.PI;
    t.position.set(x, -0.115, 0.575);
    head.add(t);
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.011, 0.045, 5), fang);
    b.position.set(x * 0.9, -0.33, 0.555);
    head.add(b);
  }

  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 6), fur);
    ear.scale.set(0.7, 0.95, 0.5);
    ear.position.set(s * 0.3, 0.22, -0.06);
    head.add(ear);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.04, 7, 5), hide);
    inner.scale.set(0.5, 0.9, 0.45);
    inner.position.set(s * 0.32, 0.22, -0.03);
    head.add(inner);
  }

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
  breath.position.set(0, -0.18, 0.68);
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
    mist.position.set((i - 1) * 0.04, -0.16, 0.8 + i * 0.1);
    mist.name = 'yetiBreathMist';
    head.add(mist);
  }
  g.add(head);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.85, 0.95, 2.4, 10),
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

  /** Drive sheet fur: a ring of tan spikes pointing outward, not a torus buoy. */
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
      const elev = ((i % 3) - 1) * 0.22;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(len * 0.28, len, 5), i % 3 === 0 ? furDark : fur);
      spike.position.set(cx + Math.cos(a) * radius, cy + elev * len * 0.35, cz + Math.sin(a) * radius);
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
      leather,
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

  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), skinDark);
  brow.scale.set(1.15, 0.42, 0.7);
  brow.position.set(0, 0.1, 0.1);
  addPart(brow, head);
  for (const sx of [-1, 1]) {
    const ridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.014, 0.06, 3, 6), skinDark);
    ridge.rotation.z = Math.PI / 2 + sx * -0.28;
    ridge.rotation.x = -0.25;
    ridge.position.set(sx * 0.055, 0.078, 0.155);
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

  // Small tusks from the lower jaw corners — the sheet, not walrus spears.
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.085, 6), tusk);
    t.position.set(sx * 0.055, -0.1, 0.175);
    t.rotation.set(0.55, 0, sx * 0.35);
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
