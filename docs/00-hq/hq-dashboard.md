# HQ Dashboard

Codex Arcade本部が、いま何を握っているかを1枚で見るためのダッシュボード。

このファイルは、人間ディレクターと本部が最初に見る入口として扱う。

## Current Position

```txt
Public status: v0.1公開済み
Current operating mode: 公開しながら改造
Main version feeling: v0.1 -> v0.1.1 quality cycle
Last dashboard update: 2026-06-01
```

Codex Arcadeは、完成版として固定するのではなく、遊ばれながら改造されるオンラインゲーセンとして運用中。

## Current Priority

| Priority | Area | Owner | Status | Next |
|---|---|---|---|---|
| 1 | Parent Arcade | Headquarters | In play | トップ崩れ、BGM、Cabinet 01導線を改善 |
| 2 | Cabinet 01 | Cabinet 01 Studio + HQ | In play | 看板筐体としてv0.1.1を反映/公開確認 |
| 3 | Marketing | Marketing Department | In play | 名刺施策は発注完了。次は配布/反応確認 |
| 4 | BACKYARD | Headquarters + Marketing + Creative | In play | 裏側をどう魅せるか設計 |
| 5 | Cabinet 02 | Cabinet 02 Studio | Parked / Lab | つまらなさを運営イベント化する余地あり |
| 6 | Cabinet 03 | Cabinet 03 Studio | Parked / Lab | 成功体験とリプレイ性を再設計 |

## Department Routing

本部は、各部署の確認依頼をそのまま人間へ流さない。

まず以下に分類する。

| Classification | Meaning | Action |
|---|---|---|
| AI間確認 | ファイル、仕様、manifest、QA、実装確認 | 本部または該当部署で処理 |
| 人間ディレクター判断 | 面白さ、世界観、公開GO、好み、違和感 | 人間に相談 |
| 共有のみ | 報告、ログ、参考メモ | docsへ記録 |

Reference:

- `docs/01-strategy/department-operating-model.md`
- `docs/03-cabinets/00-shared/cabinet-intake.md`
- `docs/03-cabinets/00-shared/game-design-intent-report.md`

## Roadmap References

| Need | File |
|---|---|
| docs入口 | `docs/README.md` |
| 全体ロードマップ | `docs/00-hq/roadmap.md` |
| 重要な方針変更の履歴 | `docs/00-hq/roadmap-history.md` |
| v0.1公開ロードマップ | `docs/05-release-qa/release-v0.1-roadmap.md` |
| v0.1同時並行運用 | `docs/05-release-qa/v0.1-parallel-operations-plan.md` |
| 公開チェック | `docs/05-release-qa/release-v0.1-checklist.md` |

## Key Operating Docs

| Area | File |
|---|---|
| 会社モデル | `docs/01-strategy/company-model.md` |
| 組織図 | `docs/01-strategy/organization-map.md` |
| 部署運用 | `docs/01-strategy/department-operating-model.md` |
| 人間とAIの共創 | `docs/01-strategy/human-agent-collaboration.md` |
| PR/運営トーン | `docs/01-strategy/pr-tone-policy.md` |
| BACKYARD方針 | `docs/02-arcade-product/backyard-policy.md` |
| BACKYARDの見せ方 | `docs/02-arcade-product/backyard-showcase-plan.md` |
| BACKYARD店史計画 | `docs/02-arcade-product/backyard-logbook-plan.md` |
| Codex Arcade店史 | `docs/00-hq/arcade-store-history.md` |

## Cabinet Status

| Cabinet | Game | Public role | Current read | Next action |
|---|---|---|---|---|
| Cabinet 01 | Neon Core Survivor | 看板筐体 | 普通に面白い。v0.1の主役 | v0.1.1反映後、公開URLで確認 |
| Cabinet 02 | Metro Mender | Lab / 改造候補 | 動くがゲーム性が薄い | 完成度上げより、運営イベント化も検討 |
| Cabinet 03 | Specimen Night Shift | Lab / 改造候補 | 動きは面白いが1回で終わる | 成功演出と再挑戦理由を再設計 |

Reference:

- `docs/03-cabinets/cabinet-01/cabinet-01-v0.1.1-studio-report.md`
- `docs/03-cabinets/cabinet-02/cabinet-02-hq-direction.md`
- `docs/03-cabinets/cabinet-03/cabinet-03-hq-direction.md`

## Marketing / Feedback / Analytics

| Area | Current setup |
|---|---|
| Marketing Branch | Marketing配下にCreative/Analyticsを置く |
| GA4 | Measurement ID設定済み |
| Formspree | 店長メモendpoint設定済み |
| UTM | SNS、early testers、GitHub、offline cardなどを区別 |
| Store memo | 店長メモとしてプレイヤー感想を収集 |
| Offline card | ラクスルで100部発注完了 |
| Offline card assets | Creativeから本部への受領待ち |
| BACKYARD | ビジネス説明を表に出しすぎない裏口 |
| ARCADE LOGBOOK | 店史としてAIと人間の制作/運営過程を見せる |
| Audio | Suno曲 `Arcade Afterglow` をトップBGMとして追加 |

Reference:

- `docs/04-marketing/analytics-events.md`
- `docs/04-marketing/release-analytics-operations.md`
- `docs/02-arcade-product/feedback-loop.md`
- `docs/04-marketing/marketing-release-plan.md`
- `docs/04-marketing/offline-card-campaign.md`
- `assets/offline-card/README.md`
- `docs/02-arcade-product/audio-assets.md`

## Public Site

```txt
https://virtue-creates.github.io/codex-arcade/
```

Current public meaning:

- 完成品発表ではない。
- v0.1公開中。
- Cabinet 01を遊んでもらい、店長メモを残してもらう。
- 反応を見て、店を改造する。

## Current Risks

- トップページの表示崩れが残っている可能性。
- BGM/音の完成度がまだ弱い。
- Cabinet 02/03は現時点でゲームとして弱い。
- docsはカテゴリ整理済み。今後も新規資料の置き場所を守らないと再び散らかる。
- 部署が役割をまたぐと、会社ごっこの良さが薄れる。

## Next HQ Actions

1. GitHub Desktopで未pushコミットをpushする。
2. 公開URLでCabinet 01 v0.1.1とBACKYARDを確認する。
3. 名刺到着後、offline_card UTMでアクセスが発生するか確認する。
4. BACKYARDの見せ方をCreative/Marketingに相談する。
5. Parent Arcadeの表示崩れとBGMをv0.1.1候補として整理する。
6. Cabinet 02/03は無理に磨かず、Lab/改造イベント扱いも含めて判断する。
