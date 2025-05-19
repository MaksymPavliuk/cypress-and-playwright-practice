const { expect } = require("@playwright/test");

class TransactionsPage {
  constructor(page) {
    this.page = page;
    this.allTransactionsList = '[data-test="transaction-list"]';
    this.transactionDetailsHeaders = ".MuiListItem-alignItemsFlexStart";
    this.detailsHeader = '[data-test="transaction-detail-header"]';
  }

  async verifyTransactionsAreVisible() {
    await expect(this.page.locator(this.allTransactionsList)).toBeVisible();
  }

  async clickOnTransaction() {
    await this.page.locator(this.transactionDetailsHeaders).first().click();
  }

  async verifyTransactionDetailsAreDisplayed() {
    await expect(this.page.locator(this.detailsHeader)).toBeVisible();
  }
}

module.exports = TransactionsPage;
