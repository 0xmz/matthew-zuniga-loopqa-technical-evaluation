import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { PageSidebarComponent } from "./page-components/sidebar-page.component";
import { ProjectsPage } from "./projects-page";

export class HomePage extends BasePage {
  pageLayout: Locator;
  sidebar: PageSidebarComponent;

  constructor(page: Page) {
    super(page);
    this.urlEnding = "0/home/";
    this.pageLayout = page.locator('[id="asana_full_page"]');
    this.sidebar = new PageSidebarComponent(
      page.locator('[id="asana_sidebar"]')
    );
  }

  public async navigateToProjectsSidebarLink(
    buttonName: string
  ): Promise<ProjectsPage> {
    await this.sidebar.clickSidebarButton(buttonName);
    return new ProjectsPage(this.page);
  }
}
