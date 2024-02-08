describe('SauceDemo Login Page', () => {
    it('should login with valid credentials',  () => {

      // Visit SauceDemo login page
      cy.visit('https://www.saucedemo.com/'); 

      //gets window document of the page currently active
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
      
  
      //enter valid username and password
      cy.get('[data-test="username"]').type('visual_user');
      cy.get('[data-test="password"]').type('secret_sauce');

      //click the login button
      cy.get('[data-test="login-button"]').click();

      //Assert that the user is redirected to the inventory page after successful login
      cy.url().should('include', '/inventory.html');
      
    }); 


});
  