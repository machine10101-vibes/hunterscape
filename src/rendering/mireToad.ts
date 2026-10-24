import * as THREE from 'three';

/** Mire toads sit in the reed pool south of Thornrest, west of the yeti snow. */
export const TOAD_HOMES: { x: number; z: number }[] = [
  { x: -6.8, z: 12.8 },
  { x: -1.0, z: 13.6 },
  { x: -4.0, z: 11.6 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.72,
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

/** Squat green toad with a pale belly and a venom gland. Weak to slash. */
export function createMireToad(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'mireToad';
  const body = new THREE.Group();
  body.name = 'toadBody';
  body.position.y = 0.18;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), mat(0x3e7a3a, { roughness: 0.55 }));
  torso.scale.set(1.15, 0.72, 1.25);
  add(body, torso);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 5), mat(0xe6e0b8, { roughness: 0.7 }));
  belly.scale.set(1, 0.55, 0.9);
  belly.position.set(0, -0.04, 0.08);
  add(body, belly);
  const gland = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 6, 5),
    mat(0x7ec86a, { emissive: 0x3a8a30, emissiveIntensity: 0.35, roughness: 0.4 }),
  );
  gland.position.set(0, 0.1, -0.08);
  add(body, gland);

  const head = new THREE.Group();
  head.name = 'toadHead';
  head.position.set(0, 0.06, 0.16);
  body.add(head);
  for (const x of [-0.07, 0.07]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), mat(0xe8f0c8));
    eye.position.set(x, 0.08, 0.02);
    add(head, eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), mat(0x1a1408));
    pupil.position.set(x, 0.08, 0.055);
    add(head, pupil);
  }
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.015, 0.04), mat(0x2a4a22));
  mouth.position.set(0, 0.01, 0.06);
  add(head, mouth);

  for (const side of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.16, 5), mat(0x2f5a2c));
    leg.name = side < 0 ? 'legL' : 'legR';
    leg.position.set(side * 0.16, -0.04, -0.04);
    leg.rotation.z = side * 0.7;
    add(body, leg);
  }

  root.scale.setScalar(1.45);
  return root;
}

export function poseMireToad(toad: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = toad.getObjectByName('toadBody');
  const head = toad.getObjectByName('toadHead');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  const hop = moving ? Math.abs(Math.sin(time * 6)) * 0.08 : Math.sin(time * 1.5) * 0.012;
  if (body) {
    body.position.y = 0.18 + hop;
    body.rotation.x = -lunge * 0.4;
    body.position.z = lunge * 0.08;
  }
  if (head) head.rotation.x = lunge * 0.35;
  const left = toad.getObjectByName('legL');
  const right = toad.getObjectByName('legR');
  const kick = moving ? Math.sin(time * 6) * 0.4 : 0;
  if (left) left.rotation.x = kick;
  if (right) right.rotation.x = -kick;
}
