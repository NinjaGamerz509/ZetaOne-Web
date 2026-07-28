Card components live in `components/sections/*/` grouped by feature
(e.g. `components/sections/articles/ArticleCard.tsx`,
`components/sections/download/ApkDownloadCard.tsx`) and in
`components/ui/GlassCard.tsx` for the generic base card.

They are not duplicated here to avoid two sources of truth for the same UI.
