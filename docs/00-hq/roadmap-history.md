# Roadmap History

This file records major roadmap and operating-model changes.

Use this for changes that affect:

- Project phases
- Sprint structure
- Department responsibilities
- Automation model
- Public product direction
- Marketing, analytics, monetization, or safety strategy

`docs/00-hq/roadmap.md` is the current version. This file explains how it evolved.

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
- Added `docs/06-automation/game-pipeline.md`.

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
- Added `docs/02-arcade-product/mvp-shell-feedback.md`.
- Added `docs/02-arcade-product/arcade-experience-brief.md`.
- Added Marketing/Creative prompts for arcade-feeling redesign.
- Expanded Marketing Agent from copy support to strategic marketing leadership.
- Added `docs/01-strategy/organization-map.md`.
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
- Added `docs/01-strategy/department-operating-model.md`.
- Strengthened `docs/01-strategy/human-agent-collaboration.md`.
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

- Added `docs/02-arcade-product/design-history.md`.
- Decided not to duplicate old HTML/CSS/JS snapshots for now.
- Decided that Git keeps code history, while `design-history.md` records human-readable design evolution.

Why:

- The project should preserve the process of making an AI-agent arcade company, including design changes and human feedback.
- Duplicating old HTML files could make the repository confusing.

Impact:

- Future major visual states should be recorded in Japanese in `docs/02-arcade-product/design-history.md`.

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
- Recorded the design state in `docs/02-arcade-product/design-history.md`.

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
- Added `docs/03-cabinets/00-shared/cabinet-intake.md` for headquarters intake, migration, and QA workflow.
- Expanded `docs/05-release-qa/qa-checklist.md` for parent launch QA and current cabinet notes.

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
- Added `docs/03-cabinets/00-shared/game-design-intent-report.md`.
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
  - `docs/05-release-qa/release-v0.1-checklist.md`
  - `docs/04-marketing/release-analytics-operations.md`
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
- Added `docs/04-marketing/marketing-release-ops-response.md`.
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

- Added `docs/05-release-qa/release-v0.1-announcement-kit.md`.
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
- Added `docs/05-release-qa/v0.1-parallel-operations-plan.md`.
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

## v0.20 - PR Tone Policy

Date:

```txt
2026-05-26
```

What changed:

- Added `docs/01-strategy/pr-tone-policy.md`.
- Defined the operating tone as: ノリはふざける。運用はちゃんとする。
- Clarified that 店長メモ is not only a feedback form, but also a trigger for removal, repair, return, and COMING SOON events.
- Clarified that weak cabinets can be pulled back, marked as under repair, and later reintroduced as a PR/operation event.
- Added guidance to leave room for players to think "何これ?" instead of over-explaining "変な筐体" or "ネタゲー".
- Linked the policy from `docs/04-marketing/marketing-release-plan.md`.

Why:

- Marketing tone needed to become an operating policy, not just copywriting taste.
- Codex Arcade's differentiation is not only that AI agents help make games, but that the arcade operation itself becomes content.
- Future announcements, manager memo language, COMING SOON states, and cabinet re-entry events need a shared reference.

Impact:

- Marketing Department now has a formal PR tone reference.
- Headquarters can apply the tone to implementation and documentation without owning final Marketing judgment.
- Cabinet 02/03 can be handled as operational events when they are pulled back, modified, or reintroduced.

## v0.21 - Cabinet Studio PR Tone Handoff

Date:

```txt
2026-05-26
```

What changed:

- Added PR/operation tone handoff rules to `docs/03-cabinets/00-shared/cabinet-intake.md`.
- Updated Cabinet 02 and Cabinet 03 Studio prompts so they read `docs/01-strategy/pr-tone-policy.md`.
- Added a Cabinet 02 operational read to `docs/03-cabinets/cabinet-02/cabinet-02-hq-direction.md`.

Why:

- Human Director identified that the "bad cabinet / repair / return" cycle itself can be part of Codex Arcade's entertainment.
- Cabinet 02 currently works technically, but feels simply boring rather than mysterious or strategically interesting.
- Instead of only polishing Cabinet 02 immediately, the team may use it later as a Lab Cabinet / under-repair / re-entry event once Cabinet 01 starts getting players.

Operating principle:

- Internal evaluation can be blunt, including "this feels like a bad game".
- Public presentation should not pre-label it as a joke or bad game.
- The arcade should leave room for players to think "何これ?" and for the operation to turn that reaction into a future event.

## v0.22 - Offline Card Campaign

Date:

```txt
2026-05-26
```

What changed:

- Added `docs/04-marketing/offline-card-campaign.md`.
- Added `docs/prompts/creative-offline-card-prompt.md`.
- Linked the offline card campaign from `docs/04-marketing/marketing-release-plan.md`.

Why:

- Marketing Department proposed a physical handoff route for close early testers.
- The goal is not only to send a URL, but to hand over a small arcade-like invitation card that leads to Codex Arcade, Cabinet 01, and Manager Memo.
- This fits the PR tone: "オンラインゲーセンやってます" and "店長メモ置いてってください".

Campaign URL:

```txt
https://virtue-creates.github.io/codex-arcade/?utm_source=offline_card&utm_medium=physical&utm_campaign=v0_1_launch&utm_content=namecard
```

Impact:

- Offline initial tester traffic can be measured separately in GA4.
- Creative Department now has a dedicated prompt for print-card design.
- The launch operation now includes a physical touchpoint, not only SNS or direct message links.

## v0.23 - Cabinet 01 v0.1.1 Studio Report

Date:

```txt
2026-05-26
```

What changed:

- Added `docs/03-cabinets/cabinet-01/cabinet-01-v0.1.1-studio-report.md`.
- Updated `docs/03-cabinets/cabinet-01/cabinet-01-polish-plan.md` with the Studio report and HQ judgment.

Why:

- Cabinet 01 Studio reported that Neon Core Survivor is ready to be treated as Codex Arcade's signature game.
- Reported v0.1.1 changes include 120-second runs, clearer controls, stronger Arcade launch copy, Best/Survived result info, best score storage, and a minimal SFX toggle.

HQ judgment:

- The v0.1.1 direction is approved as a candidate.
- Cabinet 01 should remain the primary public playable cabinet.
- The headquarters repository has not yet received the reported v0.1.1 implementation files, so repository intake is still pending.

Next:

- Receive or locate Cabinet 01 v0.1.1 files.
- Update `games/neon-core-survivor/`.
- Update parent `games.json`.
- Run static and local QA before publishing.

## v0.24 - Confirmation Triage Model

Date:

```txt
2026-05-26
```

What changed:

- Added Headquarters triage rules to `docs/01-strategy/department-operating-model.md`.
- Updated `docs/03-cabinets/00-shared/cabinet-intake.md` with confirmation triage.
- Updated `docs/03-cabinets/00-shared/game-design-intent-report.md` so Studio reports separate confirmations into:
  - AI間確認
  - 人間ディレクター判断
  - 共有のみ
- Updated Cabinet 01, Cabinet 02, Cabinet 03, and Creative offline card prompts to use the same classification.

Why:

- Human Director noticed that department reports were ending with broad "please confirm" lists.
- Some of those items were AI-to-AI operational questions, while others required human taste or release judgment.
- Mixing them made the human director act as traffic control for things Headquarters should filter.

Operating principle:

- Headquarters should not pass every department question directly to the human.
- Headquarters first triages.
- AI間確認 is handled by Headquarters or the relevant department.
- 人間ディレクター判断 is the only category that should be escalated to the human as a decision request.
- 共有のみ is logged without requiring a response.

Impact:

- The semi-automated company model becomes clearer.
- Human judgment remains important, but human attention is reserved for the right decisions.
- Department reports become easier to route and automate later.

## v0.25 - BACKYARD Hidden Door

Date:

```txt
2026-05-28
```

What changed:

- Added `docs/02-arcade-product/backyard-policy.md`.
- Added a small `BACKYARD` link to the public top page.
- Added `backyard.html` as a minimal workroom page.
- Added `open_backyard` as an Analytics event.
- Updated the offline card campaign docs so business/AI-agent explanation is not forced onto the card.

Why:

- Marketing Department recommended that the handoff card stay focused on the player flow:
  - Come to Codex Arcade.
  - Play Cabinet 01.
  - Leave a manager memo.
- The business/AI-agent layer should exist as a hidden-feeling door inside the Arcade, not as a loud sales explanation.

Operating principle:

- Do not explain too much.
- `BACKYARD` should feel like a small secret door.
- The inside can eventually show manager memos, Analytics, mod meetings, agent roles, removal/return events, and logs.
- This keeps the public arcade playful while still preserving the company-building experiment.

## v0.26 - HQ Dashboard and BACKYARD Showcase Plan

Date:

```txt
2026-05-28
```

What changed:

- Added `docs/00-hq/hq-dashboard.md`.
- Added `docs/02-arcade-product/backyard-showcase-plan.md`.
- Linked BACKYARD policy to the new dashboard and showcase plan.

Why:

- The project now has many docs, departments, and concurrent workstreams.
- Headquarters needs one first-stop document that tells the human director and future agents where the project stands.
- BACKYARD needs a content strategy so it becomes part of the arcade's entertainment, not just a hidden explanation page.

Operating principle:

- Headquarters owns the dashboard and BACKYARD information architecture.
- Creative owns how the BACKYARD feels.
- Marketing owns whether the BACKYARD helps the public story without over-explaining.
- The Human Director decides the level of weirdness, secrecy, and public exposure.

## v0.27 - Offline Admission Card Ordered

Date:

```txt
2026-05-29
```

What changed:

- Offline card campaign moved from planning to ordered.
- Updated `docs/04-marketing/offline-card-campaign.md` with final production status and print specifications.
- Updated `docs/00-hq/hq-dashboard.md` so the offline card is no longer only a design/marketing idea.

Production:

- Print service: ラクスル
- Product: 通常サイズ名刺
- Size: 55mm x 91mm
- Paper: マット紙 220kg
- Print: 両面カラー
- Processing: 角丸なし、PP加工なし
- Quantity: 100
- Submission format: PDF
- Front/back speed check: passed

Why:

- Codex Arcade v0.1 now has an offline entry route, not only SNS/GitHub links.
- The card sends people through the intended player flow:
  - Read QR on smartphone.
  - Send/open on PC.
  - Play Cabinet 01.
  - Leave a manager memo.

Important note:

- The card clearly states that CREDITS are a free effect and are not purchase, exchange, or reward.
- The card presents Codex Arcade as an experimental online arcade run by a human manager and Codex agents.

## v0.28 - Offline Card Asset Handoff Route

Date:

```txt
2026-05-29
```

What changed:

- Added `assets/offline-card/README.md`.
- Added Creative asset handoff prompt:
  - `docs/prompts/creative-offline-card-assets-handoff-prompt.md`
- Added Marketing completion share prompt:
  - `docs/prompts/marketing-offline-card-completion-share-prompt.md`
- Updated `docs/01-strategy/department-operating-model.md` with an asset handoff rule.
- Updated `docs/04-marketing/offline-card-campaign.md` and `docs/00-hq/hq-dashboard.md`.

Why:

- Human Director clarified that Creative has the card design assets, but the company flow should not be Creative -> Marketing directly.
- Headquarters should receive the final design assets first, check that no private/order information is included, save the clean assets, and then share to Marketing.

Operating principle:

```txt
Creative Department
-> Headquarters
-> Marketing Department
```

This keeps role boundaries clear and preserves the adopted design as a project asset.

## v0.29 - Marketing Branch Reorganization

Date:

```txt
2026-05-29
```

What changed:

- Updated `docs/01-strategy/organization-map.md`.
- Updated `docs/01-strategy/company-model.md`.
- Updated `docs/01-strategy/department-operating-model.md`.
- Updated `docs/00-hq/hq-dashboard.md`.
- Added `docs/prompts/marketing-branch-reorg-share-prompt.md`.

Why:

- Human Director noted that placing every function directly under Headquarters felt unnatural.
- In the current phase, Creative and Analytics are tightly connected to Marketing:
  - Creative shapes first impression, cards, announcement visuals, and BACKYARD presentation.
  - Analytics measures traffic, UTM, manager memo behavior, and release response.
- Therefore, Creative and Analytics should be treated as specialist subfunctions under Marketing Department for now.

New branch:

```txt
Marketing Department
  |
  +-- Strategy / Distribution
  +-- Creative Department
  +-- Analytics Department
```

Boundary:

- Headquarters still owns parent Arcade implementation, docs, GitHub, public release coordination, BACKYARD implementation, and canonical asset storage.
- Creative/Analytics remain specialist departments, not simple execution workers.

## v0.30 - Arcade Afterglow BGM Added

Date:

```txt
2026-05-30
```

What changed:

- Added `assets/audio/arcade-afterglow.mp3`.
- Added `assets/audio/README.md`.
- Added `docs/02-arcade-product/audio-assets.md`.
- Updated parent Arcade BGM toggle to play the uploaded MP3 instead of the earlier generated loop.
- Updated `docs/01-strategy/privacy-and-safety.md` with AI-generated audio handling.
- Updated `docs/00-hq/hq-dashboard.md`.

Why:

- Human Director created a top-page BGM in Suno.
- The previous generated BGM felt weak and did not match the arcade feeling.
- The uploaded track is now treated as the top page's v0.1 non-commercial experiment BGM.

Policy note:

- Codex Arcade is currently a free, non-commercial experiment.
- If ads, sponsorship, paid content, or other monetization starts later, the audio usage terms must be reviewed again.

## v0.31 - Docs Folder Reorganized

Date:

```txt
2026-06-01
```

What changed:

- Added `docs/README.md` as the docs entry point.
- Reorganized flat docs into category folders:
  - `docs/00-hq/`
  - `docs/01-strategy/`
  - `docs/02-arcade-product/`
  - `docs/03-cabinets/`
  - `docs/04-marketing/`
  - `docs/05-release-qa/`
  - `docs/06-automation/`
  - `docs/prompts/`
- Updated Markdown references from old flat paths to the new category paths.
- Updated `docs/00-hq/hq-dashboard.md` so the docs entry point is visible.

Why:

- Human Director found the docs folder too crowded and hard to scan.
- The project now has enough strategy, product, cabinet, marketing, release, and automation material that a flat folder is no longer usable.
- This also helps future agents find the correct source of truth without reading every file.

Operating rule:

- New docs should be placed in the correct category from the start.
- If the correct category is unclear, add the entry to `docs/README.md` or `docs/00-hq/hq-dashboard.md` so the route stays visible.

## v0.32 - Cabinet Docs Split by Cabinet

Date:

```txt
2026-06-01
```

What changed:

- Added `docs/03-cabinets/README.md`.
- Split `docs/03-cabinets/` into:
  - `docs/03-cabinets/00-shared/`
  - `docs/03-cabinets/cabinet-01/`
  - `docs/03-cabinets/cabinet-02/`
  - `docs/03-cabinets/cabinet-03/`
- Moved common rules, manifest, interface, and intake documents into `00-shared/`.
- Moved each Cabinet's reports, MVP plans, and HQ directions into its own folder.
- Updated Markdown references to the new Cabinet paths.

Why:

- Human Director noticed that the Cabinet docs could also be grouped more cleanly.
- Cabinet 01, 02, and 03 now have enough independent history that keeping them flat makes the Studio responsibilities harder to see.

Operating rule:

- Shared Cabinet rules live in `00-shared/`.
- Game-specific reports and HQ directions live in each Cabinet folder.
- New Cabinet docs should start in their own `cabinet-XX/` folder.

## v0.33 - Arcade Store History / BACKYARD Logbook

Date:

```txt
2026-06-01
```

What changed:

- Added `docs/00-hq/arcade-store-history.md`.
- Added `docs/02-arcade-product/backyard-logbook-plan.md`.
- Updated `docs/02-arcade-product/backyard-showcase-plan.md`.
- Updated `docs/00-hq/hq-dashboard.md`.
- Updated `backyard.html` so `ARCADE LOGBOOK` becomes the first BACKYARD content block.

Why:

- Human Director reframed BACKYARD as a place to show the store history: when Codex Arcade started, when it opened, what was discussed, what was decided, and how the arcade grew.
- This better communicates the hidden purpose of the project: one human director using Codex agents to run a small arcade-like company.
- The logbook lets that AI usage capability appear through operating history rather than a sales-style explanation.

Operating rule:

- `docs/00-hq/arcade-store-history.md` is the canonical store-history source.
- BACKYARD should show this as `ARCADE LOGBOOK`, not as a normal corporate case study.
- Creative can later improve the visual treatment, but Headquarters owns the historical source material.

## v0.34 - SNS Operations Added

Date:

```txt
2026-06-02
```

What changed:

- Added `docs/04-marketing/social-media-operations.md`.
- Updated `docs/04-marketing/marketing-release-plan.md`.
- Updated `docs/00-hq/hq-dashboard.md`.

Why:

- Marketing Department整理として、X / Facebookを単なる宣伝ではなく、名刺、店長メモ、改造ログ、BACKYARDへつながる導線として扱う方針が固まった。
- `#CodexArcade`、X/Facebook用UTM、投稿後のGA4確認タイミングを正本化した。

Operating rule:

- Xは小さく噂のように回す場所。
- Facebookは関係と文脈を育てる場所。
- どちらも「ノリはふざける。運用はちゃんとする。」に従う。

## v0.35 - Offline Card Arrived

Date:

```txt
2026-06-02
```

What changed:

- Updated `docs/04-marketing/offline-card-campaign.md`.
- Updated `docs/00-hq/hq-dashboard.md`.

Why:

- Offline Card / 名刺が到着した。
- まだ配布はせず、QR、UTM、スマホ表示、Cabinet 01起動、店長メモ、GA4、Formspreeを確認してから小さく配る方針にした。

Operating rule:

- 初回配布は2〜3人から。
- 名刺はURL配布ではなく、Codex Arcadeへ入る小さな入場券として扱う。

## v0.36 - BACKYARD Staff Files Shelf

Date:

```txt
2026-06-04
```

What changed:

- Updated `backyard.html`.
- Updated `styles.css`.
- Updated `docs/02-arcade-product/backyard-showcase-plan.md`.

Why:

- Human Director noted that MarketingのX/Facebook方針など、各部署の作戦メモ自体がBACKYARDコンテンツとして面白い。
- 店史の下に、docs原本へつながる展示棚を追加した。

Added shelves:

- Marketing File
- Cabinet Chart
- Human QA Log
- Agent Roles
- Analytics Terminal
- Backyard Plan

Operating rule:

- BACKYARD is the exhibition shelf.
- docs are the source archive.
- Creative can later polish the visual treatment, but Headquarters owns the information structure.

## v0.11 - Human-Led Department Review / 現物確認前提

Date:

```txt
2026-06-04
```

What changed:

- Clarified that Codex Arcade is currently not operating as autonomous AI departments approving each other.
- Locked the actual operating model as: Human Director brainstorms with each specialized department, then Headquarters records decisions and routes next actions.
- Added an anti approval-theater rule: departments should not simply say “looks good” to human-originated direction.
- Added a “see the actual site” rule for department reviews.

Why:

- The project was drifting toward AI departments confirming each other without adding enough expertise.
- Human direction, taste, discomfort, and judgment are the current engine of the project.
- Department advice feels weak if the department has not inspected the actual Arcade page, Cabinet, BACKYARD, or relevant docs.

Impact:

- Marketing, Creative, Cabinet Studio, QA, and other departments should review the actual public URL, local URL, screenshots, or source files before giving design/experience feedback.
- Department responses should add specialist perspective, weak points, risks, alternatives, or next-department briefs.
- Semi-automation remains a future goal, but the current roadmap treats human-led department-by-department co-creation as the real operating model.

## v0.12 - Log Candidate Reporting

Date:

```txt
2026-06-04
```

What changed:

- Added `Log Candidate` as a standard section for department reports.
- Departments should now identify important events, decisions, and operational changes that may belong in store history, roadmap history, Decision Log, department docs, or BACKYARD exhibits.
- Headquarters still decides whether to adopt, defer, mask, or reject each candidate.

Why:

- Codex Arcade's process itself is part of the product.
- Important human-agent operating changes can become BACKYARD material later.
- Departments should help surface record-worthy moments instead of relying only on Headquarters to notice them.

Impact:

- Future Cabinet Studio, Marketing, Creative, QA, and Analytics reports should include `Log Candidate`.
- BACKYARD can grow from actual operating records instead of separate exhibition copies.
- The project moves one step closer to semi-automated documentation without removing human/HQ judgment.

## v0.13 - Department Rules Refresh Prompt

Date:

```txt
2026-06-04
```

What changed:

- Added an all-departments rules refresh prompt.
- The prompt asks each department to re-read the operating model, communication policy, human-agent collaboration rules, organization map, roadmap history, and BACKYARD showcase plan before resuming work.
- It also requires actual product review when giving UI, experience, game, PR, BACKYARD, or release-flow feedback.
- It asks every department to include `Log Candidate` when relevant.

Why:

- Some department chats may not have touched the project recently.
- The operating model changed meaningfully: human-led department-by-department brainstorming, no approval theater, actual product review, and log-candidate reporting.
- The project needs a repeatable way to refresh department context before asking for new work.

Impact:

- Headquarters can now paste one prompt to any department before restarting work.
- Departments should not rely on stale memory or instruction-only review.
- This supports semi-automation later by making the starting context explicit.

## v0.14 - New Department Start Rule

Date:

```txt
2026-06-04
```

What changed:

- Added a rule that every new department chat starts with the all-departments rules refresh prompt.
- New departments must first confirm current operating rules, actual product review expectations, and `Log Candidate` reporting before receiving concrete work.

Why:

- Department chats can otherwise start from stale context or generic role assumptions.
- The project now depends on human-led department brainstorming, not autonomous approval theater.

Impact:

- Headquarters should paste the refresh prompt before creating or resuming any department.
- New departments must return role understanding and concerns before task execution.
