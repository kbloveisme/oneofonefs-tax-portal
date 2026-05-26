# OneTruth Atlas Implementation Plan

This repository now contains the Phase 0 + Phase 1 implementation blueprint for a cross-platform multi-faith learning product.

## 1) Product Guardrails (Phase 0)

### Supported launch tracks (initial)
- Christianity
- Islam
- Judaism
- Hinduism

### Content tone and integrity
- Respect-first language with no derogatory framing.
- Comparative insights must describe similarities and differences without superiority claims.
- Every lesson summary must include canonical source citations.
- Editorial workflow: `draft -> scholarly/religious review -> publish`.

### Policy controls
- Subscription plans:
  - Monthly: **$9.99**
  - Yearly: **$99.99** (editable based on final pricing strategy)
- Define trial, refund, restore purchase policies before launch.
- Keep legal pages in sync with app store metadata and Stripe product disclosures.

## 2) Target Technical Architecture

## Client layer
- React Native app for iOS + Android.
- React web app for desktop/mobile web.
- Shared UI language and analytics event schema.

## API + compute
- Node.js API (NestJS or Express).
- Services:
  - Auth service
  - Learning/content service
  - Comparison engine service
  - Subscription/billing service
  - Notification service

## Data layer
- PostgreSQL: users, lessons, citations, subscriptions, progress, editorial metadata.
- Redis: cache, short-lived session data, throttling counters, queue fanout helpers.

## Search and compare
- Hybrid retrieval:
  - keyword index for exact term lookup
  - vector index for conceptual similarity in Omni-Compare

## Storage and media
- Encrypted object storage for downloadable holy-text files and media assets.
- CDN in front of static files with signed access strategy where required.

## Security and access
- JWT-based auth with refresh token rotation.
- Role-based access control:
  - learner
  - editor
  - reviewer
  - admin

## 3) Domain Model

Primary entities are defined in `/docs/domain-model.md`.

Core requirements:
- Onboarding choices and level placement.
- Lesson/chapter narrative flow.
- Canonical citation enforcement for each summary.
- Up to four-religion comparison sessions with concept mapping.
- Subscription state and entitlement checks.

## 4) Feature Delivery Order

1. Onboarding and level assessment
2. Beginner module (Who/What/When/Where/Why/How)
3. Storyteller sessions bound to chapter progression
4. Holy text download + offline reading support
5. Omni-Compare (up to 4 religions)

## 5) Admin + Content Pipeline

- CMS authoring interface for lessons, chapter narratives, and citation mappings.
- Mandatory review checkpoints before publish.
- Full content versioning and audit trail for traceability.

## 6) Growth and Marketing Stack

- Landing page with:
  - product narrative
  - architecture highlights
  - pricing
  - FAQ
  - trust/compliance messaging
- Analytics requirements:
  - onboarding funnel events
  - feature engagement
  - conversion metrics
  - retention and streak health
- Lifecycle channels:
  - push/email nudges for progress continuity
  - referral invite workflows

## 7) QA and Release Readiness

- Test strategy:
  - unit tests for domain logic
  - integration tests for API contracts
  - end-to-end tests for onboarding, learning, compare, and checkout flows
- Validate:
  - accessibility
  - offline behavior
  - payment edge cases
  - performance/load on core APIs

## 8) Deployment and Submission

Deployment and publishing checklist is in `/docs/deployment-checklist.md`.

Production publication to Stripe, Apple App Store, and Google Play requires owner credentials and approval actions that cannot be completed solely from this repository.
