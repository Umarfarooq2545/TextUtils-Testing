/// <reference types='../cypress' />

describe('Unit Testing', () => {

    beforeEach(() => {
       cy.viewport(1280, 786);
       cy.visit('http://localhost:3000/');
    });
    
    
    // it('Check Dark Mode', () => {
    //     cy.get("#exampleFormControlTextarea1").type("Checking Dark Mode");
    //     cy.get("#flexSwitchCheckDefault").click();
    //     cy.wait(3000);
    // });

    // it("should preview text when any text is added to Text Box", () => {
    //     cy.get("#exampleFormControlTextarea1").type("Preview Testing");
    //     cy.get(".preview")
    //     .contains("Preview Testing")
    //     .should('be.visible');
    //     cy.get("#flexSwitchCheckDefault").click();
    //     cy.wait(3000);
    //     });
    
    
    // it("should preview Word count is added to Text Box", () => {
    //     cy.get("#flexSwitchCheckDefault").click();
    //     cy.wait(3000);
    //     cy.get("#exampleFormControlTextarea1").type("Preview Testing");
    //     cy.get("[class='wordCount']")
    //     .contains("2 Words and 15 Characters")
    //     .should('be.visible');
    //     cy.wait(4000);
    //     });

    //     it('locating Lower Case Button', () => {
    //         // Combine get with contains
    //         cy.get("[type='button']").contains("Convert to LowerCase");
    //         cy.wait(3000);
    //     });

    //     it('locating Upper Case Button', () => {
    //         // Combine get with contains
    //         cy.contains("Convert to UpperCase");
    //         cy.wait(3000);
    //     });
        
    //     it('locating Clear Text Button', () => {
    //         // Combine get with contains
    //         cy.contains("button", "Clear Text")
    //         cy.wait(3000);
    //     });
        
    //     it('locating REmove EXtra Space Button', () => {
    //         // Combine get with contains
    //         cy.contains("Remove Extra Spaces");
    //         cy.wait(3000);
    //     });
        
    //     it('locating Copy Text Button', () => {
    //         // Combine get with contains
    //         cy.contains("Copy Text");
    //         cy.wait(3000);
    //     });

    //     it('Locate  Title', () => {
    //         cy.contains("About").click();
    //         cy.get('h1').contains("About Us")
    //         cy.wait(3000)
            
    //     });
        
        
        it('Button is clickable', () => {
            cy.get("#flexSwitchCheckDefault").should("be.visible").click();
            // cy.get('h1').contains("About Us")
            cy.wait(3000)
            
        });


    });

    