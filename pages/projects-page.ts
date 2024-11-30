import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { CardColumnsPageComponent } from "./page-components/card-columns-page.component";

export class ProjectsPage extends BasePage {
  cardColumns: CardColumnsPageComponent;

  constructor(page: Page) {
    super(page);
    this.cardColumns = new CardColumnsPageComponent(
      page.locator('[class="CommentOnlyBoardBody Board-body"]') // use regex match
    );
  }
}
