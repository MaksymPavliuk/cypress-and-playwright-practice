class ApiMethods {
  signIn(username, password) {
    cy.loginByApi(username, password).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  getBankAccounts(bankAccountId) {
    cy.request("GET", `${Cypress.env("apiUrl")}/bankAccounts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[0]).to.have.property("id", bankAccountId);
    });
    return this;
  }

  deleteBankAccountById(bankAccountId) {
    cy.request("DELETE", `${Cypress.env("apiUrl")}/bankAccounts/${bankAccountId}`).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    return this;
  }

  verifyAccountIsDeletedById(bankAccountId) {
    cy.request("GET", `${Cypress.env("apiUrl")}/bankAccounts`).then((response) => {
      expect(response.status).to.eq(200);

      const bankAccounts = response.body.results;
      const account = bankAccounts.find((acc) => acc.id === bankAccountId);

      expect(account).to.not.be.undefined;
      expect(account).to.have.property("isDeleted", true);
    });
  }

  getUserByUsername(username) {
    cy.request("GET", `${Cypress.env("apiUrl")}/users/profile/${username}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.user).to.not.be.undefined;
    });
  }

  postCommentByTransactionIdAndContent(transactionId, content) {
    cy.request("POST", `${Cypress.env("apiUrl")}/comments/${transactionId}`, {
      content: content,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  getAllUsers() {
    cy.request("GET", `${Cypress.env("apiUrl")}/users`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[0]).to.not.be.undefined;
    });
  }
}

module.exports = ApiMethods;
