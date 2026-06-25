# DecodeLabs — Project 1: Responsive Frontend Interface

> Full Stack Development · Industrial Training Kit · Batch 2026

## About

A responsive frontend web application built with **HTML5**, **CSS3**, and **vanilla JavaScript** as part of the DecodeLabs Full Stack Development internship program. This project demonstrates mobile-first responsive design, semantic markup, and modern UI/UX principles — without the use of any frameworks or libraries.

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Semantic structure and landmark elements |
| CSS3 | Responsive layout (Grid, Flexbox), fluid typography (`clamp()`) |
| JavaScript (ES6+) | State management and interactivity |

> **No frameworks or libraries are used.** No React, Vue, Angular, Bootstrap, or Tailwind.

## Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Mocha Mousse | `#A5856E` | Primary — stability and warmth |
| Ethereal Blue | `#A0D4E0` | Secondary — trust and clarity |
| Moonlit Grey | `#F2F0EA` | Background — refinement and neutrality |

### Typography

| Role | Font | Type |
|---|---|---|
| Headings | Montserrat / Inter | Geometric sans-serif |
| Body | Roboto / Open Sans | Humanist sans-serif |

**Constraints:** Max 2 font families, 3 font weights.

### Responsive Breakpoints

| Device | Breakpoint | Layout |
|---|---|---|
| Mobile | Default | Single column |
| Tablet | `min-width: 768px` | Two-column |
| Desktop | `min-width: 1024px` | Full grid with sidebar |

## Project Structure

```
web-frontend/
├── index.html      # Semantic HTML5 structure
├── style.css       # Mobile-first responsive styles
├── script.js       # Vanilla JS interactivity
└── README.MD
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sagungiri123/Decodeslabs.git
   ```

2. Open `index.html` in a browser, or use a live server:
   ```bash
   # VS Code Live Server, or:
   npx serve .
   ```

## Key Requirements

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Mobile-first CSS using `min-width` media queries
- CSS Grid for page-level layouts, Flexbox for component-level layouts
- Fluid typography with `clamp()`
- WCAG accessibility compliance
- Performance targets: LCP < 2.5s, CLS < 0.1

## Author

**Sagun Giri**
DecodeLabs · Full Stack Development Intern · Batch 2026

## Contact

📧 decodelabs.tech@gmail.com
📍 Greater Lucknow, India

## License

This project is part of the DecodeLabs internship program.
