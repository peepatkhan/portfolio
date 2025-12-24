# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build with Turbopack
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a **Next.js 15** portfolio site using the App Router with React 19 and Tailwind CSS 4.

### Tech Stack
- **Framework**: Next.js 15.5 with Turbopack
- **Styling**: Tailwind CSS 4 with custom CSS animations in `globals.css`
- **3D**: Three.js with React Three Fiber (@react-three/fiber, @react-three/drei) - available but not yet used
- **Fonts**: Geist Sans and Geist Mono (Google Fonts via next/font)

### Project Structure
```
src/
  app/
    layout.tsx    # Root layout with fonts and metadata
    page.tsx      # Single-page portfolio (hero, bio, socials)
    globals.css   # Tailwind imports + custom animations
public/           # Static assets (images, SVGs)
```

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Key Patterns
- Dark theme with neutral-900 backgrounds and gray text palette
- Custom fade-in animations: `.animate-fade-in`, `.animate-fade-in-up`
- Uses `next/image` for optimized images
- React Icons for social icons (FaGithub, FaLinkedin)
