# Marketing Department Share: Offline Card Ordered / Asset Handoff

Codex Arcade本部より、Marketing Departmentへ共有です。

v0.1オフライン導線として進めていた名刺サイズ入場券カードは、ラクスルで印刷発注まで完了しました。

## Current Status

```txt
Status: Ordered / 発注完了
Date: 2026-05-29
```

印刷仕様:

- 印刷サービス: ラクスル
- 商品: 通常サイズ名刺
- サイズ: 55mm x 91mm
- 用紙: マット紙 220kg
- 印刷: 両面カラー
- 加工: 角丸なし、PP加工なし
- 部数: 100部
- 入稿形式: PDF
- 表面/裏面ともにスピードチェック通過

カード導線:

```txt
QRをスマホで読む
-> PCへ送る
-> Codex Arcadeへ入場
-> Cabinet 01: Neon Core Survivorを遊ぶ
-> 店長メモを残す
```

カード内の注意表記:

```txt
CREDITSは無料の演出です。購入・換金・報酬はありません。
```

## Department Route

Creative Departmentが持っている最終デザイン資産は、直接Marketingへ渡さず、一度本部で受領します。

```txt
Creative Department
-> Headquarters
-> Marketing Department
```

理由:

- 本部が公開してよいデザイン資産だけを保存するため。
- 注文番号、住所、請求情報などが混ざらないようにするため。
- `assets/offline-card/` に正本を置くため。
- Marketingへは、配布/計測に必要な情報として共有するため。

## Marketingに確認したいこと

1. カード配布後、最初に見るべきGA4指標はこれでよいか。
   - `utm_source=offline_card`
   - `utm_medium=physical`
   - `utm_campaign=v0_1_launch`
   - `utm_content=namecard`
   - `arcade_visit`
   - `insert_coin`
   - `launch_cabinet`
   - `open_manager_memo`
   - `submit_manager_memo`
2. 配布対象は、まず身近な初期テスターでよいか。
3. 配布時の一言トークは必要か。それともカードの「何これ？」感を優先するか。
4. 名刺到着後、初回レビューは何枚配った時点、または何日後にするか。

## Relevant Docs

- `docs/04-marketing/offline-card-campaign.md`
- `docs/00-hq/hq-dashboard.md`
- `docs/00-hq/roadmap-history.md`
- `assets/offline-card/README.md`
