Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Giovanna')
    cy.get('#lastName').type('Magnoli')
    cy.get('#email').type('gigi@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button[type="submit"]').click()
})