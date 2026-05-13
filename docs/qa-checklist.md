# QA Checklist

Use this checklist before a game is registered in Codex Arcade.

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
- `games.json` entry matches the game.
- `id`, `path`, `thumbnail`, and `creditCost` are correct.
- `?from=arcade&credit=1` works as expected.

## Device Support

- Desktop behavior checked.
- Tablet behavior checked if declared.
- Mobile behavior checked if declared.
- Non-optimized devices show a clear message or still remain usable.

## Content and Rights

- No unlicensed external assets.
- No obvious copyright or trademark risk.
- No real-money reward or payment language.

