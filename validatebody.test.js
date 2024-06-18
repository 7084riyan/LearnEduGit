/// <reference types="cypress" />

describe('validate pokeAPI task 9.3', () => {
    it('validate content', () => {
        var ability = {
            name: 'limber',
            url: 'https://pokeapi.co/api/v2/ability/7/'
        }
        cy.request('GET', ability.url).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(ability.name)
        })
    });
});