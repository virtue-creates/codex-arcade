# Offline Card Assets

Codex Arcade v0.1の手渡し入場券カードのデザイン資産置き場。

## Purpose

Creative Departmentが作成した名刺/入場券カードの最終デザインを、本部が受領して保存する。

このフォルダには、公開しても問題ないデザイン資産だけを置く。

## Expected Files

推奨ファイル:

```txt
codex-arcade-v0.1-card-front.png
codex-arcade-v0.1-card-back.png
codex-arcade-v0.1-card-front.pdf
codex-arcade-v0.1-card-back.pdf
codex-arcade-v0.1-card-print.pdf
figma-link.txt
export-notes.md
```

PNGはプレビュー用。

PDFは入稿/保存用。

Figmaリンクがある場合は `figma-link.txt` に保存する。

## Do Not Commit

以下はGitHubに入れない。

- ラクスル注文番号
- 住所
- 氏名
- 電話番号
- 請求情報
- 支払い情報
- 個人アカウント情報
- 注文管理画面のスクリーンショット

## Current Status

2026-05-29:

- ラクスル入稿/注文作成は完了。
- 本フォルダは、Creative Departmentから最終デザイン資産を受領するために作成。
- まだ実デザインファイルは未保存。

## Handoff Flow

```txt
Creative Department
-> Headquarters receives and checks assets
-> Headquarters saves clean design files here
-> Headquarters shares status to Marketing Department
-> Marketing uses the asset/status for distribution and measurement planning
```

CreativeからMarketingへ直接渡さず、必ず一度本部で受領・整理する。
