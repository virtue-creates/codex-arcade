# Codex Arcade Docs

Codex Arcadeの資料室です。

まず見る場所:

| 見たいもの | 場所 |
| --- | --- |
| 今の全体状況 | `00-hq/hq-dashboard.md` |
| ロードマップ | `00-hq/roadmap.md` |
| 重要な変更履歴 | `00-hq/roadmap-history.md` |
| 組織図 | `01-strategy/organization-map.md` |
| Codex Arcade店史 | `00-hq/arcade-store-history.md` |
| 公開前後の進行 | `05-release-qa/release-v0.1-roadmap.md` |
| 担当チャットへの依頼文 | `prompts/` |
| 全部署ルール再確認 | `prompts/all-departments-rules-refresh-prompt.md` |
| 流入導線実験 | `04-marketing/learning-community-entry-test.md` |

## フォルダ構成

| フォルダ | 役割 |
| --- | --- |
| `00-hq/` | 本部ダッシュボード、ロードマップ、判断ログ、バックログ |
| `01-strategy/` | 会社化、組織、役割、方針、安全性、収益化 |
| `02-arcade-product/` | 親サイト、クレジット、BACKYARD、音、デザイン、体験設計 |
| `03-cabinets/` | 各Cabinet、ゲーム追加ルール、manifest、共通インターフェース。詳細入口は `03-cabinets/README.md` |
| `04-marketing/` | マーケ、Analytics、告知、オフラインカード |
| `05-release-qa/` | 公開、QA、リリースチェック、ヒューマンQAログ |
| `06-automation/` | 将来の自動化、エージェント分業、制作パイプライン |
| `prompts/` | 各担当に貼るプロンプト |

## 運用ルール

- 新しい資料は、まずこの分類のどこに入るかを決める。
- 迷ったら `00-hq/hq-dashboard.md` に入口リンクを追加する。
- 担当チャットに渡す文章は `prompts/` に置く。
- 人間QA、公開判断、GitHub運用は `05-release-qa/` に置く。
- 表向きのサイト実装そのものはdocsではなく、ルートの `index.html`, `styles.css`, `arcade.js` で管理する。
