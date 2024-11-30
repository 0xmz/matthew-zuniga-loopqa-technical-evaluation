import { Locator } from "@playwright/test";

export class CardColumnsPageComponent {
  container: Locator;
  column: Locator;
  specificColumn: (id: string) => Locator;

  constructor(container: Locator) {
    this.container = container;
    this.column = container.locator(
      '[class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"]'
    );
    this.specificColumn = (id: string) =>
      this.column.locator(`[data-task-id="${id}"]`);
  }
}
