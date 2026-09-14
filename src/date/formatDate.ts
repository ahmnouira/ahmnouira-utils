/**
 * Formats a date string as `15 Jun 2024` (en-GB, short month).
 *
 * @param date A date string parseable by `new Date()`.
 * @returns The formatted date, or an empty string when `date` is falsy.
 */
export function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}