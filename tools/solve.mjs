import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const url = 'http://localhost:5199/hunterscape/tools/shot.html';

// Anatomical-ish limits so the solver cannot find a broken-wrist answer.
const FREE = [
  ['armR', 0, -3.0, 3.0],
  ['armR', 1, -0.8, 0.8],
  ['armR', 2, -0.6, 0.8],
  ['forearmR', 0, -2.3, -0.1],
  ['forearmR', 1, -0.3, 0.3],
  ['handR', 0, -0.5, 0.5],
  ['handR', 1, -1.9, 0.3],
  ['handR', 2, -0.45, 0.45],
];

const REST = { armR: [0.4, -0.2, 0.12], forearmR: [-1.2, 0.0, 0.06], handR: [0.06, -1.3, 0.05] };

function caseOf(id, tool, torso, hips, clavR, edge, heel, hand) {
  return { id, tool, torso, hips, clavR, edge, heel, hand };
}

const CASES = [
  // --- sword ---
  caseOf('sword-guard', 'sword', [0.08, -0.2, 0.04], [0.02, -0.1, 0.02], [0.1, -0.12, -0.1],
    [0.22, 1.88, 0.4], [0.26, 1.02, 0.34], [0.3, 1.1, 0.32]),
  caseOf('slash-windup', 'sword', [-0.1, -0.46, -0.08], [0.03, -0.28, -0.04], [-0.08, -0.22, -0.26],
    [0.58, 2.02, -0.34], [0.44, 1.38, 0.0], [0.46, 1.44, -0.04]),
  caseOf('slash-strike', 'sword', [0.3, 0.44, 0.12], [0.0, 0.24, 0.06], [0.18, 0.16, 0.12],
    [-0.3, 0.78, 0.8], [0.26, 1.14, 0.46], [0.24, 1.18, 0.44]),
  caseOf('slash-follow', 'sword', [0.24, 0.58, 0.14], [-0.02, 0.3, 0.06], [0.2, 0.2, 0.12],
    [-0.72, 0.6, 0.4], [0.04, 1.06, 0.46], [0.0, 1.1, 0.44]),
  // --- hatchet ---
  caseOf('chop-ready', 'hatchet', [0.12, -0.16, 0.04], [0.02, -0.1, 0.0], [0.06, -0.1, -0.08],
    [0.3, 1.1, 0.5], [0.3, 0.82, 0.28], [0.3, 0.9, 0.28]),
  caseOf('chop-raised', 'hatchet', [-0.12, -0.32, -0.06], [0.02, -0.2, -0.04], [-0.1, -0.18, -0.26],
    [0.48, 2.14, -0.24], [0.46, 1.78, 0.02], [0.5, 1.6, -0.02]),
  caseOf('chop-impact', 'hatchet', [0.4, 0.2, 0.08], [0.0, 0.14, 0.05], [0.18, 0.1, 0.12],
    [0.02, 1.06, 0.76], [0.3, 1.12, 0.44], [0.26, 1.14, 0.4]),
  caseOf('chop-rebound', 'hatchet', [0.3, 0.14, 0.06], [0.0, 0.1, 0.04], [0.14, 0.08, 0.1],
    [0.16, 1.3, 0.6], [0.32, 1.16, 0.3], [0.3, 1.16, 0.3]),
  // --- pickaxe ---
  caseOf('mine-ready', 'pickaxe', [0.18, -0.1, 0.02], [0.03, -0.06, 0.0], [0.08, -0.06, -0.06],
    [0.3, 1.04, 0.48], [0.3, 0.78, 0.26], [0.3, 0.86, 0.26]),
  caseOf('mine-raised', 'pickaxe', [-0.2, -0.08, 0.0], [0.02, -0.04, 0.0], [-0.18, -0.04, -0.22],
    [0.2, 2.42, 0.06], [0.24, 2.0, 0.24], [0.26, 1.9, 0.12]),
  caseOf('mine-impact', 'pickaxe', [0.52, 0.06, 0.02], [0.14, 0.04, 0.0], [0.22, 0.04, 0.1],
    [0.04, 0.5, 0.82], [0.26, 0.98, 0.46], [0.24, 0.98, 0.42]),
  caseOf('mine-rebound', 'pickaxe', [0.4, 0.05, 0.02], [0.1, 0.03, 0.0], [0.18, 0.03, 0.08],
    [0.08, 0.82, 0.72], [0.28, 1.02, 0.38], [0.26, 1.02, 0.36]),
];

const browser = await puppeteer.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: 'new',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage();
await page.setViewport({ width: 560, height: 680, deviceScaleFactor: 1 });
fs.mkdirSync('/tmp/solved', { recursive: true });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await page.waitForFunction('window.shotReady === true', { timeout: 60000 });

for (const c of CASES) {
  const base = { playerTorso: c.torso, playerHips: c.hips, clavR: c.clavR, ...REST };
  const r = await page.evaluate(
    (c, free, base) =>
      window.solve({
        tool: c.tool,
        base,
        free,
        target: { name: 'toolEdge', pos: c.edge },
        aux: [
          { name: 'toolHeel', pos: c.heel, w: 0.5 },
          { name: 'handR', pos: c.hand, w: 0.5 },
        ],
      }),
    c,
    FREE,
    base,
  );
  const p = r.pose;
  console.log(
    `${c.id.padEnd(14)} err=${r.err} edge=${JSON.stringify(r.at)}\n` +
      `    armR: [${p.armR}], forearmR: [${p.forearmR}], handR: [${p.handR}],`,
  );
  for (const [tag, az] of [['a', 0.75], ['b', 1.9]]) {
    await page.evaluate((pose, tool, az) => {
      window.setRaw(pose, tool);
      window.shot({ pose: 'none', az });
      window.setRaw(pose, tool);
      window.render();
    }, r.pose, c.tool, az);
    const el = await page.$('#c');
    await el.screenshot({ path: `/tmp/solved/${c.id}-${tag}.png` });
  }
}
await browser.close();
