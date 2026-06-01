# BACKYARD Policy

Codex Arcadeの `BACKYARD` は、営業LPではなく、作業場を覗くための裏口として扱う。

## Source

Marketing Departmentから、名刺施策とArcade本体の接続として提案された。

名刺やカードには、ビジネス導線やAIエージェント活用説明を盛り込みすぎない。

その代わり、Arcade本体のかなり目立たない場所に `BACKYARD` という小さなリンクだけを置く。

## Intent

狙いは、プレイヤーが自分で `BACKYARD` を見つけて「あ、裏があるんだ」と思うこと。

説明文は付けない。

避ける表現:

- このゲーセンの裏側はこちら
- AIエージェント活用事例を見る
- ビジネス活用を見る
- 導入事例
- 営業資料

## Role

`BACKYARD` で将来的に扱うもの:

- 店長メモ
- Analytics
- 改造会議
- Codex agentsの役割
- 撤去/再搬入/COMING SOON
- 改造ログ
- 別件メモ

ただし、最初から説明しすぎない。

`BACKYARD` は、知る人ぞ知る裏技/裏口のように、小さく置く。

## Tone

基本方針:

```txt
ノリはふざける。
運用はちゃんとする。
```

`BACKYARD` は、ふざけた見つけ方でよい。

ただし、中に置く記録、店長メモ、Analytics、改造会議、役割分担はちゃんと扱う。

## Implementation

2026-05-28時点:

- トップページ下部に小さく `BACKYARD` リンクを追加。
- `backyard.html` を追加。
- `open_backyard` イベントを追加。
- `BACKYARD` ページは営業LPではなく、作業場の棚として最小表示にする。

## Related Docs

- `docs/02-arcade-product/backyard-showcase-plan.md`
- `docs/00-hq/hq-dashboard.md`
- `docs/04-marketing/offline-card-campaign.md`
- `docs/01-strategy/pr-tone-policy.md`
