import type { Metadata } from 'next';
import InteractiveBrokersClientPage from './InteractiveBrokersClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'Interactive Brokers Erfahrungen 2025 | Professioneller Options Broker mit niedrigsten Gebühren'
    : 'Interactive Brokers Review 2025 | Professional Options Broker with Lowest Fees';

  const description = isGerman
    ? 'Interactive Brokers Test 2025: Weltweiter Marktführer für Options Trading. 0,65€ pro Kontrakt, TWS Plattform, Smart Routing, 150+ Märkte. Für professionelle Trader.'
    : 'Interactive Brokers Review 2025: Global market leader for options trading. €0.65 per contract, TWS platform, Smart Routing, 150+ markets. For professional traders.';

  return {
    title,
    description,
    keywords: isGerman
      ? 'Interactive Brokers, Interactive Brokers Erfahrungen, IB Test, IBKR, Options Trading, TWS, Trader Workstation, günstige Options Gebühren, professioneller Broker'
      : 'Interactive Brokers, Interactive Brokers review, IB, IBKR, options trading, TWS, Trader Workstation, low options fees, professional broker',
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/interactive-brokers`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/interactive-brokers`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/interactive-brokers',
        'en': 'https://beinoptions.com/en/brokers/interactive-brokers',
      },
    },
  };
}

export default function InteractiveBrokersPageWrapper({ params }: Props) {
  return <InteractiveBrokersClientPage params={params} />;
}
