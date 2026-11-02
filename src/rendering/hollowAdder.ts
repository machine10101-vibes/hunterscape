import * as THREE from 'three';

/** Hollow adders coil in the north hollow, past Hermit Sable. */
export const ADDER_HOMES: { x: number; z: number }[] = [
  { x: 9.2, z: -14.6 },
  { x: 8.4, z: -15.2 },
  { x: 10.0, z: -14.2 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.62,
    metalness: extra.metalness ?? 0.06,
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

/** Dark adder with a cream zigzag. Strikes with stab. Weak to crush. */
export function createHollowAdder(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'hollowAdder';
  const body = new THREE.Group();
  body.name = 'adderBody';
  body.position.y = 0.42;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.52, 4, 8), mat(0x3a5240, { roughness: 0.5 }));
  torso.rotation.x = Math.PI / 2;
  torso.scale.set(1, 1, 0.7);
  add(body, torso);
  const belly = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.36, 3, 6), mat(0x8a9070, { roughness: 0.7 }));
  belly.rotation.x = Math.PI / 2;
  belly.position.set(0, -0.03, 0.02);
  belly.scale.set(1, 1, 0.45);
  add(body, belly);
  const zig = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.34), mat(0xc8c4a0, { roughness: 0.5 }));
  zig.position.set(0, 0.045, -0.02);
  zig.rotation.y = 0.35;
  add(body, zig);

  const head = new THREE.Group();
  head.name = 'adderHead';
  head.position.set(0, 0.02, 0.32);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 6), mat(0x1c2820));
  skull.scale.set(0.85, 0.7, 1.3);
  add(head, skull);
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.008, 0.045, 4), mat(0xe8e0c8, { roughness: 0.35 }));
  fang.position.set(0.012, -0.02, 0.06);
  fang.rotation.x = Math.PI / 2;
  add(head, fang);
  const fangL = fang.clone();
  fangL.position.x = -0.012;
  head.add(fangL);
  const eye = new THREE.Mesh(
    new THREE.SphereGeometry(0.01, 5, 4),
    mat(0xf2e27a, { roughness: 0.3, emissive: 0x6a5a10, emissiveIntensity: 0.35 }),
  );
  eye.position.set(0.03, 0.015, 0.03);
  add(head, eye);

  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.2, 5), mat(0x1a241c));
  tail.name = 'adderTail';
  tail.rotation.x = -Math.PI / 2;
  tail.position.set(0, 0, -0.4);
  add(body, tail);

  root.scale.setScalar(1.2);
  return root;
}

export function poseHollowAdder(adder: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = adder.getObjectByName('adderBody');
  const head = adder.getObjectByName('adderHead');
  const tail = adder.getObjectByName('adderTail');
  const strike = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  const wave = Math.sin(time * (moving ? 7 : 2.4));
  if (body) {
    body.position.y = 0.42 + (moving ? Math.abs(wave) * 0.025 : Math.sin(time * 1.5) * 0.01);
    body.rotation.y = wave * (moving ? 0.22 : 0.08);
    body.rotation.x = strike * 0.4;
  }
  if (head) head.rotation.x = -strike * 0.7 + Math.sin(time * 1.8) * 0.04;
  if (tail) tail.rotation.z = -wave * 0.4;
}
