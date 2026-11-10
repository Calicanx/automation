---
name: contract-and-proposal-writer
description: >
  Proposals and simple service agreements from live prospect rows: proposal
  template, payment/liability/IP/termination essentials, review checklist.
  Triggered at Proposal sent; saved under data/research/deals/. Templates are
  starting points — attorney review above $50K or complex IP/equity/regulatory
  terms. Adapted from borghei/Claude-Skills (MIT + Commons Clause — internal use).
---

# Contract & Proposal Writer (Advior workflow)

## Trigger

A prospect reaches `Proposal sent`. Source: the prospect row (business,
contact, observation, niche) + thread (what angle won) + session notes
(scope hints). Ask only what changes the doc: doc type, value/rate, timeline,
parties' legal names, IP or data sensitivities. Never invent scope the row
doesn't support.

## Proposal skeleton (saved to `data/research/deals/<business-slug>.md`)

Executive summary (their problem, our fix, expected outcome) · understanding
of requirements (their specifics, not boilerplate) · solution + scope with
explicit OUT-of-scope list · assumptions · timeline table · investment table
with payment schedule (50/25/25 fixed-price default; net-30 monthly hourly) ·
why-us (2 concrete differentiators + proof from `data/research/proof/` when
it exists) · next steps ending in a dated signature + kickoff.

## Clause essentials (keep, even in short docs)

- **Payment:** schedule + late terms stated; milestone billing over net-30
  above $10K.
- **Liability:** capped at 1–3× fees, consequential damages excluded both ways.
- **IP:** who owns the work product, pre-existing tools carved out with a
  perpetual license, portfolio rights reserved unless confidential in writing.
- **Termination:** for-cause with cure period + for-convenience with payment
  for work done.
- **Change orders:** fixed-price always defines the mechanism + pricing.
- **Acceptance:** "accepted = written sign-off within X days" per deliverable.
- **Confidentiality:** 3 years standard, trade secrets perpetual, return or
  destroy on exit.

## Review checklist (before it leaves)

Placeholders all filled · payment matches model · IP/liability/termination
present · change-order + acceptance defined · dates real · next step dated.
Then update the prospect (`Proposal sent`, `nextAction` = follow-up date) and
log the session.

## Dropped from upstream

Multi-jurisdiction clause libraries, data-protection addenda blocks,
master-agreement suites, DOCX/PDF conversion scripts — local SMB services work; add
jurisdiction machinery only when a deal actually crosses borders or $50K.
Convert with whatever the machine has (`pandoc`, or print-to-PDF).
Source: https://github.com/borghei/Claude-Skills (MIT + Commons Clause).
