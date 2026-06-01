# Codex Arcade v0.1 Release Roadmap

Codex Arcade v0.1は、完成版ではなく「遊ばれながら改造されるオンラインゲーセン」として公開する。

看板筐体は `Cabinet 01: Neon Core Survivor`。

`Cabinet 02` と `Cabinet 03` は、現時点ではLab Cabinetとして扱い、公開後の改善サイクルで再設計する。

## Release Tracks

| Track | 目的 |
|---|---|
| Product | Cabinet 01を主役にして、普通の人が遊べる最低ラインにする |
| Feedback | プレイヤーが「店長にメモを残す」形で感想を書けるようにする |
| Marketing | 誰に届けるか、どんな導線で来てもらうかを設計する |
| Analytics | どこから来て、何を押して、どこで反応したかを見る |
| Operations | 本部がメモと数字を見て、Studioへ改善指示を出す |

## Roadmap

| Step | Product | Feedback | Marketing / Analytics | 完了条件 |
|---|---|---|---|---|
| 1. Release Design | Cabinet 01を看板筐体に確定。Cabinet 02/03はLab扱いに整理 | Director QAとPlayer Memoを分ける | 初期ターゲット仮説を決める | v0.1の出し方が決まる |
| 2. Feedback MVP | トップに「店長にメモを残す」導線を置く | サイト内ミニフォームを作る。Formspree接続想定 | メモ内容をマーケにも使える形にする | Googleフォームに飛ばず感想を書ける |
| 3. Analytics MVP | INSERT COIN/PLAY/メモ導線のイベントを設計 | Player MemoとDirector QAをdocsで別管理 | GA4などの導入方針、イベント名を決める | 最低限の計測設計がある |
| 4. Cabinet 01 Final QA | 起動、操作、リトライ、BACK TO ARCADE確認 | QA結果をDirector QAとして記録 | 初見導線としてCabinet 01に迷わず行けるか確認 | 普通の人に渡せる最低ライン |
| 5. Release Copy | トップ文言を「遊ばれながら改造されるオンラインゲーセン」に寄せる | 店長メモの説明を世界観に合わせる | 告知文、SNS文、初回共有先を作る | 公開時に何を言うか決まる |
| 6. Publish v0.1 | GitHub Pagesで公開 | Player Memo受付開始 | 初回告知、流入確認開始 | 外部URLで遊べる |
| 7. First Player Memo Cycle | 軽微な不具合を直す | 感想をPlayer Memoとして分類 | 流入元、PLAY率、メモ送信数を見る | 初回プレイヤー反応が集まる |
| 8. Studio Feedback Meeting | Cabinet 01 Studioへ改善指示 | Player Memoから改善仮説を作る | マーケ視点で刺さった表現/導線を整理 | v0.1.1改善方針が決まる |
| 9. Update v0.1.1 | Cabinet 01を改善 | 改善ログを公開/記録 | 改善内容を再告知ネタにする | 遊ばれて変わった体験を出せる |
| 10. Lab Cabinets Next | Cabinet 02/03の再設計へ戻る | Director QA + Player Memoを反映 | 反応が良ければ新作/実験筐体の見せ方を検討 | 次フェーズへ進む |

## v0.1 必須条件

- Cabinet 01が普通に遊べる。
- トップからCabinet 01に迷わず行ける。
- 店長にメモを残せる。
- CREDITSが無料演出であり、購入/換金/報酬ではないことが分かる。
- GitHub Pagesで公開できる。

## Operational Docs

- `docs/05-release-qa/v0.1-parallel-operations-plan.md`
- `docs/05-release-qa/release-v0.1-checklist.md`
- `docs/05-release-qa/release-v0.1-qa-log.md`
- `docs/05-release-qa/release-v0.1-announcement-kit.md`
- `docs/04-marketing/release-analytics-operations.md`
- `docs/04-marketing/analytics-events.md`
- `docs/02-arcade-product/feedback-loop.md`

## v0.1 では後回し

- 本格BGM制作
- Cabinet 02/03のゲーム性再設計
- 会員登録
- ランキング
- 実決済
- 暗号資産/ウォレット
- サイト内データベース
