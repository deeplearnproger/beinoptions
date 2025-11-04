import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Optionshandel in Deutschland' : 'Options Trading in Germany',
    description: locale === 'de'
      ? 'Ihr umfassender Leitfaden für erfolgreiches Options-Trading in Deutschland. Strategien, Steuern, Broker und mehr.'
      : 'Your comprehensive guide to successful options trading in Germany. Strategies, taxes, brokers and more.',
    keywords: locale === 'de'
      ? ['Optionshandel', 'Optionen', 'Trading', 'Deutschland', 'BaFin', 'Broker', 'Steuern']
      : ['options trading', 'options', 'trading', 'Germany', 'BaFin', 'broker', 'taxes'],
  });
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');

  const featuredArticles = [
    {
      title: locale === 'de' ? 'Grundlagen des Optionshandels' : 'Options Trading Basics',
      description: locale === 'de'
        ? 'Lernen Sie die Grundlagen: Was sind Optionen, Calls, Puts und wie funktionieren sie?'
        : 'Learn the basics: What are options, calls, puts and how do they work?',
      href: `/${locale}/basics`,
      category: tNav('basics'),
      image: '📚',
    },
    {
      title: locale === 'de' ? 'Die besten Optionsstrategien' : 'Best Options Strategies',
      description: locale === 'de'
        ? 'Von Covered Calls bis Iron Condor - die wichtigsten Strategien im Überblick.'
        : 'From covered calls to iron condor - the most important strategies at a glance.',
      href: `/${locale}/strategies`,
      category: tNav('strategies'),
      image: '📊',
    },
    {
      title: locale === 'de' ? 'Broker-Vergleich Deutschland' : 'Broker Comparison Germany',
      description: locale === 'de'
        ? 'Die besten Broker für Optionshandel in Deutschland im Vergleich.'
        : 'The best brokers for options trading in Germany compared.',
      href: `/${locale}/brokers`,
      category: tNav('brokers'),
      image: '🏦',
    },
    {
      title: locale === 'de' ? 'Steuern beim Optionshandel' : 'Options Trading Taxes',
      description: locale === 'de'
        ? 'Alles zur Abgeltungsteuer, Verlustverrechnung und Freibeträgen.'
        : 'Everything about capital gains tax, loss offsetting and allowances.',
      href: `/${locale}/taxes`,
      category: tNav('taxes'),
      image: '💰',
    },
  ];

  const latestPosts = [
    {
      title: locale === 'de' ? 'Volatilität verstehen und nutzen' : 'Understanding and Using Volatility',
      excerpt: locale === 'de'
        ? 'Die implizite Volatilität ist einer der wichtigsten Faktoren beim Optionshandel.'
        : 'Implied volatility is one of the most important factors in options trading.',
      date: '2025-01-15',
      href: `/${locale}/blog/volatility-guide`,
    },
    {
      title: locale === 'de' ? 'Covered Call: Schritt-für-Schritt Anleitung' : 'Covered Call: Step-by-Step Guide',
      excerpt: locale === 'de'
        ? 'Wie Sie mit Covered Calls regelmäßige Einnahmen generieren können.'
        : 'How to generate regular income with covered calls.',
      date: '2025-01-10',
      href: `/${locale}/blog/covered-call-guide`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/basics`} className="btn-primary">
                {t('hero.cta')}
              </Link>
              <Link href={`/${locale}/brokers`} className="btn-secondary">
                {tNav('brokers')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t('featured')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="card group hover:border-primary-300"
              >
                <div className="text-5xl mb-4">{article.image}</div>
                <div className="text-sm text-primary-600 font-medium mb-2">
                  {article.category}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title mb-0">{t('latest')}</h2>
            <Link
              href={`/${locale}/blog`}
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              {tNav('blog')}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <article key={post.href} className="card">
                <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                  <Link href={post.href} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  {locale === 'de' ? 'Weiterlesen' : 'Read more'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {locale === 'de'
              ? 'Bereit für den Einstieg in den Optionshandel?'
              : 'Ready to Get Started with Options Trading?'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Entdecken Sie unsere umfassenden Guides und finden Sie den perfekten Broker für Ihre Bedürfnisse.'
              : 'Explore our comprehensive guides and find the perfect broker for your needs.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/tutorials`}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {tNav('tutorials')}
            </Link>
            <Link
              href={`/${locale}/faq`}
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-800 transition-colors"
            >
              {tNav('faq')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
