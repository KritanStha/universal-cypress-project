# 🌲 Universal Cypress Framework

**The robust, enterprise-grade generic Cypress framework for modern web and Electron applications.**

This package automatically scaffolds a production-ready testing environment so you can start writing tests in seconds, not hours.

---

## � Quick Start

### 1. Create a New Project Folder
Create a directory for your automation project.
```bash
mkdir my-test-project
cd my-test-project
```

### 2. Install
Run the standard NPM install command.
```bash
npm install universal-cypress-framework
```

**✨ Magic Happens Here:** 
The installation automatically:
- 📄 Generates a `package.json` (if you don't have one).
- 📂 Scaffolds the entire `cypress/` folder structure.
- ⚙️ Creates `cypress.config.js` and `.env` files.
- 📦 Installs `cypress` and `dotenv`.
- ⚡ Adds helpful scripts like `npm run cy:open`.

### 3. Start Testing
```bash
npm run cy:open
```

---

## � Project Structure

After installation, your project will look like this:

```
my-test-project/
├── cypress/
│   ├── e2e/              <-- Your generic tests go here
│   ├── fixtures/         <-- Test data files
│   └── support/
│       ├── framework/    <-- 🛡️ THE CORE FRAMEWORK (Ejected)
│       │   ├── actions/  <-- Reusable UI actions
│       │   ├── api/      <-- API wrappers
│       │   ├── pages/    <-- Base Page Objects
│       │   └── utils/    <-- Data generators & Helpers
│       └── e2e.js        <-- Auto-configured support file
├── .env                  <-- Environment variables (URLs, Creds)
├── cypress.config.js     <-- Cypress configuration
└── package.json
```

---

## 🛠 Usage Guide

### 1. Creating Page Objects
Extend the `BasePage` to inherit stability checks automatically.

```javascript
// cypress/pages/LoginPage.js
import { BasePage } from '../support/framework';

export class LoginPage extends BasePage {
  constructor() {
    super('/login'); // URL path
  }

  login(username, password) {
    // BasePage ensures element stability before interaction
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  }
}
```

### 2. Generating Test Data
Use the built-in `DataFactory` for consistent fake data.

```javascript
import { DataFactory, fakerNepali } from '../support/framework';

// Generate a random user
const user = DataFactory.generateUser(); 
// { username: '...', email: '...', password: '...' }

// Generate Nepali-specific data
const citizenId = fakerNepali.contact.citizenshipNo(); 
// "27-01-75-12345"
```

### 3. Writing a Test Spec
```javascript
// cypress/e2e/login_test.cy.js
import { LoginPage } from '../pages/LoginPage';

describe('Login Flow', () => {
    const loginPage = new LoginPage();

    it('should login successfully', () => {
        loginPage.visit();
        loginPage.login(process.env.TEST_USER, process.env.TEST_PASS);
        
        cy.url().should('include', '/dashboard');
    });
});
```

---

## ⚙️ Configuration

### Environment Variables
Edit the `.env` file to manage your configuration.

```ini
BASE_URL=https://example.com
API_URL=https://api.example.com
TEST_ENV=staging
```

The framework automatically loads these into Cypress. You can access them via `Cypress.env('BASE_URL')` or `process.env` in certain contexts.

---

## ❓ FAQ

**Q: Can I modify the framework files in `cypress/support/framework`?**  
A: **Yes!** The framework is "ejected" into your project. You own the code. Feel free to customize the local files to fit your specific needs.

**Q: How do I update to a newer version?**  
A: Since the code is ejected, updating requires reinstalling the package or manually copying new files. We recommend treating your `cypress/support/framework` as your own codebase.

---

Made with ❤️ by [KritanStha](https://github.com/KritanStha)
