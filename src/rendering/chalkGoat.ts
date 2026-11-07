import * as THREE from 'three';

/** Chalk goats butt along the north-east ridge, past Goatherd Ivo. */
export const GOAT_HOMES: { x: number; z: number }[] = [
  { x: 22.2, z: -14.6 },
  { x: 21.2, z: -15.0 },
  { x: 22.6, z: -13.8 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.78,
    metalness: extra.metalness ?? 0.04,
    flatShading: extra.flatShading ?? true,
    ...extra,
  });
  m.userData.voxelSoft = true;
  return m;
}

function add(parent: THREE.Object3D, mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

/** Chalk goat. Strikes with crush. Weak to stab. */
export function createChalkGoat(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'chalkGoat';
  const body = new THREE.Group();
  body.name = 'goatBody';
  body.position.y = 0.48;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.42, 4, 8), mat(0xd8d0c4, { roughness: 0.86 }));
  torso.rotation.x = Math.PI / 2;
  torso.scale.set(1, 1, 0.82);
  add(body, torso);
  const belly = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.28, 3, 6), mat(0xf2efe6, { roughness: 0.9 }));
  belly.rotation.x = Math.PI / 2;
  belly.position.set(0, -0.08, 0.02);
  belly.scale.set(1, 1, 0.55);
  add(body, belly);

  for (const [x, z] of [[-0.1, 0.16], [0.1, 0.16], [-0.1, -0.16], [0.1, -0.16]] as const) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.22, 3, 5), mat(0xc8c0b2));
    leg.position.set(x, -0.22, z);
    add(body, leg);
    const hoof = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.07), mat(0x2a241c, { roughness: 0.6 }));
    hoof.position.set(x, -0.38, z);
    add(body, hoof);
  }

  const head = new THREE.Group();
  head.name = 'goatHead';
  head.position.set(0, 0.1, 0.32);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.1, 7, 6), mat(0xe4dcc8));
  skull.scale.set(0.85, 0.78, 1.05);
  add(head, skull);
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), mat(0xf2efe6));
  snout.scale.set(0.9, 0.7, 1.2);
  snout.position.set(0, -0.02, 0.08);
  add(head, snout);
  const beard = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.1, 5), mat(0x8a8074));
  beard.position.set(0, -0.1, 0.04);
  add(head, beard);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), mat(0x2a241c, { roughness: 0.4 }));
  eye.position.set(0.052, 0.035, 0.078);
  add(head, eye);
  const eyeL = eye.clone();
  eyeL.position.x = -0.052;
  head.add(eyeL);
  const horn = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.16, 5), mat(0xe6d2a8, { roughness: 0.42 }));
  horn.position.set(0.05, 0.1, -0.01);
  horn.rotation.z = -0.45;
  horn.rotation.x = -0.3;
  add(head, horn);
  const hornL = horn.clone();
  hornL.position.x = -0.05;
  hornL.rotation.z = 0.45;
  head.add(hornL);

  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), mat(0xc8c0b2));
  tail.position.set(0, 0.06, -0.32);
  tail.rotation.x = 0.8;
  add(body, tail);

  root.scale.setScalar(1.12);
  return root;
}

export function poseChalkGoat(goat: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = goat.getObjectByName('goatBody');
  const head = goat.getObjectByName('goatHead');
  const strike = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  const step = Math.sin(time * (moving ? 8 : 2));
  if (body) {
    body.position.y = 0.48 + (moving ? Math.abs(step) * 0.03 : Math.sin(time * 1.3) * 0.01);
    body.rotation.x = strike * 0.28;
    body.rotation.z = step * (moving ? 0.04 : 0.01);
  }
  if (head) head.rotation.x = -strike * 0.65 + Math.sin(time * 1.5) * 0.05;
}
