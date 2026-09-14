/**
 * Formats a date string as `DD/MM/YYYY`.
 *
 * @param date A date string parseable by `new Date()`.
 * @returns The formatted date, or an empty string when `date` is falsy.
 */
export function formatDay(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  const m = d.getMonth() + 1;
  return `${d.getDate()}/${m < 10 ? `0${m}` : m}/${d.getFullYear()}`;
}