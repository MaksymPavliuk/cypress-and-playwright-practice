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
    apiMethods.signIn(user.username, user.password);
  });

  it("should get a list of bankAccounts from the valid logged In user", () => {
    apiMethods.getBankAccounts(user.bankAccountId);
  });

  it("should delete a bank account by id", () => {
    apiMethods
      .deleteBankAccountById(user.bankAccountId)
      .verifyAccountIsDeletedById(user.bankAccountId);
  });
});
