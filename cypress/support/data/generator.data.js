import login from "./login"

Cypress.Commands.add("generateLoginData", () => {
  cy.writeFile("cypress/fixtures/login.json", {
    validLogin: {
      ...login
    }
  })
})