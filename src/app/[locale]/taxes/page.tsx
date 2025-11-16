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
      icon: (
        <svg className="w-8 h-8 text-financial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: t('allowance'),
      description: t('allowance_desc'),
      icon: (
        <svg className="w-8 h-8 text-financial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('loss_offset'),
      description: t('loss_offset_desc'),
      icon: (
        <svg className="w-8 h-8 text-financial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
    },
    {
      title: t('reporting'),
      description: t('reporting_desc'),
      icon: (
        <svg className="w-8 h-8 text-financial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('capital_gains_tax_desc')}
        author="BeInOptions"
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
              <div key={index} className="card border-l-4 border-financial-green hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  {concept.icon}
                </div>
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
              <div className="card hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {locale === 'de' ? 'Freistellungsauftrag nutzen' : 'Use Exemption Order'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Stellen Sie sicher, dass Sie Ihren Freistellungsauftrag bei Ihrem Broker eingerichtet haben. So werden Gewinne bis 1.000 € (2.000 € für Verheiratete) automatisch steuerfrei gestellt.'
                    : 'Make sure you have set up your exemption order with your broker. This way, profits up to €1,000 (€2,000 for married couples) are automatically tax-free.'}
                </p>
              </div>

              <div className="card hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {locale === 'de' ? 'Verluste vortragen' : 'Carry Forward Losses'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Verluste aus dem Vorjahr können mit Gewinnen des aktuellen Jahres verrechnet werden. Stellen Sie einen Antrag beim Finanzamt, falls Ihr Broker die Verluste nicht automatisch vorgetragen hat.'
                    : 'Losses from the previous year can be offset against current year profits. Submit an application to the tax office if your broker has not automatically carried forward the losses.'}
                </p>
              </div>

              <div className="card hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {locale === 'de' ? 'Verlustverrechnung optimieren' : 'Optimize Loss Offsetting'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Realisieren Sie Verluste noch im laufenden Jahr, um sie mit Gewinnen zu verrechnen. Das reduziert Ihre Steuerlast. Aber Vorsicht vor Wash-Sale-Regeln!'
                    : 'Realize losses in the current year to offset them against profits. This reduces your tax burden. But beware of wash-sale rules!'}
                </p>
              </div>

              <div className="card hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">31. {locale === 'de' ? 'Dezember' : 'December'}</h3>
                <p className="text-gray-300 text-sm">
                  {locale === 'de'
                    ? 'Letzter Tag für Verlustverrechnung im laufenden Jahr'
                    : 'Last day for loss offsetting in current year'}
                </p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">31. {locale === 'de' ? 'Mai' : 'May'}</h3>
                <p className="text-gray-300 text-sm">
                  {locale === 'de'
                    ? 'Abgabefrist für Steuererklärung (ohne Steuerberater)'
                    : 'Deadline for tax return (without tax advisor)'}
                </p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
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
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {locale === 'de' ? 'Wichtiger Hinweis' : 'Important Notice'}
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
