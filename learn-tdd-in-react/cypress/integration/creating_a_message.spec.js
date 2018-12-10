describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test="messageText"]')
      .type('New Message');

    cy.get('[data-test="sendButton"]')
      .click();

    cy.get('[data-test="messageText"]')
      .should('have.value', '')

    cy.contains('New Message')
  })
})
