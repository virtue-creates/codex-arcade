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

