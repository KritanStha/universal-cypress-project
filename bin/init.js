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
const srcDir = path.join(__dirname, '../src');
const frameworkDest = path.join(cypressDir, 'support', 'framework');

const copyRecursiveSync = (src, dest) => {
    if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(childItemName => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        // ALWAYS copy files (overwrite if exists) to ensure they get the library files
        fs.copyFileSync(src, dest);
    }
};

if (!fs.existsSync(cypressDir)) {
    console.log('📂 Scaffolding cypress/ directory...');
    copyRecursiveSync(path.join(templateDir, 'cypress'), cypressDir);
}

// 3. Eject Framework Source Code
console.log('📦 Installing framework source code to cypress/support/framework...');
copyRecursiveSync(srcDir, frameworkDest);

// 4. Update Import Paths in Support File
const supportFile = path.join(cypressDir, 'support', 'e2e.js');
if (fs.existsSync(supportFile)) {
    let content = fs.readFileSync(supportFile, 'utf8');

    // Replace library import with local import
    if (content.includes('universal-cypress-framework/src/commands')) {
        content = content.replace(
            "import 'universal-cypress-framework/src/commands';",
            "import './framework/commands';"
        );
    }
    // If it doesn't have it yet (fresh install of template), add it
    else if (!content.includes('./framework/commands')) {
        content += "\n// Import framework commands\nimport './framework/commands';\n";
    }

    fs.writeFileSync(supportFile, content);
}

// 5. Update Example Tests
const exampleFile = path.join(cypressDir, 'e2e', 'example.cy.js');
if (fs.existsSync(exampleFile)) {
    let content = fs.readFileSync(exampleFile, 'utf8');
    if (content.includes('universal-cypress-framework')) {
        content = content.replace(
            "import { BasePage } from 'universal-cypress-framework';",
            "import { BasePage } from '../support/framework';"
        );
        fs.writeFileSync(exampleFile, content);
    }
}

console.log('✅ Initialization complete! Run "npx cypress open" to start testing.');
