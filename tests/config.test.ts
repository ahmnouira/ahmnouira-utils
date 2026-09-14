import { afterEach, describe, expect, it, vi } from "vitest";

const realEnv = process.env.NODE_ENV;

afterEach(() => {
  vi.resetModules();
  process.env.NODE_ENV = realEnv;
});

describe("config/env", () => {
  it("detects development", async () => {
    process.env.NODE_ENV = "development";
    const { DEV, PROD, env } = await import("../src/config/env");
    expect(DEV).toBe(true);
    expect(PROD).toBe(false);
    expect(env()).toBe("development");
  });

  it("detects production", async () => {
    process.env.NODE_ENV = "production";
    const { DEV, PROD } = await import("../src/config/env");
    expect(DEV).toBe(false);
    expect(PROD).toBe(true);
  });

  it("defaults env() to development when unset", async () => {
    delete process.env.NODE_ENV;
    const { env } = await import("../src/config/env");
    expect(env()).toBe("development");
  });
});