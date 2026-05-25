# Release Analytics Operations

Codex Arcade v0.1の公開前後で、Analyticsと店長メモをどう扱うかの本部運用メモ。

## 役割分担

| Role | 担当 |
|---|---|
| Human Director | 公開可否、プライバシー、最終判断 |
| Headquarters | 実装、イベント送信、GitHub Pages、docs更新 |
| Marketing Department | 何を見るか、UTM、公開後レビュー、改善仮説 |
| Cabinet Studio | ゲーム側改善、Studio Report |

## v0.1で見る導線

```txt
流入
-> arcade_visit
-> select_cabinet
-> insert_coin
-> launch_cabinet
-> return_to_arcade
-> open_manager_memo
-> memo_form_start
-> submit_manager_memo
```

Analyticsは「どこで止まったか」を見る。

店長メモは「なぜ止まったか」を見る。

## GA4接続作業

人間ディレクター側で必要:

- GA4プロパティを作る。完了。
- Webデータストリームを作る。完了。
- Measurement ID `G-VBKHF7QYE0` を本部に渡す。完了。

本部側でやる:

- `arcade.js` の `GA_MEASUREMENT_ID` に設定する。完了。
- ローカルでページを開いて、Realtimeにイベントが来るか確認する。
- `arcade_visit`, `select_cabinet`, `insert_coin`, `launch_cabinet`, `return_to_arcade`, `open_manager_memo`, `memo_form_start`, `submit_manager_memo`, `manager_memo_submit_result` を確認する。
- 公開後にGitHub Pages URLでも確認する。

v0.1ではやらない:

- 個人単位の追跡。
- ログインID連携。
- セッション録画。
- ヒートマップ。
- 広告最適化。

## Formspree接続作業

人間ディレクター側で必要:

- Formspreeでフォームを作る。
- Endpoint URLを本部に渡す。

本部側でやる:

- `arcade.js` の `FEEDBACK_ENDPOINT` に設定する。
- テストメモを送る。
- 成功時の表示を確認する。
- 失敗時にlocalStorage fallbackへ逃げることを確認する。

v0.1で守ること:

- メールアドレスを必須にしない。
- 個人情報を書かない案内を残す。
- 店長メモは改善目的として扱う。

## UTM運用

告知リンクにはUTMを付ける。

例:

```txt
https://[github-user].github.io/codex-arcade/?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=teaser_01
```

初期候補:

| 用途 | utm_source | utm_medium | utm_campaign | utm_content |
|---|---|---|---|---|
| X / SNS告知 | x | social | v0_1_launch | launch_post |
| X / SNSの再投稿・補足投稿 | x | social | v0_1_launch | followup_post |
| 身近な初期テスター向け | early_testers | direct_message | v0_1_launch | test_invite |
| GitHub README / repo導線 | github | referral | v0_1_launch | readme |
| Devlog / Behind the Arcade導線 | codex_arcade | owned | v0_1_launch | devlog |

運用ルール:

- 小文字で統一する。
- 日本語やスペースを入れない。
- 個人名を入れない。
- `utm_campaign` はまず `v0_1_launch` に固定する。
- 違いは `utm_content` で見る。

## 公開後レビュー

公開後レビューは以下のリズムで行う。

- 公開当日: GA4 / Formspree / localStorageの接続確認。
- 公開3日後: 初回改善レビュー。
- 公開7日後: v0.1.1方針レビュー。

見るもの:

- `arcade_visit` 数。
- `insert_coin / arcade_visit`。
- `launch_cabinet / insert_coin`。
- `return_to_arcade / launch_cabinet`。
- `open_manager_memo / return_to_arcade`。
- `submit_manager_memo / open_manager_memo`。
- 流入元ごとの `launch_cabinet` 率。
- 店長メモの「また遊びたい」比率。
- 店長メモの「遊び方は分かった」比率。

本部がまとめるアウトプット:

- 何が起きたか。
- どこで止まったか。
- なぜ止まった可能性があるか。
- Cabinet 01 Studioへ返す改善指示。
- トップページ/導線の改善指示。
- 次の告知で試す表現。

## Marketing Department レポート形式

Marketing Departmentは、公開後レビューで以下の形式を使う。

```txt
v0.1 Analytics & Player Memo Report

期間:

結論:
- 今回どこで止まっているか
- 次に直すべき箇所
- v0.1.1で優先すべき改善

ファネル:
- arcade_visit
- select_cabinet
- insert_coin
- launch_cabinet
- return_to_arcade
- open_manager_memo
- memo_form_start
- submit_manager_memo

見る比率:
- insert_coin / arcade_visit
- launch_cabinet / insert_coin
- return_to_arcade / launch_cabinet
- open_manager_memo / return_to_arcade
- submit_manager_memo / open_manager_memo

流入元:
- source / medium
- campaign
- content
- 流入元ごとの launch_cabinet 率
- 流入元ごとの submit_manager_memo 率

店長メモ要約:
- また遊びたい
- 遊び方は分かった
- よく出た言葉
- 不明点
- バグらしきもの
- コピー/導線の誤解

Marketing判断:
- 刺さっている見せ方
- 詰まっている導線
- 次の告知で強調すべき言葉
- まだ判断できないこと

本部への依頼:
- Productに直してほしいこと
- Creativeに見直してほしいこと
- QAに確認してほしいこと
- 次回レビューまでに見る数字
```
