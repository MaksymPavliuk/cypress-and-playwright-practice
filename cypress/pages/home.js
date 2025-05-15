class HomePage {
  get sidebarName() {
    return '[data-test="sidenav-username"]';
  }

  get sidebarAccountBalance() {
    return '[data-test="sidenav-user-balance"]';
  }

  verifyBalanceIsDisplayed() {
    cy.get(this.sidebarAccountBalance).should("be.visible");
  }

  verifyCorrectUserLoggedIn(loggedUserName) {
    cy.get(this.sidebarName).should("be.visible").should("contain.text", loggedUserName);
  }
}
module.exports = HomePage;
