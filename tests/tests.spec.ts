import { expect } from "@playwright/test";
import { test } from "../pages/fixtures/fixtures";

[
  {
    sidebarLink: "Cross-functional project plan, Project",
    columnName: "To do",
    cardTitle: "Draft project brief",
    firstTag: "Non-Priority",
    secondTag: "On track",
    columnId: "1207728107119660",
  },
  {
    sidebarLink: "Cross-functional project plan, Project",
    columnName: "To do",
    cardTitle: "Schedule kickoff meeting",
    firstTag: "Medium",
    secondTag: "At risk",
    columnId: "1207770129170812",
  },
].forEach((testData) => {
  test.describe("projects page", () => {
    test.use({
      sidebarLink: testData.sidebarLink,
    });
    test(`${testData.columnName} column contains card ${testData.cardTitle} and tags ${testData.firstTag} ${testData.secondTag}`, async ({
      projectsPage,
    }) => {
      await expect(
        projectsPage.cardColumns.column.getByRole("heading", {
          name: `${testData.columnName}`,
        })
      ).toContainText(testData.columnName);
      await expect(
        projectsPage.cardColumns.specificColumn(`${testData.columnId}`)
      ).toContainText(`${testData.cardTitle}`);
      await expect(
        projectsPage.cardColumns.specificColumn(`${testData.columnId}`)
      ).toContainText(`${testData.firstTag}`);
      await expect(
        projectsPage.cardColumns.specificColumn(`${testData.columnId}`)
      ).toContainText(`${testData.secondTag}`);
    });
  });
});
