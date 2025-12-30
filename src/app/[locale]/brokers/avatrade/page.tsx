import type { Metadata } from 'next';
import AvaTradeClientPage from './AvaTradeClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'AvaTrade Erfahrungen 2025 | Options CFDs & Forex Trading'
    : 'AvaTrade Review 2025 | Options CFDs & Forex Trading';

  const description = isGerman
    ? 'AvaTrade im Test 2025: Multi-regulierter Broker mit AvaOptions Plattform, MT4/MT5, Copy Trading. Mindesteinlage 100€, deutschsprachiger Support.'
    : 'AvaTrade Review 2025: Multi-regulated broker with AvaOptions platform, MT4/MT5, Copy Trading. €100 minimum deposit, German support.';

  return {
    title,
    description,
    keywords: isGerman
      ? 'AvaTrade, AvaTrade Erfahrungen, AvaTrade Test, AvaOptions, Options CFDs, Forex Broker, MT4, MT5, CFD Trading Deutschland'
      : 'AvaTrade, AvaTrade review, AvaOptions, Options CFDs, Forex broker, MT4, MT5, CFD trading Germany',
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/avatrade`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/avatrade`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/avatrade',
        'en': 'https://beinoptions.com/en/brokers/avatrade',
      },
    },
  };
}

export default function AvaTradePageWrapper({ params }: Props) {
  return <AvaTradeClientPage params={params} />;
}
