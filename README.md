# Zenshuii Web

Official website for **Zenshuii** – building mindful digital experiences.

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) + Prettier
- [Vercel](https://vercel.com/) for deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site.

## Scripts

- `dev`: Start local server
- `build`: Production build
- `start`: Start production server
- `lint`: Run ESLint

## Deployment

This project is deployed via **Vercel**. Pushes to the `main` branch trigger deployments automatically.

## Site icons

Use the same dark rounded square with a centred mark for every tab favicon
format. Its 48-unit corner radius on a 300-unit canvas leaves transparent corners.
Safari may display a white backing behind those corners; this is an accepted
browser-specific appearance. Keep the SVG, ICO and PNG artwork consistent.

- `public/favicon.svg` is the favicon source, including the rounded `#1c1c1c` background.
- `public/favicon.ico` contains 16, 32, and 48 px versions of that artwork.
- `public/favicon.png` and `public/favicon-square.png` are 1024 px raster copies.
- `public/apple-touch-icon.png` is an opaque 180 px square with extra logo padding
  for Apple home screens and bookmarks. Let Apple apply the corner treatment.

Icon links live in `src/app/layout.tsx`. When replacing a favicon, update every
format and bump `siteIconVersion` in `src/utils/metadata.ts` to refresh the tab
icon and sharing thumbnail URLs together. Keep the unversioned files up to date
too, for clients that discover icons automatically.

## Link previews

Use `createPageMetadata` in `src/utils/metadata.ts` for every page, including the
homepage defaults in the root layout. The helper keeps canonical URLs, Open Graph
fields and X card metadata together so page overrides retain the shared fields.
Browser titles keep the Zenshuii branding; sharing titles use the page title alone,
with the brand supplied separately through `og:site_name`.

General pages request compact X summary cards with an explicit square PNG logo
and image alt text. They omit `og:image` so clients such as Messages can use the
Apple touch icon or favicon. Each platform controls its final layout and caches.

When adding meaningful page-specific preview artwork, include its image URL,
dimensions and alt text in Open Graph metadata, plus matching X image metadata
and the appropriate card type. Add that through the shared helper: Next.js
replaces nested metadata objects rather than deeply merging them. Use a new image
URL when replacing preview artwork, then verify the deployed URL on the target
platforms.

## License

[MIT](LICENSE)
