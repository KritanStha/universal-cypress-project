/// <reference types="cypress" />

/**
 * Custom Query Commands
 */

Cypress.Commands.add('getByLabel', (labelText) => {
    return cy.contains('label', labelText).then(($label) => {
        const forId = $label.attr('for');
        if (forId) {
            return cy.get(`#${forId}`);
        } else {
            return cy.wrap($label).find('input, select, textarea').first();
        }
    });
});
