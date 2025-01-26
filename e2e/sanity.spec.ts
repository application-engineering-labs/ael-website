import { test, expect } from '@playwright/test';

test('is viable website', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('nav__link-services')).toHaveCount(1);
  await expect(page.getByTestId('nav__link-about')).toHaveCount(1);
  await expect(page.getByTestId('nav__link-contact')).toHaveCount(1);
  await expect(page.getByTestId('logo')).toBeVisible();
  await expect(page.getByTestId('hero')).toBeVisible();
});

test('all clickable links are valid', async ({ page }) => {
  await page.goto('/');
  const links = await page.$$eval('a', (anchors) => anchors.map((a) => a.href));

  for (const link of links) {
    if (!link) {
      continue;
    }

    const isBrokenAnchor = link.endsWith('#');
    expect(isBrokenAnchor).toBe(false);
    const isValidUrl = new URL(link);
    const response = await page.request.get(isValidUrl.href);
    expect(response.ok()).toBe(true);
  }
});
