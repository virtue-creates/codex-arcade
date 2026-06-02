# Social Media Operations

Codex Arcade v0.1のX / Facebook運用メモ。

SNSは単なる宣伝場所ではなく、名刺、店長メモ、改造ログ、BACKYARDにつながる導線として扱う。

## Core Tone

大事にするノリ:

- なんか開いてた
- 1台、点いてる
- 店長メモ置いてきた
- 奥で調整中
- 前とは少し違うらしい
- メモは次の改造の参考にします

基本方針:

```txt
ノリはふざける。運用はちゃんとする。
```

## X

Xは、即時性と小さな拡散を狙う場所。

運用方針:

- `#CodexArcade` を中心に使う。
- ハッシュタグは補助。拡散の本命とは見なさない。
- リポストより、一言つきの引用ポストを重視する。
- 名刺、店長メモ、改造ログとX投稿をつなげる。
- 有料プロモーションはv0.1では使わない。
- 投稿後はGA4で `utm_source=x` とイベントを確認する。

初回投稿案:

```txt
Codex Arcade v0.1、開けました。

人間ディレクターとCodex agentsで、オンラインゲーセンやってます。
まずは看板筐体「Neon Core Survivor」が稼働中。

遊んだら店長メモを置いてってください。
メモは次の改造の参考にします。

#CodexArcade
https://virtue-creates.github.io/codex-arcade/?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=launch_post
```

UTM:

```txt
初回投稿:
https://virtue-creates.github.io/codex-arcade/?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=launch_post

補足投稿:
https://virtue-creates.github.io/codex-arcade/?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=followup_post

将来的なプレイヤー共有:
https://virtue-creates.github.io/codex-arcade/?utm_source=x&utm_medium=social&utm_campaign=v0_1_launch&utm_content=player_share
```

見るもの:

- `utm_source=x`
- `utm_medium=social`
- `utm_content=launch_post`
- `utm_content=followup_post`
- `arcade_visit`
- `insert_coin`
- `launch_cabinet`
- `return_to_arcade`
- `open_manager_memo`
- `submit_manager_memo`

見る問い:

- Xから来た人がいるか。
- Xから来た人がCabinet 01まで進んだか。
- 店長メモまで進んだか。
- 名刺経由と比べて反応が違うか。

## Facebook

Facebookは、即時拡散より、関係と文脈を育てる場所。

現時点ではFacebookグループではなく、Facebookページから始める。

理由:

- ページは人が少なくても空っぽ感が出にくい。
- 公式の掲示板/改造ログ置き場として使える。
- 個人アカウントに依存しない。
- 名刺やBACKYARDからの受け皿にしやすい。

推奨名:

```txt
Codex Arcade
```

将来的なコミュニティ名:

```txt
Codex Arcade バックヤード
```

初期投稿案:

```txt
Codex Arcade v0.1、開けました。

人間ディレクターとCodex agentsで、オンラインゲーセンを作っています。
まずは看板筐体「Neon Core Survivor」が稼働中です。

遊んだら「店長メモ」を置いてもらえると嬉しいです。
メモは次の改造の参考にします。

ここでは、改造ログやBACKYARDの話も少しずつ置いていきます。

https://virtue-creates.github.io/codex-arcade/?utm_source=facebook&utm_medium=social&utm_campaign=v0_1_launch&utm_content=page_post
```

UTM:

```txt
ページ投稿:
https://virtue-creates.github.io/codex-arcade/?utm_source=facebook&utm_medium=social&utm_campaign=v0_1_launch&utm_content=page_post

個人投稿:
https://virtue-creates.github.io/codex-arcade/?utm_source=facebook&utm_medium=social&utm_campaign=v0_1_launch&utm_content=personal_post

Messenger/DM:
https://virtue-creates.github.io/codex-arcade/?utm_source=facebook&utm_medium=messenger&utm_campaign=v0_1_launch&utm_content=messenger_dm
```

見る問い:

- Facebookから来た人がいるか。
- Xや名刺経由と比べて、店長メモ率が高いか。
- Facebook経由の人はBACKYARDやAIエージェント活用文脈に興味を持ちそうか。

## Review Timing

投稿後1〜2時間:

- GA4にアクセスが来ているか。
- UTMが出ているか。
- `insert_coin` / `launch_cabinet` が出ているか。

投稿後24時間:

- X/Facebookから何人来たか。
- Cabinet 01まで進んだか。
- 店長メモが来たか。

投稿後3日:

- 投稿文が刺さっていそうか。
- 次は何を強調するか。
- 改造ログや追加投稿にできることがあるか。

## Pending Decisions

- Facebookページ名は `Codex Arcade` でよいか。
- `Codex Arcade バックヤード` グループ化は当面保留でよいか。
- 将来的に店長メモ後に `Xで投げる` / `リンクをコピー` 導線を入れるか。
