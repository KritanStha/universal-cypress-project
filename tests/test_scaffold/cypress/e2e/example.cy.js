import { BasePage } from '../support/framework';

class ExamplePage extends BasePage {
    constructor() {
        super('/');
    }

    waitForLoad() {
        cy.contains('h1', 'Kitchen Sink').should('be.visible');
    }
}

describe('Example Test with Env Vars', () => {
    it('prints env vars', () => {
        // Just to show they are loaded
        cy.log('Base URL: ' + Cypress.config('baseUrl'));
        cy.log('User Email: ' + Cypress.env('USER_EMAIL'));
    });

    it('loads the example page', () => {
        const page = new ExamplePage();
        page.visit(); // Uses baseUrl from cypress.config.js which uses .env
    });
});
