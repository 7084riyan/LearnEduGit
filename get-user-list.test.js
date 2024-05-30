describe('Get user list',() => {
 it ('verify the list users will displayed', () => {
    cy.request({
        method:'get',
        url:'http://reqres.in/api/users'
    }).as('users')
    cy.get('@users').its('status').should('equal',200)
    });
 });