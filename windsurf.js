/**
 * Sample function that greets a user
 * @param {string} name - The name of the person to greet
 * @returns {string} A greeting message
 */
function greetUser(name) {
    if (!name) {
        return "Hello, anonymous user!";
    }
    return `Hello, ${name}! Welcome to Windsurf!`;
}

/**
 * Sample function that calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 */
function calculateRectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be positive numbers");
    }
    return width * height;
}

// Example usage
console.log(greetUser("Developer"));
console.log(greetUser());
console.log(`Rectangle area: ${calculateRectangleArea(5, 10)}`);

// Export functions for use in other modules
module.exports = {
    greetUser,
    calculateRectangleArea
};

// This is a comment

