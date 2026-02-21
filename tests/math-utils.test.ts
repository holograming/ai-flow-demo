import { describe, expect, it } from 'vitest';
import { add, divide, multiply } from '../src/math-utils.js';

describe('math-utils', () => {
  it('add should sum two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiply should multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('divide should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(15, 3)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  it('divide should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});
