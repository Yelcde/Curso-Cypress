/// <reference types="cypress"/>

describe('Helpers...', () => {
    beforeEach(() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.reload()
    })
    
    it("Wrap", () => {
        const obj = {nome: "User", idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.get('#formNome').then($el => {
            // $el.val('funciona com JQuery')
            cy.wrap($el).type('funciona com Cypress')
        })
    })
})