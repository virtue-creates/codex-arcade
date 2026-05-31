# Neon Core Survivor

Codex Arcade Cabinet 01: a tiny neon bullet-survivor prototype built with plain HTML, CSS, and Canvas.

## Play

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173
```

Arcade launch flavor is available with:

```text
http://127.0.0.1:4173/?from=arcade&credit=1
```

## Goal

Survive for 120 seconds, collect sync shards, and choose core upgrades as the arena escalates.

## Controls

- WASD / arrow keys: move
- Mouse: aim
- Space: dash
- Sound Off / Sound On: toggle BGM and minimal sound effects

## Codex Arcade Interface

- `gameId`: `neon-core-survivor`
- `creditCost`: 1 free virtual credit
- Supports `?from=arcade&credit=1` as an arcade launch signal
- Includes `BACK TO ARCADE` links on the title and result screens
- `supportsPostMessage`: false for Phase 1

The game does not manage the parent arcade credit balance and does not include payment, crypto, prizes, or cash-like rewards.

## Audio

- BGM: ../../assets/audio/neon-core-run.mp3
- BGM starts after Start Run by default. Use Sound Off to mute BGM and SFX.
- BGM fades out on clear or game over.
