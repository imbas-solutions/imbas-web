/**
 * ============================================================================
 *  SELECTED — domain not yet registered
 * ============================================================================
 *
 *  This is the single source of truth for the sub-brand's identity. Every
 *  downstream artifact (site copy, email templates, contracts, decks, agent
 *  prompts) MUST import from here rather than hardcoding the name.
 *
 *  STATUS: the founder selected "Custodeon" on 2026-07-30 over the shortlist in
 *  `brand/naming-recommendation.md`. The exact-match domain `custodeon.com` was
 *  verified AVAILABLE the same day via Verisign RDAP (HTTP 404). Availability is
 *  a snapshot, not a reservation — re-verify immediately before registering.
 *
 *  WHY THIS NAME: the root is `custos` — guardian, keeper. To a general audience
 *  "custodian" skews janitorial, which is why the naming pass ranked it second.
 *  To the actual buyer it does not: "custodian of records" is a term of art in
 *  legal practice, and this product's moat is precisely the audit log, the
 *  retention policy, and the ability to produce every conversation on demand.
 *  It also carries the strongest legal position of the shortlist — exact-match
 *  .com, and zero exact trademark hits (versus three live software companies
 *  already trading as "Adsum").
 *
 *  KNOWN COST: nine letters, three syllables (cus-TOH-dee-on). It will get
 *  spelled out on sales calls. That was a deliberate trade for a clean mark.
 *
 *  OPEN ITEMS BEFORE THIS IS FULLY SETTLED:
 *    1. Register custodeon.com (plus defensive holds — see recommendation doc).
 *    2. Trademark clearance by an attorney, USPTO Classes 42 and 35. The checks
 *       done so far were web screens, NOT clearance. Founder elected to proceed
 *       and flag this for the attorney alongside the MSA review.
 *    3. Verify @custodeon on X and Instagram by hand — NOT yet checked. The
 *       automated probe returned identical results for a nonsense control
 *       string, so it produced zero signal.
 *    4. Decide the legal entity name and formation state.
 *
 *  TO CHANGE THE NAME: edit this file, then run a grep audit to catch anything
 *  that bypassed the import:
 *
 *      grep -ri "custodeon" --include="*.ts" --include="*.tsx" \
 *        --include="*.md" --include="*.json" .
 *
 *  That is the whole migration. Keep it that way — do not inline the brand
 *  name anywhere.
 * ============================================================================
 */

export const BRAND = {
  /** Spoken and written name. From Latin `custos` — guardian, keeper of the record. */
  name: "Custodeon",

  /** PROVISIONAL — entity not yet formed; confirm name and state before use. */
  legalName: "Custodeon LLC",

  /** Verified available 2026-07-30 (RDAP 404). Not yet registered. */
  domain: "custodeon.com",

  email: "hello@custodeon.com",

  /**
   * Ties to the etymology and to the actual promise: nothing gets dropped, and
   * everything is on the record. Deliberately niche-agnostic — it reads the same
   * to a law firm and to a roofer, which §0 call 2 of the plan requires.
   */
  tagline: "Nothing goes unanswered.",

  parent: {
    name: "Imbas Solutions",
    domain: "imbas.solutions",
  },
} as const;

export type Brand = typeof BRAND;

export default BRAND;
