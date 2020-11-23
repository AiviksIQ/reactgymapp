/// <reference types="cypress" />

describe('Signup', function() {
    it('Access page', function() {
        cy.visit('http://localhost:3000/Signup');
    });

    it('Check social icons with links', function() {
        cy.get('[data-cy=signin-facebook]')
            .click()
        cy.get('[data-cy=signin-google]')
            .click()
        cy.get('[data-cy=signin-linkedin]')
            .click()
    });

    it('Testing signup form', function() {
        cy.get('[data-cy=signin__email]')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
        cy.get('[data-cy=signin__password]')
            .type('Developer123#')
            .should('have.value', 'Developer123#');
        cy.get('[data-cy=signin_button]')
            .click();
        cy.wait(1000);
    });

    it('Testing signin form', function() {
        cy.get('[data-cy=signin__email]')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
        cy.get('[data-cy=signin__password]')
            .type('Developer123#')
            .should('have.value', 'Developer123#');
        cy.get('[data-cy=signin_button]')
            .click();
        cy.wait(1000);

    })

    it('Switching between signup and signin', function() {
        cy.get('[data-cy=hello-friend]')
        cy.get('[data-cy=hello-friend]').siblings('p');
        cy.get('[data-cy=signup_button--change]')
            .click();
        cy.get('[data-cy=right-panel]')
            .should('have.class', 'right-panel-active')
    })

    it('Testing social links', function() {
        cy.get('[data-cy=signup-facebook]').click()
        cy.get('[data-cy=signup-google]').click()
        cy.get('[data-cy=signup-linkedin]').click()
    })

    it('Testing signup form', function() {
        cy.get('[data-cy=name-signup]')
            .type('Aivis')
            .should('have.value', 'Aivis')
        cy.get('[data-cy=email-signup]')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
        cy.get('[data-cy=password-signup]')
            .type('Developer123#')
            .should('have.value', 'Developer123#');
        cy.get('[data-cy=signup_button]')
            .click();
        cy.wait(500);
    })

    it('Switching between signin and signup', function() {
        cy.get('[data-cy=signin_button--change]')
            .click();
        cy.get('[data-cy=right-panel]')
            .should('not.have.class', 'right-panel-active')
        cy.wait(1500);
    })

    it('Switching pages and testing urls', function() {
        cy.get('[data-cy=logo-link]').click()
        cy.url().should('include', '/reactgymapp')
        cy.go('back')
        cy.url().should('include', '/Signup')
        cy.go('forward')
        cy.url().should('include', '/reactgymapp')
        cy.wait(1500);
        cy.reload()

    })
});