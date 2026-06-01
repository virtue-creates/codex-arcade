# Game Pipeline

This document tracks candidate games and their headquarters status.

## Cabinet Plan

## Cabinet 01: Neon Core Survivor

```txt
gameId: neon-core-survivor
title: Neon Core Survivor
status: prototype candidate
role: first playable arcade cabinet
devices: desktop
input: keyboard, mouse
orientation: landscape
play length: about 3 minutes
creditCost: 1
```

Headquarters decision:

- Strongest Cabinet 01 candidate.
- Good first game because it is visually direct and arcade-like.
- Phase 1 should support desktop only.
- Tablet and mobile support can wait.
- Parent arcade manages credits.
- Game handles its own CORE ONLINE / INSERT COIN flavor.
- `postMessage` can wait until Phase 2.
- Thumbnail can start as an in-game screenshot.

MVP guardrails:

- Keep enemy and upgrade count small.
- Avoid boss waves in the first integration.
- Prioritize readable action, retry, result screen, and BACK TO ARCADE.

Integration plan:

- See `docs/03-cabinets/cabinet-01/cabinet-01-integration-plan.md`.

## Cabinet 02: Metro Mender

```txt
gameId: metro-mender
title: Metro Mender
status: concept candidate
role: route puzzle / strategy cabinet
devices: desktop, tablet
input: mouse, touch later if tablet is supported
orientation: landscape
play length: 2-4 minutes
creditCost: 1
```

Headquarters decision:

- Good Cabinet 02 candidate.
- Strong contrast with Neon Core Survivor.
- Desktop first, tablet optional is appropriate.
- Mobile should wait.
- `postMessage` can wait until Phase 2.
- Thumbnail can start as an in-game route map screenshot.

MVP guardrails:

- Keep simulation simple.
- Prefer click-to-repair over deep route simulation.
- Make first-time goals visually obvious.

MVP plan:

- See `docs/03-cabinets/cabinet-02/cabinet-02-mvp-plan.md`.

## Cabinet 03: Specimen Night Shift

```txt
gameId: specimen-night-shift
title: Specimen Night Shift
status: concept candidate
role: strange beautiful route puzzle cabinet
devices: desktop, tablet
input: mouse, touch
orientation: landscape
play length: 60-90 seconds
creditCost: 1
```

Headquarters decision:

- Approved as the Cabinet 03 variation slot.
- Theme may use display boxes, specimens, pins, and night movement.
- The tone should be strange and beautiful, not horror.
- Desktop and tablet support are appropriate.
- Mobile can wait.
- `postMessage` can wait until Phase 2.

MVP guardrails:

- Use rule-based pseudo-physics, not full physics.
- Start with 3 insects and a small number of pins.
- Keep cause and effect readable.

MVP plan:

- See `docs/03-cabinets/cabinet-03/cabinet-03-mvp-plan.md`.

## Current Recommended Build Order

1. `neon-core-survivor`
2. `metro-mender`
3. `specimen-night-shift`

Reason:

- Start with the clearest arcade action game.
- Then add a thinking puzzle cabinet.
- Then add a more distinctive, atmospheric cabinet.
