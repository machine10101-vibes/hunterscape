import * as THREE from 'three';

/**
 * Ash kit. Antler and stag hide, cut like the other town sets:
 * a sword on the camp handshake, a worn wrap, and icons from the same parts.
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
  antler: () => phys(0xe6d2a8, { roughness: 0.42 }),
  tine: () => phys(0xf2e6c8, { roughness: 0.38 }),
  hide: () => phys(0x8a4a28, { roughness: 0.82 }),
  russet: () => phys(0x6a3418, { roughness: 0.86 }),
  belly: () => phys(0xc4a06a, { roughness: 0.7 }),
  copper: () => phys(0xb87333, { metalness: 0.7, roughness: 0.34, clearcoat: 0.2, flatShading: false }),
};

/** A shed ash antler with two tines. */
export function createAshAntlerItem(): THREE.Group {
  const g = new THREE.Group();
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 0.28, 5), pal.antler());
  beam.rotation.z = 0.4;
  add(g, beam);
  const tine = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.12, 4), pal.tine());
  tine.position.set(0.06, 0.08, 0);
  tine.rotation.z = -0.7;
  add(g, tine);
  const brow = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.08, 4), pal.antler());
  brow.position.set(-0.02, 0.02, 0);
  brow.rotation.z = 0.9;
  add(g, brow);
  return g;
}

/** A russet hide with a pale belly patch. */
export function createStagHideItem(): THREE.Group {
  const g = new THREE.Group();
  const hide = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 6), pal.hide());
  hide.scale.set(1.3, 0.7, 0.9);
  add(g, hide);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), pal.belly());
  belly.position.set(0, 0.02, 0.06);
  add(g, belly);
  return g;
}

/** Antler-edged blade. Shaft along +Y so the sword handshake applies. */
export function createAntlerBlade(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.12, 6), pal.hide());
  grip.position.y = 0.04;
  add(g, grip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.016, 0.02), pal.copper());
  guard.position.y = 0.11;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.4, 0.014), pal.antler());
  blade.position.y = 0.32;
  add(g, blade);
  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.28, 0.018), pal.tine());
  fuller.position.y = 0.3;
  g.add(fuller);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.08, 4), pal.tine());
  tip.name = 'toolEdge';
  tip.position.y = 0.56;
  add(g, tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 5), pal.copper());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.04;
  add(g, pommel);
  return g;
}

/** Russet wrap over the ribs, a hide yoke, and a short cape. Replaces the camp tunic. */
export function createStagCloak(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), pal.hide());
  vest.scale.set(0.92, 1.08, 0.7);
  vest.position.set(0, 0.0, 0.02);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), pal.russet());
  belly.scale.set(1.05, 0.72, 0.46);
  belly.position.set(0, -0.16, 0.08);
  add(g, belly);
  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), pal.belly());
  yoke.scale.set(1.55, 0.3, 0.9);
  yoke.position.set(0, 0.2, 0);
  add(g, yoke);
  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.44, 7, 1, true), pal.russet());
  cape.position.set(0, -0.02, -0.16);
  cape.rotation.x = 0.4;
  add(g, cape);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 5), pal.copper());
  clasp.position.set(0, 0.12, 0.2);
  add(g, clasp);
  const tine = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.1, 4), pal.antler());
  tine.position.set(0.14, 0.22, 0.06);
  tine.rotation.z = -0.6;
  add(g, tine);
  return g;
}

/** A hide boot that covers the foot, with a pale cuff and a copper hobnail. */
export function createStagBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.084, 0.15, 8), pal.hide());
  shaft.position.y = 0.05;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.016, 5, 8), pal.belly());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.12;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.078, 8, 6), pal.russet());
  toe.scale.set(1.15, 0.52, 1.6);
  toe.position.set(0, -0.02, 0.09);
  add(g, toe);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(0.014, 5, 4), pal.copper());
  nail.position.set(0, 0.01, 0.16);
  add(g, nail);
  return g;
}

export function attachStagWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createStagCloak();
    cloak.name = 'wear_stag_chest';
    cloak.visible = false;
    cloak.position.set(0, 0.0, 0.02);
    cloak.scale.setScalar(1.02);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createStagBoot();
    boot.name = side < 0 ? 'wear_stag_bootL' : 'wear_stag_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachAntlerBlade(toolRoot: THREE.Group): void {
  const blade = createAntlerBlade();
  blade.name = 'tool_antler_blade';
  blade.visible = false;
  blade.scale.setScalar(1.12);
  toolRoot.add(blade);
}
