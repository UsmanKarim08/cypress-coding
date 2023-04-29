import demo from "../../pageobject/demo.po"
import data from "../../fixtures/userdata.json"

describe('demo suite', () => {
beforeEach(() => {
    
    cy.visit('/')
    cy.on('uncaught:exception',(e,Runnable)=>{
        return false
    })
})
it('should fill upform and submit', () => {
    cy.get(demo.ultimateQaValidation).should('be.visible');
    cy.enterText(Cypress.env('username'),Cypress.env('email'));
    cy.get(demo.currentAdressField()).type(data.currentAddress);
    cy.get(demo.permaAdressField()).type(data.permanent);
    cy.get(demo.submitButton()).click();
    cy.validateText(Cypress.env('username'),Cypress.env('email'),data.currentAddress,data.permanent);
})


})
