/// <reference types="cypress" />

describe('validate full Section pokeAPI', () => {
    it('validate header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });
    it('validate body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('have.property', 'abilities')
    });
    it('validate status', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('eq', 200)
    });
    it('validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/kakuna').as('kakuna')
        cy.get('@kakuna').its('body').should('include', {name: 'kakuna'})
    });
    it('validate negative response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).its('status').should('eq', 404)
    });
});
