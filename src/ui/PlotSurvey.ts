import * as THREE from 'three';
import {
  allPlots,
  landmarksIn,
  makePlot,
  plotAt,
  plotBlurb,
  plotId,
  plotTerrain,
  PLOT_COLS,
  PLOT_ROWS,
  PLOT_SIZE,
  WORLD_HALF,
  WORLD_SIZE,
  type Plot,
} from '../game/plots';
import { groundHeight } from '../rendering/terrain';

/** Play camera sits at ~8.7 m; survey starts ~3× higher so a plot still fills the frame. */
const SURVEY_HEIGHT = 24;
const SURVEY_BACK = 11;
const SURVEY_ZOOM_MIN = 0.55;
const SURVEY_ZOOM_MAX = 4.6;
const SURVEY_FAR = 420;
const PLAY_FAR = 140;
const SKY_SURVEY_SCALE = 2.8;

/**
 * High-camera survey over the live camp scene.
 *
 * The play renderer keeps drawing the same ground, trees, and kit — this only
 * lifts the existing camera, draws a plot grid, and lets the hunter step
 * between squares. A second scene would drift from the real wood.
 */
export class PlotSurvey {
  onWillOpen: (() => void) | null = null;

  private openFlag = false;
  private root: HTMLElement;
  private gridEl: HTMLElement;
  private nameEl: HTMLElement;
  private metaEl: HTMLElement;
  private overlay: THREE.Group;
  private highlight: THREE.Mesh;
  private pickPlane: THREE.Mesh;
  private labels = new Map<string, THREE.Sprite>();
  private selected: Plot;
  private look = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();
  private zoom = 1;
  private zoomTarget = 1;
  private savedFar = PLAY_FAR;
  private savedFog: number | null = null;
  private sky: THREE.Object3D | null = null;
  snappedBack = false;
  private dragging = false;
  private dragLast = { x: 0, y: 0 };
  private dragMoved = false;
  private pointer = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();
  private gameCamera: THREE.PerspectiveCamera | null = null;

  constructor(private scene: THREE.Scene) {
    this.root = document.getElementById('plots') as HTMLElement;
    this.gridEl = document.getElementById('plots-grid') as HTMLElement;
    this.nameEl = document.getElementById('plots-name') as HTMLElement;
    this.metaEl = document.getElementById('plots-meta') as HTMLElement;
    this.selected = plotAt(0, 2) ?? makePlot(4, 4);
    this.look.set(this.selected.cx, 0.3, this.selected.cz);
    this.lookTarget.copy(this.look);

    this.overlay = new THREE.Group();
    this.overlay.name = 'plotOverlay';
    this.overlay.visible = false;
    this.buildOverlay();
    this.scene.add(this.overlay);

    this.pickPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }),
    );
    this.pickPlane.rotation.x = -Math.PI / 2;
    this.pickPlane.name = 'plotPick';
    this.overlay.add(this.pickPlane);

    this.highlight = new THREE.Mesh(
      new THREE.PlaneGeometry(PLOT_SIZE - 0.16, PLOT_SIZE - 0.16),
      new THREE.MeshBasicMaterial({
        color: 0xe8c46a,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.highlight.rotation.x = -Math.PI / 2;
    this.highlight.renderOrder = 3;
    this.overlay.add(this.highlight);

    this.buildList();
    this.bindUi();
    this.syncHighlight();
  }

  isOpen(): boolean {
    return this.openFlag;
  }

  selectedPlot(): Plot {
    return this.selected;
  }

  toggle(): void {
    if (this.openFlag) this.close();
    else this.open();
  }

  open(): void {
    if (this.openFlag) return;
    this.onWillOpen?.();
    this.openFlag = true;
    this.root.hidden = false;
    const hud = document.getElementById('hud');
    if (hud) hud.hidden = true;
    this.overlay.visible = true;
    document.getElementById('btn-plots')?.setAttribute('aria-expanded', 'true');
    this.syncHighlight();
    this.refreshCard();
  }

  close(): void {
    if (!this.openFlag) return;
    this.openFlag = false;
    this.dragging = false;
    this.root.hidden = true;
    const hud = document.getElementById('hud');
    if (hud) hud.hidden = false;
    this.overlay.visible = false;
    document.getElementById('btn-plots')?.setAttribute('aria-expanded', 'false');
    if (this.gameCamera) this.restoreCamera(this.gameCamera);
    this.snappedBack = true;
  }

  /** Restore the play camera's far plane and fog after leaving survey. */
  restoreCamera(camera: THREE.PerspectiveCamera): void {
    camera.far = this.savedFar;
    camera.near = 0.1;
    camera.updateProjectionMatrix();
    const fog = this.scene.fog;
    if (fog && this.savedFog !== null && 'density' in fog) {
      (fog as THREE.FogExp2).density = this.savedFog;
    }
    if (this.sky) this.sky.scale.setScalar(1);
  }

  prepareCamera(camera: THREE.PerspectiveCamera): void {
    this.savedFar = camera.far;
    camera.far = SURVEY_FAR;
    camera.near = 0.35;
    camera.updateProjectionMatrix();
    const fog = this.scene.fog;
    if (fog && 'density' in fog) {
      this.savedFog = (fog as THREE.FogExp2).density;
      // Same fog colour, thinner so the far squares of the wood still read.
      (fog as THREE.FogExp2).density = 0.0045;
    }
    this.sky = this.scene.getObjectByName('sky') ?? null;
    // The play dome is radius 70; a high survey cam would sit outside it.
    if (this.sky) this.sky.scale.setScalar(SKY_SURVEY_SCALE);
  }

  nudgeZoom(dir: number, step = 0.12): void {
    const next = this.zoomTarget * Math.exp(dir * step);
    this.zoomTarget = Math.min(SURVEY_ZOOM_MAX, Math.max(SURVEY_ZOOM_MIN, next));
  }

  applyCamera(camera: THREE.PerspectiveCamera, dt: number): void {
    this.gameCamera = camera;
    const ease = 1 - Math.exp(-7.5 * dt);
    this.zoom += (this.zoomTarget - this.zoom) * ease;
    this.look.lerp(this.lookTarget, 1 - Math.exp(-6.2 * dt));
    const z = this.zoom;
    camera.position.set(this.look.x, SURVEY_HEIGHT * z, this.look.z + SURVEY_BACK * z);
    camera.lookAt(this.look.x, this.look.y, this.look.z);
    if (camera.far !== SURVEY_FAR) this.prepareCamera(camera);
  }

  handlePointerDown(ev: PointerEvent, canvas: HTMLCanvasElement): void {
    if (ev.target !== canvas) return;
    this.dragging = true;
    this.dragMoved = false;
    this.dragLast.x = ev.clientX;
    this.dragLast.y = ev.clientY;
    this.pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
  }

  handlePointerMove(ev: PointerEvent): void {
    if (!this.dragging) return;
    const dx = ev.clientX - this.dragLast.x;
    const dy = ev.clientY - this.dragLast.y;
    if (Math.hypot(dx, dy) > 4) this.dragMoved = true;
    this.dragLast.x = ev.clientX;
    this.dragLast.y = ev.clientY;
    // Drag the look target across the wood; scale by how high we are sitting.
    const k = 0.018 * this.zoom;
    this.lookTarget.x = THREE.MathUtils.clamp(this.lookTarget.x - dx * k, -WORLD_HALF + 1, WORLD_HALF - 1);
    this.lookTarget.z = THREE.MathUtils.clamp(this.lookTarget.z + dy * k, -WORLD_HALF + 1, WORLD_HALF - 1);
    const under = plotAt(this.lookTarget.x, this.lookTarget.z);
    if (under && under.id !== this.selected.id) this.select(under, false);
  }

  handlePointerUp(camera: THREE.PerspectiveCamera): void {
    const wasDrag = this.dragMoved;
    this.dragging = false;
    if (wasDrag) return;
    this.raycaster.setFromCamera(this.pointer, camera);
    const hits = this.raycaster.intersectObject(this.pickPlane, false);
    if (!hits.length) return;
    const p = hits[0].point;
    const plot = plotAt(p.x, p.z);
    if (plot) this.select(plot, true);
  }

  private select(plot: Plot, frame: boolean): void {
    this.selected = plot;
    if (frame) {
      this.lookTarget.set(plot.cx, groundHeight(plot.cx, plot.cz) + 0.25, plot.cz);
    }
    this.syncHighlight();
    this.refreshCard();
  }

  private step(dc: number, dr: number): void {
    const col = Math.max(0, Math.min(PLOT_COLS - 1, this.selected.col + dc));
    const row = Math.max(0, Math.min(PLOT_ROWS - 1, this.selected.row + dr));
    this.select(makePlot(col, row), true);
  }

  private frameSelected(): void {
    this.lookTarget.set(this.selected.cx, groundHeight(this.selected.cx, this.selected.cz) + 0.25, this.selected.cz);
    this.zoomTarget = 0.85;
  }

  private frameWorld(): void {
    this.lookTarget.set(0, 0.3, 0);
    this.zoomTarget = 2.35;
  }

  private syncHighlight(): void {
    const p = this.selected;
    this.highlight.position.set(p.cx, groundHeight(p.cx, p.cz) + 0.1, p.cz);
    for (const [id, spr] of this.labels) {
      const on = id === p.id;
      spr.material.opacity = on ? 1 : 0.72;
      spr.scale.set(on ? 3.1 : 2.35, on ? 1.55 : 1.18, 1);
    }
    this.gridEl.querySelectorAll('.plot-cell').forEach((btn) => {
      btn.classList.toggle('on', (btn as HTMLElement).dataset.id === p.id);
    });
  }

  private refreshCard(): void {
    const p = this.selected;
    this.nameEl.textContent = `Plot ${p.id}`;
    const marks = landmarksIn(p);
    const lines = [
      plotTerrain(p),
      `West ${p.minX.toFixed(0)} → east ${p.maxX.toFixed(0)} · south ${p.minZ.toFixed(0)} → north ${p.maxZ.toFixed(0)}`,
    ];
    if (marks.length) lines.push(marks.map((m) => m.name).join(' · '));
    else lines.push('No authored landmarks yet — a blank square of the wood.');
    this.metaEl.textContent = lines.join('\n');
  }

  private buildList(): void {
    this.gridEl.innerHTML = '';
    // North at the top, so row 8 is first — matches looking down on the wood.
    for (let row = PLOT_ROWS - 1; row >= 0; row--) {
      for (let col = 0; col < PLOT_COLS; col++) {
        const plot = makePlot(col, row);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'plot-cell';
        btn.dataset.id = plot.id;
        btn.title = `${plot.id} — ${plotBlurb(plot)}`;
        btn.textContent = plot.id;
        btn.addEventListener('click', () => this.select(plot, true));
        this.gridEl.appendChild(btn);
      }
    }
  }

  private buildOverlay(): void {
    const pts: number[] = [];
    const step = 1;
    for (let i = 0; i <= PLOT_COLS; i++) {
      const x = -WORLD_HALF + i * PLOT_SIZE;
      for (let s = 0; s < WORLD_SIZE; s += step) {
        const z0 = -WORLD_HALF + s;
        const z1 = Math.min(WORLD_HALF, z0 + step);
        pts.push(x, groundHeight(x, z0) + 0.07, z0, x, groundHeight(x, z1) + 0.07, z1);
      }
    }
    for (let i = 0; i <= PLOT_ROWS; i++) {
      const z = -WORLD_HALF + i * PLOT_SIZE;
      for (let s = 0; s < WORLD_SIZE; s += step) {
        const x0 = -WORLD_HALF + s;
        const x1 = Math.min(WORLD_HALF, x0 + step);
        pts.push(x0, groundHeight(x0, z) + 0.07, z, x1, groundHeight(x1, z) + 0.07, z);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const lines = new THREE.LineSegments(
      geo,
      new THREE.LineBasicMaterial({
        color: 0xe8c46a,
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
      }),
    );
    lines.renderOrder = 2;
    this.overlay.add(lines);

    for (const plot of allPlots()) {
      const spr = makeLabel(plot.id);
      spr.position.set(plot.cx, groundHeight(plot.cx, plot.cz) + 1.15, plot.cz);
      this.labels.set(plot.id, spr);
      this.overlay.add(spr);
    }
  }

  private bindUi(): void {
    document.getElementById('btn-plots')?.addEventListener('click', () => this.toggle());
    document.getElementById('plots-close')?.addEventListener('click', () => this.close());
    document.getElementById('plots-frame')?.addEventListener('click', () => this.frameSelected());
    document.getElementById('plots-world')?.addEventListener('click', () => this.frameWorld());

    window.addEventListener('keydown', (e) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
      if (e.key === 'Escape' && this.openFlag) {
        this.close();
        e.preventDefault();
        return;
      }
      if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        this.toggle();
        return;
      }
      if (!this.openFlag) return;
      if (e.key === '-' || e.key === '_') this.nudgeZoom(1, 0.16);
      if (e.key === '=' || e.key === '+') this.nudgeZoom(-1, 0.16);
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') this.step(-1, 0);
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') this.step(1, 0);
      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') this.step(0, -1);
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') this.step(0, 1);
      if (e.key.toLowerCase() === 'f') this.frameSelected();
      if (e.key.toLowerCase() === 'm') this.frameWorld();
    });
  }
}

function makeLabel(text: string): THREE.Sprite {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 64;
  const ctx = c.getContext('2d')!;
  ctx.clearRect(0, 0, 128, 64);
  ctx.fillStyle = 'rgba(12, 10, 6, 0.55)';
  ctx.beginPath();
  ctx.roundRect(18, 14, 92, 36, 8);
  ctx.fill();
  ctx.strokeStyle = 'rgba(232, 196, 106, 0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#f3d27a';
  ctx.font = '700 22px Liberation Serif, Noto Serif, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 33);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.72 });
  const spr = new THREE.Sprite(mat);
  spr.scale.set(2.35, 1.18, 1);
  spr.renderOrder = 4;
  return spr;
}
