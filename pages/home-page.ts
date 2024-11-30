import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { PageSidebarComponent } from "./page-components/sidebar-page.component";
import { ProjectsPage } from "./projects-page";

export class HomePage extends BasePage {
  pageLayout: Locator;
  asanaSidebar: PageSidebarComponent;
  sidebarButton: (buttonName: string) => Locator;

  constructor(page: Page) {
    super(page);
    this.urlEnding = "0/home/";
    this.pageLayout = page.locator('[id="asana_full_page"]');
    this.asanaSidebar = new PageSidebarComponent(
      page.locator('[id="asana_sidebar"]')
    );
    this.sidebarButton = (buttonName: string) =>
      this.asanaSidebar.container.getByRole("link", { name: `${buttonName}` });
  }

  public async navigateToProjectsSidebarLink(
    buttonName: string
  ): Promise<ProjectsPage> {
    await this.sidebarButton(buttonName).click();
    return new ProjectsPage(this.page);
  }
}
