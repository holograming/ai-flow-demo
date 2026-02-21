/**
 * Reverse a string.
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Truncate a string to the given length, appending '...' if truncated.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength)}...`;
}

// TODO: implement capitalize(str) - capitalize first letter of each word
// TODO: implement kebabCase(str) - convert string to kebab-case
