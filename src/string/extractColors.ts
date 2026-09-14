import { uniqueArray } from "../array/index.js";

/**
 * Extracts unique hex color codes (3 or 6 digits) from a string.
 *
 * @param gradient A string that may contain hex colors, e.g. a CSS gradient.
 * @returns Unique hex colors found, in order of appearance.
 */
export function extractColors(gradient: string) {
  return uniqueArray(gradient.match(/#([0-9a-fA-F]{3,6})/g) || []);
}