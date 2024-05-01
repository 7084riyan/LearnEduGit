Cypress.Commands.add('login', (email, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear().type('username');
    cy.get('#user_password').clear().type('password');
})

Cypress.Commands.add('paybill', (amount, date, desc) => {
    cy.get('#sp_amount').clear().type(100);
    cy.get('#sp_date').clear().type('2024-03-01{enter}');
    cy.get('#sp_description').click().type('testpaybills');
    cy.get('#pay_saved_payees').click()
})
Cypress.Commands.add('logout',()=> {
    cy.get(':nth-child(3) > .dropdown-toggle > .caret').click()
    cy.get('#logout_link').click()
})
