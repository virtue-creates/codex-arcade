# Metro Mender

Cabinet 02 for Codex Arcade.

Metro Mender is a one-screen route repair puzzle. The player fixes broken subway segments with a limited number of repair crews, trying to reconnect the city before the shift timer ends.

## MVP Controls

- Click a red fault line to repair it.
- Each repair uses one repair crew.
- There are more faults than repair crews, so the player must choose which route to restore.
- Hover a fault line to preview how many stations it can restore from CENTRAL.
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
- 7 fault segments
- 4 repairs
- 90 second timer
- CENTRAL station and major station markers
- Hover preview for station and score impact
- Repair impact feedback after each click
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
