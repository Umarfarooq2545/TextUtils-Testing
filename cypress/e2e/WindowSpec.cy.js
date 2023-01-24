/// <reference types='../cypress' />

describe('Window', () => {

    beforeEach(() => {
       cy.viewport(1280, 786);
       cy.visit('http://localhost:3000/');
    });

    it('get the global window object', () => {
        
        cy.window().should('have.property', 'top');
        cy.wait(3000);
      });
    
      it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.wait(4000);
      });
      
      it('cy.document() - get the document object', () => {
        cy.fixture('example').as('exam');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.wait(4000);
      });
  
    });
