import type { Metadata } from 'next';
import DEGIROClientPage from './DEGIROClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'DEGIRO Erfahrungen 2025 | Europas führender Discount-Broker für Optionen'
    : 'DEGIRO Review 2025 | Europe\'s Leading Discount Broker for Options';

  const description = isGerman
    ? 'DEGIRO Test 2025: Niedrige Gebühren ab 0,75€ pro Optionskontrakt, 50+ Börsen weltweit, 700+ ETFs gebührenfrei. Perfekt für aktive Trader und Optionshändler. AFM/DNB reguliert.'
    : 'DEGIRO Review 2025: Low fees from €0.75 per options contract, 50+ exchanges worldwide, 700+ free ETFs. Perfect for active traders and options traders. AFM/DNB regulated.';

  const keywords = isGerman
    ? 'DEGIRO, DEGIRO Erfahrungen, DEGIRO Test, DEGIRO Optionen, DEGIRO Gebühren, Discount Broker, günstige Gebühren, Optionshandel, ETF Trading, niederländischer Broker, AFM Regulierung, europäischer Broker, weltweiter Marktzugang'
    : 'DEGIRO, DEGIRO review, DEGIRO test, DEGIRO options, DEGIRO fees, discount broker, low fees, options trading, ETF trading, Dutch broker, AFM regulation, European broker, worldwide market access';

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/degiro`,
      siteName: 'BeInOptions',
      locale: isGerman ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://beinoptions.com/${locale}/brokers/degiro`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/degiro',
        'en': 'https://beinoptions.com/en/brokers/degiro',
      },
    },
  };
}

export default function DEGIROPageWrapper() {
  return <DEGIROClientPage />;
}
