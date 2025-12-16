# universal-cypress-framework

A generic, enterprise-grade Cypress framework package designed for reuse across multiple projects.

## 🚀 Features

- **BasePage Abstraction**: Enforces stability checks on page transitions.
- **Typed Custom Commands**: IntelliSense-ready commands like `cy.getByLabel`.
- **Data Factory**: Consistent test data generation using Faker.
- **BaseAPI**: Standardized API testing wrapper.

## 📦 Installation

This package is designed to be consumed as a library.

```bash
npm install --save-dev universal-cypress-framework
```

## 🔧 Peer Dependencies

Ensure your project has the following installed:

- `cypress`: >=10.0.0
- `@faker-js/faker`: >=8.0.0
- `dotenv`: >=16.0.0

## 🛠 Usage

### 1. Register Commands

In your `cypress/support/e2e.js`:

```javascript
import 'universal-cypress-framework/src/commands';
```

### 2. Extend BasePage

```javascript
import { BasePage } from 'universal-cypress-framework';

export class LoginPage extends BasePage {
  constructor() {
    super('/login');
  }

  waitForLoad() {
    cy.get('form').should('be.visible');
  }
}
```

### 3. Use Data Factory

```javascript
import { DataFactory, fakerNepali } from 'universal-cypress-framework';

// Generic data
const user = DataFactory.generateUser();

// Nepali specific data
const nepaliName = fakerNepali.person.fullName(); // "राम प्रसाद शर्मा"
const citizenship = fakerNepali.contact.citizenshipNo(); // "२७-०१-७५-१२३४५"
```

## 🏗 Development

```bash
# Run internal tests
npm test
```

## 🚀 Publishing

1. **Login to NPM**:
   ```bash
   npm login
   ```

2. **Publish**:
   ```bash
   npm publish --access public
   ```
