export const formatUrl = (url: string) =>
  url ? url.toLowerCase().replace(/\s+/g, "-") : "";

export const formatUrlEncoded = (url: string) =>
  encodeURIComponent(formatUrl(url));
