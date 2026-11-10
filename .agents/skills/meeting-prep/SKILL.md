---
name: meeting-prep
description: >
  Build a discovery-call brief from our own data: prospect row + reply thread
  + open commitments, 3 call priorities, sharp questions, watch-fors, one
  desired outcome and the next step to propose. No external vault, no APIs —
  reads GET /api/prospects, /api/replies, /api/outbound, /api/sessions.
  Adapted from BrianRWagner/ai-marketing-claude-code-skills (MIT).
---

# Meeting Prep (Advior workflow)

Trigger: a prospect reaches `Discovery booked` (or a Positive reply proposes
a call). Ask only for what's missing: attendee name/role if not in the row,
call time, anything already promised.

## Assemble (in order, from our API)

1. **Prospect row:** business, contact, observation, niche, stage history,
   leadScore, nextAction/nextActionDue.
2. **Thread:** the outbound sent + the reply that earned the meeting
   (what angle worked — reuse it on the call).
3. **Open loops:** unclosed session nextActions mentioning them, unanswered
   questions in the thread, anything promised and not yet delivered.
4. **Prior briefs:** `data/research/meetings/` if a previous brief exists.

## Output brief

Why this meeting matters (1–2 sentences) → 3 call priorities → context
recap → 5 sharp questions grounded in their observation → watch-fors
(objections seen in Objection-classified replies) → desired outcome in one
sentence → next step to propose (usually `Proposal sent` with a date).

Save to `data/research/meetings/YYYY-MM-DD-<business>-prep.md`, set the
prospect's `nextAction` to the agreed follow-up, and print the 3-line
summary (who / why it matters / sharpest question).

## Dropped from upstream

External note-vault searches, meeting-type taxonomies for orgs we don't run,
reference-file apparatus — our store is the API plus `data/research/`.
Source: https://github.com/BrianRWagner/ai-marketing-claude-code-skills (MIT).
