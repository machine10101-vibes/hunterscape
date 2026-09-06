import * as THREE from 'three';
import { HUD } from '../ui/HUD';
import {
  createCampfire,
  createDummy,
  createGround,
  createPlayerMesh,
  createRock,
  createTent,
  createTree,
} from '../rendering/meshes';
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

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private player: THREE.Group;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private clock = new THREE.Clock();
  private hud: HUD;
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

  constructor(canvas: HTMLCanvasElement) {
    this.save = loadSave();
    this.hud = new HUD();

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0x87a0c0);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x87a0c0, 28, 55);

    this.camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 120);

    this.setupLights();
    this.ground = createGround(48);
    this.scene.add(this.ground);
    this.buildWorld();

    this.player = createPlayerMesh();
    this.player.position.set(this.save.x, 0, this.save.z);
    this.scene.add(this.player);

    this.moveMarker = new THREE.Mesh(
      new THREE.RingGeometry(0.25, 0.38, 24),
      new THREE.MeshBasicMaterial({ color: 0xd4a84b, transparent: true, opacity: 0.85, side: THREE.DoubleSide }),
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
    const hemi = new THREE.HemisphereLight(0xc8d8f0, 0x3a5a28, 0.85);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff0d0, 1.15);
    sun.position.set(12, 22, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 2;
    sun.shadow.camera.far = 50;
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 20;
    sun.shadow.camera.top = 20;
    sun.shadow.camera.bottom = -20;
    this.scene.add(sun);
    this.scene.add(new THREE.AmbientLight(0x405060, 0.35));
  }

  private buildWorld(): void {
    // Tent + campfire near spawn
    const tent = createTent();
    tent.position.set(-3.5, 0, -1.5);
    this.scene.add(tent);

    const fire = createCampfire();
    fire.position.set(-1.2, 0, -0.5);
    this.scene.add(fire);

    // Decorative rocks / stumps
    const border = [
      [-8, -6], [8, -7], [-10, 4], [9, 5], [0, -10], [-6, 8], [6, 9],
    ];
    for (const [x, z] of border) {
      const bush = new THREE.Mesh(
        new THREE.SphereGeometry(0.45 + Math.random() * 0.2, 6, 4),
        new THREE.MeshStandardMaterial({ color: 0x2a5a28, flatShading: true }),
      );
      bush.position.set(x, 0.3, z);
      bush.castShadow = true;
      this.scene.add(bush);
    }

    // Trees
    const treeSpots: [number, number][] = [
      [4.5, -3], [6.2, -1.5], [7.5, 1], [5.5, 3.5], [3, 5],
      [-5, 4], [-7, 2], [-6.5, -3.5], [2, -6], [-2.5, -7],
      [8, -5], [-8.5, -1],
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

    // Rocks
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

    // Training dummy
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

    // Path rings near camp
    const pathMat = new THREE.MeshStandardMaterial({ color: 0x6b5a3a, roughness: 1, flatShading: true });
    for (let i = 0; i < 8; i++) {
      const p = new THREE.Mesh(new THREE.CircleGeometry(0.55, 8), pathMat);
      p.rotation.x = -Math.PI / 2;
      p.position.set(-0.3 + i * 0.35, 0.02, 0.8 - i * 0.15);
      p.receiveShadow = true;
      this.scene.add(p);
    }
  }

  private bindInput(canvas: HTMLCanvasElement): void {
    const onPointer = (ev: PointerEvent) => {
      // Ignore HUD clicks
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

    // Interactables first
    const hitMeshes: THREE.Object3D[] = [];
    for (const o of this.objects) {
      if (o.depleted && o.kind !== 'dummy') continue;
      o.mesh.traverse((c) => {
        if ((c as THREE.Mesh).isMesh) hitMeshes.push(c);
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

    // Ground move
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
      // Queue gather after arrive via checking in update — store pending
      this.pendingGather = { obj, duration, label };
      return;
    }
    this.faceToward(obj.mesh.position.x, obj.mesh.position.z);
    this.activity = { type: 'gather', target: obj, elapsed: 0, duration, label };
    this.hud.showProgress(label, 0);
  }

  private pendingGather: { obj: WorldObject; duration: number; label: string } | null = null;

  private startMove(x: number, z: number): void {
    // Clamp to playable area
    const lim = 14;
    x = Math.max(-lim, Math.min(lim, x));
    z = Math.max(-lim, Math.min(lim, z));
    this.activity = { type: 'move', tx: x, tz: z };
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

  private pendingCombat = false;

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
    if (sk.level > old) {
      this.hud.chat(`Congratulations! Your ${skill} level is now ${sk.level}.`, 'xp');
      if (skill === 'constitution') {
        this.save.maxHp = 100 + (sk.level - 10) * 10;
        this.save.hp = Math.min(this.save.hp + 10, this.save.maxHp);
      }
    }
  }

  private update(dt: number): void {
    // Soft regen
    this.save.stamina = Math.min(100, this.save.stamina + dt * 4);
    this.save.focus = Math.min(100, this.save.focus + dt * 2);
    if (this.save.hp < this.save.maxHp) {
      this.save.hp = Math.min(this.save.maxHp, this.save.hp + dt * 1.5);
    }

    // Respawn resources
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

    // Campfire flicker
    this.scene.traverse((obj) => {
      if (obj.name === 'flame') {
        obj.scale.y = 0.9 + Math.sin(now * 8) * 0.15;
        obj.rotation.y += dt * 2;
      }
    });

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
        // Bob stop
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
        this.hud.hideProgress();
      } else if (this.distTo(act.target) > GATHER_RANGE + 0.35) {
        this.activity = { type: 'idle' };
        this.hud.hideProgress();
        this.hud.chat('You move too far away.', 'system');
      } else {
        act.elapsed += dt;
        this.hud.showProgress(act.label, act.elapsed / act.duration);
        // Chop bob
        this.player.rotation.y += Math.sin(now * 12) * 0.002;
        if (act.elapsed >= act.duration) {
          this.completeGather(act.target);
          this.activity = { type: 'idle' };
          this.hud.hideProgress();
        }
      }
    } else if (this.activity.type === 'combat') {
      const act = this.activity;
      const target = act.target;
      this.hud.showTarget('Training Dummy', Math.max(0, target.hp) / target.maxHp);
      if (target.hp <= 0) {
        this.activity = { type: 'idle' };
        this.hud.hideTarget();
        return;
      }
      if (this.distTo(target) > ATTACK_RANGE + 0.4) {
        this.activity = { type: 'idle' };
        this.hud.hideTarget();
        this.hud.chat('You step out of range.', 'combat');
        return;
      }
      this.faceToward(target.mesh.position.x, target.mesh.position.z);
      act.cooldown -= dt;
      if (act.cooldown <= 0) {
        act.cooldown = 1.6;
        this.swingAtDummy(target);
      }
    }

    this.updateCamera(dt);

    this.save.x = this.player.position.x;
    this.save.z = this.player.position.z;
    this.saveTimer += dt;
    if (this.saveTimer >= SAVE_EVERY) {
      this.saveTimer = 0;
      this.persist();
    }

    // Orbs + minimap each frame (cheap)
    this.hud.setOrbs(this.save.hp, this.save.maxHp, this.save.focus, this.save.stamina);
    this.drawMinimapMarkers();
  }

  private completeGather(obj: WorldObject): void {
    if (obj.kind === 'tree') {
      if (!this.addItem('whisper_logs', 1)) return;
      this.grantXp('woodcutting', 25);
      this.hud.chat('You chop some Whisper Logs.', 'loot');
      obj.depleted = true;
      obj.mesh.visible = false;
      obj.respawnAt = performance.now() / 1000 + 12;
    } else if (obj.kind === 'rock') {
      const ore = obj.meta?.ore === 'tin' ? 'tin_ore' : 'copper_ore';
      if (!this.addItem(ore, 1)) return;
      this.grantXp('mining', 28);
      this.hud.chat(`You mine some ${ITEM_META[ore].name}.`, 'loot');
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
    // Tiny recoil damage for feedback
    const recoil = Math.random() < 0.15 ? 1 : 0;
    if (recoil) {
      this.save.hp = Math.max(1, this.save.hp - recoil);
      this.hud.chat(`You hit the dummy for ${dmg}. Splinter grazes you (-${recoil}).`, 'combat');
    } else {
      this.hud.chat(`You hit the training dummy for ${dmg} damage.`, 'combat');
    }
    // Punch animation
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
    // Camp
    markers.push({ x: -1.2, z: -0.5, color: '#ff8844' });
    this.hud.drawMinimap(this.player.position.x, this.player.position.z, markers);
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
