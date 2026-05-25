# Codex Arcade v0.1 QA Log

## 2026-05-22 本部QA

Purpose:

- v0.1公開前に、本部だけで確認できる最低限の導線を確認する。
- GA4 Measurement IDは接続済み。
- Formspree endpointは未接続のため、Formspree外部送信確認は対象外。

Local URL:

```txt
http://127.0.0.1:8094/
```

## Static Checks

- `node --check arcade.js`: OK
- `node --check games/neon-core-survivor/game.js`: OK
- `node --check games/metro-mender/game.v0.2.7.js`: OK
- `node --check games/specimen-night-shift/game.js`: OK
- `games.json` JSON parse: OK
- `games/neon-core-survivor/game.json` JSON parse: OK
- `games/metro-mender/game.json` JSON parse: OK
- `games/specimen-night-shift/game.json` JSON parse: OK

## HTTP Checks

- `/index.html`: 200 OK
- `/games/neon-core-survivor/?from=arcade&credit=1`: 200 OK
- `/games/metro-mender/?from=arcade&credit=1`: 200 OK
- `/games/specimen-night-shift/?from=arcade&credit=1`: 200 OK

## Product Checks

- Top page loads: OK
- Credit display appears: OK
- Free credit / credit policy copy appears: OK
- Privacy copy appears: OK
- Cabinet 01 appears as `NOW PLAYABLE`: OK
- Cabinet 02/03 initially appeared as `NOW PLAYABLE`: NG
- Cabinet 02/03 were changed to `concept` in `games.json`
- Cabinet 02/03 now appear as `AGENTS TUNING / COMING SOON`: OK
- Cabinet 02/03 play buttons are disabled: OK

## Cabinet 01 Flow

- `INSERT COIN` button appears: OK
- Clicking `INSERT COIN` changes the cabinet to credit-ready state: OK
- `PRESS PLAY` appears: OK
- Clicking `PRESS PLAY` launches Cabinet 01: OK
- Cabinet 01 launch URL includes `?from=arcade&credit=1`: OK
- Cabinet 01 title page shows Arcade launch flavor: OK
- `Back to Arcade` link returns to top page: OK
- Return URL is cleaned back to `/index.html`: OK

## Feedback / Player Memo

- `店長にメモを残す` button appears: OK
- Manager memo modal opens: OK
- Memo fields appear:
  - Cabinet select
  - また遊びたい？
  - 遊び方は分かった？
  - 店長へのメモ
- Privacy / credit caution appears in memo modal: OK
- Memo body can be entered: OK
- Submit button works: OK
- Formspree未接続時のfallback表示 appears:
  - `仮受付しました。Formspree接続後は店長室へ送れるようになります。`

## Analytics Notes

- Event hooks exist in `arcade.js` for the v0.1 funnel.
- Browser QA verified the user-facing return flow and memo flow.
- GA4 Measurement ID `G-VBKHF7QYE0` was configured after this QA pass.
- GA4 Realtime confirmation still needs to be done against the active local/public page.
- Formspree success confirmation is blocked until a real `FEEDBACK_ENDPOINT` is provided.
- localStorage log inspection was not reliable from the current in-app browser automation surface, so this QA does not mark localStorage event inspection as fully verified.

## Result

本部だけで進められる公開前QAとしては、トップ導線、Cabinet 01起動、Back to Arcade、店長メモfallbackまで確認済み。

次に必要なもの:

- Marketing DepartmentへのGA4/Formspree導入手順確認。
- GA4 Realtime確認。
- Human DirectorによるFormspree endpoint提供、またはv0.1ではfallback運用で出す判断。
- GitHub Pages公開前の最終承認。
