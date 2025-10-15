# Mountain Yolks Website

A modern, responsive website for Mountain Yolks - Premium healthy eggs from the mountains.

Built with [Next.js 15](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

## Features

✨ **Modern Design**
- Black background with white text and orange/yellow accents
- Smooth animations with Framer Motion
- Fully responsive across all devices
- Beautiful egg-themed loading animations

🎨 **Brand Identity**
- Consistent typography and spacing
- Reusable button components
- Professional card layouts
- Accessible design with proper focus states

📄 **Pages**
- **Home**: Hero section with mountain background image
- **About**: Company story, values, and commitment
- **Products**: Product showcase with pricing
- **Stockists**: Store locations with contact details
- **Contact**: Fully functional contact form with Formspree

🚀 **Tech Stack**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Icons
- Headless UI

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Topper25-design/mountain-yolks-site.git
cd mountain-yolks-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (for contact form):
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Formspree Form ID:
```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
```

See [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md) for detailed instructions.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup

The contact form uses Formspree for form submissions. Follow these steps:

1. Create a free account at [https://formspree.io/](https://formspree.io/)
2. Create a new form and get your Form ID
3. Add it to `.env.local` or directly in `app/contact/page.tsx`

For detailed setup instructions, see [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md).

## Project Structure

```
mountain-yolks-site/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── products/            # Products page
│   ├── stockists/           # Stockists page
│   ├── demo-loading/        # Loading animations demo
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   ├── loading.tsx          # Loading state
│   └── globals.css          # Global styles & utilities
├── components/              # Reusable components
│   ├── Button.tsx           # Reusable button component
│   ├── Header.tsx           # Site header with navigation
│   ├── Footer.tsx           # Site footer
│   ├── Loading.tsx          # Loading animation component
│   ├── EggSpinner.tsx       # Egg spinner animation
│   └── PageLoader.tsx       # Full-page loader
├── public/                  # Static assets
│   ├── Mountain Yolks Logo.png
│   ├── Mountain yolks hero image.jpg
│   └── docs/
└── STYLE_GUIDE.md          # Design system documentation
```

## Development

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file
3. Use the Button component and consistent spacing classes
4. Update Header and Footer navigation

### Style Guide

See [STYLE_GUIDE.md](./STYLE_GUIDE.md) for:
- Brand colors
- Typography system
- Button variants and sizes
- Spacing utilities
- Component patterns

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID`
4. Deploy!

### Environment Variables for Production

Set these in your hosting platform:
```
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_id
```

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any platform supporting Next.js

## Documentation

- [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md) - Contact form setup
- [STYLE_GUIDE.md](./STYLE_GUIDE.md) - Design system & components

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

This project is for Mountain Yolks. All rights reserved.
