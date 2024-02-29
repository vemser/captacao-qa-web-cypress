/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('example spec', () => {
    cy.generateLoginData()

    cy.goToLogin()

    cy.fixture("login").then(({ validLogin }) => {
      console.log(validLogin)
    })
  })
})