# ClickUp Operating Structure — Imbas Solutions

Canonical spec for the ClickUp boards that run the business. **The live boards must match this
document.** If they diverge, this file wins — fix ClickUp, not the spec.

Derived from `docs/business-backbone-plan.md` §1 (tiers and prices) and §4 (the four operating
processes). Every number here comes from §1. Do not invent prices.

---

## 0. Coordinates

| Thing | ID | Notes |
|---|---|---|
| Workspace (team) | `90171432134` | |
| Space | `90176694578` | "Imbas Solutions" |
| Folder — `Imbas Operations` | `901710221958` | created live, holds all four lists |
| List — `Sales Pipeline` | `901715676764` | https://app.clickup.com/3074671/v/l/li/901715676764 |
| List — `Delivery` | `901715676765` | https://app.clickup.com/3074671/v/l/li/901715676765 |
| List — `Support` | `901715676766` | https://app.clickup.com/3074671/v/l/li/901715676766 |
| List — `Admin` | `901715676767` | https://app.clickup.com/3074671/v/l/li/901715676767 |

> The `/3074671/` segment in list URLs is an artifact of the API token's home workspace. The lists
> themselves live in space `90176694578`. Navigate from the space, not from these URLs, if a link
> misbehaves.

### What is live vs. what needs ten minutes in the UI

**Live now (created via API):** the folder, all four lists with their full descriptions, and five
seed tasks — one process template per list plus twelve Admin runbook items.

**Not creatable via the ClickUp v2 API — must be set in the UI (or by `bootstrap.ts`, which tries
and reports):**

1. **Custom statuses.** The v2 API has no endpoint to define statuses on a list. All four lists
   currently inherit the space defaults: `to do` → `in progress` → `complete`
   (`p90176694578_mLhSNFPV` / `p90176694578_6jjxuiaJ` / `p90176694578_wKkWWMeO`).
   Fix per list: **List `···` menu → Statuses → Use custom statuses**, then enter the sets in §1–§4
   below in order.
2. **Custom fields.** The MCP surface exposes only field *reads*. `bootstrap.ts` attempts
   `POST /v2/list/{list_id}/field` and falls back to printing manual instructions if the account or
   API version rejects it.

Each list's ClickUp description already carries its own status set and field list, so the
instructions are visible at the point of use, not only in this file.

---

## 1. List: `Sales Pipeline` — `901715676764`

One task per prospect firm. Move left to right; never skip a stage.

### Statuses (in order) — §4A

| # | Status | Type | Meaning |
|---|---|---|---|
| 1 | New Inquiry | open | Inbound landed. Nothing verified yet. |
| 2 | Qualified | active | All five gate criteria cleared. |
| 3 | Discovery Booked | active | Cal.com hold exists. |
| 4 | Discovery Held | active | 45-minute agenda run; their numbers captured. |
| 5 | Proposal Sent | active | One page, within 24h. |
| 6 | Verbal Yes | active | Said yes. Nothing signed. |
| 7 | Contract Sent | active | MSA + SOW out. |
| 8 | Deposit Paid | active | 50% received → open the Delivery task. |
| 9 | Won / Lost | closed | Terminal. Record the loss reason. |

### Custom fields

| Field | Type | Options / config |
|---|---|---|
| Tier | dropdown | `Intake Core`, `Intake Pro`, `Firm OS` |
| Build Fee | currency | USD, precision 0 |
| MRR | currency | USD, precision 0 |
| Practice Areas | labels (multi-select) | `Personal Injury`, `Family`, `Criminal`, `Immigration`, `Estate`, `Employment`, `Bankruptcy`, `Other` |
| Jurisdiction | text | State / metro, e.g. `CO — Denver` |
| Firm Size | number | Attorney count. Gate is ≤20. |
| Lead Source | dropdown | `Referral`, `Organic Search`, `AI Assistant / GEO`, `Outbound`, `Bar Association`, `Demo Line`, `Other` |

### Qualification gate — §4A

Encoded twice on purpose: in the list description and in the template task, because it protects the
founder's calendar and belongs in the tool, not in a doc. All five must be true before a discovery
call is booked. A "no" on any line is a polite decline, not a nurture sequence.

- Solo or firm ≤20 attorneys
- Consumer-facing practice area with inbound phone leads (PI, family, criminal, immigration,
  estate, employment). B2B/transactional firms are a poor fit — they don't run on inbound calls.
- Currently missing calls or paying an answering service
- Can decide without a committee
- Budget ≥ $4,500

### Tier pricing — §1, verbatim

| | Intake Core | **Intake Pro** ← target | Firm OS |
|---|---|---|---|
| Build | $4,500 | $12,000 | $25,000+ |
| Care plan | $350/mo | $750/mo | $1,500/mo |
| Delivery | 1 week | 2–3 weeks | 4–6 weeks |
| For | Solo, 1 practice area | Solo/small, 2–4 areas | 5–20 attorneys |

All three tiers: missed-call text-back, web chat intake agent, calendar booking, lead summary to
attorney.
Pro and Firm OS add: 24/7 AI voice receptionist, Clio/MyCase integration, conflict-check data
capture, custom qualification per practice area, Spanish/English bilingual intake.
Firm OS alone adds: document intake automation, internal knowledge base, multi-attorney routing.

**Payment terms:** 50% deposit to start, 50% on go-live. Care plan begins at go-live, billed
monthly, 3-month minimum then month-to-month.

### Seed task

`[TEMPLATE] New Prospect — qualification gate` — `86e2jfktz` — carries the gate, the 45-minute
discovery agenda, the proposal rule, the tier table, and the close steps.

---

## 2. List: `Delivery` — `901715676765`

One task per client, subtasks from the template. Every build follows the identical checklist.
**No bespoke builds.**

### Statuses (in order) — §4B phases

| # | Status | Type | Window |
|---|---|---|---|
| 1 | Kickoff | open | day 0–2 |
| 2 | Build | active | day 3–10 |
| 3 | QA | active | day 11–12 |
| 4 | Handoff | active | day 13–15 |
| 5 | Tuning | active | day 15–45 |
| 6 | Complete | closed | — |

### Custom fields

| Field | Type | Options / config |
|---|---|---|
| Go-Live Date | date | Set at kickoff. Triggers the 50% balance and starts the care plan. |
| Tier | dropdown | `Intake Core`, `Intake Pro`, `Firm OS` |
| Build Hours | number | Actual hours. Target ≤40 on build #1, ≤25 by build #4. |
| PM System | dropdown | `Clio`, `MyCase`, `Other`, `None` |

**Build Hours is the health metric for the whole company.** §5: "If build time isn't dropping, the
golden build isn't good enough — stop selling and fix it." Log it every build or the signal is lost.

### Task template — §4B verbatim

Seed task `[TEMPLATE] New Client Build` — `86e2jfkq7`. Duplicate per client, rename to the firm,
set Tier / Go-Live Date / PM System.

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
  ☐ Record + review 10 test calls covering:
      ☐  1. happy path
      ☐  2. wrong practice area
      ☐  3. out of jurisdiction
      ☐  4. seeking legal advice
      ☐  5. distress escalation
      ☐  6. conflict-party named
      ☐  7. after-hours
      ☐  8. Spanish
      ☐  9. hostile caller
      ☐ 10. ambiguous

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

> The 30-day tuning window is not optional. The #1 churn cause for this product is an agent that
> books bad leads in week one. Budget the hours.

### The 8 guardrail spec items the QA line refers to — §1

1. **Disclose on first contact** — "I'm an AI assistant for [Firm]. I'm not an attorney and can't
   give legal advice."
2. **Never give legal advice.** Hard-refuse and route to human on any question seeking legal
   conclusions. Maintain an explicit refusal list per practice area.
3. **Never form an attorney-client relationship.** Scripted language: no representation until the
   firm accepts the matter in writing.
4. **Capture conflict-check data, never decide.** Collect adverse party names + matter description;
   the *firm* runs the check. The AI must never clear a conflict.
5. **Escalate on distress.** Domestic violence, criminal detention, suicidal ideation, imminent
   deadlines → immediate human handoff path + emergency resources.
6. **Statute-of-limitations caution.** Never estimate deadlines. Flag urgency, route to human.
7. **Data handling, documented per firm:** where recordings/transcripts live, retention window
   (recommend 30–90 days default), encryption at rest/in transit, deletion on request, subprocessor
   list.
8. **Full audit log.** Every conversation retrievable. This is what a bar complaint or malpractice
   carrier will ask for.

> The guardrails spec itself is owned by another workstream (`guardrails/`). It is reproduced here
> only as the QA acceptance criteria. If the two ever disagree, `guardrails/` wins.

---

## 3. List: `Support` — `901715676766`

Protects the MRR, which is the whole business. One task per incident, change request, or scheduled
tune-up.

### Statuses (in order)

| # | Status | Type |
|---|---|---|
| 1 | New | open |
| 2 | Triaged | active |
| 3 | In Progress | active |
| 4 | Waiting on Client | active |
| 5 | Resolved | closed |

### Custom fields

| Field | Type | Options / config |
|---|---|---|
| Severity | dropdown | `P1 — Agent Down`, `P2 — Degraded`, `P3 — Question`, `P4 — Change Request` |
| SLA Due | date | Set at triage from the table below. **A ticket without an SLA Due date is untriaged.** |
| Client | text | Firm name. Upgrade to a relationship field pointing at `Delivery` once clients exist. |

### Escalation SLA — §4C

| Severity | Definition | Response due |
|---|---|---|
| P1 — Agent Down | Calls unanswered, agent erroring mid-call, bookings not writing | **4 business hours** |
| P2 — Degraded | Agent up but mis-qualifying, delayed notifications, partial integration | 2 business days |
| P3 — Question | Client question, training, reporting | 2 business days |
| P4 — Change Request | Config change | 2 business days |

Publish it. It is a differentiator against a solo competitor who publishes nothing.

**Change requests:** minor (≤1hr) included in the care plan; larger scoped as a mini-SOW, which
moves to `Sales Pipeline`.

### Recurring cadence — §4C

- **Monthly performance report, automated, sent on the 1st:** calls answered, consults booked,
  after-hours captured, estimated value recovered. One page. This report is the renewal argument —
  it makes the invoice obviously worth paying.
- **Quarterly tune-up call**, included in the care plan. One recurring task per active client, set
  to repeat quarterly from go-live. Drives retention and surfaces Firm OS upgrades.

### Seed tasks

- `[TEMPLATE] Support Ticket — SLA` — `86e2jfkuq` — severity table, triage steps, P1 runbook.
- `[TEMPLATE] Quarterly Tune-Up Call` — `86e2jfkvd` — the retention agenda.

---

## 4. List: `Admin` — `901715676767`

Founder-gated runbook. Nothing in this list can be delegated to an agent or a contractor.

### Statuses (in order)

| # | Status | Type |
|---|---|---|
| 1 | To Do | open |
| 2 | In Progress | active |
| 3 | Blocked | active |
| 4 | Done | closed |

### Custom fields (optional but recommended)

| Field | Type | Options |
|---|---|---|
| Category | dropdown | `Entity`, `Banking`, `Payments`, `Insurance`, `Legal`, `Infrastructure`, `Finance` |
| Gate | dropdown | `Blocks first client`, `Blocks launch`, `Ongoing` |

### Seed tasks — twelve, all live

| Task | ID | §4D / §7 anchor |
|---|---|---|
| Form the LLC | `86e2jfkq8` | Entity. Blocks everything else. |
| Open business bank account + business card | `86e2jfkqc` | "Do not co-mingle." |
| Set up Stripe — invoices + subscriptions | `86e2jfkqg` | Invoices for builds, subscriptions for care plans, automated dunning. |
| Bind E&O / professional liability insurance | `86e2jfkqm` | **Bound, not quoted.** Hard gate on the first client. |
| Attorney review of MSA + SOW | `86e2jfkqq` | Five required MSA clauses. |
| Purchase / confirm domain | `86e2jfkqt` | §3 — keep `imbas.solutions`, funnel at `/for-law-firms`. |
| Decide: Vapi vs. Retell — timebox 3 days | `86e2jfkr0` | §5/§7 — pick one, never revisit. |
| Provision Twilio account + demo line number | `86e2jfkr2` | A2P 10DLC starts early; it gates text-back. |
| Set up Cal.com — booking flow + discovery call type | `86e2jfkrv` | §3⑥ — book in ≤2 clicks. |
| Verify sending domain in Resend | `86e2jfkt1` | SPF/DKIM/DMARC. Spam-foldered lead summaries are a week-one churn event. |
| Vercel: set Root Directory to `apps/imbas-solutions` | `86e2jfkt4` | Monorepo move; production deploys break without it. |
| Start monthly bookkeeping | `86e2jfkt7` | Chart of accounts must split build vs. recurring revenue. |

### Standing rules — §4D

- **Entity + banking:** LLC, separate business account, separate card. Do not co-mingle.
- **Payments:** Stripe — invoices for builds, subscriptions for care plans. Automate dunning; do not
  chase failed cards by hand.
- **Contracts:** MSA (once per client) + SOW (per engagement). The MSA must contain: liability cap
  at fees paid, no-legal-advice acknowledgment, client owns their data, defined data-retention
  terms, mutual confidentiality.
- **Insurance:** E&O / professional liability, obtained *before* the first client.
- **Bookkeeping:** monthly, from month one.

> Contract drafting itself is owned by the `legal/` workstream. `Admin` tracks the founder actions
> around it (engage the attorney, get it reviewed, get it signable) — not the document text.

---

## 5. Cross-list flow

```
Sales Pipeline: Deposit Paid
        │
        ▼
Delivery: new task from [TEMPLATE] New Client Build   (set Tier, Go-Live Date, PM System)
        │
        ▼  Complete
Support: recurring quarterly tune-up task + monthly report on the 1st
        │
        └── change request >1hr ──► back to Sales Pipeline as a mini-SOW
```

`Admin` is orthogonal — it gates whether the flow may start at all. Do not take a deposit before
**Form the LLC**, **business bank account**, **Stripe**, **E&O bound**, and **attorney-reviewed
MSA + SOW** are all Done.

---

## 6. Reproducing this structure

Three routes, in order of preference.

1. **`bootstrap.ts`** — idempotent, creates folder + lists + custom fields + seed tasks from a
   `CLICKUP_TOKEN`. Checks for an existing list by name before creating, so re-running is safe.
   ```
   export CLICKUP_TOKEN=pk_...
   npx tsx ops/clickup/bootstrap.ts
   ```
   Add `--dry-run` to print the plan without writing.

2. **CSV import** — `ops/clickup/import/*.csv`, one file per list, shaped for the ClickUp task
   importer (**Settings → Import/Export → ClickUp Task Importer → CSV**). Columns:
   `Task Name`, `Description`, `Status`, `Priority`, `Parent Task`, `Tags`. Hierarchy is expressed
   by `Parent Task` matching another row's `Task Name` in the same file. Import into an existing
   list; the importer will not create statuses or custom fields.

3. **By hand from this document.** Everything needed is above.

Whichever route: **statuses and custom fields still need the UI pass described in §0.** That is a
ClickUp API limitation, not an oversight.
