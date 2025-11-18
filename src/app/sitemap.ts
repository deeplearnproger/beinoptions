import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beinoptions.com';
  const currentDate = new Date();

  // Define all your routes
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
    '/privacy',
    '/impressum',
    '/disclaimer',
  ];

  // Broker pages
  const brokerPages = [
    '/brokers/degiro',
    '/brokers/interactive-brokers',
    '/brokers/libertex',
    '/brokers/lynx-broker',
    '/brokers/consorsbank',
    '/brokers/traderepublic',
  ];

  // Blog posts
  const blogPosts = [
    '/blog/put-vs-call-optionen',
    '/blog/options-trading-guide',
    '/blog/options-cfds-teil-1',
    '/blog/options-cfds-teil-2',
    '/blog/options-cfds-teil-3',
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
  });

  return sitemap;
}
