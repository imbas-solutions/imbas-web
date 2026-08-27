/**
 * Reads a theme token off <html> at call time.
 *
 * GSAP cannot tween to a `var(--x)` string, so animations that set colours must
 * resolve the token themselves. Call this inside the animation body (not at
 * module scope) and rebuild the animation when the theme changes.
 */
export function cssVar(name: string): string {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
