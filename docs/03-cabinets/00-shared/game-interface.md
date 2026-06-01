# Game Interface

This document defines the shared interface each Codex Arcade game should follow.

## Required Launch Path

Each game should run from:

```txt
games/[game-id]/index.html
```

The game should also work when opened directly in a browser.

## Arcade URL Parameters

The parent arcade may launch a game with:

```txt
games/[game-id]/?from=arcade&credit=1
```

Meaning:

- `from=arcade`: launched from Codex Arcade.
- `credit=1`: a free virtual credit has been inserted.

Phase 1 does not require strict security. This is for UX and worldbuilding.

## Required Game States

Each game should include:

- Title screen
- Start state
- Active play state
- Game-over or result state
- Retry option
- BACK TO ARCADE link

## Future postMessage Events

Future iframe cabinet mode may use:

```js
window.parent.postMessage({
  source: "codex-arcade-game",
  version: 1,
  type: "GAME_OVER",
  gameId: "example-game",
  score: 12345,
  durationMs: 90000,
  result: "clear"
}, "*");
```

Phase 1 games may set `supportsPostMessage` to `false`.

