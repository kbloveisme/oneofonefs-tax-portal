# Domain Model

This model supports onboarding, learning progression, citations, comparison, and subscriptions.

## User and Identity

## `users`
- `id` (uuid, pk)
- `email` (unique)
- `display_name`
- `auth_provider` (email, google, apple, etc.)
- `created_at`, `updated_at`

## `user_profiles`
- `user_id` (fk users.id, unique)
- `default_religion_track_id` (fk religion_tracks.id)
- `level` (beginner, intermediate, advanced)
- `locale`
- `timezone`

## Religious Learning Structure

## `religion_tracks`
- `id` (uuid, pk)
- `slug` (unique)
- `name`
- `description`
- `is_active`

## `chapters`
- `id` (uuid, pk)
- `religion_track_id` (fk religion_tracks.id)
- `sequence_index`
- `title`
- `summary`

## `lessons`
- `id` (uuid, pk)
- `chapter_id` (fk chapters.id)
- `lesson_type` (beginner, storyteller, compare_support)
- `title`
- `narrative_content`
- `summary`
- `status` (draft, in_review, published, archived)
- `version`
- `published_at`

## Citation and Canonical Source Integrity

## `canonical_texts`
- `id` (uuid, pk)
- `religion_track_id` (fk religion_tracks.id)
- `title`
- `edition`
- `language`
- `storage_uri`
- `checksum_sha256`

## `lesson_citations`
- `id` (uuid, pk)
- `lesson_id` (fk lessons.id)
- `canonical_text_id` (fk canonical_texts.id)
- `reference_label` (e.g., Book/Chapter/Verse or Surah/Ayah)
- `excerpt`
- `position_index`

Enforcement rule:
- A lesson summary is publishable only when at least one citation exists in `lesson_citations`.

## Progress and Engagement

## `lesson_progress`
- `id` (uuid, pk)
- `user_id` (fk users.id)
- `lesson_id` (fk lessons.id)
- `completion_state` (not_started, in_progress, completed)
- `progress_percent`
- `last_opened_at`

## `streaks`
- `user_id` (fk users.id, pk)
- `current_streak_days`
- `longest_streak_days`
- `last_activity_date`

## Omni-Compare

## `concepts`
- `id` (uuid, pk)
- `religion_track_id` (fk religion_tracks.id)
- `term`
- `definition`
- `embedding_vector` (vector type in search/index subsystem)

## `concept_mappings`
- `id` (uuid, pk)
- `source_concept_id` (fk concepts.id)
- `target_concept_id` (fk concepts.id)
- `similarity_score` (0..1)
- `mapping_note`
- `review_status` (draft, reviewed, published)

Constraint:
- Comparison session supports `1..4` selected tracks.

## Subscriptions and Billing

## `subscription_products`
- `id` (uuid, pk)
- `provider` (stripe, app_store, play_store)
- `provider_product_id`
- `name`
- `billing_period` (monthly, yearly)
- `price_cents`
- `currency`

## `subscriptions`
- `id` (uuid, pk)
- `user_id` (fk users.id)
- `product_id` (fk subscription_products.id)
- `provider_customer_id`
- `provider_subscription_id`
- `status` (trialing, active, past_due, canceled, expired)
- `starts_at`
- `ends_at`

## Editorial and Audit

## `content_reviews`
- `id` (uuid, pk)
- `lesson_id` (fk lessons.id)
- `reviewer_user_id` (fk users.id)
- `review_type` (scholarly, religious, legal)
- `decision` (approved, changes_requested, rejected)
- `notes`
- `reviewed_at`

## `audit_logs`
- `id` (uuid, pk)
- `actor_user_id` (fk users.id)
- `action`
- `resource_type`
- `resource_id`
- `metadata_json`
- `created_at`
