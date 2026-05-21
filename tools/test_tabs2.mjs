import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push({ msg: e.message, stack: e.stack }));

await page.goto('http://localhost:8765/');
await page.waitForSelector('.card');

const cards = await page.locator('.card').all();
let targetCard = null;
for (const card of cards) {
  const numText = await card.locator('.card-num').textContent();
  const num = parseInt(numText.replace('ESTAÇÃO ', ''));
  if (num >= 5 && num < 30) { targetCard = card; break; }
}

await targetCard.click();
await page.waitForSelector('.tabs-nav');
await page.waitForTimeout(500);

console.log('JS errors after opening station:');
errors.forEach(e => { console.log('MSG:', e.msg); console.log('STACK:', e.stack?.split('\n').slice(0,5).join('\n')); });
await browser.close();
