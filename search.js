const {
    Given,
    When,
    Then,
    And,
  } = require("@badeball/cypress-cucumber-preprocessor");
  

Given('I am on the Zero Bank homepage', () => {
    cy.visit('http://zero.webappsecurity.com/');
});

When('I enter {string} into the search field', (searchTerm) => {
    cy.get('#searchTerm').type(`${searchTerm}{enter}`);
});

Then('I should see results related to Online Banking', () => {
    cy.get('body').should('contain', 'Online Banking');
});

Then('I should see a message indicating no results found', () => {
    cy.get('body').should('contain', 'No results were found');
});