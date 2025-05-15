const SignInPage = require("../pages/signIn");

describe("Login tests", () => {
  let users;
  let signInPage;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    signInPage = new SignInPage();
    cy.visit("/");
  });

  it("should register new user", () => {
    let user = users.newUser;

    signInPage
      .clickRegisterButton()
      .typeFirstName(user.firstName)
      .typeLastName(user.lastName)
      .typeUserName(user.username)
      .typePassword(user.password)
      .typeConfirmPassword(user.password)
      .clickSubmitButton()
      .verifyIsSignInPage();
  });

  it("should log in", () => {
    let testUser = users.testUser;

    signInPage
      .typeUsername(testUser.username)
      .typePassword(testUser.password)
      .clickSubmitButton()
      .verifyCorrectUserLoggedIn(testUser.username);
  });
});
