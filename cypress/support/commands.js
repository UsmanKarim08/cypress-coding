// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const { default: demo } = require("../pageobject/demo.po");

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("enterText", (text1, text) => {
        cy.get('#userName').type(text1);
        cy.get('#userEmail').type(text);
        cy.log("Entered Text value "+ text) 
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('validateText', (value, value1,value2,value3) => {
    cy.get("#name").should('contain', value);
    cy.get("#email").should('contain',value1);
    cy.get(".border > #currentAddress").should('contain', value2);
    cy.get(".border > #permanentAddress").should('contain', value3);
})
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
