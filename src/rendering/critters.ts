import * as THREE from 'three';

/**
 * Boars root the bean rows south of the square. Spiders den just east of
 * those rows. Both packs sit outside wolf, yeti, and town-NPC aggro.
 */
export const BOAR_HOMES: { x: number; z: number }[] = [
  { x: 10.8, z: 6.8 },
  { x: 12.4, z: 7.4 },
  { x: 11.6, z: 5.9 },
];

export const SPIDER_HOMES: { x: number; z: number }[] = [
  { x: 18.4, z: 6.2 },
  { x: 20.2, z: 6.9 },
  { x: 19.2, z: 5.4 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.86,
    metalness: extra.metalness ?? 0.04,
    flatShading: extra.flatShading ?? true,
    ...extra,
  });
}

function add(parent: THREE.Object3D, mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

/** Stocky briar boar: bristled back, pink snout, paired tusks. */
export function createBriarBoar(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'briarBoar';
  const body = new THREE.Group();
  body.name = 'boarBody';
  body.position.y = 0.52;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.34, 4, 8), mat(0x6a4630, { roughness: 0.9 }));
  torso.rotation.x = Math.PI / 2;
  torso.scale.set(1.15, 1.25, 0.9);
  add(body, torso);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0xc4a070, { roughness: 0.88 }));
  belly.scale.set(1.1, 0.45, 1.3);
  belly.position.y = -0.12;
  add(body, belly);

  for (let i = 0; i < 7; i++) {
    const bristle = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.12, 4), mat(0x2a1c12));
    bristle.position.set((i % 2 ? -1 : 1) * 0.04, 0.2, -0.22 + i * 0.07);
    bristle.rotation.x = -0.5;
    add(body, bristle);
  }

  const head = new THREE.Group();
  head.name = 'boarHead';
  head.position.set(0, 0.06, 0.38);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0x5c3c28));
  skull.scale.set(1.05, 0.85, 1.15);
  add(head, skull);
  const snout = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.16, 7), mat(0xd2a080, { roughness: 0.7 }));
  snout.rotation.x = Math.PI / 2;
  snout.position.set(0, -0.02, 0.16);
  add(head, snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), mat(0xc47868, { roughness: 0.5 }));
  nose.position.set(0, 0.01, 0.24);
  add(head, nose);
  for (const sx of [-1, 1] as const) {
    const tusk = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.14, 5), mat(0xf4efe2, { roughness: 0.32, flatShading: false }));
    tusk.position.set(sx * 0.06, -0.06, 0.16);
    tusk.rotation.x = 1.4;
    tusk.rotation.z = sx * 0.35;
    add(head, tusk);
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.08, 4), mat(0x4a3020));
    ear.position.set(sx * 0.12, 0.1, -0.02);
    ear.rotation.z = sx * -0.8;
    add(head, ear);
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 6, 5),
      mat(0x1a1008, { roughness: 0.3, flatShading: false }),
    );
    eye.position.set(sx * 0.08, 0.04, 0.1);
    add(head, eye);
  }

  const tail = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 5, 8, Math.PI), mat(0x4a3020));
  tail.position.set(0, 0.08, -0.4);
  tail.rotation.y = Math.PI / 2;
  body.add(tail);

  const hips: [string, number, number][] = [
    ['legFL', -0.12, 0.16],
    ['legFR', 0.12, 0.16],
    ['legBL', -0.12, -0.18],
    ['legBR', 0.12, -0.18],
  ];
  for (const [name, x, z] of hips) {
    const leg = new THREE.Group();
    leg.name = name;
    leg.position.set(x, -0.08, z);
    body.add(leg);
    const limb = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.038, 0.26, 6), mat(0x4e3424));
    limb.position.y = -0.12;
    add(leg, limb);
    const hoof = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.07), mat(0x2a2018));
    hoof.position.y = -0.26;
    add(leg, hoof);
  }
  return root;
}

export function poseBriarBoar(boar: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = boar.getObjectByName('boarBody');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    body.position.y = 0.52 + (moving ? Math.sin(time * 2) * 0.03 : Math.sin(time * 1.3) * 0.01);
    body.rotation.x = (moving ? 0.08 : 0) - lunge * 0.35;
    body.position.z = lunge * 0.1;
  }
  const head = boar.getObjectByName('boarHead');
  if (head) head.rotation.x = lunge * 0.4 + (moving ? Math.sin(time * 2) * 0.08 : 0);
  ['legFL', 'legFR', 'legBL', 'legBR'].forEach((name, i) => {
    const leg = boar.getObjectByName(name);
    if (!leg) return;
    const phase = (i % 2 === 0 ? 0 : Math.PI) + (i < 2 ? 0 : Math.PI);
    leg.rotation.x = moving ? Math.sin(time * 2.2 + phase) * 0.5 : 0;
  });
}

/** Thorn spider: glossy abdomen, eight jointed legs, clustered eyes. */
export function createThornSpider(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'thornSpider';
  const body = new THREE.Group();
  body.name = 'spiderBody';
  body.position.y = 0.28;
  root.add(body);

  const abdomen = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), mat(0x3a2430, { roughness: 0.45, metalness: 0.08 }));
  abdomen.scale.set(1, 0.85, 1.25);
  abdomen.position.z = -0.12;
  add(body, abdomen);
  const mark = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), mat(0x8a3048, { roughness: 0.4 }));
  mark.scale.set(1.2, 0.4, 1.4);
  mark.position.set(0, 0.1, -0.16);
  add(body, mark);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), mat(0x2a1c24, { roughness: 0.5 }));
  head.position.set(0, 0.02, 0.14);
  add(body, head);
  for (const [x, y] of [
    [-0.04, 0.04],
    [0.04, 0.04],
    [-0.02, 0.07],
    [0.02, 0.07],
  ] as const) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 6, 5),
      mat(0xe05040, { emissive: 0xff2200, emissiveIntensity: 0.45, roughness: 0.3, flatShading: false }),
    );
    eye.position.set(x, y, 0.22);
    add(body, eye);
  }
  for (const sx of [-1, 1] as const) {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.06, 4), mat(0xd8d0c4, { roughness: 0.35, flatShading: false }));
    fang.position.set(sx * 0.03, -0.02, 0.22);
    fang.rotation.x = 0.8;
    add(body, fang);
  }

  for (let i = 0; i < 8; i++) {
    const side = i < 4 ? -1 : 1;
    const along = (i % 4) - 1.5;
    const leg = new THREE.Group();
    leg.name = `sleg${i}`;
    leg.position.set(side * 0.08, 0, along * 0.06);
    body.add(leg);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.01, 0.22, 5), mat(0x241820));
    upper.position.set(side * 0.08, 0.06, 0);
    upper.rotation.z = side * -0.9;
    add(leg, upper);
    const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.006, 0.2, 4), mat(0x1a1216));
    lower.position.set(side * 0.2, -0.06, 0.02);
    lower.rotation.z = side * 0.7;
    add(leg, lower);
  }
  return root;
}

export function poseThornSpider(spider: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = spider.getObjectByName('spiderBody');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    body.position.y = 0.28 + (moving ? Math.abs(Math.sin(time * 3)) * 0.04 : Math.sin(time * 1.6) * 0.012);
    body.position.z = lunge * 0.14;
    body.rotation.x = -lunge * 0.25;
  }
  for (let i = 0; i < 8; i++) {
    const leg = spider.getObjectByName(`sleg${i}`);
    if (!leg) continue;
    const wave = moving ? Math.sin(time * 3 + i) * 0.35 : Math.sin(time * 1.2 + i) * 0.08;
    leg.rotation.z = wave;
  }
}

/** A low web between two stalks, dressed beside a spider den. */
export function createSpiderWeb(): THREE.Group {
  const g = new THREE.Group();
  const silk = mat(0xe8e4dc, { roughness: 0.35, transparent: true, opacity: 0.72, side: THREE.DoubleSide });
  for (const x of [-0.28, 0.28]) {
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.7, 5), mat(0x4a3828));
    stalk.position.set(x, 0.35, 0);
    add(g, stalk);
  }
  const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.36), silk);
  sheet.position.y = 0.42;
  g.add(sheet);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.004, 4, 10), silk);
  ring.position.y = 0.42;
  g.add(ring);
  return g;
}
