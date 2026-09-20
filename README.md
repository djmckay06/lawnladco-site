# Lawn Lad Co.

A polished, responsive marketing website for Lawn Lad Co., a local lawn maintenance, turf care, renovation, and equipment-hire business serving Innes Park and the Bundaberg region.

## Key Features

- Service overview for maintenance, care, and lawn renovations
- Three clearly presented recurring service packages
- Professional lawn equipment hire pricing
- Mobile-friendly navigation and responsive layouts
- Accessible interaction states and reduced-motion support
- Working quote request form powered by Netlify Forms
- Search-friendly page title and description metadata

## Technology

- TanStack Start
- React 19 and TypeScript
- TanStack Router
- Tailwind CSS 4 tooling and custom CSS
- Lucide React icons
- Netlify Forms
- Vite

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The app is available at the URL printed by Vite. Netlify Forms submissions are registered and processed after deployment to Netlify; use a deploy preview to test a real submission.

## Project Structure

```text
public/__forms.html      Netlify form registration skeleton
src/routes/__root.tsx   Root document and metadata
src/routes/index.tsx    Main landing page and quote form behavior
src/styles.css          Brand system, layouts, responsive styles, motion
```

## Deployment

The included `netlify.toml` configures the site for Netlify. Pushing the project through the configured Netlify workflow installs dependencies, builds the TanStack Start app, and enables form handling.
