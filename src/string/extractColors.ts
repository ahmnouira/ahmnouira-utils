import { uniqueArray } from "../array";

export function extractColors(gradient: string) {
  return uniqueArray(gradient.match(/#([0-9a-fA-F]{3,6})/g) || []);
}
