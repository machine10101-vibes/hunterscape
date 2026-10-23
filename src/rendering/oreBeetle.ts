import * as THREE from 'three';

/** Ore beetles graze the copper claim south of Thornrest. */
export const BEETLE_HOMES: { x: number; z: number }[] = [
  { x: -15.4, z: 10.2 },
  { x: -10.2, z: 11.4 },
  { x: -13.2, z: 13.5 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.62,
    metalness: extra.metalness ?? 0.28,
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

/** Copper-plated beetle. The shell is the crush weakness the claim is built around. */
export function createOreBeetle(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'oreBeetle';
  const body = new THREE.Group();
  body.name = 'beetleBody';
  body.position.y = 0.22;
  root.add(body);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0x3a3428, { roughness: 0.9, metalness: 0.05 }));
  belly.scale.set(1.15, 0.55, 1.45);
  add(body, belly);
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), mat(0x5c7a42, { roughness: 0.45, metalness: 0.35 }));
  shell.scale.set(1.2, 0.7, 1.35);
  shell.position.y = 0.04;
  add(body, shell);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.14), mat(0xc47a3a, { metalness: 0.65, roughness: 0.32 }));
  plate.position.set(0, 0.12, -0.02);
  add(body, plate);
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.04, 0.22), mat(0xd8a060, { metalness: 0.5, roughness: 0.35 }));
  ridge.position.set(0, 0.13, 0.02);
  add(body, ridge);

  const head = new THREE.Group();
  head.name = 'beetleHead';
  head.position.set(0, 0.04, 0.2);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), mat(0x2e3428, { roughness: 0.8, metalness: 0.1 }));
  add(head, skull);
  for (const x of [-0.04, 0.04]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), mat(0xe6c878, { emissive: 0xc4a050, emissiveIntensity: 0.4 }));
    eye.position.set(x, 0.03, 0.05);
    add(head, eye);
    const jaw = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.08, 4), mat(0xd8d0c0, { roughness: 0.4 }));
    jaw.rotation.x = Math.PI / 2;
    jaw.position.set(x * 1.4, -0.01, 0.08);
    add(head, jaw);
  }

  for (let i = 0; i < 3; i++) {
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.008, 0.16, 5), mat(0x241e18, { roughness: 0.9, metalness: 0.05 }));
      leg.name = side < 0 ? `legL${i}` : `legR${i}`;
      leg.position.set(side * 0.16, -0.02, -0.08 + i * 0.08);
      leg.rotation.z = side * 0.9;
      leg.rotation.x = (i - 1) * 0.25;
      add(body, leg);
    }
  }

  root.scale.setScalar(1.55);
  return root;
}

export function poseOreBeetle(beetle: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = beetle.getObjectByName('beetleBody');
  const head = beetle.getObjectByName('beetleHead');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    body.position.y = 0.22 + (moving ? Math.abs(Math.sin(time * 10)) * 0.03 : Math.sin(time * 1.4) * 0.01);
    body.rotation.x = -lunge * 0.35;
    body.position.z = lunge * 0.08;
  }
  if (head) head.rotation.x = lunge * 0.5;
  for (let i = 0; i < 3; i++) {
    const swing = moving ? Math.sin(time * 12 + i) * 0.35 : Math.sin(time * 1.5 + i) * 0.08;
    const left = beetle.getObjectByName(`legL${i}`);
    const right = beetle.getObjectByName(`legR${i}`);
    if (left) left.rotation.x = (i - 1) * 0.25 + swing;
    if (right) right.rotation.x = (i - 1) * 0.25 - swing;
  }
}
