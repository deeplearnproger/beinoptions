import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Options Greeks Einfach Erklärt: Delta, Gamma, Theta, Vega | 2025'
      : 'Options Greeks Explained Simply: Delta, Gamma, Theta, Vega | 2025',
    description: locale === 'de'
      ? 'Verstehen Sie die Greeks: Delta, Gamma, Theta, Vega und Rho einfach erklärt. Mit Beispielen, Visualisierungen und praktischen Trading-Tipps.'
      : 'Understand the Greeks: Delta, Gamma, Theta, Vega, and Rho explained simply. With examples, visualizations, and practical trading tips.',
    keywords: locale === 'de'
      ? ['Options Greeks', 'Delta', 'Gamma', 'Theta', 'Vega', 'Optionen Greeks erklärt']
      : ['options greeks', 'delta', 'gamma', 'theta', 'vega', 'greeks explained'],
  });
}

export default function GreeksExplainedPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const greeks = [
    {
      name: 'Delta (Δ)',
      symbol: 'Δ',
      definition: isGerman
        ? 'Wie stark sich der Optionspreis ändert, wenn sich der zugrunde liegende Aktienkurs um 1€ bewegt.'
        : 'How much the option price changes when the underlying stock price moves by €1.',
      range: isGerman
        ? 'Call: 0 bis 1 | Put: 0 bis -1'
        : 'Call: 0 to 1 | Put: 0 to -1',
      example: isGerman
        ? 'Delta 0.60 bedeutet: Aktie steigt um 1€ → Option steigt um 0.60€'
        : 'Delta 0.60 means: Stock up €1 → Option up €0.60',
      practical: isGerman
        ? 'Delta zeigt auch die Wahrscheinlichkeit, dass die Option ITM verfällt. Delta 0.70 = ~70% Wahrscheinlichkeit.'
        : 'Delta also shows the probability that the option will expire ITM. Delta 0.70 = ~70% probability.',
      moneyness: [
        { type: isGerman ? 'Tief ITM' : 'Deep ITM', callDelta: '~0.90', putDelta: '~-0.90' },
        { type: isGerman ? 'ATM' : 'ATM', callDelta: '~0.50', putDelta: '~-0.50' },
        { type: isGerman ? 'OTM' : 'OTM', callDelta: '~0.20', putDelta: '~-0.20' },
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      name: 'Gamma (Γ)',
      symbol: 'Γ',
      definition: isGerman
        ? 'Wie schnell sich Delta ändert, wenn sich der Aktienkurs um 1€ bewegt. Die "Beschleunigung" Ihres Deltas.'
        : 'How fast Delta changes when the stock price moves by €1. The "acceleration" of your Delta.',
      range: isGerman
        ? 'Immer positiv (0 bis ~0.20)'
        : 'Always positive (0 to ~0.20)',
      example: isGerman
        ? 'Delta 0.50, Gamma 0.05: Aktie steigt 1€ → neues Delta 0.55'
        : 'Delta 0.50, Gamma 0.05: Stock up €1 → new Delta 0.55',
      practical: isGerman
        ? 'Gamma ist am höchsten bei ATM-Optionen kurz vor Verfall. Hohe Gamma = schnelle Delta-Änderungen (gut oder schlecht!).'
        : 'Gamma is highest for ATM options near expiration. High Gamma = fast Delta changes (good or bad!).',
      timeline: [
        { days: '90 DTE', value: isGerman ? 'Niedrig (0.01)' : 'Low (0.01)' },
        { days: '30 DTE', value: isGerman ? 'Mittel (0.05)' : 'Medium (0.05)' },
        { days: '7 DTE', value: isGerman ? 'Hoch (0.15)' : 'High (0.15)' },
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-violet-600',
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Theta (Θ)',
      symbol: 'Θ',
      definition: isGerman
        ? 'Wie viel Wert die Option pro Tag durch Zeitverfall verliert. Der "Feind" der Optionskäufer.'
        : 'How much value the option loses per day due to time decay. The "enemy" of option buyers.',
      range: isGerman
        ? 'Immer negativ für Long-Positionen'
        : 'Always negative for long positions',
      example: isGerman
        ? 'Theta -0.10 bedeutet: Option verliert 10€ pro Tag (pro Kontrakt)'
        : 'Theta -0.10 means: Option loses €10 per day (per contract)',
      practical: isGerman
        ? 'Theta beschleunigt sich exponentiell in den letzten 30 Tagen. Optionsverkäufer profitieren von Theta (positives Theta).'
        : 'Theta accelerates exponentially in the final 30 days. Option sellers benefit from Theta (positive Theta).',
      decay: [
        { days: '90 DTE', daily: '€0.02', weekly: '€0.14' },
        { days: '30 DTE', daily: '€0.08', weekly: '€0.56' },
        { days: '7 DTE', daily: '€0.30', weekly: '€2.10' },
      ],
      color: 'red',
      gradient: 'from-red-500 to-rose-600',
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      name: 'Vega (ν)',
      symbol: 'ν',
      definition: isGerman
        ? 'Wie viel sich der Optionspreis ändert, wenn die implizite Volatilität um 1% steigt oder fällt.'
        : 'How much the option price changes when implied volatility moves by 1%.',
      range: isGerman
        ? 'Immer positiv (0 bis ~0.50)'
        : 'Always positive (0 to ~0.50)',
      example: isGerman
        ? 'Vega 0.15 bedeutet: IV steigt um 10% → Option steigt um 1.50€'
        : 'Vega 0.15 means: IV up 10% → Option up €1.50',
      practical: isGerman
        ? 'Vega ist am höchsten bei ATM-Optionen mit langer Laufzeit. Vor Earnings steigt IV (teure Optionen), nach Earnings fällt IV (IV-Crush).'
        : 'Vega is highest for ATM options with long expiration. Before earnings IV rises (expensive options), after earnings IV falls (IV crush).',
      scenarios: [
        { event: isGerman ? 'Vor Earnings' : 'Before Earnings', ivChange: '+20%', effect: isGerman ? 'Optionen +teuer' : 'Options +expensive' },
        { event: isGerman ? 'Nach Earnings' : 'After Earnings', ivChange: '-30%', effect: isGerman ? 'IV-Crush' : 'IV Crush' },
        { event: isGerman ? 'Stille Phase' : 'Quiet Period', ivChange: '±5%', effect: isGerman ? 'Stabil' : 'Stable' },
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      name: 'Rho (ρ)',
      symbol: 'ρ',
      definition: isGerman
        ? 'Wie viel sich der Optionspreis ändert, wenn sich der risikofreie Zinssatz um 1% ändert.'
        : 'How much the option price changes when the risk-free interest rate changes by 1%.',
      range: isGerman
        ? 'Call: positiv | Put: negativ'
        : 'Call: positive | Put: negative',
      example: isGerman
        ? 'Rho 0.05 bedeutet: Zinsen steigen um 1% → Call steigt um 0.05€'
        : 'Rho 0.05 means: Interest rates up 1% → Call up €0.05',
      practical: isGerman
        ? 'Rho ist der am wenigsten wichtige Greek für die meisten Trader. Nur relevant für LEAPS (langfristige Optionen >1 Jahr).'
        : 'Rho is the least important Greek for most traders. Only relevant for LEAPS (long-term options >1 year).',
      importance: isGerman
        ? 'Niedrig (außer bei LEAPS)'
        : 'Low (except for LEAPS)',
      color: 'gray',
      gradient: 'from-gray-500 to-slate-600',
      iconBg: 'from-gray-50 to-slate-100',
      iconColor: 'text-slate-600',
    },
  ];

  const tradingStrategies = [
    {
      title: isGerman ? 'Für Optionskäufer (Long)' : 'For Option Buyers (Long)',
      tips: [
        {
          greek: 'Delta',
          tip: isGerman
            ? 'Wählen Sie Delta >0.50 für höhere Gewinnwahrscheinlichkeit. ATM oder leicht ITM Optionen.'
            : 'Choose Delta >0.50 for higher probability. ATM or slightly ITM options.',
        },
        {
          greek: 'Theta',
          tip: isGerman
            ? 'Vermeiden Sie Optionen mit weniger als 30 Tagen Laufzeit. Theta beschleunigt sich zu stark.'
            : 'Avoid options with less than 30 days to expiration. Theta accelerates too much.',
        },
        {
          greek: 'Vega',
          tip: isGerman
            ? 'Kaufen Sie, wenn IV niedrig ist (IV Rank <30). Vermeiden Sie Käufe vor Earnings.'
            : 'Buy when IV is low (IV Rank <30). Avoid buying before earnings.',
        },
      ],
    },
    {
      title: isGerman ? 'Für Optionsverkäufer (Short)' : 'For Option Sellers (Short)',
      tips: [
        {
          greek: 'Theta',
          tip: isGerman
            ? 'Verkaufen Sie Optionen mit 30-45 Tagen Laufzeit. Maximale Theta-Effizienz.'
            : 'Sell options with 30-45 days to expiration. Maximum Theta efficiency.',
        },
        {
          greek: 'Vega',
          tip: isGerman
            ? 'Verkaufen Sie, wenn IV hoch ist (IV Rank >70). Kassieren Sie aufgeblähte Prämien.'
            : 'Sell when IV is high (IV Rank >70). Collect inflated premiums.',
        },
        {
          greek: 'Gamma',
          tip: isGerman
            ? 'Vermeiden Sie Verkauf von ATM-Optionen kurz vor Verfall (hohes Gamma-Risiko).'
            : 'Avoid selling ATM options near expiration (high Gamma risk).',
        },
      ],
    },
  ];

  const faqs = [
    {
      question: isGerman
        ? 'Welcher Greek ist am wichtigsten?'
        : 'Which Greek is most important?',
      answer: isGerman
        ? 'Es gibt keinen "wichtigsten" Greek - alle sind wichtig, aber für verschiedene Zwecke. Delta zeigt Ihr direktionales Risiko, Theta Ihren Zeitverfall, Vega Ihr Volatilitätsrisiko. Für Anfänger: Fokus auf Delta (Richtung), Theta (Zeit) und Vega (Volatilität).'
        : 'There\'s no "most important" Greek - all matter for different purposes. Delta shows your directional risk, Theta your time decay, Vega your volatility risk. For beginners: Focus on Delta (direction), Theta (time), and Vega (volatility).',
    },
    {
      question: isGerman
        ? 'Wie berechne ich die Greeks?'
        : 'How do I calculate the Greeks?',
      answer: isGerman
        ? 'Sie müssen die Greeks nicht manuell berechnen - jede moderne Trading-Plattform zeigt sie automatisch an. Verwenden Sie auch unseren P/L Calculator, um alle Greeks für Ihre Position zu sehen. Die Berechnung verwendet das Black-Scholes-Modell.'
        : 'You don\'t need to calculate Greeks manually - every modern trading platform displays them automatically. Use our P/L Calculator to see all Greeks for your position. Calculation uses the Black-Scholes model.',
    },
    {
      question: isGerman
        ? 'Warum ist Theta immer negativ für Long-Optionen?'
        : 'Why is Theta always negative for long options?',
      answer: isGerman
        ? 'Weil Optionen ein Verfallsdatum haben. Jeden Tag, der vergeht, verliert die Option an Zeitwert. Das ist wie eine schmelzende Eiswürfel - Zeit arbeitet gegen Sie. Optionsverkäufer haben positives Theta, weil sie von diesem Zeitverfall profitieren.'
        : 'Because options have an expiration date. Every day that passes, the option loses time value. It\'s like a melting ice cube - time works against you. Option sellers have positive Theta because they profit from this time decay.',
    },
    {
      question: isGerman
        ? 'Was ist IV Crush und wie hängt es mit Vega zusammen?'
        : 'What is IV crush and how does it relate to Vega?',
      answer: isGerman
        ? 'IV Crush passiert, wenn die implizite Volatilität schnell fällt (meist nach Earnings). Wenn Sie hohe Vega haben und IV um 30% fällt, verliert Ihre Option massiv an Wert - selbst wenn der Aktienkurs in Ihre Richtung geht! Beispiel: Vega 0.20, IV fällt 30% = -6€ Verlust pro Kontrakt.'
        : 'IV crush happens when implied volatility drops quickly (usually after earnings). If you have high Vega and IV falls 30%, your option loses massive value - even if stock price goes your way! Example: Vega 0.20, IV drops 30% = -€6 loss per contract.',
    },
    {
      question: isGerman
        ? 'Sollte ich Optionen mit hohem oder niedrigem Gamma kaufen?'
        : 'Should I buy options with high or low Gamma?',
      answer: isGerman
        ? 'Das hängt von Ihrer Strategie ab. Hohes Gamma (ATM, kurze Laufzeit) = schnelle Delta-Änderungen = hohe Gewinne ODER hohe Verluste. Niedriges Gamma (ITM/OTM, lange Laufzeit) = stabileres Delta = vorhersehbarere Preisbewegungen. Für Anfänger: mittleres Gamma ist am besten.'
        : 'Depends on your strategy. High Gamma (ATM, short expiration) = fast Delta changes = big wins OR big losses. Low Gamma (ITM/OTM, long expiration) = stable Delta = more predictable price moves. For beginners: medium Gamma is best.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? 'Options Greeks Einfach Erklärt' : 'Options Greeks Explained Simply'}
        description={isGerman
          ? 'Verstehen Sie Delta, Gamma, Theta, Vega und Rho mit praktischen Beispielen.'
          : 'Understand Delta, Gamma, Theta, Vega, and Rho with practical examples.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/greeks-explained`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Lernen' : 'Learn', url: `https://beinoptions.com/${locale}/basics` },
          { name: 'Greeks', url: `https://beinoptions.com/${locale}/greeks-explained` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isGerman
                ? 'Options Greeks Einfach Erklärt'
                : 'Options Greeks Explained Simply'}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {isGerman
                ? 'Verstehen Sie Delta, Gamma, Theta, Vega und Rho - die 5 wichtigsten Kennzahlen für erfolgreiches Options-Trading. Mit Beispielen, Visualisierungen und praktischen Tipps.'
                : 'Understand Delta, Gamma, Theta, Vega, and Rho - the 5 most important metrics for successful options trading. With examples, visualizations, and practical tips.'}
            </p>
            <Link
              href={`/${locale}/tools/pl`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {isGerman ? 'Greeks Calculator' : 'Greeks Calculator'}
            </Link>
          </div>
        </div>
      </div>

      {/* Greeks Detailed Explanations */}
      <div className="container-custom py-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {greeks.map((greek, index) => (
            <div key={index} id={greek.name.toLowerCase().split(' ')[0]}>
              {/* Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${greek.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-4xl font-bold ${greek.iconColor}`}>
                    {greek.symbol}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {greek.name}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {greek.definition}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Info */}
                <div className="space-y-6">
                  {/* Range */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {isGerman ? 'Wertebereich' : 'Range'}
                    </h3>
                    <p className="text-gray-700 font-mono bg-gray-50 px-4 py-2 rounded-lg">
                      {greek.range}
                    </p>
                  </div>

                  {/* Example */}
                  <div className={`bg-gradient-to-br ${greek.gradient} bg-opacity-10 rounded-xl p-6 border-2 border-${greek.color}-200`}>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {isGerman ? 'Beispiel' : 'Example'}
                    </h3>
                    <p className="text-gray-800 font-medium">
                      {greek.example}
                    </p>
                  </div>

                  {/* Practical Tip */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">
                          {isGerman ? 'Praktischer Tipp:' : 'Practical Tip:'}
                        </p>
                        <p className="text-blue-800">
                          {greek.practical}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Tables/Data */}
                <div className="space-y-6">
                  {/* Moneyness Table (Delta) */}
                  {greek.moneyness && (
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">
                          {isGerman ? 'Typische Delta-Werte' : 'Typical Delta Values'}
                        </h3>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              {isGerman ? 'Position' : 'Position'}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Call Δ</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Put Δ</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {greek.moneyness.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">{row.type}</td>
                              <td className="px-4 py-3 text-sm text-green-600 font-mono">{row.callDelta}</td>
                              <td className="px-4 py-3 text-sm text-red-600 font-mono">{row.putDelta}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Timeline Table (Gamma) */}
                  {greek.timeline && (
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">
                          {isGerman ? 'Gamma über Zeit' : 'Gamma Over Time'}
                        </h3>
                      </div>
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                          {greek.timeline.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">{row.days}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Decay Table (Theta) */}
                  {greek.decay && (
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">
                          {isGerman ? 'Theta Beschleunigung' : 'Theta Acceleration'}
                        </h3>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              {isGerman ? 'Laufzeit' : 'Time Left'}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              {isGerman ? 'Täglich' : 'Daily'}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                              {isGerman ? 'Wöchentlich' : 'Weekly'}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {greek.decay.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">{row.days}</td>
                              <td className="px-4 py-3 text-sm text-red-600 font-mono">{row.daily}</td>
                              <td className="px-4 py-3 text-sm text-red-700 font-mono font-semibold">{row.weekly}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Scenarios Table (Vega) */}
                  {greek.scenarios && (
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">
                          {isGerman ? 'IV Szenarien' : 'IV Scenarios'}
                        </h3>
                      </div>
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                          {greek.scenarios.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">{row.event}</td>
                              <td className="px-4 py-3 text-sm font-mono text-gray-700">{row.ivChange}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{row.effect}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {index < greeks.length - 1 && (
                <div className="border-b border-gray-300 mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trading Strategies Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {isGerman ? 'Greeks in der Praxis' : 'Greeks in Practice'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tradingStrategies.map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {strategy.title}
                  </h3>
                  <div className="space-y-4">
                    {strategy.tips.map((tip, tipIdx) => (
                      <div key={tipIdx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">{tip.greek[0]}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">{tip.greek}:</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {isGerman ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-gray-200">
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

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isGerman
                ? 'Visualisieren Sie Ihre Greeks'
                : 'Visualize Your Greeks'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {isGerman
                ? 'Nutzen Sie unseren P/L Calculator, um alle Greeks für Ihre Position zu sehen.'
                : 'Use our P/L Calculator to see all Greeks for your position.'}
            </p>
            <Link
              href={`/${locale}/tools/pl`}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {isGerman ? 'Zum P/L Calculator' : 'Go to P/L Calculator'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
