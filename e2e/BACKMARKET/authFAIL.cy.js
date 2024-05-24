describe('auth', () => {
  it('visiter site', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
    cy.get("#firstName").type("Marion")
    cy.get("#lastName").type("Pagot")
    cy.get("#signup-email").type("marion.pagot@gmail.com")
    cy.get("#signup-password").type("Cypress24*")
    cy.contains("J’accepte de recevoir les meilleurs plan du web et la newsletter par mail.").click()
    cy.get('[data-qa="signup-submit-button"]').click()
  })
})