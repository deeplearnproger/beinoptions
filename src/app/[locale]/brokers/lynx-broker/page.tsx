import type { Metadata } from 'next';
import LynxBrokerClientPage from './LynxBrokerClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'LYNX Broker Erfahrungen 2025 | Interactive Brokers mit deutschem Service'
    : 'LYNX Broker Review 2025 | Interactive Brokers with German Service';

  const description = isGerman
    ? 'LYNX Broker Test 2025: Deutscher Partner von Interactive Brokers. TWS Plattform, 2€ pro Kontrakt, telefonischer Support, kostenlose Webinare. IBKR-Technologie mit BaFin-Regulierung.'
    : 'LYNX Broker Review 2025: German partner of Interactive Brokers. TWS platform, €2 per contract, phone support, free webinars. IBKR technology with BaFin regulation.';

  return {
    title,
    description,
    keywords: isGerman
      ? 'LYNX Broker, LYNX Erfahrungen, Interactive Brokers Deutschland, IB Partner, deutscher Support, Options Trading Deutschland, TWS, BaFin Broker'
      : 'LYNX Broker, LYNX review, Interactive Brokers Germany, IB partner, German support, options trading Germany, TWS, BaFin broker',
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/lynx-broker`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/lynx-broker`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/lynx-broker',
        'en': 'https://beinoptions.com/en/brokers/lynx-broker',
      },
    },
  };
}

export default function LynxBrokerPageWrapper({ params }: Props) {
  return <LynxBrokerClientPage params={params} />;
}
