/**
 * ============================================================================
 *  PROVISIONAL — NOT YET FINAL
 * ============================================================================
 *
 *  This is the single source of truth for the sub-brand's identity. Every
 *  downstream artifact (site copy, email templates, contracts, decks, agent
 *  prompts) MUST import from here rather than hardcoding the name.
 *
 *  STATUS: provisional. The founder has not yet picked a name or registered
 *  a domain. These values reflect the recommendation in
 *  `brand/naming-recommendation.md` ("Adsum", domain `adsumdesk.com`), which
 *  was verified AVAILABLE on 2026-07-29 via Verisign RDAP (HTTP 404) and
 *  cross-checked with whois ("No match"). Availability is a snapshot — it is
 *  not a reservation. Re-verify before relying on it.
 *
 *  OPEN ITEMS BEFORE THIS BECOMES FINAL:
 *    1. Register adsumdesk.com (plus defensive holds — see recommendation doc).
 *    2. Trademark clearance by an attorney, USPTO Classes 42 and 35. The
 *       checks done so far were web screens, NOT clearance. Note that at least
 *       three unrelated software/AI companies already trade as "Adsum".
 *    3. Verify @adsumdesk on X and Instagram by hand — NOT yet checked.
 *    4. Decide the legal entity name and formation state.
 *
 *  TO CHANGE THE NAME: edit this file, then run a grep audit to catch anything
 *  that bypassed the import:
 *
 *      grep -ri "adsum" --include="*.ts" --include="*.tsx" \
 *        --include="*.md" --include="*.json" .
 *
 *  That is the whole migration. Keep it that way — do not inline the brand
 *  name anywhere.
 * ============================================================================
 */

export const BRAND = {
  /** Spoken and written name. Latin: "I am here." */
  name: "Adsum",

  /** PROVISIONAL — entity not yet formed; confirm name and state before use. */
  legalName: "Adsum Desk LLC",

  /** Verified available 2026-07-29 (RDAP 404 + whois "No match"). Not yet registered. */
  domain: "adsumdesk.com",

  email: "hello@adsumdesk.com",

  /**
   * Ties to the etymology and to the actual promise: presence, not cleverness.
   * Deliberately niche-agnostic — reads the same to a law firm and a roofer.
   */
  tagline: "Always present.",

  parent: {
    name: "Imbas Solutions",
    domain: "imbas.solutions",
  },
} as const;

export type Brand = typeof BRAND;

export default BRAND;
