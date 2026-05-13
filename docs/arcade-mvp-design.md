# Arcade MVP Design

This document defines the minimum parent web app for Codex Arcade before implementation.

## Current Position

```txt
Phase 1 Sprint 1/3 - Arcade MVP Design
```

## Goal

Build a simple static parent arcade site that can:

- Show the Codex Arcade concept.
- Display available and upcoming cabinets from `games.json`.
- Show free virtual credits.
- Provide an INSERT COIN / PLAY flow.
- Launch each game by link.
- Keep the structure simple enough for future agent automation.

## Minimum Folder Structure

Implementation should create or use:

```txt
codex-arcade/
  index.html
  styles.css
  arcade.js
  games.json

  assets/
    thumbnails/

  games/
    neon-core-survivor/
```

Existing planning folders remain:

```txt
docs/
agents/
```

## MVP Files

## `index.html`

Role:

- Parent arcade page.
- Loads `styles.css`.
- Loads `arcade.js`.
- Contains top-level layout only.

Expected sections:

- Header / arcade title
- Credits display
- Cabinet grid
- About / policy note

## `styles.css`

Role:

- Visual identity for the parent arcade.
- Responsive layout for desktop, tablet, and mobile viewing.
- Game card styling.
- Credit display and INSERT COIN button styling.

Design direction:

- Dark arcade base.
- Neon accents.
- Compact cabinet cards.
- Readable labels.
- No excessive decoration before the structure works.

## `arcade.js`

Role:

- Load or define game manifest data.
- Render cabinet cards.
- Manage free virtual credits through `localStorage`.
- Handle INSERT COIN / PLAY interactions.
- Open game links with `?from=arcade&credit=1`.

Phase 1 behavior:

- First visit grants free credits.
- 1 play costs 1 credit.
- If credits are empty, FREE COIN can replenish.
- Credit management stays in parent arcade.
- Games only receive launch parameters.

## `games.json`

Role:

- Parent manifest for all visible cabinets.

Initial entries:

- `neon-core-survivor`: prototype / playable soon
- `metro-mender`: concept
- `specimen-night-shift`: concept

## Initial Cabinet States

Use simple status labels:

```txt
prototype
concept
coming-soon
```

Recommended initial state:

```txt
neon-core-survivor: prototype
metro-mender: concept
specimen-night-shift: concept
```

Only playable or prototype games should have an active PLAY flow. Concept games can show a disabled or "COMING SOON" state.

## Credit and INSERT COIN Flow

Parent arcade responsibilities:

- Store credit count.
- Display credit count.
- Spend 1 credit when a playable game starts.
- Add `?from=arcade&credit=1` to launch URLs.
- Offer FREE COIN for the MVP when credits are empty.

Game responsibilities:

- Read `from=arcade` and `credit=1`.
- Show game-specific INSERT COIN flavor.
- Never manage the parent credit balance.

## MVP Out of Scope

Do not add in Phase 1:

- Real payments
- Crypto or wallet connection
- Login
- Analytics code
- Ads
- PWA
- App Store packaging
- iframe cabinet mode
- `postMessage` requirement
- Automated PR or release workflow

## Human Approval Before Implementation

Human approval is required before creating:

- `index.html`
- `styles.css`
- `arcade.js`
- `games.json`

Human approval is also required before importing or moving game implementation files.

