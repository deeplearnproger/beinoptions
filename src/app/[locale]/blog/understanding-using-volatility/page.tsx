import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Volatilität verstehen und nutzen | IV-Daten für bessere Trading-Entscheidungen'
      : 'Understanding and Using Volatility | IV Data for Better Trading Decisions',
    description: locale === 'de'
      ? 'Implizite Volatilität ist einer der wichtigsten Faktoren im Optionshandel. Lernen Sie, wie Sie IV-Daten nutzen, um bessere Trading-Entscheidungen zu treffen.'
      : 'Implied volatility is one of the most important factors in options trading. Learn how to use IV data to make better trading decisions.',
  });
}

export default function UnderstandingVolatilityPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              {locale === 'de' ? 'Marktanalyse | 8 Min Lesezeit' : 'Market Analysis | 8 min read'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Volatilität verstehen und nutzen'
                : 'Understanding and Using Volatility'}
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Implizite Volatilität ist einer der wichtigsten Faktoren im Optionshandel. Lernen Sie, wie Sie IV-Daten nutzen, um bessere Trading-Entscheidungen zu treffen.'
                : 'Implied volatility is one of the most important factors in options trading. Learn how to use IV data to make better trading decisions.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Was ist Volatilität?' : 'What is Volatility?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Volatilität beschreibt die Schwankungsbreite eines Kurses. Im Optionshandel unterscheiden wir zwischen zwei Arten:'
                  : 'Volatility describes the range of price fluctuations. In options trading, we distinguish between two types:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {locale === 'de' ? 'Historische Volatilität (HV)' : 'Historical Volatility (HV)'}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {locale === 'de'
                      ? 'Misst die tatsächlichen Kursschwankungen in der Vergangenheit. Sie zeigt, wie stark der Kurs bereits geschwankt hat.'
                      : 'Measures actual past price fluctuations. It shows how much the price has already fluctuated.'}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    {locale === 'de' ? 'Implizite Volatilität (IV)' : 'Implied Volatility (IV)'}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {locale === 'de'
                      ? 'Spiegelt die erwarteten zukünftigen Schwankungen wider. Sie wird aus den aktuellen Optionspreisen abgeleitet.'
                      : 'Reflects expected future fluctuations. It is derived from current option prices.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Why IV Matters */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {locale === 'de' ? 'Warum ist IV so wichtig?' : 'Why is IV so Important?'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Die implizite Volatilität beeinflusst direkt den Preis von Optionen. Je höher die IV, desto teurer werden Optionen – und umgekehrt.'
                  : 'Implied volatility directly affects option prices. The higher the IV, the more expensive options become – and vice versa.'}
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">
                    {locale === 'de' ? 'Hohe IV = Teure Optionen' : 'High IV = Expensive Options'}
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Markt erwartet starke Bewegungen' : 'Market expects strong movements'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Gut für Optionsverkäufer (höhere Prämien)' : 'Good for option sellers (higher premiums)'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Teuer für Optionskäufer' : 'Expensive for option buyers'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-900 mb-2">
                    {locale === 'de' ? 'Niedrige IV = Günstige Optionen' : 'Low IV = Cheap Options'}
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span>{locale === 'de' ? 'Markt erwartet wenig Bewegung' : 'Market expects little movement'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span>{locale === 'de' ? 'Gut für Optionskäufer (niedrigere Kosten)' : 'Good for option buyers (lower costs)'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span>{locale === 'de' ? 'Weniger lukrativ für Verkäufer' : 'Less lucrative for sellers'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IV Rank and IV Percentile */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'IV Rank und IV Percentile' : 'IV Rank and IV Percentile'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Um zu verstehen, ob die aktuelle IV hoch oder niedrig ist, verwenden Trader zwei wichtige Kennzahlen:'
                  : 'To understand whether current IV is high or low, traders use two important metrics:'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    IV Rank
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {locale === 'de'
                      ? 'Zeigt die aktuelle IV im Verhältnis zum 52-Wochen-Hoch und -Tief.'
                      : 'Shows current IV relative to the 52-week high and low.'}
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-gray-600 mb-2"><strong>{locale === 'de' ? 'Formel:' : 'Formula:'}</strong></p>
                    <p className="font-mono text-sm text-gray-800 mb-3">
                      (IV aktuell - IV min) / (IV max - IV min) × 100
                    </p>
                    <div className="space-y-1 text-xs text-gray-700">
                      <p><strong className="text-green-700">{'>'} 50%:</strong> {locale === 'de' ? 'Hohe IV' : 'High IV'}</p>
                      <p><strong className="text-red-700">{'<'} 50%:</strong> {locale === 'de' ? 'Niedrige IV' : 'Low IV'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    IV Percentile
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {locale === 'de'
                      ? 'Zeigt an, wie oft die IV in den letzten 52 Wochen niedriger war als heute.'
                      : 'Shows how often IV was lower than today in the past 52 weeks.'}
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-gray-600 mb-2"><strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong></p>
                    <p className="text-sm text-gray-800 mb-3">
                      {locale === 'de'
                        ? 'IV Percentile = 80% bedeutet: Die IV war in 80% der Zeit niedriger als aktuell.'
                        : 'IV Percentile = 80% means: IV was lower than currently 80% of the time.'}
                    </p>
                    <div className="space-y-1 text-xs text-gray-700">
                      <p><strong className="text-green-700">{'>'} 75%:</strong> {locale === 'de' ? 'Sehr hohe IV' : 'Very high IV'}</p>
                      <p><strong className="text-red-700">{'<'} 25%:</strong> {locale === 'de' ? 'Sehr niedrige IV' : 'Very low IV'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Strategies Based on IV */}
            <div className="card bg-gradient-to-br from-green-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locale === 'de' ? 'Trading-Strategien basierend auf IV' : 'Trading Strategies Based on IV'}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'de' ? 'Bei hoher IV (IV Rank > 50%)' : 'At High IV (IV Rank > 50%)'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded p-4">
                      <h4 className="font-bold text-green-900 mb-2">
                        {locale === 'de' ? 'Optionen verkaufen' : 'Sell Options'}
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">▸</span>
                          <span>{locale === 'de' ? 'Covered Calls schreiben' : 'Write covered calls'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">▸</span>
                          <span>{locale === 'de' ? 'Cash-Secured Puts verkaufen' : 'Sell cash-secured puts'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">▸</span>
                          <span>{locale === 'de' ? 'Credit Spreads einsetzen' : 'Use credit spreads'}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-4">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Vorteil:' : 'Advantage:'}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {locale === 'de'
                          ? 'Sie kassieren hohe Prämien. Wenn die IV sinkt (was oft passiert), gewinnt Ihre Position zusätzlich.'
                          : 'You collect high premiums. If IV drops (which often happens), your position gains additionally.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'de' ? 'Bei niedriger IV (IV Rank < 50%)' : 'At Low IV (IV Rank < 50%)'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded p-4">
                      <h4 className="font-bold text-blue-900 mb-2">
                        {locale === 'de' ? 'Optionen kaufen' : 'Buy Options'}
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">▸</span>
                          <span>{locale === 'de' ? 'Long Calls bei bullishem Ausblick' : 'Long calls on bullish outlook'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">▸</span>
                          <span>{locale === 'de' ? 'Long Puts bei bearishem Ausblick' : 'Long puts on bearish outlook'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">▸</span>
                          <span>{locale === 'de' ? 'Debit Spreads nutzen' : 'Use debit spreads'}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-4">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Vorteil:' : 'Advantage:'}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {locale === 'de'
                          ? 'Optionen sind günstig. Wenn die IV steigt, profitieren Sie doppelt: durch Kursbewegung UND IV-Anstieg.'
                          : 'Options are cheap. If IV rises, you profit twice: through price movement AND IV increase.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Example */}
            <div className="card bg-gradient-to-br from-yellow-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Praktisches Beispiel' : 'Practical Example'}
              </h2>
              <div className="bg-white rounded-lg p-6 border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">
                  {locale === 'de' ? 'Szenario: Tesla vor Earnings' : 'Scenario: Tesla Before Earnings'}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 rounded p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-600 text-white rounded-full font-bold text-lg mb-3">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Situation' : 'Situation'}
                      </h4>
                      <p className="text-sm">
                        {locale === 'de'
                          ? 'Tesla veröffentlicht in 2 Wochen Quartalszahlen. Die IV steigt von 40% auf 65%.'
                          : 'Tesla releases quarterly results in 2 weeks. IV rises from 40% to 65%.'}
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-600 text-white rounded-full font-bold text-lg mb-3">2</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'IV Rank' : 'IV Rank'}
                      </h4>
                      <p className="text-sm">
                        {locale === 'de'
                          ? 'IV Rank = 85% → Die IV ist sehr hoch im Vergleich zum Jahresverlauf.'
                          : 'IV Rank = 85% → IV is very high compared to the year.'}
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-600 text-white rounded-full font-bold text-lg mb-3">3</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Strategie' : 'Strategy'}
                      </h4>
                      <p className="text-sm">
                        {locale === 'de'
                          ? 'Verkaufen Sie Optionen (z.B. Iron Condor), um von hoher IV zu profitieren.'
                          : 'Sell options (e.g., iron condor) to profit from high IV.'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="text-sm">
                      <strong className="text-green-900">{locale === 'de' ? 'Ergebnis:' : 'Result:'}</strong>{' '}
                      {locale === 'de'
                        ? 'Nach den Earnings fällt die IV auf 45%. Sie profitieren vom IV-Verfall (Vega) – auch wenn sich der Aktienkurs nicht stark bewegt.'
                        : 'After earnings, IV drops to 45%. You profit from IV crush (Vega) – even if the stock price doesn\'t move much.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools and Resources */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Tools zur IV-Analyse' : 'Tools for IV Analysis'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg p-6 border-2 border-indigo-200">
                  <h3 className="font-bold text-indigo-900 mb-3">
                    {locale === 'de' ? 'Kostenlose Tools' : 'Free Tools'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>TradingView:</strong> {locale === 'de' ? 'IV-Indikatoren und Charts' : 'IV indicators and charts'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>MarketChameleon:</strong> {locale === 'de' ? 'IV Rank & Percentile Daten' : 'IV Rank & Percentile data'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>Barchart:</strong> {locale === 'de' ? 'Optionsketten mit IV' : 'Option chains with IV'}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">
                    {locale === 'de' ? 'Premium-Plattformen' : 'Premium Platforms'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span><strong>Libertex:</strong> {locale === 'de' ? 'Professionelle Trading-Tools mit IV-Daten' : 'Professional trading tools with IV data'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span><strong>TastyWorks:</strong> {locale === 'de' ? 'Detaillierte IV-Analysen' : 'Detailed IV analysis'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span><strong>ThinkOrSwim:</strong> {locale === 'de' ? 'Erweiterte Volatilitäts-Tools' : 'Advanced volatility tools'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="card bg-gradient-to-br from-purple-600 to-indigo-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Nutzen Sie IV-Daten für bessere Trades'
                    : 'Use IV Data for Better Trades'}
                </h3>
                <p className="text-purple-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Starten Sie bei Libertex und nutzen Sie professionelle Tools zur Volatilitätsanalyse!'
                    : 'Start at Libertex and use professional volatility analysis tools!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-purple-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Jetzt kostenlos starten' : 'Start Free Now'}
                </a>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="card bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Wichtige Erkenntnisse' : 'Key Takeaways'}
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'IV beeinflusst Optionspreise:' : 'IV affects option prices:'}</strong> {locale === 'de' ? 'Hohe IV = teure Optionen, niedrige IV = günstige Optionen' : 'High IV = expensive options, low IV = cheap options'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Nutzen Sie IV Rank:' : 'Use IV Rank:'}</strong> {locale === 'de' ? 'Über 50% = hohe IV (verkaufen), unter 50% = niedrige IV (kaufen)' : 'Above 50% = high IV (sell), below 50% = low IV (buy)'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Earnings = IV-Spike:' : 'Earnings = IV spike:'}</strong> {locale === 'de' ? 'Vor wichtigen Events steigt die IV – ideal zum Verkaufen' : 'Before major events IV rises – ideal for selling'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'IV Mean Reversion:' : 'IV mean reversion:'}</strong> {locale === 'de' ? 'Extreme IV-Werte kehren oft zum Durchschnitt zurück' : 'Extreme IV values often return to average'}</span>
                </li>
              </ul>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Der Handel mit Optionen und gehebelten Produkten birgt erhebliche Risiken. Hohe Volatilität kann zu schnellen und großen Verlusten führen. Stellen Sie sicher, dass Sie die Risiken vollständig verstehen, bevor Sie handeln.'
                  : 'Trading options and leveraged products involves significant risks. High volatility can lead to rapid and large losses. Make sure you fully understand the risks before trading.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2025-01-15</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
