# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is **michalslepko.dev**, a personal portfolio/blog site built with **GatsbyJS 5**, **React 18**, and **TailwindCSS 3**. It is a single-package static site with no backend, no database, and no Docker. Blog content lives as MDX files in `src/content/snippets/`.

### Node.js version

The project requires **Node.js v21.6.1** (specified in `.nvmrc`). Use `nvm use` to activate the correct version before running any npm commands.

### Key commands

All standard commands are in `package.json` scripts:

- **Dev server:** `npm run dev` (Gatsby dev server on port 8000; use `-- --host 0.0.0.0` if you need external access)
- **Build:** `npm run build`
- **Format check:** `npx prettier --check "**/*.{js,jsx,ts,tsx,json,md,css}"`
- **Format fix:** `npm run format`
- **Clean cache:** `npm run clean`

### Caveats

- There are no automated tests (no test framework configured). Validation is done via `npm run build` and manual testing of the dev server.
- The contact form (`/contact`) submits to an external getform.io endpoint; it cannot be tested end-to-end without that service.
- Gatsby build emits deprecation warnings about `punycode` and `baseline-browser-mapping` — these are harmless and come from upstream dependencies.
- After `npm run clean`, the first `npm run dev` or `npm run build` will take longer as it rebuilds the cache and processes images.
