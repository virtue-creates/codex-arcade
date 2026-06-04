# BACKYARD Logbook Plan

BACKYARDで `ARCADE LOGBOOK` を見せるための設計メモ。

## Core Idea

BACKYARDの主役は、普通の開発ロードマップではなく、Codex Arcadeの店史。

```txt
ROADMAP
= 未来の予定表だけではない
= 店の歴史 / 改造史 / 搬入予定表
```

表のArcadeは、遊べるオンラインゲーセン。

BACKYARDは、一人店長とCodex agentsが、企画、制作、QA、マーケ、Analytics、改造会議をどう回してきたかを覗ける場所。

## Why Logbook First

`ARCADE LOGBOOK` は、以下を一度に見せられる。

- いつ始まったか。
- いつ公開したか。
- どのタイミングで何を話したか。
- 何を決めたか。
- 人間QAがどう効いたか。
- Codex agentsの部署分業がどう育ったか。
- 微妙な筐体も、失敗ではなく運営イベントに変えようとしていること。

これにより、直接「AI活用できます」と言わなくても、読んだ人には「一人でCodexを使って、ゲーセン運営みたいなことを回している」ことが伝わる。


## 2026-06-04 方針ロック

BACKYARDの店史/資料展示は、きれいな紹介文に加工しすぎない。

見せたいのは「AI活用できます」という説明ではなく、実際に一人店長がCodex agentsと企画、制作、QA、マーケ、Analytics、告知、改造を回している痕跡。

特に面白い資料の型は、以下。

- 日付がある。
- その時点の基本戦略がある。
- Decision Logがある。
- 使う言葉、避ける言葉がある。
- 実行後に何を見るかがある。
- 後から読むと「この判断があったから、こう動いたのか」が分かる。

X運用メモは、この型の模範として扱う。
今後、マーケ、Cabinet、QA、ロードマップ、改造会議も、この「日付つき作戦ログ」型に寄せる。

## Public Surface

BACKYARDの最初の大きな枠として置く。

表示名案:

```txt
ARCADE LOGBOOK
店史
```

補足コピー:

```txt
Codex Arcadeの店史。
```

## First Screen Structure

```txt
BACKYARD

ARCADE LOGBOOK
店史

2026-05-13  開店構想
2026-05-15  MVP Shellと最初の違和感
2026-05-25  v0.1公開
2026-05-29  オフラインカード施策
2026-06-01  BACKYARD店史化

[営業日誌を読む]

MANAGER MEMO
ANALYTICS
MOD MEETING
AGENT ROLES
REMOVAL / RETURN
ODD NOTES
```

## Tone

避ける:

- 企業LPっぽい「AI活用事例」
- 丁寧すぎるサービス説明
- 完成品の沿革紹介
- 実績アピールだけの年表

寄せる:

- 店の裏に貼ってある営業日誌
- スタッフ用の古い端末
- 改造会議の議事メモ
- 筐体カルテ
- 搬入/撤去/再搬入記録

## Content Source

原本:

- `docs/00-hq/arcade-store-history.md`

関連:

- `docs/00-hq/roadmap-history.md`
- `docs/00-hq/hq-dashboard.md`
- `docs/02-arcade-product/backyard-showcase-plan.md`
- `docs/04-marketing/offline-card-campaign.md`
- `docs/03-cabinets/README.md`

## Creative Handoff Later

Creativeに依頼する時は、以下を渡す。

- `docs/00-hq/arcade-store-history.md`
- `docs/02-arcade-product/backyard-logbook-plan.md`
- 現在の `backyard.html`

依頼内容:

```txt
BACKYARDを、営業LPではなく、店の裏にある営業日誌/作業場ログとして魅せてください。
主役はARCADE LOGBOOKです。
AI活用能力を直接説明するのではなく、一人店長とCodex agentsが店を育てている痕跡として見せたいです。
```
