# OmniR3 Website (Astro)

A static Astro marketing website for OmniR3, redesigned with an editorial, premium aesthetic inspired by entityo.com.

## Stack

- Astro 5
- TypeScript
- Custom CSS (no Tailwind dependency)

## Routes

- /
- /capabilities
- /how-we-work
- /insights
- /about
- /contact

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build production output:

```bash
npm run build
```

4. Preview production output:

```bash
npm run preview
```

## Project Structure

```
src/
	components/
	layouts/
	pages/
	styles/
astro.config.mjs
```

## Notes

- The contact form is static HTML and can be wired to your preferred backend or form endpoint.
- The site is configured for static output and works with static hosting targets.

## Production Checklist

- Confirm final production domain in astro.config.mjs site value.
- Review page titles and descriptions for final marketing copy.
- Replace placeholder contact details with real company values.
- Validate robots.txt and sitemap.xml use the live domain.
- Run npm run build and verify output in dist.
- Smoke test all routes and links in a deployed preview.
