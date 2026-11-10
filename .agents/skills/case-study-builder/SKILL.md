---
name: case-study-builder
description: >
  Turn a Won prospect into proof assets for future copy: two-liner, story
  version, full case study. Gated on one real number — no metric, no draft.
  Client is the hero. Output lives in data/research/proof/ and feeds
  campaign-copywriting; never invent results.
  Adapted from BrianRWagner/ai-marketing-claude-code-skills (MIT).
---

# Case Study Builder (Advior workflow)

Modes: `quick` (two-liner), `standard` (all three formats, default), `deep`
(+ full writeup for late-stage buyers).

Trigger: a prospect reaches `Won` (or `collected` is set). Source material:
the prospect row + its session records + the reply thread.

## Gates (all 8 before drafting)

Client (named or anonymized?) · before-state with stakes · actions taken
(scope, timeline) · **after-state with ≥1 real number (hard stop without
it)** · timeline · client quote if available · naming permission · where it
will be used (email proof lines first).

## Formats

1. **Two-liner:** what was delivered for whom + metric in timeframe.
2. **Story (150–250 words):** scene → complexity → moves → metric change.
3. **Full:** Challenge / Approach / Results (numbers first) / Details / What
   made it different / Quote or placeholder.

Result tiers set the language: hard metric stated directly; soft metric
hedged honestly ("for the first time…"); proxy attributed ("contributed
to…"); directional kept directional.

## Self-critique (required)

Number present? Client the hero? Real tension? Results lead with metrics?
Challenge specific enough that a similar prospect nods? Flag and fix.

## Save

`data/research/proof/<business-slug>.md` (all formats). Copy briefs cite
proof only from this folder — nothing from memory, nothing rounded up.

## Dropped from upstream

Website/LinkedIn distribution plans, testimonial-library cross-refs — proof
here serves email copy first.
Source: https://github.com/BrianRWagner/ai-marketing-claude-code-skills (MIT).
