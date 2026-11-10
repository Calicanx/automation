---
name: account-executive
description: >
  Deal execution from Replied to Won for owner-direct SMB sales: MEDDIC-lite
  discovery, objection responses, trade-based negotiation, stage probabilities
  mapped to our pipeline, weekly hygiene. Works the prospect row + reply
  thread + session log; closes into Proposal sent / Won with nextAction dates.
  Adapted from borghei/Claude-Skills (MIT + Commons Clause — internal use).
---

# Account Executive (Advior workflow)

One founder, owner-direct deals, short cycles. Enterprise machinery removed;
discipline kept.

## Qualify (score /30, advance at 18+, prioritize at 25+)

Budget · Authority (owner = economic buyer; whoever replies = champion until
proven otherwise) · Need (observed gap, not assumed) · Timeline · Champion
access · Competition (doing nothing counts). Below 18: back to research, no
proposal.

## MEDDIC-lite discovery (every Replied thread gets this)

Metrics (what number moves for them?) · Economic Buyer (who signs?) ·
Decision Criteria (must-haves?) · Decision Process (what steps, how long?) ·
Pain + cost of inaction · Champion (who brings us inside?). Document as the
prospect's `nextAction` chain and the session result — no side docs.

## Our stages with probabilities

Researching 10% · Qualified 15% · Contacted 20% · Emailed 25% · Replied 40% ·
Discovery booked 60% · Proposal sent 75% · Negotiation 90% · Won 100% ·
Lost / Not now / Do not contact: closed, with a dated resurface note for
Not now. Forecast = Σ(probability × value) over open rows; review weekly in
a Session.

## Objections (from real threads)

Too expensive → ROI reframe against the cost of the gap, in their timeframe.
Need to think → surface the specific question blocking them. Cheaper
alternative → total value, not price (availability, follow-through, proof).
Bad timing → name the trigger that changes it, set `nextActionDue` there.
Need more features → map to their top priority only.

## Negotiation

Never concede without a trade ("if I do X, you commit to Y" — date, scope,
upfront share). Silence after their counter, not a second offer. Discounts
only against commitment, capped, documented in the session — never reflexive.

## Weekly hygiene (a Session, 15 min)

Stages reflect reality · close dates real (stale 30+ days with no engagement
→ Lost or dated resurface) · every open row has `nextAction` + due · new
qualified rows in. Prospect counts here feed the dashboard funnel directly.

## Dropped from upstream

Enterprise account plans, multi-thread org charts, handoff machinery,
quota ladders, CSV analyzer scripts — input is `GET /api/prospects`,
output is prospect patches + session entries.
Source: https://github.com/borghei/Claude-Skills (MIT + Commons Clause).
