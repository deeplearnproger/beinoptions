import type { Metadata } from 'next';
import Plus500ClientPage from './Plus500ClientPage';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isGerman = locale === 'de';

  const title = isGerman
    ? 'Plus500 Erfahrungen 2025 | LSE-notierter CFD-Broker mit Options CFDs'
    : 'Plus500 Review 2025 | LSE-Listed CFD Broker with Options CFDs';

  const description = isGerman
    ? 'Plus500 Test 2025: Börsennotierter CFD-Broker, keine Kommissionen, Options CFDs verfügbar. Einfache Plattform, FCA reguliert, preisgekrönte Mobile App. Perfekt für Einsteiger.'
    : 'Plus500 Review 2025: Publicly traded CFD broker, no commissions, Options CFDs available. Simple platform, FCA regulated, award-winning mobile app. Perfect for beginners.';

  const keywords = isGerman
    ? 'Plus500, Plus500 Erfahrungen, Plus500 Test, Plus500 CFD, Plus500 Optionen, CFD Broker, Options CFDs, LSE gelistet, FCA Regulierung, keine Kommissionen, Mobile Trading, einfache Plattform, Anfänger Trading'
    : 'Plus500, Plus500 review, Plus500 test, Plus500 CFD, Plus500 options, CFD broker, Options CFDs, LSE listed, FCA regulation, no commissions, mobile trading, simple platform, beginner trading';

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://beinoptions.com/${locale}/brokers/plus500`,
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
      canonical: `https://beinoptions.com/${locale}/brokers/plus500`,
      languages: {
        'de': 'https://beinoptions.com/de/brokers/plus500',
        'en': 'https://beinoptions.com/en/brokers/plus500',
      },
    },
  };
}

export default function Plus500PageWrapper({ params }: Props) {
  return <Plus500ClientPage params={params} />;
}
