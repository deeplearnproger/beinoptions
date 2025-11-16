import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import HowToSchema from '@/components/seo/HowToSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Optionshandel Anleitungen' : 'Options Trading Tutorials',
    description: locale === 'de'
      ? 'Schritt-für-Schritt Anleitungen für Optionshandel: Erste Option kaufen, Covered Call verkaufen, Broker einrichten.'
      : 'Step-by-step tutorials for options trading: Buy first option, sell covered call, set up broker.',
  });
}

export default function TutorialsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('tutorials');

  const tutorials = [
    {
      title: t('first_option'),
      steps: t('first_option_steps').split('\n'),
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      time: locale === 'de' ? '30 Minuten' : '30 minutes',
    },
    {
      title: t('covered_call_tutorial'),
      steps: t('covered_call_steps').split('\n'),
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      difficulty: locale === 'de' ? 'Mittel' : 'Intermediate',
      time: locale === 'de' ? '45 Minuten' : '45 minutes',
    },
    {
      title: t('broker_setup'),
      steps: t('broker_setup_steps').split('\n'),
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      time: locale === 'de' ? '1-3 Tage' : '1-3 days',
    },
  ];

  return (
    <>
      <HowToSchema
        name={t('first_option')}
        description={t('first_option_steps')}
        steps={t('first_option_steps').split('\n').map((step) => ({
          name: step,
          text: step,
        }))}
        totalTime="PT30M"
      />

      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Praktische Schritt-für-Schritt Anleitungen für erfolgreichen Optionshandel.'
                : 'Practical step-by-step guides for successful options trading.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {tutorials.map((tutorial, tutIndex) => (
              <div key={tutIndex} className="card border-l-4 border-primary-600">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tutorial.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                      <svg className={`w-8 h-8 ${tutorial.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tutorial.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                        {tutorial.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tutorial.time}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          {tutorial.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {tutorial.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                        {stepIndex + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-16 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Wichtige Tipps für Anfänger' : 'Important Tips for Beginners'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Bildung zuerst' : 'Education First'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Lernen Sie die Grundlagen, bevor Sie echtes Geld investieren. Nutzen Sie Demokonten zum Üben.'
                    : 'Learn the basics before investing real money. Use demo accounts to practice.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Klein anfangen' : 'Start Small'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Beginnen Sie mit kleinen Positionen und steigern Sie diese schrittweise mit Ihrer Erfahrung.'
                    : 'Start with small positions and increase them gradually with your experience.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Trading-Journal' : 'Trading Journal'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Dokumentieren Sie alle Trades, um aus Fehlern zu lernen und Erfolge zu wiederholen.'
                    : 'Document all trades to learn from mistakes and repeat successes.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-rose-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Risikomanagement' : 'Risk Management'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Setzen Sie nie mehr als 2-5% Ihres Kapitals in einen einzelnen Trade.'
                    : 'Never risk more than 2-5% of your capital in a single trade.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
