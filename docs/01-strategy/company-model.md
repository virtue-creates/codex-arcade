# Company Model

Codex Arcade is an AI-agent-operated arcade studio.

The public product is a small web arcade. The deeper experiment is a miniature company where a human director and Codex departments plan, build, QA, publish, market, analyze, and improve games.

See `docs/01-strategy/organization-map.md` for the current role registry and status of each position.

## Core Concept

```txt
Human CEO / Creative Director
+ Codex departments
= AI-agent-operated arcade studio
```

## Human Role

The human acts as:

- CEO
- Creative director
- Final approver
- Taste and worldbuilding owner
- Public release approver
- Policy and safety escalation owner

The human should approve:

- New game concepts
- Final game titles
- Public release
- Major world direction
- GitHub main branch merge
- Analytics or tracking setup
- External assets and libraries
- Payment, wallet, crypto, reward, or prize features

## Departments

## Headquarters

Owns:

- Project rules
- Documentation
- GitHub workflow
- Parent arcade site
- Game registration
- Release coordination
- Decision log

## Product & Experience

Status:

```txt
Covered by Headquarters, Marketing, and Creative for now.
```

Owns:

- Public arcade experience
- First-play flow
- Cabinet selection logic
- Feature priority
- The boundary between public arcade feeling and behind-the-scenes company story

This may become a dedicated role later if product decisions become complex.

## Game Studio

Owns:

- New game concepts
- Small game prototypes
- Gameplay iteration
- Game README and changelog
- Game-specific implementation

## QA Department

Owns:

- Startup checks
- Console error checks
- Device checks
- Usability checks
- Release risk notes
- QA reports

## Marketing Department

Owns:

- Audience definition
- Site entry paths
- SEO basics
- Social post drafts
- Release announcement drafts
- Positioning
- Funnel thinking
- Marketing automation planning
- Coordination with Creative, Analytics, and Monetization

Marketing is the strategic owner for who Codex Arcade is for and why people should care.

Near-term subfunctions:

- Creative Department
- Analytics Department

Marketing should not flatten those subfunctions into simple agreement roles.

Creative and Analytics still provide specialist judgment, but their work is routed through the Marketing Department when it concerns public-facing entry paths, first impression, announcements, cards, BACKYARD presentation, or audience behavior.

## Creative Department

Status:

```txt
Subfunction of Marketing Department
```

Owns:

- Game thumbnails
- Visual direction notes
- Announcement and card visuals
- BACKYARD presentation
- Public-facing worldbuilding
- First-impression creative

Creative collaborates with Headquarters and Cabinet Studios when the work affects parent Arcade implementation or game-specific UI.

## Analytics Department

Status:

```txt
Subfunction of Marketing Department
```

Owns:

- Analytics planning
- Traffic and behavior reports
- Improvement proposals
- Measurement design
- Weekly or release-based reports
- Coordination with Marketing and Product & Experience

Analytics should stay privacy-aware and should not add tracking without human approval.

## Business & Monetization Department

Owns:

- Revenue model research
- Monetization experiments
- Support, sponsorship, ads, education, premium feature, and future payment analysis
- User experience impact review
- Coordination with Marketing, Analytics, and Policy & Safety

This department explores how Codex Arcade could become sustainable. It does not add payment, ads, wallet, crypto, rewards, or cash-like credits without human approval.

## Publishing Department

Owns:

- GitHub Pages readiness
- Release checklist
- Version notes
- Public publishing flow

In early phases, Headquarters may also act as Publishing.

## Support / Community

Status:

```txt
Planned, not active yet.
```

May later own:

- Feedback collection
- Community response
- Issue triage
- Public questions

Do not create this as a separate department until the arcade has public users.

## Policy & Safety Department

Owns:

- Credit policy
- Privacy review
- Analytics review
- External asset risk
- Copyright and trademark risk
- Payment, wallet, crypto, reward, and prize risk

## Operating Loop

```txt
1. Producer proposes concepts.
2. Human approves one concept.
3. Game Builder implements.
4. QA checks.
5. Creative prepares thumbnail, copy, and notes.
6. Integrator registers the game.
7. Publishing prepares release.
8. Marketing announces and improves entry paths.
9. Analytics reviews behavior.
10. Business & Monetization reviews sustainability options when appropriate.
11. Headquarters decides the next cycle.
```
