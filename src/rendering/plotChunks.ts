import * as THREE from 'three';
import {
  PLOT_COLS,
  PLOT_ROWS,
  PLOT_SIZE,
  homeNeighborhoodPlots,
  isHomePlot,
  isHomeRing,
  isNearHome,
  makePlot,
  plotContains,
  type Plot,
} from '../game/plots';
import { createTree } from './meshes';
import {
  createGround,
  createPlotFoliage,
  forestField,
  groveField,
  groundHeight,
  rockField,
  snowField,
  streamAmount,
} from './terrain';
import {
  createBush,
  createCairn,
  createFallenLog,
  createFordStone,
  createReed,
  createSapling,
  createSnowMound,
  createStump,
} from './wildDress';

type Chunk = { id: string; root: THREE.Group; pinned: boolean };

/** Same tessellation as camp so shared edges land on the same world vertices. */
const GROUND_SEGS = 128;
/** Tuck under the neighbor tile so a hairline crack cannot show. */
const GROUND_OVERLAP = 0.28;
const TREE_STEP = 5.1;
const BOULDER_STEP = 7.4;

/**
 * Terrain tiles beyond Thornrest. The eight neighbors around camp stay
 * pinned. Every loaded section uses the same world-space height, color,
 * and scatter so seams read as one wood.
 */
export class PlotWorld {
  private chunks = new Map<string, Chunk>();
  private lru: string[] = [];
  private readonly maxLoose = 12;

  constructor(private scene: THREE.Scene) {}

  warmHomeRing(): void {
    for (const plot of homeNeighborhoodPlots()) this.ensure(plot, true);
  }

  focus(plot: Plot): void {
    this.ensure(plot, isNearHome(plot));
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dc === 0 && dr === 0) continue;
        const col = plot.col + dc;
        const row = plot.row + dr;
        if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) continue;
        const next = makePlot(col, row);
        this.ensure(next, isNearHome(next));
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
    this.chunks.set(plot.id, { id: plot.id, root, pinned: pin || isNearHome(plot) });
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
    root.add(createGround(PLOT_SIZE + GROUND_OVERLAP, GROUND_SEGS, plot.cx, plot.cz));
    this.scatterTrees(root, plot);
    this.scatterBoulders(root, plot);
    this.scatterBrush(root, plot);
    this.scatterSnowDress(root, plot);
    this.scatterReeds(root, plot);
    if (isNearHome(plot)) this.dressLandmark(root, plot);
    const foliage = isNearHome(plot) ? 1.35 : 1;
    root.add(createPlotFoliage(plot.minX, plot.maxX, plot.minZ, plot.maxZ, foliage));
    return root;
  }

  private scatterTrees(root: THREE.Group, plot: Plot): void {
    const rich = isNearHome(plot);
    const step = rich ? 4.05 : TREE_STEP;
    let i = 0;
    for (const [x, z, hx, keep] of worldCells(plot, step, 0.72)) {
      const forest = forestField(x, z);
      const grove = groveField(x, z);
      const chance = forest * (0.45 + grove * 0.7);
      if (keep > chance) continue;
      if (snowField(x, z) > 0.74) continue;
      if (streamAmount(x, z) > 0.18) continue;
      if (rockField(x, z) > 0.74 && keep > 0.3) continue;
      const sapling = keep > 0.55 && grove < 0.48;
      const tree = sapling ? createSapling(Math.floor(keep * 997) + i) : createTree(Math.floor(keep * 997) + i);
      tree.position.set(x, groundHeight(x, z), z);
      tree.rotation.y = hx * Math.PI * 2;
      tree.scale.setScalar((sapling ? 0.95 : 0.86) + forest * 0.3 + (keep - 0.5) * 0.14);
      root.add(tree);
      i += 1;
    }
  }

  private scatterBoulders(root: THREE.Group, plot: Plot): void {
    let n = 0;
    const step = isNearHome(plot) ? 6.2 : BOULDER_STEP;
    for (const [x, z, hx, keep] of worldCells(plot, step, 0.75)) {
      const rock = rockField(x, z);
      if (keep > rock * 0.72) continue;
      if (streamAmount(x, z) > 0.16) continue;
      if (snowField(x, z) > 0.52) continue;
      const boulder = createBoulder(Math.floor(keep * 400 + n));
      boulder.position.set(x, groundHeight(x, z), z);
      boulder.rotation.y = hx * Math.PI * 2;
      boulder.scale.setScalar(0.7 + rock * 0.95 + keep * 0.25);
      root.add(boulder);
      n += 1;
    }
  }

  private scatterBrush(root: THREE.Group, plot: Plot): void {
    const rich = isNearHome(plot);
    const step = rich ? 3.15 : 4.4;
    let i = 0;
    for (const [x, z, hx, keep] of worldCells(plot, step, 0.78)) {
      const forest = forestField(x, z);
      if (keep > 0.38 + forest * 0.4) continue;
      if (snowField(x, z) > 0.32) continue;
      if (streamAmount(x, z) > 0.14) continue;
      const kind = hash01(Math.floor(x * 41), Math.floor(z * 43));
      const prop =
        kind < 0.18 && forest > 0.42
          ? createFallenLog(Math.floor(keep * 200 + i))
          : kind < 0.28 && forest > 0.38
            ? createStump(Math.floor(keep * 180 + i))
            : createBush(Math.floor(keep * 310 + i));
      prop.position.set(x, groundHeight(x, z), z);
      prop.rotation.y = hx * Math.PI * 2;
      prop.scale.setScalar(0.85 + keep * 0.4);
      root.add(prop);
      i += 1;
    }
  }

  private scatterSnowDress(root: THREE.Group, plot: Plot): void {
    let i = 0;
    for (const [x, z, hx, keep] of worldCells(plot, 4.6, 0.7)) {
      const snow = snowField(x, z);
      if (snow < 0.26) continue;
      if (keep > snow * 0.85) continue;
      if (streamAmount(x, z) > 0.2) continue;
      const mound = createSnowMound(Math.floor(keep * 220 + i));
      mound.position.set(x, groundHeight(x, z), z);
      mound.rotation.y = hx * Math.PI * 2;
      mound.scale.setScalar(0.8 + snow * 0.5);
      root.add(mound);
      i += 1;
    }
  }

  private scatterReeds(root: THREE.Group, plot: Plot): void {
    let i = 0;
    for (const [x, z, hx, keep] of worldCells(plot, 2.8, 0.65)) {
      const stream = streamAmount(x, z);
      if (stream < 0.1 || stream > 0.55) continue;
      if (keep > 0.55) continue;
      const reed = createReed(Math.floor(keep * 160 + i));
      reed.position.set(x, groundHeight(x, z), z);
      reed.rotation.y = hx * Math.PI * 2;
      root.add(reed);
      i += 1;
    }
  }

  private dressLandmark(root: THREE.Group, plot: Plot): void {
    const spots = landmarkSpots(plot);
    spots.forEach(([x, z, kind], i) => {
      const y = groundHeight(x, z);
      if (kind === 'cairn') {
        const cairn = createCairn(plot.col * 17 + plot.row + i);
        cairn.position.set(x, y, z);
        cairn.scale.setScalar(1.35);
        root.add(cairn);
      } else if (kind === 'stumps') {
        for (let k = 0; k < 5; k++) {
          const a = (k / 5) * Math.PI * 2;
          const stump = createStump(k + plot.row * 3);
          stump.position.set(x + Math.cos(a) * 1.1, groundHeight(x + Math.cos(a) * 1.1, z + Math.sin(a) * 1.1), z + Math.sin(a) * 1.1);
          root.add(stump);
        }
      } else if (kind === 'ford') {
        for (let k = 0; k < 6; k++) {
          const stone = createFordStone(k + 9);
          stone.position.set(x + k * 0.85 - 2.1, groundHeight(x + k * 0.85 - 2.1, z + (k % 2) * 0.35), z + (k % 2) * 0.35);
          root.add(stone);
        }
      } else if (kind === 'fold') {
        for (let k = 0; k < 4; k++) {
          const b = createBoulder(80 + k);
          const ox = (k % 2) * 1.2 - 0.4;
          const oz = Math.floor(k / 2) * 1.1 - 0.3;
          b.position.set(x + ox, groundHeight(x + ox, z + oz), z + oz);
          b.scale.setScalar(1.2 + k * 0.15);
          root.add(b);
        }
      }
    });
  }
}

function landmarkSpots(plot: Plot): [number, number, 'cairn' | 'stumps' | 'ford' | 'fold'][] {
  if (isHomeRing(plot) && plot.row > 0 && plot.cz > 20) return [[7.5, 42, 'cairn']];
  if (isHomeRing(plot) && plot.cz < -20) return [[-5.2, -41, 'stumps']];
  if (isHomeRing(plot) && plot.cx > 20) return [[38, -8.4, 'ford']];
  if (isHomeRing(plot) && plot.cx < -20) return [[-40, 5.5, 'fold']];
  if (plot.cx > 20 && plot.cz > 20) return [[36, 40, 'cairn']];
  if (plot.cx > 20 && plot.cz < -20) return [[34, -38, 'stumps']];
  if (plot.cx < -20 && plot.cz > 20) return [[-38, 38, 'fold']];
  if (plot.cx < -20 && plot.cz < -20) return [[-36, -40, 'stumps']];
  return [];
}

/** Lattice in world units so a seam tree belongs to exactly one plot. */
function* worldCells(
  plot: Plot,
  step: number,
  jitter: number,
): Generator<[number, number, number, number]> {
  const x0 = Math.floor(plot.minX / step) * step;
  const z0 = Math.floor(plot.minZ / step) * step;
  const x1 = Math.ceil(plot.maxX / step) * step;
  const z1 = Math.ceil(plot.maxZ / step) * step;
  for (let gx = x0; gx <= x1; gx += step) {
    for (let gz = z0; gz <= z1; gz += step) {
      const hx = hash01(Math.floor(gx * 11 + 3), Math.floor(gz * 13 + 7));
      const hz = hash01(Math.floor(gx * 17 + 9), Math.floor(gz * 19 + 2));
      const x = gx + (hx - 0.5) * step * jitter;
      const z = gz + (hz - 0.5) * step * jitter;
      if (!plotContains(plot, x, z)) continue;
      const keep = hash01(Math.floor(x * 23 + 4), Math.floor(z * 29 + 8));
      yield [x, z, hx, keep];
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
