class AccountDetailsPage {
  get userSettingsForm() {
    return '[data-test="user-settings-form"]';
  }
  get firstNameField() {
    return "#user-settings-firstName-input";
  }
  get fullUserNameSidebar() {
    return '[data-test="sidenav-user-full-name"]';
  }
  get saveButton() {
    return '[data-test="user-settings-submit"]';
  }

  verifyAccountDetailsAreDisplayed() {
    cy.get(this.userSettingsForm).should("be.visible");
  }
  typeNewFirstName(firstName) {
    cy.get(this.firstNameField).clear().type(firstName);
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

module.exports = AccountDetailsPage;
