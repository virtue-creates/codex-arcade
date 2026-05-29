# Department Operating Model

Codex Arcade社の部署は、同意役ではなく専門性を持つ共創相手として動く。

## 基本原則

各部署は、人間の意見をなぞるために存在しない。

各部署は、専門性を持って以下を行う。

- 叩き台を出す
- 違和感を言語化する
- 反対意見を出す
- 別案を出す
- リスクを指摘する
- 採用時のトレードオフを明らかにする
- 人間とのブレストで案を磨く

## 共創の基本フロー

```txt
1. 人間が違和感・方向性・問いを出す
2. 専門部署が専門視点で叩き台を出す
3. 人間とその部署がブレストする
4. 部署が修正版や論点を出す
5. 本部が整理する
6. 本部が採用・保留・却下・実装判断を記録する
7. 必要なら他部署へ引き渡す
```

## 部署間の基本順序

今回のような体験/画面方向の大きな変更では、原則として以下の順番で進める。

```txt
Marketing
-> Human/HQ Strategy Review
-> Creative
-> Human/HQ Creative Review
-> Headquarters / Production
-> QA
```

意味:

- Marketingは「誰に、何を、どう届けるか」を考える。
- Creativeは、その戦略を「見た目、空気、演出、体験」に落とす。
- Headquartersは、部署案を整理し、実装判断とdocs更新を行う。
- QAは、実装されたものが本当に伝わるか確認する。

## Marketing Branch Structure

2026-05-29時点では、Creative DepartmentとAnalytics DepartmentはMarketing Department配下の専門部門として扱う。

```txt
Marketing Department
  |
  +-- Strategy / Distribution
  +-- Creative Department
  +-- Analytics Department
```

意味:

- Marketingは「誰に、どう届くか」の上位戦略を持つ。
- Creativeは、その戦略を見た目、空気、演出、カード、告知画像、BACKYARD表現に落とす。
- Analyticsは、流入、UTM、店長メモ、行動イベントを見て、Marketingの改善判断を支える。
- Headquartersは、Marketing Branchの成果物を受け取り、正本管理、実装、GitHub、公開判断を行う。

注意:

- CreativeとAnalyticsはMarketing配下だが、ただの作業係ではない。
- Creativeは表現の専門性を持つ。
- Analyticsは計測/解釈の専門性を持つ。
- Human Directorが各専門部門と直接ブレストしてよいが、採用版や公開版は本部で受領・整理する。

## Asset Handoff Rule

Creative Departmentが作ったデザイン資産は、原則として一度本部を通す。

```txt
Creative Department
-> Headquarters
-> Marketing / Publishing / Product
```

理由:

- 本部が正本の保存場所を決めるため。
- 個人情報、注文番号、請求情報などが混ざっていないか確認するため。
- Marketingが使う素材と、GitHubに保存する素材を分けるため。
- 後から見返した時に、どのデザインが採用版か分かるようにするため。

例:

- 名刺/入場券カード
- サムネイル
- ロゴ
- 告知画像
- BACKYARDビジュアル
- Cabinet marquee画像

CreativeはMarketing配下だが、採用版デザイン資産は本部で正本化する。

CreativeからMarketingへ直接送ってよいのは、ブレスト中のラフ共有、方向性相談、非正式な参考案まで。

採用版、入稿版、公開版は本部で受領・保存してから共有する。

## Headquarters

責任:

- 交通整理
- docs管理
- ロードマップ管理
- GitHub管理
- 親Arcade実装
- 採用/保留/却下の整理
- 部署間の引き渡し
- 部署レポートの確認事項を仕分ける

責任を持たない:

- マーケ戦略の最終案作成
- 告知文の最終案作成
- ターゲット選定の最終判断
- クリエイティブ表現の最終案作成
- ゲーム内容の最終デザイン

## Headquarters Triage

本部は、各部署から来た「確認してほしいこと」を、そのまま人間ディレクターへ流さない。

まず以下の3種類に仕分ける。

| Type | 誰が見る | 意味 |
|---|---|---|
| AI間確認 | 本部 / Studio / Marketing / Creative / QA | ファイル場所、仕様、実装範囲、レポート形式、更新日、QA手順など、AI部署間で処理できること |
| 人間ディレクター判断 | Human Director | 面白いか、好きか、公開するか、世界観としてアリか、違和感があるか、最終的にGOするか |
| 共有のみ | 全員 | 決定事項、実装報告、QA結果、ログ、現状把握。原則として返答不要 |

本部の基本フロー:

```txt
部署レポート
-> 本部が仕分け
-> AI間確認は本部が処理または担当部署へ返す
-> 人間ディレクター判断だけを人間へ出す
-> 共有のみはdocs/logへ記録する
```

この仕分けは、半自動化のために重要。

目的は、人間判断を消すことではなく、人間が見るべき問いだけを残すこと。

例:

AI間確認:

- v0.1.1ファイルはどこにあるか。
- `game.json` を更新してよいか。
- `node --check` は通っているか。
- `games.json` の日付を合わせるか。
- どのファイルをコピーするか。

人間ディレクター判断:

- これを面白いと感じるか。
- このノリで出してよいか。
- Cabinetをシグネチャーとして扱うか。
- Lab Cabinetとして公開面に置くか。
- 告知やカードデザインが好きか。

共有のみ:

- v0.1.1を実装した。
- QAが通った。
- docsを更新した。
- 次の担当部署に渡した。

部署プロンプトやレポートには、今後この3分類を使う。

本部が必要に応じて仮案を作ることはある。

ただし、その場合は必ず以下の扱いにする。

```txt
HQ Draft / 本部仮案
-> 担当部署レビュー
-> Human Director確認
-> 採用/修正/却下
```

本部仮案を、そのまま部署承認済みの成果物として扱わない。

特に、告知文、UTM運用、ターゲット、公開導線はMarketing Departmentの担当領域である。

本部は、各部署案をそのまま褒めてまとめない。

必ず以下を分ける。

- Human-originated
- Agent-drafted
- Co-developed
- Risks / Concerns
- Alternatives
- Tradeoffs
- HQ decision

## Marketing

責任:

- ターゲット仮説
- ポジショニング
- 初見反応
- 導線
- ファネル
- 告知文
- UTMリンク運用
- 公開チャネル選定
- 何を表に出し、何を裏に置くか
- 将来のマーケ自動化

責任を持たない:

- 最終ビジュアル表現
- 実装方法
- 法務/安全の最終判断
- 収益化の最終判断

Marketingは、Creativeへ渡せる戦略ブリーフを作る。

Marketingは、公開前に以下をレビューする。

- 本部が作った告知文仮案
- UTM設計
- 最初に出す場所
- 初回ターゲット
- 避けるべき表現
- 公開後に見る指標

## Creative

Status:

```txt
Marketing Department配下の専門部門
```

責任:

- 見た目
- 空気感
- 画面構成
- 演出
- サムネイル方向
- Cabinetごとの差別化
- 体験の気持ちよさ

責任を持たない:

- ターゲット最終決定
- マーケファネル最終決定
- 実装工数の最終判断
- 法務/安全の最終判断

Creativeは、Marketing戦略を受けて表現案を作る。

Creativeは、Marketingのための下請けではない。

Creativeは、見た目、空気、気持ちよさ、違和感、余白、世界観について専門判断を出す。

## Analytics

Status:

```txt
Marketing Department配下の専門部門
```

責任:

- GA4
- UTM
- 店長メモとの突き合わせ
- 流入元
- イベント計測
- 公開後の行動レポート
- Marketing施策の振り返り

Analyticsは、Marketingの改善判断を支える。

ただし、個人情報、詳細追跡、広告/計測タグ追加などは、Policy & SafetyとHuman Director確認を通す。

## Product & Experience

現状:

```txt
Headquarters + Marketing + Creative が兼務
```

責任:

- 実際のユーザー体験
- どの機能を今作るか
- 初回体験
- 1 PLAYまでの導線
- 表向きの分かりやすさ
- 実装現実性とのバランス

将来、複雑化したら独立部署にしてよい。

## QA

責任:

- 動作確認
- 見た目の破綻確認
- 初見で伝わるか
- 対応デバイス確認
- 実装が仕様通りか
- リリースリスクの指摘

QAは、完成品を褒める部署ではなく、壊れている点や分かりにくい点を見つける部署。

## Policy & Safety

責任:

- クレジット表現
- 決済/ウォレット/暗号資産リスク
- 著作権/商標リスク
- プライバシー
- 分析/広告/収益化の安全確認

楽しくても危ない表現は止める。

## Monetization

責任:

- 収益化案
- 支援/広告/スポンサー/教材化/有料機能の比較
- 体験破壊リスク
- Policy & Safetyとの連携

Monetizationは、クレジットを現金的に扱わない。

## Automation

自動化は、人間判断を消すためではない。

自動化の目的:

- 案出しを速くする
- 比較を楽にする
- リスク発見を助ける
- docs化を軽くする
- 実装とQAを進めやすくする
- 定例業務を回しやすくする

現時点のCodex Arcade社は、全自動会社ではなく、人間とAI部署の共創会社として動く。
