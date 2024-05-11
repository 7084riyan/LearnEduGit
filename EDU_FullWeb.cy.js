/// <reference types="cypress" />

describe('Full web QA', () => {
    before(() => {
      cy.visit('https://www.saucedemo.com/');
    });

    before(() => {
      cy.login(); // Custom command for login
    });

    it('adds multiple products to the cart', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.addProductToCart('Sauce Labs Bike Light');
      cy.verifyCartContents(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
    });

    it('completes checkout', () => {
      cy.completeCheckout();
    });

    it('logs out and verifies redirection to login page', () => {
      cy.logout();
    });

    it('Negative login', () => {
      cy.NegativeLogin();
    });
});

