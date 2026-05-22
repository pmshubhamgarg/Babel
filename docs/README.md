# Babel — V2.0

> **Never be the last to know.**
> MBA Entrepreneurship Project · Group 12 · 2026

A four-page interactive prototype of the Babel intelligence platform, demonstrated against **Mamaearth** as the example client. V2.0 is a complete rebuild — Adobe-grade design system, modern SaaS dark theme, real product flow (not slide-flipping).

---

## What's new in V2.0

- **New brand system** — wordmark with the audio-bar mark, new tagline ("Never be the last to know."), dark navy palette anchored on the four logo colors.
- **Tabbed mega-pages** — fewer screens, deeper surfaces. Feels like a real product, not a deck.
- **LLM Pulse** — a brand-new core capability: 247-prompt library × 5 LLMs, share-of-voice in AI answers, drift alerts, per-model rankings & sentiment.
- **Action Center with Bulk Reply-All** — 4-step wizard that takes a cohort of 156 customers, generates **individually personalised** AI replies (not templates), runs 8 safety guardrails, and schedules dispatch.
- **Live demo interactivity** — clickable queue, tone-shifting drafts, working step wizard, generate-insights animation overlay, toast notifications.

---

## The four pages

1. **`index.html`** — Launch. Hero with live status strip, quick-access cards, today's headlines, and the "Generate Insights" animation overlay that simulates the full ingestion → synthesis → action sequence.
2. **`intelligence.html`** — Intelligence Hub. Three tabs:
   - **Social & News** — KPIs, sentiment distribution, themes, mentions feed, source breakdown.
   - **LLM Pulse** — 5 LLM cards, share-of-voice in AI, drift alerts, the prompt library.
   - **Competition** — competitor matrix, positioning quadrant, category contagion, macro signals.
3. **`actions.html`** — Action Center. Two tabs:
   - **Single Action** — queue + detail pane with AI draft, tone selector, brand-voice scoring, audit trail.
   - **Bulk Reply-All** — 4-step wizard: define cohort → AI personalisation preview → safety guardrails → schedule & dispatch.
4. **`brief.html`** — The CEO Brief. Editorial one-pager scheduled for 7 AM delivery to ceo@/cmo@.

---

## Tech

Pure static HTML/CSS/JS. No build step, no dependencies.

```
babel/
├── index.html         (Launch + generate overlay)
├── intelligence.html  (3-tab hub: Social, LLM Pulse, Competition)
├── actions.html       (Single Action + Bulk Reply-All wizard)
├── brief.html         (CEO daily brief)
├── styles.css         (Design system: tokens, components, layouts)
├── app.js             (Shell, logo SVG, tabs, modals, toasts, AI mocks)
└── README.md
```

---

## How to view locally

Open `index.html` in any modern browser. Everything renders instantly with the shared shell.

## How to deploy to Netlify (5 minutes)

1. Go to https://app.netlify.com/drop
2. Drag the `babel/` folder onto the page
3. Live URL in 30 seconds
4. Rename in Site Settings → "babel-team12"
5. Share `https://babel-team12.netlify.app`

---

## What works in the prototype

- **Full navigation** across 6 pages, top + side nav with nested Intelligence children (Social / LLM Pulse / Competition).
- **Generate Insights animation** — click the CTA on Launch, watch 6 sources connect, 4 AI stages run, then redirect to the Intelligence Hub.
- **LLM Pulse** — fully populated prompt library, drift alerts, share-of-voice bars, per-LLM cards.
- **Single Action workflow** — click any queue item to see the AI draft, swap tone with one click, approve & dispatch (toast + audit trail).
- **Bulk Reply-All wizard** — all 4 steps interactive: cohort filters → 6-row personalisation preview with highlighted personalised tokens → 8 safety guardrails → schedule picker → final dispatch toast.
- **CEO Brief** — editorial typography, full numbered insights with recommendations, approve/schedule action.

## What's intentionally faked (Wizard of Oz)

- Scraping is animated, not real API calls.
- All sample data is hand-crafted to tell the story.
- AI drafts are pre-written per item — the tone selector swaps between 3 variants per item.
- The personalisation engine is a simple template that highlights what *would* be tailored.

This is standard for concept prototypes. The goal is to make the audience *feel* the product.

---

## Demo flow (pitch script)

1. Open `index.html` — narrate the new positioning ("Never be the last to know"), point at live status strip.
2. Click **Generate Insights** — let the 90-second animation play. This is the magic moment.
3. Land on **Intelligence → Social & News**. Walk through the KPIs and the coordinated #MamaearthLies pattern.
4. Switch to **LLM Pulse**. This is the new ground. "Customers don't search Google anymore — they ask ChatGPT. We track that."
5. Switch to **Competition**. The positioning map + Patanjali contagion is the story.
6. Click into **Action Center → Single Action**. Click the Priya Sharma item. Show the AI draft, swap the tone, approve.
7. Switch to **Bulk Reply-All**. Walk all 4 steps. Land on dispatch — *do not click*, let the question hang: "*153 personalised replies, one click.*"
8. Land on **CEO Brief** — pause. "One page. Five bullets. Every morning. That's the moat."

Total: ~6 minutes.

---

*Babel — never be the last to know.*
