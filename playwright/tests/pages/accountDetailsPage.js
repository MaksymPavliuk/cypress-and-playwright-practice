const { expect } = require("@playwright/test");

class AccountDetailsPage {
  constructor(page) {
    this.page = page;
    this.userSettingsForm = '[data-test="user-settings-form"]';
    this.firstNameField = "#user-settings-firstName-input";
    this.fullUserNameSidebar = '[data-test="sidenav-user-full-name"]';
    this.saveButton = '[data-test="user-settings-submit"]';
  }

  async verifyAccountDetailsAreDisplayed() {
    await expect(this.page.locator(this.userSettingsForm)).toBeVisible();
  }

  async typeNewFirstName(firstName) {
    const input = this.page.locator(this.firstNameField);
    await input.fill(""); // Clear field
    await input.type(firstName);
  }

  async clickSaveButton() {
    await this.page.click(this.saveButton);
  }

  async verifyTheNewNameIsDisplayed(firstName) {
    await expect(this.page.locator(this.fullUserNameSidebar)).toContainText(firstName);
  }
}

module.exports = AccountDetailsPage;
