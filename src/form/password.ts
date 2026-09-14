export const calculatePasswordStrength = (
  pwd: string
): {
  strength: "weak" | "medium" | "strong" | "very strong";
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
