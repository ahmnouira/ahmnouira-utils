import { describe, expect, it } from "vitest";
import { formatDate, formatDay } from "../src/date";

describe("formatDate", () => {
  it("formats a date as '15 Jun 2024'", () => {
    expect(formatDate("2024-06-15T12:00:00")).toBe("15 Jun 2024");
  });

  it("returns an empty string for falsy dates", () => {
    expect(formatDate()).toBe("");
    expect(formatDate("")).toBe("");
  });
});

describe("formatDay", () => {
  it("formats a date as DD/MM/YYYY", () => {
    expect(formatDay("2024-06-15T12:00:00")).toBe("15/06/2024");
  });

  it("zero pads single digit months", () => {
    expect(formatDay("2024-01-05T12:00:00")).toBe("5/01/2024");
  });

  it("does not offset months", () => {
    expect(formatDay("2024-12-01T12:00:00")).toBe("1/12/2024");
  });

  it("returns an empty string for falsy dates", () => {
    expect(formatDay()).toBe("");
    expect(formatDay("")).toBe("");
  });
});