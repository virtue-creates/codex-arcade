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

- GA4プロパティを作る。
- Webデータストリームを作る。
- Measurement ID `G-XXXXXXXXXX` を本部に渡す。

本部側でやる:

- `arcade.js` の `GA_MEASUREMENT_ID` に設定する。
- ローカルでページを開いて、Realtimeにイベントが来るか確認する。
- `arcade_visit`, `insert_coin`, `launch_cabinet`, `open_manager_memo` を確認する。
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
| X投稿1本目 | x | social | v0_1_launch | teaser_01 |
| 友人テスト | direct_friend | private | v0_1_test | friend_01 |
| GitHub README | github | readme | v0_1_launch | repo_link |
| 制作ログ | devlog | post | v0_1_launch | build_note_01 |

## 公開後レビュー

初回レビューは、公開から3日後または最初の店長メモ5件到達時に行う。

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

