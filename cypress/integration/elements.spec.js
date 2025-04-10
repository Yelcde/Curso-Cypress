/// <reference types="cypress"/>

describe("Work with basic elements", () => {
    beforeEach(() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.reload()
    })

    it("Text", () => {
        cy.get('body').should("contain", "Cuidado")
        cy.get('span').should("contain", "Cuidado")
        cy.get('.facilAchar').should("have.text", "Cuidado onde clica, muitas armadilhas...")
    })

    it("Links", () => {
        cy.get('a').first().click() // Clicks the first <a> element
        cy.get("#resultado").should("have.text", "Voltou!")

        cy.reload()
        cy.get("#resultado").should("not.have.text", "Voltou!")
        cy.contains("Voltar").click()
        cy.get("#resultado").should("have.text", "Voltou!")
    })

    it("Text fields", () => {
        cy.get('#formNome').type("Johnner")
        cy.get("#formNome").should("have.value", "Johnner")

        cy.get('#elementosForm\\:sugestoes').type("Text Area")
        cy.get('#elementosForm\\:sugestoes').should("have.value", "Text Area")

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type("Cypress Test")

        cy.get('[data-cy=dataSobrenome]').type("Teste12345{Backspace}{Backspace}")
        cy.get('[data-cy=dataSobrenome]').should("have.value", "Teste123")

        cy.get('#elementosForm\\:sugestoes').clear().type("Error{selectall}Acerto", {delay: 100})
        cy.get('#elementosForm\\:sugestoes').should("have.value", "Acerto")
    })

    it("Radio buttons", () => {
        cy.get('#formSexoFem').click().should("be.checked")
        cy.get('#formSexoMasc').should("not.be.checked")

        cy.get("[name = 'formSexo']").should("have.length", 2) 
    })

    it.only("Checkbox", () => {
        cy.get('[name = "formComidaFavorita"]').click({multiple: true})
    })

    it.only("Combo", () => {
        cy.get('[data-test=dataEscolaridade]').select("2o grau completo").should("have.value", "2graucomp")
    })
})