import { Locator } from "@playwright/test";

export class CardColumnsPageComponent {
  container: Locator;
  column: Locator;
  specificColumn: (id: string) => Locator;
  draftProjectBriefCard: Locator;
  scheduleKickoffCard: Locator;
  shareTimelineWithTeamMatesCard: Locator;

  constructor(container: Locator) {
    this.container = container;
    this.column = container.locator(
      '[class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"]' // use regex match
    );
    this.draftProjectBriefCard = this.column.locator(
      '[data-task-id="1207728107119660"]'
    );
    this.scheduleKickoffCard = this.column.locator(
      '[data-task-id="1207770129170812"]'
    );
    this.specificColumn = (id: string) =>
      this.column.locator(`[data-task-id="${id}"]`);
  }
}
