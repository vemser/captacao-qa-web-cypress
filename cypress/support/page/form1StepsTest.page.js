import formStep from "../selector/formSteps.selector"
import cadastro from "../data/cadastroCandidatoPasso1"

Cypress.Commands.add("preencherTodosCamposComSucesso", () => {
    cy.get(formStep.campoNome).type(cadastro.nome)
    cy.get(formStep.campoEmail).type(cadastro.email)
    cy.get(formStep.campoRg).type(cadastro.rg)
    cy.get(formStep.campoCpf).type(cadastro.cpf)
    cy.get(formStep.campoTelefone).type(cadastro.telefone)
    cy.get(formStep.campoDataNascimento).type(cadastro.dataNascimento)
    cy.get(formStep.campoCidade).type(cadastro.cidade)

    cy.get(formStep.campoEstado).click()
    cy.get(formStep.opcoesEstado).eq(cadastro.estado).click()

    cy.get(formStep.campoNeurodiversidade).click()
    cy.get(formStep.opcoesNeurdiversidade).eq(cadastro.possuiNeurodiversidade).click()
    
    if (cadastro.possuiNeurodiversidade) {
      cy.get(formStep.campoNeurodivergenciaDescricao).type(cadastro.neurodiversidade)
    }  
})


Cypress.Commands.add("clicarEmProximo", () => {
  cy.get(formStep.btnProximo).click()
})