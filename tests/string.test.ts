import { describe, expect, it } from "vitest";
import { capitalize, extractColors } from "../src/string";

describe("capitalize", () => {
  it("capitalizes the first character", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("leaves already capitalized strings untouched", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("returns an empty string for falsy input", () => {
    expect(capitalize()).toBe("");
    expect(capitalize("")).toBe("");
  });
});

describe("extractColors", () => {
  it("extracts unique hex colors from a gradient", () => {
    expect(
      extractColors("linear-gradient(to right, #ff0000, #00ff00, #ff0000)")
    ).toEqual(["#ff0000", "#00ff00"]);
  });

  it("supports 3 digit hex codes", () => {
    expect(extractColors("color: #f00; background: #f00")).toEqual(["#f00"]);
  });

  it("returns an empty array when no colors are found", () => {
    expect(extractColors("no colors here")).toEqual([]);
  });
});