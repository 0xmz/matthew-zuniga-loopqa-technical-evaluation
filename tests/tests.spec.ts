import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.ts";

[
  {
    sidebarLink: "Cross-functional project plan, Project",
    columnName: "To do",
    cardTitle: "Draft project brief",
    tags: ["Non-Priority", "On track"],
    columnId: "1207728107119660",
  },
  {
    sidebarLink: "Cross-functional project plan, Project",
    columnName: "To do",
    cardTitle: "Schedule kickoff meeting",
    tags: ["Medium", "At risk"],
    columnId: "1207770129170812",
  },
  {
    sidebarLink: "Cross-functional project plan, Project",
    columnName: "To do",
    cardTitle: "Share timeline with teammates",
    tags: ["High", "Off track"],
    columnId: "1207770129170814",
  },
  {
    sidebarLink: "Work Requests",
    columnName: "New Requests",
    cardTitle: "[Example] Laptop setup for new hire",
    tags: ["Medium priority", "Low effort", "New hardware", "Not Started"],
    columnId: "1205367008167113",
  },
  {
    sidebarLink: "Work Requests",
    columnName: "In Progress",
    cardTitle: "[Example] Password not working",
    tags: ["Low effort", "Low priority", "Password reset", "Waiting"],
    columnId: "1205367008167114",
  },
  {
    sidebarLink: "Work Requests",
    columnName: "Completed",
    cardTitle: "[Example] New keycard for Daniela V",
    tags: ["Low effort", "New hardware", "High priority", "Done"],
    columnId: "1205367008167115",
  },
].forEach((testData) => {
  test.describe("projects page", () => {
    test.use({
      sidebarLink: testData.sidebarLink,
      tags: testData.tags,
    });
    test(`${testData.columnName} column contains card ${testData.cardTitle} and tags ${testData.tags}`, async ({
      projectsPage,
      tags,
    }) => {
      await expect(
        projectsPage.cardColumns.column.getByRole("heading", {
          name: testData.columnName,
        })
      ).toContainText(testData.columnName);
      await expect(
        projectsPage.cardColumns.specificColumn(testData.columnId)
      ).toContainText(testData.cardTitle);

      for (const tag in tags) {
        await expect(
          projectsPage.cardColumns.specificColumn(`${testData.columnId}`)
        ).toContainText(testData.tags[tag]);
      }
    });
  });
});
