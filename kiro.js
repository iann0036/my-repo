/**
 * Sample utility functions for Kiro
 */

// Sample function to greet a user
function greetUser(name) {
    if (!name) {
        return "Hello there!";
    }
    return `Hello, ${name}! Welcome to Kiro.`;
}

// Sample function to calculate factorial
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Sample async function to simulate API call
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Export functions for use in other modules
module.exports = {
    greetUser,
    factorial,
    fetchData
};

// This line is for testing purposes
console.log(greetUser("John"));