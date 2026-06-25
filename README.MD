# DecodeLabs — Full Stack Development Project 1

**Responsive Frontend Interface** · Industrial Training Kit · Batch 2026

---

## 📋 Executive Summary

This is **Project 1** of DecodeLabs' 2026 Full Stack Development internship. The core mandate is to build a **Responsive Frontend Interface** using only **HTML5, CSS3, and basic JavaScript** — no frameworks permitted.

Project 1 is positioned as both an essential prerequisite and a portfolio milestone. Completing it is **mandatory** before any other projects can be unlocked. The project outlines three strategic pillars — **Strategy, Visual Design, and Implementation** — and a six-step execution roadmap that guides interns from research and wireframing through to a final accessibility and performance audit.

| Metric | Value |
|---|---|
| Total Slides | 15 |
| Core Pillars | 3 |
| Execution Steps | 6 |
| Tech Stack | 3 (HTML5, CSS3, JS) |

---

## 🎯 Key Objectives

### Primary Goal

Build a fully responsive frontend interface for a simple web application — one that works seamlessly across **mobile, tablet, and desktop** using only pure HTML5, CSS3, and basic JavaScript.

### Technical Objectives

- [ ] Implement semantic HTML5 structure using landmark elements
- [ ] Apply responsive layout using CSS Grid (macro) and Flexbox (micro)
- [ ] Use mobile-first CSS with `min-width` media queries (768px tablet, 1024px desktop)
- [ ] Leverage CSS `clamp()` for fluid typography
- [ ] Add basic JavaScript for state management and interactivity

### Design Objectives

- [ ] Follow 2025 UI/UX aesthetic standards (warm, grounded tones)
- [ ] Use the prescribed color palette: **Mocha Mousse** (`#A5856E`), **Ethereal Blue** (`#A0D4E0`), **Moonlit Grey** (`#F2F0EA`)
- [ ] Constrain typography to max 2 font families, 3 weights (Montserrat/Inter for headings; Roboto/Open Sans for body)
- [ ] Achieve clean, user-friendly UI that passes grayscale testing

### Process Objectives

- [ ] Create an Empathy Map to uncover user pain points before coding
- [ ] Produce low-fidelity wireframes (Visily, Balsamiq, or pen & paper)
- [ ] Follow the 6-step execution roadmap in order
- [ ] Conduct a final LCP/CLS performance and WCAG accessibility audit

### Quality Gate

- [ ] Project must pass a quality verification review to earn the badge
- [ ] Completing Project 1 is mandatory to unlock all subsequent projects
- [ ] Code must adhere to strict WCAG accessibility guidelines

---

## 🛠️ Tech Stack

| Technology | Role | Description |
|---|---|---|
| **HTML5** | The Infrastructure | Semantic landmarks, right element for the right job |
| **CSS3** | The Skin | Responsive styling via Grid, Flexbox, and Container Queries |
| **JavaScript** | The Logic | Basic state management and interactivity |

> ⚠️ **Non-negotiable mandate:** *"No Frameworks. Master the fundamentals first."* This rules out React, Vue, Tailwind, Bootstrap, and all other libraries.

---

## 🎨 Design Constraints

### Color Palette (2025 Aesthetic)

| Color | Hex Code | Meaning |
|---|---|---|
| Mocha Mousse | `#A5856E` | Stability |
| Ethereal Blue | `#A0D4E0` | Trust |
| Moonlit Grey | `#F2F0EA` | Refinement |

### Typography

| Usage | Fonts | Fallback |
|---|---|---|
| Headlines | Montserrat or Inter | Geometric sans-serif |
| Body | Roboto or Open Sans | Humanist sans-serif |

**Hard constraints:** Maximum **2 font families** and **3 font weights**.

### Responsive Breakpoints

| Target | Breakpoint | Strategy |
|---|---|---|
| Mobile | Base (default) | Single column layout |
| Tablet | `min-width: 768px` | Two-column / expanded navigation |
| Desktop | `min-width: 1024px` | Full sidebar + main content grid |

---

## ✅ Requirements & Constraints

### Permitted

- ✅ HTML5 semantic elements
- ✅ CSS3 (Grid, Flexbox, Container Queries, `clamp()`)
- ✅ Vanilla JavaScript (ES6+)
- ✅ Low-fidelity wireframing tools
- ✅ Google Fonts (Montserrat, Inter, Roboto, Open Sans)

### Forbidden

- ❌ CSS frameworks (Tailwind, Bootstrap)
- ❌ JS frameworks (React, Vue, Angular)
- ❌ Fixed / non-responsive layouts
- ❌ Skipping Empathy Map or wireframe
- ❌ Skipping the final audit

---

## 🗺️ Execution Roadmap (6 Steps)

### Step 1 — Discovery
Define the **"How Might We"** problem statement. Identify the target user and application concept.

### Step 2 — Wireframe
Create **grayscale, mobile-first** low-fidelity wireframes. Validate with the grayscale rule: *"If it doesn't work in grayscale, color won't fix it."*

### Step 3 — Semantics
Implement **HTML5 landmark structure**: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.

### Step 4 — Style
Apply **CSS Grid/Flexbox** layout system and the **2025 color palette**. Use `clamp()` for fluid typography.

### Step 5 — Logic
Add **JavaScript** state management and interactivity. Keep JS minimal — if CSS can handle it, use CSS.

### Step 6 — Audit
Measure **LCP/CLS** performance metrics and run a full **WCAG accessibility** check via Lighthouse.

---

## 📅 Action Plan

### Phase 1 · Discovery & Research
- [ ] Define the application concept and identify the target user
- [ ] Create an Empathy Map (Says / Thinks / Does / Feels quadrants)
- [ ] Document at least 3 user pain points and 2 opportunities
- [ ] Write a "How Might We" problem statement to anchor the design

### Phase 2 · Wireframing
- [ ] Sketch the mobile layout first (single column)
- [ ] Add tablet layout (two-column or expanded navigation)
- [ ] Add desktop layout (full sidebar + main content grid)
- [ ] Validate all wireframes pass the grayscale test
- [ ] Export wireframes as reference before coding

### Phase 3 · HTML Semantics
- [ ] Create the project folder and initialize the git repository
- [ ] Build the HTML5 skeleton: `<!DOCTYPE html>`, `<html lang>`, `<head>` with viewport meta
- [ ] Implement landmark elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- [ ] Add all ARIA labels where semantic elements are insufficient
- [ ] Validate HTML with the W3C HTML Validator

### Phase 4 · Styling (CSS Grid + Flexbox + Palette)
- [ ] Set up CSS custom properties for the 2025 palette and typography
- [ ] Write base (mobile-first) styles: single-column layout
- [ ] Add `@media (min-width: 768px)` tablet breakpoint expansion
- [ ] Add `@media (min-width: 1024px)` desktop breakpoint with sidebar/grid layout
- [ ] Apply `clamp()` for all headings and body text sizes
- [ ] Import and configure Google Fonts (max 2 families, 3 weights)
- [ ] Apply 2025 color palette throughout all components

### Phase 5 · JavaScript Logic
- [ ] Implement hamburger menu toggle for mobile navigation
- [ ] Add any required interactive UI states (active, open/close, toggle)
- [ ] Ensure all JS interactions are keyboard-accessible
- [ ] Keep JS minimal — if CSS can handle it, use CSS

### Phase 6 · Audit & Submission
- [ ] Run Google Lighthouse in Chrome DevTools (Performance + Accessibility)
- [ ] Note and fix LCP (target < 2.5s) and CLS (target < 0.1) issues
- [ ] Fix all WCAG AA accessibility violations flagged by Lighthouse
- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Test on real mobile device or use DevTools device emulator
- [ ] Submit to DecodeLabs for quality verification

---

## ⏰ Timeline & Milestones

> The PDF implies a **one-week sprint** as the expected timeline.

| Day | Focus | Key Tasks |
|---|---|---|
| Day 1 | Discovery | Define concept, Empathy Map, "How Might We" statement |
| Day 2 | Wireframing | Mobile → Tablet → Desktop wireframes, grayscale validation |
| Day 3 | Semantics + Setup | Init git repo, HTML5 skeleton, W3C validation |
| Day 4 | Styling | Mobile-first CSS, breakpoints, 2025 palette, `clamp()` |
| Day 5 | JS + Polish | Nav toggle, interactivity, cross-browser testing |
| Day 6–7 | Audit + Submit | Lighthouse audit, fix issues, submit for verification |

### Milestones

| ID | Milestone | Deadline |
|---|---|---|
| M1 | Empathy Map + wireframes complete | End of Day 2 |
| M2 | Semantic HTML5 structure validated | End of Day 3 |
| M3 | Responsive CSS complete across all 3 breakpoints | End of Day 4 |
| M4 | JavaScript interactivity working | End of Day 5 |
| M5 | Lighthouse audit passes — LCP < 2.5s, CLS < 0.1, Accessibility 90+ | Day 6 |
| M6 | Project submitted and badge earned | Day 7 |

---

## ⚠️ Risk Assessment

| Risk Area | Description | Impact | Likelihood |
|---|---|---|---|
| Framework temptation | Using Bootstrap or Tailwind unknowingly fails the brief | 🔴 High | 🔴 High |
| Skipping wireframe | Coding without a layout plan leads to poor structure and rework | 🔴 High | 🟡 Medium |
| Non-semantic HTML | Using generic divs instead of semantic landmarks — fails accessibility | 🔴 High | 🟡 Medium |
| Desktop-first CSS | Writing desktop CSS first and patching for mobile — breaks mandate | 🟡 Medium | 🔴 High |
| Color adherence | Using off-palette colors instead of the specified 2025 palette | 🟡 Medium | 🟡 Medium |
| Font overuse | Exceeding 2 families or 3 weights — violates design constraints | 🟡 Medium | 🟢 Low |
| Audit neglect | Skipping LCP/CLS and WCAG audit — project won't pass quality review | 🔴 High | 🟡 Medium |
| Empathy Map skip | Jumping to code without user research — poor UX decisions | 🟡 Medium | 🔴 High |
| JavaScript overuse | Adding complex JS when simple CSS would suffice — scope creep | 🟢 Low | 🟡 Medium |

### Mitigation Strategies

1. Start every session by re-reading the no-frameworks mandate before touching a file
2. Complete the Empathy Map and wireframe deliverables as separate, signed-off artifacts
3. Write CSS mobile-first: base styles → `@media (min-width: 768px)` → `@media (min-width: 1024px)`
4. Use an HTML5 semantic structure checklist before writing any content markup
5. Run a Lighthouse audit (Chrome DevTools) before submitting — catches LCP, CLS, and accessibility
6. Keep a color swatch of `#A5856E`, `#A0D4E0`, `#F2F0EA` visible while coding

---

## 🧰 Recommended Tools & Resources

### Wireframing (PDF-specified)

| Tool | Description | Cost |
|---|---|---|
| Visily | AI-powered wireframing tool | Free tier available |
| Balsamiq | Classic low-fidelity wireframing | Paid, 30-day trial |
| Pen & Paper | Fastest for initial ideation | Always free |

### Development

| Tool | Description | Cost |
|---|---|---|
| VS Code | Primary code editor | Free |
| Git + GitHub | Version control and repository hosting | Free |
| Chrome DevTools | Inspect, debug, device emulation | Built in |
| W3C HTML Validator | Validate semantic HTML correctness | Free online |

### Typography (PDF-specified)

| Font | Type | Source |
|---|---|---|
| Montserrat | Headline — geometric sans-serif | Google Fonts |
| Inter | Headline alternative — geometric sans-serif | Google Fonts |
| Roboto | Body — highly readable | Google Fonts |
| Open Sans | Body alternative — humanist sans-serif | Google Fonts |

### Auditing & Quality

| Tool | Description | Cost |
|---|---|---|
| Google Lighthouse | LCP, CLS, Accessibility audit | Built into Chrome |
| axe DevTools | Deep WCAG accessibility scanning | Free browser extension |
| PageSpeed Insights | Online Lighthouse report with field data | Free |

---

## ⭐ Best Practices

### HTML
- Every page must have exactly one `<main>` element
- Use `<h1>` through `<h6>` in correct heading hierarchy — never skip levels
- All images must have meaningful `alt` attributes
- Use `<button>` for actions and `<a>` for navigation — never swap them
- Include `lang` attribute on `<html>` for screen reader language detection
- Add `<meta name="viewport" content="width=device-width, initial-scale=1">`

### CSS
- Define CSS custom properties (`:root` variables) for palette colors at the start
- Never use `px` for font sizes — use `rem` for accessibility scaling
- Write media queries using `min-width` (mobile-first) not `max-width` (desktop-first)
- Use logical properties (`padding-inline`, `margin-block`) for better internationalization
- Avoid magic numbers — use variables or calculated values
- Test in a browser at 320px width (smallest common mobile) before calling it done

### JavaScript
- Use JavaScript only where CSS cannot achieve the same result
- Never use inline event handlers (`onclick=""`) — add listeners with `addEventListener`
- Ensure all interactive elements are keyboard focusable and operable
- Avoid manipulating layout via JS — use CSS classes toggled by JS instead

### Process
- Commit to git at the end of every phase — never lose progress
- Run Lighthouse early (after styling) not just at the end
- Print out your wireframe and put it next to your screen while coding
- Follow the PDF's grayscale rule: design in grayscale first, add color second
- Treat every responsive breakpoint as a learning moment

---

## 💡 Final Recommendations

1. **Treat the Empathy Map as a real artifact, not a formality** — The PDF explicitly says *"we do not guess; we research."* An intern who documents real user insights will produce a more purposeful UI and stand out in quality review.

2. **Start with a real application idea, not a placeholder** — The brief says "simple web application" — pick something concrete (a restaurant menu, personal portfolio, event page). Real content drives better layout decisions.

3. **Use CSS custom properties for the entire design system** — Define `--color-primary`, `--color-secondary`, `--font-heading`, etc. at `:root` level. This makes it trivial to maintain the 2025 palette constraint.

4. **Run Lighthouse at every phase, not just the end** — Catching a CLS issue early is far easier than debugging it at submission. The performance audit step is a quality gate, not an afterthought.

5. **Document your wireframe decisions inside your HTML comments** — Connecting code to design intent shows maturity. Add a short comment above each landmark element explaining what user need it serves.

6. **Build the mobile version to pixel-perfection before touching media queries** — The mobile-first mandate means the base stylesheet is the product. Many interns write bad mobile CSS and patch it — this is the opposite of what the PDF teaches.

---

## 📝 Conclusion

Project 1 from DecodeLabs is a thoughtfully structured, professionally scoped internship brief. It is not merely a coding exercise — it is a **complete frontend engineering workflow** compressed into one week, spanning user research, visual design systems, semantic engineering, responsive CSS architecture, JavaScript interactivity, and performance auditing.

The no-frameworks mandate is deliberate and pedagogically sound: interns who master CSS Grid, Flexbox, and semantic HTML without a library crutch will have **transferable skills** that apply across any future stack. The 2025 aesthetic palette and typography constraints train professional design discipline. The six-step execution roadmap mirrors real industry workflows.

An intern who executes this project faithfully — completing the Empathy Map, building grayscale wireframes, writing mobile-first semantic code, and passing a Lighthouse audit — will emerge with a **genuine portfolio artifact** and the foundational competencies required for every subsequent full stack project in the DecodeLabs program.

### Success Factors

| Priority | Factor |
|---|---|
| 🟢 Required | Follow the 6-step roadmap in strict order |
| 🔴 Critical | No frameworks — this is the single most common disqualifier |
| 🟡 Important | Complete the Empathy Map and wireframes before any coding begins |
| 🔵 Required | Write CSS mobile-first with `min-width` breakpoints at 768px and 1024px |
| 🔵 Required | Use semantic HTML5 landmarks throughout — no div-only markup |
| 🟢 Required | Pass a Google Lighthouse audit before submitting |

---

## 📞 Contact

**DecodeLabs** — Greater Lucknow, India  
📧 decodelabs.tech@gmail.com

---

*This README was generated from the DecodeLabs Full Stack Development Project 1 Industrial Training Kit analysis.*
