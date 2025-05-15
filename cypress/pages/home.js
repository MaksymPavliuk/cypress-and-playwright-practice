class HomePage {
  get sidebarName() {
    return '[data-test="sidenav-username"]';
  }

  verifyCorrectUserLoggedIn(loggedUserName) {
    cy.get(this.sidebarName).should("be.visible").should("contain.text", loggedUserName);
  }
}
module.exports = HomePage;
