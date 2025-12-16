/**
 * Abstract BaseAPI class for handling API requests.
 * Standardizes token management and error handling.
 */
export class BaseAPI {
    constructor(baseUrl = Cypress.env('API_URL') || '') {
        this.baseUrl = baseUrl;
    }

    /**
     * Generic GET request
     * @param {string} endpoint 
     * @param {object} headers 
     */
    get(endpoint, headers = {}) {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${endpoint}`,
            headers: { ...this.defaultHeaders(), ...headers },
            failOnStatusCode: false,
        });
    }

    /**
     * Generic POST request
     * @param {string} endpoint 
     * @param {object} body 
     * @param {object} headers 
     */
    post(endpoint, body, headers = {}) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${endpoint}`,
            body,
            headers: { ...this.defaultHeaders(), ...headers },
            failOnStatusCode: false,
        });
    }

    /**
     * Standard headers (e.g., Authorization)
     * Override this in subclasses if needed.
     */
    defaultHeaders() {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('API_TOKEN')}`,
        };
    }
}
