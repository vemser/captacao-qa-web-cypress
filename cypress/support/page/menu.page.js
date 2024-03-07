import menuSelector from "../selector/menu.selector"

Cypress.Commands.add("navegarParaQuestoes", () => {
  cy.get(menuSelector.dropdownProvas).click()
  cy.get(menuSelector.btnQuestoes).click()
})

Cypress.Commands.add("navegarParaProvas", () => {
  cy.get(menuSelector.dropdownProvas).click()
  cy.get(menuSelector.btnProvas).click()
})