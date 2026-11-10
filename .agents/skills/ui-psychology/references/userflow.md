# User Flow Psychology Framework

## PACE Model

At every step of every user flow, the user's psychology shifts across four dimensions:

P — Pain: How urgent is the user's problem right now?
A — Anxiety: How nervous is the user about continuing?
C — Confidence: Does the user believe they can complete this?
E — Energy: How much effort is the user willing to invest?

Design principles:
- Flow entry: Pain must be high enough to motivate continuation
- Every step: Reduce Anxiety (remove doubts, provide assurances)
- Every step: Increase Confidence (small wins, progress feedback)
- High Energy requirements only after Confidence is established

---

## Common Flow Types & Strategies

### Signup / Login Flow
Core barrier: Why should I give you my data? Will I get spammed?

| Step | Strategy | Design |
|------|----------|--------|
| Entry point | Reciprocity | Show free trial or get XX instantly before asking for email |
| Email input | Trust building | We never spam plus privacy policy link |
| Password | Reduce Cognitive Load | Real-time strength indicator, show password toggle |
| Verification | Anticipation | Your account is being set up, verify to start using XX |
| Completion | Peak-End Rule | Welcome page with animation plus personalized greeting |

Key decisions:
- SSO (Google/Apple) strongly recommended, boosts conversion 30-50%
- Phone verification: each extra step loses 15-25% of users
- Consider enter first, verify later to reduce friction

### Onboarding Flow
Core barrier: How long will setup take? Is this right for me?

| Step | PACE | Strategy | Design |
|------|------|----------|--------|
| Welcome | Pain up, Anxiety up | Confirm pain point | Built for job title like you |
| Quiz | Anxiety down | Commitment & Consistency | 2-3 questions to get user invested |
| Core feature | Confidence up | Progressive disclosure | Show only the top 1 core feature |
| First action | Energy down | Lower the barrier | Simplest possible action |
| Aha Moment | Confidence high | Peak-End Rule | Show results immediately, give visual reward |
| Checklist | Zeigarnik | Progress pull | Show 3 of 5 complete |

Aha Moment rules:
- Must be reachable within 5 minutes
- Must show the user's own real data, not demo data
- Must have visual celebration (animation, confetti)

### Purchase / Checkout Flow
Core barrier: Am I wasting money? Is payment secure? Can I get a refund?

| Step | Strategy | Design |
|------|----------|--------|
| Product page | Anchoring | Crossed-out original price then current price |
| Add to cart | Zeigarnik | Show cart count badge |
| Cart page | Loss Aversion | Limited stock plus X people viewing |
| Data entry | Reduce Cognitive Load | SSO autofill, guest checkout |
| Payment | Trust building | SSL lock plus card icons plus refund guarantee |
| Confirmation | Peak-End Rule | Order animation plus you made a great choice |

Key data:
- Forced account creation increases abandonment by 35% (Baymard Institute)
- Hidden fees at the end is the number 1 cause of abandonment (48%)
- Refund guarantee near CTA lifts conversion 20-30%

### Upgrade / Paid Conversion Flow
Core barrier: Is my free tier good enough? Is upgrading worth it?

| Trigger | Strategy | Design |
|---------|----------|--------|
| Feature locked | Loss Aversion | You are trying to use a Pro feature, show what unlocks |
| Usage near limit | FOMO + Scarcity | You have used 80% of your quota, red progress bar |
| Trial countdown | Loss Aversion | Your Pro trial ends in 3 days, you will lose... |
| Pricing page | Anchoring | Show Enterprise first, then Pro |
| CTA | Framing | Continue with Pro beats Upgrade to Pro |

### Re-engagement Flow
Core barrier: I have gotten used to not having this product.

| Timing | Strategy | Design |
|--------|----------|--------|
| 3 days inactive | Zeigarnik | Your project name is waiting for you plus screenshot |
| 7 days inactive | Loss Aversion | Your progress resets in X days |
| 14 days inactive | Social Proof | Your colleague Alex just completed XX |
| 30 days inactive | Reciprocity | New feature or free gift to lower return barrier |

---

## Friction Classification

| Friction Type | Psychology Cause | Impact | Solution |
|--------------|-----------------|--------|---------|
| Decision friction: too many options | Hick's Law | High | Remove options, add recommendations |
| Information friction: unclear why field needed | Trust deficit | High | Explain purpose next to field |
| Memory friction: forgot what to fill mid-form | Cognitive Load | Medium | Floating label, step summary |
| Time friction: unknown time commitment | Anxiety | Medium | Show Takes about 2 minutes or 3 steps total |
| Trust friction: unsafe feeling | Loss Aversion | High | Security badges, refund guarantee |
| Technical friction: too complex or errors | Cognitive Load | High | Real-time validation, autofill, clear errors |

---

## Branch Logic & Recovery

| Abandonment Point | Detection | Recovery | Example |
|------------------|-----------|---------|---------|
| 30+ sec without action | Behavior tracking | Trigger help prompt | ChatBot activated |
| Starts filling then leaves | Session detection | Recovery email | Your application is halfway done |
| Leaves at payment | Exit-intent | Popup offer | Here is your exclusive 10% discount |
| Leaves after pricing | Exit-intent | Lower barrier | Try free for 14 days first |

---

## Emotional Journey Map Template

| Step | Inner Monologue | Emotion | Pain | Anxiety | Confidence | Design Response |
|------|----------------|---------|:----:|:-------:|:----------:|----------------|
| 1 | ... | Curious | High | Med | Low | [decision] |
| 2 | ... | Hopeful | Med | Med | Med | [decision] |
| 3 | ... | Anxious | Low | High | Med | [decision] |
| 4 | ... | Relieved | Low | Low | High | [decision] |
