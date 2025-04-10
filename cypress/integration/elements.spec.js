/// <reference types="cypress"/>

describe("Work with basic elements", () => {
    beforeEach(() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
    })

    it("Text", () => {
        cy.get('body').should("contain", "Cuidado")
        cy.get('span').should("contain", "Cuidado")
        cy.get('.facilAchar').should("have.text", "Cuidado onde clica, muitas armadilhas...")
    })

    it.only("Links", () => {
        cy.get('a').first().click() // Clicks the first <a> element
        cy.get("#resultado").should("have.text", "Voltou!")

        cy.reload()
        cy.get("#resultado").should("not.have.text", "Voltou!")
        cy.contains("Voltar").click()
        cy.get("#resultado").should("have.text", "Voltou!")
    })
})