import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Optionsstrategien' : 'Options Strategies',
    description: locale === 'de'
      ? 'Die wichtigsten Optionsstrategien: Covered Call, Iron Condor, Spreads und mehr für verschiedene Marktszenarien.'
      : 'The most important options strategies: Covered Call, Iron Condor, Spreads and more for different market scenarios.',
    keywords: locale === 'de'
      ? ['Optionsstrategien', 'Covered Call', 'Iron Condor', 'Bull Spread', 'Straddle']
      : ['options strategies', 'covered call', 'iron condor', 'bull spread', 'straddle'],
  });
}

export default function StrategiesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('strategies');
  const tNav = useTranslations('nav');
  const isGerman = locale === 'de';

  // Featured strategies with dedicated pages
  const featuredStrategies = [
    {
      title: 'Covered Call',
      description: isGerman
        ? 'Generieren Sie regelmäßiges Einkommen aus Ihren Aktien durch den Verkauf von Calls. Die beliebteste Einkommensstrategie für Anfänger.'
        : 'Generate regular income from your stocks by selling calls. The most popular income strategy for beginners.',
      href: `/${locale}/covered-call-strategy`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-600',
      risk: isGerman ? 'Niedrig' : 'Low',
      market: isGerman ? 'Neutral/Bullish' : 'Neutral/Bullish',
      difficulty: isGerman ? 'Anfänger' : 'Beginner',
      badge: isGerman ? 'Vollständiger Guide' : 'Full Guide',
    },
    {
      title: 'Iron Condor',
      description: isGerman
        ? 'Profitieren Sie von Seitwärtsmärkten mit definiertem Risiko. Kombiniert Bull Put Spread und Bear Call Spread.'
        : 'Profit from sideways markets with defined risk. Combines Bull Put Spread and Bear Call Spread.',
      href: `/${locale}/iron-condor-strategy`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-600',
      risk: isGerman ? 'Mittel' : 'Medium',
      market: isGerman ? 'Seitwärts' : 'Sideways',
      difficulty: isGerman ? 'Fortgeschritten' : 'Advanced',
      badge: isGerman ? 'Vollständiger Guide' : 'Full Guide',
    },
  ];

  // Strategy categories
  const incomeStrategies = [
    {
      title: 'Covered Call',
      description: t('covered_call_desc'),
      href: `/${locale}/covered-call-strategy`,
      risk: isGerman ? 'Niedrig' : 'Low',
      hasPage: true,
    },
    {
      title: 'Cash-Secured Put',
      description: isGerman
        ? 'Verkaufen Sie Puts auf Aktien, die Sie gerne besitzen würden. Erhalten Sie Prämie während Sie auf einen guten Einstiegspreis warten.'
        : 'Sell puts on stocks you would like to own. Get paid while waiting for a good entry price.',
      risk: isGerman ? 'Mittel' : 'Medium',
      hasPage: false,
    },
    {
      title: 'Iron Condor',
      description: t('iron_condor_desc'),
      href: `/${locale}/iron-condor-strategy`,
      risk: isGerman ? 'Mittel' : 'Medium',
      hasPage: true,
    },
    {
      title: 'Credit Spread',
      description: isGerman
        ? 'Verkaufen Sie eine Option und kaufen Sie eine günstigere als Schutz. Begrenzte Gewinne, begrenztes Risiko.'
        : 'Sell one option and buy a cheaper one for protection. Limited profit, limited risk.',
      risk: isGerman ? 'Niedrig-Mittel' : 'Low-Medium',
      hasPage: false,
    },
  ];

  const directionalStrategies = [
    {
      title: 'Bull Call Spread',
      description: t('bull_spread_desc'),
      risk: isGerman ? 'Niedrig-Mittel' : 'Low-Medium',
      market: isGerman ? 'Bullish' : 'Bullish',
      hasPage: false,
    },
    {
      title: 'Bear Put Spread',
      description: t('bear_spread_desc'),
      risk: isGerman ? 'Niedrig-Mittel' : 'Low-Medium',
      market: isGerman ? 'Bearish' : 'Bearish',
      hasPage: false,
    },
    {
      title: 'Long Call',
      description: isGerman
        ? 'Kaufen Sie einen Call, wenn Sie erwarten, dass der Kurs steigt. Unbegrenztes Gewinnpotential, begrenztes Risiko.'
        : 'Buy a call when you expect the price to rise. Unlimited profit potential, limited risk.',
      risk: isGerman ? 'Mittel' : 'Medium',
      market: isGerman ? 'Bullish' : 'Bullish',
      hasPage: false,
    },
    {
      title: 'Long Put',
      description: isGerman
        ? 'Kaufen Sie einen Put, wenn Sie erwarten, dass der Kurs fällt. Profitieren Sie von fallenden Kursen.'
        : 'Buy a put when you expect the price to fall. Profit from falling prices.',
      risk: isGerman ? 'Mittel' : 'Medium',
      market: isGerman ? 'Bearish' : 'Bearish',
      hasPage: false,
    },
  ];

  const hedgingStrategies = [
    {
      title: 'Protective Put',
      description: t('protective_put_desc'),
      risk: isGerman ? 'Niedrig' : 'Low',
      hasPage: false,
    },
    {
      title: 'Collar',
      description: isGerman
        ? 'Kombiniert Covered Call mit Protective Put. Begrenzt sowohl Gewinn als auch Verlust.'
        : 'Combines Covered Call with Protective Put. Limits both profit and loss.',
      risk: isGerman ? 'Niedrig' : 'Low',
      hasPage: false,
    },
    {
      title: 'Married Put',
      description: isGerman
        ? 'Kaufen Sie Aktien und Put gleichzeitig. Absolute Absicherung gegen Verluste.'
        : 'Buy stock and put simultaneously. Complete protection against losses.',
      risk: isGerman ? 'Niedrig' : 'Low',
      hasPage: false,
    },
  ];

  const volatilityStrategies = [
    {
      title: 'Long Straddle',
      description: t('straddle_desc'),
      risk: isGerman ? 'Mittel-Hoch' : 'Medium-High',
      market: isGerman ? 'Hohe Vola erwartet' : 'High vol expected',
      hasPage: false,
    },
    {
      title: 'Long Strangle',
      description: isGerman
        ? 'Wie Straddle, aber mit OTM Optionen. Günstiger, aber braucht größere Bewegung.'
        : 'Like straddle but with OTM options. Cheaper but needs bigger move.',
      risk: isGerman ? 'Mittel-Hoch' : 'Medium-High',
      market: isGerman ? 'Hohe Vola erwartet' : 'High vol expected',
      hasPage: false,
    },
    {
      title: 'Iron Butterfly',
      description: isGerman
        ? 'Wie Iron Condor, aber mit gleichem Strike in der Mitte. Höheres Risiko, höhere Prämie.'
        : 'Like Iron Condor but with same strike in the middle. Higher risk, higher premium.',
      risk: isGerman ? 'Mittel' : 'Medium',
      market: isGerman ? 'Niedrige Vola erwartet' : 'Low vol expected',
      hasPage: false,
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('covered_call_desc')}
        author="BeInOptions"
        datePublished="2025-01-01"
        url={`https://beinoptions.com/${locale}/strategies`}
      />
      <BreadcrumbSchema
        items={[
          { name: tNav('home'), url: `https://beinoptions.com/${locale}` },
          { name: tNav('strategies'), url: `https://beinoptions.com/${locale}/strategies` },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              {isGerman
                ? 'Entdecken Sie die wichtigsten Optionsstrategien für unterschiedliche Marktbedingungen. Von Anfänger bis Fortgeschritten.'
                : 'Discover the most important options strategies for different market conditions. From beginner to advanced.'}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Strategies with Full Guides */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isGerman ? 'Vollständige Strategy Guides' : 'Complete Strategy Guides'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isGerman
                ? 'Diese Strategien haben ausführliche Anleitungen mit Schritt-für-Schritt Tutorials, Beispielen und FAQ.'
                : 'These strategies have comprehensive guides with step-by-step tutorials, examples, and FAQ.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredStrategies.map((strategy, index) => (
              <Link
                key={index}
                href={strategy.href}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${strategy.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${strategy.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {strategy.icon}
                    </div>
                    <span className={`px-3 py-1 bg-gradient-to-r ${strategy.gradient} text-white text-xs font-semibold rounded-full`}>
                      {strategy.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {strategy.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">{isGerman ? 'Risiko' : 'Risk'}</p>
                      <p className="font-semibold text-gray-900">{strategy.risk}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{isGerman ? 'Markt' : 'Market'}</p>
                      <p className="font-semibold text-gray-900">{strategy.market}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{isGerman ? 'Level' : 'Level'}</p>
                      <p className="font-semibold text-gray-900">{strategy.difficulty}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                    <span>{isGerman ? 'Guide lesen' : 'Read Guide'}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Income Strategies */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isGerman ? 'Einkommens-Strategien' : 'Income Strategies'}
                </h2>
                <p className="text-gray-600">
                  {isGerman ? 'Regelmäßige Prämien-Einnahmen' : 'Regular premium income'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {incomeStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 border border-gray-200 ${strategy.hasPage ? 'hover:border-emerald-300 hover:shadow-md transition-all' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{strategy.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                        {strategy.risk}
                      </span>
                      {strategy.hasPage && (
                        <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                          Guide
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
                  {strategy.hasPage && strategy.href && (
                    <Link
                      href={strategy.href}
                      className="inline-flex items-center text-emerald-600 text-sm font-medium hover:text-emerald-700"
                    >
                      {isGerman ? 'Vollständiger Guide' : 'Full Guide'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Directional Strategies */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isGerman ? 'Richtungs-Strategien' : 'Directional Strategies'}
                </h2>
                <p className="text-gray-600">
                  {isGerman ? 'Für bullische oder bärische Markterwartungen' : 'For bullish or bearish market expectations'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {directionalStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{strategy.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        strategy.market === 'Bullish' || strategy.market === 'Bullish'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {strategy.market}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {strategy.risk}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hedging Strategies */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isGerman ? 'Absicherungs-Strategien' : 'Hedging Strategies'}
                </h2>
                <p className="text-gray-600">
                  {isGerman ? 'Schützen Sie Ihre Portfolios' : 'Protect your portfolios'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hedgingStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{strategy.title}</h3>
                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                      {strategy.risk}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Volatility Strategies */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isGerman ? 'Volatilitäts-Strategien' : 'Volatility Strategies'}
                </h2>
                <p className="text-gray-600">
                  {isGerman ? 'Profitieren Sie von Marktschwankungen' : 'Profit from market fluctuations'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {volatilityStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{strategy.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      strategy.market?.includes('Hoch') || strategy.market?.includes('High')
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {strategy.market}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{strategy.description}</p>
                  <p className="text-xs text-gray-500">{isGerman ? 'Risiko' : 'Risk'}: {strategy.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Selection Quick Guide */}
      <div className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {isGerman ? 'Schnell-Guide: Welche Strategie?' : 'Quick Guide: Which Strategy?'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-900/30 border border-green-700 rounded-xl p-6">
                <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {isGerman ? 'Bullish' : 'Bullish'}
                </div>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>
                    <Link href={`/${locale}/covered-call-strategy`} className="hover:text-white underline">
                      Covered Call
                    </Link>
                  </li>
                  <li>Bull Call Spread</li>
                  <li>Long Call</li>
                  <li>Cash-Secured Put</li>
                </ul>
              </div>

              <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
                <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  {isGerman ? 'Bearish' : 'Bearish'}
                </div>
                <ul className="space-y-2 text-sm text-red-100">
                  <li>Bear Put Spread</li>
                  <li>Long Put</li>
                  <li>Protective Put</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 border border-purple-700 rounded-xl p-6">
                <div className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {isGerman ? 'Neutral' : 'Neutral'}
                </div>
                <ul className="space-y-2 text-sm text-purple-100">
                  <li>
                    <Link href={`/${locale}/iron-condor-strategy`} className="hover:text-white underline">
                      Iron Condor
                    </Link>
                  </li>
                  <li>Iron Butterfly</li>
                  <li>
                    <Link href={`/${locale}/covered-call-strategy`} className="hover:text-white underline">
                      Covered Call
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-900/30 border border-amber-700 rounded-xl p-6">
                <div className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {isGerman ? 'Volatilität' : 'Volatility'}
                </div>
                <ul className="space-y-2 text-sm text-amber-100">
                  <li>Long Straddle</li>
                  <li>Long Strangle</li>
                  <li>Protective Collar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isGerman ? 'Weitere Lernressourcen' : 'More Learning Resources'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href={`/${locale}/options-chain-guide`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {isGerman ? 'Options Chain lesen' : 'Reading Options Chain'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isGerman ? 'Bid, Ask, OI verstehen' : 'Understand Bid, Ask, OI'}
                </p>
              </Link>

              <Link
                href={`/${locale}/options-assignment`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {isGerman ? 'Options Assignment' : 'Options Assignment'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isGerman ? 'Verfall & Ausübung erklärt' : 'Expiration & exercise explained'}
                </p>
              </Link>

              <Link
                href={`/${locale}/greeks-explained`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {isGerman ? 'Greeks erklärt' : 'Greeks Explained'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isGerman ? 'Delta, Gamma, Theta, Vega' : 'Delta, Gamma, Theta, Vega'}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
