import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Fed-Zinssenkung 2025? Auswirkungen auf Optionspreise und Strategien | BeInOptions' : 'Fed Rate Cut Expectations: What It Means for Options Traders in 2025 | BeInOptions',
    description: locale === 'de'
      ? 'Wie eine Zinssenkung der Fed die Optionsmärkte beeinflusst. Erfahren Sie, welche Strategien jetzt profitabel sein könnten.'
      : 'How a Fed rate cut affects options markets. Learn which strategies could be profitable now.',
  });
}

export default function FedRateCutOptionsPost({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}/blog`} className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'de' ? 'Zurück zum Blog' : 'Back to Blog'}
            </Link>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Hoffnung auf Zinssenkung der Fed: Was bedeutet das für den Optionsmarkt?' : 'Markets Rally on Expectations of a Fed Rate Cut: Impact on Options Trading'}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="font-medium">BeInOptions Team</span>
              <span>•</span>
              <time>26. November 2025</time>
              <span>•</span>
              <span>{locale === 'de' ? '9 Min. Lesezeit' : '9 min read'}</span>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white mb-8">
              <p className="text-xl leading-relaxed flex items-start gap-3">
                <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>
                  {locale === 'de'
                    ? 'Die globalen Börsen stiegen zuletzt deutlich, da Anleger hoffen, dass die US-Notenbank Federal Reserve die Zinsen im Dezember senken könnte.'
                    : 'Global markets rose as investors expect the Federal Reserve to cut rates in December.'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="card mb-8">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-0">
                  {locale === 'de' ? 'Die Marktsituation' : 'The Market Situation'}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {locale === 'de'
                  ? 'Die Erwartung einer möglichen Zinssenkung durch die US-Notenbank hat die Märkte in Bewegung gebracht. Während Aktienindizes steigen, reagieren Optionsmärkte sensibel auf Zinsänderungen.'
                  : 'The expectation of a possible rate cut by the US Federal Reserve has moved markets. While stock indices rise, options markets react sensitively to interest rate changes.'}
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-gray-700 text-base mb-0">
                  <strong>Quelle:</strong> <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Reuters</a> — Global Markets Report
                </p>
              </div>
            </div>

            {/* Why Important for Options */}
            <div className="card mb-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Warum ist das für Optionen wichtig?' : 'Why Does This Matter for Options?'}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {locale === 'de'
                  ? 'Zinsen beeinflussen Optionen über mehrere Faktoren. Das Verständnis dieser Zusammenhänge ist entscheidend für erfolgreiche Optionsstrategien:'
                  : 'Interest rates influence options through multiple factors. Understanding these relationships is crucial for successful options strategies:'}
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">1.</span>
                    {locale === 'de' ? 'Implizite Volatilität (IV)' : 'Implied Volatility (IV)'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {locale === 'de'
                      ? 'Zinssenkungen führen häufig zu veränderten Markterwartungen. Die implizite Volatilität kann steigen (vor der Entscheidung) oder fallen (nach der Entscheidung).'
                      : 'Rate cuts often lead to changed market expectations. Implied volatility can rise (before the decision) or fall (after the decision).'}
                  </p>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-gray-700 text-sm mb-0">
                      <strong>{locale === 'de' ? 'Praktischer Effekt:' : 'Practical Effect:'}</strong> {locale === 'de' ? 'Höhere IV = teurere Optionen. Nach Fed-Entscheidungen sinkt IV oft schnell ("IV Crush")' : 'Higher IV = more expensive options. After Fed decisions, IV often drops quickly ("IV Crush")'}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">2.</span>
                    {locale === 'de' ? 'Finanzierungskosten' : 'Financing Costs'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {locale === 'de'
                      ? 'Niedrigere Zinsen bedeuten geringere Kosten für die Finanzierung von Positionen. Dies macht Optionsstrategien mit Kapitalaufwand attraktiver.'
                      : 'Lower interest rates mean lower costs for financing positions. This makes options strategies with capital requirements more attractive.'}
                  </p>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-gray-700 text-sm mb-0">
                      <strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong> {locale === 'de' ? 'Cash-Secured Puts werden attraktiver, da das gebundene Kapital weniger Opportunitätskosten verursacht' : 'Cash-Secured Puts become more attractive as tied-up capital causes fewer opportunity costs'}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">3.</span>
                    {locale === 'de' ? 'Bewertung von Call- und Put-Prämien' : 'Valuation of Call and Put Premiums'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {locale === 'de'
                      ? 'Das Black-Scholes-Modell berücksichtigt risikofreie Zinsen. Sinkende Zinsen beeinflussen theoretisch die Bewertung von Optionen.'
                      : 'The Black-Scholes model considers risk-free interest rates. Falling interest rates theoretically influence options valuation.'}
                  </p>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-gray-700 text-sm mb-0">
                      <strong>{locale === 'de' ? 'Technisch:' : 'Technical:'}</strong> {locale === 'de' ? 'Niedrigere Zinsen → Call-Optionen werden leicht günstiger, Put-Optionen leicht teurer (Rho-Effekt)' : 'Lower rates → Call options become slightly cheaper, Put options slightly more expensive (Rho effect)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Effects */}
            <div className="card mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {locale === 'de' ? 'Sinkende Zinsen führen häufig zu:' : 'Lower Rates Typically Mean:'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-5 shadow">
                  <svg className="w-10 h-10 text-green-600 mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">
                    {locale === 'de' ? 'Mehr Risikoappetit' : 'Higher Risk Appetite'}
                  </h4>
                  <p className="text-gray-700 text-sm text-center">
                    {locale === 'de'
                      ? 'Anleger suchen nach höheren Renditen und nehmen mehr Risiko in Kauf'
                      : 'Investors seek higher returns and take on more risk'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow">
                  <svg className="w-10 h-10 text-green-600 mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">
                    {locale === 'de' ? 'Niedrigeren Prämien' : 'Lower Premiums'}
                  </h4>
                  <p className="text-gray-700 text-sm text-center">
                    {locale === 'de'
                      ? 'Nach Fed-Entscheidungen sinkt oft die implizite Volatilität'
                      : 'Implied volatility often drops after Fed decisions'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow">
                  <svg className="w-10 h-10 text-blue-600 mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">
                    {locale === 'de' ? 'Höheren Aktienkursen' : 'Higher Stock Prices'}
                  </h4>
                  <p className="text-gray-700 text-sm text-center">
                    {locale === 'de'
                      ? 'Was Call-Tradern zugutekommt'
                      : 'Which benefits Call traders'}
                  </p>
                </div>
              </div>
            </div>

            {/* Strategies */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                {locale === 'de' ? 'Optimale Strategien im Zinssenkungsumfeld' : 'Optimal Strategies in Rate Cut Environment'}
              </h2>

              {/* Bull Strategies */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-t-lg p-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {locale === 'de' ? 'Bull-Strategien' : 'Bull Strategies'}
                  </h3>
                </div>
                <div className="border-2 border-green-200 rounded-b-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {locale === 'de'
                      ? 'Zinssenkungen sind typischerweise bullish für Aktienmärkte. Diese Strategien profitieren von steigenden Kursen:'
                      : 'Rate cuts are typically bullish for stock markets. These strategies profit from rising prices:'}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded p-4 border border-green-200">
                      <h5 className="font-bold text-gray-900 mb-2">Bull Call Spread</h5>
                      <p className="text-gray-700 text-sm">
                        {locale === 'de'
                          ? 'Kaufen Sie einen Call, verkaufen Sie einen Call mit höherem Strike. Begrenzt Kosten und Gewinn, aber kosteneffizienter als ein einfacher Call.'
                          : 'Buy a Call, sell a Call with higher strike. Limits costs and profit, but more cost-efficient than a simple Call.'}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-4 border border-green-200">
                      <h5 className="font-bold text-gray-900 mb-2">Cash-Secured Puts</h5>
                      <p className="text-gray-700 text-sm">
                        {locale === 'de'
                          ? 'Verkaufen Sie Puts auf Qualitätsaktien. In steigenden Märkten erzielen Sie Prämieneinnahmen, während die Zinsen niedrig sind.'
                          : 'Sell Puts on quality stocks. In rising markets, you earn premium income while interest rates are low.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volatility Strategies */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-t-lg p-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {locale === 'de' ? 'Volatilitäts-Strategien (Vorsicht!)' : 'Volatility Strategies (Caution!)'}
                  </h3>
                </div>
                <div className="border-2 border-purple-200 rounded-b-lg p-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-gray-700 text-sm mb-0">
                      <strong>{locale === 'de' ? 'Wichtiger Hinweis:' : 'Important Note:'}</strong> {locale === 'de' ? 'Nach Fed-Entscheidungen kann die IV schnell fallen. Vermeiden Sie den Kauf teurer Optionen kurz vor FOMC-Meetings!' : 'After Fed decisions, IV can drop quickly. Avoid buying expensive options shortly before FOMC meetings!'}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded p-4 border border-purple-200">
                      <h5 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Short Straddle/Strangle (Erfahrene)' : 'Short Straddle/Strangle (Experienced)'}</h5>
                      <p className="text-gray-700 text-sm">
                        {locale === 'de'
                          ? 'NACH der Fed-Entscheidung: Profitieren Sie vom IV-Crush, indem Sie Calls UND Puts verkaufen. Nur für sehr erfahrene Trader!'
                          : 'AFTER the Fed decision: Profit from IV crush by selling Calls AND Puts. For very experienced traders only!'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar Spreads */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-lg p-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {locale === 'de' ? 'Calendar Spreads' : 'Calendar Spreads'}
                  </h3>
                </div>
                <div className="border-2 border-blue-200 rounded-b-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {locale === 'de'
                      ? 'Verkaufen Sie kurzfristige Optionen und kaufen Sie längerfristige. Profitieren Sie vom schnelleren Theta-Verfall der Short-Position.'
                      : 'Sell short-term options and buy longer-term ones. Profit from faster Theta decay of the short position.'}
                  </p>
                  <div className="bg-blue-50 rounded p-3 border border-blue-200">
                    <p className="text-gray-700 text-sm mb-0">
                      <strong>{locale === 'de' ? 'Ideal wenn:' : 'Ideal when:'}</strong> {locale === 'de' ? 'Sie neutrale bis leicht bullische Erwartungen haben und von Zeitverfall profitieren möchten' : 'You have neutral to slightly bullish expectations and want to profit from time decay'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For German Traders */}
            <div className="card mb-8 bg-yellow-50 border-2 border-yellow-300">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locale === 'de' ? 'Folgen für deutsche Trader' : 'Implications for German Traders'}
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Gute Phase für Bull-Strategien:' : 'Good Phase for Bull Strategies:'}</strong> {locale === 'de' ? 'Call-Spreads, Cash-Secured Puts und andere bullische Strategien' : 'Call Spreads, Cash-Secured Puts and other bullish strategies'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Vorsicht bei Volatilitätsstrategien:' : 'Caution with Volatility Strategies:'}</strong> {locale === 'de' ? 'IV kann schnell fallen → Verlustgefahr bei Long-Optionen' : 'IV can drop quickly → risk of loss with long options'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Timing beachten:' : 'Watch Timing:'}</strong> {locale === 'de' ? 'VOR Fed-Meetings steigt IV (teuer), NACH Fed-Meetings fällt IV (günstiger)' : 'BEFORE Fed meetings IV rises (expensive), AFTER Fed meetings IV falls (cheaper)'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {locale === 'de' ? 'Zeitlicher Ablauf und Trading-Plan' : 'Timeline and Trading Plan'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{locale === 'de' ? '2-3 Wochen VOR Fed-Meeting' : '2-3 Weeks BEFORE Fed Meeting'}</h4>
                    <p className="text-gray-700 text-sm">
                      {locale === 'de'
                        ? 'IV beginnt zu steigen. Vermeiden Sie den Kauf teurer Optionen. Gut für Optionsverkäufer (z.B. Covered Calls).'
                        : 'IV starts to rise. Avoid buying expensive options. Good for option sellers (e.g. Covered Calls).'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{locale === 'de' ? 'TAG des Fed-Meetings' : 'DAY of Fed Meeting'}</h4>
                    <p className="text-gray-700 text-sm">
                      {locale === 'de'
                        ? 'IV auf Höchststand. Extreme Vorsicht! Nur für sehr erfahrene Trader.'
                        : 'IV at peak. Extreme caution! Only for very experienced traders.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{locale === 'de' ? 'NACH Fed-Entscheidung' : 'AFTER Fed Decision'}</h4>
                    <p className="text-gray-700 text-sm">
                      {locale === 'de'
                        ? 'IV fällt schnell ("IV Crush"). Gute Zeit für Optionskäufer. Setzen Sie auf die neue Trendrichtung.'
                        : 'IV drops quickly ("IV Crush"). Good time for option buyers. Bet on the new trend direction.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 text-center">
              <svg className="w-16 h-16 text-green-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <h3 className="text-3xl font-heading font-bold mb-4">
                {locale === 'de' ? 'Bereit für professionelles Options-Trading?' : 'Ready for Professional Options Trading?'}
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                {locale === 'de'
                  ? 'Nutzen Sie die besten Tools für Ihre Optionsstrategien:'
                  : 'Use the best tools for your options strategies:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Zero-Spread Trading' : 'Zero-Spread Trading'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Über 350 Instrumente' : 'Over 350 instruments'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Professionelle Plattform' : 'Professional platform'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'CySEC reguliert' : 'CySEC regulated'}</span>
                </div>
              </div>
              <a
                href="https://libertex.com/de/signup"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                {locale === 'de' ? 'Jetzt kostenlos registrieren bei Libertex' : 'Register for free at Libertex now'}
              </a>
              <p className="text-sm text-blue-200 mt-4">
                {locale === 'de' ? 'Nur 100€ Mindesteinlage - 3 Millionen Nutzer' : 'Only €100 minimum deposit - 3 million users'}
              </p>
            </div>

            {/* Important Note */}
            <div className="card bg-red-50 border-2 border-red-300">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {locale === 'de' ? 'Wichtige Hinweise' : 'Important Notes'}
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">▸</span>
                  <span><strong>{locale === 'de' ? 'Keine Garantie:' : 'No Guarantee:'}</strong> {locale === 'de' ? 'Fed-Entscheidungen sind unvorhersehbar und können anders ausfallen als erwartet' : 'Fed decisions are unpredictable and may turn out differently than expected'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">▸</span>
                  <span><strong>{locale === 'de' ? 'IV-Crush-Risiko:' : 'IV Crush Risk:'}</strong> {locale === 'de' ? 'Optionen können auch bei richtiger Richtungswette Verluste machen, wenn IV stark fällt' : 'Options can lose money even with correct directional bets if IV drops sharply'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">▸</span>
                  <span><strong>{locale === 'de' ? 'Risikomanagement:' : 'Risk Management:'}</strong> {locale === 'de' ? 'Setzen Sie nie mehr als 2-5% Ihres Kapitals auf eine einzelne Position' : 'Never risk more than 2-5% of your capital on a single position'}</span>
                </li>
              </ul>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}
