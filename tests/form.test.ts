import { describe, expect, it } from "vitest";
import { calculatePasswordStrength, fieldError } from "../src/form";

describe("fieldError", () => {
  it("returns the message for a field error", () => {
    const errors = { email: { message: "Email is required" } };
    expect(fieldError("email", errors)).toBe("Email is required");
  });

  it("returns null when the field has no error", () => {
    expect(fieldError("name", { email: { message: "x" } })).toBeNull();
  });

  it("returns null when the error has no message", () => {
    expect(fieldError("email", { email: { type: "required" } })).toBeNull();
  });

  it("returns null without name or errors", () => {
    expect(fieldError()).toBeNull();
    expect(fieldError("email")).toBeNull();
    expect(fieldError(undefined, {})).toBeNull();
  });
});

describe("calculatePasswordStrength", () => {
  it.each([
    ["short", { strength: "weak", score: 25 }],
    ["abcd1234", { strength: "medium", score: 50 }],
    ["Abcd1234!", { strength: "strong", score: 75 }],
    ["AbcdEfgh1234!@#", { strength: "very strong", score: 100 }],
  ])("evaluates '%s' as %o", (pwd, expected) => {
    expect(calculatePasswordStrength(pwd)).toEqual(expected);
  });
});