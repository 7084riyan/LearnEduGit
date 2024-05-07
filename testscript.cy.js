describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');
        cy.pause();
        cy.contains('type').click();
        // Harus di URL baru yang mencakup "/commands/actions"
        cy.url().should('include', '/commands/actions');
        // Dapatkan input, ketikkan, dan verifikasi bahwa nilai telah diperbarui
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    });
});
