import * as THREE from 'three';

/** Ash stags clash in the brake north of the east road, past Huntsman Pell. */
export const STAG_HOMES: { x: number; z: number }[] = [
  { x: 14.0, z: -6.2 },
  { x: 12.8, z: -6.6 },
  { x: 14.6, z: -6.4 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.78,
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

/** Russet ash stag with a pale rack. Strikes with slash. Weak to stab. */
export function createAshStag(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'ashStag';
  const body = new THREE.Group();
  body.name = 'stagBody';
  body.position.y = 0.72;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), mat(0x8a4a28, { roughness: 0.84 }));
  torso.scale.set(0.72, 0.62, 1.35);
  add(body, torso);
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 5), mat(0xc4a06a, { roughness: 0.7 }));
  chest.position.set(0, -0.02, 0.16);
  add(body, chest);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.22, 6), mat(0x8a4a28));
  neck.position.set(0, 0.12, 0.22);
  neck.rotation.x = 0.7;
  add(body, neck);

  const head = new THREE.Group();
  head.name = 'stagHead';
  head.position.set(0, 0.22, 0.32);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 6), mat(0x9a5a32));
  skull.scale.set(0.85, 0.8, 1.15);
  add(head, skull);
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), mat(0xc4a06a));
  snout.position.set(0, -0.02, 0.1);
  add(head, snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.016, 5, 4), mat(0x2a1810));
  nose.position.set(0, -0.02, 0.14);
  add(head, nose);
  const eye = new THREE.Mesh(
    new THREE.SphereGeometry(0.014, 5, 4),
    mat(0x1a120c, { roughness: 0.3 }),
  );
  eye.position.set(0.05, 0.02, 0.06);
  add(head, eye);

  for (const side of [-1, 1] as const) {
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.22, 5), mat(0xe6d2a8, { roughness: 0.45 }));
    beam.position.set(side * 0.05, 0.14, 0);
    beam.rotation.z = side * -0.35;
    add(head, beam);
    const tine = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.1, 4), mat(0xf2e6c8, { roughness: 0.4 }));
    tine.position.set(side * 0.1, 0.2, 0.02);
    tine.rotation.z = side * -0.8;
    add(head, tine);
  }

  const tail = new THREE.Mesh(new THREE.SphereGeometry(0.04, 5, 4), mat(0xf2e6c8));
  tail.position.set(0, 0.06, -0.28);
  add(body, tail);

  const legs: [string, number, number][] = [
    ['stagLegFL', -0.1, 0.12],
    ['stagLegFR', 0.1, 0.12],
    ['stagLegBL', -0.1, -0.16],
    ['stagLegBR', 0.1, -0.16],
  ];
  for (const [name, x, z] of legs) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.022, 0.34, 5), mat(0x6a3818));
    leg.name = name;
    leg.position.set(x, -0.22, z);
    add(body, leg);
    const hoof = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.05), mat(0x1a120c));
    hoof.position.set(x, -0.4, z + 0.01);
    add(body, hoof);
  }

  root.scale.setScalar(1.2);
  return root;
}

export function poseAshStag(stag: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = stag.getObjectByName('stagBody');
  const head = stag.getObjectByName('stagHead');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    const bob = moving ? Math.abs(Math.sin(time * 8)) * 0.04 : Math.sin(time * 1.6) * 0.015;
    body.position.y = 0.72 + bob;
    body.rotation.x = lunge * 0.35;
  }
  if (head) head.rotation.x = -lunge * 0.45 + Math.sin(time * 1.4) * 0.05;
  const swing = moving ? Math.sin(time * 8) * 0.45 : Math.sin(time * 1.2) * 0.06;
  const pairs: [string, number][] = [
    ['stagLegFL', swing],
    ['stagLegBR', swing],
    ['stagLegFR', -swing],
    ['stagLegBL', -swing],
  ];
  for (const [name, rot] of pairs) {
    const leg = stag.getObjectByName(name);
    if (leg) leg.rotation.x = rot + lunge * 0.2;
  }
}
