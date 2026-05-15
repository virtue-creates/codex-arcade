# QA Checklist

Use this checklist before a game is registered in Codex Arcade.

For headquarters intake work, also see `docs/cabinet-intake.md`.

## Startup

- Game opens from `games/[game-id]/index.html`.
- Game opens from the parent arcade link.
- No missing critical assets.
- No obvious console errors.

## UI

- Title screen exists.
- Operation instructions are visible.
- Main UI fits inside the viewport.
- Game-over or result screen exists.
- Retry option exists.
- BACK TO ARCADE link exists.

## Controls

- Declared input method works.
- Player can start the game.
- Player can lose, win, or finish the game.
- Player does not get trapped in an unplayable state.

## Arcade Integration

- `game.json` exists.
- `README.md` exists.
- `CHANGELOG.md` exists.
- `games.json` entry matches the game.
- `id`, `path`, `thumbnail`, and `creditCost` are correct.
- `?from=arcade&credit=1` works as expected.
- BACK TO ARCADE returns to the parent Arcade.
- Game does not manage the parent credit balance.
- Game works when opened directly and when launched from the parent Arcade.

## Parent Launch QA

- Parent Arcade shows the game in the correct Cabinet slot.
- Playable games can launch from the parent Arcade.
- Concept games do not launch accidentally.
- Launch URL includes `from=arcade` and `credit=1`.
- Arcade launch flavor appears in the game.
- Start button enters gameplay.
- Retry works after result/game-over if implemented.
- Returning to the parent site does not break layout.

## Device Support

- Desktop behavior checked.
- Tablet behavior checked if declared.
- Mobile behavior checked if declared.
- Non-optimized devices show a clear message or still remain usable.

## Content and Rights

- No unlicensed external assets.
- No obvious copyright or trademark risk.
- No real-money reward or payment language.
- No crypto, wallet, prize, or cash-like language in MVP.

## Current Cabinet QA Notes

Cabinet 01 `neon-core-survivor`:

- Parent launch checked.
- Arcade launch flavor checked.
- Start Run checked.
- BACK TO ARCADE checked.
- Thumbnail still pending.

Cabinet 02 `metro-mender`:

- Awaiting game chat implementation.
- Check route repair readability first.

Cabinet 03 `specimen-night-shift`:

- Awaiting game chat implementation.
- Check pin/bug causality and visual tone first.
