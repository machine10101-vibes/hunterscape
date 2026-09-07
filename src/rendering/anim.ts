import * as THREE from 'three';
import { poseEquippedTool } from './player';

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

type SpearRest = { x: number; y: number; z: number; rx: number; ry: number; rz: number };

/** Keep a hand-parented spear on its authored rest pose, plus a local offset. */
function applySpearHeld(
  spear: THREE.Object3D | undefined,
  extra: { x?: number; y?: number; z?: number; rx?: number } = {},
): void {
  if (!spear) return;
  const r = spear.userData.rest as SpearRest | undefined;
  if (!r) return;
  spear.position.set(r.x + (extra.x ?? 0), r.y + (extra.y ?? 0), r.z + (extra.z ?? 0));
  spear.rotation.set(r.rx + (extra.rx ?? 0), r.ry, r.rz);
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

function mix(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function rot(obj: THREE.Object3D | undefined, x: number, y: number, z: number): void {
  if (obj) obj.rotation.set(x, y, z);
}

/**
 * Human knee flex for this rig. Do not negate.
 *
 * Shin hangs down -Y. Three.js +rotation.x on that bone sends the ankle
 * to local -Z (heel toward the butt). Negative X kicks the shin forward
 * (bird-leg). Verified by dumping ankle world Z: +0.6 → z < 0, -0.6 → z > 0.
 */
function knee(flex: number): number {
  return Math.max(0, flex);
}

function isToolVisible(player: THREE.Group, name: string): boolean {
  const obj = get(player, name);
  return !!obj?.visible;
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
  resetLimb(get(player, 'clavL'));
  resetLimb(get(player, 'clavR'));
  resetLimb(get(player, 'armL'));
  resetLimb(get(player, 'armR'));
  resetLimb(get(player, 'forearmL'));
  resetLimb(get(player, 'forearmR'));
  resetLimb(get(player, 'handL'));
  resetLimb(get(player, 'handR'));
  resetLimb(get(player, 'playerHead'));
  resetLimb(get(player, 'playerTorso'));
  const hips = get(player, 'playerHips');
  if (hips) hips.position.set(0, 0, 0);
  const torso = get(player, 'playerTorso');
  if (torso) {
    torso.position.x = 0;
    torso.position.z = 0;
    torso.scale.set(1, 1, 1);
  }
  const spear = get(player, 'idleSpear');
  if (spear) spear.rotation.set(0.04, 0.02, 0.03);
  poseEquippedTool(player);
  player.rotation.z = 0;
  player.rotation.x = 0;
  setLocomotionY(player, 0);
}

/**
 * Idle: spear rest, or a human sword guard when the blade is drawn.
 */
export function animatePlayerIdle(player: THREE.Group, t: number): void {
  if (isToolVisible(player, 'tool_sword')) {
    animateSwordGuard(player, t);
    return;
  }

  const breath = Math.sin(t * 1.35) * 0.018;
  const shift = Math.sin(t * 0.55) * 0.032;
  const look = Math.sin(t * 0.28) * 0.08 + Math.sin(t * 0.11) * 0.04;
  const hips = get(player, 'playerHips');
  const torso = get(player, 'playerTorso');
  const spear = get(player, 'idleSpear');
  const tool = get(player, 'toolRoot');

  if (hips) {
    hips.rotation.y = shift * 0.18;
    hips.position.x = shift * 0.22;
  }
  if (torso) {
    torso.rotation.x = breath * 0.7;
    torso.rotation.y = shift * 0.22;
    torso.rotation.z = shift * 0.1;
    torso.position.x = shift * 0.14;
    torso.scale.set(1 + breath * 0.01, 1 + breath * 0.016, 1 + breath * 0.008);
  }
  rot(get(player, 'playerHead'), -0.05 + breath * 0.32, look, -shift * 0.08);
  rot(get(player, 'clavL'), 0.02, 0, -0.14 + shift * 0.04);
  rot(get(player, 'clavR'), 0.02, 0, 0.14 - shift * 0.04);
  rot(get(player, 'armL'), 0.12 + breath * 0.08, 0.04, -0.28);
  rot(get(player, 'armR'), 0.1 - breath * 0.08, -0.04, 0.28);
  rot(get(player, 'forearmL'), -0.2, 0.02, 0);
  rot(get(player, 'forearmR'), -0.16, -0.02, 0);
  rot(get(player, 'handL'), 0.08, 0.03, 0.04);
  rot(get(player, 'handR'), 0.04, 0, -0.04);
  rot(get(player, 'legL'), 0.06 + shift * 0.1, 0, 0.035);
  rot(get(player, 'legR'), -0.04 - shift * 0.08, 0, -0.035);
  rot(get(player, 'shinL'), knee(0.16 + Math.max(0, shift) * 0.12), 0, 0);
  rot(get(player, 'shinR'), knee(0.2 + Math.max(0, -shift) * 0.1), 0, 0);
  rot(get(player, 'footL'), 0.04, 0, 0);
  rot(get(player, 'footR'), 0.06, 0, 0);
  if (spear && spear.visible) {
    spear.rotation.z = 0.03 + Math.sin(t * 0.9) * 0.01;
    spear.rotation.x = 0.04 + Math.sin(t * 0.7) * 0.008;
  }
  if (tool && tool.visible) poseEquippedTool(player);
  setLocomotionY(player, breath * 0.025);
}

/** One-handed high-forward guard. Blade reads upright in front of the right shoulder. */
function animateSwordGuard(player: THREE.Group, t: number): void {
  const breath = Math.sin(t * 1.4) * 0.016;
  const sway = Math.sin(t * 0.7) * 0.012;
  rot(get(player, 'playerHips'), 0.02, -0.08 + sway, 0);
  const hips = get(player, 'playerHips');
  if (hips) hips.position.x = 0.02;
  const torso = get(player, 'playerTorso');
  if (torso) {
    torso.rotation.set(0.08 + breath * 0.5, -0.16, 0.05);
    torso.position.x = 0;
    torso.scale.set(1 + breath * 0.008, 1 + breath * 0.012, 1);
  }
  rot(get(player, 'playerHead'), -0.04 + breath * 0.2, 0.12, -0.04);
  rot(get(player, 'clavL'), 0.04, 0.06, -0.1);
  rot(get(player, 'clavR'), 0.08, -0.1, 0.1);
  rot(get(player, 'armL'), 0.28 + breath * 0.08, 0.18, -0.22);
  rot(get(player, 'forearmL'), -0.85, 0.14, 0.1);
  rot(get(player, 'handL'), 0.1, 0.05, 0.12);
  rot(get(player, 'armR'), 0.55 + breath * 0.05, -0.28, 0.12);
  rot(get(player, 'forearmR'), -1.35, 0.22, 0.12);
  rot(get(player, 'handR'), 0.22, 0.14, 0.32);
  rot(get(player, 'legL'), -0.2, 0.04, 0.05);
  rot(get(player, 'legR'), 0.08, -0.02, -0.04);
  rot(get(player, 'shinL'), knee(0.28), 0, 0);
  rot(get(player, 'shinR'), knee(0.18), 0, 0);
  rot(get(player, 'footL'), 0.06, 0, 0);
  rot(get(player, 'footR'), 0.04, 0, 0);
  poseEquippedTool(player);
  const tool = get(player, 'toolRoot');
  if (tool) {
    tool.rotation.x += breath * 0.04;
    tool.rotation.z += sway * 0.08;
  }
  setLocomotionY(player, breath * 0.02);
}

/**
 * Human walk: opposite arm/leg, knee flex on swing only, heel-toe plant.
 * Swing also pulls the thigh forward so the knee lifts in front of the hips
 * (a vertical thigh + tucked calf reads as a backward-pointing joint).
 */
export function animatePlayerWalk(
  player: THREE.Group,
  t: number,
  speedNorm = 0.85,
  moveBlend = 1,
): void {
  const blend = Math.max(0, Math.min(1, moveBlend));
  const sn = Math.max(0.25, speedNorm);
  const freq = 4.15 + sn * 1.55;
  const phase = t * freq;
  const amp = (0.4 + sn * 0.16) * blend;
  const sword = isToolVisible(player, 'tool_sword');
  const spearHeld = !!get(player, 'idleSpear')?.visible && !sword;

  const hipL = Math.sin(phase);
  const hipR = Math.sin(phase + Math.PI);
  // +hip X = thigh back. Passing/swing is back → front (cos < 0).
  const passingL = Math.max(0, -Math.cos(phase));
  const passingR = Math.max(0, -Math.cos(phase + Math.PI));
  const plantedL = Math.max(0, Math.cos(phase));
  const plantedR = Math.max(0, Math.cos(phase + Math.PI));
  // Extra calf-tuck while the thigh is still behind the hips (early swing).
  const tuckL = Math.max(0, hipL) * passingL;
  const tuckR = Math.max(0, hipR) * passingR;
  // Keep a little flex on the reaching leg so it never goose-steps locked.
  const reachL = Math.max(0, -hipL) * (1 - plantedL);
  const reachR = Math.max(0, -hipR) * (1 - plantedR);
  const plant = Math.max(0, -Math.cos(phase * 2)) * 0.018 * blend * sn;

  const hips = get(player, 'playerHips');
  const torso = get(player, 'playerTorso');
  if (hips) {
    hips.rotation.y = hipL * 0.1 * blend;
    hips.rotation.z = hipL * 0.025 * blend;
    hips.position.x = -hipL * 0.018 * blend;
  }
  rot(get(player, 'legL'), hipL * amp - passingL * 0.5, 0, 0.03);
  rot(get(player, 'legR'), hipR * amp - passingR * 0.5, 0, -0.03);
  rot(
    get(player, 'shinL'),
    knee(0.14 + passingL * (0.7 + amp * 0.22) + tuckL * 0.28 + reachL * 0.18 + plantedL * 0.1),
    0,
    0,
  );
  rot(
    get(player, 'shinR'),
    knee(0.14 + passingR * (0.7 + amp * 0.22) + tuckR * 0.28 + reachR * 0.18 + plantedR * 0.1),
    0,
    0,
  );
  rot(get(player, 'footL'), -passingL * 0.32 + plantedL * Math.max(0, hipL) * 0.24, 0, 0);
  rot(get(player, 'footR'), -passingR * 0.32 + plantedR * Math.max(0, hipR) * 0.24, 0, 0);

  rot(get(player, 'clavL'), -hipL * 0.04 * blend, 0, -0.12);
  rot(get(player, 'clavR'), -hipR * 0.04 * blend, 0, 0.12);

  if (sword) {
    rot(get(player, 'armL'), -hipL * 0.45 * blend + 0.18, 0.1, -0.18);
    rot(get(player, 'forearmL'), -0.5 - Math.max(0, hipL) * 0.2, 0.08, 0.04);
    rot(get(player, 'handL'), 0.08, 0, 0.08);
    rot(get(player, 'armR'), 0.5 - hipR * 0.05 * blend, -0.24, 0.18);
    rot(get(player, 'forearmR'), -1.32, 0.18, 0.1);
    rot(get(player, 'handR'), 0.16, 0.1, 0.24);
    poseEquippedTool(player);
  } else if (spearHeld) {
    rot(get(player, 'armL'), 0.12 - hipL * 0.08 * blend, 0.04, -0.26);
    rot(get(player, 'forearmL'), -0.2, 0.02, 0);
    rot(get(player, 'handL'), 0.06, 0.02, 0.04);
    rot(get(player, 'armR'), -hipR * 0.62 * amp * 1.4 + 0.08, -0.04, 0.26);
    rot(get(player, 'forearmR'), -0.32 - Math.max(0, hipR) * 0.45, -0.04, 0);
    rot(get(player, 'handR'), -hipR * 0.12, 0, -0.04);
  } else {
    rot(get(player, 'armL'), -hipL * 0.7 * amp * 1.35 + 0.1, 0.04, -0.26);
    rot(get(player, 'armR'), -hipR * 0.7 * amp * 1.35 + 0.1, -0.04, 0.26);
    rot(get(player, 'forearmL'), -0.35 - Math.max(0, hipL) * 0.4, 0, 0);
    rot(get(player, 'forearmR'), -0.35 - Math.max(0, hipR) * 0.4, 0, 0);
    rot(get(player, 'handL'), -hipL * 0.1, 0, 0.04);
    rot(get(player, 'handR'), -hipR * 0.1, 0, -0.04);
  }

  if (torso) {
    torso.rotation.y = -hipL * 0.12 * blend;
    torso.rotation.x = -0.06 * sn * blend - plant * 0.4;
    torso.rotation.z = hipL * 0.03 * blend;
    torso.position.x = -hipL * 0.01 * blend;
    torso.scale.set(1, 1, 1);
  }
  rot(get(player, 'playerHead'), -0.03 - plant * 0.5, hipL * 0.05 * blend, -hipL * 0.02 * blend);
  const spear = get(player, 'idleSpear');
  if (spear && spear.visible) {
    spear.rotation.set(0.04 - hipL * 0.02, 0.02, 0.03 + hipL * 0.01);
  }
  setLocomotionY(player, plant);
}

type Pose3 = { x: number; y: number; z: number };

function mixPose(a: Pose3, b: Pose3, t: number): Pose3 {
  return { x: mix(a.x, b.x, t), y: mix(a.y, b.y, t), z: mix(a.z, b.z, t) };
}

function applyPose(obj: THREE.Object3D | undefined, p: Pose3): void {
  rot(obj, p.x, p.y, p.z);
}

export function animatePlayerAttack(player: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));

  const guard = {
    armR: { x: 0.55, y: -0.28, z: -0.22 },
    forearmR: { x: -1.35, y: 0.22, z: 0.12 },
    handR: { x: 0.22, y: 0.14, z: 0.32 },
    tool: { x: Math.PI / 2, y: 0.16, z: 0.22 },
    armL: { x: 0.35, y: 0.22, z: 0.38 },
    forearmL: { x: -0.85, y: 0.14, z: 0.1 },
    torso: { x: 0.08, y: -0.16, z: 0.05 },
    hips: { x: 0.02, y: -0.08, z: 0 },
    head: { x: -0.04, y: 0.12, z: -0.04 },
    clavR: { x: 0.08, y: -0.1, z: -0.12 },
    clavL: { x: 0.04, y: 0.06, z: 0.08 },
    legL: { x: -0.2, y: 0.04, z: 0.05 },
    legR: { x: 0.08, y: -0.02, z: -0.04 },
    shinL: { x: 0.28, y: 0, z: 0 },
    shinR: { x: 0.18, y: 0, z: 0 },
  };
  const windup = {
    armR: { x: -1.05, y: -0.72, z: -0.58 },
    forearmR: { x: -1.48, y: -0.22, z: 0.12 },
    handR: { x: -0.28, y: 0.2, z: 0.42 },
    tool: { x: 1.05, y: 0.62, z: -0.45 },
    armL: { x: 0.48, y: 0.22, z: 0.42 },
    forearmL: { x: -0.78, y: 0.1, z: 0.1 },
    torso: { x: -0.16, y: -0.52, z: -0.1 },
    hips: { x: 0.04, y: -0.2, z: -0.05 },
    head: { x: -0.1, y: -0.28, z: 0.04 },
    clavR: { x: -0.12, y: -0.22, z: -0.28 },
    clavL: { x: 0.1, y: 0.12, z: 0.14 },
    legL: { x: -0.28, y: 0.06, z: 0.06 },
    legR: { x: 0.12, y: -0.04, z: -0.05 },
    shinL: { x: 0.32, y: 0, z: 0 },
    shinR: { x: 0.22, y: 0, z: 0 },
  };
  const strike = {
    armR: { x: 0.98, y: 0.58, z: 0.62 },
    forearmR: { x: -0.22, y: 0.28, z: 0.06 },
    handR: { x: 0.48, y: -0.08, z: -0.32 },
    tool: { x: 1.92, y: -0.42, z: 0.55 },
    armL: { x: -0.12, y: 0.08, z: 0.22 },
    forearmL: { x: -0.38, y: 0.06, z: 0.04 },
    torso: { x: 0.24, y: 0.58, z: 0.14 },
    hips: { x: -0.02, y: 0.22, z: 0.06 },
    head: { x: 0.1, y: 0.32, z: -0.06 },
    clavR: { x: 0.18, y: 0.16, z: 0.12 },
    clavL: { x: 0.02, y: 0.04, z: 0.08 },
    legL: { x: -0.42, y: 0.05, z: -0.05 },
    legR: { x: 0.22, y: -0.04, z: 0.04 },
    shinL: { x: 0.18, y: 0, z: 0 },
    shinR: { x: 0.38, y: 0, z: 0 },
  };

  let from = guard;
  let to = windup;
  let w = 0;
  if (p < 0.36) {
    from = guard;
    to = windup;
    w = easeInOut(p / 0.36);
  } else if (p < 0.52) {
    from = windup;
    to = strike;
    w = easeInOut((p - 0.36) / 0.16);
  } else {
    from = strike;
    to = guard;
    w = smooth((p - 0.52) / 0.48);
  }

  applyPose(get(player, 'armR'), mixPose(from.armR, to.armR, w));
  applyPose(get(player, 'forearmR'), mixPose(from.forearmR, to.forearmR, w));
  applyPose(get(player, 'handR'), mixPose(from.handR, to.handR, w));
  applyPose(get(player, 'toolRoot'), mixPose(from.tool, to.tool, w));
  applyPose(get(player, 'armL'), mixPose(from.armL, to.armL, w));
  applyPose(get(player, 'forearmL'), mixPose(from.forearmL, to.forearmL, w));
  applyPose(get(player, 'playerTorso'), mixPose(from.torso, to.torso, w));
  applyPose(get(player, 'playerHips'), mixPose(from.hips, to.hips, w));
  applyPose(get(player, 'playerHead'), mixPose(from.head, to.head, w));
  applyPose(get(player, 'clavR'), mixPose(from.clavR, to.clavR, w));
  applyPose(get(player, 'clavL'), mixPose(from.clavL, to.clavL, w));
  applyPose(get(player, 'legL'), mixPose(from.legL, to.legL, w));
  applyPose(get(player, 'legR'), mixPose(from.legR, to.legR, w));
  applyPose(get(player, 'shinL'), mixPose(from.shinL, to.shinL, w));
  applyPose(get(player, 'shinR'), mixPose(from.shinR, to.shinR, w));
  rot(get(player, 'footL'), 0.05, 0, 0);
  rot(get(player, 'footR'), 0.04, 0, 0);
  rot(get(player, 'handL'), 0.1, 0.05, 0.1);

  const hips = get(player, 'playerHips');
  if (hips) hips.position.x = 0;
  const torso = get(player, 'playerTorso');
  if (torso) {
    torso.position.x = 0;
    torso.scale.set(1, 1, 1);
  }
  const strikeAmt = p < 0.36 ? 0 : p < 0.52 ? w : 1 - w;
  setLocomotionY(player, 0.02 + strikeAmt * 0.04);
}

/** Gather chop/mine swing with body lean (progress loops 0→1) */
export function animatePlayerGather(player: THREE.Group, progress: number, kind: 'tree' | 'rock'): void {
  const p = progress % 1;
  const raise = Math.max(0, Math.sin(p * Math.PI * 2 + 0.4));
  const strike = Math.max(0, Math.sin(p * Math.PI * 2 - 0.55));
  const amp = kind === 'tree' ? 1 : 0.88;
  rot(get(player, 'armR'), -0.15 - raise * 1.15 * amp + strike * 0.85 * amp, -0.15, 0.18 - strike * 0.08);
  rot(get(player, 'forearmR'), -0.85 + strike * 0.7 - raise * 0.25, 0.1, 0.08);
  rot(get(player, 'handR'), 0.15 + strike * 0.2, 0.08, 0.2);
  rot(get(player, 'armL'), 0.25 + strike * 0.2, 0.1, -0.22);
  rot(get(player, 'forearmL'), -0.45, 0.06, 0.04);
  poseEquippedTool(player);
  const tool = get(player, 'toolRoot');
  if (tool) {
    tool.rotation.x += -raise * 0.25 + strike * 0.45;
    tool.rotation.z += strike * 0.2;
  }
  const hips = get(player, 'playerHips');
  if (hips) hips.position.x = 0;
  const torso = get(player, 'playerTorso');
  if (torso) {
    torso.rotation.x = strike * 0.22 - raise * 0.08;
    torso.rotation.y = (raise - strike) * 0.08;
    torso.position.x = 0;
    torso.scale.set(1, 1, 1);
  }
  rot(get(player, 'legL'), -strike * 0.14, 0, 0.03);
  rot(get(player, 'legR'), strike * 0.18, 0, -0.03);
  rot(get(player, 'shinL'), knee(0.16 + strike * 0.1), 0, 0);
  rot(get(player, 'shinR'), knee(0.2 + strike * 0.18), 0, 0);
  setLocomotionY(player, strike * 0.025);
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

  if (spear) applySpearHeld(spear, { rx: -thrust * 0.35, z: thrust * 0.22 - pull * 0.1, y: pull * 0.04 - thrust * 0.02 });
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
    if (armR) armR.rotation.x = -0.18 + breath * 0.4; // spear-ready idle
    if (spear) applySpearHeld(spear);
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
    armR.rotation.x = -0.22 - swing * 0.12;
    armR.rotation.z = -0.08;
  }
  if (spear) applySpearHeld(spear, { rx: -swing * 0.04, y: plant * 0.3 });
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
    if (spear) applySpearHeld(spear, { rx: secondary * 0.5, y: -secondary * 0.12 });
  } else {
    mesh.rotation.z = primary * 0.7;
    mesh.rotation.x = secondary * 0.2;
    mesh.position.y = -primary * 0.25 - secondary * 0.05;
  }
}

/** Attack phase helpers — longer windups, clearer connect */
export const PLAYER_ATTACK_CONNECT_START = 0.44;
export const PLAYER_ATTACK_CONNECT_END = 0.56;
export const YETI_ATTACK_CONNECT_START = 0.48;
export const YETI_ATTACK_CONNECT_END = 0.62;
export const ORC_ATTACK_CONNECT_START = 0.45;
export const ORC_ATTACK_CONNECT_END = 0.58;
export const PLAYER_ATTACK_DURATION = 0.78;
export const YETI_ATTACK_DURATION = 1.05;
export const ORC_ATTACK_DURATION = 0.82;

/** Windup ends (for telegraph lifetime) */
export const PLAYER_ATTACK_WINDUP_END = 0.36;
export const YETI_ATTACK_WINDUP_END = 0.42;
export const ORC_ATTACK_WINDUP_END = 0.4;
