# CnC website

The website of **CnC (Cops & Criminals)**, a FiveM server: Home with **Play**, **Store**, **Rules**, **Release Notes**, and the legal page.
Plain HTML, CSS and JavaScript modules, served by GitHub Pages. No build step, no backend, no secrets.

## Settings

Everything you may want to change is in [`assets/js/config.js`](assets/js/config.js) (all public values):

| Setting | What |
|---|---|
| `joinCode` | The server's `cfx.re/join` code. Play opens FiveM and joins. Empty: Play explains how to join. |
| `playerCount` | Live player count in the header. Off: the Cfx.re server list refuses calls from other sites (CORS), so it needs a small proxy first. |
| `discord` | The Discord invite. |
| `supportEmail` | Shown on the legal and thanks pages. |
| `noteLanguages` | Release Notes languages. `['en']` hides the switch; add `'he'`, `'lt'`, `'ar'` to show it. |
| `tebexToken` | The Tebex Headless **public** token. Empty: the store shows [`store/catalog.json`](store/catalog.json) and checkout opens `tebexStore`. |
| `tebexStore`, `tebexPaymentHistory` | The Tebex store and the buyers' payment history page. |

## Content

- **Release notes**: `notes/<lang>.md`, copied from the server repo's `docs/release-notes/` by `tools/publish_site.mjs` there. Owner-only lines ("Server owners: ...") are hidden on the site.
- **Rules**: [`rules/index.html`](rules/index.html).
- **Pictures**: `assets/img/` (the banner, the shield, the VIP cards).

## Run and test

```
npm install
npm run serve          # http://127.0.0.1:8765/
npm test               # Playwright: desktop + phone, Tebex mocked
```

Locally the tests use your installed Chrome; in CI (`.github/workflows/test.yml`) Playwright's own.

## Publish

Settings → Pages → *Deploy from a branch* → `main` / root. A custom domain can be added there later.

Not affiliated with or endorsed by Rockstar Games, Take-Two Interactive or Cfx.re.
