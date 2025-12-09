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
      'Optionshandel',
      'Options Trading',
      'Deutschland',
      'Germany',
      'BaFin',
      'Broker',
      'Steuern',
      'Taxes',
      'Call Option',
      'Put Option',
      'Trading Strategien',
      'Options Strategies',
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
        { url: '/favicon.png', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
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
    url: 'https://beinoptions.com',
    description:
      locale === 'de'
        ? 'Ihr umfassender Leitfaden für erfolgreiches Options-Trading in Deutschland.'
        : 'Your comprehensive guide to successful options trading in Germany.',
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
  };

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
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
