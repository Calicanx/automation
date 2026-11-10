---
name: cold-outreach-sequence
description: >
  Build per-prospect email sequences (initial + Day 3/7/11 follow-ups) from
  live Pipeline rows. Research-first tiering: named signal → Tier 1 custom,
  role context → Tier 2 template + opener, nothing → Tier 3 volume. Output
  lands as draft records on the Outreach page; tracking lives in nextAction,
  not a side table.
  Adapted from BrianRWagner/ai-marketing-claude-code-skills (MIT).
---

# Cold Outreach Sequence (Advior workflow)

Modes: `quick` (one message for one prospect), `standard` (full 4-touch
sequence, default), `deep` (multi-prospect system + variants).

## Gates (before writing anything)

- Prospect row read: `business`, `contact`, `observation`, `niche`,
  `leadScore`, `stage` (`GET /api/prospects`).
- Research signals: the `observation` field IS the signal inventory. No
  named, verifiable signal → Tier 3, stated explicitly. Never invent signals.
- Sender positioning: Advior, local service SMBs, outcome from
  `data/research/proof/` when a case study exists — otherwise no proof claims.

## Tiers

| Research | Tier | Approach |
|---|---|---|
| Named signal (observable gap, event, detail) | 1 | Fully custom, signal in every touch |
| Company info + role context | 2 | Template + personalized opener |
| No signals | 3 | Minimal customization, low priority |

## Sequence (email only — no LinkedIn channel in this workflow)

- **Email 1 (Day 0):** strongest signal + one proof (if real) + ≤5-word CTA.
  `messageType: "initial"`, `status: "draft"`.
- **Follow-up (Day 3–4, threaded):** rotate the value prop, stand-alone first
  line, never "following up". `messageType: "follow-up"`.
- **New thread (Day 7–8):** different angle, consider dropping
  personalization for directness.
- **Final (Day 11–12):** redirect ("who handles X?") or resource offer.
  Silence never promises we stop — only an explicit reply does.

Each touch is created with `POST /api/outbound` (`business` matching the
Pipeline row, `to`, `subject`, `body`, `messageType`, `status: "draft"`) and
reviewed under campaign-copywriting + spam-word-checker + de-ai-ify before it
may be approved. Tracking lives where the dashboard already tracks: prospect
`nextAction`/`nextActionDue`, outreach `status`/`evidence`, reply
classification — no side tables.

## Self-critique (required)

Signal referenced or generic? Question or pitch? Follow-up adds something
new? Break-up specific? Tier honest? Flag and revise before handoff.

## Dropped from upstream

LinkedIn connection requests, first-DM_wait-24h mechanics, 6-month
re-engagement lists as side files (use `Not now` stage + `nextActionDue`
instead). Source: https://github.com/BrianRWagner/ai-marketing-claude-code-skills (MIT).
