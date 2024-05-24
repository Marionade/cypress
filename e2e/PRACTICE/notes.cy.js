describe('API notes', () => {
let token = "2133b73008ba441fbd6658d7df71a11f1d88fa1e2cca4874a5d2e0c83523257e"


it.only('API Create User test', () => {
    cy.request({
        url: 'https://practice.expandtesting.com/notes/api/users/login',
        method: 'POST',
        body: {
            "email": "marion@gmail.com",
            "password": "marion24"
         }
    })
    .then(response => {
        expect(response.body).to.have.property('success', true)
        expect(response.body).to.have.property('message', 'Login successful')
        expect(response.body.data).to.have.property('id')
   
   })
})

it('API Create Note', () => {
    cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        body: {
            "title": "voilà",
            "description": "une note",
            "category": "Work"
         }
    })
    .then(response => {
        expect(response.body).to.have.property('status', 200)
        expect(response.body).to.have.property('message', 'Successful Request')
        expect(response.body.data).to.have.property('created_at')
   
   })
})

})