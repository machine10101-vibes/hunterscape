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

function paintedBoard(text: string, pw = 1.35, ph = 0.5, font = '700 40px Georgia, serif'): THREE.Mesh {
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
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 50);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(pw, ph),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, metalness: 0.05 }),
  );
  return mesh;
}

function nameplate(text: string): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.font = '700 36px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 6;
  ctx.strokeStyle = 'rgba(20, 12, 4, 0.85)';
  ctx.strokeText(text, 128, 34);
  ctx.fillStyle = '#f3d78a';
  ctx.fillText(text, 128, 34);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  sprite.name = 'nameplate';
  sprite.position.y = 1.72;
  sprite.scale.set(1.15, 0.29, 1);
  return sprite;
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

/** The Briar Hearth. Smaller than the hall, door facing the square (+Z). */
function hearth(): THREE.Group {
  const g = new THREE.Group();
  const timber = mat(0x6a4428);
  const dark = mat(0x3a2816);
  const plaster = mat(0xd2b48a, { roughness: 0.9 });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.1, 1.9), dark);
  floor.position.y = 0.05;
  add(g, floor);
  const wall = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.35, 1.6), plaster);
  wall.position.y = 0.78;
  add(g, wall);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.0, 0.06), dark);
  door.position.set(0, 0.55, 0.82);
  add(g, door);
  const roofL = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.08, 1.15), mat(0x6a3030));
  roofL.position.set(0, 1.62, -0.32);
  roofL.rotation.x = 0.42;
  add(g, roofL);
  const roofR = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.08, 1.15), mat(0x7a3830));
  roofR.position.set(0, 1.62, 0.32);
  roofR.rotation.x = -0.42;
  add(g, roofR);
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 0.28), mat(0x6a4038));
  chimney.position.set(-0.75, 1.85, -0.35);
  add(g, chimney);
  const smoke = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 6, 5),
    mat(0xc8c0b0, { transparent: true, opacity: 0.45, roughness: 1 }),
  );
  smoke.position.set(-0.75, 2.28, -0.35);
  g.add(smoke);
  const sign = paintedBoard('HEARTH', 1.2, 0.36, '700 36px Georgia, serif');
  sign.position.set(0, 1.22, 0.9);
  g.add(sign);
  return g;
}

/** Weaver's shed. The loom stands in the open front so the shuttle reads. */
function loomCottage(): THREE.Group {
  const g = new THREE.Group();
  const timber = mat(0x5a3c24);
  const wall = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.2, 1.15), mat(0xc4b090));
  wall.position.set(0, 0.65, -0.15);
  add(g, wall);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.08, 1.45), mat(0x4a3068));
  roof.position.y = 1.32;
  roof.rotation.x = -0.12;
  add(g, roof);
  for (const x of [-0.38, 0.38]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.85, 5), timber);
    post.position.set(x, 0.5, 0.48);
    add(g, post);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.05), timber);
  beam.position.set(0, 0.9, 0.48);
  add(g, beam);
  for (let i = 0; i < 5; i++) {
    const warp = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.55, 0.012), mat(0xe6e0d4, { roughness: 0.35 }));
    warp.position.set(-0.24 + i * 0.12, 0.55, 0.48);
    add(g, warp);
  }
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.22, 0.02), mat(0x6a4888));
  cloth.position.set(0, 0.32, 0.5);
  add(g, cloth);
  const signPost = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 1.15, 5), timber);
  signPost.position.set(0.85, 0.58, 0.95);
  add(g, signPost);
  const sign = paintedBoard('LOOM', 0.85, 0.3, '700 42px Georgia, serif');
  sign.position.set(0.85, 1.2, 0.98);
  g.add(sign);
  return g;
}

/** Bean rows with a low fence. The boars root the south side of this patch. */
function beanRows(): THREE.Group {
  const g = new THREE.Group();
  const dirt = new THREE.Mesh(new THREE.CircleGeometry(1.7, 12), mat(0x6a4a30, { roughness: 0.96 }));
  dirt.rotation.x = -Math.PI / 2;
  dirt.position.y = 0.02;
  dirt.receiveShadow = true;
  g.add(dirt);
  for (const [x, z] of [
    [-1.4, -1.1],
    [1.4, -1.1],
    [-1.4, 1.1],
    [1.4, 1.1],
  ] as const) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.45, 5), mat(0x4a3018));
    post.position.set(x, 0.22, z);
    add(g, post);
  }
  for (const z of [-1.1, 1.1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.05, 0.05), mat(0x5a3c22));
    rail.position.set(0, 0.32, z);
    add(g, rail);
  }
  for (const x of [-1.4, 1.4]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 2.2), mat(0x5a3c22));
    rail.position.set(x, 0.32, 0);
    add(g, rail);
  }
  for (let i = 0; i < 6; i++) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.85, 5), mat(0x6a5030));
    pole.position.set(-0.7 + (i % 3) * 0.7, 0.42, i < 3 ? -0.35 : 0.4);
    add(g, pole);
    const leaves = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 5), mat(0x3a6a28, { roughness: 0.8 }));
    leaves.position.set(-0.7 + (i % 3) * 0.7, 0.78, i < 3 ? -0.35 : 0.4);
    add(g, leaves);
  }
  const sign = paintedBoard('BEAN ROWS', 1.15, 0.36, '700 32px Georgia, serif');
  sign.position.set(0, 0.7, -1.35);
  g.add(sign);
  return g;
}

function noticeBoard(): THREE.Group {
  const g = new THREE.Group();
  for (const x of [-0.45, 0.45]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.35, 5), mat(0x4a3018));
    post.position.set(x, 0.67, 0);
    add(g, post);
  }
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 192;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#efe2c4';
  ctx.fillRect(0, 0, 256, 192);
  ctx.strokeStyle = '#6a4428';
  ctx.lineWidth = 8;
  ctx.strokeRect(6, 6, 244, 180);
  ctx.fillStyle = '#3a2814';
  ctx.textAlign = 'center';
  ctx.font = '700 26px Georgia, serif';
  ctx.fillText('NOTICE', 128, 36);
  ctx.font = '600 16px Georgia, serif';
  ctx.fillText('Boars — bean rows, south', 128, 78);
  ctx.fillText('Spiders — dens, southeast', 128, 108);
  ctx.fillText('Foxes — thicket, north', 128, 138);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 0.86),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }),
  );
  board.position.y = 1.05;
  g.add(board);
  return g;
}

/** Stone wayside shrine. Doorless, so the candles face the square (+Z). */
function waysideShrine(): THREE.Group {
  const g = new THREE.Group();
  const stone = mat(0x8a8680, { roughness: 0.94 });
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.82, 0.28, 8), stone);
  plinth.position.y = 0.14;
  add(g, plinth);
  const altar = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.42, 0.38), mat(0xcbb892, { roughness: 0.9 }));
  altar.position.set(0, 0.46, -0.05);
  add(g, altar);
  for (const x of [-0.55, 0.55]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.7, 6), mat(0x4a3018));
    post.position.set(x, 0.95, 0);
    add(g, post);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.08, 0.1), mat(0x4a3018));
  beam.position.y = 1.75;
  add(g, beam);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.06, 0.9), mat(0x6a3030));
  roof.position.set(0, 1.88, 0);
  roof.rotation.x = -0.12;
  add(g, roof);
  for (const x of [-0.18, 0.18]) {
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.018, 0.22, 5), mat(0xe8dcc0));
    stick.position.set(x, 0.78, 0.08);
    add(g, stick);
    const flame = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 6, 5),
      mat(0xffcc66, { emissive: 0xffaa33, emissiveIntensity: 1.2, roughness: 0.4 }),
    );
    flame.position.set(x, 0.92, 0.08);
    flame.name = 'flame';
    g.add(flame);
  }
  const light = new THREE.PointLight(0xffaa55, 0.55, 6, 2);
  light.position.set(0, 1.1, 0.2);
  g.add(light);
  const sign = paintedBoard('SHRINE', 0.85, 0.28, '700 40px Georgia, serif');
  sign.position.set(0, 1.45, 0.28);
  g.add(sign);
  return g;
}

/** A few young pines so the fox dens read as a thicket, not bare grass. */
function northThicket(): THREE.Group {
  const g = new THREE.Group();
  const spots: [number, number, number][] = [
    [-1.5, 0.7, 0.9],
    [1.4, -0.4, 1.15],
    [0.2, 1.1, 0.75],
    [-0.4, -1.2, 1.0],
  ];
  for (const [x, z, s] of spots) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.4, 5), mat(0x4a3018));
    trunk.position.set(x, 0.2, z);
    add(g, trunk);
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.28 * s, 0.9 * s, 6), mat(0x2f6a34, { roughness: 0.9 }));
    crown.position.set(x, 0.7 * s, z);
    add(g, crown);
  }
  return g;
}

/** Charcoal mound west of camp. The mouth faces the trail (+Z). */
function charcoalKiln(): THREE.Group {
  const g = new THREE.Group();
  const stone = mat(0x6a6560, { roughness: 0.94 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.05, 0.35, 8), stone);
  base.position.y = 0.18;
  add(g, base);
  const mound = new THREE.Mesh(new THREE.ConeGeometry(0.72, 0.9, 7), mat(0x1c1918, { roughness: 0.95 }));
  mound.position.y = 0.7;
  add(g, mound);
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.12), mat(0x3a2414));
  mouth.position.set(0, 0.32, 0.78);
  add(g, mouth);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 6, 5),
    mat(0xff6622, { emissive: 0xff4411, emissiveIntensity: 1.1, roughness: 0.4 }),
  );
  glow.position.set(0, 0.34, 0.86);
  glow.name = 'flame';
  g.add(glow);
  const light = new THREE.PointLight(0xff7722, 0.7, 7, 2);
  light.position.set(0, 0.6, 0.9);
  g.add(light);
  for (const x of [-1.15, 1.2]) {
    const stump = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.28, 6), mat(0x2a2018));
    stump.position.set(x, 0.14, 0.2);
    add(g, stump);
  }
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.55, 5), mat(0x4a3018));
  stack.rotation.z = Math.PI / 2;
  stack.position.set(1.05, 0.28, -0.15);
  add(g, stack);
  const sign = paintedBoard('KILN', 0.9, 0.36, '700 42px Georgia, serif');
  sign.position.set(0, 1.25, 0.55);
  g.add(sign);
  return g;
}

function oreClaim(): THREE.Group {
  const g = new THREE.Group();
  const pit = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.7, 0.18, 8), mat(0x6a5840, { roughness: 0.96 }));
  pit.position.y = 0.06;
  add(g, pit);
  const vein = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22, 0), mat(0xc47a3a, { metalness: 0.45, roughness: 0.4 }));
  vein.position.set(0.1, 0.18, 0.05);
  add(g, vein);
  const grit = new THREE.Mesh(new THREE.DodecahedronGeometry(0.1, 0), mat(0xd8a060, { metalness: 0.35, roughness: 0.5 }));
  grit.position.set(-0.28, 0.14, 0.2);
  add(g, grit);
  const timber = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.1), mat(0x4a3018));
  timber.position.set(0, 0.28, 0.55);
  add(g, timber);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.7, 5), mat(0x3a2816));
  post.position.set(-0.7, 0.4, 0.5);
  add(g, post);
  const sign = paintedBoard('CLAIM', 0.9, 0.36, '700 42px Georgia, serif');
  sign.position.set(-0.7, 0.85, 0.5);
  g.add(sign);
  return g;
}

function reedPool(): THREE.Group {
  const g = new THREE.Group();
  const water = new THREE.Mesh(new THREE.CircleGeometry(1.15, 10), mat(0x3a6a58, { roughness: 0.35, metalness: 0.15 }));
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.03;
  water.receiveShadow = true;
  g.add(water);
  const mud = new THREE.Mesh(new THREE.CircleGeometry(1.45, 10), mat(0x5a4a32, { roughness: 0.96 }));
  mud.rotation.x = -Math.PI / 2;
  mud.position.y = 0.015;
  mud.receiveShadow = true;
  g.add(mud);
  for (const [x, z] of [[-0.7, 0.4], [0.55, 0.2], [0.2, -0.65], [-0.3, -0.2]] as const) {
    const reed = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.55, 4), mat(0x8a9a48));
    reed.position.set(x, 0.28, z);
    add(g, reed);
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), mat(0xc4b060));
    head.position.set(x, 0.58, z);
    add(g, head);
  }
  const sign = paintedBoard('MIRE', 0.9, 0.36, '700 42px Georgia, serif');
  sign.position.set(0.95, 0.7, 0.7);
  g.add(sign);
  return g;
}

function bench(): THREE.Group {
  const g = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.06, 0.32), mat(0x6a4428));
  seat.position.y = 0.38;
  add(g, seat);
  for (const x of [-0.4, 0.4]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.36, 0.26), mat(0x3a2816));
    leg.position.set(x, 0.18, 0);
    add(g, leg);
  }
  return g;
}

function chicken(tint: number): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 6), mat(tint, { roughness: 0.8 }));
  body.scale.set(1.2, 0.85, 0.9);
  body.position.y = 0.12;
  add(g, body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), mat(tint));
  head.position.set(0, 0.2, 0.08);
  add(g, head);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.04, 4), mat(0xe0a030));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.19, 0.13);
  add(g, beak);
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
    g.add(nameplate('Elspeth'));
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
    g.add(nameplate('Harl'));
    return g;
  }
  if (id === 'bram') {
    const g = npcBody(0x8a4030, 0x3a2418, false);
    const apron = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.38, 0.05), mat(0xd8c8a0));
    apron.position.set(0, 0.74, 0.14);
    add(g, apron);
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.08, 6), mat(0x6a3030));
    mug.position.set(0.28, 0.7, 0.06);
    add(g, mug);
    g.name = 'npc_bram';
    g.add(nameplate('Bram'));
    return g;
  }
  if (id === 'calder') {
    const g = npcBody(0x5a4868, 0xc8b8a0, true);
    const cord = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.012, 5, 10), mat(0xc47a3a, { metalness: 0.45, roughness: 0.4 }));
    cord.rotation.x = Math.PI / 2;
    cord.position.y = 0.78;
    g.add(cord);
    const stole = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.14), mat(0xc4622a));
    stole.position.set(0, 1.02, 0.1);
    add(g, stole);
    const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.16, 6), mat(0xf4efe2));
    candle.position.set(0.2, 0.96, 0.3);
    add(g, candle);
    const flame = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 6, 5),
      mat(0xffcc66, { emissive: 0xffaa33, emissiveIntensity: 1.2, roughness: 0.4 }),
    );
    flame.position.set(0.2, 1.07, 0.3);
    flame.name = 'flame';
    g.add(flame);
    g.name = 'npc_calder';
    g.add(nameplate('Calder'));
    return g;
  }
  if (id === 'holt') {
    const g = npcBody(0x6a5344, 0x1a1614, false);
    const wrap = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.45), mat(0xd8d0c4));
    wrap.position.y = 1.3;
    add(g, wrap);
    const apron = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.42, 0.05), mat(0x8a6840));
    apron.position.set(0, 0.72, 0.14);
    add(g, apron);
    const sack = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 5), mat(0x1c1918));
    sack.scale.set(1.1, 0.8, 0.9);
    sack.position.set(0.28, 0.62, 0.1);
    add(g, sack);
    const ember = new THREE.Mesh(
      new THREE.SphereGeometry(0.02, 5, 4),
      mat(0xff6622, { emissive: 0xff4411, emissiveIntensity: 0.8 }),
    );
    ember.position.set(0.3, 0.7, 0.16);
    ember.name = 'flame';
    g.add(ember);
    g.name = 'npc_holt';
    g.add(nameplate('Holt'));
    return g;
  }
  if (id === 'odell') {
    const g = npcBody(0x8a6840, 0x2a2018, false);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.48), mat(0x4a3424));
    cap.position.y = 1.28;
    add(g, cap);
    const lamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 6, 5),
      mat(0xffcc66, { emissive: 0xffaa33, emissiveIntensity: 1.1 }),
    );
    lamp.position.set(0.1, 1.32, 0.08);
    lamp.name = 'flame';
    g.add(lamp);
    const bib = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.34, 0.05), mat(0x6a5030));
    bib.position.set(0, 0.78, 0.14);
    add(g, bib);
    const nugget = new THREE.Mesh(new THREE.DodecahedronGeometry(0.045, 0), mat(0xc47a3a, { metalness: 0.6, roughness: 0.35 }));
    nugget.position.set(0.28, 0.7, 0.08);
    add(g, nugget);
    g.name = 'npc_odell';
    g.add(nameplate('Odell'));
    return g;
  }
  if (id === 'wren') {
    const g = npcBody(0x2f5a3a, 0xc8b898, false);
    const scarf = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.08), mat(0xe6e0b8));
    scarf.position.set(0, 1.05, 0.1);
    add(g, scarf);
    const satchel = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.06), mat(0x3e7a3a));
    satchel.position.set(-0.22, 0.7, 0.08);
    add(g, satchel);
    const gland = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 5, 4),
      mat(0x8ed86a, { emissive: 0x3a8a30, emissiveIntensity: 0.5 }),
    );
    gland.position.set(-0.22, 0.78, 0.12);
    gland.name = 'flame';
    g.add(gland);
    g.name = 'npc_wren';
    g.add(nameplate('Wren'));
    return g;
  }
  if (id === 'maeve') {
    const g = npcBody(0x4a3068, 0x2a1810, false);
    const shawl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.08), mat(0xc4a0d0));
    shawl.position.set(0, 0.95, 0.08);
    add(g, shawl);
    const shuttle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.04), mat(0xe6e0d4, { roughness: 0.4 }));
    shuttle.position.set(-0.28, 0.78, 0.08);
    add(g, shuttle);
    g.name = 'npc_maeve';
    g.add(nameplate('Maeve'));
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
  g.add(nameplate('Nessa'));
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
  lantern(yard, -0.4, -1.5);

  const signPost = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.5, 6), mat(0x4a3018));
  signPost.position.set(-3.2, 0.75, 1.15);
  add(yard, signPost);
  const sign = paintedBoard('BRIARFORD');
  sign.position.set(-3.2, 1.45, 1.15);
  yard.add(sign);

  const henA = chicken(0xf0efe4);
  henA.position.set(-1.4, 0, -0.55);
  yard.add(henA);
  const henB = chicken(0xc4a060);
  henB.position.set(0.35, 0, 1.15);
  henB.rotation.y = 1.2;
  yard.add(henB);

  rootBits.push({ mesh: yard, x: 17.2, z: 0.25 });

  // Hall sits on the far side of the road so the camera, which looks from +Z,
  // sees the door instead of standing under the roof.
  rootBits.push({ mesh: hall(), x: 18.7, z: -3.15 });
  rootBits.push({ mesh: waysideShrine(), x: 16.6, z: -7.6 });
  rootBits.push({ mesh: northThicket(), x: 16.7, z: -10.7 });
  rootBits.push({ mesh: charcoalKiln(), x: -14.4, z: -13.0 });
  rootBits.push({ mesh: oreClaim(), x: -13.0, z: 8.4 });
  rootBits.push({ mesh: reedPool(), x: -4.4, z: 10.2 });
  rootBits.push({ mesh: hearth(), x: 13.6, z: -2.9 });
  rootBits.push({ mesh: well(), x: 16.35, z: 0.2 });
  rootBits.push({ mesh: stall(), x: 15.15, z: -1.85, rotY: 0.15 });
  rootBits.push({ mesh: loomCottage(), x: 16.8, z: 2.2 });
  rootBits.push({ mesh: beanRows(), x: 11.5, z: 6.35 });
  rootBits.push({ mesh: noticeBoard(), x: 17.35, z: -1.45 });
  rootBits.push({ mesh: bench(), x: 17.85, z: 0.85, rotY: 0.2 });
  rootBits.push({ mesh: bench(), x: 16.15, z: -0.35, rotY: -0.4 });
  return rootBits;
}
