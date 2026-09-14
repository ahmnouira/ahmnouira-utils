/**
 * Returns `true` when the given value is a non-empty array.
 *
 * @param array The value to inspect.
 * @returns `true` when `array` is an array with at least one element.
 */
export const isArray = <T>(array?: T[]) =>
  Array.isArray(array) && array.length > 0;

/**
 * Removes duplicate values from an array.
 *
 * @param array The input array.
 * @returns A new array containing only unique values, in original order.
 */
export const uniqueArray = <T>(array: T[]) => [...new Set(array)];