import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GlossaryProvider from '@/components/GlossaryProvider';
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData';
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

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleAnalytics />
        <OrganizationSchema locale={locale} />
        <WebsiteSchema locale={locale} />
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
