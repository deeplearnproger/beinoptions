import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title =
    locale === 'de'
      ? 'Trade Republic Erfahrungen 2025 - Test, Gebühren & Bewertung'
      : 'Trade Republic Review 2025 - Test, Fees & Rating';

  const description =
    locale === 'de'
      ? 'Trade Republic im Test: Deutschlands beliebtester mobiler Broker. ✓ Nur 1€ pro Trade ✓ 4% Zinsen ✓ BaFin-reguliert ✓ Jetzt vergleichen!'
      : 'Trade Republic review: Germany\'s most popular mobile broker. ✓ Only €1 per trade ✓ 4% interest ✓ BaFin-regulated ✓ Compare now!';

  const keywords = [
    'Trade Republic',
    'Trade Republic Erfahrungen',
    'Trade Republic Test',
    'Trade Republic Gebühren',
    'Trade Republic Broker',
    'Mobile Trading',
    'Aktien App',
    'ETF Sparplan',
    'BaFin reguliert',
    'Deutschland Broker',
  ];

  return {
    title: `${title} | BeInOptions`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${title} | BeInOptions`,
      description,
      type: 'article',
      images: [
        {
          url: '/images/brokers/traderepublic-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Trade Republic Logo und Rating',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | BeInOptions`,
      description,
    },
  };
}
