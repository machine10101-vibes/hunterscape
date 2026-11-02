import * as THREE from 'three';
import { SHIELD_FOREARM_Y, SHIELD_STRAP_Z } from './yetiGear';

/**
 * Roadwarden kit. Boar hide and tusks, bound with thorn-spider silk and
 * copper. Same physical build as the briar and frost sets: stacked parts,
 * a real edge, and straps that sit on the shield's −Z.
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.74,
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
  hide: () => phys(0x6a4632, { roughness: 0.9, sheen: 0.16, sheenColor: new THREE.Color(0xc4a070) }),
  hideDark: () => phys(0x3a2818, { roughness: 0.92 }),
  belly: () => phys(0xd2b090, { roughness: 0.84 }),
  tusk: () => phys(0xf3ecdc, { roughness: 0.32, flatShading: false }),
  silk: () => phys(0xe6e0d4, { roughness: 0.28, metalness: 0.04, flatShading: false, sheen: 0.45, sheenColor: new THREE.Color(0xfff6e8) }),
  copper: () => phys(0xc47a3a, { metalness: 0.7, roughness: 0.32, clearcoat: 0.3, flatShading: false }),
  wood: () => phys(0x6a4424, { roughness: 0.84 }),
  leather: () => phys(0x4a3018, { roughness: 0.82, flatShading: false }),
};

/** Folded boar hide with a ridge of bristles. */
export function createBoarHideItem(): THREE.Group {
  const g = new THREE.Group();
  const hide = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), pal.hide());
  hide.scale.set(1.4, 0.36, 1.05);
  add(g, hide);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), pal.belly());
  belly.scale.set(1.3, 0.3, 0.8);
  belly.position.y = 0.04;
  add(g, belly);
  for (let i = 0; i < 6; i++) {
    const bristle = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.08, 4), pal.hideDark());
    bristle.position.set(-0.1 + i * 0.04, 0.08, 0);
    bristle.rotation.z = -0.4;
    add(g, bristle);
  }
  return g;
}

/** A curved boar tusk. */
export function createBoarTuskItem(): THREE.Group {
  const g = new THREE.Group();
  const tusk = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.022, 6, 10, Math.PI * 1.15), pal.tusk());
  tusk.rotation.z = 0.4;
  add(g, tusk);
  const root = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), pal.hideDark());
  root.position.set(-0.08, -0.02, 0);
  add(g, root);
  return g;
}

/** A wound spool of spider silk. */
export function createSpiderSilkItem(): THREE.Group {
  const g = new THREE.Group();
  const spool = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 8), pal.wood());
  spool.rotation.z = Math.PI / 2;
  add(g, spool);
  const wound = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.1, 10), pal.silk());
  wound.rotation.z = Math.PI / 2;
  add(g, wound);
  const strand = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.006, 4, 12, Math.PI), pal.silk());
  strand.rotation.y = 0.6;
  strand.position.y = 0.04;
  g.add(strand);
  return g;
}

/** Boar roast wrapped in hide, for the hearth quest. */
export function createBoarRoastItem(): THREE.Group {
  const g = new THREE.Group();
  const meat = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), phys(0x8a3a28, { roughness: 0.7 }));
  meat.scale.set(1.4, 0.7, 0.9);
  add(g, meat);
  const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6), pal.tusk());
  bone.rotation.z = 0.5;
  add(g, bone);
  const glaze = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), phys(0xc46830, { roughness: 0.4, clearcoat: 0.4, flatShading: false }));
  glaze.position.set(0.04, 0.04, 0.04);
  add(g, glaze);
  return g;
}

/** Copper-capped mace. Haft and head run +Y, same as the camp hatchet and maul. */
export function createRoadMace(): THREE.Group {
  const g = new THREE.Group();
  const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.46, 8), pal.wood());
  haft.position.y = 0.16;
  add(g, haft);
  for (let i = 0; i < 4; i++) {
    const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.005, 4, 8), pal.silk());
    wrap.rotation.x = Math.PI / 2;
    wrap.position.y = 0.04 + i * 0.03;
    g.add(wrap);
  }
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.06, 8), pal.copper());
  collar.position.y = 0.4;
  add(g, collar);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), pal.hideDark());
  head.position.y = 0.5;
  head.scale.y = 0.85;
  add(g, head);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.07, 5), pal.tusk());
    spike.position.set(Math.cos(a) * 0.08, 0.5, Math.sin(a) * 0.08);
    spike.lookAt(Math.cos(a), 0.5, Math.sin(a));
    add(g, spike);
  }
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 6), pal.copper());
  cap.position.y = 0.6;
  cap.name = 'toolEdge';
  add(g, cap);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), pal.copper());
  pommel.position.y = -0.08;
  pommel.name = 'toolHeel';
  add(g, pommel);
  return g;
}

/** Round hide shield. Boss faces +Z; enarmes sit on −Z. */
export function createRoadShield(): THREE.Group {
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.05, 10), pal.wood());
  board.rotation.x = Math.PI / 2;
  add(g, board);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.028, 10), pal.hide());
  face.rotation.x = Math.PI / 2;
  face.position.z = 0.03;
  add(g, face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.018, 6, 14), pal.copper());
  rim.position.z = 0.02;
  add(g, rim);
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), pal.tusk());
  boss.scale.z = 0.5;
  boss.position.z = 0.06;
  add(g, boss);
  for (const sx of [-1, 1] as const) {
    const tusk = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.09, 5), pal.tusk());
    tusk.position.set(sx * 0.1, 0.08, 0.05);
    tusk.rotation.z = sx * -0.4;
    tusk.rotation.x = -0.3;
    add(g, tusk);
  }
  for (const y of [-0.08, 0.08]) {
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 5, 10), pal.leather());
    strap.rotation.x = Math.PI / 2;
    strap.position.set(0, y, -0.04);
    g.add(strap);
  }
  return g;
}

/** Hide chaps bound with silk, worn on each thigh. */
export function createRoadLegs(): THREE.Group {
  const g = new THREE.Group();
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.28, 8), pal.hide());
  wrap.position.y = -0.06;
  add(g, wrap);
  for (const y of [0.04, -0.08]) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.012, 5, 10), pal.silk());
    band.rotation.x = Math.PI / 2;
    band.position.y = y;
    g.add(band);
  }
  const fringe = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.08, 4), pal.hideDark());
  fringe.position.set(0, -0.2, 0.04);
  add(g, fringe);
  return g;
}

/** Shin plate of boiled hide with a tusk ridge. */
export function createRoadGreaves(): THREE.Group {
  const g = new THREE.Group();
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.05), pal.leather());
  plate.position.set(0, -0.02, 0.06);
  add(g, plate);
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.18, 0.03), pal.tusk());
  ridge.position.set(0, -0.02, 0.09);
  add(g, ridge);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 5, 8), pal.silk());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.08;
  g.add(cuff);
  return g;
}

export function attachRoadWear(player: THREE.Group): void {
  const forearmL = player.getObjectByName('forearmL');
  if (forearmL) {
    const shield = createRoadShield();
    shield.name = 'wear_road_shield';
    shield.visible = false;
    shield.position.set(0, SHIELD_FOREARM_Y, SHIELD_STRAP_Z);
    shield.rotation.set(0, Math.PI, 0);
    shield.scale.setScalar(1.1);
    forearmL.add(shield);
  }
  for (const side of [-1, 1] as const) {
    const leg = player.getObjectByName(side < 0 ? 'legL' : 'legR');
    if (leg) {
      const wrap = createRoadLegs();
      wrap.name = side < 0 ? 'wear_road_legL' : 'wear_road_legR';
      wrap.visible = false;
      wrap.position.set(0, -0.02, 0);
      wrap.scale.setScalar(1.05);
      leg.add(wrap);
    }
    const shin = player.getObjectByName(side < 0 ? 'shinL' : 'shinR');
    if (shin) {
      const greave = createRoadGreaves();
      greave.name = side < 0 ? 'wear_road_greaveL' : 'wear_road_greaveR';
      greave.visible = false;
      greave.position.set(0, -0.04, 0.02);
      greave.scale.setScalar(1.1);
      shin.add(greave);
    }
  }
}

export function attachRoadMace(toolRoot: THREE.Group): void {
  const mace = createRoadMace();
  mace.name = 'tool_road_mace';
  mace.visible = false;
  mace.scale.setScalar(1.08);
  toolRoot.add(mace);
}
