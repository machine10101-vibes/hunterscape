import * as THREE from 'three';

/** Cinder crows mob the charcoal kiln west of Thornrest. */
export const CROW_HOMES: { x: number; z: number }[] = [
  { x: -15.6, z: -15.2 },
  { x: -11.8, z: -15.0 },
  { x: -7.8, z: -14.2 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.84,
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

/** Soot-black crow with an orange beak and a pale eye. */
export function createCinderCrow(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'cinderCrow';
  const body = new THREE.Group();
  body.name = 'crowBody';
  body.position.y = 0.38;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), mat(0x2a2624, { roughness: 0.9 }));
  torso.scale.set(0.85, 0.7, 1.25);
  add(body, torso);
  const breast = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), mat(0x4a4038));
  breast.position.set(0, -0.02, 0.08);
  add(body, breast);

  const head = new THREE.Group();
  head.name = 'crowHead';
  head.position.set(0, 0.08, 0.14);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), mat(0x1c1918));
  add(head, skull);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.1, 5), mat(0xe09030, { roughness: 0.45 }));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, -0.01, 0.1);
  add(head, beak);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5), mat(0xf4efe4, { roughness: 0.3 }));
  eye.position.set(0.04, 0.02, 0.05);
  add(head, eye);

  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 4), mat(0x1a1716));
  tail.name = 'crowTail';
  tail.rotation.x = Math.PI / 2.4;
  tail.position.set(0, 0.02, -0.14);
  add(body, tail);

  for (const side of [-1, 1] as const) {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.12), mat(0x161412));
    wing.name = side < 0 ? 'wingL' : 'wingR';
    wing.position.set(side * 0.16, 0.04, 0);
    wing.rotation.z = side * -0.3;
    add(body, wing);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.1, 4), mat(0x3a342e));
    tip.rotation.z = side * -Math.PI / 2;
    tip.position.set(side * 0.12, 0, 0.02);
    wing.add(tip);
  }

  for (const [x, z] of [[-0.04, 0.04], [0.04, 0.04], [-0.03, -0.02], [0.03, -0.02]] as const) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.1, 4), mat(0xc47a3a));
    leg.position.set(x, -0.12, z);
    add(body, leg);
  }
  root.scale.setScalar(1.7);
  return root;
}

export function poseCinderCrow(crow: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = crow.getObjectByName('crowBody');
  const head = crow.getObjectByName('crowHead');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    body.position.y = 0.38 + (moving ? Math.abs(Math.sin(time * 8)) * 0.06 : Math.sin(time * 1.6) * 0.015);
    body.rotation.x = -lunge * 0.45;
    body.position.z = lunge * 0.1;
  }
  if (head) head.rotation.x = lunge * 0.6 + Math.sin(time * 2) * 0.08;
  const flap = moving ? Math.sin(time * 14) * 0.7 : Math.sin(time * 2.2) * 0.12;
  const left = crow.getObjectByName('wingL');
  const right = crow.getObjectByName('wingR');
  if (left) left.rotation.z = -0.3 - flap - lunge * 0.4;
  if (right) right.rotation.z = 0.3 + flap + lunge * 0.4;
}
