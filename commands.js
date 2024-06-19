// Custom commands in `commands.js`
Cypress.Commands.add("login", () => {
  cy.fixture("saucedemoData").then((data) => {
    cy.get("#user-name").clear().type(data.username);
    cy.get("#password").clear().type(data.password);
    cy.get("#login-button").click();
  });
});

Cypress.Commands.add("addProductToCart", (productName) => {
  cy.contains(".inventory_item_name", productName)
    .parents(".inventory_item")
    .find(".btn_inventory")
    .click();
});

Cypress.Commands.add("verifyCartContents", (products) => {
  cy.get(".shopping_cart_link").click();
  products.forEach((product) => {
    cy.get(".cart_item").contains(product);
  });
});

Cypress.Commands.add("completeCheckout", () => {
  cy.fixture("saucedemoData").then((data) => {
    cy.get(".shopping_cart_link").click();
    cy.get(".checkout_button").click();
    cy.get("#first-name").type(data.checkoutInfo.firstName);
    cy.get("#last-name").type(data.checkoutInfo.lastName);
    cy.get("#postal-code").type(data.checkoutInfo.zipCode);
    cy.get(".cart_button").click();
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");
  });
});

Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
  cy.get('[data-test="login-button"]').contains("Login");
});

Cypress.Commands.add("NegativeLogin", () => {
  cy.get("#user-name").clear().type("locked_out_user");
  cy.get("#password").clear().type("secret_sauce");
  cy.get("#login-button").click();
  cy.get('[data-test="error"]').contains(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

Cypress.Commands.add('loginViaAPI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')
) => {
  cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
    username: email,
    password,
  }).then((response) => {
    cy.setCookie('sessionId', response.body.sessionId)
    cy.setCookie('userId', response.body.userId)
    cy.setCookie('userName', response.body.userName)
    cy.visit('/#!/main')
  })
})

Cypress.Commands.add('loginViaGUI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')
) => {
  cy.visit('/')
  cy.get('#userEmail').type(email)
  cy.get('#userPassword').type(password, { log: false })
  cy.contains('button', 'Login').click()
})