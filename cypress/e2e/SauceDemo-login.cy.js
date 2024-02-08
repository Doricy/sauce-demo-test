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

      //test for invalid credentials
    it('should display an error with invalid credentials', () =>{
      //visit the saucedemo login page
      cy.visit('https://www.saucedemo.com/');


      //enter invalid username and password
      cy.get('[data-test="username"]').type('invalid_user');
      cy.get('[data-test="password"]').type('invalid_password');


      cy.get('[data-test="login-button"]').click();
      
      // Assert that an error message is displayed
      cy.get('.error-message-container')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');

     

    
    });
      
    }); 


});
  