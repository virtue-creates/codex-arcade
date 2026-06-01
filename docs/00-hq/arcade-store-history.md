# Codex Arcade Store History

Codex Arcadeの店史。

これは通常の開発ログではなく、一人店長とCodex agentsが、オンラインゲーセンをどう構想し、作り、公開し、改造し始めたかを残すための営業記録。

BACKYARDでは、この内容を `ARCADE LOGBOOK` として見せる。

## この店史で見せたいこと

- Codex Arcadeが、ただのゲームサイトではなく「AIと人間で運営する小さなゲーセン実験」であること。
- 人間ディレクターが違和感、面白さ、世界観、公開判断を持ち、Codex agentsが企画、実装、QA、マーケ、整理を支えていること。
- 失敗や微妙な筐体も、撤去、改造、再搬入のような運営イベントに変えていくこと。
- docs、QA、Analytics、店長メモ、名刺施策が、全部「店を育てる仕組み」になっていること。

## Timeline

### 2026-05-13 - 開店構想

議題:

- Codexと一緒に作った複数の小型Webゲームを並べる親サイトを作る。
- 個別ゲームではなく、親サイトの設計、UI、フォルダ構成、公開方法、GitHub運用を本部で握る。
- 現実のゲーセンのように `100円を入れて1プレイする` 感覚を入れたい。

決定:

- プロジェクト名は `Codex Arcade`。
- 初期構成は `index.html`, `styles.css`, `arcade.js`, `games/` を持つ静的Webサイト。
- 実決済や暗号資産は入れず、まずは無料の仮想クレジットと `INSERT COIN` 演出で始める。
- `games manifest`、共通インターフェース、QAチェックリスト、新作追加フロー、人間承認ポイントを最初から考慮する。

変化:

- Chatだけで流れていた構想を、docsとして見える化する方針が固まった。
- 本部はCodex Arcade全体の正本を握る場所になった。

関係部署:

- Headquarters
- Cabinet Studios
- Policy & Safety

### 2026-05-13 - Cabinet 01/02/03の初期ラインナップ

議題:

- 最初にどの筐体を並べるか。
- すでに遊べる単体プロトタイプをどう親Arcadeへ移植するか。

決定:

- Cabinet 01: `Neon Core Survivor`
- Cabinet 02: `Metro Mender`
- Cabinet 03: `Specimen Night Shift`
- Cabinet 01は看板候補として先行。
- Cabinet 02/03はconceptまたはprototypeとして、後から育てる。

変化:

- `Cabinet` という呼び方が定着し、ゲームは単なるファイルではなく「筐体」として扱われるようになった。

関係部署:

- Headquarters
- Cabinet 01 Studio
- Cabinet 02 Studio
- Cabinet 03 Studio

### 2026-05-14 - 会社化とロードマップ運用

議題:

- Codex Arcadeを、AIエージェント開発スタジオ/会社のように運用したい。
- 新作ゲームの企画、実装、QA、サムネイル生成、登録、README、制作ログ、GitHub反映を半自動化したい。
- 進捗を人間が見ても分かるようにしたい。

決定:

- 本部、Cabinet Studio、Marketing、Creative、Analytics、QA、Policy & Safety、Publishingのような部署モデルを導入する。
- PhaseとSprintを使う。
- ただし表向きのArcade画面には `Phase / Sprint` を出さず、開発進捗はdocs側で管理する。
- `Roadmap Board`, `Phase Board`, `Current Board` の考え方を採用する。

変化:

- Codex Arcadeは、単にゲームを作る場所ではなく、AIをチーム化して小さな会社のように回す実験になった。
- 人間ディレクターが見て分かる進行管理が重要な価値になった。

関係部署:

- Headquarters
- Marketing Department
- Creative Department
- QA

### 2026-05-15 - MVP Shellと最初の違和感

議題:

- 親サイトのMVP Shellを作り、ブラウザで見られる状態にする。
- 人間ディレクターが実際に見て、ゲーセン感があるか確認する。

人間QA:

- `Codex Arcadeというオンラインゲーセンっぽさはない`
- `総じてゲーセン感がない。ワクワクしない`
- `カード一覧というより、筐体の前に座る感じがほしい`
- `表向きはゲームセンター感を優先したい`

決定:

- AIエージェント会社感は前面に出しすぎない。
- 表はゲーセン、裏は運営室/BACKYARDに分ける。
- Cabinet表示はカードではなく、筐体列に寄せる。
- `INSERT COIN -> CREDIT READY -> PLAY` の体験を育てる。

変化:

- 人間の違和感が、デザイン方針を変える重要な判断材料になった。
- 「AIが作った」より「遊びたくなるゲーセン」を優先する方針が固まった。

関係部署:

- Headquarters
- Creative Department
- Marketing Department

### 2026-05-17 - ゲーム性の見直し

議題:

- Cabinet 01/02/03を実際に触った時、何が面白く、何が弱いか。
- 各Studioが本部へどんな報告を返すべきか。

人間QA:

- Cabinet 01は普通に面白い。
- Cabinet 02は、点数が高い場所を押すだけに見えてゲーム性を感じない。
- Cabinet 03は、動きは面白いが大人が何度も遊ぶ理由が弱い。

決定:

- 各Cabinet Studioは、完成報告時に `何をするゲームか` だけでなく、`ルール`、`初見プレイヤーに何が伝われば成功か`、`どこで悩ませるか`、`どこで気持ちよくさせるか` を報告する。
- ゲームの良し悪しは、実装完了だけでは判断しない。

変化:

- QAはバグ探しだけでなく、面白さと伝達の確認になった。
- Cabinet 02/03の弱さも、後の「改造」「奥に下げる」「再搬入」イベント候補になった。

関係部署:

- Headquarters
- Cabinet Studios
- QA

### 2026-05-25 - v0.1公開

議題:

- まず公開して、実際に遊んだ人の反応から改善する。
- 店長メモとAnalyticsをつないで、遊ばれながら改造される流れを作る。

決定:

- GitHub PagesでCodex Arcade v0.1を公開する。
- GA4を導入する。
- Formspreeで店長メモを受け取る。
- `CREDITS` は無料演出であり、購入、換金、報酬ではないことを明記する。
- 公開は完成宣言ではなく、営業開始として扱う。

変化:

- Codex Arcadeはローカル制作物から、実際にURLを渡せるオンラインゲーセンになった。
- Analyticsは「どこで止まったか」、店長メモは「なぜ止まったか」を見る役割になった。

関係部署:

- Headquarters
- Marketing Department
- Analytics Department
- QA
- Publishing

### 2026-05-26 - PRトーンと看板筐体

議題:

- Codex Arcadeをどう告知するか。
- Cabinet 01をどの位置づけで扱うか。
- つまらない筐体をどう扱うか。

決定:

- 大事なバランスは `ノリはふざける。運用はちゃんとする。`
- Cabinet 01 `Neon Core Survivor` は、現時点の看板筐体として扱う。
- Cabinet 02/03は、無理に完成度を上げるだけでなく、改造/撤去/再搬入の運営イベントとして扱える。
- `BACKYARD` は、営業LPではなく、知る人ぞ知る裏口として置く。

変化:

- 失敗や微妙さをただ隠すのではなく、Arcadeらしい運営イベントへ変換する発想が生まれた。
- BACKYARDが、AI活用の裏側を見せる場所として育ち始めた。

関係部署:

- Headquarters
- Marketing Department
- Creative Department
- Cabinet Studios

### 2026-05-29 - オフラインカード施策

議題:

- 身近な初期テスターにURLをただ送るのではなく、リアルなカードでArcadeへ誘導したい。
- 名刺ではなく、ゲーセンの入場券/怪しいカードとして渡したい。

決定:

- ラクスルで通常サイズ名刺を100部発注。
- QRコードからCodex Arcadeへ誘導。
- UTMで `offline_card` 経由を計測する。
- 表は世界観、裏は行動導線。
- カード内でも、CREDITSは無料演出であり購入/換金/報酬ではないことを明記する。

変化:

- Codex Arcadeはオンラインだけでなく、現実の手渡し導線を持つプロジェクトになった。
- MarketingとCreativeの役割がよりはっきりした。

関係部署:

- Marketing Department
- Creative Department
- Headquarters

### 2026-05-30 - BGMと組織再整理

議題:

- トップページの音が弱い。
- Sunoで作成したBGMを使えるか。
- CreativeとAnalyticsの位置づけをどうするか。

決定:

- `Arcade Afterglow` をトップページBGMとして追加。
- 現時点のCodex Arcadeは無料・非商用実験として扱う。
- 将来収益化する場合は、AI生成音楽の利用条件を再確認する。
- CreativeとAnalyticsは、当面Marketing Department配下の専門機能として整理する。

変化:

- トップページの雰囲気作りが一段進んだ。
- 役割をまたがない会社運用の重要性が再確認された。

関係部署:

- Headquarters
- Marketing Department
- Creative Department
- Analytics Department
- Policy & Safety

### 2026-06-01 - 資料室整理とBACKYARD店史構想

議題:

- docsが増えすぎて見づらい。
- Cabinet資料も混ざっていて探しづらい。
- BACKYARDで、AIと人間がどう作ってきたかを「店史」として見せたい。

決定:

- docsをカテゴリ別フォルダに整理。
- Cabinet資料を共通ルールとCabinet別フォルダに分割。
- BACKYARDの主役コンテンツとして `ARCADE LOGBOOK` を設計する。
- ロードマップを、単なる予定表ではなく、店の歴史、改造史、搬入予定として見せる。

変化:

- docsは内部資料であると同時に、BACKYARDで魅せるための原本資産になった。
- Codex Arcadeの裏の目的である「一人店長がCodex agentsを使ってゲーセン運営を回している」ことを、営業資料ではなく店史として伝える方針が固まった。

関係部署:

- Headquarters
- Creative Department
- Marketing Department
- Cabinet Studios

## Current Read

Codex Arcadeは、以下のように育っている。

```txt
ゲームを作る
-> ゲーセンとして見せる
-> 人間QAで違和感を拾う
-> Studio/Marketing/Creative/Analyticsに分けて考える
-> 公開する
-> 店長メモとAnalyticsで見る
-> 改造する
-> その過程をBACKYARDで店史として見せる
```

この流れ自体が、Codex Arcadeのコンテンツであり、AI活用実験の証拠である。
