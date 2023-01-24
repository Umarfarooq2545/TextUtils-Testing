/// <reference types='../cypress' />

describe('Functionality Testing', () => {

    beforeEach(() => {
       cy.viewport(1280, 786);
       cy.visit('http://localhost:3000/');
    });

    it('Check convertion of Upper Case', () => {
        cy.get("#exampleFormControlTextarea1").type("Conversion of text into upper case testing {enter} 2nd Line ");
        cy.wait(4000);
        cy.get("#convertToUpperCase").click();
        cy.wait(3000);
        
    });

    it('Check Remove Extra Spaces', () => {
        //getting element by using find
        cy.get("#mainArea").find("#exampleFormControlTextarea1").type("attempting for Remove Extra Spaces {enter}                 in text functionality");
        cy.wait(4000);
        cy.get("#mainArea").find("#handleExtraSpaces").click();
        cy.wait(3000);
    });


    it('Check convertion of Lower Case', () => {
        cy.get("textarea.form-control").type("Conversion of TEXT into LOWER CASE testing{backspace}{enter} props are working");
        cy.wait(4000);
        cy.contains("Convert to LowerCase").click();
        cy.wait(3000);
    });

    it('Check convertion of clear text', () => {
        cy.fixture('example').as('exam');
        cy.get(".form-control").type("Checking that Clear text is working FIne ");
        cy.wait(4000)
        cy.contains("Clear Text").click();
        cy.wait(3000);
    });

    it('Check Copy Text', () => {
        //getting elements by using tag, class and id
        cy.get("textarea.form-control#exampleFormControlTextarea1").type("Testing that text is copying propperly");
        cy.wait(4000);
        cy.contains("Copy Text").click();
        cy.wait(3000);
    });

    it('Check Dark Mode', () => {
        cy.get("#exampleFormControlTextarea1").type("Checking Dark Mode");
        cy.get("#flexSwitchCheckDefault").click();
        cy.wait(6000);
    });

    
});