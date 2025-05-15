const AccountDetailsPage = require("../pages/accountDetails");
const TransactionsPage = require("../pages/transactions");

class HomePage {
  // *** <- *** <- *** <- GETTERS(CODE: 32) -> *** -> *** -> ***
  get sidebarUserName() {
    return '[data-test="sidenav-username"]';
  }
  get sidebarAccountBalance() {
    return '[data-test="sidenav-user-balance"]';
  }
  get sidebarAccountDetailsButton() {
    return '[data-test="sidenav-user-settings"]';
  }
  get personalTransactionsBar() {
    return '[data-test="nav-personal-tab"]';
  }
  get bankAccountsButton() {
    return '[data-test="sidenav-bankaccounts"]';
  }

  // *** <- *** <- *** <- VERIFICATION METHODS(CODE: 31) -> *** -> *** -> ***
  verifyCorrectUserLoggedIn(loggedUserName) {
    cy.get(this.sidebarUserName).should("be.visible").should("contain.text", loggedUserName);
  }
  verifyBalanceIsDisplayed() {
    cy.get(this.sidebarAccountBalance).should("be.visible");
  }

  // *** <- *** <- *** <- STEPS METHODS(CODE: 21) -> *** -> *** -> ***
  clickAccountDetails() {
    cy.get(this.sidebarAccountDetailsButton).click();
    return new AccountDetailsPage();
  }
  clickPersonalTransactions() {
    cy.get(this.personalTransactionsBar).click();
    return new TransactionsPage();
  }

  clickOnBankAccounts() {}
}

// *** <- *** <- *** <- EXPORTS(CODE: 34) -> *** -> *** -> ***
module.exports = HomePage;
