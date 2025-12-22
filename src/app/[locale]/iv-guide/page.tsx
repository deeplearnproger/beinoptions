import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return {
    title: isGerman
      ? 'Implied Volatility (IV) Guide | Volatilität verstehen'
      : 'Implied Volatility (IV) Guide | Understanding Volatility',
    description: isGerman
      ? 'Umfassender Guide zur Implied Volatility: IV Rank, IV Percentile, Volatility Crush, und wie Sie IV für bessere Trading-Entscheidungen nutzen.'
      : 'Comprehensive guide to Implied Volatility: IV Rank, IV Percentile, Volatility Crush, and how to use IV for better trading decisions.',
    alternates: {
      canonical: `https://beinoptions.com/${locale}/iv-guide`,
      languages: {
        'de': 'https://beinoptions.com/de/iv-guide',
        'en': 'https://beinoptions.com/en/iv-guide',
      },
    },
  };
}

export default async function IVGuidePage({ params }: Props) {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
              <span className="text-white text-sm font-medium">
                {isGerman ? '📊 Fortgeschrittenes Konzept' : '📊 Advanced Concept'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Implied Volatility</span>
              <br />
              <span className="text-white/90">
                {isGerman ? 'Komplett-Guide' : 'Complete Guide'}
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {isGerman
                ? 'Verstehen Sie die "Sprache des Marktes" – wie Implied Volatility funktioniert und wie Sie sie für profitablere Trading-Entscheidungen nutzen können.'
                : 'Understand the "language of the market" – how Implied Volatility works and how to use it for more profitable trading decisions.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {isGerman ? '15 Min. Lesezeit' : '15 min read'}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {isGerman ? 'Fortgeschritten' : 'Advanced'}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {isGerman ? 'Mit Praxisbeispielen' : 'With practical examples'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is IV Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman ? 'Was ist Implied Volatility?' : 'What is Implied Volatility?'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {isGerman
                  ? 'Implied Volatility (IV) ist die vom Markt erwartete zukünftige Schwankungsbreite eines Basiswerts. Sie wird aus den aktuellen Optionspreisen "herausgerechnet" und zeigt, wie viel Bewegung Marktteilnehmer in der Zukunft erwarten.'
                  : 'Implied Volatility (IV) is the market\'s expected future price fluctuation of an underlying asset. It is "extracted" from current option prices and shows how much movement market participants expect in the future.'}
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {isGerman ? 'Die Kernformel:' : 'The Core Formula:'}
                </h3>
                <div className="bg-purple-100 rounded-lg p-4 text-center">
                  <code className="text-purple-700 text-lg">
                    {isGerman
                      ? 'Optionspreis = f(Kurs, Strike, Zeit, Zinsen, IV)'
                      : 'Option Price = f(Price, Strike, Time, Interest, IV)'}
                  </code>
                </div>
                <p className="text-gray-500 text-sm mt-3">
                  {isGerman
                    ? 'IV ist die einzige Variable, die aus dem Marktpreis abgeleitet wird – alle anderen sind bekannt.'
                    : 'IV is the only variable derived from market price – all others are known.'}
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {isGerman ? '💡 Einfach erklärt:' : '💡 Simply Explained:'}
                </h3>
                <p className="text-gray-600">
                  {isGerman
                    ? 'Stellen Sie sich IV als "Versicherungsprämie" vor. Bei hoher Unsicherheit (z.B. vor Earnings) ist die Prämie höher, weil mehr Risiko besteht.'
                    : 'Think of IV as an "insurance premium." During high uncertainty (e.g., before earnings), the premium is higher because there\'s more risk.'}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {isGerman ? 'IV Interpretation:' : 'IV Interpretation:'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">15%</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">
                        {isGerman ? 'Niedrige IV' : 'Low IV'}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {isGerman
                          ? 'Der Markt erwartet wenig Bewegung. Optionen sind relativ günstig. Ideal für Long-Strategien.'
                          : 'Market expects little movement. Options are relatively cheap. Ideal for long strategies.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-600 font-bold">30%</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">
                        {isGerman ? 'Mittlere IV' : 'Medium IV'}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {isGerman
                          ? 'Normale Marktbedingungen. Ausgewogene Preise für Käufer und Verkäufer.'
                          : 'Normal market conditions. Balanced pricing for buyers and sellers.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold">60%+</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">
                        {isGerman ? 'Hohe IV' : 'High IV'}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {isGerman
                          ? 'Der Markt erwartet große Bewegungen. Optionen sind teuer. Ideal für Short-Strategien.'
                          : 'Market expects large movements. Options are expensive. Ideal for short strategies.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {isGerman ? '📈 Typische IV-Werte:' : '📈 Typical IV Values:'}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex justify-between">
                    <span>SPY/SPX:</span>
                    <span className="text-green-600 font-medium">12-25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>AAPL, MSFT:</span>
                    <span className="text-yellow-600 font-medium">20-35%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>TSLA, NVDA:</span>
                    <span className="text-orange-600 font-medium">40-70%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Meme Stocks:</span>
                    <span className="text-red-600 font-medium">80-200%+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>VIX Spike:</span>
                    <span className="text-red-600 font-medium">30-80%+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IV vs HV Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman
              ? 'Implied vs. Historical Volatility'
              : 'Implied vs. Historical Volatility'}
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-gray-900 font-semibold border-b border-gray-200">
                    {isGerman ? 'Merkmal' : 'Feature'}
                  </th>
                  <th className="px-6 py-4 text-left text-purple-600 font-semibold border-b border-gray-200">
                    Implied Volatility (IV)
                  </th>
                  <th className="px-6 py-4 text-left text-blue-600 font-semibold border-b border-gray-200">
                    Historical Volatility (HV)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="bg-white">
                  <td className="px-6 py-4 border-b border-gray-100 font-medium text-gray-900">
                    {isGerman ? 'Zeitbezug' : 'Time Reference'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Zukunftsgerichtet (Forward-Looking)' : 'Forward-Looking'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Vergangenheitsbezogen (Backward-Looking)' : 'Backward-Looking'}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-100 font-medium text-gray-900">
                    {isGerman ? 'Quelle' : 'Source'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Optionspreise am Markt' : 'Option prices in market'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Tatsächliche Kursbewegungen' : 'Actual price movements'}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 border-b border-gray-100 font-medium text-gray-900">
                    {isGerman ? 'Berechnung' : 'Calculation'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Black-Scholes Umkehrung' : 'Black-Scholes inversion'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Standardabweichung der Returns' : 'Standard deviation of returns'}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-100 font-medium text-gray-900">
                    {isGerman ? 'Verwendung' : 'Usage'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'Optionen bewerten' : 'Price options'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {isGerman ? 'IV einordnen / vergleichen' : 'Compare / contextualize IV'}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isGerman ? 'Typischer Zeitraum' : 'Typical Period'}
                  </td>
                  <td className="px-6 py-4">
                    {isGerman ? 'Bis Verfall der Option' : 'Until option expiration'}
                  </td>
                  <td className="px-6 py-4">
                    {isGerman ? '20, 30, oder 60 Tage' : '20, 30, or 60 days'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isGerman ? 'IV > HV: Überbewertung' : 'IV > HV: Overpriced'}
              </h3>
              <p className="text-gray-600 mb-4">
                {isGerman
                  ? 'Der Markt erwartet mehr Bewegung als historisch üblich. Optionen sind "teuer".'
                  : 'Market expects more movement than historically typical. Options are "expensive".'}
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-100">
                <p className="text-green-600 font-medium mb-2">
                  {isGerman ? '✓ Trading-Signal:' : '✓ Trading Signal:'}
                </p>
                <p className="text-gray-500 text-sm">
                  {isGerman
                    ? 'Vorteilhaft für Optionsverkäufer (Credit Spreads, Iron Condors, Short Straddles)'
                    : 'Favorable for option sellers (Credit Spreads, Iron Condors, Short Straddles)'}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isGerman ? 'IV < HV: Unterbewertung' : 'IV < HV: Underpriced'}
              </h3>
              <p className="text-gray-600 mb-4">
                {isGerman
                  ? 'Der Markt erwartet weniger Bewegung als historisch üblich. Optionen sind "günstig".'
                  : 'Market expects less movement than historically typical. Options are "cheap".'}
              </p>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="text-green-600 font-medium mb-2">
                  {isGerman ? '✓ Trading-Signal:' : '✓ Trading Signal:'}
                </p>
                <p className="text-gray-500 text-sm">
                  {isGerman
                    ? 'Vorteilhaft für Optionskäufer (Long Calls/Puts, Debit Spreads, Long Straddles)'
                    : 'Favorable for option buyers (Long Calls/Puts, Debit Spreads, Long Straddles)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IV Rank & IV Percentile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            IV Rank vs. IV Percentile
          </h2>

          <p className="text-gray-600 mb-8 max-w-3xl">
            {isGerman
              ? 'Da absolute IV-Werte schwer zu interpretieren sind, verwenden Trader relative Maße. Diese zeigen, wo die aktuelle IV im historischen Kontext steht.'
              : 'Since absolute IV values are hard to interpret, traders use relative measures. These show where current IV stands in historical context.'}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* IV Rank */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">IVR</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">IV Rank</h3>
              </div>

              <div className="bg-purple-100 rounded-lg p-4 mb-4">
                <code className="text-purple-700 text-sm">
                  IV Rank = (IV - 52W Low) / (52W High - 52W Low) × 100
                </code>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-900 font-medium mb-2">
                  {isGerman ? 'Beispiel:' : 'Example:'}
                </h4>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li>{isGerman ? '52-Wochen-Hoch:' : '52-Week High:'} 50%</li>
                  <li>{isGerman ? '52-Wochen-Tief:' : '52-Week Low:'} 20%</li>
                  <li>{isGerman ? 'Aktuelle IV:' : 'Current IV:'} 35%</li>
                  <li className="text-purple-600 font-medium pt-2">
                    IVR = (35-20)/(50-20) × 100 = <strong>50%</strong>
                  </li>
                </ul>
              </div>

              <p className="text-gray-500 text-sm">
                {isGerman
                  ? '→ Die aktuelle IV liegt genau in der Mitte des 52-Wochen-Bereichs.'
                  : '→ Current IV is exactly in the middle of the 52-week range.'}
              </p>
            </div>

            {/* IV Percentile */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">IVP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">IV Percentile</h3>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 mb-4">
                <code className="text-blue-700 text-sm">
                  IVP = ({isGerman ? 'Tage unter aktueller IV' : 'Days below current IV'} / {isGerman ? 'Gesamttage' : 'Total Days'}) × 100
                </code>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-900 font-medium mb-2">
                  {isGerman ? 'Beispiel:' : 'Example:'}
                </h4>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li>{isGerman ? 'Beobachtungszeitraum:' : 'Observation Period:'} 252 {isGerman ? 'Handelstage' : 'trading days'}</li>
                  <li>{isGerman ? 'Aktuelle IV:' : 'Current IV:'} 35%</li>
                  <li>{isGerman ? 'Tage mit IV < 35%:' : 'Days with IV < 35%:'} 200</li>
                  <li className="text-blue-600 font-medium pt-2">
                    IVP = 200/252 × 100 = <strong>79%</strong>
                  </li>
                </ul>
              </div>

              <p className="text-gray-500 text-sm">
                {isGerman
                  ? '→ Die aktuelle IV war in 79% der Tage niedriger als jetzt.'
                  : '→ Current IV was lower than now on 79% of days.'}
              </p>
            </div>
          </div>

          {/* Interpretation Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0-25%</div>
              <div className="text-gray-900 font-medium mb-1">
                {isGerman ? 'Sehr Niedrig' : 'Very Low'}
              </div>
              <p className="text-gray-500 text-sm">
                {isGerman ? 'Long Volatilität' : 'Long Volatility'}
              </p>
              <p className="text-green-600 text-xs mt-2 font-medium">
                {isGerman ? 'Optionen kaufen' : 'Buy Options'}
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">25-50%</div>
              <div className="text-gray-900 font-medium mb-1">
                {isGerman ? 'Unter Durchschnitt' : 'Below Average'}
              </div>
              <p className="text-gray-500 text-sm">
                {isGerman ? 'Neutral bis Long' : 'Neutral to Long'}
              </p>
              <p className="text-yellow-600 text-xs mt-2 font-medium">
                {isGerman ? 'Debit Spreads' : 'Debit Spreads'}
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50-75%</div>
              <div className="text-gray-900 font-medium mb-1">
                {isGerman ? 'Über Durchschnitt' : 'Above Average'}
              </div>
              <p className="text-gray-500 text-sm">
                {isGerman ? 'Neutral bis Short' : 'Neutral to Short'}
              </p>
              <p className="text-orange-600 text-xs mt-2 font-medium">
                {isGerman ? 'Credit Spreads' : 'Credit Spreads'}
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border border-red-200 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">75-100%</div>
              <div className="text-gray-900 font-medium mb-1">
                {isGerman ? 'Sehr Hoch' : 'Very High'}
              </div>
              <p className="text-gray-500 text-sm">
                {isGerman ? 'Short Volatilität' : 'Short Volatility'}
              </p>
              <p className="text-red-600 text-xs mt-2 font-medium">
                {isGerman ? 'Optionen verkaufen' : 'Sell Options'}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-700 mb-3">
              {isGerman ? '⚠️ Wichtiger Unterschied:' : '⚠️ Important Difference:'}
            </h3>
            <p className="text-gray-600">
              {isGerman
                ? 'IV Rank kann durch extreme Spikes verzerrt werden. IV Percentile ist robuster, da es alle Datenpunkte berücksichtigt. Profis nutzen oft beide zusammen für ein vollständiges Bild.'
                : 'IV Rank can be skewed by extreme spikes. IV Percentile is more robust as it considers all data points. Professionals often use both together for a complete picture.'}
            </p>
          </div>
        </div>
      </section>

      {/* IV Crush Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman ? 'IV Crush: Das Earnings-Phänomen' : 'IV Crush: The Earnings Phenomenon'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {isGerman
                  ? 'IV Crush beschreibt den dramatischen Rückgang der Implied Volatility nach einem erwarteten Ereignis (meist Earnings). Da die Unsicherheit wegfällt, kollabiert die Prämie – unabhängig von der Kursrichtung.'
                  : 'IV Crush describes the dramatic decline in Implied Volatility after an anticipated event (usually earnings). Since uncertainty disappears, the premium collapses – regardless of price direction.'}
              </p>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
                <h3 className="text-lg font-semibold text-red-700 mb-3">
                  {isGerman ? '🎯 Das Problem:' : '🎯 The Problem:'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isGerman
                    ? 'Sie kaufen einen Call vor Earnings. Die Aktie steigt 3%. Ihr Call verliert trotzdem 20%.'
                    : 'You buy a call before earnings. The stock rises 3%. Your call still loses 20%.'}
                </p>
                <p className="text-gray-500 text-sm">
                  {isGerman
                    ? 'Grund: Der IV-Rückgang von 80% auf 40% vernichtet den Vega-Wert schneller als Delta gewinnt.'
                    : 'Reason: The IV drop from 80% to 40% destroys Vega value faster than Delta gains.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'IV Crush Beispiel: NVDA Earnings' : 'IV Crush Example: NVDA Earnings'}
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-500 text-sm mb-1">
                    {isGerman ? 'Vor Earnings:' : 'Before Earnings:'}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">IV:</span>
                      <span className="text-gray-900 ml-2 font-medium">85%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Call $130:</span>
                      <span className="text-gray-900 ml-2 font-medium">$8.50</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-yellow-100 rounded-full px-4 py-2">
                    <span className="text-yellow-700 text-sm font-medium">
                      📢 Earnings: {isGerman ? 'Aktie +4%' : 'Stock +4%'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-500 text-sm mb-1">
                    {isGerman ? 'Nach Earnings:' : 'After Earnings:'}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">IV:</span>
                      <span className="text-red-600 ml-2 font-medium">35%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Call $130:</span>
                      <span className="text-red-600 ml-2 font-medium">$6.20</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 rounded-lg p-4 text-center">
                  <div className="text-red-700 font-medium">
                    {isGerman ? 'Ergebnis: -27% trotz +4% Kursbewegung' : 'Result: -27% despite +4% price movement'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IV Crush Timeline */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {isGerman ? 'IV-Zyklus um Earnings' : 'IV Cycle Around Earnings'}
            </h3>

            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-red-500 to-blue-500 rounded-full"></div>

              <div className="grid grid-cols-4 gap-4 text-center relative">
                <div className="pt-12">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto -mt-6 mb-4"></div>
                  <div className="text-green-600 font-medium text-sm">-30 {isGerman ? 'Tage' : 'Days'}</div>
                  <div className="text-gray-500 text-xs mt-1">IV: 30%</div>
                  <div className="text-gray-400 text-xs">{isGerman ? 'Normal' : 'Normal'}</div>
                </div>

                <div className="pt-12">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto -mt-6 mb-4"></div>
                  <div className="text-yellow-600 font-medium text-sm">-7 {isGerman ? 'Tage' : 'Days'}</div>
                  <div className="text-gray-500 text-xs mt-1">IV: 55%</div>
                  <div className="text-gray-400 text-xs">{isGerman ? 'Steigend' : 'Rising'}</div>
                </div>

                <div className="pt-12">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto -mt-6 mb-4"></div>
                  <div className="text-red-600 font-medium text-sm">{isGerman ? 'Earnings Tag' : 'Earnings Day'}</div>
                  <div className="text-gray-500 text-xs mt-1">IV: 85%</div>
                  <div className="text-gray-400 text-xs">{isGerman ? 'Peak' : 'Peak'}</div>
                </div>

                <div className="pt-12">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto -mt-6 mb-4"></div>
                  <div className="text-blue-600 font-medium text-sm">+1 {isGerman ? 'Tag' : 'Day'}</div>
                  <div className="text-gray-500 text-xs mt-1">IV: 35%</div>
                  <div className="text-gray-400 text-xs">{isGerman ? 'Crush' : 'Crush'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* IV Crush Strategies */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                {isGerman ? '✓ IV Crush nutzen:' : '✓ Profiting from IV Crush:'}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    <strong className="text-gray-900">Iron Condor</strong> - {isGerman ? 'Vor Earnings verkaufen' : 'Sell before earnings'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    <strong className="text-gray-900">Short Straddle/Strangle</strong> - {isGerman ? 'Von IV-Rückgang profitieren' : 'Profit from IV decline'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    <strong className="text-gray-900">Calendar Spread</strong> - {isGerman ? 'Front-Month verkaufen' : 'Sell front month'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">
                {isGerman ? '✗ IV Crush vermeiden:' : '✗ Avoiding IV Crush:'}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>
                    {isGerman
                      ? 'Keine Long Calls/Puts direkt vor Earnings kaufen'
                      : 'Don\'t buy Long Calls/Puts right before earnings'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>
                    {isGerman
                      ? 'Expected Move prüfen vor dem Trade'
                      : 'Check Expected Move before the trade'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>
                    {isGerman
                      ? 'Weiter entfernte Verfallsdaten nutzen'
                      : 'Use further out expiration dates'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Move Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman ? 'Expected Move berechnen' : 'Calculating Expected Move'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                {isGerman
                  ? 'Der Expected Move zeigt, wie weit sich ein Basiswert laut IV in einem bestimmten Zeitraum bewegen könnte. Er entspricht einer Standardabweichung (~68% Wahrscheinlichkeit).'
                  : 'The Expected Move shows how far an underlying could move according to IV in a given time period. It represents one standard deviation (~68% probability).'}
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {isGerman ? 'Formel:' : 'Formula:'}
                </h3>
                <div className="bg-purple-100 rounded-lg p-4 text-center mb-4">
                  <code className="text-purple-700">
                    EM = {isGerman ? 'Kurs' : 'Price'} × IV × √({isGerman ? 'Tage' : 'Days'}/365)
                  </code>
                </div>

                <div className="text-gray-500 text-sm">
                  <p className="mb-2">{isGerman ? 'Für wöchentliche Optionen (7 Tage):' : 'For weekly options (7 days):'}</p>
                  <code className="text-purple-600">
                    EM = {isGerman ? 'Kurs' : 'Price'} × IV × 0.139
                  </code>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {isGerman ? '📊 Schnelle Schätzung:' : '📊 Quick Estimate:'}
                </h3>
                <p className="text-gray-600 mb-3">
                  {isGerman
                    ? 'Für Earnings (overnight): ATM Straddle-Preis ≈ Expected Move'
                    : 'For earnings (overnight): ATM Straddle price ≈ Expected Move'}
                </p>
                <p className="text-gray-500 text-sm">
                  {isGerman
                    ? 'Beispiel: ATM Call $5 + ATM Put $5 = $10 Expected Move'
                    : 'Example: ATM Call $5 + ATM Put $5 = $10 Expected Move'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Beispielrechnung: SPY' : 'Example Calculation: SPY'}
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500 mb-1">{isGerman ? 'Aktueller Kurs:' : 'Current Price:'}</div>
                    <div className="text-gray-900 font-bold text-lg">$450</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500 mb-1">{isGerman ? 'Aktuelle IV:' : 'Current IV:'}</div>
                    <div className="text-gray-900 font-bold text-lg">20%</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-gray-900 font-medium mb-3">
                    {isGerman ? 'Expected Move pro Zeitraum:' : 'Expected Move per Period:'}
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-500">1 {isGerman ? 'Woche' : 'Week'} (7D)</span>
                      <span className="text-purple-600 font-mono text-sm">
                        $450 × 0.20 × √(7/365) = <strong>$12.46</strong>
                      </span>
                    </div>

                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-500">1 {isGerman ? 'Monat' : 'Month'} (30D)</span>
                      <span className="text-purple-600 font-mono text-sm">
                        $450 × 0.20 × √(30/365) = <strong>$25.80</strong>
                      </span>
                    </div>

                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-500">45 DTE</span>
                      <span className="text-purple-600 font-mono text-sm">
                        $450 × 0.20 × √(45/365) = <strong>$31.59</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-green-700 text-sm">
                    {isGerman
                      ? '→ Mit 68% Wahrscheinlichkeit bleibt SPY in 45 Tagen zwischen $418.41 und $481.59'
                      : '→ With 68% probability, SPY stays between $418.41 and $481.59 in 45 days'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volatility Smile/Skew Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman ? 'Volatility Smile & Skew' : 'Volatility Smile & Skew'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-600 mb-6">
                {isGerman
                  ? 'Die IV ist nicht für alle Strikes gleich. Die Form dieser IV-Kurve gibt wichtige Marktinformationen preis.'
                  : 'IV is not equal across all strikes. The shape of this IV curve reveals important market information.'}
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {isGerman ? 'Volatility Smile' : 'Volatility Smile'}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {isGerman
                      ? 'U-förmige Kurve – OTM Calls und Puts haben höhere IV als ATM.'
                      : 'U-shaped curve – OTM Calls and Puts have higher IV than ATM.'}
                  </p>
                  <p className="text-purple-600 text-sm font-medium">
                    {isGerman ? 'Typisch für: Forex, Commodities' : 'Typical for: Forex, Commodities'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {isGerman ? 'Volatility Skew (Smirk)' : 'Volatility Skew (Smirk)'}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {isGerman
                      ? 'Schiefe Kurve – OTM Puts haben deutlich höhere IV als OTM Calls.'
                      : 'Skewed curve – OTM Puts have significantly higher IV than OTM Calls.'}
                  </p>
                  <p className="text-blue-600 text-sm font-medium">
                    {isGerman ? 'Typisch für: Aktien-Indizes (SPY, QQQ)' : 'Typical for: Equity Indices (SPY, QQQ)'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Warum existiert der Skew?' : 'Why Does Skew Exist?'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">
                      {isGerman ? 'Crash-Angst' : 'Crash Fear'}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {isGerman
                        ? 'Institutionelle Anleger kaufen Put-Absicherungen → höhere Nachfrage → höhere IV'
                        : 'Institutional investors buy put protection → higher demand → higher IV'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">
                      {isGerman ? 'Asymmetrische Bewegungen' : 'Asymmetric Movements'}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {isGerman
                        ? 'Märkte fallen schneller als sie steigen ("Fahrstuhl runter, Treppe hoch")'
                        : 'Markets fall faster than they rise ("Elevator down, stairs up")'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">
                      {isGerman ? 'Covered Call Selling' : 'Covered Call Selling'}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {isGerman
                        ? 'Investoren verkaufen OTM Calls für Einkommen → höheres Angebot → niedrigere IV'
                        : 'Investors sell OTM calls for income → higher supply → lower IV'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-700 text-sm">
                  {isGerman
                    ? '💡 Trading-Tipp: Nutzen Sie den Skew, indem Sie Put Credit Spreads weiter OTM platzieren als Call Credit Spreads.'
                    : '💡 Trading Tip: Use skew by placing Put Credit Spreads further OTM than Call Credit Spreads.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIX Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman ? 'VIX: Der Angst-Index' : 'VIX: The Fear Index'}
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Was ist der VIX?' : 'What is the VIX?'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {isGerman
                  ? 'Der CBOE Volatility Index misst die erwartete 30-Tage-Volatilität des S&P 500, basierend auf SPX-Optionspreisen.'
                  : 'The CBOE Volatility Index measures expected 30-day volatility of the S&P 500, based on SPX option prices.'}
              </p>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-purple-700 text-sm text-center font-medium">
                  {isGerman ? 'VIX = Markt-Angstmesser' : 'VIX = Market Fear Gauge'}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'VIX Interpretation' : 'VIX Interpretation'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">&lt; 12:</span>
                  <span className="text-green-600 font-medium">{isGerman ? 'Extrem ruhig' : 'Extremely calm'}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">12-20:</span>
                  <span className="text-green-600 font-medium">{isGerman ? 'Normal/Niedrig' : 'Normal/Low'}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">20-30:</span>
                  <span className="text-yellow-600 font-medium">{isGerman ? 'Erhöht' : 'Elevated'}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">&gt; 30:</span>
                  <span className="text-red-600 font-medium">{isGerman ? 'Hohe Angst' : 'High Fear'}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">&gt; 40:</span>
                  <span className="text-red-700 font-medium">{isGerman ? 'Panik' : 'Panic'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Historische Spitzen' : 'Historical Peaks'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">COVID 2020:</span>
                  <span className="text-red-600 font-mono">82.69</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">2008 Krise:</span>
                  <span className="text-red-600 font-mono">80.86</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">Aug 2015:</span>
                  <span className="text-orange-600 font-mono">53.29</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">Feb 2018:</span>
                  <span className="text-orange-600 font-mono">50.30</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">{isGerman ? 'Durchschnitt:' : 'Average:'}</span>
                  <span className="text-blue-600 font-mono">~19-20</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                {isGerman ? 'VIX-Strategien für Trader:' : 'VIX Strategies for Traders:'}
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>
                    <strong className="text-gray-900">{isGerman ? 'Hoher VIX (>25):' : 'High VIX (>25):'}</strong>{' '}
                    {isGerman
                      ? 'Optionen verkaufen (Credit Spreads, Iron Condors)'
                      : 'Sell options (Credit Spreads, Iron Condors)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>
                    <strong className="text-gray-900">{isGerman ? 'Niedriger VIX (<15):' : 'Low VIX (<15):'}</strong>{' '}
                    {isGerman
                      ? 'Optionen kaufen (Long Puts als Absicherung)'
                      : 'Buy options (Long Puts as protection)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>
                    <strong className="text-gray-900">{isGerman ? 'VIX Spike:' : 'VIX Spike:'}</strong>{' '}
                    {isGerman
                      ? 'Mean Reversion traden – VIX kehrt meist zum Mittel zurück'
                      : 'Trade mean reversion – VIX usually reverts to mean'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-700 mb-4">
                {isGerman ? '⚠️ VIX-Warnung:' : '⚠️ VIX Warning:'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {isGerman
                  ? 'Der VIX kann nicht direkt gehandelt werden. VIX-Futures und ETPs (VXX, UVXY) verhalten sich anders als der Spot-VIX:'
                  : 'VIX cannot be traded directly. VIX futures and ETPs (VXX, UVXY) behave differently than spot VIX:'}
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• {isGerman ? 'Contango-Kosten können Position erodieren' : 'Contango costs can erode position'}</li>
                <li>• {isGerman ? 'Roll-Kosten bei Futures' : 'Roll costs with futures'}</li>
                <li>• {isGerman ? 'ETPs für kurzfristige Hedges, nicht langfristig' : 'ETPs for short-term hedges, not long-term'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical IV Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isGerman ? 'Praktische IV-Tools' : 'Practical IV Tools'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">TastyTrade</h3>
              <p className="text-gray-500 text-sm mb-4">
                {isGerman
                  ? 'Beste IV-Analyse mit IV Rank, IV Percentile und Expected Move direkt in der Plattform.'
                  : 'Best IV analysis with IV Rank, IV Percentile, and Expected Move built into platform.'}
              </p>
              <span className="text-green-600 text-sm font-medium">{isGerman ? 'Kostenlos' : 'Free'}</span>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🏊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Thinkorswim</h3>
              <p className="text-gray-500 text-sm mb-4">
                {isGerman
                  ? 'Professionelle Charts mit IV-Overlay, Skew-Analyse und Custom Studies.'
                  : 'Professional charts with IV overlay, skew analysis, and custom studies.'}
              </p>
              <span className="text-green-600 text-sm font-medium">{isGerman ? 'Kostenlos mit TD' : 'Free with TD'}</span>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Chameleon</h3>
              <p className="text-gray-500 text-sm mb-4">
                {isGerman
                  ? 'Spezialisiert auf Earnings-IV, historische IV-Charts und Event-Analyse.'
                  : 'Specialized in earnings IV, historical IV charts, and event analysis.'}
              </p>
              <span className="text-yellow-600 text-sm font-medium">{isGerman ? 'Teilweise kostenlos' : 'Partially free'}</span>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Barchart</h3>
              <p className="text-gray-500 text-sm mb-4">
                {isGerman
                  ? 'IV-Screener, historische Volatilitäts-Vergleiche und Options-Scanner.'
                  : 'IV screener, historical volatility comparisons, and options scanner.'}
              </p>
              <span className="text-green-600 text-sm font-medium">{isGerman ? 'Basis kostenlos' : 'Basic free'}</span>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CBOE LiveVol</h3>
              <p className="text-gray-500 text-sm mb-4">
                {isGerman
                  ? 'Professionelle Volatilitäts-Daten, Skew-Visualisierung und historische Analysen.'
                  : 'Professional volatility data, skew visualization, and historical analysis.'}
              </p>
              <span className="text-red-600 text-sm font-medium">{isGerman ? 'Premium' : 'Premium'}</span>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pink-600 text-xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">OptionStrat</h3>
              <p className="text-gray-500 text-sm mb-4">
                {isGerman
                  ? 'Visual IV-Analyse, Strategie-Builder mit IV-Szenarien.'
                  : 'Visual IV analysis, strategy builder with IV scenarios.'}
              </p>
              <span className="text-yellow-600 text-sm font-medium">{isGerman ? 'Freemium' : 'Freemium'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* IV Trading Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'IV-Trading Checkliste' : 'IV Trading Checklist'}
          </h2>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4">
                  {isGerman ? '✓ Vor jedem Trade prüfen:' : '✓ Check Before Every Trade:'}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-medium">1</span>
                    </span>
                    <span>{isGerman ? 'IV Rank oder IV Percentile checken' : 'Check IV Rank or IV Percentile'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-medium">2</span>
                    </span>
                    <span>{isGerman ? 'Anstehende Events prüfen (Earnings, FOMC)' : 'Check upcoming events (Earnings, FOMC)'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-medium">3</span>
                    </span>
                    <span>{isGerman ? 'Expected Move berechnen' : 'Calculate Expected Move'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-medium">4</span>
                    </span>
                    <span>{isGerman ? 'IV vs. HV vergleichen' : 'Compare IV vs. HV'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-medium">5</span>
                    </span>
                    <span>{isGerman ? 'VIX-Level berücksichtigen' : 'Consider VIX level'}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-4">
                  {isGerman ? '📋 Strategie-Auswahl nach IV:' : '📋 Strategy Selection by IV:'}
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-green-700 font-medium mb-1">
                      {isGerman ? 'Niedrige IV (IVR < 30%)' : 'Low IV (IVR < 30%)'}
                    </div>
                    <p className="text-gray-500 text-sm">
                      Long Calls/Puts, Debit Spreads, Long Straddles
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <div className="text-yellow-700 font-medium mb-1">
                      {isGerman ? 'Mittlere IV (IVR 30-50%)' : 'Medium IV (IVR 30-50%)'}
                    </div>
                    <p className="text-gray-500 text-sm">
                      Calendars, Diagonals, Butterflies
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-red-700 font-medium mb-1">
                      {isGerman ? 'Hohe IV (IVR > 50%)' : 'High IV (IVR > 50%)'}
                    </div>
                    <p className="text-gray-500 text-sm">
                      Credit Spreads, Iron Condors, Short Strangles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isGerman
              ? 'Meistern Sie die Volatilität'
              : 'Master Volatility'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {isGerman
              ? 'Implied Volatility ist der Schlüssel zu profitablem Options-Trading. Wenden Sie dieses Wissen in der Praxis an.'
              : 'Implied Volatility is the key to profitable options trading. Apply this knowledge in practice.'}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/strategies`}
              className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              {isGerman ? 'IV-Strategien lernen' : 'Learn IV Strategies'}
            </Link>
            <Link
              href={`/${locale}/paper-trading`}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
            >
              {isGerman ? 'Risikofrei üben' : 'Practice Risk-Free'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
