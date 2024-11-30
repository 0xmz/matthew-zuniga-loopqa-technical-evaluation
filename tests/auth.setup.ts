import test, { test as setup, expect } from "@playwright/test";
import path from "path";
import { LoginPage } from "../pages/login-page";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  const homePage = await loginPage.login();
  await homePage.pageLayout.waitFor();
  await page.context().storageState({ path: authFile });
});
