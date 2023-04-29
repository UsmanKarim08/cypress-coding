const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      "username": "Osman Karim",
      'email': 'some@gmail.com'
    },
    //specPattern: "**/*.feature",
    
    "baseUrl" : 'https://demoqa.com/text-box',
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config)
      // implement node event listeners here
    },
    
  },
});
