# Cabinet Intake

このファイルは、各 `Cabinet Studio` から完成報告が来たあと、本部がゲームをCodex Arcadeへ搬入するための手順。

`Cabinet Studio` は、各Cabinetゲームを担当する制作チーム/チャットの呼び方。

目的は、Cabinet 01で行った移植作業を、Cabinet 02/03以降でも迷わず再現できるようにすること。

## Current Intake Status

```txt
Cabinet 01: neon-core-survivor
Status: migrated / QA passed for parent launch

Cabinet 02: metro-mender
Status: migrated / static intake passed / visual QA pending

Cabinet 03: specimen-night-shift
Status: migrated / static intake passed / visual QA pending
```

## Intake Inputs

Cabinet Studioから、本部に以下が返ってくること。

- Game Design Intent Report
- 実装済みファイル一式の場所
- 変更したこと
- 追加したファイル
- 起動確認結果
- 未対応・後回し
- 本部に確認してほしいこと

期待ファイル:

```txt
index.html
styles.css
game.js
game.json
README.md
CHANGELOG.md
```

## Intake Steps

1. 移植元フォルダを確認する。
2. 移植先 `games/[game-id]/` を作る。
3. 必要ファイルだけをコピーする。
4. `.git` や単体リポジトリ管理ファイルはコピーしない。
5. `node --check games/[game-id]/game.js` を実行する。
6. `games/[game-id]/game.json` をJSONとしてパースする。
7. 親 `games.json` の登録内容と照合する。
8. ローカルサーバーで親Arcadeを開く。
9. 親Arcadeから該当Cabinetを起動する。
10. `?from=arcade&credit=1` が付いているか確認する。
11. ゲーム内のArcade起動表示を確認する。
12. Start / Retry / Result / BACK TO ARCADEを確認する。
13. `Game Design Intent Report` と人間QAの感想を照合する。
14. QA結果を該当Cabinet docsへ記録する。
15. 問題がなければコミットする。

## Game Design Intent Report

Cabinet Studioは、MVP完成報告時に `docs/game-design-intent-report.md` の内容に沿って、ゲーム性の意図を本部へ返す。

本部が知りたいのは、単に「実装した機能」ではない。

- このゲームは何をするゲームなのか
- 具体的なルールは何か
- プレイヤーにとって何が楽しい想定なのか
- どこで悩ませるのか
- どこで気持ちよくさせるのか
- 初見プレイヤーに何が伝われば成功なのか
- 開発者自身が不安に思っている点は何か

人間QAは、この意図レポートを読んだうえで実際に遊ぶ。

その結果、本部は以下を判断する。

- 狙った楽しさが伝わっている
- ルールや狙いは良いが、UI/説明/演出が足りない
- ゲーム性そのものを再設計する必要がある
- 開発者の想定とは違うが、別の面白さが見えている

## Report Line

```txt
Cabinet Studio
  ↓
Game Design Intent Report
  ↓
Implementation Report
  ↓
Headquarters Intake Review
  ↓
Human QA
  ↓
Human QA Summary
  ↓
HQ Direction
  ↓
Cabinet Studio revision
```

本部は、Cabinet Studioの意図、実装、QA結果、改善方針をつなぐ。

改善依頼に入る前に、必ず「開発者の意図」と「人間QAの体験」を照合する。

## Required Local QA

各Cabinetで最低限確認すること。

- 親サイトにCabinetが表示される。
- プレイ可能なCabinetだけが起動できる。
- Conceptや未完成Cabinetが誤って起動しない。
- 起動URLが `games/[game-id]/?from=arcade&credit=1` になる。
- 直接 `games/[game-id]/index.html` を開いても壊れない。
- Arcade起動時に `1 CREDIT` 相当の演出が出る。
- ゲーム側で親Arcadeのクレジット残高を増減しない。
- BACK TO ARCADEで親サイトへ戻れる。
- 実決済、暗号資産、換金、景品、ランキング賞品に見える表現がない。

## Current Game-Specific Notes

### Cabinet 02: Metro Mender

- `gameId`: `metro-mender`
- Target path: `games/metro-mender/`
- Recommended play length: 90-150 seconds
- Devices: desktop / tablet
- Input: mouse
- MVP risk: ルールが抽象的だと初見で分かりづらい。
- 本部QAでは「壊れた線をクリックして直す」が伝わるかを見る。
- 2026-05-15: 本部リポジトリへ搬入済み。構文/JSON/HTTP確認は通過。人間の目視QAとサムネイル作成が次。

### Cabinet 03: Specimen Night Shift

- `gameId`: `specimen-night-shift`
- Target path: `games/specimen-night-shift/`
- Recommended play length: 60 seconds
- Devices: desktop / tablet
- Input: mouse / touch
- MVP risk: 虫の動きとピンの影響が分かりづらい可能性がある。
- 本部QAでは「奇妙で美しい」方向に収まっているかを見る。
- 2026-05-15: 本部リポジトリへ搬入済み。構文/JSON/HTTP確認は通過。人間の目視QAとサムネイル作成が次。

## Do Not Do During Intake

- 本部判断なしにゲーム仕様を大きく変えない。
- 親Arcadeのデザイン方針を一緒に変えない。
- 実決済、暗号資産、報酬機能を追加しない。
- postMessageを無理に実装しない。
- サムネイル未完成を理由にゲーム移植自体を止めない。
- 人間QA前に、開発者のゲーム意図を曖昧なまま改善作業へ進めない。

## Commit Message Pattern

```txt
Migrate cabinet NN game-name
```

例:

```txt
Migrate cabinet 02 metro mender
Migrate cabinet 03 specimen night shift
```
