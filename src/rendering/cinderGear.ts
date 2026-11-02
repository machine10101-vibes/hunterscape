import * as THREE from 'three';
import { SHIELD_FOREARM_Y, SHIELD_STRAP_Z } from './yetiGear';

/**
 * Cinder kit. Soot feathers and charcoal, cut the same way as the dusk and
 * roadwarden sets: a real edge, a worn mesh, and a portrait that shares those parts.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.74,
    metalness: opts.metalness ?? 0.08,
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
  soot: () => phys(0x2a2624, { roughness: 0.92 }),
  ash: () => phys(0x6a645c, { roughness: 0.88 }),
  feather: () => phys(0x1a1716, { roughness: 0.7, sheen: 0.18, sheenColor: new THREE.Color(0x8a8078) }),
  quill: () => phys(0xe6dcc8, { roughness: 0.45 }),
  ember: () => phys(0xe07030, { roughness: 0.4, emissive: 0xff5520, emissiveIntensity: 0.35 }),
  copper: () => phys(0xc47a3a, { metalness: 0.7, roughness: 0.32, clearcoat: 0.25, flatShading: false }),
  steel: () => phys(0xb8b0a6, { metalness: 0.55, roughness: 0.34, clearcoat: 0.2, flatShading: false }),
  cloth: () => phys(0x3a302c, { roughness: 0.88 }),
  leather: () => phys(0x4a2818, { roughness: 0.8 }),
  wood: () => phys(0x3a2414, { roughness: 0.9 }),
};

/** A soot-black flight feather with a pale quill. */
export function createSootFeatherItem(): THREE.Group {
  const g = new THREE.Group();
  const vane = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.28, 4), pal.feather());
  vane.rotation.z = 0.5;
  vane.scale.set(0.35, 1, 1);
  add(g, vane);
  const quill = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.16, 5), pal.quill());
  quill.rotation.z = 0.5;
  quill.position.set(-0.04, -0.08, 0);
  add(g, quill);
  return g;
}

/** A cracked lump of kiln charcoal. */
export function createCharcoalItem(): THREE.Group {
  const g = new THREE.Group();
  const lump = new THREE.Mesh(new THREE.DodecahedronGeometry(0.1, 0), pal.soot());
  lump.scale.set(1.2, 0.8, 1);
  add(g, lump);
  const crack = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.02), pal.ember());
  crack.position.set(0.01, 0.02, 0.07);
  crack.rotation.z = 0.4;
  add(g, crack);
  const ash = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), pal.ash());
  ash.position.set(-0.06, 0.04, 0.02);
  add(g, ash);
  return g;
}

/** Short cinder blade. Edge runs +Y, same handshake as the camp sword. */
export function createCinderKnife(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.14, 6), pal.leather());
  grip.position.y = 0.02;
  add(g, grip);
  const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.005, 4, 8), pal.feather());
  wrap.rotation.x = Math.PI / 2;
  wrap.position.y = 0.04;
  g.add(wrap);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.012, 0.02), pal.copper());
  guard.position.y = 0.1;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.28, 0.008), pal.steel());
  blade.position.y = 0.25;
  add(g, blade);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.26, 0.004), pal.ember());
  edge.position.set(0.008, 0.25, 0);
  add(g, edge);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.06, 4), pal.steel());
  tip.position.y = 0.42;
  tip.name = 'toolEdge';
  add(g, tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 5), pal.copper());
  pommel.position.y = -0.06;
  pommel.name = 'toolHeel';
  add(g, pommel);
  return g;
}

/** Soot-dark trousers with a feathered hip and a copper ring. */
export function createCinderLegs(): THREE.Group {
  const g = new THREE.Group();
  const cloth = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.095, 0.3, 8), pal.cloth());
  cloth.position.y = -0.04;
  add(g, cloth);
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.01, 5, 10), pal.copper());
  band.rotation.x = Math.PI / 2;
  band.position.y = 0.08;
  g.add(band);
  const feather = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.1, 4), pal.feather());
  feather.rotation.z = 0.8;
  feather.position.set(0.06, 0.02, 0.06);
  add(g, feather);
  return g;
}

/** Charred buckler. Boss faces +Z; enarmes sit on −Z. */
export function createCinderShield(): THREE.Group {
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.045, 8), pal.wood());
  board.rotation.x = Math.PI / 2;
  add(g, board);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.19, 0.02, 8), pal.soot());
  face.rotation.x = Math.PI / 2;
  face.position.z = 0.028;
  add(g, face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.014, 5, 12), pal.copper());
  rim.position.z = 0.02;
  add(g, rim);
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), pal.copper());
  boss.scale.z = 0.45;
  boss.position.z = 0.055;
  add(g, boss);
  for (const y of [-0.06, 0.06]) {
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.01, 4, 8), pal.leather());
    strap.rotation.x = Math.PI / 2;
    strap.position.set(0, y, -0.035);
    g.add(strap);
  }
  return g;
}

export function attachCinderWear(player: THREE.Group): void {
  const forearmL = player.getObjectByName('forearmL');
  if (forearmL) {
    const shield = createCinderShield();
    shield.name = 'wear_cinder_shield';
    shield.visible = false;
    shield.position.set(0, SHIELD_FOREARM_Y, SHIELD_STRAP_Z);
    shield.rotation.set(0, Math.PI, 0);
    shield.scale.setScalar(1.12);
    forearmL.add(shield);
  }
  for (const side of [-1, 1] as const) {
    const leg = player.getObjectByName(side < 0 ? 'legL' : 'legR');
    if (!leg) continue;
    const wrap = createCinderLegs();
    wrap.name = side < 0 ? 'wear_cinder_legL' : 'wear_cinder_legR';
    wrap.visible = false;
    wrap.position.set(0, -0.02, 0);
    wrap.scale.setScalar(1.05);
    leg.add(wrap);
  }
}

export function attachCinderKnife(toolRoot: THREE.Group): void {
  const knife = createCinderKnife();
  knife.name = 'tool_cinder_knife';
  knife.visible = false;
  knife.scale.setScalar(1.12);
  toolRoot.add(knife);
}
