import * as THREE from 'three';

/** Gale hawks wheel the windbreak west of Thornrest, past Falconer Quill. */
export const HAWK_HOMES: { x: number; z: number }[] = [
  { x: -14.8, z: 0.5 },
  { x: -14.2, z: 2.9 },
  { x: -15.1, z: 4.5 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.72,
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

/** Pale gale hawk with a brass beak and open talons. Strikes with stab. Weak to slash. */
export function createGaleHawk(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'galeHawk';
  const body = new THREE.Group();
  body.name = 'hawkBody';
  body.position.y = 0.92;
  root.add(body);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), mat(0x8a9098, { roughness: 0.78 }));
  torso.scale.set(0.8, 0.62, 1.35);
  add(body, torso);
  const breast = new THREE.Mesh(new THREE.SphereGeometry(0.08, 7, 5), mat(0xf4f1ea, { roughness: 0.62 }));
  breast.position.set(0, -0.02, 0.07);
  add(body, breast);

  const head = new THREE.Group();
  head.name = 'hawkHead';
  head.position.set(0, 0.08, 0.16);
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), mat(0xd8d4cc));
  add(head, skull);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.11, 5), mat(0xc6a15a, { metalness: 0.45, roughness: 0.35 }));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, -0.02, 0.1);
  add(head, beak);
  const hook = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.04, 4), mat(0x8a6a32, { metalness: 0.4, roughness: 0.4 }));
  hook.rotation.x = Math.PI / 2.6;
  hook.position.set(0, -0.045, 0.14);
  add(head, hook);
  const eye = new THREE.Mesh(
    new THREE.SphereGeometry(0.016, 6, 5),
    mat(0xe0a030, { emissive: 0x8a5a10, emissiveIntensity: 0.35, roughness: 0.3 }),
  );
  eye.position.set(0.045, 0.02, 0.045);
  add(head, eye);

  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.012, 0.18), mat(0x5c6570));
  tail.name = 'hawkTail';
  tail.position.set(0, 0.01, -0.18);
  tail.rotation.x = -0.3;
  add(body, tail);
  const fan = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.008, 0.08), mat(0xf4f1ea));
  fan.position.set(0, 0, -0.08);
  tail.add(fan);

  for (const side of [-1, 1] as const) {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.018, 0.14), mat(0x4a5560));
    wing.name = side < 0 ? 'wingL' : 'wingR';
    wing.position.set(side * 0.22, 0.04, -0.02);
    wing.rotation.z = side * -0.35;
    add(body, wing);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.01, 0.08), mat(0xd8d4cc));
    bar.position.set(side * 0.06, 0.012, 0.02);
    wing.add(bar);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 4), mat(0x2c3440));
    tip.rotation.z = side * -Math.PI / 2;
    tip.position.set(side * 0.16, 0, 0);
    wing.add(tip);
  }

  for (const x of [-0.05, 0.05] as const) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.16, 4), mat(0xc6a15a, { metalness: 0.25, roughness: 0.45 }));
    leg.position.set(x, -0.16, 0.04);
    add(body, leg);
    for (const tz of [-0.02, 0.02]) {
      const talon = new THREE.Mesh(new THREE.ConeGeometry(0.01, 0.06, 4), mat(0x1a120c));
      talon.rotation.x = Math.PI / 2;
      talon.position.set(x, -0.24, 0.06 + tz);
      add(body, talon);
    }
  }

  root.scale.setScalar(1.45);
  return root;
}

export function poseGaleHawk(hawk: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = hawk.getObjectByName('hawkBody');
  const head = hawk.getObjectByName('hawkHead');
  const dive = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  if (body) {
    const hover = moving ? Math.sin(time * 9) * 0.08 : Math.sin(time * 1.8) * 0.04;
    body.position.y = 0.92 + hover - dive * 0.18;
    body.rotation.x = -dive * 0.55;
    body.position.z = dive * 0.16;
  }
  if (head) head.rotation.x = dive * 0.4 + Math.sin(time * 2.2) * 0.06;
  const flap = moving ? Math.sin(time * 12) * 0.85 : Math.sin(time * 2.4) * 0.22;
  const left = hawk.getObjectByName('wingL');
  const right = hawk.getObjectByName('wingR');
  if (left) left.rotation.z = -0.35 - flap - dive * 0.25;
  if (right) right.rotation.z = 0.35 + flap + dive * 0.25;
}
