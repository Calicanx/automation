---
name: spam-word-checker
description: >
  Always-on spam and deliverability guardrails for outreach copy. Apply
  whenever writing, reviewing, or approving subject lines, openers, bodies,
  follow-ups, or CTAs on the Advior Sales Outreach page — especially at the
  draft → approved transition. Auto-triggers whenever campaign-copywriting
  output is handed over.
  Adapted from growthenginenowoslawski/coldoutboundskills (MIT).
---

# Spam Word Checker (Advior workflow)

This is the gate between `draft` and `approved`. Any flagged line bounces the
record to `needs-rewrite` with the specific violation in `reviewNote` — never
approve copy with unresolved flags.

## Banned single words

`get`, `bank`, `credit`, `access`, `open`, `compare`, `problem`, `now`,
`billing`, `deal`, `finance`, `financial`, `claims`, `insurance`, `mortgage`,
`soon`, `new`, `performance`, `freedom`, `home`, `sales`, `medical`, `urgent`,
`life`, `marketing`, `investment`, `diagnostics`, `friend`, `cash`, `invoice`,
`extra`, `purchase`. Hyphens/splits don't sanitize (`cash-cycle` = `cash`).

## Banned short phrases

`off chance`, `one time`, `all good`, `following up here`, `last note from me
here`, `great fit`, `bumping this once`, `just following up once`,
`circle back`, `one more quick follow-up`, `keep this open`, `compare notes`,
`appreciate the reply`.

## Banned pressure / promo wording (selection)

`act now`, `guaranteed`, `free consultation`, `free trial`, `limited time`,
`make money`, `increase revenue`, `risk-free`, `winner`, `urgent`, `today`,
`discount`, `click here`, `order now`, `amazing`, `fantastic`, `incredible`,
`once in a lifetime`, `while supplies last`. Full catalog: rewrite hype into
plain observational language, pressure into permission.

## Banned phishing-style language

`verify identity`, `confirm your details`, `account update`, `password reset`,
`click to verify`, `final notice`, `immediate action required`, `download now`.

## Formatting bans

No em dashes · no ALL CAPS · no multiple `!!!` · no greeting prefix before the
first name · no third-person company references · no fake urgency or
misleading subjects.

## Unsubscribe / closeout rule

Never promise that silence stops the sequence ("I'll take silence as a no").
Only explicit user action stops it ("reply 'pass' and I'll step out"). Our
opt-out path is the `Opt-out` classification + `Do not contact` stage, which
excludes the prospect from all future counts.

## Rewriting logic

Hype → plain observation · pressure → permission · promo → specific business
language · AI-polished → spoken plainly · filler bump → direct next-step
question. When in doubt, choose the lower-hype rewrite.

## Workflow (`PATCH /api/outbound/{id}` moves the record)

1. Scan subject + body against every list above.
2. Flags cleared → record may move to `approved`.
3. Flags fired → set `needs-rewrite` + note each violation with its rewrite,
   hand back to copywriting, re-run this check after.

## Dropped from upstream

Upstream spinner/upload routing. Our next step after a clear scan is the
dashboard Approve button, not an uploader.
Source: https://github.com/growthenginenowoslawski/coldoutboundskills (MIT).
