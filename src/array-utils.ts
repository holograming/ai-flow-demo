/**
 * Return an array with duplicate values removed.
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// TODO: implement chunk(arr, size) - split array into chunks of given size
// TODO: implement flatten(arr) - flatten nested arrays one level deep
