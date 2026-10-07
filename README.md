# data-standard-validator-demo

A demo page for the [`<data-standard-validator>`](https://github.com/theodi/data-standard-validator-component)
web component. It checks JSON and JSON-LD records against SHACL shapes, in the browser.

**Live:** <https://theodi.github.io/data-standard-validator-demo/>

**Documentation:** <https://theodi.github.io/data-standard-validator-component/>

## Run locally

Requires Node 22 or later.

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # writes dist/
```

Pushes to `main` deploy to GitHub Pages through `.github/workflows/pages.yml`.

## What's here

| Path | Contents |
| --- | --- |
| `index.html`, `src/site.css` | The page: header, footer and styles |
| `src/config.js` | The standards the validator offers |
| `shapes/<name>/` | A SHACL shape (`*-shape.ttl`) and its JSON-LD `context.jsonld` |
| `examples/<name>/` | A valid and an invalid example record |

## Add a standard

1. Add `shapes/<name>/<name>-shape.ttl` and `shapes/<name>/context.jsonld`.
2. Add example records under `examples/<name>/`.
3. Add an entry to `standards` in `src/config.js`.

The config points at this repository's files on GitHub (`blob/main`), so new
files appear on the page only after they are pushed to `main`.
