/// <reference types="cypress" />

describe('working with inputs', () => {
    before('Visit the website', () => {
      cy.visit('http://zero.webappsecurity.com/login.html');
      cy.url().should('include', 'login.html');
    });
    it('should fill username and password', () => {
      cy.login('username', 'password')
      cy.get('.btn').click()
    });
    it('should search for a word', () => {
        cy.get('input[type="text"]').type('Online{enter}')
        cy.wait(2000);
    });
    it('should assert result', () => {
        cy.get('h2').contains('Search Results:')
    });
});

