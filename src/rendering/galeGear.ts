import * as THREE from 'three';

/**
 * Gale kit. Hawk feathers and a talon, cut like the bone set:
 * a real edge, a worn mesh, and a portrait that shares those parts.
 * The spear uses the camp spear handshake (shaft along +Y).
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
  feather: () => phys(0xf4f1ea, { roughness: 0.62 }),
  vane: () => phys(0xd5d8de, { roughness: 0.7 }),
  slate: () => phys(0x314050, { roughness: 0.82 }),
  brass: () => phys(0xc6a15a, { metalness: 0.72, roughness: 0.32, clearcoat: 0.25, flatShading: false }),
  ash: () => phys(0xcbb892, { roughness: 0.68 }),
  talon: () => phys(0x1a120c, { roughness: 0.45 }),
  cloth: () => phys(0x243040, { roughness: 0.88 }),
};

/** A long pale flight feather. */
export function createGaleFeatherItem(): THREE.Group {
  const g = new THREE.Group();
  const quill = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.01, 0.32, 5), pal.ash());
  quill.rotation.z = 0.35;
  add(g, quill);
  const vane = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.008), pal.feather());
  vane.position.set(0.02, 0.04, 0);
  vane.rotation.z = 0.35;
  add(g, vane);
  const dark = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.08, 0.01), pal.slate());
  dark.position.set(0.03, 0.1, 0);
  dark.rotation.z = 0.35;
  add(g, dark);
  return g;
}

/** A hooked hawk talon banded in brass. */
export function createHawkTalonItem(): THREE.Group {
  const g = new THREE.Group();
  const curve = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 5, 10, Math.PI * 0.85), pal.talon());
  curve.rotation.z = 0.4;
  add(g, curve);
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.008, 4, 8), pal.brass());
  band.position.set(-0.04, 0.02, 0);
  g.add(band);
  return g;
}

/** Ash spear with a brass leaf and a flight-feather. Shaft along +Y. */
export function createGaleSpear(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.026, 1.05, 7), pal.ash());
  shaft.position.y = 0.22;
  add(g, shaft);
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.03, 0.16, 7), pal.slate());
  wrap.position.y = 0.02;
  add(g, wrap);
  const feather = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.14, 0.04), pal.feather());
  feather.position.set(0.02, 0.02, 0);
  add(g, feather);
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.22, 5), pal.brass());
  head.position.y = 0.82;
  add(g, head);
  const edge = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.08, 4), pal.brass());
  edge.name = 'toolEdge';
  edge.position.y = 0.96;
  add(g, edge);
  const heel = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 5), pal.brass());
  heel.name = 'toolHeel';
  heel.position.y = -0.3;
  add(g, heel);
  return g;
}

/** Slate wrap over the ribs, a shoulder yoke, and a short cape. Replaces the camp tunic. */
export function createGaleCloak(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), pal.cloth());
  vest.scale.set(0.92, 1.08, 0.7);
  vest.position.set(0, 0.0, 0.02);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), pal.slate());
  belly.scale.set(1.05, 0.72, 0.46);
  belly.position.set(0, -0.16, 0.08);
  add(g, belly);
  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), pal.slate());
  yoke.scale.set(1.6, 0.32, 0.95);
  yoke.position.set(0, 0.2, 0.0);
  add(g, yoke);

  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.46, 7, 1, true), pal.cloth());
  cape.position.set(0, -0.02, -0.16);
  cape.rotation.x = 0.42;
  add(g, cape);
  const lining = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.38, 7, 1, true), pal.slate());
  lining.position.set(0, 0.0, -0.12);
  lining.rotation.set(0.42, Math.PI, 0);
  g.add(lining);

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.024, 6, 10), pal.feather());
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 0.24;
  add(g, collar);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 5), pal.brass());
  clasp.position.set(0, 0.12, 0.2);
  add(g, clasp);
  const feather = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.16, 0.008), pal.feather());
  feather.position.set(0.16, 0.22, 0.06);
  feather.rotation.z = -0.65;
  add(g, feather);
  return g;
}

/** A slate boot that covers the foot, with a pale cuff and a brass spur. */
export function createGaleBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.084, 0.15, 8), pal.slate());
  shaft.position.y = 0.05;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.016, 5, 8), pal.feather());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.12;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.078, 8, 6), pal.cloth());
  toe.scale.set(1.15, 0.52, 1.6);
  toe.position.set(0, -0.02, 0.09);
  add(g, toe);
  const spur = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 4), pal.brass());
  spur.rotation.z = Math.PI / 2;
  spur.position.set(0.08, 0.03, -0.02);
  add(g, spur);
  return g;
}

export function attachGaleWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createGaleCloak();
    cloak.name = 'wear_gale_chest';
    cloak.visible = false;
    cloak.position.set(0, 0.0, 0.02);
    cloak.scale.setScalar(1.02);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createGaleBoot();
    boot.name = side < 0 ? 'wear_gale_bootL' : 'wear_gale_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachGaleSpear(toolRoot: THREE.Group): void {
  const spear = createGaleSpear();
  spear.name = 'tool_gale_spear';
  spear.visible = false;
  spear.scale.setScalar(1.05);
  toolRoot.add(spear);
}
