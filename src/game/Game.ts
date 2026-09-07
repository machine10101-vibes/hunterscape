import * as THREE from 'three';
import { HUD } from '../ui/HUD';
import {
  animateOrcSpear,
  animateYetiSwipe,
  createBarrel,
  createBedroll,
  createCampfire,
  createCrate,
  createDummy,
  createFrostYeti,
  createGodRays,
  createGround,
  createOrcScout,
  createPlayerMesh,
  createRock,
  createSkyDome,
  createSnowProps,
  createTent,
  createTree,
  flashDummy,
  setPlayerTool,
} from '../rendering/meshes';
import { createTerrainFoliage, groundHeight, tickTerrainFoliage } from '../rendering/terrain';
import {
  animateDeath,
  animateHitFlinch,
  animateOrcAttack,
  animateOrcWalk,
  animatePlayerAttack,
  animatePlayerGather,
  animatePlayerIdle,
  animatePlayerWalk,
  animateYetiAttack,
  animateYetiWalk,
  ORC_ATTACK_CONNECT_END,
  ORC_ATTACK_CONNECT_START,
  ORC_ATTACK_DURATION,
  ORC_ATTACK_WINDUP_END,
  PLAYER_ATTACK_CONNECT_END,
  PLAYER_ATTACK_CONNECT_START,
  PLAYER_ATTACK_DURATION,
  PLAYER_ATTACK_WINDUP_END,
  resetPlayerPose,
  turnTowardYaw,
  YETI_ATTACK_CONNECT_END,
  YETI_ATTACK_CONNECT_START,
  YETI_ATTACK_DURATION,
  YETI_ATTACK_WINDUP_END,
} from '../rendering/anim';
import { VFX } from '../rendering/vfx';
import { loadSave, writeSave } from './Persistence';
import {
  ITEM_META,
  levelFromXp,
  type SaveData,
  type SkillId,
} from './types';

type InteractKind = 'tree' | 'rock' | 'dummy' | 'yeti' | 'orc';

interface WorldObject {
  kind: InteractKind;
  mesh: THREE.Group;
  id: string;
  hp: number;
  maxHp: number;
  depleted: boolean;
  respawnAt: number;
  meta?: { ore?: 'copper' | 'tin' };
}

type Activity =
  | { type: 'idle' }
  | { type: 'move'; tx: number; tz: number }
  | { type: 'gather'; target: WorldObject; elapsed: number; duration: number; label: string }
  | {
      type: 'combat';
      target: WorldObject;
      cooldown: number;
      swingT: number;
      swingDur: number;
      hitDone: boolean;
    };

interface DeathAnim {
  mesh: THREE.Group;
  kind: 'yeti' | 'orc' | 'dummy';
  t: number;
  dur: number;
  home?: { x: number; z: number };
}

const GATHER_RANGE = 1.6;
const ATTACK_RANGE = 1.8;
const YETI_ATTACK_RANGE = 2.35;
const YETI_AGGRO_RADIUS = 5.8;
const ORC_ATTACK_RANGE = 2.15;
const ORC_AGGRO_RADIUS = 5.4;
const MOVE_SPEED = 4.2;
const MOVE_ACCEL = 9.5;
const MOVE_DECEL = 12.0;
const SAVE_EVERY = 3;
const YETI_MAX_HP = 80;
const YETI_RESPAWN_SEC = 28;
const YETI_DMG_MIN = 5;
const YETI_DMG_MAX = 10;
const ORC_MAX_HP = 62;
const ORC_RESPAWN_SEC = 22;
const ORC_DMG_MIN = 4;
const ORC_DMG_MAX = 8;
const ORC_HOME = { x: -6.2, z: -4.8 };
const YETI_HOME = { x: 4.2, z: 7.2 };

const SKILL_SHORT: Record<SkillId, string> = {
  constitution: 'Constitution',
  attack: 'Attack',
  strength: 'Strength',
  defence: 'Defence',
  woodcutting: 'Woodcutting',
  mining: 'Mining',
};

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private player: THREE.Group;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private clock = new THREE.Clock();
  private hud: HUD;
  private vfx: VFX;
  private save: SaveData;
  private objects: WorldObject[] = [];
  private ground: THREE.Mesh;
  private activity: Activity = { type: 'idle' };
  private moveMarker: THREE.Mesh;
  private saveTimer = 0;
  private keys = new Set<string>();
  private camOffset = new THREE.Vector3(0, 11, 9);
  private camLook = new THREE.Vector3();
  private dummyTarget: WorldObject | null = null;
  private yetiTarget: WorldObject | null = null;
  private yetiAttackCd = 0;
  private yetiSwipeT = 0;
  private yetiAggroed = false;
  private orcTarget: WorldObject | null = null;
  private orcAttackCd = 0;
  private orcSwipeT = 0;
  private orcAggroed = false;
  private running = true;
  private sun!: THREE.DirectionalLight;
  private rim!: THREE.DirectionalLight;
  private pendingGather: { obj: WorldObject; duration: number; label: string } | null = null;
  private pendingCombat = false;
  private toolSwing = 0;
  private animTime = 0;
  private playerFlinch = 0;
  private playerKnock = new THREE.Vector3();
  private yetiHitDone = false;
  private orcHitDone = false;
  private deathAnims: DeathAnim[] = [];
  private camSmooth = new THREE.Vector3();
  private lookSmooth = new THREE.Vector3();
  private combatCamPull = 0;
  /** Current locomotion speed (eased) */
  private moveSpeedCur = 0;
  private moveBlend = 0;
  private stoppingSteps = 0;
  private lastMoveDir = new THREE.Vector3(0, 0, 1);
  /** Target hit-react timers (mesh uuid → remaining) */
  private hitReacts: { mesh: THREE.Object3D; t: number; inten: number }[] = [];
  private yetiMoveBlend = 0;
  private orcMoveBlend = 0;
  private yetiTeleDone = false;
  private orcTeleDone = false;
  private playerTeleDone = false;
  /** Seconds continuously out of soft attack range before cancel */
  private combatOorT = 0;
  /** Soft recover after range abort (pose settle) */
  private combatAbortT = 0;
  private pendingCombatTarget: WorldObject | null = null;
  private pendingCombatChat = '';

  constructor(canvas: HTMLCanvasElement) {
    this.save = loadSave();
    this.hud = new HUD();

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.42;
    this.renderer.setClearColor(0x9ec6e4);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xc2d6e8, 0.012);

    this.camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 140);

    this.setupLights();
    this.setupReflectionEnv();
    this.scene.add(createSkyDome(70));
    this.ground = createGround(48);
    this.scene.add(this.ground);
    this.scene.add(createTerrainFoliage());
    this.buildWorld();

    this.player = createPlayerMesh();
    this.player.position.set(this.save.x, groundHeight(this.save.x, this.save.z), this.save.z);
    this.scene.add(this.player);

    const app = document.getElementById('app') ?? document.body;
    this.vfx = new VFX(this.scene, this.camera, app);

    this.moveMarker = new THREE.Mesh(
      new THREE.RingGeometry(0.25, 0.38, 24),
      new THREE.MeshBasicMaterial({
        color: 0xd4a84b,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      }),
    );
    this.moveMarker.rotation.x = -Math.PI / 2;
    this.moveMarker.position.y = 0.06;
    this.moveMarker.visible = false;
    this.scene.add(this.moveMarker);

    this.bindInput(canvas);
    this.hud.onAction = (a) => this.handleAction(a);
    this.hud.onInventoryClick = (i) => this.handleInvClick(i);

    this.refreshUI();
    this.hud.chat('Welcome to Thornrest Camp in the Whisperwood.', 'system');
    this.hud.chat('Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.', 'system');
    this.hud.chat('A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.', 'combat');
    this.hud.chat('An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.', 'combat');
    this.hud.chat('Your progress is saved in this browser.', 'system');

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  private setupLights(): void {
    const hemi = new THREE.HemisphereLight(0xf2f7ff, 0x5a7a32, 1.08);
    this.scene.add(hemi);

    this.sun = new THREE.DirectionalLight(0xfff6e0, 2.08);
    this.sun.position.set(18, 28, 10);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0003;
    this.sun.shadow.normalBias = 0.035;
    this.sun.shadow.radius = 3.2;
    this.sun.shadow.camera.near = 2;
    this.sun.shadow.camera.far = 58;
    this.sun.shadow.camera.left = -24;
    this.sun.shadow.camera.right = 24;
    this.sun.shadow.camera.top = 24;
    this.sun.shadow.camera.bottom = -24;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    // Cool rim / fill opposite the sun for silhouette pop
    this.rim = new THREE.DirectionalLight(0xd0e6ff, 0.48);
    this.rim.position.set(-14, 10, -16);
    this.scene.add(this.rim);

    // Warm fill from camp side
    const fill = new THREE.DirectionalLight(0xffe2b0, 0.46);
    fill.position.set(-6, 6, 4);
    this.scene.add(fill);

    this.scene.add(new THREE.AmbientLight(0x6a7c88, 0.44));
  }

  /** Soft studio IBL so leather, metal, and skin read like an RS3 character. */
  private setupReflectionEnv(): void {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    envScene.add(new THREE.HemisphereLight(0xf2f7ff, 0x3d5a22, 1.15));
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(10, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xb4cce4, side: THREE.BackSide }),
    );
    envScene.add(sky);
    const sunBall = new THREE.Mesh(new THREE.SphereGeometry(2.2, 12, 10), new THREE.MeshBasicMaterial({ color: 0xfff1c8 }));
    sunBall.position.set(7, 9, 5);
    envScene.add(sunBall);
    const ground = new THREE.Mesh(new THREE.CircleGeometry(10, 16), new THREE.MeshBasicMaterial({ color: 0x4a7a38 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.6;
    envScene.add(ground);
    this.scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    this.scene.environmentIntensity = 0.62;
    pmrem.dispose();
  }

  private buildWorld(): void {
    const plant = (obj: THREE.Object3D, x: number, z: number, extraY = 0): void => {
      obj.position.set(x, groundHeight(x, z) + extraY, z);
    };

    const tent = createTent();
    plant(tent, -3.5, -1.5);
    this.scene.add(tent);

    const fire = createCampfire();
    plant(fire, -1.2, -0.5);
    this.scene.add(fire);

    const crate = createCrate();
    plant(crate, -2.4, -2.2);
    crate.rotation.y = 0.3;
    this.scene.add(crate);

    const barrel = createBarrel();
    plant(barrel, -4.2, -0.4);
    this.scene.add(barrel);

    const barrel2 = createBarrel();
    plant(barrel2, -4.55, 0.15);
    barrel2.rotation.y = 0.6;
    this.scene.add(barrel2);

    const bed = createBedroll();
    plant(bed, -2.8, 0.4);
    bed.rotation.y = -0.4;
    this.scene.add(bed);

    // Decorative bushes with soft shadow
    const border = [
      [-8, -6],
      [8, -7],
      [-10, 4],
      [9, 5],
      [0, -10],
      [-6, 8],
      [6, 9],
      [10, 0],
      [-11, -2],
    ];
    for (const [x, z] of border) {
      const bush = new THREE.Group();
      const a = new THREE.Mesh(
        new THREE.SphereGeometry(0.4 + Math.random() * 0.2, 7, 5),
        new THREE.MeshStandardMaterial({ color: 0x2a5a28, flatShading: true, roughness: 0.95 }),
      );
      a.position.y = 0.35;
      a.castShadow = true;
      bush.add(a);
      const b = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 6, 4),
        new THREE.MeshStandardMaterial({ color: 0x3a6a30, flatShading: true }),
      );
      b.position.set(0.25, 0.3, 0.1);
      b.castShadow = true;
      bush.add(b);
      bush.position.set(x, groundHeight(x, z), z);
      this.scene.add(bush);
    }

    // Pines kept off Yeti NE (~4.2,7.2) and Orc SW (~-6.2,-4.8) clearings for silhouette/telegraph read
    const treeSpots: [number, number][] = [
      [4.5, -3],
      [6.2, -1.5],
      [8.2, 0.2],
      [7.4, 2.6],
      [1.2, 5.6],
      [-4.2, 5.2],
      [-8.2, 2.4],
      [-8.4, -2.2],
      [2, -6],
      [-2.5, -7],
      [8, -5],
      [-9.2, -0.4],
    ];
    treeSpots.forEach(([x, z], i) => {
      const mesh = createTree(i);
      mesh.position.set(x, groundHeight(x, z), z);
      this.scene.add(mesh);
      this.objects.push({
        kind: 'tree',
        mesh,
        id: `tree_${i}`,
        hp: 1,
        maxHp: 1,
        depleted: false,
        respawnAt: 0,
      });
    });

    // Mineable ore rocks near Thornrest camp / spawn so Mine + click work by visible camp rocks
    const rockSpots: { x: number; z: number; ore: 'copper' | 'tin' }[] = [
      { x: 1.2, z: 3.4, ore: 'copper' },
      { x: -0.3, z: 4.1, ore: 'copper' },
      { x: 2.6, z: 4.0, ore: 'tin' },
      { x: -1.8, z: 3.2, ore: 'tin' },
      { x: 0.8, z: 5.2, ore: 'copper' },
      { x: 3.4, z: 2.2, ore: 'copper' },
      { x: -3.2, z: 2.8, ore: 'tin' },
    ];
    rockSpots.forEach((r, i) => {
      const mesh = createRock(r.ore, i);
      mesh.position.set(r.x, groundHeight(r.x, r.z), r.z);
      this.scene.add(mesh);
      this.objects.push({
        kind: 'rock',
        mesh,
        id: `rock_${i}`,
        hp: 1,
        maxHp: 1,
        depleted: false,
        respawnAt: 0,
        meta: { ore: r.ore },
      });
    });

    const dummyMesh = createDummy();
    dummyMesh.position.set(2.5, groundHeight(2.5, -2.5), -2.5);
    this.scene.add(dummyMesh);
    const dummy: WorldObject = {
      kind: 'dummy',
      mesh: dummyMesh,
      id: 'dummy_0',
      hp: 50,
      maxHp: 50,
      depleted: false,
      respawnAt: 0,
    };
    this.objects.push(dummy);
    this.dummyTarget = dummy;

    // Frost Yeti — north-east snow clearing (must match ground snow at world ~4.2,7.2)
    const yetiMesh = createFrostYeti();
    yetiMesh.position.set(YETI_HOME.x, groundHeight(YETI_HOME.x, YETI_HOME.z), YETI_HOME.z);
    yetiMesh.rotation.y = Math.PI * 0.85; // face roughly toward camp
    yetiMesh.visible = true;
    yetiMesh.scale.setScalar(1.15);
    this.scene.add(yetiMesh);
    const yeti: WorldObject = {
      kind: 'yeti',
      mesh: yetiMesh,
      id: 'yeti_0',
      hp: YETI_MAX_HP,
      maxHp: YETI_MAX_HP,
      depleted: false,
      respawnAt: 0,
    };
    this.objects.push(yeti);
    this.yetiTarget = yeti;

    // Snowy ground props around yeti clearing
    const snowProps = createSnowProps();
    snowProps.traverse((c) => {
      if (c === snowProps || !(c as THREE.Mesh).isMesh) return;
      c.position.y += groundHeight(c.position.x, c.position.z);
    });
    this.scene.add(snowProps);

    // Light falling snow in NE (readability / atmosphere)
    const snowGroup = new THREE.Group();
    snowGroup.name = 'fallingSnow';
    for (let i = 0; i < 48; i++) {
      const flake = new THREE.Mesh(
        new THREE.SphereGeometry(0.035 + Math.random() * 0.03, 4, 3),
        new THREE.MeshBasicMaterial({
          color: 0xe8f4ff,
          transparent: true,
          opacity: 0.55 + Math.random() * 0.35,
          depthWrite: false,
        }),
      );
      flake.position.set(
        2.5 + Math.random() * 5.5,
        1.5 + Math.random() * 6,
        5.5 + Math.random() * 4.5,
      );
      flake.userData.fall = 0.4 + Math.random() * 0.9;
      flake.userData.drift = (Math.random() - 0.5) * 0.35;
      flake.userData.baseY = flake.position.y;
      snowGroup.add(flake);
    }
    this.scene.add(snowGroup);

    // Orc Scout — south-west clearing (different area than Yeti)
    const orcMesh = createOrcScout();
    orcMesh.position.set(ORC_HOME.x, groundHeight(ORC_HOME.x, ORC_HOME.z), ORC_HOME.z);
    orcMesh.rotation.y = Math.PI * 0.25;
    this.scene.add(orcMesh);
    const orc: WorldObject = {
      kind: 'orc',
      mesh: orcMesh,
      id: 'orc_0',
      hp: ORC_MAX_HP,
      maxHp: ORC_MAX_HP,
      depleted: false,
      respawnAt: 0,
    };
    this.objects.push(orc);
    this.orcTarget = orc;

    // Soft god-rays-lite over the clearing
    this.scene.add(createGodRays());

    // Denser camp props
    const crate2 = createCrate();
    plant(crate2, -3.6, -2.6);
    crate2.rotation.y = -0.5;
    this.scene.add(crate2);
    const barrel3 = createBarrel();
    plant(barrel3, -1.8, -2.4);
    this.scene.add(barrel3);
    const bed2 = createBedroll();
    plant(bed2, -3.9, 0.9);
    bed2.rotation.y = 0.8;
    this.scene.add(bed2);
    // Decorative stump + lantern-like emissive orb near fire
    const stump = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.28, 0.35, 7),
      new THREE.MeshStandardMaterial({ color: 0x4a3014, flatShading: true, roughness: 0.9 }),
    );
    stump.position.set(0.4, groundHeight(0.4, -1.6) + 0.18, -1.6);
    stump.castShadow = true;
    this.scene.add(stump);
    const lantern = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 8, 6),
      new THREE.MeshStandardMaterial({
        color: 0xffcc66,
        emissive: 0xffaa33,
        emissiveIntensity: 1.2,
        flatShading: true,
      }),
    );
    lantern.position.set(-0.2, groundHeight(-0.2, -1.8) + 0.85, -1.8);
    this.scene.add(lantern);
    const lanternLight = new THREE.PointLight(0xffaa55, 0.55, 6);
    lanternLight.position.copy(lantern.position);
    this.scene.add(lanternLight);
  }

  private bindInput(canvas: HTMLCanvasElement): void {
    const onPointer = (ev: PointerEvent) => {
      const t = ev.target as HTMLElement;
      if (t !== canvas) return;
      this.pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
      this.handleWorldClick();
    };
    canvas.addEventListener('pointerdown', onPointer);

    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === '1') this.handleAction('attack');
      if (e.key === '2') this.handleAction('chop');
      if (e.key === '3') this.handleAction('mine');
      if (e.key === '4') this.handleAction('eat');
      if (e.key === '5') this.handleAction('examine');
      if (e.key.toLowerCase() === 'k') {
        const panel = document.getElementById('skills-panel');
        if (panel) panel.hidden = !panel.hidden;
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
  }

  private handleWorldClick(): void {
    this.raycaster.setFromCamera(this.pointer, this.camera);

    const hitMeshes: THREE.Object3D[] = [];
    for (const o of this.objects) {
      if (o.depleted && o.kind !== 'dummy' && o.kind !== 'yeti' && o.kind !== 'orc') continue;
      o.mesh.traverse((c) => {
        if ((c as THREE.Mesh).isMesh && c.name !== 'outline') hitMeshes.push(c);
      });
    }
    const hits = this.raycaster.intersectObjects(hitMeshes, false);
    if (hits.length > 0) {
      let obj: THREE.Object3D | null = hits[0].object;
      while (obj && !this.objects.find((o) => o.mesh === obj)) obj = obj.parent;
      const worldObj = this.objects.find((o) => o.mesh === obj);
      if (worldObj) {
        this.interactWith(worldObj);
        return;
      }
    }

    const groundHits = this.raycaster.intersectObject(this.ground);
    if (groundHits.length > 0) {
      const p = groundHits[0].point;
      this.pendingCombat = false;
      this.pendingCombatTarget = null;
      this.pendingCombatChat = '';
      this.pendingGather = null;
      this.startMove(p.x, p.z);
    }
  }

  private interactWith(obj: WorldObject): void {
    if (obj.kind === 'yeti') {
      if (obj.depleted || obj.hp <= 0) {
        this.hud.chat('The Frost Yeti lies slain. It will return before long.', 'system');
        return;
      }
      this.yetiAggroed = true;
      this.approachThenCombat(obj, 'You ready your bronze sword against the Frost Yeti!');
      return;
    }
    if (obj.kind === 'orc') {
      if (obj.depleted || obj.hp <= 0) {
        this.hud.chat('The Orc Scout lies slain. Another will take its place.', 'system');
        return;
      }
      this.orcAggroed = true;
      this.approachThenCombat(obj, 'You ready your bronze sword against the Orc Scout!');
      return;
    }
    if (obj.kind === 'dummy') {
      if (obj.hp <= 0) {
        this.hud.chat('The training dummy is already collapsed.', 'system');
        return;
      }
      this.approachThenCombat(obj, 'You ready your bronze sword against the training dummy.');
      return;
    }
    if (obj.depleted) {
      this.hud.chat('That resource is depleted. Wait for it to respawn.', 'system');
      return;
    }
    if (obj.kind === 'tree') {
      if (!this.hasItem('bronze_hatchet') && !this.save.equipped.hatchet) {
        this.hud.chat('You need a hatchet to chop trees.', 'system');
        return;
      }
      this.approachThenGather(obj, 2.4, 'Chopping Whisperwood…');
      return;
    }
    if (obj.kind === 'rock') {
      if (!this.hasItem('bronze_pickaxe') && !this.save.equipped.pickaxe) {
        this.hud.chat('You need a pickaxe to mine rocks.', 'system');
        return;
      }
      this.approachThenGather(obj, 2.6, `Mining ${obj.meta?.ore === 'tin' ? 'tin' : 'copper'}…`);
    }
  }


  private combatName(obj: WorldObject): string {
    if (obj.kind === 'yeti') return 'Frost Yeti';
    if (obj.kind === 'orc') return 'Orc Scout';
    if (obj.kind === 'dummy') return 'Training Dummy';
    return obj.kind;
  }

  private isMonster(obj: WorldObject): boolean {
    return obj.kind === 'yeti' || obj.kind === 'orc';
  }

  private monsterAttackRange(obj: WorldObject): number {
    if (obj.kind === 'yeti') return YETI_ATTACK_RANGE;
    if (obj.kind === 'orc') return ORC_ATTACK_RANGE;
    return ATTACK_RANGE;
  }

  private beginCombat(obj: WorldObject, chat: string): void {
    this.hud.chat(chat, 'combat');
    this.pendingGather = null;
    this.pendingCombat = false;
    this.pendingCombatTarget = null;
    this.pendingCombatChat = '';
    this.combatOorT = 0;
    this.combatAbortT = 0;
    this.activity = {
      type: 'combat',
      target: obj,
      cooldown: 0.15,
      swingT: 0,
      swingDur: PLAYER_ATTACK_DURATION,
      hitDone: false,
    };
    setPlayerTool(this.player, 'sword');
    this.hud.showTarget(this.combatName(obj), obj.hp / obj.maxHp);
    this.combatCamPull = 1;
  }

  /** Walk into soft range before locking into combat (avoids instant out-of-range cancel). */
  private approachThenCombat(obj: WorldObject, chat: string): void {
    const range = this.monsterAttackRange(obj);
    const dist = this.distTo(obj);
    if (dist > range * 0.92) {
      const dx = obj.mesh.position.x - this.player.position.x;
      const dz = obj.mesh.position.z - this.player.position.z;
      const n = Math.hypot(dx, dz) || 1;
      const stop = range * 0.78;
      this.startMove(obj.mesh.position.x - (dx / n) * stop, obj.mesh.position.z - (dz / n) * stop);
      this.pendingCombat = true;
      this.pendingCombatTarget = obj;
      this.pendingCombatChat = chat;
      this.hud.chat(`You close on the ${this.combatName(obj)}…`, 'combat');
      return;
    }
    this.beginCombat(obj, chat);
  }

  private nearestCombatTarget(): WorldObject | null {
    let best: WorldObject | null = null;
    let bestD = Infinity;
    for (const o of this.objects) {
      if ((o.kind !== 'yeti' && o.kind !== 'orc' && o.kind !== 'dummy') || o.hp <= 0 || o.depleted) continue;
      const d = this.distTo(o);
      if (d < bestD) {
        bestD = d;
        best = o;
      }
    }
    return bestD < 16 ? best : null;
  }

  private approachThenGather(obj: WorldObject, duration: number, label: string): void {
    const dx = obj.mesh.position.x - this.player.position.x;
    const dz = obj.mesh.position.z - this.player.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist > GATHER_RANGE) {
      const nx = obj.mesh.position.x - (dx / dist) * (GATHER_RANGE * 0.85);
      const nz = obj.mesh.position.z - (dz / dist) * (GATHER_RANGE * 0.85);
      this.startMove(nx, nz);
      this.pendingGather = { obj, duration, label };
      return;
    }
    this.faceToward(obj.mesh.position.x, obj.mesh.position.z);
    this.activity = { type: 'gather', target: obj, elapsed: 0, duration, label };
    setPlayerTool(this.player, obj.kind === 'tree' ? 'hatchet' : 'pickaxe');
    this.hud.showProgress(label, 0);
  }

  private startMove(x: number, z: number): void {
    const lim = 14;
    x = Math.max(-lim, Math.min(lim, x));
    z = Math.max(-lim, Math.min(lim, z));
    this.activity = { type: 'move', tx: x, tz: z };
    setPlayerTool(this.player, null);
    this.moveMarker.position.set(x, groundHeight(x, z) + 0.06, z);
    this.moveMarker.visible = true;
    this.hud.hideProgress();
    this.hud.hideTarget();
  }

  private handleAction(action: string): void {
    switch (action) {
      case 'attack': {
        const target = this.nearestCombatTarget();
        if (!target) {
          this.hud.chat('No enemies nearby to attack.', 'system');
          return;
        }
        const range = this.monsterAttackRange(target);
        const d = this.distTo(target);
        if (d > range + 2) {
          this.hud.chat(`${this.combatName(target)} is too far. Walk closer.`, 'system');
          this.pendingGather = null;
          const dx = target.mesh.position.x - this.player.position.x;
          const dz = target.mesh.position.z - this.player.position.z;
          const dist = Math.hypot(dx, dz) || 1;
          this.startMove(
            target.mesh.position.x - (dx / dist) * (range * 0.78),
            target.mesh.position.z - (dz / dist) * (range * 0.78),
          );
          this.pendingCombat = true;
          this.pendingCombatTarget = target;
          this.pendingCombatChat = `You ready your bronze sword against the ${this.combatName(target)}!`;
          return;
        }
        this.interactWith(target);
        break;
      }
      case 'chop': {
        const tree = this.nearest('tree');
        if (!tree) {
          this.hud.chat('No trees nearby.', 'system');
          return;
        }
        this.interactWith(tree);
        break;
      }
      case 'mine': {
        const rock = this.nearest('rock');
        if (!rock) {
          this.hud.chat('No rocks nearby.', 'system');
          return;
        }
        this.interactWith(rock);
        break;
      }
      case 'eat':
        this.eatFood();
        break;
      case 'examine':
        this.examineNearest();
        break;
    }
  }

  private nearest(kind: InteractKind): WorldObject | null {
    let best: WorldObject | null = null;
    let bestD = Infinity;
    for (const o of this.objects) {
      if (o.kind !== kind || (o.depleted && kind !== 'dummy')) continue;
      const d = this.distTo(o);
      if (d < bestD) {
        bestD = d;
        best = o;
      }
    }
    return bestD < 14 ? best : null;
  }

  private examineNearest(): void {
    const all = [...this.objects].sort((a, b) => this.distTo(a) - this.distTo(b))[0];
    if (!all || this.distTo(all) > 5) {
      this.hud.chat('You examine the Whisperwood clearing. Birds call from the canopy.', 'system');
      return;
    }
    if (all.kind === 'tree') this.hud.chat('A tall Whisperwood tree. Good for training woodcutting.', 'system');
    else if (all.kind === 'rock')
      this.hud.chat(
        `A rocky outcrop laced with ${all.meta?.ore ?? 'ore'}. Suitable for mining.`,
        'system',
      );
    else if (all.kind === 'yeti')
      this.hud.chat('A massive Frost Yeti. Dark stripes mark its fur; amber eyes burn with hunger.', 'combat');
    else if (all.kind === 'orc')
      this.hud.chat('An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.', 'combat');
    else this.hud.chat('A stuffed training dummy. Safe practice for combat skills.', 'system');
  }

  private eatFood(): void {
    const idx = this.save.inventory.findIndex((i) => i.id === 'camp_rations');
    if (idx < 0) {
      this.hud.chat('You have no camp rations left.', 'system');
      return;
    }
    if (this.save.hp >= this.save.maxHp) {
      this.hud.chat('You are already at full health.', 'system');
      return;
    }
    this.consumeAt(idx, 1);
    this.save.hp = Math.min(this.save.maxHp, this.save.hp + 25);
    this.hud.chat('You eat camp rations and recover 25 health.', 'loot');
    this.refreshUI();
    this.persist();
  }

  private handleInvClick(index: number): void {
    const item = this.save.inventory[index];
    if (!item) return;
    const meta = ITEM_META[item.id];
    this.hud.chat(`${meta?.name ?? item.id}${item.qty > 1 ? ` ×${item.qty}` : ''}`, 'system');
    if (item.id === 'camp_rations') this.eatFood();
  }

  private distTo(o: WorldObject): number {
    return Math.hypot(
      o.mesh.position.x - this.player.position.x,
      o.mesh.position.z - this.player.position.z,
    );
  }

  private faceToward(x: number, z: number, dt = 1 / 30, rate = 10): void {
    const dx = x - this.player.position.x;
    const dz = z - this.player.position.z;
    if (Math.hypot(dx, dz) > 0.01) {
      const target = Math.atan2(dx, dz);
      this.player.rotation.y = turnTowardYaw(this.player.rotation.y, target, rate, dt);
    }
  }

  private hasItem(id: string): boolean {
    return this.save.inventory.some((i) => i.id === id);
  }

  private addItem(id: string, qty = 1): boolean {
    const meta = ITEM_META[id];
    if (!meta) return false;
    if (meta.stackable) {
      const existing = this.save.inventory.find((i) => i.id === id);
      if (existing) {
        existing.qty += qty;
        return true;
      }
    }
    if (this.save.inventory.length >= 28) {
      this.hud.chat('Inventory full!', 'system');
      return false;
    }
    this.save.inventory.push({ id, qty });
    return true;
  }

  private consumeAt(index: number, qty: number): void {
    const item = this.save.inventory[index];
    if (!item) return;
    item.qty -= qty;
    if (item.qty <= 0) this.save.inventory.splice(index, 1);
  }

  private grantXp(skill: SkillId, amount: number): void {
    const sk = this.save.skills[skill];
    const old = sk.level;
    sk.xp += amount;
    sk.level = levelFromXp(sk.xp);
    this.hud.chat(`+${amount} ${skill} XP`, 'xp');
    this.vfx.spawnXp(
      this.player.position,
      amount,
      SKILL_SHORT[skill],
    );
    if (sk.level > old) {
      this.hud.chat(`Congratulations! Your ${skill} level is now ${sk.level}.`, 'xp');
      if (skill === 'constitution') {
        this.save.maxHp = 100 + (sk.level - 10) * 10;
        this.save.hp = Math.min(this.save.hp + 10, this.save.maxHp);
      }
    }
  }

  private update(dt: number): void {
    this.save.stamina = Math.min(100, this.save.stamina + dt * 4);
    this.save.focus = Math.min(100, this.save.focus + dt * 2);
    if (this.save.hp < this.save.maxHp) {
      this.save.hp = Math.min(this.save.maxHp, this.save.hp + dt * 1.5);
    }

    const now = performance.now() / 1000;
    for (const o of this.objects) {
      if (o.depleted && o.kind !== 'dummy' && o.kind !== 'yeti' && o.kind !== 'orc' && now >= o.respawnAt) {
        o.depleted = false;
        o.mesh.visible = true;
        this.hud.chat(
          o.kind === 'tree' ? 'A Whisperwood tree has grown back.' : 'An ore rock has respawned.',
          'system',
        );
      }
      if (o.kind === 'dummy' && o.hp <= 0 && now >= o.respawnAt) {
        o.hp = o.maxHp;
        o.depleted = false;
        o.mesh.visible = true;
        o.mesh.rotation.set(0, 0, 0);
        o.mesh.position.y = groundHeight(o.mesh.position.x, o.mesh.position.z);
        o.mesh.scale.setScalar(1);
        this.hud.chat('The training dummy is patched up and ready again.', 'system');
      }
      if (o.kind === 'yeti' && o.depleted && now >= o.respawnAt) {
        o.hp = o.maxHp;
        o.depleted = false;
        o.mesh.visible = true;
        o.mesh.rotation.set(0, Math.PI * 0.85, 0);
        o.mesh.scale.setScalar(1.15);
        o.mesh.position.set(YETI_HOME.x, groundHeight(YETI_HOME.x, YETI_HOME.z), YETI_HOME.z);
        // Drop any in-flight death anim so it cannot re-hide the mesh
        this.deathAnims = this.deathAnims.filter((d) => d.mesh !== o.mesh);
        this.yetiAggroed = false;
        this.yetiAttackCd = 0;
        this.yetiSwipeT = 0;
        this.yetiHitDone = false;
        this.yetiTeleDone = false;
        this.yetiMoveBlend = 0;
        animateYetiSwipe(o.mesh, 0);
        animateYetiWalk(o.mesh, this.animTime, false);
        this.hud.chat('A Frost Yeti stomps back into the north-east clearing!', 'combat');
      }
      if (o.kind === 'orc' && o.depleted && now >= o.respawnAt) {
        o.hp = o.maxHp;
        o.depleted = false;
        o.mesh.visible = true;
        o.mesh.rotation.set(0, Math.PI * 0.25, 0);
        o.mesh.scale.setScalar(1);
        o.mesh.position.set(ORC_HOME.x, groundHeight(ORC_HOME.x, ORC_HOME.z), ORC_HOME.z);
        this.orcAggroed = false;
        this.orcAttackCd = 0;
        this.orcSwipeT = 0;
        this.orcHitDone = false;
        animateOrcSpear(o.mesh, 0);
        this.hud.chat('An Orc Scout stalks back onto the south-west trail!', 'combat');
      }
    }

    // Falling snow drift
    const snowRoot = this.scene.getObjectByName('fallingSnow');
    if (snowRoot) {
      snowRoot.children.forEach((flake) => {
        flake.position.y -= (flake.userData.fall as number) * dt;
        flake.position.x += (flake.userData.drift as number) * dt;
        if (flake.position.y < 0.05) {
          flake.position.y = 6 + Math.random() * 2;
          flake.position.x = 2.5 + Math.random() * 5.5;
          flake.position.z = 5.5 + Math.random() * 4.5;
        }
      });
    }

    this.scene.traverse((obj) => {
      if (obj.name === 'flame') {
        obj.scale.y = 0.9 + Math.sin(now * 8) * 0.15;
        obj.rotation.y += dt * 2;
      }
      if (obj.name === 'flameGlow') {
        const s = 0.9 + Math.sin(now * 6) * 0.2;
        obj.scale.setScalar(s);
      }
      if (obj.name === 'yetiBreath') {
        const fightBoost = this.yetiAggroed ? 1.35 : 1;
        const pulse = (0.85 + Math.sin(now * 3.4) * 0.45) * fightBoost;
        obj.scale.set(pulse, 0.9 + pulse * 0.5, pulse * 1.25);
        const m = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (m && m.opacity !== undefined) {
          m.opacity = (0.4 + Math.sin(now * 4.2) * 0.22) * (this.yetiAggroed ? 1.15 : 1);
        }
      }
      if (obj.name === 'yetiBreathMist') {
        const fightBoost = this.yetiAggroed ? 1.3 : 1;
        const pulse = (0.85 + Math.sin(now * 2.8 + obj.position.z) * 0.4) * fightBoost;
        obj.scale.setScalar(pulse);
        const m = (obj as THREE.Mesh).material as THREE.MeshBasicMaterial;
        if (m && m.opacity !== undefined) m.opacity = Math.max(0.08, 0.28 * pulse);
      }
      if (obj.name === 'yetiEyeGlow') {
        const fight = this.yetiAggroed || (this.activity.type === 'combat' && this.activity.target?.kind === 'yeti');
        const pulse = 0.95 + Math.sin(now * 6.2) * (fight ? 0.55 : 0.28);
        obj.scale.setScalar(pulse * (fight ? 1.65 : 1.1));
        const m = (obj as THREE.Mesh).material as THREE.MeshBasicMaterial;
        if (m && m.opacity !== undefined) m.opacity = fight ? 0.72 + Math.sin(now * 7) * 0.18 : 0.45;
      }
      if (obj.name === 'yetiEye') {
        const fight = this.yetiAggroed || (this.activity.type === 'combat' && this.activity.target?.kind === 'yeti');
        const m = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (m && m.emissiveIntensity !== undefined) {
          const base = fight ? 7.2 : 4.8;
          m.emissiveIntensity = base + Math.sin(now * 6.8) * (fight ? 2.4 : 0.8);
        }
        const pulse = 1 + Math.sin(now * 6.5) * (fight ? 0.12 : 0.04);
        obj.scale.setScalar(pulse);
      }
      if (obj.name === 'yetiEyeLight') {
        const fight = this.yetiAggroed || (this.activity.type === 'combat' && this.activity.target?.kind === 'yeti');
        const light = obj as THREE.PointLight;
        light.intensity = (fight ? 1.85 : 0.85) + Math.sin(now * 7.1) * (fight ? 0.55 : 0.15);
        light.distance = fight ? 5.2 : 3.4;
      }
    });

    // Follow sun target to player for stable shadows
    this.sun.target.position.set(this.player.position.x, this.player.position.y, this.player.position.z);
    this.sun.target.updateMatrixWorld();

    this.animTime += dt;

    // Apply lingering knockback / flinch on player
    if (this.playerFlinch > 0) {
      const decay = this.playerFlinch > 0.65 ? 2.4 : 3.6;
      this.playerFlinch = Math.max(0, this.playerFlinch - dt * decay);
      animateHitFlinch(this.player, this.playerFlinch, this.playerFlinch > 0.65 ? 1.1 : 0.55);
      this.player.position.x += this.playerKnock.x * dt;
      this.player.position.z += this.playerKnock.z * dt;
      this.playerKnock.multiplyScalar(Math.max(0, 1 - dt * 5.5));
      if (this.playerFlinch <= 0) {
        this.player.rotation.z = 0;
        this.player.rotation.x = 0;
        const torso = this.player.getObjectByName('playerTorso');
        if (torso) torso.rotation.y = 0;
      }
    }

    // Scaled hit reactions on monsters / dummy
    for (let i = this.hitReacts.length - 1; i >= 0; i--) {
      const hr = this.hitReacts[i];
      hr.t -= dt;
      const amt = Math.max(0, Math.min(1, hr.t / 0.35));
      animateHitFlinch(hr.mesh, amt, hr.inten);
      if (hr.t <= 0) {
        hr.mesh.rotation.z = 0;
        hr.mesh.rotation.x = 0;
        const torso =
          hr.mesh.getObjectByName('playerTorso') ||
          hr.mesh.getObjectByName('yetiBody') ||
          hr.mesh.getObjectByName('orcBody');
        if (torso) torso.rotation.y = 0;
        this.hitReacts.splice(i, 1);
      }
    }

    // Death animations (collapse before hide/respawn timer)
    for (let i = this.deathAnims.length - 1; i >= 0; i--) {
      const d = this.deathAnims[i];
      d.t += dt;
      const p = Math.min(1, d.t / d.dur);
      animateDeath(d.mesh, d.kind, p);
      d.mesh.position.y += groundHeight(d.mesh.position.x, d.mesh.position.z);
      if (p >= 1) {
        d.mesh.visible = false;
        d.mesh.rotation.set(0, d.mesh.rotation.y, 0);
        d.mesh.scale.setScalar(d.kind === 'yeti' ? 1.15 : 1);
        d.mesh.position.y = 0;
        this.deathAnims.splice(i, 1);
      }
    }

    if (this.activity.type === 'move') {
      const { tx, tz } = this.activity;
      const dx = tx - this.player.position.x;
      const dz = tz - this.player.position.z;
      const dist = Math.hypot(dx, dz);
      // Ease into full walk speed; start decelerating near destination
      const want = dist < 0.55 ? Math.max(0.35, dist / 0.55) * MOVE_SPEED : MOVE_SPEED;
      if (this.moveSpeedCur < want) {
        this.moveSpeedCur = Math.min(want, this.moveSpeedCur + MOVE_ACCEL * dt);
      } else {
        this.moveSpeedCur = Math.max(want, this.moveSpeedCur - MOVE_DECEL * dt);
      }
      this.moveBlend = Math.min(1, this.moveBlend + dt * 4.5);
      if (dist < 0.1 && this.moveSpeedCur < 0.55) {
        this.player.position.x = tx;
        this.player.position.z = tz;
        this.moveMarker.visible = false;
        // Residual settle steps before full idle
        this.stoppingSteps = 0.28;
        this.activity = { type: 'idle' };
        this.moveSpeedCur = 0;
        if (this.pendingGather) {
          const p = this.pendingGather;
          this.pendingGather = null;
          this.approachThenGather(p.obj, p.duration, p.label);
        } else if (this.pendingCombat) {
          this.pendingCombat = false;
          const t = this.pendingCombatTarget ?? this.nearestCombatTarget();
          const chat =
            this.pendingCombatChat ||
            (t ? `You ready your bronze sword against the ${this.combatName(t)}!` : '');
          this.pendingCombatTarget = null;
          this.pendingCombatChat = '';
          if (t && t.hp > 0 && !t.depleted) {
            if (t.kind === 'yeti') this.yetiAggroed = true;
            if (t.kind === 'orc') this.orcAggroed = true;
            this.beginCombat(t, chat);
          }
        }
      } else {
        const n = dist || 1;
        const step = Math.min(dist, this.moveSpeedCur * dt);
        this.player.position.x += (dx / n) * step;
        this.player.position.z += (dz / n) * step;
        this.lastMoveDir.set(dx / n, 0, dz / n);
        // Turn-while-moving: snappy; large yaw delta gets slightly slower
        const targetYaw = Math.atan2(dx, dz);
        let yawDelta = targetYaw - this.player.rotation.y;
        while (yawDelta > Math.PI) yawDelta -= Math.PI * 2;
        while (yawDelta < -Math.PI) yawDelta += Math.PI * 2;
        const turnRate = Math.abs(yawDelta) > 1.2 ? 7 : 11;
        this.faceToward(tx, tz, dt, turnRate);
        const speedNorm = Math.min(1.05, 0.45 + (this.moveSpeedCur / MOVE_SPEED) * 0.55);
        animatePlayerWalk(this.player, this.animTime, speedNorm, this.moveBlend);
        this.save.stamina = Math.max(0, this.save.stamina - dt * 2);
      }
    } else if (this.activity.type === 'gather') {
      const act = this.activity;
      if (act.target.depleted) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        resetPlayerPose(this.player);
        this.hud.hideProgress();
      } else if (this.distTo(act.target) > GATHER_RANGE + 0.35) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        resetPlayerPose(this.player);
        this.hud.hideProgress();
        this.hud.chat('You move too far away.', 'system');
      } else {
        act.elapsed += dt;
        this.hud.showProgress(act.label, act.elapsed / act.duration);
        this.faceToward(act.target.mesh.position.x, act.target.mesh.position.z, dt, 8);
        this.toolSwing += dt;
        const gatherProg = (this.toolSwing * 1.35) % 1;
        animatePlayerGather(this.player, gatherProg, act.target.kind === 'tree' ? 'tree' : 'rock');
        // Mid-gather chip/sparks bursts
        if (Math.floor(act.elapsed * 4) !== Math.floor((act.elapsed - dt) * 4)) {
          const p = act.target.mesh.position.clone();
          p.y = act.target.kind === 'tree' ? 1.05 : 0.7;
          if (act.target.kind === 'tree') this.vfx.spawnWoodchips(p, 12);
          else this.vfx.spawnMineSparks(p, 14);
        }
        if (act.elapsed >= act.duration) {
          this.completeGather(act.target);
          this.activity = { type: 'idle' };
          setPlayerTool(this.player, null);
          resetPlayerPose(this.player);
          this.hud.hideProgress();
        }
      }
    } else if (this.activity.type === 'combat') {
      const act = this.activity;
      const target = act.target;
      this.hud.showTarget(this.combatName(target), Math.max(0, target.hp) / target.maxHp);
      if (target.hp <= 0 || target.depleted) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        resetPlayerPose(this.player);
        this.hud.hideTarget();
        this.combatCamPull = 0;
        this.combatOorT = 0;
      } else {
        const range = this.monsterAttackRange(target);
        const softLeash = range + 0.55;
        const hardLeash = range + 1.45;
        let dist = this.distTo(target);
        const midSwing =
          act.swingT > 0 && act.swingT / act.swingDur < PLAYER_ATTACK_CONNECT_END + 0.08;

        // Stick/chase slightly while committed to a swing (windup→connect) so knockback
        // or micro-drift doesn't hard-interrupt mid-combo.
        if (dist > softLeash && dist < hardLeash + 0.35 && midSwing) {
          const dx = target.mesh.position.x - this.player.position.x;
          const dz = target.mesh.position.z - this.player.position.z;
          const n = Math.hypot(dx, dz) || 1;
          const step = Math.min(dist - range * 0.88, 3.6 * dt);
          this.player.position.x += (dx / n) * step;
          this.player.position.z += (dz / n) * step;
          dist = this.distTo(target);
          this.combatOorT = Math.max(0, this.combatOorT - dt * 1.5);
        } else if (dist > softLeash && dist <= hardLeash && !midSwing) {
          // Between swings: gentle re-close instead of instant cancel
          const dx = target.mesh.position.x - this.player.position.x;
          const dz = target.mesh.position.z - this.player.position.z;
          const n = Math.hypot(dx, dz) || 1;
          const step = Math.min(dist - range * 0.9, 2.4 * dt);
          this.player.position.x += (dx / n) * step;
          this.player.position.z += (dz / n) * step;
          dist = this.distTo(target);
          this.combatOorT += dt * 0.55;
        } else if (dist > hardLeash) {
          this.combatOorT += dt;
        } else {
          this.combatOorT = Math.max(0, this.combatOorT - dt * 2.5);
        }

        // Grace window before cancel — longer if still mid-swing commit
        const grace = midSwing ? 0.55 : 0.3;
        if (dist > hardLeash && this.combatOorT >= grace && !midSwing) {
          this.abortCombatSoft(dt, true);
        } else {
          this.faceToward(target.mesh.position.x, target.mesh.position.z, dt, 10);
          if (this.isMonster(target)) {
            const dx = this.player.position.x - target.mesh.position.x;
            const dz = this.player.position.z - target.mesh.position.z;
            if (Math.hypot(dx, dz) > 0.01) {
              target.mesh.rotation.y = turnTowardYaw(
                target.mesh.rotation.y,
                Math.atan2(dx, dz),
                6,
                dt,
              );
            }
          }

          // Active swing: windup → connect → recovery
          if (act.swingT > 0) {
            act.swingT += dt;
            const prog = Math.min(1, act.swingT / act.swingDur);
            animatePlayerAttack(this.player, prog);
            if (!this.playerTeleDone && prog < 0.12) {
              this.playerTeleDone = true;
              const life = PLAYER_ATTACK_WINDUP_END * act.swingDur;
              this.vfx.spawnTelegraph(this.player.position.clone(), false, life, 0.7);
            }
            if (
              !act.hitDone &&
              prog >= PLAYER_ATTACK_CONNECT_START &&
              prog <= PLAYER_ATTACK_CONNECT_END + 0.05
            ) {
              // Connect only if still roughly in reach (forgiving)
              if (this.distTo(target) <= range + 0.95) {
                act.hitDone = true;
                this.swingAtTarget(target);
              }
            }
            if (prog >= 1) {
              act.swingT = 0;
              act.hitDone = false;
              this.playerTeleDone = false;
              act.cooldown = 0.72;
              resetPlayerPose(this.player);
              setPlayerTool(this.player, 'sword');
            }
          } else {
            act.cooldown -= dt;
            // Idle combat stance breath while waiting
            animatePlayerIdle(this.player, this.animTime);
            if (act.cooldown <= 0 && this.distTo(target) <= softLeash + 0.2) {
              act.swingT = 0.001;
              act.swingDur = PLAYER_ATTACK_DURATION;
              act.hitDone = false;
              this.playerTeleDone = false;
              setPlayerTool(this.player, 'sword');
            }
          }
        }
      }
    } else {
      setPlayerTool(this.player, null);
      // Residual foot plants after stop, then idle breath
      if (this.stoppingSteps > 0) {
        this.stoppingSteps -= dt;
        this.moveBlend = Math.max(0, this.moveBlend - dt * 3.5);
        animatePlayerWalk(this.player, this.animTime, 0.4, Math.max(0.15, this.moveBlend));
      } else {
        this.moveBlend = Math.max(0, this.moveBlend - dt * 5);
        this.moveSpeedCur = 0;
        // Turn-in-place: if nearly idle but facing wrong way after click cancel, settle pose
        animatePlayerIdle(this.player, this.animTime);
      }
      this.combatCamPull = Math.max(0, this.combatCamPull - dt * 0.6);
    }

    this.updateYetiAI(dt);

    this.updateOrcAI(dt);

    this.vfx.update(dt);
    this.updateCombatTreeFade(dt);
    if (this.combatAbortT > 0) {
      this.combatAbortT = Math.max(0, this.combatAbortT - dt);
      // Ease out of swing pose instead of snapping
      animatePlayerIdle(this.player, this.animTime);
      if (this.combatAbortT <= 0) {
        setPlayerTool(this.player, null);
        resetPlayerPose(this.player);
      }
    }
    this.snapMoversToGround();
    tickTerrainFoliage(this.animTime);
    this.updateCamera(dt);

    this.save.x = this.player.position.x;
    this.save.z = this.player.position.z;
    this.saveTimer += dt;
    if (this.saveTimer >= SAVE_EVERY) {
      this.saveTimer = 0;
      this.persist();
    }

    this.hud.setOrbs(this.save.hp, this.save.maxHp, this.save.focus, this.save.stamina);
    this.drawMinimapMarkers();
  }

  private completeGather(obj: WorldObject): void {
    if (obj.kind === 'tree') {
      if (!this.addItem('whisper_logs', 1)) return;
      this.grantXp('woodcutting', 25);
      this.hud.chat('You chop some Whisper Logs.', 'loot');
      this.vfx.spawnWoodchips(obj.mesh.position.clone().setY(1.1), 22);
      obj.depleted = true;
      obj.mesh.visible = false;
      obj.respawnAt = performance.now() / 1000 + 12;
    } else if (obj.kind === 'rock') {
      const ore = obj.meta?.ore === 'tin' ? 'tin_ore' : 'copper_ore';
      if (!this.addItem(ore, 1)) return;
      this.grantXp('mining', 28);
      this.hud.chat(`You mine some ${ITEM_META[ore].name}.`, 'loot');
      this.vfx.spawnMineSparks(obj.mesh.position.clone().setY(0.7), 24);
      obj.depleted = true;
      obj.mesh.visible = false;
      obj.respawnAt = performance.now() / 1000 + 14;
    }
    this.refreshUI();
    this.persist();
  }

  private swingAtTarget(target: WorldObject): void {
    const atk = this.save.skills.attack.level;
    const str = this.save.skills.strength.level;
    const hitChance = 0.65 + atk * 0.01;
    const label = this.combatName(target);
    if (Math.random() > hitChance) {
      this.hud.chat(`You swing and miss the ${label}.`, 'combat');
      return;
    }
    const dmg = 3 + Math.floor(Math.random() * (4 + str));
    target.hp -= dmg;
    const xpAtk = target.kind === 'yeti' ? 18 : target.kind === 'orc' ? 15 : 12;
    const xpStr = target.kind === 'yeti' ? 14 : target.kind === 'orc' ? 12 : 8;
    const xpCon = target.kind === 'yeti' ? 8 : target.kind === 'orc' ? 6 : 4;
    this.grantXp('attack', xpAtk);
    this.grantXp('strength', xpStr);
    this.grantXp('constitution', xpCon);
    const hitPos = target.mesh.position.clone().setY(1.25);
    // Impact VFX synced to actual connect frame
    this.vfx.spawnHitSparks(hitPos, 14 + Math.min(12, dmg));
    this.vfx.spawnImpactBurst(hitPos, target.kind === 'yeti' ? 16 : 20, target.kind === 'yeti');
    this.vfx.spawnDamage(target.mesh.position.clone().setY(1.5), dmg, dmg >= 8);
    flashDummy(target.mesh, dmg >= 10 ? 260 : 160);
    // Hit reaction scaled to damage: flinch vs big stagger
    const inten = dmg >= 12 ? 1.25 : dmg >= 8 ? 0.9 : 0.5;
    const knock = dmg >= 12 ? 0.28 : dmg >= 8 ? 0.18 : 0.1;
    const away = Math.atan2(
      target.mesh.position.x - this.player.position.x,
      target.mesh.position.z - this.player.position.z,
    );
    target.mesh.position.x += Math.sin(away) * knock;
    target.mesh.position.z += Math.cos(away) * knock;
    this.hitReacts.push({ mesh: target.mesh, t: inten > 1 ? 0.48 : 0.28, inten });
    if (target.kind === 'yeti') {
      this.vfx.spawnIceBurst(target.mesh.position.clone(), 12);
      this.yetiAggroed = true;
    }
    if (target.kind === 'orc') {
      this.vfx.spawnSpearThrust(target.mesh.position.clone(), 8);
      this.orcAggroed = true;
    }

    if (target.kind === 'dummy') {
      const recoil = Math.random() < 0.15 ? 1 : 0;
      if (recoil) {
        this.save.hp = Math.max(1, this.save.hp - recoil);
        this.hud.chat(`You hit the dummy for ${dmg}. Splinter grazes you (-${recoil}).`, 'combat');
      } else {
        this.hud.chat(`You hit the training dummy for ${dmg} damage.`, 'combat');
      }
    } else if (target.kind === 'orc') {
      this.hud.chat(`You strike the Orc Scout for ${dmg} damage!`, 'combat');
    } else {
      this.hud.chat(`You strike the Frost Yeti for ${dmg} damage!`, 'combat');
    }

    if (target.hp <= 0) {
      target.hp = 0;
      if (target.kind === 'yeti') this.onYetiDeath(target);
      else if (target.kind === 'orc') this.onOrcDeath(target);
      else this.onDummyDeath(target);
    } else {
      this.hud.showTarget(label, target.hp / target.maxHp);
    }
    this.refreshUI();
    this.persist();
  }

  private onDummyDeath(target: WorldObject): void {
    target.respawnAt = performance.now() / 1000 + 8;
    this.deathAnims.push({ mesh: target.mesh, kind: 'dummy', t: 0, dur: 0.85 });
    this.hud.chat('The training dummy collapses! It will be repaired shortly.', 'combat');
    this.grantXp('defence', 15);
    this.activity = { type: 'idle' };
    setPlayerTool(this.player, null);
    resetPlayerPose(this.player);
    this.hud.hideTarget();
    this.combatCamPull = 0;
  }

  private onYetiDeath(target: WorldObject): void {
    target.depleted = true;
    target.respawnAt = performance.now() / 1000 + YETI_RESPAWN_SEC;
    this.yetiAggroed = false;
    this.yetiAttackCd = 0;
    this.yetiSwipeT = 0;
    this.vfx.spawnIceBurst(target.mesh.position.clone().setY(1.2), 28);
    this.vfx.spawnImpactBurst(target.mesh.position.clone().setY(1.0), 16, true);
    this.deathAnims.push({ mesh: target.mesh, kind: 'yeti', t: 0, dur: 1.35 });
    this.hud.chat('The Frost Yeti collapses in a burst of frost!', 'combat');
    // home reset on next respawn
    this.grantXp('defence', 28);
    this.grantXp('attack', 12);
    this.grantXp('strength', 10);
    this.grantXp('constitution', 10);
    if (this.addItem('yeti_fur', 1)) {
      this.hud.chat('You loot Yeti Fur.', 'loot');
    }
    if (Math.random() < 0.55) {
      if (this.addItem('frost_claw', 1)) {
        this.hud.chat('You pry free a Frost Claw!', 'loot');
      }
    }
    this.activity = { type: 'idle' };
    setPlayerTool(this.player, null);
    this.hud.hideTarget();
    this.refreshUI();
    this.persist();
  }


  private onOrcDeath(target: WorldObject): void {
    target.depleted = true;
    target.respawnAt = performance.now() / 1000 + ORC_RESPAWN_SEC;
    this.orcAggroed = false;
    this.orcAttackCd = 0;
    this.orcSwipeT = 0;
    this.vfx.spawnSpearThrust(target.mesh.position.clone().setY(1.1), 16);
    this.vfx.spawnHitSparks(target.mesh.position.clone().setY(1.0), 20);
    this.vfx.spawnImpactBurst(target.mesh.position.clone().setY(1.0), 14, false);
    this.deathAnims.push({ mesh: target.mesh, kind: 'orc', t: 0, dur: 1.15 });
    this.hud.chat('The Orc Scout falls! Its spear clatters to the dirt.', 'combat');
    this.grantXp('defence', 22);
    this.grantXp('attack', 10);
    this.grantXp('strength', 8);
    this.grantXp('constitution', 8);
    if (this.addItem('orc_tooth', 1)) {
      this.hud.chat('You loot an Orc Tooth.', 'loot');
    }
    if (Math.random() < 0.65) {
      if (this.addItem('scout_leather', 1)) {
        this.hud.chat('You strip Scout Leather from the vest.', 'loot');
      }
    }
    this.activity = { type: 'idle' };
    setPlayerTool(this.player, null);
    this.hud.hideTarget();
    this.refreshUI();
    this.persist();
  }

  private updateYetiAI(dt: number): void {
    const yeti = this.yetiTarget;
    if (!yeti || yeti.depleted || yeti.hp <= 0) {
      if (this.yetiSwipeT > 0) this.yetiSwipeT = Math.max(0, this.yetiSwipeT - dt);
      return;
    }

    const dist = this.distTo(yeti);
    // Leash: pull back if too far from home while aggroed
    const homeDist = Math.hypot(yeti.mesh.position.x - YETI_HOME.x, yeti.mesh.position.z - YETI_HOME.z);

    if (!this.yetiAggroed && dist <= YETI_AGGRO_RADIUS) {
      this.yetiAggroed = true;
      this.hud.chat('The Frost Yeti snarls and charges!', 'combat');
      if (this.activity.type !== 'combat' || this.activity.target !== yeti) {
        this.beginCombat(yeti, 'The Frost Yeti engages you!');
      }
    }

    if (!this.yetiAggroed) {
      // Always finish returning to the NE snow home after leash/de-aggro
      // (previously a single lerp on leash-break left the yeti stranded on grass).
      const hx = YETI_HOME.x - yeti.mesh.position.x;
      const hz = YETI_HOME.z - yeti.mesh.position.z;
      const hd = Math.hypot(hx, hz);
      if (hd > 0.15) {
        const step = Math.min(hd, 2.8 * dt);
        yeti.mesh.position.x += (hx / hd) * step;
        yeti.mesh.position.z += (hz / hd) * step;
        yeti.mesh.rotation.y = turnTowardYaw(yeti.mesh.rotation.y, Math.atan2(hx, hz), 4, dt);
        yeti.mesh.position.y = 0;
        animateYetiWalk(yeti.mesh, this.animTime, true, Math.min(1, hd / 2));
        animateYetiSwipe(yeti.mesh, 0);
        return;
      }
      yeti.mesh.position.set(YETI_HOME.x, 0, YETI_HOME.z);
      animateYetiWalk(yeti.mesh, this.animTime, false);
      animateYetiSwipe(yeti.mesh, 0);
      return;
    }

    const dx = this.player.position.x - yeti.mesh.position.x;
    const dz = this.player.position.z - yeti.mesh.position.z;
    if (Math.hypot(dx, dz) > 0.01) {
      yeti.mesh.rotation.y = turnTowardYaw(yeti.mesh.rotation.y, Math.atan2(dx, dz), 5, dt);
    }

    let moving = false;
    if (dist > YETI_ATTACK_RANGE && dist < YETI_AGGRO_RADIUS + 5 && homeDist < 7.5) {
      // Lumbering accel — heavy creature eases into chase
      this.yetiMoveBlend = Math.min(1, this.yetiMoveBlend + dt * 2.2);
      const step = Math.min(dist - YETI_ATTACK_RANGE * 0.85, 2.35 * this.yetiMoveBlend * dt);
      const n = Math.hypot(dx, dz) || 1;
      yeti.mesh.position.x += (dx / n) * step;
      yeti.mesh.position.z += (dz / n) * step;
      moving = true;
      const sx = YETI_HOME.x;
      const sz = YETI_HOME.z;
      const lx = yeti.mesh.position.x - sx;
      const lz = yeti.mesh.position.z - sz;
      const ld = Math.hypot(lx, lz);
      if (ld > 7.5) {
        yeti.mesh.position.x = sx + (lx / ld) * 7.5;
        yeti.mesh.position.z = sz + (lz / ld) * 7.5;
      }
    } else {
      this.yetiMoveBlend = Math.max(0, this.yetiMoveBlend - dt * 3);
    }

    // Soft leash break
    if (dist > YETI_AGGRO_RADIUS + 7 || homeDist > 8.5) {
      this.yetiAggroed = false;
      this.yetiSwipeT = 0;
      this.hud.chat('The Frost Yeti loses interest and returns to the clearing.', 'system');
      yeti.mesh.position.x += (YETI_HOME.x - yeti.mesh.position.x) * Math.min(1, dt * 0.9);
      yeti.mesh.position.z += (YETI_HOME.z - yeti.mesh.position.z) * Math.min(1, dt * 0.9);
      if (this.activity.type === 'combat' && this.activity.target === yeti) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        resetPlayerPose(this.player);
        this.hud.hideTarget();
      }
      animateYetiWalk(yeti.mesh, this.animTime, true, 0.7);
      return;
    }

    if (this.yetiSwipeT > 0) {
      this.yetiSwipeT += dt;
      const prog = Math.min(1, this.yetiSwipeT / YETI_ATTACK_DURATION);
      animateYetiAttack(yeti.mesh, prog);
      if (!this.yetiTeleDone) {
        this.yetiTeleDone = true;
        const life = YETI_ATTACK_WINDUP_END * YETI_ATTACK_DURATION + 0.08;
        this.vfx.spawnTelegraph(yeti.mesh.position.clone(), true, life, 1.35);
        this.vfx.spawnArcTelegraph(yeti.mesh.position.clone(), yeti.mesh.rotation.y, true, life);
      }
      if (
        !this.yetiHitDone &&
        prog >= YETI_ATTACK_CONNECT_START &&
        prog <= YETI_ATTACK_CONNECT_END + 0.05
      ) {
        this.yetiHitDone = true;
        this.yetiMeleeHit(yeti);
      }
      if (prog >= 1) {
        this.yetiSwipeT = 0;
        this.yetiHitDone = false;
        this.yetiTeleDone = false;
        animateYetiSwipe(yeti.mesh, 0);
      }
    } else {
      animateYetiWalk(yeti.mesh, this.animTime, moving, Math.max(this.yetiMoveBlend, moving ? 0.4 : 0));
      this.yetiAttackCd -= dt;
      if (dist <= YETI_ATTACK_RANGE + 0.4 && this.yetiAttackCd <= 0) {
        this.yetiAttackCd = 2.55;
        this.yetiSwipeT = 0.001;
        this.yetiHitDone = false;
        this.yetiTeleDone = false;
      }
    }
  }

  private yetiMeleeHit(yeti: WorldObject): void {
    const dist = this.distTo(yeti);
    if (dist > YETI_ATTACK_RANGE + 0.65) return;
    const def = this.save.skills.defence.level;
    const raw = YETI_DMG_MIN + Math.floor(Math.random() * (YETI_DMG_MAX - YETI_DMG_MIN + 1));
    const mitigated = Math.max(2, raw - Math.floor(def / 5));
    this.save.hp = Math.max(0, this.save.hp - mitigated);
    this.vfx.spawnClawSlash(this.player.position.clone(), 14);
    this.vfx.spawnIceBurst(this.player.position.clone(), 16);
    this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1), 16, true);
    this.vfx.spawnDamage(this.player.position.clone().setY(1.3), mitigated);
    // Player flinch + knockback scaled to damage
    this.playerFlinch = mitigated >= 8 ? 1.15 : 0.75;
    const away = Math.atan2(
      this.player.position.x - yeti.mesh.position.x,
      this.player.position.z - yeti.mesh.position.z,
    );
    const kb = mitigated >= 8 ? 3.4 : 2.4;
    this.playerKnock.set(Math.sin(away) * kb, 0, Math.cos(away) * kb);
    this.hud.chat(`The Frost Yeti swipes you for ${mitigated} damage!`, 'combat');
    this.hud.setOrbs(this.save.hp, this.save.maxHp, this.save.focus, this.save.stamina);

    if (this.save.hp <= 0) {
      this.save.hp = Math.max(10, Math.floor(this.save.maxHp * 0.35));
      this.player.position.set(0, 0, 2);
      this.yetiAggroed = false;
      this.activity = { type: 'idle' };
      setPlayerTool(this.player, null);
      this.hud.hideTarget();
      this.hud.chat('You fall! You wake by the Thornrest campfire, battered but alive.', 'combat');
      yeti.mesh.position.set(YETI_HOME.x, 0, YETI_HOME.z);
    }
    if (this.activity.type !== 'combat' && yeti.hp > 0 && !yeti.depleted) {
      this.beginCombat(yeti, 'You raise your guard against the Frost Yeti!');
    }
    this.refreshUI();
    this.persist();
  }



  private updateOrcAI(dt: number): void {
    const orc = this.orcTarget;
    if (!orc || orc.depleted || orc.hp <= 0) {
      if (this.orcSwipeT > 0) this.orcSwipeT = Math.max(0, this.orcSwipeT - dt);
      return;
    }

    const dist = this.distTo(orc);
    const homeDist = Math.hypot(orc.mesh.position.x - ORC_HOME.x, orc.mesh.position.z - ORC_HOME.z);

    if (!this.orcAggroed && dist <= ORC_AGGRO_RADIUS) {
      this.orcAggroed = true;
      this.hud.chat('The Orc Scout snarls and levels its spear!', 'combat');
      if (this.activity.type !== 'combat' || this.activity.target !== orc) {
        this.beginCombat(orc, 'The Orc Scout engages you!');
      }
    }

    if (!this.orcAggroed) {
      animateOrcWalk(orc.mesh, this.animTime, false);
      animateOrcSpear(orc.mesh, 0);
      return;
    }

    const dx = this.player.position.x - orc.mesh.position.x;
    const dz = this.player.position.z - orc.mesh.position.z;
    if (Math.hypot(dx, dz) > 0.01) {
      orc.mesh.rotation.y = turnTowardYaw(orc.mesh.rotation.y, Math.atan2(dx, dz), 7, dt);
    }

    let moving = false;
    if (dist > ORC_ATTACK_RANGE && dist < ORC_AGGRO_RADIUS + 5 && homeDist < 7.5) {
      this.orcMoveBlend = Math.min(1, this.orcMoveBlend + dt * 3.5);
      const step = Math.min(dist - ORC_ATTACK_RANGE * 0.85, 3.2 * this.orcMoveBlend * dt);
      const n = Math.hypot(dx, dz) || 1;
      orc.mesh.position.x += (dx / n) * step;
      orc.mesh.position.z += (dz / n) * step;
      moving = true;
      const sx = ORC_HOME.x;
      const sz = ORC_HOME.z;
      const lx = orc.mesh.position.x - sx;
      const lz = orc.mesh.position.z - sz;
      const ld = Math.hypot(lx, lz);
      if (ld > 7.5) {
        orc.mesh.position.x = sx + (lx / ld) * 7.5;
        orc.mesh.position.z = sz + (lz / ld) * 7.5;
      }
    } else {
      this.orcMoveBlend = Math.max(0, this.orcMoveBlend - dt * 4);
    }

    if (dist > ORC_AGGRO_RADIUS + 7 || homeDist > 8.5) {
      this.orcAggroed = false;
      this.orcSwipeT = 0;
      this.hud.chat('The Orc Scout loses interest and returns to the trail.', 'system');
      orc.mesh.position.x += (ORC_HOME.x - orc.mesh.position.x) * Math.min(1, dt * 1.1);
      orc.mesh.position.z += (ORC_HOME.z - orc.mesh.position.z) * Math.min(1, dt * 1.1);
      if (this.activity.type === 'combat' && this.activity.target === orc) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        resetPlayerPose(this.player);
        this.hud.hideTarget();
      }
      animateOrcWalk(orc.mesh, this.animTime, true, 0.75);
      return;
    }

    if (this.orcSwipeT > 0) {
      this.orcSwipeT += dt;
      const prog = Math.min(1, this.orcSwipeT / ORC_ATTACK_DURATION);
      animateOrcAttack(orc.mesh, prog);
      if (!this.orcTeleDone) {
        this.orcTeleDone = true;
        const life = ORC_ATTACK_WINDUP_END * ORC_ATTACK_DURATION + 0.06;
        this.vfx.spawnTelegraph(orc.mesh.position.clone(), false, life, 1.1);
      }
      if (
        !this.orcHitDone &&
        prog >= ORC_ATTACK_CONNECT_START &&
        prog <= ORC_ATTACK_CONNECT_END + 0.05
      ) {
        this.orcHitDone = true;
        this.orcMeleeHit(orc);
      }
      if (prog >= 1) {
        this.orcSwipeT = 0;
        this.orcHitDone = false;
        this.orcTeleDone = false;
        animateOrcSpear(orc.mesh, 0);
      }
    } else {
      animateOrcWalk(orc.mesh, this.animTime, moving, Math.max(this.orcMoveBlend, moving ? 0.45 : 0));
      this.orcAttackCd -= dt;
      if (dist <= ORC_ATTACK_RANGE + 0.4 && this.orcAttackCd <= 0) {
        this.orcAttackCd = 2.05;
        this.orcSwipeT = 0.001;
        this.orcHitDone = false;
        this.orcTeleDone = false;
      }
    }
  }

  private orcMeleeHit(orc: WorldObject): void {
    const dist = this.distTo(orc);
    if (dist > ORC_ATTACK_RANGE + 0.65) return;
    const def = this.save.skills.defence.level;
    const raw = ORC_DMG_MIN + Math.floor(Math.random() * (ORC_DMG_MAX - ORC_DMG_MIN + 1));
    const mitigated = Math.max(2, raw - Math.floor(def / 5));
    this.save.hp = Math.max(0, this.save.hp - mitigated);
    this.vfx.spawnSpearThrust(this.player.position.clone(), 14);
    this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1), 14);
    this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05), 16, false);
    this.vfx.spawnDamage(this.player.position.clone().setY(1.3), mitigated);
    this.playerFlinch = mitigated >= 7 ? 1.05 : 0.7;
    const away = Math.atan2(
      this.player.position.x - orc.mesh.position.x,
      this.player.position.z - orc.mesh.position.z,
    );
    const kb = mitigated >= 7 ? 2.9 : 2.1;
    this.playerKnock.set(Math.sin(away) * kb, 0, Math.cos(away) * kb);
    this.hud.chat(`The Orc Scout thrusts its spear for ${mitigated} damage!`, 'combat');
    this.hud.setOrbs(this.save.hp, this.save.maxHp, this.save.focus, this.save.stamina);

    if (this.save.hp <= 0) {
      this.save.hp = Math.max(10, Math.floor(this.save.maxHp * 0.35));
      this.player.position.set(0, 0, 2);
      this.orcAggroed = false;
      this.yetiAggroed = false;
      this.activity = { type: 'idle' };
      setPlayerTool(this.player, null);
      this.hud.hideTarget();
      this.hud.chat('You fall! You wake by the Thornrest campfire, battered but alive.', 'combat');
      orc.mesh.position.set(ORC_HOME.x, 0, ORC_HOME.z);
    }
    if (this.activity.type !== 'combat' && orc.hp > 0 && !orc.depleted) {
      this.beginCombat(orc, 'You raise your guard against the Orc Scout!');
    }
    this.refreshUI();
    this.persist();
  }

  /** Soft range abort — settle pose briefly instead of hard interrupt. */
  private abortCombatSoft(_dt: number, chat: boolean): void {
    if (chat) this.hud.chat('You step out of range.', 'combat');
    this.combatAbortT = 0.22;
    this.combatOorT = 0;
    this.activity = { type: 'idle' };
    this.hud.hideTarget();
    this.combatCamPull = Math.max(0.15, this.combatCamPull * 0.5);
    // Keep sword for a beat while pose eases — reset next frames via abort settle
    setPlayerTool(this.player, 'sword');
  }

  private sitOnGround(obj: THREE.Object3D, extraY = 0): void {
    obj.position.y = groundHeight(obj.position.x, obj.position.z) + extraY;
  }

  private snapMoversToGround(): void {
    const dying = new Set(this.deathAnims.map((d) => d.mesh));
    this.sitOnGround(this.player, Number(this.player.userData.locomotionY) || 0);
    if (this.yetiTarget && !dying.has(this.yetiTarget.mesh)) this.sitOnGround(this.yetiTarget.mesh);
    if (this.orcTarget && !dying.has(this.orcTarget.mesh)) this.sitOnGround(this.orcTarget.mesh);
    if (this.dummyTarget && !dying.has(this.dummyTarget.mesh)) this.sitOnGround(this.dummyTarget.mesh);
    if (this.moveMarker.visible) this.sitOnGround(this.moveMarker, 0.06);
  }

  private updateCamera(dt: number): void {
    // Combat framing: lift + slight pull-back so pine canopy doesn't bury telegraphs
    const pull = Math.min(1, this.combatCamPull);
    const ox = this.camOffset.x;
    const oy = this.camOffset.y + pull * 1.55;
    const oz = this.camOffset.z + pull * 0.85;
    const desired = this.camSmooth;
    desired.set(
      this.player.position.x + ox,
      oy,
      this.player.position.z + oz,
    );
    const follow = 1 - Math.exp(-4.2 * dt);
    this.camera.position.lerp(desired, follow);
    // Bias look toward fight focus (monster mid-body) when engaged
    let lookX = this.player.position.x;
    let lookZ = this.player.position.z;
    if (this.activity.type === 'combat') {
      const t = this.activity.target.mesh.position;
      lookX = this.player.position.x * 0.55 + t.x * 0.45;
      lookZ = this.player.position.z * 0.55 + t.z * 0.45;
    }
    this.lookSmooth.set(lookX, this.player.position.y + 1.05 + pull * 0.55, lookZ);
    this.camLook.lerp(this.lookSmooth, follow);
    this.camera.lookAt(this.camLook);
  }

  /** Fade pine canopies that sit between camera and combatants. */
  private updateCombatTreeFade(dt: number): void {
    const fighting =
      this.activity.type === 'combat' || this.yetiAggroed || this.orcAggroed;
    const cam = this.camera.position;
    let fx = this.player.position.x;
    let fz = this.player.position.z;
    if (this.activity.type === 'combat') {
      fx = fx * 0.5 + this.activity.target.mesh.position.x * 0.5;
      fz = fz * 0.5 + this.activity.target.mesh.position.z * 0.5;
    } else if (this.yetiAggroed && this.yetiTarget) {
      fx = this.yetiTarget.mesh.position.x;
      fz = this.yetiTarget.mesh.position.z;
    } else if (this.orcAggroed && this.orcTarget) {
      fx = this.orcTarget.mesh.position.x;
      fz = this.orcTarget.mesh.position.z;
    }
    const segX = fx - cam.x;
    const segZ = fz - cam.z;
    const segLen = Math.hypot(segX, segZ) || 1;

    for (const o of this.objects) {
      if (o.kind !== 'tree') continue;
      const tx = o.mesh.position.x - cam.x;
      const tz = o.mesh.position.z - cam.z;
      const t = Math.max(0, Math.min(1, (tx * segX + tz * segZ) / (segLen * segLen)));
      const cx = cam.x + segX * t;
      const cz = cam.z + segZ * t;
      const lateral = Math.hypot(o.mesh.position.x - cx, o.mesh.position.z - cz);
      const want = fighting && t > 0.12 && t < 0.92 && lateral < 2.15 ? 0.22 : 1;
      o.mesh.traverse((c) => {
        const mesh = c as THREE.Mesh;
        if (!mesh.isMesh || mesh.name === 'hit' || mesh.name === 'outline') return;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (!mat || !('opacity' in mat)) return;
        if (!mesh.userData.fadeReady) {
          // Unique clone so shared tree mats don't all fade together
          const cloned = mat.clone();
          cloned.transparent = true;
          mesh.material = cloned;
          mesh.userData.fadeReady = true;
          mesh.userData.fadeOpacity = 1;
        }
        const cur = (mesh.userData.fadeOpacity as number) ?? 1;
        const next = cur + (want - cur) * Math.min(1, dt * 5.5);
        mesh.userData.fadeOpacity = next;
        const m = mesh.material as THREE.MeshStandardMaterial;
        m.opacity = next;
        m.transparent = next < 0.98;
        m.depthWrite = next > 0.75;
      });
    }
  }

  private drawMinimapMarkers(): void {
    const markers: { x: number; z: number; color: string }[] = [];
    for (const o of this.objects) {
      if (o.depleted && o.kind !== 'dummy' && o.kind !== 'yeti' && o.kind !== 'orc') continue;
      if (o.kind === 'tree') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#2d8a2d' });
      else if (o.kind === 'rock') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#888' });
      else if (o.kind === 'yeti') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#7ec8ff' });
      else if (o.kind === 'orc') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#6a9a2a' });
      else markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#c43c3c' });
    }
    markers.push({ x: -1.2, z: -0.5, color: '#ff8844' });
    this.hud.drawMinimap(this.player.position.x, this.player.position.z, this.player.rotation.y, markers);
  }

  private refreshUI(): void {
    this.hud.setInventory(this.save.inventory);
    this.hud.setSkills(this.save);
    this.hud.setOrbs(this.save.hp, this.save.maxHp, this.save.focus, this.save.stamina);
  }

  private persist(): void {
    writeSave(this.save);
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate = (): void => {
    if (!this.running) return;
    requestAnimationFrame(this.animate);
    const dt = Math.min(0.05, this.clock.getDelta());
    this.update(dt);
    this.renderer.render(this.scene, this.camera);
  };
}
