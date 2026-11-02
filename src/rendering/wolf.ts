import * as THREE from 'three';

/** Homes along the east road between Thornrest and Briarford. */
export const WOLF_HOMES: { x: number; z: number }[] = [
  { x: 6.6, z: 2.4 },
  { x: 8.3, z: 0.7 },
  { x: 7.1, z: -1.7 },
  { x: 9.0, z: 1.8 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.86,
    metalness: extra.metalness ?? 0.02,
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

function furTuft(parent: THREE.Object3D, x: number, y: number, z: number, s: number, dark = false): void {
  const tuft = new THREE.Mesh(
    new THREE.IcosahedronGeometry(s, 0),
    mat(dark ? 0x3c2e24 : 0x7a6248, { roughness: 0.96 }),
  );
  tuft.position.set(x, y, z);
  tuft.scale.set(1.2, 0.7, 1);
  add(parent, tuft);
}

/** Low-poly briar wolf. Legs and jaw are named so the gait can swing them. */
export function createBriarWolf(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'briarWolf';

  const body = new THREE.Group();
  body.name = 'wolfBody';
  body.position.y = 0.62;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.42, 4, 8), mat(0x6e5640, { roughness: 0.9 }));
  torso.rotation.x = Math.PI / 2;
  torso.scale.set(1.05, 1.35, 0.82);
  add(body, torso);
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0x5c4634));
  chest.scale.set(1.05, 0.85, 1.1);
  chest.position.set(0, 0.02, 0.28);
  add(body, chest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), mat(0xcbb892, { roughness: 0.88 }));
  belly.scale.set(0.85, 0.4, 1.6);
  belly.position.set(0, -0.1, 0.02);
  add(body, belly);
  const saddle = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), mat(0x2c2218, { roughness: 0.92 }));
  saddle.scale.set(0.7, 0.35, 1.8);
  saddle.position.set(0, 0.14, -0.02);
  add(body, saddle);

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    furTuft(body, Math.cos(a) * 0.16, 0.12, Math.sin(a) * 0.28, 0.07, i % 2 === 0);
  }

  const head = new THREE.Group();
  head.name = 'wolfHead';
  head.position.set(0, 0.16, 0.42);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mat(0x6a5240));
  skull.scale.set(1, 0.9, 1.15);
  add(head, skull);
  const snout = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.12, 3, 6), mat(0x8a7058));
  snout.rotation.x = Math.PI / 2;
  snout.position.set(0, -0.02, 0.2);
  add(head, snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.032, 6, 5), mat(0x1a1410, { roughness: 0.45 }));
  nose.position.set(0, 0.01, 0.3);
  add(head, nose);

  const jaw = new THREE.Group();
  jaw.name = 'wolfJaw';
  jaw.position.set(0, -0.05, 0.1);
  head.add(jaw);
  const jawMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.16), mat(0x7a624c));
  jawMesh.position.set(0, -0.02, 0.06);
  add(jaw, jawMesh);
  for (const sx of [-0.03, 0.03]) {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 5), mat(0xf4efe2, { roughness: 0.35, flatShading: false }));
    fang.position.set(sx, 0.02, 0.1);
    add(jaw, fang);
  }

  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.18, 5), mat(0x4a3828));
    ear.position.set(sx * 0.08, 0.18, -0.02);
    ear.rotation.z = sx * -0.25;
    add(head, ear);
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 6, 5),
      mat(0xf0b040, { emissive: 0xff8800, emissiveIntensity: 0.7, roughness: 0.3, flatShading: false }),
    );
    eye.position.set(sx * 0.07, 0.03, 0.12);
    add(head, eye);
  }

  const tail = new THREE.Group();
  tail.name = 'wolfTail';
  tail.position.set(0, 0.08, -0.42);
  body.add(tail);
  const tailMesh = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.42, 6), mat(0x4a3828));
  tailMesh.rotation.x = Math.PI / 2.4;
  tailMesh.position.set(0, 0.08, -0.18);
  add(tail, tailMesh);
  furTuft(tail, 0, 0.02, -0.28, 0.06);

  const hips: [string, number, number][] = [
    ['legFL', -0.12, 0.18],
    ['legFR', 0.12, 0.18],
    ['legBL', -0.12, -0.22],
    ['legBR', 0.12, -0.22],
  ];
  for (const [name, x, z] of hips) {
    const leg = new THREE.Group();
    leg.name = name;
    leg.position.set(x, -0.08, z);
    body.add(leg);
    const limb = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.34, 6), mat(0x5c4836));
    limb.position.y = -0.16;
    add(leg, limb);
    const paw = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), mat(0x3e3024));
    paw.scale.set(1.1, 0.5, 1.3);
    paw.position.y = -0.34;
    add(leg, paw);
  }

  return root;
}

/** Idle breath, trot, and a bite lean. `bite` is 0–1 through the attack. */
export function poseBriarWolf(wolf: THREE.Group, time: number, moving: boolean, bite: number): void {
  const body = wolf.getObjectByName('wolfBody');
  if (body) {
    const bob = moving ? Math.sin(time * 2) * 0.035 : Math.sin(time * 1.5) * 0.012;
    body.position.y = 0.62 + bob;
    const lunge = bite > 0 ? Math.sin(Math.min(1, bite) * Math.PI) : 0;
    body.rotation.x = (moving ? 0.06 : 0) - lunge * 0.45;
    body.position.z = lunge * 0.12;
  }
  const names = ['legFL', 'legFR', 'legBL', 'legBR'];
  names.forEach((name, i) => {
    const leg = wolf.getObjectByName(name);
    if (!leg) return;
    const phase = i % 2 === 0 ? 0 : Math.PI;
    const front = i < 2 ? 0 : Math.PI;
    leg.rotation.x = moving ? Math.sin(time * 2 + phase + front) * 0.55 : 0;
  });
  const jaw = wolf.getObjectByName('wolfJaw');
  if (jaw) jaw.rotation.x = bite > 0 ? Math.sin(Math.min(1, bite) * Math.PI) * 0.7 : 0.04;
  const tail = wolf.getObjectByName('wolfTail');
  if (tail) tail.rotation.y = Math.sin(time * (moving ? 3 : 1.2)) * (moving ? 0.25 : 0.12);
}
