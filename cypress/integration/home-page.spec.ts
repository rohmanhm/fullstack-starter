describe('Home', () => {
  it('should display home', () => {
    cy.visit('/')

    cy.get('.chakra-button').contains('Toggle Mode')
  })
})
