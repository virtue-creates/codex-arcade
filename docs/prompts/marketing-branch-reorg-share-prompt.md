# Marketing Department Share: Branch Structure Update

Codex Arcade本部より、Marketing Departmentへ共有です。

組織運用を見直し、Creative DepartmentとAnalytics Departmentを、当面はMarketing Department配下の専門部門として扱う方針に更新しました。

## Updated Structure

```txt
Human CEO / Creative Director
  |
  +-- Headquarters
      |
      +-- Product / Parent Arcade
      +-- Cabinet Studios
      +-- Marketing Department
      |   |
      |   +-- Strategy / Distribution
      |   +-- Creative Department
      |   +-- Analytics Department
      +-- QA
      +-- Policy & Safety
      +-- Publishing
```

## Why

Creativeの現在の主な仕事は、名刺/カード、告知ビジュアル、トップページの第一印象、BACKYARDの見せ方など、外向きの伝わり方に強く関わっています。

Analyticsの現在の主な仕事は、流入、UTM、店長メモ、イベント計測など、Marketing施策の改善判断に強く関わっています。

そのため、初期フェーズでは以下の形が自然と判断しました。

```txt
Marketing Department
  |
  +-- Creative Department
  +-- Analytics Department
```

## Important Boundary

CreativeとAnalyticsはMarketing配下ですが、単なる作業係ではありません。

- Creativeは、見た目、空気、演出、余白、世界観の専門判断を持つ。
- Analyticsは、計測設計、行動解釈、改善判断の専門性を持つ。
- Marketingは、誰にどう届けるか、どう反応を見るかの上位戦略を持つ。

Headquartersは、全体統括、正本管理、GitHub、親Arcade実装、BACKYARD実装、公開判断を持ちます。

## Asset Handoff

名刺/カードのようなCreative成果物は、採用版・入稿版・公開版については必ず本部を通します。

```txt
Creative Department
-> Headquarters
-> Marketing Department
```

理由:

- 正本を保存するため。
- 個人情報、注文番号、請求情報などを混ぜないため。
- GitHubに入れてよい資産と、Marketingが使う資産を分けるため。
- 後から見返した時に、どれが採用版か分かるようにするため。

## Updated Docs

本部で以下を更新しました。

- `docs/01-strategy/organization-map.md`
- `docs/01-strategy/company-model.md`
- `docs/01-strategy/department-operating-model.md`
- `docs/00-hq/hq-dashboard.md`

## Marketingに確認したいこと

1. Creative/AnalyticsをMarketing Branch配下として扱う整理に違和感はないか。
2. Marketing Branchとして、次に優先すべき作業は以下でよいか。
   - 名刺配布後のUTM/GA4確認
   - 店長メモとの突き合わせ
   - BACKYARDの見せ方に対するMarketing観点レビュー
   - 初回告知/手渡し時の一言トーク設計
3. Creative成果物を本部で正本化してからMarketingへ共有する運用で問題ないか。

## Desired Response

以下の形式で返してください。

```txt
Marketing Department Response: Branch Structure Update

1. 組織構造への見解
2. Creative/Analyticsを配下に置く場合の運用注意
3. Offline Card配布後に見るべき指標
4. BACKYARDにMarketingとして期待する役割
5. 本部に依頼したいこと
```
