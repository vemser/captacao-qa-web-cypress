/// <reference types="cypress" />

describe(' Form 2 Steps', () => {
    beforeEach(() => {
      cy.visit("/subscription")
    })
  
    it.only('Test 1 - Validar Preenchimento de campo com sucesso', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
    })
  })