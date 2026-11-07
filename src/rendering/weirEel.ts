import * as THREE from 'three';

/** Weir eels coil in the stakes south of Briarford, past Angler Voss. */
export const EEL_HOMES: { x: number; z: number }[] = [
  { x: 21.0, z: 12.4 },
  { x: 22.2, z: 12.8 },
  { x: 20.6, z: 13.2 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.62,
    metalness: extra.metalness ?? 0.08,
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

/** Olive weir eel. Strikes with stab. Weak to crush. */
export function createWeirEel(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'weirEel';
  const body = new THREE.Group();
  body.name = 'eelBody';
  body.position.y = 0.28;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.42, 4, 8), mat(0x2c4a34, { roughness: 0.55 }));
  torso.rotation.x = Math.PI / 2;
  torso.scale.set(1, 1, 0.72);
  add(body, torso);
  const belly = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.32, 3, 6), mat(0xc5cbb0, { roughness: 0.7 }));
  belly.rotation.x = Math.PI / 2;
  belly.position.set(0, -0.03, 0.02);
  belly.scale.set(1, 1, 0.5);
  add(body, belly);

  const head = new THREE.Group();
  head.name = 'eelHead';
  head.position.set(0, 0.02, 0.28);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), mat(0x243e2c));
  skull.scale.set(0.85, 0.72, 1.25);
  add(head, skull);
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), mat(0xc5cbb0));
  jaw.scale.set(1, 0.45, 1.1);
  jaw.position.set(0, -0.03, 0.05);
  add(head, jaw);
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.008, 0.04, 4), mat(0xe8e0c8, { roughness: 0.35 }));
  fang.position.set(0.015, -0.02, 0.08);
  fang.rotation.x = Math.PI / 2;
  add(head, fang);
  const fangL = fang.clone();
  fangL.position.x = -0.015;
  head.add(fangL);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), mat(0xf2e27a, { roughness: 0.3, emissive: 0x6a5a10, emissiveIntensity: 0.5 }));
  eye.position.set(0.042, 0.022, 0.05);
  add(head, eye);
  const eyeL = eye.clone();
  eyeL.position.x = -0.042;
  head.add(eyeL);

  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.22, 5), mat(0x1e3326));
  tail.name = 'eelTail';
  tail.rotation.x = -Math.PI / 2;
  tail.position.set(0, 0, -0.36);
  add(body, tail);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.08, 0.16), mat(0x3d6b48));
  fin.position.set(0, 0.06, -0.05);
  add(body, fin);

  root.scale.setScalar(1.15);
  return root;
}

export function poseWeirEel(eel: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = eel.getObjectByName('eelBody');
  const head = eel.getObjectByName('eelHead');
  const tail = eel.getObjectByName('eelTail');
  const strike = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  const wave = Math.sin(time * (moving ? 7 : 2.2));
  if (body) {
    body.position.y = 0.28 + (moving ? Math.abs(wave) * 0.03 : Math.sin(time * 1.4) * 0.012);
    body.rotation.y = wave * (moving ? 0.18 : 0.06);
    body.rotation.x = strike * 0.35;
  }
  if (head) head.rotation.x = -strike * 0.55 + Math.sin(time * 1.6) * 0.04;
  if (tail) tail.rotation.z = -wave * 0.35;
}
