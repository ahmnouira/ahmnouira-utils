import { describe, expect, it } from "vitest";
import { formatUrl, formatUrlEncoded } from "../src/url";

describe("formatUrl", () => {
  it("lowercases and slugifies whitespace", () => {
    expect(formatUrl("Hello  World")).toBe("hello-world");
  });

  it("leaves already clean slugs untouched", () => {
    expect(formatUrl("my-page")).toBe("my-page");
  });

  it("returns an empty string for empty input", () => {
    expect(formatUrl("")).toBe("");
  });
});

describe("formatUrlEncoded", () => {
  it("encodes a slugified url", () => {
    expect(formatUrlEncoded("My Cool Page")).toBe("my-cool-page");
  });

  it("percent-encodes unsafe characters", () => {
    expect(formatUrlEncoded("Café & More")).toBe("caf%C3%A9-%26-more");
  });
});