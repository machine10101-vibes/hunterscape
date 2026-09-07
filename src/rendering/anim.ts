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
  // stronger squash on swing + longer plant hold (fidelity-pass1 weight)
  return s * (0.62 + 0.38 * Math.abs(c));
}

function setLocomotionY(player: THREE.Group, y: number): void {
  player.userData.locomotionY = y;
}

function resetLimb(obj: THREE.Object3D | undefined): void {
  if (obj) obj.rotation.set(0, 0, 0);
}

/** Reset player limb poses to rest (keep world rotation.y). */
export function resetPlayerPose(player: THREE.Group): void {
  resetLimb(get(player, 'playerHips'));
  resetLimb(get(player, 'legL'));
  resetLimb(get(player, 'legR'));
  resetLimb(get(player, 'shinL'));
  resetLimb(get(player, 'shinR'));
  resetLimb(get(player, 'footL'));
  resetLimb(get(player, 'footR'));
  resetLimb(get(player, 'armL'));
  resetLimb(get(player, 'armR'));
  resetLimb(get(player, 'forearmL'));
  resetLimb(get(player, 'forearmR'));
  resetLimb(get(player, 'playerHead'));
  resetLimb(get(player, 'playerTorso'));
  const spear = get(player, 'idleSpear');
  const tool = get(player, 'toolRoot');
  if (spear) spear.rotation.set(0.12, 0, 0.08);
  if (tool) {
    tool.rotation.set(0, 0, 0);
    tool.position.set(0.02, -0.3, 0.08);
  }
  player.rotation.z = 0;
  player.rotation.x = 0;
  setLocomotionY(player, 0);
}

/**
 * Idle: breathing, weight shift through the knees, spear rest.
 */
export function animatePlayerIdle(player: THREE.Group, t: number): void {
  const breath = Math.sin(t * 1.45) * 0.02;
  const shift = Math.sin(t * 0.62) * 0.028;
  const look = Math.sin(t * 0.35) * 0.06;
  const torso = get(player, 'playerTorso');
  const hips = get(player, 'playerHips');
  const head = get(player, 'playerHead');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const forearmL = get(player, 'forearmL');
  const forearmR = get(player, 'forearmR');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const shinL = get(player, 'shinL');
  const shinR = get(player, 'shinR');
  const spear = get(player, 'idleSpear');
  const tool = get(player, 'toolRoot');

  if (hips) hips.rotation.y = shift * 0.25;
  if (torso) {
    torso.rotation.x = breath * 0.7;
    torso.rotation.y = shift * 0.4;
    torso.rotation.z = shift * 0.18;
  }
  if (head) {
    head.rotation.x = -0.12 + breath * 0.35;
    head.rotation.y = look;
  }
  if (armL) {
    armL.rotation.x = 0.12 + breath * 0.2;
    armL.rotation.z = 0.16 + shift * 0.25;
  }
  if (armR) {
    armR.rotation.x = 0.08 - breath * 0.15;
    armR.rotation.z = -0.14 - shift * 0.2;
  }
  if (forearmL) forearmL.rotation.x = -0.22;
  if (forearmR) forearmR.rotation.x = -0.18;
  if (legL) {
    legL.rotation.x = shift * 0.1;
    legL.rotation.z = -shift * 0.06;
  }
  if (legR) {
    legR.rotation.x = -shift * 0.1;
    legR.rotation.z = shift * 0.06;
  }
  if (shinL) shinL.rotation.x = -0.14 - Math.max(0, shift) * 0.12;
  if (shinR) shinR.rotation.x = -0.14 - Math.max(0, -shift) * 0.12;
  if (spear && spear.visible) {
    spear.rotation.z = 0.08 + Math.sin(t * 1.05) * 0.03;
    spear.rotation.x = 0.12 + Math.sin(t * 0.85) * 0.02;
  }
  if (tool && tool.visible) {
    tool.rotation.z = Math.sin(t * 0.95) * 0.025;
    tool.rotation.x = -0.1 + breath * 0.15;
  }
  setLocomotionY(player, breath * 0.04);
}

/**
 * RS3-like walk: hip yaw, knee lift, elbow carry, planted bounce.
 */
export function animatePlayerWalk(
  player: THREE.Group,
  t: number,
  speedNorm = 0.85,
  moveBlend = 1,
): void {
  const blend = Math.max(0, Math.min(1, moveBlend));
  const sn = Math.max(0.25, speedNorm);
  const freq = (4.6 + sn * 2.8) * (0.88 + blend * 0.12);
  const phase = t * freq;
  const amp = (0.48 + sn * 0.28) * blend;
  const swingL = strideWave(phase) * amp;
  const swingR = strideWave(phase + Math.PI) * amp;
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.055 * blend * sn;

  const hips = get(player, 'playerHips');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const shinL = get(player, 'shinL');
  const shinR = get(player, 'shinR');
  const footL = get(player, 'footL');
  const footR = get(player, 'footR');
  const armL = get(player, 'armL');
  const armR = get(player, 'armR');
  const forearmL = get(player, 'forearmL');
  const forearmR = get(player, 'forearmR');
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const spear = get(player, 'idleSpear');

  if (hips) {
    hips.rotation.y = Math.sin(phase) * 0.12 * blend;
    hips.rotation.z = Math.sin(phase) * 0.04 * blend;
  }
  if (legL) {
    legL.rotation.x = swingL;
    legL.rotation.z = Math.sin(phase) * 0.04 * blend;
  }
  if (legR) {
    legR.rotation.x = swingR;
    legR.rotation.z = -Math.sin(phase) * 0.04 * blend;
  }
  // Knee bends on the passing / lifted leg
  if (shinL) shinL.rotation.x = -0.16 - Math.max(0, swingL) * 1.1 - plant * 0.25;
  if (shinR) shinR.rotation.x = -0.16 - Math.max(0, swingR) * 1.1 - plant * 0.25;
  if (footL) footL.rotation.x = Math.max(0, swingL) * 0.4;
  if (footR) footR.rotation.x = Math.max(0, swingR) * 0.4;

  if (armL) {
    armL.rotation.x = -swingL * 0.85 + 0.08;
    armL.rotation.z = 0.12 + Math.abs(swingL) * 0.08;
  }
  if (armR) {
    armR.rotation.x = -swingR * 0.85 + 0.08;
    armR.rotation.z = -0.12 - Math.abs(swingR) * 0.08;
  }
  if (forearmL) forearmL.rotation.x = -0.28 - Math.abs(swingL) * 0.35;
  if (forearmR) forearmR.rotation.x = -0.28 - Math.abs(swingR) * 0.35;

  if (torso) {
    torso.rotation.y = -Math.sin(phase) * 0.14 * blend;
    torso.rotation.x = -0.1 * blend - plant * 0.9;
    torso.rotation.z = Math.sin(phase) * 0.05 * blend;
  }
  if (head) {
    head.rotation.x = -0.12 - plant * 1.2;
    head.rotation.y = Math.sin(phase) * 0.05 * blend;
  }
  if (spear && spear.visible) {
    spear.rotation.x = 0.12 - swingL * 0.08;
    spear.rotation.z = 0.08 + Math.sin(phase) * 0.03;
  }
  setLocomotionY(player, plant);
}


export function animatePlayerAttack(player: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));
  const armR = get(player, 'armR');
  const armL = get(player, 'armL');
  const forearmR = get(player, 'forearmR');
  const forearmL = get(player, 'forearmL');
  const torso = get(player, 'playerTorso');
  const head = get(player, 'playerHead');
  const tool = get(player, 'toolRoot');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const shinL = get(player, 'shinL');
  const shinR = get(player, 'shinR');

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
    raise = -1.25 * hold;
    slash = 0.62 * hold;
    lean = -0.24 * hold;
    twist = -0.36 * hold;
    plant = 0.28 * hold;
  } else if (p < 0.58) {
    // Strike — heavier body commit through the arc
    const w = easeInOut((p - 0.4) / 0.18);
    raise = -1.25 + 2.65 * w;
    slash = 0.62 - 1.7 * w;
    lean = -0.24 + 0.62 * w;
    twist = -0.36 + 1.05 * w;
    plant = 0.28 + 0.22 * w;
  } else {
    // Recovery — settle residual motion
    const w = smooth((p - 0.58) / 0.42);
    raise = 1.4 * (1 - w);
    slash = -1.08 * (1 - w);
    lean = 0.38 * (1 - w);
    twist = 0.69 * (1 - w);
    plant = 0.5 * (1 - w);
  }

  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.z = slash * 0.55;
    armR.rotation.y = twist * 0.35;
  }
  if (forearmR) forearmR.rotation.x = -0.15 + Math.max(0, -raise) * 0.55 + Math.max(0, raise) * 0.4;
  if (armL) {
    armL.rotation.x = -raise * 0.28 + lean * 0.45;
    armL.rotation.z = 0.2 + plant * 0.18;
  }
  if (forearmL) forearmL.rotation.x = -0.25;
  if (tool) {
    tool.rotation.x = raise * 0.35;
    tool.rotation.z = slash * 0.45;
    tool.rotation.y = twist * 0.2;
  }
  if (torso) {
    torso.rotation.y = twist;
    torso.rotation.x = lean;
    torso.rotation.z = slash * 0.16;
  }
  if (head) {
    head.rotation.y = twist * 0.4;
    head.rotation.x = -0.12 + lean * 0.45;
  }
  if (legL) {
    legL.rotation.x = lean * 0.55 + plant * 0.2;
    legL.rotation.z = -plant * 0.08;
  }
  if (legR) {
    legR.rotation.x = -lean * 0.7 - plant * 0.3;
    legR.rotation.z = plant * 0.06;
  }
  if (shinL) shinL.rotation.x = -0.18 - plant * 0.35;
  if (shinR) shinR.rotation.x = -0.22 - plant * 0.5;
  setLocomotionY(player, Math.abs(lean) * 0.08 + plant * 0.03);
}

/** Gather chop/mine swing with body lean (progress loops 0→1) */
export function animatePlayerGather(player: THREE.Group, progress: number, kind: 'tree' | 'rock'): void {
  const p = progress % 1;
  const swing = Math.sin(p * Math.PI * 2);
  const strike = Math.max(0, Math.sin(p * Math.PI * 2 - 0.4));
  const armR = get(player, 'armR');
  const armL = get(player, 'armL');
  const forearmR = get(player, 'forearmR');
  const torso = get(player, 'playerTorso');
  const tool = get(player, 'toolRoot');
  const legL = get(player, 'legL');
  const legR = get(player, 'legR');
  const shinL = get(player, 'shinL');
  const shinR = get(player, 'shinR');
  const amp = kind === 'tree' ? 1.15 : 1.0;
  if (armR) {
    armR.rotation.x = -0.35 + swing * amp;
    armR.rotation.z = -0.18 - strike * 0.25;
  }
  if (forearmR) forearmR.rotation.x = -0.2 + strike * 0.7;
  if (armL) {
    armL.rotation.x = 0.18 + strike * 0.3;
    armL.rotation.z = 0.22;
  }
  if (tool) {
    tool.rotation.x = swing * amp * 0.45;
    tool.rotation.z = strike * 0.3;
  }
  if (torso) {
    torso.rotation.x = strike * 0.2;
    torso.rotation.y = swing * 0.1;
  }
  if (legL) legL.rotation.x = strike * 0.12;
  if (legR) legR.rotation.x = -strike * 0.18;
  if (shinL) shinL.rotation.x = -0.16 - strike * 0.12;
  if (shinR) shinR.rotation.x = -0.2 - strike * 0.2;
  setLocomotionY(player, strike * 0.03);
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
  // Stronger tip/recoil than pass3 without touching position.y (walk/attack own that)
  root.rotation.z = wave * 0.3 * inten;
  root.rotation.x = -wave * (inten > 0.7 ? 0.24 : 0.13) * inten;
  // Big stagger: twist a torso child if present (absolute set, never root yaw)
  const twist = inten > 0.7 ? wave * 0.3 * (inten - 0.7) : wave * 0.08 * inten;
  const torso =
    root.getObjectByName('playerTorso') ||
    root.getObjectByName('yetiBody') ||
    root.getObjectByName('orcBody');
  if (torso) {
    torso.rotation.y = twist;
    torso.rotation.x = -wave * 0.1 * inten;
  }
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
    raise = -1.65 * hold;
    swipe = -0.62 * hold;
    lean = -0.28 * hold;
    roar = 0.4 * hold;
  } else if (p < 0.62) {
    const w = easeInOut((p - 0.42) / 0.2);
    raise = -1.65 + 3.05 * w;
    swipe = -0.62 + 2.2 * w;
    lean = -0.28 + 0.7 * w;
    roar = 0.4 + 0.3 * w;
  } else {
    const w = smooth((p - 0.62) / 0.38);
    raise = 1.4 * (1 - w);
    swipe = 1.58 * (1 - w);
    lean = 0.42 * (1 - w);
    roar = 0.7 * (1 - w);
  }

  if (armR) {
    armR.rotation.x = raise;
    armR.rotation.y = swipe * 0.7;
    armR.rotation.z = swipe * 0.4;
  }
  if (armL) {
    armL.rotation.x = raise * 0.7;
    armL.rotation.y = -swipe * 0.3;
    armL.rotation.z = -swipe * 0.18;
  }
  if (head) {
    head.rotation.x = -0.15 - roar * 0.5;
    head.rotation.y = swipe * 0.14;
  }
  if (body) {
    body.rotation.x = 0.2 + lean;
    body.rotation.y = swipe * 0.22;
  }
  if (legL) legL.rotation.x = lean * 0.45;
  if (legR) legR.rotation.x = -lean * 0.55;
  yeti.position.y = Math.max(0, lean) * 0.08;
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
    thrust = -0.52 * hold;
    lean = -0.2 * hold;
  } else if (p < 0.58) {
    const w = easeInOut((p - 0.4) / 0.18);
    pull = 1 - w;
    thrust = -0.52 + 1.95 * w;
    lean = -0.2 + 0.55 * w;
  } else {
    const w = smooth((p - 0.58) / 0.42);
    pull = 0;
    thrust = 1.43 * (1 - w);
    lean = 0.35 * (1 - w);
  }

  if (spear) {
    spear.rotation.x = -thrust * 1.12;
    spear.position.z = 0.12 + thrust * 0.82 - pull * 0.38;
    spear.position.y = 0.2 + pull * 0.12 - thrust * 0.05;
  }
  if (armR) {
    armR.rotation.x = -thrust * 1.3 + pull * 0.55;
    armR.rotation.z = pull * 0.25;
    armR.rotation.y = thrust * 0.18;
  }
  if (armL) {
    armL.rotation.x = pull * 0.4 + thrust * 0.3;
    armL.rotation.z = 0.18;
  }
  if (head) {
    head.rotation.x = -thrust * 0.22 + lean * 0.35;
    head.rotation.y = thrust * 0.08;
  }
  if (body) {
    body.rotation.x = lean;
    body.rotation.y = thrust * 0.16;
  }
  // Lunging step — clearer front-foot plant
  if (legL) {
    legL.rotation.x = lean * 0.65 + thrust * 0.32;
    legL.rotation.z = -lean * 0.05;
  }
  if (legR) {
    legR.rotation.x = -lean * 0.85 - thrust * 0.2;
    legR.rotation.z = lean * 0.04;
  }
  orc.position.y = Math.abs(lean) * 0.07;
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
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.065 * blend;

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
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.042 * blend;

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
