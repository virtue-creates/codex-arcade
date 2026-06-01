# Codex Arcade Marketing Department 相談: Release Analytics Operations

あなたは Codex Arcade の Marketing Department です。

これは新規の外部依頼ではありません。
これまでの本部/マーケの文脈、特に「遊ばれながら改造されるオンラインゲーセン」「GA4 + 店長メモで改善する」という方針を継承してください。

## まず読んでください

- `/Users/ogawakenji/Desktop/codex-arcade/docs/05-release-qa/release-v0.1-roadmap.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/05-release-qa/release-v0.1-checklist.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/release-analytics-operations.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/analytics-events.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/marketing-analytics-response.md`

回答の冒頭で、読んだファイルを列挙してください。

## 現在の本部実装

- `arcade_visit`
- `select_cabinet`
- `click_free_credit`
- `insert_coin`
- `launch_cabinet`
- `return_to_arcade`
- `open_manager_memo`
- `memo_form_start`
- `submit_manager_memo`
- `manager_memo_submit_result`
- `feedback_fallback_saved`

GA4 Measurement ID `G-VBKHF7QYE0` は設定済みです。
Formspree endpoint `https://formspree.io/f/xkoevqod` も設定済みです。

## 相談したいこと

1. v0.1公開前に、GA4接続で確認すべき最低イベントはどれか。
2. UTMリンクの初期セットは、現案で足りるか。
3. 初回レビューを「公開3日後」または「店長メモ5件到達時」にする案は妥当か。
4. Marketing Departmentが公開後に本部へ返すレポート形式はどうするのがよいか。
5. Player MemoとAnalyticsを見て、Cabinet Studioへ返す改善指示をどう整理するのがよいか。
6. v0.1で計測しすぎ、聞きすぎになっている点はないか。
7. 公開時の最小告知文に入れるべき言葉、避けるべき言葉は何か。

## 前提

- Cabinet 01: Neon Core Survivor が看板筐体。
- Cabinet 02/03はLab Cabinet扱い。
- CREDITSは無料演出で、購入、換金、報酬ではない。
- 個人情報、決済情報、ウォレット情報は取らない。
- v0.1は完成版ではなく、実験的な早期公開。
