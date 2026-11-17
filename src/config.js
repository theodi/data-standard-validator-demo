/*
 * The standards the validator offers. Shapes and examples are fetched from
 * this repository on GitHub, so a new file works only once it is pushed. The
 * "Advanced" box on the page can swap `main` for another ref.
 *
 * No context is set here: each record names its own in `@context`, so the
 * examples work as they are and pasted records are checked the same way.
 *
 * A standard with `csvMetadata` also accepts CSV. Example URLs ending in `.csv`
 * are listed when CSV is chosen; the others when JSON is chosen.
 *
 * See https://theodi.github.io/data-standard-validator-component/usage/ for
 * every config option.
 */

const REPO = 'https://github.com/theodi/data-standard-validator-demo/blob/main'

export const config = {
  standards: [
    {
      name: 'Person',
      description: 'A person with a name, an email address and a postal address.',
      shapes: `${REPO}/shapes/person/person-shape.ttl`,
      csvMetadata: `${REPO}/shapes/person/csv-metadata.json`,
      examples: [
        { name: 'Valid person', url: `${REPO}/examples/person/valid-person.jsonld` },
        { name: 'Invalid person', url: `${REPO}/examples/person/invalid-person.jsonld` },
        { name: 'Valid person', url: `${REPO}/examples/person/valid-person.csv` },
        { name: 'Invalid person', url: `${REPO}/examples/person/invalid-person.csv` },
      ],
    },
    {
      name: 'Product',
      description: 'A product with a SKU, a price and a category.',
      shapes: `${REPO}/shapes/product/product-shape.ttl`,
      examples: [
        { name: 'Valid product', url: `${REPO}/examples/product/valid-product.jsonld` },
        { name: 'Invalid product', url: `${REPO}/examples/product/invalid-product.jsonld` },
      ],
    },
  ],
  placeholder: 'Paste a record here, or load an example.'
}
