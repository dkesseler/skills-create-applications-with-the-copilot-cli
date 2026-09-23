/**
 * Unit tests for the calculator's arithmetic functions:
 * addition, subtraction, multiplication, and division.
 *
 * Basic examples covered (see images/calc-basic-operations.png):
 *   2 + 3 = 5
 *   10 - 4 = 6
 *   45 * 2 = 90
 *   20 / 5 = 4
 */

const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('add', () => {
  test('adds two positive numbers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a negative and a positive number', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });

  test('adding zero returns the other operand', () => {
    expect(add(0, 7)).toBe(7);
  });
});

describe('subtract', () => {
  test('subtracts two positive numbers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracting a larger number yields a negative result', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the original number', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

describe('multiply', () => {
  test('multiplies two positive numbers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(8, 0)).toBe(0);
  });

  test('multiplies negative numbers to yield a positive result', () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  test('multiplying by a negative number yields a negative result', () => {
    expect(multiply(6, -2)).toBe(-12);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(1.5, 2)).toBeCloseTo(3);
  });
});

describe('divide', () => {
  test('divides two positive numbers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides resulting in a decimal quotient', () => {
    expect(divide(10, 4)).toBe(2.5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('dividing negative numbers returns a positive result', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('dividing by a negative number returns a negative result', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
});

describe('calculate', () => {
  test('performs addition via the "+" operator (2 + 3 = 5)', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('performs subtraction via the "-" operator (10 - 4 = 6)', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('performs multiplication via the "*" operator (45 * 2 = 90)', () => {
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('performs division via the "/" operator (20 / 5 = 4)', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });

  test('throws an error when dividing by zero via the "/" operator', () => {
    expect(() => calculate(5, '/', 0)).toThrow(
      'Division by zero is not allowed.'
    );
  });

  test('throws an error for an unsupported operator', () => {
    expect(() => calculate(5, '%', 3)).toThrow(
      'Unsupported operator "%". Supported operators: + - * /'
    );
  });
});
