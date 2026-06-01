# Marketing Department Response: Analytics / Release v0.1

```txt
Received: 2026-05-21
Status: reviewed / HQ implementation in progress
```

## 読んだファイル

- `/Users/ogawakenji/Desktop/codex-arcade/docs/05-release-qa/release-v0.1-roadmap.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/02-arcade-product/feedback-loop.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/marketing-release-plan.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/analytics-events.md`

## 要点

v0.1のAnalyticsの目的は、数字を見ることではなく、遊ばれながら改造されるオンラインゲーセンとして、どこを直すべきか判断できる状態にすること。

Marketing Departmentとしては、v0.1ではGA4で開始してよい。

理由:

- 流入元を見られる。
- 時間帯を見られる。
- デバイスを見られる。
- ページ表示を見られる。
- イベント計測を無料で一通り見られる。

ただし、週次で見る画面が複雑すぎる場合は、将来的にPlausibleのような軽量ツールも検討余地がある。

Microsoft Clarityのような録画/ヒートマップ系は、プライバシー説明が重くなるためv0.1では後回しでよい。

## v0.1で見るべきもの

- どこから来たか。
- トップだけ見て離れたか。
- CREDIT / INSERT COIN まで進んだか。
- Cabinet 01を起動したか。
- 店長メモを開いたか。
- 店長メモを送ったか。

GA4で見る画面:

- Realtime: 公開直後にアクセスとイベントが来ているか。
- Traffic acquisition: どこから来たか。
- Engagement > Events: 各イベント数。
- Pages and screens: トップだけで止まっていないか。
- Explore: 訪問 -> INSERT COIN -> Cabinet起動 -> 店長メモ の簡易ファネル。

## 追加推奨イベント

- `select_cabinet`
- `memo_form_start`
- `manager_memo_submit_result`
- `return_to_arcade`

特に `select_cabinet` は重要。

「Cabinet 01を見たがINSERT COINしなかった」のか、「そもそもCabinetに触っていない」のかを分けられる。

## イベント優先順位

1. `arcade_visit`
2. `insert_coin`
3. `launch_cabinet`
4. `open_manager_memo`
5. `submit_manager_memo`
6. `select_cabinet`
7. `click_free_credit`
8. `toggle_bgm`

`toggle_bgm` は補助指標。

## 公開後1週間で見る数字

- 訪問数
- 流入元別の訪問数
- `insert_coin / arcade_visit`
- `launch_cabinet / arcade_visit`
- `launch_cabinet / insert_coin`
- `open_manager_memo / launch_cabinet`
- `submit_manager_memo / open_manager_memo`
- デバイス別の `launch_cabinet` 率
- 店長メモ件数
- 店長メモ内の「また遊びたい」「遊び方は分かった」の比率

特に大事なのは、訪問 -> INSERT COIN -> Cabinet 01起動 -> 店長メモ のどこで落ちているか。

## 流入元を見るためのUTM

告知リンクにはUTMを付ける。

例:

```txt
utm_source=x
utm_medium=social
utm_campaign=v0_1_launch
utm_content=teaser_01
```

これにより、Xから来た人、身内テスター導線、GitHub/READMEから来た人などを分けて見られる。

## Analyticsと店長メモの使い分け

Analyticsは「どこで止まったか」を見るもの。

店長メモは「なぜ止まったか」を見るもの。

改善会議ではセットで見る。

## v0.1で後回し

- 個人単位の追跡
- ログイン/ユーザーID
- セッション録画
- ヒートマップ
- A/Bテスト
- 広告最適化
- 詳細なゲーム内行動ログ
- スコアやプレイ内容の細かい収集
- メモ本文の自動感情分析

v0.1では、初見導線が機能しているかを見るだけで十分。

## プライバシー表記案

```txt
Codex Arcadeでは、遊びやすさの改善のためにアクセス解析と店長メモを利用します。個人情報、決済情報、ウォレット情報は収集しません。CREDITSは無料の演出であり、購入・換金・報酬の対象ではありません。
```

## 本部への実装依頼

追加イベント:

- `select_cabinet`
- `memo_form_start`
- `manager_memo_submit_result`
- `return_to_arcade`

共通パラメータ:

- `cabinet_id`
- `cabinet_name`
- `cabinet_status`
- `ui_location`
- `cta_label`
- `credit_count_before`
- `credit_count_after`
- `is_first_visit`

店長メモ系:

- `memo_cabinet_id`
- `replay_intent`
- `clarity`
- `message_length_bucket`
- `submit_result`

既存案の `source` はGA4の流入元用語と混ざりやすいので、UI上の発生場所なら `ui_location` や `event_origin` の方が安全。

## 本部判断

- v0.1はGA4 + localStorage fallbackで開始する。
- Plausibleは将来比較候補として残す。
- Clarity/ヒートマップ/録画はv0.1では使わない。
- 本部は追加イベントとパラメータを実装する。
