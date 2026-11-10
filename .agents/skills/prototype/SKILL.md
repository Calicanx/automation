---
name: prototype
description: >
  Build a throwaway prototype to flesh out a design before committing to it.
  Routes between two branches — a runnable terminal app for state/business-logic
  questions, or several radically different UI variations toggleable from one route.
  Use when the user wants to prototype, sanity-check a data model or state machine,
  mock up a UI, explore design options, or says "prototype this", "let me play with
  it", "try a few designs".
disable-model-invocation: false
credits: >
  Inspired by mattpocock/skills/prototype (https://github.com/mattpocock/skills).
  Adapted and expanded for solo/independent developers — see References below.
---

# Prototype

## The Core Idea

Prototypes are the thinking stage, not the shipping stage.
Before you commit to a design—before you write the real code—
you ask the hard question by building and running something small.

The single clearest question shapes everything: what you build, how long you spend,
where you put your energy. Two very different questions need very different artifacts.
Mixing them guarantees confusion and wasted effort.

---

## Step 1 — Identify Your Question

What are you actually trying to learn?

| If you're asking... | Reason | Build this | Output |
|---|---|---|---|
| **Can this state model actually handle all the cases?**<br>Can we represent X? Does this data structure break at edge cases? | You can't reason about complexity on paper. Complex state machines need to be walked through by hand. | Interactive terminal app<br>(state explorer) | You push buttons, watch state change, discover what doesn't work |
| **How should users experience this?**<br>Which layout works? What interaction feels right? Should this be a modal or a page? | You can't choose between designs by describing them. Visual comparison is 10× faster than debate. | Multiple UI variants<br>(3-5 designs, switchable) | You click to switch between designs, see trade-offs instantly |
| **Both at once** | ⚠️ **Stop here** | Split into two prototypes | One per question, one per artifact type |

**Ambiguous?** Default to the question type that matches your surrounding code:
- Backend module → logic (state/data question) → follow [LOGIC.md](./LOGIC.md)
- Page or component → UI (interaction question) → follow [UI.md](./UI.md)
- State your assumption at the top of the prototype.

---

## Step 2 — Locate and Name the Prototype

Place the prototype **next to the code it is prototyping** — same directory as the
module or component it explores. Context should be obvious to you (or future-you)
opening the folder six months from now.

Name it so a casual reader knows it's **NOT production code**:

```
✅ Good names:
  src/checkout/prototype-payment-flow/
  src/components/UserCard/prototype-redesign/
  app/dashboard/prototype-v2/

❌ Bad names:
  src/checkout/payment-flow/  ← looks production
  ProtoPayment.jsx            ← too cryptic
```

### Create a README.md inside

Every prototype directory gets a `README.md` with exactly three sections:

```markdown
# Prototype: [Name]

## The Question
[One sentence. What are you trying to learn?]

Example: "Can we validate email on-blur without blocking UX?"

## How to Run
[One command. Whatever you already use.]

Example: `npm run proto:payment` or `python prototype.py`

## Answer
[Blank until you run it. Fill this in before deletion.]

[Your findings go here after you're done prototyping]
```

As a solo developer, this README is the only thing standing between you and
"why did I decide that?" three months from now. Nobody else will remember for you.

---

## Step 3 — Build Throwaway, Not Production

### Rules

1. **No tests** — A prototype that needs tests isn't a prototype anymore; it's becoming production code. Stop and refactor.

2. **No real database** — Use in-memory state, mock data, or a scratch file clearly labeled "PROTOTYPE—wipe me".
   Exception: if the prototype's question is specifically about persistence (caching behavior, replication), then hit a real scratch DB.

3. **No generalization** — "What if I wanted to support X later?" = wasted effort.
   This prototype answers one question. When done, you delete it or fold the validated logic into real code.

4. **No error handling beyond runnable** — Skip try/catch, skip logging infrastructure, skip graceful degradation.
   If it crashes, that's fine—you'll see it immediately.

5. **Surface the state** — After every action (in logic) or every variant switch (in UI),
   print or render the full relevant state. You must see what changed.

6. **Delete or absorb** — When the prototype answers its question, one of two things happens:
   - Delete it entirely, OR
   - Extract the validated logic and fold it into production code

   Don't leave prototypes rotting in the repo for months.

---

## Step 4 — Capture the Answer and Clean Up

### Before You Delete

The prototype will disappear, but the insight must stay. You have one sitting to capture it —
once the terminal window closes, the "aha" moment is gone.

1. **Write the answer** into a durable place:
   - The `README.md` → Answer section (see Step 2)
   - An ADR: `docs/adr/NNNN-why-i-chose-X.md`
   - A commit message on the branch where you fold in the validated logic
   - A `DESIGN.md` in the component folder

2. **One sentence minimum**: "This turned out to matter more than I expected because..."

3. **Delete the prototype folder** (or the branch, or the file—whatever you created)

---

## For Solo Developers

Working alone changes what you need from a prototype process. There's no teammate
to catch you if you skip a step — so the discipline has to be self-imposed.

### The Solo Checklist

Before you delete a prototype, ask yourself out loud (yes, actually):
- Did this answer my stated question, or did I get distracted and build something else?
- Would I remember this decision in 3 months without the note I'm about to write?
- Is there a validated piece of logic here worth keeping, or is it 100% throwaway?

### Fighting "Just Ship the Prototype" Temptation

Solo developers are the most likely to skip the cleanup step, because there's no
code review gate forcing it. The fix: **name it so ugly you're embarrassed to ship it.**
`prototype-DELETE-ME-checkout/` is harder to accidentally merge than `checkout-v2/`.

### Future-You Is a Different Person

Write the README as if explaining it to a stranger — because in 3 months, you are one.
Don't write "obviously we chose X" — write "I chose X because Y, and rejected Z because W."

---

## Common Failures (Learn from these)

### Trap 1: The "Swiss Army Knife" Prototype

You try to answer 3 questions at once: state + UI + performance.

- **Result**: A franken-artifact that confuses even you, a week later.
- **Fix**: One question per prototype. When done, delete it and start fresh.

### Trap 2: Prototype Rot

It works so well that you just... keep building on it instead of writing it "properly."
Now you're maintaining throwaway code for years.

- **Fix**: Name it obviously (`prototype-*`). Delete it the day after you ship the real thing.
- **Better**: Build it on a branch, not main — delete the branch when you're done.

### Trap 3: The Forgotten Answer

You built a brilliant prototype, learned something, deleted it.
Three months later: "Why did I choose that design?"
You don't remember, and there's no teammate to ask either.

- **Fix**: Before deletion, write the answer into `DESIGN.md` or an ADR (10 minutes).
- **Even better**: Link that note from the component's README so future-you finds it.

---

## Quick Reference

| Scenario | Branch | Artifact | Effort |
|----------|--------|----------|--------|
| "Does this logic work?" | [LOGIC.md](./LOGIC.md) | Interactive terminal | 30-90 min |
| "What should this look like?" | [UI.md](./UI.md) | 3-5 UI variants | 45-120 min |
| State/logic question, ambiguous context | LOGIC.md | See LOGIC.md | — |
| UI/design question, ambiguous context | UI.md | See UI.md | — |
| Not sure what you're asking | Stop → reread Step 1 | — | 5 min |

---

## References

This skill is inspired by
[mattpocock/skills/prototype](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md)
by [Matt Pocock](https://github.com/mattpocock), which introduced the core insight that
**a single clear question shapes the entire prototype**, and the two-branch routing
between logic (terminal/state) and UI (multi-variant) prototypes.

**Matt's version** is built for engineers on teams shipping production code fast.

**This version** adapts that framework for **solo and independent developers**, who
don't have a teammate to catch skipped steps or forgotten decisions. Key differences:

**What's kept from Matt's original:**
- The core insight: "the question decides the shape"
- The two-branch routing (logic vs. UI)
- The discipline: throwaway from day 1, no persistence, no tests

**What's added here (original content):**
- A table-based decision framework with the "why" spelled out
- Structured README template (question + how-to + answer)
- A "For Solo Developers" section — self-imposed checklists instead of code review gates
- "Common Failures" — three anti-patterns specific to working without a team
- Emphasis on documentation for future-you, since there's no one else to ask later

Both versions share the same philosophy:
**write down your question first. That one sentence decides everything.**
