/**
 * A module containing various arithmetic operations.
 * @module arithmeticOperations
 */

/**
 * Adds two numbers together.
 * @param {number} left - The first number.
 * @param {number} right - The second number.
 * @returns {number} The sum of the two numbers.
 * @example <caption>Adding two numbers.</caption>
 * const result = addition(2, 3);
 * console.log(result); // Output: 5
 */
const addition = (left, right) => Number(left) + Number(right);

/**
 * Subtracts the second number from the first number.
 * @param {number} left - The first number.
 * @param {number} right - The second number.
 * @returns {number} The difference between the two numbers.
 * @example <caption>Subtracting two numbers.</caption>
 * const result = subtraction(7, 4);
 * console.log(result); // Output: 3
 */
const subtraction = (left, right) => Number(left) - Number(right);

/**
 * Multiplies two numbers together.
 * @param {number} left - The first number.
 * @param {number} right - The second number.
 * @returns {number} The product of the two numbers.
 * @example <caption>Multiplying two numbers.</caption>
 * const result = multiplication(3, 5);
 * console.log(result); // Output: 15
 */
const multiplication = (left, right) => Number(left) * Number(right);

/**
 * Divides the first number by the second number.
 * @param {number} left - The first number.
 * @param {number} right - The second number.
 * @returns {number} The quotient of the two numbers.
 * @example <caption>Dividing two numbers.</caption>
 * const result = division(10, 2);
 * console.log(result); // Output: 5
 */
const division = (left, right) => Number(left) / Number(right);

/**
 * Finds the remainder of the division of the first number by the second number.
 * @param {number} left - The first number.
 * @param {number} right - The second number.
 * @returns {number} The remainder of the division.
 * @example <caption>Finding the remainder of a division.</caption>
 * const result = remainder(10, 3);
 * console.log(result); // Output: 1
 */
const remainder = (left, right) => Number(left) % Number(right);

// Export all functions as a module
module.exports = { addition, subtraction, multiplication, division, remainder };