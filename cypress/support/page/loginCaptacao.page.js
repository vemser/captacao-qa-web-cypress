import selectors from "../selector/loginCaptacao.selector"

Cypress.Commands.add("preencherCamposDeLogin", (credenciais) => {
  cy.get(selectors.inputUsuario).type(credenciais.usuario)
  cy.get(selectors.inputSenha).type(credenciais.senha)
})

Cypress.Commands.add("clicarEmLogin", () => {
  cy.get(selectors.btnLogin).click()
})

Cypress.Commands.add("validarLogin", (mensagem) => {
    cy.get(selectors.boasVindasUsuario).should('have.text', mensagem)
})

Cypress.Commands.add("validarErro", (mensagem) => {
  cy.get(selectors.erroLogin).should('have.text', mensagem)
})

Cypress.Commands.add("validarPermanenciaEmTelaDeLogin", () => {
  cy.get(selectors.btnLogin).should('have.text', "Login")
})