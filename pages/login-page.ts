import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomePage } from "./home-page";
import user from "../.auth/user.json";

export class LoginPage extends BasePage {
  welcomeText: Locator;
  emailAddressField: Locator;
  passwordField: Locator;
  continueButton: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.urlEnding = "-/login";
    this.welcomeText = page.getByText("Welcome to Asana");
    this.emailAddressField = page.getByRole("textbox", {
      name: "Email Address",
    });
    this.passwordField = page.getByRole("textbox", { name: "Password" });
    this.continueButton = page.getByRole("button", { name: /^Continue$/ });
    this.loginButton = page.getByRole("button", { name: /^Log in$/ });
  }

  public async login(): Promise<HomePage> {
    await this.emailAddressField.fill(user.emailAddress);
    await this.continueButton.click();
    await this.loginButton.waitFor();
    await this.passwordField.fill(user.password);
    await this.loginButton.click();
    return new HomePage(this.page);
  }
}
