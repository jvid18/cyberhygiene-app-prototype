# Cyberhygiene Platform - Educational Prototype

Educational web platform designed to improve cyberhygiene skills in Colombian university students. Addresses three critical digital security practices: secure password management, phishing identification, and safe browsing on public Wi-Fi networks.

## Features

- Interactive modular courses with persistent progress tracking
- Educational blog with cybersecurity articles
- Gamification through interactive quizzes with immediate feedback
- Responsive design optimized for mobile and desktop
- Dark theme with custom color palette (blue/green)

## Getting Started

### Requirements

- Node.js 18+
- pnpm (recommended) or npm

### Development

```bash
pnpm install
pnpm start
```

### Production

```bash
pnpm build
pnpm preview
```

## Tech Stack

- **Framework**: TanStack Start + React 19.2
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS 4.0 with OKLCH variables
- **Content**: @content-collections for markdown
- **Build**: Vite 7.1 with React Compiler
- **Linting**: Biome

## Scripts

```bash
pnpm lint
pnpm format
pnpm check
pnpm test
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   └── course/
├── routes/
│   ├── blog/
│   ├── curso/
│   └── __root.tsx
├── content/
│   └── blog/
├── data/
└── hooks/
```

## Adding New Course

1. Create data file in `src/data/{name}-course.ts`
2. Define modules with theory, tips, examples and quizzes
3. Create route in `src/routes/curso/{name}.tsx`
4. Add card in `src/routes/cursos.tsx`

Progress tracking with localStorage works automatically.

## Adding Blog Posts

1. Create markdown file in `src/content/blog/`
2. Include frontmatter with title, description, date, author, tags
3. @content-collections will process content automatically
4. External links open in new tab

## Links

- [TanStack Router](https://tanstack.com/router)
- [TanStack Start](https://tanstack.com/start)
- [Tailwind CSS](https://tailwindcss.com/)
- [Content Collections](https://www.content-collections.dev/)
