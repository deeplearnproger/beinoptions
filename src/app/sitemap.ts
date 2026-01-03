import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beinoptions.com';
  const currentDate = new Date();

  // Define all your routes
  // Note: /privacy, /impressum, /disclaimer are excluded (they have noindex)
  const routes = [
    '',
    '/basics',
    '/strategies',
    '/risks',
    '/regulation',
    '/brokers',
    '/taxes',
    '/glossary',
    '/tutorials',
    '/faq',
    '/blog',
    '/news',
    '/about',
    // Strategy and learning pages
    '/greeks-explained',
    '/options-beginners-guide',
    '/options-mistakes',
    '/options-assignment',
    '/options-chain-guide',
    '/covered-call-strategy',
    '/iron-condor-strategy',
    '/cash-secured-put',
    '/long-call-put',
    '/spreads-guide',
    '/butterfly-strategy',
    '/paper-trading',
    '/trading-journal',
    '/risk-management',
    '/iv-guide',
    '/learning-path',
    '/crypto-options',
    // Tools
    '/tools',
    '/tools/payoff',
    '/tools/pl',
    '/tools/iv',
  ];

  // Broker pages
  const brokerPages = [
    '/brokers/degiro',
    '/brokers/interactive-brokers',
    '/brokers/libertex',
    '/brokers/lynx-broker',
    '/brokers/consorsbank',
    '/brokers/traderepublic',
    '/brokers/avatrade',
    '/brokers/plus500',
    '/brokers/trading212',
  ];

  // Blog posts
  const blogPosts = [
    '/blog/put-vs-call-optionen',
    '/blog/options-trading-guide',
    '/blog/options-cfds-teil-1',
    '/blog/options-cfds-teil-2',
    '/blog/options-cfds-teil-3',
    '/blog/zero-day-options-0dte',
    '/blog/cboe-magnificent-10-optionen',
    '/blog/optionen-einnahmen-strategien',
    '/blog/bitcoin-optionen-volatilitaet',
    '/blog/fed-zinssenkung-optionen',
    '/blog/binary-options-scam',
    '/blog/options-explained-simply',
    '/blog/dax-options-q1-2025',
    '/blog/bafin-regulations-2025',
    '/blog/understanding-the-greeks',
    '/blog/covered-call-step-by-step',
    '/blog/understanding-using-volatility',
    '/blog/one-year-trader-interview',
  ];

  // News articles
  const newsArticles = [
    '/news/bitcoin-28-5b-deribit-options-verfall',
    '/news/binance-eth-options-income-strategien',
    '/news/eu-ukraine-kredit-anleihen',
    '/news/deribit-btc-options-rekord-oi',
    '/news/maerkte-europa-thanksgiving-deutsche-boerse',
    '/news/btc-eth-options-verfall-4-3b',
    '/news/europaeische-maerkte-deutsche-boerse',
    '/news/usa-proxy-advisors-aufsicht',
    '/news/coinbase-deribit-akquisition',
    '/news/cme-bitcoin-options-institutionell',
    '/news/ecb-stresstest-banken-geopolitik',
    '/news/trump-accounts-deutsche-rentenpolitik',
  ];

  const locales = ['de', 'en'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  locales.forEach((locale) => {
    // Main routes
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route === '/brokers' ? 0.9 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });

    // Broker pages
    brokerPages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    });

    // Blog posts
    blogPosts.forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${post}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            de: `${baseUrl}/de${post}`,
            en: `${baseUrl}/en${post}`,
          },
        },
      });
    });

    // News articles
    newsArticles.forEach((article) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${article}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
          languages: {
            de: `${baseUrl}/de${article}`,
            en: `${baseUrl}/en${article}`,
          },
        },
      });
    });
  });

  return sitemap;
}
