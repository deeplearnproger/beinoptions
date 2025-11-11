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
      title: locale === 'de' ? 'Put vs Call Optionen: Der ultimative Vergleich' : 'Put vs Call Options: The Ultimate Comparison',
      excerpt: locale === 'de'
        ? 'Verstehen Sie den fundamentalen Unterschied zwischen Put- und Call-Optionen. Mit praktischen Beispielen und Strategien für jeden Markt. Starten Sie noch heute mit Libertex!'
        : 'Understand the fundamental difference between Put and Call options. With practical examples and strategies for every market. Start today with Libertex!',
      category: t('strategy_guides'),
      date: '2025-01-18',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '10 Min.' : '10 min',
      image: '🎯',
      slug: 'put-vs-call-optionen',
    },
    {
      title: locale === 'de' ? 'Options Trading: Ihr Weg zum erfolgreichen Händler' : 'Options Trading: Your Path to Successful Trading',
      excerpt: locale === 'de'
        ? 'Alles was Sie über Options Trading wissen müssen: Von den Grundlagen bis zu fortgeschrittenen Strategien. Eröffnen Sie Ihr Konto bei Libertex und starten Sie professionell!'
        : 'Everything you need to know about Options Trading: From basics to advanced strategies. Open your Libertex account and start professionally!',
      category: t('strategy_guides'),
      date: '2025-01-17',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '12 Min.' : '12 min',
      image: '🚀',
      slug: 'options-trading-guide',
    },
    {
      title: locale === 'de' ? 'Options CFDs verstehen (Teil 1): Grundlagen' : 'Understanding Options CFDs (Part 1): Basics',
      excerpt: locale === 'de'
        ? 'Was müssen Sie über Options CFDs wissen? Entdecken Sie die Vor- und Nachteile, Risiken und Chancen. Handeln Sie jetzt mit Libertex - dem führenden Broker!'
        : 'What do you need to know about Options CFDs? Discover advantages, risks and opportunities. Trade now with Libertex - the leading broker!',
      category: t('strategy_guides'),
      date: '2025-01-16',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '8 Min.' : '8 min',
      image: '📚',
      slug: 'options-cfds-teil-1',
    },
    {
      title: locale === 'de' ? 'Options CFDs verstehen (Teil 2): Warum handeln?' : 'Understanding Options CFDs (Part 2): Why Trade?',
      excerpt: locale === 'de'
        ? 'Warum sollten Sie Options CFDs handeln? Hebel, Flexibilität und niedrige Kapitalanforderungen. Profitieren Sie mit Libertex von den besten Konditionen!'
        : 'Why should you trade Options CFDs? Leverage, flexibility and low capital requirements. Benefit from the best conditions with Libertex!',
      category: t('strategy_guides'),
      date: '2025-01-16',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '7 Min.' : '7 min',
      image: '💡',
      slug: 'options-cfds-teil-2',
    },
    {
      title: locale === 'de' ? 'Options CFDs verstehen (Teil 3): Spekulation & Hedging' : 'Understanding Options CFDs (Part 3): Speculation & Hedging',
      excerpt: locale === 'de'
        ? 'Nutzen Sie Options CFDs für Spekulation und Absicherung. Praktische Strategien für Ihr Portfolio. Starten Sie heute mit Libertex - Zero Spreads!'
        : 'Use Options CFDs for speculation and hedging. Practical strategies for your portfolio. Start today with Libertex - Zero Spreads!',
      category: t('strategy_guides'),
      date: '2025-01-16',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '9 Min.' : '9 min',
      image: '🛡️',
      slug: 'options-cfds-teil-3',
    },
    {
      title: locale === 'de' ? 'Volatilität verstehen und nutzen' : 'Understanding and Using Volatility',
      excerpt: locale === 'de'
        ? 'Die implizite Volatilität ist einer der wichtigsten Faktoren beim Optionshandel. Erfahren Sie, wie Sie IV-Daten nutzen können, um bessere Trading-Entscheidungen zu treffen.'
        : 'Implied volatility is one of the most important factors in options trading. Learn how to use IV data to make better trading decisions.',
      category: t('market_analysis'),
      date: '2025-01-15',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '8 Min.' : '8 min',
      image: '📊',
      slug: 'volatility-guide',
    },
    {
      title: locale === 'de' ? 'Covered Call: Schritt-für-Schritt' : 'Covered Call: Step-by-Step',
      excerpt: locale === 'de'
        ? 'Wie Sie mit Covered Calls regelmäßige Einnahmen generieren können. Eine bewährte Strategie für Aktienbesitzer in seitwärts tendierenden Märkten.'
        : 'How to generate regular income with covered calls. A proven strategy for stock owners in sideways trending markets.',
      category: t('strategy_guides'),
      date: '2025-01-10',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '6 Min.' : '6 min',
      image: '💰',
      slug: 'covered-call-guide',
    },
    {
      title: locale === 'de' ? 'Die Griechen verstehen: Delta, Gamma, Theta' : 'Understanding the Greeks: Delta, Gamma, Theta',
      excerpt: locale === 'de'
        ? 'Ein umfassender Guide zu den Options-Griechen. Lernen Sie, wie Delta, Gamma, Theta und Vega Ihre Optionspositionen beeinflussen.'
        : 'A comprehensive guide to the options Greeks. Learn how Delta, Gamma, Theta and Vega affect your option positions.',
      category: t('strategy_guides'),
      date: '2025-01-05',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '12 Min.' : '12 min',
      image: '🎓',
      slug: 'greeks-guide',
    },
    {
      title: locale === 'de' ? 'Marktanalyse: DAX Optionen Q1 2025' : 'Market Analysis: DAX Options Q1 2025',
      excerpt: locale === 'de'
        ? 'Eine detaillierte Analyse der DAX-Optionsmärkte im ersten Quartal 2025. Volatilitätstrends, Open Interest und Trading-Opportunities.'
        : 'A detailed analysis of DAX options markets in Q1 2025. Volatility trends, open interest and trading opportunities.',
      category: t('market_analysis'),
      date: '2025-01-01',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '10 Min.' : '10 min',
      image: '📈',
      slug: 'dax-options-q1-2025',
    },
    {
      title: locale === 'de' ? 'Interview: Ein Jahr als Options-Trader' : 'Interview: One Year as Options Trader',
      excerpt: locale === 'de'
        ? 'Ein Trader berichtet über seine Erfahrungen im ersten Jahr: Erfolge, Fehler und wichtige Lektionen für Einsteiger.'
        : 'A trader reports on his experiences in the first year: successes, mistakes and important lessons for beginners.',
      category: t('trader_stories'),
      date: '2024-12-28',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '15 Min.' : '15 min',
      image: '🎤',
      slug: 'one-year-trader-interview',
    },
    {
      title: locale === 'de' ? 'Neue BaFin-Regelungen 2025' : 'New BaFin Regulations 2025',
      excerpt: locale === 'de'
        ? 'Überblick über die wichtigsten regulatorischen Änderungen für Privatanleger im Optionshandel ab 2025.'
        : 'Overview of the most important regulatory changes for retail investors in options trading from 2025.',
      category: t('news'),
      date: '2024-12-20',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '7 Min.' : '7 min',
      image: '📋',
      slug: 'bafin-regulations-2025',
    },
  ];

  const categories = [
    { name: t('strategy_guides'), count: 7 },
    { name: t('market_analysis'), count: 2 },
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
                          <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
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
                            href={`/${locale}/blog/${post.slug}`}
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
