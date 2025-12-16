import { faker } from '@faker-js/faker';

/**
 * Generic DataFactory for generating test data.
 * Wraps @faker-js/faker and provides stable, repeatable data patterns.
 */
export class DataFactory {
    /**
     * Generates a generic user profile.
     */
    static generateUser() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
        };
    }

    /**
     * Generates a random future date.
     */
    static generateFutureDate() {
        return faker.date.future();
    }
}
