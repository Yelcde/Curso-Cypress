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

    it.only("Deve fazer retrys", () => {
    // Este trecho de código não funciona porque o Cypress avalia as asserções de forma encadeada imediatamente. A asserção `should('not.exist')` verifica se o elemento com o seletor '#novoCampo' não existe no DOM, mas logo em seguida, a asserção `should('exist')` espera que o mesmo elemento exista no DOM. Como o Cypress não espera automaticamente entre essas asserções, o código falha se o elemento '#novoCampo' não aparecer instantaneamente após o clique no botão '#buttonDelay'.
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist').should("exist")
    })
    
})