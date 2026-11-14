# Zenshuii Web

Official website for **Zenshuii**, built with Next.js, TypeScript and Tailwind CSS.

## Development

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Commands

- `npm run build` — create a production build.
- `npm run start` — serve the production build.
- `npx eslint .` — run lint checks.

## Deployment

Hosted on Vercel. To deploy, draft a new release in GitHub.

## Metadata and assets

Use `createPageMetadata` in `src/utils/metadata.ts` for page titles, descriptions
and sharing metadata. Icon links are configured in `src/app/layout.tsx`.

- `public/favicon.svg` — favicon source; keep the ICO and PNG exports in sync.
- `public/apple-touch-icon.png` — 180 × 180 Apple touch icon.
- `public/social-thumbnail-v1.png` — 256 × 256 sharing thumbnail.

Export artwork from the SVG, keeping Apple and sharing backgrounds opaque.
Increment `siteIconVersion` when icons change. For updated sharing artwork, use a
new filename and update its URL in the metadata helper.

## License

[MIT](LICENSE)
