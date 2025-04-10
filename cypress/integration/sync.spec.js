/// <reference types="cypress"/>

describe("Sync tests", () => {
    beforeEach(() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.reload()
    })

    it("Deve aguardar elemento estar disponível", () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    
})