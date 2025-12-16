const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // Implement node event listeners here
        },
        // Env vars from .env file or defaults
        env: {
            API_URL: process.env.API_URL || 'https://api.example.com',
            API_TOKEN: process.env.API_TOKEN || '',
            USER_EMAIL: process.env.USER_EMAIL || '',
            USER_PASSWORD: process.env.USER_PASSWORD || '',
        },
        baseUrl: process.env.BASE_URL || 'https://example.cypress.io',
    },
});
