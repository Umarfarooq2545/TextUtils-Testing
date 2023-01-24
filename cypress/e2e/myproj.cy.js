/// <reference types='../cypress' />

describe('Sign In', () => {

    beforeEach(() => {
       cy.viewport(1280, 786);
       cy.visit('http://localhost:3000/');
    });

    it('Check convertion of Upper Case', () => {
        cy.get("#exampleFormControlTextarea1").type("Umar Farooq");
        cy.get("#convertToUpperCase").click();
        cy.wait(3000);
        
    });

    it('Check convertion of Lower Case', () => {
        cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Lower Case checking");
        cy.contains("Convert to LowerCase").click();
        cy.wait(3000);
    });

    it('Check convertion of clear text', () => {
        cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.contains("Clear Text").click();
        cy.wait(3000);
    });

    it('Check Copy Text', () => {
        cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Copy Text");
        cy.contains("Copy Text").click();
        cy.wait(3000);
    });

    it('Check Remove Extra Spaces', () => {
        cy.get("#exampleFormControlTextarea1").type("Umar Farooq forRemove Xetra Spaces                  Copy Text");
        cy.contains("Remove Extra Spaces").click();
        cy.wait(3000);
    });
    
    it('Check Dark Mode', () => {
        cy.get("#exampleFormControlTextarea1").type("Checking Dark Mode");
        cy.get("#flexSwitchCheckDefault").click();
        cy.wait(3000);
    });


    it('Navigate to About', () => {
        //cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.get("#flexSwitchCheckDefault").click();
        cy.contains("About").click();
        cy.wait(3000);
    });

    it('Navigate to About with option opening', () => {
        //cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.get("#flexSwitchCheckDefault").click();
        cy.contains("About").click();
        cy.get("#headingThree").click();
        cy.wait(3000);
    });


    it('get the global window object', () => {
        
        cy.window().should('have.property', 'top')
        cy.wait(3000);
      });
    
      it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
      })
    
    //   it('cy.title() - get the title', () => {
    //     cy.contains("About").click();
    //     cy.title().should('include', 'About')
    //     cy.get('a')
    //   .contains( "TextUtils by Umar")

    //   })


      it("should preview text when any text is added to Text Box", () => {
        cy.get("#exampleFormControlTextarea1").type("Preview Testing");
        cy.get(".preview")
        .contains("Preview Testing")
        .should('be.visible')
    })

})