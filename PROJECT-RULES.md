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
- Business and monetization workflow

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
docs/business-and-monetization.md
```

## Scheduling Practice

Codex Arcade uses phases and lightweight sprints.

Phases describe the broad stage of the project.

Sprints describe the current short work unit.

Sprint labels should use this style:

```txt
Phase 0 Sprint 4/4
```

The project uses three progress terms:

```txt
CLEARED
Completed work.

IN PLAY
Active work. Multiple parallel workstreams are allowed because Codex Arcade is an AI-agent company.

UP NEXT
Work that is close, but not active yet.
```

See:

```txt
docs/roadmap.md
docs/sprint-plan.md
docs/backlog.md
```

Before starting a new implementation sprint, the headquarters chat should confirm:

- Current phase
- Current sprint
- Goal
- Done criteria
- Human approval points
- Documents that may need updates

## Roadmap Versioning

`docs/roadmap.md` is the current roadmap.

`docs/roadmap-history.md` records major roadmap and operating-model changes.

Create a roadmap history entry when a decision changes:

- Project phases
- Sprint structure
- Department responsibilities
- Automation model
- Public product direction
- Marketing, analytics, monetization, or safety strategy

## Communication Policy

Use `docs/communication-policy.md` for project communication rules.

In short:

- Human-facing docs should be Japanese-first.
- Code, JSON keys, file names, and structural identifiers may remain English.
- Public UI should be Japanese-first with arcade terms in English when useful.
- Department agents should separate human-originated direction, agent-drafted input, co-developed ideas, risks, alternatives, tradeoffs, and recommendation.
- Agent outputs are drafts and inputs, not automatic decisions. See `docs/human-agent-collaboration.md`.

## Department Operating Model

Use `docs/department-operating-model.md` for department responsibilities and handoff rules.

In short:

- Marketing leads audience, positioning, and funnel strategy.
- Creative translates strategy into visual direction, atmosphere, and interaction.
- Headquarters organizes, records, decides, and implements.
- QA challenges whether the result works.
- Policy & Safety stops risky language or mechanics.
- Automation supports co-creation; it does not remove human judgment.
