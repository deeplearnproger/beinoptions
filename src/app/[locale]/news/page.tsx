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
      isNew: true,
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
