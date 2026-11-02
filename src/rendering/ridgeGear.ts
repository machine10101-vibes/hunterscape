import * as THREE from 'three';

/**
 * Ridge kit. Goat horn and chalk hide, cut like the other town sets:
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
  horn: () => phys(0xe6d2a8, { roughness: 0.4 }),
  chalk: () => phys(0xd8d0c4, { roughness: 0.78 }),
  hide: () => phys(0x6a5038, { roughness: 0.72 }),
  hoof: () => phys(0x2a241c, { roughness: 0.55 }),
  brass: () => phys(0xc6a15a, { metalness: 0.72, roughness: 0.32, clearcoat: 0.25, flatShading: false }),
};

/** A pale goat horn. */
export function createGoatHornItem(): THREE.Group {
  const g = new THREE.Group();
  const horn = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.2, 5), pal.horn());
  horn.rotation.z = 0.55;
  add(g, horn);
  const root = new THREE.Mesh(new THREE.SphereGeometry(0.022, 5, 4), pal.hide());
  root.position.set(-0.04, -0.05, 0);
  add(g, root);
  return g;
}

/** A chalk-dusted hide scrap. */
export function createGoatHideItem(): THREE.Group {
  const g = new THREE.Group();
  const hide = new THREE.Mesh(new THREE.SphereGeometry(0.08, 7, 5), pal.chalk());
  hide.scale.set(1.35, 0.9, 0.28);
  add(g, hide);
  const patch = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), pal.hide());
  patch.position.set(0.02, 0.01, 0.02);
  patch.scale.set(1, 0.6, 0.4);
  add(g, patch);
  return g;
}

/** Horn knife. Shaft along +Y so the sword handshake applies. */
export function createHornKnife(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.017, 0.09, 6), pal.hide());
  grip.position.y = 0.02;
  add(g, grip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.012, 0.014), pal.brass());
  guard.position.y = 0.075;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.26, 4), pal.horn());
  blade.position.y = 0.21;
  add(g, blade);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.007, 4, 3), pal.horn());
  tip.name = 'toolEdge';
  tip.position.y = 0.34;
  g.add(tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.015, 5, 4), pal.brass());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.03;
  add(g, pommel);
  return g;
}

/** Chalk wrap over the ribs, a hide yoke, and a short cape. Replaces the camp tunic. */
export function createRidgeCloak(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), pal.chalk());
  vest.scale.set(0.92, 1.08, 0.7);
  vest.position.set(0, 0, 0.02);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), pal.hide());
  belly.scale.set(1.02, 0.7, 0.44);
  belly.position.set(0, -0.14, 0.08);
  add(g, belly);
  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), pal.hide());
  yoke.scale.set(1.5, 0.28, 0.88);
  yoke.position.set(0, 0.2, 0);
  add(g, yoke);
  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.4, 7, 1, true), pal.chalk());
  cape.position.set(0, -0.02, -0.15);
  cape.rotation.x = 0.38;
  add(g, cape);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.024, 6, 5), pal.brass());
  clasp.position.set(0, 0.12, 0.2);
  add(g, clasp);
  return g;
}

/** A hide boot that covers the foot, with a chalk cuff and a dark hobnail. */
export function createRidgeBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.082, 0.15, 8), pal.hide());
  shaft.position.y = 0.05;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.015, 5, 8), pal.chalk());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.12;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.076, 8, 6), pal.chalk());
  toe.scale.set(1.12, 0.5, 1.55);
  toe.position.set(0, -0.02, 0.09);
  add(g, toe);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(0.012, 5, 4), pal.hoof());
  nail.position.set(0, 0.01, 0.15);
  add(g, nail);
  return g;
}

export function attachRidgeWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createRidgeCloak();
    cloak.name = 'wear_ridge_chest';
    cloak.visible = false;
    cloak.position.set(0, 0, 0.02);
    cloak.scale.setScalar(1.02);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createRidgeBoot();
    boot.name = side < 0 ? 'wear_ridge_bootL' : 'wear_ridge_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachHornKnife(toolRoot: THREE.Group): void {
  const knife = createHornKnife();
  knife.name = 'tool_horn_knife';
  knife.visible = false;
  knife.scale.setScalar(1.08);
  toolRoot.add(knife);
}
