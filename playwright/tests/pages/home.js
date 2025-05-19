const AccountDetailsPage = require("./accountDetailsPage.js");
const TransactionsPage = require("./transactionsPage.js");
const BankAccountsPage = require("./bankAccountsPage.js");
const { expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.sidebarUserName = '[data-test="sidenav-username"]';
    this.sidebarAccountBalance = '[data-test="sidenav-user-balance"]';
    this.sidebarAccountDetailsButton = '[data-test="sidenav-user-settings"]';
    this.personalTransactionsBar = '[data-test="nav-personal-tab"]';
    this.bankAccountsButton = '[data-test="sidenav-bankaccounts"]';
  }

  async verifyCorrectUserLoggedIn(loggedUserName) {
    await expect(this.page.locator(this.sidebarUserName)).toBeVisible();
    await expect(this.page.locator(this.sidebarUserName)).toContainText(loggedUserName);
  }

  async verifyBalanceIsDisplayed() {
    await expect(this.page.locator(this.sidebarAccountBalance)).toBeVisible();
  }

  async clickAccountDetails() {
    await this.page.click(this.sidebarAccountDetailsButton);
    return new AccountDetailsPage(this.page);
  }

  async clickPersonalTransactions() {
    await this.page.click(this.personalTransactionsBar);
    return new TransactionsPage(this.page);
  }

  async clickOnBankAccounts() {
    await this.page.click(this.bankAccountsButton);
    return new BankAccountsPage(this.page);
  }
}

module.exports = HomePage;
