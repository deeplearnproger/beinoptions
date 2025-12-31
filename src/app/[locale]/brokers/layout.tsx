import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title =
    locale === 'de'
      ? 'Broker-Vergleich für Optionshandel Deutschland 2025'
      : 'Options Trading Broker Comparison Germany 2025';
  const description =
    locale === 'de'
      ? 'Die besten Broker für Optionshandel in Deutschland im Vergleich. Detaillierte Tests - Echte Erfahrungen - Niedrige Gebühren - BaFin-reguliert. Interactive Brokers, DEGIRO, Trade Republic und mehr.'
      : 'Compare the best brokers for options trading in Germany. Detailed reviews - Real experiences - Low fees - BaFin-regulated. Interactive Brokers, DEGIRO, Trade Republic and more.';

  return {
    title,
    description,
    keywords: [
      'Broker Vergleich',
      'Options Broker Deutschland',
      'Trading Broker',
      'BaFin reguliert',
      'Interactive Brokers',
      'DEGIRO',
      'Trade Republic',
      'Lynx Broker',
      'Consorsbank',
      'Optionshandel Broker',
      'beste Broker Deutschland',
    ].join(', '),
    openGraph: {
      title: `${title} | BeInOptions`,
      description,
      type: 'website',
    },
  };
}

export default function BrokersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
