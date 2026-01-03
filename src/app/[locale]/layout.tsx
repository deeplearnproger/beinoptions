import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GlossaryProvider from '@/components/GlossaryProvider';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = locale === 'de' ? 'Optionshandel in Deutschland' : 'Options Trading in Germany';
  const description =
    locale === 'de'
      ? 'Ihr umfassender Leitfaden für erfolgreiches Options-Trading in Deutschland. Strategien, Steuern, Broker-Vergleiche und mehr.'
      : 'Your comprehensive guide to successful options trading in Germany. Strategies, taxes, broker comparisons and more.';

  return {
    title: {
      template: '%s | BeInOptions',
      default: title,
    },
    description,
    applicationName: 'BeInOptions',
    referrer: 'origin-when-cross-origin',
    keywords: [
      // Brand variations
      'BeInOptions', 'Be In Options', 'beinoptions', 'BeIn Options', 'Be-In-Options',

      // German - Basics & Learning
      'Optionshandel', 'Optionen handeln', 'Optionen lernen', 'Optionen für Anfänger',
      'Optionen einfach erklärt', 'Was sind Optionen', 'Optionshandel lernen',
      'Optionen Trading Kurs', 'Optionen Tutorial', 'Optionen Grundlagen',
      'Aktienoptionen', 'Aktienoptionen handeln', 'Optionsscheine vs Optionen',

      // German - Call & Put
      'Call Option', 'Put Option', 'Call Option erklärt', 'Put Option erklärt',
      'Call Option kaufen', 'Put Option kaufen', 'Call vs Put',
      'Long Call', 'Long Put', 'Short Call', 'Short Put',

      // German - Strategies
      'Optionsstrategien', 'Covered Call', 'Covered Call Strategie',
      'Iron Condor', 'Iron Condor Strategie', 'Cash Secured Put',
      'Butterfly Spread', 'Bull Call Spread', 'Bear Put Spread',
      'Straddle Strategie', 'Strangle Strategie', 'Wheel Strategie',
      'Credit Spread', 'Debit Spread', 'Vertical Spread',

      // German - Brokers
      'Options Broker Deutschland', 'beste Broker für Optionen',
      'Interactive Brokers Deutschland', 'Interactive Brokers Erfahrungen',
      'LYNX Broker', 'LYNX Broker Optionen', 'LYNX Broker Erfahrungen',
      'Tastyworks Deutschland', 'DEGIRO Optionen', 'Consorsbank Optionen',
      'Optionen Broker Vergleich', 'günstigster Options Broker',

      // German - Taxes & Regulation
      'Optionen Steuern Deutschland', 'Optionshandel Steuern',
      'Optionen Kapitalertragsteuer', 'Optionen Verlustverrechnung',
      'BaFin Optionen', 'Optionen Regulierung Deutschland',

      // German - Greeks & Analysis
      'Options Greeks', 'Delta Gamma Theta Vega', 'implizite Volatilität',
      'IV Rank', 'IV Percentile', 'Volatilität berechnen',
      'Options Delta erklärt', 'Options Theta erklärt',
      'Zeitwertverfall', 'Options Prämie',

      // German - Tools & Calculators
      'Options Rechner', 'Optionen Gewinn berechnen', 'Payoff Diagramm',
      'Options Preis berechnen', 'Break Even Optionen',
      'Options Profit Calculator', 'P&L Rechner Optionen',

      // German - Risk & Money Management
      'Optionen Risiko', 'Optionen Risikomanagement', 'Optionen Margin',
      'Optionen Assignment', 'Optionen ausüben', 'Optionen rollen',
      'Optionen schließen', 'Optionen Verlust begrenzen',

      // German - Advanced
      'LEAPS Optionen', '0DTE Optionen', 'Zero Day Options',
      'Wochenoptionen', 'Monatsoptionen', 'Quartalsoptionen',
      'DAX Optionen', 'Euro Stoxx Optionen', 'Index Optionen',
      'Bitcoin Optionen', 'Krypto Optionen', 'Crypto Options',

      // English - Basics & Learning
      'options trading', 'learn options trading', 'options for beginners',
      'options trading course', 'options tutorial', 'options basics',
      'what are options', 'how to trade options', 'options explained simply',
      'stock options trading', 'equity options', 'options vs stocks',

      // English - Call & Put
      'call option', 'put option', 'call option explained', 'put option explained',
      'buying call options', 'buying put options', 'call vs put options',
      'long call', 'long put', 'short call', 'short put',
      'in the money', 'out of the money', 'at the money',

      // English - Strategies
      'options strategies', 'best options strategies', 'options income strategies',
      'covered call', 'covered call strategy', 'covered call example',
      'iron condor', 'iron condor strategy', 'iron condor explained',
      'cash secured put', 'wheel strategy', 'poor mans covered call',
      'butterfly spread', 'bull call spread', 'bear put spread',
      'straddle strategy', 'strangle strategy', 'calendar spread',
      'credit spread', 'debit spread', 'vertical spread',
      'iron butterfly', 'jade lizard', 'broken wing butterfly',

      // English - Brokers
      'options broker', 'best options broker', 'options broker Europe',
      'Interactive Brokers options', 'Interactive Brokers review',
      'LYNX broker options', 'Tastyworks Europe', 'options broker comparison',
      'cheapest options broker', 'low fee options broker',

      // English - Greeks & Analysis
      'options Greeks', 'options Greeks explained', 'delta gamma theta vega',
      'implied volatility', 'IV rank', 'IV percentile', 'historical volatility',
      'options delta', 'options theta', 'options gamma', 'options vega',
      'theta decay', 'time decay options', 'options premium',

      // English - Tools & Calculators
      'options calculator', 'options profit calculator', 'options payoff calculator',
      'options pricing calculator', 'break even calculator options',
      'P&L calculator options', 'options analyzer',

      // English - Risk & Advanced
      'options risk management', 'options margin', 'options assignment',
      'rolling options', 'closing options', 'options expiration',
      'LEAPS options', '0DTE options', 'zero day to expiration',
      'weekly options', 'monthly options', 'quarterly options',
      'SPX options', 'SPY options', 'index options trading',
      'Bitcoin options', 'crypto options trading', 'Deribit options',

      // English - Taxes
      'options taxes Germany', 'options taxation Europe',
      'capital gains tax options', 'options tax reporting',
    ],
    authors: [{ name: 'BeInOptions' }],
    creator: 'BeInOptions',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://beinoptions.com'),
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.ico',
      apple: '/favicon.png',
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: 'https://beinoptions.com',
      siteName: 'BeInOptions',
      title: locale === 'de' ? 'Optionshandel in Deutschland' : 'Options Trading in Germany',
      description: locale === 'de'
        ? 'Umfassender Leitfaden für Options-Trading: Strategien, Broker-Vergleiche, Steuern und Regulierung in Deutschland.'
        : 'Comprehensive guide to options trading: Strategies, broker comparisons, taxes and regulation in Germany.',
      images: [
        {
          url: 'https://beinoptions.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'BeInOptions - Options Trading Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'de' ? 'Optionshandel in Deutschland' : 'Options Trading in Germany',
      description: locale === 'de'
        ? 'Umfassender Leitfaden für Options-Trading'
        : 'Comprehensive guide to options trading',
      images: ['https://beinoptions.com/og-image.png'],
    },
    alternates: {
      canonical: `https://beinoptions.com/${locale}`,
      languages: {
        'de': 'https://beinoptions.com/de',
        'en': 'https://beinoptions.com/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BeInOptions',
    alternateName: ['Be In Options', 'beinoptions', 'BeIn Options', 'Be-In-Options'],
    url: 'https://beinoptions.com',
    logo: 'https://beinoptions.com/logo.png',
    description:
      locale === 'de'
        ? 'Ihr umfassender Leitfaden für erfolgreiches Options-Trading in Deutschland. Strategien, Steuern, Broker und mehr.'
        : 'Your comprehensive guide to successful options trading in Germany. Strategies, taxes, brokers and more.',
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BeInOptions',
    alternateName: ['Be In Options', 'beinoptions', 'BeIn Options'],
    url: 'https://beinoptions.com',
    description:
      locale === 'de'
        ? 'Ihr umfassender Leitfaden für erfolgreiches Options-Trading in Deutschland.'
        : 'Your comprehensive guide to successful options trading in Germany.',
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://beinoptions.com/{locale}/search?q={search_term_string}'.replace('{locale}', locale),
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <GlossaryProvider />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
