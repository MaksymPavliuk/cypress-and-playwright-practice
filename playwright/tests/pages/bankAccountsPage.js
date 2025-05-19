const { expect } = require("@playwright/test");

class BankAccountsPage {
  constructor(page) {
    this.page = page;
    this.createAccountButton = '[data-test="bankaccount-new"]';
    this.deleteAccountButtons = '[data-test="bankaccount-delete"]';
    this.accountNames = ".MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom";
    this.accountNameInputField = "#bankaccount-bankName-input";
    this.routingNumberInputField = "#bankaccount-routingNumber-input";
    this.accountNumberInputField = "#bankaccount-accountNumber-input";
    this.saveAccountButton = '[data-test="bankaccount-submit"]';
  }

  async clickCreateAccount() {
    await this.page.click(this.createAccountButton);
  }

  async typeAccountName(name) {
    await this.page.fill(this.accountNameInputField, name);
  }

  async typeRoutingNumber(routingNumber) {
    await this.page.fill(this.routingNumberInputField, routingNumber);
  }

  async typeAccountNumber(accountNumber) {
    await this.page.fill(this.accountNumberInputField, accountNumber);
  }

  async clickSaveAccountButton() {
    await this.page.click(this.saveAccountButton);
  }

  async verifyNewAccountWasCreatedByName(name) {
    await expect(this.page.locator(this.accountNames).filter({ hasText: name })).toBeVisible();
  }

  async deleteAccountByName(name) {
    const row = this.page.locator('[data-test^="bankaccount-list-item-"]', {
      has: this.page.locator(this.accountNames, { hasText: name }),
    });
    await expect(row).toHaveCount(1);
    await row.locator(this.deleteAccountButtons).click();
  }

  async verifyAccountWasDeletedByName(name) {
    const deletedLabel = this.page.locator(this.accountNames).filter({ hasText: name });
    await expect(deletedLabel).toContainText("Deleted");
  }
}

module.exports = BankAccountsPage;
