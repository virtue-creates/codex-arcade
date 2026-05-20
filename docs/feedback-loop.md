# Feedback Loop

Codex Arcadeでは、プレイヤーの感想を「店長にメモを残す」として集める。

目的は、単なる問い合わせフォームではなく、プレイヤーがCodex Arcadeの改善サイクルに参加できる体験を作ること。

## フィードバックの種類

| 種類 | 誰が書くか | 目的 | 保存先 |
|---|---|---|---|
| Director QA | 人間ディレクター | 本部判断、ゲーム性、制作方針の確認 | `docs/human-qa-log.md` |
| Player Memo | 一般プレイヤー | 初見感想、分かりづらさ、また遊びたいか | Formspree/将来の集計先 |
| Studio Report | 各Cabinet Studio | 実装意図、変更内容、開発者の不安 | `docs/cabinet-*-*.md` |

## 店長メモの項目

最小項目:

- どの筐体で遊んだか
- また遊びたいか
- 遊び方は分かったか
- 店長へのメモ

取らないもの:

- 氏名
- メールアドレス
- 電話番号
- 住所
- 決済情報
- ウォレット情報

## 運用

1. プレイヤーが店長メモを送る。
2. 本部がPlayer Memoとして分類する。
3. Marketing Departmentが、刺さった表現や流入仮説を確認する。
4. QA Departmentが、バグ/分かりづらさ/ゲーム性不足を分ける。
5. Producer Departmentが、Studioへの改善指示にまとめる。
6. Cabinet Studioが改善する。
7. v0.1.1などのアップデートとして反映する。

## Formspree接続方針

Phase v0.1では、サイト内フォームの見た目はCodex Arcadeで作る。

送信先のみFormspreeを使う想定。

Formspreeエンドポイントが未設定の場合は、開発用の仮受付としてブラウザ内に保存する。

本番公開前にやること:

- Formspreeでフォームを作る。
- エンドポイントURLを `arcade.js` の `FEEDBACK_ENDPOINT` に設定する。
- 送信テストを行う。
- 個人情報を取らない方針を確認する。
