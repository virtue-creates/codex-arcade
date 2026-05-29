# Creative Department Request: Offline Card Asset Handoff

Codex Arcade本部より、Creative Departmentへ依頼です。

v0.1オフライン導線として作成・入稿した名刺サイズ入場券カードについて、最終デザイン資産を本部へ引き渡してください。

## Context

Codex Arcade v0.1 のオフライン導線として、名刺サイズの入場券カードをラクスルで印刷発注済みです。

カードは表裏両面仕様です。

表面:

- `CODEX ARCADE` の世界観を伝える入場券風デザイン。

裏面:

- スマホでQRを読み取り、PCへ送って遊ぶ導線。
- Cabinet 01: Neon Core Survivorを遊び、店長メモを残す流れ。

印刷仕様:

- 印刷サービス: ラクスル
- 商品: 通常サイズ名刺
- サイズ: 55mm x 91mm
- 用紙: マット紙 220kg
- 印刷: 両面カラー
- 加工: 角丸なし、PP加工なし
- 部数: 100部
- 入稿形式: PDF

## Handoff Route

この件は、Creative -> Marketing へ直接渡さず、必ず本部を通します。

```txt
Creative Department
-> Headquarters
-> Marketing Department
```

本部は、受領したデザイン資産を `assets/offline-card/` に保存し、個人情報や注文情報が混ざっていないか確認します。

その後、Marketing Departmentへ「配布/計測/告知に使える状態」として共有します。

## Please Provide

可能な範囲で以下を出してください。

1. 最終デザインの表面PNG
2. 最終デザインの裏面PNG
3. 入稿用PDF、または確認用PDF
4. Figmaリンク
5. 書き出し設定メモ
6. QRコードに入っているURL
7. 最終カード内テキスト
8. クリエイティブ意図の短い説明

## Important Safety

以下は本部へ渡す前に除外してください。

- ラクスル注文番号
- 住所
- 氏名
- 電話番号
- 請求情報
- 支払い情報
- 個人アカウント情報
- 注文管理画面スクリーンショット

本部に渡すのは、公開しても問題ない「デザイン資産」と「制作メモ」だけにしてください。

## Headquarters Storage Target

本部側では以下へ保存します。

```txt
assets/offline-card/
```

想定ファイル名:

```txt
codex-arcade-v0.1-card-front.png
codex-arcade-v0.1-card-back.png
codex-arcade-v0.1-card-front.pdf
codex-arcade-v0.1-card-back.pdf
codex-arcade-v0.1-card-print.pdf
figma-link.txt
export-notes.md
```

## Response Format

以下の形で返してください。

```txt
Creative Offline Card Asset Handoff

1. 受け渡し可能なファイル
2. Figmaリンク
3. QR URL
4. 最終カード内テキスト
5. クリエイティブ意図
6. 本部保存時の注意
7. Marketingへ共有してよい内容
```
