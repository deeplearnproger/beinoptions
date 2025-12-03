import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Interview: Ein Jahr als Options-Trader | Erfolge, Fehler und Lektionen'
      : 'Interview: One Year as Options Trader | Successes, Mistakes and Lessons',
    description: locale === 'de'
      ? 'Ein Trader berichtet über seine Erfahrungen im ersten Jahr: Erfolge, Fehler und wichtige Lektionen für Einsteiger.'
      : 'A trader reports on his experiences in the first year: successes, mistakes and important lessons for beginners.',
  });
}

export default function OneYearTraderPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
              </svg>
              {locale === 'de' ? 'Trader Stories | 15 Min Lesezeit' : 'Trader Stories | 15 min read'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Interview: Ein Jahr als Options-Trader'
                : 'Interview: One Year as Options Trader'}
            </h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Ein Trader berichtet über seine Erfahrungen im ersten Jahr: Erfolge, Fehler und wichtige Lektionen für Einsteiger.'
                : 'A trader reports on his experiences in the first year: successes, mistakes and important lessons for beginners.'}
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
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-cyan-700">MH</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Markus Hoffmann</h3>
                  <p className="text-gray-600">32 Jahre, Software-Entwickler aus München</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {locale === 'de'
                      ? 'Trading-Erfahrung: 1 Jahr | Hauptstrategie: Covered Calls & Credit Spreads'
                      : 'Trading Experience: 1 year | Main Strategy: Covered Calls & Credit Spreads'}
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
                <p className="text-gray-800 italic">
                  {locale === 'de'
                    ? '"Das erste Jahr war eine emotionale Achterbahnfahrt. Ich habe Fehler gemacht, viel gelernt und bin jetzt profitabler als je zuvor. Hier sind meine wichtigsten Erkenntnisse."'
                    : '"The first year was an emotional rollercoaster. I made mistakes, learned a lot, and am now more profitable than ever. Here are my key insights."'}
                </p>
              </div>
            </div>

            {/* The Beginning */}
            <div className="card bg-gradient-to-br from-cyan-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locale === 'de' ? 'Der Anfang: Wie alles begann' : 'The Beginning: How It All Started'}
              </h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-cyan-700">{locale === 'de' ? 'BeInOptions:' : 'BeInOptions:'}</strong>{' '}
                {locale === 'de'
                  ? 'Markus, wie bist du zum Optionshandel gekommen?'
                  : 'Markus, how did you get into options trading?'}
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-gray-900">Markus:</strong>{' '}
                {locale === 'de'
                  ? 'Ich hatte ein Aktiendepot mit ca. 50.000€ – hauptsächlich Tech-Aktien. Eines Tages sah ich ein YouTube-Video über Covered Calls. Die Idee, aus meinen bestehenden Aktien zusätzliches Einkommen zu generieren, faszinierte mich sofort. Ich eröffnete ein Konto bei Libertex und verkaufte meinen ersten Covered Call auf Apple-Aktien. Das war im Januar 2024.'
                  : 'I had a stock portfolio of about €50,000 – mainly tech stocks. One day I saw a YouTube video about covered calls. The idea of generating additional income from my existing stocks immediately fascinated me. I opened an account at Libertex and sold my first covered call on Apple stock. That was in January 2024.'}
              </p>
              <div className="bg-white rounded-lg p-5 border-2 border-cyan-200">
                <h4 className="font-bold text-cyan-900 mb-3">
                  {locale === 'de' ? 'Erste Trades - Die Zahlen' : 'First Trades - The Numbers'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-cyan-50 rounded p-3">
                    <p className="text-xs text-gray-600 mb-1">{locale === 'de' ? 'Monat 1-3' : 'Month 1-3'}</p>
                    <p className="text-2xl font-bold text-green-700">+€2,100</p>
                    <p className="text-xs text-gray-600 mt-1">{locale === 'de' ? 'Nur Covered Calls' : 'Only Covered Calls'}</p>
                  </div>
                  <div className="bg-cyan-50 rounded p-3">
                    <p className="text-xs text-gray-600 mb-1">{locale === 'de' ? 'Monat 4-6' : 'Month 4-6'}</p>
                    <p className="text-2xl font-bold text-red-700">-€1,800</p>
                    <p className="text-xs text-gray-600 mt-1">{locale === 'de' ? 'Experimente mit Naked Puts' : 'Experiments with Naked Puts'}</p>
                  </div>
                  <div className="bg-cyan-50 rounded p-3">
                    <p className="text-xs text-gray-600 mb-1">{locale === 'de' ? 'Monat 7-12' : 'Month 7-12'}</p>
                    <p className="text-2xl font-bold text-green-700">+€4,500</p>
                    <p className="text-xs text-gray-600 mt-1">{locale === 'de' ? 'Disziplinierte Spreads' : 'Disciplined Spreads'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biggest Mistakes */}
            <div className="card bg-gradient-to-br from-red-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {locale === 'de' ? 'Die 3 größten Fehler' : 'The 3 Biggest Mistakes'}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Zu viel Hebel, zu schnell' : 'Too Much Leverage, Too Fast'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        <strong>Markus:</strong>{' '}
                        {locale === 'de'
                          ? '"Nach meinen ersten Erfolgen wurde ich übermütig. Ich dachte: Wenn ich mit 10 Kontrakten 200€ verdiene, verdiene ich mit 100 Kontrakten 2.000€. Im April verkaufte ich Naked Puts auf Tesla mit viel zu hohem Exposure. Tesla fiel 15% – ich verlor fast 2.000€ an einem Tag."'
                          : '"After my initial success, I got overconfident. I thought: If I make €200 with 10 contracts, I\'ll make €2,000 with 100 contracts. In April I sold naked puts on Tesla with way too much exposure. Tesla fell 15% – I lost almost €2,000 in one day."'}
                      </p>
                      <div className="bg-red-50 rounded p-4">
                        <p className="text-sm font-semibold text-red-900 mb-2">
                          {locale === 'de' ? 'Lektion:' : 'Lesson:'}
                        </p>
                        <p className="text-sm text-gray-700">
                          {locale === 'de'
                            ? 'Nie mehr als 2-3% des Kapitals pro Trade riskieren. Positionsgröße ist wichtiger als die Strategie selbst.'
                            : 'Never risk more than 2-3% of capital per trade. Position sizing is more important than the strategy itself.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Emotionales Trading' : 'Emotional Trading'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        <strong>Markus:</strong>{' '}
                        {locale === 'de'
                          ? '"Im Juli hatte ich 5 verlustbringende Trades hintereinander. Ich war frustriert und wollte die Verluste sofort zurückholen. Ich verdoppelte meine Positionen und handelte ohne Plan. Das führte zu noch mehr Verlusten."'
                          : '"In July I had 5 losing trades in a row. I was frustrated and wanted to recover the losses immediately. I doubled my positions and traded without a plan. This led to even more losses."'}
                      </p>
                      <div className="bg-orange-50 rounded p-4">
                        <p className="text-sm font-semibold text-orange-900 mb-2">
                          {locale === 'de' ? 'Lektion:' : 'Lesson:'}
                        </p>
                        <p className="text-sm text-gray-700">
                          {locale === 'de'
                            ? 'Nach 2 Verlust-Trades: 1 Tag Pause machen. Trading-Journal führen und Emotionen dokumentieren.'
                            : 'After 2 losing trades: Take a 1-day break. Keep a trading journal and document emotions.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Keine Exit-Strategie' : 'No Exit Strategy'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        <strong>Markus:</strong>{' '}
                        {locale === 'de'
                          ? '"Ich wusste genau, wann ich eine Position eröffne, aber nicht, wann ich sie schließen sollte. Oft hielt ich verlustbringende Positionen zu lange in der Hoffnung auf eine Erholung."'
                          : '"I knew exactly when to open a position, but not when to close it. I often held losing positions too long hoping for a recovery."'}
                      </p>
                      <div className="bg-yellow-50 rounded p-4">
                        <p className="text-sm font-semibold text-yellow-900 mb-2">
                          {locale === 'de' ? 'Lektion:' : 'Lesson:'}
                        </p>
                        <p className="text-sm text-gray-700">
                          {locale === 'de'
                            ? 'Vor jedem Trade: Stop-Loss setzen UND Gewinnziel definieren. Bei 50% Gewinn schließe ich jetzt die meisten Positionen.'
                            : 'Before each trade: Set stop-loss AND define profit target. At 50% profit I now close most positions.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biggest Successes */}
            <div className="card bg-gradient-to-br from-green-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Die größten Erfolge' : 'The Biggest Successes'}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                  <h3 className="text-xl font-bold text-green-900 mb-4">
                    {locale === 'de' ? 'Konsistente monatliche Einnahmen' : 'Consistent Monthly Income'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Markus:</strong>{' '}
                    {locale === 'de'
                      ? '"Ab August entwickelte ich ein System: Jeden Monatsanfang verkaufe ich Covered Calls auf meine Tech-Aktien mit 30-45 Tagen Laufzeit. Ziel: 1-2% monatliche Prämieneinnahme. Die letzten 5 Monate waren alle profitabel – durchschnittlich +750€ pro Monat."'
                      : '"From August I developed a system: At the start of each month I sell covered calls on my tech stocks with 30-45 days expiration. Goal: 1-2% monthly premium income. The last 5 months were all profitable – averaging +€750 per month."'}
                  </p>
                  <div className="bg-green-50 rounded p-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600">August</p>
                        <p className="text-xl font-bold text-green-700">+€680</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">September</p>
                        <p className="text-xl font-bold text-green-700">+€820</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Oktober</p>
                        <p className="text-xl font-bold text-green-700">+€750</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">November</p>
                        <p className="text-xl font-bold text-green-700">+€690</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {locale === 'de' ? 'Der beste Trade: IV Crush nach Earnings' : 'Best Trade: IV Crush After Earnings'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Markus:</strong>{' '}
                    {locale === 'de'
                      ? '"Im Oktober verkaufte ich vor den Microsoft Earnings einen Iron Condor. Die IV war bei 65% – extrem hoch. Nach den Earnings fiel die IV auf 35%. Ich konnte die Position mit 80% Gewinn nach nur 2 Tagen schließen. Profit: 1.200€."'
                      : '"In October I sold an iron condor before Microsoft earnings. IV was at 65% – extremely high. After earnings IV dropped to 35%. I was able to close the position with 80% profit after just 2 days. Profit: €1,200."'}
                  </p>
                  <div className="bg-blue-50 rounded p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">
                      {locale === 'de' ? 'Was ich gelernt habe:' : 'What I learned:'}
                    </p>
                    <p className="text-sm text-gray-700">
                      {locale === 'de'
                        ? 'Hohe IV = Verkaufsgelegenheit. Ich achte jetzt immer auf den IV Rank und handle nur, wenn er über 50% liegt.'
                        : 'High IV = selling opportunity. I now always watch IV Rank and only trade when it\'s above 50%.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advice for Beginners */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {locale === 'de' ? 'Ratschläge für Anfänger' : 'Advice for Beginners'}
              </h2>

              <p className="text-gray-700 mb-6">
                <strong className="text-indigo-700">{locale === 'de' ? 'BeInOptions:' : 'BeInOptions:'}</strong>{' '}
                {locale === 'de'
                  ? 'Was würdest du jemandem raten, der mit Optionen anfangen möchte?'
                  : 'What would you advise someone who wants to start with options?'}
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    1. {locale === 'de' ? 'Starte mit Covered Calls' : 'Start with Covered Calls'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Wenn du bereits Aktien besitzt, beginne mit Covered Calls. Das Risiko ist begrenzt und du lernst die Mechaniken kennen.'
                      : 'If you already own stocks, start with covered calls. Risk is limited and you learn the mechanics.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    2. {locale === 'de' ? 'Papier-Trading ist wichtig' : 'Paper Trading is Important'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Ich wünschte, ich hätte 2-3 Monate mit Papier-Trading verbracht. Es hätte mir viele teure Fehler erspart.'
                      : 'I wish I had spent 2-3 months paper trading. It would have saved me many expensive mistakes.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    3. {locale === 'de' ? 'Verstehe die Greeks' : 'Understand the Greeks'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Delta, Theta, Vega – diese Kennzahlen sind essentiell. Ich trade nicht mehr, ohne sie zu checken.'
                      : 'Delta, Theta, Vega – these metrics are essential. I don\'t trade anymore without checking them.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    4. {locale === 'de' ? 'Journaling ist ein Muss' : 'Journaling is a Must'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Dokumentiere jeden Trade: Warum, wann, wie viel. Analysiere jeden Monat deine Performance.'
                      : 'Document every trade: Why, when, how much. Analyze your performance every month.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    5. {locale === 'de' ? 'Wähle den richtigen Broker' : 'Choose the Right Broker'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Ich nutze Libertex wegen der niedrigen Gebühren und der guten Tools. Bei häufigem Trading machen Gebühren einen großen Unterschied.'
                      : 'I use Libertex because of low fees and good tools. With frequent trading, fees make a big difference.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Current Setup */}
            <div className="card bg-gradient-to-br from-purple-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Mein aktuelles Setup (Dezember 2024)' : 'My Current Setup (December 2024)'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-4">
                    {locale === 'de' ? 'Hauptstrategie' : 'Main Strategy'}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span>70% {locale === 'de' ? 'Covered Calls auf Tech-Aktien' : 'Covered Calls on Tech Stocks'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span>20% {locale === 'de' ? 'Credit Spreads bei hoher IV' : 'Credit Spreads at High IV'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span>10% {locale === 'de' ? 'Iron Condors vor Earnings' : 'Iron Condors Before Earnings'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-4">
                    {locale === 'de' ? 'Monatliches Ziel' : 'Monthly Goal'}
                  </h3>
                  <div className="text-center mb-4">
                    <p className="text-4xl font-bold text-purple-700">1.5%</p>
                    <p className="text-sm text-gray-600">{locale === 'de' ? 'des Portfoliowerts' : 'of portfolio value'}</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Das entspricht ~750€ bei meinem aktuellen Portfolio. Realistisch und erreichbar ohne übermäßiges Risiko.'
                      : 'That\'s ~€750 with my current portfolio. Realistic and achievable without excessive risk.'}
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-purple-100 border-2 border-purple-400 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 mb-3">
                  {locale === 'de' ? 'Wichtigste Regeln' : 'Most Important Rules'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">1.</span>
                    <span>{locale === 'de' ? 'Nie mehr als 2% Risiko pro Trade' : 'Never more than 2% risk per trade'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">2.</span>
                    <span>{locale === 'de' ? 'Nur handeln bei IV Rank > 50%' : 'Only trade at IV Rank > 50%'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">3.</span>
                    <span>{locale === 'de' ? 'Position bei 50% Gewinn schließen' : 'Close position at 50% profit'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">4.</span>
                    <span>{locale === 'de' ? 'Jeden Trade im Journal dokumentieren' : 'Document every trade in journal'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">5.</span>
                    <span>{locale === 'de' ? 'Nach 2 Verlusten: 1 Tag Pause' : 'After 2 losses: 1 day break'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="card bg-gradient-to-br from-cyan-600 to-blue-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Starten Sie Ihre Options-Trading-Reise!'
                    : 'Start Your Options Trading Journey!'}
                </h3>
                <p className="text-cyan-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Lernen Sie aus Markus\' Erfahrungen und starten Sie mit Libertex – professionelle Tools, niedrige Gebühren!'
                    : 'Learn from Markus\' experience and start with Libertex – professional tools, low fees!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-cyan-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Jetzt kostenlos starten' : 'Start Free Now'}
                </a>
              </div>
            </div>

            {/* Conclusion */}
            <div className="card bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Schlusswort' : 'Closing Words'}
              </h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-cyan-700">{locale === 'de' ? 'BeInOptions:' : 'BeInOptions:'}</strong>{' '}
                {locale === 'de'
                  ? 'Markus, vielen Dank für dieses ehrliche Interview. Was sind deine Pläne für 2025?'
                  : 'Markus, thank you for this honest interview. What are your plans for 2025?'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Markus:</strong>{' '}
                {locale === 'de'
                  ? 'Ich bleibe bei meiner bewährten Strategie. Mein Ziel ist es, konstant 1.5-2% pro Monat zu erwirtschaften. Das wären 18-24% jährlich – mehr als genug. Ich werde weiter lernen, mein System verfeinern und vielleicht einen kleinen Teil in neue Strategien wie Calendar Spreads investieren. Aber langsam und diszipliniert – die wichtigste Lektion des ersten Jahres.'
                  : 'I\'m sticking with my proven strategy. My goal is to consistently earn 1.5-2% per month. That would be 18-24% annually – more than enough. I\'ll continue learning, refining my system, and maybe invest a small portion in new strategies like calendar spreads. But slowly and disciplined – the most important lesson of the first year.'}
              </p>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Dieses Interview dient nur zu Bildungszwecken und stellt keine Anlageberatung dar. Die Erfahrungen von Markus sind individuell und garantieren keine zukünftigen Ergebnisse. Optionshandel birgt erhebliche Risiken und ist nicht für alle Anleger geeignet.'
                  : 'This interview is for educational purposes only and does not constitute investment advice. Markus\' experiences are individual and do not guarantee future results. Options trading carries significant risks and is not suitable for all investors.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2024-12-28</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
