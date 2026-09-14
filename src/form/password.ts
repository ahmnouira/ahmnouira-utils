/** Possible password strength levels. */
export type PasswordStrength = "weak" | "medium" | "strong" | "very strong";

/**
 * Scores a password and returns a human-readable strength level.
 *
 * Checks: length >= 8, length >= 12, mixed case, digits and special chars.
 *
 * @param pwd The password to evaluate.
 * @returns A `{ strength, score }` pair where `score` is 25, 50, 75 or 100.
 */
export const calculatePasswordStrength = (
  pwd: string
): {
  strength: PasswordStrength;
  score: number;
} => {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^a-zA-Z0-9]/.test(pwd)) score++;

  if (score <= 1) return { strength: "weak", score: 25 };
  if (score === 2) return { strength: "medium", score: 50 };
  if (score === 3 || score === 4) return { strength: "strong", score: 75 };
  return { strength: "very strong", score: 100 };
};