import { Locator } from "@playwright/test";

export class PageSidebarComponent {
  container: Locator;

  constructor(container: Locator) {
    this.container = container;
  }
}
