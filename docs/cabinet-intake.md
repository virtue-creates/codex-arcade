# Cabinet Intake

このファイルは、各ゲームチャットから完成報告が来たあと、本部がゲームをCodex Arcadeへ搬入するための手順。

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

ゲームチャットから、本部に以下が返ってくること。

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
13. QA結果を該当Cabinet docsへ記録する。
14. 問題がなければコミットする。

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

## Commit Message Pattern

```txt
Migrate cabinet NN game-name
```

例:

```txt
Migrate cabinet 02 metro mender
Migrate cabinet 03 specimen night shift
```
