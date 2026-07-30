> # DRAFT — NOT FOR EXECUTION. Requires review by a licensed attorney before use.
>
> This document was assembled from an internal business plan by a non-lawyer. It has
> not been reviewed by counsel, is not legal advice, and must not be sent to a
> prospect, signed, or relied upon in any form until a licensed attorney in the
> governing jurisdiction has reviewed it. See `ATTORNEY-REVIEW-CHECKLIST.md` for the
> clause-by-clause list of open questions.

---

# MASTER SERVICES AGREEMENT

**Provider:** [PROVIDER LEGAL ENTITY NAME], a [STATE] limited liability company
([PROVIDER SHORT NAME]), with offices at [PROVIDER NOTICE ADDRESS]
*(Note: the entity has not been formed and the product sub-brand is not final.
Any trade name used in marketing must be reconciled with the legal entity name
before execution.)*

**Client:** [CLIENT LEGAL NAME], a [STATE] [ENTITY TYPE], with offices at
[CLIENT NOTICE ADDRESS]

**Effective Date:** [EFFECTIVE DATE]

Provider and Client are each a "**Party**" and together the "**Parties**."

---

## 1. Definitions

Capitalized terms have the meanings given below. Terms defined elsewhere in this
Agreement have the meanings given where they appear.

**1.1 "Agreement"** means this Master Services Agreement together with all exhibits,
each executed SOW, and the DPA.

**1.2 "Agent Down"** means a verified condition in which the Intake System is not
answering inbound calls or chats, or is not writing bookings to Client's calendar,
in each case for reasons within Provider's reasonable control. See Exhibit A.

**1.3 "Business Day"** means Monday through Friday, excluding federal holidays and
holidays observed in [STATE].

**1.4 "Business Hours"** means 9:00 a.m. to 5:00 p.m. [TIME ZONE] on a Business Day.

**1.5 "Care Plan"** means the ongoing support, hosting, monitoring, tuning, and
reporting services described in Section 4 and Exhibit A, billed monthly.

**1.6 "Client Configuration"** means the Client-specific settings, content, and
parameters implemented in the Intake System for Client, including Client's firm
profile, practice-area definitions, qualification criteria, routing and escalation
rules, business hours, intake scripts and approved language, refusal lists, calendar
rules, and branding. Client Configuration does not include the Platform.

**1.7 "Client Data"** means all data, content, and records that Client, Client's
personnel, or any Prospective Client submits to, generates within, or transmits
through the Intake System, including Prospective Client Information, call
recordings, transcripts, chat logs, intake summaries, audit logs, and booking
records. Client Data does not include Platform telemetry that contains no Client
Configuration and no Prospective Client Information.

**1.8 "Client Materials"** means the information, credentials, access, approvals, and
decisions Client is required to provide under Section 5 and the applicable SOW.

**1.9 "Deliverables"** means the items identified as deliverables in an SOW.

**1.10 "Deposit"** means the fifty percent (50%) portion of the Implementation Fee
payable on execution of an SOW.

**1.11 "DPA"** means the Data Processing Addendum executed by the Parties and
incorporated into this Agreement.

**1.12 "Fees"** means the Implementation Fee, the Care Plan Fee, and any other
amounts payable under an SOW.

**1.13 "Go-Live"** means the date on which the Intake System is first placed into
production use to handle live inquiries for Client, as determined under Section 6.4.

**1.14 "Implementation Fee"** means the fixed build fee stated in an SOW.

**1.15 "Intake System"** means the instance of the Platform configured with the
Client Configuration and operated for Client under an SOW.

**1.16 "Platform"** means Provider's underlying intake technology, including its
reference implementation (the "golden build"), source code, workflows, orchestration
logic, prompt and guardrail libraries, templates, integration connectors, testing and
regression suites, documentation, methodologies, and know-how, together with all
modifications, improvements, and derivative works thereof, in each case excluding
Client Configuration and Client Data.

**1.17 "Professional Rules"** means the rules of professional conduct, ethics
opinions, advertising and solicitation rules, unauthorized-practice-of-law rules,
confidentiality obligations, and any other regulatory or licensing requirements
applicable to Client and to Client's attorneys in every jurisdiction in which they
are licensed or practice.

**1.18 "Prospective Client"** means any individual or entity that contacts Client, or
is contacted by Client, through the Intake System.

**1.19 "Prospective Client Information"** means information relating to a Prospective
Client obtained through the Intake System, including identity and contact details,
the substance of the inquiry, the described matter, named adverse parties, and any
recording or transcript of the interaction.

**1.20 "Provider Materials"** means the Platform and all other materials, tools, and
intellectual property owned or licensed by Provider and used in performing the
Services, excluding Client Configuration and Client Data.

**1.21 "Retention Period"** means the period for which categories of Client Data are
retained in the Intake System, as elected in the applicable SOW under Section 9.

**1.22 "Services"** means the implementation services, the Care Plan, and any other
services described in an SOW.

**1.23 "SOW"** means a Statement of Work executed by both Parties under Section 2.

**1.24 "Tier"** means the product tier (Intake Core, Intake Pro, or Firm OS) selected
in an SOW.

---

## 2. Structure of the Agreement

**2.1 Framework.** This Agreement establishes the terms governing all Services. It
does not by itself obligate Provider to perform, or Client to purchase, any Services.

**2.2 Statements of Work.** Services are ordered through SOWs. Each SOW must
reference this Agreement, be signed by both Parties, and state at minimum the Tier,
the Implementation Fee, the Care Plan Fee, the Deliverables, the timeline, Client's
obligations, the acceptance criteria, the exclusions from scope, and the Retention
Period elections. On execution, each SOW is incorporated into and governed by this
Agreement.

**2.3 Order of precedence.** In the event of a conflict:

&nbsp;&nbsp;(a) the DPA controls over the SOW and this Master Services Agreement with
respect to the processing of personal data, **except** that Section 13 (Limitation of
Liability) of this Master Services Agreement controls over any inconsistent provision
of the DPA;

&nbsp;&nbsp;(b) an SOW controls over this Master Services Agreement **only** where the
SOW expressly identifies by number the Section of this Master Services Agreement it
modifies and states that it modifies it; and

&nbsp;&nbsp;(c) otherwise, this Master Services Agreement controls.

A purchase order, vendor portal terms, invoice terms, or click-through terms
submitted by either Party have no effect on this Agreement.

**2.4 Provider is not a law firm.** Provider is a technology services vendor.
Provider is not a law firm, does not practice law, and does not supervise Client's
practice. This Section 2.4 is elaborated in Section 7 and is fundamental to the
Parties' bargain.

---

## 3. Implementation Services

**3.1 Performance.** Provider will perform the implementation services described in
each SOW and deliver the Deliverables in accordance with the timeline stated in the
SOW, subject to Client's performance of its obligations under Section 5.

**3.2 Method.** Provider implements the Intake System by configuring the Platform.
Client acknowledges that Provider's delivery model is standardized and that Provider
is not obligated to perform bespoke development outside the Deliverables stated in an
SOW.

**3.3 Compliance Brief.** For each Intake Pro and Firm OS engagement, Provider will
deliver a written AI Intake Compliance Brief documenting the guardrails implemented,
the data-handling configuration, the Retention Periods, the subprocessors in use, and
the escalation paths. The Compliance Brief is a description of how the Intake System
is configured. It is not a legal opinion, an ethics opinion, a compliance
certification, or advice that the configuration satisfies any Professional Rule.

**3.4 Personnel and subcontractors.** Provider may engage subcontractors to perform
Services. Provider remains responsible for their performance and for their compliance
with Sections 10 (Confidentiality) and with the DPA, and will bind each subcontractor
with an obligation of confidentiality no less protective than Section 10 and an
assignment of intellectual property sufficient to give effect to Section 8.

---

## 4. Care Plan and Support

**4.1 Scope.** From Go-Live, Provider will provide the Care Plan for the Intake
System, comprising: hosting and operation of the Intake System; monitoring;
maintenance and platform updates; the support and response targets in Exhibit A; a
monthly performance report; a quarterly tune-up call; and minor change requests as
defined in Exhibit A.

**4.2 Service levels.** Provider's support response targets are set out in Exhibit A.
Exhibit A states **response** targets, not resolution times, and does not constitute
an uptime or availability commitment. Provider does not warrant that the Intake
System will be available or error-free. See Section 12.

**4.3 Change requests.** Change requests reasonably estimated by Provider at one (1)
hour of effort or less are included in the Care Plan. Larger changes require a
written change order or a new SOW and are chargeable at Provider's then-current rates
or at a fixed fee agreed in writing.

**4.4 Third-party services.** The Intake System depends on third-party services
including telephony, voice, large-language-model, calendar, and practice-management
providers. Provider is not responsible for the acts, omissions, outages, pricing
changes, discontinuations, or terms of those providers. If a third-party service is
discontinued or materially changed, Provider will notify Client and the Parties will
work in good faith to identify a substitute; if no commercially reasonable substitute
exists, either Party may terminate the affected SOW on thirty (30) days' written
notice without penalty, and Provider will refund any prepaid, unearned Care Plan
Fees.

---

## 5. Client Obligations

**5.1 Cooperation.** Client will provide, in a timely manner, the Client Materials
identified in the applicable SOW, including the completed intake questionnaire,
practice-area and qualification criteria, routing and escalation contacts, calendar
access, and practice-management system access.

**5.2 Approval of intake language.** Before Go-Live, Client will review and approve
in writing all intake scripts, disclosure language, refusal lists, escalation
language, and any other content the Intake System communicates to Prospective
Clients. Client is solely responsible for determining that the approved content
complies with the Professional Rules. Provider will not place the Intake System into
production use before receiving Client's written approval.

**5.3 Human coverage.** Client will maintain and staff the escalation path required
by Section 7.5 and will designate at least one individual reachable during Client's
stated business hours to receive escalations from the Intake System.

**5.4 Accuracy and authority.** Client represents that it has the authority to grant
Provider access to the systems and accounts it provides, and that the Client
Materials are accurate and do not infringe or misappropriate the rights of any third
party.

**5.5 Delay attributable to Client.** Provider's timeline commitments are conditioned
on Client's timely performance. If Client fails to provide Client Materials or an
approval within the period stated in the SOW, the schedule extends day-for-day.
Delays attributable to Client are addressed in Section 6.5.

---

## 6. Fees and Payment

**6.1 Implementation Fee.** The Implementation Fee is fixed and is payable
fifty percent (50%) as a Deposit on execution of the SOW and fifty percent (50%) at
Go-Live. Provider is not obligated to begin work before the Deposit is received.

**6.2 Care Plan Fee.** The Care Plan Fee begins on Go-Live and is billed monthly in
advance. Client commits to a minimum of three (3) consecutive monthly billing periods
from Go-Live. After the minimum commitment, the Care Plan continues month-to-month
until either Party terminates it on thirty (30) days' written notice effective at the
end of a billing period.

**6.3 Deposit.** The Deposit is non-refundable once Provider has commenced work,
except where Client terminates the SOW under Section 14.3 for Provider's uncured
material breach, in which case Provider will refund the portion of the Deposit
allocable to Deliverables not delivered.

**6.4 Go-Live.** Go-Live occurs on the date the Intake System is first placed into
production use to handle live inquiries for Client.

**6.5 Deemed Go-Live.** If the Intake System has satisfied the acceptance criteria in
the SOW and Provider has notified Client in writing that it is ready for production
use, and Client does not place it into production use within fifteen (15) Business
Days of that notice for reasons not attributable to Provider, then Go-Live is deemed
to have occurred on the fifteenth Business Day, the remaining fifty percent (50%) of
the Implementation Fee becomes payable, and Care Plan billing begins.

**6.6 Invoicing and payment.** Invoices are payable net fifteen (15) days from the
invoice date unless the SOW states otherwise. Payment is made through Provider's
payment processor. Client is responsible for maintaining a valid payment method for
Care Plan billing.

**6.7 Late payment.** Undisputed amounts not paid when due accrue interest at the
lesser of one and one-half percent (1.5%) per month or the maximum rate permitted by
applicable law. If an undisputed amount is more than fifteen (15) days past due,
Provider may, on written notice, suspend the Services until payment is received.
Suspension under this Section does not relieve Client of its payment obligations and
does not constitute a breach by Provider. **Provider will not suspend the Services
without first giving Client at least five (5) Business Days' written notice, so that
Client may arrange alternative coverage for inbound inquiries.**

**6.8 Disputed amounts.** Client may withhold an amount it disputes in good faith if
it notifies Provider in writing of the basis for the dispute before the due date and
pays all undisputed amounts. The Parties will resolve the dispute promptly and in
good faith.

**6.9 Usage.** Usage allowances and any overage charges (for example, telephony
minutes or message volume) are stated in the SOW. Absent a stated allowance, usage is
included in the Care Plan Fee, provided that if Client's usage exceeds one hundred
fifty percent (150%) of the average monthly usage over the preceding three months,
the Parties will negotiate in good faith an adjustment to the Care Plan Fee effective
no earlier than thirty (30) days after Provider's written notice.

**6.10 Taxes.** Fees are exclusive of sales, use, and similar taxes. Client is
responsible for such taxes other than taxes on Provider's net income.

**6.11 Expenses.** Provider will not incur reimbursable expenses without Client's
prior written approval.

---

## 7. No Legal Advice; Professional Responsibility

**This Section is a material inducement to Provider's entry into this Agreement and
survives termination.**

**7.1 Nature of the Intake System.** The Intake System is an automated communications,
qualification, scheduling, and record-keeping tool. It uses artificial intelligence,
including large language models, to conduct conversations with Prospective Clients
according to the Client Configuration. Client acknowledges that outputs of such
systems are probabilistic, may be incomplete or incorrect, and may vary between
otherwise similar interactions.

**7.2 No legal advice.** Client acknowledges and agrees that:

&nbsp;&nbsp;(a) the Intake System does not provide legal advice, legal opinions, or
legal conclusions, and is configured to refuse to do so and to route such requests to
a human;

&nbsp;&nbsp;(b) neither Provider nor the Intake System evaluates the merits of any
matter, advises any Prospective Client, or represents any person;

&nbsp;&nbsp;(c) Provider is not a law firm, is not licensed to practice law, does not
practice law, and provides no legal advice to Client, to any Prospective Client, or to
any other person in connection with this Agreement or the Services; and

&nbsp;&nbsp;(d) no statement by Provider, in the AI Intake Compliance Brief or
otherwise, concerning the Professional Rules, data retention, confidentiality, or
regulatory matters is legal advice, and Client will not treat it as such.

**7.3 No attorney–client relationship.** Client acknowledges and agrees that:

&nbsp;&nbsp;(a) no attorney–client relationship is formed between Client and any
Prospective Client by reason of any interaction with the Intake System, and the Intake
System is configured to state that no representation exists until Client accepts the
matter in writing;

&nbsp;&nbsp;(b) no attorney–client relationship exists between Provider and Client,
between Provider and any Prospective Client, or between Provider and any other person;
and

&nbsp;&nbsp;(c) Client is solely responsible for determining whether and when to form
an attorney–client relationship, and for communicating that determination.

**7.4 Conflicts of interest.** The Intake System captures conflict-check data,
including named adverse parties and matter descriptions, and presents that data to
Client. **The Intake System does not run conflict checks, does not clear conflicts,
and does not decline matters on conflict grounds.** Client is solely responsible for
running conflict checks and for all conflict determinations. Client will not rely on
the Intake System, on any Intake System record, or on Provider for conflict clearance.

**7.5 Escalation and urgent matters.** The Intake System is configured to escalate
certain categories of interaction to a human, including indications of domestic
violence, criminal detention, expressions of self-harm, and asserted imminent
deadlines. Client acknowledges that (a) automated detection of such categories is
imperfect and will produce both false negatives and false positives, (b) the Intake
System is not an emergency service, and (c) Client is solely responsible for
maintaining a staffed escalation path and for responding to escalated interactions.

**7.6 Deadlines.** The Intake System does not calculate, estimate, confirm, or
calendar any statute of limitations, filing deadline, or other legal deadline, and is
configured to refuse to do so. Client will not rely on the Intake System for any
deadline determination.

**7.7 Client's professional obligations.** Client is and remains solely responsible
for compliance with all Professional Rules, including without limitation obligations
concerning:

&nbsp;&nbsp;(a) confidentiality and the protection of information relating to
prospective and current clients;

&nbsp;&nbsp;(b) conflicts of interest and conflict clearance;

&nbsp;&nbsp;(c) the unauthorized practice of law, including by nonlawyers and
automated systems used in Client's practice;

&nbsp;&nbsp;(d) the supervision of nonlawyer assistance, including technology and
vendors used in Client's practice;

&nbsp;&nbsp;(e) attorney advertising, solicitation, and communications concerning
Client's services, including all content the Intake System communicates to
Prospective Clients;

&nbsp;&nbsp;(f) competence, diligence, and communication with clients and prospective
clients;

&nbsp;&nbsp;(g) recording of telephone or electronic communications and any notice or
consent required by applicable law in every jurisdiction from which Prospective
Clients may contact Client; and

&nbsp;&nbsp;(h) any notification obligation arising from a security incident.

**7.8 Review, supervision, and human oversight.** Client will review the Intake System
in operation, including transcripts and intake summaries, with the frequency Client
determines is necessary to discharge its obligations under Section 7.7, and will
notify Provider promptly of any output Client considers non-compliant. Client
acknowledges that Provider cannot, and does not, supervise Client's practice or
substitute for Client's professional judgment.

**7.9 No assumption of Client's obligations.** Nothing in this Agreement transfers to
Provider, or causes Provider to assume, any of Client's professional, ethical,
fiduciary, or regulatory obligations. Provider owes no duty to any Prospective Client
and this Agreement creates no third-party beneficiary rights in any Prospective
Client.

---

## 8. Intellectual Property

**8.1 Provider Materials.** As between the Parties, Provider owns and retains all
right, title, and interest, including all intellectual property rights, in and to the
Provider Materials, including the Platform. Nothing in this Agreement transfers or
assigns any ownership interest in the Provider Materials to Client. This is true
regardless of whether Provider developed, refined, or extended any element of the
Platform in the course of performing Services for Client.

**8.2 Client Configuration and Client Data.** As between the Parties, Client owns and
retains all right, title, and interest, including all intellectual property rights,
in and to the Client Configuration and the Client Data. Provider claims no ownership
in either.

**8.3 The boundary, stated plainly.** Client owns *what the Intake System says and
knows about Client's firm and Client's matters, and everything the Intake System
collects.* Provider owns *the system that says and collects it.* Two examples, for
the avoidance of doubt:

&nbsp;&nbsp;(a) the list of Client's practice areas, Client's qualification questions,
Client's approved intake script, Client's routing rules, and every recording,
transcript, summary, and audit log generated for Client are Client Configuration or
Client Data and belong to Client; and

&nbsp;&nbsp;(b) the underlying workflows, orchestration logic, generic guardrail and
refusal-list templates, integration connectors, regression suites, and reference
implementation into which those items are loaded are Provider Materials and belong to
Provider, and Client receives a license to use them, not ownership of them.

**8.4 License to Client.** Subject to Client's payment of the Fees and compliance with
this Agreement, Provider grants Client a non-exclusive, non-transferable,
non-sublicensable, worldwide right to access and use the Intake System, including the
Platform elements embodied in it, for Client's internal business purposes during the
term of the applicable SOW.

**8.5 License to Provider.** Client grants Provider a non-exclusive, worldwide,
royalty-free license to host, copy, transmit, display, and otherwise process the
Client Configuration and Client Data solely as necessary to provide the Services, to
comply with law, and as permitted by the DPA. This license terminates on deletion of
the Client Data under Section 15.

**8.6 Restrictions.** Client will not, and will not permit any third party to, (a)
reverse engineer, decompile, or disassemble the Platform except to the extent that
restriction is unenforceable under applicable law, (b) copy, modify, or create
derivative works of the Platform, (c) resell, sublicense, or provide the Intake System
as a service to third parties, or (d) use the Platform to build a competing product.

**8.7 No training on Client Data.** Provider will not use Client Data to train,
fine-tune, or otherwise improve any machine-learning model, and will configure the
subprocessors listed in the DPA so that they do not do so, to the extent those
subprocessors offer that configuration. Provider's obligation under this Section is
addressed further in the DPA.

**8.8 Aggregate and de-identified data.** Provider may compile aggregated,
de-identified operational metrics (for example, call volumes, response latency, and
booking rates) and use them to operate, secure, benchmark, and improve the Platform,
**provided** that such metrics contain no Prospective Client Information, no Client
Configuration, no content of any communication, and nothing that identifies or could
reasonably be used to identify Client, any Prospective Client, or any matter. Provider
will not publish or disclose such metrics in any form attributable to Client without
Client's prior written consent.

**8.9 Feedback.** If Client provides suggestions or feedback concerning the Platform,
Provider may use them without restriction or obligation, provided Provider does not
identify Client as the source.

**8.10 Residual knowledge.** Nothing in this Agreement restricts Provider's use of
general skills, knowledge, and experience gained in performing the Services, provided
Provider does not use or disclose Client's Confidential Information or Client Data in
doing so.

---

## 9. Client Data and Retention

**9.1 Ownership.** Client Data is Client's property. See Section 8.2.

**9.2 Use.** Provider will access and process Client Data only (a) to provide and
support the Services, (b) as instructed by Client in writing, (c) as required by law,
and (d) as permitted by the DPA. Provider will not sell, rent, or share Client Data,
and will not use Client Data for advertising or for any purpose other than as stated
in this Section.

**9.3 Retention Period.** Client elects the Retention Period for each category of
Client Data in the applicable SOW. Retention Periods must be between thirty (30) and
ninety (90) days for call recordings, transcripts, and chat logs. **If the SOW does
not state a Retention Period for a category, the default for that category is thirty
(30) days.**

**9.4 Audit log.** Client may elect a separate, longer retention period for the audit
log, which records the fact, time, participants, disposition, and metadata of each
interaction. Client acknowledges that a short Retention Period for recordings and
transcripts may limit Client's ability to reconstruct the substance of a past
interaction in response to a complaint, a claim, or a request from a regulator, and
that **selecting the Retention Period is Client's decision, made in light of Client's
own record-retention obligations and its insurer's requirements.** Provider makes no
recommendation as to the correct period and gives no advice on this point.

**9.5 Deletion during the term.** On Client's written request, Provider will delete
identified Client Data within ten (10) Business Days, subject to Section 15.4.

**9.6 Export.** Client may request an export of Client Data at any time during the
term, in Provider's then-standard machine-readable format, at no charge up to two (2)
requests per calendar year and at Provider's then-current rates thereafter.

**9.7 Security.** Provider will maintain the technical and organizational security
measures described in the DPA.

---

## 10. Confidentiality

**10.1 Definition.** "**Confidential Information**" means non-public information
disclosed by one Party (the "Discloser") to the other (the "Recipient") that is
identified as confidential or that a reasonable person would understand to be
confidential from its nature or the circumstances of disclosure. Client's
Confidential Information includes all Client Data, all Prospective Client
Information, and all information relating to Client's clients and matters. Provider's
Confidential Information includes the Platform, its architecture, prompt and guardrail
libraries, pricing not published by Provider, and the terms of any SOW.

**10.2 Obligations.** The Recipient will (a) use the Discloser's Confidential
Information only to perform under this Agreement, (b) protect it with at least the
degree of care it uses for its own confidential information and in no event less than
reasonable care, and (c) disclose it only to its personnel, subcontractors, and
professional advisors who need it for a permitted purpose and are bound by
confidentiality obligations no less protective than this Section.

**10.3 Exclusions.** Confidential Information does not include information that the
Recipient can document (a) was known to it without obligation of confidence before
disclosure, (b) is or becomes public through no act or omission of the Recipient, (c)
is rightfully received from a third party without obligation of confidence, or (d)
was independently developed without use of or reference to the Discloser's
Confidential Information. Clauses (a) through (d) do not apply to Prospective Client
Information.

**10.4 Compelled disclosure.** If the Recipient is required by law or legal process to
disclose Confidential Information, it will, to the extent legally permitted, give the
Discloser prompt written notice and reasonable cooperation so the Discloser may seek a
protective order, and will disclose only what is legally required. **Provider
acknowledges that Client Data may be subject to the attorney–client privilege, the
work-product doctrine, and Client's duty of confidentiality to prospective and current
clients. Provider will not voluntarily produce Client Data to any third party, and
will notify Client of any subpoena, demand, or request for Client Data before
responding, unless legally prohibited from doing so.**

**10.5 Duration.** The obligations in this Section continue for three (3) years after
termination of this Agreement, and **with respect to Prospective Client Information
and information relating to Client's clients and matters, continue indefinitely.**

**10.6 Return or destruction.** On the Discloser's request or on termination, the
Recipient will return or destroy the Discloser's Confidential Information, subject to
Section 15.4. Client Data is handled under Section 15.

---

## 11. Publicity

Neither Party may use the other's name, logo, or marks, or describe the engagement
publicly, without the other's prior written consent. Consent may be given in an SOW,
in which case the SOW governs the scope and any conditions. Consent may be withdrawn
on thirty (30) days' written notice as to future use, and the withdrawing Party
acknowledges that materials already distributed may not be recallable.

---

## 12. Warranties and Disclaimers

**12.1 Mutual.** Each Party represents and warrants that it has the authority to
enter into this Agreement and that its performance will comply with all laws
applicable to it.

**12.2 Provider warranty.** Provider warrants that it will perform the Services in a
professional and workmanlike manner consistent with generally accepted industry
practice. Client's exclusive remedy, and Provider's entire liability, for breach of
this warranty is for Provider to re-perform the deficient Services at no additional
charge, provided Client notifies Provider in writing within thirty (30) days of the
deficient performance. If Provider cannot re-perform within a reasonable period,
Provider will refund the Fees paid for the deficient Services.

**12.3 What Provider does not warrant.** EXCEPT AS EXPRESSLY STATED IN SECTION 12.2,
PROVIDER DOES NOT WARRANT AND EXPRESSLY DISCLAIMS ANY WARRANTY THAT:

&nbsp;&nbsp;(a) the Intake System will be uninterrupted, available at any particular
time, secure, or free from error;

&nbsp;&nbsp;(b) the Intake System will answer, capture, qualify, route, escalate, or
book any particular inquiry, or any specified proportion of inquiries;

&nbsp;&nbsp;(c) any output of the Intake System, including any qualification,
summary, transcription, translation, or escalation decision, will be accurate,
complete, or appropriate;

&nbsp;&nbsp;(d) the Intake System will detect any particular circumstance, including
any indication of distress, urgency, or conflict;

&nbsp;&nbsp;(e) use of the Intake System will comply with, or cause Client to comply
with, any Professional Rule, ethics opinion, bar requirement, insurance requirement,
or law applicable to Client; or

&nbsp;&nbsp;(f) the Intake System will produce any particular business result,
including any number of leads, consultations, retained matters, or amount of revenue.

**12.4 General disclaimer.** EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, THE
SERVICES AND THE INTAKE SYSTEM ARE PROVIDED "AS IS," AND PROVIDER DISCLAIMS ALL OTHER
WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

---

## 13. Limitation of Liability

**13.1 Exclusion of indirect damages.** NEITHER PARTY WILL BE LIABLE FOR ANY
INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR
ANY LOST PROFITS, LOST REVENUE, LOST BUSINESS, **LOST OR MISSED INQUIRIES, LOST
PROSPECTIVE CLIENTS, LOST OR FORGONE MATTERS OR ENGAGEMENTS, LOST FEES OR CONTINGENCY
RECOVERIES,** LOSS OF GOODWILL, OR COST OF SUBSTITUTE SERVICES, WHETHER IN CONTRACT,
TORT, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

**13.2 Cap.** EACH PARTY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO
THIS AGREEMENT WILL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT TO PROVIDER
UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE FIRST EVENT
GIVING RISE TO THE CLAIM.

**13.3 Exceptions to the cap.** Sections 13.1 and 13.2 do not apply to (a) Client's
obligation to pay Fees, (b) either Party's liability for fraud or willful misconduct,
or (c) Client's indemnification obligation under Section 14.2.

**13.4 Basis of the bargain.** The Parties acknowledge that the Fees reflect the
allocation of risk in this Section, that Provider would not enter into this Agreement
on these Fees without it, and that these limitations apply notwithstanding the failure
of any limited remedy of its essential purpose.

---

## 14. Indemnification

**14.1 By Provider.** Provider will defend Client against any third-party claim
alleging that the Platform, as provided by Provider and used in accordance with this
Agreement, infringes that third party's United States patent, copyright, or trademark
or misappropriates its trade secret, and will indemnify Client against damages finally
awarded or amounts paid in settlement approved by Provider. This obligation does not
apply to claims arising from the Client Configuration, the Client Data, Client
Materials, modifications not made by Provider, or combination with items not supplied
by Provider. If the Platform becomes, or Provider believes it may become, the subject
of such a claim, Provider may procure the right to continue using it, modify it to be
non-infringing, or terminate the affected SOW and refund prepaid, unearned Fees. This
Section states Provider's entire liability for infringement claims.

**14.2 By Client.** Client will defend and indemnify Provider against any third-party
claim arising out of or relating to (a) Client's practice of law or provision of legal
services, (b) Client's compliance or non-compliance with the Professional Rules, (c)
any claim by a Prospective Client or by a current or former client of Client, (d)
Client's conflict determinations, (e) the content Client approved under Section 5.2,
(f) Client's failure to respond to an escalation, or (g) Client's breach of Section 7,
in each case including damages finally awarded and amounts paid in settlement approved
by Client.

**14.3 Procedure.** The indemnified Party will give prompt written notice of the
claim, tender sole control of the defense and settlement to the indemnifying Party
(provided that no settlement imposing a non-monetary obligation or admission on the
indemnified Party may be made without its consent), and provide reasonable cooperation
at the indemnifying Party's expense. Failure to give prompt notice relieves the
indemnifying Party only to the extent it is materially prejudiced.

---

## 15. Term, Termination, and Effect of Termination

**15.1 Term.** This Agreement begins on the Effective Date and continues until
terminated under this Section. Each SOW continues for the term stated in it.

**15.2 Termination for convenience.** Either Party may terminate this Agreement for
convenience on thirty (30) days' written notice, provided that termination does not
take effect as to any SOW then in progress, or as to any Care Plan minimum commitment
under Section 6.2, until that SOW or commitment has been completed or separately
terminated.

**15.3 Termination for cause.** Either Party may terminate this Agreement or any SOW
immediately on written notice if the other Party (a) materially breaches and fails to
cure within thirty (30) days of written notice describing the breach (ten (10) days
for a payment breach), or (b) becomes insolvent, makes an assignment for the benefit
of creditors, or becomes the subject of a bankruptcy proceeding not dismissed within
sixty (60) days.

**15.4 Termination by Provider on professional-conduct grounds.** Provider may
terminate an SOW immediately on written notice if Provider reasonably determines that
continued performance would require Provider to engage in the unauthorized practice of
law, would violate applicable law, or would require Provider to act contrary to a
written directive of a bar authority or court. Provider will refund prepaid, unearned
Fees in that event.

**15.5 Effect of termination — general.** On termination or expiration: (a) all
licenses granted under Section 8.4 end; (b) Client's access to the Intake System ends;
(c) Client will pay all Fees for Services performed and Deliverables delivered through
the effective date, including any unpaid portion of the Implementation Fee and any
unexpired portion of the Care Plan minimum commitment under Section 6.2; and (d)
Provider will provide reasonable cooperation, at Client's expense at Provider's
then-current rates, in porting any telephone number provisioned for Client to a
carrier Client designates, provided Client's account is current.

**15.6 Effect of termination — Client Data.** This Section 15.6 is material to Client
and survives termination.

&nbsp;&nbsp;(a) **Export window.** For thirty (30) days after the effective date of
termination, Provider will maintain the Client Data and, on Client's written request,
provide one complete export in Provider's then-standard machine-readable format at no
charge.

&nbsp;&nbsp;(b) **Deletion.** Provider will delete all Client Data from its production
systems within thirty (30) days after the end of the export window, and will instruct
each subprocessor to do the same. Backup copies are deleted on Provider's ordinary
backup rotation, not to exceed ninety (90) days, during which they remain subject to
Section 10 and the DPA and are not accessed except to restore service.

&nbsp;&nbsp;(c) **Certificate.** On Client's written request, Provider will certify
the deletion in writing.

&nbsp;&nbsp;(d) **Legal hold.** If Client notifies Provider in writing that Client
Data is subject to a litigation hold, regulatory inquiry, or bar complaint, Provider
will preserve the identified Client Data until Client releases the hold in writing.
Provider may charge a reasonable storage fee, agreed in advance, for preservation
beyond ninety (90) days.

&nbsp;&nbsp;(e) **Retention required by law.** Provider may retain Client Data to the
extent required by law, in which case it remains subject to Section 10 and the DPA and
is not processed for any other purpose.

**15.7 Survival.** Sections 1, 2.3, 2.4, 6 (as to amounts accrued), 7, 8, 9.1, 10, 12,
13, 14, 15.5, 15.6, 15.7, 16, 17, and 18 survive termination.

---

## 16. Force Majeure

Neither Party is liable for a delay or failure to perform (other than a payment
obligation) caused by an event beyond its reasonable control, including act of God,
natural disaster, fire, flood, epidemic, war, terrorism, civil unrest, labor
disturbance not involving that Party's own workforce, embargo, or governmental
action. The affected Party will notify the other promptly, use reasonable efforts to
mitigate, and resume performance as soon as practicable. If the event continues for
more than thirty (30) consecutive days, either Party may terminate the affected SOW on
written notice, and Provider will refund prepaid, unearned Fees. **A failure or outage
of a third-party service used in the Intake System is governed by Section 4.4 and
Section 12.3, not by this Section.**

---

## 17. Governing Law and Disputes

**17.1 Governing law.** This Agreement is governed by the laws of the State of
[GOVERNING LAW STATE], without regard to its conflict-of-laws rules. The United
Nations Convention on Contracts for the International Sale of Goods does not apply.

**17.2 Escalation.** Before initiating any proceeding, the Parties will attempt in
good faith to resolve the dispute through direct discussion between individuals with
settlement authority for at least fifteen (15) Business Days after written notice of
the dispute, and thereafter through non-binding mediation in [MEDIATION VENUE] if
either Party requests it. This Section does not limit either Party's right to seek
injunctive relief.

**17.3 Forum.** *[SELECT ONE — see ATTORNEY-REVIEW-CHECKLIST.md item T2-17.]*
&nbsp;&nbsp;**Option A (courts):** The Parties consent to the exclusive jurisdiction
and venue of the state and federal courts located in [COUNTY], [STATE].
&nbsp;&nbsp;**Option B (arbitration):** Any unresolved dispute will be finally
resolved by binding arbitration administered by [ARBITRATION BODY] under its
commercial rules, before a single arbitrator, seated in [CITY, STATE].

**17.4 Jury waiver.** *[Retain only if Option A is selected and only if enforceable in
the governing jurisdiction.]* EACH PARTY WAIVES ANY RIGHT TO A JURY TRIAL IN ANY
PROCEEDING ARISING OUT OF THIS AGREEMENT.

**17.5 Limitations period.** No action arising out of this Agreement may be brought
more than [ONE (1) / TWO (2)] years after the cause of action accrues, except for
actions to collect Fees.

---

## 18. General

**18.1 Insurance.** During the term, Provider will maintain, at its own expense,
technology errors-and-omissions and cyber liability insurance with limits of not less
than $[AMOUNT] per claim and $[AMOUNT] in the aggregate, and commercial general
liability insurance with limits of not less than $[AMOUNT]. Provider will furnish a
certificate of insurance on Client's written request. *[Do not execute this Agreement
until the policy is bound. See ATTORNEY-REVIEW-CHECKLIST.md, "Not covered."]*

**18.2 Notices.** Notices must be in writing and are effective on delivery when sent
to the addresses on page one by personal delivery, nationally recognized overnight
courier, or certified mail, or on confirmed transmission when sent by email to
[PROVIDER NOTICE EMAIL] or [CLIENT NOTICE EMAIL] with a copy sent by one of the other
methods. Either Party may change its notice address on written notice.

**18.3 Assignment.** Neither Party may assign this Agreement without the other's prior
written consent, except that either Party may assign it in its entirety to a
successor in connection with a merger, reorganization, or sale of all or
substantially all of its assets, on written notice. Any other attempted assignment is
void. **Client may withhold consent to an assignment by Provider if Client reasonably
determines that the assignment would create a conflict of interest for Client or would
be inconsistent with Client's obligations under the Professional Rules.**

**18.4 Independent contractors.** The Parties are independent contractors. Nothing in
this Agreement creates a partnership, joint venture, agency, employment, or fiduciary
relationship.

**18.5 No third-party beneficiaries.** This Agreement is for the benefit of the
Parties only. No Prospective Client or other person has any right under it.

**18.6 Entire agreement.** This Agreement, including its exhibits, all executed SOWs,
and the DPA, is the entire agreement between the Parties on its subject matter and
supersedes all prior proposals, marketing materials, statements, and understandings,
written or oral. **Client acknowledges that it has not relied on any statement,
projection, or representation not set out in this Agreement, including any statement
concerning expected call volume, lead capture rates, conversion, or return on
investment.**

**18.7 Amendment and waiver.** This Agreement may be amended only by a writing signed
by both Parties. A waiver is effective only if in writing and signed by the waiving
Party, and is not a waiver of any other or subsequent breach.

**18.8 Severability.** If a provision is held unenforceable, it will be modified to
the minimum extent necessary to make it enforceable, or if it cannot be, severed, and
the remainder of this Agreement remains in effect.

**18.9 Counterparts and electronic signature.** This Agreement may be executed in
counterparts and by electronic signature, each of which is an original.

**18.10 Headings.** Headings are for convenience only and do not affect
interpretation.

---

## Signatures

| **[PROVIDER LEGAL ENTITY NAME]** | **[CLIENT LEGAL NAME]** |
|---|---|
| By: ______________________ | By: ______________________ |
| Name: [NAME] | Name: |
| Title: [TITLE] | Title: |
| Date: | Date: |

---

# EXHIBIT A — Support and Service Levels

*Applies from Go-Live for so long as Client's Care Plan is active and Client's account
is current.*

## A.1 Severity levels and response targets

| Severity | Definition | Provider response target |
|---|---|---|
| **S1 — Agent Down** | The Intake System is not answering inbound calls or chats, or is not writing bookings to Client's calendar, for reasons within Provider's reasonable control. | **Four (4) Business Hours** |
| **S2 — All other issues** | Any other defect, question, configuration issue, or request. | **Two (2) Business Days** |

**These are response targets, not resolution times.** "Response" means Provider has
acknowledged the report, confirmed the severity, and begun work or stated the next
step. Provider will work an S1 continuously during Business Hours until service is
restored or a workaround is in place.

## A.2 How to report

Reports must be submitted to [SUPPORT EMAIL] or [SUPPORT CHANNEL]. Response targets
run from receipt during Business Hours; a report received outside Business Hours is
treated as received at the start of the next Business Day.

## A.3 Exclusions

The targets in A.1 do not apply to conditions caused by: (a) an outage, degradation,
or change at a third-party service, including telephony, voice, model, calendar, or
practice-management providers; (b) Client's own systems, network, credentials, or
configuration changes made by Client; (c) Client's failure to maintain a staffed
escalation path; (d) suspension under Section 6.7; or (e) force majeure under Section
16. Provider will nonetheless use commercially reasonable efforts to assist.

## A.4 Included in the Care Plan

- Hosting, monitoring, and operation of the Intake System
- Platform maintenance and updates
- Support at the targets in A.1
- **Monthly performance report**, delivered by the [Nth] day of each month, covering
  calls and chats answered, consultations booked, after-hours inquiries captured, and
  escalations
- **Quarterly tune-up call** (up to sixty (60) minutes)
- **Minor change requests**: changes reasonably estimated by Provider at one (1) hour
  or less, up to [N] per month

## A.5 Not included

Anything not listed in A.4, including new practice areas, new integrations, new
languages, additional telephone numbers, additional Intake System instances, data
migration, and any change estimated at more than one (1) hour. These are scoped as a
change order or a new SOW under Section 4.3.

## A.6 No service credits

This Exhibit does not provide service credits, and Client's remedies for a failure to
meet a response target are those in Section 12.2 and Section 15.3.

---

# EXHIBIT B — Data Retention Defaults

Retention Periods are elected per SOW under Section 9.3. Absent an election, the
following defaults apply.

| Category of Client Data | Default | Configurable range |
|---|---|---|
| Call recordings (audio) | 30 days | 30–90 days |
| Call and chat transcripts | 30 days | 30–90 days |
| Intake summaries delivered to Client | 30 days in the Intake System *(Client's own copy, delivered to Client's systems, is retained by Client)* | 30–90 days |
| Conflict-check data captured | 30 days | 30–90 days |
| Audit log (metadata: time, channel, participants, disposition, escalations, guardrail triggers) | [90] days | 30 days – [24] months |
| Booking records | 30 days in the Intake System *(the calendar entry itself lives in Client's calendar and is retained by Client)* | 30–90 days |

Deletion is permanent and is not reversible. Backup rotation is described in Section
15.6(b). Client's election is Client's decision under Section 9.4.
