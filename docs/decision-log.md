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
- Cabinet 01 integration preparation was received from the Neon Core Survivor chat and recorded in `docs/cabinet-01-integration-plan.md`.
- Cabinet 01 decisions: copy existing standalone files during Phase 2, keep desktop-only MVP support, use `../../index.html` for BACK TO ARCADE, keep `supportsPostMessage: false`, use an in-game screenshot thumbnail, and register parent status as `prototype`.
- Cabinet 02 MVP reduction was received from the Metro Mender chat and recorded in `docs/cabinet-02-mvp-plan.md`.
- Cabinet 02 decisions: keep it planned for Phase 3, register as `concept` during Phase 1, use 90-150 second sessions, keep `supportsPostMessage: false`, use game UI screenshot thumbnails, and mark mobile as not recommended.
- Cabinet 03 MVP reduction was received from the Specimen Night Shift chat and recorded in `docs/cabinet-03-mvp-plan.md`.
- Cabinet 03 decisions: keep `specimen-night-shift` as the gameId, register as `concept` during Phase 1, keep desktop/tablet targets with mobile unsupported initially, use 60-second sessions, keep `supportsPostMessage: false`, and do not start implementation during Phase 1.
- Phase 1 Sprint 1/3 Arcade MVP Design was cleared.
- Phase 1 Sprint 2/3 Arcade MVP Implementation started.
- Human feedback on the first MVP shell: it does not yet feel like an arcade, public surface should prioritize arcade feeling, Japanese-first copy should be explored, internal Phase/Sprint labels should be removed from the public UI, and Marketing/Creative should brainstorm before the next visual iteration.
- Marketing Agent scope was expanded from copy and announcements to strategic marketing leadership, including audience hypotheses, funnel thinking, future automation, and coordination with Creative, Analytics, and Monetization.
- Organization structure was clarified in `docs/organization-map.md` with Created, Covered, and Planned statuses for positions.
- Product & Experience was identified as an important function currently covered by Headquarters, Marketing, and Creative rather than a separate agent.
- Roadmap versioning was added. `docs/roadmap.md` holds the current roadmap, and `docs/roadmap-history.md` records major roadmap and operating-model changes.
- Marketing and Creative redesign proposals converged on a public-facing direction: arcade first, AI-agent company story secondary. The recommended visual direction is `Neon Cabinet Row + small Operator Console details`.
- Communication policy was added: human-facing docs should be Japanese-first, and department agents must separate human-originated direction from agent-added perspective, risks, alternatives, and recommendation.
- Human-agent collaboration policy was added: agent outputs are drafts and inputs, not decisions. Headquarters should distinguish human-originated ideas, agent-drafted input, co-developed ideas, risks, alternatives, tradeoffs, and final decisions.
- Department operating model was added. Codex Arcade社 is currently defined as a human + AI department co-creation company, not a fully automatic company. Marketing leads strategy, Creative turns strategy into experience, and Headquarters organizes, decides, documents, and implements.
- Design history practice was added. Git keeps HTML/CSS/JS history, while `docs/design-history.md` records human-readable design evolution in Japanese.
- The public Arcade shell was redesigned from a dashboard/card feeling toward a Japanese-first Cabinet Row experience.
- Public-facing Phase/Sprint/Current Board labels were removed from the top page.
- The current public shell uses `INSERT COIN -> CREDIT READY -> PRESS PLAY` for playable cabinets and `COMING SOON` for concept cabinets.
- Game descriptions shown in the parent arcade were changed to Japanese, while arcade/system labels can remain in English where they support the atmosphere.
- Human review of Cabinet Row Shell v2 found it improved but still visually close to v1, so Phase 1 Sprint 2/3 added a bolder v3 prototype direction.
- Arcade Room Prototype v3 was created as a comparison candidate that treats the top page as a night arcade room rather than a game list.
- Cabinet 01 integration preparation was completed in the Neon Core Survivor chat: arcade parameters, BACK TO ARCADE links, `game.json`, `CHANGELOG.md`, and README updates are ready in the standalone prototype.
- Cabinet 01 is approved to move to the next step: copy the prepared prototype into `games/neon-core-survivor/` and run parent-site integration QA.
- Cabinet 01 was migrated into `games/neon-core-survivor/`.
- Parent-site QA confirmed Cabinet 01 launches with `?from=arcade&credit=1`, shows arcade launch flavor, starts gameplay, and returns via BACK TO ARCADE.
- Cabinet 02 and Cabinet 03 were approved to start MVP implementation in parallel game chats.
- Headquarters created a repeatable Cabinet intake workflow in `docs/cabinet-intake.md`.
- Roadmap advanced to v0.8: Phase 1 and Phase 2 are treated as cleared, and Phase 3 is in play with Cabinet 02/03 parallel production.
