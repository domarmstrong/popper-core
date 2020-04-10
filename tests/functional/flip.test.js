/**
 * @jest-environment jest-playwright-preset
 * @flow
 */
import { scroll, screenshot } from '../utils/playwright.js';

it('should flip from right to bottom', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/main.html`);

  await scroll(page, '.scroll1', 400);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should flip from -end to -start variation', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/checkVariation.html`);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should flip from -end to -start variation while maintaining main axis flipping', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/checkVariation.html`);

  await scroll(page, 'html', 200);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('larger: should be flipped to -end variation', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/checkVariation-larger.html`);

  await scroll(page, 'html', 0);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('larger: should be flipped to -start variation when -end does not fit', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/checkVariation-larger.html`);

  await scroll(page, 'html', 500);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('shorter: should be flipped to -start variation', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/checkVariation-shorter.html`);

  await scroll(page, 'html', 0);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('shorter: should be flipped to original -end variation when it fits', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/checkVariation-shorter.html`);

  await scroll(page, 'html', 600);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should not flip variations with `flipVariations: false`', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/flipVariations-false.html`);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should flip from right to bottom', async () => {
  await page.goto(`${TEST_URL}/modifiers/flip/alt-boundary.html`);

  await scroll(page, '.scroll1', 400);

  expect(await screenshot(page)).toMatchImageSnapshot();
});
