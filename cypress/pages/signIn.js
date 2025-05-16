const HomePage = require("../pages/home");
const RegistrationPage = require("../pages/registration");

class SignInPage {
  get usernameInputField() {
    return "#username";
  }
  get passwordInputField() {
    return "#password";
  }
  get registerUserButton() {
    return '[data-test="signup"]';
  }
  get submitButton() {
    return '[data-test="signin-submit"]';
  }

  loginWithValidUser(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    let homePage = this.clickSubmitButton();
    return homePage;
  }

  visit() {
    cy.visit("/signin");
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInputField).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInputField).type(password);
    return this;
  }

  clickRegisterButton() {
    cy.get(this.registerUserButton).click();
    return new RegistrationPage();
  }

  clickSubmitButton() {
    cy.get(this.submitButton).click();
    return new HomePage();
  }

  verifyIsSignInPage() {
    cy.get(this.submitButton).should("be.visible");
  }
}

module.exports = SignInPage;
