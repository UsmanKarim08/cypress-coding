describe('alert suite', () => {
    beforeEach(()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })
    it('should handle simple alert', () => {
        cy.contains('Click for JS Alert').click();
        cy.on('windows:alert', (text) => {
            expect(text).equal('I am a JS Alert')
        })
    })
    it.only('should handle confirm alert', () => {
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () => {

            return true;
        })
    })
})