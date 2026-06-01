# Cabinet 01 v0.1.1 Studio Report

Cabinet Studio:

- Cabinet 01 Studio

Game:

- Neon Core Survivor

Report received:

- 2026-05-26

HQ status:

- Studio report received.
- HQ adoption: approved as candidate.
- Repository intake: completed on 2026-05-26.

## Studio Evaluation

Cabinet 01 `Neon Core Survivor` は、現時点のCodex Arcadeのシグネチャーゲームとして十分よい状態。

Studio notes:

- ゲーム自体の手触りは分かりやすく、短時間で「避ける・撃つ・育つ」が伝わる。
- ネオン調の画面、発光、グリッド、HUDが整っていて、Codex Arcadeの看板筐体として見栄えがある。
- v0.1.1で120秒化したことで、初見プレイの負担が減った。
- 操作説明も `Move / Aim / Dash` に具体化され、最初に迷いにくくなった。
- `?from=arcade&credit=1` 起動時の `1 Credit Inserted - Core Online` 表示は、Arcade世界観に合っている。
- `Back to Arcade` 導線もタイトル画面で邪魔になりにくくなった。
- ベストスコアと生存時間がリザルトに出るため、リトライ性が少し上がった。
- 最小SFXトグルも入り、音なしでも遊べるが、好みで少し手触りを足せる状態になった。

## Reported v0.1.1 Changes

- クリア条件を180秒から120秒へ短縮。
- タイトル画面の操作説明を具体化。
- Arcade起動時コピーを強化。
- タイトル画面の `Back to Arcade` 配置を調整。
- リザルトに `Best` と `Survived` を追加。
- `localStorage` にベストスコア保存。
- `Sound Off / Sound On` の最小SFXトグルを追加。
- `game.json` を `0.1.1` に更新。
- README / CHANGELOG 更新。

## Reported Checks

- `node --check games/neon-core-survivor/game.js`
- `game.json` のJSON parse
- ローカル起動でタイトル画面表示確認
- `?from=arcade&credit=1` 起動表示確認
- `Start Run` でゲーム開始確認
- タイマーが `2:00` から進むことを確認

## Studio Judgment

Neon Core Survivorは、現時点では大きく作り替えず、Codex Arcadeの第1看板ゲームとして扱ってよい。

今後の追加は、ボス、武器、スマホ対応などの大改造より、まずは公開後の反応を見ながら小さく調整する方針がよい。

## Headquarters Judgment

本部判断:

- v0.1.1方針は採用してよい。
- Cabinet 01は当面、Codex Arcadeのシグネチャーゲームとして扱う。
- 本部リポジトリ側のv0.1.1反映は、2026-05-26に確認済み。
- 本部で静的QA、`games.json`更新、記録更新、コミットを行う。

## 2026-05-26 HQ Intake

Cabinet 01 Studioから、v0.1.1実装済みファイルは本部リポジトリ側の以下であると回答を受けた。

```txt
/Users/ogawakenji/Desktop/codex-arcade/games/neon-core-survivor/
```

HQ verified:

- `games/neon-core-survivor/game.json` is `0.1.1`.
- `games/neon-core-survivor/game.js` uses `WIN_TIME = 120`.
- Title copy says `Survive 120 seconds. Auto-fire aims at your mouse.`
- `Sound Off` toggle exists.
- `README.md` describes the 120-second version.
- `CHANGELOG.md` includes `0.1.1 - 2026-05-26`.

HQ updated parent `games.json`:

- Cabinet 01 description now says 120 seconds.
- Cabinet 01 `updatedAt` is now `2026-05-26`.

Repository intake status:

- Completed.
- Static QA completed.

Static QA:

- `node --check games/neon-core-survivor/game.js`: passed.
- `games/neon-core-survivor/game.json` parse: passed.
- parent `games.json` parse: passed.
- `git diff --check`: passed.

## HQ Follow-up

本部で次に必要なこと:

1. Cabinet 01 v0.1.1関連ファイルを本部コミットにまとめる。
2. GitHubへpushする。
3. GitHub Pages公開後、公開URLでCabinet 01起動を確認する。
4. 公開後の店長メモ/Analyticsを見て、次の小改善を判断する。
