import { afterEach, describe, expect, it, vi } from "vitest";

const realEnv = process.env.NODE_ENV;

afterEach(() => {
  vi.restoreAllMocks();
  vi.resetModules();
  process.env.NODE_ENV = realEnv;
});

describe("log", () => {
  it("logs data spread across arguments in development", async () => {
    process.env.NODE_ENV = "development";
    const { log } = await import("../src/log/log");
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    log("user", 42);

    expect(spy).toHaveBeenCalledWith("user", 42);
  });

  it("silences logging outside development", async () => {
    process.env.NODE_ENV = "production";
    const { log, logError, warn, info } = await import("../src/log/log");

    const spies = ["log", "error", "warn", "info"].map((method) =>
      vi.spyOn(console, method as "log").mockImplementation(() => {})
    );

    log("a");
    logError("b");
    warn("c");
    info("d");

    for (const spy of spies) {
      expect(spy).not.toHaveBeenCalled();
    }
  });

  it("aliases l/e/w/i and routes to the underlying loggers", async () => {
    process.env.NODE_ENV = "development";
    const { l, e, w, i } = await import("../src/log/log");

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});

    l("l");
    e("e");
    w("w");
    i("i");

    expect(logSpy).toHaveBeenCalledWith("l");
    expect(errorSpy).toHaveBeenCalledWith("e");
    expect(warnSpy).toHaveBeenCalledWith("w");
    expect(infoSpy).toHaveBeenCalledWith("i");
  });
});