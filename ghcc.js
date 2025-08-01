/**
 * Sample function to demonstrate basic JavaScript functionality
 * @param {string} name - The name to greet
 * @param {number} age - The age of the person
 * @returns {string} A greeting message
 */
function greetPerson(name, age) {
    if (!name || typeof name !== 'string') {
        throw new Error('Name must be a valid string');
    }
    
    if (age < 0 || !Number.isInteger(age)) {
        throw new Error('Age must be a positive integer');
    }
    
    return `Hello, ${name}! You are ${age} years old.`;
}

/**
 * Sample utility function to calculate factorial
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial of n
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

/**
 * Sample async function to simulate data fetching
 * @param {string} url - The URL to fetch data from
 * @returns {Promise<Object>} The fetched data
 */
async function fetchData(url) {
    try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate successful response
        return {
            success: true,
            data: `Data from ${url}`,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}

// Example usage (uncomment to test)
// console.log(greetPerson('John', 25));
// console.log(factorial(5));
// fetchData('https://api.example.com/data').then(console.log);

module.exports = {
    greetPerson,
    factorial,
    fetchData
};
