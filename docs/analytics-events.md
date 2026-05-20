# Analytics Events

Codex Arcade v0.1で見る最小イベント設計。

Google Analytics 4などを入れる場合、このイベント名を使う。

GA4未接続の開発中は、ブラウザの `localStorage` に簡易ログとして保存する。

## 先に実装する方針

v0.1では、まずGA4に接続できるイベント送信の土台を入れる。

初期ターゲットや本格マーケ戦略の深掘りは、計測基盤が動き始めてから行う。

現時点の実装:

- `arcade.js` に `trackArcadeEvent` を追加。
- GA4 Measurement IDが未設定の場合は、外部送信せず `localStorage` に保存。
- GA4 Measurement IDを設定すると、`gtag("event", ...)` で送信する。

設定箇所:

```js
const GA_MEASUREMENT_ID = "";
```

GA4のMeasurement IDを取得したら、ここに `G-XXXXXXXXXX` を入れる。

## GA4で見たいこと

現実的に見られるもの:

- いつアクセスがあったか。
- どのページが見られたか。
- どの流入元から来たか。
- どのデバイス/ブラウザから来たか。
- `INSERT COIN` や `PLAY` などのイベントが押されたか。
- 店長メモが開かれた/送られたか。

注意:

- 個人を特定するための仕組みではない。
- 「誰が」というより、まずは「どこから来た人たちが、何をしたか」を見る。
- 個人情報、メールアドレス、ウォレット情報は取らない。

## Events

| Event | 意味 |
|---|---|
| `arcade_visit` | トップページを開いた |
| `click_free_credit` | `CREDITを受け取る` を押した |
| `toggle_bgm` | BGM ON/OFFを押した |
| `insert_coin` | CabinetのINSERT COINを押した |
| `launch_cabinet` | Cabinetを起動した |
| `open_manager_memo` | 店長メモを開いた |
| `submit_manager_memo` | 店長メモを送った |
| `feedback_fallback_saved` | Formspree未接続のため仮保存した |

## Event Parameters

共通:

- `game_id`
- `cabinet`
- `status`
- `source`

店長メモ:

- `cabinet`
- `replay_intent`
- `clarity`
- `message_length`

## Privacy

- 個人情報は取らない。
- メールアドレスは必須にしない。
- 決済、ウォレット、報酬情報は扱わない。
- Player Memoは改善目的で使う。

## GA4接続時の注意

- Measurement IDを取得する。
- `arcade.js` の `GA_MEASUREMENT_ID` に設定する。
- `trackArcadeEvent` から `gtag("event", ...)` を送る。
- プライバシー表記を確認する。

## localStorageでの確認

GA4未接続でも、開発中は以下にイベントが残る。

```js
localStorage.getItem("codexArcadeAnalyticsEvents")
```

ブラウザの開発者ツールで確認できる。
