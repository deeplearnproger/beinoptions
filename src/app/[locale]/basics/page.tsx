import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Grundlagen des Optionshandels' : 'Options Trading Basics',
    description: locale === 'de'
      ? 'Lernen Sie die Grundlagen des Optionshandels: Calls, Puts, Strike, Laufzeit und Prämie einfach erklärt.'
      : 'Learn the basics of options trading: Calls, puts, strike, expiration and premium explained simply.',
    keywords: locale === 'de'
      ? ['Optionen Grundlagen', 'Call Option', 'Put Option', 'Strike', 'Optionsprämie']
      : ['options basics', 'call option', 'put option', 'strike', 'option premium'],
  });
}

export default function BasicsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('basics');
  const tNav = useTranslations('nav');

  const concepts = [
    {
      title: t('what_are_options'),
      description: t('what_are_options_desc'),
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      title: t('call_option'),
      description: t('call_option_desc'),
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      title: t('put_option'),
      description: t('put_option_desc'),
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
    },
    {
      title: t('strike_price'),
      description: t('strike_price_desc'),
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: t('expiration'),
      description: t('expiration_desc'),
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
    {
      title: t('premium'),
      description: t('premium_desc'),
      iconBg: 'from-cyan-50 to-sky-100',
      iconColor: 'text-sky-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('what_are_options_desc')}
        author="BeInOptions"
        datePublished="2025-01-01"
        url={`https://beinoption.de/${locale}/basics`}
      />
      <BreadcrumbSchema
        items={[
          { name: tNav('home'), url: `https://beinoption.de/${locale}` },
          { name: tNav('basics'), url: `https://beinoption.de/${locale}/basics` },
        ]}
      />

      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              {locale === 'de'
                ? 'Eine umfassende Einführung in die Welt der Optionen für Einsteiger und Fortgeschrittene.'
                : 'A comprehensive introduction to the world of options for beginners and advanced traders.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${concept.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className={`w-7 h-7 ${concept.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={concept.iconPath} />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  {concept.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{concept.description}</p>
              </div>
            ))}
          </div>

          {/* Example Section */}
          <div className="mt-16 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Praktisches Beispiel' : 'Practical Example'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'de' ? 'Kauf einer Call-Option' : 'Buying a Call Option'}
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>{locale === 'de' ? 'Basiswert:' : 'Underlying:'}</strong> {locale === 'de' ? 'BMW Aktie, aktueller Kurs 100 €' : 'BMW stock, current price €100'}
                </p>
                <p>
                  <strong>Strike:</strong> 105 €
                </p>
                <p>
                  <strong>{locale === 'de' ? 'Laufzeit:' : 'Expiration:'}</strong> {locale === 'de' ? '3 Monate' : '3 months'}
                </p>
                <p>
                  <strong>{locale === 'de' ? 'Prämie:' : 'Premium:'}</strong> 3 € {locale === 'de' ? 'pro Aktie' : 'per share'}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900">
                    {locale === 'de' ? 'Szenarien:' : 'Scenarios:'}
                  </p>
                  <ul className="mt-2 space-y-2 list-disc list-inside">
                    <li className="text-financial-green">
                      {locale === 'de'
                        ? 'Kurs steigt auf 115 €: Gewinn von 7 € pro Aktie (115 - 105 - 3)'
                        : 'Price rises to €115: Profit of €7 per share (115 - 105 - 3)'}
                    </li>
                    <li className="text-gray-600">
                      {locale === 'de'
                        ? 'Kurs bleibt bei 100 €: Option verfällt, Verlust von 3 € (Prämie)'
                        : 'Price stays at €100: Option expires, loss of €3 (premium)'}
                    </li>
                    <li className="text-financial-red">
                      {locale === 'de'
                        ? 'Kurs fällt auf 90 €: Option verfällt, Verlust von 3 € (Prämie)'
                        : 'Price falls to €90: Option expires, loss of €3 (premium)'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Wichtige Erkenntnisse' : 'Key Takeaways'}
            </h2>
            <div className="card bg-gray-50">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    {locale === 'de'
                      ? 'Optionen geben das Recht, aber nicht die Pflicht zum Kauf/Verkauf'
                      : 'Options give the right, but not the obligation, to buy/sell'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    {locale === 'de'
                      ? 'Das maximale Risiko für Käufer ist auf die Prämie begrenzt'
                      : 'Maximum risk for buyers is limited to the premium'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    {locale === 'de'
                      ? 'Optionen verfallen wertlos, wenn sie nicht im Geld sind'
                      : 'Options expire worthless if they are not in the money'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    {locale === 'de'
                      ? 'Ein Optionskontrakt umfasst typischerweise 100 Aktien'
                      : 'One option contract typically covers 100 shares'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
