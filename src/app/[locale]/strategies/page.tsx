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
      icon: '🛡️',
      risk: locale === 'de' ? 'Niedrig-Mittel' : 'Low-Medium',
      market: locale === 'de' ? 'Neutral bis leicht steigend' : 'Neutral to slightly bullish',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      color: 'border-financial-green',
    },
    {
      title: t('protective_put'),
      description: t('protective_put_desc'),
      icon: '🔒',
      risk: locale === 'de' ? 'Niedrig' : 'Low',
      market: locale === 'de' ? 'Absicherung' : 'Hedging',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      color: 'border-blue-500',
    },
    {
      title: t('iron_condor'),
      description: t('iron_condor_desc'),
      icon: '🦅',
      risk: locale === 'de' ? 'Mittel' : 'Medium',
      market: locale === 'de' ? 'Seitwärts, niedrige Volatilität' : 'Sideways, low volatility',
      difficulty: locale === 'de' ? 'Fortgeschritten' : 'Advanced',
      color: 'border-primary-500',
    },
    {
      title: t('bull_spread'),
      description: t('bull_spread_desc'),
      icon: '📈',
      risk: locale === 'de' ? 'Niedrig-Mittel' : 'Low-Medium',
      market: locale === 'de' ? 'Steigend' : 'Bullish',
      difficulty: locale === 'de' ? 'Mittel' : 'Intermediate',
      color: 'border-financial-green',
    },
    {
      title: t('bear_spread'),
      description: t('bear_spread_desc'),
      icon: '📉',
      risk: locale === 'de' ? 'Niedrig-Mittel' : 'Low-Medium',
      market: locale === 'de' ? 'Fallend' : 'Bearish',
      difficulty: locale === 'de' ? 'Mittel' : 'Intermediate',
      color: 'border-financial-red',
    },
    {
      title: t('straddle'),
      description: t('straddle_desc'),
      icon: '⚡',
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
        author="BeInOption"
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
              <div key={index} className={`card border-l-4 ${strategy.color}`}>
                <div className="text-5xl mb-4">{strategy.icon}</div>
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
