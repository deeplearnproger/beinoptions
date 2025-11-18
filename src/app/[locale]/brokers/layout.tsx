import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title =
    locale === 'de'
      ? 'Broker-Vergleich für Optionshandel 2025'
      : 'Options Trading Broker Comparison 2025';
  const description =
    locale === 'de'
      ? 'Vergleichen Sie die besten Broker für Optionshandel in Deutschland. Detaillierte Tests, Gebühren, Erfahrungen und mehr.'
      : 'Compare the best brokers for options trading in Germany. Detailed reviews, fees, experiences and more.';

  return {
    title,
    description,
    keywords: [
      'Broker Vergleich',
      'Options Broker',
      'Trading Broker',
      'Deutschland',
      'BaFin reguliert',
      'Optionshandel Broker',
      'Interactive Brokers',
      'DEGIRO',
      'Trade Republic',
    ],
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
