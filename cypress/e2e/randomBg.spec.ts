describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('finds the content "type"', () => {
    cy.visit('http://localhost:1213/')

    cy.get('#superellipse')
      .click()
  })
})
