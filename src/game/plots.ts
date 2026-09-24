/** One section is the current Thornrest environment: a 48×48 camp. */
export const PLOT_SIZE = 48;
/** 20×25 = 500 sections, with Thornrest as the home square. */
export const PLOT_COLS = 20;
export const PLOT_ROWS = 25;
export const PLOT_COUNT = PLOT_COLS * PLOT_ROWS;
export const HOME_COL = 10;
export const HOME_ROW = 12;

/** West/south corner of A1, chosen so home K13 is exactly [-24, 24]². */
export const GRID_ORIGIN_X = -PLOT_SIZE / 2 - HOME_COL * PLOT_SIZE;
export const GRID_ORIGIN_Z = -PLOT_SIZE / 2 - HOME_ROW * PLOT_SIZE;

const COLS = 'ABCDEFGHIJKLMNOPQRST';

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

/** Authored camp props — they live only on the home section. */
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
  const m = /^([A-T])([1-9]|1[0-9]|2[0-5])$/i.exec(id.trim());
  if (!m) return null;
  return { col: COLS.indexOf(m[1].toUpperCase()), row: Number(m[2]) - 1 };
}

export function parsePlotRef(text: string): { col: number; row: number } | null {
  const byId = parsePlotId(text);
  if (byId) return byId;
  const n = Number(text.trim());
  if (!Number.isInteger(n) || n < 1 || n > PLOT_COUNT) return null;
  const i = n - 1;
  return { col: i % PLOT_COLS, row: Math.floor(i / PLOT_COLS) };
}

export function makePlot(col: number, row: number): Plot {
  const minX = GRID_ORIGIN_X + col * PLOT_SIZE;
  const minZ = GRID_ORIGIN_Z + row * PLOT_SIZE;
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

export function homePlot(): Plot {
  return makePlot(HOME_COL, HOME_ROW);
}

export function isHomePlot(plot: Plot): boolean {
  return plot.col === HOME_COL && plot.row === HOME_ROW;
}

/** The four cardinal sections that share an edge with Thornrest. */
export function isHomeRing(plot: Plot): boolean {
  const dc = Math.abs(plot.col - HOME_COL);
  const dr = Math.abs(plot.row - HOME_ROW);
  return (dc === 1 && dr === 0) || (dc === 0 && dr === 1);
}

export function homeRingPlots(): Plot[] {
  const out: Plot[] = [];
  for (const [dc, dr] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ] as const) {
    const col = HOME_COL + dc;
    const row = HOME_ROW + dr;
    if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) continue;
    out.push(makePlot(col, row));
  }
  return out;
}

export function plotNumber(plot: Plot): number {
  return plot.row * PLOT_COLS + plot.col + 1;
}

export function plotAt(x: number, z: number): Plot | null {
  const col = Math.floor((x - GRID_ORIGIN_X) / PLOT_SIZE);
  const row = Math.floor((z - GRID_ORIGIN_Z) / PLOT_SIZE);
  if (col < 0 || col >= PLOT_COLS || row < 0 || row >= PLOT_ROWS) return null;
  return makePlot(col, row);
}

export function plotContains(plot: Plot, x: number, z: number): boolean {
  return x >= plot.minX && x < plot.maxX && z >= plot.minZ && z < plot.maxZ;
}

export function landmarksIn(plot: Plot): PlotLandmark[] {
  return PLOT_LANDMARKS.filter((m) => plotContains(plot, m.x, m.z));
}

function hash01(ix: number, iy: number): number {
  let n = Math.imul(ix | 0, 1597334677) ^ Math.imul(iy | 0, 3812015801);
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  return ((n ^ (n >>> 15)) >>> 0) / 4294967296;
}

export function plotTerrain(plot: Plot): string {
  if (isHomePlot(plot)) return 'Thornrest camp';
  if (isHomeRing(plot)) {
    if (plot.row > HOME_ROW) return 'North snow pines';
    if (plot.row < HOME_ROW) return 'South thicket';
    if (plot.col > HOME_COL) return 'East heath and stream';
    return 'West rocky fold';
  }
  const n = hash01(plot.col * 17 + 3, plot.row * 31 + 5);
  if (n < 0.1) return 'Open heath';
  if (n < 0.2) return 'Rocky fold';
  if (n < 0.34) return 'Pine hollow';
  if (n < 0.42) return 'Stream cut';
  return 'Whisperwood';
}

export function plotBlurb(plot: Plot): string {
  const marks = landmarksIn(plot).map((m) => m.name);
  const land = plotTerrain(plot);
  if (marks.length) return `${land} · ${marks.join(', ')}`;
  if (isHomePlot(plot)) return land;
  return `${land} — undeveloped section`;
}
