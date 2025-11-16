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
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
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
      iconBg: 'from-orange-50 to-amber-100',
      iconColor: 'text-orange-600',
      iconPath: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
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
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
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
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
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
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
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
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
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
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
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
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
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
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
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
      iconBg: 'from-cyan-50 to-sky-100',
      iconColor: 'text-sky-600',
      iconPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
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
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
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
                      <div className={`w-16 h-16 bg-gradient-to-br ${post.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-8 h-8 ${post.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={post.iconPath} />
                        </svg>
                      </div>
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
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
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
