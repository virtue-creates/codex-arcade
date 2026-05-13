# Decision Log

This file records decisions made in the Codex Arcade headquarters chat.

## 2026-05-13

- Codex Arcade starts as a static web arcade.
- The headquarters chat owns parent site design, shared rules, QA, game registration, documentation, GitHub workflow, and future automation design.
- Individual game chats own game planning and game implementation.
- Phase 1 credits are free virtual arcade credits with no monetary value.
- Games should eventually provide `game.json` and be registered in a parent `games.json`.
- Game chats should first produce planning briefs before implementation.
- GitHub Desktop can be used as the beginner-friendly visual Git interface.
- Headquarters decisions should be reflected in Markdown documents after human approval.
- Agent instruction files should be added under `agents/` so future game chats can read shared rules instead of receiving long repeated prompts.
- Three initial cabinet candidates were reviewed:
  - Cabinet 01: `neon-core-survivor`
  - Cabinet 02: `metro-mender`
  - Cabinet 03: `specimen-night-shift`
- Recommended initial build order is `neon-core-survivor`, then `metro-mender`, then `specimen-night-shift`.
- Phase 1 should not require `postMessage`; games may register with `supportsPostMessage: false`.
- Credit responsibility is split: the parent arcade manages credit balance and launch parameters, while each game handles its own INSERT COIN flavor.
- First thumbnails may be in-game screenshots instead of dedicated promotional art.
- Codex Arcade's higher-level direction is an AI-agent-operated arcade studio, not only a game website.
- The company model includes Headquarters, Game Studio, QA, Creative, Marketing & Analytics, Publishing, and Policy & Safety.
- Analytics should not be added immediately; first document measurement goals and privacy guardrails.
- Business & Monetization was added as a department to explore support, sponsorship, ads, production logs, education, premium features, future paid credits, and wallet experiments.
- Monetization should begin with research and low-risk options. Arcade Credits and real revenue must remain separate.
- Codex Arcade adopted a phase and lightweight sprint planning model.
- Sprint labels should use `Phase N Sprint X/Y` so the current position is easy to understand.
- Progress boards use `CLEARED`, `IN PLAY`, and `UP NEXT`.
- `IN PLAY` may contain multiple parallel workstreams because parallel AI department work is part of the project concept.
- Current project position is Phase 0 Sprint 4/4: Phase 1 Readiness Check.
- Next planned sprint is Phase 1 Sprint 1/3: Arcade MVP Design.

## 2026-05-14

- Phase 0 was treated as cleared after the foundation, company model, cabinet pipeline, monetization, and scheduling documents were established.
- Phase 1 Sprint 1/3: Arcade MVP Design started.
- Arcade MVP implementation should wait until the minimum parent site design is reviewed.
- The roadmap should show a table with phases as rows and sprints as columns so humans can quickly see CLEARED, IN PLAY, and UP NEXT work.
- The roadmap board was changed to a left-to-right phase table so it feels like progression across the whole project.
- The wide phase table was replaced with a Mermaid left-to-right timeline plus a compact current board because the table was too hard to read.
- Roadmap structure was clarified into three layers: Roadmap Board for the whole project, Phase Board for a selected phase, and Current Board for only the active phase.
