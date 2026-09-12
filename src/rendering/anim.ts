import * as THREE from 'three';
import { poseEquippedTool, setHandGrip } from './player';

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

/**
 * Keyframe plumbing for the hunter.
 *
 * A BodyPose is a sparse set of joint Eulers plus the two grip values and a
 * root lift. Omitted joints read as zero, so poses only list what they move and
 * blending two poses is a straight per-channel lerp.
 */
const JOINTS = [
  'playerHips',
  'playerTorso',
  'playerHead',
  'clavL',
  'clavR',
  'armL',
  'forearmL',
  'handL',
  'armR',
  'forearmR',
  'handR',
  'legL',
  'shinL',
  'footL',
  'legR',
  'shinR',
  'footR',
] as const;

type Joint = (typeof JOINTS)[number];
type Rot3 = readonly [number, number, number];
type BodyPose = Partial<Record<Joint, Rot3>> & {
  /** Right-hand finger closure, 0 open → 1.05 clenched. */
  gripR?: number;
  gripL?: number;
  /** Root rise/fall in metres, routed through locomotionY. */
  lift?: number;
};

const ZERO: Rot3 = [0, 0, 0];

function mixRot(a: Rot3 | undefined, b: Rot3 | undefined, t: number): Rot3 {
  const x = a ?? ZERO;
  const y = b ?? ZERO;
  return [mix(x[0], y[0], t), mix(x[1], y[1], t), mix(x[2], y[2], t)];
}

function blendPose(a: BodyPose, b: BodyPose, t: number): BodyPose {
  const out: BodyPose = {};
  for (const j of JOINTS) {
    if (a[j] || b[j]) out[j] = mixRot(a[j], b[j], t);
  }
  out.gripR = mix(a.gripR ?? 0.25, b.gripR ?? 0.25, t);
  out.gripL = mix(a.gripL ?? 0.25, b.gripL ?? 0.25, t);
  out.lift = mix(a.lift ?? 0, b.lift ?? 0, t);
  return out;
}

function applyBodyPose(player: THREE.Group, pose: BodyPose): void {
  for (const j of JOINTS) {
    const r = pose[j] ?? ZERO;
    const obj = get(player, j);
    if (!obj) continue;
    // Shins may only fold one way; see knee().
    obj.rotation.set(j === 'shinL' || j === 'shinR' ? knee(r[0]) : r[0], r[1], r[2]);
  }
  const hips = get(player, 'playerHips');
  if (hips) hips.position.set(0, 0, 0);
  const torso = get(player, 'playerTorso');
  if (torso) {
    torso.position.x = 0;
    torso.position.z = 0;
    torso.scale.set(1, 1, 1);
  }
  setHandGrip(get(player, 'handR'), pose.gripR ?? 0.25);
  setHandGrip(get(player, 'handL'), pose.gripL ?? 0.25);
  poseEquippedTool(player);
  setLocomotionY(player, pose.lift ?? 0);
}

const SMOOTHED_JOINTS = [
  'playerHips', 'playerTorso', 'playerHead',
  'clavL', 'clavR', 'armL', 'armR', 'forearmL', 'forearmR', 'handL', 'handR',
  'legL', 'legR', 'shinL', 'shinR', 'footL', 'footR',
];

/**
 * Exponential low-pass over the joint rotations, run after whichever clip
 * posed the body this frame. The clips are authored independently, so the
 * hand-offs between them — walk to idle, idle to guard, swing back to guard —
 * used to land as one-frame snaps. This turns each into a short ease without
 * touching the clips themselves. Wrist and finger curl are left alone.
 */
export class PoseSmoother {
  private prev = new Map<string, THREE.Euler>();

  reset(): void {
    this.prev.clear();
  }

  /** `rate` is 1/τ in seconds; 18 gives a ~55 ms ease. */
  apply(player: THREE.Group, dt: number, rate = 18): void {
    const k = 1 - Math.exp(-rate * Math.max(0, dt));
    for (const name of SMOOTHED_JOINTS) {
      const o = get(player, name);
      if (!o) continue;
      const p = this.prev.get(name);
      if (!p) {
        this.prev.set(name, o.rotation.clone());
        continue;
      }
      o.rotation.set(
        p.x + (o.rotation.x - p.x) * k,
        p.y + (o.rotation.y - p.y) * k,
        p.z + (o.rotation.z - p.z) * k,
      );
      p.copy(o.rotation);
    }
    poseEquippedTool(player);
  }
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
  setHandGrip(get(player, 'handR'), isToolVisible(player, 'tool_sword') ? 0.96 : 0.22);
  setHandGrip(get(player, 'handL'), 0.22);
  poseEquippedTool(player);
  player.rotation.z = 0;
  player.rotation.x = 0;
  setLocomotionY(player, 0);
}

/**
 * Relaxed idle. Weight drifts between the feet on a slow cycle, breathing runs
 * on a faster one, and the head look is two detuned sines — overlapping periods
 * are what stop a procedural idle reading as a metronome.
 */
export function animatePlayerIdle(player: THREE.Group, t: number, ready = false): void {
  if (isToolVisible(player, 'tool_sword')) {
    animateSwordGuard(player, t);
    return;
  }

  const breath = Math.sin(t * 1.35) * 0.018;
  const shift = Math.sin(t * 0.55) * 0.018;
  const drift = Math.sin(t * 0.37 + 1.1) * 0.012;
  const look = Math.sin(t * 0.28) * 0.08 + Math.sin(t * 0.11) * 0.04;
  const hips = get(player, 'playerHips');
  const torso = get(player, 'playerTorso');

  if (hips) {
    hips.rotation.set(0, shift * 0.12, shift * 0.1);
    hips.position.set(shift * 0.08, 0, 0);
  }
  if (torso) {
    torso.rotation.set(0.015 + breath * 0.55, shift * 0.1, shift * 0.04 - drift * 0.06);
    torso.position.x = 0;
    torso.position.z = 0;
    torso.scale.set(1 + breath * 0.008, 1 + breath * 0.014, 1 + breath * 0.006);
  }
  rot(get(player, 'playerHead'), -0.04 + breath * 0.28, look, -shift * 0.06);
  rot(get(player, 'clavL'), 0.02, 0, -0.02);
  rot(get(player, 'clavR'), 0.02, 0, 0.02);
  // Arms hang a little away from the ribs with a soft elbow, the way a relaxed
  // arm actually rests. Dead straight and glued to the side reads as a mannequin
  // and, from the game camera, disappears behind the shoulder.
  rot(get(player, 'armL'), 0.08 + breath * 0.05, 0.06, -0.13 + drift * 0.08);
  rot(get(player, 'forearmL'), -0.24 + drift * 0.06, 0.08, -0.03);
  rot(get(player, 'handL'), 0.06, 0.06, 0.02);
  rot(get(player, 'armR'), 0.08 - breath * 0.05, -0.06, 0.13 - drift * 0.08);
  rot(get(player, 'forearmR'), -0.24 - drift * 0.06, -0.08, 0.03);
  rot(get(player, 'handR'), 0.06, -0.06, -0.02);
  rot(get(player, 'legL'), 0.02 + shift * 0.04, 0, 0.02);
  rot(get(player, 'legR'), -0.01 - shift * 0.04, 0, -0.02);
  rot(get(player, 'shinL'), knee(0.06 + Math.max(0, shift) * 0.04), 0, 0);
  rot(get(player, 'shinR'), knee(0.08 + Math.max(0, -shift) * 0.04), 0, 0);
  rot(get(player, 'footL'), 0.02, 0, 0);
  rot(get(player, 'footR'), 0.03, 0, 0);
  setHandGrip(get(player, 'handL'), 0.2);
  setHandGrip(get(player, 'handR'), 0.2);
  setLocomotionY(player, breath * 0.02);
}

/**
 * Shared sword-ready stance. Every sword pose in the game starts and ends here
 * so drawing, walking and swinging never pop. The numbers came out of the
 * repo's pose solver: the blade is welded into the fist, and the angles below
 * are what actually put the tip upright in front of the chest.
 */
const SWORD_GUARD: BodyPose = {
  playerHips: [0.02, -0.1, 0.02],
  playerTorso: [0.08, -0.2, 0.04],
  playerHead: [-0.04, 0.18, -0.04],
  clavR: [0.1, -0.12, -0.1],
  clavL: [0.04, 0.08, 0.08],
  // Sword arm hangs beside the hip with the elbow out and the forearm level;
  // the blade crosses up and forward. Solved against the sword's own tip
  // (hand ≈ (0.42, 1.05, 0.32), tip ≈ (0.04, 1.6, 0.83)).
  armR: [-0.075, 0.32, 0.533],
  forearmR: [-1.887, -0.185, 0.06],
  handR: [0.622, -1.425, -0.209],
  // Off hand comes forward as a guard rather than hanging behind the hip.
  armL: [-0.7, 0.15, -0.3],
  forearmL: [-1.15, 0.1, 0],
  handL: [0.1, 0.2, 0.1],
  legL: [-0.22, 0.06, 0.05],
  shinL: [0.3, 0, 0],
  footL: [0.06, 0.1, 0],
  legR: [0.12, -0.04, -0.04],
  shinR: [0.2, 0, 0],
  footR: [0.04, -0.08, 0],
  gripR: 0.96,
  gripL: 0.3,
  lift: 0.02,
};

/** One-handed guard with breathing and a slow settle on the blade. */
function animateSwordGuard(player: THREE.Group, t: number): void {
  const breath = Math.sin(t * 1.4) * 0.016;
  const sway = Math.sin(t * 0.7) * 0.012;
  const settle = Math.sin(t * 0.43 + 0.6) * 0.02;
  const g = SWORD_GUARD;
  rot(get(player, 'playerHips'), g.playerHips![0], g.playerHips![1] + sway, g.playerHips![2]);
  const hips = get(player, 'playerHips');
  if (hips) hips.position.x = 0.02;
  const torso = get(player, 'playerTorso');
  if (torso) {
    torso.rotation.set(g.playerTorso![0] + breath * 0.5, g.playerTorso![1] + sway * 0.5, g.playerTorso![2]);
    torso.position.x = 0;
    torso.scale.set(1 + breath * 0.008, 1 + breath * 0.012, 1);
  }
  rot(get(player, 'playerHead'), g.playerHead![0] + breath * 0.2, g.playerHead![1], g.playerHead![2]);
  rot(get(player, 'clavL'), ...(g.clavL as Rot3));
  rot(get(player, 'clavR'), ...(g.clavR as Rot3));
  rot(get(player, 'armL'), g.armL![0] + breath * 0.08, g.armL![1], g.armL![2]);
  rot(get(player, 'forearmL'), ...(g.forearmL as Rot3));
  rot(get(player, 'handL'), ...(g.handL as Rot3));
  rot(get(player, 'armR'), g.armR![0] + settle * 0.6, g.armR![1], g.armR![2]);
  rot(get(player, 'forearmR'), g.forearmR![0] - settle * 0.5, g.forearmR![1], g.forearmR![2]);
  rot(get(player, 'handR'), g.handR![0] + settle, g.handR![1], g.handR![2] + sway * 0.6);
  rot(get(player, 'legL'), ...(g.legL as Rot3));
  rot(get(player, 'legR'), ...(g.legR as Rot3));
  rot(get(player, 'shinL'), knee(g.shinL![0]), 0, 0);
  rot(get(player, 'shinR'), knee(g.shinR![0]), 0, 0);
  rot(get(player, 'footL'), ...(g.footL as Rot3));
  rot(get(player, 'footR'), ...(g.footR as Rot3));
  setHandGrip(get(player, 'handR'), 0.97);
  setHandGrip(get(player, 'handL'), 0.3);
  poseEquippedTool(player);
  setLocomotionY(player, breath * 0.02);
}

/**
 * Ground locomotion, blended from a walk to a run by speed.
 *
 * Two independent blends drive it: `gait` sets cadence and stride length across
 * the whole speed range, and `run` swaps the *style* — a walk keeps the pelvis
 * highest at mid-stance and the arms long, while a run inverts the bob for a
 * flight phase, locks the elbows near 90°, drives the knees much higher and
 * lands on the forefoot instead of the heel.
 */
/** Hip-to-sole length of the hunter rig, used to tie cadence to ground speed. */
const LEG_LENGTH = 0.94;
/** Hip swing amplitude at full run. Longer strides keep the cadence human at 4.2 u/s. */
const RUN_STRIDE = 0.82;

function gaitOf(speedNorm: number): number {
  return smooth((Math.max(0.25, speedNorm) - 0.3) / 0.68);
}

/** Nominal cadence in rad/s for a gait, for callers with no ground speed. */
export function walkFrequency(speedNorm: number): number {
  return mix(3.4, 7.2, gaitOf(speedNorm));
}

/**
 * Ground covered per step (half a cycle) at this gait, in world units. The
 * caller advances the phase by π·speed/step per second so the planted foot
 * stays put instead of skating.
 */
export function walkStepLength(speedNorm: number): number {
  const stride = mix(0.3, RUN_STRIDE, gaitOf(speedNorm));
  return 2 * LEG_LENGTH * Math.sin(stride) * 0.92;
}

/**
 * `phase` is the gait phase in radians, owned by the caller. Deriving it from
 * wall time × a speed-dependent frequency made the legs spin through dozens of
 * cycles every time the speed ramped, because t was already large.
 */
export function animatePlayerWalk(
  player: THREE.Group,
  phase: number,
  speedNorm = 0.85,
  moveBlend = 1,
): void {
  const blend = Math.max(0, Math.min(1, moveBlend));
  const sn = Math.max(0.25, speedNorm);
  const gait = gaitOf(sn);
  const run = smooth((sn - 0.62) / 0.4);
  const stride = mix(0.3, RUN_STRIDE, gait) * blend;
  const sword = isToolVisible(player, 'tool_sword');

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

  // +1 at mid-stance, -1 at the double-support / flight window. A walk rides
  // high over the planted leg; a run is lowest there and highest in flight.
  const bob = Math.cos(phase * 2);
  const lift = mix(bob * 0.016, -bob * 0.052, run) * blend;

  const kneeLift = mix(0.72, 1.95, run);
  const absorb = mix(0.08, 0.42, run);

  const hips = get(player, 'playerHips');
  const torso = get(player, 'playerTorso');
  if (hips) {
    hips.rotation.y = hipL * mix(0.09, 0.2, run) * blend;
    // Pelvis drops toward the swinging leg (Trendelenburg), harder at speed.
    hips.rotation.z = -Math.cos(phase) * mix(0.03, 0.075, run) * blend;
    hips.rotation.x = mix(0, 0.1, run) * blend;
    hips.position.x = -hipL * 0.018 * blend;
  }

  const thigh = mix(0.5, 0.95, run);
  rot(get(player, 'legL'), hipL * stride - passingL * thigh, 0, 0.03 - run * 0.02);
  rot(get(player, 'legR'), hipR * stride - passingR * thigh, 0, -0.03 + run * 0.02);
  rot(
    get(player, 'shinL'),
    knee(0.12 + passingL * kneeLift + tuckL * 0.4 + reachL * 0.18 + plantedL * absorb),
    0,
    0,
  );
  rot(
    get(player, 'shinR'),
    knee(0.12 + passingR * kneeLift + tuckR * 0.4 + reachR * 0.18 + plantedR * absorb),
    0,
    0,
  );
  // Negative foot X = toes up (heel strike), positive = toes down (toe-off).
  const heel = mix(0.34, 0.1, run);
  const toeOff = mix(0.26, 0.62, run);
  rot(get(player, 'footL'), -passingL * heel + plantedL * Math.max(0, hipL) * toeOff + run * 0.12, 0, 0);
  rot(get(player, 'footR'), -passingR * heel + plantedR * Math.max(0, hipR) * toeOff + run * 0.12, 0, 0);

  const shoulderTwist = mix(0.05, 0.16, run);
  rot(get(player, 'clavL'), -hipL * shoulderTwist * blend, 0, -0.04);
  rot(get(player, 'clavR'), -hipR * shoulderTwist * blend, 0, 0.04);

  if (sword) {
    // Blade stays in a lowered carry while moving; only the off arm swings.
    const bounce = Math.max(0, hipR) * mix(0.08, 0.22, run);
    rot(get(player, 'armL'), -hipL * mix(0.55, 1.05, run) * blend + 0.1, 0.06, -0.06);
    rot(get(player, 'forearmL'), mix(-0.28, -1.35, run) - Math.max(0, hipL) * 0.2, 0.04, 0);
    rot(get(player, 'handL'), 0.06, 0.04, 0.04);
    rot(get(player, 'armR'), 0.22 + bounce * 0.35, 0.08, 0.14);
    rot(get(player, 'forearmR'), -0.62 - bounce * 0.4, -0.06, 0.04);
    rot(get(player, 'handR'), 0.18 + bounce * 0.2, -1.18, -0.26);
    setHandGrip(get(player, 'handR'), 0.96);
    setHandGrip(get(player, 'handL'), 0.22);
  } else {
    // Free arms: long and pendular at a walk, folded and pumping at a run.
    // Shoulders swing about as far as the hips at a walk and a little less
    // than the hips at a run, where the elbows are folded.
    const swing = stride * mix(1.0, 0.85, run);
    const fold = mix(0, 1, run);
    rot(get(player, 'armL'), -hipL * swing + mix(0.08, 0.3, run), 0.04 + fold * 0.16, -0.12 - fold * 0.04);
    rot(get(player, 'armR'), -hipR * swing + mix(0.08, 0.3, run), -0.04 - fold * 0.16, 0.12 + fold * 0.04);
    rot(get(player, 'forearmL'), mix(-0.35 - Math.max(0, hipL) * 0.4, -1.52 - Math.max(0, -hipL) * 0.35, run), 0.06, 0);
    rot(get(player, 'forearmR'), mix(-0.35 - Math.max(0, hipR) * 0.4, -1.52 - Math.max(0, -hipR) * 0.35, run), -0.06, 0);
    rot(get(player, 'handL'), -hipL * 0.12, 0.04, 0.04 + fold * 0.2);
    rot(get(player, 'handR'), -hipR * 0.12, -0.04, -0.04 - fold * 0.2);
    // Hands close into loose running fists as the pace picks up.
    setHandGrip(get(player, 'handL'), mix(0.28, 0.72, run));
    setHandGrip(get(player, 'handR'), mix(0.28, 0.72, run));
  }

  const lean = mix(0.03, 0.26, run) * blend;
  if (torso) {
    torso.rotation.y = -hipL * mix(0.1, 0.2, run) * blend;
    torso.rotation.x = lean;
    torso.rotation.z = hipL * 0.03 * blend;
    torso.position.x = -hipL * 0.01 * blend;
    torso.position.z = 0;
    torso.scale.set(1, 1, 1);
  }
  // Head stays level while the chest pitches forward.
  rot(
    get(player, 'playerHead'),
    -lean * 0.65 - Math.max(0, -bob) * 0.03,
    hipL * 0.05 * blend,
    -hipL * 0.02 * blend,
  );
  poseEquippedTool(player);
  setLocomotionY(player, lift);
}

/**
 * Sword slash: guard → coil → cut → follow-through → guard.
 *
 * The blade is never rotated on its own; it is welded into the fist, so the arc
 * is produced by hip and chest rotation, shoulder drive, elbow extension and a
 * wrist snap that lands a beat after the elbow. Fingers clamp through contact
 * and ease off on the follow-through.
 */
export function animatePlayerAttack(player: THREE.Group, progress: number): void {
  const p = Math.max(0, Math.min(1, progress));

  const guard = SWORD_GUARD;

  // Coil: sword goes up over the right shoulder, hips and chest wind back.
  // Solved against the sword's own tip so the blade stays in front of the
  // hunter instead of wrapping behind his back or pointing at the camera.
  const windup: BodyPose = {
    playerHips: [0.04, -0.32, -0.05],
    playerTorso: [-0.12, -0.55, -0.08],
    playerHead: [-0.1, 0.32, 0.06],
    clavR: [-0.16, -0.28, -0.32],
    clavL: [0.08, 0.16, 0.16],
    armR: [-2.23, -0.47, 1.1],
    forearmR: [-1.77, 0.14, 0],
    handR: [0.8, -1.9, -0.8],
    armL: [-0.55, 0.2, -0.28],
    forearmL: [-1.05, 0.12, 0.08],
    handL: [0.1, 0.16, 0.1],
    legL: [-0.28, 0.08, 0.06],
    shinL: [0.32, 0, 0],
    footL: [0.02, 0.12, 0],
    legR: [0.16, -0.06, -0.05],
    shinR: [0.22, 0, 0],
    footR: [0.1, -0.1, 0],
    gripR: 0.96,
    gripL: 0.3,
    lift: 0.04,
  };

  // Contact: a diagonal cut, high-right to low-left, blade across the body
  // at chest height with the edge leading.
  const strike: BodyPose = {
    playerHips: [0.0, 0.26, 0.06],
    playerTorso: [0.22, 0.48, 0.1],
    playerHead: [0.1, 0.2, -0.08],
    clavR: [0.18, 0.14, 0.12],
    clavL: [0.04, 0.06, 0.1],
    armR: [-1.7, -0.48, -0.74],
    forearmR: [-0.65, -0.5, 0],
    handR: [0.72, -1.9, -0.25],
    armL: [-0.35, 0.14, 0.22],
    forearmL: [-0.7, 0.08, 0.06],
    handL: [0.08, 0.08, 0.12],
    legL: [-0.4, 0.06, -0.04],
    shinL: [0.22, 0, 0],
    footL: [0.08, 0.08, 0],
    legR: [0.26, -0.04, 0.04],
    shinR: [0.4, 0, 0],
    footR: [-0.04, -0.06, 0],
    gripR: 1.08,
    gripL: 0.34,
    lift: 0.05,
  };

  const follow: BodyPose = {
    ...strike,
    playerHips: [-0.02, 0.32, 0.06],
    playerTorso: [0.18, 0.62, 0.12],
    playerHead: [0.12, 0.28, -0.08],
    clavR: [0.2, 0.18, 0.12],
    clavL: [0.04, 0.08, 0.12],
    armR: [-1.56, -1.0, -0.9],
    forearmR: [-0.98, -0.5, 0],
    handR: [0.78, -1.9, 0.04],
    armL: [-0.2, 0.16, 0.26],
    forearmL: [-0.55, 0.08, 0.06],
    gripR: 0.98,
    lift: 0.03,
  };

  let pose: BodyPose;
  if (p < 0.36) {
    pose = blendPose(guard, windup, easeInOut(p / 0.36));
  } else if (p < 0.52) {
    // Squared ease: slow off the coil, fastest at contact.
    pose = blendPose(windup, strike, Math.pow((p - 0.36) / 0.16, 2.1));
  } else if (p < 0.64) {
    pose = blendPose(strike, follow, smooth((p - 0.52) / 0.12));
  } else {
    pose = blendPose(follow, guard, easeInOut((p - 0.64) / 0.36));
  }

  applyBodyPose(player, pose);
}

/**
 * Gathering swings. Chopping and mining are separate motions rather than one
 * curve with a gain on it: the hatchet cocks over the shoulder and lands a
 * diagonal cut at chest height, while the pickaxe goes straight overhead and is
 * driven down into the rock through a deep squat, with a heavier rebound
 * because the point buries itself.
 */
export function animatePlayerGather(
  player: THREE.Group,
  progress: number,
  kind: 'tree' | 'rock',
): void {
  const p = progress % 1;
  const chop = kind === 'tree';

  const ready: BodyPose = chop
    ? {
        playerHips: [0.02, -0.1, 0.0],
        playerTorso: [0.12, -0.16, 0.04],
        playerHead: [0.08, 0.12, 0.0],
        clavR: [0.06, -0.1, -0.08],
        clavL: [0.04, 0.08, 0.1],
        armR: [0.23, -0.11, -0.06],
        forearmR: [-1.43, 0.3, 0.06],
        handR: [-0.04, -0.56, -0.4],
        armL: [0.18, 0.16, 0.26],
        forearmL: [-0.62, 0.1, 0.06],
        handL: [0.1, 0.06, 0.08],
        legL: [-0.12, 0.04, 0.04],
        shinL: [0.24, 0, 0],
        legR: [0.1, -0.04, -0.04],
        shinR: [0.2, 0, 0],
        footL: [0.04, 0.06, 0],
        footR: [0.04, -0.06, 0],
        gripR: 0.96,
        gripL: 0.28,
      }
    : {
        playerHips: [0.03, -0.06, 0.0],
        playerTorso: [0.18, -0.1, 0.02],
        playerHead: [0.14, 0.06, 0.0],
        clavR: [0.08, -0.06, -0.06],
        clavL: [0.04, 0.06, 0.1],
        armR: [0.18, -0.2, -0.03],
        forearmR: [-1.35, 0.3, 0.06],
        handR: [-0.07, -0.58, -0.45],
        armL: [0.24, 0.14, 0.22],
        forearmL: [-0.76, 0.08, 0.06],
        handL: [0.12, 0.06, 0.08],
        legL: [-0.1, 0.04, 0.04],
        shinL: [0.3, 0, 0],
        legR: [0.12, -0.04, -0.04],
        shinR: [0.28, 0, 0],
        footL: [0.04, 0, 0],
        footR: [0.04, 0, 0],
        gripR: 0.96,
        gripL: 0.28,
      };

  const raised: BodyPose = chop
    ? {
        // Hatchet cocked above and behind the shoulder, chest turned off the cut.
        playerHips: [0.02, -0.2, -0.04],
        playerTorso: [-0.12, -0.32, -0.06],
        playerHead: [-0.02, 0.24, 0.04],
        clavR: [-0.1, -0.18, -0.26],
        clavL: [0.1, 0.12, 0.16],
        armR: [-2.49, 0.35, 0.03],
        forearmR: [-1.25, -0.3, 0.06],
        handR: [0.5, -1.9, -0.45],
        armL: [0.4, 0.26, 0.42],
        forearmL: [-0.72, 0.12, 0.08],
        handL: [0.14, 0.1, 0.1],
        legL: [-0.22, 0.06, 0.05],
        shinL: [0.28, 0, 0],
        legR: [0.16, -0.05, -0.05],
        shinR: [0.18, 0, 0],
        footL: [0.02, 0.06, 0],
        footR: [0.08, -0.06, 0],
        gripR: 0.9,
        gripL: 0.26,
        lift: 0.045,
      }
    : {
        // Pickaxe stacked straight overhead, ribcage open, heels light.
        playerHips: [0.02, -0.04, 0.0],
        playerTorso: [-0.2, -0.08, 0.0],
        playerHead: [-0.14, 0.06, 0.0],
        clavR: [-0.18, -0.04, -0.22],
        clavL: [0.08, 0.1, 0.18],
        armR: [-1.94, 0.76, -0.6],
        forearmR: [-0.1, -0.27, 0.06],
        handR: [0.5, -0.94, -0.45],
        armL: [-0.44, 0.2, 0.36],
        forearmL: [-1.05, 0.12, 0.08],
        handL: [0.12, 0.08, 0.1],
        legL: [-0.14, 0.04, 0.04],
        shinL: [0.14, 0, 0],
        legR: [0.12, -0.04, -0.04],
        shinR: [0.12, 0, 0],
        footL: [0.1, 0, 0],
        footR: [0.12, 0, 0],
        gripR: 0.9,
        gripL: 0.26,
        lift: 0.075,
      };

  const impact: BodyPose = chop
    ? {
        playerHips: [0.0, 0.14, 0.05],
        playerTorso: [0.4, 0.2, 0.08],
        playerHead: [0.26, 0.1, -0.04],
        clavR: [0.18, 0.1, 0.12],
        clavL: [0.02, 0.04, 0.1],
        armR: [-0.57, 0.15, -0.51],
        forearmR: [-1.36, -0.3, 0.06],
        handR: [0.5, -1.62, -0.45],
        armL: [-0.22, 0.12, 0.3],
        forearmL: [-0.42, 0.06, 0.04],
        handL: [0.06, 0.04, 0.12],
        legL: [-0.34, 0.05, -0.04],
        shinL: [0.34, 0, 0],
        legR: [0.24, -0.04, 0.04],
        shinR: [0.46, 0, 0],
        footL: [0.06, 0.06, 0],
        footR: [-0.02, -0.04, 0],
        gripR: 1.1,
        gripL: 0.34,
        lift: -0.035,
      }
    : {
        playerHips: [0.14, 0.04, 0.0],
        playerTorso: [0.52, 0.06, 0.02],
        playerHead: [0.3, 0.04, 0.0],
        clavR: [0.22, 0.04, 0.1],
        clavL: [0.02, 0.04, 0.1],
        armR: [-1.01, -0.8, 0.24],
        forearmR: [-0.38, -0.3, 0.06],
        handR: [0.5, -0.85, -0.45],
        armL: [-0.32, 0.16, 0.34],
        forearmL: [-0.36, 0.06, 0.04],
        handL: [0.06, 0.04, 0.12],
        legL: [-0.42, 0.05, 0.05],
        shinL: [0.72, 0, 0],
        legR: [-0.34, -0.05, -0.05],
        shinR: [0.66, 0, 0],
        footL: [-0.16, 0, 0],
        footR: [-0.14, 0, 0],
        gripR: 1.12,
        gripL: 0.36,
        lift: -0.09,
      };

  // Rebound: the head kicks back out of the cut before the arm resets.
  const rebound: BodyPose = chop
    ? {
        ...impact,
        playerTorso: [0.3, 0.14, 0.06],
        playerHips: [0.0, 0.1, 0.04],
        clavR: [0.14, 0.08, 0.1],
        armR: [-0.21, 0.08, -0.5],
        forearmR: [-1.68, -0.3, 0.06],
        handR: [0.5, -1.23, -0.19],
        gripR: 1.0,
        lift: 0.005,
      }
    : {
        ...impact,
        playerTorso: [0.4, 0.05, 0.02],
        playerHips: [0.1, 0.03, 0.0],
        clavR: [0.18, 0.03, 0.08],
        armR: [-0.58, 0.1, -0.12],
        forearmR: [-1.1, -0.2, 0.06],
        handR: [0.4, -1.05, -0.3],
        shinL: [0.6, 0, 0],
        shinR: [0.56, 0, 0],
        gripR: 1.02,
        lift: -0.04,
      };

  // Chopping is quicker off the top; mining loads longer overhead.
  const liftT = chop ? 0.38 : 0.46;
  const fallT = chop ? 0.16 : 0.14;

  let pose: BodyPose;
  if (p < liftT) {
    pose = blendPose(ready, raised, easeInOut(p / liftT));
  } else if (p < liftT + fallT) {
    pose = blendPose(raised, impact, Math.pow((p - liftT) / fallT, chop ? 2.0 : 2.4));
  } else if (p < liftT + fallT + 0.1) {
    pose = blendPose(impact, rebound, smooth((p - liftT - fallT) / 0.1));
  } else {
    pose = blendPose(rebound, ready, easeInOut((p - liftT - fallT - 0.1) / (0.9 - liftT - fallT)));
  }

  applyBodyPose(player, pose);
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
    if (armL) {
      armL.rotation.x = breath;
      armL.rotation.z = -0.16;
    }
    if (armR) {
      armR.rotation.x = -0.18 + breath * 0.4; // spear-ready idle
      armR.rotation.z = 0.16;
    }
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
    armL.rotation.z = -0.14;
  }
  if (armR) {
    armR.rotation.x = -0.22 - swing * 0.12;
    armR.rotation.z = 0.14;
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
