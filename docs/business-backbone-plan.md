# Imbas Solutions — Business Backbone Plan (Phase 1 of 2)

**Scope:** everything needed to *operate* — the product, the web presence, and the processes.
**Not in scope (Phase 2):** go-to-market, lead generation, ads, outbound, content calendar.
**Status:** designed offline from verified research findings. Execute this before spending a dollar on acquisition.

---

## 0. The strategic frame

### What the research actually told us

| Finding | Confidence | Implication |
|---|---|---|
| Solo/small law firms: 71–79% "use AI," only **4–8% deeply**, only **31–32% see revenue gain** | High (3-0, Clio + bar assoc.) | The pitch is *not* "adopt AI." It's "your AI isn't making you money." |
| Only **11–19% of all solo/small firms** have AI receptionist/lead-response | Medium (2-1) | ~80–89% of the vertical lacks the exact thing we'd sell |
| Colorado 23.2%, Arizona 22.9% lead US small-business AI adoption; **California is 13th** | High (3-0, Census BTOS) | Demand is confirmed. Competition density is **not** — never verified |
| Confirmed competitor BaaDigi sells this at **$297–$3,997/month subscription** | Medium (3-0) | The one-off *owned build* is a real differentiation angle |
| Agency count / market saturation | **Refuted twice** | We do not know if this is blue or red ocean. Plan for red. |

### Three strategic calls I'm making

**1. Sell a hybrid, not a one-off.** The source strategy doc proposed $5k–15k one-off projects, 5–10/month, to reach $50k/mo. That math is a treadmill: it requires closing 5 new deals *every month forever*, with zero compounding. A solo founder cannot sustain it while also delivering. **Every engagement must be build fee + monthly care plan.** The build fee funds acquisition and delivery; the recurring becomes the floor that makes $50k/mo reachable and defensible.

**2. Lead with legal, but build niche-agnostic.** The intake product is ~85% identical for a law firm and a roofer: answer the call, qualify, book, log, notify. Only the qualification logic and compliance layer differ. So: **build the engine generically, launch it into legal first** (where evidence is strongest and the compliance layer is a moat competitors won't touch). If legal stalls, the same golden build re-points at trades in ~2 weeks. The backbone investment is not wasted if the niche call is wrong — this is deliberate de-risking, because the research explicitly warned law firms may only be the *better-evidenced* niche, not the better one.

**3. Compliance is the moat, not the AI.** Anyone can wire up Vapi. Almost nobody selling AI receptionists will touch attorney confidentiality, conflict-check capture, UPL boundaries, and data retention. That's the wall that keeps generic $297/mo agencies out of this vertical — and it maps exactly onto positioning the site already gestures at ("AI Guardrails," "Enterprise Trust").

---

## 1. The Product

### Product family: **Imbas Intake** *(name is a founder decision — see §9)*

An AI intake system for law firms that answers every inquiry within seconds, qualifies it, and books the consultation — 24/7 — without ever giving legal advice.

**The one-sentence pitch:** *"You don't lose cases because you're a bad lawyer. You lose them because you were in court when they called, and they called the next firm on the list."*

### Why this specific product

- **Legal leads are high-value.** One retained case is worth $1,500–$15,000+ depending on practice area. A single recovered case pays for the entire build. ROI is arithmetic, not faith.
- **The pain is unambiguous and already felt.** Every solo lawyer knows they miss calls. No education required.
- **It's measurable.** Calls answered, consults booked. Proof arrives in week one — which matters enormously when you have no case studies yet.
- **It's scoped.** Not "AI transformation." One workflow, one outcome, fixed price.

### Tier architecture

| | **Intake Core** | **Intake Pro** ← *target* | **Firm OS** |
|---|---|---|---|
| **Build** | $4,500 | $12,000 | $25,000+ |
| **Care plan** | $350/mo | $750/mo | $1,500/mo |
| **Delivery** | 1 week | 2–3 weeks | 4–6 weeks |
| **For** | Solo, 1 practice area | Solo/small, 2–4 areas | 5–20 attorneys |
| Missed-call text-back | ✅ | ✅ | ✅ |
| Web chat intake agent | ✅ | ✅ | ✅ |
| Calendar booking | ✅ | ✅ | ✅ |
| Lead summary to attorney | ✅ | ✅ | ✅ |
| **24/7 AI voice receptionist** | — | ✅ | ✅ |
| Practice-mgmt integration (Clio/MyCase) | — | ✅ | ✅ |
| Conflict-check data capture | — | ✅ | ✅ |
| Custom qualification per practice area | — | ✅ | ✅ |
| Spanish/English bilingual intake | — | ✅ | ✅ |
| Document intake automation | — | — | ✅ |
| Internal knowledge base | — | — | ✅ |
| Multi-attorney routing | — | — | ✅ |

**Why three tiers:** Core is a low-risk yes that gets you in the door and generates case studies fast. Pro is the target — it's where the margin and the story live. Firm OS breaks the $15k ceiling so revenue isn't capped by deal size.

> **Note on bilingual:** the research killed "Bilingual AI Studio" as a *standalone business* (Spanish is a high-resource language for modern LLMs — no meaningful capability gap). But bilingual intake as a **feature** of this product is still valuable in CO/AZ, where a meaningful share of prospective clients call in Spanish. Sell it as coverage, never as "AI that finally understands Spanish."

### The Guardrails Spec *(non-negotiable, build into the golden build)*

This is product, not paperwork. Every deployment must:

1. **Disclose on first contact** — "I'm an AI assistant for [Firm]. I'm not an attorney and can't give legal advice."
2. **Never give legal advice.** Hard-refuse and route to human on any question seeking legal conclusions. Maintain an explicit refusal list per practice area.
3. **Never form an attorney-client relationship.** Scripted language: no representation until the firm accepts the matter in writing.
4. **Capture conflict-check data, never decide.** Collect adverse party names + matter description; the *firm* runs the check. The AI must never clear a conflict.
5. **Escalate on distress.** Domestic violence, criminal detention, suicidal ideation, imminent deadlines → immediate human handoff path + emergency resources.
6. **Statute-of-limitations caution.** Never estimate deadlines. Flag urgency, route to human.
7. **Data handling, documented per firm:** where recordings/transcripts live, retention window (recommend 30–90 days default), encryption at rest/in transit, deletion on request, subprocessor list.
8. **Full audit log.** Every conversation retrievable. This is what a bar complaint or malpractice carrier will ask for.

**Deliver this as a written "AI Intake Compliance Brief" with every Pro build.** It is a sales asset. It is also the single hardest thing for a competitor to copy.

---

## 2. The Economics

### Unit economics (Intake Pro)

| Line | Amount |
|---|---|
| Build revenue | $12,000 |
| Contractor cost (after golden build exists) | $1,500–3,000 |
| **Build gross margin** | **~75–88%** |
| Recurring revenue | $750/mo |
| Recurring COGS (voice ~$30, Twilio ~$20, LLM ~$40, hosting amortized) | ~$100/mo |
| **Recurring gross margin** | **~87%** |

The recurring margin is the entire reason this business is worth building. Protect it.

### Two paths to $50k/month

**Path A — Build-heavy (fast, fragile):**
`5 builds/mo × $9,000 avg = $45k` + a little recurring. Reaches $50k fastest but you re-earn it from zero every single month, and 5 builds/mo is beyond solo capacity while also selling.

**Path B — Recurring-weighted (slower, durable) ← recommended:**
```
Month 12 target:  40 active clients × $750/mo  = $30,000 MRR
                +  2 builds/mo × $10,000       = $20,000
                                                ─────────
                                                 $50,000/mo
```
~60% recurring. Once there, a slow month of sales doesn't wipe out the month. **This is the target shape.**

### Ramp model (Path B, assumes 5% monthly churn)

| Month | New builds | Active clients | Build rev | MRR | Total |
|---|---|---|---|---|---|
| 1–2 | 0 (backbone build) | 0 | $0 | $0 | $0 |
| 3 | 2 (case-study pricing) | 2 | $6k | $1.5k | $7.5k |
| 4 | 3 | 5 | $27k | $3.7k | $30.7k |
| 6 | 3 | 11 | $27k | $8.2k | $35.2k |
| 9 | 3 | 21 | $30k | $15.7k | $45.7k |
| 12 | 3 | 32 | $30k | $24k | $54k |

**Honest read:** $50k/mo lands around **month 10–13**, not month 3. Anyone promising faster is selling the treadmill. Note months 1–2 produce zero revenue — this backbone phase is an investment, and it needs runway.

### The capacity constraint — read this twice

At ~25 hours per Pro build (after the golden build exists), 3 builds/month = 75 hours, plus sales, plus support on a growing client base. **That is a full month for one person with no slack.**

**A contractor for build execution by month 4 is structural, not optional.** Budget for it in the unit economics above (it's already in the $1,500–3,000 line). The founder's job becomes: sell, scope, QA, own the client relationship. Not: build every deployment.

---

## 3. The Web Presence

### Architecture decision

Keep `imbas.solutions` as the company brand — the existing homepage, Capabilities, About, SEO infra, and `/ai-agents.md` GEO endpoint all stay and stay useful for credibility. **Add a dedicated niche funnel at `/for-law-firms`** rather than a new domain: it inherits domain authority, reuses the SEO/analytics infra already shipped, and is one property to maintain. Revisit a standalone domain only if legal proves out.

### Page-by-page spec

**① `/for-law-firms` — the money page** *(highest priority)*

Structure, in order:
1. **Hero** — outcome, not technology. *"Your firm answers every call. Even at 11pm. Even when you're in court."* Sub: books consultations directly into your calendar, never gives legal advice, works with Clio. Two CTAs: **Call the demo line** / **See pricing**.
2. **The problem, quantified** — after-hours call volume, speed-to-lead decay, cost of one lost case. *Cite honestly or not at all — see §9 open decisions.*
3. **Live demo** *(see ② — this is the centerpiece)*
4. **How it works** — 3 steps: call comes in → AI qualifies + books → you get the summary. Keep it concrete and boring.
5. **Compliance section** — the Guardrails Spec, summarized. For this audience this *is* a feature, prominently placed. No competitor will have this.
6. **Pricing table** — real numbers, all three tiers, visible without a form.
7. **Proof** — case studies when they exist; until then, the demo + a founder note (see §9).
8. **Book a call** — embedded scheduler, not a contact form.

> **Kill the estimator on this page.** The multi-step estimator suits bespoke work with unknown scope. A productized offer with published pricing needs a **pricing table + book-a-call**. Leave the estimator on the generic homepage for custom-software inquiries.

**② The live demo — your most important asset**

A phone number a lawyer can call *right now* and talk to a fully-configured intake agent for a fictional firm. Plus the web chat widget, live on the page.

Why this matters more than anything else on the site: **you have no case studies, and this substitutes for one.** A skeptical lawyer who calls the number and has a competent 90-second conversation is 80% sold. No testimonial does that. Build this before you build the copy.

**③ `/for-law-firms/pricing`** — or an anchor section. Non-negotiable that it's public. Prior research found buyers won't submit forms on sites with no pricing anchor; for a $12k decision that goes double.

**④ `/about`** — the solo-founder page. Frame the constraint as the feature: *you work directly with the engineer who builds it, not an account manager who forwards tickets.* Real name, real photo, real background. Anonymous vendors don't get $12k wires.

**⑤ `/security` or `/trust`** — data handling, retention, subprocessors, encryption, DPA available on request. For lawyers evaluating a vendor who will touch prospective-client information, this is a sales page.

**⑥ Booking page** — Cal.com or Calendly embed. The current funnel ends at a form; a $12k sale needs a conversation. Form → calendar is the single highest-ROI funnel change.

**⑦ Extend `/ai-agents.md`** — add the legal intake offering, tiers, and service area. Cheap, already built, and prior research confirmed AI assistants are now a real vendor-discovery channel.

### Build priority

```
1. Live demo (phone + chat)        ← before any copy
2. /for-law-firms landing + pricing
3. Booking flow (replaces form as primary CTA)
4. /about + /trust
5. /ai-agents.md extension
```

---

## 4. The Operating Processes

Four systems. Each needs a written SOP and a home in ClickUp *(already in the founder's stack — don't add tools)*.

### A. Sales pipeline

**ClickUp list: `Sales Pipeline`.** Stages:
`New Inquiry → Qualified → Discovery Booked → Discovery Held → Proposal Sent → Verbal Yes → Contract Sent → Deposit Paid → Won / Lost`

**Qualification gate** (before you spend a discovery call — protect your capacity):
- Solo or firm ≤20 attorneys
- Consumer-facing practice area with inbound phone leads (PI, family, criminal, immigration, estate, employment). **B2B/transactional firms are a poor fit — they don't run on inbound calls.**
- Currently missing calls or paying an answering service
- Can decide without a committee
- Budget ≥ $4,500

**Discovery call agenda** (45 min, templated):
1. Current intake: who answers, when, what happens after hours (10m)
2. Volume + value: calls/week, close rate, avg matter value (10m) — *this produces their ROI number, in their own words*
3. Practice-management stack (5m)
4. Demo the agent live against their actual scenario (10m)
5. Recommend a tier, state the price out loud (5m)
6. Next step + date (5m)

**Proposal:** one page, sent within 24h. Their numbers from step 2, the tier, the price, timeline, what you need from them. Not a 20-page deck.

**Payment terms:** 50% deposit to start, 50% on go-live. Care plan begins at go-live, billed monthly, 3-month minimum then month-to-month.

### B. Delivery — the repeatability engine

**ClickUp list: `Delivery`**, one task per client, subtasks from a template. **Every build follows the identical checklist. No bespoke builds.**

```
KICKOFF (day 0–2)
  ☐ Intake questionnaire returned (practice areas, hours, routing rules,
    qualification criteria, calendar access, PM system credentials)
  ☐ Twilio number provisioned
  ☐ Kickoff call — confirm scope, set go-live date

BUILD (day 3–10)
  ☐ Clone golden build → client workspace
  ☐ Configure firm profile, practice areas, qualification tree
  ☐ Load guardrails pack + practice-area refusal list
  ☐ Calendar integration + booking rules
  ☐ PM system integration (Pro+)
  ☐ Notification routing (SMS/email/Slack)
  ☐ Record + review 10 test calls covering: happy path, wrong practice area,
    out of jurisdiction, seeking legal advice, distress escalation, conflict-party
    named, after-hours, Spanish, hostile caller, ambiguous

QA (day 11–12)
  ☐ Guardrails regression suite passes (all 8 spec items)
  ☐ Booking writes correctly to live calendar
  ☐ Audit log complete and retrievable
  ☐ Failover: what happens if the AI errors mid-call → must reach a human

HANDOFF (day 13–15)
  ☐ Training call (45m) + recorded walkthrough
  ☐ Deliver AI Intake Compliance Brief
  ☐ Deliver admin access + escalation contact
  ☐ Final invoice

TUNING (day 15–45) ← churn protection
  ☐ Day 7 check-in: review real transcripts, fix qualification misses
  ☐ Day 30 check-in: first performance report, tune, ask for referral + review
```

**The 30-day tuning window is not optional.** The #1 churn cause for this product is an agent that books bad leads in week one. Budget the hours.

### C. Support & retention *(protects the MRR — the whole business)*

- **Monthly performance report, automated:** calls answered, consults booked, after-hours captured, estimated value recovered. One page, sent on the 1st. *This report is your renewal argument — it makes the invoice obviously worth paying.*
- **Escalation SLA:** agent down = 4 business hours. Everything else = 2 business days. Publish it; it's a differentiator against a solo competitor who publishes nothing.
- **Quarterly tune-up call** included in the care plan. Drives retention and surfaces Firm OS upgrades.
- **Change requests:** minor (≤1hr) included; larger scoped as a mini-SOW.

### D. Admin & financial ops

- **Entity + banking:** LLC, separate business account, separate card. Do not co-mingle.
- **Payments:** Stripe — invoices for builds, subscriptions for care plans. Automate dunning; do not chase failed cards by hand.
- **Contracts:** MSA (once per client) + SOW (per engagement). MSA must contain: liability cap at fees paid, no-legal-advice acknowledgment, client owns their data, defined data-retention terms, mutual confidentiality.
- **Insurance:** **E&O / professional liability, obtained before the first client.** You are handling prospective-client information for regulated professionals. A mishandled intake is a real liability path. Most solo operators skip this; you cannot, in this vertical.
- **Bookkeeping:** monthly, from month one.

---

## 5. Tech Stack & the Golden Build

**Standardize hard.** Every non-standard choice per client is margin you will never get back.

| Layer | Choice | Notes |
|---|---|---|
| Voice AI | Vapi or Retell | Pick **one**. Evaluate both in week 1, then never revisit. |
| Telephony/SMS | Twilio | Numbers, missed-call text-back |
| Orchestration | n8n (self-hosted) | Already in the founder's stack |
| LLM | Claude via API | Guardrail prompts + qualification logic |
| Calendar | Cal.com | API-first; fallback to direct Google/Outlook |
| PM integration | Clio API first | Largest install base; MyCase second |
| Web/marketing | Existing Next.js on Vercel | Already built this session |
| CRM / delivery board | ClickUp | Already in stack — don't add another tool |
| Payments | Stripe | |
| Client reporting | Automated from call logs | Powers the monthly report |

### The Golden Build

**Build one complete, excellent reference deployment for a fictional firm. That artifact is the company.**

It serves three jobs at once: it is the **live demo** on the website, the **template** every client build clones, and the **regression suite** for the guardrails. Every future client is *configuration*, never construction.

Target: **first client build ≤40 hours. By the fourth, ≤25 hours.** If build time isn't dropping, the golden build isn't good enough — stop selling and fix it.

---

## 6. Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| **Clio/MyCase ship native AI intake and bundle it** | High | Be the integration + compliance + service layer, not just software. Own customization and the relationship. |
| **Vapi/Retell go direct to lawyers** | Medium | Own the client relationship, the compliance layer, and the local presence. Platforms don't do bar-compliant intake design. |
| **A state bar issues a restrictive AI-intake ethics opinion** | Medium | Guardrails-first design is already the conservative posture. Monitor CO/AZ/UT bar opinions. This risk *favors* us vs. sloppy competitors. |
| **Solo founder bandwidth collapse** | **High** | Recurring revenue + hard templating + contractor by month 4. Named as the #1 execution risk. |
| **Early churn from bad qualification** | High | The 30-day tuning window exists for exactly this. |
| **Market is redder than we know** | Medium | Never verified — two research passes failed to establish agency counts. **Competitive scan is a Phase 2 GTM task; assume red ocean until proven otherwise.** |
| **Legal was only the better-*evidenced* niche, not the better one** | Medium | Niche-agnostic golden build (§0, call 2) means a pivot to trades costs ~2 weeks, not a rebuild. |

---

## 7. Execution Sequence

**Weeks 1–2 — Foundation**
1. Choose voice platform (Vapi vs. Retell) — timebox to 3 days, then commit
2. Entity, bank, Stripe, E&O insurance quote
3. Draft MSA + SOW (attorney-reviewed — you're selling *to* lawyers; sloppy contracts are disqualifying)
4. Write the Guardrails Spec into an actual prompt/config pack

**Weeks 3–4 — The Golden Build**
5. Build the complete reference deployment for a fictional firm
6. Run all 10 test-call scenarios; iterate until every guardrail holds
7. Stand up the public demo line + web chat widget

**Weeks 5–6 — Web presence**
8. `/for-law-firms` landing + public pricing
9. Booking flow replaces contact form as primary CTA
10. `/about` + `/trust`; extend `/ai-agents.md`

**Weeks 7–8 — Operating system**
11. ClickUp Sales Pipeline + Delivery board with templated checklists
12. Write the 4 SOPs (sales, delivery, support, admin)
13. Build the automated monthly client report
14. Assemble the sales kit: discovery agenda, proposal template, Compliance Brief template

**→ Then, and only then, Phase 2: Go-to-Market.**

---

## 8. Definition of Done — "ready to sell"

Do not start acquisition until **every** box is true:

- ☐ Anyone can call the demo line and have a competent 90-second intake conversation
- ☐ The golden build clones to a new client in **under 25 hours**
- ☐ All 8 guardrail requirements pass the regression suite
- ☐ Pricing is public on the website
- ☐ A prospect can book a call in ≤2 clicks from the landing page
- ☐ MSA + SOW are attorney-reviewed and ready to send
- ☐ E&O insurance is **bound**, not quoted
- ☐ Stripe processes both a one-time invoice and a recurring subscription
- ☐ Delivery checklist exists in ClickUp and has been dry-run end to end
- ☐ The monthly client report generates automatically

---

## 9. Open decisions — founder's call, not mine

1. **Product name.** "Imbas Intake" vs. a standalone brand. Standalone brands market better; sub-brands compound the parent. Lean sub-brand while unproven.
2. **First state: Colorado or Arizona?** Both confirmed #1/#2 in small-business AI adoption. Tiebreakers I could not verify offline: Arizona permits alternative business structures for law firms (a proxy for a more innovation-tolerant regulatory culture) and Utah runs a legal regulatory sandbox. **Verify both before weighting them** — I'm recalling this, not confirming it, and getting it wrong in front of a lawyer is expensive.
3. **Case-study pricing.** Recommend the first 2 clients at ~50% off in exchange for a written case study, a video testimonial, and a reference call. You are buying proof, and proof is currently your scarcest asset.
4. **Which statistics to publish on the site.** The missed-call figures from the research (62% missed-call rate, $1,200/call) came from *single-pass, unverified* extractions. **Do not put an unverifiable number on a page lawyers will read** — they are professionally trained to check citations, and one bad stat destroys the credibility the rest of the page is building. Either verify to primary source or use the prospect's own numbers from the discovery call instead.
5. **Contractor timing.** Model says month 4. Depends on runway and how fast builds compress.
6. **Runway.** Months 1–2 generate zero revenue. Confirm this phase is fundable before starting it.

---

## 10. What this plan deliberately does not answer

Reserved for Phase 2 (GTM): how leads are generated, channel mix (SEO/GEO/paid/outbound/partnerships), the competitive scan that two research passes failed to complete, content strategy, and the bar-association/legal-tech partnership angle.

**Do not skip ahead.** Acquisition against a product you cannot deliver repeatably converts interest into refunds.
