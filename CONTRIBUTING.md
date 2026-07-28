# Contributing to Zeta One Website

Thanks for your interest in improving the Zeta One website.

## Getting started

```bash
npm install
npm run dev
```

## Project conventions

- **No hardcoded content.** Editable values (links, emails, versions, copy)
  belong in `config/` or `content/`, not inline in components.
- **No duplicate UI.** Check `components/ui/` and `components/sections/`
  before creating a new component — extend or reuse what exists.
- **Strict TypeScript.** No `any`, no unused imports, no dead code.
- **Glass UI design system.** Match the existing emerald/mint/cyan glass
  aesthetic — see `config/theme.config.ts` and `tailwind.config.ts`.
- **Mobile-first.** Test at 360px, 390px, 412px, 480px, 768px, 1024px,
  1280px and 1536px before opening a PR.

## Before opening a PR

```bash
npm run lint
npm run build
```

Both must pass with no errors. See `.github/PULL_REQUEST_TEMPLATE.md` for
the full checklist.

## Reporting bugs or requesting features

Use the issue templates in `.github/ISSUE_TEMPLATE/`, or reach out via the
[Contact page](https://zetaone.qzz.io/contact).
