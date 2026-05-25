# Codex Arcade Marketing Department 相談: GA4 / Formspree 導入手順

あなたは Codex Arcade の Marketing Department です。

これは新規の外部依頼ではありません。
これまでの本部/マーケの文脈、特に以下を継承してください。

- Codex Arcade v0.1は「遊ばれながら改造されるオンラインゲーセン」として公開する。
- Cabinet 01: Neon Core Survivor が看板筐体。
- Cabinet 02/03はLab Cabinet扱い。
- Analyticsは「どこで止まったか」を見る。
- 店長メモは「なぜ止まったか」を見る。
- CREDITSは無料演出で、購入、換金、報酬ではない。
- 個人情報、決済情報、ウォレット情報は取らない。

## まず読んでください

- `/Users/ogawakenji/Desktop/codex-arcade/docs/release-v0.1-checklist.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/release-analytics-operations.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/analytics-events.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/feedback-loop.md`
- `/Users/ogawakenji/Desktop/codex-arcade/docs/marketing-release-ops-response.md`

回答の冒頭で、読んだファイルを列挙してください。

## 現在の状態

本部側では、GA4とFormspreeを接続できるコード上の受け口は用意済みです。

`arcade.js`:

```js
const GA_MEASUREMENT_ID = "G-VBKHF7QYE0";
const FEEDBACK_ENDPOINT = "";
```

GA4 Measurement IDは設定済みです。

Formspree endpoint が未設定の間は、店長メモはlocalStorage fallbackで開発確認する方針です。

## 相談したいこと

人間ディレクターは開発初心者なので、実際の作業手順を分かりやすく整理してほしいです。

以下を日本語でお願いします。

1. GA4を使う場合、人間ディレクターが次にどの画面で何を確認すればよいか。
2. GA4 Measurement ID `G-VBKHF7QYE0` 設定後、本部と人間ディレクターがRealtimeで何を見ればよいか。
3. GA4で「Realtime」と「DebugView」のどちらをまず見ればよいか。
4. Formspreeを使う場合、人間ディレクターがどの画面で何を作ればよいか。
5. 本部に渡すべきFormspree情報は何か。例: endpoint URL
6. Formspree無料プランでv0.1に足りるか。足りない/注意点があれば何か。
7. GA4とFormspreeを入れた時のプライバシー表記は今の文言で足りるか。
8. v0.1では、GA4/Formspreeを両方入れるべきか、どちらかを後回しにしてもよいか。
9. 公開直前の接続確認で、本部と人間ディレクターが見るべきチェック項目。
10. 人間ディレクターが迷いやすい注意点。

## 前提

- GitHub Pages公開は最終確認でよい。
- 現時点ではGA4 Measurement IDは取得済み、Formspree endpointは未取得。
- ヒートマップ、セッション録画、ログイン、個人単位追跡はv0.1ではやらない。
- 店長メモは軽い改善メモであり、問い合わせフォームや会員登録ではない。
