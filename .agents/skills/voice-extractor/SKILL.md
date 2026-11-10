---
name: voice-extractor
description: >
  Distill the founder's authentic writing voice from samples into
  data/research/voice-guide.md: energy, signature phrases, confidence zones,
  anti-patterns, validated with an A/B sentence test. campaign-copywriting
  and de-ai-ify consume the guide in deep mode. Needs 3+ samples / 500+
  words; below that, quick snapshot only.
  Adapted from BrianRWagner/ai-marketing-claude-code-skills (MIT).
---

# Voice Extractor (Advior workflow)

Modes: `quick` (5 traits + 3 rules), `standard` (full guide, default),
`deep` (guide + 10 rewrites + checklist).

## Gates

- Samples: 3+ pieces or 500+ words (sent emails, casual messages, call
  transcripts beat polished pages). Under 500 words → quick mode only, say so.
- Purpose: email copy voice (feeds copywriting + de-ai-ify deep mode).
- Exclude platform tics, typos, borrowed phrases, legal-formal writing — and
  say what was excluded.

## Extract

1. **Energy:** role (teacher / challenger / cheerleader / straight-shooter),
   default energy, recurring unprompted themes.
2. **Phrases:** transitions, emphasis lines, closers — quoted from samples
   with sources, never inferred.
3. **Confidence zones:** full authority (no hedging) / earned perspective
   ("in my experience") / active exploration ("I'm testing"), mapped to named
   topics.
4. **Anti-patterns:** words they'd never say, tones avoided — evidenced
   ("never used X across N samples").
5. **Validation (required):** same content in extracted voice (A) vs wrong
   voice (B); founder confirms A sounds like them unguarded.

## Save

Write `data/research/voice-guide.md` (sample assessment, energy, phrases,
zones, anti-patterns, validation, self-critique of gaps). From then on,
copywriting briefs and de-ai-ify deep passes reference it instead of
re-asking.

## Dropped from upstream

Ghostwriter/team onboarding framing, premium upsells — the consumer here is
our own copy pipeline.
Source: https://github.com/BrianRWagner/ai-marketing-claude-code-skills (MIT).
