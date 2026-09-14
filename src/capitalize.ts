export function capitalize(text?: string) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.substring(1);
}
