# QA Checklist

Use this checklist before a game is registered in Codex Arcade.

For headquarters intake work, also see `docs/cabinet-intake.md`.

## Startup

- Game opens from `games/[game-id]/index.html`.
- Game opens from the parent arcade link.
- No missing critical assets.
- No obvious console errors.

## UI

- Title screen exists.
- Operation instructions are visible.
- Main UI fits inside the viewport.
- Game-over or result screen exists.
- Retry option exists.
- BACK TO ARCADE link exists.

## Controls

- Declared input method works.
- Player can start the game.
- Player can lose, win, or finish the game.
- Player does not get trapped in an unplayable state.

## Game Design Intent QA

ゲームを遊ぶ前に、開発者の `Game Design Intent Report` を確認する。

- このゲームが何をするゲームか説明されている。
- 具体的なルールが説明されている。
- 初見プレイヤーに何が伝われば成功か説明されている。
- プレイヤーにとって何が楽しい想定か説明されている。
- どこで悩ませるゲームか説明されている。
- どこで気持ちよくさせるゲームか説明されている。
- 開発者が不安に思っている点が書かれている。

人間QAでは、以下を判定する。

- 意図どおり楽しい。
- 意図は分かるが、伝わり方が弱い。
- 操作や説明ではなく、ゲーム性自体に課題がある。
- 開発者の想定とは違う楽しさがある。
- Arcadeに並べる価値が現時点であるか。

## Arcade Integration

- `game.json` exists.
- `README.md` exists.
- `CHANGELOG.md` exists.
- `games.json` entry matches the game.
- `id`, `path`, `thumbnail`, and `creditCost` are correct.
- `?from=arcade&credit=1` works as expected.
- BACK TO ARCADE returns to the parent Arcade.
- Game does not manage the parent credit balance.
- Game works when opened directly and when launched from the parent Arcade.

## Parent Launch QA

- Parent Arcade shows the game in the correct Cabinet slot.
- Playable games can launch from the parent Arcade.
- Concept games do not launch accidentally.
- Launch URL includes `from=arcade` and `credit=1`.
- Arcade launch flavor appears in the game.
- Start button enters gameplay.
- Retry works after result/game-over if implemented.
- Returning to the parent site does not break layout.

## Device Support

- Desktop behavior checked.
- Tablet behavior checked if declared.
- Mobile behavior checked if declared.
- Non-optimized devices show a clear message or still remain usable.

## Content and Rights

- No unlicensed external assets.
- No obvious copyright or trademark risk.
- No real-money reward or payment language.
- No crypto, wallet, prize, or cash-like language in MVP.

## Current Cabinet QA Notes

## Human Play QA - 2026-05-16

全体:

- 親Arcadeから3つのCabinetが起動し、全体として「動いている」ことは確認済み。
- 次の論点は、起動確認ではなく「ゲームとして面白いか」「遊び方が伝わるか」「Arcadeに並べる価値があるか」。

Cabinet 01 `neon-core-survivor`:

- Parent launch checked.
- Arcade launch flavor checked.
- Start Run checked.
- BACK TO ARCADE checked.
- Human play impression: 細かいことを抜きにして、現時点で「おもろい」。3本の中では遊びの核が一番成立している。
- QA status: Playable core accepted. 次はサムネイル、軽い見た目調整、親Arcadeでの主役扱いを検討する。
- Thumbnail still pending.

Cabinet 02 `metro-mender`:

- 本部リポジトリへ搬入済み。
- `node --check`、JSON parse、HTTP配信確認は通過。
- 目視QAでは、路線図の読みやすさと「赤い故障区間をクリックして直す」が伝わるかを優先して確認する。
- Human play impression: 遊び方が分かりづらい。現状では、つながっていない路線をクリックしたらクリアになるだけに見えて、ゲームとして成立している感覚が弱い。
- QA status: Prototype runs, but gameplay loop is not accepted yet. ルール説明、失敗/選択/スコア差、修理の悩ましさを再設計する必要がある。
- Thumbnail still pending.

Cabinet 03 `specimen-night-shift`:

- 本部リポジトリへ搬入済み。
- `node --check`、JSON parse、HTTP配信確認は通過。
- 目視QAでは、ピンと虫の因果関係、救出の分かりやすさ、奇妙で美しい方向に収まっているかを優先して確認する。
- Human play impression: 遊び方が分かりづらい。虫を寄せる何かでバケツのような場所へ入れるゲームに見える。大人向けには現状つまらないが、小さい子なら楽しめる可能性はある。
- QA status: Prototype runs, but target audience and game value need reconsideration. 子ども/ゆるい誘導遊びとして磨くか、大人にも面白いパズルへ再設計するか判断が必要。
- Thumbnail still pending.
