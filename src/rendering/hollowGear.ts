import * as THREE from 'three';

/**
 * Hollow kit. Adder fang and dark scale, cut like the other town sets:
 * a short blade on the camp handshake, a worn wrap, and icons from the same parts.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.55,
    metalness: opts.metalness ?? 0.12,
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
  fang: () => phys(0xe8e0c8, { roughness: 0.38 }),
  scale: () => phys(0x1e3328, { roughness: 0.62 }),
  venom: () => phys(0x3d6a32, { roughness: 0.45, metalness: 0.08 }),
  belly: () => phys(0xc8c4a0, { roughness: 0.66 }),
  brass: () => phys(0xc6a15a, { metalness: 0.72, roughness: 0.32, clearcoat: 0.25, flatShading: false }),
};

/** A curved adder fang. */
export function createAdderFangItem(): THREE.Group {
  const g = new THREE.Group();
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.15, 5), pal.fang());
  fang.rotation.z = 0.5;
  add(g, fang);
  const root = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), pal.venom());
  root.position.set(-0.03, -0.04, 0);
  add(g, root);
  return g;
}

/** A shed scale of dark hide. */
export function createAdderSkinItem(): THREE.Group {
  const g = new THREE.Group();
  const skin = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 5), pal.scale());
  skin.scale.set(1.4, 0.8, 0.3);
  add(g, skin);
  const zig = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.012, 0.02), pal.belly());
  zig.position.set(0, 0.01, 0.02);
  zig.rotation.z = 0.4;
  add(g, zig);
  return g;
}

/** Venom dirk. Shaft along +Y so the sword handshake applies. */
export function createVenomDirk(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.017, 0.09, 6), pal.scale());
  grip.position.y = 0.02;
  add(g, grip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.012, 0.014), pal.brass());
  guard.position.y = 0.075;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.26, 4), pal.venom());
  blade.position.y = 0.21;
  add(g, blade);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.007, 4, 3), pal.fang());
  tip.name = 'toolEdge';
  tip.position.y = 0.34;
  g.add(tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.014, 5, 4), pal.venom());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.03;
  add(g, pommel);
  return g;
}

/** Dark wrap over the ribs, a venom yoke, and a short cape. Replaces the camp tunic. */
export function createHollowCloak(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), pal.scale());
  vest.scale.set(0.92, 1.08, 0.7);
  vest.position.set(0, 0, 0.02);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), pal.venom());
  belly.scale.set(1.02, 0.7, 0.44);
  belly.position.set(0, -0.14, 0.08);
  add(g, belly);
  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), pal.venom());
  yoke.scale.set(1.5, 0.28, 0.88);
  yoke.position.set(0, 0.2, 0);
  add(g, yoke);
  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.4, 7, 1, true), pal.scale());
  cape.position.set(0, -0.02, -0.15);
  cape.rotation.x = 0.38;
  add(g, cape);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.024, 6, 5), pal.brass());
  clasp.position.set(0, 0.12, 0.2);
  add(g, clasp);
  return g;
}

/** A scale boot that covers the foot, with a pale cuff and a venom hobnail. */
export function createHollowBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.082, 0.15, 8), pal.scale());
  shaft.position.y = 0.05;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.015, 5, 8), pal.belly());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.12;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.076, 8, 6), pal.venom());
  toe.scale.set(1.12, 0.5, 1.55);
  toe.position.set(0, -0.02, 0.09);
  add(g, toe);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(0.012, 5, 4), pal.brass());
  nail.position.set(0, 0.01, 0.15);
  add(g, nail);
  return g;
}

export function attachHollowWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createHollowCloak();
    cloak.name = 'wear_hollow_chest';
    cloak.visible = false;
    cloak.position.set(0, 0, 0.02);
    cloak.scale.setScalar(1.02);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createHollowBoot();
    boot.name = side < 0 ? 'wear_hollow_bootL' : 'wear_hollow_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachVenomDirk(toolRoot: THREE.Group): void {
  const dirk = createVenomDirk();
  dirk.name = 'tool_venom_dirk';
  dirk.visible = false;
  dirk.scale.setScalar(1.08);
  toolRoot.add(dirk);
}
