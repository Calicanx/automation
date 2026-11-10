# 🎨 prototype — Claude Skill

> Prototypes are the thinking stage, not the shipping stage.
> Before you commit to a design, ask the hard question by building and running it.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Skill](https://img.shields.io/badge/Claude-Skill-blueviolet)](https://claude.ai)

---

## What It Does

Before committing to real implementation, a prototype validates whether your idea actually works. This skill routes Claude between two branches based on the question you're trying to answer.

在投入真正實作之前，原型驗證你的想法是否真的可行。這個 Skill 根據你想回答的問題，引導 Claude 走向兩個分支。

Built for **solo and independent developers** — no teammate to catch skipped steps,
so the process leans on self-imposed checklists and documentation for future-you.

---

## Two Branches

### LOGIC Branch — "Does this state model feel right?"
**When to use:** You need to validate business logic, a state machine, or data model before writing real code.

**Output:** A small interactive terminal app that pushes your state through edge cases that are hard to reason about on paper.

```
Prototype the state machine for a multi-step checkout — I need to test edge cases
Prototype this cart logic — does the discount + tax calculation feel right?
```

---

### UI Branch — "What should this look like?"
**When to use:** You want to explore multiple visual directions before committing to one.

**Output:** A single web page with multiple radically different UI variations, switchable via URL param and a floating bottom bar.

```
Prototype 3 radically different designs for the user dashboard
Let me play with a few layouts for the onboarding screen
Prototype this — I want to see what it looks like before we build it
```

---

## Core Rules

| Rule | Reason |
|------|--------|
| No tests | A prototype that needs tests is no longer a prototype |
| No real database | In-memory state only — keep it throwaway |
| No generalisation | Solve only the question at hand |
| Always surface state | Print/render full state after every action |
| Delete or absorb when done | Capture the answer, then clean up |

---

## Workflow

```
1. Identify the question
        ↓
2. Choose branch (LOGIC or UI)
        ↓
3. Place prototype next to the code it's prototyping
        ↓
4. Build — answer the question, nothing more
        ↓
5. Capture the answer (ADR / commit / notes)
        ↓
6. Delete the prototype or fold into real code
```

---

## Installation

### Claude Code
```bash
# Add to ~/.claude/CLAUDE.md
@/path/to/.skills/prototype/SKILL.md
```

### How to Trigger
```
Prototype this payment flow — I need 3 UI variations
Prototype the state machine for order processing
Let me play with a few designs for the landing hero section
```

---

## File Structure

```
prototype/
├── README.md
├── SKILL.md      # Main entry: question routing logic
├── LOGIC.md      # Terminal app branch — state/logic validation
└── UI.md         # Multi-variant web page branch — UI exploration
```

---

## Attribution & Inspiration

This skill is inspired by
[mattpocock/skills/prototype](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md)
by [Matt Pocock](https://github.com/mattpocock), which introduced the core insight
that **a single clear question shapes the entire prototype**, plus the two-branch
routing between logic and UI prototypes.

**Matt's version** is built for engineers on teams shipping production code fast.

**This version** adapts that framework for **solo / independent developers** who
don't have a teammate to catch a skipped step or a forgotten decision.

**Kept from Matt's original:**
- The core insight: "the question decides the shape"
- The two-branch routing (logic vs. UI)
- The core discipline: throwaway from day 1, no persistence, no tests

**Original contributions in this version:**
- A table-based decision framework explaining *why* each branch fits
- Structured README template (question + how-to + answer)
- A "For Solo Developers" section — self-imposed checklists in place of code review
- "Common Failures" — anti-patterns specific to working without a team
- Concrete implementation code (TypeScript state loop, React variant switcher)

---

## License

MIT — Free to use, fork, and share.

*Original concept & routing logic by [@mattpocock](https://github.com/mattpocock)*
*Solo-developer adaptation by [@TecCat](https://github.com/TecCat)*
