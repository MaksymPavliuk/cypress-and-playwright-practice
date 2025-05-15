class RegistrationPage {
  get firstNameInput() {
    return "#firstName";
  }
  get lastNameInput() {
    return "#lastName";
  }
  get userNameInput() {
    return "#username";
  }
  get passwordInput() {
    return "#password";
  }
  get confirmPasswordInput() {
    return "#confirmPassword";
  }
  get submitButton() {
    return '[data-test="signup-submit"]';
  }

  typeFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }
  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }
  typeUserName(username) {
    cy.get(this.userNameInput).type(username);
    return this;
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  typeConfirmPassword(password) {
    cy.get(this.confirmPasswordInput).type(password);
    return this;
  }
  clickSubmitButton() {
    cy.get(this.submitButton).click();

    const SignInPage = require("../pages/signIn");
    return new SignInPage();
  }
}

module.exports = RegistrationPage;
