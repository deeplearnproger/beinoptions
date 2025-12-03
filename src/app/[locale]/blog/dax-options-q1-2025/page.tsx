import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Marktanalyse: DAX-Optionen Q1 2025 | Volatilität, Open Interest und Trading-Chancen'
      : 'Market Analysis: DAX Options Q1 2025 | Volatility, Open Interest and Trading Opportunities',
    description: locale === 'de'
      ? 'Eine detaillierte Analyse der DAX-Optionsmärkte im Q1 2025. Volatilitätstrends, Open Interest und Trading-Chancen.'
      : 'A detailed analysis of DAX options markets in Q1 2025. Volatility trends, open interest and trading opportunities.',
  });
}

export default function DaxOptionsQ1Page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {locale === 'de' ? 'Marktanalyse | 10 Min Lesezeit' : 'Market Analysis | 10 min read'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Marktanalyse: DAX-Optionen Q1 2025'
                : 'Market Analysis: DAX Options Q1 2025'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Eine detaillierte Analyse der DAX-Optionsmärkte im Q1 2025. Volatilitätstrends, Open Interest und Trading-Chancen.'
                : 'A detailed analysis of DAX options markets in Q1 2025. Volatility trends, open interest and trading opportunities.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Market Overview */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Marktüberblick Q1 2025' : 'Market Overview Q1 2025'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {locale === 'de'
                  ? 'Der DAX startete das Jahr 2025 mit gemischten Signalen. Nach einem starken Jahresabschluss 2024 bei 20.200 Punkten zeigen sich im ersten Quartal Konsolidierungstendenzen. Die Optionsmärkte spiegeln eine erhöhte Unsicherheit wider.'
                  : 'The DAX started 2025 with mixed signals. After a strong year-end 2024 at 20,200 points, the first quarter shows consolidation tendencies. The options markets reflect increased uncertainty.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {locale === 'de' ? 'DAX-Niveau' : 'DAX Level'}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">20,450</p>
                  <p className="text-sm text-green-700 font-semibold">+1.2% QTD</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">
                    {locale === 'de' ? 'Ø Volatilität' : 'Avg Volatility'}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">18.5%</p>
                  <p className="text-sm text-yellow-700 font-semibold">{locale === 'de' ? 'Erhöht' : 'Elevated'}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-lg font-bold text-green-900 mb-2">Open Interest</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">2.8M</p>
                  <p className="text-sm text-green-700 font-semibold">+15% vs Q4</p>
                </div>
              </div>
            </div>

            {/* Volatility Analysis */}
            <div className="card bg-gradient-to-br from-purple-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {locale === 'de' ? 'Volatilitätsanalyse' : 'Volatility Analysis'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Die implizite Volatilität (IV) im DAX zeigt im Q1 2025 eine deutliche Zweiteilung:'
                  : 'The implied volatility (IV) in the DAX shows a clear division in Q1 2025:'}
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'de' ? 'IV Rank Entwicklung' : 'IV Rank Development'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span className="font-semibold text-gray-900">{locale === 'de' ? 'Januar' : 'January'}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 bg-gray-200 rounded-full h-3">
                          <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '62%' }}></div>
                        </div>
                        <span className="font-bold text-gray-900 w-16">62%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span className="font-semibold text-gray-900">{locale === 'de' ? 'Februar' : 'February'}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 bg-gray-200 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full" style={{ width: '48%' }}></div>
                        </div>
                        <span className="font-bold text-gray-900 w-16">48%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span className="font-semibold text-gray-900">{locale === 'de' ? 'März (Prognose)' : 'March (Forecast)'}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 bg-gray-200 rounded-full h-3">
                          <div className="bg-blue-500 h-3 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                        <span className="font-bold text-gray-900 w-16">55%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-900 mb-2">
                      {locale === 'de' ? 'Haupttreiber hoher IV' : 'Main Drivers of High IV'}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">▸</span>
                        <span>{locale === 'de' ? 'EZB-Zinsentscheidungen (25. Jan, 6. März)' : 'ECB interest rate decisions (Jan 25, Mar 6)'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">▸</span>
                        <span>{locale === 'de' ? 'US-Handelspolitik unter neuer Regierung' : 'US trade policy under new administration'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">▸</span>
                        <span>{locale === 'de' ? 'Deutsche Wirtschaftsdaten (Rezessionsängste)' : 'German economic data (recession fears)'}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">
                      {locale === 'de' ? 'IV-Reduktion im Februar' : 'IV Reduction in February'}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">▸</span>
                        <span>{locale === 'de' ? 'Stabilisierung nach Januar-Earnings' : 'Stabilization after January earnings'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">▸</span>
                        <span>{locale === 'de' ? 'Weniger makroökonomische Events' : 'Fewer macroeconomic events'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">▸</span>
                        <span>{locale === 'de' ? 'Technische Konsolidierung' : 'Technical consolidation'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Interest Analysis */}
            <div className="card bg-gradient-to-br from-blue-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                {locale === 'de' ? 'Open Interest Analyse' : 'Open Interest Analysis'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Das Open Interest im DAX zeigt signifikante Konzentrationen bei bestimmten Strike-Preisen:'
                  : 'Open interest in the DAX shows significant concentrations at certain strike prices:'}
              </p>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-300 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Top Strike-Preise (März-Verfall)' : 'Top Strike Prices (March Expiry)'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">21,000</span>
                      <span className="ml-3 text-sm text-gray-600">(Call)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-700">485K Kontrakte</p>
                      <p className="text-xs text-gray-600">{locale === 'de' ? 'Widerstand' : 'Resistance'}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">20,000</span>
                      <span className="ml-3 text-sm text-gray-600">(Put)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-700">620K Kontrakte</p>
                      <p className="text-xs text-gray-600">{locale === 'de' ? 'Unterstützung' : 'Support'}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">20,500</span>
                      <span className="ml-3 text-sm text-gray-600">(Call & Put)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-purple-700">890K Kontrakte</p>
                      <p className="text-xs text-gray-600">{locale === 'de' ? 'Max Pain Point' : 'Max Pain Point'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
                <h4 className="font-bold text-yellow-900 mb-2">
                  {locale === 'de' ? 'Interpretation:' : 'Interpretation:'}
                </h4>
                <p className="text-sm text-gray-800">
                  {locale === 'de'
                    ? 'Die massive Put-Wall bei 20.000 deutet auf starke Unterstützung hin. Der Max Pain Point bei 20.500 suggeriert, dass der DAX im März-Verfall wahrscheinlich in diesem Bereich handeln wird. Die Call-Konzentration bei 21.000 stellt einen wichtigen Widerstand dar.'
                    : 'The massive put wall at 20,000 indicates strong support. The max pain point at 20,500 suggests the DAX will likely trade around this level at March expiry. The call concentration at 21,000 represents important resistance.'}
                </p>
              </div>
            </div>

            {/* Put/Call Ratio */}
            <div className="card bg-gradient-to-br from-green-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Put/Call-Ratio' : 'Put/Call Ratio'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Das Put/Call-Ratio gibt Aufschluss über die Marktstimmung:'
                  : 'The put/call ratio provides insight into market sentiment:'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'de' ? 'Aktuelles Ratio' : 'Current Ratio'}
                  </h3>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-green-700 mb-2">1.25</p>
                    <p className="text-sm text-gray-600">
                      {locale === 'de'
                        ? '(1.25 Puts pro 1 Call gekauft)'
                        : '(1.25 puts bought per 1 call)'}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>{locale === 'de' ? 'Bedeutung:' : 'Meaning:'}</strong>{' '}
                      {locale === 'de'
                        ? 'Leicht bearish bis neutrale Stimmung. Erhöhte Absicherungsaktivität.'
                        : 'Slightly bearish to neutral sentiment. Increased hedging activity.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'de' ? 'Historische Vergleiche' : 'Historical Comparisons'}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Q4 2024:</span>
                      <span className="font-bold">0.95</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Q3 2024:</span>
                      <span className="font-bold">1.15</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                      <span>Q1 2025:</span>
                      <span className="font-bold text-green-700">1.25</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    {locale === 'de'
                      ? '→ Deutlich mehr Absicherung als in Q4'
                      : '→ Significantly more hedging than in Q4'}
                  </p>
                </div>
              </div>
            </div>

            {/* Trading Opportunities */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {locale === 'de' ? 'Trading-Chancen' : 'Trading Opportunities'}
              </h2>

              <div className="space-y-6">
                {/* Opportunity 1 */}
                <div className="bg-white rounded-lg p-6 border-2 border-indigo-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Iron Condor bei 20.000-21.000' : 'Iron Condor at 20,000-21,000'}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Nutzen Sie die Range zwischen den großen Open Interest Clustern.'
                          : 'Use the range between large open interest clusters.'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 rounded p-4">
                    <p className="text-sm text-gray-800 mb-2"><strong>{locale === 'de' ? 'Setup:' : 'Setup:'}</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>▸ {locale === 'de' ? 'Verkauf 20.000 Put / 21.000 Call' : 'Sell 20,000 put / 21,000 call'}</li>
                      <li>▸ {locale === 'de' ? 'Kauf 19.500 Put / 21.500 Call' : 'Buy 19,500 put / 21,500 call'}</li>
                      <li>▸ {locale === 'de' ? 'Laufzeit: März-Verfall' : 'Expiry: March expiration'}</li>
                      <li>▸ {locale === 'de' ? 'Erwartete Prämie: ~150-200€ pro Kontrakt' : 'Expected premium: ~€150-200 per contract'}</li>
                    </ul>
                  </div>
                </div>

                {/* Opportunity 2 */}
                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'IV Crush nach EZB-Entscheidung' : 'IV Crush After ECB Decision'}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Verkaufen Sie vor der EZB-Sitzung am 6. März, wenn IV hoch ist.'
                          : 'Sell before ECB meeting on March 6 when IV is high.'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-4">
                    <p className="text-sm text-gray-800 mb-2"><strong>{locale === 'de' ? 'Strategie:' : 'Strategy:'}</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>▸ {locale === 'de' ? 'Verkauf von Straddles/Strangles 3-5 Tage vor Event' : 'Sell straddles/strangles 3-5 days before event'}</li>
                      <li>▸ {locale === 'de' ? 'Schließen direkt nach Entscheidung' : 'Close immediately after decision'}</li>
                      <li>▸ {locale === 'de' ? 'Profitieren vom IV-Verfall' : 'Profit from IV crush'}</li>
                    </ul>
                  </div>
                </div>

                {/* Opportunity 3 */}
                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Put-Spreads zur Absicherung' : 'Put Spreads for Hedging'}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Nutzen Sie die günstigen Put-Preise für Portfolio-Absicherung.'
                          : 'Use cheap put prices for portfolio hedging.'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded p-4">
                    <p className="text-sm text-gray-800 mb-2"><strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>▸ {locale === 'de' ? 'Kauf 20.000 Put / Verkauf 19.500 Put' : 'Buy 20,000 put / Sell 19,500 put'}</li>
                      <li>▸ {locale === 'de' ? 'Kosten: ~80-100€' : 'Cost: ~€80-100'}</li>
                      <li>▸ {locale === 'de' ? 'Max. Schutz: 500 Punkte (2.5% Absicherung)' : 'Max protection: 500 points (2.5% hedge)'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Events Calendar */}
            <div className="card bg-gradient-to-br from-yellow-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Wichtige Events Q1 2025' : 'Key Events Q1 2025'}
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{locale === 'de' ? '6. März: EZB-Zinsentscheidung' : 'March 6: ECB Rate Decision'}</h4>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      {locale === 'de' ? 'Hohe IV erwartet' : 'High IV expected'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Erwartete Zinssenkung um 25 Basispunkte. Hohe Volatilität vor und nach der Entscheidung.'
                      : 'Expected rate cut of 25 basis points. High volatility before and after decision.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{locale === 'de' ? '21. März: Options-Verfall' : 'March 21: Options Expiration'}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {locale === 'de' ? 'Großer Verfall' : 'Large expiry'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Quartalsweiser Verfall mit großem Open Interest. Erwarten Sie erhöhte Volatilität in der Woche vor Verfall.'
                      : 'Quarterly expiration with large open interest. Expect increased volatility in the week before expiry.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{locale === 'de' ? '28. März: Deutsche Inflationsdaten' : 'March 28: German Inflation Data'}</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      {locale === 'de' ? 'Moderate IV' : 'Moderate IV'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Wichtiger Indikator für zukünftige EZB-Politik. Abweichungen von Erwartungen können zu Bewegungen führen.'
                      : 'Important indicator for future ECB policy. Deviations from expectations can cause movements.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="card bg-gradient-to-br from-red-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {locale === 'de' ? 'Risikobewertung' : 'Risk Assessment'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border-2 border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">
                    {locale === 'de' ? 'Hauptrisiken' : 'Main Risks'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Geopolitik:' : 'Geopolitics:'}</strong> {locale === 'de' ? 'Eskalation internationaler Konflikte' : 'Escalation of international conflicts'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Rezession:' : 'Recession:'}</strong> {locale === 'de' ? 'Deutsche Wirtschaft weiterhin schwach' : 'German economy remains weak'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Zinsrisiko:' : 'Rate risk:'}</strong> {locale === 'de' ? 'Unerwartete EZB-Entscheidungen' : 'Unexpected ECB decisions'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">
                    {locale === 'de' ? 'Chancen' : 'Opportunities'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Zinssenkungen:' : 'Rate cuts:'}</strong> {locale === 'de' ? 'Unterstützung für Aktienmärkte' : 'Support for equity markets'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Bewertung:' : 'Valuation:'}</strong> {locale === 'de' ? 'DAX relativ günstig vs. S&P 500' : 'DAX relatively cheap vs. S&P 500'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Technologie:' : 'Technology:'}</strong> {locale === 'de' ? 'KI-Investments in Deutschland steigen' : 'AI investments in Germany rising'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="card bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <h2 className="text-3xl font-heading font-bold mb-4">
                {locale === 'de' ? 'Fazit' : 'Conclusion'}
              </h2>
              <p className="text-purple-100 mb-4 leading-relaxed">
                {locale === 'de'
                  ? 'Der DAX-Optionsmarkt im Q1 2025 bietet interessante Möglichkeiten für erfahrene Trader. Die erhöhte Volatilität um wichtige Events und die klaren Support/Resistance-Level durch hohe Open Interest Cluster schaffen attraktive Setups.'
                  : 'The DAX options market in Q1 2025 offers interesting opportunities for experienced traders. Elevated volatility around key events and clear support/resistance levels from high open interest clusters create attractive setups.'}
              </p>
              <p className="text-purple-100 leading-relaxed">
                {locale === 'de'
                  ? 'Nutzen Sie die vorgestellten Strategien bei Libertex mit professionellen Tools und niedrigen Gebühren!'
                  : 'Use the presented strategies at Libertex with professional tools and low fees!'}
              </p>
              <div className="mt-6">
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Jetzt DAX-Optionen handeln' : 'Trade DAX Options Now'}
                </a>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Diese Analyse dient nur zu Informationszwecken und stellt keine Anlageberatung dar. Der Handel mit Optionen ist mit erheblichen Risiken verbunden und kann zum Totalverlust führen. Vergangene Performance ist keine Garantie für zukünftige Ergebnisse.'
                  : 'This analysis is for informational purposes only and does not constitute investment advice. Options trading involves significant risks and can result in total loss. Past performance is no guarantee of future results.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2025-01-01</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
