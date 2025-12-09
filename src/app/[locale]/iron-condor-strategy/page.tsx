import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Iron Condor Strategie - Fortgeschrittener Guide | 2025'
      : 'Iron Condor Strategy - Advanced Guide | 2025',
    description: locale === 'de'
      ? 'Meistern Sie die Iron Condor Strategie: Profitieren Sie von Seitwärtsmärkten mit definiertem Risiko. Vollständige Anleitung für fortgeschrittene Trader.'
      : 'Master the Iron Condor strategy: Profit from sideways markets with defined risk. Complete guide for advanced traders.',
    keywords: locale === 'de'
      ? ['Iron Condor', 'Optionsstrategie', 'Seitwärtsmarkt', 'Spread', 'Premium Selling', 'Options Trading']
      : ['iron condor', 'options strategy', 'sideways market', 'spread', 'premium selling', 'options trading'],
  });
}

export default function IronCondorStrategyPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const legs = [
    {
      position: isGerman ? 'Long Put (Schutz unten)' : 'Long Put (Lower Protection)',
      strike: '€165',
      action: isGerman ? 'Kaufen' : 'Buy',
      purpose: isGerman ? 'Begrenzt Verlust nach unten' : 'Limits downside loss',
      premium: '-€0.80',
      color: 'red',
    },
    {
      position: isGerman ? 'Short Put (unterer Spread)' : 'Short Put (Lower Spread)',
      strike: '€170',
      action: isGerman ? 'Verkaufen' : 'Sell',
      purpose: isGerman ? 'Generiert Premium' : 'Generates premium',
      premium: '+€1.50',
      color: 'green',
    },
    {
      position: isGerman ? 'Short Call (oberer Spread)' : 'Short Call (Upper Spread)',
      strike: '€180',
      action: isGerman ? 'Verkaufen' : 'Sell',
      purpose: isGerman ? 'Generiert Premium' : 'Generates premium',
      premium: '+€1.30',
      color: 'green',
    },
    {
      position: isGerman ? 'Long Call (Schutz oben)' : 'Long Call (Upper Protection)',
      strike: '€185',
      action: isGerman ? 'Kaufen' : 'Buy',
      purpose: isGerman ? 'Begrenzt Verlust nach oben' : 'Limits upside loss',
      premium: '-€0.50',
      color: 'red',
    },
  ];

  const scenarios = [
    {
      title: isGerman ? 'Ideales Szenario: Aktie bleibt in der Range' : 'Ideal Scenario: Stock Stays in Range',
      stockMove: '€175 → €172-€178',
      result: isGerman ? 'Maximaler Gewinn' : 'Maximum Profit',
      profit: '+€150',
      explanation: isGerman
        ? 'Alle Optionen verfallen wertlos. Sie behalten die gesamte Prämie von €150.'
        : 'All options expire worthless. You keep the entire €150 premium.',
      color: 'green',
    },
    {
      title: isGerman ? 'Szenario 2: Aktie testet Short Put' : 'Scenario 2: Stock Tests Short Put',
      stockMove: '€175 → €168',
      result: isGerman ? 'Teilweiser Verlust' : 'Partial Loss',
      profit: '-€50',
      explanation: isGerman
        ? 'Put Spread verliert €200, aber Sie behalten €150 Prämie. Netto: -€50.'
        : 'Put spread loses €200, but you keep €150 premium. Net: -€50.',
      color: 'yellow',
    },
    {
      title: isGerman ? 'Szenario 3: Aktie fällt stark' : 'Scenario 3: Stock Falls Sharply',
      stockMove: '€175 → €160',
      result: isGerman ? 'Maximaler Verlust' : 'Maximum Loss',
      profit: '-€350',
      explanation: isGerman
        ? 'Put Spread erreicht vollen Verlust (€500), minus erhaltene Prämie (€150) = -€350.'
        : 'Put spread reaches full loss (€500), minus premium received (€150) = -€350.',
      color: 'red',
    },
    {
      title: isGerman ? 'Szenario 4: Aktie steigt stark' : 'Scenario 4: Stock Rises Sharply',
      stockMove: '€175 → €190',
      result: isGerman ? 'Maximaler Verlust' : 'Maximum Loss',
      profit: '-€350',
      explanation: isGerman
        ? 'Call Spread erreicht vollen Verlust (€500), minus erhaltene Prämie (€150) = -€350.'
        : 'Call spread reaches full loss (€500), minus premium received (€150) = -€350.',
      color: 'red',
    },
  ];

  const adjustments = [
    {
      situation: isGerman ? 'Aktie bewegt sich Richtung Short Put' : 'Stock Moving Toward Short Put',
      action: isGerman ? 'Call-Seite runterrollen' : 'Roll Down Call Side',
      howTo: isGerman
        ? 'Schließen Sie den aktuellen Call Spread und eröffnen Sie einen neuen mit niedrigeren Strikes. Dies bringt zusätzliche Prämie und verschiebt das Break-even.'
        : 'Close current call spread and open new one with lower strikes. This brings additional premium and shifts break-even.',
      risk: isGerman
        ? 'Sie reduzieren den Profit-Bereich nach oben.'
        : 'You reduce the profit range to the upside.',
    },
    {
      situation: isGerman ? 'Aktie bewegt sich Richtung Short Call' : 'Stock Moving Toward Short Call',
      action: isGerman ? 'Put-Seite hochrollen' : 'Roll Up Put Side',
      howTo: isGerman
        ? 'Schließen Sie den aktuellen Put Spread und eröffnen Sie einen neuen mit höheren Strikes.'
        : 'Close current put spread and open new one with higher strikes.',
      risk: isGerman
        ? 'Sie reduzieren den Profit-Bereich nach unten.'
        : 'You reduce the profit range to the downside.',
    },
    {
      situation: isGerman ? 'Aktie durchbricht eine Seite' : 'Stock Breaks Through One Side',
      action: isGerman ? 'Verlustseite schließen' : 'Close Losing Side',
      howTo: isGerman
        ? 'Schließen Sie den verlierenden Spread und lassen Sie den profitablen laufen. Oder schließen Sie alles für definierten Verlust.'
        : 'Close the losing spread and let the profitable one run. Or close everything for defined loss.',
      risk: isGerman
        ? 'Verlust realisieren, aber nicht maximieren.'
        : 'Realize loss but don\'t maximize it.',
    },
    {
      situation: isGerman ? 'Hohe IV vor Verfall' : 'High IV Before Expiration',
      action: isGerman ? 'Früh schließen bei 50% Gewinn' : 'Close Early at 50% Profit',
      howTo: isGerman
        ? 'Wenn Sie 50% des max. Gewinns erreicht haben, schließen Sie die Position. Das spart Gamma-Risiko nahe Verfall.'
        : 'When you reach 50% of max profit, close the position. This saves gamma risk near expiration.',
      risk: isGerman
        ? 'Weniger Profit, aber höheres Gewinn-zu-Risiko-Verhältnis.'
        : 'Less profit but better win rate and risk-reward.',
    },
  ];

  const checklist = [
    {
      category: isGerman ? 'Vor dem Trade' : 'Before the Trade',
      items: [
        isGerman ? 'IV Rank > 30% (idealerweise > 50%)' : 'IV Rank > 30% (ideally > 50%)',
        isGerman ? 'Keine Earnings in der Laufzeit' : 'No earnings during duration',
        isGerman ? '30-45 Tage bis Verfall' : '30-45 days to expiration',
        isGerman ? 'Neutrale Marktmeinung für den Basiswert' : 'Neutral outlook on underlying',
        isGerman ? 'Liquide Optionen (OI > 500)' : 'Liquid options (OI > 500)',
      ],
    },
    {
      category: isGerman ? 'Strike-Auswahl' : 'Strike Selection',
      items: [
        isGerman ? 'Short Strikes bei ~16 Delta (1 Standardabweichung)' : 'Short strikes at ~16 Delta (1 standard deviation)',
        isGerman ? 'Breite der Spreads gleich (z.B. beide €5)' : 'Equal spread widths (e.g., both €5)',
        isGerman ? 'Prämie > 1/3 der Spread-Breite' : 'Premium > 1/3 of spread width',
      ],
    },
    {
      category: isGerman ? 'Während des Trades' : 'During the Trade',
      items: [
        isGerman ? 'Bei 50% Gewinn schließen' : 'Close at 50% profit',
        isGerman ? 'Bei 200% des erhaltenen Kredits Stop-Loss setzen' : 'Set stop-loss at 200% of credit received',
        isGerman ? 'Täglich Kurs vs. Short Strikes prüfen' : 'Daily check: Price vs. short strikes',
        isGerman ? 'Anpassen wenn Aktie Short Strike erreicht' : 'Adjust when stock reaches short strike',
      ],
    },
  ];

  const faqs = [
    {
      question: isGerman
        ? 'Wann sollte ich einen Iron Condor handeln?'
        : 'When should I trade an Iron Condor?',
      answer: isGerman
        ? 'Der Iron Condor funktioniert am besten bei: 1) Hoher impliziter Volatilität (IV Rank > 30%), da Sie teure Prämien verkaufen, 2) Erwarteter Seitwärtsbewegung oder Range-gebundenem Markt, 3) Keinen bevorstehenden Earnings oder großen Ereignissen, 4) Stabilen Underlyings wie Index-ETFs (SPY, QQQ). Vermeiden Sie Iron Condors bei niedrigem IV oder starken Trends.'
        : 'Iron Condor works best with: 1) High implied volatility (IV Rank > 30%) since you sell expensive premium, 2) Expected sideways movement or range-bound market, 3) No upcoming earnings or major events, 4) Stable underlyings like index ETFs (SPY, QQQ). Avoid Iron Condors in low IV or strong trends.',
    },
    {
      question: isGerman
        ? 'Was ist der Unterschied zwischen Iron Condor und Strangle?'
        : 'What is the difference between Iron Condor and Strangle?',
      answer: isGerman
        ? 'Ein Short Strangle (nur Short Put + Short Call) hat unbegrenztes Risiko. Der Iron Condor fügt Long-Optionen als "Flügel" hinzu, die das Risiko begrenzen. Sie zahlen für diese Schutzoptionen, aber Ihr maximaler Verlust ist definiert. Iron Condor = Definiertes Risiko. Short Strangle = Undefiniertes Risiko. Für die meisten Trader ist der Iron Condor sicherer.'
        : 'A Short Strangle (only Short Put + Short Call) has unlimited risk. The Iron Condor adds long options as "wings" that cap risk. You pay for these protective options, but your max loss is defined. Iron Condor = Defined risk. Short Strangle = Undefined risk. For most traders, Iron Condor is safer.',
    },
    {
      question: isGerman
        ? 'Wie wähle ich die richtige Spread-Breite?'
        : 'How do I choose the right spread width?',
      answer: isGerman
        ? 'Die Spread-Breite bestimmt Ihr maximales Risiko: Schmale Spreads (€2-3): Geringeres Risiko, aber weniger Prämie. Mittlere Spreads (€5): Gute Balance (am beliebtesten). Weite Spreads (€10+): Mehr Prämie, aber höheres Risiko. Faustregel: Die erhaltene Prämie sollte mindestens 1/3 der Spread-Breite sein. Bei €5 Spreads also mindestens ~€1.65 Kredit.'
        : 'Spread width determines your maximum risk: Narrow spreads (€2-3): Lower risk but less premium. Medium spreads (€5): Good balance (most popular). Wide spreads (€10+): More premium but higher risk. Rule of thumb: Premium received should be at least 1/3 of spread width. For €5 spreads, at least ~€1.65 credit.',
    },
    {
      question: isGerman
        ? 'Sollte ich symmetrische oder asymmetrische Iron Condors handeln?'
        : 'Should I trade symmetric or asymmetric Iron Condors?',
      answer: isGerman
        ? 'Symmetrisch: Gleiche Abstände auf beiden Seiten. Neutral. Standard-Ansatz. Asymmetrisch: Eine Seite näher am Kurs. Nutzen Sie das, wenn Sie eine leichte Richtungsmeinung haben. Beispiel: Leicht bullish = Put-Seite näher, mehr Prämie von Puts. Für Anfänger: Symmetrisch starten, später mit Asymmetrie experimentieren.'
        : 'Symmetric: Equal distances on both sides. Neutral. Standard approach. Asymmetric: One side closer to price. Use this when you have a slight directional bias. Example: Slightly bullish = Put side closer, more premium from puts. For beginners: Start symmetric, experiment with asymmetry later.',
    },
    {
      question: isGerman
        ? 'Was passiert bei Zuweisung (Assignment)?'
        : 'What happens with assignment?',
      answer: isGerman
        ? 'Bei einem Iron Condor ist frühe Zuweisung selten, aber möglich. Wenn der Short Put zugewiesen wird: Sie kaufen 100 Aktien zum Short-Put-Strike. Ihr Long Put schützt Sie weiter. Wenn der Short Call zugewiesen wird: Sie müssen 100 Aktien liefern (Short-Position). Ihr Long Call begrenzt den Verlust. In beiden Fällen bleibt Ihr Risiko definiert durch die Long-Optionen.'
        : 'With an Iron Condor, early assignment is rare but possible. If short put is assigned: You buy 100 shares at short put strike. Your long put still protects you. If short call is assigned: You must deliver 100 shares (short position). Your long call limits loss. In both cases, your risk remains defined by the long options.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? 'Iron Condor Strategie - Vollständiger Guide' : 'Iron Condor Strategy - Complete Guide'}
        description={isGerman
          ? 'Meistern Sie die Iron Condor Strategie für Seitwärtsmärkte.'
          : 'Master the Iron Condor strategy for sideways markets.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/iron-condor-strategy`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Strategien' : 'Strategies', url: `https://beinoptions.com/${locale}/strategies` },
          { name: 'Iron Condor', url: `https://beinoptions.com/${locale}/iron-condor-strategy` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-violet-500/30 text-violet-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {isGerman ? 'Fortgeschrittene Strategie' : 'Advanced Strategy'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isGerman
                ? 'Iron Condor Strategie'
                : 'Iron Condor Strategy'}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              {isGerman
                ? 'Profitieren Sie von Seitwärtsmärkten mit definiertem Risiko. Der Iron Condor ist eine der beliebtesten Premium-Selling-Strategien für fortgeschrittene Trader.'
                : 'Profit from sideways markets with defined risk. The Iron Condor is one of the most popular premium-selling strategies for advanced traders.'}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-violet-300">{isGerman ? 'Mittel' : 'Medium'}</div>
                <div className="text-sm text-violet-100">{isGerman ? 'Risiko-Level' : 'Risk Level'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-violet-300">{isGerman ? 'Fortgeschritten' : 'Advanced'}</div>
                <div className="text-sm text-violet-100">{isGerman ? 'Schwierigkeit' : 'Difficulty'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-violet-300">{isGerman ? 'Definiert' : 'Defined'}</div>
                <div className="text-sm text-violet-100">{isGerman ? 'Max. Verlust' : 'Max Loss'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-violet-300">{isGerman ? 'Neutral' : 'Neutral'}</div>
                <div className="text-sm text-violet-100">{isGerman ? 'Marktmeinung' : 'Market Outlook'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is an Iron Condor */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isGerman ? 'Was ist ein Iron Condor?' : 'What is an Iron Condor?'}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {isGerman
              ? 'Ein Iron Condor kombiniert einen Bull Put Spread (unten) mit einem Bear Call Spread (oben). Sie profitieren, wenn die Aktie zwischen Ihren Short Strikes bleibt.'
              : 'An Iron Condor combines a Bull Put Spread (below) with a Bear Call Spread (above). You profit when the stock stays between your short strikes.'}
          </p>

          {/* Visual Representation */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-between mb-8 text-sm text-gray-500">
              <span>{isGerman ? 'Niedrigerer Preis' : 'Lower Price'}</span>
              <span>{isGerman ? 'Aktueller Kurs: €175' : 'Current Price: €175'}</span>
              <span>{isGerman ? 'Höherer Preis' : 'Higher Price'}</span>
            </div>

            {/* Strike visualization */}
            <div className="relative h-20 mb-8">
              {/* Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>

              {/* Profit Zone */}
              <div className="absolute top-1/2 left-[30%] right-[30%] h-8 bg-green-200 -translate-y-1/2 rounded flex items-center justify-center">
                <span className="text-green-700 font-semibold text-sm">{isGerman ? 'Profit-Zone' : 'Profit Zone'}</span>
              </div>

              {/* Strikes */}
              <div className="absolute top-0 left-[10%] flex flex-col items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-xs mt-1 font-medium">€165</span>
                <span className="text-xs text-gray-500">Long Put</span>
              </div>
              <div className="absolute top-0 left-[30%] flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-xs mt-1 font-medium">€170</span>
                <span className="text-xs text-gray-500">Short Put</span>
              </div>
              <div className="absolute top-0 left-[50%] -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-xs mt-1 font-medium">€175</span>
                <span className="text-xs text-gray-500">{isGerman ? 'Aktuell' : 'Current'}</span>
              </div>
              <div className="absolute top-0 right-[30%] flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-xs mt-1 font-medium">€180</span>
                <span className="text-xs text-gray-500">Short Call</span>
              </div>
              <div className="absolute top-0 right-[10%] flex flex-col items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-xs mt-1 font-medium">€185</span>
                <span className="text-xs text-gray-500">Long Call</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>{isGerman ? 'Verkauft (Prämie erhalten)' : 'Sold (Premium received)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>{isGerman ? 'Gekauft (Schutz)' : 'Bought (Protection)'}</span>
              </div>
            </div>
          </div>

          {/* 4 Legs Table */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {isGerman ? 'Die 4 Beine des Iron Condor' : 'The 4 Legs of an Iron Condor'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Position</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Strike</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">{isGerman ? 'Aktion' : 'Action'}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">{isGerman ? 'Zweck' : 'Purpose'}</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">{isGerman ? 'Prämie' : 'Premium'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {legs.map((leg, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{leg.position}</td>
                    <td className="px-4 py-3 text-sm text-center font-medium">{leg.strike}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        leg.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {leg.action}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{leg.purpose}</td>
                    <td className={`px-4 py-3 text-sm text-right font-medium ${
                      leg.color === 'green' ? 'text-green-600' : 'text-red-600'
                    }`}>{leg.premium}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-violet-50">
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-sm font-semibold text-gray-900">
                    {isGerman ? 'Netto-Kredit erhalten' : 'Net Credit Received'}
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-bold text-green-600">+€1.50</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-violet-900 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {isGerman ? 'Schlüsselkennzahlen' : 'Key Metrics'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400">€150</div>
                <div className="text-violet-200 mt-2">{isGerman ? 'Max. Gewinn' : 'Max Profit'}</div>
                <div className="text-xs text-violet-300 mt-1">{isGerman ? '(Kredit × 100)' : '(Credit × 100)'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400">€350</div>
                <div className="text-violet-200 mt-2">{isGerman ? 'Max. Verlust' : 'Max Loss'}</div>
                <div className="text-xs text-violet-300 mt-1">{isGerman ? '(Spread - Kredit) × 100' : '(Spread - Credit) × 100'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-violet-300">€168.50 / €181.50</div>
                <div className="text-violet-200 mt-2">{isGerman ? 'Break-even' : 'Break-even'}</div>
                <div className="text-xs text-violet-300 mt-1">{isGerman ? 'Short Strike ± Kredit' : 'Short Strike ± Credit'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400">~70%</div>
                <div className="text-violet-200 mt-2">{isGerman ? 'Gewinnwahrsch.' : 'Win Rate'}</div>
                <div className="text-xs text-violet-300 mt-1">{isGerman ? '(bei 16 Delta Short Strikes)' : '(at 16 Delta short strikes)'}</div>
              </div>
            </div>

            {/* Formula */}
            <div className="mt-8 bg-white/5 rounded-xl p-6 text-center">
              <p className="text-violet-200 mb-3">{isGerman ? 'Wichtige Formeln' : 'Key Formulas'}</p>
              <div className="space-y-2 text-white font-mono text-sm">
                <p><span className="text-green-400">{isGerman ? 'Max Gewinn' : 'Max Profit'}</span> = {isGerman ? 'Erhaltener Kredit' : 'Credit Received'}</p>
                <p><span className="text-red-400">{isGerman ? 'Max Verlust' : 'Max Loss'}</span> = {isGerman ? 'Spread-Breite - Kredit' : 'Spread Width - Credit'}</p>
                <p><span className="text-blue-400">Break-even</span> = {isGerman ? 'Short Strikes ± Kredit' : 'Short Strikes ± Credit'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Mögliche Szenarien' : 'Possible Scenarios'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border-2 ${
                  scenario.color === 'green' ? 'bg-green-50 border-green-200' :
                  scenario.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">{scenario.title}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{isGerman ? 'Kursbewegung' : 'Price Movement'}:</span>
                    <span className="font-medium text-gray-900">{scenario.stockMove}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{isGerman ? 'Ergebnis' : 'Result'}:</span>
                    <span className={`font-bold ${
                      scenario.color === 'green' ? 'text-green-600' :
                      scenario.color === 'yellow' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>{scenario.profit}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-gray-700">{scenario.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* When to Trade */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Wann handeln - Checkliste' : 'When to Trade - Checklist'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {checklist.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-bold text-violet-700 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-violet-500 mt-0.5">☐</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Adjustments */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {isGerman ? 'Position anpassen' : 'Adjusting Your Position'}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {isGerman
              ? 'Was tun, wenn sich die Aktie bewegt? Hier sind Ihre Optionen.'
              : 'What to do when the stock moves? Here are your options.'}
          </p>

          <div className="space-y-4">
            {adjustments.map((adj, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-violet-100 p-4 flex items-center">
                    <div>
                      <p className="text-xs text-violet-600 font-medium mb-1">{isGerman ? 'Situation' : 'Situation'}</p>
                      <p className="font-semibold text-violet-900">{adj.situation}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center">
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">{isGerman ? 'Aktion' : 'Action'}</p>
                      <p className="font-semibold text-gray-900">{adj.action}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <p className="text-xs text-gray-500 font-medium mb-1">{isGerman ? 'Wie' : 'How'}</p>
                    <p className="text-sm text-gray-700">{adj.howTo}</p>
                  </div>
                  <div className="p-4 bg-red-50">
                    <p className="text-xs text-red-600 font-medium mb-1">{isGerman ? 'Risiko' : 'Risk'}</p>
                    <p className="text-sm text-red-800">{adj.risk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pros and Cons */}
      <div className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {isGerman ? 'Vor- und Nachteile' : 'Pros and Cons'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-900/30 rounded-2xl p-6 border border-green-700">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isGerman ? 'Vorteile' : 'Advantages'}
                </h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-400">+</span>
                    <span>{isGerman ? 'Definiertes Risiko - Sie kennen Ihren maximalen Verlust' : 'Defined risk - You know your maximum loss'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-400">+</span>
                    <span>{isGerman ? 'Hohe Gewinnwahrscheinlichkeit (~70% bei 16 Delta)' : 'High probability of profit (~70% at 16 Delta)'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-400">+</span>
                    <span>{isGerman ? 'Theta arbeitet für Sie - Zeit ist Ihr Freund' : 'Theta works for you - Time is your friend'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-400">+</span>
                    <span>{isGerman ? 'Profitiert von IV-Rückgang nach Eröffnung' : 'Benefits from IV crush after entry'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-400">+</span>
                    <span>{isGerman ? 'Keine Richtungsentscheidung nötig' : 'No directional decision needed'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/30 rounded-2xl p-6 border border-red-700">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {isGerman ? 'Nachteile' : 'Disadvantages'}
                </h3>
                <ul className="space-y-3 text-red-100">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-400">-</span>
                    <span>{isGerman ? 'Begrenzter Gewinn vs. höherer möglicher Verlust' : 'Limited profit vs. larger potential loss'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-400">-</span>
                    <span>{isGerman ? '4 Legs = Höhere Kommissionen' : '4 legs = Higher commissions'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-400">-</span>
                    <span>{isGerman ? 'Komplexer zu verwalten als einfache Strategien' : 'More complex to manage than simple strategies'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-400">-</span>
                    <span>{isGerman ? 'Großer Verlust wenn Markt stark bewegt' : 'Large loss if market moves significantly'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-400">-</span>
                    <span>{isGerman ? 'Erfordert aktives Management' : 'Requires active management'}</span>
                  </li>
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
                  <svg className="w-5 h-5 text-violet-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {isGerman ? 'Bereit zum Üben?' : 'Ready to Practice?'}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {isGerman
                ? 'Nutzen Sie unsere Tools, um Iron Condors zu analysieren und zu planen.'
                : 'Use our tools to analyze and plan Iron Condors.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/tools`}
                className="bg-white text-violet-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Options-Rechner' : 'Options Calculator'}
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="bg-violet-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 transition-colors"
              >
                {isGerman ? 'Mehr Strategien' : 'More Strategies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
