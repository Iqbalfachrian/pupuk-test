describe('DemoBlaze Shopping Flow', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should allow user to sign up, log in, and add item to cart', () => {
    
    cy.get('#signin2').click();
    cy.get('#sign-username').type('testuser');
    cy.get('#sign-password').type('testpassword'); 
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.');
    });

    // Login
    cy.get('#login2').click();
    cy.get('#loginusername').type('testuser');
    cy.get('#loginpassword').type('testpassword');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    // Add to Cart
    cy.get('.hrefch').first().click(); 
    cy.get('.btn-success').click(); 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });

    // Verify Item in Cart
    cy.get('#cartur').click();
    cy.get('tbody > tr').should('have.length.at.least', 1); 
  });
});
