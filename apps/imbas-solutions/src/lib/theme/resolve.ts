import { cookies } from "next/headers";
import { DEFAULT_THEME, isTheme, THEME_COOKIE, type Theme } from "./theme";

/**
 * Resolves the visitor's theme from the `imbas-theme` cookie, defaulting to
 * light.
 *
 * `prefers-color-scheme` is deliberately NOT consulted: light is the brand
 * default, and honouring the OS setting would hand the majority of visitors a
 * theme nobody chose. Night is opt-in via the toggle.
 *
 * The layout already reads cookies for locale, so this adds no rendering cost —
 * and because the theme is known at render time there is no flash, and no
 * inline bootstrap script is needed.
 *
 * Kept separate from `theme.ts` so the client provider can share the constants
 * without dragging `next/headers` into the browser bundle — the same split as
 * `dictionaries.ts` / `locale.ts`.
 */
export async function resolveTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const value = cookieStore.get(THEME_COOKIE)?.value;
  return isTheme(value) ? value : DEFAULT_THEME;
}
