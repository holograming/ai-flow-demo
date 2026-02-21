import { describe, expect, it } from 'vitest';
import { add, multiply } from '../src/math-utils.js';

describe('math-utils', () => {
  it('add should sum two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiply should multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  // NOTE: no test for divide() — intentional gap for AI to discover
});
