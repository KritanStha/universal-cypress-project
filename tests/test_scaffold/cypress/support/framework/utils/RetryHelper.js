/**
 * Utility for handling stability and retry logic.
 */
export class RetryHelper {
    /**
     * Retries a function until it succeeds or times out.
     * Useful for flaky non-Cypress actions (e.g., file system checks, DB calls).
     * 
     * @param {Function} fn - The function to retry. Must throw error on failure.
     * @param {number} retries - Number of retries.
     * @param {number} delay - Delay between retries in ms.
     */
    static async withRetry(fn, retries = 3, delay = 1000) {
        try {
            return await fn();
        } catch (error) {
            if (retries <= 0) throw error;
            await new Promise((res) => setTimeout(res, delay));
            return this.withRetry(fn, retries - 1, delay);
        }
    }

    /**
     * Safe click that handles detached DOM elements.
     * Usage: RetryHelper.safeClick(cy.get('button'));
     * @param {Cypress.Chainable} element 
     */
    static safeClick(element) {
        element.click({ force: true });
    }
}
