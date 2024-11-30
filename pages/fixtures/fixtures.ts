import { test as base } from "@playwright/test";
import { HomePage } from "../home-page";
import { ProjectsPage } from "../projects-page";

type ProjectsPageFixturesType = {
  homePage: HomePage;
  projectsPage: ProjectsPage;
};

type ProjectsPageOptionFixturesType = {
  sidebarLink: string;
  tags: string[];
};

export const test = base.extend<
  ProjectsPageFixturesType & ProjectsPageOptionFixturesType
>({
  sidebarLink: ["sidebar link", { option: true }],
  tags: [["tag"], { option: true }],

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },

  projectsPage: async ({ homePage, sidebarLink }, use) => {
    const projectsPage = await homePage.navigateToProjectsSidebarLink(
      sidebarLink
    );
    await use(projectsPage);
  },
});
