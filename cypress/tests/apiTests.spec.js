const ApiMethods = require("../apiSteps/apiMethods");

describe("API tests", () => {
  let apiMethods;
  let users;
  let user;
  let publicTransactions;
  let transaction;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
    cy.fixture("public-transactions").then((data) => {
      publicTransactions = data;
    });

    apiMethods = new ApiMethods();
  });

  beforeEach(() => {
    user = users.testUser;
    transaction = publicTransactions;
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

  it("should get user info by username", () => {
    apiMethods.getUserByUsername(user.username);
  });

  it("should post a comment by transaction id", () => {
    const content = "example comment";
    apiMethods.postCommentByTransactionIdAndContent(transaction.testTransactionId, content);
  });

  it("should get all users", () => {
    apiMethods.getAllUsers();
  });
});
