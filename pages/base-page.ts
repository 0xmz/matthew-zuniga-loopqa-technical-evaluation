import { Page } from "@playwright/test";

export abstract class BasePage {
  readonly baseUrl: string;
  protected urlEnding: string;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://app.asana.com/";
  }

  public async goto(): Promise<void> {
    await this.page.goto(this.baseUrl + this.urlEnding);
  }
}
