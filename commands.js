Cypress.Commands.add('loginViaAPI', () => {
  return cy.request({
    method: 'POST',
    url: 'https://kasir-api.belajarqa.com/authentications',
    body: {
      "email": "sanber123@mail.com",
      "password": "sanber123@"
    },
    failOnStatusCode: false
  }).then((response) => {
    // Set cookies
    cy.setCookie('accessToken', response.body.data.accessToken);
    cy.setCookie('userId', response.body.data.user.id);
    cy.setCookie('userName', response.body.data.user.name);

    // Use another then to return the response after setting cookies
    return cy.wrap(response);
  });
});
