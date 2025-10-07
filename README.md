# Betting Calculator

A simple React + Tailwind app to calculate winnings from American odds.

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm start
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo is configured to auto-deploy to GitHub Pages on every push to `main` using GitHub Actions.

- Vite base path is set in `vite.config.js` to `/bettingapp/` (matches repo name)
- Workflow file: `.github/workflows/deploy.yml`

Steps:
1. Push to `main` (or trigger manually via the Actions tab)
2. In GitHub, go to Settings → Pages and ensure Source is set to "GitHub Actions"
3. After the workflow finishes, your site will be available at:
   - https://kbwoodall.github.io/bettingapp/

If you fork/rename the repo, update the `base` in `vite.config.js` to `/<your-repo-name>/`.

## Logic
- If odds > 0: winnings = dollars × odds / 100
- Else (negative odds): winnings = dollars × 100 / |odds|

Inputs are rounded with Tailwind styles and the layout is centered with a pleasant green background.
