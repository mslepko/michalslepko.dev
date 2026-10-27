# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is **michalslepko.dev**, a personal portfolio/blog site built with **Astro 7**, **React 18** (interactive islands only) and **TailwindCSS 3**. It is a single-package static site with no backend, no database, and no Docker. Blog content lives as MDX files in `src/content/snippets/` and is loaded through the `snippets` content collection defined in `src/content.config.js`.

Pages and static components are `.astro` files. React (`.jsx`) is only used for the interactive parts, hydrated with `client:*` directives: the theme toggle, the mobile menu (`react-burger-menu`), the typed hero (`react-typed`) and the contact form.

### Node.js version

The project requires **Node.js 24** (specified in `.nvmrc`; Astro 7 needs Node >= 22.23.4). Use `nvm use` to activate the correct version before running any npm commands.

### Key commands

All standard commands are in `package.json` scripts:

- **Dev server:** `npm run dev` (Astro dev server on port 4321; use `-- --host 0.0.0.0` if you need external access)
- **Build:** `npm run build` (outputs to `dist/`)
- **Preview build:** `npm run preview`
- **Format check:** `npx prettier --check "**/*.{js,jsx,mjs,ts,tsx,json,md,css,astro}"`
- **Format fix:** `npm run format`
- **Clean cache:** `npm run clean`

### Caveats

- There are no automated tests (no test framework configured). Validation is done via `npm run build` and manual testing of the dev server.
- The contact form (`/contact`) submits to an external getform.io endpoint; it cannot be tested end-to-end without that service.
- Snippet URLs are derived from the file path (`/snippets/<file-or-folder-name>/`); a `slug` in frontmatter is ignored on purpose to keep the old Gatsby URLs.
- Markdown smart punctuation is disabled in `astro.config.mjs` so quotes in snippets stay copy-pasteable.
- The site deploys on Netlify; `netlify.toml` sets the build command and the `dist` publish directory.
