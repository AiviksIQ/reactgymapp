/// <reference types="cypress" />

describe('Footer', function() {
    it('Access page', function() {
        cy.visit('http://localhost:3000/reactgymapp');
    })

    it('Testing footer nav links', function() {
        cy.get('[data-cy=footer__link]')
            .contains('Home')
            .click()
        cy.get('[data-cy=footer__link]')
            .contains('Carrers')
            .click()
        cy.get('[data-cy=footer__link]')
            .contains('Privacy policy')
            .click
    });

    it('Testing footer react and developer links', function() {
        cy.get('[data-cy=footer__react-link]')
            .should('contain', 'React.js');
        cy.get('[data-cy=footer__developer-link]')
            .should('contain', 'Aivis Palacis');
    });

    it('Testing footer logo with a link and nav transition', function() {
        cy.get('[data-cy=footer-logo]')
            .click()
        cy.get('.navigation')
            .should('not.have.class', 'active-black')
    })
});