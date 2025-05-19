const { test, expect } = require("@playwright/test");
const SignInPage = require("../pages/login");
const fs = require("fs");

test.describe("Login tests", () => {
  let users;

  test.beforeAll(() => {
    users = JSON.parse(fs.readFileSync("playwright/fixtures/users.json", "utf8"));
  });

  test.beforeEach(async ({ page }) => {
    const signInPage = new SignInPage(page);
    await signInPage.visit();
  });

  test("should log in", async ({ page }) => {
    const signInPage = new SignInPage(page);
    const user = users.testUser;

    await signInPage.typeUsername(user.username);
    await signInPage.typePassword(user.password);
    const homePage = await signInPage.clickSubmitButton();
    await homePage.verifyCorrectUserLoggedIn(user.username);
  });

  test("should register new user", async ({ page }) => {
    const signInPage = new SignInPage(page);
    const user = users.newUser;

    const registrationPage = await signInPage.clickRegisterButton();
    await registrationPage.typeFirstName(user.firstName);
    await registrationPage.typeLastName(user.lastName);
    await registrationPage.typeUserName(user.username);
    await registrationPage.typePassword(user.password);
    await registrationPage.typeConfirmPassword(user.password);
    await registrationPage.clickSubmitButton();

    await signInPage.verifyIsSignInPage();
  });
});
