describe('connexion', () => {
    it('connexion ok', () => {
      cy.visit('https://practice.automationtesteracademy.com/')
      cy.get('[data-testid="logo-img-login"]').should("be.visible")
      cy.get('[data-test="username-login"]').type("user")
      .should("have.value", "user")
      cy.get('[data-test="password-login"]').type("azerty23")
      .should("have.value", "azerty23")
      cy.get('[data-testid="remember-me"]').click()
      cy.get('[data-test="submit-login"]').should("have.text", "Se Connecter").click()
        cy.url().should("eq", "https://practice.automationtesteracademy.com/")
        cy.url().should("include", "/practice")
    })

    it('renseigner user', () => {
      cy.visit('https://practice.automationtesteracademy.com/')
      cy.get('[data-test="submit-login"]').should("have.text", "Se Connecter").click()
      cy.get('.error-message').should("have.text", "Veuillez renseigner votre nom d'utilisateur")
    })
  })