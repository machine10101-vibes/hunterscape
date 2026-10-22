import * as THREE from 'three';
import type { NpcId } from '../game/quests';

/**
 * Briarford, the first town east of Thornrest. Timber, stone, and canvas
 * in the same flat-shaded camp language as the tents and forge.
 */

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: extra.roughness ?? 0.86,
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

function boardSign(): THREE.Mesh {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#3a2814';
  ctx.fillRect(0, 0, 256, 96);
  ctx.strokeStyle = '#e0b84a';
  ctx.lineWidth = 8;
  ctx.strokeRect(8, 8, 240, 80);
  ctx.fillStyle = '#f3d78a';
  ctx.font = '700 40px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('BRIARFORD', 128, 50);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.35, 0.5),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, metalness: 0.05 }),
  );
  return mesh;
}

function lantern(parent: THREE.Group, x: number, z: number): void {
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.7, 6), mat(0x3a2a14));
  post.position.set(x, 0.85, z);
  add(parent, post);
  const cage = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 0.18), mat(0x2a2418, { roughness: 0.5 }));
  cage.position.set(x, 1.72, z);
  add(parent, cage);
  const flame = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 8, 6),
    mat(0xffcc66, { emissive: 0xffaa33, emissiveIntensity: 1.3, roughness: 0.4 }),
  );
  flame.position.set(x, 1.72, z);
  flame.name = 'townLantern';
  parent.add(flame);
  const light = new THREE.PointLight(0xffaa55, 0.7, 7, 2);
  light.position.set(x, 1.8, z);
  parent.add(light);
}

function hall(): THREE.Group {
  const g = new THREE.Group();
  const timber = mat(0x6a4428);
  const dark = mat(0x3a2816);
  const plaster = mat(0xcbb892, { roughness: 0.92 });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.12, 3.2), dark);
  floor.position.y = 0.06;
  add(g, floor);
  const wall = new THREE.Mesh(new THREE.BoxGeometry(4.0, 1.7, 2.8), plaster);
  wall.position.y = 0.95;
  add(g, wall);
  for (const x of [-1.7, 1.7]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.1, 6), timber);
    post.position.set(x, 1.05, 1.35);
    add(g, post);
  }
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.25, 0.08), dark);
  door.position.set(0, 0.72, 1.42);
  add(g, door);
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.12, 0.16), timber);
  lintel.position.set(0, 1.4, 1.42);
  add(g, lintel);
  for (const x of [-1.15, 1.15]) {
    const win = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.4, 0.06),
      mat(0x8ec8e8, { emissive: 0x224455, emissiveIntensity: 0.25, roughness: 0.25, metalness: 0.1 }),
    );
    win.position.set(x, 1.15, 1.42);
    add(g, win);
  }
  const roofL = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.1, 1.9), mat(0x6a3030));
  roofL.position.set(0, 2.15, -0.55);
  roofL.rotation.x = 0.45;
  add(g, roofL);
  const roofR = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.1, 1.9), mat(0x7a3830));
  roofR.position.set(0, 2.15, 0.55);
  roofR.rotation.x = -0.45;
  add(g, roofR);
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.08, 0.16), timber);
  ridge.position.y = 2.48;
  add(g, ridge);
  return g;
}

function well(): THREE.Group {
  const g = new THREE.Group();
  const stone = mat(0x8a8680, { roughness: 0.95 });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 0.7, 8), stone);
  ring.position.y = 0.35;
  add(g, ring);
  const water = new THREE.Mesh(
    new THREE.CircleGeometry(0.38, 10),
    mat(0x3a6a88, { roughness: 0.2, metalness: 0.15, emissive: 0x102030, emissiveIntensity: 0.3 }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.62;
  g.add(water);
  for (const x of [-0.48, 0.48]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.3, 5), mat(0x4a3018));
    post.position.set(x, 1.15, 0);
    add(g, post);
  }
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.15, 5), mat(0x4a3018));
  beam.rotation.z = Math.PI / 2;
  beam.position.y = 1.75;
  add(g, beam);
  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.14, 6), mat(0x6a5030));
  bucket.position.set(0.15, 1.15, 0);
  add(g, bucket);
  return g;
}

function stall(): THREE.Group {
  const g = new THREE.Group();
  const counter = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 0.7), mat(0x6a4428));
  counter.position.y = 0.4;
  add(g, counter);
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.08, 0.72), mat(0x8a3038));
  cloth.position.y = 0.78;
  add(g, cloth);
  for (const x of [-0.8, 0.8]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.8, 5), mat(0x3a2814));
    pole.position.set(x, 1.3, -0.28);
    add(g, pole);
  }
  const awning = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.06, 1.15), mat(0xc44848, { side: THREE.DoubleSide }));
  awning.position.set(0, 2.15, 0.05);
  awning.rotation.x = -0.18;
  add(g, awning);
  const crate = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.28, 0.32), mat(0x8a6230));
  crate.position.set(-0.45, 0.95, 0);
  add(g, crate);
  const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.18, 7), mat(0xc4a060));
  basket.position.set(0.4, 0.95, 0.05);
  add(g, basket);
  return g;
}

function npcBody(tunic: number, hair: number, hood: boolean): THREE.Group {
  const g = new THREE.Group();
  const skin = mat(0xe0b090, { roughness: 0.7, flatShading: false });
  const cloth = mat(tunic);
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.55, 7), mat(0x3a3028));
  legs.position.y = 0.32;
  add(g, legs);
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.48, 8), cloth);
  torso.position.y = 0.82;
  add(g, torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), skin);
  head.position.y = 1.22;
  add(g, head);
  if (hood) {
    const cowl = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.6), cloth);
    cowl.position.y = 1.28;
    add(g, cowl);
  } else {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.135, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), mat(hair));
    cap.position.y = 1.28;
    add(g, cap);
  }
  for (const sx of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.4, 6), cloth);
    arm.position.set(sx * 0.24, 0.82, 0);
    arm.rotation.z = sx * 0.15;
    add(g, arm);
  }
  return g;
}

export function createTownNpc(id: NpcId): THREE.Group {
  if (id === 'elspeth') {
    const g = npcBody(0x2f4a32, 0x3a2414, true);
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 1.55, 6), mat(0x5a4030));
    staff.position.set(0.28, 0.8, 0.05);
    staff.rotation.z = 0.08;
    add(g, staff);
    const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), mat(0xd4a84b, { metalness: 0.6, roughness: 0.35 }));
    clasp.position.set(0, 1.0, 0.16);
    add(g, clasp);
    g.name = 'npc_elspeth';
    return g;
  }
  if (id === 'harl') {
    const g = npcBody(0x6a4030, 0x2a2018, false);
    const apron = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.4, 0.06), mat(0x8a5a32));
    apron.position.set(0, 0.72, 0.14);
    add(g, apron);
    const hammer = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.08), mat(0x8a9098, { metalness: 0.55, roughness: 0.35 }));
    hammer.position.set(0.32, 0.7, 0.08);
    add(g, hammer);
    const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.28, 5), mat(0x4a3018));
    haft.position.set(0.32, 0.52, 0.08);
    add(g, haft);
    g.name = 'npc_harl';
    return g;
  }
  const g = npcBody(0x6a3048, 0x4a2a18, false);
  const scarf = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.08), mat(0xc44848));
  scarf.position.set(0, 1.05, 0.08);
  add(g, scarf);
  const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.12, 6), mat(0xc4a060));
  basket.position.set(-0.28, 0.62, 0.08);
  add(g, basket);
  g.name = 'npc_nessa';
  return g;
}

export interface TownPlacement {
  mesh: THREE.Object3D;
  x: number;
  z: number;
  rotY?: number;
}

/** Static town dressing. NPCs and the anvil are placed by the caller so they stay clickable. */
export function briarfordProps(): TownPlacement[] {
  const rootBits: TownPlacement[] = [];
  const yard = new THREE.Group();
  yard.name = 'briarford';

  const packed = new THREE.Mesh(
    new THREE.CircleGeometry(4.6, 18),
    mat(0x8a7a62, { roughness: 0.95 }),
  );
  packed.rotation.x = -Math.PI / 2;
  packed.position.y = 0.02;
  packed.receiveShadow = true;
  yard.add(packed);

  const path = new THREE.Mesh(new THREE.PlaneGeometry(8.5, 1.35), mat(0x9a8a68, { roughness: 0.96 }));
  path.rotation.x = -Math.PI / 2;
  path.position.set(-5.2, 0.015, 0.3);
  path.receiveShadow = true;
  yard.add(path);

  for (const x of [-2.2, 0.4, 2.6]) {
    const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.16, 0), mat(0x7a756e));
    stone.position.set(x, 0.08, 1.55);
    stone.castShadow = true;
    yard.add(stone);
  }

  lantern(yard, -2.6, 1.7);
  lantern(yard, 1.4, -1.8);
  lantern(yard, 2.8, 1.1);

  const signPost = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.5, 6), mat(0x4a3018));
  signPost.position.set(-3.2, 0.75, 1.15);
  add(yard, signPost);
  const sign = boardSign();
  sign.position.set(-3.2, 1.45, 1.15);
  yard.add(sign);

  rootBits.push({ mesh: yard, x: 17.2, z: 0.25 });

  // Hall sits on the far side of the road so the camera, which looks from +Z,
  // sees the door instead of standing under the roof.
  rootBits.push({ mesh: hall(), x: 18.7, z: -3.15 });
  rootBits.push({ mesh: well(), x: 16.35, z: 0.2 });
  rootBits.push({ mesh: stall(), x: 15.15, z: -1.85, rotY: 0.15 });
  return rootBits;
}
