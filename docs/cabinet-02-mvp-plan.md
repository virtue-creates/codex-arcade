# Cabinet 02 MVP Plan

Cabinet 02:

```txt
gameId: metro-mender
title: Metro Mender
phase: Phase 3
initial parent status: concept
```

## MVP Summary

`Metro Mender` is a one-screen subway route repair puzzle.

MVP scope:

- Fixed one-screen subway map
- 8-10 stations
- 2 line colors
- 4-6 broken links
- Limited repair count
- 90-150 second play session
- Simplified scoring based on connected key stations, isolated stations, and congestion markers

## Minimum Rules

- 1 play costs 1 free virtual credit, managed by the parent arcade.
- The game reads `?from=arcade&credit=1` for INSERT COIN flavor only.
- The game must not manage credit balance.
- The player clicks broken links to repair them.
- Each repair consumes 1 remaining repair.
- The score updates after repairs.
- End result shows `score`, `rank`, `restoredStations`, and `isolatedStations`.
- `postMessage` is not required for MVP.

## One-Screen Elements

- Title: `Metro Mender`
- BACK TO ARCADE link
- State display: TITLE, READY, PLAY, RESULT
- Route map area
- Station nodes
- Route lines
- Broken segments
- Repaired segments
- Key station markers
- Timer
- Remaining repairs
- Current score
- Restoration rate
- Hover highlight
- Repair success flash
- Short warning when repair is not allowed
- Result panel
- RETRY

## First Operations

- Click a broken segment.
- Mark that segment as repaired.
- Spend 1 repair.
- Recalculate connection state and score.
- Start and retry from buttons.
- Direct launch works as normal.
- Arcade launch shows `1 CREDIT` / ready flavor.

## Deferred Features

- Complex passenger AI
- Advanced real-time pathfinding
- Multiple stages
- Daily maps
- Construction cards
- Special abilities
- Rush hour mode
- Voice announcements
- Mobile optimization
- iframe cabinet mode
- `postMessage`
- External libraries
- Real payment, crypto, or exchangeable rewards

## QA Focus

- Direct launch works.
- `?from=arcade&credit=1` launch works.
- BACK TO ARCADE works.
- Title, play, result, and retry states work.
- Play length stays around 90-150 seconds.
- First-time players understand that broken lines can be clicked.
- Repairable and non-repairable areas are visually clear.
- Score and rank always display.
- Desktop map is readable.
- Tablet click/touch targets are large enough if tablet support is claimed.
- Mobile is marked as not recommended or checked only for graceful layout behavior.
- The game does not change parent arcade credit balance.

## `game.json`

```json
{
  "schemaVersion": 1,
  "id": "metro-mender",
  "title": "Metro Mender",
  "version": "0.1.0",
  "entry": "index.html",
  "creditCost": 1,
  "supportsArcadeParams": true,
  "supportsPostMessage": false,
  "devices": ["desktop", "tablet"],
  "input": ["mouse"],
  "orientation": "landscape",
  "viewport": {
    "recommendedWidth": 1280,
    "recommendedHeight": 720,
    "aspectRatio": "16:9"
  }
}
```

Note:

If tablet support is claimed in implementation, consider updating input to:

```json
"input": ["mouse", "touch"]
```

## Thumbnail Direction

MVP thumbnail should use an in-game route map screenshot.

Visual target:

- Dark background
- 2 route colors
- Red broken segments
- Lit key stations
- Readable subway board feel

File:

```txt
assets/thumbnails/metro-mender.png
```

Initial placeholder thumbnails are acceptable during development, but public QA should replace them with an actual in-game screenshot.

## Risk Reduction

- Prefer HTML/SVG for the first route map instead of Canvas.
- Keep click targeting and visual adjustment simple.
- Store map data as fixed JSON-like arrays.
- Do not add random generation in MVP.
- Passenger flow can be a visual dot effect only.
- Score should use a simple connected-graph calculation.
- Start with 8 stations and expand only if needed.
- Keep operation to one action: click broken segment to repair.
- Keep `supportsPostMessage: false` in MVP.
- Keep credit balance responsibility in the parent arcade.

## Headquarters Decisions

- Keep `Metro Mender` planned for Phase 3.
- Register it as `status: "concept"` in Phase 1 parent `games.json`.
- Device target can be desktop/tablet, with mobile not recommended.
- Input can remain `mouse` until touch QA is committed.
- 90-150 seconds is acceptable for Codex Arcade.
- `supportsPostMessage` should remain `false` for MVP.
- Thumbnail should be based on actual game UI.
- Mobile non-support should be shown on the game card.

## 2026-05-15 本部受け入れ記録

Cabinet 02 `Metro Mender` のMVP実装報告を受け、本部リポジトリへ搬入した。

搬入元:

```txt
/Users/ogawakenji/Documents/Codex/2026-05-13/cabinet-02-codex-arcade-2-web/games/metro-mender/
```

搬入先:

```txt
games/metro-mender/
```

本部で確認した内容:

- `index.html`, `styles.css`, `game.js`, `game.json`, `README.md`, `CHANGELOG.md` を搬入した。
- 親 `games.json` の `metro-mender` を `status: "prototype"` に更新した。
- `updatedAt` を `2026-05-15` に更新した。
- タイトル画面とリザルト画面に `BACK TO ARCADE` 導線を追加した。
- `node --check games/metro-mender/game.js` が通ることを確認した。
- `games/metro-mender/game.json` と親 `games.json` がJSONとして読めることを確認した。
- ローカルHTTPサーバーで `games/metro-mender/` が `200 OK` になることを確認した。
- `game.js` と `styles.css` が `200 OK` で配信されることを確認した。

本部判断:

- 終了条件は、MVPでは「全故障修理 / 修理数ゼロ / 時間切れ」でよい。
- `120秒 / 修理5回` は、まずMVP QA用の初期バランスとして採用する。
- `BACK TO ARCADE` のリンク先は Phase 3 時点では `../../index.html` で統一する。
- `supportsPostMessage: false` のまま開始する。
- サムネイルは実ゲーム画面のスクリーンショットベースで作る。
- Cabinet 02 は `prototype` として親Arcadeに登録する。

残っている確認:

- 人間の目視QAで、路線図が分かりやすいか確認する。
- 「赤い故障区間をクリックして直す」が初見で伝わるか確認する。
- 120秒/修理5回が長すぎる、短すぎる、簡単すぎるなどないか確認する。
- 実サムネイル `assets/thumbnails/metro-mender.png` を作成する。

## 2026-05-16 Game Design Intent Report

Cabinet 02 Studioから `Game Design Intent Report` を受領した。

記録先:

```txt
docs/cabinet-02-design-intent-report.md
```

本部の初期読み:

- 開発意図は「クリック修理ゲーム」ではなく「限られた修理で都市を復旧するルート判断パズル」。
- 人間QAの違和感と、Cabinet 02 Studioの自己分析はかなり一致している。
- 最大の課題は、故障区間数と修理回数が同じため、取捨選択が発生していないこと。
- 次の改善では、先に演出を足すより、ゲームとして悩む構造を作ることが重要。
- 改善候補は、修理回数を故障数より少なくする、重要駅を見える化する、クリック前後の効果を分かりやすくする、短い初回説明を入れること。
