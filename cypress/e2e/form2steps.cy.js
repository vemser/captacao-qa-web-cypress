/// <reference types="cypress" />



describe(' Form 2 Steps', () => {
    beforeEach(() => {
      cy.visit("/subscription")
    })
  
    it('Test 1 - Validar Preenchimento de campo com sucesso', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.botaoEnviar()
    })

    it.only('Test 2 - Validar Preenchimento sem colocar a Instituição', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.get('[id="instituicao-de-ensino-candidato"]').clear()
      cy.botaoEnviar()
      cy.get('#instituicao-de-ensino-candidato-helper-text').should('contain', 'A Instituição de ensino deve ter apenas letras,espaços ou pontuações')
    })
  })