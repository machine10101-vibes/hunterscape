import * as THREE from 'three';

/**
 * Dusk kit. Fox fur and fangs, cut the same way as the briar and roadwarden
 * sets: a real edge, a worn mesh, and a portrait that shares those parts.
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
  fur: () => phys(0xc4622a, { roughness: 0.82, sheen: 0.22, sheenColor: new THREE.Color(0xf0c090) }),
  furDark: () => phys(0x6a3018, { roughness: 0.88 }),
  throat: () => phys(0xf4efe4, { roughness: 0.78 }),
  fang: () => phys(0xf6f1e6, { roughness: 0.3, flatShading: false }),
  copper: () => phys(0xc47a3a, { metalness: 0.72, roughness: 0.3, clearcoat: 0.28, flatShading: false }),
  steel: () => phys(0xd8dce2, { metalness: 0.62, roughness: 0.28, clearcoat: 0.35, flatShading: false }),
  leather: () => phys(0x4a2818, { roughness: 0.8 }),
  cloth: () => phys(0x6a3848, { roughness: 0.86, sheen: 0.12, sheenColor: new THREE.Color(0xc4622a) }),
};

/** A folded dusk-fox pelt, rust back and white throat. */
export function createFoxFurItem(): THREE.Group {
  const g = new THREE.Group();
  const hide = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), pal.fur());
  hide.scale.set(1.45, 0.32, 1.0);
  add(g, hide);
  const throat = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), pal.throat());
  throat.scale.set(1.2, 0.28, 0.7);
  throat.position.set(0.04, 0.05, 0.02);
  add(g, throat);
  const tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.12, 3, 5), pal.fur());
  tail.rotation.z = 0.9;
  tail.position.set(-0.16, 0.02, 0);
  add(g, tail);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), pal.throat());
  tip.position.set(-0.24, 0.08, 0);
  add(g, tip);
  return g;
}

/** A narrow dusk-fox fang. */
export function createDuskFangItem(): THREE.Group {
  const g = new THREE.Group();
  const fang = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.2, 6), pal.fang());
  fang.rotation.z = 0.45;
  add(g, fang);
  const root = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), pal.furDark());
  root.position.set(-0.04, -0.08, 0);
  add(g, root);
  return g;
}

/** Short blade. Edge runs +Y, same handshake as the camp and briar swords. */
export function createDuskDagger(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.16, 7), pal.leather());
  grip.position.y = 0.04;
  add(g, grip);
  const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.024, 0.005, 4, 8), pal.fur());
  wrap.rotation.x = Math.PI / 2;
  wrap.position.y = 0.02;
  g.add(wrap);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.018, 0.028), pal.copper());
  guard.position.y = 0.13;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.32, 0.008), pal.steel());
  blade.position.y = 0.3;
  add(g, blade);
  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.22, 0.01), pal.copper());
  fuller.position.y = 0.28;
  add(g, fuller);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.08, 4), pal.steel());
  tip.position.y = 0.5;
  tip.name = 'toolEdge';
  add(g, tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.026, 8, 6), pal.fang());
  pommel.position.y = -0.06;
  pommel.name = 'toolHeel';
  add(g, pommel);
  return g;
}

/** A short dusk cloak with a fox-fur collar. Worn on the torso. */
export function createDuskCloak(): THREE.Group {
  const g = new THREE.Group();
  const cape = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.55, 7, 1, true), pal.cloth());
  cape.position.set(0, -0.02, -0.04);
  add(g, cape);
  const lining = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.48, 7, 1, true), pal.furDark());
  lining.position.set(0, -0.02, -0.02);
  lining.rotation.y = Math.PI;
  g.add(lining);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.035, 6, 10), pal.fur());
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 0.22;
  add(g, collar);
  const throat = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), pal.throat());
  throat.position.set(0, 0.2, 0.08);
  add(g, throat);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.028, 7, 5), pal.copper());
  clasp.position.set(0, 0.18, 0.14);
  add(g, clasp);
  return g;
}

/** Fur-cuffed boot with a dark stocking and a copper toe. */
export function createDuskBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.082, 0.14, 8), pal.leather());
  shaft.position.y = 0.04;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.018, 5, 8), pal.fur());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.1;
  add(g, cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), pal.furDark());
  toe.scale.set(1.15, 0.5, 1.55);
  toe.position.set(0, -0.02, 0.09);
  add(g, toe);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.02, 0.06), pal.copper());
  cap.position.set(0, 0.0, 0.15);
  add(g, cap);
  return g;
}

export function attachDuskWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createDuskCloak();
    cloak.name = 'wear_dusk_chest';
    cloak.visible = false;
    cloak.position.set(0, 0.02, -0.02);
    cloak.scale.setScalar(1.05);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createDuskBoot();
    boot.name = side < 0 ? 'wear_dusk_bootL' : 'wear_dusk_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachDuskDagger(toolRoot: THREE.Group): void {
  const dagger = createDuskDagger();
  dagger.name = 'tool_dusk_dagger';
  dagger.visible = false;
  dagger.scale.setScalar(1.12);
  toolRoot.add(dagger);
}
