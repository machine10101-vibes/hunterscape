import * as THREE from 'three';

/** Smoothstep helper */
function smooth(t: number): number {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

function get(root: THREE.Object3D, name: string): THREE.Object3D | undefined {
  return root.getObjectByName(name);
}

/** Reset player limb poses to rest (keep world rotation.y). */
export function resetPlayerPose(player: THREE.Group): void {
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const head = get(player, 'playerHead');
  const torso = get(player, 'playerTorso');
  const spear = get(player, 'idleSpear');
  const tool = get(player, 'toolRoot');
  if (legL) legL.rotation.set(0, 0, 0);
  if (legR) legR.rotation.set(0, 0, 0);
  if (armL) armL.rotation.set(0, 0, 0);
  if (armR) armR.rotation.set(0, 0, 0);
  if (head) head.rotation.set(0, 0, 0);
  if (torso) torso.rotation.set(0, 0, 0);
  if (spear) {
    spear.rotation.set(0, 0, 0);
    spear.position.set(-0.42, 0.15, 0.12);
  }
  if (tool) {
    tool.rotation.set(0, 0, 0);
    tool.position.set(0.42, 0.95, 0.15);
  }
  player.position.y = 0;
  player.rotation.z = 0;
  player.rotation.x = 0;
}

/** Idle breathing + weight shift */
export function animatePlayerIdle(player: THREE.Group, t: number): void {
  const breath = Math.sin(t * 1.6) * 0.012;
  const shift = Math.sin(t * 0.9) * 0.015;
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const spear = get(player, 'idleSpear');
  if (torso) {
    torso.rotation.x = breath * 0.8;
  }
  if (head) head.rotation.x = breath * 0.5;
  if (armL) {
    armL.rotation.x = breath * 0.4;
    armL.rotation.z = shift * 0.3;
  }
  if (armR) {
    armR.rotation.x = -breath * 0.3;
    armR.rotation.z = -shift * 0.3;
  }
  if (legL) legL.rotation.x = shift * 0.15;
  if (legR) legR.rotation.x = -shift * 0.15;
  if (spear && spear.visible) {
    spear.rotation.z = Math.sin(t * 1.2) * 0.02;
  }
  player.position.y = Math.abs(breath) * 0.5;
}

/**
 * Walk / run cycle — opposite arm/leg swing with bob.
 * speedNorm ~0.5 walk, ~1 run
 */
export function animatePlayerWalk(player: THREE.Group, t: number, speedNorm = 0.85): void {
  const freq = 7.5 * speedNorm;
  const amp = 0.55 * Math.min(1.15, speedNorm + 0.2);
  const swing = Math.sin(t * freq) * amp;
  const bob = Math.abs(Math.sin(t * freq)) * 0.07 * speedNorm;
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const spear = get(player, 'idleSpear');
  if (legL) legL.rotation.x = swing;
  if (legR) legR.rotation.x = -swing;
  if (armL) {
    armL.rotation.x = -swing * 0.85;
    armL.rotation.z = 0.08;
  }
  if (armR) {
    armR.rotation.x = swing * 0.7;
    armR.rotation.z = -0.08;
  }
  if (torso) {
    torso.rotation.y = Math.sin(t * freq) * 0.06;
    torso.rotation.x = -0.04;
  }
  if (head) head.rotation.x = -bob * 0.4;
  if (spear && spear.visible) {
    spear.rotation.x = -swing * 0.15;
    spear.rotation.z = 0.05;
  }
  player.position.y = bob;
}

/**
 * Attack swing phases (progress 0→1):
 * 0–0.28 windup, 0.28–0.48 connect window, 0.48–1 recovery
 */
export function animatePlayerAttack(player: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const armR = get(player, 'armR');
  const armL = get(player, 'armL');
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const tool = get(player, 'toolRoot');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');

  let raise = 0;
  let slash = 0;
  let lean = 0;
  if (p < 0.28) {
    // Anticipation — pull back
    const w = smooth(p / 0.28);
    raise = -0.9 * w;
    slash = 0.35 * w;
    lean = -0.12 * w;
  } else if (p < 0.48) {
    // Strike
    const w = smooth((p - 0.28) / 0.2);
    raise = -0.9 + 2.0 * w;
    slash = 0.35 - 1.1 * w;
    lean = -0.12 + 0.35 * w;
  } else {
    // Recovery
    const w = smooth((p - 0.48) / 0.52);
    raise = 1.1 * (1 - w);
    slash = -0.75 * (1 - w);
    lean = 0.23 * (1 - w);
  }

  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.z = slash * 0.4;
  }
  if (armL) {
    armL.rotation.x = -raise * 0.25;
    armL.rotation.z = 0.15;
  }
  if (tool) {
    tool.rotation.x = raise * 0.85;
    tool.rotation.z = slash * 0.5;
    tool.position.set(0.42 + slash * 0.08, 0.95 + raise * 0.05, 0.15 + Math.max(0, raise) * 0.2);
  }
  if (torso) {
    torso.rotation.y = slash * 0.35;
    torso.rotation.x = lean;
  }
  if (head) head.rotation.y = slash * 0.15;
  if (legL) legL.rotation.x = lean * 0.4;
  if (legR) legR.rotation.x = -lean * 0.5;
}

/** Gather chop/mine swing with body lean (progress loops 0→1) */
export function animatePlayerGather(player: THREE.Group, progress: number, kind: 'tree' | 'rock'): void {
  const p = progress % 1;
  const swing = Math.sin(p * Math.PI * 2);
  const strike = Math.max(0, Math.sin(p * Math.PI * 2 - 0.4));
  const armR = get(player, 'armR');
  const armL = get(player, 'armL');
  const torso = get(player, 'playerTorso');
  const tool = get(player, 'toolRoot');
  const amp = kind === 'tree' ? 1.05 : 0.9;
  if (armR) {
    armR.rotation.x = -0.55 + swing * amp;
    armR.rotation.z = -0.2 - strike * 0.25;
  }
  if (armL) {
    armL.rotation.x = 0.2 + strike * 0.3;
    armL.rotation.z = 0.25;
  }
  if (tool) {
    tool.rotation.x = swing * amp * 0.9;
    tool.rotation.z = strike * 0.35;
  }
  if (torso) {
    torso.rotation.x = strike * 0.18;
    torso.rotation.y = swing * 0.08;
  }
}

/** Hit flinch — brief lean away (amount 0→1) */
export function animateHitFlinch(root: THREE.Object3D, amount: number, awayYaw = 0): void {
  const a = Math.max(0, Math.min(1, amount));
  root.rotation.z = Math.sin(a * Math.PI) * 0.18;
  root.rotation.x = -Math.sin(a * Math.PI) * 0.08;
  // slight knockback along awayYaw (caller applies position)
  void awayYaw;
}

/** Soft look-at turn for yaw (shortest path lerp) */
export function turnTowardYaw(current: number, target: number, rate: number, dt: number): number {
  let d = target - current;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  const step = Math.sign(d) * Math.min(Math.abs(d), rate * dt);
  return current + step;
}

/**
 * Yeti swipe with clear telegraph → strike → recovery.
 * progress 0→1; connect ~0.42–0.55
 */
export function animateYetiAttack(yeti: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const armR = get(yeti, 'yetiArmR');
  const armL = get(yeti, 'yetiArmL');
  const head = get(yeti, 'yetiHead');
  let raise = 0;
  let swipe = 0;
  if (p < 0.35) {
    const w = smooth(p / 0.35);
    raise = -1.35 * w; // windup arms up
    swipe = -0.4 * w;
  } else if (p < 0.55) {
    const w = smooth((p - 0.35) / 0.2);
    raise = -1.35 + 2.4 * w;
    swipe = -0.4 + 1.6 * w;
  } else {
    const w = smooth((p - 0.55) / 0.45);
    raise = 1.05 * (1 - w);
    swipe = 1.2 * (1 - w);
  }
  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.y = swipe * 0.55;
    armR.rotation.z = swipe * 0.25;
  }
  if (armL) {
    armL.rotation.x = raise * 0.55;
    armL.rotation.y = -swipe * 0.2;
  }
  if (head) head.rotation.x = -0.15 + (p < 0.55 ? -0.25 * smooth(p / 0.55) : -0.25 * (1 - smooth((p - 0.55) / 0.45)));
}

/**
 * Orc spear thrust: pull back → lunge → recover
 * connect ~0.4–0.52
 */
export function animateOrcAttack(orc: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const spear = get(orc, 'orcSpear');
  const armR = get(orc, 'orcArmR');
  const armL = get(orc, 'orcArmL');
  const head = get(orc, 'orcHead');
  let pull = 0;
  let thrust = 0;
  if (p < 0.32) {
    const w = smooth(p / 0.32);
    pull = w;
    thrust = -0.35 * w;
  } else if (p < 0.52) {
    const w = smooth((p - 0.32) / 0.2);
    pull = 1 - w;
    thrust = -0.35 + 1.45 * w;
  } else {
    const w = smooth((p - 0.52) / 0.48);
    pull = 0;
    thrust = 1.1 * (1 - w);
  }
  if (spear) {
    spear.rotation.x = -thrust * 0.95;
    spear.position.z = 0.12 + thrust * 0.55 - pull * 0.25;
    spear.position.y = 0.2 + pull * 0.08;
  }
  if (armR) {
    armR.rotation.x = -thrust * 1.05 + pull * 0.4;
    armR.rotation.z = pull * 0.15;
  }
  if (armL) armL.rotation.x = pull * 0.25;
  if (head) head.rotation.x = -thrust * 0.12;
}

/** Heavy lumbering walk for yeti */
export function animateYetiWalk(yeti: THREE.Group, t: number, moving: boolean): void {
  const armR = get(yeti, 'yetiArmR');
  const armL = get(yeti, 'yetiArmL');
  if (!moving) {
    const breath = Math.sin(t * 1.3) * 0.04;
    if (armR) armR.rotation.x = breath;
    if (armL) armL.rotation.x = -breath * 0.6;
    yeti.position.y = Math.abs(Math.sin(t * 1.4)) * 0.03;
    return;
  }
  const swing = Math.sin(t * 4.2) * 0.35;
  if (armR) armR.rotation.x = swing;
  if (armL) armL.rotation.x = -swing;
  yeti.position.y = Math.abs(Math.sin(t * 4.2)) * 0.06;
}

/** Orc patrol / chase gait */
export function animateOrcWalk(orc: THREE.Group, t: number, moving: boolean): void {
  const armL = get(orc, 'orcArmL');
  const armR = get(orc, 'orcArmR');
  const legL = get(orc, 'orcLegL');
  const legR = get(orc, 'orcLegR');
  if (!moving) {
    const breath = Math.sin(t * 1.7) * 0.025;
    orc.position.y = Math.abs(breath);
    if (armL) armL.rotation.x = breath;
    return;
  }
  const swing = Math.sin(t * 6.5) * 0.45;
  if (legL) legL.rotation.x = swing;
  if (legR) legR.rotation.x = -swing;
  if (armL) armL.rotation.x = -swing * 0.7;
  if (armR) armR.rotation.x = swing * 0.35;
  orc.position.y = Math.abs(Math.sin(t * 6.5)) * 0.05;
}

/**
 * Death collapse progress 0→1.
 * Yeti: tip over + sink; Orc: crumple forward.
 */
export function animateDeath(mesh: THREE.Group, kind: 'yeti' | 'orc' | 'dummy', progress: number): void {
  const p = smooth(Math.max(0, Math.min(1, progress)));
  if (kind === 'yeti') {
    mesh.rotation.z = p * 1.15;
    mesh.rotation.x = p * 0.35;
    mesh.position.y = -p * 0.35;
    mesh.scale.setScalar(1.15 * (1 - p * 0.15));
  } else if (kind === 'orc') {
    mesh.rotation.x = p * 1.35;
    mesh.position.y = -p * 0.15;
    mesh.scale.setScalar(1 - p * 0.25);
  } else {
    mesh.rotation.z = p * 0.55;
    mesh.position.y = -p * 0.2;
  }
}

/** Attack phase helpers */
export const PLAYER_ATTACK_CONNECT_START = 0.3;
export const PLAYER_ATTACK_CONNECT_END = 0.48;
export const YETI_ATTACK_CONNECT_START = 0.4;
export const YETI_ATTACK_CONNECT_END = 0.55;
export const ORC_ATTACK_CONNECT_START = 0.38;
export const ORC_ATTACK_CONNECT_END = 0.52;
export const PLAYER_ATTACK_DURATION = 0.58;
export const YETI_ATTACK_DURATION = 0.72;
export const ORC_ATTACK_DURATION = 0.58;
