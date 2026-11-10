# UI Psychology Audit Checklist (85 Items)

Score: Pass / Partial / Fail / NA

---

## A. Perception Layer (20 items)

### Visual Hierarchy
- [ ] A01. Page has a clear focal point, user knows main point within 3 seconds
- [ ] A02. Information is visually differentiated by importance (size, weight, color)
- [ ] A03. Primary CTA is visually dominant, contrast ratio 4.5:1 or higher (WCAG AA)
- [ ] A04. Secondary actions are clearly lower priority than primary CTA
- [ ] A05. No visual noise, every element has a reason to exist

### Color Psychology
- [ ] A06. Primary color aligns with brand emotion (blue=trust, orange=energy, green=growth)
- [ ] A07. Red used only for errors or urgency, never for decoration
- [ ] A08. CTA button color is consistent across the entire site
- [ ] A09. Success = green, warning = yellow, error = red, consistent throughout

### White Space & Layout
- [ ] A10. Sufficient white space, page does not feel crowded
- [ ] A11. Related elements are grouped together (Gestalt proximity)
- [ ] A12. Unrelated sections have clear visual separation

### Typography
- [ ] A13. Body text size 16px or larger (mobile 14px or larger)
- [ ] A14. Line height 1.5 to 1.75x for readability
- [ ] A15. Maximum 2 typefaces across the page

### Imagery
- [ ] A16. People photos use real photos, not generic stock images
- [ ] A17. Images show results after using the product, not the product itself
- [ ] A18. All images have alt text
- [ ] A19. Images serve a purpose, none are purely decorative
- [ ] A20. Animation is meaningful (directs attention or provides feedback), not decorative

---

## B. Cognition Layer (25 items)

### Cognitive Load
- [ ] B01. Page communicates only 1 core message at a time
- [ ] B02. Navigation items 7 or fewer
- [ ] B03. Form fields are minimized, only essential information asked
- [ ] B04. Multi-step flows show a progress indicator
- [ ] B05. Users never need to memorize information to complete a task

### Information Architecture
- [ ] B06. User knows what is this, what is in it for me, and what do I do next within 3 seconds
- [ ] B07. Categories use user language, not internal jargon
- [ ] B08. Similar features are named consistently across the product
- [ ] B09. Breadcrumbs or back button help users know where they are
- [ ] B10. 404 page provides helpful guidance, not just an error message

### Decision Support
- [ ] B11. Options are 7 or fewer (Hick's Law)
- [ ] B12. Recommended option is clearly marked
- [ ] B13. Complex choices have a comparison table or decision aid
- [ ] B14. Default values are the best choice for most users
- [ ] B15. Irreversible actions require a second confirmation

### Form Experience
- [ ] B16. Field labels are always visible (no placeholder-only labels)
- [ ] B17. Real-time validation (errors shown on field blur, not only on submit)
- [ ] B18. Error messages say specifically how to fix, not just invalid format
- [ ] B19. Autofill supported for name, email, address fields
- [ ] B20. Password fields have show/hide toggle

### Feedback & State
- [ ] B21. All button clicks have immediate visual feedback under 100ms
- [ ] B22. Operations that require waiting show a loading state
- [ ] B23. Completed operations show a clear success confirmation
- [ ] B24. System status is shown where users are looking, not only in a corner toast
- [ ] B25. Actions can be undone, or user is clearly warned before irreversible actions

---

## C. Behavior Layer (25 items)

### Motivation
- [ ] C01. Primary value proposition focuses on outcome you will get, not features we have
- [ ] C02. Loss aversion language used (Do not miss or You will lose)
- [ ] C03. Scarcity or urgency shown where it genuinely exists
- [ ] C04. Clear social proof (user count, ratings, reviews)
- [ ] C05. Social proof is specific (named reviews with photos beats anonymous reviews)

### CTA Optimization
- [ ] C06. Primary CTA starts with a verb and describes the outcome (Start saving time)
- [ ] C07. Primary CTA visible above the fold
- [ ] C08. CTA repeated on long pages after each major content section
- [ ] C09. CTA has risk-reversal copy nearby (Free trial or 30-day refund)
- [ ] C10. Button size adequate (mobile 44x44px or larger, desktop 36x36px or larger)

### Trust Building
- [ ] C11. Media coverage or well-known client logos shown
- [ ] C12. Real data present (user count, time or money saved)
- [ ] C13. Pricing is transparent with no hidden fees
- [ ] C14. Cancellation or unsubscribe is easy to find
- [ ] C15. Privacy policy and data usage clearly explained

### Friction Removal
- [ ] C16. Users are not forced to register before experiencing value
- [ ] C17. SSO (Google or Apple login) available
- [ ] C18. Guest checkout available (no forced account creation)
- [ ] C19. Page load time under 3 seconds (LCP under 2.5s)
- [ ] C20. Mobile experience is fully functional

### Onboarding
- [ ] C21. User reaches core value (Aha Moment) on first use
- [ ] C22. Onboarding is 5 steps or fewer
- [ ] C23. Empty states show a prompt guiding user to take action
- [ ] C24. Onboarding completion has a reward feel (animation, achievement)
- [ ] C25. Contextual tooltips appear when needed, not all at once on login

---

## D. Overall Experience (15 items)

### Consistency
- [ ] D01. Same features use the same name and design across all pages
- [ ] D02. Design language (button styles, colors, typography) is consistent sitewide
- [ ] D03. Interaction patterns are consistent (hover effects, animation direction)

### Accessibility
- [ ] D04. Color contrast meets WCAG AA standards
- [ ] D05. Color is not the only way information is conveyed
- [ ] D06. All functions are operable by keyboard
- [ ] D07. Text can be scaled to 200% without breaking layout

### Mobile
- [ ] D08. Tap targets are 44x44px or larger
- [ ] D09. Forms trigger the correct keyboard type (number, email, phone)
- [ ] D10. Gestures are intuitive (swipe, pinch to zoom)
- [ ] D11. Important information does not depend on hover

### Error Handling
- [ ] D12. Error messages use plain language, not technical terms
- [ ] D13. Error states provide a clear recovery path
- [ ] D14. Offline state shows a friendly notice

### Overall Conversion
- [ ] D15. There is one clear primary conversion goal and the entire page serves it

---

## Scoring

Completion rate = Items passed divided by applicable items times 100%

90-100%: Excellent, maintain and monitor
75-89%: Good, fix failed items
60-74%: Acceptable, meaningful conversion improvement possible
Below 60%: Needs full redesign

## Audit Output Format

UI Psychology Audit | Product or Page Name
Date: YYYY-MM-DD | Scope: XX

Executive Summary: biggest problem, biggest opportunity, first action.

Audit Score:
- A. Perception (20 items): X/20
- B. Cognition (25 items): X/25
- C. Behavior (25 items): X/25
- D. Overall Experience (15 items): X/15
- Total: X/85

Issue Map: list all failed items by page or component

Severity Matrix: issue / severity 1-5 / fix difficulty 1-5 / priority score / owner

Optimization Roadmap:
- Week 1: copy or config changes, no engineering needed
- Week 2-3: visual updates
- Month 2: structural changes
