#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator.
 *
 * Supports the four basic arithmetic operations:
 *   +  Addition
 *   -  Subtraction
 *   *  Multiplication
 *   /  Division
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Example:
 *   node calculator.js 5 + 3
 *   => 8
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number} difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * Throws an error if dividing by zero so callers can handle it gracefully.
 * @param {number} a
 * @param {number} b
 * @returns {number} quotient of a and b
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Performs the requested arithmetic operation on two numbers.
 * @param {number} a
 * @param {string} operator - One of '+', '-', '*', '/'
 * @param {number} b
 * @returns {number} the result of the operation
 */
function calculate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(
        `Unsupported operator "${operator}". Supported operators: + - * /`
      );
  }
}

/**
 * Entry point for the CLI. Parses arguments, runs the calculation,
 * and prints the result or a helpful error message.
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Example: node calculator.js 5 + 3');
    process.exit(1);
  }

  const [rawA, operator, rawB] = args;
  const a = Number(rawA);
  const b = Number(rawB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: both operands must be valid numbers.');
    process.exit(1);
  }

  try {
    const result = calculate(a, operator, b);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, calculate };
