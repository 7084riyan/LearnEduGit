/// <reference types="cypress" />

describe('Login ', () => {
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
      cy.visit('http://zero.webappsecurity.com/index.html');
    });
    
    it(' Interacts with navbar', function () {
        cy.get('#account_activity_link').click();
        //assert url
        cy.url().should('include', 'account-activity.html');
        // navbar interaction
        cy.get('#account_summary_tab > a').click();
        cy.url().should('include', 'account-summary.html');
        cy.get('#account_activity_tab > a').click();
        cy.url().should('include', 'account-activity.html');
        cy.get('#transfer_funds_tab > a').click();
        cy.url().should('include', 'transfer-funds.html');
        cy.get('#pay_bills_tab > a').click();
        cy.url().should('include', 'pay-bills.html');
        cy.get('#money_map_tab > a').click();
        cy.url().should('include', 'money-map.html');
        cy.get('#online_statements_tab > a').click();
        cy.url().should('include', 'online-statements.html');
      });
      it('clear cache', () => {
        cy.clearCookies();
        cy.clearLocalStorage();
      });
  });