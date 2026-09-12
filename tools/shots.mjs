import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const url = 'http://localhost:5199/hunterscape/tools/shot.html';
const outDir = process.argv[2] || '/tmp/shots';
const specArg = process.argv[3];
fs.mkdirSync(outDir, { recursive: true });

const DEFAULT = [
  { name: 'idle-front', o: { pose: 'idle', t: 1.2, az: 0.0 } },
  { name: 'face', o: { pose: 'idle', t: 1.2, az: 0.35, el: 1.62, dist: 0.75, focus: 'playerHead', fov: 34 } },
  { name: 'face-side', o: { pose: 'idle', t: 1.2, az: 1.2, el: 1.6, dist: 0.75, focus: 'playerHead', fov: 34 } },
  { name: 'idle-side', o: { pose: 'idle', t: 1.2, az: 1.55 } },
  { name: 'idle-back', o: { pose: 'idle', t: 1.2, az: Math.PI } },
  // Same elevation as the in-game follow camera (offset 0, 8.7, 7.15).
  { name: 'idle-gamecam', o: { pose: 'idle', t: 1.2, az: 0.0, el: 0.69 } },
  { name: 'sword-gamecam', o: { pose: 'sword', t: 1.0, az: 0.0, el: 0.69 } },
  { name: 'spear-grip', o: { pose: 'idle', t: 1.2, az: 0.9, dist: 0.62, focus: 'handL', fov: 32 } },
  { name: 'walk-a', o: { pose: 'walk', t: 0.4, speed: 0.45, az: 0.7 } },
  { name: 'walk-b', o: { pose: 'walk', t: 0.72, speed: 0.45, az: 0.7 } },
  { name: 'run-a', o: { pose: 'walk', t: 0.35, speed: 1.0, az: 0.7 } },
  { name: 'run-b', o: { pose: 'walk', t: 0.56, speed: 1.0, az: 0.7 } },
  { name: 'sword-guard', o: { pose: 'sword', t: 1.0, az: 0.8 } },
  { name: 'sword-walk', o: { pose: 'sword-walk', t: 0.4, speed: 1.0, az: 0.7 } },
  { name: 'sword-grip', o: { pose: 'sword', t: 1.0, az: 1.4, dist: 0.62, focus: 'handR', fov: 32 } },
  { name: 'slash-0', o: { pose: 'slash', t: 0.0, az: 0.8 } },
  { name: 'slash-18', o: { pose: 'slash', t: 0.18, az: 0.8 } },
  { name: 'slash-36', o: { pose: 'slash', t: 0.36, az: 0.8 } },
  { name: 'slash-52', o: { pose: 'slash', t: 0.52, az: 0.8 } },
  { name: 'slash-70', o: { pose: 'slash', t: 0.7, az: 0.8 } },
  { name: 'slash-g36', o: { pose: 'slash', t: 0.36, az: 0.0, el: 0.69 } },
  { name: 'slash-g52', o: { pose: 'slash', t: 0.52, az: 0.0, el: 0.69 } },
  { name: 'chop-0', o: { pose: 'chop', t: 0.0, az: 0.9 } },
  { name: 'chop-38', o: { pose: 'chop', t: 0.38, az: 0.9 } },
  { name: 'chop-54', o: { pose: 'chop', t: 0.54, az: 0.9 } },
  { name: 'chop-grip', o: { pose: 'chop', t: 0.54, az: 1.2, dist: 0.62, focus: 'handR', fov: 32 } },
  { name: 'mine-0', o: { pose: 'mine', t: 0.0, az: 0.9 } },
  { name: 'mine-46', o: { pose: 'mine', t: 0.46, az: 0.9 } },
  { name: 'mine-60', o: { pose: 'mine', t: 0.6, az: 0.9 } },
  { name: 'mine-grip', o: { pose: 'mine', t: 0.6, az: 1.2, dist: 0.62, focus: 'handR', fov: 32 } },
];

// One gait cycle sampled at eight phases, side-on, at run and walk speeds.
const GAIT = [];
for (let i = 0; i < 8; i++) {
  const ph = (i / 8) * Math.PI * 2;
  GAIT.push({ name: `run-${i}`, o: { pose: 'walk', t: ph / 7.2, speed: 1.0, az: 1.55, el: 1.35 } });
  GAIT.push({ name: `walk-${i}`, o: { pose: 'walk', t: ph / 3.4, speed: 0.3, az: 1.55, el: 1.35 } });
}

const SETS = {
  default: DEFAULT,
  gait: GAIT,
  monsters: [
    { name: 'yeti-idle', o: { model: 'yeti', pose: 'idle', t: 1.0, az: 0.6, dist: 6.5, look: 1.6 } },
    { name: 'yeti-walk', o: { model: 'yeti', pose: 'walk', t: 0.5, az: 0.6, dist: 6.5, look: 1.6 } },
    { name: 'yeti-walk-b', o: { model: 'yeti', pose: 'walk', t: 1.05, az: 1.4, dist: 6.5, look: 1.6 } },
    { name: 'yeti-coil', o: { model: 'yeti', pose: 'attack', t: 0.32, az: 0.6, dist: 6.5, look: 1.6 } },
    { name: 'yeti-attack', o: { model: 'yeti', pose: 'attack', t: 0.55, az: 0.6, dist: 6.5, look: 1.6 } },
    { name: 'yeti-face', o: { model: 'yeti', pose: 'idle', t: 1.0, az: 0.3, dist: 2.2, look: 2.3, fov: 34 } },
    { name: 'orc-idle', o: { model: 'orc', pose: 'idle', t: 1.0, az: 0.6, dist: 5.0, look: 1.2 } },
    { name: 'orc-walk', o: { model: 'orc', pose: 'walk', t: 0.5, az: 0.6, dist: 5.0, look: 1.2 } },
    { name: 'orc-walk-b', o: { model: 'orc', pose: 'walk', t: 0.85, az: 1.4, dist: 5.0, look: 1.2 } },
    { name: 'orc-coil', o: { model: 'orc', pose: 'attack', t: 0.3, az: 0.6, dist: 5.0, look: 1.2 } },
    { name: 'orc-attack', o: { model: 'orc', pose: 'attack', t: 0.52, az: 0.6, dist: 5.0, look: 1.2 } },
    { name: 'orc-face', o: { model: 'orc', pose: 'idle', t: 1.0, az: 0.3, dist: 1.8, look: 1.75, fov: 34 } },
    { name: 'orc-grip', o: { model: 'orc', pose: 'idle', t: 1.0, az: 1.2, dist: 1.4, look: 1.15, fov: 32 } },
  ],
};

const shots = SETS[specArg] || DEFAULT;

const browser = await puppeteer.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: 'new',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 560, height: 680, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await page.waitForFunction('window.shotReady === true', { timeout: 60000 });

for (const s of shots) {
  await page.evaluate((o) => window.shot(o), s.o);
  const el = await page.$('#c');
  await el.screenshot({ path: `${outDir}/${s.name}.png` });
}
if (errors.length) console.log('ERRORS:', errors.slice(0, 5).join('\n'));
console.log('wrote', shots.length, 'shots to', outDir);
await browser.close();
