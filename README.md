# Responsive Chat Interface — Project 1 (DecodeLabs)

A responsive frontend chat interface built with HTML5, CSS3, and vanilla
JavaScript only. No frameworks, no build step — open `index.html` in a
browser and it runs.

## What this is

This satisfies Project 1's brief: a responsive frontend interface for a
simple web application, using HTML/CSS/JS, with a clean and user-friendly
UI that adapts across screen sizes.

It is **not** a production AI chat product. The "AI reply" in `js/chat.js`
is a local echo — it confirms the send/receive state machine works, but
there is no model behind it. Wiring a real backend (or the Anthropic API)
is a separate task outside this assignment's scope.

## Structure

```
chat-interface/
├── index.html
├── css/
│   ├── style.css        (reset, base, CSS Grid app shell)
│   ├── tokens.css        (design tokens — colors, type, spacing, radius)
│   ├── sidebar.css       (conversation list, search, theme toggle)
│   ├── chat.css          (messages, composer, empty state, typing indicator)
│   └── responsive.css    (breakpoint table: 320 / 425 / 768 / 1024 / 1280 / 1920+)
├── js/
│   ├── utils.js          (id generation, escaping, debounce, scroll, format)
│   ├── storage.js        (localStorage read/write — no DOM access)
│   ├── theme.js          (dark/light mode, persisted + system-preference fallback)
│   ├── sidebar.js         (chat list render, search filter, rename/delete, drawer)
│   ├── chat.js           (message render, composer, auto-grow, typing indicator)
│   └── app.js            (state owner — wires every module together)
└── README.md
```

## Features implemented

- Responsive sidebar that becomes a permanent column at tablet width (768px+)
  and an off-canvas drawer below it, with backdrop dismiss and Escape-to-close
- New / rename / delete / search conversations
- Sticky header and sticky composer
- Auto-growing textarea, Enter to send, Shift+Enter for a new line
- Typing indicator and local-echo "reply" with simulated latency
- Dark mode / light mode, persisted per browser, with system-preference fallback
- All conversation state persisted to `localStorage` — refreshing the page
  keeps your conversations
- Mobile-first CSS: base styles target 320px, each `min-width` query expands
  upward through 425 / 768 / 1024 / 1280 / 1920+
- No horizontal scroll at any tested width, visible focus states on every
  interactive element, semantic landmarks (`header`, `nav`, `main`, `aside`,
  `footer`) throughout

## Design tokens

Palette taken directly from the brief: Mocha Mousse (`#A5836F`), Ethereal
Blue (`#A0D4E0`), Moonlit Grey (`#F2F0EA`). Headings in Montserrat, body in
Roboto — two font families, as specified.

## Known limitation

`js/chat.js` simulates a reply locally. To connect a real backend, replace
`simulateReply()` in `app.js` with a `fetch` call to your API and keep the
same `Chat.appendMessage()` / `Chat.showTyping()` / `Chat.hideTyping()`
calls — the rest of the state machine doesn't need to change.