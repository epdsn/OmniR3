# OmniR3 Marketing Website

A production-ready Next.js marketing website for OmniR3 - a software agency focused on building reliable, responsible, and repeatable software systems.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **SEO-friendly** with metadata optimization
- **Responsive design** for all devices
- **Static export** ready for Azure Static Web Apps

## Pages

- **Home** - Hero section with R3 principles explanation
- **Capabilities** - Comprehensive overview of services
- **How We Work** - Development methodology and process
- **About** - Mission, values, and what makes us different
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

This creates an optimized production build in the `out` directory, ready for deployment.

### Deployment

The website is configured for static export and can be deployed to Azure Static Web Apps or any static hosting service.

For Azure Static Web Apps:
1. Build configuration is already set in `next.config.ts`
2. The `staticwebapp.config.json` provides Azure-specific configuration
3. Deploy the `out` folder to Azure Static Web Apps

## Project Structure

```
OmniR3/
├── app/
│   ├── about/
│   ├── capabilities/
│   ├── contact/
│   ├── how-we-work/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Header.tsx
├── public/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Design Principles

- **No UI libraries** - Pure Tailwind CSS for full control
- **No animations** - Professional, enterprise-safe design
- **No backend** - Static site with client-side only functionality
- **Accessible** - Semantic HTML and ARIA where needed
- **Performance** - Optimized builds and minimal dependencies

## R3 Principles

The website embodies the three core principles of OmniR3:

1. **Reliable** - Built with modern, stable technologies
2. **Responsible** - Clean code, best practices, accessibility
3. **Repeatable** - Consistent patterns and reusable components

## License

Copyright © 2026 OmniR3. All rights reserved.