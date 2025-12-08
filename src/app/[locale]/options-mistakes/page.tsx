import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? '10 Häufigste Options-Trading Fehler (und wie man sie vermeidet) | 2025'
      : '10 Common Options Trading Mistakes (And How to Avoid Them) | 2025',
    description: locale === 'de'
      ? 'Lernen Sie die häufigsten Fehler beim Optionshandel kennen. Von Überhebel bis IV-Ignoranz - vermeiden Sie diese Fallen und traden Sie intelligenter.'
      : 'Learn the most common options trading mistakes that lose money. From overleveraging to ignoring IV, avoid these pitfalls and trade smarter.',
    keywords: locale === 'de'
      ? ['Optionshandel Fehler', 'Options Trading Fehler', 'Optionen Verluste vermeiden', 'Trading Tipps', 'Anfänger Optionen']
      : ['options trading mistakes', 'options trading errors', 'avoid options losses', 'options trading tips', 'beginner options mistakes'],
  });
}

export default function OptionsMistakesPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const mistakes = [
    {
      number: 1,
      title: isGerman
        ? 'Out-of-the-Money Optionen kaufen, weil sie "billig" sind'
        : 'Buying Out-of-the-Money Options Because They\'re "Cheap"',
      problem: isGerman
        ? 'Anfänger sehen eine OTM-Call für 50€ und denken: "Wenn die Aktie nur 10% steigt, mache ich riesige Gewinne!" Sie kaufen 10 Kontrakte für 500€, ohne zu realisieren, dass diese Optionen eine niedrige Gewinnwahrscheinlichkeit haben.'
        : 'New traders see an OTM call trading for €50 and think, "If the stock goes up just 10%, I\'ll make huge returns!" They buy 10 contracts for €500, not realizing these options have a low probability of profit.',
      danger: isGerman
        ? ['OTM-Optionen haben keinen inneren Wert', 'Sie profitieren nur bei signifikanter Kursbewegung vor Verfall', 'Zeitverfall (Theta) wirkt exponentiell gegen Sie', 'IV-Crush kann Optionswert zerstören, selbst wenn Sie richtig liegen']
        : ['OTM options have zero intrinsic value', 'They only profit if stock moves significantly before expiration', 'Time decay (theta) works against you exponentially', 'IV can crush option value even if you\'re right about direction'],
      solution: isGerman
        ? 'Beginnen Sie mit At-the-Money (ATM) oder leicht In-the-Money (ITM) Optionen. Suchen Sie nach Delta >0.50 für Calls (>-0.50 für Puts). Akzeptieren Sie, mehr Prämie für höhere Wahrscheinlichkeit zu zahlen.'
        : 'Start with at-the-money (ATM) or slightly in-the-money (ITM) options. Look for delta >0.50 for calls (>-0.50 for puts). Accept paying more premium for higher probability.',
      example: {
        bad: isGerman ? '120€ Call (weit OTM) für 0.50€ — braucht 20% Bewegung' : '€120 call (far OTM) for €0.50 — needs 20% move',
        good: isGerman ? '100€ Call (ATM) für 5.00€ — braucht nur 5% Bewegung' : '€100 call (ATM) for €5.00 — needs only 5% move',
      },
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      number: 2,
      title: isGerman
        ? 'Implizite Volatilität (IV) ignorieren'
        : 'Ignoring Implied Volatility (IV)',
      problem: isGerman
        ? 'Optionen kaufen, wenn IV extrem hoch ist, ohne zu realisieren, dass Sie aufgeblähte Prämien zahlen, die nach Events (Earnings, FDA-Zulassung) kollabieren werden.'
        : 'Buying options when IV is extremely high without realizing you\'re paying inflated premiums that will collapse post-event (earnings, FDA approval, etc.).',
      danger: isGerman
        ? ['Hohe IV = teure Optionen', 'IV-Crush kann Gewinne auslöschen, selbst bei richtiger Richtung', 'Sie können direktional richtig liegen und trotzdem Geld verlieren']
        : ['High IV = expensive options', 'IV crush can wipe out gains even if you\'re right about direction', 'You can be directionally correct and still lose money'],
      solution: isGerman
        ? 'Prüfen Sie IV Rank oder IV Percentile vor dem Kauf. Vermeiden Sie Optionen-Kauf vor bekannten Events (Earnings). Erwägen Sie, Optionen bei hoher IV zu verkaufen, bei niedriger IV zu kaufen.'
        : 'Check IV Rank or IV Percentile before buying. Avoid buying options right before known events (earnings). Consider selling options when IV is high, buying when IV is low.',
      example: {
        scenario: isGerman ? 'Aktie bei 50€ vor Earnings, IV: 80% (sehr hoch). Sie kaufen 55€ Call für 2.00€. Aktie steigt auf 54€ (+8%!). IV fällt auf 30% nach Earnings. Ihr Call ist jetzt 1.20€ wert (40% Verlust).' : 'Stock at €50 before earnings, IV: 80% (very high). You buy €55 call for €2.00. Stock rallies to €54 (+8%!). IV drops to 30% post-earnings. Your call is now worth €1.20 (40% loss).',
      },
      iconBg: 'from-orange-50 to-amber-100',
      iconColor: 'text-orange-600',
    },
    {
      number: 3,
      title: isGerman
        ? 'Überhebeln des Kontos'
        : 'Overleveraging Your Account',
      problem: isGerman
        ? '50-100% des Kontos in einen einzigen Optionen-Trade stecken, weil "Ich bin mir bei diesem Trade wirklich sicher."'
        : 'Putting 50-100% of your account into a single options trade because "I\'m really confident about this one."',
      danger: isGerman
        ? ['Ein schlechter Trade kann Ihr gesamtes Konto auslöschen', 'Optionen können auf Null fallen (im Gegensatz zu Aktien)', 'Emotionale Entscheidungsfindung steigt mit Positionsgröße', 'Kein Spielraum für Erholung']
        : ['One bad trade can wipe out your entire account', 'Options can go to zero (unlike stocks)', 'Emotional decision-making increases with position size', 'No room for recovery'],
      solution: isGerman
        ? 'Risiko-Regel: Nie mehr als 1-2% des Kontos pro Trade riskieren. Positionsgröße: Limitieren Sie jede Position auf 5-10% des Gesamtkapitals. Stop-Loss: Setzen Sie maximale Verlusttoleranz (z.B. Exit bei -50% der Prämie).'
        : 'Risk Rule: Never risk more than 1-2% of your account per trade. Position Sizing: Limit each position to 5-10% of total capital. Stop-Loss: Set maximum loss tolerance (e.g., exit at -50% of premium).',
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
    },
    {
      number: 4,
      title: isGerman
        ? 'Optionen bis zum Verfall halten'
        : 'Holding Options Until Expiration',
      problem: isGerman
        ? '"Ich warte einfach bis zum Verfall, um zu sehen, was passiert" oder "Vielleicht kommt es zurück."'
        : '"I\'ll just wait until expiration to see what happens" or "Maybe it\'ll come back."',
      danger: isGerman
        ? ['Zeitverfall beschleunigt sich in den letzten 30 Tagen', 'Theta kann 50%+ des Wertes in der letzten Woche erodieren', 'Wochenend-Risiko und Verfalls-Risiko', 'Binäres Ergebnis (alles oder nichts)']
        : ['Time decay accelerates in the final 30 days', 'Theta can erode 50%+ of value in the last week', 'Weekend risk and expiration risk', 'Binary outcome (all or nothing)'],
      solution: isGerman
        ? 'Gewinner früh beenden: Gewinne bei 50-75% des maximalen Gewinns mitnehmen. Verlierer schnell schneiden: Exit bei -50% oder wenn These invalidiert ist. Verfallswoche vermeiden: Positionen 7-14 Tage vor Verfall schließen.'
        : 'Exit Winners Early: Take profits at 50-75% of max gain. Cut Losers Fast: Exit at -50% or when thesis is invalidated. Avoid Expiration Week: Close positions 7-14 days before expiry.',
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      number: 5,
      title: isGerman
        ? 'Die Greeks nicht verstehen'
        : 'Not Understanding the Greeks',
      problem: isGerman
        ? 'Eine Option kaufen, ohne Delta, Theta, Vega oder Gamma zu kennen. Blind traden.'
        : 'Buying an option without knowing its Delta, Theta, Vega, or Gamma. Trading blind.',
      danger: isGerman
        ? ['Sie wissen nicht, wie viel Sie verdienen, wenn sich die Aktie bewegt', 'Sie können täglichen Zeitverfall nicht vorhersagen', 'Sie sind sich des Volatilitätsrisikos nicht bewusst', 'Positionsmanagement wird unmöglich']
        : ['You don\'t know how much you\'ll make if the stock moves', 'You can\'t predict daily time decay', 'You\'re unaware of volatility risk', 'Position management becomes impossible'],
      solution: isGerman
        ? 'Lernen Sie die wesentlichen Greeks: Delta (Preisänderung pro 1€ Aktienbewegung), Theta (Täglicher Zeitverfall), Vega (Änderung pro 1% IV-Bewegung), Gamma (Delta-Änderungsrate).'
        : 'Learn the essential Greeks: Delta (how much option price changes per €1 stock move), Theta (daily time decay), Vega (change per 1% IV move), Gamma (rate of Delta change).',
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
    },
  ];

  const faqs = [
    {
      question: isGerman
        ? 'Was ist der größte Fehler, den Anfänger beim Optionshandel machen?'
        : 'What\'s the biggest mistake beginner options traders make?',
      answer: isGerman
        ? 'Der größte Fehler ist Überhebeln — zu viel des Kontos in ein oder zwei Trades zu stecken. Optionen können auf Null fallen, und selbst erfahrene Trader haben Verlustserien. Riskieren Sie nie mehr als 1-2% Ihres Kontos in einem einzigen Trade.'
        : 'The biggest mistake is overleveraging — putting too much of your account into one or two trades. Options can go to zero, and even experienced traders have losing streaks. Never risk more than 1-2% of your account on any single trade.',
    },
    {
      question: isGerman
        ? 'Ist es besser, Optionen zu kaufen oder zu verkaufen?'
        : 'Is it better to buy or sell options?',
      answer: isGerman
        ? 'Keines ist grundsätzlich besser — es hängt von den Marktbedingungen ab. Optionen kaufen (Long) funktioniert am besten, wenn IV niedrig ist und Sie eine signifikante Preisbewegung erwarten. Optionen verkaufen (Short) funktioniert am besten, wenn IV hoch ist und Sie erwarten, dass die Aktie range-bound bleibt.'
        : 'Neither is inherently better — it depends on market conditions. Buying options (long) works best when IV is low and you expect a significant price move. Selling options (short) works best when IV is high and you expect the stock to stay range-bound.',
    },
    {
      question: isGerman
        ? 'Wie vermeide ich IV-Crush?'
        : 'How do I avoid IV crush?',
      answer: isGerman
        ? 'Prüfen Sie IV Rank vor dem Kauf von Optionen. Vermeiden Sie Optionen-Kauf direkt vor Earnings oder großen Events, wenn IV erhöht ist. Wenn Sie um Events herum traden müssen, erwägen Sie, Optionen zu verkaufen (hohe IV einsammeln) oder verwenden Sie weit datierte Optionen (90+ DTE), um IV-Einfluss zu minimieren.'
        : 'Check IV Rank before buying options. Avoid buying options right before earnings or major events when IV is elevated. If you must trade around events, consider selling options instead (collecting high IV) or use far-dated options (90+ DTE) to minimize IV impact.',
    },
    {
      question: isGerman
        ? 'Sollte ich Optionen bis zum Verfall halten?'
        : 'Should I hold options until expiration?',
      answer: isGerman
        ? 'Fast nie. Zeitverfall (Theta) beschleunigt sich dramatisch in den letzten 7-14 Tagen. Professionelle Trader schließen oder rollen Positionen typischerweise 2-4 Wochen vor Verfall. Wenn Sie einen Gewinn haben, nehmen Sie ihn früh — lassen Sie Theta nicht Ihre Gewinne erodieren.'
        : 'Almost never. Time decay (theta) accelerates dramatically in the final 7-14 days. Professional traders typically close or roll positions 2-4 weeks before expiration. If you have a profit, take it early — don\'t let theta erode your gains.',
    },
    {
      question: isGerman
        ? 'Wie viel Geld brauche ich, um mit Optionshandel anzufangen?'
        : 'How much money do I need to start trading options?',
      answer: isGerman
        ? 'Sie können technisch mit 500-1.000€ beginnen, aber 2.000-5.000€ ist realistischer für ordentliches Risikomanagement. Mit zu wenig Kapital sind Sie gezwungen, billige (riskante) OTM-Optionen zu traden oder zu viel pro Trade zu riskieren. Denken Sie an die 1-2% Risiko-Regel.'
        : 'You can technically start with €500-€1,000, but €2,000-€5,000 is more realistic for proper risk management. With too little capital, you\'re forced to trade cheap (risky) OTM options or risk too much per trade. Remember the 1-2% risk rule.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? '10 Häufigste Options-Trading Fehler' : '10 Common Options Trading Mistakes'}
        description={isGerman
          ? 'Vermeiden Sie die häufigsten Fehler beim Optionshandel und traden Sie profitabler.'
          : 'Avoid the most common options trading mistakes and trade more profitably.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/options-mistakes`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Lernen' : 'Learn', url: `https://beinoptions.com/${locale}/basics` },
          { name: isGerman ? 'Trading Fehler' : 'Trading Mistakes', url: `https://beinoptions.com/${locale}/options-mistakes` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {isGerman ? 'Warnung' : 'Warning'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isGerman
                ? '10 Häufigste Options-Trading Fehler'
                : '10 Common Options Trading Mistakes'}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {isGerman
                ? 'Über 75% der Optionshändler verlieren Geld - nicht weil Optionen von Natur aus riskant sind, sondern weil sie vermeidbare Fehler machen. Dieser Leitfaden zeigt die 10 häufigsten Fehler und wie Sie sie vermeiden.'
                : 'Over 75% of options traders lose money - not because options are inherently risky, but because they make preventable mistakes. This guide reveals the 10 most common errors and how to avoid them.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/tools`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {isGerman ? 'Options Tools nutzen' : 'Use Options Tools'}
              </Link>
              <Link
                href={`/${locale}/basics`}
                className="btn-secondary inline-flex items-center gap-2"
              >
                {isGerman ? 'Grundlagen lernen' : 'Learn Basics'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mistakes Section */}
      <div className="container-custom py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {mistakes.map((mistake, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${mistake.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-2xl font-bold ${mistake.iconColor}`}>
                      {mistake.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {mistake.title}
                    </h2>

                    {/* Problem */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-semibold text-red-900 mb-1">
                            {isGerman ? 'Das Problem:' : 'The Problem:'}
                          </p>
                          <p className="text-red-800">
                            {mistake.problem}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Danger List */}
                    {mistake.danger && (
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                        <p className="font-semibold text-orange-900 mb-3">
                          {isGerman ? 'Warum es gefährlich ist:' : 'Why It\'s Dangerous:'}
                        </p>
                        <ul className="space-y-2">
                          {mistake.danger.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-orange-800">
                              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Solution */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-semibold text-green-900 mb-1">
                            {isGerman ? 'Die Lösung:' : 'The Fix:'}
                          </p>
                          <p className="text-green-800">
                            {mistake.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Example */}
                    {mistake.example && (
                      <div className="bg-gray-100 rounded-xl p-6">
                        <p className="font-semibold text-gray-900 mb-3">
                          {isGerman ? 'Beispiel:' : 'Example:'}
                        </p>
                        {mistake.example.bad && (
                          <div className="flex items-start gap-2 mb-2">
                            <span className="text-red-600 font-mono text-lg">❌</span>
                            <p className="text-gray-700">{mistake.example.bad}</p>
                          </div>
                        )}
                        {mistake.example.good && (
                          <div className="flex items-start gap-2">
                            <span className="text-green-600 font-mono text-lg">✅</span>
                            <p className="text-gray-700">{mistake.example.good}</p>
                          </div>
                        )}
                        {mistake.example.scenario && (
                          <p className="text-gray-700 italic">{mistake.example.scenario}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {index < mistakes.length - 1 && (
                  <div className="border-b border-gray-200 mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              {isGerman ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
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
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isGerman
                ? 'Bereit, intelligenter zu traden?'
                : 'Ready to Trade Smarter?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {isGerman
                ? 'Nutzen Sie unsere professionellen Tools, um Trades vor dem Eingehen zu analysieren.'
                : 'Use our professional tools to analyze trades before you make them.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/tools/payoff`}
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {isGerman ? 'Payoff Calculator' : 'Payoff Calculator'}
              </Link>
              <Link
                href={`/${locale}/tools/iv`}
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {isGerman ? 'IV Calculator' : 'IV Calculator'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
