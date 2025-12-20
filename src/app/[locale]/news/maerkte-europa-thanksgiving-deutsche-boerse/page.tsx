import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Märkte Europa: Ruhiger Handel vor US-Thanksgiving - Deutsche Börse mit Allfunds-Deal im Plus'
      : 'European Markets: Quiet Trading Before US Thanksgiving - Deutsche Börse Up on Allfunds Deal',
    description: locale === 'de'
      ? 'Europäische Börsen zeigen wenig Bewegung am US-Feiertag. Deutsche Börse steigt nach Übernahmeangebot für Allfunds. Auswirkungen auf Optionshändler.'
      : 'European markets show little movement on US holiday. Deutsche Börse rises after Allfunds acquisition offer. Impact on options traders.',
  });
}

export default function ThanksgivingMarketNewsPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-indigo-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Märkte Europa' : 'European Markets'}
              </span>
              <span className="text-indigo-200">28. November 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Märkte Europa: Ruhiger Handel vor US-Thanksgiving - Deutsche Börse mit Allfunds-Deal im Plus'
                : 'European Markets: Quiet Trading Before US Thanksgiving - Deutsche Börse Up on Allfunds Deal'}
            </h1>

            <div className="flex items-center gap-4 text-indigo-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">BO</span>
                </div>
                <span>BeInOptions Team</span>
              </div>
              <span>•</span>
              <span>{isGerman ? '6 Min. Lesezeit' : '6 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Key Takeaways Box */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8 not-prose">
              <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Das Wichtigste in Kürze' : 'Key Takeaways'}
              </h3>
              <ul className="space-y-2 text-indigo-800">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'DAX verliert 0,1% auf 23.735 Punkte bei geringem Handelsvolumen'
                    : 'DAX loses 0.1% to 23,735 points on low trading volume'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Deutsche Börse steigt um 1,3% nach Übernahmeangebot für Allfunds (5,3 Mrd. Euro)'
                    : 'Deutsche Börse rises 1.3% after takeover bid for Allfunds (€5.3 billion)'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'US-Zinssenkung in zwei Wochen vom Markt eingepreist'
                    : 'US rate cut in two weeks priced in by the market'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Niedrige Volatilität durch US-Feiertag – idealer Zeitpunkt für bestimmte Optionsstrategien'
                    : 'Low volatility due to US holiday - ideal time for certain options strategies'}
                </li>
              </ul>
            </div>

            {/* Main Article */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Thanksgiving-Effekt: Stille an den Märkten' : 'Thanksgiving Effect: Silence in the Markets'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Die europäischen Aktienmärkte präsentierten sich am Freitag nahezu unverändert. Der ruhige Handel vom Vortag setzte sich aufgrund des US-Feiertags Thanksgiving fort. Die amerikanische Börse handelte nur verkürzt am Nachmittag, wobei ohnehin kaum Marktteilnehmer erwartet wurden – Thanksgiving ist nach Weihnachten das größte Familienfest in den USA und wird traditionell für verlängerte Wochenenden genutzt.'
                : 'European stock markets presented virtually unchanged on Friday. The quiet trading from the previous day continued due to the US holiday Thanksgiving. The American stock exchange traded only shortened hours in the afternoon, with few market participants expected anyway - Thanksgiving is the biggest family holiday in the US after Christmas and is traditionally used for extended weekends.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Der deutsche Leitindex DAX verlor 0,1 Prozent auf 23.735 Punkte. Außer der Deutschen Börse veränderte sich keine DAX-Aktie um mehr als 1 Prozent – ein klares Zeichen für die außergewöhnlich niedrige Aktivität. Der Euro-Stoxx-50 gab ebenfalls 0,1 Prozent nach und schloss bei 5.647 Punkten.'
                : 'The German benchmark DAX lost 0.1 percent to 23,735 points. Except for Deutsche Börse, no DAX stock changed by more than 1 percent - a clear sign of the exceptionally low activity. The Euro Stoxx 50 also gave up 0.1 percent and closed at 5,647 points.'}
            </p>

            {/* Market Data Box */}
            <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Marktdaten vom 28. November 2025' : 'Market Data from November 28, 2025'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">DAX</div>
                  <div className="text-xl font-bold text-gray-900">23.735</div>
                  <div className="text-sm text-red-600">-0,1%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Euro Stoxx 50</div>
                  <div className="text-xl font-bold text-gray-900">5.647</div>
                  <div className="text-sm text-red-600">-0,1%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-green-200">
                  <div className="text-sm text-gray-500 mb-1">Deutsche Börse</div>
                  <div className="text-xl font-bold text-gray-900">+1,3%</div>
                  <div className="text-sm text-green-600">{isGerman ? 'Top-Performer' : 'Top Performer'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">{isGerman ? 'Andere DAX-Werte' : 'Other DAX Stocks'}</div>
                  <div className="text-xl font-bold text-gray-900">&lt; 1%</div>
                  <div className="text-sm text-gray-600">{isGerman ? 'Veränderung' : 'Change'}</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Deutsche Börse: Mega-Deal mit Allfunds' : 'Deutsche Börse: Mega-Deal with Allfunds'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Die Deutsche Börse AG war der klare Gewinner des Tages mit einem Plus von 1,3 Prozent. Der Börsenbetreiber hatte am Vorabend bekanntgegeben, die Fondsplattform Allfunds für rund 5,3 Milliarden Euro übernehmen zu wollen. Das Angebot liegt bei 8,80 Euro je Aktie.'
                : 'Deutsche Börse AG was the clear winner of the day with a gain of 1.3 percent. The exchange operator announced the previous evening that it wants to acquire the fund platform Allfunds for around €5.3 billion. The offer is €8.80 per share.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Diese strategische Akquisition würde das Portfolio der Deutschen Börse erheblich erweitern und das Unternehmen zu einem noch wichtigeren Player im europäischen Finanzökosystem machen. Allfunds ist eine der größten B2B-Fondsplattformen weltweit und verwaltet Assets in Billionenhöhe.'
                : 'This strategic acquisition would significantly expand Deutsche Börse\'s portfolio and make the company an even more important player in the European financial ecosystem. Allfunds is one of the largest B2B fund platforms worldwide, managing assets in the trillions.'}
            </p>

            {/* Deal Info Box */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Allfunds-Übernahme im Detail' : 'Allfunds Acquisition Details'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-green-700 mb-1">{isGerman ? 'Kaufpreis' : 'Purchase Price'}</div>
                  <div className="text-2xl font-bold text-green-900">5,3 Mrd. €</div>
                </div>
                <div>
                  <div className="text-sm text-green-700 mb-1">{isGerman ? 'Angebot je Aktie' : 'Offer per Share'}</div>
                  <div className="text-2xl font-bold text-green-900">8,80 €</div>
                </div>
                <div>
                  <div className="text-sm text-green-700 mb-1">{isGerman ? 'Kursreaktion' : 'Stock Reaction'}</div>
                  <div className="text-2xl font-bold text-green-900">+1,3%</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'US-Zinssenkung im Fokus' : 'US Rate Cut in Focus'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Nach zuletzt schwachen Konjunkturdaten aus den USA setzt der Markt auf eine US-Zinssenkung in zwei Wochen. Die Fed-Entscheidung wird mit Spannung erwartet und könnte für neue Impulse an den Märkten sorgen. Niedrigere Zinsen würden traditionell risikoreiche Assets wie Aktien und Optionen attraktiver machen.'
                : 'Following recent weak economic data from the US, the market is betting on a US rate cut in two weeks. The Fed decision is eagerly awaited and could provide new momentum for the markets. Lower interest rates would traditionally make risky assets like stocks and options more attractive.'}
            </p>

            {/* Options Insight Box */}
            <div className="bg-gradient-to-r from-primary-50 to-indigo-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isGerman ? 'BeInOptions Analyse für Trader' : 'BeInOptions Analysis for Traders'}
              </h3>
              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Die aktuelle Marktsituation bietet interessante Möglichkeiten für Optionshändler:'
                  : 'The current market situation offers interesting opportunities for options traders:'}
              </p>

              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isGerman ? '1. Deutsche Börse als Einzelwert' : '1. Deutsche Börse as Individual Stock'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isGerman
                      ? 'Die M&A-Aktivität könnte weitere Volatilität bringen. Long Calls auf Deutsche Börse könnten profitieren, wenn der Deal gut aufgenommen wird. Alternativ: Covered Calls für Aktienbesitzer, um von der erhöhten Prämie zu profitieren.'
                      : 'M&A activity could bring more volatility. Long calls on Deutsche Börse could profit if the deal is well received. Alternatively: Covered calls for shareholders to benefit from elevated premiums.'}
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isGerman ? '2. Fed-Entscheidung als Katalysator' : '2. Fed Decision as Catalyst'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isGerman
                      ? 'Vor wichtigen Zinsentscheidungen steigt typischerweise die implizite Volatilität. Straddles oder Strangles auf Index-ETFs könnten interessant sein, um von Bewegungen in beide Richtungen zu profitieren.'
                      : 'Implied volatility typically rises before important rate decisions. Straddles or strangles on index ETFs could be interesting to profit from movements in either direction.'}
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isGerman ? '3. Niedrige Volatilität nutzen' : '3. Take Advantage of Low Volatility'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isGerman
                      ? 'Der Thanksgiving-bedingte ruhige Handel führt zu günstigen Optionsprämien. Dies ist ein guter Zeitpunkt, um Protective Puts als Portfolio-Absicherung zu kaufen oder Long-Positionen aufzubauen.'
                      : 'Thanksgiving-induced quiet trading leads to cheap option premiums. This is a good time to buy protective puts as portfolio insurance or to build long positions.'}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Ausblick: Was kommt als Nächstes?' : 'Outlook: What\'s Next?'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Mit dem Ende der Thanksgiving-Woche dürfte das Handelsvolumen wieder anziehen. Die Aufmerksamkeit richtet sich nun auf die bevorstehende Fed-Sitzung und weitere Wirtschaftsdaten. Für Optionshändler bedeutet dies: Die ruhige Phase neigt sich dem Ende zu, und Volatilität könnte schnell zurückkehren.'
                : 'With the end of Thanksgiving week, trading volume should pick up again. Attention now turns to the upcoming Fed meeting and further economic data. For options traders this means: The quiet phase is coming to an end, and volatility could return quickly.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Die Deutsche Börse bleibt ein interessanter Wert für Investoren, die vom wachsenden europäischen Kapitalmarkt profitieren möchten. Die Allfunds-Übernahme könnte langfristig positive Synergien bringen und das Geschäftsmodell weiter diversifizieren.'
                : 'Deutsche Börse remains an interesting stock for investors looking to benefit from the growing European capital market. The Allfunds acquisition could bring positive synergies long-term and further diversify the business model.'}
            </p>

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
                  ? 'Der Handel mit Optionen birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Vergangene Ergebnisse sind keine Garantie für zukünftige Performance. Diese Analyse dient ausschließlich Informationszwecken und stellt keine Anlageberatung dar.'
                  : 'Options trading involves significant risks and is not suitable for all investors. Past results are no guarantee of future performance. This analysis is for informational purposes only and does not constitute investment advice.'}
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Weiterführende Artikel' : 'Related Articles'}
              </h3>
              <div className="space-y-3">
                <Link
                  href={`/${locale}/news/europaeische-maerkte-deutsche-boerse`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Europäische Märkte - Deutsche Börse im Plus' : 'European Markets - Deutsche Börse Up'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Aktuelle Marktanalyse' : 'Current market analysis'}
                    </div>
                  </div>
                </Link>
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
                      {isGerman ? 'Einkommens-Strategie für Aktienbesitzer' : 'Income strategy for shareholders'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/iron-condor-strategy`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Iron Condor
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Strategie für Seitwärtsmärkte' : 'Strategy for sideways markets'}
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

          {/* Giscus Comments */}
          <Giscus />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Möchten Sie von Marktbewegungen profitieren?'
                : 'Want to Profit from Market Movements?'}
            </h2>
            <p className="text-indigo-200 mb-8">
              {isGerman
                ? 'Lernen Sie, wie Sie mit Optionen in jeder Marktlage Gewinne erzielen können – egal ob die Kurse steigen, fallen oder seitwärts tendieren.'
                : 'Learn how to profit with options in any market condition - whether prices rise, fall, or move sideways.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/strategies`}
                className="px-8 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Strategien entdecken' : 'Discover Strategies'}
              </Link>
              <Link
                href={`/${locale}/brokers`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors"
              >
                {isGerman ? 'Broker vergleichen' : 'Compare Brokers'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
