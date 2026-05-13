# Games Manifest

Codex Arcade should use a parent `games.json` file to list all registered games.

## Parent Manifest Example

```json
{
  "schemaVersion": 1,
  "games": [
    {
      "id": "neon-core-survivor",
      "title": "Neon Core Survivor",
      "description": "A short arcade survival game.",
      "status": "prototype",
      "genre": ["survival", "arcade"],
      "devices": ["desktop", "tablet"],
      "input": ["keyboard"],
      "orientation": "landscape",
      "path": "games/neon-core-survivor/",
      "thumbnail": "assets/thumbnails/neon-core-survivor.png",
      "creditCost": 1,
      "interfaceVersion": 1,
      "createdAt": "2026-05-13",
      "updatedAt": "2026-05-13"
    }
  ]
}
```

## Per-Game Manifest Example

Each game should eventually include `games/[game-id]/game.json`.

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
  "devices": ["desktop", "tablet"],
  "input": ["keyboard"],
  "orientation": "landscape",
  "viewport": {
    "recommendedWidth": 1280,
    "recommendedHeight": 720,
    "aspectRatio": "16:9"
  }
}
```

