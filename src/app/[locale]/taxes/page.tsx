import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Steuern beim Optionshandel' : 'Options Trading Taxes',
    description: locale === 'de'
      ? 'Alles zur Besteuerung von Optionen in Deutschland: Abgeltungsteuer, Freibeträge, Verlustverrechnung und Meldepflichten.'
      : 'Everything about taxation of options in Germany: Capital gains tax, allowances, loss offsetting and reporting obligations.',
  });
}

export default function TaxesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('taxes');

  const taxConcepts = [
    {
      title: t('capital_gains_tax'),
      description: t('capital_gains_tax_desc'),
      icon: '📊',
    },
    {
      title: t('allowance'),
      description: t('allowance_desc'),
      icon: '💶',
    },
    {
      title: t('loss_offset'),
      description: t('loss_offset_desc'),
      icon: '📉',
    },
    {
      title: t('reporting'),
      description: t('reporting_desc'),
      icon: '📝',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('capital_gains_tax_desc')}
        author="BeInOption"
        datePublished="2025-01-01"
        url={`https://beinoption.de/${locale}/taxes`}
      />

      <div className="bg-gradient-to-br from-primary-50 to-green-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Ein umfassender Leitfaden zur steuerlichen Behandlung von Optionsgewinnen in Deutschland.'
                : 'A comprehensive guide to the tax treatment of options profits in Germany.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          {/* Tax Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {taxConcepts.map((concept, index) => (
              <div key={index} className="card border-l-4 border-financial-green">
                <div className="text-5xl mb-4">{concept.icon}</div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  {concept.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{concept.description}</p>
              </div>
            ))}
          </div>

          {/* Tax Calculation Example */}
          <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {t('tax_example')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700">
                    {locale === 'de' ? 'Gesamtgewinn aus Optionshandel' : 'Total profit from options trading'}
                  </span>
                  <span className="font-semibold text-gray-900">5.000 €</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700">
                    {locale === 'de' ? 'Sparerpauschbetrag (abziehen)' : 'Saver\'s allowance (deduct)'}
                  </span>
                  <span className="font-semibold text-financial-red">- 1.000 €</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">
                    {locale === 'de' ? 'Steuerpflichtiger Gewinn' : 'Taxable profit'}
                  </span>
                  <span className="font-bold text-gray-900">4.000 €</span>
                </div>
                <div className="pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">{locale === 'de' ? 'Abgeltungsteuer (25%)' : 'Capital gains tax (25%)'}</span>
                    <span className="text-gray-900">1.000 €</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">{locale === 'de' ? 'Solidaritätszuschlag (5,5%)' : 'Solidarity surcharge (5.5%)'}</span>
                    <span className="text-gray-900">55 €</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t-2 border-gray-300">
                    <span className="text-gray-900 font-bold text-lg">
                      {locale === 'de' ? 'Gesamte Steuerlast' : 'Total tax liability'}
                    </span>
                    <span className="text-financial-red font-bold text-xl">1.055 €</span>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-900 font-medium">
                      {locale === 'de' ? 'Nettogewinn nach Steuern' : 'Net profit after taxes'}
                    </span>
                    <span className="text-financial-green font-bold text-xl">3.945 €</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              {t('tax_example_desc')}
            </p>
          </div>

          {/* Tax Optimization Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Steueroptimierung' : 'Tax Optimization'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  {locale === 'de' ? 'Freistellungsauftrag nutzen' : 'Use Exemption Order'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Stellen Sie sicher, dass Sie Ihren Freistellungsauftrag bei Ihrem Broker eingerichtet haben. So werden Gewinne bis 1.000 € (2.000 € für Verheiratete) automatisch steuerfrei gestellt.'
                    : 'Make sure you have set up your exemption order with your broker. This way, profits up to €1,000 (€2,000 for married couples) are automatically tax-free.'}
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📅</span>
                  {locale === 'de' ? 'Verluste vortragen' : 'Carry Forward Losses'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Verluste aus dem Vorjahr können mit Gewinnen des aktuellen Jahres verrechnet werden. Stellen Sie einen Antrag beim Finanzamt, falls Ihr Broker die Verluste nicht automatisch vorgetragen hat.'
                    : 'Losses from the previous year can be offset against current year profits. Submit an application to the tax office if your broker has not automatically carried forward the losses.'}
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚖️</span>
                  {locale === 'de' ? 'Verlustverrechnung optimieren' : 'Optimize Loss Offsetting'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Realisieren Sie Verluste noch im laufenden Jahr, um sie mit Gewinnen zu verrechnen. Das reduziert Ihre Steuerlast. Aber Vorsicht vor Wash-Sale-Regeln!'
                    : 'Realize losses in the current year to offset them against profits. This reduces your tax burden. But beware of wash-sale rules!'}
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🏦</span>
                  {locale === 'de' ? 'Mehrere Broker nutzen' : 'Use Multiple Brokers'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Bei mehreren Brokern können Sie Ihren Freistellungsauftrag aufteilen (max. 1.000 € insgesamt). Deutsche Broker führen die Steuer automatisch ab, bei ausländischen müssen Sie selbst melden.'
                    : 'With multiple brokers, you can split your exemption order (max. €1,000 total). German brokers automatically withhold taxes, with foreign brokers you must report yourself.'}
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {locale === 'de' ? 'Wichtige Termine' : 'Important Dates'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl mb-2">📅</div>
                <h3 className="text-lg font-semibold mb-2">31. {locale === 'de' ? 'Dezember' : 'December'}</h3>
                <p className="text-gray-300 text-sm">
                  {locale === 'de'
                    ? 'Letzter Tag für Verlustverrechnung im laufenden Jahr'
                    : 'Last day for loss offsetting in current year'}
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">📋</div>
                <h3 className="text-lg font-semibold mb-2">31. {locale === 'de' ? 'Mai' : 'May'}</h3>
                <p className="text-gray-300 text-sm">
                  {locale === 'de'
                    ? 'Abgabefrist für Steuererklärung (ohne Steuerberater)'
                    : 'Deadline for tax return (without tax advisor)'}
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold mb-2">{locale === 'de' ? 'Jährlich' : 'Annually'}</h3>
                <p className="text-gray-300 text-sm">
                  {locale === 'de'
                    ? 'Broker verschickt Jahressteuerbescheinigung (bis Ende Februar)'
                    : 'Broker sends annual tax certificate (by end of February)'}
                </p>
              </div>
            </div>
          </div>

          {/* Tax Advisor Recommendation */}
          <div className="bg-yellow-50 border-l-4 border-financial-gold rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-3xl mr-4">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {locale === 'de' ? 'Hinweis zum Steuerberater' : 'Tax Advisor Notice'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Diese Informationen stellen keine Steuerberatung dar. Die steuerliche Behandlung kann je nach individueller Situation variieren.'
                    : 'This information does not constitute tax advice. Tax treatment may vary depending on individual circumstances.'}
                </p>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Bei komplexen Situationen oder hohen Gewinnen empfehlen wir die Konsultation eines Steuerberaters mit Expertise im Wertpapierhandel.'
                    : 'For complex situations or high profits, we recommend consulting a tax advisor with expertise in securities trading.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
