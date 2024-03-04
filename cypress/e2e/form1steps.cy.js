/// <reference types="cypress" />

describe(' Form 1 Steps', () => {
  beforeEach(() => {
    cy.visit("/subscription")
  })

  it('Test 1 - Validar Preenchimento de campo com sucesso', () => {
    cy.preencherTodosCamposComSucesso()
    cy.clicarEmProximo()
  })
})