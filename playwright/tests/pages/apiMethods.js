const { expect } = require("@playwright/test");

class ApiMethods {
  constructor(request) {
    this.request = request;
    this.baseUrl = "http://localhost:3002";
  }

  async signIn(username, password) {
    const res = await this.request.post(`${this.baseUrl}/login`, {
      data: { username, password },
    });
    expect(res.status()).toBe(200);
  }

  async getBankAccounts(bankAccountId) {
    const res = await this.request.get(`${this.baseUrl}/bankAccounts`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.results[0]).toHaveProperty("id", bankAccountId);
  }

  async deleteBankAccountById(bankAccountId) {
    const res = await this.request.delete(`${this.baseUrl}/bankAccounts/${bankAccountId}`);
    expect(res.status()).toBe(200);
  }

  async verifyAccountIsDeletedById(bankAccountId) {
    const res = await this.request.get(`${this.baseUrl}/bankAccounts`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    const account = body.results.find((acc) => acc.id === bankAccountId);
    expect(account).not.toBeUndefined();
    expect(account).toHaveProperty("isDeleted", true);
  }

  async getUserByUsername(username) {
    const res = await this.request.get(`${this.baseUrl}/users/profile/${username}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.user).toBeDefined();
  }

  async postCommentByTransactionIdAndContent(transactionId, content) {
    const res = await this.request.post(`${this.baseUrl}/comments/${transactionId}`, {
      data: { content },
    });
    expect(res.status()).toBe(200);
  }

  async getAllUsers() {
    const res = await this.request.get(`${this.baseUrl}/users`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.results[0]).toBeDefined();
  }
}

module.exports = ApiMethods;
