const SignInPage = require("../pages/signIn");

describe("Home page tests.", () => {
  let signInPage;
  let users; // all users
  let user; // current used

  let modifiedAccountName;
  let nameSalt;
  let bankAccounts;
  let bankAccount;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
    cy.fixture("bankAccountDetails").then((data) => {
      bankAccounts = data;
    });

    nameSalt = Date.now().toString().slice(-5);
  });

  beforeEach(() => {
    user = users.testUser;
    bankAccount = bankAccounts.newAccount;
    modifiedAccountName = bankAccount.name + nameSalt;

    signInPage = new SignInPage();
    cy.visit("/");
  });

  it("should create new bank account", () => {
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickOnBankAccounts()
      .clickCreateAccount()
      .typeAccountName(modifiedAccountName)
      .typeRoutingNumber(bankAccount.routingNumber)
      .typeAccountNumber(bankAccount.accountNumber)
      .clickSaveAccountButton()
      .verifyNewAccountWasCreatedByName(modifiedAccountName);
  });

  it("should delete the createed account", () => {
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickOnBankAccounts()
      .deleteAccountByName(modifiedAccountName)
      .verifyAccountWasDeletedByName(modifiedAccountName);
  });

  it("should see transaction details", () => {
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickPersonalTransactions()
      .clickOnTransaction()
      .verifyTransactionDetailsAreDisplayed();
  });

  it("should update account info", () => {
    let newFirstName = "williams";
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickAccountDetails()
      .typeNewFirstName(newFirstName)
      .clickSaveButton()
      .verifyTheNewNameIsDisplayed(newFirstName);
  });

  it("should see all personal transactions", () => {
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickPersonalTransactions()
      .verifyTransactionsAreVisible();
  });

  it("should see bank balance", () => {
    signInPage.loginWithValidUser(user.username, user.password).verifyBalanceIsDisplayed();
  });

  it("should see account details", () => {
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickAccountDetails()
      .verifyAccountDetailsAreDisplayed();
  });
});
