/**
 * Abstract BasePage class that all Page Objects should extend.
 * Enforces a structure where every page must define:
 * 1. A URL constructor (optional)
 * 2. A mechanism to wait for the page to be fully loaded.
 */
export class BasePage {
    constructor(url = '') {
        this.url = url;
    }

    /**
     * Visits the page URL and waits for load.
     */
    visit() {
        if (!this.url) {
            throw new Error('URL not defined for this page object.');
        }
        cy.visit(this.url);
        this.waitForLoad();
    }

    /**
     * ABSTRACT: Must be implemented by the subclass.
     * Define distinct criteria that confirm this page is ready for interaction.
     * Example: cy.get('#main-content').should('be.visible');
     */
    waitForLoad() {
        throw new Error('waitForLoad() must be implemented by subclass');
    }

    /**
     * Helper to get element by data-testid
     * @param {string} testId 
     * @returns {Cypress.Chainable}
     */
    getByTestId(testId) {
        return cy.get(`[data-testid="${testId}"]`);
    }
}
