import { describe, expect, it } from "vitest";
import { isArray, uniqueArray } from "../src/array";

describe("isArray", () => {
  it("returns true for a non-empty array", () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([""])).toBe(true);
  });

  it("returns false for an empty array", () => {
    expect(isArray([])).toBe(false);
  });

  it("returns false for undefined and non-arrays", () => {
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null as unknown as number[])).toBe(false);
  });
});

describe("uniqueArray", () => {
  it("removes duplicate primitives", () => {
    expect(uniqueArray([1, 1, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  it("keeps original order", () => {
    expect(uniqueArray(["b", "a", "b", "c", "a"])).toEqual(["b", "a", "c"]);
  });

  it("preserves objects by reference", () => {
    const a = { id: 1 };
    const b = { id: 1 };
    expect(uniqueArray([a, b])).toEqual([a, b]);
  });
});