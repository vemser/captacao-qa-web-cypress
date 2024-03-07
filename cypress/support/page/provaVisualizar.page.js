
import prova from "../selector/provaVisualizar.selector"

Cypress.Commands.add("loginProva", () => {
    cy.get(prova.login).type('instrutor.teste');
    cy.get(prova.senha).type('Jvs9^@B809lP');
    cy.botaoLogin();
});

Cypress.Commands.add("botaoLogin", () => { 
    cy.get(prova.botaoLogin).click();

});