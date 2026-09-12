import * as THREE from 'three';
import {
  animatePlayerAttack,
  animatePlayerGather,
  animatePlayerIdle,
  animatePlayerWalk,
  animateOrcAttack,
  animateOrcWalk,
  animateYetiAttack,
  animateYetiWalk,
  walkFrequency,
  YETI_WALK_FREQ,
  ORC_WALK_FREQ,
} from '../src/rendering/anim';
import { createFrostYeti, createOrcScout, createPlayerMesh, setPlayerTool } from '../src/rendering/meshes';
import { poseEquippedTool } from '../src/rendering/player';

const canvas = document.getElementById('c') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(2);
renderer.setSize(520, 640, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x20262c);
scene.add(new THREE.HemisphereLight(0xcfe6ff, 0x3a3026, 1.5));
const key = new THREE.DirectionalLight(0xffffff, 2.4);
key.position.set(2.4, 4, 3.2);
scene.add(key);
const rim = new THREE.DirectionalLight(0x9fc4ff, 1.1);
rim.position.set(-3, 2, -2.5);
scene.add(rim);
const fill = new THREE.DirectionalLight(0xffd9b0, 0.8);
fill.position.set(-1.5, 1, 3);
scene.add(fill);

const camera = new THREE.PerspectiveCamera(38, 520 / 640, 0.05, 50);

let subject: THREE.Group | null = null;
let kind = 'hunter';

function build(k: string) {
  if (subject) scene.remove(subject);
  kind = k;
  subject = k === 'yeti' ? createFrostYeti() : k === 'orc' ? createOrcScout() : createPlayerMesh();
  scene.add(subject);
}
build('hunter');

function frame(opts: {
  model?: string;
  pose?: string;
  t?: number;
  speed?: number;
  yaw?: number;
  az?: number;
  el?: number;
  dist?: number;
  look?: number;
  fov?: number;
}) {
  const o = {
    model: 'hunter',
    pose: 'idle',
    t: 0,
    speed: 0.9,
    yaw: 0,
    az: 0.6,
    el: 1.25,
    dist: 4.2,
    look: 1.0,
    fov: 38,
    ...opts,
  };
  if (o.model !== kind) build(o.model);
  const m = subject!;
  m.rotation.set(0, o.yaw, 0);
  m.position.set(0, 0, 0);

  if (o.model === 'hunter') {
    if (o.pose === 'idle') {
      setPlayerTool(m, null);
      animatePlayerIdle(m, o.t);
    } else if (o.pose === 'walk') {
      setPlayerTool(m, null);
      animatePlayerWalk(m, o.t * walkFrequency(o.speed), o.speed, 1);
    } else if (o.pose === 'sword') {
      setPlayerTool(m, 'sword');
      animatePlayerIdle(m, o.t);
    } else if (o.pose === 'sword-walk') {
      setPlayerTool(m, 'sword');
      animatePlayerWalk(m, o.t * walkFrequency(o.speed), o.speed, 1);
    } else if (o.pose === 'slash') {
      setPlayerTool(m, 'sword');
      animatePlayerAttack(m, o.t);
    } else if (o.pose === 'chop') {
      setPlayerTool(m, 'hatchet');
      animatePlayerGather(m, o.t, 'tree');
    } else if (o.pose === 'mine') {
      setPlayerTool(m, 'pickaxe');
      animatePlayerGather(m, o.t, 'rock');
    }
    m.position.y = Number(m.userData.locomotionY) || 0;
  } else if (o.model === 'yeti') {
    if (o.pose === 'attack') animateYetiAttack(m, o.t);
    else animateYetiWalk(m, o.pose === 'walk' ? o.t * YETI_WALK_FREQ : o.t, o.pose === 'walk', 1);
  } else {
    if (o.pose === 'attack') animateOrcAttack(m, o.t);
    else animateOrcWalk(m, o.pose === 'walk' ? o.t * ORC_WALK_FREQ : o.t, o.pose === 'walk', 1);
  }

  camera.fov = o.fov;
  camera.updateProjectionMatrix();
  const look = new THREE.Vector3(0, o.look, 0);
  const focus = (opts as { focus?: string }).focus;
  if (focus) {
    m.updateMatrixWorld(true);
    const target = m.getObjectByName(focus);
    if (target) target.getWorldPosition(look);
  }
  camera.position.setFromSpherical(new THREE.Spherical(o.dist, o.el, o.az)).add(look);
  camera.lookAt(look);
  renderer.render(scene, camera);
}

const JOINTS = [
  'playerHips', 'playerTorso', 'playerHead', 'clavL', 'clavR',
  'armL', 'forearmL', 'handL', 'armR', 'forearmR', 'handR',
  'legL', 'shinL', 'footL', 'legR', 'shinR', 'footR',
];

type Pose = Record<string, [number, number, number]>;

function setRaw(pose: Pose, tool: string | null) {
  const m = subject!;
  setPlayerTool(m, tool as never);
  for (const n of JOINTS) {
    const o = m.getObjectByName(n);
    if (o) o.rotation.set(0, 0, 0);
  }
  for (const [n, r] of Object.entries(pose)) {
    const o = m.getObjectByName(n);
    if (o) o.rotation.set(r[0], r[1], r[2]);
  }
  poseEquippedTool(m);
  m.updateMatrixWorld(true);
}

/**
 * Marker lookup that ignores hidden subtrees. Every tool carries a `toolEdge`
 * and `toolHeel`, and `getObjectByName` would return the first one it meets —
 * the invisible hatchet's — regardless of which weapon is actually equipped.
 */
function findVisible(name: string): THREE.Object3D | undefined {
  let found: THREE.Object3D | undefined;
  subject!.traverseVisible((o) => {
    if (!found && o.name === name) found = o;
  });
  return found;
}

function worldOf(name: string): THREE.Vector3 {
  const o = findVisible(name);
  return o ? o.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3();
}

/**
 * Coordinate-descent IK over a handful of Euler channels. Lets a pose be
 * authored by saying where the blade should end up instead of guessing angles.
 */
function solve(cfg: {
  tool: string | null;
  base: Pose;
  free: [string, number, number, number][];
  target: { name: string; pos: [number, number, number]; w?: number };
  aux?: { name: string; pos: [number, number, number]; w: number }[];
  iters?: number;
}) {
  const pose: Pose = JSON.parse(JSON.stringify(cfg.base));
  const tgt = new THREE.Vector3(...cfg.target.pos);
  const cost = () => {
    setRaw(pose, cfg.tool);
    let c = worldOf(cfg.target.name).distanceToSquared(tgt) * (cfg.target.w ?? 1);
    for (const a of cfg.aux ?? []) {
      c += worldOf(a.name).distanceToSquared(new THREE.Vector3(...a.pos)) * a.w;
    }
    for (const [j, ax] of cfg.free) {
      const d = pose[j][ax] - (cfg.base[j]?.[ax] ?? 0);
      c += d * d * 0.004;
    }
    return c;
  };
  let best = cost();
  let step = 0.5;
  for (let it = 0; it < (cfg.iters ?? 220); it++) {
    let improved = false;
    for (const [j, ax, lo, hi] of cfg.free) {
      for (const dir of [1, -1]) {
        const prev = pose[j][ax];
        const next = Math.max(lo, Math.min(hi, prev + dir * step));
        if (next === prev) continue;
        pose[j][ax] = next;
        const c = cost();
        if (c < best - 1e-7) {
          best = c;
          improved = true;
        } else {
          pose[j][ax] = prev;
        }
      }
    }
    if (!improved) {
      step *= 0.55;
      if (step < 0.0015) break;
    }
  }
  setRaw(pose, cfg.tool);
  const rounded: Pose = {};
  for (const [k, v] of Object.entries(pose)) {
    rounded[k] = [+v[0].toFixed(3), +v[1].toFixed(3), +v[2].toFixed(3)] as [number, number, number];
  }
  return {
    pose: rounded,
    err: Math.sqrt(worldOf(cfg.target.name).distanceToSquared(tgt)).toFixed(3),
    at: worldOf(cfg.target.name).toArray().map((n) => +n.toFixed(3)),
  };
}

(window as unknown as { solve: typeof solve }).solve = solve;
(window as unknown as { setRaw: typeof setRaw }).setRaw = setRaw;

function probe(names: string[]) {
  const m = subject!;
  m.updateMatrixWorld(true);
  const out: Record<string, number[]> = {};
  for (const n of names) {
    const o = findVisible(n);
    if (!o) continue;
    const p = o.getWorldPosition(new THREE.Vector3());
    out[n] = [+p.x.toFixed(3), +p.y.toFixed(3), +p.z.toFixed(3)];
  }
  return out;
}

(window as unknown as { render: () => void }).render = () => renderer.render(scene, camera);
(window as unknown as { probe: typeof probe }).probe = probe;
(window as unknown as { shot: typeof frame }).shot = frame;
(window as unknown as { shotReady: boolean }).shotReady = true;
frame({});
