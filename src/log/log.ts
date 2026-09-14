import { DEV } from "../config/env";

export const log = (...data: any[]) => {
  if (DEV) console.log(data);
};

export const l = log;

export const logError = (...data: any[]) => {
  if (DEV) console.error(data);
};

export const e = logError;

export const warn = (...data: any[]) => {
  if (DEV) console.warn(data);
};

export const w = warn;

export const info = (...data: any[]) => {
  if (DEV) console.info(data);
};

export const i = info;
