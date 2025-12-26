import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Finanznachrichten & Markt-Updates' : 'Financial News & Market Updates',
    description: locale === 'de'
      ? 'Aktuelle Nachrichten zu Aktien, Optionen, ETFs und den europäischen Finanzmärkten. Bleiben Sie informiert mit BeInOptions.'
      : 'Latest news on stocks, options, ETFs and European financial markets. Stay informed with BeInOptions.',
  });
}

export default function NewsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('blog');

  const newsArticles = [
    // Newest articles - December 21
    {
      title: locale === 'de'
        ? 'Bitcoin fällt vor $28,5 Mrd. Deribit Options-Verfall'
        : 'Bitcoin Slips Ahead of $28.5B Deribit Options Expiry',
      excerpt: locale === 'de'
        ? 'Bitcoin fiel unter $88.000 vor einem massiven Deribit Options-Verfall. Große Verfälle lösen oft Volatilitätsspitzen aus – ähnlich wie bei SPX-Verfällen.'
        : 'Bitcoin dipped below $88,000 ahead of a massive Deribit options expiry. Large expiries often trigger volatility spikes – similar to SPX expirations.',
      category: 'Crypto Options',
      date: '2025-12-23',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-red-50 to-orange-100',
      iconColor: 'text-red-600',
      iconPath: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
      slug: 'bitcoin-28-5b-deribit-options-verfall',
      isNew: true,
      tags: ['Deribit', 'Bitcoin', 'Expiry', 'Volatility'],
    },
    {
      title: locale === 'de'
        ? 'Binance öffnet ETH Options Income-Strategien für alle'
        : 'Binance Opens ETH Options Income Strategies to All Users',
      excerpt: locale === 'de'
        ? 'Binance erweitert Zugang zu ETH Options-basierten Income-Strategien. Ein Zeichen für die Mainstream-Adoption – ähnlich wie Covered-Call-ETFs bei Aktien.'
        : 'Binance expands access to ETH options-based income strategies. A sign of mainstream adoption – similar to covered call ETFs in stocks.',
      category: 'Crypto Options',
      date: '2025-12-23',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-yellow-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      slug: 'binance-eth-options-income-strategien',
      isNew: true,
      tags: ['Binance', 'ETH', 'Income', 'Strategies'],
    },
    {
      title: locale === 'de'
        ? 'Märkte ruhig bei $4,3 Mrd. BTC & ETH Options-Verfall'
        : 'Markets Stay Calm as $4.3B BTC & ETH Options Expire',
      excerpt: locale === 'de'
        ? '"Ruhige Verfälle" sind kein Nichtereignis – sie können große strukturelle Signale sein und die nächste Bewegung vorbereiten.'
        : '"Quiet expiries" are not a non-event – they can be major structural signals that set up the next move.',
      category: 'Crypto Options',
      date: '2025-12-23',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '4 Min.' : '4 min',
      iconBg: 'from-green-50 to-teal-100',
      iconColor: 'text-green-600',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      slug: 'btc-eth-options-verfall-4-3b',
      isNew: true,
      tags: ['BTC', 'ETH', 'Expiry', 'Max Pain'],
    },
    // December 22 articles (no longer new)
    {
      title: locale === 'de'
        ? 'Coinbase kauft Deribit: Was es für Krypto-Optionen bedeutet'
        : 'Coinbase Acquires Deribit: What It Means for Crypto Options',
      excerpt: locale === 'de'
        ? '$2,9 Mrd. Deal könnte den globalen Krypto-Derivatemarkt neu gestalten. Auswirkungen auf Liquidität, Regulierung und institutionelle Beteiligung an Krypto-Optionen.'
        : '$2.9B deal could reshape global crypto derivatives. Implications for liquidity, regulation, and institutional participation in crypto options.',
      category: 'Crypto Options',
      date: '2025-12-22',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '6 Min.' : '6 min',
      iconBg: 'from-orange-50 to-amber-100',
      iconColor: 'text-orange-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      slug: 'coinbase-deribit-akquisition',
      isNew: false,
      tags: ['Coinbase', 'Deribit', 'Crypto', 'M&A'],
    },
    {
      title: locale === 'de'
        ? 'Deribit BTC Options OI erreicht Rekord $42,5 Mrd.'
        : 'Deribit Bitcoin Options OI Hits Record $42.5B',
      excerpt: locale === 'de'
        ? 'Rekord-Open-Interest signalisiert massive Positionierung. Was das für Volatilität und Marktbewegungen rund um Verfallstermine bedeutet.'
        : 'Record open interest signals massive positioning. What this means for volatility and market movements around expiries.',
      category: 'Crypto Options',
      date: '2025-12-22',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-amber-50 to-yellow-100',
      iconColor: 'text-amber-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      slug: 'deribit-btc-options-rekord-oi',
      isNew: false,
      tags: ['Deribit', 'Bitcoin', 'Open Interest', 'IV'],
    },
    {
      title: locale === 'de'
        ? 'CME Bitcoin Options erklärt: Institutioneller Flow & Daten'
        : 'CME Bitcoin Options Explained: Institutional Flow & Data',
      excerpt: locale === 'de'
        ? 'CME ist der regulierte Standard für institutionelle Krypto-Derivate. Volume, Open Interest und was es für Trader bedeutet.'
        : 'CME is the regulated standard for institutional crypto derivatives. Volume, open interest, and what it means for traders.',
      category: 'Crypto Options',
      date: '2025-12-22',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-blue-600',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      slug: 'cme-bitcoin-options-institutionell',
      isNew: false,
      tags: ['CME', 'Bitcoin', 'Institutional', 'Regulation'],
    },
    // December 20 articles (no longer new)
    {
      title: locale === 'de'
        ? 'EZB: Geopolitischer Stresstest für 110 Großbanken'
        : 'ECB: Geopolitical Stress Test for 110 Major Banks',
      excerpt: locale === 'de'
        ? 'Die EZB kündigt für 2026 einen Reverse-Stresstest zu geopolitischen Risiken an. Banken müssen Extrem-Szenarien modellieren. Was bedeutet das für Bankaktien und Put-Strategien?'
        : 'ECB announces reverse stress test on geopolitical risks for 2026. Banks must model extreme scenarios. What does this mean for bank stocks and put strategies?',
      category: locale === 'de' ? 'Zentralbank' : 'Central Bank',
      date: '2025-12-20',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-blue-600',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      slug: 'ecb-stresstest-banken-geopolitik',
      isNew: false,
      tags: ['ECB', 'Banks', 'Stress Test'],
    },
    {
      title: locale === 'de'
        ? 'USA: Stärkere Aufsicht über Proxy Advisors'
        : 'USA: Stronger Oversight of Proxy Advisors',
      excerpt: locale === 'de'
        ? 'Executive Order zur verschärften Aufsicht über Proxy-Berater. Auswirkungen auf Corporate Governance, ESG-Abstimmungen und Event-Trading mit Optionen während der Proxy Season.'
        : 'Executive order for enhanced oversight of proxy advisors. Impact on corporate governance, ESG votes, and event trading with options during proxy season.',
      category: locale === 'de' ? 'Regulierung' : 'Regulation',
      date: '2025-12-20',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-red-50 to-orange-100',
      iconColor: 'text-red-600',
      iconPath: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      slug: 'usa-proxy-advisors-aufsicht',
      isNew: false,
      tags: ['USA', 'Regulation', 'ESG'],
    },
    {
      title: locale === 'de'
        ? 'EU: €90 Mrd. Ukraine-Kredit über gemeinsame Anleihen'
        : 'EU: €90bn Ukraine Loan via Joint Borrowing',
      excerpt: locale === 'de'
        ? 'Märkte begrüßen EU-Entscheidung für gemeinsame Verschuldung statt Beschlagnahmung russischer Assets. Auswirkungen auf EU-Anleihen, Renditen und zinssensitive Sektoren.'
        : 'Markets welcome EU choice for joint debt over seizing Russian assets. Impact on EU bonds, yields, and rate-sensitive sectors.',
      category: locale === 'de' ? 'EU Politik' : 'EU Policy',
      date: '2025-12-20',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-blue-50 to-yellow-100',
      iconColor: 'text-blue-600',
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      slug: 'eu-ukraine-kredit-anleihen',
      isNew: false,
      tags: ['EU', 'Bonds', 'Ukraine'],
    },
    // Previous articles
    {
      title: locale === 'de'
        ? 'Europäische Märkte zeigen wenig Bewegung - Deutsche Börse im Plus'
        : 'European Markets Show Little Movement - Deutsche Börse Up',
      excerpt: locale === 'de'
        ? 'Die europäischen Aktienmärkte präsentieren sich zum Wochenstart uneinheitlich. Während der DAX leicht nachgibt, verzeichnet die Deutsche Börse deutliche Gewinne. Was bedeutet das für Optionshändler?'
        : 'European stock markets show mixed performance at the start of the week. While the DAX slightly declines, Deutsche Börse records significant gains. What does this mean for options traders?',
      category: locale === 'de' ? 'Märkte' : 'Markets',
      date: '2025-12-10',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '5 Min.' : '5 min',
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-blue-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      slug: 'europaeische-maerkte-deutsche-boerse',
      isNew: false,
    },
    {
      title: locale === 'de'
        ? 'Märkte Europa: Ruhiger Handel vor US-Thanksgiving - Deutsche Börse mit Allfunds-Deal'
        : 'European Markets: Quiet Trading Before US Thanksgiving - Deutsche Börse Allfunds Deal',
      excerpt: locale === 'de'
        ? 'DAX verliert 0,1% bei niedrigem Volumen während US-Feiertag. Deutsche Börse steigt um 1,3% nach Übernahmeangebot für Allfunds über 5,3 Milliarden Euro. Markt setzt auf Fed-Zinssenkung.'
        : 'DAX loses 0.1% on low volume during US holiday. Deutsche Börse rises 1.3% after €5.3 billion takeover bid for Allfunds. Market bets on Fed rate cut.',
      category: locale === 'de' ? 'Märkte Europa' : 'European Markets',
      date: '2025-11-28',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '6 Min.' : '6 min',
      iconBg: 'from-indigo-50 to-purple-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      slug: 'maerkte-europa-thanksgiving-deutsche-boerse',
      isNew: false,
    },
    {
      title: locale === 'de'
        ? 'Trump-Accounts: Wird das US-Rentenmodell zum Vorbild für Deutschland?'
        : 'Trump Accounts: Will the US Pension Model Become a Blueprint for Germany?',
      excerpt: locale === 'de'
        ? 'Die USA starten mit „Trump-Accounts" ein innovatives Frühstart-Modell für die Altersvorsorge: 1.000 Dollar Startkapital für Neugeborene, steuerfreie Einzahlungen und automatische Anlage in Aktienfonds. Was bedeutet das für deutsche Anleger?'
        : 'The US launches "Trump Accounts" - an innovative early-start model for retirement: $1,000 starting capital for newborns, tax-free contributions, and automatic investment in stock funds. What does this mean for German investors?',
      category: locale === 'de' ? 'Rentenpolitik' : 'Pension Policy',
      date: '2025-12-07',
      author: 'BeInOptions Team',
      readTime: locale === 'de' ? '7 Min.' : '7 min',
      iconBg: 'from-red-50 to-orange-100',
      iconColor: 'text-red-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      slug: 'trump-accounts-deutsche-rentenpolitik',
      isNew: false,
      source: 'onvista.de',
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {locale === 'de' ? 'Aktuelle Nachrichten' : 'Latest News'}
            </div>
            <h1 className="section-title mb-6">
              {locale === 'de' ? 'Finanznachrichten' : 'Financial News'}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen an den Finanzmärkten.'
                : 'Stay up to date with the latest developments in financial markets.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* News Articles */}
          <div className="space-y-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="card hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${article.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-8 h-8 ${article.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={article.iconPath} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      {article.isNew && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold animate-pulse">
                          {locale === 'de' ? 'NEU' : 'NEW'}
                        </span>
                      )}
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      <Link href={`/${locale}/news/${article.slug}`} className="hover:text-red-600 transition-colors">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{article.author}</span>
                        <span>•</span>
                        <time>{article.date}</time>
                      </div>
                      <Link
                        href={`/${locale}/news/${article.slug}`}
                        className="text-red-600 hover:text-red-700 font-medium flex items-center"
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

          {/* Coming Soon Notice */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Mehr Nachrichten folgen' : 'More News Coming'}
            </h3>
            <p className="text-gray-600">
              {locale === 'de'
                ? 'Wir arbeiten daran, Ihnen täglich aktuelle Finanznachrichten zu liefern. Schauen Sie bald wieder vorbei!'
                : 'We are working on delivering daily financial news. Check back soon!'}
            </p>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              {locale === 'de' ? 'News-Benachrichtigungen erhalten' : 'Get News Notifications'}
            </h3>
            <p className="text-red-100 mb-6">
              {locale === 'de'
                ? 'Erhalten Sie die wichtigsten Marktnachrichten direkt in Ihr Postfach.'
                : 'Receive the most important market news directly to your inbox.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                {locale === 'de' ? 'Anmelden' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
