# 🧠 ux-psychology — Claude Skill

> Design decisions backed by psychology research, not gut feeling.
> 每個設計決策都有心理學研究支撐，而不是憑感覺。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Skill](https://img.shields.io/badge/Claude-Skill-blueviolet)](https://claude.ai)

---

## What It Does

This Claude Skill gives Claude a systematic psychology framework to **analyze**, **design**, and **audit** any UX — answering questions that are important to UA flow.

- Why is no one clicking this CTA?
- Why do users abandon the form halfway?
- Why does the pricing page convert at only 1%?

---

## Three-Layer Psychology Model

```
👁️ Perception   What does the user SEE before conscious thought kicks in?
                用戶在意識介入前「看到」什麼？

🧠 Cognition    How much mental effort does it take to UNDERSTAND?
                需要花多少腦力才能「理解」？

🎯 Behavior     What DRIVES or BLOCKS action?
                什麼在「驅動」或「阻礙」行動？
```

**Built-in principles (20+):**
Loss Aversion · Anchoring Effect · Hick's Law · Zeigarnik Effect · Social Proof ·
Peak-End Rule · PACE Framework · BJ Fogg Behavior Model · Cognitive Load ·
Miller's Law · Reciprocity · Foot-in-the-door · Scarcity · Curiosity Gap ...

---

## Four Modes

### ANALYZE — Diagnose an existing UI
```
Analyze this landing page — why is the conversion rate below 2%?
```
**Output:** 3-layer score card + psychology problem diagnosis + prioritized fix list by ROI

---

### USERFLOW — Design a psychologically-sound user journey
```
Design a psychologically-optimized SaaS signup flow
Design a checkout flow that minimizes abandonment
```
**Output:** Emotional journey map (PACE) + step-by-step specs + copy framework + interactive prototype

---

### GENERATE — Generate a design spec from scratch
```
Generate a pricing page design spec using psychology principles
```
**Output:** Component list + psychology rationale + copy framework + visual hierarchy spec

---

### AUDIT — Systematic 85-item review
```
Run a full psychological audit on my onboarding flow
```
**Output:** 85-item checklist score + severity matrix + week-by-week optimization roadmap + A/B test suggestions

---

## Output Format

Every output follows this structure:
```
Main document (Markdown)          ← Single source of truth
  ├── #anchor → Interactive prototype  (HTML/React, when needed)
  └── §link  → design-spec.md          (implementation details)
```

Every recommendation includes:
- ✅ The psychology principle behind it
- ✅ Research data or expected impact
- ✅ Specific action: "Change X to Y"
- ✅ Priority ranking by ROI

---

## Installation

### Claude Code
```bash
# Add to ~/.claude/CLAUDE.md
@/path/to/.skills/ux-psychology/SKILL.md
```

### Claude.ai Chat
1. Download `ux-psychology.skill` from [Releases](../../releases)
2. **Claude.ai → Settings → Skills → Upload**

---

## File Structure

```
ux-psychology/
├── README.md
├── SKILL.md                  # Main entry: mode routing + output templates
└── references/
    ├── principles.md         # 20+ psychology principles with research data
    ├── userflow.md           # PACE framework + 5 flow types + journey map templates
    ├── patterns.md           # UI Pattern × Psychology mapping table
    └── audit-checklist.md   # 85-item systematic audit checklist
```

---

## Quick Psychology Reference

| Principle | Core Concept | Design Application |
|-----------|-------------|-------------------|
| Loss Aversion | Pain of losing = 2× pleasure of gaining | "You'll lose X" beats "You'll gain X" |
| Anchoring Effect | First number sets the reference point | Show highest price first on pricing page |
| Hick's Law | More options = slower decisions | Keep choices ≤ 7 |
| Social Proof | People copy others when uncertain | Real reviews with photos + user counts |
| Zeigarnik Effect | Unfinished tasks pull harder | Progress bars + completion indicators |
| Peak-End Rule | Memory = peak moment + ending | Design Aha Moment + success page carefully |
| PACE Framework | Pain × Anxiety × Confidence × Energy | Map user psychology at each flow step |

Full reference with research data: [references/principles.md](./references/principles.md)

---

## License

MIT — Free to use, fork, and share. Credit appreciated.

*Built by [@TecCat](https://github.com/TecCat)*
