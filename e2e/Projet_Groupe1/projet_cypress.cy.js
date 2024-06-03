describe('Projet magento', () => {
    const firstName = 'tatan';
    const lastName = 'cha';
    const email = 'tatan18@gmail.com';
    it('Scenario 1', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type(firstName)
      cy.get('#lastname').type(lastName)
      cy.get('#email_address').type(email)
      cy.get('#password').type('azerty974*')
      cy.get('#password-confirmation').type('azerty974*')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success').should("be.visible").and("contain.text", "Thank you for registering with Main Website Store.")
      cy.url().should('include', '/customer/account/')
      cy.get('.base').should("have.text", "My Account")
      cy.get('.box-content > p').should("contain.text", firstName, lastName, email)
    })

    it('Scenario 2', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.timeout(7000)
        cy.contains(' Sign In ').click()
        cy.get('#email').type(email)
        cy.get('#pass').type('azerty974*')
        cy.get('#send2').click()
        // cy.get('#ui-id-8').click()
        // cy.get('#ui-id-6').trigger('mouseover')
        cy.wait(2000);
        cy.contains('Sale').click()
        cy.contains('Bags').click({force: true});
        cy.get('.product-image-photo').eq(2).click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should("contain.text", "You added Driven Backpack to your shopping cart.")
        cy.get('.showcart').click()
        cy.wait(3000)
        cy.get('#top-cart-btn-checkout').click()
        cy.get('[name="street[0]"]').type('10 rue papier', {force: true})
        cy.get('[name="city"]').type('New York', {force: true})
        cy.get('[name="region_id"]').select('Florida', {force: true})
        cy.get('[name="postcode"]').type('00001', {force: true})
        cy.get('[name="telephone"]').type('0692010203', {force: true})
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.contains('Place Order').click()
        cy.get('.base').should("contain.text", "Thank you for your purchase!")
      })
      it('Scenario 3', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.timeout(7000)
        cy.get(':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.wait(2000)
        cy.get('.product-addto-links > .towishlist > span').click({force: true})
        cy.get('.base').should("contain.text", "Customer Login")
       
      
      })
  })