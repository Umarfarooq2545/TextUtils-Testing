describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1')
      .contains( "Kitchen")

    cy.get('.dropdown-toggle').click()
      .get('a').eq(10)
      .click()
  })
})