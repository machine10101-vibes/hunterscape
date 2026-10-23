import * as THREE from 'three';

/**
 * Delver kit. Beetle shell and copper grit, worn and held the same way as
 * the roadwarden and cinder sets: a real head, a worn mesh, and a portrait
 * that shares those parts.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.7,
    metalness: opts.metalness ?? 0.12,
    flatShading: opts.flatShading ?? true,
    envMapIntensity: opts.envMapIntensity ?? 0.7,
    ...opts,
  });
}

function add(parent: THREE.Object3D, mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

const pal = {
  shell: () => phys(0x5c7a42, { roughness: 0.48, metalness: 0.28 }),
  shellDark: () => phys(0x3a4a2c, { roughness: 0.7, metalness: 0.12 }),
  copper: () => phys(0xc47a3a, { metalness: 0.72, roughness: 0.3, clearcoat: 0.2, flatShading: false }),
  grit: () => phys(0xd8a060, { metalness: 0.45, roughness: 0.55 }),
  leather: () => phys(0x6a4030, { roughness: 0.86 }),
  cloth: () => phys(0x8a6848, { roughness: 0.9 }),
  wood: () => phys(0x4a3018, { roughness: 0.9 }),
};

/** A curved plate of beetle shell with a copper seam. */
export function createBeetleShellItem(): THREE.Group {
  const g = new THREE.Group();
  const plate = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.45), pal.shell());
  plate.scale.set(1.3, 0.55, 1);
  add(g, plate);
  const seam = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.012, 0.02), pal.copper());
  seam.position.y = 0.02;
  add(g, seam);
  return g;
}

/** A glittering lump of copper grit. */
export function createCopperGritItem(): THREE.Group {
  const g = new THREE.Group();
  const lump = new THREE.Mesh(new THREE.DodecahedronGeometry(0.08, 0), pal.grit());
  add(g, lump);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const chip = new THREE.Mesh(new THREE.OctahedronGeometry(0.025, 0), i % 2 ? pal.copper() : pal.grit());
    chip.position.set(Math.cos(a) * 0.07, 0.03, Math.sin(a) * 0.06);
    add(g, chip);
  }
  return g;
}

/** Copper-capped maul. Head runs +Y, same handshake as the roadwarden mace. */
export function createDelverMaul(): THREE.Group {
  const g = new THREE.Group();
  const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.46, 8), pal.wood());
  haft.position.y = 0.16;
  add(g, haft);
  for (let i = 0; i < 3; i++) {
    const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.006, 4, 8), pal.shellDark());
    wrap.rotation.x = Math.PI / 2;
    wrap.position.y = 0.05 + i * 0.035;
    g.add(wrap);
  }
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.06, 8), pal.copper());
  collar.position.y = 0.4;
  add(g, collar);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.1), pal.shell());
  head.position.y = 0.5;
  add(g, head);
  const band = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.02, 0.11), pal.copper());
  band.position.y = 0.5;
  add(g, band);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.07, 6), pal.copper());
  cap.position.y = 0.58;
  cap.name = 'toolEdge';
  add(g, cap);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), pal.copper());
  pommel.position.y = -0.08;
  pommel.name = 'toolHeel';
  add(g, pommel);
  return g;
}

/** Miner’s vest faced with a beetle plate. */
export function createDelverVest(): THREE.Group {
  const g = new THREE.Group();
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.28, 0.12), pal.cloth());
  cloth.position.y = 0.02;
  add(g, cloth);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.04), pal.shell());
  plate.position.set(0, 0.04, 0.08);
  add(g, plate);
  const seam = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.02), pal.copper());
  seam.position.set(0, 0.04, 0.1);
  add(g, seam);
  return g;
}

/** Heavy boot with a shell toe. */
export function createDelverBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.14, 8), pal.leather());
  shaft.position.y = 0.04;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.012, 5, 10), pal.copper());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.1;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), pal.shell());
  toe.scale.set(1.1, 0.5, 1.4);
  toe.position.set(0, -0.01, 0.1);
  add(g, toe);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), pal.copper());
  nail.position.set(0, 0.02, 0.16);
  add(g, nail);
  return g;
}

export function attachDelverWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const vest = createDelverVest();
    vest.name = 'wear_delver_chest';
    vest.visible = false;
    vest.position.set(0, 0.02, 0.04);
    vest.scale.setScalar(1.02);
    torso.add(vest);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createDelverBoot();
    boot.name = side < 0 ? 'wear_delver_bootL' : 'wear_delver_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachDelverMaul(toolRoot: THREE.Group): void {
  const maul = createDelverMaul();
  maul.name = 'tool_delver_maul';
  maul.visible = false;
  maul.scale.setScalar(1.12);
  toolRoot.add(maul);
}
