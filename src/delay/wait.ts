/**
 * Resolves after the given timeout.
 *
 * @param timeout Delay in milliseconds (defaults to `1000`).
 * @returns A promise resolving once the timeout elapses.
 */
export async function wait(timeout: number = 1000): Promise<void> {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
}

/**
 * `wait()` with a fixed two second timeout.
 */
export const wait2s = () => wait(2000);