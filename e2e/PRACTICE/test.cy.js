describe('API notes', () => {
    let token = '';
  
    // Avant chaque test, connecter et obtenir le jeton
    before(() => {
      cy.request({
        url: 'https://practice.expandtesting.com/notes/api/users/login',
        method: 'POST',
        body: {
          "email": "marion@gmail.com",
          "password": "marion24"
        }
      }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body).to.have.property('message', 'Login successful')
        token = response.body.data.token
      })
    });
  
    it('API Create Note', () => {
      cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        headers: {
            'x-auth-token': token
        },
        body: {
          "title": "voilà",
          "description": "une note",
          "category": "Work"
        }
      }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body.data).to.have.property('created_at')
      });
    });
  
    it('API Create Note with Missing Fields', () => {
      cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          // oubli du "title" 
          "description": "une note",
          "category": "Work"
        },
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message');
      });
    });
  
    it('API Create Note with Invalid Token', () => {
      cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        headers: {
          Authorization: `Bearer invalidtoken123`
        },
        body: {
          "title": "voilà",
          "description": "une note",
          "category": "Work"
        },
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'No authentication token specified in x-auth-token header');
      });
    });
  });
  