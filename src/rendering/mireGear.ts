import * as THREE from 'three';

/**
 * Mire kit. Toad hide and venom, cut like the dusk and cinder sets:
 * a real edge, a worn mesh, and a portrait that shares those parts.
 * The dagger uses the camp sword handshake (edge along +Y).
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.7,
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
  hide: () => phys(0x3e7a3a, { roughness: 0.62 }),
  belly: () => phys(0xe6e0b8, { roughness: 0.75 }),
  venom: () => phys(0x8ed86a, { roughness: 0.35, emissive: 0x3a8a30, emissiveIntensity: 0.4 }),
  reed: () => phys(0x8a9a48, { roughness: 0.9 }),
  copper: () => phys(0xc47a3a, { metalness: 0.7, roughness: 0.32, clearcoat: 0.2, flatShading: false }),
  steel: () => phys(0xc8d0c4, { metalness: 0.55, roughness: 0.32, clearcoat: 0.15, flatShading: false }),
  cloth: () => phys(0x2f4a32, { roughness: 0.88 }),
};

/** A folded toad hide, green back and pale belly. */
export function createToadHideItem(): THREE.Group {
  const g = new THREE.Group();
  const back = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), pal.hide());
  back.scale.set(1.3, 0.4, 1);
  add(g, back);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), pal.belly());
  belly.scale.set(1.1, 0.35, 0.8);
  belly.position.y = 0.04;
  add(g, belly);
  return g;
}

/** A small venom gland. */
export function createVenomSacItem(): THREE.Group {
  const g = new THREE.Group();
  const sac = new THREE.Mesh(new THREE.SphereGeometry(0.06, 7, 6), pal.venom());
  sac.scale.set(0.8, 1.1, 0.8);
  add(g, sac);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 0.05, 5), pal.hide());
  neck.position.y = 0.07;
  add(g, neck);
  return g;
}

/** Reed-wrapped dagger. Edge runs +Y, same handshake as the camp sword. */
export function createMireDagger(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.018, 0.12, 6), pal.reed());
  grip.position.y = 0.02;
  add(g, grip);
  const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.005, 4, 8), pal.hide());
  wrap.rotation.x = Math.PI / 2;
  wrap.position.y = 0.05;
  g.add(wrap);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.012, 0.018), pal.copper());
  guard.position.y = 0.09;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.26, 0.008), pal.steel());
  blade.position.y = 0.23;
  add(g, blade);
  const groove = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.18, 0.004), pal.venom());
  groove.position.set(0.006, 0.22, 0);
  add(g, groove);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 4), pal.steel());
  tip.position.y = 0.39;
  tip.name = 'toolEdge';
  add(g, tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), pal.venom());
  pommel.position.y = -0.05;
  pommel.name = 'toolHeel';
  add(g, pommel);
  return g;
}

/** Toad-hide cloak with a copper clasp. */
export function createMireCloak(): THREE.Group {
  const g = new THREE.Group();
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.32, 0.08), pal.cloth());
  cloth.position.y = 0.02;
  add(g, cloth);
  const hide = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.03), pal.hide());
  hide.position.set(0, 0.02, 0.05);
  add(g, hide);
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), pal.copper());
  clasp.position.set(0, 0.14, 0.07);
  add(g, clasp);
  const sac = new THREE.Mesh(new THREE.SphereGeometry(0.025, 5, 4), pal.venom());
  sac.position.set(0.1, 0.04, 0.07);
  add(g, sac);
  return g;
}

/** Soft hide boot with a reed cuff. */
export function createMireBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.086, 0.13, 8), pal.hide());
  shaft.position.y = 0.04;
  add(g, shaft);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.012, 5, 10), pal.reed());
  cuff.rotation.x = Math.PI / 2;
  cuff.position.y = 0.1;
  g.add(cuff);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.065, 7, 6), pal.belly());
  toe.scale.set(1.1, 0.5, 1.35);
  toe.position.set(0, -0.01, 0.09);
  add(g, toe);
  return g;
}

export function attachMireWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const cloak = createMireCloak();
    cloak.name = 'wear_mire_chest';
    cloak.visible = false;
    cloak.position.set(0, 0.02, 0.03);
    cloak.scale.setScalar(1.02);
    torso.add(cloak);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createMireBoot();
    boot.name = side < 0 ? 'wear_mire_bootL' : 'wear_mire_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachMireDagger(toolRoot: THREE.Group): void {
  const dagger = createMireDagger();
  dagger.name = 'tool_mire_dagger';
  dagger.visible = false;
  dagger.scale.setScalar(1.12);
  toolRoot.add(dagger);
}
