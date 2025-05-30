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

    it("Its...", () => {
        // const obj = {nome: "User", idade: 20}
        // cy.wrap(obj).should('have.property', 'nome', 'User')
        // cy.wrap(obj).its('nome').should('be.equal', 'User')

        // const obj = {nome: "User", idade: 20, endereco: {rua: 'Rua 1'}}
        // cy.wrap(obj).its('endereco').its('rua').should('contains', 'R')

        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.title().its('length').should('be.equal', 20)
    })

    it.only("Invoke", () => {
        const getValue = () => 1;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
    })
})