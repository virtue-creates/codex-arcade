# Codex Arcade v0.1 Release Checklist

Codex Arcade v0.1を「遊ばれながら改造されるオンラインゲーセン」として外に出すための本部チェックリスト。

これは完成判定ではなく、公開してよい最低ラインを確認するためのもの。

## Current Status

| Area | Status | Note |
|---|---|---|
| Cabinet 01 | In play | 看板筐体として公開候補 |
| Cabinet 02 | Lab | ゲーム性は再設計待ち |
| Cabinet 03 | Lab | 伝達とリプレイ性は再設計待ち |
| 店長メモ | In play | Formspree受信確認済み |
| Analytics | In play | GA4 Realtimeで受信確認済み |
| GitHub Pages | In play | 公開URL確認済み |

## Product

- [ ] トップからCabinet 01へ迷わず入れる。
- [ ] `CREDITを受け取る -> INSERT COIN -> PRESS PLAY` の流れが破綻しない。
- [ ] Cabinet 01が通常起動できる。
- [ ] Cabinet 01が `?from=arcade&credit=1` 付きで起動できる。
- [ ] Cabinet 01で遊び、リトライできる。
- [ ] Cabinet 01から `BACK TO ARCADE` で戻れる。
- [ ] Cabinet 02/03はLab扱いとして、過度に期待させない表示になっている。

## Feedback

- [ ] トップに `店長にメモを残す` 導線がある。
- [ ] 店長メモを開ける。
- [ ] 店長メモを書き始めた時に `memo_form_start` が記録される。
- [ ] 店長メモ送信時に `submit_manager_memo` が記録される。
- [x] Formspree endpointを設定する。
- [x] Formspreeで店長メモを受信できる。
- [ ] Formspree送信成功時に `manager_memo_submit_result: sent` がGA4で確認できる。
- [ ] Formspree送信失敗時はlocalStorage fallbackで仮保存される。

## Analytics

- [x] `arcade_visit` が記録される。
- [x] `select_cabinet` が記録される。
- [x] `click_free_credit` が記録される。
- [ ] `insert_coin` が記録される。
- [ ] `launch_cabinet` が記録される。
- [ ] `return_to_arcade` が記録される。
- [ ] `open_manager_memo` が記録される。
- [ ] `memo_form_start` が記録される。
- [ ] `submit_manager_memo` が記録される。
- [ ] `manager_memo_submit_result` が記録される。
- [x] GA4 Measurement IDを設定する。
- [x] GA4 Realtimeでイベント受信を確認する。

## Privacy / Safety

- [ ] CREDITSは無料演出であり、購入、換金、報酬ではないことが見える。
- [ ] 店長メモで個人情報を書かない案内がある。
- [ ] 決済情報、ウォレット情報、メールアドレスを必須にしていない。
- [ ] アクセス解析は改善目的で使うと説明している。
- [ ] 実決済、暗号資産、ウォレット連携、ランキング賞品はv0.1に入れない。

## Marketing / Release

- [x] 公開URLを決める。
- [ ] 告知リンクにUTMを付ける方針を決める。
- [ ] 初期UTMセットを決める。
- [ ] 初回告知先を決める。
- [ ] 公開当日の接続確認を行う。
- [ ] 公開3日後の初回改善レビュー日を決める。
- [ ] 公開7日後のv0.1.1方針レビュー日を決める。
- [ ] Marketing Departmentが、公開後に見る指標を確認している。

## Human Approval

公開前に人間ディレクターが確認すること:

- [ ] いま出してよい見た目か。
- [ ] Cabinet 01を看板として出してよいか。
- [ ] 店長メモの文言が世界観に合っているか。
- [ ] GA4/Formspreeの接続確認結果。
- [x] GitHub Pagesで公開されたことを確認する。
