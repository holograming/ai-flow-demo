import { describe, expect, it } from 'vitest';
import { reverse, truncate } from '../src/string-utils.js';

describe('string-utils', () => {
  it('reverse should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('truncate should truncate long strings', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });
});
