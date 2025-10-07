# Betting Calculator

A simple React + Tailwind app to calculate winnings from American odds.

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Logic
- If odds > 0: winnings = dollars × odds / 100
- Else (negative odds): winnings = dollars × 100 / |odds|

Inputs are rounded with Tailwind styles and the layout is centered with a pleasant green background.
