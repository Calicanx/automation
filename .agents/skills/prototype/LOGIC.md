---
credits: >
  Core concept and trigger phrases adapted from mattpocock/skills/prototype/LOGIC.md.
  Implementation code and solo-developer guidance are original — see References below.
---

# LOGIC Prototype Branch

State questions get answered by hands-on interaction, not by reading code twice.
If you're unsure whether a state machine handles an edge case, or whether a data
model can represent a tricky scenario, build something you can poke at — not
another diagram you'll stare at and still not trust.

**Reach for this branch when:**
- "I'm not sure if this state machine handles the edge case where X then Y."
- "Does this data model actually let me represent the case where..."
- "I want to feel out what the API should look like before writing it."
- Anything where you want to press buttons and watch state change.

Wrong question? If you're asking "what should this look like" instead, go to
[UI.md](./UI.md) — this branch is for logic, not layout.

---

## Before Writing Code

Write down two things (in the prototype README or a comment at the top of the file):

1. **The state model** — what data are we driving?
2. **The question** — what are we trying to learn?

Skipping this step is how prototypes end up answering the wrong question — and
working alone, there's no one to notice until you've already spent the hour.

---

## Building the Terminal App

### Structure

```
prototype-<name>/
├── README.md        ← question + how to run + ## Answer (blank)
├── index.ts         ← main loop
├── state.ts         ← state model + transitions
└── actions.ts       ← named user actions
```

### Implementation Rules

**State lives in memory — one object, printed in full after every action.**

```typescript
// state.ts — define the full state shape first
type State = {
  // ... your model
}

const initialState: State = { /* ... */ }
```

**Main loop pattern:**

```typescript
// index.ts
import * as readline from "readline";
import { State, initialState } from "./state";
import { actions } from "./actions";

let state: State = initialState;

function printState(s: State) {
  console.clear();
  console.log("=== STATE ===");
  console.log(JSON.stringify(s, null, 2));
  console.log("\n=== ACTIONS ===");
  Object.keys(actions).forEach((key, i) => console.log(`  ${i + 1}. ${key}`));
}

const rl = readline.createInterface({ input: process.stdin });
printState(state);

rl.on("line", (input) => {
  const index = parseInt(input.trim()) - 1;
  const actionName = Object.keys(actions)[index];
  if (actionName && actions[actionName]) {
    state = actions[actionName](state);
  }
  printState(state);
});
```

**Actions pattern — pure functions, no side effects:**

```typescript
// actions.ts
import { State } from "./state";

export const actions: Record<string, (s: State) => State> = {
  "action name here": (state) => ({
    ...state,
    // ... updated fields
  }),
};
```

### Running

Use whatever runtime fits your project:

```bash
# TypeScript
npx tsx index.ts

# JavaScript
node index.js

# Python (if that's your stack)
python main.py
```

---

## Constraints

- **No tests** — if you're writing tests, stop. This is a prototype.
- **No database** — in-memory only, unless the question IS about persistence.
- **No generalisation** — one question, one state model.
- **No blur between logic and UI** — the terminal IS the UI here. Keep it text-only.
- **Print full state** — after every action, show everything. No partial diffs.

---

## When You Have the Answer

1. Fill in the `## Answer` section of the prototype README — right now, while it's fresh.
   Solo devs lose this the fastest; there's no standup tomorrow forcing you to explain it out loud.
2. Capture it somewhere durable (ADR, commit message, or the README itself).
3. Delete the prototype directory.

If you built it in one sitting, write the answer before you close the terminal.
If you're coming back to it later, leave a `NOTES.md` with the open question so
you can pick up the thread without re-deriving it.

---

## References

The core framing of this branch — a tiny interactive terminal app for driving a
state model by hand, and the trigger phrases for when to use it — is adapted from
[mattpocock/skills/prototype/LOGIC.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/LOGIC.md)
by [Matt Pocock](https://github.com/mattpocock).

The concrete implementation (main loop, actions map, file structure) and the
solo-developer framing in "When You Have the Answer" are original additions —
written to give independent developers a copy-paste starting point instead of
inventing the TUI shell from scratch each time.
