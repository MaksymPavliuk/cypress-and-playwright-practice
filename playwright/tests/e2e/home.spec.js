const { test, expect } = require("@playwright/test");
const SignInPage = require("../pages/login");
const users = require("../../fixtures/users.json");
const bankAccounts = require("../../fixtures/bankAccountDetails.json");

test.describe("Home page tests", () => {
  let signInPage;
  let user;
  let bankAccount;
  const nameSalt = Date.now().toString().slice(-5);
  const modifiedAccountName = bankAccounts.newAccount.name + nameSalt;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    user = users.testUser;
    bankAccount = bankAccounts.newAccount;
    await page.goto("localhost:3000/");
  });

  test("should create new bank account", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    const bankAccountsPage = await homePage.clickOnBankAccounts();
    await bankAccountsPage.clickCreateAccount();
    await bankAccountsPage.typeAccountName(modifiedAccountName);
    await bankAccountsPage.typeRoutingNumber(bankAccount.routingNumber);
    await bankAccountsPage.typeAccountNumber(bankAccount.accountNumber);
    await bankAccountsPage.clickSaveAccountButton();
    await bankAccountsPage.verifyNewAccountWasCreatedByName(modifiedAccountName);
  });

  test("should delete the created account", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    const bankAccountsPage = await homePage.clickOnBankAccounts();
    await bankAccountsPage.deleteAccountByName(modifiedAccountName);
    await bankAccountsPage.verifyAccountWasDeletedByName(modifiedAccountName);
  });

  test("should see transaction details", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    const transactionsPage = await homePage.clickPersonalTransactions();
    await transactionsPage.clickOnTransaction();
    await transactionsPage.verifyTransactionDetailsAreDisplayed();
  });

  test("should update account info", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    const accountDetailsPage = await homePage.clickAccountDetails();
    const newFirstName = "williams";
    await accountDetailsPage.typeNewFirstName(newFirstName);
    await accountDetailsPage.clickSaveButton();
    await accountDetailsPage.verifyTheNewNameIsDisplayed(newFirstName);
  });

  test("should see all personal transactions", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    const transactionsPage = await homePage.clickPersonalTransactions();
    await transactionsPage.verifyTransactionsAreVisible();
  });

  test("should see bank balance", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    await homePage.verifyBalanceIsDisplayed();
  });

  test("should see account details", async ({ page }) => {
    const homePage = await signInPage.loginWithValidUser(user.username, user.password);
    const accountDetailsPage = await homePage.clickAccountDetails();
    await accountDetailsPage.verifyAccountDetailsAreDisplayed();
  });
});
