describe('API notes', () => {
    let token = '';
  
    // Avant chaque test, connecter et obtenir le jeton
    before(() => {
      cy.fixture('practiceData').then((data) => {
        cy.request({
          url: 'https://practice.expandtesting.com/notes/api/users/login',
          method: 'POST',
          body: {
            "email": data.login.email,
            "password": data.login.password
          }
        }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('success', true);
          expect(response.body).to.have.property('message', 'Login successful');
          token = response.body.data.token;
        });
      });
    });
  
    it('API Create Note', () => {
      cy.fixture('practiceData').then((data) => {
        cy.request({
          url: 'https://practice.expandtesting.com/notes/api/notes',
          method: 'POST',
          headers: {
            'x-auth-token': token
          },
          body: data.validNote
        }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Note successfully created');
          expect(response.body.data).to.have.property('created_at');
        });
      });
    });
  
    it('API Create Note with Missing Fields', () => {
      cy.fixture('practiceData').then((data) => {
        cy.request({
          url: 'https://practice.expandtesting.com/notes/api/notes',
          method: 'POST',
          headers: {
            'x-auth-token': token
          },
          body: data.noteMissingTitle,
          failOnStatusCode: false
        }).then(response => {
          expect(response.status).to.eq(400); 
          expect(response.body).to.have.property('success', false);
          expect(response.body).to.have.property('message');
        });
      });
    });
  
    it('API Create Note with Invalid Token', () => {
      cy.fixture('practiceData').then((data) => {
        cy.request({
          url: 'https://practice.expandtesting.com/notes/api/notes',
          method: 'POST',
          headers: {
            'x-auth-token': data.invalidToken
          },
          body: data.validNote,
          failOnStatusCode: false
        }).then(response => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('success', false);
          expect(response.body).to.have.property('message');
        });
      });
    });
  });
  