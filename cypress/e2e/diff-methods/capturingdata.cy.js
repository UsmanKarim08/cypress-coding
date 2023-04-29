import loginfile from "../../pageobject/orangedemo.po"
describe('capture data suit', () => {
    beforeEach('visit url', ()=> {
        cy.visit('/')
        cy.on('uncaught:exception',(e,Runnable)=>{
            return false
        })
    })
    it('should capture date', () => {
        cy.get(loginfile.usernameInputField()).type(Cypress.env('username1')),
        cy.get(loginfile.pwdInputField()).type(Cypress.env('password'))
        cy.get(loginfile.signInButton()).click(),
        cy.contains('Buzz').click(),
        // cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-post-body-text').then((txt) => {
        //     const x = txt.text()
        //     cy.writeFile('cypress/fixutres/capdata.tx', x)

        // })
        cy.xpath("(//div[@class='orangehrm-buzz-post-body']/p)[3]").then((txt) =>{

             var textvalue = txt.text()

             cy.writeFile('cypress/fixtures/module1/test5.txt', textvalue)
             cy.writeFile('cypress/fixtures/module1/test5.json', { text: textvalue});    

       })

    })
})