/**
 * Validation Utility for common assertions
 */
export class ValidationUtils {
    /**
     * Validates that a list is sorted alphabetically
     * @param {string[]} list 
     * @param {'asc'|'desc'} order 
     */
    static isSorted(list, order = 'asc') {
        const sorted = [...list].sort((a, b) => a.localeCompare(b));
        if (order === 'desc') sorted.reverse();

        // Deep equality check
        return JSON.stringify(list) === JSON.stringify(sorted);
    }

    /**
     * Validate email format regex
     * @param {string} email 
     */
    static isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}
