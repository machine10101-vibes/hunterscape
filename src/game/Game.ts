import * as THREE from 'three';
import { HUD } from '../ui/HUD';
import {
  createBarrel,
  createBedroll,
  createCampfire,
  createCrate,
  createDummy,
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

type InteractKind = 'tree' | 'rock' | 'dummy';

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
const MOVE_SPEED = 4.2;
const SAVE_EVERY = 3;

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

    const rockSpots: { x: number; z: number; ore: 'copper' | 'tin' }[] = [
      { x: -4, z: 6.5, ore: 'copper' },
      { x: -2.5, z: 7.5, ore: 'copper' },
      { x: -5.5, z: 7.2, ore: 'tin' },
      { x: 5, z: 7, ore: 'tin' },
      { x: 6.5, z: 6, ore: 'copper' },
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
      if (o.depleted && o.kind !== 'dummy') continue;
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
    if (obj.kind === 'dummy') {
      this.hud.chat('You ready your bronze sword against the training dummy.', 'combat');
      this.activity = { type: 'combat', target: obj, cooldown: 0 };
      setPlayerTool(this.player, 'sword');
      this.hud.showTarget('Training Dummy', obj.hp / obj.maxHp);
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
        const dummy = this.dummyTarget;
        if (!dummy) return;
        const d = this.distTo(dummy);
        if (d > ATTACK_RANGE + 2) {
          this.hud.chat('The training dummy is too far. Walk closer.', 'system');
          this.pendingGather = null;
          const dx = dummy.mesh.position.x - this.player.position.x;
          const dz = dummy.mesh.position.z - this.player.position.z;
          const dist = Math.hypot(dx, dz) || 1;
          this.startMove(
            dummy.mesh.position.x - (dx / dist) * 1.4,
            dummy.mesh.position.z - (dz / dist) * 1.4,
          );
          this.pendingCombat = true;
          return;
        }
        this.interactWith(dummy);
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
    return bestD < 10 ? best : null;
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
      if (o.depleted && o.kind !== 'dummy' && now >= o.respawnAt) {
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
        } else if (this.pendingCombat && this.dummyTarget) {
          this.pendingCombat = false;
          this.interactWith(this.dummyTarget);
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
        // Mid-gather chip/sparks bursts
        if (Math.floor(act.elapsed * 3) !== Math.floor((act.elapsed - dt) * 3)) {
          const p = act.target.mesh.position.clone();
          p.y = 0.6;
          if (act.target.kind === 'tree') this.vfx.spawnWoodchips(p, 3);
          else this.vfx.spawnMineSparks(p, 4);
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
      this.hud.showTarget('Training Dummy', Math.max(0, target.hp) / target.maxHp);
      if (target.hp <= 0) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        this.hud.hideTarget();
        return;
      }
      if (this.distTo(target) > ATTACK_RANGE + 0.4) {
        this.activity = { type: 'idle' };
        setPlayerTool(this.player, null);
        this.hud.hideTarget();
        this.hud.chat('You step out of range.', 'combat');
        return;
      }
      this.faceToward(target.mesh.position.x, target.mesh.position.z);
      act.cooldown -= dt;
      const root = this.player.getObjectByName('toolRoot');
      if (root && act.cooldown > 1.2) {
        root.rotation.x = -Math.sin((1.6 - act.cooldown) * 8) * 0.6;
      }
      if (act.cooldown <= 0) {
        act.cooldown = 1.6;
        this.swingAtDummy(target);
      }
    } else {
      setPlayerTool(this.player, null);
    }

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
      this.vfx.spawnWoodchips(obj.mesh.position.clone().setY(1.0), 14);
      obj.depleted = true;
      obj.mesh.visible = false;
      obj.respawnAt = performance.now() / 1000 + 12;
    } else if (obj.kind === 'rock') {
      const ore = obj.meta?.ore === 'tin' ? 'tin_ore' : 'copper_ore';
      if (!this.addItem(ore, 1)) return;
      this.grantXp('mining', 28);
      this.hud.chat(`You mine some ${ITEM_META[ore].name}.`, 'loot');
      this.vfx.spawnMineSparks(obj.mesh.position.clone().setY(0.6), 16);
      obj.depleted = true;
      obj.mesh.visible = false;
      obj.respawnAt = performance.now() / 1000 + 14;
    }
    this.refreshUI();
    this.persist();
  }

  private swingAtDummy(target: WorldObject): void {
    const atk = this.save.skills.attack.level;
    const str = this.save.skills.strength.level;
    const hitChance = 0.65 + atk * 0.01;
    if (Math.random() > hitChance) {
      this.hud.chat('You swing and miss the dummy.', 'combat');
      return;
    }
    const dmg = 3 + Math.floor(Math.random() * (4 + str));
    target.hp -= dmg;
    this.grantXp('attack', 12);
    this.grantXp('strength', 8);
    this.grantXp('constitution', 4);
    this.vfx.spawnHitSparks(target.mesh.position.clone(), 14);
    this.vfx.spawnDamage(target.mesh.position, dmg);
    flashDummy(target.mesh);

    const recoil = Math.random() < 0.15 ? 1 : 0;
    if (recoil) {
      this.save.hp = Math.max(1, this.save.hp - recoil);
      this.hud.chat(`You hit the dummy for ${dmg}. Splinter grazes you (-${recoil}).`, 'combat');
    } else {
      this.hud.chat(`You hit the training dummy for ${dmg} damage.`, 'combat');
    }
    target.mesh.rotation.z = (Math.random() - 0.5) * 0.15;
    setTimeout(() => {
      target.mesh.rotation.z = 0;
    }, 120);

    if (target.hp <= 0) {
      target.hp = 0;
      target.respawnAt = performance.now() / 1000 + 8;
      this.hud.chat('The training dummy collapses! It will be repaired shortly.', 'combat');
      this.grantXp('defence', 15);
      this.activity = { type: 'idle' };
      setPlayerTool(this.player, null);
      this.hud.hideTarget();
    } else {
      this.hud.showTarget('Training Dummy', target.hp / target.maxHp);
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
      if (o.depleted && o.kind !== 'dummy') continue;
      if (o.kind === 'tree') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#2d8a2d' });
      else if (o.kind === 'rock') markers.push({ x: o.mesh.position.x, z: o.mesh.position.z, color: '#888' });
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
