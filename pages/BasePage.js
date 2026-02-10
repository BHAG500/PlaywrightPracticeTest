import {Page, Locator, expect} from '@playwright/test';

class BasePage {
  //protected page: Page;

  constructor(page) {
    this.page = page;
  }
}
module.exports = BasePage;
navigateTo(url) {
return this.page.goto(url);

}
