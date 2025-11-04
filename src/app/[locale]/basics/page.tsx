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
      icon: '📋',
    },
    {
      title: t('call_option'),
      description: t('call_option_desc'),
      icon: '📈',
    },
    {
      title: t('put_option'),
      description: t('put_option_desc'),
      icon: '📉',
    },
    {
      title: t('strike_price'),
      description: t('strike_price_desc'),
      icon: '🎯',
    },
    {
      title: t('expiration'),
      description: t('expiration_desc'),
      icon: '📅',
    },
    {
      title: t('premium'),
      description: t('premium_desc'),
      icon: '💵',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('what_are_options_desc')}
        author="BeInOption"
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
              <div key={index} className="card">
                <div className="text-5xl mb-4">{concept.icon}</div>
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
