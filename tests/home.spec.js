import { test, expect } from "@playwright/test";

test("homepage loads and category shows products", async ({ page }) => {
  // 1. Go to the site
  await page.goto("https://practicesoftwaretesting.com/"); 

  // 2. Expect the homepage title to contain “Toolshop” or something visible
  await expect(page).toHaveTitle(/Toolshop/i);

  // 3. Click on “Categories”
  await page.getByTestId("nav-categories").click();

  // 4. Click on a specific category, e.g., Hand Tools
  await page.getByTestId("nav-hand-tools").click();

  // 5. Check that product cards are visible on the page
  const productCards = page.locator("app-product-card");
  await expect(productCards).toBeVisible();
  await expect(productCards).toHaveCountGreaterThan(0);
});
