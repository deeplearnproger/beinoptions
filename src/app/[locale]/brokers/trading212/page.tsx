import type { Metadata } from 'next';
import Trading212ClientPage from './Trading212ClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'Trading 212 Erfahrungen 2025 | Kostenloses Trading & CFDs'
    : 'Trading 212 Review 2025 | Commission-Free Trading & CFDs';

  const description = isGerman
    ? 'Trading 212 Test 2025: 0€ Kommission, nur 1€ Mindesteinlage, preisgekrönte App. CFDs auf Aktien, ETFs, Forex. FCA-reguliert, deutschsprachiger Support.'
    : 'Trading 212 Review 2025: €0 commission, only €1 minimum deposit, award-winning app. CFDs on stocks, ETFs, forex. FCA regulated, German support.';

  return {
    title,
    description,
    keywords: isGerman
      ? 'Trading 212, Trading212 Erfahrungen, CFD Trading, kostenloses Trading, mobile Trading App, Fractional Shares, FCA Broker'
      : 'Trading 212, Trading212 review, CFD trading, commission-free trading, mobile trading app, fractional shares, FCA broker',
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/trading212`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/trading212`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/trading212',
        'en': 'https://beinoptions.com/en/brokers/trading212',
      },
    },
  };
}

export default function Trading212PageWrapper({ params }: Props) {
  return <Trading212ClientPage params={params} />;
}
