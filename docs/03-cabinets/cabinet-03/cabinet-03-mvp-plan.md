# Cabinet 03 MVP Plan

Cabinet 03:

```txt
gameId: specimen-night-shift
title: Specimen Night Shift
phase: Phase 3
initial parent status: concept
```

## MVP Summary

`Specimen Night Shift` is a one-screen specimen-box route guidance puzzle.

MVP scope:

- Fixed 60-second play session
- One stage
- 3 insects
- 3 draggable pins
- 1 moonlit exit
- Rule-based pseudo-physics
- Result screen with rescued count / score

## Minimum Rules

- The player drags pins inside the specimen box.
- Insects move automatically.
- Pins subtly bend insect movement when insects get close.
- An insect is rescued when it reaches the moonlit exit.
- The round ends when 60 seconds pass.
- Parent arcade credit balance is not managed by the game.
- If launched with `?from=arcade&credit=1`, the game can show `1 CREDIT` / `NIGHT SHIFT START` flavor.

## One-Screen Elements

- Title: `Specimen Night Shift`
- Arcade launch display: `1 CREDIT`
- Start display: `START NIGHT SHIFT`
- Specimen box play area
- 3 insects
- 1 moonlit exit
- 3 draggable pins
- Remaining time
- Rescued count
- Result panel
- Retry button
- BACK TO ARCADE link

## First Operations

- Prioritize mouse input.
- Drag pins to move them.
- Insects always move automatically.
- Insects curve slightly near pins.
- Insects reflect or turn at walls.
- Insects are rescued when touching the exit.
- Touch input may use the same drag handling when practical.

## Deferred Features

- Multiple stages
- Complex insect personalities
- Adding or removing pins
- Complex thread or obstacle physics
- Collection cards
- Daily layouts
- Advanced animation
- Full BGM
- `postMessage`
- Mobile optimization
- iframe cabinet mode
- Real payment, crypto, rewards, or ranking prizes

## QA Focus

- Direct launch works.
- `?from=arcade&credit=1` launch shows arcade flavor.
- Title, play, result, and retry states work.
- BACK TO ARCADE link is visible.
- A play session ends around 60 seconds.
- Pin dragging is understandable.
- Insect movement and pin influence are readable.
- Rescue moment is visible.
- Score / rescued count appears in result.
- Desktop layout works.
- Tablet-size layout does not break.
- Insects and pins are not too small to interact with.
- Visual tone stays strange and beautiful, not horror-heavy.

## `game.json`

```json
{
  "schemaVersion": 1,
  "id": "specimen-night-shift",
  "title": "Specimen Night Shift",
  "version": "0.1.0",
  "entry": "index.html",
  "creditCost": 1,
  "supportsArcadeParams": true,
  "supportsPostMessage": false,
  "devices": ["desktop", "tablet"],
  "input": ["mouse", "touch"],
  "orientation": "landscape",
  "viewport": {
    "recommendedWidth": 1280,
    "recommendedHeight": 720,
    "aspectRatio": "16:9"
  }
}
```

## Thumbnail Direction

File:

```txt
assets/thumbnails/specimen-night-shift.png
```

Visual target:

- Top-down specimen box
- Aged paper
- Black pins
- Small insect silhouettes
- Pale blue moonlit exit
- Strange and beautiful puzzle mood

MVP thumbnail can be static. Animated thumbnails are deferred.

## Risk Reduction

- Do not use a physics engine in MVP.
- Use simple position, angle, and speed updates.
- Pin influence should rotate an insect angle slightly when nearby.
- Use an internal 16:9 coordinate system and scale through CSS.
- Start with 3 insects, 3 pins, and 1 exit only.
- Keep scoring centered on rescued count.
- Treat touch support as best-effort until formally QA'd.
- Keep `supportsPostMessage: false`.
- Keep credit handling as display flavor only.

## Headquarters Decisions

- Keep `specimen-night-shift` as the Cabinet 03 `gameId`.
- Keep it planned for Phase 3.
- Register it as `status: "concept"` in Phase 1 parent `games.json`.
- Device target can be desktop/tablet, with mobile not supported initially.
- `supportsPostMessage` should remain `false` for MVP.
- 1 play = 60 seconds and 1 free virtual credit is appropriate.
- Thumbnail path should be `assets/thumbnails/specimen-night-shift.png`.
- Do not start Cabinet 03 implementation or repository migration during Phase 1.

## 2026-05-15 MVP Implementation Report

Cabinet 03 reported:

- Implemented a one-screen Canvas specimen-box puzzle.
- Added 3 insects, 3 draggable pins, and 1 moonlit exit.
- Added 60-second play session, rescued count score, title, result, retry, and BACK TO ARCADE.
- Added `?from=arcade&credit=1` launch flavor: `1 Credit / Night Shift Armed`.
- Added `game.json`, `README.md`, and `CHANGELOG.md`.
- Updated parent `games.json` to set Cabinet 03 to `prototype`.

Headquarters static QA:

- `node --check games/specimen-night-shift/game.js` passed.
- `games/specimen-night-shift/game.json` parsed correctly.
- Parent `games.json` parsed correctly.
- Direct HTTP launch returned `200 OK`.
- Arcade parameter HTTP launch returned `200 OK`.
- `game.js` and `styles.css` returned `200 OK`.
- BACK TO ARCADE link points to `../../index.html`.
- `supportsPostMessage` remains `false`.

Headquarters response:

- Cabinet 03 may be treated as `prototype` for MVP intake.
- `../../index.html` is approved for BACK TO ARCADE.
- The pin influence constants look reasonable for MVP, but "触って分かる" strength requires human play QA.
- Real thumbnail creation remains a next task.
- Browser/visual QA was not completed in this pass because the browser integration module was unavailable.

## 2026-05-16 Game Design Intent Report

Cabinet 03 Studioから `Game Design Intent Report` を受領した。

記録先:

```txt
docs/03-cabinets/cabinet-03/cabinet-03-design-intent-report.md
```

本部の初期読み:

- 開発意図は「虫を直接操作するゲーム」ではなく、「ピンで進路を少し曲げる間接操作パズル」。
- 人間QAの違和感と、Cabinet 03 Studioの自己分析はかなり一致している。
- 最大の課題は、出口が月明かりではなく容器のように見えていること、ピンが進路変更ツールとして読まれていないこと。
- 次の改善では、先に複雑なルールを足すより、見た目と挙動で「ピンで曲げる」「光へ逃がす」を伝えることが重要。
- 大人向けにするなら、虫の進路予測、複数虫の同時誘導、ピン配置の上達余地を追加する必要がある。

## 2026-05-16 HQ Direction対応報告

Cabinet 03 Studioから、HQ Direction対応版の報告を受領した。

主な変更:

- ピンの影響範囲リングを表示。
- 虫がピン影響圏に入った時の光跡/曲がりエフェクトを追加。
- ピン効果を強化し、虫速度を少し下げた。
- 出口を右端の「月明かりの割れ目」に変更し、`MOON EXIT` ラベルを追加。
- 救出時に `RESCUED` 表示と光のリップルを追加。
- `MOVES` 表示と `Pin moves` 評価軸を追加。
- 大人向けの奇妙で美しい誘導パズル方向を維持。

本部判断:

- HQ Directionの中心課題だった「操作とゴールの因果を見た目で伝える」には対応している。
- 次は静的QAと人間QAを行い、出口表現、ピン影響、成功演出が初見で伝わるか確認する。
