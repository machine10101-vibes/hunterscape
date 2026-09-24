import * as THREE from 'three';
import {
  PLOT_COLS,
  PLOT_ROWS,
  PLOT_SIZE,
  homeRingPlots,
  isHomePlot,
  isHomeRing,
  makePlot,
  type Plot,
} from '../game/plots';
import { createTree } from './meshes';
import {
  createGround,
  createPlotFoliage,
  forestField,
  groundHeight,
  rockField,
  snowField,
  streamAmount,
} from './terrain';

type Chunk = { id: string; root: THREE.Group; pinned: boolean };

/**
 * Terrain tiles beyond Thornrest. The four cardinal neighbors are pinned
 * so camp and survey always see a blended ring. Farther sections stay LRU.
 */
export class PlotWorld {
  private chunks = new Map<string, Chunk>();
  private lru: string[] = [];
  private readonly maxLoose = 12;

  constructor(private scene: THREE.Scene) {}

  warmHomeRing(): void {
    for (const plot of homeRingPlots()) this.ensure(plot, true);
  }

  focus(plot: Plot): void {
    this.ensure(plot, isHomeRing(plot));
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dc === 0 && dr === 0) continue;
        const col = plot.col + dc;
        const row = plot.row + dr;
        if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) continue;
        const next = makePlot(col, row);
        this.ensure(next, isHomeRing(next));
      }
    }
  }

  private ensure(plot: Plot, pin = false): void {
    if (isHomePlot(plot)) return;
    const hit = this.chunks.get(plot.id);
    if (hit) {
      if (pin) hit.pinned = true;
      this.touch(plot.id);
      return;
    }
    const root = this.buildWild(plot);
    this.scene.add(root);
    this.chunks.set(plot.id, { id: plot.id, root, pinned: pin || isHomeRing(plot) });
    this.lru.push(plot.id);
    this.evict();
  }

  private touch(id: string): void {
    const i = this.lru.indexOf(id);
    if (i >= 0) this.lru.splice(i, 1);
    this.lru.push(id);
  }

  private evict(): void {
    const loose = this.lru.filter((id) => !this.chunks.get(id)?.pinned);
    while (loose.length > this.maxLoose) {
      const id = loose.shift();
      if (!id) break;
      const idx = this.lru.indexOf(id);
      if (idx >= 0) this.lru.splice(idx, 1);
      const chunk = this.chunks.get(id);
      if (!chunk) continue;
      this.scene.remove(chunk.root);
      chunk.root.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh) {
          mesh.geometry.dispose();
          const mat = mesh.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      this.chunks.delete(id);
    }
  }

  private buildWild(plot: Plot): THREE.Group {
    const root = new THREE.Group();
    root.name = `plotChunk_${plot.id}`;
    const segs = isHomeRing(plot) ? 128 : 48;
    root.add(createGround(PLOT_SIZE, segs, plot.cx, plot.cz));
    this.scatterTrees(root, plot);
    if (isHomeRing(plot)) {
      this.scatterBoulders(root, plot);
      root.add(createPlotFoliage(plot.minX, plot.maxX, plot.minZ, plot.maxZ));
    }
    return root;
  }

  private scatterTrees(root: THREE.Group, plot: Plot): void {
    const step = isHomeRing(plot) ? 5.1 : 6.4;
    let i = 0;
    for (let gx = plot.minX + 2.2; gx < plot.maxX - 2.2; gx += step) {
      for (let gz = plot.minZ + 2.2; gz < plot.maxZ - 2.2; gz += step) {
        const hx = hash01(Math.floor(gx * 11 + 3), Math.floor(gz * 13 + 7));
        const hz = hash01(Math.floor(gx * 17 + 9), Math.floor(gz * 19 + 2));
        const x = gx + (hx - 0.5) * step * 0.82;
        const z = gz + (hz - 0.5) * step * 0.82;
        if (x < plot.minX + 1.4 || x > plot.maxX - 1.4) continue;
        if (z < plot.minZ + 1.4 || z > plot.maxZ - 1.4) continue;
        const forest = forestField(x, z);
        const keep = hash01(Math.floor(x * 23 + 4), Math.floor(z * 29 + 8));
        if (keep > forest * 0.78) continue;
        if (snowField(x, z) > 0.72) continue;
        if (streamAmount(x, z) > 0.18) continue;
        if (rockField(x, z) > 0.72 && keep > 0.28) continue;
        const tree = createTree(Math.floor(keep * 997) + i);
        tree.position.set(x, groundHeight(x, z), z);
        tree.rotation.y = hx * Math.PI * 2;
        const s = 0.88 + forest * 0.28 + (keep - 0.5) * 0.12;
        tree.scale.setScalar(s);
        root.add(tree);
        i += 1;
      }
    }
  }

  private scatterBoulders(root: THREE.Group, plot: Plot): void {
    const step = 7.4;
    let n = 0;
    for (let gx = plot.minX + 3; gx < plot.maxX - 3; gx += step) {
      for (let gz = plot.minZ + 3; gz < plot.maxZ - 3; gz += step) {
        const hx = hash01(Math.floor(gx * 9 + 41), Math.floor(gz * 11 + 3));
        const hz = hash01(Math.floor(gx * 7 + 18), Math.floor(gz * 15 + 33));
        const x = gx + (hx - 0.5) * step * 0.75;
        const z = gz + (hz - 0.5) * step * 0.75;
        const rock = rockField(x, z);
        const keep = hash01(Math.floor(x * 31 + 2), Math.floor(z * 37 + 6));
        if (keep > rock * 0.7) continue;
        if (streamAmount(x, z) > 0.16) continue;
        if (snowField(x, z) > 0.5) continue;
        const boulder = createBoulder(Math.floor(keep * 400 + n));
        boulder.position.set(x, groundHeight(x, z), z);
        boulder.rotation.y = hx * Math.PI * 2;
        const s = 0.7 + rock * 0.9 + keep * 0.25;
        boulder.scale.setScalar(s);
        root.add(boulder);
        n += 1;
      }
    }
  }
}

function createBoulder(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'boulder';
  const mat = new THREE.MeshStandardMaterial({
    color: seed % 2 === 0 ? 0x6a6860 : 0x5a5852,
    roughness: 0.94,
    metalness: 0.02,
    flatShading: true,
  });
  const body = new THREE.Mesh(new THREE.DodecahedronGeometry(0.48 + (seed % 3) * 0.05, 0), mat);
  body.position.y = 0.28;
  body.rotation.set(0.18, seed * 0.4, 0.08);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);
  const chip = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2, 0), mat);
  chip.position.set(0.28, 0.16, -0.1);
  chip.rotation.set(0.4, seed * 0.7, 0.2);
  chip.castShadow = true;
  g.add(chip);
  return g;
}

function hash01(ix: number, iy: number): number {
  let n = Math.imul(ix | 0, 1597334677) ^ Math.imul(iy | 0, 3812015801);
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  return ((n ^ (n >>> 15)) >>> 0) / 4294967296;
}
