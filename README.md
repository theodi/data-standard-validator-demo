# data-standard-validator Demo

Check JSON and JSON-LD records against SHACL shapes, entirely in your browser.
This is a demo of the reusable [`<data-standard-validator>`](https://github.com/theodi/data-standard-validator-component)
web component.

**Live:** <https://theodi.github.io/data-standard-validator-demo/>

**Component documentation:** <https://theodi.github.io/data-standard-validator-component/>

## What's here

This project is a thin web application around the
[data-standard-validator component](https://theodi.github.io/data-standard-validator-component/).
The component does the real work: choosing a standard, loading examples,
editing records, validating them and explaining the results. This repository
adds only:

| Path | Contents |
| --- | --- |
| `index.html`, `src/site.css` | The page around the component: header, footer and styles |
| `src/config.js` | The standards offered on the page, passed to the component as its config |
| `shapes/<name>/` | A SHACL shape (`*-shape.ttl`) and its JSON-LD context (`context.jsonld`) |
| `examples/<name>/` | A valid and an invalid example record for each shape |

To build your own validator page, copy this pattern and swap in your own
standards and styling.

## Link to an example

Query parameters in the URL can open the page with a standard picked and an
example already loaded. For example, this link opens the Product standard with
the invalid product record in the editor, already validated:

<https://theodi.github.io/data-standard-validator-demo/?shape=https://github.com/theodi/data-standard-validator-demo/blob/main/shapes/product/product-shape.ttl&example=https://github.com/theodi/data-standard-validator-demo/blob/main/examples/product/invalid-product.jsonld>

| Parameter | Effect |
| --- | --- |
| `shape` | Picks the standard that uses this shape file. Repeat `shape=` for a standard with several shape files. |
| `context` | Picks the standard that uses this JSON-LD context. |
| `example` | Loads this record into the editor and validates it straight away. On its own, it picks the standard that lists it. A record that is not in `src/config.js` is still loaded. |

- GitHub page links (`blob/...`) and raw links count as the same file.
- A shape or context link at another ref, such as `blob/v1.0.0/...`, picks the
  same standard and sets the shapes version to that ref.
- Relative URLs resolve against the page.
- Encode any URL that contains `&` or `#` with `encodeURIComponent`.

See [Linking to a standard](https://theodi.github.io/data-standard-validator-component/usage/#linking-to-a-standard)
in the component documentation for the details.

## Run locally

Requires Node 22 or later.

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # writes dist/
```

Every push to `main` deploys to GitHub Pages through `.github/workflows/pages.yml`.

## Add a standard

1. Add `shapes/<name>/<name>-shape.ttl` and `shapes/<name>/context.jsonld`.
2. Add example records under `examples/<name>/`.
3. Add an entry to `standards` in `src/config.js`.

The page reads shapes and examples from this repository on GitHub, so a new
standard appears only after it is pushed to `main`.

## License

Licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
