import puppeteer from 'puppeteer-core';

const url = 'http://localhost:5199/hunterscape/tools/shot.html';
const NAMES = ['playerHead', 'handR', 'handL', 'toolEdge', 'spearTip', 'footL', 'footR', 'playerTorso'];

const cases = JSON.parse(process.argv[2]);

const browser = await puppeteer.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: 'new',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await page.waitForFunction('window.shotReady === true', { timeout: 60000 });

for (const c of cases) {
  const r = await page.evaluate(
    (o, names) => {
      window.shot(o);
      return window.probe(names);
    },
    c,
    NAMES,
  );
  console.log(`${c.pose}@${c.t}`, JSON.stringify(r));
}
await browser.close();
