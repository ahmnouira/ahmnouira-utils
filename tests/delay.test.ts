import { afterEach, describe, expect, it, vi } from "vitest";
import { wait, wait2s } from "../src/delay";

afterEach(() => {
  vi.useRealTimers();
});

describe("wait", () => {
  it("resolves after the given timeout", async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    void wait(1000).then(fn);

    await vi.advanceTimersByTimeAsync(999);
    expect(fn).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("uses a default timeout of 1000ms", async () => {
    vi.useFakeTimers();
    const wait = (await import("../src/delay/wait")).wait;
    const fn = vi.fn();
    void wait().then(fn);

    await vi.advanceTimersByTimeAsync(1000);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("wait2s", () => {
  it("resolves after 2000ms", async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    void wait2s().then(fn);

    await vi.advanceTimersByTimeAsync(1999);
    expect(fn).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});