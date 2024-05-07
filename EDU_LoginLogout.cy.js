/// <reference types="cypress" />

describe('Login and Logout Automation', () => {
    before('Me-Load data fixture', function () {
      cy.fixture('ZeroAppData').then((ZeroAppData) => {
        this.ZeroAppData = ZeroAppData;
      });
    });
  
    it('Visits the login page and logs in', function () {
      cy.visit('http://zero.webappsecurity.com/login.html');
      cy.get('#user_login').type(this.ZeroAppData.username);
      cy.get('#user_password').type(this.ZeroAppData.password);
      cy.get('.btn').click();
    });
  
    it('Performs logout', function () {
      cy.get(':nth-child(3) > .dropdown-toggle > .caret').click()
      cy.wait(2000)
      cy.get('#logout_link').click()
      cy.get('#signin_button').should('contain', 'Signin');//assert user is already logout
    });
  });

