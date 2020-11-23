/// <reference types="cypress" />

describe('Testing main contenten page', function() {
    it('Access page', function() {
        cy.visit('http://localhost:3000/reactgymapp');
    })

    it('Testing hero section', function() {
        cy.get('.section-features').should('have.css', 'background-image')
        cy.get('[data-cy=heading-main]')
            .should('contain', 'React Gym')
        cy.get('[data-cy=heading-main]')
            .siblings('span')
            .should('contain', 'Become the best versions of yourself');
        cy.get('[data-cy=arrow]')
            .click()
        cy.get('.navigation')
            .should('have.class', 'active-black')
        cy.get('[data-cy=about__header]')
            .should('be.visible')
            .should('contain', 'About React Gym')
    });

    it('Testing about section', function() {
        cy.get('[data-cy=heading-ter]')
            .should('be.visible')
        cy.get('[data-cy=heading-ter]')
            .siblings('p')
            .should('be.visible')
        cy.get('[data-cy=slider]')
        cy.get('[data-cy=slider-image]').eq(1)
            .should('be.visible')
        cy.get('[data-type=next]').click()
        cy.get('[data-cy=slider-image]').eq(1)
            .should('not.be.visible')
        cy.get('[data-cy=slider-image]').eq(2)
            .should('be.visible')
        cy.get('[data-type=prev]').click()
        cy.get('[data-cy=slider-image]').eq(2)
            .should('be.visible')
        cy.get('[data-type=prev]').click()
        cy.get('[data-cy=slider-image]').eq(1)
            .should('be.visible')
    });

    it('Testing memberships section', function() {
        cy.get('[data-cy=heading-member]')
            .should('contain', 'Memberships')
        cy.get('[data-cy=feature-box]')
        cy.get('[data-cy=heading-member--sub]')
        cy.get('[data-cy=feature-text]')
        cy.get('[data-cy=features-list]').children('li')
        cy.get('.member__cover').should('have.css', 'background-image')
    });

    it('Testing programs section', function() {
        cy.get('[data-cy=card-button]').eq(1).click({ force: true })
        cy.get('[data-cy=video]').should('be.visible');
        cy.get('.popup__close').click()
        cy.get('[data-cy=video]').should('not.be.visible');
        cy.get('[data-cy=card-button]').eq(0).click({ force: true })
        cy.get('[data-cy=video]').should('be.visible');
        cy.get('.modal__button--center').click()
        cy.get('.popup__close').click()
        cy.get('[data-cy=card-button]').eq(2).click({ force: true })
        cy.get('[data-cy=video]').should('be.visible');
        cy.get('.popup__close').click()
    });

    it('Testing memberships section', function() {
        cy.get('[data-cy=heading-member]')
            .should('contain', 'Memberships')
        cy.get('[data-cy=feature-box]')
        cy.get('[data-cy=heading-member--sub]')
        cy.get('[data-cy=feature-text]')
        cy.get('[data-cy=features-list]').children('li')
        cy.get('.member__cover').should('have.css', 'background-image')
    });

    it('Testing contacts section', function() {
        cy.get('.contacts__heading').should('contain', 'Contacts')
        cy.get('#name').type('Aivis Palacis')
        cy.get('#email').type('aivis.palacis@gmail.com')
        cy.get('#message').type('What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has')
        cy.get('[data-cy=form-submit]').click()
        cy.get('.dismissButton').click()
        cy.get('.gm-control-active.gm-fullscreen-control').click()
    });
});