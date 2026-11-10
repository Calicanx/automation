---
name: plan-my-day
description: >
  Turn the dashboard into a time-blocked workday: Top 3 from follow-ups due +
  replies needing review + session next-actions, deep work in peak hours,
  admin in the troughs, 20% buffer, evening check-in logged as a Session.
  Asks for fixed commitments first; never plans 100% of the day.
  Adapted from BrianRWagner/ai-marketing-claude-code-skills (MIT).
---

# Plan My Day (Advior workflow)

Modes: `quick` (Top 3 + rough blocks), `standard` (full time-blocked plan,
default), `deep` (plan + weekly pattern review).

## Inputs (read, don't ask twice)

- `GET /api/overview`: `followUps` (due work), `needsReview` (reply
  decisions), `story.next` (standing direction).
- Open loops: prospects stuck mid-stage, sessions whose `nextAction` is
  unclosed, unclassified replies.
- Founder's fixed commitments today (the only question if unknown).

## Rules

Top 3 = highest impact × urgency; #1 goes in the longest peak block
(~2–3h after waking); 90-min deep blocks with breaks; decisions before
mid-afternoon; schedule 80% of the day max; admin (sync checks, filing) in
low-energy windows; nothing cognitively heavy late.

## Output

Mission in one sentence → Top 3 with measurable done-states → time blocks →
success criteria → evening check-in template. The check-in (what shipped,
what stuck, energy 1–10, tomorrow's adjustment) is logged via
`POST /api/sessions` — the plan becomes the session goal, the check-in its
result. Next morning's plan reads last session's `nextAction` first.

## Dropped from upstream

Generic calendar-sync promises, team-coordination features, marketing-manager
examples — the dashboard is the calendar source here.
Source: https://github.com/BrianRWagner/ai-marketing-claude-code-skills (MIT).
