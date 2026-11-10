---
name: writing-persuasive-emails
description: >
  Reader-first email psychology for cold outreach: audience map, world-fit
  openers, identity mirroring, staged frame shifts, one core point. Runs
  inside campaign-copywriting step 2 (subject + first line) and the final QA
  checklist. Cold-outreach portion only.
  Adapted from thegauravmahto/claude_email_skill (MIT).
---

# Writing Persuasive Emails (Advior workflow)

The email is not about us. It executes a program in the reader's mind: fit
their world, then move one piece of it. Every line earns the next.

## The 5 steps (per draft, before structure)

1. **Audience map** — role, world (beliefs/heroes/villains), tribe vocabulary
   (use their words: owner says "customers", not "leads"), identity they want
   confirmed (the owner who keeps the place full / runs a tight shop).
   Can't map it → research first, don't send yet.
2. **World-fit opener** — atomic units they already agree with ("regulars
   keep a salon alive"). Three nods earns one new claim.
3. **Identity mirror** — reflect the identity they admire, shaped as
   observation, not flattery ("shops that answer the phone win the street").
4. **Frame shift (only for new ideas)** — validate their belief, introduce
   one dissonance, resolve with our offer. Never contradict head-on.
5. **Core point** — one sentence does the work; everything else supports it.
   Test: if only one sentence survived, which one? Cut the rest back.

## Language rules

Simple words, their vocabulary twice minimum, one concrete detail only
homework could know, company name mentioned, first noun about THEIR world,
every claim reachable from their ground truth, ask smaller than expected.

## Red flags (stop and rewrite)

Starts with "I" · no non-copy-pasteable detail · credential laundry list ·
their-world contradiction · ask too big ("a call this week" → "worth a
reply?") · no identifiable core point · vague close ("let me know if a fit").

## Handoff

Runs inside campaign-copywriting step 2 (subject + first line) and the final
QA pass. Approved lines land as `status: "draft"` records on the Outreach
page via `POST /api/outbound`, then follow the normal approve → Resend send
flow. Rejected lines go back with the violated rule named.

## Pre-send checklist (extends the copy QA)
Core point in one sentence · first detail about them · their vocabulary ×2 ·
identity mirrored · claims reachable · ask frictionless · cutting the three
longest sentences changes nothing (then cut them).

## Dropped from upstream

Job-application and investor-pitch tracks (different readers, different
math) — this skill serves cold outreach to local service owners only.
Source: https://github.com/thegauravmahto/claude_email_skill (MIT).
