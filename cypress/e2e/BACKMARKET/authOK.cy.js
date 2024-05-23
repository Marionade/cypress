describe('auth', () => {
  it('visiter site', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
    cy.get("#firstName").type("Pouette")
    cy.get("#lastName").type("Pouette")
    cy.get("#signup-email").type("pouette@gmail.com")
    cy.get("#signup-password").type("Pouette24*")
    cy.contains("J’accepte de recevoir les meilleurs plan du web et la newsletter par mail.").click()
    cy.get('[data-qa="signup-submit-button"]').click()
  })
})