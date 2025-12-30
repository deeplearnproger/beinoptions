import type { Metadata } from 'next';
import LibertexClientPage from './LibertexClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'Libertex Erfahrungen 2025 | Zero-Spread Trading & MT4/MT5 Optionen'
    : 'Libertex Review 2025 | Zero-Spread Trading & MT4/MT5 Options';

  const description = isGerman
    ? 'Libertex Test 2025: Zero-Spreads, Options CFDs, MT4/MT5, CySEC reguliert. 40+ Auszeichnungen, 300+ Instrumente, ab 100€. Perfekt für aktive Trader mit 25+ Jahren Erfahrung.'
    : 'Libertex Review 2025: Zero spreads, Options CFDs, MT4/MT5, CySEC regulated. 40+ awards, 300+ instruments, from €100. Perfect for active traders with 25+ years of experience.';

  const keywords = isGerman
    ? 'Libertex, Libertex Erfahrungen, Libertex Test, Zero-Spread Trading, Libertex Optionen, MT4, MT5, MetaTrader, CySEC Regulierung, Options CFDs, CFD Trading, niedrige Kommission, aktive Trader, Social Trading'
    : 'Libertex, Libertex review, Libertex test, zero-spread trading, Libertex options, MT4, MT5, MetaTrader, CySEC regulation, Options CFDs, CFD trading, low commission, active traders, social trading';

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/libertex`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/libertex`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/libertex',
        'en': 'https://beinoptions.com/en/brokers/libertex',
      },
    },
  };
}

export default function LibertexPageWrapper({ params }: Props) {
  return <LibertexClientPage params={params} />;
}
