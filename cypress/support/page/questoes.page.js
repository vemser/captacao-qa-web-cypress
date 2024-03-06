import questoesSelector from "../selector/questoes.selector"

Cypress.Commands.add("navegarParaCriacaoQuestaoPratica", () => {
  cy.get(questoesSelector.btnCriarQuestaoPratica).click()
})

Cypress.Commands.add("filtrarQuestoesPraticas", () => {
  cy.get(questoesSelector.selectTipo).select('Prática', {force: true})
  cy.get(questoesSelector.btnFiltrar).click()
})

Cypress.Commands.add("filtrarQuestaoPorTitulo", (tituloQuestaoCriada) => {
  cy.get(questoesSelector.inputTituloFiltro).type(tituloQuestaoCriada)
  cy.get(questoesSelector.btnFiltrar).click()
})

Cypress.Commands.add("validarRegistroDeQuestao", (tituloQuestaoCriada) => {
  cy.get(questoesSelector.tabelaQuestoes).find('tr').each((linha) => {
    cy.wrap(linha).find('td').eq(1).should('have.text', tituloQuestaoCriada)
  })
})

Cypress.Commands.add("editarRegistro", () => {
  cy.get(questoesSelector.tabelaQuestoes).find('tr').each((linha) => {
    cy.wrap(linha).find('td').first().then(($el) => {
      let idQuestao = $el.text()

      cy.get(questoesSelector.btnEditarQuestao.replace("*", idQuestao)).click()
    })
  })
})

Cypress.Commands.add("deletarRegistro", () => {
  cy.get(questoesSelector.tabelaQuestoes).find('tr').each((linha) => {
    cy.wrap(linha).find('td').first().then(($el) => {
      let idQuestao = $el.text()

      cy.get(questoesSelector.btnDeletarQuestao.replace("*", idQuestao)).click()
      cy.get(questoesSelector.btnConfirmaExclusao).click()
    })
  })
})