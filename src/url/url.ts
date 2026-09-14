/**
 * Normalizes a string for use in a URL slug: lowercases it and replaces
 * whitespace runs with a single hyphen.
 *
 * @param url The input string.
 * @returns A URL-safe slug, or `""` when `url` is empty.
 */
export const formatUrl = (url: string) =>
  url ? url.toLowerCase().replace(/\s+/g, "-") : "";

/**
 * URL-safe slug via {@link formatUrl}, then percent-encoded.
 *
 * @param url The input string.
 * @returns The encoded slug.
 */
export const formatUrlEncoded = (url: string) =>
  encodeURIComponent(formatUrl(url));