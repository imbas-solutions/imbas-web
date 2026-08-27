/** `light` is the default; `night` is the original dark composition. */
export type Theme = "light" | "night";

export const THEME_COOKIE = "imbas-theme";
export const DEFAULT_THEME: Theme = "light";
/** One year — the choice is a preference, not a session. */
export const THEME_MAX_AGE = 60 * 60 * 24 * 365;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "night";
}
