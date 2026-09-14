/**
 * Capitalizes the first character of a string.
 *
 * @param text Input string.
 * @returns The input with its first letter uppercased, or `""` when falsy.
 */
export function capitalize(text?: string) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.substring(1);
}