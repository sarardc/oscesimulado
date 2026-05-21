import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto('http://localhost:8765/');
await page.waitForSelector('.card');

const cards = await page.locator('.card').all();
let targetCard = null;
for (const card of cards) {
  const numText = await card.locator('.card-num').textContent();
  const num = parseInt(numText.replace('ESTAÇÃO ', ''));
  if (num >= 5 && num < 30) { targetCard = card; console.log('Found card:', numText); break; }
}

await targetCard.click();
await page.waitForSelector('.tabs-nav');

const tabBtns = await page.locator('.tab-btn').all();
console.log('Tab count:', tabBtns.length);
for (const btn of tabBtns) {
  console.log('Tab:', (await btn.textContent()).trim());
}

await tabBtns[2].click();
await page.waitForTimeout(300);
const tab2 = await page.locator('#tab2').innerHTML();
console.log('Tab C class:', await page.locator('#tab2').getAttribute('class'));
console.log('Tab C content length:', tab2.length);
console.log('Tab C snippet:', tab2.substring(0, 300));

await tabBtns[3].click();
await page.waitForTimeout(300);
const tab3 = await page.locator('#tab3').innerHTML();
console.log('Tab D class:', await page.locator('#tab3').getAttribute('class'));
console.log('Tab D content length:', tab3.length);
console.log('Tab D snippet:', tab3.substring(0, 300));

console.log('JS errors:', errors);
await browser.close();
