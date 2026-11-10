---
name: experiment-design
description: >
  Single-variable experiments for outreach improvement, logged as Sessions.
  One variable per test (list OR copy, never both plus the offer), pre-written
  success criteria, measured at day 21 via positive-reply-scoring, learnings
  confidence-weighted. Experiment plans live in data/research/experiments/.
  Adapted from growthenginenowoslawski/coldoutboundskills (MIT).
---

# Experiment Design (Advior workflow)

Change list + copy + offer at once and you learn nothing. Each test isolates
ONE variable; everything else frozen. Arms are cohorts in our own data
(messageType, niche, subject angle) — never parallel external campaigns.

## Types

- **List-only:** niche/stage cohort changes; copy, offer, timing frozen.
  Learns targeting (HIGH confidence on targeting).
- **Copy-only:** subject/body/sequence changes; same cohort and offer.
  Learns resonance (HIGH confidence on copy).
- **Combined (rare):** new ICP entirely. Hypothesis generation only, never a
  new baseline — split into single-variable follow-ups.

## The plan (write BEFORE launching)

Hypothesis in one sentence → the single variable + the frozen constants →
baseline health check (reply rate ≥1% after 200+ sends, else fix copy/deliverability
first, no test) → minimum ~500 sends per arm (2,000 default) → success/failure/
inconclusive thresholds with a measurement date (day 21) → launch arms
simultaneously → measure with positive-reply-scoring → confidence-weight
(HIGH only if isolated AND sized) → adopt (≥20% lift), replicate (10–20%),
or drop (<10%).

Priority order once a baseline exists: list → offer → subject → opener →
CTA → timing → length.

## Logging (Sessions are the lab notebook)

Each experiment is a `POST /api/sessions` entry: goal = hypothesis, result =
outcome + winner + confidence, nextAction = adopt/replicate/drop. The auto
snapshot (totals + deltas) is the measurement appendix — no separate files
to lose. Common mistakes: calling it early (wait 21 days), changing send
setup mid-test, ignoring bounce/opt-out skew between arms.

## Dropped from upstream

Upstream two-campaign mechanics, bulk launch path, sample-size
reference scripts — arms run through our approve → Resend send flow and are
measured from our own synced data.
Source: https://github.com/growthenginenowoslawski/coldoutboundskills (MIT).
