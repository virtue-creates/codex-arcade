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
- Current project position is Phase 0: Company Foundation, Sprint 003: Scheduling and Project Operating System.
- Next planned sprint is Sprint 004: Arcade MVP Design.
