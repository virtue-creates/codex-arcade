# Cabinet 01 Integration Plan

Cabinet 01:

```txt
gameId: neon-core-survivor
title: Neon Core Survivor
source: /Users/ogawakenji/Desktop/Game_test_001/codex_Game_test_001
target: /Users/ogawakenji/Desktop/codex-arcade/games/neon-core-survivor/
```

## Current Status

`Neon Core Survivor` is a playable standalone prototype.

Cabinet 01 chat has completed the first arcade-integration preparation pass.

Current implementation:

- Static HTML/CSS/JavaScript
- Canvas game
- One-screen neon bullet-survivor
- 180-second survival goal
- HP, score, wave, and XP gauge
- Enemy spawning
- Enemy bullets
- Auto shot
- XP orbs
- Level-up with three upgrade choices
- Game-over and retry flow

Prepared in the standalone prototype:

- `?from=arcade&credit=1`
- `1 CREDIT INSERTED` / `Core online...` title-screen flavor
- BACK TO ARCADE link on the title screen
- BACK TO ARCADE link on the result screen
- `game.json`
- `CHANGELOG.md`
- README updates for Codex Arcade Cabinet 01

Still not done:

- Sound
- `postMessage`
- Migration into the Codex Arcade repository

## Existing Source Files

```txt
/Users/ogawakenji/Desktop/Game_test_001/codex_Game_test_001/
  index.html
  styles.css
  game.js
  README.md
```

## Target Files

```txt
games/neon-core-survivor/
  index.html
  styles.css
  game.js
  game.json
  README.md
  CHANGELOG.md

assets/thumbnails/neon-core-survivor.png
```

## Arcade Parameter Support

Phase 1/2 behavior:

- Use `URLSearchParams` to read `from` and `credit`.
- If `from=arcade&credit=1`, show `1 CREDIT INSERTED` / `CORE ONLINE` flavor on the title screen.
- Direct launch should still work.
- The game must not manage parent arcade credit balance.
- No payment, purchase, crypto, reward exchange, or cash-like behavior.

## BACK TO ARCADE

Add a BACK TO ARCADE link:

- On the title screen
- On the game-over / clear screen

Recommended link:

```txt
../../index.html
```

This should work for the planned GitHub Pages folder layout.

## `game.json`

```json
{
  "schemaVersion": 1,
  "id": "neon-core-survivor",
  "title": "Neon Core Survivor",
  "version": "0.1.0",
  "entry": "index.html",
  "creditCost": 1,
  "supportsArcadeParams": true,
  "supportsPostMessage": false,
  "devices": ["desktop"],
  "input": ["keyboard", "mouse"],
  "orientation": "landscape",
  "viewport": {
    "recommendedWidth": 1280,
    "recommendedHeight": 720,
    "aspectRatio": "16:9"
  }
}
```

## Parent `games.json` Entry

```json
{
  "id": "neon-core-survivor",
  "title": "Neon Core Survivor",
  "description": "A neon one-screen bullet-survivor where the player holds the arena for 180 seconds.",
  "status": "prototype",
  "genre": ["survival", "bullet-hell", "arcade"],
  "devices": ["desktop"],
  "input": ["keyboard", "mouse"],
  "orientation": "landscape",
  "path": "games/neon-core-survivor/",
  "thumbnail": "assets/thumbnails/neon-core-survivor.png",
  "creditCost": 1,
  "interfaceVersion": 1,
  "createdAt": "2026-05-13",
  "updatedAt": "2026-05-14"
}
```

## README Updates

README should include:

- Cabinet 01 status
- Play instructions
- Controls
- Goal
- Arcade interface
- Device support
- Phase 1 limitations

## Thumbnail Direction

Recommended Phase 1 thumbnail:

```txt
In-game screenshot with neon arena, player, enemies, bullets, and core action visible.
```

File:

```txt
assets/thumbnails/neon-core-survivor.png
```

## Integration Risks

- Relative paths need to be checked after migration.
- BACK TO ARCADE must not obstruct the game HUD.
- Desktop-only support is appropriate for Phase 1.
- Performance should be checked when bullets, enemies, and particles increase.
- Strong glow effects may reduce thumbnail readability.
- `supportsPostMessage` remains `false`, so parent score collection is out of scope.

## Headquarters Decisions

- Existing files may be copied into `games/neon-core-survivor/` during Phase 2.
- Phase 1/2 device support is desktop only.
- BACK TO ARCADE should use `../../index.html`.
- The game may include light `CORE ONLINE` / INSERT COIN flavor.
- `supportsPostMessage` should remain `false` for MVP.
- The first thumbnail should be an in-game screenshot.
- Parent `games.json` status should be `prototype`.

## 2026-05-15 Cabinet 01 Report Review

Cabinet 01 reported:

- Arcade launch parameter support is prepared.
- Direct launch remains playable.
- BACK TO ARCADE links were added.
- `game.json` and `CHANGELOG.md` were added.
- README was updated.
- Game logic was not changed.
- `node --check game.js` passed.
- `game.json` parsed correctly.
- Direct local launch and arcade-parameter launch were checked.

Headquarters response:

- `../../index.html` is approved for BACK TO ARCADE after migration into `games/neon-core-survivor/`.
- `devices: ["desktop"]` is approved for Phase 1/2.
- `supportsPostMessage: false` is approved for Phase 1/2.
- Next step may copy the prepared prototype into `codex-arcade/games/neon-core-survivor/`.
- Parent `games.json` is already prepared with `status: "prototype"`; it becomes truly playable after migration and QA.
