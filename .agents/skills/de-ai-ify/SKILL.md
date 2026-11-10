---
name: de-ai-ify
description: >
  Strip AI-generated patterns (clichés, hedging, buzzwords, robotic rhythm)
  from outreach drafts and rewrite them in the founder's voice. Runs at draft
  review alongside spam-word-checker: spam screen bans tokens, this skill
  restores humanity. Edits land back on the draft record, never in side files.
  Adapted from BrianRWagner/ai-marketing-claude-code-skills (MIT).
---

# De-AI-ify (Advior workflow)

Modes: `quick` (single pass, no score), `standard` (full scan + 0–10 human
score + change log, default), `deep` (calibrate against
`data/research/voice-guide.md` when it exists).

## What gets removed from drafts

- **Transitions:** Moreover/Furthermore/Additionally throat-clearing,
  `However` overuse, `While X, Y` openings.
- **Clichés:** "fast-paced world", "dive deep", "unlock/unleash/harness",
  "game-changer", "at the end of the day".
- **Hedging:** "it's important to note", "one might argue", vague
  quantifiers (various/numerous/myriad), "arguably" overuse.
- **Buzzwords:** utilize→use, facilitate→help, leverage→use,
  "circle back"→"follow up", "move the needle"→concrete outcome.
- **Robotic rhythm:** rhetorical Q immediately answered, 3+ parallel
  sentences, always-three bullets, "Importantly/Crucially" announcements.

## What gets added

Varied sentence rhythm (short 5–10 mixed with 20–30 word), contractions,
active voice, confident assertions, specific data over vague nouns. If
`voice-guide.md` exists, `deep` mode matches it; otherwise plain spoken
founder voice.

## Workflow

1. Read the draft (`GET /api/outbound`, the record body).
2. Score 0–10, apply removals, re-score.
3. Write the revision back with `PATCH /api/outbound/{id}` (`body`,
   keep `status: "draft"`). Report the change log + flags needing a human.
4. Target ≥8 for anything that will be approved. Facts, offer, and CTA
   untouched — voice only.

## Dropped from upstream

`-HUMAN.md` side files, Flesch/Fog scoring apparatus, install/CLI bits —
output is the revised draft body plus a short log.
Source: https://github.com/BrianRWagner/ai-marketing-claude-code-skills (MIT).
