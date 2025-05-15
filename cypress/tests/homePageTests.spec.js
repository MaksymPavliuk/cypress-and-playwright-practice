const SignInPage = require("../pages/signIn");

describe("Home page tests.", () => {
  let signInPage;
  let users;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    signInPage = new SignInPage();
    cy.visit("/");
  });

  it("should see bank balance", () => {
    let user = users.testUser;

    signInPage.loginWithValidUser(user.username, user.password).verifyBalanceIsDisplayed();
  });
});
