const ApiMethods = require("../apiSteps/apiMethods");

describe("API tests", () => {
  let apiMethods;
  let users;
  let user;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });

    apiMethods = new ApiMethods();
  });

  beforeEach(() => {
    user = users.testUser;
  });

  it("should get a list of bankAccounts", () => {
    apiMethods.signIn(user.username, user.password).getBankAccounts(user.routingNumber);
  });
});
