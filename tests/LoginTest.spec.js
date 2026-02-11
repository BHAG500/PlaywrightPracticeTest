import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import config from "../config.json";
test("test to verify login is successful", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("jen_perry_12345", "Pass_1234#");

  const nameOfAccount = await page.locator('.maintext');
  await expect(nameOfAccount).toBeVisible();
  await expect(nameOfAccount).toHaveText("My Account");

});
