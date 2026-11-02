import * as THREE from 'three';

/** Restless bones on the mound north of Thornrest, west of the fox thicket. */
export const SKELETON_HOMES: { x: number; z: number }[] = [
  { x: -0.6, z: -12.8 },
  { x: 2.2, z: -13.4 },
  { x: 0.8, z: -14.2 },
];

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.72,
    metalness: extra.metalness ?? 0.05,
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

/** Pale barrow skeleton with a chipped femur. Strikes with slash. Weak to crush. */
export function createBarrowSkeleton(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'barrowSkeleton';
  const bone = mat(0xe4dcc8, { roughness: 0.62 });
  const socket = mat(0x1a120c);
  const eye = mat(0xc45a3a, { emissive: 0x8a2a18, emissiveIntensity: 0.7, roughness: 0.4 });
  const rust = mat(0x8a5a3a, { roughness: 0.55, metalness: 0.25 });

  const body = new THREE.Group();
  body.name = 'boneBody';
  body.position.y = 0.72;
  root.add(body);

  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.12), bone);
  add(body, pelvis);
  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.42, 5), bone);
  spine.position.y = 0.24;
  add(body, spine);
  for (const y of [0.12, 0.24, 0.36]) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.012, 4, 8, Math.PI), bone);
    rib.rotation.z = Math.PI;
    rib.rotation.y = Math.PI / 2;
    rib.position.y = y;
    add(body, rib);
  }

  const head = new THREE.Group();
  head.name = 'boneHead';
  head.position.y = 0.52;
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 7), bone);
  skull.scale.set(1, 1.12, 0.92);
  add(head, skull);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.035, 0.07), bone);
  jaw.position.set(0, -0.07, 0.04);
  add(head, jaw);
  for (const x of [-0.035, 0.035]) {
    const hole = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), socket);
    hole.position.set(x, 0.02, 0.08);
    add(head, hole);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.012, 5, 4), eye);
    glow.position.set(x, 0.02, 0.095);
    add(head, glow);
  }

  for (const side of [-1, 1] as const) {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'armL' : 'armR';
    arm.position.set(side * 0.16, 0.34, 0);
    body.add(arm);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.22, 5), bone);
    upper.position.y = -0.1;
    add(arm, upper);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), bone);
    hand.position.y = -0.24;
    add(arm, hand);
    if (side > 0) {
      const club = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.035, 0.42, 5), rust);
      club.position.set(0.02, -0.28, 0.04);
      club.rotation.z = 0.4;
      add(arm, club);
    }
  }

  for (const side of [-1, 1] as const) {
    const leg = new THREE.Group();
    leg.name = side < 0 ? 'legL' : 'legR';
    leg.position.set(side * 0.08, 0.62, 0);
    root.add(leg);
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.02, 0.32, 5), bone);
    thigh.position.y = -0.16;
    add(leg, thigh);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.016, 0.28, 5), bone);
    shin.position.y = -0.42;
    add(leg, shin);
  }

  root.scale.setScalar(1.15);
  return root;
}

export function poseBarrowSkeleton(skel: THREE.Group, time: number, moving: boolean, attack: number): void {
  const body = skel.getObjectByName('boneBody');
  const head = skel.getObjectByName('boneHead');
  const lunge = attack > 0 ? Math.sin(Math.min(1, attack) * Math.PI) : 0;
  const bob = moving ? Math.abs(Math.sin(time * 7)) * 0.04 : Math.sin(time * 1.4) * 0.01;
  if (body) {
    body.position.y = 0.72 + bob;
    body.rotation.x = -lunge * 0.45;
    body.position.z = lunge * 0.06;
  }
  if (head) head.rotation.x = lunge * 0.3 + Math.sin(time * 1.2) * 0.05;
  const armR = skel.getObjectByName('armR');
  const armL = skel.getObjectByName('armL');
  if (armR) armR.rotation.x = -0.4 - lunge * 1.1;
  if (armL) armL.rotation.x = -0.2 + lunge * 0.3;
  const swing = moving ? Math.sin(time * 7) * 0.45 : 0;
  const legL = skel.getObjectByName('legL');
  const legR = skel.getObjectByName('legR');
  if (legL) legL.rotation.x = swing;
  if (legR) legR.rotation.x = -swing;
}
