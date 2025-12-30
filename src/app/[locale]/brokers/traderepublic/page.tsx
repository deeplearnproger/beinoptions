import type { Metadata } from 'next';
import TradeRepublicClientPage from './TradeRepublicClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'Trade Republic Erfahrungen 2025 | Deutscher Neo-Broker mit 1€ Gebühr'
    : 'Trade Republic Review 2025 | German Neo-Broker with €1 Fee';

  const description = isGerman
    ? 'Trade Republic Test 2025: Deutschlands beliebtester mobiler Broker. 1€ pro Trade, 4% Zinsen, kostenlose ETF-Sparpläne. BaFin-reguliert, über 10.000 Aktien & ETFs.'
    : 'Trade Republic Review 2025: Germany\'s most popular mobile broker. €1 per trade, 4% interest, free ETF savings plans. BaFin regulated, over 10,000 stocks & ETFs.';

  return {
    title,
    description,
    keywords: isGerman
      ? 'Trade Republic, TradeRepublic Erfahrungen, Neo-Broker, 1 Euro Trading, ETF Sparplan, BaFin reguliert, Mobile Trading App Deutschland'
      : 'Trade Republic, TradeRepublic review, neo-broker, 1 euro trading, ETF savings plan, BaFin regulated, mobile trading app Germany',
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/traderepublic`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/traderepublic`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/traderepublic',
        'en': 'https://beinoptions.com/en/brokers/traderepublic',
      },
    },
  };
}

export default function TradeRepublicPageWrapper({ params }: Props) {
  return <TradeRepublicClientPage params={params} />;
}
