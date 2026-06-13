import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';

mkdirSync('/tmp/screenshots', { recursive: true });

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(`CONSOLE ERR: ${m.text()}`); });
page.on('pageerror', e => errors.push(`PAGE ERR: ${e.message}`));

const routes = [
  ['/tr', 'home-tr'],
  ['/en', 'home-en'],
  ['/tr/projects', 'projects-tr'],
  ['/tr/blog', 'blog-tr'],
  ['/tr/about', 'about-tr'],
  ['/tr/uses', 'uses-tr'],
  ['/tr/playground', 'playground-tr'],
];

for (const [path, name] of routes) {
  errors.length = 0;
  try {
    const res = await page.goto(`http://localhost:3000${path}`, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/screenshots/${name}.png`, fullPage: true });
    const title = await page.title();
    console.log(`✓ ${path} (${res.status()}) — "${title}"`);
    if (errors.length) console.log(`  ERRORS: ${errors.join(' | ')}`);
  } catch (e) {
    console.log(`✗ ${path} — ${e.message}`);
  }
}

await browser.close();
