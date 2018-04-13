describe('React Swapi', () => {
  it('Check Web App Title', () => {
    cy.visit('/');
    cy.title().should('include', '🛰 React SWAPI');
  });

  context('Enter User Name And Password', () => {
    it('Should Enter User Name and Password', () => {
      cy.get('#username').should('have.attr', 'placeholder', 'Enter Name');
      cy.get('#password').should('have.attr', 'placeholder', 'Enter DOB');

      cy
        .get('#username')
        .type('Luke Skywalker')
        .should('have', 'Luke Skywalker');
      cy
        .get('#password')
        .type('19BBY')
        .should('have', '19BBY');
    });
  });

  context('Login', () => {
    it('Should Submit Value', () => {
      cy.get('.sw-login').submit();
    });

    it('should Route to Home Page', () => {
      cy.wait(1000);
      cy.location('pathname').should('include', 'home');
      cy.reload();
      cy.location('pathname').should('include', 'home');
    });
  });
});
