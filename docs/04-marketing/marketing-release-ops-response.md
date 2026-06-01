# Marketing Department Response: v0.1 Release Analytics Operations

Date:

```txt
2026-05-22
```

## 読んだファイル

- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/analytics-events.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/05-release-qa/release-v0.1-roadmap.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/02-arcade-product/feedback-loop.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/marketing-analytics-response.md`

## Summary

Marketing Departmentとして、本部実装の更新内容を確認した。

`return_to_arcade` の追加と、`memo_form_start` を入力/選択開始時に記録する変更は、v0.1の目的に合っている。

特に `return_to_arcade` は、遊んだあとArcadeに戻って店長メモへ進めるかを見るために重要。

## 公開前GA4最低OKライン

公開前の最低OKライン:

- GA4 Measurement IDを設定できる。
- `page_view` または `arcade_visit` がGA4 Realtimeに出る。
- `insert_coin` がRealtimeに出る。
- `launch_cabinet` がRealtimeに出る。
- `return_to_arcade` がRealtimeに出る。
- `open_manager_memo` がRealtimeに出る。
- `memo_form_start` がRealtimeに出る。
- `submit_manager_memo` または `manager_memo_submit_result` がRealtimeに出る。
- GA4未接続時は、同じ流れがlocalStorageに残る。

Formspree endpointが未設定の間は、fallback確認でOK。

公開直前には、Formspree接続後に `manager_memo_submit_result` の送信成功まで確認したい。

## Realtimeで確認するイベント順

本部が1回テストプレイして、以下の順で確認する。

```txt
arcade_visit
select_cabinet
insert_coin
launch_cabinet
return_to_arcade
open_manager_memo
memo_form_start
submit_manager_memo
manager_memo_submit_result
```

補助確認:

- `click_free_credit`
- `toggle_bgm`
- `feedback_fallback_saved`

`toggle_bgm` は公開可否判断には使わず、雰囲気への反応を見る補助イベント。

## UTM初期セット

v0.1では、UTMは増やしすぎず初期導線を分ける用途に絞る。

| 用途 | URL Parameters |
|---|---|
| X / SNS告知 | `?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=launch_post` |
| X / SNSの再投稿・補足投稿 | `?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=followup_post` |
| 身近な初期テスター向け | `?utm_source=early_testers&utm_medium=direct_message&utm_campaign=v0_1_launch&utm_content=test_invite` |
| GitHub README / repo導線 | `?utm_source=github&utm_medium=referral&utm_campaign=v0_1_launch&utm_content=readme` |
| Devlog / Behind the Arcade導線 | `?utm_source=codex_arcade&utm_medium=owned&utm_campaign=v0_1_launch&utm_content=devlog` |

運用ルール:

- 小文字で統一する。
- 日本語やスペースを入れない。
- 個人名を入れない。
- `utm_campaign` はまず `v0_1_launch` に固定する。
- 違いは `utm_content` で見る。

## 公開後レビュー

推奨:

- 公開当日: GA4 / Formspree / localStorageの接続確認。
- 公開3日後: 初回改善レビュー。
- 公開7日後: v0.1.1方針レビュー。

3日後レビューの理由:

- 公開直後の不具合や導線詰まりを早く見つけられる。
- 店長メモが少数でも、初見の違和感は拾える。
- 1週間待つと、明らかな詰まりを放置する可能性がある。

## Marketing Departmentレポート形式

毎回同じ型で返す。

### v0.1 Analytics & Player Memo Report

期間:

- 例: `2026-05-XX - 2026-05-XX`

結論:

- 今回どこで止まっているか。
- 次に直すべき箇所。
- v0.1.1で優先すべき改善。

ファネル:

- `arcade_visit`
- `select_cabinet`
- `insert_coin`
- `launch_cabinet`
- `return_to_arcade`
- `open_manager_memo`
- `memo_form_start`
- `submit_manager_memo`

見る比率:

- `insert_coin / arcade_visit`
- `launch_cabinet / insert_coin`
- `return_to_arcade / launch_cabinet`
- `open_manager_memo / return_to_arcade`
- `submit_manager_memo / open_manager_memo`

流入元:

- `source / medium`
- `campaign`
- `content`
- 流入元ごとの `launch_cabinet` 率
- 流入元ごとの `submit_manager_memo` 率

店長メモ要約:

- また遊びたい: 多い/少ない
- 遊び方は分かった: 多い/少ない
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

## Marketing Department推奨まとめ

本部の今回実装は、v0.1のAnalytics方針に合っている。

公開前に最低限確認すべきなのは、GA4 Realtimeで `arcade_visit` から `manager_memo_submit_result` までの流れが見えること。

公開後は、3日後に初回レビュー、7日後にv0.1.1判断レビューを推奨する。

Analyticsは「どこで止まったか」、店長メモは「なぜ止まったか」。

この2つを同じレポートで扱うことで、Codex Arcadeを「遊ばれながら改造されるオンラインゲーセン」として回していく。

