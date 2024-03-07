import formStep from "../selector/formSteps.selector"
import cadastro from "../data/cadastroCandidatoPasso1"

Cypress.Commands.add("preencherTodosCamposComSucesso", () => {
    const dados = cadastro()

    cy.get(formStep.campoNome).type(dados.nome)
    cy.get(formStep.campoEmail).type(dados.email)
    cy.get(formStep.campoRg).type(dados.rg)
    cy.get(formStep.campoCpf).type(dados.cpf)
    cy.get(formStep.campoTelefone).type(dados.telefone)
    cy.get(formStep.campoDataNascimento).type(dados.dataNascimento)
    cy.get(formStep.campoCidade).type(dados.cidade)

    cy.get(formStep.campoEstado).click()
    cy.get(formStep.opcoesEstado).eq(dados.estado).click()

    cy.get(formStep.campoNeurodiversidade).click()
    cy.get(formStep.opcoesNeurdiversidade).eq(dados.possuiNeurodiversidade).click()
    
    if (dados.possuiNeurodiversidade) {
      cy.get(formStep.campoNeurodivergenciaDescricao).type(dados.neurodiversidade)
    }  
})


Cypress.Commands.add("preencherTodosOsCamposInscricao", (dados) => {
  if (dados.nome) cy.get(formStep.campoNome).type(dados.nome)
  if (dados.email) cy.get(formStep.campoEmail).type(dados.email)
  if (dados.rg) cy.get(formStep.campoRg).type(dados.rg)
  if (dados.cpf) cy.get(formStep.campoCpf).type(dados.cpf)
  if (dados.telefone) cy.get(formStep.campoTelefone).type(dados.telefone)
  if (dados.dataNascimento) cy.get(formStep.campoDataNascimento).type(dados.dataNascimento)
  if (dados.cidade) cy.get(formStep.campoCidade).type(dados.cidade)

  cy.get(formStep.campoEstado).click()
  cy.get(formStep.opcoesEstado).eq(dados.estado).click()

  cy.get(formStep.campoNeurodiversidade).click()
  cy.get(formStep.opcoesNeurdiversidade).eq(dados.possuiNeurodiversidade).click()
  
  if (dados.possuiNeurodiversidade) {
    cy.get(formStep.campoNeurodivergenciaDescricao).type(dados.neurodiversidade)
  }
})

Cypress.Commands.add("clicarEmProximo", () => {
  cy.get(formStep.btnProximo).click()
})

Cypress.Commands.add("validarSeEstaNaSegundaEtapa", () => {
  cy.get(formStep.btnVoltar).should('have.text', 'Voltar')
})

Cypress.Commands.add("validarMensagemDeErro", (mensagem, seletor) => {
  cy.get(seletor).should('have.text', mensagem)
})