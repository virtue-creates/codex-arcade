# Roadmap History

This file records major roadmap and operating-model changes.

Use this for changes that affect:

- Project phases
- Sprint structure
- Department responsibilities
- Automation model
- Public product direction
- Marketing, analytics, monetization, or safety strategy

`docs/roadmap.md` is the current version. This file explains how it evolved.

## Current Version

```txt
Roadmap Version: v0.7
Last Updated: 2026-05-15
```

## v0.1 - Headquarters Foundation

Date:

```txt
2026-05-13
```

What changed:

- Created the Codex Arcade headquarters folder.
- Added initial project rules.
- Added game interface, manifest, QA, new-game flow, credits policy, and release policy docs.
- Connected the project to Git and GitHub.

Why:

- Chat-only planning was getting hard to follow.
- The project needed visible rules that game chats and future agents could read.

Impact:

- Headquarters became the source of truth for parent site rules and project coordination.

## v0.2 - Initial Cabinet Pipeline

Date:

```txt
2026-05-13
```

What changed:

- Reviewed the first three game concepts.
- Set initial cabinet order:
  - Cabinet 01: `neon-core-survivor`
  - Cabinet 02: `metro-mender`
  - Cabinet 03: `specimen-night-shift`
- Added `docs/game-pipeline.md`.

Why:

- The project needed a clear first lineup before building the parent arcade.

Impact:

- Cabinet 01 became the first integration target.
- Cabinet 02 and 03 became concept cabinets for later phases.

## v0.3 - AI Studio Company Model

Date:

```txt
2026-05-13
```

What changed:

- Reframed Codex Arcade as an AI-agent-operated arcade studio, not only a game website.
- Added company model docs.
- Added department agents for:
  - Creative
  - Marketing
  - Analytics
  - Policy & Safety
- Added privacy and safety direction.
- Added business and monetization department.

Why:

- The deeper goal became experiencing an AI-agent company, including game development, QA, marketing, analytics, publishing, and monetization.

Impact:

- The project gained a company structure.
- Future work could be assigned to departments instead of one general Codex role.

## v0.4 - Phase and Sprint Operating System

Date:

```txt
2026-05-14
```

What changed:

- Added phase-based roadmap.
- Added lightweight sprint planning.
- Added backlog.
- Adopted `CLEARED`, `IN PLAY`, and `UP NEXT`.
- Changed sprint labels to `Phase N Sprint X/Y`.
- Reworked the roadmap into three layers:
  - Roadmap Board
  - Phase Board
  - Current Board

Why:

- The human needed a clearer way to see what was done, what was active, and what was next.
- The project also needed a structure that future agents could follow.

Impact:

- Phase 0 was marked as the company foundation.
- Phase 1 started as the Arcade MVP build phase.

## v0.5 - Arcade Experience Reorientation

Date:

```txt
2026-05-14
```

What changed:

- Built the first Arcade MVP shell.
- Human feedback showed the shell worked structurally but did not feel like an arcade.
- Added `docs/mvp-shell-feedback.md`.
- Added `docs/arcade-experience-brief.md`.
- Added Marketing/Creative prompts for arcade-feeling redesign.
- Expanded Marketing Agent from copy support to strategic marketing leadership.
- Added `docs/organization-map.md`.
- Added Created / Covered / Planned status for company positions.
- Identified Product & Experience as an important function currently covered by Headquarters, Marketing, and Creative.

Why:

- The public-facing site needed to prioritize arcade feeling over internal project status.
- The company model needed clearer role status and stronger strategic ownership.

Impact:

- Phase 1 Sprint 2/3 now includes Marketing/Creative arcade-feeling redesign.
- Public UI should remove internal Phase/Sprint labels.
- Marketing and Creative should brainstorm before the next visual iteration.

## v0.6 - Human-Agent Co-Creation Operating Model

Date:

```txt
2026-05-14
```

What changed:

- Clarified that Codex Arcade社 is currently a human + AI department co-creation company, not a fully automatic company.
- Added `docs/department-operating-model.md`.
- Strengthened `docs/human-agent-collaboration.md`.
- Clarified that Marketing should lead strategy, Creative should translate strategy into visual/experience direction, and Headquarters should organize, decide, document, and implement.
- Defined that department agents must not act as agreement machines.

Why:

- Real project use showed that AI agents can become too aligned and produce similar-sounding answers.
- The human value in this project is nuance, taste, discomfort, direction, and final judgment.
- The company model needs specialists who provide differentiated value.

Impact:

- Future department prompts should emphasize specialty, disagreement, alternatives, risks, and tradeoffs.
- Automation is framed as a way to improve speed and quality of co-creation, not as removal of human judgment.

## Design History Practice

Date:

```txt
2026-05-15
```

What changed:

- Added `docs/design-history.md`.
- Decided not to duplicate old HTML/CSS/JS snapshots for now.
- Decided that Git keeps code history, while `design-history.md` records human-readable design evolution.

Why:

- The project should preserve the process of making an AI-agent arcade company, including design changes and human feedback.
- Duplicating old HTML files could make the repository confusing.

Impact:

- Future major visual states should be recorded in Japanese in `docs/design-history.md`.

## v0.7 - Cabinet Row Shell Implementation

Date:

```txt
2026-05-15
```

What changed:

- Rebuilt the public Arcade MVP shell around a Cabinet Row experience.
- Removed Phase/Sprint/Current Board labels from the public top page.
- Changed visible copy to Japanese-first, with arcade terms like `CREDITS`, `INSERT COIN`, and `Cabinet` kept where useful.
- Added a two-step playable cabinet flow: `INSERT COIN -> CREDIT READY -> PRESS PLAY`.
- Changed concept cabinets into inactive/being-tuned cabinets rather than ordinary disabled cards.
- Recorded the design state in `docs/design-history.md`.

Why:

- The first MVP shell worked structurally but felt too much like a web dashboard.
- Human feedback clarified that the first public impression should be "online arcade" before "AI company".
- The project needed an implemented design reference, not only a redesign brief.

Impact:

- Phase 1 Sprint 2/3 now has a concrete Cabinet Row shell for human review.
- Sprint 3/3 can focus on local QA, visual adjustment, and readiness for Cabinet 01 integration.
- Future Marketing/Creative review can critique an actual screen instead of only text direction.
