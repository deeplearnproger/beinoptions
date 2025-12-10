import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Trump-Accounts: US-Rentenmodell als Vorbild für Deutschland?'
      : 'Trump Accounts: US Pension Model as Blueprint for Germany?',
    description: locale === 'de'
      ? 'Die USA starten mit „Trump-Accounts" ein innovatives Frühstart-Modell für die Altersvorsorge. Was bedeutet das für deutsche Anleger und den Optionsmarkt?'
      : 'The US launches "Trump Accounts" - an innovative early-start model for retirement. What does this mean for German investors and the options market?',
  });
}

export default function TrumpAccountsNewsPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-red-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Rentenpolitik' : 'Pension Policy'}
              </span>
              <span className="text-red-200">7. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Trump-Accounts: Wird das US-Rentenmodell zum Vorbild für Deutschland?'
                : 'Trump Accounts: Will the US Pension Model Become a Blueprint for Germany?'}
            </h1>

            <div className="flex items-center gap-4 text-red-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">BO</span>
                </div>
                <span>BeInOptions Team</span>
              </div>
              <span>•</span>
              <span>{isGerman ? '7 Min. Lesezeit' : '7 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Source Attribution */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-custom py-3">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-amber-800 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {isGerman ? 'Quelle: ' : 'Source: '}
              <a
                href="https://www.onvista.de/news/2025/12-07-kolumne-von-stefan-risse-trump-wird-zum-vorbild-fuer-deutsche-rentenpolitik-41095284-46-26457689"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-amber-900"
              >
                onvista.de - Kolumne von Stefan Riße
              </a>
              {isGerman ? ' (07.12.2025)' : ' (Dec 7, 2025)'}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Key Takeaways Box */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 not-prose">
              <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Das Wichtigste in Kürze' : 'Key Takeaways'}
              </h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'USA führen „Trump-Accounts" ein: 1.000 Dollar Startkapital für jedes zwischen 2025-2028 geborene Kind'
                    : 'US introduces "Trump Accounts": $1,000 starting capital for every child born 2025-2028'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Jährlich bis zu 5.000 Dollar einzahlbar – davon max. 2.500 Dollar durch Arbeitgeber'
                    : 'Up to $5,000 annual contributions possible - max $2,500 from employers'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Beiträge sind einkommensteuerfrei – Geld fließt bis zum 18. Geburtstag in Aktienfonds'
                    : 'Contributions are income tax-free - money flows into stock funds until age 18'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Das Modell erfüllt drei Grundforderungen: Kapitaldeckung, steuerliche Anreize und Arbeitgeberbeteiligung'
                    : 'The model fulfills three key demands: capital coverage, tax incentives, and employer participation'}
                </li>
              </ul>
            </div>

            {/* Main Article */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Trump als unerwartetes Vorbild' : 'Trump as Unexpected Role Model'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'In seiner aktuellen Kolumne auf onvista.de gibt der renommierte Börsenexperte Stefan Riße zu, dass es ihm nicht leicht fällt, Politik von Donald Trump zu loben. Doch es gibt immer wieder auch positive Aspekte seiner Regierungsarbeit. Obwohl Riße ein klarer Gegner von Trumps Zollpolitik ist – die seiner Meinung nach nur zu höheren Preisen und weniger Wohlstand führen wird – räumt er ein, dass Trump in seiner ersten Amtszeit der erste Politiker war, der prominent die unfairen Handelspraktiken Chinas thematisiert hat.'
                : 'In his current column on onvista.de, renowned stock market expert Stefan Riße admits that it\'s not easy for him to praise Donald Trump\'s policies. However, there are always positive aspects to his governance. Although Riße is a clear opponent of Trump\'s tariff policy - which in his opinion will only lead to higher prices and less prosperity - he acknowledges that Trump was the first politician in his first term to prominently address China\'s unfair trade practices.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Dass dies richtig war, zeigte sich daran, dass die nachfolgende Regierung von Joe Biden am damals unter Trump eingeschlagenen Kurs gegenüber China weitestgehend festgehalten hat. Nun präsentiert Trump mit den „Trump-Accounts" ein weiteres Konzept, das auch in Deutschland für Diskussionen sorgen könnte.'
                : 'That this was correct is shown by the fact that the subsequent Biden administration largely maintained the course set under Trump towards China. Now Trump presents another concept with the "Trump Accounts" that could also spark discussions in Germany.'}
            </p>

            {/* Trump Accounts Info Box */}
            <div className="bg-gradient-to-r from-blue-50 to-red-50 border border-blue-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                {isGerman ? 'So funktionieren die Trump-Accounts' : 'How Trump Accounts Work'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">{isGerman ? 'Startkapital' : 'Starting Capital'}</div>
                    <div className="text-2xl font-bold text-blue-900">$1.000</div>
                    <div className="text-xs text-gray-500">{isGerman ? 'für jedes Kind (2025-2028)' : 'for every child (2025-2028)'}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">{isGerman ? 'Jährliche Einzahlung (Eltern)' : 'Annual Contribution (Parents)'}</div>
                    <div className="text-2xl font-bold text-blue-900">{isGerman ? 'bis zu' : 'up to'} $5.000</div>
                    <div className="text-xs text-gray-500">{isGerman ? 'einkommensteuerfrei' : 'income tax-free'}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">{isGerman ? 'Arbeitgeberbeteiligung' : 'Employer Contribution'}</div>
                    <div className="text-2xl font-bold text-red-900">{isGerman ? 'bis zu' : 'up to'} $2.500</div>
                    <div className="text-xs text-gray-500">{isGerman ? 'pro Jahr möglich' : 'per year possible'}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">{isGerman ? 'Anlage bis 18. Geburtstag' : 'Investment until 18th Birthday'}</div>
                    <div className="text-2xl font-bold text-green-700">{isGerman ? 'Aktienfonds' : 'Stock Funds'}</div>
                    <div className="text-xs text-gray-500">{isGerman ? 'automatische Anlage' : 'automatic investment'}</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Warum das Modell so interessant ist' : 'Why This Model Is So Interesting'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Das Trump-Account-Modell erfüllt gleich drei Grundforderungen, die Ökonomen in Deutschland seit Jahren predigen: Kapitaldeckung statt reinem Umlageverfahren, steuerliche Anreize für private Vorsorge und eine starke Arbeitgeberbeteiligung. Besonders der frühe Start der Kapitalanlage ist entscheidend – der Zinseszinseffekt hat über Jahrzehnte eine enorme Wirkung.'
                : 'The Trump Account model fulfills three key demands that economists in Germany have been preaching for years: capital coverage instead of pure pay-as-you-go, tax incentives for private provision, and strong employer participation. The early start of capital investment is particularly crucial - the compound interest effect has an enormous impact over decades.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Während Deutschland mit seinem aktuellen Rentenpaket vor einer immer teureren Zukunft steht, zeigt das US-Modell einen alternativen Weg auf. Die automatische Anlage in Aktienfonds bis zum 18. Lebensjahr könnte bei durchschnittlicher Marktrendite zu einem beachtlichen Vermögen führen.'
                : 'While Germany faces an increasingly expensive future with its current pension package, the US model shows an alternative path. The automatic investment in stock funds until age 18 could lead to considerable wealth at average market returns.'}
            </p>

            {/* Calculation Example */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {isGerman ? 'Rechenbeispiel: Die Macht des Zinseszinses' : 'Calculation Example: The Power of Compound Interest'}
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                {isGerman
                  ? 'Bei 1.000 Dollar Startkapital, jährlicher Einzahlung von 5.000 Dollar und 7% durchschnittlicher Rendite:'
                  : 'With $1,000 starting capital, annual $5,000 contributions and 7% average return:'}
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">{isGerman ? 'Nach 10 Jahren' : 'After 10 Years'}</div>
                  <div className="text-xl font-bold text-green-700">~$73.000</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">{isGerman ? 'Nach 18 Jahren' : 'After 18 Years'}</div>
                  <div className="text-xl font-bold text-green-700">~$185.000</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">{isGerman ? 'Mit 65 (Rente)' : 'At 65 (Retirement)'}</div>
                  <div className="text-xl font-bold text-green-700">~$2.5 Mio.</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                {isGerman ? '* Vereinfachte Berechnung ohne Berücksichtigung von Steuern und Gebühren' : '* Simplified calculation without considering taxes and fees'}
              </p>
            </div>

            {/* Options Insight Box */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isGerman ? 'BeInOptions Perspektive für Anleger' : 'BeInOptions Perspective for Investors'}
              </h3>
              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Was bedeutet diese Entwicklung für Anleger und speziell für Optionshändler?'
                  : 'What does this development mean for investors and specifically for options traders?'}
              </p>

              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isGerman ? '1. Wachsende Nachfrage nach Aktienfonds' : '1. Growing Demand for Stock Funds'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isGerman
                      ? 'Millionen neuer Konten bedeuten mehr Kapital, das in den Aktienmarkt fließt. Dies könnte langfristig stützend auf die Kurse wirken und die Volatilität bei großen Indizes reduzieren.'
                      : 'Millions of new accounts mean more capital flowing into the stock market. This could support prices long-term and reduce volatility in major indices.'}
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isGerman ? '2. Chancen bei Asset Managern' : '2. Opportunities in Asset Managers'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isGerman
                      ? 'Fondsgesellschaften wie BlackRock, Vanguard oder State Street könnten profitieren. Optionen auf diese Aktien bieten Möglichkeiten für Long-Positionen oder Covered Calls.'
                      : 'Fund companies like BlackRock, Vanguard, or State Street could benefit. Options on these stocks offer opportunities for long positions or covered calls.'}
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isGerman ? '3. Deutschland könnte nachziehen' : '3. Germany Could Follow'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isGerman
                      ? 'Sollte Deutschland ein ähnliches Modell einführen, könnten deutsche Fondsanbieter und die Deutsche Börse davon profitieren. Langfristige Optionsstrategien auf diese Werte könnten interessant werden.'
                      : 'Should Germany introduce a similar model, German fund providers and Deutsche Börse could benefit. Long-term options strategies on these stocks could become interesting.'}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Fazit: Frühes Investieren ist der Schlüssel' : 'Conclusion: Early Investing Is Key'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Unabhängig von der politischen Einordnung zeigt das Trump-Account-Modell einen wichtigen Punkt: Je früher man mit dem Investieren beginnt, desto stärker wirkt der Zinseszinseffekt. Für Anleger in Deutschland bedeutet dies, dass sie nicht auf staatliche Lösungen warten sollten, sondern selbst aktiv werden können.'
                : 'Regardless of political classification, the Trump Account model shows an important point: the earlier you start investing, the stronger the compound interest effect. For investors in Germany, this means they shouldn\'t wait for government solutions but can take action themselves.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Mit Optionsstrategien wie Covered Calls oder Cash-Secured Puts können erfahrene Anleger ihre langfristigen Positionen zusätzlich optimieren und regelmäßige Einnahmen generieren – ein wichtiger Baustein für die private Altersvorsorge.'
                : 'With options strategies like covered calls or cash-secured puts, experienced investors can additionally optimize their long-term positions and generate regular income - an important building block for private retirement planning.'}
            </p>

            {/* Source Box */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {isGerman ? 'Quellen' : 'Sources'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.onvista.de/news/2025/12-07-kolumne-von-stefan-risse-trump-wird-zum-vorbild-fuer-deutsche-rentenpolitik-41095284-46-26457689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 underline flex items-center gap-1"
                  >
                    onvista.de: Kolumne von Stefan Riße - "Trump wird zum Vorbild für deutsche Rentenpolitik"
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-gray-500"> (07.12.2025)</span>
                </li>
                <li>
                  <a
                    href="https://www.handelsblatt.com/meinung/kommentare/kommentar-trump-wird-zum-rentenpolitischen-vorbild-fuer-deutschland/100180725.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 underline flex items-center gap-1"
                  >
                    Handelsblatt: Kommentar - "Trump wird zum rentenpolitischen Vorbild für Deutschland"
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Warning Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 not-prose">
              <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {isGerman ? 'Risikohinweis' : 'Risk Disclaimer'}
              </h3>
              <p className="text-amber-800 text-sm">
                {isGerman
                  ? 'Der Handel mit Optionen und die Anlage in Aktienfonds birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Vergangene Ergebnisse sind keine Garantie für zukünftige Performance. Diese Analyse dient ausschließlich Informationszwecken und stellt keine Anlageberatung dar.'
                  : 'Options trading and investing in stock funds involves significant risks and is not suitable for all investors. Past results are no guarantee of future performance. This analysis is for informational purposes only and does not constitute investment advice.'}
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Weiterführende Artikel' : 'Related Articles'}
              </h3>
              <div className="space-y-3">
                <Link
                  href={`/${locale}/covered-call-strategy`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Covered Call
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Regelmäßige Einnahmen mit Aktien generieren' : 'Generate regular income with stocks'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/cash-secured-put`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Cash-Secured Put
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Aktien günstiger kaufen mit Prämie' : 'Buy stocks cheaper with premium'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/taxes`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Steuern in Deutschland' : 'Taxes in Germany'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Besteuerung von Optionen verstehen' : 'Understanding options taxation'}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Share & Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Alle Nachrichten' : 'All News'}
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">{isGerman ? 'Teilen:' : 'Share:'}</span>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="p-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Starten Sie Ihre eigene Altersvorsorge'
                : 'Start Your Own Retirement Planning'}
            </h2>
            <p className="text-red-200 mb-8">
              {isGerman
                ? 'Warten Sie nicht auf staatliche Programme. Lernen Sie, wie Sie mit Optionen zusätzliche Einnahmen für Ihre Altersvorsorge generieren können.'
                : 'Don\'t wait for government programs. Learn how to generate additional income for your retirement with options.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/options-beginners-guide`}
                className="px-8 py-3 bg-white text-red-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Optionen lernen' : 'Learn Options'}
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-900 transition-colors"
              >
                {isGerman ? 'Einkommensstrategien' : 'Income Strategies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
