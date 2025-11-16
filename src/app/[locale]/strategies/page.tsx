import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

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

  const strategies = [
    {
      title: t('covered_call'),
      description: t('covered_call_desc'),
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      risk: locale === 'de' ? 'Niedrig-Mittel' : 'Low-Medium',
      market: locale === 'de' ? 'Neutral bis leicht steigend' : 'Neutral to slightly bullish',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      color: 'border-financial-green',
    },
    {
      title: t('protective_put'),
      description: t('protective_put_desc'),
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      risk: locale === 'de' ? 'Niedrig' : 'Low',
      market: locale === 'de' ? 'Absicherung' : 'Hedging',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      color: 'border-blue-500',
    },
    {
      title: t('iron_condor'),
      description: t('iron_condor_desc'),
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      risk: locale === 'de' ? 'Mittel' : 'Medium',
      market: locale === 'de' ? 'Seitwärts, niedrige Volatilität' : 'Sideways, low volatility',
      difficulty: locale === 'de' ? 'Fortgeschritten' : 'Advanced',
      color: 'border-primary-500',
    },
    {
      title: t('bull_spread'),
      description: t('bull_spread_desc'),
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      risk: locale === 'de' ? 'Niedrig-Mittel' : 'Low-Medium',
      market: locale === 'de' ? 'Steigend' : 'Bullish',
      difficulty: locale === 'de' ? 'Mittel' : 'Intermediate',
      color: 'border-financial-green',
    },
    {
      title: t('bear_spread'),
      description: t('bear_spread_desc'),
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
      risk: locale === 'de' ? 'Niedrig-Mittel' : 'Low-Medium',
      market: locale === 'de' ? 'Fallend' : 'Bearish',
      difficulty: locale === 'de' ? 'Mittel' : 'Intermediate',
      color: 'border-financial-red',
    },
    {
      title: t('straddle'),
      description: t('straddle_desc'),
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      risk: locale === 'de' ? 'Mittel-Hoch' : 'Medium-High',
      market: locale === 'de' ? 'Hohe Volatilität erwartet' : 'High volatility expected',
      difficulty: locale === 'de' ? 'Fortgeschritten' : 'Advanced',
      color: 'border-financial-gold',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('covered_call_desc')}
        author="BeInOptions"
        datePublished="2025-01-01"
        url={`https://beinoption.de/${locale}/strategies`}
      />
      <BreadcrumbSchema
        items={[
          { name: tNav('home'), url: `https://beinoption.de/${locale}` },
          { name: tNav('strategies'), url: `https://beinoption.de/${locale}/strategies` },
        ]}
      />

      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              {locale === 'de'
                ? 'Entdecken Sie die wichtigsten Optionsstrategien für unterschiedliche Marktbedingungen und Risikobereitschaft.'
                : 'Discover the most important options strategies for different market conditions and risk tolerance.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className={`card border-l-4 ${strategy.color} hover:shadow-xl transition-all`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${strategy.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className={`w-7 h-7 ${strategy.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={strategy.iconPath} />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  {strategy.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{strategy.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{locale === 'de' ? 'Risiko:' : 'Risk:'}</span>
                    <span className="font-medium text-gray-900">{strategy.risk}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{locale === 'de' ? 'Markt:' : 'Market:'}</span>
                    <span className="font-medium text-gray-900">{strategy.market}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{locale === 'de' ? 'Niveau:' : 'Level:'}</span>
                    <span className="font-medium text-gray-900">{strategy.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy Selection Guide */}
          <div className="mt-16 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Welche Strategie passt zu Ihnen?' : 'Which Strategy Fits You?'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-financial-green mb-3">
                  {locale === 'de' ? 'Bullischer Markt' : 'Bullish Market'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-financial-green mr-2">→</span>
                    <span>Bull Call Spread</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-financial-green mr-2">→</span>
                    <span>Covered Call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-financial-green mr-2">→</span>
                    <span>{locale === 'de' ? 'Long Call' : 'Long Call'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-financial-red mb-3">
                  {locale === 'de' ? 'Bärischer Markt' : 'Bearish Market'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-financial-red mr-2">→</span>
                    <span>Bear Put Spread</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-financial-red mr-2">→</span>
                    <span>Protective Put</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-financial-red mr-2">→</span>
                    <span>{locale === 'de' ? 'Long Put' : 'Long Put'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {locale === 'de' ? 'Neutraler Markt' : 'Neutral Market'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>Iron Condor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>Covered Call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>{locale === 'de' ? 'Short Straddle' : 'Short Straddle'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-financial-gold mb-3">
                  {locale === 'de' ? 'Hohe Volatilität' : 'High Volatility'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-financial-gold mr-2">→</span>
                    <span>Long Straddle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-financial-gold mr-2">→</span>
                    <span>Long Strangle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-financial-gold mr-2">→</span>
                    <span>{locale === 'de' ? 'Protective Collar' : 'Protective Collar'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
