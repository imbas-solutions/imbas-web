# Practice-Area Refusal Taxonomies

One YAML file per practice area. Each file tells the intake agent, for that area:
what it **should** ask, what it must **refuse**, what must **interrupt** the flow,
what it must **never say**, what adverse-party data to **capture**, and what makes a
lead **urgent**.

This directory implements items 2, 3, 4, 5 and 6 of the Guardrails Spec
(`docs/business-backbone-plan.md` §1). It is the layer a generic AI-receptionist
vendor will not build, and the thing a bar complaint or a malpractice carrier will
ask to see.

```
refusals/
  README.md
  personal-injury.yaml
  family.yaml
  criminal.yaml
  immigration.yaml
  estate.yaml
  employment.yaml
```

---

## The rule these files exist to enforce

The dangerous question does not sound dangerous. "Do I have a case?" sounds like
intake. Answering it is legal advice. Every entry in `hard_refusals` is a question
that a caller asks in an ordinary voice and that the agent may never answer.

Three failure modes this guards against:

1. **UPL / legal advice** — the agent states a legal rule, applies law to the
   caller's facts, or predicts an outcome.
2. **Reliance and implied representation** — the caller hangs up believing the firm
   has their case, or believing the call was privileged.
3. **Conflicts** — the agent decides, rather than captures. The agent must never
   clear a conflict, and must never reveal that one may exist.

---

## File format

Every file has the same six required blocks plus a header. Do not add blocks
without also updating this README and the regression suite.

### Header

```yaml
practice_area: personal-injury      # matches the filename
version: 1
status: draft                       # draft | attorney_reviewed | production
attorney_review:
  reviewed_by: null
  reviewed_on: null
languages: [en, es]
```

No file may go to `production` without a named reviewing attorney. `status: draft`
is a hard gate in the deployment checklist.

### 1. `safe_to_ask`

Grouped question sets the agent is cleared to ask. Purely factual capture — dates,
names, documents, what happened, what the caller already did. Fields:

| key | meaning |
|---|---|
| `group` | logical section of the intake (e.g. `incident_basics`) |
| `questions` | the actual spoken questions, in intake order |
| `capture_as` | field names written to the lead record |
| `notes` | optional handling guidance |

Rule of thumb: if the answer belongs in the attorney's notes, it is safe to ask.
If the answer requires the agent to *evaluate* anything, it is not.

### 2. `hard_refusals`

The core asset. Each entry:

| key | meaning |
|---|---|
| `id` | stable id, `<area-prefix>-NN`. Never reuse or renumber. |
| `topic` | short slug for analytics and eval labelling |
| `category` | one of `legal_advice`, `upl`, `sol_estimate`, `valuation`, `conflict_decision`, `representation`, `outcome_prediction`, `document_interpretation`, `fee_quote`, `records_lookup` |
| `caller_phrasings` | how real, stressed people actually say it. Used to build the classifier and the eval set. Not exhaustive by design — the classifier generalises; these are the anchors. |
| `why` | the one-line reason this is a refusal. Goes in the Compliance Brief. |
| `script.en` / `script.es` | the **exact words spoken**. See "Writing scripts" below. |
| `route` | what happens after (see routing vocabulary) |

### 3. `escalate_immediately`

Area-specific distress and urgency signals that override normal flow. The agent
stops qualifying and gets a human involved. Each entry has `signal`,
`caller_phrasings` (where useful), `agent_behaviour`, `script`, and `handoff`.

Escalation always wins. If an escalation trigger and a refusal trigger fire on the
same utterance, the escalation script runs and the refusal is skipped.

### 4. `never_say`

Literal phrases and phrase-shapes that must never appear in the agent's output for
this area. Enforced two ways: in the system prompt, and as a post-generation string
and pattern check in the voice pipeline. Includes the near-misses — the phrases
that sound helpful and supportive and are, in fact, legal advice.

### 5. `conflict_signals`

What to capture as adverse-party information in this area, and how. Every file
carries the same `handling` block: **the AI captures, the firm decides.** The agent
never clears a conflict, never tells a caller whether one exists, and never hints
that the firm may already be involved — that disclosure is itself a problem.

### 6. `urgency_flags`

Situations that route the lead as urgent. The agent flags urgency and **never
estimates a deadline**, never names a time period, never says whether the caller is
"still in time."

---

## Routing vocabulary

Used by the `route` and `handoff` keys. Consumed by the orchestration layer.

| value | behaviour |
|---|---|
| `standard_booking` | refusal script, then continue intake and book the consult |
| `priority_booking` | as above, but the lead is flagged for same-day attorney contact |
| `urgent_callback` | stop qualifying at the next natural break, notify the on-call human immediately |
| `warm_transfer` | attempt live transfer now; if no human answers, take a safe callback and page |
| `emergency_services` | direct the caller to emergency services or a crisis line **first**, then handle the matter |
| `stop_intake` | end fact-gathering; take contact details only |

---

## Writing scripts

Scripts are **spoken on a phone to someone having a bad day.** Write them to be
said, not read.

- Short sentences. One idea each.
- Warm first, boundary second, redirect third. Never lead with the refusal.
- Name the boundary in the first person: *"I'm not able to answer that"* — not
  *"the firm is unable to provide legal advice at this time."*
- Always give the caller something. A refusal that ends in a dead stop reads as
  evasion. Every script ends in an action: the attorney will answer this, let me
  get you booked, let me get you to a person.
- Never imply the firm has taken the matter. No "your case," no "we'll handle it,"
  no "our client."
- Never apologise more than once in a script. It sounds like bad news.
- Spanish is a peer script, not a translation. Formal `usted` throughout. It must
  sound like a person, not a subtitle.

### Content rules for scripts

Scripts may **not** contain: legal rules, deadlines or time periods, damages
figures or ranges, jurisdiction-specific requirements, eligibility criteria, or
procedural instructions. Not even as illustration. If routing genuinely needs a
piece of legal context, it goes in a `notes:` field as an internal routing note,
never spoken, and is prefixed `VERIFY:` for attorney review.

---

## Adding a new practice area

1. Copy the closest existing file. `personal-injury.yaml` is the fullest template;
   `family.yaml` is the template for anything with a safety dimension.
2. Pick a two-or-three-letter id prefix that is not already in use
   (`pi`, `fam`, `crim`, `imm`, `est`, `emp`).
3. Rewrite `safe_to_ask` first. It defines what the product is *for* in this area.
   Get it from a real attorney's actual intake sheet, not from imagination.
4. Write `hard_refusals` by walking the intake and asking, at every step, *"what
   would a scared caller ask me right here?"* Target 20+. Under 15 means the area
   has not been thought through.
5. Add `es:` scripts wherever the area serves Spanish-speaking callers. All six
   current areas do.
6. Sweep `never_say` for the *helpful-sounding* phrases. The obvious ones are easy;
   the near-misses are what actually get said.
7. Add the file to the guardrails regression suite and write at least one eval call
   per `hard_refusals` category.
8. Send to the reviewing attorney. Do not deploy at `status: draft`.

## Per-firm overrides

These files are the golden-build default. A firm may **tighten** them in its own
config — never loosen them. Two keys are expected to be overridden per firm and are
marked in the files where they occur:

- fee and cost questions (`category: fee_quote`) — a firm may authorise the agent
  to state a published fee structure verbatim.
- the data-handling reassurance used when a caller asks whether the call is safe or
  private (immigration and employment especially) — the wording must match that
  firm's actual retention and disclosure practice.

Any override is recorded in the firm's AI Intake Compliance Brief.
