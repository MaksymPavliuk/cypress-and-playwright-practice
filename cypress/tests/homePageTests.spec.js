const SignInPage = require("../pages/signIn");

describe("Home page tests.", () => {
  let signInPage;
  let users; // all users
  let user; // current used

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    user = users.testUser;

    signInPage = new SignInPage();
    cy.visit("/");
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

  it("should see transaction details", () => {
    signInPage
      .loginWithValidUser(user.username, user.password)
      .clickPersonalTransactions()
      .clickOnTransaction()
      .verifyTransactionDetailsAreDisplayed();
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
