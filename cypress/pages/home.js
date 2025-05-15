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
  get transactionDetailsHeaders() {
    return ".MuiListItem-alignItemsFlexStart";
  }
  get detailsHeader() {
    return '[data-test="transaction-detail-header"]';
  }
  get firstNameField() {
    return "#user-settings-firstName-input";
  }
  get saveNewAccountDetailsButton() {
    return '[data-test="user-settings-submit"]';
  }
  get fullUserNameSidebar() {
    return '[data-test="sidenav-user-full-name"]';
  }
  get saveButton() {
    return '[data-test="user-settings-submit"]';
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

  clickOnTransaction() {
    cy.get(this.transactionDetailsHeaders).first().click();
    return this;
  }

  verifyTransactionDetailsAreDisplayed() {
    cy.get(this.detailsHeader).should("be.visible");
  }

  typeNewFirstName(firstName) {
    cy.get(this.firstNameField).type(firstName);
    return this;
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
    return this;
  }

  verifyTheNewNameIsDisplayed(firstName) {
    cy.get(this.fullUserNameSidebar).should("contain.text", firstName);
  }
}
module.exports = HomePage;
