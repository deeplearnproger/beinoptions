import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Options CFDs verstehen (Teil 1): Grundlagen | BeInOptions'
      : 'Understanding Options CFDs (Part 1): Basics | BeInOptions',
    description: locale === 'de'
      ? 'Was müssen Sie über Options CFDs wissen? Entdecken Sie die Vor- und Nachteile, Risiken und Chancen. Handeln Sie jetzt mit Libertex - dem führenden Broker!'
      : 'What do you need to know about Options CFDs? Discover advantages, risks and opportunities. Trade now with Libertex - the leading broker!',
  });
}

export default function OptionsCFDsPart1Page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              {locale === 'de' ? 'Teil 1 von 3 | Strategie-Guide' : 'Part 1 of 3 | Strategy Guide'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Options CFDs verstehen (Teil 1): Grundlagen'
                : 'Understanding Options CFDs (Part 1): Basics'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Alles, was Sie über Options CFDs wissen müssen – von den Grundlagen bis zu den wichtigsten Vorteilen.'
                : 'Everything you need to know about Options CFDs – from basics to key advantages.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://libertex.com/de/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {locale === 'de' ? 'Jetzt bei Libertex handeln' : 'Trade with Libertex Now'}
              </a>
            </div>
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
                {locale === 'de' ? 'Was sind Options CFDs?' : 'What are Options CFDs?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Options CFDs (Contracts for Difference) sind derivative Finanzinstrumente, die es Tradern ermöglichen, auf die Preisbewegungen von Optionen zu spekulieren, ohne die zugrunde liegenden Optionen tatsächlich zu besitzen.'
                  : 'Options CFDs (Contracts for Difference) are derivative financial instruments that allow traders to speculate on the price movements of options without actually owning the underlying options.'}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Im Gegensatz zum traditionellen Optionshandel, bei dem Sie eine Option kaufen und das Recht erwerben, einen Basiswert zu einem bestimmten Preis zu kaufen oder zu verkaufen, handeln Sie bei Options CFDs lediglich die Preisdifferenz.'
                  : 'Unlike traditional options trading, where you buy an option and acquire the right to buy or sell an underlying asset at a specific price, with Options CFDs you only trade the price difference.'}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-4">
                <p className="text-gray-800 font-medium">
                  {locale === 'de'
                    ? 'Kurz gesagt: Sie profitieren von Preisbewegungen, ohne die komplexen Mechanismen traditioneller Optionen durchlaufen zu müssen.'
                    : 'In short: You profit from price movements without having to go through the complex mechanisms of traditional options.'}
                </p>
              </div>
            </div>

            {/* CTA Box 1 */}
            <div className="card bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Bereit für Options CFD Trading?'
                    : 'Ready for Options CFD Trading?'}
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Libertex bietet über 300 CFDs auf Optionen mit Zero-Spread und blitzschneller Ausführung!'
                    : 'Libertex offers over 300 options CFDs with zero spread and lightning-fast execution!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Kostenloses Konto eröffnen ' : 'Open Free Account '}
                </a>
              </div>
            </div>

            {/* How They Work */}
            <div className="card bg-gradient-to-br from-gray-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Wie funktionieren Options CFDs?' : 'How do Options CFDs Work?'}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-lg">1</span>
                    {locale === 'de' ? 'Position eröffnen' : 'Open Position'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Sie wählen eine Option (z.B. Apple Call Option) und entscheiden, ob Sie auf steigende (Long) oder fallende (Short) Preise setzen möchten.'
                      : 'You choose an option (e.g., Apple call option) and decide whether you want to bet on rising (long) or falling (short) prices.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-lg">2</span>
                    {locale === 'de' ? 'Hebelwirkung nutzen' : 'Use Leverage'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Mit Hebel können Sie größere Positionen mit weniger Kapital handeln. Bei Libertex profitieren Sie von flexiblen Hebeln für maximale Kontrolle.'
                      : 'With leverage, you can trade larger positions with less capital. At Libertex you benefit from flexible leverage for maximum control.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-lg">3</span>
                    {locale === 'de' ? 'Gewinn/Verlust realisieren' : 'Realize Profit/Loss'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Ihr Gewinn oder Verlust basiert auf der Differenz zwischen Eröffnungs- und Schlusskurs, multipliziert mit Ihrer Positionsgröße.'
                      : 'Your profit or loss is based on the difference between the opening and closing price, multiplied by your position size.'}
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {locale === 'de' ? 'Beispiel:' : 'Example:'}
                    </h4>
                    <p className="text-gray-700 mb-2">
                      {locale === 'de'
                        ? 'Sie kaufen einen CFD auf eine Apple Call-Option bei $5.00'
                        : 'You buy a CFD on an Apple call option at $5.00'}
                    </p>
                    <p className="text-gray-700 mb-2">
                      {locale === 'de'
                        ? 'Der Preis steigt auf $7.00'
                        : 'The price rises to $7.00'}
                    </p>
                    <p className="text-gray-700 font-semibold text-green-700">
                      {locale === 'de'
                        ? 'Ihr Gewinn: $2.00 pro Kontrakt (multipliziert mit Ihrer Position)'
                        : 'Your profit: $2.00 per contract (multiplied by your position)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Vorteile von Options CFDs' : 'Advantages of Options CFDs'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border-2 border-green-200">
                  <svg className="w-12 h-12 text-yellow-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Hebelwirkung' : 'Leverage'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Handeln Sie größere Positionen mit weniger Kapital. Maximieren Sie Ihr Gewinnpotenzial bei kontrolliertem Risiko.'
                      : 'Trade larger positions with less capital. Maximize your profit potential with controlled risk.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-2 border-blue-200">
                  <svg className="w-12 h-12 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Niedrige Einstiegshürde' : 'Low Entry Barrier'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Starten Sie mit kleinen Beträgen. Bei Libertex bereits ab 100€ Mindesteinzahlung möglich.'
                      : 'Start with small amounts. At Libertex possible from just €100 minimum deposit.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border-2 border-purple-200">
                  <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Bidirektionales Trading' : 'Bidirectional Trading'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Profitieren Sie sowohl von steigenden als auch von fallenden Märkten. Long oder Short – Sie haben die Wahl.'
                      : 'Profit from both rising and falling markets. Long or short – you have the choice.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border-2 border-orange-200">
                  <svg className="w-12 h-12 text-indigo-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Keine Verfallsdaten' : 'No Expiration Dates'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Im Gegensatz zu klassischen Optionen haben CFDs kein Verfallsdatum. Sie bestimmen, wann Sie schließen.'
                      : 'Unlike traditional options, CFDs have no expiration date. You decide when to close.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-white rounded-lg p-6 border-2 border-pink-200">
                  <svg className="w-12 h-12 text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Einfachere Mechanik' : 'Simpler Mechanics'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Keine komplizierten Griechen oder Ausübungsrechte. Konzentrieren Sie sich auf Preisbewegungen.'
                      : 'No complicated Greeks or exercise rights. Focus on price movements.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg p-6 border-2 border-indigo-200">
                  <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Schnelle Ausführung' : 'Fast Execution'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Blitzschnelle Order-Ausführung bei Libertex. Nutzen Sie Marktbewegungen in Echtzeit.'
                      : 'Lightning-fast order execution at Libertex. Take advantage of market movements in real-time.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box 2 */}
            <div className="card bg-gradient-to-br from-emerald-600 to-emerald-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? '💎 Handeln Sie mit Zero-Spreads'
                    : '💎 Trade with Zero Spreads'}
                </h3>
                <p className="text-emerald-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Libertex bietet einzigartige Zero-Spread Konditionen – zahlen Sie nur eine kleine Kommission und behalten Sie mehr Gewinn!'
                    : 'Libertex offers unique zero-spread conditions – pay only a small commission and keep more profit!'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://libertex.com/de/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    {locale === 'de' ? 'Jetzt Vorteil sichern ' : 'Secure Advantage Now '}
                  </a>
                </div>
              </div>
            </div>

            {/* Differences from Traditional Options */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de'
                  ? 'Options CFDs vs. Traditionelle Optionen'
                  : 'Options CFDs vs. Traditional Options'}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-indigo-100">
                      <th className="p-4 font-bold text-gray-900">
                        {locale === 'de' ? 'Merkmal' : 'Feature'}
                      </th>
                      <th className="p-4 font-bold text-gray-900">
                        {locale === 'de' ? 'Options CFDs' : 'Options CFDs'}
                      </th>
                      <th className="p-4 font-bold text-gray-900">
                        {locale === 'de' ? 'Traditionelle Optionen' : 'Traditional Options'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">
                        {locale === 'de' ? 'Verfallsdatum' : 'Expiration'}
                      </td>
                      <td className="p-4 text-gray-700">
                         {locale === 'de' ? 'Kein Verfall' : 'No expiration'}
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="text-red-600 font-semibold">✗</span> {locale === 'de' ? 'Festes Datum' : 'Fixed date'}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">
                        {locale === 'de' ? 'Mindestkapital' : 'Minimum Capital'}
                      </td>
                      <td className="p-4 text-gray-700">
                         {locale === 'de' ? 'Niedrig (ab 100€)' : 'Low (from €100)'}
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="text-orange-600 font-semibold">~</span> {locale === 'de' ? 'Höher' : 'Higher'}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">
                        {locale === 'de' ? 'Komplexität' : 'Complexity'}
                      </td>
                      <td className="p-4 text-gray-700">
                         {locale === 'de' ? 'Einfacher' : 'Simpler'}
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="text-red-600 font-semibold">✗</span> {locale === 'de' ? 'Komplexer' : 'More complex'}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">
                        {locale === 'de' ? 'Hebelwirkung' : 'Leverage'}
                      </td>
                      <td className="p-4 text-gray-700">
                         {locale === 'de' ? 'Flexibel' : 'Flexible'}
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="text-orange-600 font-semibold">~</span> {locale === 'de' ? 'Natürlich vorhanden' : 'Naturally present'}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">
                        {locale === 'de' ? 'Ausführung' : 'Execution'}
                      </td>
                      <td className="p-4 text-gray-700">
                         {locale === 'de' ? 'Sofort' : 'Instant'}
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="text-orange-600 font-semibold">~</span> {locale === 'de' ? 'Börsenabhängig' : 'Exchange dependent'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risks */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Risiken und wichtige Überlegungen' : 'Risks and Important Considerations'}
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {locale === 'de' ? 'Wichtiger Risikohinweis:' : 'Important Risk Warning:'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Options CFDs sind gehebelte Produkte und bergen erhebliche Risiken. Verluste können Ihre Einlage übersteigen. Handeln Sie nur mit Kapital, dessen Verlust Sie sich leisten können.'
                        : 'Options CFDs are leveraged products and carry significant risks. Losses can exceed your deposit. Only trade with capital you can afford to lose.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-purple-600 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {locale === 'de' ? 'So minimieren Sie Risiken:' : 'How to Minimize Risks:'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Nutzen Sie Stop-Loss-Orders' : 'Use stop-loss orders'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Starten Sie mit kleinen Positionen' : 'Start with small positions'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Diversifizieren Sie Ihr Portfolio' : 'Diversify your portfolio'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Bilden Sie sich kontinuierlich weiter' : 'Educate yourself continuously'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-yellow-600 inline-block" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
                    {locale === 'de' ? 'Best Practices:' : 'Best Practices:'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Nutzen Sie Demo-Konten zum Üben' : 'Use demo accounts to practice'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Definieren Sie klare Ein- und Ausstiegsregeln' : 'Define clear entry and exit rules'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Führen Sie ein Trading-Tagebuch' : 'Keep a trading journal'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Handeln Sie nicht emotional' : 'Don\'t trade emotionally'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Series Navigation */}
            <div className="card bg-gradient-to-br from-gray-100 to-white mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Diese Serie:' : 'This Series:'}
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-2 border-blue-500">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <div className="font-bold text-gray-900">
                        {locale === 'de' ? 'Teil 1: Grundlagen (Dieser Artikel)' : 'Part 1: Basics (This Article)'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {locale === 'de' ? 'Was sind Options CFDs und wie funktionieren sie?' : 'What are Options CFDs and how do they work?'}
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={`/${locale}/blog/options-cfds-teil-2`}>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold text-gray-900">
                          {locale === 'de' ? 'Teil 2: Warum handeln?' : 'Part 2: Why Trade?'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {locale === 'de' ? 'Vorteile und Gründe für Options CFD Trading' : 'Advantages and reasons for Options CFD trading'}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={`/${locale}/blog/options-cfds-teil-3`}>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold text-gray-900">
                          {locale === 'de' ? 'Teil 3: Spekulation & Hedging' : 'Part 3: Speculation & Hedging'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {locale === 'de' ? 'Praktische Strategien für Ihr Portfolio' : 'Practical strategies for your portfolio'}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="card bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Starten Sie jetzt mit Options CFDs!'
                    : 'Start with Options CFDs Now!'}
                </h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Eröffnen Sie Ihr kostenloses Konto bei Libertex und handeln Sie über 300 CFDs auf Optionen mit Zero-Spreads, schneller Ausführung und professionellen Tools.'
                    : 'Open your free Libertex account and trade over 300 options CFDs with zero spreads, fast execution, and professional tools.'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  {locale === 'de' ? 'Kostenloses Konto eröffnen' : 'Open Free Account'}
                </a>
                <p className="text-blue-200 text-sm mt-4">
                  {locale === 'de'
                    ? 'In nur 2 Minuten startklar | Über 2.9M zufriedene Trader weltweit'
                    : 'Ready in just 2 minutes | Over 2.9M satisfied traders worldwide'}
                </p>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Der Handel mit CFDs und gehebelten Produkten birgt erhebliche Risiken und ist möglicherweise nicht für alle Anleger geeignet. Sie können mehr als Ihre ursprüngliche Einlage verlieren. Stellen Sie sicher, dass Sie die Risiken vollständig verstehen und holen Sie sich gegebenenfalls unabhängigen Rat.'
                  : 'Trading CFDs and leveraged products involves significant risks and may not be suitable for all investors. You may lose more than your initial deposit. Make sure you fully understand the risks and seek independent advice if necessary.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2025-01-16</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
