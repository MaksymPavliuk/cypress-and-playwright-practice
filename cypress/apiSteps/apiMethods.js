class ApiMethods {
  signIn(username, password) {
    cy.loginByApi(username, password).then((response) => {
      expect(response.status).to.eq(200);
    });
    return this;
  }

  getBankAccounts(routingNumber) {
    cy.request("GET", `${Cypress.env("apiUrl")}/bankAccounts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[0]).to.have.property("routingNumber", routingNumber);
    });
    return this;
  }
}

module.exports = ApiMethods;
