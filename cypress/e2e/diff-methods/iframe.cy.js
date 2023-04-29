describe('ifrom suit', () => {
    beforeEach('open browser', () => {
        cy.visit('https://jqueryui.com/checkboxradio/');
    })
    it('should not able to handle ifrom', () => {
        
        cy.get('#radio-1').check();
    })
    it('should be able to handle iframe', () => {
        cy.get("iframe[class='demo-frame']").then(($ifram) => {
            let x = $ifram.contents().find('label[for="radio-1"]')
            cy.wrap(x).click()

        })
 
        cy.contains("Download").click()
    })
 


})