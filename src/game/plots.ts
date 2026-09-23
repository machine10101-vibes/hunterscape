import { pathAmount, snowAmount } from '../rendering/terrain';

/** Ground mesh is 48×48, centered on the origin. */
export const WORLD_SIZE = 48;
export const WORLD_HALF = WORLD_SIZE / 2;
/** Six-metre squares — fine enough to split camp, snow, and the SW trail. */
export const PLOT_SIZE = 6;
export const PLOT_COLS = WORLD_SIZE / PLOT_SIZE;
export const PLOT_ROWS = WORLD_SIZE / PLOT_SIZE;

const COLS = 'ABCDEFGH';

export type Plot = {
  id: string;
  col: number;
  row: number;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  cx: number;
  cz: number;
};

export type PlotLandmark = { name: string; x: number; z: number };

/** Authored camp props — used to label a plot, not to move them. */
export const PLOT_LANDMARKS: PlotLandmark[] = [
  { name: 'Thornrest Camp', x: -2.05, z: -0.55 },
  { name: 'Campfire', x: -1.2, z: -0.5 },
  { name: 'Thornrest Forge', x: 2.2, z: 0.35 },
  { name: 'Tent', x: -3.5, z: -1.5 },
  { name: 'Training dummy', x: 2.5, z: -2.5 },
  { name: 'Frost Yeti clearing', x: 4.2, z: 7.2 },
  { name: 'Orc scout trail', x: -6.2, z: -4.8 },
];

export function plotId(col: number, row: number): string {
  return `${COLS[col] ?? '?'}${row + 1}`;
}

export function parsePlotId(id: string): { col: number; row: number } | null {
  const m = /^([A-H])([1-8])$/i.exec(id.trim());
  if (!m) return null;
  return { col: COLS.indexOf(m[1].toUpperCase()), row: Number(m[2]) - 1 };
}

export function makePlot(col: number, row: number): Plot {
  const minX = -WORLD_HALF + col * PLOT_SIZE;
  const minZ = -WORLD_HALF + row * PLOT_SIZE;
  return {
    id: plotId(col, row),
    col,
    row,
    minX,
    maxX: minX + PLOT_SIZE,
    minZ,
    maxZ: minZ + PLOT_SIZE,
    cx: minX + PLOT_SIZE / 2,
    cz: minZ + PLOT_SIZE / 2,
  };
}

export function allPlots(): Plot[] {
  const out: Plot[] = [];
  for (let row = PLOT_ROWS - 1; row >= 0; row--) {
    for (let col = 0; col < PLOT_COLS; col++) out.push(makePlot(col, row));
  }
  return out;
}

export function plotAt(x: number, z: number): Plot | null {
  const col = Math.floor((x + WORLD_HALF) / PLOT_SIZE);
  const row = Math.floor((z + WORLD_HALF) / PLOT_SIZE);
  if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) return null;
  return makePlot(col, row);
}

export function plotContains(plot: Plot, x: number, z: number): boolean {
  return x >= plot.minX && x < plot.maxX && z >= plot.minZ && z < plot.maxZ;
}

export function landmarksIn(plot: Plot): PlotLandmark[] {
  return PLOT_LANDMARKS.filter((m) => plotContains(plot, m.x, m.z));
}

export function plotTerrain(plot: Plot): string {
  const snow = snowAmount(plot.cx, plot.cz);
  const path = pathAmount(plot.cx, plot.cz);
  if (snow > 0.28) return 'Snow clearing';
  if (path > 0.32) return 'Worn trail';
  if (Math.hypot(plot.cx + 2.05, plot.cz + 0.55) < 5.2) return 'Camp meadow';
  return 'Whisperwood';
}

export function plotBlurb(plot: Plot): string {
  const marks = landmarksIn(plot).map((m) => m.name);
  const land = plotTerrain(plot);
  if (marks.length) return `${land} · ${marks.join(', ')}`;
  return land;
}
