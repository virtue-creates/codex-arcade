# BACKYARD Showcase Plan

`BACKYARD` を、営業LPではなく「裏側を覗いたら変な会社がちゃんと動いていた」場所として魅せるための計画。

## Core Idea

BACKYARDのネタは、すでにある。

- ロードマップ
- 進捗
- 各部署
- 店長メモ
- Analytics
- 改造会議
- Cabinetの撤去/再搬入/COMING SOON
- 失敗作や微妙な筐体の扱い
- 人間ディレクターとCodex agentsのやり取り

大事なのは、これを説明資料として並べることではなく、ゲームセンターの裏に置いてある「作業票」「棚」「古い端末」「店長メモ箱」のように見せること。


## Locked Principle: Raw Records First

2026-06-04時点の重要方針。

BACKYARDで面白いのは、きれいに加工された紹介文ではなく、人間ディレクターとCodex agentsが実際に考え、迷い、決め、直してきた記録そのもの。

そのため、BACKYARDの資料展示では以下を優先する。

- 要約して薄めるより、日付つきの作戦メモやDecision Logを見せる。
- 最初に何を考えたか、いつ何を変更したか、なぜ運用が変わったかを残す。
- X運用メモのように、方針、Decision Log、使う言葉、避ける言葉、UTM、GA4確認、次の見直しまでつながっている資料を模範にする。
- 読んだ人が「こいつ、ほんとにAIエージェントと店を回してるじゃん」と感じることを狙う。
- ただの資料リンク集ではなく、店の裏に残っている生の作戦ファイルとして見せる。

合言葉:

```txt
加工して薄めるな。日付と判断を残せ。
```

## What To Show

| Content | Public surface | Why it works |
|---|---|---|
| 店史 | ARCADE LOGBOOK / 店史と改造予定 | AIと人間がどう店を作り、公開し、改造してきたかが見える |
| 店長メモ | MEMO BOX / 受付中 | プレイヤーが店の改造に関わっている感じが出る |
| Analytics | 稼働ログ / 人流センサー | 数字を見るだけでなく、店を観察している感が出る |
| 改造会議 | MOD MEETING | AI部署と人間が相談している会社感が出る |
| Cabinet状況 | 搬入 / 調整中 / 奥に下げた | ゲーセン運営イベントになる |
| 役割分担 | STAFF BOARD | AIエージェント会社の構造が見える |
| ロードマップ | ROUTE MAP / 作業予定表 | 進んでいる感じを出せる |
| 失敗ログ | ODD NOTES / 要改造 | 微妙な筐体もコンテンツ化できる |
| リリース履歴 | 改造ログ | 「遊ばれながら改造」の証拠になる |

## What Not To Show Too Loudly

- AIエージェント活用事例
- 営業資料
- 導入メリット
- お問い合わせ
- 完成版サービス説明
- 収益化やビジネス展開の大きすぎる話

これらを強く出すと、Arcadeの裏口ではなく営業LPに見える。

## First BACKYARD Version

今の最小版は、店史を主役にして、その下に展示棚を置く。

表示:

```txt
BACKYARD

ARCADE LOGBOOK
店史 / 改造史 / 搬入予定

MANAGER MEMO       受付中
ANALYTICS          稼働中
MOD MEETING        準備中
AGENT ROLES        整理中
REMOVAL / RETURN   未発生
ODD NOTES          空き棚
```

現行の展示棚:

```txt
STAFF FILES

MARKETING FILE       X / Facebook / 名刺
CABINET CHART        筐体カルテ
HUMAN QA LOG         人間QAログ
AGENT ROLES          部署表
ANALYTICS TERMINAL   計測端末
BACKYARD PLAN        裏口設計
```

BACKYARDでは、要約だけで薄めない。
面白い資料は、日付つきのDecision Logや作戦メモとして、その温度を残して見せる。
原本docsへもリンクする。

狙い:

- 何かありそう。
- でも説明しすぎない。
- 気づいた人だけが「裏がある」と分かる。

## Second Version Ideas

次に育てるなら、以下を1つずつ増やす。

### 1. Staff Board

### 0. Arcade Logbook

通常のロードマップではなく、店の歴史として見せる。

例:

```txt
2026-05-13
開店構想
Codex Arcade構想、INSERT COIN、無料クレジット、Cabinet制が始まる。

2026-05-25
v0.1開店
GitHub Pages、GA4、店長メモがつながる。
```

原本は `docs/00-hq/arcade-store-history.md`。
見せ方の計画は `docs/02-arcade-product/backyard-logbook-plan.md`。

部署一覧を、会社説明ではなく店のバックヤード掲示板として出す。

例:

```txt
HQ          OPEN
Marketing  OUT FOR FLYERS
Creative   LIGHTING CHECK
Cabinet 01 ON DUTY
Cabinet 02 IN THE BACK
Cabinet 03 UNDER GLASS
```

### 2. Memo Box

店長メモの件数や最近の傾向を、個人情報を出さずに表示する。

例:

```txt
MEMOS RECEIVED: 5
よく出た言葉: BGM / 面白い / よく分からない
```

### 3. Repair Log

改造履歴を、通常のchangelogではなく作業票として見せる。

例:

```txt
2026-05-26
Cabinet 01: 180秒 -> 120秒
Backyard door: installed
```

### 4. Cabinet Quarantine Shelf

Cabinet 02/03のような微妙な筐体を、失敗ではなく「奥で調整中」にする。

例:

```txt
Cabinet 02
status: IN THE BACK
reason: too much clicking, not enough game
next: rewire route choices
```

日本語の外向き表現では、直接「クソゲー」と言わない。

内部では「つまらない」「作業っぽい」と扱ってよい。

### 5. Secret Agent Notes

AI部署のメモを、全部は見せず、断片だけ出す。

例:

```txt
Marketing: 名刺は営業資料にしない
Creative: 光はいい。音がまだ弱い
HQ: 役割をまたぐな
```

## Ownership

| Part | Owner | Notes |
|---|---|---|
| BACKYARD全体 | Headquarters | 情報設計と実装の正本を握る |
| 見せ方/ビジュアル | Creative Department | 怪しい作業場感、棚、端末、余白 |
| 何を出すか | Marketing Department | PRとして面白いか、説明しすぎないか |
| 数字/ログ | Analytics Department | 個人情報を出さずに傾向だけ扱う |
| 安全表記 | Policy & Safety | 個人情報、決済、誤認表現を防ぐ |

## Human Director Decisions

人間ディレクターに判断してもらうこと:

- BACKYARDをどのくらい見つけにくくするか。
- ふざけ具合をどこまで上げるか。
- Cabinet 02/03を「奥へ下げた」演出にするか。
- 店長メモの集計を表に出すか。
- AI会社感をどこまで匂わせるか。

AI間で進めてよいこと:

- 既存docsの整理
- 表示項目案
- モック文言
- Analytics event案
- CSS/HTMLの最小実装

## Guiding Principle

```txt
BACKYARDは説明ページではない。
店の裏にある、見つけた人だけが読める作業場。
```

資料そのものをネタにする。

ただし、運用はちゃんとする。
