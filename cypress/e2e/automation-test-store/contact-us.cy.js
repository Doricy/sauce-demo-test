/// <reference types="cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to submit a succesful via contact us form', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name = "first_name"]').type("joy");
        cy.get('[name = "last_name"]').type("sam");
        cy.get('[type = "submit"]').click();
    
      
    });


    it("Should not be able to submit a succesful submission via conteat us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name = "first_name"]').type("Nana");
        cy.get('[name = "last_name"]').type("sam");
        cy.get('[type = "submit"]').click();
        cy.get('body').contains('Error: all fields are required');

    });

})