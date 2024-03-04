/// <reference types="cypress" />

describe(' Form 1 Steps', () => {
  beforeEach(() => {
    cy.visit("http://vemser-dbc.dbccompany.com.br:39000/vemser/captacao-front/subscription")
  })

  it('Test 1 - Validar Preenchimento de campo com sucesso', () => {
    cy.preencherCampoComSucesso();
  })
})