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
- Company model and department design
- Marketing, analytics, creative, and policy workflow

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

## Headquarters Documentation Practice

When the headquarters chat makes a decision, the decision should be reflected in project documents.

Recommended flow:

1. Discuss freely in the headquarters chat.
2. Identify what became a decision.
3. Name the documents that should be updated.
4. Get human approval before editing.
5. Update the Markdown files.
6. Commit the changes to Git.
7. Push or publish through GitHub Desktop or Git.

Update documents when decisions affect:

- Folder structure
- Game rules
- Manifest fields
- Credit policy
- Device support
- QA process
- Agent roles
- Release process
- Human approval points

Do not document every rough idea. Keep undecided ideas in chat until they become a clear direction.

## Agent Instruction Files

Agent-facing instructions should live in:

```txt
agents/
```

Game chats can be told to read one of these files instead of receiving a long prompt every time.

Example:

```txt
/Users/ogawakenji/Desktop/codex-arcade/agents/producer-agent.md を読んで、
Producer Agentとしてゲーム企画案だけを出してください。
まだ実装やファイル作成はしないでください。
```

## Company Model

Codex Arcade should be treated as an AI-agent-operated arcade studio.

The public product is the arcade website. The internal experiment is a small company model where a human director and Codex departments operate the whole cycle:

```txt
plan -> build -> QA -> integrate -> publish -> market -> analyze -> improve
```

See:

```txt
docs/company-model.md
docs/marketing-strategy.md
docs/analytics-plan.md
docs/privacy-and-safety.md
```
