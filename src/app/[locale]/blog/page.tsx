import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Blog & Marktanalyse' : 'Blog & Market Analysis',
    description: locale === 'de'
      ? 'Aktuelle Artikel, Marktanalysen und Trading-Strategien für Optionshändler.'
      : 'Latest articles, market analysis and trading strategies for options traders.',
  });
}

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('blog');

  const blogPosts = [
    {
      title: locale === 'de' ? 'Volatilität verstehen und nutzen' : 'Understanding and Using Volatility',
      excerpt: locale === 'de'
        ? 'Die implizite Volatilität ist einer der wichtigsten Faktoren beim Optionshandel. Erfahren Sie, wie Sie IV-Daten nutzen können, um bessere Trading-Entscheidungen zu treffen.'
        : 'Implied volatility is one of the most important factors in options trading. Learn how to use IV data to make better trading decisions.',
      category: t('market_analysis'),
      date: '2025-01-15',
      author: 'Max Mustermann',
      readTime: locale === 'de' ? '8 Min.' : '8 min',
      image: '📊',
    },
    {
      title: locale === 'de' ? 'Covered Call: Schritt-für-Schritt' : 'Covered Call: Step-by-Step',
      excerpt: locale === 'de'
        ? 'Wie Sie mit Covered Calls regelmäßige Einnahmen generieren können. Eine bewährte Strategie für Aktienbesitzer in seitwärts tendierenden Märkten.'
        : 'How to generate regular income with covered calls. A proven strategy for stock owners in sideways trending markets.',
      category: t('strategy_guides'),
      date: '2025-01-10',
      author: 'Lisa Schmidt',
      readTime: locale === 'de' ? '6 Min.' : '6 min',
      image: '💰',
    },
    {
      title: locale === 'de' ? 'Die Griechen verstehen: Delta, Gamma, Theta' : 'Understanding the Greeks: Delta, Gamma, Theta',
      excerpt: locale === 'de'
        ? 'Ein umfassender Guide zu den Options-Griechen. Lernen Sie, wie Delta, Gamma, Theta und Vega Ihre Optionspositionen beeinflussen.'
        : 'A comprehensive guide to the options Greeks. Learn how Delta, Gamma, Theta and Vega affect your option positions.',
      category: t('strategy_guides'),
      date: '2025-01-05',
      author: 'Thomas Weber',
      readTime: locale === 'de' ? '12 Min.' : '12 min',
      image: '🎓',
    },
    {
      title: locale === 'de' ? 'Marktanalyse: DAX Optionen Q1 2025' : 'Market Analysis: DAX Options Q1 2025',
      excerpt: locale === 'de'
        ? 'Eine detaillierte Analyse der DAX-Optionsmärkte im ersten Quartal 2025. Volatilitätstrends, Open Interest und Trading-Opportunities.'
        : 'A detailed analysis of DAX options markets in Q1 2025. Volatility trends, open interest and trading opportunities.',
      category: t('market_analysis'),
      date: '2025-01-01',
      author: 'Anna Becker',
      readTime: locale === 'de' ? '10 Min.' : '10 min',
      image: '📈',
    },
    {
      title: locale === 'de' ? 'Interview: Ein Jahr als Options-Trader' : 'Interview: One Year as Options Trader',
      excerpt: locale === 'de'
        ? 'Ein Trader berichtet über seine Erfahrungen im ersten Jahr: Erfolge, Fehler und wichtige Lektionen für Einsteiger.'
        : 'A trader reports on his experiences in the first year: successes, mistakes and important lessons for beginners.',
      category: t('trader_stories'),
      date: '2024-12-28',
      author: 'Michael Klein',
      readTime: locale === 'de' ? '15 Min.' : '15 min',
      image: '🎤',
    },
    {
      title: locale === 'de' ? 'Neue BaFin-Regelungen 2025' : 'New BaFin Regulations 2025',
      excerpt: locale === 'de'
        ? 'Überblick über die wichtigsten regulatorischen Änderungen für Privatanleger im Optionshandel ab 2025.'
        : 'Overview of the most important regulatory changes for retail investors in options trading from 2025.',
      category: t('news'),
      date: '2024-12-20',
      author: 'Sarah Hoffmann',
      readTime: locale === 'de' ? '7 Min.' : '7 min',
      image: '📋',
    },
  ];

  const categories = [
    { name: t('market_analysis'), count: 2 },
    { name: t('strategy_guides'), count: 2 },
    { name: t('trader_stories'), count: 1 },
    { name: t('news'), count: 1 },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Aktuelle Artikel, Analysen und Strategien für erfolgreichen Optionshandel.'
                : 'Latest articles, analysis and strategies for successful options trading.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="text-6xl flex-shrink-0">{post.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                          <Link href={`/${locale}/blog/${index + 1}`} className="hover:text-primary-600 transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <span>{post.author}</span>
                            <span>•</span>
                            <time>{post.date}</time>
                          </div>
                          <Link
                            href={`/${locale}/blog/${index + 1}`}
                            className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                          >
                            {t('read_more')}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="card">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                    {t('categories')}
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/${locale}/blog/category/${index + 1}`}
                          className="flex items-center justify-between text-gray-700 hover:text-primary-600 transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="card bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="text-xl font-heading font-bold mb-2">Newsletter</h3>
                  <p className="text-primary-100 mb-4 text-sm">
                    {locale === 'de'
                      ? 'Erhalten Sie wöchentlich die neuesten Artikel und Analysen.'
                      : 'Receive the latest articles and analysis weekly.'}
                  </p>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3"
                  />
                  <button className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    {locale === 'de' ? 'Abonnieren' : 'Subscribe'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
