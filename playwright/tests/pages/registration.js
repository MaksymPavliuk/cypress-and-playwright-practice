class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = "#firstName";
    this.lastNameInput = "#lastName";
    this.userNameInput = "#username";
    this.passwordInput = "#password";
    this.confirmPasswordInput = "#confirmPassword";
    this.submitButton = '[data-test="signup-submit"]';
  }

  async typeFirstName(firstName) {
    await this.page.fill(this.firstNameInput, firstName);
  }

  async typeLastName(lastName) {
    await this.page.fill(this.lastNameInput, lastName);
  }

  async typeUserName(username) {
    await this.page.fill(this.userNameInput, username);
  }

  async typePassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async typeConfirmPassword(password) {
    await this.page.fill(this.confirmPasswordInput, password);
  }

  async clickSubmitButton() {
    await this.page.click(this.submitButton);
    const SignInPage = require("./login");

    return new SignInPage(this.page);
  }
}

module.exports = RegistrationPage;
