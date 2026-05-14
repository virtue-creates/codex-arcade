# Arcade Redesign Direction

このドキュメントは、最初のMVPシェル確認後に出た人間フィードバック、Marketing Agent案、Creative Agent案を本部で統合したもの。

## 現在地

```txt
Phase 1 Sprint 2/3 - Arcade MVP Implementation
Workstream: Marketing/Creative ゲーセン感の再設計
```

最初のMVPシェルは構造としては動いた。

ただし、人間フィードバックは明確だった。

```txt
オンラインゲーセン感がない。
ワクワクしない。
```

## User-Originated

人間から出た方向性:

- 表向きはゲームセンター感を優先したい。
- 日本語主軸 + アーケード用語は英語を試したい。
- Phase / Sprint / Current Board は公開トップに出さない方がよい。
- 3つのCabinetが並ぶこと自体はよい。
- まだ遊べないCabinet 02/03を見せるのはよい。
- 今の画面はカード型で、ゲーセン感がない。
- 100円を入れて1プレイするような感覚を大事にしたい。
- ただし、昔ながらのゲーセンをそのままコピーしたいわけではない。
- マーケ/クリエイティブ担当を入れてブレストすべき。

## Agent-Added

Marketing Agent が追加した視点:

- 「Codexが経営する少し未来の無人オンラインゲーセン」という方向。
- 単なるゲーセン好き向けではなく、Codex / AIエージェント / 自動開発に興味がある人も初期ターゲット候補。
- `AGENTS TUNING` など、未完成筐体を「裏でエージェントが準備している」状態として見せる案。
- AI会社感は完全に隠さず、短い文言や状態表示でにじませる案。
- 裏側の詳しい説明は `Behind the Arcade` / `運営室` / Devlog に分ける案。

Creative Agent が追加した視点:

- `Neon Cabinet Row` 案。
- `Midnight Game Center` 案。
- `Operator Console Arcade` 案。
- 推奨は `Neon Cabinet Row + 少量の Operator Console 感`。
- Cabinetをカードではなく、看板、画面、操作パネル、ステータスライトを持つ筐体として見せる案。
- `INSERT COIN -> CREDIT READY -> PLAY` の段階体験。
- Coming soon筐体を無効カードではなく、停止中/調整中の筐体として扱う案。

## 本部の統合判断

現時点の採用候補:

```txt
Neon Cabinet Row + 少量の Operator Console 感
```

意味:

- 最初に見えるのは筐体列。
- Cabinet 01は起動中。
- Cabinet 02/03は存在しているが、まだ調整中。
- AIエージェント会社感は、メイン説明ではなく状態表示や裏導線でにじませる。
- ダッシュボード感には戻さない。

## 公開トップの方向

公開トップで優先すること:

- 何のゲームセンターか分かる。
- どのCabinetが遊べるか分かる。
- CREDITを入れて1 PLAYする感覚がある。
- Cabinet 02/03も「これから増える」感じがある。

公開トップで優先しないこと:

- Phase
- Sprint
- Current Board
- 詳細なAI部署説明
- 開発工程

## コピー方向

日本語主軸。

アーケード用語は英語で残してよい。

候補:

```txt
小さなWebゲームが並ぶ、オンラインゲーセン。
```

補助コピー候補:

```txt
CREDITを入れて、起動中のCabinetを選んでください。
```

エージェント感を少しだけ出す候補:

```txt
AI agents are setting up the cabinets.
```

## UI用語候補

使ってよさそう:

- CREDITS
- INSERT COIN
- 1 CREDIT = 1 PLAY
- CABINET
- NOW PLAYABLE
- CREDIT READY
- CABINET ONLINE
- STANDBY
- AGENTS TUNING
- COMING SOON

避けたい:

- Phase
- Sprint
- Current Board
- Purchase
- Charge
- Balance
- Deposit
- Token
- Reward
- Prize
- 現金価値を連想させる表現

## Cabinet表現

カードではなく、Cabinetとして見せる。

各Cabinetの構造:

- marquee / 看板
- screen / attract mode
- control panel
- status light

Cabinet 01:

- 起動中
- `INSERT COIN`
- `1 CREDIT = 1 PLAY`
- 状態変化: `CREDIT READY` / `CABINET ONLINE`

Cabinet 02:

- まだ遊べない
- Metro / route-map の気配
- `AGENTS TUNING` または `STANDBY`

Cabinet 03:

- まだ遊べない
- 標本箱 / night shift の気配
- `AGENTS TUNING` または `STANDBY`

## Credit / INSERT COIN

理想:

```txt
CREDITSを見る
-> Cabinet 01を選ぶ
-> INSERT COIN
-> Cabinetが起きる
-> PLAY
```

MVPでは簡略化してもよいが、次の見た目修正では二段階体験を意識する。

```txt
INSERT COIN -> CREDIT READY -> PLAY
```

## Coming Soon

Coming soonは、単なるdisabled cardにしない。

候補:

- AGENTS TUNING
- STANDBY
- UNDER MAINTENANCE
- SETUP IN PROGRESS
- COMING SOON

本部暫定:

```txt
COMING SOON は分かりやすさ用に残す。
AGENTS TUNING / STANDBY は世界観用のサブ表示として使う。
```

## Risks / Concerns

- AIエージェント感を出しすぎると、またゲーセンではなくダッシュボードに戻る。
- 「自動で筐体が増える」と言いすぎると、現状より約束が強くなる。
- ネオンを盛りすぎると凡庸なサイバーパンクUIになる。
- 昔のゲーセンを直接模倣すると、古臭さや権利リスクが出る。
- `AGENTS TUNING` は面白いが、初見で意味が分からない可能性がある。
- `FREE COIN` は便利だが、ゲーセン演出としては少し軽く見える可能性がある。

## Alternatives

まだ保留している別案:

- `Midnight Game Center`
  - 夜の小さなゲームセンター感を強める。
  - 日本語主軸と相性がよいが、背景美術が重くなりやすい。

- `Operator Console Arcade`
  - AI運営感を強める。
  - 独自性はあるが、やりすぎると管理画面っぽくなる。

## Recommended Next Implementation Changes

優先順位:

1. Phase / Sprint / Current Board を公開トップから外す。
2. 日本語主軸のコピーに変える。
3. generic card grid から cabinet row へ寄せる。
4. CREDITSを筐体風表示にする。
5. Cabinet 01の `INSERT COIN / PLAY` 感を強める。
6. Cabinet 02/03を停止中筐体として見せる。
7. AI agents感は軽くにじませる。
8. AI会社の詳しい説明は下部または将来の `Behind the Arcade` に回す。

## 本部でまだ確認すること

- トップ方向は `Neon Cabinet Row + 少量の Operator Console 感` でよいか。
- トップコピーは `小さなWebゲームが並ぶ、オンラインゲーセン。` で試すか。
- `AGENTS TUNING` を使うか、意味が分かりにくいので別表現にするか。
- `INSERT COIN -> PLAY` を今すぐ二段階にするか、見た目だけ先に寄せるか。
- `FREE COIN` の表現を残すか、別の言い方にするか。

