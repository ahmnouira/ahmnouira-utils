/**
 * Whether the runtime environment is "production".
 * Evaluated once when the module is loaded.
 */
export const PROD = process.env.NODE_ENV === "production";

/**
 * Whether the runtime environment is "development".
 * Evaluated once when the module is loaded.
 */
export const DEV = process.env.NODE_ENV === "development";

/**
 * Shortcut for `process.env.NODE_ENV` or "development" when not set.
 *
 * @returns The current environment name, defaulting to "development".
 */
export const env = () => process.env.NODE_ENV ?? "development";