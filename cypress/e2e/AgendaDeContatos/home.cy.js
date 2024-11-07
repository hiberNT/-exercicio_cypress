/// <reference types="cypress" />

describe('Teste para a página de contatos', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it('Testar preechimento dos campos', () => {
        cy.get('input[type="text"]').type("Joao Segundo")
        cy.get('input[type="email"]').type("Joao2@gmail.com")
        cy.get('input[type="tel"]').type("98989898")
        cy.contains("Adicionar").click();
        cy.screenshot('tela-campo')
    })

    it('Testar remoção de um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.screenshot('Remoção')
    })

    it('Testar ediçao de contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear().type('Fernano Souza')
        cy.get('[type="email"]').clear().type('Fernado@4545gmail.com')
        cy.get('[type="tel"]').clear().type('78787878')
        cy.get('.alterar').click()
        cy.screenshot('Edição')
    })
}) 