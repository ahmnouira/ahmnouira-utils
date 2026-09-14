export const isArray = <T>(array?: T[]) =>
  Array.isArray(array) && array.length > 0;

export const uniqueArray = <T>(array: T[]) => [...new Set(array)];
