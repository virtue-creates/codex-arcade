# Specimen Night Shift

Cabinet 03 for Codex Arcade.

`Specimen Night Shift` is a one-screen route-guiding puzzle about nocturnal specimens inside an old display box. Move three pins to bend the paths of three tiny insects and lead them toward the moonlit exit before the night ends.

## MVP Rules

- 1 screen
- 3 specimens
- 3 draggable pins
- 1 moonlit exit
- 60 seconds per play
- Score is rescued specimens, with pin moves shown in the result for replay improvement
- Mouse first, touch-capable where browser pointer events support it

## Arcade Integration

The game runs standalone from:

```txt
games/specimen-night-shift/index.html
```

Codex Arcade may launch it with:

```txt
games/specimen-night-shift/?from=arcade&credit=1
```

The query parameters are used only for cabinet flavor. Parent arcade credit balance is not managed by this game.

## Controls

- Drag pins with mouse or touch.
- Specimens move automatically.
- The pale circles around pins show where they bend nearby specimen paths.
- The moonlit crack on the right is the exit.

## Out of Scope for MVP

- Real payments
- Crypto or wallet mechanics
- Prize or cash-like rewards
- Global ranking rewards
- PostMessage score reporting
- Mobile-specific layout tuning
