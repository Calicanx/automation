import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1200);

const sections = [
  'hero', 'about', 'problem', 'what-you-get', 'pricing', 'work',
  'how-it-works', 'integration', 'who-for', 'testimonials', 'faq', 'cta', 'footer',
];

const fs = await import('node:fs');
fs.mkdirSync('/tmp/shots', { recursive: true });

for (const id of sections) {
  const el = page.locator(`[data-section="${id}"]`);
  await el.screenshot({ path: `/tmp/shots/${id}.png` });
  console.log('captured', id);
}

await page.screenshot({ path: '/tmp/shots/full.png', fullPage: true });
console.log('done');
await browser.close();
