# Arcade Redesign Direction

This document synthesizes the Marketing Agent and Creative Agent proposals after the first MVP shell review.

## Current Context

```txt
Phase 1 Sprint 2/3 - Arcade MVP Implementation
Workstream: Marketing/Creative arcade-feeling redesign
```

The first MVP shell works structurally, but the human feedback was clear:

```txt
It does not yet feel like an arcade.
```

## Shared Direction

Marketing and Creative converge on this direction:

```txt
Public surface:
An online arcade where the player chooses a cabinet, inserts a credit, and starts one play.

Behind the scenes:
Codex agents and the human director operate the arcade as an AI-agent company.
```

The public first screen should feel like an arcade first.

The AI-agent company story should be present as atmosphere or a secondary path, not as the first thing the player has to understand.

## Recommended Concept

Working concept:

```txt
Codexが経営する、少し未来の無人オンラインゲーセン。
```

English working phrase:

```txt
AI agents are setting up the cabinets.
```

This should not become a long technical explanation on the top screen.

## Visual Direction

Recommended first visual direction:

```txt
Neon Cabinet Row + small Operator Console details
```

Meaning:

- The main screen should show cabinets, not generic cards.
- Cabinet 01 should feel powered on.
- Cabinet 02/03 should feel present but not yet playable.
- Small status language can imply an automated arcade operation.
- Avoid turning the UI back into a dashboard.

## Public Copy Direction

Japanese-first explanatory copy, with English arcade terms where useful.

Possible top copy:

```txt
小さなWebゲームが並ぶ、オンラインゲーセン。
```

Possible support copy:

```txt
CREDITを入れて、起動中のCabinetを選んでください。
```

Possible subtle agent-flavor copy:

```txt
AI agents are setting up the cabinets.
```

## Public UI Terms

Recommended terms:

- CREDITS
- INSERT COIN
- 1 CREDIT = 1 PLAY
- CABINET
- NOW PLAYABLE
- CREDIT READY
- CABINET ONLINE
- STANDBY
- AGENTS TUNING
- COMING SOON

Avoid:

- Phase
- Sprint
- Current Board
- Development workflow
- Purchase
- Charge
- Balance
- Deposit
- Token
- Reward
- Prize
- Cash-like language

## Cabinet Presentation

Move away from "cards" and toward "cabinet selection."

Each cabinet should feel like it has:

- Marquee / sign area
- Screen / attract mode area
- Control panel
- Status light

Cabinet 01:

- Powered on
- `INSERT COIN`
- `1 CREDIT = 1 PLAY`
- Can change to `CREDIT READY` or `CABINET ONLINE`

Cabinet 02:

- Not playable yet
- Metro / route-map hint
- Status such as `AGENTS TUNING` or `STANDBY`

Cabinet 03:

- Not playable yet
- Specimen-box / night-shift hint
- Status such as `AGENTS TUNING` or `STANDBY`

## Credits and INSERT COIN

Recommended experience:

```txt
CREDITS shown as an arcade display.
1 CREDIT = 1 PLAY.
INSERT COIN changes the active cabinet state.
Then PLAY launches the game.
```

For MVP, this can be simplified to:

```txt
INSERT COIN / PLAY
```

But the next visual iteration should move toward a two-step feeling:

```txt
INSERT COIN -> CREDIT READY -> PLAY
```

## Coming Soon Treatment

Coming soon cabinets should not feel like disabled SaaS cards.

Possible labels:

- AGENTS TUNING
- STANDBY
- UNDER MAINTENANCE
- SETUP IN PROGRESS
- COMING SOON

Preferred direction:

```txt
Use COMING SOON for clarity, plus a worldbuilding status such as AGENTS TUNING or STANDBY.
```

## AI-Agent Company Boundary

Show lightly:

- Codex runs the arcade.
- AI agents are setting up cabinets.
- Next cabinets are being tuned.

Do not show on the top arcade surface:

- Phase / Sprint
- Current Board
- Agent workflow details
- Internal development language

Put deeper explanation in a later page or section:

- Behind the Arcade
- 運営室
- Devlog

## Recommended Next Implementation Changes

Priority order:

1. Remove Phase / Sprint / Current Board from the public top page.
2. Change English-heavy copy to Japanese-first arcade copy.
3. Replace generic card grid feeling with cabinet-row presentation.
4. Make credits feel like arcade credit display.
5. Improve Cabinet 01's INSERT COIN / PLAY flow.
6. Make Cabinet 02/03 feel like inactive cabinets, not disabled cards.
7. Add subtle agent-operation flavor without making the page a dashboard.
8. Keep AI-company details for a lower section or future Behind the Arcade page.

## Headquarters Questions To Resolve

1. Should the top visual direction be `Neon Cabinet Row + small Operator Console details`?
2. Should the top copy use `小さなWebゲームが並ぶ、オンラインゲーセン。` as the first Japanese line?
3. Should the public page hide Phase/Sprint immediately?
4. Should `AGENTS TUNING` be used for concept cabinets, or should it stay as a secondary label?
5. Should the MVP implement a true two-step `INSERT COIN -> PLAY` flow now, or keep one button and visually imply it?
6. Should `FREE COIN` remain, or should the wording become more arcade-like?

