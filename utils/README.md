Shared utility functions (`cn()` class merger, `formatDate()`) live in
`lib/utils.ts` alongside the other framework-facing helpers (`lib/seo.ts`,
`lib/search.ts`, `lib/env.ts`).

They are not duplicated here to avoid two sources of truth for the same logic.
