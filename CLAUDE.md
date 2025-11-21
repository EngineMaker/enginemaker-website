# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EngineMaker Website - An Astro-based website for EngineMaker, a share house community for engineers and startups. The site is primarily in Japanese and uses Tailwind CSS for styling.

## Development Commands

### Setup
```bash
bun i
```

### Development Server
```bash
bun dev
# or
bun start
```
Opens at http://localhost:4321

### Build & Type Check
```bash
bun build  # Runs astro check && astro build
```

### Preview Production Build
```bash
bun preview
```

## Architecture

### Tech Stack
- **Framework**: Astro 4.7.1
- **Styling**: Tailwind CSS with custom theme (tailwind.config.mjs)
- **Package Manager**: Bun
- **Language**: TypeScript

### Directory Structure

```
src/
├── components/       # Astro components (Hero, Services, Team, etc.)
│   ├── Data/        # JSON data files (team.json, articles.json)
│   └── Icons/       # Icon components
├── content/         # Content collections
│   └── house/       # House/property markdown files
├── layouts/         # Layout components (Layout.astro)
├── pages/           # Page routes
│   └── houses/[...slug].astro  # Dynamic house detail pages
└── styles/          # Global CSS
```

### Content Collections

The site uses Astro Content Collections for managing house/property data:

- **Collection**: `house` (defined in [src/content/config.ts](src/content/config.ts))
- **Schema**: Houses have name, background, arrow, image, publishDate, order, and optional link
- **Files**: Located in `src/content/house/*.md` (e.g., numazu.md, oami.md, shinjuku.md, narita.md)
- **Dynamic Pages**: Generated via `getStaticPaths()` in [src/pages/houses/[...slug].astro](src/pages/houses/[...slug].astro)

When adding new houses:
1. Create a new .md file in `src/content/house/`
2. Follow the frontmatter schema from existing houses
3. The page will be automatically generated at `/houses/{filename}`

### Custom Tailwind Theme

Custom color palette defined in [tailwind.config.mjs](tailwind.config.mjs):
- Brand color: `lime` (#B9FF66)
- Custom zinc scale (100-900)
- Custom breakpoints and Space Grotesk font family

### Page Components Architecture

The homepage ([src/pages/index.astro](src/pages/index.astro)) is composed of section components:
- Hero - Main landing section
- Services - Service offerings
- Case - Case studies/examples
- Team - Team member display (uses Data/team.json)
- Testimonial - User testimonials
- Contact - Contact form/information

All pages use the same Layout.astro wrapper which includes Navbar, Footer, and global styles.

## Deployment

- **Staging**: https://emsite-draft.mktoho.dev/
- **Auto-deploy**: Pushes to `main` branch trigger automatic deployment to staging
- **Platform**: Netlify (based on badge in README)

## Development Environment

Dev Container configuration available in `.devcontainer/`:
- Includes Astro and Tailwind CSS extensions for VSCode
- Opens development server automatically at http://localhost:4321

## Language

The site is primarily in Japanese. When adding or modifying content, maintain Japanese language usage in content files, component text, and metadata.
