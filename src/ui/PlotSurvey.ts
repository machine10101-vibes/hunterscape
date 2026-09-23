import * as THREE from 'three';
import {
  HOME_COL,
  HOME_ROW,
  PLOT_COLS,
  PLOT_COUNT,
  PLOT_ROWS,
  PLOT_SIZE,
  homePlot,
  isHomePlot,
  landmarksIn,
  makePlot,
  parsePlotRef,
  plotNumber,
  plotTerrain,
  type Plot,
} from '../game/plots';
import { PlotWorld } from '../rendering/plotChunks';
import { groundHeight } from '../rendering/terrain';

/** Frame one 48×48 section the way the old "whole wood" view framed Thornrest. */
const SURVEY_HEIGHT = 58;
const SURVEY_BACK = 22;
const SURVEY_ZOOM_MIN = 0.42;
const SURVEY_ZOOM_MAX = 1.7;
const SURVEY_FAR = 900;
const PLAY_FAR = 140;
const SKY_SURVEY_SCALE = 14;

/**
 * High-camera survey over the live camp scene.
 *
 * Thornrest is one section. The other 499 are the same size, grown as you
 * inspect them so the wood keeps the real terrain shader instead of a
 * second map scene.
 */
export class PlotSurvey {
  onWillOpen: (() => void) | null = null;

  private openFlag = false;
  private root: HTMLElement;
  private atlas: HTMLCanvasElement;
  private nameEl: HTMLElement;
  private metaEl: HTMLElement;
  private jumpEl: HTMLInputElement | null;
  private overlay: THREE.Group;
  private highlight: THREE.Mesh;
  private pickPlane: THREE.Mesh;
  private border: THREE.LineSegments;
  private label: THREE.Sprite;
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
  private world: PlotWorld;
  private hoverId = '';

  constructor(private scene: THREE.Scene) {
    this.root = document.getElementById('plots') as HTMLElement;
    this.atlas = document.getElementById('plots-atlas') as HTMLCanvasElement;
    this.nameEl = document.getElementById('plots-name') as HTMLElement;
    this.metaEl = document.getElementById('plots-meta') as HTMLElement;
    this.jumpEl = document.getElementById('plots-jump') as HTMLInputElement | null;
    this.world = new PlotWorld(scene);
    this.selected = homePlot();
    this.look.set(this.selected.cx, 0.3, this.selected.cz);
    this.lookTarget.copy(this.look);

    this.overlay = new THREE.Group();
    this.overlay.name = 'plotOverlay';
    this.overlay.visible = false;
    this.scene.add(this.overlay);

    this.pickPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(PLOT_SIZE, PLOT_SIZE),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }),
    );
    this.pickPlane.rotation.x = -Math.PI / 2;
    this.pickPlane.name = 'plotPick';
    this.overlay.add(this.pickPlane);

    this.highlight = new THREE.Mesh(
      new THREE.PlaneGeometry(PLOT_SIZE - 0.8, PLOT_SIZE - 0.8),
      new THREE.MeshBasicMaterial({
        color: 0xe8c46a,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.highlight.rotation.x = -Math.PI / 2;
    this.highlight.renderOrder = 3;
    this.overlay.add(this.highlight);

    this.border = makeSectionBorder();
    this.overlay.add(this.border);
    this.label = makeLabel(this.selected.id);
    this.overlay.add(this.label);

    this.bindUi();
    this.drawAtlas();
    this.syncOverlay();
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
    this.world.focus(this.selected);
    this.lookTarget.set(this.selected.cx, groundHeight(this.selected.cx, this.selected.cz) + 0.25, this.selected.cz);
    this.look.copy(this.lookTarget);
    this.zoomTarget = 1;
    this.zoom = 1;
    this.syncOverlay();
    this.refreshCard();
    this.drawAtlas();
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

  restoreCamera(camera: THREE.PerspectiveCamera): void {
    camera.far = this.savedFar;
    camera.near = 0.1;
    camera.updateProjectionMatrix();
    const fog = this.scene.fog;
    if (fog && this.savedFog !== null && 'density' in fog) {
      (fog as THREE.FogExp2).density = this.savedFog;
    }
    if (this.sky) {
      this.sky.position.set(0, 0, 0);
      this.sky.scale.setScalar(1);
    }
  }

  prepareCamera(camera: THREE.PerspectiveCamera): void {
    this.savedFar = camera.far;
    camera.far = SURVEY_FAR;
    camera.near = 0.35;
    camera.updateProjectionMatrix();
    const fog = this.scene.fog;
    if (fog && 'density' in fog) {
      this.savedFog = (fog as THREE.FogExp2).density;
      (fog as THREE.FogExp2).density = 0.0036;
    }
    this.sky = this.scene.getObjectByName('sky') ?? null;
    if (this.sky) {
      this.sky.scale.setScalar(SKY_SURVEY_SCALE);
      this.sky.position.set(this.look.x, 0, this.look.z);
    }
  }

  nudgeZoom(dir: number, step = 0.12): void {
    const next = this.zoomTarget * Math.exp(dir * step);
    this.zoomTarget = Math.min(SURVEY_ZOOM_MAX, Math.max(SURVEY_ZOOM_MIN, next));
  }

  applyCamera(camera: THREE.PerspectiveCamera, dt: number): void {
    this.gameCamera = camera;
    this.zoom += (this.zoomTarget - this.zoom) * (1 - Math.exp(-7.5 * dt));
    this.look.lerp(this.lookTarget, 1 - Math.exp(-6.2 * dt));
    const z = this.zoom;
    camera.position.set(this.look.x, SURVEY_HEIGHT * z, this.look.z + SURVEY_BACK * z);
    camera.lookAt(this.look.x, this.look.y, this.look.z);
    if (this.sky) this.sky.position.set(this.look.x, 0, this.look.z);
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
    const k = 0.042 * this.zoom;
    const p = this.selected;
    this.lookTarget.x = THREE.MathUtils.clamp(this.lookTarget.x - dx * k, p.minX + 2, p.maxX - 2);
    this.lookTarget.z = THREE.MathUtils.clamp(this.lookTarget.z + dy * k, p.minZ + 2, p.maxZ - 2);
  }

  handlePointerUp(_camera: THREE.PerspectiveCamera): void {
    this.dragging = false;
  }

  private select(plot: Plot, frame: boolean): void {
    this.selected = plot;
    this.world.focus(plot);
    if (frame) {
      this.lookTarget.set(plot.cx, groundHeight(plot.cx, plot.cz) + 0.25, plot.cz);
      this.look.copy(this.lookTarget);
      this.zoomTarget = 1;
      this.zoom = 1;
    }
    this.syncOverlay();
    this.refreshCard();
    this.drawAtlas();
  }

  private step(dc: number, dr: number): void {
    const col = Math.max(0, Math.min(PLOT_COLS - 1, this.selected.col + dc));
    const row = Math.max(0, Math.min(PLOT_ROWS - 1, this.selected.row + dr));
    this.select(makePlot(col, row), true);
  }

  private frameSelected(): void {
    this.lookTarget.set(this.selected.cx, groundHeight(this.selected.cx, this.selected.cz) + 0.25, this.selected.cz);
    this.look.copy(this.lookTarget);
    this.zoomTarget = 1;
    this.zoom = 1;
  }

  private goHome(): void {
    this.select(homePlot(), true);
  }

  private syncOverlay(): void {
    const p = this.selected;
    const y = groundHeight(p.cx, p.cz);
    this.highlight.position.set(p.cx, y + 0.12, p.cz);
    this.pickPlane.position.set(p.cx, 0, p.cz);
    this.border.position.set(p.cx, 0, p.cz);
    this.label.position.set(p.cx, y + 2.4, p.cz);
    setLabelText(this.label, p.id);
  }

  private refreshCard(): void {
    const p = this.selected;
    const n = plotNumber(p);
    this.nameEl.textContent = `${p.id} · ${n} / ${PLOT_COUNT}`;
    const marks = landmarksIn(p);
    const lines = [
      isHomePlot(p) ? 'Home section — the current Thornrest environment' : plotTerrain(p),
      `West ${p.minX.toFixed(0)} → east ${p.maxX.toFixed(0)} · south ${p.minZ.toFixed(0)} → north ${p.maxZ.toFixed(0)}`,
    ];
    if (marks.length) lines.push(marks.map((m) => m.name).join(' · '));
    else lines.push('Undeveloped — same 48×48 as Thornrest, waiting to be built.');
    this.metaEl.textContent = lines.join('\n');
  }

  private atlasLayout() {
    const w = this.atlas.width;
    const h = this.atlas.height;
    const padL = 22;
    const padB = 18;
    const padT = 4;
    const padR = 4;
    return {
      w,
      h,
      padL,
      padB,
      padT,
      padR,
      cw: (w - padL - padR) / PLOT_COLS,
      rh: (h - padT - padB) / PLOT_ROWS,
    };
  }

  private atlasCell(ev: MouseEvent): Plot | null {
    const r = this.atlas.getBoundingClientRect();
    const layout = this.atlasLayout();
    const sx = ((ev.clientX - r.left) / r.width) * layout.w;
    const sy = ((ev.clientY - r.top) / r.height) * layout.h;
    const col = Math.floor((sx - layout.padL) / layout.cw);
    const drawRow = Math.floor((sy - layout.padT) / layout.rh);
    const row = PLOT_ROWS - 1 - drawRow;
    if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) return null;
    return makePlot(col, row);
  }

  private drawAtlas(): void {
    const c = this.atlas;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const { w, h, padL, padB, padT, cw, rh } = this.atlasLayout();
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#16120c';
    ctx.fillRect(0, 0, w, h);
    for (let row = 0; row < PLOT_ROWS; row++) {
      for (let col = 0; col < PLOT_COLS; col++) {
        const drawRow = PLOT_ROWS - 1 - row;
        const x = padL + col * cw;
        const y = padT + drawRow * rh;
        const home = col === HOME_COL && row === HOME_ROW;
        const on = col === this.selected.col && row === this.selected.row;
        const hover = this.hoverId === `${col},${row}`;
        if (home) ctx.fillStyle = '#8a6420';
        else if (on) ctx.fillStyle = '#4a3814';
        else ctx.fillStyle = '#2a2216';
        ctx.fillRect(x + 0.4, y + 0.4, cw - 0.8, rh - 0.8);
        if (on || home || hover) {
          ctx.strokeStyle = home || on ? '#e8c46a' : '#a88840';
          ctx.lineWidth = on ? 2 : 1.2;
          ctx.strokeRect(x + 0.8, y + 0.8, cw - 1.6, rh - 1.6);
        }
      }
    }
    ctx.fillStyle = '#8a7a58';
    ctx.font = '600 9px Liberation Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let col = 0; col < PLOT_COLS; col++) {
      if (col % 2 !== 0 && col !== HOME_COL) continue;
      ctx.fillText(String.fromCharCode(65 + col), padL + (col + 0.5) * cw, h - padB / 2);
    }
    ctx.textAlign = 'right';
    for (let row = 0; row < PLOT_ROWS; row++) {
      if ((row + 1) % 5 !== 0 && row !== HOME_ROW) continue;
      const drawRow = PLOT_ROWS - 1 - row;
      ctx.fillText(String(row + 1), padL - 3, padT + (drawRow + 0.5) * rh);
    }
  }

  private bindUi(): void {
    document.getElementById('btn-plots')?.addEventListener('click', () => this.toggle());
    document.getElementById('plots-close')?.addEventListener('click', () => this.close());
    document.getElementById('plots-frame')?.addEventListener('click', () => this.frameSelected());
    document.getElementById('plots-home')?.addEventListener('click', () => this.goHome());

    this.atlas.addEventListener('click', (ev) => {
      const plot = this.atlasCell(ev);
      if (plot) this.select(plot, true);
    });
    this.atlas.addEventListener('mousemove', (ev) => {
      const plot = this.atlasCell(ev);
      const id = plot ? `${plot.col},${plot.row}` : '';
      if (id !== this.hoverId) {
        this.hoverId = id;
        this.atlas.title = plot ? `${plot.id} · ${plotNumber(plot)} / ${PLOT_COUNT}` : '';
        this.drawAtlas();
      }
    });

    this.jumpEl?.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const ref = parsePlotRef(this.jumpEl!.value);
      if (!ref) return;
      this.select(makePlot(ref.col, ref.row), true);
      this.jumpEl!.blur();
    });

    window.addEventListener('keydown', (e) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) {
        if (e.key === 'Escape' && this.openFlag) this.jumpEl?.blur();
        return;
      }
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
      if (e.key.toLowerCase() === 'h') this.goHome();
    });
  }
}

function makeSectionBorder(): THREE.LineSegments {
  const h = PLOT_SIZE / 2;
  const pts = [
    -h, 0.14, -h, h, 0.14, -h,
    h, 0.14, -h, h, 0.14, h,
    h, 0.14, h, -h, 0.14, h,
    -h, 0.14, h, -h, 0.14, -h,
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const line = new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({ color: 0xe8c46a, transparent: true, opacity: 0.85, depthWrite: false }),
  );
  line.renderOrder = 2;
  return line;
}

function makeLabel(text: string): THREE.Sprite {
  const spr = new THREE.Sprite(
    new THREE.SpriteMaterial({ transparent: true, depthWrite: false, opacity: 0.92 }),
  );
  spr.scale.set(10, 3.2, 1);
  spr.renderOrder = 4;
  setLabelText(spr, text);
  return spr;
}

function setLabelText(spr: THREE.Sprite, text: string): void {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 80;
  const ctx = c.getContext('2d')!;
  ctx.clearRect(0, 0, 256, 80);
  ctx.fillStyle = 'rgba(12, 10, 6, 0.62)';
  ctx.beginPath();
  ctx.roundRect(16, 16, 224, 48, 10);
  ctx.fill();
  ctx.strokeStyle = 'rgba(232, 196, 106, 0.75)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#f3d27a';
  ctx.font = '700 28px Liberation Serif, Noto Serif, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 41);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = spr.material as THREE.SpriteMaterial;
  mat.map?.dispose();
  mat.map = tex;
  mat.needsUpdate = true;
}
