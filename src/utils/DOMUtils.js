/**
 * DOM Utility functions for common Cypress interactions
 */
export class DOMUtils {
    /**
     * Scroll to element and click (useful for sticky headers covering elements)
     * @param {string} selector 
     */
    static scrollAndClick(selector) {
        cy.get(selector).scrollIntoView().should('be.visible').click();
    }

    /**
     * Upload a file to an input element
     * @param {string} selector - Input selector (input[type="file"])
     * @param {string} filePath - Path relative to fixtures folder
     */
    static uploadFile(selector, filePath) {
        cy.get(selector).selectFile(`cypress/fixtures/${filePath}`, { force: true });
    }

    /**
     * Get text from a list of elements
     * @param {string} selector 
     * @returns {Cypress.Chainable<string[]>}
     */
    static getTextList(selector) {
        return cy.get(selector).then($list => {
            return [...$list].map(el => el.innerText.trim());
        });
    }

    /**
     * Check if element exists in DOM (without failing if not found)
     * Useful for conditional logic (though discourage in tests, sometimes needed)
     * @param {string} selector 
     * @returns {Cypress.Chainable<boolean>}
     */
    static exists(selector) {
        return cy.get('body').then($body => {
            return $body.find(selector).length > 0;
        });
    }
}
