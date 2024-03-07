/// <reference types="cypress" />

describe('prova visualizar', () => {
    beforeEach(() => {
      cy.visit("/login");
      Cypress.on("uncaught:exception", (_err, _runnable) => { return false });
    });
  
    it.only('Test 1 - Validar visualizar prova com sucesso', () => {
      cy.loginProva();
      cy.botaoLogin();
      cy.get('.css-1gbobl8 > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .css-14t7rk7 > .MuiBox-root > .MuiList-root > :nth-child(6) > .border-b > h3.flex > [data-testid="area-prova"]').click();
      cy.get('[data-testid="provas"]').click().then(() => {
        cy.wait(1000); 
        cy.get(':nth-child(1) > .flex > [data-testid="visualizar-prova"] > a > [data-testid="VisibilityOutlinedIcon"] > path').click({ force: true });
        cy.get(':nth-child(1) > strong').should('contain', 'Versão da prova:')
      });
    });
  });