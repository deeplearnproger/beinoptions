import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Neue BaFin-Regelungen 2025 | Was Privatanleger im Optionshandel wissen müssen'
      : 'New BaFin Regulations 2025 | What Retail Investors Need to Know About Options Trading',
    description: locale === 'de'
      ? 'Überblick über die wichtigsten regulatorischen Änderungen für Privatanleger im Optionshandel ab 2025.'
      : 'Overview of the most important regulatory changes for retail investors in options trading from 2025.',
  });
}

export default function BaFinRegulationsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              {locale === 'de' ? 'News & Updates | 7 Min Lesezeit' : 'News & Updates | 7 min read'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Neue BaFin-Regelungen 2025'
                : 'New BaFin Regulations 2025'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Überblick über die wichtigsten regulatorischen Änderungen für Privatanleger im Optionshandel ab 2025.'
                : 'Overview of the most important regulatory changes for retail investors in options trading from 2025.'}
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
                {locale === 'de' ? 'Was ändert sich ab 2025?' : 'What Changes from 2025?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) hat neue Regelungen für den Handel mit Derivaten und Optionen angekündigt. Diese treten am 1. Januar 2025 in Kraft und betreffen vor allem Privatanleger.'
                  : 'The Federal Financial Supervisory Authority (BaFin) has announced new regulations for trading derivatives and options. These take effect on January 1, 2025 and primarily affect retail investors.'}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
                <p className="text-gray-800 font-semibold mb-2">
                  {locale === 'de' ? 'Wichtig zu wissen:' : 'Important to know:'}
                </p>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Die neuen Regelungen zielen darauf ab, Privatanleger besser vor Risiken zu schützen und die Transparenz im Optionshandel zu erhöhen. Einige Änderungen können Ihre Trading-Strategie beeinflussen.'
                    : 'The new regulations aim to better protect retail investors from risks and increase transparency in options trading. Some changes may affect your trading strategy.'}
                </p>
              </div>
            </div>

            {/* Main Changes */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {locale === 'de' ? 'Die 5 wichtigsten Änderungen' : 'The 5 Most Important Changes'}
              </h2>

              <div className="space-y-6">
                {/* Change 1 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Erweiterte Eignungsprüfung' : 'Extended Suitability Assessment'}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {locale === 'de'
                          ? 'Broker müssen ab 2025 eine umfassendere Prüfung der Kenntnisse und Erfahrungen von Privatanlegern durchführen, bevor sie Zugang zum Optionshandel gewähren.'
                          : 'From 2025, brokers must conduct a more comprehensive assessment of retail investors\' knowledge and experience before granting access to options trading.'}
                      </p>
                      <div className="bg-indigo-50 rounded p-4">
                        <h4 className="font-bold text-indigo-900 mb-2">
                          {locale === 'de' ? 'Was bedeutet das für Sie?' : 'What does this mean for you?'}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600">▸</span>
                            <span>{locale === 'de' ? 'Ausführlicherer Fragebogen bei Kontoeröffnung' : 'More detailed questionnaire when opening account'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600">▸</span>
                            <span>{locale === 'de' ? 'Nachweis von Grundkenntnissen erforderlich' : 'Proof of basic knowledge required'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600">▸</span>
                            <span>{locale === 'de' ? 'Mögliche Wartezeit von 24 Stunden vor erstem Trade' : 'Possible 24-hour waiting period before first trade'}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Change 2 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Hebelbeschränkungen für Neukunden' : 'Leverage Restrictions for New Customers'}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {locale === 'de'
                          ? 'Neukunden ohne nachgewiesene Erfahrung unterliegen in den ersten 6 Monaten strengeren Hebelbeschränkungen.'
                          : 'New customers without proven experience are subject to stricter leverage restrictions for the first 6 months.'}
                      </p>
                      <div className="bg-purple-50 rounded p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-bold text-purple-900 mb-2">
                              {locale === 'de' ? 'Erste 6 Monate:' : 'First 6 months:'}
                            </p>
                            <ul className="space-y-1 text-gray-700">
                              <li>• {locale === 'de' ? 'Max. Hebel: 1:10' : 'Max. leverage: 1:10'}</li>
                              <li>• {locale === 'de' ? 'Max. Position: 5% des Kapitals' : 'Max. position: 5% of capital'}</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold text-purple-900 mb-2">
                              {locale === 'de' ? 'Nach 6 Monaten:' : 'After 6 months:'}
                            </p>
                            <ul className="space-y-1 text-gray-700">
                              <li>• {locale === 'de' ? 'Normale Limits' : 'Normal limits'}</li>
                              <li>• {locale === 'de' ? 'Bei nachgewiesener Erfahrung' : 'With proven experience'}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Change 3 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Erweiterte Risikowarnungen' : 'Extended Risk Warnings'}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {locale === 'de'
                          ? 'Broker müssen vor jedem Trade deutliche Risikowarnungen anzeigen, insbesondere bei komplexen Strategien.'
                          : 'Brokers must display clear risk warnings before each trade, especially for complex strategies.'}
                      </p>
                      <div className="bg-blue-50 rounded p-4">
                        <h4 className="font-bold text-blue-900 mb-2">
                          {locale === 'de' ? 'Neue Warnpflichten:' : 'New Warning Requirements:'}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">▸</span>
                            <span>{locale === 'de' ? 'Warnung bei Positionsgröße > 5% des Kapitals' : 'Warning when position size > 5% of capital'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">▸</span>
                            <span>{locale === 'de' ? 'Hinweis auf maximalen Verlust vor Trade' : 'Notice of maximum loss before trade'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">▸</span>
                            <span>{locale === 'de' ? 'Tägliche Zusammenfassung der Risiken per Email' : 'Daily risk summary via email'}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Change 4 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Verbesserte Kostenaufstellung' : 'Improved Cost Breakdown'}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {locale === 'de'
                          ? 'Alle Kosten (Spreads, Kommissionen, Finanzierungskosten) müssen transparent und in Echtzeit angezeigt werden.'
                          : 'All costs (spreads, commissions, financing costs) must be displayed transparently and in real-time.'}
                      </p>
                      <div className="bg-green-50 rounded p-4">
                        <p className="text-sm text-gray-700">
                          {locale === 'de'
                            ? 'Vorteil: Sie sehen sofort, welche Kosten bei einem Trade anfallen und können bessere Entscheidungen treffen.'
                            : 'Advantage: You immediately see what costs are incurred in a trade and can make better decisions.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Change 5 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-xl font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Negative Balance Protection verpflichtend' : 'Negative Balance Protection Mandatory'}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {locale === 'de'
                          ? 'Alle Broker müssen einen Schutz vor negativem Kontostand anbieten. Sie können nicht mehr verlieren als Ihre Einlage.'
                          : 'All brokers must offer negative balance protection. You cannot lose more than your deposit.'}
                      </p>
                      <div className="bg-yellow-50 rounded p-4">
                        <p className="text-sm font-semibold text-yellow-900 mb-2">
                          {locale === 'de' ? 'Das schützt Sie:' : 'This protects you:'}
                        </p>
                        <p className="text-sm text-gray-700">
                          {locale === 'de'
                            ? 'Selbst bei extremen Marktbewegungen (z.B. Flash Crash) können Sie maximal Ihre Einlage verlieren – Nachschusspflichten sind ausgeschlossen.'
                            : 'Even in extreme market movements (e.g., flash crash) you can lose at most your deposit – margin calls are excluded.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact on Strategies */}
            <div className="card bg-gradient-to-br from-purple-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Auswirkungen auf Trading-Strategien' : 'Impact on Trading Strategies'}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Weiterhin erlaubt' : 'Still Allowed'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>Covered Calls:</strong> {locale === 'de' ? 'Keine Einschränkungen' : 'No restrictions'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>Credit Spreads:</strong> {locale === 'de' ? 'Unverändert handelbar' : 'Tradeable unchanged'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>Iron Condors:</strong> {locale === 'de' ? 'Weiterhin möglich' : 'Still possible'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>Long Options:</strong> {locale === 'de' ? 'Keine neuen Beschränkungen' : 'No new restrictions'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-yellow-200">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {locale === 'de' ? 'Mit Einschränkungen' : 'With Restrictions'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">▸</span>
                      <span><strong>Naked Options:</strong> {locale === 'de' ? 'Höhere Margin-Anforderungen' : 'Higher margin requirements'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Gehebelte Produkte:' : 'Leveraged Products:'}</strong> {locale === 'de' ? 'Max. 1:10 für Neukunden' : 'Max. 1:10 for new customers'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">▸</span>
                      <span><strong>Futures:</strong> {locale === 'de' ? 'Zusätzliche Erfahrungsnachweise nötig' : 'Additional proof of experience required'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card bg-gradient-to-br from-blue-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Zeitplan der Umsetzung' : 'Implementation Timeline'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-bold text-blue-700">1. Jan 2025</span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Inkrafttreten' : 'Entry into Force'}
                    </p>
                    <p className="text-sm text-gray-700">
                      {locale === 'de'
                        ? 'Alle Hauptregelungen treten in Kraft. Broker müssen die neuen Anforderungen umsetzen.'
                        : 'All main regulations take effect. Brokers must implement new requirements.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-bold text-blue-700">1. Feb 2025</span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Bestandskunden-Überprüfung' : 'Existing Customer Review'}
                    </p>
                    <p className="text-sm text-gray-700">
                      {locale === 'de'
                        ? 'Broker kontaktieren Bestandskunden für aktualisierte Eignungsprüfung.'
                        : 'Brokers contact existing customers for updated suitability assessment.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-bold text-blue-700">1. Apr 2025</span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Vollständige Umsetzung' : 'Full Implementation'}
                    </p>
                    <p className="text-sm text-gray-700">
                      {locale === 'de'
                        ? 'Alle Broker müssen vollständig compliant sein. BaFin beginnt mit Kontrollen.'
                        : 'All brokers must be fully compliant. BaFin begins controls.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Should Do */}
            <div className="card bg-gradient-to-br from-green-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locale === 'de' ? 'Was Sie jetzt tun sollten' : 'What You Should Do Now'}
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">
                    1. {locale === 'de' ? 'Überprüfen Sie Ihr Broker-Konto' : 'Review Your Broker Account'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Stellen Sie sicher, dass Ihre Angaben zu Erfahrung und Kenntnissen aktuell sind. Nutzen Sie Broker wie Libertex, die bereits BaFin-compliant sind.'
                      : 'Make sure your experience and knowledge information is up to date. Use brokers like Libertex that are already BaFin-compliant.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">
                    2. {locale === 'de' ? 'Dokumentieren Sie Ihre Trades' : 'Document Your Trades'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Ein Trading-Journal hilft bei der Eignungsprüfung und zeigt Ihre Erfahrung.'
                      : 'A trading journal helps with suitability assessment and shows your experience.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">
                    3. {locale === 'de' ? 'Nutzen Sie Bildungsangebote' : 'Use Educational Resources'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Viele Broker bieten kostenlose Kurse an. Diese können bei der Eignungsprüfung helfen.'
                      : 'Many brokers offer free courses. These can help with suitability assessment.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">
                    4. {locale === 'de' ? 'Passen Sie Ihre Strategie an' : 'Adapt Your Strategy'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Falls Sie Neukunde sind: Fokussieren Sie sich in den ersten 6 Monaten auf konservative Strategien wie Covered Calls.'
                      : 'If you\'re a new customer: Focus on conservative strategies like covered calls in the first 6 months.'}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card bg-gradient-to-br from-gray-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {locale === 'de'
                      ? 'Betreffen die Regelungen auch Bestandskunden?'
                      : 'Do the regulations also affect existing customers?'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Ja, teilweise. Bestandskunden müssen eine neue Eignungsprüfung durchlaufen, haben aber keine Wartefristen. Hebelbeschränkungen gelten nur für Neukunden ab 2025.'
                      : 'Yes, partially. Existing customers must undergo a new suitability assessment but have no waiting periods. Leverage restrictions only apply to new customers from 2025.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {locale === 'de'
                      ? 'Kann ich weiterhin mit EU-Brokern handeln?'
                      : 'Can I still trade with EU brokers?'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Ja. Die BaFin-Regelungen gelten für alle Broker, die deutschen Kunden Dienstleistungen anbieten – unabhängig vom Standort.'
                      : 'Yes. BaFin regulations apply to all brokers offering services to German customers – regardless of location.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {locale === 'de'
                      ? 'Was passiert bei Verstößen gegen die Regelungen?'
                      : 'What happens if regulations are violated?'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Broker können mit Bußgeldern bis zu 5 Millionen Euro belangt werden. Privatanleger tragen keine direkte Verantwortung, sollten aber die Regelungen kennen.'
                      : 'Brokers can be fined up to 5 million euros. Retail investors bear no direct responsibility but should know the regulations.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="card bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Handeln Sie BaFin-compliant mit Libertex'
                    : 'Trade BaFin-Compliant with Libertex'}
                </h3>
                <p className="text-indigo-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Libertex erfüllt bereits alle neuen BaFin-Anforderungen. Starten Sie sicher und reguliert!'
                    : 'Libertex already meets all new BaFin requirements. Start safely and regulated!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Jetzt Konto eröffnen' : 'Open Account Now'}
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Hinweis:' : 'Notice:'}</strong>{' '}
                {locale === 'de'
                  ? 'Dieser Artikel dient nur zu Informationszwecken und stellt keine Rechtsberatung dar. Die dargestellten Regelungen können sich ändern. Bitte informieren Sie sich direkt bei Ihrem Broker und auf der BaFin-Website über die aktuellen Bestimmungen.'
                  : 'This article is for informational purposes only and does not constitute legal advice. The regulations presented may change. Please check directly with your broker and on the BaFin website for current regulations.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2024-12-20</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
