import { DEV } from "../config/env.js";

/**
 * Logs data to the console, but only when `NODE_ENV === "development"`.
 */
export const log = (...data: any[]) => {
  if (DEV) console.log(...data);
};

/** Shortcut for {@link log}. */
export const l = log;

/**
 * Logs errors to the console, but only when `NODE_ENV === "development"`.
 */
export const logError = (...data: any[]) => {
  if (DEV) console.error(...data);
};

/** Shortcut for {@link logError}. */
export const e = logError;

/**
 * Logs warnings to the console, but only when `NODE_ENV === "development"`.
 */
export const warn = (...data: any[]) => {
  if (DEV) console.warn(...data);
};

/** Shortcut for {@link warn}. */
export const w = warn;

/**
 * Logs info messages to the console, but only when `NODE_ENV === "development"`.
 */
export const info = (...data: any[]) => {
  if (DEV) console.info(...data);
};

/** Shortcut for {@link info}. */
export const i = info;