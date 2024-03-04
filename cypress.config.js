const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    viewportWidth: 1680,
    viewportHeight: 1050,
    baseUrl: "http://vemser-dbc.dbccompany.com.br:39000/vemser/captacao-front",
  },
});
