/// <reference types="cypress" />

describe('working with inputs', () => {
    it('Visit the website', () => {
      cy.visit('http://zero.webappsecurity.com/login.html');
      cy.url().should('include', 'login.html');
    });
    it('should fill username and password', () => {
      cy.login('username', 'password')
      cy.get('.btn').click()
    });
    it('should be paybills', () => {
      cy.get('#pay_bills_tab > a').click()
      cy.paybill('100', '2024-03-01', 'testpaybills')
      cy.get('#alert_container').should('contain','The payment was successfully submitted.')
    })
    it('should be log out', () => {
      cy.logout()
    })
  });
  