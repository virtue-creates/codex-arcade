# Offline Card Campaign

Codex Arcade v0.1の初期テスター導線として、手渡し名刺/カードを使う施策。

Status:

```txt
Ordered / 発注完了
```

Owner:

- Marketing Department

Support:

- Creative Department
- Headquarters
- Publishing

Asset storage:

- `assets/offline-card/`

Handoff prompts:

- `docs/prompts/creative-offline-card-assets-handoff-prompt.md`
- `docs/prompts/marketing-offline-card-completion-share-prompt.md`

## Purpose

身近な初期テスターにURLをただ送るのではなく、リアルに小さなカードを渡して、Codex Arcadeへ入ってもらう。

狙う流れ:

1. Codex Arcadeにアクセスする。
2. Cabinet 01: Neon Core Survivor をプレイする。
3. 店長メモを残す。

この施策は、Codex Arcadeの「オンラインゲーセンやってます」「店長メモ置いてってください」というPRトーンと相性がよい。

## Production Status

2026-05-29時点で、カード制作と印刷発注は完了。

完了済み:

- デザイン作成
- Figma調整
- PDF書き出し
- ラクスル入稿
- スピードチェック通過
- 注文作成

確認済み:

- 文字切れなし
- 余白確認済み
- QR配置確認済み
- 表面/裏面ともに確認用PDFでチェック済み

Asset handoff status:

```txt
Waiting for Creative Department assets
```

Creative Departmentが持っている最終デザイン資産は、本部が受領して `assets/offline-card/` に保存する。

CreativeからMarketingへ直接渡すのではなく、以下の順で扱う。

```txt
Creative Department
-> Headquarters
-> Marketing Department
```

本部は、個人情報、注文番号、請求情報が混ざっていないことを確認してから保存/共有する。

## Print Specification

| Item | Spec |
|---|---|
| 印刷サービス | ラクスル |
| 商品 | 通常サイズ名刺 |
| サイズ | 55mm x 91mm |
| 用紙 | マット紙 220kg |
| 印刷 | 両面カラー |
| 加工 | 角丸なし、PP加工なし |
| 部数 | 100部 |
| 入稿形式 | PDF |

## Final Card Structure

表面:

- `CODEX ARCADE` の世界観を伝える入場券風デザイン。
- v0.1のオンラインゲーセンとしての雰囲気を優先。

裏面:

- スマホでQRを読み取る。
- PCへ送って遊ぶ導線を案内する。
- Cabinet 01を遊び、店長メモへ進む流れを想定。

カード内の明記:

```txt
CREDITSは無料の演出です。購入・換金・報酬はありません。
```

Codex Arcadeは、店長（human）とCodex agentsによる実験的なオンラインゲーセンとして表現した。

## Campaign URL

```txt
https://virtue-creates.github.io/codex-arcade/?utm_source=offline_card&utm_medium=physical&utm_campaign=v0_1_launch&utm_content=namecard
```

QRコードはこのURLを使う。

UTMの意味:

- `utm_source=offline_card`: 手渡しカード経由
- `utm_medium=physical`: 物理カード
- `utm_campaign=v0_1_launch`: v0.1公開導線
- `utm_content=namecard`: 名刺/カード版

## Card Direction

普通のビジネス名刺ではなく、ゲーセンの招待券、筐体カード、怪しい入場券のような雰囲気にする。

ただし、情報は分かりやすくする。

大事にするバランス:

- ノリはふざける。
- 運用はちゃんとする。
- QRコードと行動導線は明確にする。
- プレイヤーが「何これ？」と思ってアクセスしたくなる余白を残す。

## Front Side

表面は世界観を優先する。

入れたい要素:

- Codex Arcade
- v0.1
- オンラインゲーセンやってます
- 1台、点いてます
- Cabinet 01: Neon Core Survivor 稼働中
- 招待券/入場券/筐体カードっぽい雰囲気

表面コピー候補:

```txt
Codex Arcade v0.1
オンラインゲーセン、開けました。
```

```txt
1台、点いてます。
Codex Arcade v0.1
```

```txt
Cabinet 01 稼働中
Neon Core Survivor
```

## Back Side

裏面は行動導線を明確にする。

入れたい要素:

- QRコード
- Codex Arcade URL
- 3ステップ導線
- 店長メモへの誘導
- CREDITSの注意

裏面コピー候補:

```txt
QRから入場
1. CREDITを受け取る
2. Cabinet 01をプレイ
3. 店長メモを置いていく
```

```txt
遊んだら、店長にメモを残してください。
メモは次の改造の参考にします。
```

注意表記:

```txt
CREDITSは無料の演出です。購入・換金・報酬はありません。
```

## Design Requirements

Creative Departmentに依頼する要件:

- 印刷できるサイズで作る。
- 表裏デザインを想定する。
- QRコード配置を想定する。
- 表面は世界観、裏面は行動導線にする。
- 丁寧な営業ではなく、良い意味でのふざけ、ノリ、ゲーセン感を出す。
- 「何これ？」と思える余白を残す。
- 情報は読みやすくする。
- CREDITSを購入、換金、報酬に見せない。

想定サイズ:

- 日本の一般的な名刺: 91mm x 55mm
- または少しチケット寄りの横長カード

Creative Departmentは、サイズ候補も含めて提案する。

## Measurement

このカード経由のアクセスは、GA4で以下を見る。

- `utm_source=offline_card`
- `utm_medium=physical`
- `utm_content=namecard`
- `arcade_visit`
- `insert_coin`
- `launch_cabinet`
- `open_manager_memo`
- `submit_manager_memo`

見るべき問い:

- 手渡しカードからアクセスされたか。
- アクセス後、Cabinet 01まで進んだか。
- 店長メモまで進んだか。
- 身近な初期テスター導線として機能したか。

## Guardrails

- 個人情報をカードに載せない。
- 決済、暗号資産、ウォレットを連想させない。
- CREDITSを金銭価値に見せない。
- 「必ず改造します」と約束しない。
- 普通の営業名刺に寄せすぎない。
- ただし、QRと行動導線は迷わせない。

## Relationship To PR Tone

この施策は `docs/01-strategy/pr-tone-policy.md` に従う。

特に大事な方針:

```txt
ノリはふざける。
運用はちゃんとする。
```

カードはふざけていてよい。

ただし、URL、QR、CREDITS表記、店長メモ導線、計測はちゃんとする。

## Relationship To BACKYARD

Marketing Departmentの方針として、名刺/カードにはビジネス導線やAIエージェント活用説明を盛り込みすぎない。

名刺/カードの主導線は、あくまで以下に絞る。

1. Codex Arcadeへ来てもらう。
2. Cabinet 01を遊ぶ。
3. 店長メモを残す。

AIエージェント活用、改造会議、Analytics、運営の裏側は、Arcade本体内の目立たない `BACKYARD` 導線で扱う。

`BACKYARD` は説明文を付けず、小さく置く。

詳細:

- `docs/02-arcade-product/backyard-policy.md`
