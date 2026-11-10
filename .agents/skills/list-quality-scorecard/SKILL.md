---
name: list-quality-scorecard
description: >
  Grade pipeline prospects across 8 quality dimensions BEFORE outreach is
  drafted for them. Maps to the Advior Sales Pipeline fields (business,
  website, contact, email, observation, stage, leadScore) and the
  observation-only rule. Run when a research batch lands, before
  campaign-copywriting.
  Adapted from growthenginenowoslawski/coldoutboundskills (MIT).
---

# List Quality Scorecard (Advior workflow)

A hundred researched rows are not a hundred good rows. Grade the batch before
any draft references it. Output: letter grade (A+–F) + 8 dimension scores +
top fixes. Below B: fix first, don't draft.

## Field map (their CSV → our Pipeline)

| Their column | Our field | Notes |
|---|---|---|
| `email` | `email` | Publicly listed only; empty = not yet emailable |
| `first_name/last_name` | `contact` | Name quality: human, not "Admin"/"Info" |
| `job_title` | `contact` role part | Bad-title patterns: intern, assistant, student |
| `company_name/domain` | `business` / `website` | Duplicate business+domain check |
| `company_industry/headcount` | `niche` / `observation` | ICP-fit signal lives in `observation` |
| verification coverage | `emailSource` | Record HOW the address was verified |

## The 8 dimensions (adapted)

1. **Contact coverage (critical).** % of rows with a real `email`. Unemailable
   rows can't enter outreach — they stay `Researching` until covered.
2. **Duplicate rate.** Same business or email twice. <1% ok, >5% fix.
3. **Domain concentration.** Max prospects sharing one website domain. 5+
   on one domain = over-indexed on one company.
4. **Role relevance.** % of contacts matching buyer roles (owner, founder,
   manager — not intern/assistant/student).
5. **Observation quality.** % of rows with a specific, verifiable observation
   (the anti-hallucination gate: no observation, no draft). Spot-check 10.
6. **Catch-all density.** % on `info@`/`contact@`/`hello@`-style addresses.
   <5% fine; above it, deprioritize.
7. **ICP fit.** % matching our niche + stage rule (local service SMBs with an
   observable web gap). 80%+ to pass.
8. **Score calibration.** `leadScore` spread sane (not all 75s); stage values
   from the allowed list only.

## Grades

90–100 A (draft away) · 80–89 B (minor fixes) · 70–79 C (fix top 3 first) ·
<70 (rebuild the batch). Verification + observation quality weigh 2x.

## Workflow

Grade with `GET /api/prospects` as input → post fixes as `PATCH
/api/prospects/{id}` (scores, stages, dedupe via `DELETE`) → re-grade → at B
or better, hand qualified rows to campaign-copywriting.

## Dropped from upstream

Upstream enrichment plumbing and runner scripts — our input
is the pipeline API, our output is prospect patches, no extra keys or
runtimes needed.
Source: https://github.com/growthenginenowoslawski/coldoutboundskills (MIT).
