class BankAccountsPage {
  get createAccountButton() {
    return '[data-test="bankaccount-new"]';
  }
  get deleteAccountButtons() {
    return '[data-test="bankaccount-delete"]';
  }
  get accountNames() {
    return ".MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom";
  }
  get commonWrapperForNamesAndButtons() {
    return ".MuiGrid-container.MuiGrid-align-items-xs-flex-start";
  }
  get wrapperForButton() {
    return ".MuiGrid-root.MuiGrid-item";
  }
  get accountNameInputField() {
    return "#bankaccount-bankName-input";
  }
  get routingNumberInputField() {
    return "#bankaccount-routingNumber-input";
  }
  get accountNumberInputField() {
    return "#bankaccount-accountNumber-input";
  }
  get saveAccountButton() {
    return '[data-test="bankaccount-submit"]';
  }

  clickCreateAccount() {
    cy.get(this.createAccountButton).click();
    return this;
  }

  typeAccountName(name) {
    cy.get(this.accountNameInputField).type(name);
    return this;
  }

  typeRoutingNumber(routingNumber) {
    cy.get(this.routingNumberInputField).type(routingNumber);
    return this;
  }

  typeAccountNumber(accountNumber) {
    cy.get(this.accountNumberInputField).type(accountNumber);
    return this;
  }

  clickSaveAccountButton() {
    cy.get(this.saveAccountButton).click();
    return this;
  }

  verifyNewAccountWasCreatedByName(name) {
    cy.contains(this.accountNames, name).should("exist");
  }

  deleteAccountByName(name) {
    cy.contains(this.accountNames, name)
      .parents(this.commonWrapperForNamesAndButtons)
      .find(this.wrapperForButton)
      .find(this.deleteAccountButtons)
      .click();

    return this;
  }

  verifyAccountWasDeletedByName(name) {
    cy.get(this.accountNames).filter(`:contains("${name}")`).should("contain.text", "Deleted");
  }
}

module.exports = BankAccountsPage;
