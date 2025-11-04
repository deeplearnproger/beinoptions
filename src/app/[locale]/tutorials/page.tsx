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
      icon: '🎯',
      difficulty: locale === 'de' ? 'Anfänger' : 'Beginner',
      time: locale === 'de' ? '30 Minuten' : '30 minutes',
    },
    {
      title: t('covered_call_tutorial'),
      steps: t('covered_call_steps').split('\n'),
      icon: '💰',
      difficulty: locale === 'de' ? 'Mittel' : 'Intermediate',
      time: locale === 'de' ? '45 Minuten' : '45 minutes',
    },
    {
      title: t('broker_setup'),
      steps: t('broker_setup_steps').split('\n'),
      icon: '🏦',
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
                    <div className="text-5xl">{tutorial.icon}</div>
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
                <div className="text-3xl mb-3">📚</div>
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
                <div className="text-3xl mb-3">💰</div>
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
                <div className="text-3xl mb-3">📝</div>
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
                <div className="text-3xl mb-3">🎯</div>
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
