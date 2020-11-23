/// <reference types="cypress" />

describe('Header', function() {
    it('Access page', function() {
        cy.visit('http://localhost:3000/reactgymapp');
    })

    it('Making variables', function() {
        cy.get('[data-cy=header__logo]').as("headerLogo");
        cy.get('[data-cy=header__about]').as("headerAbout");
        cy.get('[data-cy=header__memberships]').as("headerMemberships");
        cy.get('[data-cy=header__programs]').as("headerPrograms");
        cy.get('[data-cy=header__contacts]').as("headerContacts");
        cy.get('[data-cy=header__cta]').as("headerCta");
    })

    it('Testing nav links', function() {
        cy.get('[data-cy=header__logo]').as("headerLogo");
        cy.get('[data-cy=header__about]').as("headerAbout");
        cy.get('[data-cy=header__memberships]').as("headerMemberships");
        cy.get('[data-cy=header__programs]').as("headerPrograms");
        cy.get('[data-cy=header__contacts]').as("headerContacts");
        cy.get('@headerAbout')
            .click()
        cy.get('@headerMemberships')
            .click()
        cy.get('@headerPrograms')
            .click()
        cy.get('@headerContacts')
            .click()
        cy.get('@headerLogo')
            .click()
    });

    it('Testing active nav links', function() {
        cy.get('[data-cy=header__logo]').as("headerLogo");
        cy.get('[data-cy=header__about]').as("headerAbout");
        cy.get('[data-cy=header__memberships]').as("headerMemberships");
        cy.get('[data-cy=header__programs]').as("headerPrograms");
        cy.get('[data-cy=header__contacts]').as("headerContacts");
        cy.get('@headerAbout')
            .click()
        cy.wait(1000)
            .get('@headerAbout')
            .should('have.class', 'active')
        cy.get('@headerMemberships')
            .click()
        cy.wait(1000).get('@headerMemberships')
            .should('have.class', 'active')
        cy.get('@headerPrograms')
            .click()
        cy.wait(1000).get('@headerPrograms')
            .should('have.class', 'active')
        cy.get('@headerContacts')
            .click()
        cy.wait(1000).get('@headerContacts')
            .should('have.class', 'active')
    });

    it('Testing header black background transition', function() {
        cy.get('footer')
            .scrollIntoView({ duration: 1000 })
        cy.get('.navigation')
            .should('have.class', 'active-black')
        cy.get('header')
            .scrollIntoView({ duration: 2000 })
        cy.get('.navigation')
            .should('not.have.class', 'active-black')
    });

    it('Clicking on CTA and testing url', function() {
        cy.get('[data-cy=header__cta]').as("headerCta");
        cy.get('@headerCta')
            .click()
        cy.url()
            .should('include', '/Signup')
    });
});