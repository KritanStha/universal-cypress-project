#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Initializing Cypress Shared Framework...');

const projectRoot = process.cwd();
const templateDir = path.join(__dirname, '../templates');

// 1. Copy cypress.config.js if not exists
const configPath = path.join(projectRoot, 'cypress.config.js');
const envPath = path.join(projectRoot, '.env');

if (!fs.existsSync(configPath)) {
    console.log('📄 Creating cypress.config.js...');
    fs.copyFileSync(path.join(templateDir, 'cypress.config.js'), configPath);
} else {
    console.log('⚠️  cypress.config.js already exists. Skipping.');
}

if (!fs.existsSync(envPath)) {
    console.log('📄 Creating .env file...');
    fs.copyFileSync(path.join(templateDir, '.env.example'), envPath);
} else {
    console.log('⚠️  .env already exists. Skipping.');
}

// 2. Copy folder structure
const cypressDir = path.join(projectRoot, 'cypress');
const copyRecursiveSync = (src, dest) => {
    if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(childItemName => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        if (!fs.existsSync(dest)) {
            fs.copyFileSync(src, dest);
        }
    }
};

if (!fs.existsSync(cypressDir)) {
    console.log('ue5c2 Scaffolding cypress/ directory...');
    copyRecursiveSync(path.join(templateDir, 'cypress'), cypressDir);
} else {
    console.log('ue5c2 Cypress directory exists. Merging specific support files...');
    // Ensure e2e.js imports our commands
    const supportFile = path.join(cypressDir, 'support', 'e2e.js');
    if (fs.existsSync(supportFile)) {
        const content = fs.readFileSync(supportFile, 'utf8');
        if (!content.includes('@cypress-shared/framework')) {
            console.log('ue58d Adding import to cypress/support/e2e.js...');
            fs.appendFileSync(supportFile, "\nimport 'universal-cypress-framework/src/commands';\n");
        }
    }
}

console.log('✅ Initialization complete! Run "npx cypress open" to start testing.');
