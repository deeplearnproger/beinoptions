# BeInOptions

A bilingual (German/English) educational platform about options trading, built with Next.js 14.

## Live Demo

[https://beinoption.de](https://beinoption.de)

## Features

- **Bilingual**: Full German and English support with next-intl
- **Educational Content**: Comprehensive guides on options trading basics, strategies, and risk management
- **Options Tools**: Interactive calculators for implied volatility, payoff diagrams, and P&L simulation
- **Broker Comparison**: Detailed reviews of options brokers available in Germany
- **News Section**: Latest financial market news and analysis
- **SEO Optimized**: Schema.org markup, sitemap, and meta tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000/de](http://localhost:3000/de) to view the German version.

## Project Structure

```
src/
├── app/[locale]/       # Internationalized routes
│   ├── page.tsx        # Home page
│   ├── basics/         # Options basics
│   ├── strategies/     # Trading strategies
│   ├── brokers/        # Broker comparison
│   ├── tools/          # Options calculators
│   ├── news/           # Financial news
│   └── blog/           # Educational articles
├── components/         # React components
├── lib/               # Utilities and helpers
└── messages/          # i18n translations (de.json, en.json)
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://beinoption.de
```

## License

All rights reserved.

## Author

BeInOptions Team
