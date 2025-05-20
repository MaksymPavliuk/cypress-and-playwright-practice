const { test } = require("@playwright/test");
const ApiMethods = require("../pages/apiMethods");
const users = require("../../fixtures/users.json");
const publicTransactions = require("../../fixtures/public-transactions.json");

test.describe("API tests", () => {
  let api;
  const user = users.testUser;
  const transaction = publicTransactions;

  test.beforeEach(async ({ request }) => {
    api = new ApiMethods(request);
    await api.signIn(user.username, user.password);
  });

  test("should get a list of bank accounts", async () => {
    await api.getBankAccounts(user.bankAccountId);
  });

  test("should delete a bank account by id", async () => {
    await api.deleteBankAccountById(user.bankAccountId);
    await api.verifyAccountIsDeletedById(user.bankAccountId);
  });

  test("should get user info by username", async () => {
    await api.getUserByUsername(user.username);
  });

  test("should post a comment by transaction id", async () => {
    await api.postCommentByTransactionIdAndContent(
      transaction.testTransactionId,
      "example comment"
    );
  });

  test("should get all users", async () => {
    await api.getAllUsers();
  });
});
