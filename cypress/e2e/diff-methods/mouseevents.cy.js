describe('mouse event suite', () => {
    it('should perform mouse events', () => {
        cy.visit('https://www.programsbuzz.com/')
        cy.contains('Start Learning').rightclick();
       cy.wait(2000)
        cy.log('Check the context menu')
        cy.contains('Tutorials').trigger('mouseover');
        cy.wait(2000)
        cy.contains('Contact').dblclick()
    })
})