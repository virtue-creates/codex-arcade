# Metro Mender

Cabinet 02 for Codex Arcade.

Metro Mender is a one-screen route repair puzzle. The player fixes broken subway segments with a limited number of repair crews, trying to reconnect the city before the shift timer ends.

## MVP Controls

- Click a red fault line to repair it.
- Each repair uses one repair crew.
- The game ends when the timer reaches zero, all faults are fixed, or repair crews are exhausted.
- Use RETRY to start another run.

## Arcade Launch

The game works as a standalone page and also accepts the Codex Arcade launch signal:

```txt
?from=arcade&credit=1
```

This only changes the INSERT COIN / 1 CREDIT presentation. Parent arcade credit balance is not managed by this game.

## Current Scope

- Static HTML/CSS/JavaScript
- SVG route map
- 9 stations
- 2 line colors
- 5 fault segments
- 5 repairs
- 120 second timer
- Score, restoration percentage, rank, and result screen
- `supportsPostMessage: false`

## Out of Scope

- Real payments
- Crypto or wallet features
- Cash-like rewards
- Prize ranking
- Parent arcade credit balance management
- iframe cabinet messaging
- Advanced passenger simulation
