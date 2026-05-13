# Codex Arcade Project Rules

This document is the headquarters rulebook for Codex Arcade.

## Headquarters Chat Role

The headquarters chat manages:

- Parent arcade site design
- Folder structure
- Shared game rules
- Games manifest
- Credit and INSERT COIN policy
- QA checklist
- Game registration
- README and production logs
- GitHub and release workflow
- Future Codex agent automation

Individual game chats manage:

- Game concept
- Game implementation
- Game feel
- Game UI
- Game-specific bugs
- Game-specific README

## Minimum Future Folder Structure

```txt
codex-arcade/
  index.html
  styles.css
  arcade.js
  games.json
  README.md
  PROJECT-RULES.md

  assets/
    thumbnails/

  docs/
    game-chat-template.md
    game-interface.md
    games-manifest.md
    credits-policy.md
    qa-checklist.md
    new-game-flow.md
    agent-workflows.md
    device-support.md
    release-policy.md

  scripts/
    validate-manifest.js
    validate-game.js

  games/
    [game-id]/
      index.html
      styles.css
      game.js
      game.json
      README.md
      CHANGELOG.md
```

During the planning phase, only documentation is required.

## Game ID Rules

Game IDs must:

- Use lowercase letters, numbers, and hyphens only.
- Use no spaces.
- Use no Japanese characters.
- Be stable after public registration.

Good examples:

```txt
neon-core-survivor
coin-dash-99
pixel-ramen-panic
```

## Game Requirements

Each game should eventually:

- Run from `games/[game-id]/index.html`.
- Work as a standalone page.
- Accept `?from=arcade&credit=1` as an arcade launch signal.
- Include a BACK TO ARCADE link.
- Include title, start, play, and game-over states.
- Show score or result.
- Include `game.json`.
- Include `README.md`.

## Phase 1 Credit Rules

- Credits are free virtual arcade credits.
- 1 play usually costs 1 credit.
- Credits have no monetary value.
- Credits cannot be purchased, transferred, redeemed, refunded, or exchanged.
- INSERT COIN is a game-feel and worldbuilding mechanic, not real payment.

## Human Approval Points

A human should approve:

- New game concepts
- Title and theme
- Public release
- GitHub main branch merge
- External libraries or assets
- Any payment, wallet, crypto, reward, or ranking-prize feature
- Anything with copyright, trademark, legal, or safety risk

