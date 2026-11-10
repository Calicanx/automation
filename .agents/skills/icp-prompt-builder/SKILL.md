---
name: icp-prompt-builder
description: >
  Tune the Advior qualification gate: which researched businesses deserve the
  Qualified stage and a leadScore that means something. Iterative 10-at-a-time
  loop with founder feedback; converges after 2 zero-correction rounds. The
  locked gate lives in docs and is applied on the Pipeline page.
  Adapted from growthenginenowoslawski/coldoutboundskills (MIT).
---

# ICP Prompt Builder (Advior workflow)

Before scaling research, tune what "qualified" means. The loop runs on live
Pipeline rows, not CSVs.

## Step 1 — Declare the ICP (write it down first)

- Who IS a good customer? (niche, size, geography, observable web gap)
- Who is NOT? (chains, no public contact path, no observable gap)
- HARD disqualifiers (competitors, existing contacts, `Do not contact`).

## Steps 2–7 — The 10-at-a-time loop

1. Pull 10 Pipeline rows mixing likely-good and likely-bad fits.
2. Score each against the gate: `{ qualified, confidence 0–1, reason }`.
3. Present the table; founder corrects (wrong calls, right-for-wrong-reason,
   missed patterns, new disqualifiers). One correction resets the streak.
4. Refine the gate, new batch of 10. Show the full gate text each round.
5. Stop at 2 consecutive zero-correction rounds.

## Step 8 — Lock it in

Save the gate to `data/research/icp-gate.md` (create the folder if needed)
with tuned date + rounds to convergence. Apply at scale: only
`Qualified`-passing rows get drafts; output is `PATCH /api/prospects/{id}`
(stage + leadScore + nextAction), never a side CSV.

## Rules

Never auto-approve the gate. Batches of 10, not 50. Confidence always shown —
0.5–0.7 borderline cases teach the most. Negative examples beat generic rules
("chains like X are NOT a fit because no local decision-maker").

## Dropped from upstream

External profile files, scraper list inputs, batch-scoring scripts —
our companies already live in the pipeline; scoring lands as prospect patches.
Source: https://github.com/growthenginenowoslawski/coldoutboundskills (MIT).
