import example from "../selector/example.selector"

Cypress.Commands.add("goToLogin", () => {
  cy.get(example.btnLinkToLogin).click()
})