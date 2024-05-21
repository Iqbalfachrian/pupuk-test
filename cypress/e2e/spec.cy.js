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
    cy.get('#loginusername').type('testuser'); // Ganti dengan username yang valid
    cy.get('#loginpassword').type('testpassword'); // Ganti dengan password yang valid
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    // Add to Cart
    cy.get('.hrefch').first().click(); // Klik produk pertama
    cy.get('.btn-success').click(); // Klik tombol "Add to cart"
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });

    // Verify Item in Cart
    cy.get('#cartur').click();
    cy.get('tbody > tr').should('have.length.at.least', 1); // Pastikan ada minimal 1 produk di cart
  });
});
