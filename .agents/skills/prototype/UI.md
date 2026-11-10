---
credits: >
  Core concept adapted from mattpocock/skills/prototype/UI.md.
  Implementation code and solo-developer guidance are original — see References below.
---

# UI Prototype Branch

Design decisions get made by comparing real options side by side, not by describing
them in your head for the tenth time. This branch builds several genuinely different
directions into one page so you can click between them and feel the difference
immediately — no need to explain your taste to anyone but yourself.

Use this when the question is about **what something should look like** — layout,
interaction patterns, information hierarchy, or visual design direction.

**Reach for this branch when:**
- "Show me a few ways this could look."
- "I'm not sure how to lay out this page."
- "Prototype the dashboard / form / card / modal."
- "Try a few designs."
- "Let me play with it."

Wrong question? If you're asking "does this logic feel right" instead, go to
[LOGIC.md](./LOGIC.md) — this branch is for layout, not state.

---

## Before Writing Code

Write down two things (in the prototype README or a comment at the top):

1. **The design question** — what are we deciding? (layout? navigation? density?)
2. **The variants** — at least 3, each with a one-sentence description of its
   opinionated stance.

**Variants must be radically different** — not colour tweaks or font changes.
Different layout paradigms. Different interaction models. Different information
hierarchies. If you can't tell the difference at a glance, the variants aren't
different enough.

---

## Building the UI Prototype

### Structure

```
prototype-<name>/
├── README.md        ← question + variants list + how to run + ## Answer (blank)
├── page.tsx          ← route with variant switcher (Next.js) OR
├── App.tsx           ← root component (Vite/CRA) OR
├── index.html         ← single file (plain HTML, fastest to spin up)
├── variants/
│   ├── VariantA.tsx  ← e.g. "Card grid with sidebar filters"
│   ├── VariantB.tsx  ← e.g. "Full-width table with inline editing"
│   └── VariantC.tsx  ← e.g. "Split-pane with detail drawer"
└── data/
    └── mock.ts        ← shared mock data (realistic, not lorem ipsum)
```

### Variant Switcher — URL Param + Floating Bar

The switcher must be **always visible** and require **zero navigation** to switch.

**URL param pattern:**

```
/?variant=a   → VariantA
/?variant=b   → VariantB
/?variant=c   → VariantC
```

**Floating switcher bar (position: fixed, bottom centre):**

```tsx
// VariantSwitcher.tsx
const variants = [
  { key: "a", label: "Card Grid" },
  { key: "b", label: "Data Table" },
  { key: "c", label: "Split Pane" },
];

export function VariantSwitcher({ current }: { current: string }) {
  return (
    <div style={{
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 8,
      background: "#1a1a1a",
      padding: "10px 16px",
      borderRadius: 999,
      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      zIndex: 9999,
    }}>
      {variants.map(v => (
        <a
          key={v.key}
          href={`?variant=${v.key}`}
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            background: current === v.key ? "#fff" : "transparent",
            color: current === v.key ? "#000" : "#aaa",
            fontWeight: 600,
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          {v.label}
        </a>
      ))}
    </div>
  );
}
```

### Mock Data

Use **realistic mock data** — real-looking names, dates, amounts. Lorem ipsum breaks
the design illusion and makes it harder to evaluate information density.

```typescript
// data/mock.ts
export const mockUsers = [
  { id: "1", name: "Sarah Chen", role: "Admin", lastSeen: "2 hours ago", status: "active" },
  { id: "2", name: "Marcus Webb", role: "Editor", lastSeen: "Yesterday", status: "idle" },
  { id: "3", name: "Priya Nair", role: "Viewer", lastSeen: "3 days ago", status: "inactive" },
];
```

### Running

Use whatever gets you to a browser fastest:

```bash
# Fastest: open index.html directly (no build step)
open prototype-ui/index.html

# Next.js project
npx next dev

# Vite
npx vite
```

---

## What Makes a Good Variant

Each variant should make a **different bet** about what matters most:

| Bet          | Example layout                                    |
| ------------ | ------------------------------------------------- |
| Scannability | Data-dense table, minimal whitespace              |
| Focus        | One item at a time, full-screen detail            |
| Overview     | Card grid, lots of visual summaries               |
| Speed        | Keyboard-first, command palette                   |
| Familiarity  | Match a well-known pattern (Gmail, Notion, Figma) |

---

## Constraints

- **No real API calls** — mock everything.
- **No auth** — skip it entirely.
- **No routing beyond the variant param** — one page only.
- **No accessibility pass** — this is a question, not a product.
- **No tests** — if you're writing tests, you've left prototype territory.
- **State in memory only** — React state or module-level variables. No localStorage.

---

## When You Have the Answer

1. Switch through the variants yourself, slowly, more than once — first impressions
   lie, and without a teammate's second opinion you're the only check you get.
2. Fill in the `## Answer` section of the README — which variant, and why.
3. Note any elements from other variants worth incorporating.
4. Capture the verdict durably (ADR, commit message, or the README itself).
5. Delete or archive the prototype directory.

The goal is a decision, not a deliverable.

---

## References

The core idea of this branch — several radically different variants on one route,
switchable via URL param and a floating bar — is adapted from
[mattpocock/skills/prototype/UI.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/UI.md)
by [Matt Pocock](https://github.com/mattpocock).

The concrete implementation (the `VariantSwitcher` component, file structure, mock
data conventions, "What Makes a Good Variant" table) and the solo-developer framing
in "When You Have the Answer" are original additions.
