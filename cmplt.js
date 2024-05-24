import cmpltPage from './cmplt.page';
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I open login page', () => {
    cmpltPage.visit1();
});

When('I submit login', () => {
    cmpltPage.login('username', 'password');
});

Then('I should see homepage', () => {
    cy.url().should("include", "account"); 
});

Given('I am on the Zero Bank homepage', () => {
    cmpltPage.visit2(); 
    cy.url().should("include", "index.html"); 
});

When('I enter {string} into the search field', (term) => {
    cmpltPage.search(term);
});

Then('I should see results related to Online Banking', () => {
    
    cy.contains('Online Banking').should('be.visible');
});

Then('I should see a message indicating no results found', () => {
    
    cy.contains('No results').should('be.visible');
});