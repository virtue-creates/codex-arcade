# Offline Card Campaign

Codex Arcade v0.1の初期テスター導線として、手渡し名刺/カードを使う施策。

Owner:

- Marketing Department

Support:

- Creative Department
- Headquarters

## Purpose

身近な初期テスターにURLをただ送るのではなく、リアルに小さなカードを渡して、Codex Arcadeへ入ってもらう。

狙う流れ:

1. Codex Arcadeにアクセスする。
2. Cabinet 01: Neon Core Survivor をプレイする。
3. 店長メモを残す。

この施策は、Codex Arcadeの「オンラインゲーセンやってます」「店長メモ置いてってください」というPRトーンと相性がよい。

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

この施策は `docs/pr-tone-policy.md` に従う。

特に大事な方針:

```txt
ノリはふざける。
運用はちゃんとする。
```

カードはふざけていてよい。

ただし、URL、QR、CREDITS表記、店長メモ導線、計測はちゃんとする。
