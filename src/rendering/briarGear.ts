import * as THREE from 'three';
import { SHIELD_FOREARM_Y, SHIELD_STRAP_Z } from './yetiGear';

/**
 * Briar kit. Cut from the wolves on the east road: grey-brown pelt, ivory
 * fangs, copper fittings, and whisper-wood. Same physical materials and
 * stacked construction as the frost set, so icons and worn meshes match.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.72,
    metalness: opts.metalness ?? 0.06,
    flatShading: opts.flatShading ?? true,
    envMapIntensity: opts.envMapIntensity ?? 0.75,
    ...opts,
  });
}

function add(parent: THREE.Object3D, mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

const pal = {
  pelt: () =>
    phys(0x7a6248, {
      roughness: 0.94,
      sheen: 0.22,
      sheenColor: new THREE.Color(0xc4b090),
      sheenRoughness: 0.8,
    }),
  peltDark: () => phys(0x3e3024, { roughness: 0.95 }),
  peltLight: () => phys(0xcbb892, { roughness: 0.9 }),
  leather: () => phys(0x5a3a22, { roughness: 0.82, flatShading: false }),
  leatherDeep: () => phys(0x2e1c10, { roughness: 0.88 }),
  copper: () =>
    phys(0xc47a3a, {
      metalness: 0.72,
      roughness: 0.32,
      clearcoat: 0.35,
      flatShading: false,
      envMapIntensity: 1.05,
    }),
  copperDark: () => phys(0x8a4e22, { metalness: 0.55, roughness: 0.4, flatShading: false }),
  fang: () => phys(0xf4efe2, { roughness: 0.32, flatShading: false }),
  wood: () => phys(0x6a4424, { roughness: 0.84 }),
  woodLight: () => phys(0xc4a06a, { roughness: 0.7, flatShading: false }),
  leaf: () => phys(0x3d6a32, { roughness: 0.8 }),
};

function furSkirt(parent: THREE.Object3D, y: number, radius: number, count: number, drop: number): void {
  const geo = new THREE.BufferGeometry();
  const pos: number[] = [];
  for (let i = 0; i < count; i++) {
    const a0 = (i / count) * Math.PI * 2;
    const a1 = ((i + 1) / count) * Math.PI * 2;
    const am = (a0 + a1) / 2;
    const d = drop * (0.75 + ((i * 5) % 4) / 8);
    const push = (a: number, yy: number, r: number) => pos.push(Math.cos(a) * r, yy, Math.sin(a) * r);
    push(a0, y, radius);
    push(a1, y, radius);
    push(am, y - d, radius * 1.12);
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, pal.pelt());
  mesh.castShadow = true;
  parent.add(mesh);
}

/** Folded wolf hide for the inventory portrait. */
export function createWolfPeltItem(): THREE.Group {
  const g = new THREE.Group();
  const hide = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), pal.pelt());
  hide.scale.set(1.35, 0.38, 1.05);
  add(g, hide);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), pal.peltLight());
  belly.scale.set(1.2, 0.35, 0.8);
  belly.position.set(0.02, 0.04, 0.02);
  add(g, belly);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const tuft = new THREE.Mesh(new THREE.IcosahedronGeometry(0.045, 0), i % 2 ? pal.peltDark() : pal.pelt());
    tuft.position.set(Math.cos(a) * 0.12, 0.05, Math.sin(a) * 0.08);
    tuft.scale.set(1.3, 0.5, 1);
    add(g, tuft);
  }
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.14, 5), pal.peltDark());
  tail.rotation.z = 0.8;
  tail.position.set(-0.16, 0.02, 0);
  add(g, tail);
  return g;
}

/** Curved ivory fang. */
export function createWolfFangItem(): THREE.Group {
  const g = new THREE.Group();
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.28, 7), pal.fang());
  fang.rotation.z = 0.45;
  fang.rotation.x = -0.2;
  add(g, fang);
  const root = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), pal.peltDark());
  root.position.set(-0.04, -0.08, 0);
  add(g, root);
  const chip = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.06, 5), pal.fang());
  chip.position.set(0.04, 0.06, 0.01);
  chip.rotation.z = -0.4;
  add(g, chip);
  return g;
}

/** Copper-edged shortsword, pelt grip, fang pommel. Blade runs +Y like the bronze sword. */
export function createBriarSword(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.16, 10), pal.leather());
  add(g, grip);
  const wrap = pal.leaf();
  for (let i = 0; i < 6; i++) {
    const cord = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.005, 5, 10), wrap);
    cord.rotation.x = Math.PI / 2;
    cord.position.y = -0.055 + i * 0.022;
    g.add(cord);
  }
  const pommel = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.09, 6), pal.fang());
  pommel.name = 'toolHeel';
  pommel.rotation.x = Math.PI;
  pommel.position.y = -0.1;
  add(g, pommel);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.018, 0.04), pal.copper());
  guard.position.y = 0.09;
  add(g, guard);
  for (const sx of [-1, 1]) {
    const thorn = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 5), pal.leaf());
    thorn.rotation.z = sx * -1.2;
    thorn.position.set(sx * 0.09, 0.1, 0);
    add(g, thorn);
  }
  const bladeMat = phys(0xd7dee6, {
    metalness: 0.48,
    roughness: 0.22,
    clearcoat: 0.45,
    flatShading: false,
    emissive: 0x1a2420,
    emissiveIntensity: 0.08,
  });
  for (let i = 0; i < 5; i++) {
    const t = i / 5;
    const w = 0.07 - t * 0.028;
    const slice = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, 0.016 - t * 0.004), bladeMat);
    slice.position.y = 0.16 + i * 0.095;
    add(g, slice);
  }
  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.38, 0.02), pal.copperDark());
  fuller.position.y = 0.36;
  g.add(fuller);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.1, 4), bladeMat);
  tip.name = 'toolEdge';
  tip.rotation.y = Math.PI / 4;
  tip.scale.set(1, 1, 0.4);
  tip.position.y = 0.66;
  add(g, tip);
  return g;
}

/**
 * Round pelt shield. Boss faces +Z and the arm straps sit on −Z, matching
 * the frost shield so the forearm pose still threads the enarmes.
 */
export function createBriarShield(): THREE.Group {
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.05, 12), pal.wood());
  board.rotation.x = Math.PI / 2;
  add(g, board);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.03, 12), pal.pelt());
  face.rotation.x = Math.PI / 2;
  face.position.z = 0.03;
  add(g, face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.02, 6, 16), pal.copper());
  rim.position.z = 0.02;
  add(g, rim);
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), pal.copper());
  boss.scale.z = 0.55;
  boss.position.z = 0.06;
  add(g, boss);
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.08, 5), pal.fang());
  fang.rotation.x = Math.PI / 2;
  fang.position.z = 0.1;
  add(g, fang);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const stud = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), pal.copperDark());
    stud.position.set(Math.cos(a) * 0.16, Math.sin(a) * 0.16, 0.05);
    add(g, stud);
  }
  for (const y of [-0.08, 0.08]) {
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 5, 10), pal.leatherDeep());
    strap.rotation.x = Math.PI / 2;
    strap.position.set(0, y, -0.04);
    g.add(strap);
  }
  return g;
}

/** Leather vest with a wolf-pelt collar. Portrait and worn mesh share this. */
export function createBriarVest(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), pal.leather());
  vest.scale.set(0.9, 1.12, 0.72);
  vest.position.set(0, 0.02, 0.02);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.28, 0.06), pal.leatherDeep());
  belly.position.set(0, -0.04, 0.16);
  add(g, belly);
  furSkirt(g, 0.26, 0.24, 14, 0.12);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), pal.copper());
  clasp.position.set(0, 0.12, 0.2);
  add(g, clasp);
  for (const sx of [-1, 1]) {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.07, 5), pal.fang());
    fang.position.set(sx * 0.08, 0.2, 0.12);
    fang.rotation.z = sx * 0.4;
    add(g, fang);
  }
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), pal.leaf());
  leaf.scale.set(1.4, 0.45, 0.8);
  leaf.position.set(0.12, 0.16, 0.16);
  add(g, leaf);
  return g;
}

/** Hide boot with a pelt cuff and a copper toe cap. */
export function createBriarBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.088, 0.14, 10), pal.leather());
  shaft.position.y = 0.04;
  add(g, shaft);
  furSkirt(g, 0.1, 0.09, 10, 0.08);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), pal.leatherDeep());
  toe.scale.set(1.2, 0.55, 1.7);
  toe.position.set(0, -0.02, 0.1);
  add(g, toe);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.08), pal.copper());
  cap.position.set(0, 0.0, 0.16);
  add(g, cap);
  return g;
}

export function attachBriarWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const vest = createBriarVest();
    vest.name = 'wear_briar_chest';
    vest.visible = false;
    vest.position.set(0, 0.0, 0.02);
    vest.scale.setScalar(1.02);
    torso.add(vest);
  }

  const forearmL = player.getObjectByName('forearmL');
  if (forearmL) {
    const shield = createBriarShield();
    shield.name = 'wear_briar_shield';
    shield.visible = false;
    shield.position.set(0, SHIELD_FOREARM_Y, SHIELD_STRAP_Z);
    shield.rotation.set(0, Math.PI, 0);
    shield.scale.setScalar(1.12);
    forearmL.add(shield);
  }

  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createBriarBoot();
    boot.name = side < 0 ? 'wear_briar_bootL' : 'wear_briar_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.2);
    foot.add(boot);
  }
}

/** Town anvil: stump, copper-capped anvil, and a cold coal bed until Harl opens it. */
export function createBriarAnvil(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'briarAnvil';
  const stump = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.42, 8), pal.wood());
  stump.position.y = 0.21;
  add(g, stump);
  const rings = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.3, 0.04, 8), pal.woodLight());
  rings.position.y = 0.4;
  add(g, rings);
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.16, 0.18), pal.copperDark());
  body.position.y = 0.52;
  add(g, body);
  const horn = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.22, 6), pal.copper());
  horn.rotation.z = -Math.PI / 2;
  horn.position.set(0.3, 0.54, 0);
  add(g, horn);
  const face = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.16), pal.copper());
  face.position.set(-0.04, 0.62, 0);
  add(g, face);
  return g;
}
