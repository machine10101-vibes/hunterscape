import * as THREE from 'three';

/** Smoothstep helper */
function smooth(t: number): number {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

/** Quintic ease for heavier ease-in/out */
function easeInOut(t: number): number {
  const x = Math.max(0, Math.min(1, t));
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function get(root: THREE.Object3D, name: string): THREE.Object3D | undefined {
  return root.getObjectByName(name);
}

/** Foot-plant biased stride wave: flatter near plant, sharper lift */
function strideWave(phase: number): number {
  // phase radians; produce ≈sin but with longer ground contact
  const s = Math.sin(phase);
  const c = Math.cos(phase);
  // squash positive peak (swing) and hold near zero longer on plant side
  return s * (0.72 + 0.28 * Math.abs(c));
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

/**
 * Idle: breathing, slow weight shift, soft weapon sway.
 * Looks planted — no floaty bob.
 */
export function animatePlayerIdle(player: THREE.Group, t: number): void {
  const breath = Math.sin(t * 1.35) * 0.018;
  const shift = Math.sin(t * 0.55) * 0.022;
  const sway = Math.sin(t * 0.85) * 0.03;
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const spear = get(player, 'idleSpear');
  const tool = get(player, 'toolRoot');

  if (torso) {
    torso.rotation.x = breath * 0.9;
    torso.rotation.y = shift * 0.35;
    torso.rotation.z = shift * 0.2;
  }
  if (head) {
    head.rotation.x = breath * 0.45;
    head.rotation.y = Math.sin(t * 0.4) * 0.04;
  }
  if (armL) {
    armL.rotation.x = breath * 0.35 + 0.05;
    armL.rotation.z = 0.12 + shift * 0.4;
  }
  if (armR) {
    armR.rotation.x = -breath * 0.25 - 0.08;
    armR.rotation.z = -0.1 - shift * 0.35;
  }
  // Soft knee bend on weight-bearing side
  if (legL) {
    legL.rotation.x = shift * 0.12;
    legL.rotation.z = -shift * 0.08;
  }
  if (legR) {
    legR.rotation.x = -shift * 0.12;
    legR.rotation.z = shift * 0.08;
  }
  if (spear && spear.visible) {
    spear.rotation.z = Math.sin(t * 1.05) * 0.035;
    spear.rotation.x = sway * 0.4;
  }
  if (tool && tool.visible) {
    tool.rotation.z = Math.sin(t * 0.95) * 0.025;
    tool.rotation.x = -0.15 + breath * 0.2;
  }
  // Tiny grounded settle — not a bob
  player.position.y = breath * 0.35;
}

/**
 * Weightier walk/run cycle.
 * - Proper stride timing with foot-plant bias
 * - Hip / shoulder counter-rotation
 * - Small grounded bob (not floaty)
 * speedNorm ~0.45 crawl → 1.0 run
 * moveBlend 0→1 eases limb amplitude during accel/decel
 */
export function animatePlayerWalk(
  player: THREE.Group,
  t: number,
  speedNorm = 0.85,
  moveBlend = 1,
): void {
  const blend = Math.max(0, Math.min(1, moveBlend));
  const sn = Math.max(0.25, speedNorm);
  // Slower cadence feels weightier; run still quicker
  const freq = (5.2 + sn * 2.4) * (0.85 + blend * 0.15);
  const phase = t * freq;
  const amp = (0.42 + sn * 0.22) * blend;
  const swingL = strideWave(phase) * amp;
  const swingR = strideWave(phase + Math.PI) * amp;
  // Foot plant pulse — vertical dip on contact
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.028 * blend * sn;
  const bob = plant; // grounded, not |sin| float

  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const spear = get(player, 'idleSpear');

  if (legL) {
    legL.rotation.x = swingL;
    legL.rotation.z = Math.sin(phase) * 0.04 * blend;
  }
  if (legR) {
    legR.rotation.x = swingR;
    legR.rotation.z = -Math.sin(phase) * 0.04 * blend;
  }
  // Opposite arm swing + slight elbow carry
  if (armL) {
    armL.rotation.x = -swingL * 0.9;
    armL.rotation.z = 0.1 + Math.abs(swingL) * 0.08;
  }
  if (armR) {
    armR.rotation.x = -swingR * 0.75;
    armR.rotation.z = -0.1 - Math.abs(swingR) * 0.06;
  }
  if (torso) {
    // Hip yaw opposite to lead leg; shoulders counter via arms
    torso.rotation.y = Math.sin(phase) * 0.1 * blend;
    torso.rotation.x = -0.06 * blend - plant * 0.8;
    torso.rotation.z = Math.sin(phase) * 0.05 * blend;
  }
  if (head) {
    head.rotation.x = -bob * 1.2;
    head.rotation.y = -Math.sin(phase) * 0.04 * blend;
  }
  if (spear && spear.visible) {
    spear.rotation.x = -swingL * 0.12;
    spear.rotation.z = 0.06 + Math.sin(phase) * 0.03;
  }
  player.position.y = bob;
}

/**
 * Player sword/spear attack with readable telegraph.
 * Phases (progress 0→1):
 *  0–0.40  windup held (pull back, lean, plant feet) — telegraph window
 *  0.40–0.58 connect arc (body commit + blade through)
 *  0.58–1.0  recovery / follow-through
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
  let twist = 0;
  let plant = 0;

  if (p < 0.4) {
    // Anticipation — hold windup long enough to read
    const w = easeInOut(Math.min(1, p / 0.28));
    // Hold pose after reaching windup
    const hold = p > 0.28 ? 1 : w;
    raise = -1.15 * hold;
    slash = 0.55 * hold;
    lean = -0.18 * hold;
    twist = -0.28 * hold;
    plant = 0.2 * hold;
  } else if (p < 0.58) {
    // Strike — committed arc
    const w = easeInOut((p - 0.4) / 0.18);
    raise = -1.15 + 2.45 * w;
    slash = 0.55 - 1.55 * w;
    lean = -0.18 + 0.48 * w;
    twist = -0.28 + 0.85 * w;
    plant = 0.2 + 0.15 * w;
  } else {
    // Recovery — settle residual motion
    const w = smooth((p - 0.58) / 0.42);
    raise = 1.3 * (1 - w);
    slash = -1.0 * (1 - w);
    lean = 0.3 * (1 - w);
    twist = 0.57 * (1 - w);
    plant = 0.35 * (1 - w);
  }

  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.z = slash * 0.55;
    armR.rotation.y = twist * 0.35;
  }
  if (armL) {
    armL.rotation.x = -raise * 0.3 + lean * 0.4;
    armL.rotation.z = 0.2 + plant * 0.15;
  }
  if (tool) {
    tool.rotation.x = raise * 0.95;
    tool.rotation.z = slash * 0.65;
    tool.rotation.y = twist * 0.25;
    tool.position.set(
      0.42 + slash * 0.1,
      0.95 + raise * 0.06,
      0.15 + Math.max(0, raise) * 0.28,
    );
  }
  if (torso) {
    torso.rotation.y = twist;
    torso.rotation.x = lean;
    torso.rotation.z = slash * 0.12;
  }
  if (head) {
    head.rotation.y = twist * 0.35;
    head.rotation.x = lean * 0.4;
  }
  // Leading / trailing foot plant
  if (legL) legL.rotation.x = lean * 0.55 + plant * 0.15;
  if (legR) legR.rotation.x = -lean * 0.7 - plant * 0.25;
  player.position.y = Math.abs(lean) * 0.08;
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
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const amp = kind === 'tree' ? 1.1 : 0.95;
  if (armR) {
    armR.rotation.x = -0.55 + swing * amp;
    armR.rotation.z = -0.2 - strike * 0.28;
  }
  if (armL) {
    armL.rotation.x = 0.2 + strike * 0.35;
    armL.rotation.z = 0.25;
  }
  if (tool) {
    tool.rotation.x = swing * amp * 0.95;
    tool.rotation.z = strike * 0.4;
  }
  if (torso) {
    torso.rotation.x = strike * 0.22;
    torso.rotation.y = swing * 0.1;
  }
  if (legL) legL.rotation.x = strike * 0.12;
  if (legR) legR.rotation.x = -strike * 0.18;
}

/**
 * Hit reaction scaled by intensity (0→1 flinch, >0.65 big stagger).
 * amount decays 1→0 over the reaction window.
 */
export function animateHitFlinch(root: THREE.Object3D, amount: number, intensity = 0.55): void {
  const a = Math.max(0, Math.min(1, amount));
  const inten = Math.max(0.2, Math.min(1.4, intensity));
  const wave = Math.sin(a * Math.PI);
  // Only tip root X/Z — never touch yaw (facing must stay intact across frames)
  root.rotation.z = wave * 0.22 * inten;
  root.rotation.x = -wave * (inten > 0.7 ? 0.18 : 0.09) * inten;
  // Big stagger: twist a torso child if present (absolute set, never root yaw)
  const twist = inten > 0.7 ? wave * 0.22 * (inten - 0.7) : 0;
  const torso =
    root.getObjectByName('playerTorso') ||
    root.getObjectByName('yetiBody') ||
    root.getObjectByName('orcBody');
  if (torso) torso.rotation.y = twist;
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
 * Yeti claw swipe — long readable telegraph, heavy commit.
 * progress 0→1; connect ~0.48–0.62
 */
export function animateYetiAttack(yeti: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const armR = get(yeti, 'yetiArmR');
  const armL = get(yeti, 'yetiArmL');
  const head = get(yeti, 'yetiHead');
  const body = get(yeti, 'yetiBody');
  const legL = get(yeti, 'yetiLegL');
  const legR = get(yeti, 'yetiLegR');

  let raise = 0;
  let swipe = 0;
  let lean = 0;
  let roar = 0;

  if (p < 0.42) {
    const w = easeInOut(Math.min(1, p / 0.3));
    const hold = p > 0.3 ? 1 : w;
    raise = -1.55 * hold;
    swipe = -0.55 * hold;
    lean = -0.22 * hold;
    roar = 0.35 * hold;
  } else if (p < 0.62) {
    const w = easeInOut((p - 0.42) / 0.2);
    raise = -1.55 + 2.85 * w;
    swipe = -0.55 + 2.05 * w;
    lean = -0.22 + 0.55 * w;
    roar = 0.35 + 0.25 * w;
  } else {
    const w = smooth((p - 0.62) / 0.38);
    raise = 1.3 * (1 - w);
    swipe = 1.5 * (1 - w);
    lean = 0.33 * (1 - w);
    roar = 0.6 * (1 - w);
  }

  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.y = swipe * 0.65;
    armR.rotation.z = swipe * 0.35;
  }
  if (armL) {
    armL.rotation.x = raise * 0.65;
    armL.rotation.y = -swipe * 0.25;
    armL.rotation.z = -swipe * 0.15;
  }
  if (head) {
    head.rotation.x = -0.15 - roar * 0.45;
    head.rotation.y = swipe * 0.12;
  }
  if (body) {
    body.rotation.x = 0.2 + lean;
    body.rotation.y = swipe * 0.18;
  }
  if (legL) legL.rotation.x = lean * 0.35;
  if (legR) legR.rotation.x = -lean * 0.45;
  yeti.position.y = Math.max(0, lean) * 0.06;
}

/**
 * Orc spear thrust with full body commit.
 * progress 0→1; connect ~0.45–0.58
 */
export function animateOrcAttack(orc: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const spear = get(orc, 'orcSpear');
  const armR = get(orc, 'orcArmR');
  const armL = get(orc, 'orcArmL');
  const head = get(orc, 'orcHead');
  const body = get(orc, 'orcBody');
  const legL = get(orc, 'orcLegL');
  const legR = get(orc, 'orcLegR');

  let pull = 0;
  let thrust = 0;
  let lean = 0;

  if (p < 0.4) {
    const w = easeInOut(Math.min(1, p / 0.28));
    const hold = p > 0.28 ? 1 : w;
    pull = hold;
    thrust = -0.45 * hold;
    lean = -0.14 * hold;
  } else if (p < 0.58) {
    const w = easeInOut((p - 0.4) / 0.18);
    pull = 1 - w;
    thrust = -0.45 + 1.75 * w;
    lean = -0.14 + 0.42 * w;
  } else {
    const w = smooth((p - 0.58) / 0.42);
    pull = 0;
    thrust = 1.3 * (1 - w);
    lean = 0.28 * (1 - w);
  }

  if (spear) {
    spear.rotation.x = -thrust * 1.05;
    spear.position.z = 0.12 + thrust * 0.7 - pull * 0.32;
    spear.position.y = 0.2 + pull * 0.1 - thrust * 0.04;
  }
  if (armR) {
    armR.rotation.x = -thrust * 1.2 + pull * 0.5;
    armR.rotation.z = pull * 0.2;
    armR.rotation.y = thrust * 0.15;
  }
  if (armL) {
    armL.rotation.x = pull * 0.35 + thrust * 0.25;
    armL.rotation.z = 0.15;
  }
  if (head) {
    head.rotation.x = -thrust * 0.18 + lean * 0.3;
    head.rotation.y = thrust * 0.06;
  }
  if (body) {
    body.rotation.x = lean;
    body.rotation.y = thrust * 0.12;
  }
  // Lunging step
  if (legL) legL.rotation.x = lean * 0.5 + thrust * 0.25;
  if (legR) legR.rotation.x = -lean * 0.7 - thrust * 0.15;
  orc.position.y = Math.abs(lean) * 0.05;
}

/**
 * Yeti: lumbering heavy gait — slow cadence, deep plant, arm hang.
 */
export function animateYetiWalk(yeti: THREE.Group, t: number, moving: boolean, moveBlend = 1): void {
  const armR = get(yeti, 'yetiArmR');
  const armL = get(yeti, 'yetiArmL');
  const legL = get(yeti, 'yetiLegL');
  const legR = get(yeti, 'yetiLegR');
  const head = get(yeti, 'yetiHead');
  const body = get(yeti, 'yetiBody');
  const blend = Math.max(0, Math.min(1, moveBlend));

  if (!moving || blend < 0.05) {
    const breath = Math.sin(t * 1.15) * 0.045;
    if (armR) {
      armR.rotation.x = breath;
      armR.rotation.y = 0;
      armR.rotation.z = 0.08;
    }
    if (armL) {
      armL.rotation.x = -breath * 0.7;
      armL.rotation.y = 0;
      armL.rotation.z = -0.08;
    }
    if (legL) legL.rotation.set(0.05, 0, 0);
    if (legR) legR.rotation.set(-0.05, 0, 0);
    if (head) head.rotation.x = -0.12 + breath * 0.3;
    if (body) body.rotation.x = 0.2 + breath * 0.15;
    yeti.position.y = Math.abs(Math.sin(t * 1.2)) * 0.02;
    return;
  }

  const freq = 3.1; // slow lumber
  const phase = t * freq;
  const amp = 0.42 * blend;
  const swing = strideWave(phase) * amp;
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.05 * blend;

  if (legL) {
    legL.rotation.x = swing + 0.1;
    legL.rotation.z = Math.sin(phase) * 0.05;
  }
  if (legR) {
    legR.rotation.x = -swing + 0.1;
    legR.rotation.z = -Math.sin(phase) * 0.05;
  }
  if (armR) {
    armR.rotation.x = -swing * 0.85;
    armR.rotation.z = 0.12;
    armR.rotation.y = Math.sin(phase) * 0.08;
  }
  if (armL) {
    armL.rotation.x = swing * 0.85;
    armL.rotation.z = -0.12;
    armL.rotation.y = -Math.sin(phase) * 0.08;
  }
  if (body) {
    body.rotation.x = 0.22 + plant * 0.5;
    body.rotation.y = Math.sin(phase) * 0.08 * blend;
    body.rotation.z = Math.sin(phase) * 0.04 * blend;
  }
  if (head) {
    head.rotation.x = -0.18 - plant;
    head.rotation.y = -Math.sin(phase) * 0.05;
  }
  yeti.position.y = plant;
}

/**
 * Orc: scoutish spear-ready walk — quicker, forward lean, spear tip steady.
 */
export function animateOrcWalk(orc: THREE.Group, t: number, moving: boolean, moveBlend = 1): void {
  const armL = get(orc, 'orcArmL');
  const armR = get(orc, 'orcArmR');
  const legL = get(orc, 'orcLegL');
  const legR = get(orc, 'orcLegR');
  const spear = get(orc, 'orcSpear');
  const head = get(orc, 'orcHead');
  const body = get(orc, 'orcBody');
  const blend = Math.max(0, Math.min(1, moveBlend));

  if (!moving || blend < 0.05) {
    const breath = Math.sin(t * 1.6) * 0.028;
    orc.position.y = Math.abs(breath) * 0.5;
    if (armL) armL.rotation.x = breath;
    if (armR) armR.rotation.x = -0.35 + breath * 0.4; // spear-ready idle
    if (spear) {
      spear.rotation.x = -0.15;
      spear.position.z = 0.12;
      spear.position.y = 0.2;
    }
    if (body) body.rotation.x = 0.04;
    if (head) head.rotation.x = breath * 0.4;
    if (legL) legL.rotation.set(0, 0, 0);
    if (legR) legR.rotation.set(0, 0, 0);
    return;
  }

  const freq = 5.8;
  const phase = t * freq;
  const amp = 0.48 * blend;
  const swing = strideWave(phase) * amp;
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.032 * blend;

  if (legL) {
    legL.rotation.x = swing;
    legL.rotation.z = Math.sin(phase) * 0.04;
  }
  if (legR) {
    legR.rotation.x = -swing;
    legR.rotation.z = -Math.sin(phase) * 0.04;
  }
  // Left arm swings; right holds spear ready with small bounce
  if (armL) {
    armL.rotation.x = -swing * 0.75;
    armL.rotation.z = 0.12;
  }
  if (armR) {
    armR.rotation.x = -0.4 - swing * 0.15;
    armR.rotation.z = -0.08;
  }
  if (spear) {
    spear.rotation.x = -0.2 - swing * 0.08;
    spear.position.z = 0.14 + Math.abs(swing) * 0.04;
    spear.position.y = 0.22 + plant * 0.5;
  }
  if (body) {
    body.rotation.x = 0.08 * blend + plant * 0.4;
    body.rotation.y = Math.sin(phase) * 0.07 * blend;
  }
  if (head) {
    head.rotation.x = -0.05;
    head.rotation.y = -Math.sin(phase) * 0.04;
  }
  orc.position.y = plant;
}

/**
 * Death collapse with secondary motion (limbs settle after torso tips).
 * progress 0→1 — heavier, slower than pass1.
 */
export function animateDeath(mesh: THREE.Group, kind: 'yeti' | 'orc' | 'dummy', progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const primary = easeInOut(Math.min(1, p / 0.55));
  const secondary = smooth(Math.max(0, (p - 0.35) / 0.65));

  if (kind === 'yeti') {
    mesh.rotation.z = primary * 1.25;
    mesh.rotation.x = primary * 0.42 + secondary * 0.15;
    mesh.position.y = -primary * 0.45 - secondary * 0.12;
    mesh.scale.setScalar(1.15 * (1 - secondary * 0.12));
    const armR = get(mesh, 'yetiArmR');
    const armL = get(mesh, 'yetiArmL');
    if (armR) armR.rotation.x = secondary * 0.8;
    if (armL) armL.rotation.x = -secondary * 0.5;
    const head = get(mesh, 'yetiHead');
    if (head) head.rotation.x = -0.15 + secondary * 0.6;
  } else if (kind === 'orc') {
    mesh.rotation.x = primary * 1.45;
    mesh.rotation.z = secondary * 0.25;
    mesh.position.y = -primary * 0.18 - secondary * 0.08;
    mesh.scale.setScalar(1 - secondary * 0.22);
    const armR = get(mesh, 'orcArmR');
    const armL = get(mesh, 'orcArmL');
    if (armR) armR.rotation.x = -secondary * 0.9;
    if (armL) armL.rotation.x = secondary * 0.6;
    const spear = get(mesh, 'orcSpear');
    if (spear) {
      spear.rotation.x = secondary * 0.8;
      spear.position.y = 0.2 - secondary * 0.3;
    }
  } else {
    mesh.rotation.z = primary * 0.7;
    mesh.rotation.x = secondary * 0.2;
    mesh.position.y = -primary * 0.25 - secondary * 0.05;
  }
}

/** Attack phase helpers — longer windups, clearer connect */
export const PLAYER_ATTACK_CONNECT_START = 0.42;
export const PLAYER_ATTACK_CONNECT_END = 0.58;
export const YETI_ATTACK_CONNECT_START = 0.48;
export const YETI_ATTACK_CONNECT_END = 0.62;
export const ORC_ATTACK_CONNECT_START = 0.45;
export const ORC_ATTACK_CONNECT_END = 0.58;
export const PLAYER_ATTACK_DURATION = 0.78;
export const YETI_ATTACK_DURATION = 1.05;
export const ORC_ATTACK_DURATION = 0.82;

/** Windup ends (for telegraph lifetime) */
export const PLAYER_ATTACK_WINDUP_END = 0.4;
export const YETI_ATTACK_WINDUP_END = 0.42;
export const ORC_ATTACK_WINDUP_END = 0.4;
