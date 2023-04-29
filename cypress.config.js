const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      "username": "Osman Karim",
      'email': 'some@gmail.com',
      "username1": "Admin",
      'password': 'admin123'
    },
    //specPattern: "**/*.feature",
    
    // "baseUrl" : 'https://demoqa.com/text-box',
    "baseUrl" : 'https://opensource-demo.orangehrmlive.com/',
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config)
      // implement node event listeners here
    },
    
  },
});
