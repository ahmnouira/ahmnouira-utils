export function formatDay(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  const m = d.getMonth();
  return `${d.getDate()}/${m < 10 ? `0${m}` : m}/${d.getFullYear()}`;
}
