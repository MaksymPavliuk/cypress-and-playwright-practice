const { expect } = require("@playwright/test");
const RegistrationPage = require("./registration");
const HomePage = require("./home");

class SignInPage {
  constructor(page) {
    this.page = page;
    this.baseUrl = "localhost:3000";
    this.usernameInputField = "#username";
    this.passwordInputField = "#password";
    this.registerUserButton = '[data-test="signup"]';
    this.submitButton = '[data-test="signin-submit"]';
  }

  async visit() {
    await this.page.goto(`${this.baseUrl}/`);
  }

  async typeUsername(username) {
    await this.page.fill(this.usernameInputField, username);
  }

  async typePassword(password) {
    await this.page.fill(this.passwordInputField, password);
  }

  async clickRegisterButton() {
    await this.page.click(this.registerUserButton);
    await this.page.click(this.registerUserButton);
    return new RegistrationPage(this.page);
  }

  async clickSubmitButton() {
    await this.page.click(this.submitButton);
    return new HomePage(this.page);
  }

  async verifyIsSignInPage() {
    await expect(this.page.locator(this.submitButton)).toBeVisible();
  }

  async loginWithValidUser(username, password) {
    await this.typeUsername(username);
    await this.typePassword(password);
    return await this.clickSubmitButton();
  }
}

module.exports = SignInPage;
