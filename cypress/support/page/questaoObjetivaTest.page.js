import selectors from '../selector/questaoObjetiva.selector.js'

Cypress.Commands.add("criarQuestaoObjetivaComSucesso", () => {
    cy.get(selectors.areaDeProvas).click()
    cy.get(selectors.questao).click()
    cy.get(selectors.questaoObjetiva).click()
    cy.get(selectors.titulo).type('Questão Pyhton')
    cy.get(selectors.enunciado).type('Como criar um função em Python?')
    cy.get(selectors.dificuldade).click()
    cy.get(selectors.selecionarDificuldade).select("Médio", { force: true })
    cy.get(selectors.campoAlternativa1).type('Use a palavra-chave def , seguida pelo nome da função e parênteses. Por exemplo: def saudacao(): print("Olá, mundo!")')
    cy.get(selectors.campoAlternativa2).type('Use a palavra-chave func , seguida pelo nome da função e parênteses. Por exemplo: func saudacao(): print("Olá, mundo!")')
    cy.get(selectors.selecionarAlternativaCorreta).click()
    cy.get(selectors.btnCriarQuestao).click()
    cy.get(selectors.msgCriacaoSucesso).should('contain', 'Questão objetiva cadastrada com sucesso')
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
    cy.get(selectors.selectTipoQuestao).click()
    cy.get(selectors.selectTipoQuestao).should('be.visible')
    cy.get(selectors.tipoQuestaoObjetiva).click()
    cy.wait(4000)
    cy.get(selectors.btnFiltrar).click({ force: true })
    cy.get(selectors.deleteQuestao).click({ force: true })
    cy.get(selectors.confirmarExclusao).click({ force: true })
    cy.get(selectors.msgExclusaoSucesso).should('contain', 'Questão deletada com sucesso')
})

Cypress.Commands.add("editarQuestãoComSucesso", () => {
    cy.get(selectors.areaDeProvas).click()
    cy.get(selectors.questao).click()
    cy.get(selectors.selectTipoQuestao).click()
    cy.get(selectors.selectTipoQuestao).should('be.visible')
    cy.get(selectors.tipoQuestaoObjetiva).click()
    cy.wait(4000)
    cy.get(selectors.btnFiltrar).click({ force: true })
    cy.get(selectors.editarQuestao).click()
    cy.get(selectors.titulo).click()
    cy.get(selectors.titulo).type('Questão Pyhton Editada')
    cy.get(selectors.enunciado).clear()
    cy.get(selectors.enunciado).type('Como criar um função em Python? Editada')
    cy.get(selectors.dificuldade).click()
    cy.get(selectors.selecionarDificuldade).select("Fácil", { force: true })
    cy.get(selectors.campoAlternativa1).clear()
    cy.get(selectors.campoAlternativa1).type('Use a palavra-chave def , seguida pelo nome da função e parênteses. Por exemplo: def saudacao(): print("Olá, mundo!") Editada')
    cy.get(selectors.campoAlternativa2).clear()
    cy.get(selectors.campoAlternativa2).type('Use a palavra-chave func , seguida pelo nome da função e parênteses. Por exemplo: func saudacao(): print("Olá, mundo!") Editada')
    cy.get(selectors.selecionarAlternativaCorreta).click()
    cy.get(selectors.btnEdicaoSucesso).click()
    cy.get(selectors.msgEdicaoSucesso).should('contain', 'Questão objetiva editada com sucesso')
})

Cypress.Commands.add("listarQuestoesObjetivasComSucesso", () => {
    cy.get(selectors.areaDeProvas).click()
    cy.get(selectors.questao).click()
    cy.get(selectors.selectTipoQuestao).click()
    cy.get(selectors.selectTipoQuestao).should('be.visible')
    cy.get(selectors.tipoQuestaoObjetiva).click()
    cy.wait(4000)
    cy.get(selectors.btnFiltrar).click({ force: true })
})