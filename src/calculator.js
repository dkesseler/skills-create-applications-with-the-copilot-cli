#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator.
 *
 * Supports the following operations:
 *   +     Addition
 *   -     Subtraction
 *   *     Multiplication
 *   /     Division
 *   %     Modulo
 *   ^     Exponentiation (power)
 *   sqrt  Square root
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   node calculator.js sqrt <number>
 *
 * Example:
 *   node calculator.js 5 + 3
 *   => 8
 *   node calculator.js sqrt 16
 *   => 4
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
 * Returns the remainder of dividing the first number by the second.
 * Throws an error if dividing by zero so callers can handle it gracefully.
 * @param {number} a
 * @param {number} b
 * @returns {number} remainder of a divided by b
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

/**
 * Raises a base number to the given exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number} base raised to the power of exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number.
 * Throws an error for negative numbers since their square root is not a real number.
 * @param {number} n
 * @returns {number} square root of n
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate the square root of a negative number.');
  }
  return Math.sqrt(n);
}

/**
 * Performs the requested arithmetic operation on two numbers.
 * @param {number} a
 * @param {string} operator - One of '+', '-', '*', '/', '%', '^'
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
    case '%':
      return modulo(a, b);
    case '^':
      return power(a, b);
    default:
      throw new Error(
        `Unsupported operator "${operator}". Supported operators: + - * / % ^`
      );
  }
}

/**
 * Entry point for the CLI. Parses arguments, runs the calculation,
 * and prints the result or a helpful error message.
 */
function main() {
  const args = process.argv.slice(2);

  // Square root is a unary operation: node calculator.js sqrt <number>
  if (args.length === 2 && args[0] === 'sqrt') {
    const n = Number(args[1]);

    if (Number.isNaN(n)) {
      console.error('Error: operand must be a valid number.');
      process.exit(1);
    }

    try {
      console.log(squareRoot(n));
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('       node calculator.js sqrt <number>');
    console.error('Example: node calculator.js 5 + 3');
    console.error('Example: node calculator.js sqrt 16');
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

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
};
