/// <reference types="cypress" />

describe('working with fixtures', () => {
    before(() => {
      cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
    });
  
    it('logs in using fixture data', function() {
      cy.fixture('saucedemoData').then((data) => {
        cy.get('#user-name').clear().type(data.username);
        cy.get('#password').clear().type(data.password);
        cy.get('#login-button').click();
      });
    });

    it('adds a product to the cart', () => {
      cy.get('.inventory_item').first().find('.btn_inventory').click();
    });
  
    it('completes checkout', function() {
      cy.fixture('saucedemoData').then((data) => {
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();
        cy.get('#first-name').type(data.checkoutInfo.firstName);
        cy.get('#last-name').type(data.checkoutInfo.lastName);
        cy.get('#postal-code').type(data.checkoutInfo.zipCode);
        cy.get('.cart_button').click();
        cy.get('[data-test="finish"]').click();
        // Verify checkout is complete
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
      });
    });
    it('logs out and verifies redirection to login page', function() {
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
    });
  });