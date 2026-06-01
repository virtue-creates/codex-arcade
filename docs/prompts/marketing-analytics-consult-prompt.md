# Codex Arcade Marketing Department 相談: Analytics / Release v0.1

以前と同じく、本部docsを読んでから回答してください。

今回は特に以下の更新ファイルを読んでください。

- `/Users/ogawakenji/Desktop/codex-arcade/docs/05-release-qa/release-v0.1-roadmap.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/02-arcade-product/feedback-loop.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/marketing-release-plan.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/04-marketing/analytics-events.md`

まず回答の冒頭で、読んだファイルを列挙してください。

## これまでの文脈

これは新規の外部依頼ではありません。

これまで本部・マーケ・クリエイティブで話してきた、以下の文脈を継承してください。

- Codex Arcadeは、単なるゲーム置き場ではなく、Codex / AIエージェントが運営しているオンラインArcadeとして育てています。
- 表面はオンラインゲーセンとして楽しく見せる。
- 裏側にCodex / AI agentsが動いている感じをにじませる。
- Phase / Sprint / Current Boardのような開発進捗は公開トップに出さない。
- レトロゲーセン再現ではなく、「Codexが経営する少し未来の無人オンラインゲーセン」を目指す。
- CREDITSは金銭価値ではなく、Arcade体験の開始儀式として扱う。
- 「購入」「チャージ」「報酬」「換金」を連想させる表現は避ける。
- マーケ/クリエイティブ/本部が同じようなことを同調的に言うだけでは価値が弱い。
- Marketing Departmentは、専門部署として、誰がどこから来て、どの導線で遊び始め、どの言葉や見せ方が刺さったかを見る。

## 現在の本部方針

Codex Arcade v0.1は、完成版公開ではなく、

「遊ばれながら改造されるオンラインゲーセン」

として早めに出す方向です。

現時点では、

- Cabinet 01: Neon Core Survivor を看板筐体として公開候補にする。
- Cabinet 02 / 03 は Lab Cabinet として後回し。
- プレイヤーがサイト内で「店長にメモを残す」仕組みを作る。
- Player Memo と Director QA は分けて扱う。
- 公開後は、店長メモとアクセス解析を見て改善会議を回す。

という方針です。

## 今回相談したいこと

今回は、初期ターゲットやSNSコピーの深掘りよりも、まずAnalytics / 計測設計を優先したいです。

本部側では、GA4を候補として考えています。

ただし、GA4でよいのか、別のアクセス解析ツールの方がよいのかも含めて、Marketing Departmentの視点で相談したいです。

人間ディレクターが見たいイメージは、

- 誰が、というより、どこから来た人がいるのか
- いつ見に来たのか
- トップだけ見たのか
- CREDITを押したのか
- INSERT COINしたのか
- Cabinet 01を起動したのか
- 店長メモを開いた/送ったのか

です。

## 現時点で本部が仮実装したイベント案

- `arcade_visit`
- `click_free_credit`
- `toggle_bgm`
- `insert_coin`
- `launch_cabinet`
- `open_manager_memo`
- `submit_manager_memo`

GA4 Measurement ID が未設定の間は、開発用にlocalStorageへ簡易ログを残す方針です。

Measurement ID取得後、本部が `arcade.js` に設定して接続します。

## Marketing Departmentに考えてほしいこと

以下について、日本語で相談・提案してください。

1. v0.1でAnalyticsを入れる目的は何か。
2. GA4でよいか。GA4以外におすすめのツールはあるか。
3. GA4を使う場合、v0.1で見るべき画面/レポートは何か。
4. 現在のイベント案で足りるか。不足があるか。
5. 最優先で見るべきイベントはどれか。
6. 公開後1週間で見るべき数字は何か。
7. 「どこから来ているか」を見るには、GA4または代替ツールで何を確認すべきか。
8. 店長メモとAnalyticsをどう組み合わせて改善会議に使うべきか。
9. v0.1時点でやりすぎない方がよい計測は何か。
10. プライバシーや表記上の注意点は何か。
11. 本部に実装依頼したいイベントやパラメータは何か。
12. 本部/人間ディレクターに確認したいこと。

## 注意

- 実決済、暗号資産、ウォレット連携は v0.1 では扱いません。
- CREDITSは無料演出です。
- 個人情報は取らない前提です。
- 店長メモはプレイヤーが改善サイクルに参加するための軽いフィードバックです。
- 目的は「数字を見ること」自体ではなく、Codex Arcadeをどう改善するか判断できる状態にすることです。
