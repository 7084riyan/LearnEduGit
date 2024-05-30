describe('Create User', () => {
    it('success create a new user', () => {
        var user =
            {
                "name": "Riyan",
                "job": "TE Engineer"
            }
        cy.request('POST', 'https://reqres.in/api/users', user)
            .then((response) => {
                expect(response.status).equal(201);
                expect(response.body.name).to.equal(user.name);
                expect(response.body.job).to.equal(user.job);
            });
    });
});