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
- `memo_form_start` は、店長メモの入力/選択を始めた時点で1回だけ記録する。
- `return_to_arcade` は、ゲーム側のBACK TO ARCADEリンクに `returned_from` を付け、親Arcade側で受け取って記録する。

設定箇所:

```js
const GA_MEASUREMENT_ID = "G-VBKHF7QYE0";
```

GA4のMeasurement IDは `G-VBKHF7QYE0` を設定済み。

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
| `memo_form_start` | 店長メモを書き始めた |
| `submit_manager_memo` | 店長メモを送った |
| `manager_memo_submit_result` | 店長メモの送信結果 |
| `feedback_fallback_saved` | Formspree未接続のため仮保存した |
| `select_cabinet` | Cabinetに触れた/選択した |
| `return_to_arcade` | ゲームからArcadeへ戻った |

## Event Parameters

共通:

- `game_id`
- `cabinet`
- `status`
- `cabinet_id`
- `cabinet_name`
- `cabinet_status`
- `ui_location`
- `event_origin`
- `cta_label`
- `credit_count_before`
- `credit_count_after`
- `is_first_visit`

店長メモ:

- `cabinet`
- `memo_cabinet_id`
- `replay_intent`
- `clarity`
- `message_length`
- `message_length_bucket`
- `submit_result`

## Marketing Departmentからの更新

2026-05-21のMarketing Department回答を受けて、以下を追加する。

- `select_cabinet`
- `memo_form_start`
- `manager_memo_submit_result`
- `return_to_arcade`

また、`source` はGA4の流入元用語と混ざりやすいため、UI上の発生場所には `ui_location` または `event_origin` を使う。

最重要ファネル:

```txt
arcade_visit
-> insert_coin
-> launch_cabinet
-> return_to_arcade
-> open_manager_memo
-> submit_manager_memo
```

## 2026-05-22 本部実装メモ

- `return_to_arcade` を実装した。
- `games/neon-core-survivor/`, `games/metro-mender/`, `games/specimen-night-shift/` のBACK TO ARCADEリンクに `returned_from=[gameId]` を付けた。
- 親Arcadeは `returned_from` を受け取ると `return_to_arcade` を記録し、URLからパラメータを消す。
- `memo_form_start` は送信時ではなく、店長メモフォームの入力/選択開始時に記録するよう修正した。
- GA4 Measurement ID `G-VBKHF7QYE0` を設定済み。
- Formspree endpointは未設定。公開前に人間ディレクター確認後に設定する。

## Privacy

- 個人情報は取らない。
- メールアドレスは必須にしない。
- 決済、ウォレット、報酬情報は扱わない。
- Player Memoは改善目的で使う。

## GA4接続時の注意

- Measurement ID `G-VBKHF7QYE0` を設定済み。
- `trackArcadeEvent` から `gtag("event", ...)` を送る。
- プライバシー表記を確認する。

## localStorageでの確認

GA4未接続でも、開発中は以下にイベントが残る。

```js
localStorage.getItem("codexArcadeAnalyticsEvents")
```

ブラウザの開発者ツールで確認できる。
