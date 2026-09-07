import * as THREE from 'three';
import {
  animateOrcAttack,
  animateOrcWalk,
  animatePlayerAttack,
  animatePlayerGather,
  animatePlayerIdle,
  animatePlayerWalk,
  animateYetiAttack,
  animateYetiWalk,
  ORC_ATTACK_DURATION,
  PLAYER_ATTACK_DURATION,
  YETI_ATTACK_DURATION,
} from '../rendering/anim';
import {
  createBarrel,
  createBedroll,
  createCampfire,
  createCrate,
  createDummy,
  createFrostYeti,
  createOrcScout,
  createPlayerMesh,
  createRock,
  createTent,
  createTree,
  setPlayerTool,
} from '../rendering/meshes';

export type StudioPose =
  | 'idle'
  | 'walk'
  | 'attack'
  | 'sword'
  | 'sword-walk'
  | 'slash'
  | 'chop'
  | 'mine';

interface CatalogEntry {
  id: string;
  name: string;
  group: string;
  poses?: StudioPose[];
  build: () => THREE.Object3D;
}

const POSE_LABEL: Record<StudioPose, string> = {
  idle: 'Idle',
  walk: 'Walk',
  attack: 'Attack',
  sword: 'Sword guard',
  'sword-walk': 'Sword walk',
  slash: 'Slash',
  chop: 'Chop',
  mine: 'Mine',
};

const CATALOG: CatalogEntry[] = [
  {
    id: 'hunter',
    name: 'Male Hunter',
    group: 'Characters',
    poses: ['idle', 'walk', 'sword', 'sword-walk', 'slash', 'chop', 'mine'],
    build: () => createPlayerMesh(),
  },
  {
    id: 'yeti',
    name: 'Frost Yeti',
    group: 'Creatures',
    poses: ['idle', 'walk', 'attack'],
    build: () => createFrostYeti(),
  },
  {
    id: 'orc',
    name: 'Orc Scout',
    group: 'Creatures',
    poses: ['idle', 'walk', 'attack'],
    build: () => createOrcScout(),
  },
  {
    id: 'dummy',
    name: 'Training Dummy',
    group: 'World',
    build: () => createDummy(),
  },
  {
    id: 'tree',
    name: 'Whisperwood Tree',
    group: 'World',
    build: () => createTree(2),
  },
  {
    id: 'copper',
    name: 'Copper Rock',
    group: 'World',
    build: () => createRock('copper', 1),
  },
  {
    id: 'tin',
    name: 'Tin Rock',
    group: 'World',
    build: () => createRock('tin', 2),
  },
  {
    id: 'campfire',
    name: 'Campfire',
    group: 'World',
    build: () => createCampfire(),
  },
  {
    id: 'tent',
    name: 'Tent',
    group: 'World',
    build: () => createTent(),
  },
  {
    id: 'crate',
    name: 'Crate',
    group: 'World',
    build: () => createCrate(),
  },
  {
    id: 'barrel',
    name: 'Barrel',
    group: 'World',
    build: () => createBarrel(),
  },
  {
    id: 'bedroll',
    name: 'Bedroll',
    group: 'World',
    build: () => createBedroll(),
  },
];

/**
 * In-game model inspect window. Click-drag orbits a full 360° around each
 * procedural mesh so lighting, joints, and silhouette can be reviewed.
 */
export class ModelStudio {
  private root: HTMLElement;
  private listEl: HTMLElement;
  private poseEl: HTMLElement;
  private titleEl: HTMLElement;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private current: THREE.Object3D | null = null;
  private entry: CatalogEntry | null = null;
  private pose: StudioPose = 'idle';
  private animT = 0;
  private spherical = new THREE.Spherical(4.6, 1.12, 0.55);
  private look = new THREE.Vector3(0, 1, 0);
  private dragging = false;
  private dragBtn = 0;
  private lastX = 0;
  private lastY = 0;
  private autoSpin = false;
  private openFlag = false;
  private stage!: THREE.Group;

  constructor(private canvas: HTMLCanvasElement) {
    this.camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.08, 80);
    this.root = document.getElementById('studio') as HTMLElement;
    this.listEl = document.getElementById('studio-list') as HTMLElement;
    this.poseEl = document.getElementById('studio-poses') as HTMLElement;
    this.titleEl = document.getElementById('studio-model-name') as HTMLElement;
    this.buildScene();
    this.buildList();
    this.bindUi();
    this.bindOrbit();
  }

  isOpen(): boolean {
    return this.openFlag;
  }

  setEnvironment(tex: THREE.Texture | null): void {
    this.scene.environment = tex;
    this.scene.environmentIntensity = 0.7;
  }

  toggle(): void {
    if (this.openFlag) this.close();
    else this.open();
  }

  open(): void {
    this.openFlag = true;
    this.root.hidden = false;
    const hud = document.getElementById('hud');
    if (hud) hud.hidden = true;
    if (!this.entry) this.select(CATALOG[0].id);
    this.fitCurrent();
  }

  close(): void {
    this.openFlag = false;
    this.dragging = false;
    this.root.hidden = true;
    const hud = document.getElementById('hud');
    if (hud) hud.hidden = false;
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
  }

  tick(dt: number): void {
    if (!this.openFlag) return;
    this.animT += dt;
    if (this.autoSpin) this.spherical.theta += dt * 0.55;
    this.applyPose(dt);
    this.updateCamera();
  }

  render(renderer: THREE.WebGLRenderer): void {
    renderer.setClearColor(0x6e746c);
    renderer.render(this.scene, this.camera);
    renderer.setClearColor(0x9ec6e4);
  }

  private buildScene(): void {
    this.scene.background = new THREE.Color(0x6e746c);
    this.scene.fog = new THREE.Fog(0x6e746c, 16, 36);

    this.scene.add(new THREE.HemisphereLight(0xf4f7ff, 0x3a4038, 1.05));
    const key = new THREE.DirectionalLight(0xfff4dc, 2.05);
    key.position.set(4.5, 7.5, 5.5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.bias = -0.0004;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 24;
    key.shadow.camera.left = -5;
    key.shadow.camera.right = 5;
    key.shadow.camera.top = 5;
    key.shadow.camera.bottom = -5;
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0xc8dcff, 0.62);
    fill.position.set(-6, 3.5, -2);
    this.scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffe0b8, 0.38);
    rim.position.set(-2, 4, 7);
    this.scene.add(rim);
    this.scene.add(new THREE.AmbientLight(0x6a7480, 0.42));

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(6.5, 48),
      new THREE.MeshStandardMaterial({
        color: 0x5c625c,
        roughness: 0.94,
        metalness: 0.04,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.55, 1.62, 48),
      new THREE.MeshBasicMaterial({ color: 0x8a6a28, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.008;
    this.scene.add(ring);

    const grid = new THREE.GridHelper(8, 16, 0x4a4030, 0x2e3238);
    grid.position.y = 0.004;
    const gridMat = grid.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.35;
    this.scene.add(grid);

    this.stage = new THREE.Group();
    this.scene.add(this.stage);
  }

  private buildList(): void {
    this.listEl.innerHTML = '';
    let lastGroup = '';
    for (const entry of CATALOG) {
      if (entry.group !== lastGroup) {
        lastGroup = entry.group;
        const h = document.createElement('div');
        h.className = 'studio-group';
        h.textContent = entry.group;
        this.listEl.appendChild(h);
      }
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'studio-item';
      btn.dataset.id = entry.id;
      btn.textContent = entry.name;
      btn.addEventListener('click', () => this.select(entry.id));
      this.listEl.appendChild(btn);
    }
  }

  private bindUi(): void {
    document.getElementById('btn-studio')?.addEventListener('click', () => this.toggle());
    document.getElementById('studio-close')?.addEventListener('click', () => this.close());
    document.getElementById('studio-reset')?.addEventListener('click', () => this.fitCurrent());
    document.getElementById('studio-spin')?.addEventListener('click', (ev) => {
      this.autoSpin = !this.autoSpin;
      (ev.currentTarget as HTMLButtonElement).classList.toggle('on', this.autoSpin);
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.openFlag) {
        this.close();
        e.preventDefault();
        return;
      }
      if (e.key.toLowerCase() === 'v' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
        this.toggle();
      }
    });
  }

  private bindOrbit(): void {
    const onDown = (ev: PointerEvent) => {
      if (!this.openFlag) return;
      if (ev.target !== this.canvas) return;
      this.dragging = true;
      this.dragBtn = ev.button;
      this.lastX = ev.clientX;
      this.lastY = ev.clientY;
      this.canvas.setPointerCapture(ev.pointerId);
      ev.preventDefault();
    };
    const onMove = (ev: PointerEvent) => {
      if (!this.openFlag || !this.dragging) return;
      const dx = ev.clientX - this.lastX;
      const dy = ev.clientY - this.lastY;
      this.lastX = ev.clientX;
      this.lastY = ev.clientY;
      if (this.dragBtn === 2 || ev.shiftKey) {
        const pan = this.spherical.radius * 0.0016;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        this.camera.matrix.extractBasis(right, up, new THREE.Vector3());
        this.look.addScaledVector(right, -dx * pan);
        this.look.addScaledVector(up, dy * pan);
      } else {
        this.spherical.theta -= dx * 0.007;
        this.spherical.phi -= dy * 0.007;
        this.spherical.phi = Math.max(0.06, Math.min(Math.PI - 0.06, this.spherical.phi));
      }
    };
    const onUp = (ev: PointerEvent) => {
      if (!this.dragging) return;
      this.dragging = false;
      try {
        this.canvas.releasePointerCapture(ev.pointerId);
      } catch {
        /* ignore */
      }
    };
    this.canvas.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    this.canvas.addEventListener('contextmenu', (ev) => {
      if (this.openFlag) ev.preventDefault();
    });
    this.canvas.addEventListener(
      'wheel',
      (ev) => {
        if (!this.openFlag) return;
        ev.preventDefault();
        const next = this.spherical.radius * (ev.deltaY > 0 ? 1.08 : 0.92);
        this.spherical.radius = Math.max(1.1, Math.min(18, next));
      },
      { passive: false },
    );
  }

  private select(id: string): void {
    const entry = CATALOG.find((e) => e.id === id);
    if (!entry) return;
    this.entry = entry;
    if (this.current) this.stage.remove(this.current);
    this.current = entry.build();
    this.current.position.set(0, 0, 0);
    this.current.rotation.set(0, 0, 0);
    this.current.traverse((obj) => {
      if (
        obj.name === 'contactShadow' ||
        obj.name === 'hit' ||
        obj.name === 'yetiBreath' ||
        obj.name === 'yetiBreathMist' ||
        obj.name === 'yetiEyeGlow' ||
        obj.name === 'yetiEyeLight'
      ) {
        obj.visible = false;
      }
    });
    this.stage.add(this.current);
    this.animT = 0;
    this.pose = entry.poses?.[0] ?? 'idle';
    this.titleEl.textContent = entry.name;
    this.listEl.querySelectorAll('.studio-item').forEach((btn) => {
      btn.classList.toggle('on', (btn as HTMLElement).dataset.id === id);
    });
    this.buildPoseBar();
    this.fitCurrent();
  }

  private buildPoseBar(): void {
    this.poseEl.innerHTML = '';
    const poses = this.entry?.poses;
    if (!poses?.length) {
      this.poseEl.hidden = true;
      return;
    }
    this.poseEl.hidden = false;
    for (const pose of poses) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'studio-pose';
      btn.textContent = POSE_LABEL[pose];
      btn.classList.toggle('on', pose === this.pose);
      btn.addEventListener('click', () => {
        this.pose = pose;
        this.animT = 0;
        this.buildPoseBar();
      });
      this.poseEl.appendChild(btn);
    }
  }

  private fitCurrent(): void {
    if (!this.current) return;
    this.current.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(this.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    this.look.copy(center);
    this.spherical.radius = Math.max(2.4, size.length() * 1.05);
    this.spherical.phi = 1.12;
    this.spherical.theta = 0.55;
    this.autoSpin = false;
    document.getElementById('studio-spin')?.classList.remove('on');
  }

  private updateCamera(): void {
    const pos = new THREE.Vector3().setFromSpherical(this.spherical).add(this.look);
    this.camera.position.copy(pos);
    this.camera.lookAt(this.look);
  }

  private applyPose(_dt: number): void {
    if (!this.current || !this.entry) return;
    const id = this.entry.id;
    if (id === 'hunter' && this.current instanceof THREE.Group) {
      this.applyHunter(this.current);
      const bob = Number(this.current.userData.locomotionY) || 0;
      this.current.position.y = bob;
      return;
    }
    if (id === 'yeti' && this.current instanceof THREE.Group) {
      this.applyYeti(this.current);
      return;
    }
    if (id === 'orc' && this.current instanceof THREE.Group) {
      this.applyOrc(this.current);
    }
  }

  private applyHunter(mesh: THREE.Group): void {
    const pose = this.pose;
    if (pose === 'idle') {
      setPlayerTool(mesh, null);
      animatePlayerIdle(mesh, this.animT);
      return;
    }
    if (pose === 'walk') {
      setPlayerTool(mesh, null);
      animatePlayerWalk(mesh, this.animT, 0.9, 1);
      return;
    }
    if (pose === 'sword') {
      setPlayerTool(mesh, 'sword');
      animatePlayerIdle(mesh, this.animT);
      return;
    }
    if (pose === 'sword-walk') {
      setPlayerTool(mesh, 'sword');
      animatePlayerWalk(mesh, this.animT, 0.9, 1);
      return;
    }
    if (pose === 'slash') {
      setPlayerTool(mesh, 'sword');
      const p = (this.animT % PLAYER_ATTACK_DURATION) / PLAYER_ATTACK_DURATION;
      animatePlayerAttack(mesh, p);
      return;
    }
    if (pose === 'chop') {
      setPlayerTool(mesh, 'hatchet');
      animatePlayerGather(mesh, this.animT * 0.7, 'tree');
      return;
    }
    setPlayerTool(mesh, 'pickaxe');
    animatePlayerGather(mesh, this.animT * 0.7, 'rock');
  }

  private applyYeti(mesh: THREE.Group): void {
    if (this.pose === 'walk') {
      animateYetiWalk(mesh, this.animT, true, 1);
      return;
    }
    if (this.pose === 'attack') {
      const p = (this.animT % YETI_ATTACK_DURATION) / YETI_ATTACK_DURATION;
      animateYetiAttack(mesh, p);
      return;
    }
    animateYetiWalk(mesh, this.animT, false, 0);
  }

  private applyOrc(mesh: THREE.Group): void {
    if (this.pose === 'walk') {
      animateOrcWalk(mesh, this.animT, true, 1);
      return;
    }
    if (this.pose === 'attack') {
      const p = (this.animT % ORC_ATTACK_DURATION) / ORC_ATTACK_DURATION;
      animateOrcAttack(mesh, p);
      return;
    }
    animateOrcWalk(mesh, this.animT, false, 0);
  }
}
