import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Options Assignment Erklärt - Was passiert bei Verfall? | 2025'
      : 'Options Assignment Explained - What Happens at Expiration? | 2025',
    description: locale === 'de'
      ? 'Verstehen Sie Options Assignment: Was passiert wenn Optionen verfallen, ausgeübt oder zugewiesen werden. Exercise vs Assignment einfach erklärt.'
      : 'Understand options assignment: What happens when options expire, get exercised or assigned. Exercise vs assignment explained simply.',
    keywords: locale === 'de'
      ? ['Options Assignment', 'Optionen Verfall', 'Exercise', 'Zuweisung', 'ITM Optionen', 'Optionen Ausübung']
      : ['options assignment', 'options expiration', 'exercise options', 'ITM options', 'option exercise'],
  });
}

export default function OptionsAssignmentPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const scenarios = [
    {
      title: isGerman ? 'Szenario 1: Long Call - Im Geld (ITM)' : 'Scenario 1: Long Call - In The Money (ITM)',
      setup: isGerman
        ? 'Sie haben einen €100 Call gekauft. Bei Verfall steht die Aktie bei €110.'
        : 'You bought a €100 call. At expiration, stock is at €110.',
      whatHappens: isGerman
        ? 'Option ist €10 im Geld. Wenn Sie nichts tun, wird sie automatisch ausgeübt.'
        : 'Option is €10 in the money. If you do nothing, it will be automatically exercised.',
      result: isGerman
        ? 'Sie kaufen 100 Aktien zu €100 (Gesamtkosten €10.000). Diese sind sofort €11.000 wert = €1.000 Gewinn (minus gezahlte Prämie).'
        : 'You buy 100 shares at €100 (total cost €10,000). These are immediately worth €11,000 = €1,000 profit (minus premium paid).',
      action: isGerman ? 'Automatische Ausübung' : 'Automatic Exercise',
      color: 'green',
    },
    {
      title: isGerman ? 'Szenario 2: Long Call - Aus dem Geld (OTM)' : 'Scenario 2: Long Call - Out of The Money (OTM)',
      setup: isGerman
        ? 'Sie haben einen €100 Call gekauft. Bei Verfall steht die Aktie bei €95.'
        : 'You bought a €100 call. At expiration, stock is at €95.',
      whatHappens: isGerman
        ? 'Option ist €5 aus dem Geld. Warum würden Sie für €100 kaufen, wenn der Marktpreis €95 ist?'
        : 'Option is €5 out of the money. Why would you pay €100 when market price is €95?',
      result: isGerman
        ? 'Option verfällt wertlos. Sie verlieren die gezahlte Prämie (100% Verlust der Prämie).'
        : 'Option expires worthless. You lose the premium paid (100% loss of premium).',
      action: isGerman ? 'Wertloser Verfall' : 'Worthless Expiration',
      color: 'red',
    },
    {
      title: isGerman ? 'Szenario 3: Short Put - Zuweisung (Assignment)' : 'Scenario 3: Short Put - Assignment',
      setup: isGerman
        ? 'Sie haben einen €50 Put VERKAUFT. Bei Verfall steht die Aktie bei €45.'
        : 'You SOLD a €50 put. At expiration, stock is at €45.',
      whatHappens: isGerman
        ? 'Put ist €5 ITM. Der Käufer übt aus. Sie werden ZUGEWIESEN (assigned).'
        : 'Put is €5 ITM. The buyer exercises. You get ASSIGNED.',
      result: isGerman
        ? 'Sie MÜSSEN 100 Aktien zu €50 kaufen (€5.000 total). Die Aktien sind nur €4.500 wert. Verlust: €500 (teilweise durch Prämie gedeckt).'
        : 'You MUST buy 100 shares at €50 (€5,000 total). Shares are only worth €4,500. Loss: €500 (partially offset by premium received).',
      action: isGerman ? 'Assignment' : 'Assignment',
      color: 'orange',
    },
    {
      title: isGerman ? 'Szenario 4: Covered Call - Aktien werden abgerufen' : 'Scenario 4: Covered Call - Shares Called Away',
      setup: isGerman
        ? 'Sie besitzen 100 Aktien zu €100. Sie verkauften einen €110 Call. Aktie steigt auf €120.'
        : 'You own 100 shares at €100. You sold a €110 call. Stock rises to €120.',
      whatHappens: isGerman
        ? 'Call ist €10 ITM. Der Käufer übt aus. Ihre Aktien werden "abgerufen" (called away).'
        : 'Call is €10 ITM. The buyer exercises. Your shares get "called away".',
      result: isGerman
        ? 'Sie verkaufen Ihre 100 Aktien zu €110 (nicht €120). Gewinn: €1.000 + Prämie. Sie verpassen €1.000 weiteren Gewinn.'
        : 'You sell your 100 shares at €110 (not €120). Profit: €1,000 + premium. You miss €1,000 additional profit.',
      action: isGerman ? 'Aktien abgerufen' : 'Shares Called Away',
      color: 'yellow',
    },
  ];

  const timeline = [
    {
      time: isGerman ? '1-2 Wochen vor Verfall' : '1-2 Weeks Before Expiration',
      action: isGerman ? 'Position überprüfen' : 'Review Your Position',
      details: isGerman
        ? 'Entscheiden Sie: Schließen, rollen oder bis zum Verfall halten?'
        : 'Decide: Close, roll, or hold to expiration?',
    },
    {
      time: isGerman ? 'Verfallsfreitag 16:00 ET' : 'Expiration Friday 4:00 PM ET',
      action: isGerman ? 'Marktschluss' : 'Market Close',
      details: isGerman
        ? 'Letzte Chance, die Option am Markt zu verkaufen.'
        : 'Last chance to sell the option in the market.',
    },
    {
      time: isGerman ? 'Verfallsfreitag 17:30 ET' : 'Expiration Friday 5:30 PM ET',
      action: isGerman ? 'Exercise Cutoff' : 'Exercise Cutoff',
      details: isGerman
        ? 'Letzte Chance, Ihren Broker zu kontaktieren bezüglich Exercise-Entscheidungen.'
        : 'Last chance to contact your broker regarding exercise decisions.',
    },
    {
      time: isGerman ? 'Samstag Morgen' : 'Saturday Morning',
      action: isGerman ? 'Assignment Benachrichtigung' : 'Assignment Notification',
      details: isGerman
        ? 'Sie erfahren, ob Sie zugewiesen wurden (für Short-Positionen).'
        : 'You learn if you were assigned (for short positions).',
    },
    {
      time: isGerman ? 'Montag' : 'Monday',
      action: isGerman ? 'Settlement' : 'Settlement',
      details: isGerman
        ? 'Aktien erscheinen in Ihrem Konto (oder werden abgezogen).'
        : 'Shares appear in your account (or are removed).',
    },
  ];

  const faqs = [
    {
      question: isGerman
        ? 'Was ist der Unterschied zwischen Exercise und Assignment?'
        : 'What is the difference between Exercise and Assignment?',
      answer: isGerman
        ? 'Exercise: SIE entscheiden, Ihr Recht auszuüben (Sie sind der Käufer). Assignment: Sie MÜSSEN Ihre Pflicht erfüllen, weil jemand anderes ausgeübt hat (Sie sind der Verkäufer). Käufer haben Rechte, Verkäufer haben Pflichten.'
        : 'Exercise: YOU decide to use your right (you are the buyer). Assignment: You MUST fulfill your obligation because someone else exercised (you are the seller). Buyers have rights, sellers have obligations.',
    },
    {
      question: isGerman
        ? 'Kann ich vor dem Verfall zugewiesen werden?'
        : 'Can I get assigned before expiration?',
      answer: isGerman
        ? 'Ja! Bei amerikanischen Optionen (die meisten Aktienoptionen) kann jederzeit ausgeübt werden. Early Assignment passiert häufiger bei: 1) Deep ITM Optionen, 2) Kurz vor Dividendenzahlung, 3) Kurz vor Verfall. Europäische Optionen können nur bei Verfall ausgeübt werden.'
        : 'Yes! American-style options (most stock options) can be exercised anytime. Early assignment happens more often with: 1) Deep ITM options, 2) Just before dividend payment, 3) Close to expiration. European options can only be exercised at expiration.',
    },
    {
      question: isGerman
        ? 'Was passiert, wenn ich nicht genug Geld für Assignment habe?'
        : 'What if I don\'t have enough money for assignment?',
      answer: isGerman
        ? 'Das ist ein ernstes Problem! Wenn Sie einen Put verkauft haben und zugewiesen werden, müssen Sie die Aktien kaufen. Haben Sie nicht genug Kapital, kann Ihr Broker: 1) Die Position sofort liquidieren, 2) Einen Margin Call auslösen, 3) Ihr Konto in den negativen Bereich bringen. Verkaufen Sie NIE Optionen ohne ausreichend Kapital!'
        : 'This is serious! If you sold a put and get assigned, you must buy the shares. Without sufficient capital, your broker may: 1) Liquidate the position immediately, 2) Issue a margin call, 3) Put your account in a deficit. NEVER sell options without sufficient capital!',
    },
    {
      question: isGerman
        ? 'Muss ich meine ITM-Option ausüben?'
        : 'Do I have to exercise my ITM option?',
      answer: isGerman
        ? 'Nein! Sie haben 3 Möglichkeiten: 1) Ausüben (Aktien kaufen/verkaufen), 2) Verkaufen (die Option am Markt schließen - meist besser!), 3) Verfallen lassen (nur sinnvoll wenn fast ATM). TIPP: Meist ist VERKAUFEN besser als Ausüben, da Sie noch Zeitwert kassieren.'
        : 'No! You have 3 choices: 1) Exercise (buy/sell shares), 2) Sell (close the option in market - usually better!), 3) Let expire (only makes sense if nearly ATM). TIP: SELLING is usually better than exercising because you capture remaining time value.',
    },
    {
      question: isGerman
        ? 'Was ist Auto-Exercise?'
        : 'What is Auto-Exercise?',
      answer: isGerman
        ? 'Die meisten Broker üben automatisch ITM-Optionen aus, die bei Verfall mindestens €0.01 im Geld sind (OCC-Regel). Sie können dies überschreiben, indem Sie Ihren Broker vor dem Cutoff kontaktieren. Einige Broker haben eine "Do Not Exercise"-Option in der Plattform.'
        : 'Most brokers automatically exercise ITM options that are at least €0.01 in the money at expiration (OCC rule). You can override this by contacting your broker before cutoff. Some brokers have a "Do Not Exercise" option in their platform.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? 'Options Assignment Erklärt' : 'Options Assignment Explained'}
        description={isGerman
          ? 'Verstehen Sie was bei Options-Verfall passiert.'
          : 'Understand what happens at options expiration.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/options-assignment`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Lernen' : 'Learn', url: `https://beinoptions.com/${locale}/basics` },
          { name: 'Assignment', url: `https://beinoptions.com/${locale}/options-assignment` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isGerman ? 'Verfall verstehen' : 'Understanding Expiration'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isGerman
                ? 'Options Assignment Erklärt'
                : 'Options Assignment Explained'}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              {isGerman
                ? 'Was passiert, wenn Optionen verfallen? Exercise vs Assignment, automatische Ausübung, und was Sie als Trader wissen müssen.'
                : 'What happens when options expire? Exercise vs assignment, automatic exercise, and what you need to know as a trader.'}
            </p>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Exercise */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Exercise ({isGerman ? 'Ausübung' : 'Exercise'})
              </h2>
              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Als KÄUFER einer Option haben Sie das RECHT, Ihre Option auszuüben.'
                  : 'As a BUYER of an option, you have the RIGHT to exercise your option.'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  {isGerman ? 'Call: Aktien zum Strike kaufen' : 'Call: Buy shares at strike'}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  {isGerman ? 'Put: Aktien zum Strike verkaufen' : 'Put: Sell shares at strike'}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  {isGerman ? 'SIE entscheiden, ob und wann' : 'YOU decide if and when'}
                </li>
              </ul>
            </div>

            {/* Assignment */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Assignment ({isGerman ? 'Zuweisung' : 'Assignment'})
              </h2>
              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Als VERKÄUFER einer Option haben Sie die PFLICHT, wenn jemand ausübt.'
                  : 'As a SELLER of an option, you have the OBLIGATION when someone exercises.'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-orange-500 mt-1">!</span>
                  {isGerman ? 'Short Call: Aktien liefern (verkaufen)' : 'Short Call: Deliver (sell) shares'}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-orange-500 mt-1">!</span>
                  {isGerman ? 'Short Put: Aktien abnehmen (kaufen)' : 'Short Put: Take (buy) shares'}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-orange-500 mt-1">!</span>
                  {isGerman ? 'JEMAND ANDERES entscheidet' : 'SOMEONE ELSE decides'}
                </li>
              </ul>
            </div>
          </div>

          {/* Scenarios */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Praktische Szenarien' : 'Practical Scenarios'}
          </h2>
          <div className="space-y-6 mb-16">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 overflow-hidden ${
                  scenario.color === 'green' ? 'border-green-200' :
                  scenario.color === 'red' ? 'border-red-200' :
                  scenario.color === 'orange' ? 'border-orange-200' :
                  'border-yellow-200'
                }`}
              >
                <div className={`px-6 py-4 ${
                  scenario.color === 'green' ? 'bg-green-50' :
                  scenario.color === 'red' ? 'bg-red-50' :
                  scenario.color === 'orange' ? 'bg-orange-50' :
                  'bg-yellow-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">{scenario.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      scenario.color === 'green' ? 'bg-green-200 text-green-800' :
                      scenario.color === 'red' ? 'bg-red-200 text-red-800' :
                      scenario.color === 'orange' ? 'bg-orange-200 text-orange-800' :
                      'bg-yellow-200 text-yellow-800'
                    }`}>
                      {scenario.action}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">{isGerman ? 'Setup' : 'Setup'}</p>
                      <p className="text-gray-700">{scenario.setup}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">{isGerman ? 'Was passiert' : 'What Happens'}</p>
                      <p className="text-gray-700">{scenario.whatHappens}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">{isGerman ? 'Ergebnis' : 'Result'}</p>
                      <p className="text-gray-700">{scenario.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Zeitplan: Verfallswoche' : 'Timeline: Expiration Week'}
          </h2>
          <div className="relative mb-16">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 pl-16">
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <p className="text-sm font-semibold text-primary-600 mb-1">{item.time}</p>
                    <p className="text-lg font-bold text-gray-900 mb-2">{item.action}</p>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {isGerman ? 'Pro-Tipps für den Verfall' : 'Pro Tips for Expiration'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="font-bold text-white mb-2">
                  {isGerman ? 'Verkaufen statt Ausüben' : 'Sell Instead of Exercise'}
                </h3>
                <p className="text-slate-300 text-sm">
                  {isGerman
                    ? 'Verkaufen Sie Ihre Option am Markt statt auszuüben. Sie kassieren noch den Zeitwert UND sparen Transaktionskosten für die Aktien.'
                    : 'Sell your option in the market instead of exercising. You capture remaining time value AND save transaction costs on shares.'}
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-2xl mb-3">⚠️</div>
                <h3 className="font-bold text-white mb-2">
                  {isGerman ? 'Dividenden-Risiko' : 'Dividend Risk'}
                </h3>
                <p className="text-slate-300 text-sm">
                  {isGerman
                    ? 'Short Calls vor Ex-Dividende haben hohes Early-Assignment-Risiko. Schließen Sie rechtzeitig oder rollen Sie die Position.'
                    : 'Short calls before ex-dividend have high early assignment risk. Close in time or roll the position.'}
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-bold text-white mb-2">
                  {isGerman ? 'Kapital bereithalten' : 'Keep Capital Ready'}
                </h3>
                <p className="text-slate-300 text-sm">
                  {isGerman
                    ? 'Bei Short Puts: Halten Sie immer genug Kapital für potentielles Assignment. Strike × 100 = benötigtes Kapital.'
                    : 'For short puts: Always keep enough capital for potential assignment. Strike × 100 = capital needed.'}
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-bold text-white mb-2">
                  {isGerman ? 'Rollen Sie rechtzeitig' : 'Roll in Time'}
                </h3>
                <p className="text-slate-300 text-sm">
                  {isGerman
                    ? 'Wenn Sie Assignment vermeiden wollen, rollen Sie die Position 1-2 Wochen vor Verfall in den nächsten Monat.'
                    : 'If you want to avoid assignment, roll your position 1-2 weeks before expiration to the next month.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isGerman ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-primary-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {isGerman ? 'Bereit für mehr?' : 'Ready for More?'}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {isGerman
                ? 'Lernen Sie Strategien, die Assignment zu Ihrem Vorteil nutzen.'
                : 'Learn strategies that use assignment to your advantage.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/covered-call-strategy`}
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Covered Call Strategie' : 'Covered Call Strategy'}
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors"
              >
                {isGerman ? 'Alle Strategien' : 'All Strategies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
