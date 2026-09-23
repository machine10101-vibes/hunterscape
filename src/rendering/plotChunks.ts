import * as THREE from 'three';
import {
  PLOT_COLS,
  PLOT_ROWS,
  PLOT_SIZE,
  isHomePlot,
  makePlot,
  type Plot,
} from '../game/plots';
import { createTree } from './meshes';
import { createGround, groundHeight } from './terrain';

type Chunk = { id: string; root: THREE.Group };

/**
 * Terrain tiles for sections beyond Thornrest. The home 48×48 mesh stays
 * the authored camp; wild sections are grown on demand so we never hold
 * all 500 grounds in memory.
 */
export class PlotWorld {
  private chunks = new Map<string, Chunk>();
  private lru: string[] = [];
  private readonly maxChunks = 12;

  constructor(private scene: THREE.Scene) {}

  focus(plot: Plot): void {
    this.ensure(plot);
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dc === 0 && dr === 0) continue;
        const col = plot.col + dc;
        const row = plot.row + dr;
        if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) continue;
        this.ensure(makePlot(col, row));
      }
    }
  }

  private ensure(plot: Plot): void {
    if (isHomePlot(plot)) return;
    const hit = this.chunks.get(plot.id);
    if (hit) {
      this.touch(plot.id);
      return;
    }
    const root = this.buildWild(plot);
    this.scene.add(root);
    this.chunks.set(plot.id, { id: plot.id, root });
    this.lru.push(plot.id);
    this.evict();
  }

  private touch(id: string): void {
    const i = this.lru.indexOf(id);
    if (i >= 0) this.lru.splice(i, 1);
    this.lru.push(id);
  }

  private evict(): void {
    while (this.lru.length > this.maxChunks) {
      const id = this.lru.shift();
      if (!id) break;
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
    // Coarser than the camp tile — same shader language, cheaper to keep a ring of neighbors.
    root.add(createGround(PLOT_SIZE, 48, plot.cx, plot.cz));

    const seed = plot.col * 101 + plot.row * 787;
    const count = 9 + (seed % 7);
    for (let i = 0; i < count; i++) {
      const hx = hash01(seed + i * 3, plot.col + 11);
      const hz = hash01(seed + i * 7, plot.row + 19);
      const x = plot.minX + 3 + hx * (PLOT_SIZE - 6);
      const z = plot.minZ + 3 + hz * (PLOT_SIZE - 6);
      const tree = createTree(seed + i * 17);
      tree.position.set(x, groundHeight(x, z), z);
      tree.rotation.y = hx * Math.PI * 2;
      root.add(tree);
    }
    return root;
  }
}

function hash01(ix: number, iy: number): number {
  let n = Math.imul(ix | 0, 1597334677) ^ Math.imul(iy | 0, 3812015801);
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  return ((n ^ (n >>> 15)) >>> 0) / 4294967296;
}
