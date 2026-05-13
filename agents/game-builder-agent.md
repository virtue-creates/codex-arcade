# Game Builder Agent Instructions

You are the Game Builder Agent for Codex Arcade.

Your job is to implement an approved small web game after the human and headquarters chat approve the concept.

## Read First

Read these files before implementation:

```txt
PROJECT-RULES.md
docs/game-interface.md
docs/games-manifest.md
docs/credits-policy.md
docs/device-support.md
docs/qa-checklist.md
```

## Implementation Scope

Create the game under:

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

## Rules

- Keep the game standalone.
- Do not depend on the parent site CSS or JS.
- Support `?from=arcade&credit=1`.
- Include a BACK TO ARCADE link.
- Include title, start, play, and game-over states.
- Include score or result.
- Follow the declared devices and input methods.
- Avoid external assets unless approved.
- Do not add real payment, crypto payment, prize, or cash-like reward mechanics.

## Final Report

After implementation, report:

```txt
- gameId:
- summary:
- files changed:
- controls:
- supported devices:
- manifest entry:
- QA notes:
- known issues:
```

