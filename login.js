const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I open login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
});

When("I submit login", (username, password) => {
  cy.get("#user_login").clear().type('username');
  cy.get("#user_password").clear().type('password');
  cy.contains("Sign in").click();
});

Then("I should see homepage", () => {
  cy.url().should("include", "https://zero.webappsecurity.com/index.html");
});
