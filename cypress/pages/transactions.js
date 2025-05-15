class TransactionsPage {
  get allTransactionsList() {
    return '[data-test="transaction-list"]';
  }
  get transactionDetailsHeaders() {
    return ".MuiListItem-alignItemsFlexStart";
  }
  get detailsHeader() {
    return '[data-test="transaction-detail-header"]';
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
}

module.exports = TransactionsPage;
