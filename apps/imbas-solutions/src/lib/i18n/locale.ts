import { cookies, headers } from "next/headers";
import type { Locale } from "./dictionaries";

/** ISO 3166-1 alpha-2 codes of Spanish-speaking countries */
const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO",
  "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "GQ", "PR",
]);

export const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Resolves the visitor's locale, in priority order:
 * 1. Explicit `NEXT_LOCALE` cookie (manual override / future language switcher)
 * 2. Country of the request (`x-vercel-ip-country`, set by Vercel's edge)
 * 3. Browser `Accept-Language`
 * 4. English
 */
export async function resolveLocale(): Promise<Locale> {
  const [cookieStore, headerList] = await Promise.all([cookies(), headers()]);

  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  if (cookieLocale === "es" || cookieLocale === "en") return cookieLocale;

  const country = headerList.get("x-vercel-ip-country")?.toUpperCase();
  if (country) return SPANISH_COUNTRIES.has(country) ? "es" : "en";

  const acceptLanguage = headerList.get("accept-language") ?? "";
  if (/(^|,)\s*es\b/i.test(acceptLanguage)) return "es";

  return "en";
}
