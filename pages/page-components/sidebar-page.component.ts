import { Locator } from "@playwright/test";

export class PageSidebarComponent {
  container: Locator;
  sidebarButton: (buttonName: string) => Locator;

  constructor(container: Locator) {
    this.container = container;
    this.sidebarButton = (buttonName: string) =>
      this.container.getByRole("link", { name: `${buttonName}` });
  }

  public async clickSidebarButton(buttonName: string): Promise<void> {
    await this.sidebarButton(buttonName).click();
  }
}
