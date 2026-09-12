import * as THREE from 'three';
import { animatePlayerIdle } from '../rendering/anim';
import { createPlayerMesh, setPlayerTool } from '../rendering/player';
import type { EquipSlot, SaveData } from '../game/types';

/** Dedicated 3D portrait of the hunter for the Gear window. */
export class HeroPane {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private hero: THREE.Group;
  private pivot: THREE.Group;
  private clock = new THREE.Clock();
  private running = false;
  private raf = 0;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.38;
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.shadowMap.enabled = true;

    this.scene = new THREE.Scene();
    this.scene.add(new THREE.HemisphereLight(0xf2f7ff, 0x4a5a32, 1.05));
    const sun = new THREE.DirectionalLight(0xfff6e0, 1.9);
    sun.position.set(2.4, 4.2, 3.2);
    sun.castShadow = true;
    this.scene.add(sun);
    const rim = new THREE.DirectionalLight(0xc8dcff, 0.45);
    rim.position.set(-3, 1.6, -2.4);
    this.scene.add(rim);

    this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 20);
    // Same 3/4 framing as the pose harness so the face and the weapon both read.
    const look = new THREE.Vector3(0, 1.0, 0);
    this.camera.position.setFromSpherical(new THREE.Spherical(3.4, 1.22, 0.55)).add(look);
    this.camera.lookAt(look);

    this.pivot = new THREE.Group();
    this.hero = createPlayerMesh();
    this.pivot.add(this.hero);
    this.scene.add(this.pivot);

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 32),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28 }),
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = 0.01;
    this.scene.add(disc);

    this.resize();
  }

  setEnvironment(env: THREE.Texture | null): void {
    this.scene.environment = env;
  }

  syncEquipment(save: SaveData): void {
    // The portrait only draws the worn weapon. Tools appear when that slot is
    // inspected — otherwise a standing hunter with a hatchet looks like a bug.
    setPlayerTool(this.hero, save.equipped.weapon ? 'sword' : null);
  }

  /** Prefer the slot the player just clicked so the portrait matches the inspect. */
  showSlot(slot: EquipSlot | null, save: SaveData): void {
    if (slot === 'weapon' && save.equipped.weapon) setPlayerTool(this.hero, 'sword');
    else if (slot === 'hatchet' && save.equipped.hatchet) setPlayerTool(this.hero, 'hatchet');
    else if (slot === 'pickaxe' && save.equipped.pickaxe) setPlayerTool(this.hero, 'pickaxe');
    else this.syncEquipment(save);
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.clock.getDelta();
    this.resize();
    const tick = () => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, this.clock.getDelta());
      this.pivot.rotation.y += dt * 0.18;
      animatePlayerIdle(this.hero, this.clock.elapsedTime);
      this.renderer.render(this.scene, this.camera);
    };
    tick();
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  resize(): void {
    const w = Math.max(120, this.canvas.clientWidth || 220);
    const h = Math.max(160, this.canvas.clientHeight || 280);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
}
