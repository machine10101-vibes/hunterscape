import * as THREE from 'three';

/**
 * Bone kit. Barrow bones and a skull chip, cut like the mire set:
 * a real edge, a worn mesh, and a portrait that shares those parts.
 * The sword uses the camp sword handshake (edge along +Y).
 */

function phys(
  color: number,
  opts: Partial<THREE.MeshPhysicalMaterialParameters> = {},
): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.62,
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
  bone: () => phys(0xe6decc, { roughness: 0.55 }),
  old: () => phys(0xc4b8a0, { roughness: 0.7 }),
  socket: () => phys(0x2a2018, { roughness: 0.8 }),
  copper: () => phys(0xc47a3a, { metalness: 0.7, roughness: 0.32, clearcoat: 0.2, flatShading: false }),
  cloth: () => phys(0x3a342c, { roughness: 0.9 }),
};

/** A cracked long bone. */
export function createBonesItem(): THREE.Group {
  const g = new THREE.Group();
  for (const [x, rot] of [[-0.04, 0.3], [0.05, -0.4]] as const) {
    const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.28, 5), pal.bone());
    bone.rotation.z = Math.PI / 2 + rot;
    bone.position.x = x;
    add(g, bone);
    for (const end of [-0.13, 0.13]) {
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.028, 5, 4), pal.old());
      knob.position.set(0, end, 0);
      bone.add(knob);
    }
  }
  return g;
}

/** A forehead plate with dark sockets. */
export function createSkullChipItem(): THREE.Group {
  const g = new THREE.Group();
  const plate = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), pal.bone());
  add(g, plate);
  for (const x of [-0.025, 0.025]) {
    const hole = new THREE.Mesh(new THREE.SphereGeometry(0.014, 5, 4), pal.socket());
    hole.position.set(x, 0.01, 0.05);
    add(g, hole);
  }
  return g;
}

/** Pale bone sword. Blade along +Y so the camp sword grip applies. */
export function createBoneSword(): THREE.Group {
  const g = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.12, 6), pal.cloth());
  grip.position.y = 0.04;
  add(g, grip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.016, 0.02), pal.copper());
  guard.position.y = 0.11;
  add(g, guard);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.42, 0.016), pal.bone());
  blade.position.y = 0.33;
  add(g, blade);
  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.32, 0.02), pal.old());
  fuller.position.y = 0.32;
  g.add(fuller);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.08, 4), pal.bone());
  tip.name = 'toolEdge';
  tip.position.y = 0.58;
  add(g, tip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 5), pal.bone());
  pommel.name = 'toolHeel';
  pommel.position.y = -0.04;
  add(g, pommel);
  const chip = new THREE.Mesh(new THREE.SphereGeometry(0.012, 4, 3), pal.socket());
  chip.position.set(0.01, -0.03, 0.02);
  g.add(chip);
  return g;
}

/** A ribcage cuirass on dark cloth. */
export function createBoneRibs(): THREE.Group {
  const g = new THREE.Group();
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.36, 0.08), pal.cloth());
  cloth.position.y = 0.02;
  add(g, cloth);
  for (const y of [-0.08, 0.02, 0.12]) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.012, 4, 8, Math.PI), pal.bone());
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0, y, 0.05);
    g.add(rib);
  }
  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.028, 5, 4), pal.copper());
  clasp.position.set(0, 0.16, 0.07);
  add(g, clasp);
  return g;
}

/** Bone-plated boot with a copper nail. */
export function createBoneBoot(): THREE.Group {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.084, 0.12, 7), pal.cloth());
  shaft.position.y = 0.04;
  add(g, shaft);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.12), pal.bone());
  plate.position.set(0, 0.02, 0.04);
  add(g, plate);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 5), pal.old());
  toe.scale.set(1.05, 0.45, 1.2);
  toe.position.set(0, 0, 0.1);
  add(g, toe);
  const nail = new THREE.Mesh(new THREE.SphereGeometry(0.012, 4, 3), pal.copper());
  nail.position.set(0, 0.02, 0.14);
  add(g, nail);
  return g;
}

export function attachBoneWear(player: THREE.Group): void {
  const torso = player.getObjectByName('playerTorso');
  if (torso) {
    const ribs = createBoneRibs();
    ribs.name = 'wear_bone_chest';
    ribs.visible = false;
    ribs.position.set(0, 0.02, 0.04);
    ribs.scale.setScalar(1.02);
    torso.add(ribs);
  }
  for (const side of [-1, 1] as const) {
    const foot = player.getObjectByName(side < 0 ? 'footL' : 'footR');
    if (!foot) continue;
    const boot = createBoneBoot();
    boot.name = side < 0 ? 'wear_bone_bootL' : 'wear_bone_bootR';
    boot.visible = false;
    boot.position.set(0, 0.02, 0.02);
    boot.scale.setScalar(1.15);
    foot.add(boot);
  }
}

export function attachBoneSword(toolRoot: THREE.Group): void {
  const sword = createBoneSword();
  sword.name = 'tool_bone_sword';
  sword.visible = false;
  sword.scale.setScalar(1.12);
  toolRoot.add(sword);
}
