class HomePage {
  get sidebarName() {
    return '[data-test="sidenav-username"]';
  }
  get sidebarAccountBalance() {
    return '[data-test="sidenav-user-balance"]';
  }
  get sidebarAccountDetailsButton() {
    return '[data-test="sidenav-user-settings"]';
  }
  get userSettingsForm() {
    return '[data-test="user-settings-form"]';
  }
  get personalTransactionsBar() {
    return '[data-test="nav-personal-tab"]';
  }
  get allTransactionsList() {
    return '[data-test="transaction-list"]';
  }

  verifyBalanceIsDisplayed() {
    cy.get(this.sidebarAccountBalance).should("be.visible");
  }

  verifyCorrectUserLoggedIn(loggedUserName) {
    cy.get(this.sidebarName).should("be.visible").should("contain.text", loggedUserName);
  }

  clickAccountDetails() {
    cy.get(this.sidebarAccountDetailsButton).click();
    return this;
  }

  verifyAccountDetailsAreDisplayed() {
    cy.get(this.userSettingsForm).should("be.visible");
  }

  clickPersonalTransactions() {
    cy.get(this.personalTransactionsBar).click();
    return this;
  }

  verifyTransactionsAreVisible() {
    cy.get(this.allTransactionsList).should("be.visible");
  }
}
module.exports = HomePage;
