import questaoPraticaSelectors from "../selector/questaoPratica.selector"
import questoesSelector from '../selector/questoes.selector'

Cypress.Commands.add("preencherTodosOsCampos", (dadosQuestao, numeroEntradaSaida) => {
  if(dadosQuestao.titulo) cy.get(questaoPraticaSelectors.inputTitulo).clear().type(dadosQuestao.titulo)
  if(dadosQuestao.enunciado) cy.get(questaoPraticaSelectors.inputEnunciado).type(dadosQuestao.enunciado)
  if(dadosQuestao.dificuldade) cy.get(questaoPraticaSelectors.selectDificuldade).select(dadosQuestao.dificuldade, {force: true})
  
  for (let i = 0; i < numeroEntradaSaida; i += 1) {
    if(dadosQuestao[`entrada-${i}`]) cy.get(questaoPraticaSelectors.inputEntrada.replace("*", i)).type(dadosQuestao[`entrada-${i}`])
    if(dadosQuestao[`saida-${i}`]) cy.get(questaoPraticaSelectors.inputSaida.replace("*", i)).type(dadosQuestao[`saida-${i}`])
    if(dadosQuestao[`explicacaoEntrada-${i}`]) cy.get(questaoPraticaSelectors.inputExplicacaoEntrada.replace("*", i)).type(dadosQuestao[`explicacaoEntrada-${i}`])
    if(dadosQuestao[`explicacaoSaida-${i}`]) cy.get(questaoPraticaSelectors.inputExplicacaoSaida.replace("*", i)).type(dadosQuestao[`explicacaoSaida-${i}`])
  }
})

Cypress.Commands.add("adicionarExemplo", () => {
  cy.get(questaoPraticaSelectors.btnAdicionarExemplo).click()  
})

Cypress.Commands.add("verificarBotaoAdicionarExemplo", () => {
  cy.get(questaoPraticaSelectors.btnAdicionarExemplo).should('be.disabled')
})

Cypress.Commands.add("clicarEmCriarQuestao", () => {
  cy.get(questaoPraticaSelectors.btnCriarQuestao).click()
})

Cypress.Commands.add("validarMsgSucesso", (mensagem) => {
  cy.get(questaoPraticaSelectors.mensagemToast).should("have.text", mensagem)
})

Cypress.Commands.add("validarErro", (seletor, mensagem) => {
  cy.get(seletor).should('have.text', mensagem)
})

Cypress.Commands.add("clicarEmEditarQuestao", () => {
  cy.get(questaoPraticaSelectors.btnEditarQuestao).click()
})

Cypress.Commands.add("voltarParaPagQuestoes", () => {
  cy.get(questaoPraticaSelectors.btnVoltar).click()
})

