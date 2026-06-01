# Organization Map

This document shows the current Codex Arcade company structure.

It separates:

```txt
Created
= A role or agent instruction file already exists.

Covered
= The function exists, but is currently handled by another department.

Planned
= Useful later, but not needed as a separate role yet.
```

## Current Organization

```txt
Human CEO / Creative Director
  |
  +-- Headquarters
      |
      +-- Product & Experience
      +-- Game Studio
      +-- Marketing
      |   |
      |   +-- Creative
      |   +-- Analytics
      +-- Business & Monetization
      +-- QA
      +-- Integrator
      +-- Publishing
      +-- Policy & Safety
```

## Position Registry

| Position | Status | Current File | Main Responsibility |
| --- | --- | --- | --- |
| Human CEO / Creative Director | Created | Human role, no agent file | Final approval, taste, world direction, public release decisions |
| Headquarters | Created | This headquarters chat, `PROJECT-RULES.md` | Strategy, docs, roadmap, GitHub, decisions, coordination |
| Producer Agent | Created | `agents/producer-agent.md` | New game concepts and scoped briefs |
| Game Builder Agent | Created | `agents/game-builder-agent.md` | Approved game implementation |
| QA Agent | Created | `agents/qa-agent.md` | QA checks, risk notes, release readiness |
| Marketing Agent | Created | `agents/marketing-agent.md` | Audience, positioning, funnel, entry paths, marketing automation |
| Creative Agent | Created | `agents/creative-agent.md` | Marketing配下の表現部門。Visual direction, thumbnails, card design, worldbuilding |
| Analytics Agent | Created | `agents/analytics-agent.md` | Marketing配下の計測部門。Measurement planning, reports, behavior insights |
| Monetization Agent | Created | `agents/monetization-agent.md` | Revenue model research and low-risk experiments |
| Policy & Safety Agent | Created | `agents/policy-safety-agent.md` | Privacy, credits, payments, wallet, copyright, safety review |
| Integrator Agent | Created | `agents/integrator-agent.md` | `games.json`, parent arcade integration, docs alignment |
| Publishing Department | Covered | Headquarters for now | GitHub Pages, release notes, public publishing workflow |
| Product & Experience Lead | Covered | Headquarters + Marketing + Creative for now | User experience, arcade feeling, feature priority, first-play flow |
| Support / Community | Planned | None yet | Feedback, community response, issue triage |
| Finance / Accounting | Planned | None yet | Only needed if real revenue starts |
| Legal | Planned | None yet | External professional review if payment, crypto, or legal risk increases |

## Near-Term Operating Model

During Phase 1:

```txt
Headquarters
- Owns roadmap, docs, implementation decisions.

Marketing
- Owns target audience, first impression, public-facing story.
- Contains Creative and Analytics as near-term subfunctions.

Creative
- Reports through Marketing for public-facing materials, cards, announcement visuals, BACKYARD presentation, and first-impression creative.
- Collaborates with Headquarters and Cabinet Studios when implementation or game-specific UI is involved.

Game Studio
- Keeps Cabinet 01/02/03 plans ready, but does not expand implementation beyond current phase.
```

## Reporting Note

2026-05-29時点の整理:

```txt
Marketing Department
  |
  +-- Creative Department
  +-- Analytics Department
```

CreativeとAnalyticsは、独立した専門性を持つが、初期フェーズではMarketing配下として扱う。

理由:

- Creativeの主な仕事が、名刺、告知ビジュアル、トップの第一印象、BACKYARDの見せ方など、外向きの伝わり方に寄っているため。
- Analyticsの主な仕事が、流入、店長メモ、UTM、公開後の反応を見ることで、Marketingの改善ループと強く結びつくため。
- 本部直下に全機能を並べるより、Marketingの中に「Strategy / Creative / Analytics」がある方が会社構造として自然なため。

ただし、最終的な正本管理、実装、GitHub、公開判断はHeadquartersが持つ。

## Strategic Premise

Codex Arcade should be operated with two layers:

```txt
Public Layer
= An online arcade that feels fun, direct, and playable.

Company Layer
= The behind-the-scenes AI-agent company that plans, builds, QA's, markets, analyzes, and improves the arcade.
```

The public layer should usually lead with arcade experience.

The company layer should support:

- Devlogs
- Behind-the-scenes content
- Automation experiments
- Marketing and analytics learning
- Future monetization exploration

## Operating Philosophy

Codex Arcade社は、現時点では全自動会社ではなく、人間とAI部署の共創会社として動く。

各部署は同意役ではなく、専門性を持つブレスト相手である。

部署ごとの詳しい責任範囲と引き渡しは `docs/01-strategy/department-operating-model.md` を参照する。

## When To Create More Departments

Do not create departments just because they are conceptually possible.

Create or split a department when:

- It has recurring work.
- Its decisions affect other departments.
- The human needs a clearer approval lane.
- Automation would benefit from a dedicated prompt or checklist.
