---
name: sales-operations
description: >
  Pipeline analytics and data hygiene for a one-person CRM: data-quality
  checklist mapped to prospect fields, stage conversion + velocity computed
  from the API, simplified forecast tiers. No territories, quotas, or comp —
  one rep. Runs weekly; output is prospect patches and a session entry.
  Adapted from borghei/Claude-Skills (MIT + Commons Clause — internal use).
---

# Sales Operations (Advior workflow)

## Data-quality checklist (every pipeline review, from `GET /api/prospects`)

- Required fields populated: `business`, and `email` OR a note why unemailable.
- `stage` from the allowed list; `optOut` consistent with `Do not contact`.
- `nextAction` + `nextActionDue` on every open row; no past-due dates left
  stale (move, close, or resurface).
- No duplicate business/email pairs (second occurrence → `DELETE`).
- `emailSource` records HOW each address was verified.
- `leadScore` spread sane (all-75s = uncalibrated; recalibrate with the ICP
  gate).

## Health math (from `/api/overview` + record timestamps)

- **Stage conversion:** rows entering stage N+1 ÷ rows that entered N, per
  period. Find the biggest drop — that's the bottleneck to fix next.
- **Velocity:** median days from first `createdAt` to `Won`; same to `Lost`.
- **Aging:** open rows untouched 30+ days get a decision (advance / Lost /
  dated resurface), never lingering.
- **Forecast tiers:** Discovery booked 60% · Proposal sent 75% ·
  Negotiation 90% of stated value; commit = dated next step exists, else
  pipeline. Gap = sum open weighted − target; required win rate stated
  aloud in the session.

## Troubleshooting

Forecast drifting → stage definitions slipped; re-enforce entry/exit (a row
advances on evidence, not hope). Conversion falling at one stage → fix that
stage's exit evidence before touching copy or list. Coverage thin → research
block scheduled in `plan-my-day` before any new sends.

## Dropped from upstream

Territory design, quota models, compensation architecture, CSV runner
scripts — input here is the API, arithmetic is inline, team of one.
Source: https://github.com/borghei/Claude-Skills (MIT + Commons Clause).
