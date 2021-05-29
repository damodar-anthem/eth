/// <reference types="cypress" />

context('Weather2', () => {

    it('service provides weather for Hammond, LA.', () => {
        cy.visit("https://www.weather.gov/");

        cy.get("#inputstring")
            .type("Hammond, LA");
        
        cy.get(".autocomplete-suggestion")
            .first()
            .contains('Hammond, LA, USA')
            .click()
        
        cy.url()
            .should("contain", "https://forecast.weather.gov/MapClick.php")
        
        cy.get("#current-conditions .panel-title")
            .contains("Hammond, Hammond Municipal Airport")
        
    })
})