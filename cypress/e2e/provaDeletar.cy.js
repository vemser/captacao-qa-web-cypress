/// <reference types="cypress" />



describe(' prova deletar', () => {
    beforeEach(() => {
      cy.visit("/login");
      Cypress.on("uncaught:exception", (_err,_runnable) => {return false})
    });
  
    it.only('Test 1 - Validar deletar prova com sucesso', () => {
      cy.loginProva()
      cy.botaoLogin()
      cy.get('.css-1gbobl8 > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .css-14t7rk7 > .MuiBox-root > .MuiList-root > :nth-child(6) > .border-b > h3.flex > [data-testid="area-prova"]').click()
      cy.get('[data-testid="provas"]').click().then(() => {
        cy.wait(1000); 
        cy.get('[data-testid="pagina-5"]').click()
        cy.wait(1000); 
        cy.get(':nth-child(1) > .flex > [data-testid="deletar-prova"] > [data-testid="DeleteOutlinedIcon"]').click();
        cy.wait(1000); 
        cy.get('div.flex:nth-child(3) > button:nth-child(2)').click();

      });
    });
  });