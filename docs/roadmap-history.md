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
Roadmap Version: v0.10
Last Updated: 2026-05-16
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

## v0.8 - Cabinet 01 Live and Parallel Cabinet Production

Date:

```txt
2026-05-15
```

What changed:

- Cabinet 01 `neon-core-survivor` was migrated into `games/neon-core-survivor/`.
- Parent-site launch QA passed for Cabinet 01.
- Phase 1 and Phase 2 were marked as cleared for roadmap purposes.
- Phase 3 started as an active parallel production phase.
- Cabinet 02 `metro-mender` and Cabinet 03 `specimen-night-shift` were both sent into MVP implementation in their game chats.
- Added `docs/cabinet-intake.md` for headquarters intake, migration, and QA workflow.
- Expanded `docs/qa-checklist.md` for parent launch QA and current cabinet notes.

Why:

- Codex Arcade now has its first game launching from the parent site.
- The project can begin demonstrating the desired "parallel AI team" workflow.
- Headquarters needs a repeatable intake process before Cabinet 02/03 return.

Impact:

- Current Board now shows Phase 3 in play.
- Headquarters is responsible for receiving Cabinet 02/03, migrating them, and running QA.
- Thumbnail and polish remain important, but they should not block MVP game intake.

## v0.9 - Three Prototype Cabinets Intake

Date:

```txt
2026-05-15
```

What changed:

- Cabinet 03 `specimen-night-shift` was migrated into `games/specimen-night-shift/`.
- Cabinet 02 `metro-mender` was migrated into `games/metro-mender/`.
- Parent `games.json` now treats Cabinet 02 and Cabinet 03 as `prototype`.
- Static intake checks passed for both Cabinet 02 and Cabinet 03.
- Phase 3 moved from "Cabinet 02/03 production" to "3ゲームQAとサムネイル準備".

Why:

- The parallel game chats returned MVP implementations.
- Headquarters needed to turn those reports into actual parent repository state.
- The project now needs human visual QA and play-feel QA, not more planning.

Impact:

- Codex Arcade has three prototype cabinets in the parent repository.
- The next useful human check is to open each cabinet, play briefly, and decide what feels confusing, exciting, or too rough.
- Thumbnail creation and public-readiness polish become the next visible work.

## v0.10 - Human QA and Studio Report Line

Date:

```txt
2026-05-16
```

What changed:

- Human play QA confirmed that all three Cabinet prototypes launch and run.
- Cabinet 01 `neon-core-survivor` was judged to have an accepted playable core.
- Cabinet 02 `metro-mender` was judged to run, but not yet feel like a clear game.
- Cabinet 03 `specimen-night-shift` was judged to run, but need a target/player-experience decision.
- Added `docs/game-design-intent-report.md`.
- Added a `Cabinet Studio -> Headquarters -> Human QA -> HQ Direction` report line.
- Renamed the practical game production chat role to `Cabinet Studio`.
- Updated the Game Design Intent Report so that high-level overview and concrete rules are separate.

Why:

- The project moved from technical QA to play-feel QA.
- Human feedback showed that "it works" is not enough; the studio must explain why the game should be fun.
- Future AI automation needs structured learning data: intent, rules, implementation, human QA, and HQ direction.

Impact:

- Cabinet Studio teams should not jump directly into fixes after negative QA.
- First they should explain game intent and rules, then Headquarters compares that intent with human experience.
- Roadmap history now preserves not only code milestones, but also the AI-company operating lessons from human QA.

## v0.11 - Release Analytics and Player Memo Operations

Date:

```txt
2026-05-22
```

What changed:

- v0.1 release direction shifted toward early public testing with Cabinet 01 as the flagship cabinet.
- Player feedback was framed as `店長にメモを残す`.
- Headquarters implemented the local Player Memo modal with localStorage fallback.
- Headquarters implemented Analytics event scaffolding for GA4, with localStorage fallback while GA4 is not connected.
- Added `return_to_arcade` tracking so the project can see whether players come back from a game to the Arcade.
- Added `memo_form_start` tracking at actual memo input/selection start.
- Added release operations docs:
  - `docs/release-v0.1-checklist.md`
  - `docs/release-analytics-operations.md`
  - `docs/prompts/marketing-release-ops-prompt.md`

Why:

- The project is not only trying to publish a game page; it is testing an AI-operated improvement loop.
- Analytics should show where players stop.
- Player Memo should show why they stop.
- Marketing Department needs a clear operational handoff, not a vague strategy request.

Impact:

- v0.1 now has a concrete public-release checklist.
- Marketing can advise on GA4, UTM, first review timing, and release reporting from shared docs.
- Headquarters can continue with GA4/Formspree connection once the human director provides the needed external IDs.

## v0.12 - Marketing Analytics Operating Rhythm

Date:

```txt
2026-05-22
```

What changed:

- Marketing Department reviewed the v0.1 Analytics implementation update.
- Marketing approved `return_to_arcade` and input-time `memo_form_start` as aligned with the v0.1 purpose.
- Added `docs/marketing-release-ops-response.md`.
- Updated the release checklist with GA4 Realtime minimum checks.
- Updated Analytics operations with the recommended UTM set.
- Fixed the public review rhythm:
  - release day connection check
  - 3-day first improvement review
  - 7-day v0.1.1 direction review
- Added a repeatable `v0.1 Analytics & Player Memo Report` format.

Why:

- The project needs a repeatable operating rhythm after publication.
- Marketing should not only advise abstract strategy; it should return structured evidence and next-step recommendations.
- Headquarters needs concrete acceptance criteria before connecting GA4/Formspree and publishing.

Impact:

- v0.1 release readiness can now be checked against a concrete Analytics funnel.
- Marketing reports can be compared over time.
- The AI-company experiment now has a clearer loop: publish, measure, collect player memos, report, assign improvements, update.

## v0.13 - GA4 Measurement ID Connected

Date:

```txt
2026-05-25
```

What changed:

- Human Director provided the GA4 Measurement ID `G-VBKHF7QYE0`.
- Headquarters set `GA_MEASUREMENT_ID` in `arcade.js`.
- Analytics docs and release operations docs were updated from "GA4未接続" to "GA4 ID設定済み、Realtime確認待ち".
- Marketing prompts were updated so future department handoffs do not say that GA4 is still unset.

Why:

- GA4 connection is required before public v0.1 measurement can work.
- The next release QA needs to confirm GA4 Realtime events, not debate the measurement tool again.

Impact:

- Local and public Arcade pages can now load the GA4 tag once served in a browser.
- Public Realtime confirmation still depends on GitHub Pages being enabled and the page being reachable.
- Formspree remains the main external integration still unset.

## v0.14 - Formspree Feedback Endpoint Connected

Date:

```txt
2026-05-25
```

What changed:

- Human Director provided the Formspree endpoint `https://formspree.io/f/xkoevqod`.
- Headquarters set `FEEDBACK_ENDPOINT` in `arcade.js`.
- Feedback, Analytics, release checklist, release operations, and marketing prompt docs were updated from "Formspree未設定" to "endpoint設定済み、送信確認待ち".

Why:

- Player Memo needs to reach a real collection destination for v0.1 public release.
- localStorage fallback is useful for development, but public feedback should not only live in the visitor's browser.

Impact:

- The site is now configured to submit manager memos to Formspree.
- A real submit test is still needed before public release.
- If Formspree submission fails, the code still falls back to localStorage.

## v0.15 - GA4 and Formspree Local QA Confirmed

Date:

```txt
2026-05-25
```

What changed:

- Human Director confirmed GA4 Realtime received Arcade activity from local QA.
- GA4 showed active users and events including:
  - `click_free_credit`
  - `select_cabinet`
  - `arcade_visit`
  - `page_view`
  - `scroll`
  - `first_visit`
- Human Director confirmed Formspree received a `店長メモ` submission.
- Release checklist and QA log were updated from "connection pending" to "local QA confirmed".

Why:

- v0.1 release needs evidence that both measurement and player feedback collection work before GitHub Pages publication.

Impact:

- The two external integrations for v0.1 are now locally confirmed.
- Remaining work shifts to GitHub push, GitHub Pages enablement, and public URL QA.

## v0.16 - GitHub Pages Public URL Live

Date:

```txt
2026-05-25
```

What changed:

- The `codex-arcade` repository was made public.
- GitHub Pages was enabled from the `main` branch root.
- Public URL was confirmed live:
  - `https://virtue-creates.github.io/codex-arcade/`
- Public `games.json` was confirmed live.
- Public Cabinet 01 direct URL was confirmed live.

Why:

- v0.1 needed to move from local QA to a shareable public URL.
- Public URL QA is required before announcement and UTM distribution.

Impact:

- Codex Arcade v0.1 now has a public web address.
- Remaining release work is public URL behavioral QA, GA4/Formspree confirmation on the public URL, and first announcement preparation.

## v0.17 - v0.1 Announcement Kit

Date:

```txt
2026-05-25
```

What changed:

- Added `docs/release-v0.1-announcement-kit.md`.
- Created UTM links for:
  - X / SNS launch post
  - X / SNS follow-up post
  - early tester direct messages
  - GitHub README / repo traffic
  - Devlog / Behind the Arcade traffic
- Drafted first launch copy for SNS, early testers, README, and Devlog.

Why:

- v0.1 now has a public URL, so release work moves from publishing infrastructure to first distribution.
- UTM links let Marketing Department compare where early visitors came from.

Impact:

- Codex Arcade can now be shared with an intentional message and measurable links.
- Next step is to choose the first announcement channel and begin the first player memo cycle.

Correction:

- Human Director pointed out that announcement copy and distribution planning should be owned by Marketing Department, not Headquarters.
- The announcement kit is therefore classified as `HQ Draft`.
- Future announcement work should follow:

```txt
Marketing Department
-> Headquarters integration
-> Human Director approval
-> publish
```

This correction reinforces department boundaries and prevents Headquarters from becoming a substitute for every specialist branch.

## v0.18 - Marketing Review of Announcement Kit

Date:

```txt
2026-05-25
```

What changed:

- Marketing Department reviewed the v0.1 Announcement Kit.
- Marketing approved the overall direction and UTM structure.
- Marketing recommended softening strong improvement promises.
- Announcement copy was updated from "本当に改造していきます" to "メモは次の改造の参考にします".
- X/SNS and early tester copy were revised to use "人間ディレクターとCodex agents".
- Avoid list was expanded with risky or overpromising expressions.
- Announcement Kit status changed from `HQ Draft` to `Marketing Reviewed Draft`.

Why:

- Announcement copy and first distribution are Marketing Department responsibilities.
- The project needed to restore department ownership after Headquarters created an initial draft.
- Player feedback should be invited without promising that every memo will be reflected immediately.

Impact:

- The first announcement now has Marketing Department review.
- Human Director can make the final publication decision using a reviewed copy rather than a Headquarters-only draft.

## v0.19 - Parallel Quality Operations Started

Date:

```txt
2026-05-25
```

What changed:

- Human Director clarified that release announcement and quality improvement should proceed in parallel.
- Added `docs/v0.1-parallel-operations-plan.md`.
- Defined parallel tracks:
  - Announcement / Marketing
  - Parent Arcade Quality / Headquarters + Creative
  - Cabinet 01 Polish / Cabinet 01 Studio
  - Cabinet 02 Redesign / Cabinet 02 Studio
  - Cabinet 03 Redesign / Cabinet 03 Studio
  - Public QA / QA Department
  - Analytics / Marketing + Analytics
  - Policy / Safety
- Added department-specific prompts for Marketing, Creative, QA, Cabinet 01, Cabinet 02, and Cabinet 03.

Why:

- v0.1 is public but unfinished by design.
- The project must now prove the "played while being improved" operating model.
- Headquarters must coordinate without crossing into specialist department ownership.

Impact:

- Multiple agents/departments can now work in parallel without blurring responsibilities.
- v0.1.1 can be planned from department outputs rather than Headquarters guessing all next fixes.
