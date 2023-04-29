describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Osman\n")
     
    })

    it.only('Cypress Test Case - Append Data in end to the file ', function () {
        // This will replace the previously written file text
        //cy.writeFile('cypress/fixtures/module1/test4.txt', 'Osman')
        // This will appent the data
        cy.writeFile('cypress/fixtures/module1/test4.txt', 'Karim', {flag: 'a+'})
     
    })

    it('Cypress Test Case - Create Json file ', function () {
      
        
        cy.writeFile('cypress/fixtures/module2/test6.json', { firstname: 'Osman', lastname: 'Karim'});
     
    })

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {
      cy.readFile('cypress/fixtures/module2/test6.json').should('exist')

         cy.readFile('cypress/fixtures/module2/test6.json').its('firstname').should('eq','Osman')

         cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Osman');

        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Osman\nKarim')       
    })
  })