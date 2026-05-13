# New Game Flow

Use this flow for adding a new game to Codex Arcade.

## 1. Concept

The game chat proposes:

- Game ID
- Title
- One-line concept
- Genre
- Target devices
- Input method
- Core loop
- Score system
- MVP scope
- Risks
- Manifest draft

## 2. Human Approval

The human approves the concept, title, theme, and scope before implementation.

## 3. Implementation

The game chat creates the game under:

```txt
games/[game-id]/
```

Expected files:

```txt
index.html
styles.css
game.js
game.json
README.md
CHANGELOG.md
```

## 4. QA

Run the QA checklist in `docs/qa-checklist.md`.

## 5. Thumbnail

Create or capture a thumbnail:

```txt
assets/thumbnails/[game-id].png
```

## 6. Arcade Registration

Add the game to `games.json`.

## 7. Documentation

Update:

- Root README if needed
- Game README
- Changelog or production log

## 8. Release

Create a Git branch, commit, review, merge, and publish through GitHub Pages.

## Headquarters Documentation Updates

When this flow changes, update the project documents before or alongside implementation.

Recommended update targets:

- `PROJECT-RULES.md` for global rules
- `docs/decision-log.md` for decisions
- `docs/game-interface.md` for game requirements
- `docs/games-manifest.md` for manifest fields
- `docs/qa-checklist.md` for QA changes
- `docs/agent-workflows.md` for automation roles

The headquarters chat should explain which files will change before editing them.

