import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Covered Call Strategie - Schritt-für-Schritt Anleitung | 2025'
      : 'Covered Call Strategy - Step-by-Step Guide | 2025',
    description: locale === 'de'
      ? 'Lernen Sie die Covered Call Strategie: Wie Sie mit Ihren Aktien zusätzliches Einkommen generieren. Vollständiger Tutorial mit Beispielen und Tipps.'
      : 'Learn the Covered Call strategy: How to generate extra income from your stocks. Complete tutorial with examples and tips.',
    keywords: locale === 'de'
      ? ['Covered Call', 'gedeckter Call', 'Optionsstrategie', 'Einkommen', 'Aktien', 'Premium', 'Options Trading']
      : ['covered call', 'covered call strategy', 'options income', 'stock options', 'premium', 'options trading'],
  });
}

export default function CoveredCallStrategyPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const steps = [
    {
      number: 1,
      title: isGerman ? 'Aktien besitzen oder kaufen' : 'Own or Buy Shares',
      description: isGerman
        ? 'Sie brauchen mindestens 100 Aktien einer Aktie, auf die Optionen gehandelt werden.'
        : 'You need at least 100 shares of a stock that has options traded on it.',
      details: isGerman
        ? 'Beispiel: Sie besitzen 100 Aktien von AAPL, aktueller Kurs €175.'
        : 'Example: You own 100 shares of AAPL, current price €175.',
      tip: isGerman
        ? 'Wählen Sie Aktien, die Sie auch langfristig halten würden. Der Covered Call funktioniert am besten mit stabilen, leicht bullischen Aktien.'
        : 'Choose stocks you would hold long-term anyway. Covered calls work best with stable, slightly bullish stocks.',
    },
    {
      number: 2,
      title: isGerman ? 'Verfallsdatum wählen' : 'Choose Expiration Date',
      description: isGerman
        ? 'Wählen Sie, wie lange Sie sich binden wollen. Typisch: 30-45 Tage.'
        : 'Choose how long you want to commit. Typical: 30-45 days.',
      details: isGerman
        ? '30-45 Tage bieten das beste Verhältnis aus Zeitwertverfall und Anpassungsmöglichkeiten.'
        : '30-45 days offers the best balance of time decay and adjustment flexibility.',
      tip: isGerman
        ? 'Kürzere Laufzeit = Mehr Arbeit, aber höherer annualisierter Return. Längere Laufzeit = Weniger Arbeit, mehr Unsicherheit.'
        : 'Shorter duration = More work, but higher annualized return. Longer duration = Less work, more uncertainty.',
    },
    {
      number: 3,
      title: isGerman ? 'Strike-Preis auswählen' : 'Select Strike Price',
      description: isGerman
        ? 'Der Strike bestimmt Ihre maximale Rendite und Wahrscheinlichkeit, dass Aktien verkauft werden.'
        : 'The strike determines your max return and probability of shares being sold.',
      details: isGerman
        ? 'Strike €180 bei Aktienkurs €175 = 5 Strike OTM (2.9% über aktuellem Kurs)'
        : 'Strike €180 with stock at €175 = 5 strike OTM (2.9% above current price)',
      tip: isGerman
        ? 'OTM Strikes: Höhere Gewinnchance + möglicher Kursgewinn. ATM Strikes: Höheres Premium, aber kaum Kursgewinn möglich.'
        : 'OTM strikes: Higher win rate + potential stock gain. ATM strikes: Higher premium, but little stock gain possible.',
    },
    {
      number: 4,
      title: isGerman ? 'Call verkaufen' : 'Sell the Call',
      description: isGerman
        ? 'Verkaufen Sie 1 Call pro 100 Aktien. Sie erhalten sofort die Prämie.'
        : 'Sell 1 call per 100 shares. You receive the premium immediately.',
      details: isGerman
        ? 'Verkauf: 1 AAPL €180 Call für €2.50. Sie erhalten: €250 (€2.50 × 100).'
        : 'Sell: 1 AAPL €180 call for €2.50. You receive: €250 (€2.50 × 100).',
      tip: isGerman
        ? 'Nutzen Sie immer Limit Orders! Setzen Sie den Preis zwischen Bid und Ask.'
        : 'Always use limit orders! Set the price between bid and ask.',
    },
    {
      number: 5,
      title: isGerman ? 'Verwalten & bei Verfall' : 'Manage & at Expiration',
      description: isGerman
        ? 'Beobachten Sie die Position und entscheiden Sie bei Verfall, was zu tun ist.'
        : 'Monitor the position and decide what to do at expiration.',
      details: isGerman
        ? 'Option verfällt wertlos? Wiederholen Sie! Aktie über Strike? Entscheiden Sie ob rollen oder verkaufen.'
        : 'Option expires worthless? Repeat! Stock above strike? Decide to roll or let shares be called away.',
      tip: isGerman
        ? 'Bei 50-80% Gewinn können Sie frühzeitig schließen und einen neuen Covered Call schreiben.'
        : 'At 50-80% profit, you can close early and write a new covered call.',
    },
  ];

  const scenarios = [
    {
      title: isGerman ? 'Szenario 1: Aktie bleibt flach' : 'Scenario 1: Stock Stays Flat',
      stockMove: '€175 → €175',
      result: isGerman ? 'Bestes Ergebnis!' : 'Best outcome!',
      callValue: '€0',
      profit: isGerman ? '€250 Prämie = voller Gewinn' : '€250 premium = full profit',
      action: isGerman ? 'Call verfällt wertlos. Aktien behalten. Wiederholen.' : 'Call expires worthless. Keep shares. Repeat.',
      color: 'green',
    },
    {
      title: isGerman ? 'Szenario 2: Aktie steigt leicht' : 'Scenario 2: Stock Rises Slightly',
      stockMove: '€175 → €178',
      result: isGerman ? 'Sehr gut!' : 'Very good!',
      callValue: '€0',
      profit: isGerman ? '€250 Prämie + €300 Kursgewinn = €550' : '€250 premium + €300 stock gain = €550',
      action: isGerman ? 'Call verfällt wertlos (unter Strike). Aktien behalten. Wiederholen.' : 'Call expires worthless (below strike). Keep shares. Repeat.',
      color: 'green',
    },
    {
      title: isGerman ? 'Szenario 3: Aktie steigt stark' : 'Scenario 3: Stock Rises Sharply',
      stockMove: '€175 → €190',
      result: isGerman ? 'Maximaler Gewinn erreicht' : 'Max profit reached',
      callValue: '€10 (ITM)',
      profit: isGerman ? '€250 Prämie + €500 Kursgewinn (bis Strike) = €750' : '€250 premium + €500 stock gain (to strike) = €750',
      action: isGerman ? 'Aktien werden bei €180 verkauft. Sie verpassen €1.000 weiteren Gewinn.' : 'Shares sold at €180. You miss €1,000 additional gain.',
      color: 'yellow',
    },
    {
      title: isGerman ? 'Szenario 4: Aktie fällt' : 'Scenario 4: Stock Falls',
      stockMove: '€175 → €165',
      result: isGerman ? 'Verlust, aber abgemildert' : 'Loss, but cushioned',
      callValue: '€0',
      profit: isGerman ? '€250 Prämie - €1.000 Buchverlust = -€750 (statt -€1.000)' : '€250 premium - €1,000 paper loss = -€750 (instead of -€1,000)',
      action: isGerman ? 'Call verfällt wertlos. Prämie mildert Verlust. Nächsten Call schreiben.' : 'Call expires worthless. Premium cushions loss. Write next call.',
      color: 'red',
    },
  ];

  const strikeSelection = [
    {
      delta: '0.30 (30 Delta)',
      otm: '~5-7%',
      probability: isGerman ? '~70% Gewinn' : '~70% profit',
      premium: isGerman ? 'Niedriger' : 'Lower',
      style: isGerman ? 'Konservativ' : 'Conservative',
      description: isGerman
        ? 'Weniger Prämie, aber höhere Wahrscheinlichkeit, Aktien zu behalten. Ideal für langfristige Holder.'
        : 'Less premium, but higher probability of keeping shares. Ideal for long-term holders.',
    },
    {
      delta: '0.40 (40 Delta)',
      otm: '~3-4%',
      probability: isGerman ? '~60% Gewinn' : '~60% profit',
      premium: isGerman ? 'Mittel' : 'Medium',
      style: isGerman ? 'Ausgewogen' : 'Balanced',
      description: isGerman
        ? 'Gutes Gleichgewicht zwischen Prämie und Gewinnwahrscheinlichkeit.'
        : 'Good balance between premium and probability of profit.',
    },
    {
      delta: '0.50 (50 Delta - ATM)',
      otm: '0%',
      probability: isGerman ? '~50% Gewinn' : '~50% profit',
      premium: isGerman ? 'Höchste' : 'Highest',
      style: isGerman ? 'Aggressiv' : 'Aggressive',
      description: isGerman
        ? 'Maximale Prämie, aber hohe Chance, dass Aktien verkauft werden.'
        : 'Maximum premium, but high chance shares get called away.',
    },
  ];

  const dosDonts = {
    dos: [
      isGerman ? 'Nur auf Aktien schreiben, die Sie gerne besitzen' : 'Only write on stocks you want to own',
      isGerman ? 'Genug Cash für Transaktionskosten bereithalten' : 'Keep enough cash for transaction costs',
      isGerman ? 'Dividenden-Termine berücksichtigen' : 'Consider dividend dates',
      isGerman ? 'Earnings meiden oder bewusst nutzen' : 'Avoid earnings or use them intentionally',
      isGerman ? 'Position bei 50-80% Gewinn schließen' : 'Close position at 50-80% profit',
      isGerman ? 'Rollen statt Assignment, wenn Sie Aktien behalten wollen' : 'Roll instead of assignment if you want to keep shares',
    ],
    donts: [
      isGerman ? 'Covered Calls auf volatile Meme-Aktien schreiben' : 'Write covered calls on volatile meme stocks',
      isGerman ? 'Kurz vor Earnings Calls verkaufen (hohes Risiko)' : 'Sell calls right before earnings (high risk)',
      isGerman ? 'Strike zu nah am aktuellen Kurs wählen' : 'Choose strike too close to current price',
      isGerman ? 'Assignment als "Verlust" sehen (es ist Ihr Max-Gewinn!)' : 'See assignment as a "loss" (it\'s your max profit!)',
      isGerman ? 'Vergessen, dass Sie Aktien besitzen müssen' : 'Forget that you must own the shares',
      isGerman ? 'Ohne Stop-Loss in einen Crash laufen' : 'Run into a crash without stop-loss',
    ],
  };

  const faqs = [
    {
      question: isGerman
        ? 'Wie viel kann ich mit Covered Calls verdienen?'
        : 'How much can I make with covered calls?',
      answer: isGerman
        ? 'Typische annualisierte Renditen liegen bei 8-15% zusätzlich zu möglichen Dividenden und Kursgewinnen. Bei einer Aktie für €175 und monatlicher Prämie von €250 wäre das: €3.000/Jahr auf €17.500 = 17% annualisiert. Aber: Wenn die Aktie stark fällt, kann der Verlust die Prämien übersteigen.'
        : 'Typical annualized returns are 8-15% on top of potential dividends and stock gains. For a €175 stock with €250 monthly premium: €3,000/year on €17,500 = 17% annualized. But: If the stock falls sharply, losses can exceed premiums.',
    },
    {
      question: isGerman
        ? 'Was passiert, wenn meine Aktien "called away" werden?'
        : 'What happens if my shares get "called away"?',
      answer: isGerman
        ? 'Ihre Aktien werden zum Strike verkauft. Das ist NICHT schlecht - es ist Ihr maximaler Gewinn! Sie erhalten: Prämie + Kursgewinn bis zum Strike. Sie können danach neue Aktien kaufen und wieder Covered Calls schreiben. Oder Sie "rollen" die Position vor Verfall (Call zurückkaufen, neuen verkaufen).'
        : 'Your shares get sold at the strike price. This is NOT bad - it\'s your maximum profit! You receive: Premium + stock gain up to strike. You can then buy new shares and write covered calls again. Or you can "roll" the position before expiration (buy back call, sell new one).',
    },
    {
      question: isGerman
        ? 'Kann ich Covered Calls auf ETFs schreiben?'
        : 'Can I write covered calls on ETFs?',
      answer: isGerman
        ? 'Ja! SPY, QQQ, IWM und andere große ETFs haben sehr liquide Optionsmärkte. ETFs sind oft besser für Anfänger, da sie weniger volatil sind als Einzelaktien und kein Earnings-Risiko haben. Die Prämien sind niedriger, aber das Risiko auch.'
        : 'Yes! SPY, QQQ, IWM and other major ETFs have very liquid options markets. ETFs are often better for beginners since they are less volatile than individual stocks and have no earnings risk. Premiums are lower, but so is risk.',
    },
    {
      question: isGerman
        ? 'Was ist "Rolling" einer Option?'
        : 'What is "rolling" an option?',
      answer: isGerman
        ? 'Rollen = Die aktuelle Option zurückkaufen und gleichzeitig eine neue mit späterem Verfall (oder anderem Strike) verkaufen. Nutzen Sie das, wenn: 1) Sie Ihre Aktien behalten wollen und der Call ITM ist, 2) Sie früh Gewinn mitnehmen und einen neuen Trade starten wollen. Rollen kostet oft einen kleinen Netto-Debit oder bringt einen Kredit.'
        : 'Rolling = Buying back the current option while selling a new one with later expiration (or different strike). Use this when: 1) You want to keep shares and call is ITM, 2) You want to take profit early and start a new trade. Rolling often costs a small net debit or generates a credit.',
    },
    {
      question: isGerman
        ? 'Soll ich vor Dividenden Covered Calls schreiben?'
        : 'Should I write covered calls before dividends?',
      answer: isGerman
        ? 'Vorsicht! Kurz vor Ex-Dividende haben ITM Calls hohes Early-Assignment-Risiko. Der Call-Käufer könnte ausüben, um die Dividende zu kassieren. Wählen Sie OTM Strikes oder vermeiden Sie Verfallstermine direkt nach der Dividende.'
        : 'Caution! Just before ex-dividend, ITM calls have high early assignment risk. The call buyer might exercise to capture the dividend. Choose OTM strikes or avoid expiration dates right after the dividend.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? 'Covered Call Strategie - Vollständiger Guide' : 'Covered Call Strategy - Complete Guide'}
        description={isGerman
          ? 'Lernen Sie die Covered Call Strategie Schritt für Schritt.'
          : 'Learn the Covered Call strategy step by step.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/covered-call-strategy`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Strategien' : 'Strategies', url: `https://beinoptions.com/${locale}/strategies` },
          { name: 'Covered Call', url: `https://beinoptions.com/${locale}/covered-call-strategy` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isGerman ? 'Einkommens-Strategie' : 'Income Strategy'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isGerman
                ? 'Covered Call Strategie'
                : 'Covered Call Strategy'}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              {isGerman
                ? 'Generieren Sie regelmäßiges Einkommen aus Ihren Aktien. Die beliebteste Options-Strategie für Anfänger und fortgeschrittene Trader.'
                : 'Generate regular income from your stocks. The most popular options strategy for beginners and advanced traders alike.'}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald-300">{isGerman ? 'Niedrig' : 'Low'}</div>
                <div className="text-sm text-emerald-100">{isGerman ? 'Risiko-Level' : 'Risk Level'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald-300">{isGerman ? 'Anfänger' : 'Beginner'}</div>
                <div className="text-sm text-emerald-100">{isGerman ? 'Schwierigkeit' : 'Difficulty'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald-300">8-15%</div>
                <div className="text-sm text-emerald-100">{isGerman ? 'Jährl. Rendite' : 'Annual Return'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald-300">{isGerman ? 'Neutral/Bullish' : 'Neutral/Bullish'}</div>
                <div className="text-sm text-emerald-100">{isGerman ? 'Marktmeinung' : 'Market Outlook'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is a Covered Call */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isGerman ? 'Was ist ein Covered Call?' : 'What is a Covered Call?'}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {isGerman
                  ? 'Ein Covered Call ist eine Options-Strategie, bei der Sie einen Call verkaufen auf Aktien, die Sie bereits besitzen. Sie erhalten sofort eine Prämie für die Verpflichtung, Ihre Aktien möglicherweise zum Strike-Preis zu verkaufen.'
                  : 'A covered call is an options strategy where you sell a call on shares you already own. You receive an immediate premium in exchange for the obligation to potentially sell your shares at the strike price.'}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {isGerman
                  ? 'Der Call ist "gedeckt" (covered), weil Sie die Aktien besitzen und sie liefern können, falls der Käufer ausübt.'
                  : 'The call is "covered" because you own the shares and can deliver them if the buyer exercises.'}
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="text-emerald-800 font-medium">
                  {isGerman
                    ? '= Long 100 Aktien + Short 1 Call'
                    : '= Long 100 shares + Short 1 call'}
                </p>
              </div>
            </div>

            {/* P&L Diagram Simplified */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                {isGerman ? 'Gewinn/Verlust-Profil' : 'Profit/Loss Profile'}
              </h3>
              <div className="relative h-64 bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Axis */}
                <div className="absolute left-12 top-0 bottom-8 w-px bg-gray-300"></div>
                <div className="absolute left-12 right-0 bottom-8 h-px bg-gray-300"></div>

                {/* Labels */}
                <div className="absolute left-0 top-1/3 text-xs text-gray-500 transform -rotate-90 origin-left translate-y-6">
                  {isGerman ? 'Gewinn' : 'Profit'}
                </div>
                <div className="absolute right-4 bottom-2 text-xs text-gray-500">
                  {isGerman ? 'Aktienkurs' : 'Stock Price'}
                </div>

                {/* Max Profit Line */}
                <div className="absolute left-12 right-0 top-1/4 h-px border-t-2 border-dashed border-emerald-400"></div>
                <div className="absolute right-4 top-1/4 -translate-y-4 text-xs text-emerald-600 font-medium">
                  {isGerman ? 'Max Gewinn' : 'Max Profit'}
                </div>

                {/* Break Even */}
                <div className="absolute left-1/2 bottom-8 top-1/2 w-px border-l-2 border-dashed border-blue-400"></div>
                <div className="absolute left-1/2 bottom-10 text-xs text-blue-600 transform -translate-x-1/2">
                  Break-even
                </div>

                {/* P/L Line */}
                <svg className="absolute inset-0" preserveAspectRatio="none">
                  <line x1="48" y1="200" x2="150" y2="100" stroke="#059669" strokeWidth="3" />
                  <line x1="150" y1="100" x2="350" y2="100" stroke="#059669" strokeWidth="3" />
                </svg>

                {/* Labels for diagram */}
                <div className="absolute left-16 bottom-12 text-xs text-red-500">{isGerman ? 'Verlust wenn Aktie fällt' : 'Loss if stock drops'}</div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                {isGerman
                  ? 'Gewinn ist begrenzt (Strike + Prämie), Verlust ist abgemildert (Prämie als Puffer)'
                  : 'Profit is capped (Strike + Premium), Loss is cushioned (Premium as buffer)'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step by Step */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? 'Schritt-für-Schritt Anleitung' : 'Step-by-Step Tutorial'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'So setzen Sie einen Covered Call auf - von Anfang bis Ende.'
                : 'How to set up a covered call - from start to finish.'}
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-700">{step.details}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-500">💡</span>
                        <p className="text-sm text-emerald-700">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Example Calculation */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Beispiel-Berechnung' : 'Example Calculation'}
          </h2>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">{isGerman ? 'Setup' : 'Setup'}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Aktie' : 'Stock'}:</span>
                    <span className="font-medium">AAPL @ €175</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Besitz' : 'Shares'}:</span>
                    <span className="font-medium">100 {isGerman ? 'Aktien' : 'shares'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Investiert' : 'Invested'}:</span>
                    <span className="font-medium">€17,500</span>
                  </li>
                  <li className="flex justify-between border-t pt-2 mt-2">
                    <span>{isGerman ? 'Verkaufter Call' : 'Sold Call'}:</span>
                    <span className="font-medium">€180 Strike, 45 DTE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Erhaltene Prämie' : 'Premium Received'}:</span>
                    <span className="font-medium text-emerald-600">€2.50 × 100 = €250</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">{isGerman ? 'Ergebnisse' : 'Outcomes'}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Break-even' : 'Break-even'}:</span>
                    <span className="font-medium">€175 - €2.50 = €172.50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Max Gewinn' : 'Max Profit'}:</span>
                    <span className="font-medium text-emerald-600">€250 + €500 = €750 (4.3%)</span>
                  </li>
                  <li className="flex justify-between text-xs text-gray-500">
                    <span></span>
                    <span>({isGerman ? 'Prämie + Kursgewinn bis Strike' : 'Premium + Stock gain to strike'})</span>
                  </li>
                  <li className="flex justify-between border-t pt-2 mt-2">
                    <span>{isGerman ? 'Annualisierte Rendite' : 'Annualized Return'}:</span>
                    <span className="font-medium text-emerald-600">~35% ({isGerman ? 'wenn wiederholt' : 'if repeated'})</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{isGerman ? 'Puffer nach unten' : 'Downside Cushion'}:</span>
                    <span className="font-medium">€2.50 (1.4%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios */}
      <div className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {isGerman ? '4 mögliche Szenarien' : '4 Possible Scenarios'}
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Was passiert bei Verfall, abhängig von der Kursentwicklung?'
                : 'What happens at expiration, depending on stock movement?'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    scenario.color === 'green' ? 'bg-green-900/30 border border-green-700' :
                    scenario.color === 'yellow' ? 'bg-yellow-900/30 border border-yellow-700' :
                    'bg-red-900/30 border border-red-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white">{scenario.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      scenario.color === 'green' ? 'bg-green-800 text-green-200' :
                      scenario.color === 'yellow' ? 'bg-yellow-800 text-yellow-200' :
                      'bg-red-800 text-red-200'
                    }`}>
                      {scenario.result}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>{isGerman ? 'Aktienkurs' : 'Stock Price'}:</span>
                      <span className="text-white font-medium">{scenario.stockMove}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>{isGerman ? 'Call-Wert bei Verfall' : 'Call Value at Exp'}:</span>
                      <span className="text-white font-medium">{scenario.callValue}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>{isGerman ? 'Ihr Gewinn/Verlust' : 'Your P/L'}:</span>
                      <span className={`font-medium ${
                        scenario.color === 'red' ? 'text-red-400' : 'text-green-400'
                      }`}>{scenario.profit}</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-700">
                      <p className="text-slate-400 text-xs">{scenario.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strike Selection */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Den richtigen Strike wählen' : 'Choosing the Right Strike'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Delta</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">OTM %</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{isGerman ? 'Gewinnwahrsch.' : 'Win Rate'}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{isGerman ? 'Prämie' : 'Premium'}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{isGerman ? 'Stil' : 'Style'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {strikeSelection.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.delta}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.otm}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.probability}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.premium}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.style === 'Conservative' || row.style === 'Konservativ' ? 'bg-blue-100 text-blue-700' :
                        row.style === 'Balanced' || row.style === 'Ausgewogen' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {row.style}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {strikeSelection.map((row, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-2">{row.delta}</p>
                <p className="text-sm text-gray-600">{row.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Do\'s & Don\'ts' : 'Do\'s & Don\'ts'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Do&apos;s
                </h3>
                <ul className="space-y-3">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Don&apos;ts
                </h3>
                <ul className="space-y-3">
                  {dosDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-red-800">
                      <span className="text-red-600 mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-emerald-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {isGerman ? 'Bereit für fortgeschrittene Strategien?' : 'Ready for Advanced Strategies?'}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {isGerman
                ? 'Wenn Sie den Covered Call beherrschen, erkunden Sie weitere Einkommensstrategien.'
                : 'Once you master covered calls, explore more income strategies.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/iron-condor-strategy`}
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Iron Condor lernen' : 'Learn Iron Condor'}
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
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
