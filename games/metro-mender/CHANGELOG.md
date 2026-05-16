# Changelog

## 0.2.7 - 2026-05-17

- Added delegated and global fallback repair handlers so fault buttons repair reliably during QA.
- Replaced polygon SVG hit targets with wide line-based hit targets so visible FAULT segments can be clicked directly.
- Switched the served script file to `game.v0.2.7.js` to avoid stale local browser scripts.

## 0.2.6 - 2026-05-17

- Changed fault repair buttons to direct onclick handlers for more reliable repair input during QA.

## 0.2.5 - 2026-05-17

- Added explicit repair buttons for each fault so repairs do not depend on SVG click precision.
- Kept map clicking as supplemental, but made the fault list the reliable repair control.

## 0.2.4 - 2026-05-17

- Prevented a single repair click from firing both segment and map fallback handlers.
- Increased nearest-fault fallback tolerance for easier clicking around FAULT labels.

## 0.2.3 - 2026-05-17

- Added map-level nearest-fault click handling so visible FAULT segments are easier to repair.
- Updated cache-busting query strings for the latest click handling.

## 0.2.0 - 2026-05-16

- Changed the MVP rule set to 7 fault segments, 4 repair crews, and a 90 second timer.
- Added visible CENTRAL and MAJOR station markers.
- Added hover preview for fault repair impact.
- Added repair feedback showing station, restoration, and score changes.
- Added result details for major stations restored and isolated stations.
- Updated copy to explain that not every fault can be repaired.

## 0.1.0 - 2026-05-15

- Added first playable MVP for Metro Mender.
- Added one-screen SVG subway repair map.
- Added title, play, and result states.
- Added `?from=arcade&credit=1` presentation support.
- Added score, restoration percentage, rank, retry, and BACK TO ARCADE flow.
- Added `game.json`, `README.md`, and this changelog.
