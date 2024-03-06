import selectors from '../selector/questaoObjetiva.selector.js'

Cypress.Commands.add("criarQuestaoObjetivaComSucesso", () => { //dando erro 500
    cy.get(selectors.areaDeProvas).click()
    cy.get(selectors.questao).click()
    cy.get(selectors.questaoObjetiva).click()
    cy.get(selectors.titulo).type('Questão Objetiva Teste')
    cy.get(selectors.enunciado).type('Enunciado da questão objetiva teste')
    cy.get(selectors.dificuldade).click()
    cy.get(selectors.selecionarDificuldade).select("Fácil", { force: true })
    cy.get(selectors.campoAlternativa1).type('Alternativa A')
    cy.get(selectors.campoAlternativa2).type('Alternativa B')
    cy.get(selectors.selecionarAlternativaCorreta).click()
    cy.get(selectors.btnCriarQuestao).click()
})

Cypress.Commands.add("criarQuestaoObjetivaSemSucesso", () => { 
    cy.get(selectors.areaDeProvas).click()
    cy.get(selectors.questao).click()
    cy.get(selectors.questaoObjetiva).click()
    cy.get(selectors.btnCriarQuestao).click()
    cy.get(selectors.msgErrorTituloInvalido).should('contain', 'Deve ter no mínimo 5 caracteres')
    cy.get(selectors.msgErrorEnunciadoInvalido).should('contain', 'Deve ter no mínimo 5 caracteres')
    cy.get(selectors.msgErrorDificuldadeInvalida).should('contain', 'Este campo é obrigatório')
    cy.get(selectors.msgErrorAlternativaInvalida).should('contain','Digite uma alternativa válida')
    cy.get(selectors.msgErrorAlternativaInvalida).should('contain','Selecione uma alternativa correta')
    cy.get(selectors.msgErrorAlternativa2Invalida).should('contain','Digite uma alternativa válida')
    cy.get(selectors.msgErrorAlternativa2Invalida).should('contain','Selecione uma alternativa correta')
})

Cypress.Commands.add("removerQuestãoSucesso", () => {
    cy.get(selectors.areaDeProvas).click()
    cy.get(selectors.questao).click()
    cy.get(selectors.tipoQuestao).click()
    cy.get(selectors.selectTipoQuestao).select("Objetiva", { force: true })
})