/// <reference types="cypress" />

describe(' Form 2 Steps', () => {
    beforeEach(() => {
      cy.allure().feature("Segundo formulário de cadastro do candidato")
      cy.allure().severity('Crítico')

      cy.visit("/subscription")
    })

    afterEach(() => {
      cy.screenshot({ capture: 'runner' })
    })
  
    it.only('Test 1 - Validar Preenchimento de campo com sucesso', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
    })
  })