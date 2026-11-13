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

Use the same opaque dark square for every favicon format. Transparent corners can
receive a contrasting backing in Safari. Browser-specific icon selection varies
between Safari releases, so keep the SVG and ICO artwork consistent.

- `public/favicon.svg` is the favicon source, including the `#1c1c1c` background.
- `public/favicon.ico` contains 16, 32, and 48 px versions of that artwork.
- `public/favicon.png` and `public/favicon-square.png` are 1024 px raster copies.
- `public/apple-touch-icon.png` is an opaque 180 px square with extra logo padding
  for Apple home screens and bookmarks.

Icon links live in `src/app/layout.tsx`. When replacing a favicon, update both
formats and bump their URL version there to help refresh browser caches. Keep the
unversioned files up to date too, for clients that discover icons automatically.

## License

[MIT](LICENSE)
