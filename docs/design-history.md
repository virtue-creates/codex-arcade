# Design History

このファイルは、Codex Arcadeの画面デザインの変遷を人間が見返すための記録。

HTML/CSS/JSそのものの履歴はGitに任せる。

ここでは、各時点の見た目、違和感、フィードバック、次の判断を日本語で残す。

## 2026-05-14 - MVP Shell v1

関連コミット:

```txt
Build arcade MVP shell
```

状態:

```txt
最初に動いたCodex Arcade親サイトMVP。
```

できていたこと:

- `games.json` からCabinetカードを表示できる。
- Cabinet 01/02/03を表示できる。
- CREDITS表示がある。
- FREE COINボタンがある。
- Cabinet 01は `INSERT COIN / PLAY` できる状態。
- Cabinet 02/03は `COMING SOON` 状態。
- Phase 1 Sprint 2/3などのCurrent Board表示がある。

見た目:

- 英語中心。
- ダーク背景。
- ネオン風アクセント。
- カード型グリッド。
- SaaSダッシュボードや開発用画面に近い印象。
- Cabinetというより、ゲームカードが並んでいる印象。

人間フィードバック:

- 率直に言って、オンラインゲーセンっぽさがない。
- ゲーセン感がない。
- ワクワクしない。
- 表向きはゲームセンター感を優先したい。
- 日本語主軸 + アーケード用語は英語を試したい。
- Phase / Sprint / Current Board は公開トップに出さなくてよい。
- Cabinetはカードではなく、筐体を選ぶ感覚に寄せたい。
- 100円を入れて1プレイするような体験を大事にしたい。
- ただし、昔ながらのゲーセンをそのままコピーしたいわけではない。

判断:

```txt
MVP Shell v1は構造確認用としては有効。
ただし、公開トップの体験方向としてはリデザインが必要。
```

次の方向:

```txt
Neon Cabinet Row + 少量の Operator Console 感
```

次に直すこと:

- 公開トップからPhase/Sprint表示を外す。
- 日本語主軸のコピーにする。
- カード型UIからCabinet Rowへ寄せる。
- CREDITSを筐体風にする。
- INSERT COIN体験を強める。
- COMING SOONを停止中/調整中の筐体として見せる。
- AIエージェント会社感はトップで説明しすぎず、軽くにじませる。

## 2026-05-15 - Cabinet Row Shell v2

関連コミット:

```txt
Redesign arcade MVP shell
```

状態:

```txt
MVP Shell v1への人間フィードバックを受け、公開トップをゲーセン寄りに再設計した状態。
```

変更したこと:

- 公開トップから `Phase / Sprint / Current Board` 表示を外した。
- 見出しと説明文を日本語主軸に変更した。
- ゲームカードを、筐体が横に並ぶ `Cabinet Row` 表現へ寄せた。
- Cabinet 01は `INSERT COIN -> CREDIT READY -> PRESS PLAY` の2段階体験にした。
- Cabinet 02/03は `COMING SOON` だけでなく、`路線修復中` / `夜間展示準備中` として停止中筐体らしく見せた。
- `CREDITS` と `1 CREDIT = 1 PLAY` を残しつつ、無料演出用である注釈を置いた。
- AIエージェント会社の説明は前面に出さず、短い一文と下部注釈に留めた。
- `games.json` のゲーム説明文を日本語にした。

確認できたこと:

- 3つのCabinetが表示される。
- Cabinet 01はプレイ可能状態として表示される。
- Cabinet 02/03は準備中として表示される。
- 公開トップにPhase/Sprint表示は出ていない。
- `INSERT COIN` を押すと `CREDIT READY` / `PRESS PLAY` に変化する。

残っている論点:

- まだ「完成デザイン」ではなく、方向性確認用のMVPシェル。
- 実在のゲームセンター再現に寄せすぎず、Codex Arcade独自の気持ちよさを探る必要がある。
- `SERVICE COIN` という文言が直感的かは、ユーザー確認が必要。
- 上部看板、奥行き、筐体の物質感、光り方はさらに磨ける。
- Cabinet 01に実ゲームを移植するまでは、まだ「親サイトの入口」段階。

判断:

```txt
MVP Shell v1よりは公開面がゲーセン体験に近づいた。
ただし、ここから人間レビューを受けて、ゲーセン感・日本語コピー・クレジット演出をさらに調整する。
```
