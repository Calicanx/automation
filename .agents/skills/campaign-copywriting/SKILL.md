---
name: campaign-copywriting
description: >
  Write cold outreach copy stepwise (direction → subject + first line → body
  → final variants) for the Advior Sales Outreach page. Confirms each step
  before proceeding. Final copy lands as draft records via POST /api/outbound
  (status draft), then moves through the dashboard approve → send flow.
  Adapted from growthenginenowoslawski/coldoutboundskills (MIT).
---

# Campaign Copywriting (Advior workflow)

You write the drafts; the dashboard + Resend layer sends them. Copy produced
here enters on the **Outreach** page as `status: "draft"` records
(`POST /api/outbound` with `business`, `to`, `messageType`, `subject`,
`body`), gets **approved** (or bounced to `needs-rewrite` with a `reviewNote`)
by the founder, and only then sends via `POST /api/outbound/{id}/send`.
Drafts are not sends — nothing here transmits email.

## The 4-step flow (confirm each step, 2–3 options, recommend one)

1. **Direction** — audience, pain, value prop (save time / make money / save
   money), proof point, campaign angle. Base it on real Pipeline rows:
   `business`, `observation`, `niche`. Never invent details the prospect row
   doesn't support.
2. **Subject + first line** — pick a strategy per message: Problem Sniffing
   (observable gap from `observation`), Billboard (whole offer), or AI Generic
   (light personalization). Personalized subjects use lowercase.
3. **Body structure** — value angle, proof, CTA style
   (confirmation / value-exchange / resource offer), PS yes/no. Target 50–90
   words, 125 only with justification.
4. **Final copy** — Email 1 (Day 0) + follow-ups Day 3–4 (threaded, no
   subject), Day 7–8 (new thread), Day 11–12 (final). Each email stands alone;
   rotate the value prop across steps; never open a follow-up with "following
   up", "just checking in", or any reference to previous emails.

## Hard rules

- No em dashes in copy (periods or commas). No "Curious" subject. No weak
  openers (see step 4). Recipient:sender sentence ratio ≥ 3:1.
- `{{double_brace}}` variables only; company variable is `{{company_name}}`.
- CTA must be answerable in ≤ 5 words ("Worth a look?", "Is this still the case?").
- Run every draft through `/spam-word-checker` before handing it over.

## QA checklist (all must pass before creating the draft record)

First line carries a specific signal · no hallucinations · no banned phrases ·
50–90 words · low-effort CTA · reads aloud in < 20s · subject 2–4 words or
whole offer · scoring rubric ≥ 85 (Situation 25 / Value 25 / Personalization
20 / CTA 15 / Punchiness 10 / Subject 5).

## Handoff to the dashboard

Create one `POST /api/outbound` record per variant with `status: "draft"`,
`messageType` set (`initial` / `follow-up` / `proposal`), and the business name
matching the Pipeline row. Tell the founder: open Outreach → click the row to
read → Approve or Needs rewrite. Sending happens only from an `approved`
record, one click at a time (or "Send all approved").

## Dropped from upstream

Upstream bulk-upload, inbox-selection/schedule blocks, scraper variable sources — our send layer is Resend + the dashboard approve flow.
Source: https://github.com/growthenginenowoslawski/coldoutboundskills (MIT).
