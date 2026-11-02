import * as THREE from 'three';

/**
 * Weir kit. Eel ivory and oilskin, cut like the other town sets:
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
  ivory: () => phys(0xe8e0c8, { roughness: 0.38 }),
  oil: () => phys(0x243e2c, { roughness: 0.72 }),
  scale: () => phys(0x3d6b48, { roughness: 0.48, metalness: 0.18 }),
  belly: () => phys(0xc5cbb0, { roughness: 0.66 }),
  brass: () => phys(0xc6a15a, { metalness: 0.72, roughness: 0.32, clearcoat: 0.25, flatShading: false }),
};

/** A curved eel tooth. */
export function createEelToothItem(): THREE.Group {
  const g = new THREE.Group();
  const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.16, 5), pal.ivory());
  tooth.rotation.z = 0.45;
  add(g, tooth);
  const root = new THREE.Mesh(new THREE.SphereGeometry(0.02, 5, 4), pal.belly());
  root.position.set(-0.03, -0.04, 0);
  add(g, root);
  return g;
}

/** A wet olive scale. */
export function createEelScaleItem(): THREE.Group {
  const g = new THREE.Group();
  const scale = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 5), pal.scale());
  scale.scale.set(1.4, 0.85, 0.35);
  add(g, scale);
  const sheen = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), pal.belly());
  sheen.position.set(0.02, 0.01, 0.02);
  sheen.scale.set(1, 0.6, 0.4);
  add(g, sheen);
  return g;
}

/** Ivory fang. Shaft along +Y so the sword handshake applies. */
export function createEelFang(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.018, 0.1, 6), pal.oil());
  grip.position.y = 0.03;
  add(g, grip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.016), pal.brass());
  guard.position.y = 0.09;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.28, 4), pal.ivory());
  blade.position.y = 0.24;
  add(g, blade);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.008, 4, 3), pal.ivory());
  tip.name = 'toolEdge';
  tip.position.y = 0.38;
  g.add(tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.016, 5, 4), pal.brass());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.03;
  add(g, pommel);
  return g;
}

/** Oilskin wrap over the ribs, a scale yoke, and a short cape. Replaces the camp tunic. */
export function createWeirCloak(): THREE.Group {
  const g = new THREE.Group();
  const vest = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), pal.oil());
  vest.scale.set(0.92, 1.08, 0.7);
  vest.position.set(0, 0.0, 0.02);
  add(g, vest);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), pal.scale());
  belly.scale.set(1.02, 0.7, 0.44);
  belly.position.set(0, -0.14, 0.08);
  add(g, belly);
  const yoke = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), pal.scale());
  yoke.scale.set(1.5, 0.28, 0.88);
  yoke.position.set(0, 0.2, 0);
  add(g, yoke);
  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.4, 7, 1, true), pal.oil());
  cape.position.set(0, -0.02, -0.15);
  cape.rotation.x = 0.38;
  add(g, cape);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.024, 6, 5), pal.brass());
  clasp.position.set(0, 0.12, 0.2);
  add(g, clasp);
  return g;
}

/** An oilskin boot that covers the foot, with a pale cuff and a brass hobnail. */
export function createWeirBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.082, 0.15, 8), pal.oil());
  shaft.position.y = 0.05;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.015, 5, 8), pal.belly());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.12;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.076, 8, 6), pal.scale());
  toe.scale.set(1.12, 0.5, 1.55);
  toe.position.set(0, -0.02, 0.09);
  add(g, toe);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(0.012, 5, 4), pal.brass());
  nail.position.set(0, 0.01, 0.15);
  add(g, nail);
  return g;
}

export function attachWeirWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createWeirCloak();
    cloak.name = 'wear_weir_chest';
    cloak.visible = false;
    cloak.position.set(0, 0.0, 0.02);
    cloak.scale.setScalar(1.02);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createWeirBoot();
    boot.name = side < 0 ? 'wear_weir_bootL' : 'wear_weir_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachEelFang(toolRoot: THREE.Group): void {
  const fang = createEelFang();
  fang.name = 'tool_eel_fang';
  fang.visible = false;
  fang.scale.setScalar(1.08);
  toolRoot.add(fang);
}
