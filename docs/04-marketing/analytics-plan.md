# Analytics Plan

Analytics should help Codex Arcade improve without making the project feel invasive.

## Phase 1

Do not add analytics yet.

Instead, decide what would be useful to know:

- How many people visit the arcade?
- Which game cards are clicked?
- Which games are launched?
- Which devices are used?
- Which pages are viewed?
- Where do people leave?

## Phase 2

After GitHub Pages launch, consider adding analytics.

Candidate tools:

- Google Analytics 4
- Plausible
- Umami

Google Analytics is common and educational, but can be complex. Lightweight analytics may be easier for a small project.

## Events To Consider

Potential event names:

```txt
view_home
view_game_card
insert_coin
launch_game
return_to_arcade
open_about
```

Potential event fields:

```txt
game_id
device_label
input_label
credit_cost
from_arcade
```

## Weekly Analytics Report

Future Analytics Agent output:

```txt
Week:

Summary:
- ...

Traffic:
- ...

Top games:
- ...

Device mix:
- ...

Findings:
- ...

Recommended actions:
- ...
```

## Privacy Guardrails

- Avoid collecting personal information.
- Avoid tracking more than needed.
- Add privacy notes before public analytics.
- Get human approval before adding analytics code.
- Keep analytics documentation updated.

