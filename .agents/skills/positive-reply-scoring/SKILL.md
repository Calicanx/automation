---
name: positive-reply-scoring
description: >
  Score Replies page threads into positive / neutral / negative / opt-out and
  compute the positive reply rate — the north-star metric shown on the
  dashboard. Uses GET /api/replies + /api/overview, classifies first replies
  only, routes positives to immediate human follow-up and opt-outs to Do not
  contact. Adapted from growthenginenowoslawski/coldoutboundskills (MIT).
---

# Positive Reply Scoring (Advior workflow)

Reply rate says people noticed. Positive reply rate says they want it. Input
is `GET /api/replies`; output is classifications via `PATCH
/api/replies/{id}` plus the dashboard KPIs.

## Classification schema → our taxonomy

| Label | Meaning | Our classification |
|---|---|---|
| `positive_interested` | Yes / booked | **Positive** |
| `positive_soft` | Send info / later | **Positive** |
| `positive_referral` | Talk to X | **Positive** (add X as prospect) |
| `neutral_question` | Clarifying, no commitment | **Neutral/Question** |
| `negative_notnow` | Not now | **Objection** (+ nextAction + due) |
| `negative_notfit` | Not a fit | **Negative** |
| `negative_hostile` | Angry / threats | **Negative** (flag separately, pause that thread) |
| `unsubscribe` | Opt-out | **Opt-out** → prospect to `Do not contact`, `optOut: true` |
| `ooo` / `bounce` | Auto / technical | **Other**, excluded from denominators |
| low confidence (<0.7) | Can't tell | Leave **Unclassified** |

Metric: `(interested + soft + referral) / unique contacts emailed`.
Benchmarks: ≥1% good, ≥2% great; hostile >0.3% or opt-out >2% = pause and
diagnose copy before any new sends.

## Rules

Classify FIRST reply per thread only (later messages are conversation, not
signal). OOO/bounce never count as replies. Small samples lie — no verdicts
under ~500 sends; read direction only.

## Action items (every scoring run ends with these)

1. **Positives first:** every `Positive` needs a human answer and a
   `responseStatus: Reviewed` + next action — work replies before new outreach.
2. **Referrals:** create the referred contact as a new prospect.
3. **Opt-outs:** `optOut: true` + stage `Do not contact` immediately; they
   leave every count automatically.
4. **Negatives:** Objection → adjust one variable (niche or message), note it
   in Sessions; Hostile → stop that thread, review copy.

## Dropped from upstream

Upstream fetch/aggregate scripts — our replies already sync server-side via
Resend (`POST /api/sync/resend`) and persist with classifications by email ID.
Source: https://github.com/growthenginenowoslawski/coldoutboundskills (MIT).
