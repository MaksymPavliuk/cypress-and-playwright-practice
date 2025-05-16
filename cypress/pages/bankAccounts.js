class BankAccountsPage {
  get createAccountButton() {
    return '[data-test="bankaccount-new"]';
  }
  get deleteAccountButtons() {
    return '[data-test="bankaccount-delete"]';
  }
  get accountNames() {
    return ".MuiTypography-root.MuiTypography-body1";
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
    cy.get(this.accountNames)
      .filter((item) => item.contains(name))
      .should("have.length", 1);
  }

  deleteAccountByName(name) {
    cy.get(this.accountNames)
      .findIndex((item) => item.contains(name))
      .as("index");
    cy.get(this.deleteAccountButtons).eq(cy.get("@index")).click();
    return this;
  }

  verifyAccountWasDeletedByName(name) {
    cy.get(this.accountNames)
      .filter((item) => item.contains(name))
      .should("have.length", 0);
  }
}

module.exports = BankAccountsPage;
