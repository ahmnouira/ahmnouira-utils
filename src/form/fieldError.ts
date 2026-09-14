/**
 * Reads an error message for a given form field.
 *
 * Works with error objects shaped like `{ [name]: { message } }`
 * (e.g. react-hook-form, react-final-form).
 *
 * @param name Field name to look up.
 * @param errors Errors object keyed by field name.
 * @returns The field error message, `null` when missing.
 */
export function fieldError(name?: string, errors?: Record<string, any>) {
  if (!name || !errors) return null;
  const error = errors[name];
  return error?.message ? error.message : null;
}