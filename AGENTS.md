# Lawn Lad Co. Project Guide

## Overview

This repository contains the Lawn Lad Co. marketing website, a responsive single-page experience for a lawn care business servicing Innes Park and the wider Bundaberg region. It is built with TanStack Start and deployed on Netlify.

## Architecture

- `src/routes/__root.tsx` defines the HTML shell, global metadata, and stylesheet loading.
- `src/routes/index.tsx` contains the home page sections, navigation, responsive menu, and quote form behavior.
- `src/styles.css` contains the complete visual system, responsive layouts, and motion styles.
- `public/__forms.html` is the static form skeleton Netlify uses to register the quote form at deploy time.
- `netlify.toml` configures the Netlify build and publish settings.

## Technology

- React 19 with TypeScript
- TanStack Start and TanStack Router
- Tailwind CSS 4 tooling with a custom CSS-led design system
- Lucide React icons
- Netlify Forms for quote requests
- Vite for local development and production builds

## Conventions

- Use PascalCase for React components and camelCase for functions and state.
- Keep page copy and repeated card data in arrays near the top of the route file.
- Use the existing CSS custom properties for brand colors and typography.
- Preserve semantic section IDs because navigation and calls to action rely on them.
- Maintain visible focus, hover, loading, success, and error states for interactive elements.
- Keep responsive behavior in the existing breakpoints unless the design requires a deliberate change.

## Form Handling

The React form posts URL-encoded data to `/__forms.html`. This path is intentional: posting to `/` in an SSR application bypasses Netlify Forms processing. Field names in `src/routes/index.tsx` and `public/__forms.html` must stay synchronized.

## Non-Obvious Decisions

The visual design uses custom CSS rather than assembling the interface entirely from utility classes. This keeps the art direction cohesive and makes the responsive and animated states easier to understand in one place. External editorial lawn photography is loaded from Unsplash, while the rest of the identity is created with typography, CSS geometry, and color.
