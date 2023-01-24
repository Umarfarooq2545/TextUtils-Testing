/// <reference types='../cypress' />

describe('Navigation Testing', () => {

    beforeEach(() => {
       cy.viewport(1280, 786);
       cy.visit('http://localhost:3000/');
    });
    it('Check Dark Mode', () => {
        cy.get("#exampleFormControlTextarea1").type("Checking Dark Mode");
        cy.get("#flexSwitchCheckDefault").click();
        cy.wait(6000);
    });


    it('Navigate to About', () => {
        //cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.get("#flexSwitchCheckDefault").click();
        cy.wait(3000);
        cy.contains("About").click();
        cy.wait(3000);
    });


    it('Navigate to About', () => {
        //cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.contains("About").click();
        cy.wait(3000);
    });

    it('Navigate to About with option opening', () => {
        //cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.wait(3000);
        cy.contains("About").click();
        cy.wait(3000);
        cy.get("#headingThree").click();
        cy.wait(3000);
    });
    
    
    it('Navigate to About with option opening', () => {
        //cy.get("#exampleFormControlTextarea1").type("Umar Farooq for Clear Textbox checking");
        cy.get("#flexSwitchCheckDefault").click();
        cy.wait(3000);
        cy.contains("About").click();
        cy.get("#headingThree").click();
        cy.wait(3000);
    });
});