import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Europäische Märkte zeigen wenig Bewegung - Deutsche Börse im Plus'
      : 'European Markets Show Little Movement - Deutsche Börse Up',
    description: locale === 'de'
      ? 'Analyse der aktuellen Marktlage in Europa: DAX, Deutsche Börse und was Optionshändler beachten sollten.'
      : 'Analysis of current market conditions in Europe: DAX, Deutsche Börse and what options traders should consider.',
    canonical: `https://beinoptions.com/${locale}/news/europaeische-maerkte-deutsche-boerse`,
    keywords: ['DAX', 'Deutsche Börse', 'European Markets', 'Germany', 'Stock Market', 'Options', 'Europe'],
    type: 'article',
    publishedTime: '2025-12-10T10:00:00Z',
    modifiedTime: '2025-12-10T10:00:00Z',
    author: 'BeInOptions Team',
    section: 'Markets',
    locale,
  });
}

export default function EuropaMarktNewsPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Märkte' : 'Markets'}
              </span>
              <span className="text-blue-200">10. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Europäische Märkte zeigen wenig Bewegung - Deutsche Börse im Plus'
                : 'European Markets Show Little Movement - Deutsche Börse Up'}
            </h1>

            <div className="flex items-center gap-4 text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">BO</span>
                </div>
                <span>BeInOptions Team</span>
              </div>
              <span>•</span>
              <span>{isGerman ? '5 Min. Lesezeit' : '5 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Key Takeaways Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Das Wichtigste in Kürze' : 'Key Takeaways'}
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Europäische Börsen starten verhalten in die neue Handelswoche'
                    : 'European markets start the new trading week cautiously'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Deutsche Börse AG profitiert von erhöhten Handelsvolumen'
                    : 'Deutsche Börse AG benefits from increased trading volumes'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isGerman
                    ? 'Optionshändler sollten auf niedrige Volatilität achten'
                    : 'Options traders should watch for low volatility'}
                </li>
              </ul>
            </div>

            {/* Main Article */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Marktüberblick: Europa im Wartezustand' : 'Market Overview: Europe in Wait-and-See Mode'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Die europäischen Aktienmärkte zeigen sich zum Wochenstart uneinheitlich. Während der deutsche Leitindex DAX mit leichten Verlusten in den Handel startete, konnte sich die Aktie der Deutschen Börse AG deutlich von der allgemeinen Marktschwäche absetzen und verzeichnete solide Kursgewinne.'
                : 'European stock markets show mixed performance at the start of the week. While the German benchmark index DAX started trading with slight losses, Deutsche Börse AG stock clearly separated from the general market weakness and recorded solid price gains.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Analysten führen die zurückhaltende Stimmung auf die anhaltende Unsicherheit bezüglich der globalen Zinspolitik zurück. Viele Marktteilnehmer warten auf wichtige Wirtschaftsdaten aus den USA und Signale der Europäischen Zentralbank, bevor sie größere Positionen eingehen.'
                : 'Analysts attribute the cautious sentiment to ongoing uncertainty regarding global interest rate policy. Many market participants are waiting for important economic data from the US and signals from the European Central Bank before taking larger positions.'}
            </p>

            {/* Market Data Box */}
            <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Aktuelle Marktdaten' : 'Current Market Data'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">DAX</div>
                  <div className="text-xl font-bold text-gray-900">20.345</div>
                  <div className="text-sm text-red-600">-0,12%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Deutsche Börse</div>
                  <div className="text-xl font-bold text-gray-900">218,50</div>
                  <div className="text-sm text-green-600">+1,85%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Euro Stoxx 50</div>
                  <div className="text-xl font-bold text-gray-900">4.978</div>
                  <div className="text-sm text-red-600">-0,08%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">VSTOXX</div>
                  <div className="text-xl font-bold text-gray-900">14,2</div>
                  <div className="text-sm text-gray-600">+0,5%</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                {isGerman ? '* Daten sind illustrativ' : '* Data is illustrative'}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Deutsche Börse: Der Gewinner des Tages' : 'Deutsche Börse: Winner of the Day'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Die Deutsche Börse AG konnte sich gegen den allgemeinen Trend stemmen und legte deutlich zu. Der Börsenbetreiber profitiert von steigenden Handelsvolumen in volatilen Marktphasen. Besonders das Derivategeschäft über die Tochter Eurex zeigt sich robust und trägt wesentlich zum Ergebnis bei.'
                : 'Deutsche Börse AG bucked the general trend and rose significantly. The exchange operator benefits from rising trading volumes during volatile market phases. The derivatives business through subsidiary Eurex in particular shows robustness and contributes significantly to results.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Für Anleger, die auf die Deutsche Börse setzen möchten, bieten sich verschiedene Optionsstrategien an. Bei der aktuellen niedrigen Gesamtmarktvolatilität könnten Covered Calls eine interessante Möglichkeit sein, zusätzliche Prämien zu generieren.'
                : 'For investors looking to position in Deutsche Börse, various options strategies present themselves. Given the current low overall market volatility, covered calls could be an interesting way to generate additional premiums.'}
            </p>

            {/* Options Insight Box */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isGerman ? 'BeInOptions Tipp für Trader' : 'BeInOptions Tip for Traders'}
              </h3>
              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Bei niedriger impliziter Volatilität (VSTOXX unter 15) sind Optionsprämien günstig. Dies ist ein idealer Zeitpunkt für:'
                  : 'When implied volatility is low (VSTOXX below 15), option premiums are cheap. This is an ideal time for:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  {isGerman
                    ? 'Kauf von Long Straddles oder Strangles für erwartete Volatilitätsanstiege'
                    : 'Buying long straddles or strangles for expected volatility increases'}
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  {isGerman
                    ? 'Protective Puts als günstige Portfolio-Absicherung'
                    : 'Protective puts as cheap portfolio insurance'}
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  {isGerman
                    ? 'Calendar Spreads zur Ausnutzung der Zeitwertdifferenz'
                    : 'Calendar spreads to exploit time value differences'}
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {isGerman ? 'Ausblick: Was Trader beachten sollten' : 'Outlook: What Traders Should Consider'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Die kommenden Tage dürften für europäische Märkte entscheidend werden. Wichtige Termine stehen an: Die EZB-Sitzung sowie Inflationsdaten aus der Eurozone könnten für Bewegung sorgen. Optionshändler sollten sich auf mögliche Volatilitätsspitzen vorbereiten.'
                : 'The coming days could be decisive for European markets. Important events are coming up: The ECB meeting and inflation data from the eurozone could cause movement. Options traders should prepare for possible volatility spikes.'}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {isGerman
                ? 'Wer von Einzelaktien wie der Deutschen Börse profitieren möchte, sollte die Quartalszahlen im Blick behalten. Das Unternehmen hat in der Vergangenheit oft positiv überrascht, was zu starken Kursbewegungen führte - ideale Voraussetzungen für Optionsstrategien.'
                : 'Those looking to profit from individual stocks like Deutsche Börse should keep an eye on quarterly results. The company has often surprised positively in the past, leading to strong price movements - ideal conditions for options strategies.'}
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
                  href={`/${locale}/strategies`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Optionsstrategien Übersicht' : 'Options Strategies Overview'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Alle Strategien im Detail' : 'All strategies in detail'}
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
                      {isGerman ? 'Einkommens-Strategie lernen' : 'Learn income strategy'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/iv-guide`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      IV Guide
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Implizite Volatilität verstehen' : 'Understanding Implied Volatility'}
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
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Bereit für den Optionshandel?'
                : 'Ready for Options Trading?'}
            </h2>
            <p className="text-blue-200 mb-8">
              {isGerman
                ? 'Lernen Sie die Grundlagen und fortgeschrittene Strategien, um von Marktbewegungen zu profitieren.'
                : 'Learn the basics and advanced strategies to profit from market movements.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/options-beginners-guide`}
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Anfänger Guide' : 'Beginners Guide'}
              </Link>
              <Link
                href={`/${locale}/brokers`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
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
