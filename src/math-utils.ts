/**
 * Add two numbers.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Multiply two numbers.
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide two numbers.
 * @throws {Error} When divisor is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}
