# Deployment and Submission Checklist

## Environment and Infrastructure (Google Cloud)

- [ ] Create `dev`, `staging`, `prod` projects or isolated environments.
- [ ] Provision managed PostgreSQL.
- [ ] Provision Redis.
- [ ] Configure encrypted object storage buckets for canonical texts and media.
- [ ] Configure CDN and cache policies.
- [ ] Configure secrets manager for API keys and signing secrets.
- [ ] Configure WAF, API gateway, and rate limiting.
- [ ] Configure centralized logging + monitoring + alerting.
- [ ] Enable automated backups and restoration drills.

## CI/CD and Release Safety

- [ ] Build pipeline for web, backend, and mobile artifacts.
- [ ] Run automated tests (unit, integration, e2e) before deploy.
- [ ] Use staged rollout and health checks.
- [ ] Configure rollback strategy for failed deployments.
- [ ] Gate production deploy on manual approval + quality checks.

## Stripe Billing Setup (Web)

- [ ] Create Stripe products:
  - [ ] Premium Monthly ($9.99)
  - [ ] Premium Yearly ($99.99 or final approved annual value)
- [ ] Configure recurring prices and tax behavior.
- [ ] Configure webhook endpoint for subscription lifecycle events.
- [ ] Verify handling for:
  - [ ] trial start/end
  - [ ] renewal
  - [ ] payment failure
  - [ ] cancellation
  - [ ] entitlement revocation
- [ ] Configure customer portal for self-service billing management.

## App Store / Play Store Billing Compliance

- [ ] Implement in-app purchase flow where platform policy requires it.
- [ ] Keep app store subscription IDs mapped to entitlement model.
- [ ] Ensure restore purchases path is visible and tested.
- [ ] Ensure cancel/refund messaging aligns with platform policy.

## App Store Submission Assets

- [ ] App title, subtitle, and store descriptions.
- [ ] Privacy policy and terms URLs.
- [ ] Subscription disclosure text and support URL.
- [ ] App screenshots and preview videos.
- [ ] Content moderation and safety declaration text.
- [ ] Age rating declarations and sensitive-content disclosures.

## Final Readiness Gates

- [ ] Accessibility audit complete.
- [ ] Offline mode validation complete.
- [ ] Payment edge-case tests complete.
- [ ] Security checklist complete (auth, secrets, logging, data handling).
- [ ] Legal and policy review complete.
- [ ] Final owner approval for publish action.

> Note: Actual publishing to Stripe, Google Play, and Apple App Store requires account owner permissions and cannot be completed by repository-only automation.
