import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Risiken & Chancen' : 'Risks & Opportunities',
    description: locale === 'de'
      ? 'Verstehen Sie die Risiken und Chancen beim Optionshandel: Hebelwirkung, Totalverlust und Gewinnpotenziale.'
      : 'Understand the risks and opportunities in options trading: Leverage, total loss and profit potentials.',
  });
}

export default function RisksPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('risks');

  const risks = [
    {
      title: t('leverage'),
      description: t('leverage_desc'),
      icon: '⚠️',
      type: 'risk',
    },
    {
      title: t('total_loss'),
      description: t('total_loss_desc'),
      icon: '❌',
      type: 'risk',
    },
    {
      title: t('unlimited_risk'),
      description: t('unlimited_risk_desc'),
      icon: '🚨',
      type: 'risk',
    },
  ];

  const opportunities = [
    {
      title: t('income'),
      description: t('income_desc'),
      icon: '💰',
      type: 'opportunity',
    },
    {
      title: t('hedging'),
      description: t('hedging_desc'),
      icon: '🛡️',
      type: 'opportunity',
    },
    {
      title: t('flexibility'),
      description: t('flexibility_desc'),
      icon: '🎯',
      type: 'opportunity',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('leverage_desc')}
        author="BeInOption"
        datePublished="2025-01-01"
        url={`https://beinoption.de/${locale}/risks`}
      />

      <div className="bg-gradient-to-br from-red-50 to-green-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Eine ausgewogene Betrachtung der Risiken und Chancen ist entscheidend für erfolgreichen Optionshandel.'
                : 'A balanced view of risks and opportunities is crucial for successful options trading.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          {/* Risks */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-financial-red mb-8">
              {locale === 'de' ? 'Risiken' : 'Risks'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <div key={index} className="card border-l-4 border-financial-red bg-red-50/30">
                  <div className="text-5xl mb-4">{risk.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {risk.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{risk.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-financial-green mb-8">
              {locale === 'de' ? 'Chancen' : 'Opportunities'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {opportunities.map((opp, index) => (
                <div key={index} className="card border-l-4 border-financial-green bg-green-50/30">
                  <div className="text-5xl mb-4">{opp.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {opp.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management */}
          <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Risikomanagement-Strategien' : 'Risk Management Strategies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {locale === 'de' ? 'Position Sizing' : 'Position Sizing'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Investieren Sie nie mehr als 2-5% Ihres Kapitals in eine einzelne Position.'
                    : 'Never invest more than 2-5% of your capital in a single position.'}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {locale === 'de' ? 'Diversifikation über mehrere Positionen' : 'Diversification across multiple positions'}</li>
                  <li>• {locale === 'de' ? 'Keine Überkonzentration in einem Sektor' : 'No overconcentration in one sector'}</li>
                  <li>• {locale === 'de' ? 'Maximale Risikogrenze festlegen' : 'Set maximum risk limit'}</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {locale === 'de' ? 'Stop-Loss Strategien' : 'Stop-Loss Strategies'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Definieren Sie klare Ausstiegspunkte vor dem Einstieg.'
                    : 'Define clear exit points before entry.'}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {locale === 'de' ? 'Maximaler Verlust pro Trade: 50% der Prämie' : 'Maximum loss per trade: 50% of premium'}</li>
                  <li>• {locale === 'de' ? 'Zeitbasierter Stop bei Zeitwertverfall' : 'Time-based stop at time decay'}</li>
                  <li>• {locale === 'de' ? 'Trailing Stop für Gewinnabsicherung' : 'Trailing stop for profit protection'}</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {locale === 'de' ? 'Hedging-Techniken' : 'Hedging Techniques'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Schützen Sie Ihr Portfolio gegen unerwartete Bewegungen.'
                    : 'Protect your portfolio against unexpected movements.'}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {locale === 'de' ? 'Protective Puts für Aktienbestände' : 'Protective puts for stock holdings'}</li>
                  <li>• {locale === 'de' ? 'Spreads zur Risikobegrenzung' : 'Spreads for risk limitation'}</li>
                  <li>• {locale === 'de' ? 'Portfolio-Diversifikation' : 'Portfolio diversification'}</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {locale === 'de' ? 'Bildung & Übung' : 'Education & Practice'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Kontinuierliches Lernen ist der Schlüssel zum Erfolg.'
                    : 'Continuous learning is the key to success.'}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {locale === 'de' ? 'Paper Trading vor Echtgeld-Handel' : 'Paper trading before real money'}</li>
                  <li>• {locale === 'de' ? 'Strategien im Demokonto testen' : 'Test strategies in demo account'}</li>
                  <li>• {locale === 'de' ? 'Trading-Journal führen' : 'Keep a trading journal'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="mt-12 bg-red-100 border-l-4 border-financial-red rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-3xl mr-4">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {locale === 'de' ? 'Wichtiger Hinweis' : 'Important Notice'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Optionshandel ist hochspekulativ und nicht für jeden Anleger geeignet. Sie können Ihr gesamtes eingesetztes Kapital verlieren. Handeln Sie nur mit Geld, dessen Verlust Sie sich leisten können. Diese Informationen stellen keine Anlageberatung dar.'
                    : 'Options trading is highly speculative and not suitable for every investor. You can lose all of your invested capital. Only trade with money you can afford to lose. This information does not constitute investment advice.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
