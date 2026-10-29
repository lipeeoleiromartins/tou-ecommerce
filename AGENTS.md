# AGENTS.md

- Catalog lives in `src/data/projects.ts`; `coverImage`/`description` = `null` means placeholder – UI must render `ImagePlaceholder` / `[Descrição em breve]` instead of breaking.
- Contact/social/domain values come only from `src/config/site.ts`; domain via `VITE_SITE_URL` env var so it can be set on Vercel later.
- Hosted on Vercel: `vercel.json` rewrites all paths to `index.html` for client-side routing.
- Price rules are covered by `src/data/projects.test.ts` (run `bunx vitest run`).