import * as THREE from 'three';

/** Dusk foxes den in the thicket north of the wayside shrine. */
export const FOX_HOMES: { x: number; z: number }[] = [
  { x: 13.4, z: -9.8 },
  { x: 16.8, z: -12.6 },
  { x: 20.4, z: -9.6 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.84,
    metalness: extra.metalness ?? 0.03,
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

/** Slim rust fox: white throat, black stockings, a brush tail. */
export function createDuskFox(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'duskFox';
  const body = new THREE.Group();
  body.name = 'foxBody';
  body.position.y = 0.46;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.36, 4, 8), mat(0xc4622a, { roughness: 0.78 }));
  torso.rotation.x = Math.PI / 2;
  torso.scale.set(0.9, 1.25, 0.75);
  add(body, torso);
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), mat(0xf4efe4, { roughness: 0.8 }));
  chest.scale.set(0.85, 0.55, 1.1);
  chest.position.set(0, -0.02, 0.16);
  add(body, chest);
  const saddle = new THREE.Mesh(new THREE.SphereGeometry(0.08, 7, 5), mat(0x6a3018));
  saddle.scale.set(0.7, 0.35, 1.6);
  saddle.position.set(0, 0.1, -0.02);
  add(body, saddle);

  const head = new THREE.Group();
  head.name = 'foxHead';
  head.position.set(0, 0.08, 0.32);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), mat(0xd07030));
  skull.scale.set(0.95, 0.85, 1.1);
  add(head, skull);
  const snout = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.14, 6), mat(0xe8d8c4, { roughness: 0.7 }));
  snout.rotation.x = Math.PI / 2;
  snout.position.set(0, -0.02, 0.12);
  add(head, snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 5), mat(0x2a1810));
  nose.position.set(0, 0.0, 0.2);
  add(head, nose);
  for (const sx of [-1, 1] as const) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 4), mat(0xc4622a));
    ear.position.set(sx * 0.06, 0.12, -0.02);
    ear.rotation.z = sx * -0.25;
    add(head, ear);
    const inner = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.07, 4), mat(0xe8b0a0, { roughness: 0.6 }));
    inner.position.set(sx * 0.06, 0.11, 0.0);
    inner.rotation.z = sx * -0.25;
    add(head, inner);
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 6, 5),
      mat(0x1a140c, { roughness: 0.3, flatShading: false }),
    );
    eye.position.set(sx * 0.05, 0.02, 0.08);
    add(head, eye);
  }

  const tail = new THREE.Group();
  tail.name = 'foxTail';
  tail.position.set(0, 0.04, -0.28);
  body.add(tail);
  const brush = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.22, 3, 6), mat(0xc4622a));
  brush.rotation.x = 0.8;
  brush.position.set(0, 0.08, -0.12);
  add(tail, brush);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 5), mat(0xf6f1e6));
  tip.position.set(0, 0.16, -0.22);
  add(tail, tip);

  const hips: [string, number, number][] = [
    ['legFL', -0.08, 0.14],
    ['legFR', 0.08, 0.14],
    ['legBL', -0.08, -0.16],
    ['legBR', 0.08, -0.16],
  ];
  for (const [name, x, z] of hips) {
    const leg = new THREE.Group();
    leg.name = name;
    leg.position.set(x, -0.06, z);
    body.add(leg);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.16, 5), mat(0xc4622a));
    upper.position.y = -0.06;
    add(leg, upper);
    const stocking = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.1, 5), mat(0x1c140e));
    stocking.position.y = -0.16;
    add(leg, stocking);
  }
  return root;
}

export function poseDuskFox(fox: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = fox.getObjectByName('foxBody');
  const head = fox.getObjectByName('foxHead');
  const tail = fox.getObjectByName('foxTail');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    body.position.y = 0.46 + (moving ? Math.abs(Math.sin(time * 2.4)) * 0.04 : Math.sin(time) * 0.012);
    body.position.z = lunge * 0.16;
    body.rotation.x = -lunge * 0.35 + (moving ? Math.sin(time * 2.4) * 0.04 : 0);
  }
  if (head) head.rotation.x = lunge * 0.4 + Math.sin(time * 1.4) * 0.05;
  if (tail) tail.rotation.y = Math.sin(time * (moving ? 3 : 1.2)) * (moving ? 0.45 : 0.2);
  const names = ['legFL', 'legFR', 'legBL', 'legBR'];
  names.forEach((name, i) => {
    const leg = fox.getObjectByName(name);
    if (!leg) return;
    const phase = moving ? Math.sin(time * 2.6 + (i % 2 ? Math.PI : 0)) * 0.55 : Math.sin(time + i) * 0.04;
    leg.rotation.x = phase;
  });
}
