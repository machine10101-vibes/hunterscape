import * as THREE from 'three';
import { HUD } from '../ui/HUD';
import {
  animateYetiSwipe,
  createBarrel,
  createBedroll,
  createCampfire,
  createCrate,
  createDummy,
  createFrostYeti,
  createGround,
  createPlayerMesh,
  createRock,
  createSkyDome,
  createTent,
  createTree,
  flashDummy,
  setPlayerTool,
} from '../rendering/meshes';
import { VFX } from '../rendering/vfx';
import { loadSave, writeSave } from './Persistence';
import {
  ITEM_META,
  levelFromXp,
  type SaveData,
  type SkillId,
} from './types';

type InteractKind = 'tree' | 'rock' | 'dummy' | 'yeti';

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
  | { type: 'combat'; target: WorldObject; cooldown: number };

const GATHER_RANGE = 1.6;
const ATTACK_RANGE = 1.8;
const YETI_ATTACK_RANGE = 2.3;
const YETI_AGGRO_RADIUS = 5.5;
const MOVE_SPEED = 4.2;
const SAVE_EVERY = 3;
const YETI_MAX_HP = 80;
const YETI_RESPAWN_SEC = 28;
const YETI_DMG_MIN = 5;
const YETI_DMG_MAX = 10;

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
  private running = true;
  private sun!: THREE.DirectionalLight;
  private rim!: THREE.DirectionalLight;
  private pendingGather: { obj: WorldObject; duration: number; label: string } | null = null;
  private pendingCombat = false;
  private toolSwing = 0;

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
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.setClearColor(0x87a8c8);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x9ab0c4, 32, 62);

    this.camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 140);

    this.setupLights();
    this.scene.add(createSkyDome(70));
    this.ground = createGround(48);
    this.scene.add(this.ground);
    this.buildWorld();

    this.player = createPlayerMesh();
    this.player.position.set(this.save.x, 0, this.save.z);
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
    this.moveMarker.position.y = 0.05;
    this.moveMarker.visible = false;
    this.scene.add(this.moveMarker);

    this.bindInput(canvas);
    this.hud.onAction = (a) => this.handleAction(a);
    this.hud.onInventoryClick = (i) => this.handleInvClick(i);

    this.refreshUI();
    this.hud.chat('Welcome to Thornrest Camp in the Whisperwood.', 'system');
    this.hud.chat('Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.', 'system');
    this.hud.chat('A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.', 'combat');
    this.hud.chat('Your progress is saved in this browser.', 'system');

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  private setupLights(): void {
    const hemi = new THREE.HemisphereLight(0xd0e4ff, 0x3a4a22, 0.55);
    this.scene.add(hemi);

    this.sun = new THREE.DirectionalLight(0xfff2d8, 1.35);
    this.sun.position.set(14, 24, 10);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.00035;
    this.sun.shadow.normalBias = 0.03;
    this.sun.shadow.radius = 2.5;
    this.sun.shadow.camera.near = 2;
    this.sun.shadow.camera.far = 55;
    this.sun.shadow.camera.left = -22;
    this.sun.shadow.camera.right = 22;
    this.sun.shadow.camera.top = 22;
    this.sun.shadow.camera.bottom = -22;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    // Cool rim / fill opposite the sun for silhouette pop
    this.rim = new THREE.DirectionalLight(0x88aacc, 0.45);
    this.rim.position.set(-10, 8, -12);
    this.scene.add(this.rim);

    this.scene.add(new THREE.AmbientLight(0x304050, 0.28));
  }

  private buildWorld(): void {
    const tent = createTent();
    tent.position.set(-3.5, 0, -1.5);
    this.scene.add(tent);

    const fire = createCampfire();
    fire.position.set(-1.2, 0, -0.5);
    this.scene.add(fire);

    const crate = createCrate();
    crate.position.set(-2.4, 0, -2.2);
    crate.rotation.y = 0.3;
    this.scene.add(crate);

    const barrel = createBarrel();
    barrel.position.set(-4.2, 0, -0.4);
    this.scene.add(barrel);

    const barrel2 = createBarrel();
    barrel2.position.set(-4.55, 0, 0.15);
    barrel2.rotation.y = 0.6;
    this.scene.add(barrel2);

    const bed = createBedroll();
    bed.position.set(-2.8, 0, 0.4);
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
      bush.position.set(x, 0, z);
      this.scene.add(bush);
    }

    const treeSpots: [number, number][] = [
      [4.5, -3],
      [6.2, -1.5],
      [7.5, 1],
      [5.5, 3.5],
      [3, 5],
      [-5, 4],
      [-7, 2],
      [-6.5, -3.5],
      [2, -6],
      [-2.5, -7],
      [8, -5],
      [-8.5, -1],
    ];
    treeSpots.forEach(([x, z], i) => {
      const mesh = createTree(i);
      mesh.position.set(x, 0, z);
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
      mesh.position.set(r.x, 0, r.z);
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
    dummyMesh.position.set(2.5, 0, -2.5);
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

    // Frost Yeti — north-east clearing off camp (visible, not on spawn)
    const yetiMesh = createFrostYeti();
    yetiMesh.position.set(4.2, 0, 7.2);
    yetiMesh.rotation.y = Math.PI * 0.85; // face roughly toward camp
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
      if (o.depleted && o.kind !== 'dummy' && o.kind !== 'yeti') continue;
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
      this.startMove(p.x, p.z);
    }
  }

  private interactWith(obj: WorldObject): void {
    if (obj.kind === 'yeti') {
      if (obj.depleted || obj.hp <= 0) {
        this.hud.chat('The Frost Yeti lies slain. It will return before long.', 'system');
        return;
      }
      this.beginCombat(obj, 'You ready your bronze sword against the Frost Yeti!');
      this.yetiAggroed = true;
      return;
    }
    if (obj.kind === 'dummy') {
      if (obj.hp <= 0) {
        this.hud.chat('The training dummy is already collapsed.', 'system');
        return;
      }
      this.beginCombat(obj, 'You ready your bronze sword against the training dummy.');
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
    if (obj.kind === 'dummy') return 'Training Dummy';
    return obj.kind;
  }

  private beginCombat(obj: WorldObject, chat: string): void {
    this.hud.chat(chat, 'combat');
    this.pendingGather = null;
    this.activity = { type: 'combat', target: obj, cooldown: 0 };
    setPlayerTool(this.player, 'sword');
    this.hud.showTarget(this.combatName(obj), obj.hp / obj.maxHp);
  }

  private nearestCombatTarget(): WorldObject | null {
    let best: WorldObject | null = null;
    let bestD = Infinity;
    for (const o of this.objects) {
      if ((o.kind !== 'yeti' && o.kind !== 'dummy') || o.hp <= 0 || o.depleted) continue;
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
    this.moveMarker.position.set(x, 0.05, z);
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
        const range = target.kind === 'yeti' ? YETI_ATTACK_RANGE : ATTACK_RANGE;
        const d = this.distTo(target);
        if (d > range + 2) {
          this.hud.chat(`${this.combatName(target)} is too far. Walk closer.`, 'system');
          this.pendingGather = null;
          const dx = target.mesh.position.x - this.player.position.x;
          const dz = target.mesh.position.z - this.player.position.z;
          const dist = Math.hypot(dx, dz) || 1;
          this.startMove(
            target.mesh.position.x - (dx / dist) * 1.5,
            target.mesh.position.z - (dz / dist) * 1.5,
          );
          this.pendingCombat = true;
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

  private faceToward(x: number, z: number): void {
    const dx = x - this.player.position.x;
    const dz = z - this.player.position.z;
    if (Math.hypot(dx, dz) > 0.01) {
      this.player.rotation.y = Math.atan2(dx, dz);
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
      if (o.depleted && o.kind !== 'dummy' && o.kind !== 'yeti' && now >= o.respawnAt) {
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
        this.hud.chat('The training dummy is patched up and ready again.', 'system');
      }
      if (o.kind === 'yeti' && o.depleted && now >= o.respawnAt) {
        o.hp = o.maxHp;
        o.depleted = false;
        o.mesh.visible = true;
        o.mesh.rotation.z = 0;
        o.mesh.position.y = 0;
        this.yetiAggroed = false;
        this.yetiAttackCd = 0;
        animateYetiSwipe(o.mesh, 0);
        this.hud.chat('A Frost Yeti stomps back into the north-east clearing!', 'combat');
      }
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
    });

    // Follow sun target to player for stable shadows
    this.sun.target.position.set(this.player.position.x, 0, this.player.position.z);
    this.sun.target.updateMatrixWorld();

    if (this.activity.type === 'move') {
      const { tx, tz } = this.activity;
      const dx = tx - this.player.position.x;
      const dz = tz - this.player.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.08) {
        this.player.position.x = tx;
        this.player.position.z = tz;
        this.moveMarker.visible = false;
        this.activity = { type: 'idle' };
        this.player.position.y = 0;
        if (this.pendingGather) {
          const p = this.pendingGather;
          this.pendingGather = null;
          this.approachThenGather(p.obj, p.duration, p.label);
        } else if (this.pendingCombat) {
          this.pendingCombat = false;
          const t = this.nearestCombatTarget();
          if (t) this.interactWith(t);
        }
      } else {
        const step = Math.min(dist, MOVE_SPEED * dt);
        this.player.position.x += (dx / dist) * step;
        this.player.position.z += (dz / dist) * step;
        this.faceToward(tx, tz);
        this.player.position.y = Math.abs(Math.sin(now * 10)) * 0.06;
        this.save.stamina = Math.max(0, this.save.stamina - dt * 2);
      }
    } else if (this.activity.type === 'gather') {
      const act = this.activity;
      if (act.target.depleted) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        this.hud.hideProgress();
      } else if (this.distTo(act.target) > GATHER_RANGE + 0.35) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        this.hud.hideProgress();
        this.hud.chat('You move too far away.', 'system');
      } else {
        act.elapsed += dt;
        this.hud.showProgress(act.label, act.elapsed / act.duration);
        this.toolSwing += dt;
        const root = this.player.getObjectByName('toolRoot');
        if (root) {
          root.rotation.x = Math.sin(this.toolSwing * 10) * 0.45;
        }
        // Mid-gather chip/sparks bursts (frequent + dense enough to screenshot)
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
        this.hud.hideTarget();
      } else {
        const range = target.kind === 'yeti' ? YETI_ATTACK_RANGE : ATTACK_RANGE;
        if (this.distTo(target) > range + 0.55) {
          this.activity = { type: 'idle' };
          setPlayerTool(this.player, null);
          this.hud.hideTarget();
          this.hud.chat('You step out of range.', 'combat');
        } else {
          this.faceToward(target.mesh.position.x, target.mesh.position.z);
          if (target.kind === 'yeti') {
            const dx = this.player.position.x - target.mesh.position.x;
            const dz = this.player.position.z - target.mesh.position.z;
            if (Math.hypot(dx, dz) > 0.01) target.mesh.rotation.y = Math.atan2(dx, dz);
          }
          act.cooldown -= dt;
          const root = this.player.getObjectByName('toolRoot');
          if (root && act.cooldown > 1.2) {
            root.rotation.x = -Math.sin((1.6 - act.cooldown) * 8) * 0.6;
          }
          if (act.cooldown <= 0) {
            act.cooldown = 1.6;
            this.swingAtTarget(target);
          }
        }
      }
    } else {
      setPlayerTool(this.player, null);
    }

    this.updateYetiAI(dt);

    this.vfx.update(dt);
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
    const xpAtk = target.kind === 'yeti' ? 18 : 12;
    const xpStr = target.kind === 'yeti' ? 14 : 8;
    const xpCon = target.kind === 'yeti' ? 8 : 4;
    this.grantXp('attack', xpAtk);
    this.grantXp('strength', xpStr);
    this.grantXp('constitution', xpCon);
    this.vfx.spawnHitSparks(target.mesh.position.clone().setY(1.2), 14);
    this.vfx.spawnDamage(target.mesh.position.clone().setY(1.4), dmg);
    flashDummy(target.mesh);
    if (target.kind === 'yeti') {
      this.vfx.spawnIceBurst(target.mesh.position.clone(), 8);
      this.yetiAggroed = true;
    }

    if (target.kind === 'dummy') {
      const recoil = Math.random() < 0.15 ? 1 : 0;
      if (recoil) {
        this.save.hp = Math.max(1, this.save.hp - recoil);
        this.hud.chat(`You hit the dummy for ${dmg}. Splinter grazes you (-${recoil}).`, 'combat');
      } else {
        this.hud.chat(`You hit the training dummy for ${dmg} damage.`, 'combat');
      }
    } else {
      this.hud.chat(`You strike the Frost Yeti for ${dmg} damage!`, 'combat');
    }

    target.mesh.rotation.z = (Math.random() - 0.5) * 0.12;
    setTimeout(() => {
      if (target.kind !== 'yeti' || !target.depleted) target.mesh.rotation.z = 0;
    }, 120);

    if (target.hp <= 0) {
      target.hp = 0;
      if (target.kind === 'yeti') this.onYetiDeath(target);
      else this.onDummyDeath(target);
    } else {
      this.hud.showTarget(label, target.hp / target.maxHp);
    }
    this.refreshUI();
    this.persist();
  }

  private onDummyDeath(target: WorldObject): void {
    target.respawnAt = performance.now() / 1000 + 8;
    this.hud.chat('The training dummy collapses! It will be repaired shortly.', 'combat');
    this.grantXp('defence', 15);
    this.activity = { type: 'idle' };
    setPlayerTool(this.player, null);
    this.hud.hideTarget();
  }

  private onYetiDeath(target: WorldObject): void {
    target.depleted = true;
    target.mesh.visible = false;
    target.respawnAt = performance.now() / 1000 + YETI_RESPAWN_SEC;
    this.yetiAggroed = false;
    this.yetiAttackCd = 0;
    this.vfx.spawnIceBurst(target.mesh.position.clone().setY(1.2), 22);
    this.hud.chat('The Frost Yeti collapses in a burst of frost!', 'combat');
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

  private updateYetiAI(dt: number): void {
    const yeti = this.yetiTarget;
    if (!yeti || yeti.depleted || yeti.hp <= 0) {
      if (this.yetiSwipeT > 0) this.yetiSwipeT = Math.max(0, this.yetiSwipeT - dt);
      return;
    }

    const dist = this.distTo(yeti);
    if (!this.yetiAggroed && dist <= YETI_AGGRO_RADIUS) {
      this.yetiAggroed = true;
      this.hud.chat('The Frost Yeti snarls and charges!', 'combat');
      if (this.activity.type !== 'combat' || this.activity.target !== yeti) {
        this.beginCombat(yeti, 'The Frost Yeti engages you!');
      }
    }

    if (!this.yetiAggroed) {
      yeti.mesh.position.y = Math.sin(performance.now() / 1000 * 1.4) * 0.03;
      animateYetiSwipe(yeti.mesh, 0);
      return;
    }

    const dx = this.player.position.x - yeti.mesh.position.x;
    const dz = this.player.position.z - yeti.mesh.position.z;
    if (Math.hypot(dx, dz) > 0.01) yeti.mesh.rotation.y = Math.atan2(dx, dz);

    if (dist > YETI_ATTACK_RANGE && dist < YETI_AGGRO_RADIUS + 4) {
      const step = Math.min(dist - YETI_ATTACK_RANGE * 0.85, 2.4 * dt);
      const n = Math.hypot(dx, dz) || 1;
      yeti.mesh.position.x += (dx / n) * step;
      yeti.mesh.position.z += (dz / n) * step;
      const sx = 4.2;
      const sz = 7.2;
      const lx = yeti.mesh.position.x - sx;
      const lz = yeti.mesh.position.z - sz;
      const ld = Math.hypot(lx, lz);
      if (ld > 7) {
        yeti.mesh.position.x = sx + (lx / ld) * 7;
        yeti.mesh.position.z = sz + (lz / ld) * 7;
      }
    }

    if (dist > YETI_AGGRO_RADIUS + 6) {
      this.yetiAggroed = false;
      this.hud.chat('The Frost Yeti loses interest and returns to the clearing.', 'system');
      yeti.mesh.position.x += (4.2 - yeti.mesh.position.x) * Math.min(1, dt * 0.8);
      yeti.mesh.position.z += (7.2 - yeti.mesh.position.z) * Math.min(1, dt * 0.8);
      if (this.activity.type === 'combat' && this.activity.target === yeti) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        this.hud.hideTarget();
      }
      return;
    }

    if (this.yetiSwipeT > 0) {
      this.yetiSwipeT = Math.max(0, this.yetiSwipeT - dt);
      animateYetiSwipe(yeti.mesh, 1 - this.yetiSwipeT / 0.45);
    } else {
      animateYetiSwipe(yeti.mesh, 0);
    }

    this.yetiAttackCd -= dt;
    if (dist <= YETI_ATTACK_RANGE + 0.35 && this.yetiAttackCd <= 0) {
      this.yetiAttackCd = 2.1;
      this.yetiSwipeT = 0.45;
      this.yetiMeleeHit(yeti);
    }
  }

  private yetiMeleeHit(yeti: WorldObject): void {
    const dist = this.distTo(yeti);
    if (dist > YETI_ATTACK_RANGE + 0.5) return;
    const def = this.save.skills.defence.level;
    const raw = YETI_DMG_MIN + Math.floor(Math.random() * (YETI_DMG_MAX - YETI_DMG_MIN + 1));
    const mitigated = Math.max(2, raw - Math.floor(def / 5));
    this.save.hp = Math.max(0, this.save.hp - mitigated);
    this.vfx.spawnClawSlash(this.player.position.clone(), 10);
    this.vfx.spawnIceBurst(this.player.position.clone(), 10);
    this.vfx.spawnDamage(this.player.position.clone().setY(1.3), mitigated);
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
      yeti.mesh.position.set(4.2, 0, 7.2);
    }
    if (this.activity.type !== 'combat' && yeti.hp > 0 && !yeti.depleted) {
      this.beginCombat(yeti, 'You raise your guard against the Frost Yeti!');
    }
    this.refreshUI();
    this.persist();
  }


  private updateCamera(_dt: number): void {
    const target = new THREE.Vector3(
      this.player.position.x + this.camOffset.x,
      this.camOffset.y,
      this.player.position.z + this.camOffset.z,
    );
    this.camera.position.lerp(target, 0.12);
    this.camLook.set(this.player.position.x, 0.8, this.player.position.z);
    this.camera.lookAt(this.camLook);
  }

  private drawMinimapMarkers(): void {
    const markers: { x: number; z: number; color: string }[] = [];
    for (const o of this.objects) {
      if (o.depleted && o.kind !== 'dummy' && o.kind !== 'yeti') continue;
      if (o.kind === 'tree') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#2d8a2d' });
      else if (o.kind === 'rock') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#888' });
      else if (o.kind === 'yeti') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#7ec8ff' });
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
