import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isGerman = locale === 'de';
  return {
    title: isGerman ? 'Risikomanagement für Optionshändler - Konkrete Regeln' : 'Risk Management for Options Traders - Concrete Rules',
    description: isGerman
      ? 'Professionelle Risikomanagement-Regeln für Optionshandel: Position Sizing, Kelly Criterion, Portfolio-Allokation und mehr.'
      : 'Professional risk management rules for options trading: Position sizing, Kelly Criterion, portfolio allocation and more.',
    keywords: isGerman
      ? ['Risikomanagement', 'Position Sizing', 'Kelly Criterion', 'Options Risiko', 'Portfolio Management']
      : ['Risk Management', 'Position Sizing', 'Kelly Criterion', 'Options Risk', 'Portfolio Management'],
  };
}

export default function RiskManagementPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const rules = [
    {
      number: 1,
      title: isGerman ? 'Die 1-2% Regel' : 'The 1-2% Rule',
      description: isGerman
        ? 'Riskieren Sie nie mehr als 1-2% Ihres Gesamtkapitals pro Trade.'
        : 'Never risk more than 1-2% of your total capital per trade.',
      example: isGerman
        ? 'Bei €50.000 Kapital: Max. Risiko pro Trade = €500-1.000'
        : 'With €50,000 capital: Max risk per trade = €500-1,000',
      formula: 'Max Risk = Portfolio × 0.01 (or 0.02)',
      color: 'emerald',
    },
    {
      number: 2,
      title: isGerman ? 'Die 5% Portfolio-Regel' : 'The 5% Portfolio Rule',
      description: isGerman
        ? 'Maximal 5% des Portfolios in einer einzelnen Position (Underlying).'
        : 'Maximum 5% of portfolio in a single position (underlying).',
      example: isGerman
        ? 'Bei €50.000: Max. €2.500 in AAPL-Optionen'
        : 'With €50,000: Max €2,500 in AAPL options',
      formula: 'Max Position = Portfolio × 0.05',
      color: 'blue',
    },
    {
      number: 3,
      title: isGerman ? 'Die 25% Cash-Regel' : 'The 25% Cash Rule',
      description: isGerman
        ? 'Halten Sie mindestens 25% des Portfolios als Cash-Reserve.'
        : 'Keep at least 25% of portfolio as cash reserve.',
      example: isGerman
        ? 'Bei €50.000: Mindestens €12.500 in Cash'
        : 'With €50,000: At least €12,500 in cash',
      formula: 'Min Cash = Portfolio × 0.25',
      color: 'violet',
    },
    {
      number: 4,
      title: isGerman ? 'Die 50% Gewinn-Regel' : 'The 50% Profit Rule',
      description: isGerman
        ? 'Schließen Sie Gewinner bei 50% des maximalen Gewinns.'
        : 'Close winners at 50% of maximum profit.',
      example: isGerman
        ? 'Credit von $2.00 erhalten → Schließen bei $1.00'
        : 'Received $2.00 credit → Close at $1.00',
      formula: 'Exit = Entry Credit × 0.50',
      color: 'amber',
    },
    {
      number: 5,
      title: isGerman ? 'Die 200% Verlust-Regel' : 'The 200% Loss Rule',
      description: isGerman
        ? 'Schließen Sie Verlierer bei 200% des erhaltenen Credits (für Credit Spreads).'
        : 'Close losers at 200% of received credit (for credit spreads).',
      example: isGerman
        ? 'Credit von $1.00 erhalten → Schließen bei -$2.00 Verlust'
        : 'Received $1.00 credit → Close at -$2.00 loss',
      formula: 'Stop Loss = Entry Credit × 2',
      color: 'red',
    },
    {
      number: 6,
      title: isGerman ? 'Die 45 DTE Regel' : 'The 45 DTE Rule',
      description: isGerman
        ? 'Eröffnen Sie Trades mit 30-45 Tagen bis zum Verfall (optimal für Theta).'
        : 'Open trades with 30-45 days to expiration (optimal for theta).',
      example: isGerman
        ? 'Heute ist 1. März → Verfall wählen: 15. April'
        : 'Today is March 1 → Select expiration: April 15',
      formula: 'DTE = 30-45 days',
      color: 'cyan',
    },
    {
      number: 7,
      title: isGerman ? 'Die 21 DTE Exit-Regel' : 'The 21 DTE Exit Rule',
      description: isGerman
        ? 'Schließen oder rollen Sie Positionen bei 21 DTE (Gamma-Risiko steigt).'
        : 'Close or roll positions at 21 DTE (gamma risk increases).',
      example: isGerman
        ? 'Position läuft noch → Schließen oder in nächsten Monat rollen'
        : 'Position still running → Close or roll to next month',
      formula: 'Exit/Roll at DTE ≤ 21',
      color: 'orange',
    },
    {
      number: 8,
      title: isGerman ? 'Die Delta-16 Regel' : 'The Delta-16 Rule',
      description: isGerman
        ? 'Verkaufen Sie Optionen mit Delta ~0.16 (1 Standardabweichung, ~84% Gewinnwahrscheinlichkeit).'
        : 'Sell options with delta ~0.16 (1 standard deviation, ~84% probability of profit).',
      example: isGerman
        ? 'SPY Put mit Delta -0.16 = ~84% Wahrscheinlichkeit OTM zu verfallen'
        : 'SPY Put with delta -0.16 = ~84% probability of expiring OTM',
      formula: 'Sell Strike at Δ ≈ 0.16',
      color: 'indigo',
    },
  ];

  const positionSizingMethods = [
    {
      name: isGerman ? 'Fester Prozentsatz' : 'Fixed Percentage',
      description: isGerman
        ? 'Einfachste Methode: Fester Prozentsatz des Portfolios pro Trade.'
        : 'Simplest method: Fixed percentage of portfolio per trade.',
      formula: 'Position = Portfolio × Risk%',
      example: '€50,000 × 2% = €1,000 max risk',
      pros: isGerman ? ['Einfach zu berechnen', 'Konsistent'] : ['Easy to calculate', 'Consistent'],
      cons: isGerman ? ['Ignoriert Gewinnwahrscheinlichkeit'] : ['Ignores win probability'],
    },
    {
      name: 'Kelly Criterion',
      description: isGerman
        ? 'Mathematisch optimale Positionsgröße basierend auf Edge und Gewinnwahrscheinlichkeit.'
        : 'Mathematically optimal position size based on edge and win probability.',
      formula: 'Kelly% = (W × B - L) / B',
      example: 'W=60%, B=1.5, L=40% → Kelly = (0.6×1.5-0.4)/1.5 = 33%',
      pros: isGerman ? ['Maximiert langfristiges Wachstum', 'Mathematisch fundiert'] : ['Maximizes long-term growth', 'Mathematically sound'],
      cons: isGerman ? ['Volatil', 'Oft zu aggressiv (Half-Kelly empfohlen)'] : ['Volatile', 'Often too aggressive (Half-Kelly recommended)'],
    },
    {
      name: isGerman ? 'Volatilitäts-basiert' : 'Volatility-Based',
      description: isGerman
        ? 'Positionsgröße angepasst an die Volatilität des Underlyings.'
        : 'Position size adjusted to underlying volatility.',
      formula: 'Position = (Portfolio × Risk%) / (ATR × Multiplier)',
      example: isGerman ? 'Höhere Vola = Kleinere Position' : 'Higher vol = Smaller position',
      pros: isGerman ? ['Berücksichtigt Marktbedingungen', 'Risiko-adjustiert'] : ['Considers market conditions', 'Risk-adjusted'],
      cons: isGerman ? ['Komplexer zu berechnen'] : ['More complex to calculate'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-rose-800 to-orange-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {isGerman ? 'Professionelles Trading' : 'Professional Trading'}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isGerman ? 'Risikomanagement' : 'Risk Management'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                {isGerman ? 'Konkrete Regeln für Erfolg' : 'Concrete Rules for Success'}
              </span>
            </h1>

            <p className="text-xl text-red-200 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Die wichtigsten Regeln, die professionelle Trader befolgen. Schützen Sie Ihr Kapital und maximieren Sie langfristige Gewinne.'
                : 'The most important rules professional traders follow. Protect your capital and maximize long-term profits.'}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-xl mx-auto">
              <div className="text-red-200 text-sm mb-2">{isGerman ? 'Die wichtigste Regel' : 'The Most Important Rule'}</div>
              <div className="text-2xl font-bold text-white">
                {isGerman
                  ? '"Überleben Sie, um einen weiteren Tag zu traden"'
                  : '"Survive to trade another day"'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Rules */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? '8 Goldene Regeln des Risikomanagements' : '8 Golden Rules of Risk Management'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Diese Regeln werden von professionellen Tradern weltweit befolgt. Memorieren Sie sie.'
                : 'These rules are followed by professional traders worldwide. Memorize them.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rules.map((rule) => (
                <div
                  key={rule.number}
                  className={`bg-gradient-to-br from-${rule.color}-50 to-${rule.color}-100/50 rounded-2xl p-6 border border-${rule.color}-200`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${rule.color}-500 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-xl">{rule.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{rule.title}</h3>
                      <p className="text-gray-600 mb-4">{rule.description}</p>

                      <div className="bg-white rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-500 uppercase">{isGerman ? 'Formel:' : 'Formula:'}</span>
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono">{rule.formula}</code>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-gray-500 uppercase">{isGerman ? 'Beispiel:' : 'Example:'}</span>
                          <span className="text-sm text-gray-700">{rule.example}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Position Sizing Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Position Sizing Schnellreferenz' : 'Position Sizing Quick Reference'}
            </h2>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">{isGerman ? 'Schnellrechner' : 'Quick Calculator'}</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-300">{isGerman ? 'Portfolio' : 'Portfolio'}</th>
                      <th className="text-center py-3 px-4 text-slate-300">1% Risk</th>
                      <th className="text-center py-3 px-4 text-slate-300">2% Risk</th>
                      <th className="text-center py-3 px-4 text-slate-300">5% Position</th>
                      <th className="text-center py-3 px-4 text-slate-300">25% Cash</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr>
                      <td className="py-3 px-4">€10,000</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€100</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€200</td>
                      <td className="text-center py-3 px-4 text-blue-400">€500</td>
                      <td className="text-center py-3 px-4 text-violet-400">€2,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">€25,000</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€250</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€500</td>
                      <td className="text-center py-3 px-4 text-blue-400">€1,250</td>
                      <td className="text-center py-3 px-4 text-violet-400">€6,250</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">€50,000</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€500</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€1,000</td>
                      <td className="text-center py-3 px-4 text-blue-400">€2,500</td>
                      <td className="text-center py-3 px-4 text-violet-400">€12,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">€100,000</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€1,000</td>
                      <td className="text-center py-3 px-4 text-emerald-400">€2,000</td>
                      <td className="text-center py-3 px-4 text-blue-400">€5,000</td>
                      <td className="text-center py-3 px-4 text-violet-400">€25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Position Sizing Methods */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {isGerman ? 'Position Sizing Methoden' : 'Position Sizing Methods'}
            </h3>

            <div className="space-y-6">
              {positionSizingMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{method.name}</h4>
                      <p className="text-gray-600 mt-1">{method.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase">{isGerman ? 'Formel:' : 'Formula:'}</span>
                        <code className="block text-sm bg-white px-3 py-2 rounded font-mono mt-1 border">{method.formula}</code>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase">{isGerman ? 'Beispiel:' : 'Example:'}</span>
                        <div className="text-sm text-gray-700 mt-1">{method.example}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium text-green-700 mb-2">{isGerman ? 'Vorteile' : 'Pros'}</div>
                      <ul className="space-y-1">
                        {method.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-red-700 mb-2">{isGerman ? 'Nachteile' : 'Cons'}</div>
                      <ul className="space-y-1">
                        {method.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Allocation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Optimale Portfolio-Allokation' : 'Optimal Portfolio Allocation'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Conservative */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  {isGerman ? 'Konservativ' : 'Conservative'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {isGerman ? 'Für Anfänger und kapitalerhaltende Trader' : 'For beginners and capital-preserving traders'}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cash Reserve</span>
                    <span className="font-bold text-blue-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{isGerman ? 'Aktien/ETFs' : 'Stocks/ETFs'}</span>
                    <span className="font-bold text-blue-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{isGerman ? 'Optionen' : 'Options'}</span>
                    <span className="font-bold text-blue-600">20%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{isGerman ? 'Max. Risiko/Trade:' : 'Max Risk/Trade:'}</span> 1%
                  </div>
                </div>
              </div>

              {/* Moderate */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  {isGerman ? 'Moderat' : 'Moderate'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {isGerman ? 'Für erfahrene Trader mit stabilem Einkommen' : 'For experienced traders with stable income'}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cash Reserve</span>
                    <span className="font-bold text-amber-600">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{isGerman ? 'Aktien/ETFs' : 'Stocks/ETFs'}</span>
                    <span className="font-bold text-amber-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{isGerman ? 'Optionen' : 'Options'}</span>
                    <span className="font-bold text-amber-600">35%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{isGerman ? 'Max. Risiko/Trade:' : 'Max Risk/Trade:'}</span> 2%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Greeks Risk */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Greeks-basiertes Risikomanagement' : 'Greeks-Based Risk Management'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">Δ Delta</div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Richtungsrisiko' : 'Directional Risk'}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isGerman
                    ? 'Wie stark ändert sich der Optionspreis bei $1 Bewegung?'
                    : 'How much does option price change per $1 move?'}
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-blue-700 mb-1">{isGerman ? 'Empfehlung' : 'Recommendation'}</div>
                  <div className="text-sm text-blue-900">
                    {isGerman ? 'Portfolio-Delta nahe 0 halten' : 'Keep portfolio delta near 0'}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">Γ Gamma</div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Delta-Änderungsrate' : 'Delta Change Rate'}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isGerman
                    ? 'Wie schnell ändert sich Delta? Steigt exponentiell nahe Verfall.'
                    : 'How fast does delta change? Increases exponentially near expiration.'}
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-purple-700 mb-1">{isGerman ? 'Empfehlung' : 'Recommendation'}</div>
                  <div className="text-sm text-purple-900">
                    {isGerman ? 'Positionen bei 21 DTE schließen' : 'Close positions at 21 DTE'}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Θ Theta</div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Zeitverfall' : 'Time Decay'}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isGerman
                    ? 'Wie viel verliert die Option pro Tag? Ihr Freund als Verkäufer.'
                    : 'How much does option lose per day? Your friend as a seller.'}
                </p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-emerald-700 mb-1">{isGerman ? 'Empfehlung' : 'Recommendation'}</div>
                  <div className="text-sm text-emerald-900">
                    {isGerman ? 'Positives Theta-Portfolio anstreben' : 'Aim for positive theta portfolio'}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">V Vega</div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Volatilitätsrisiko' : 'Volatility Risk'}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isGerman
                    ? 'Wie reagiert die Position auf IV-Änderungen?'
                    : 'How does position react to IV changes?'}
                </p>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-red-700 mb-1">{isGerman ? 'Empfehlung' : 'Recommendation'}</div>
                  <div className="text-sm text-red-900">
                    {isGerman ? 'Vor Events: Vega reduzieren' : 'Before events: Reduce vega'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-rose-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isGerman ? 'Pre-Trade Risiko-Checkliste' : 'Pre-Trade Risk Checklist'}
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Positionsgröße geprüft?' : 'Position size checked?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Max. 1-2% Risiko pro Trade' : 'Max 1-2% risk per trade'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Portfolio-Korrelation geprüft?' : 'Portfolio correlation checked?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Nicht zu viele ähnliche Positionen' : 'Not too many similar positions'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Events geprüft?' : 'Events checked?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Earnings, Fed, CPI, etc.' : 'Earnings, Fed, CPI, etc.'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'IV-Level geprüft?' : 'IV level checked?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'IV Rank/Percentile analysiert' : 'IV Rank/Percentile analyzed'}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Exit-Plan definiert?' : 'Exit plan defined?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Gewinnziel und Stop-Loss' : 'Profit target and stop-loss'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Max. Verlust akzeptabel?' : 'Max loss acceptable?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Können Sie den Verlust verkraften?' : 'Can you handle this loss?'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Liquidität geprüft?' : 'Liquidity checked?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Bid-Ask Spread eng genug?' : 'Bid-ask spread tight enough?'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">☐</span>
                    </div>
                    <div>
                      <div className="font-semibold">{isGerman ? 'Emotionaler Zustand?' : 'Emotional state?'}</div>
                      <div className="text-red-200 text-sm">{isGerman ? 'Ruhig und rational?' : 'Calm and rational?'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isGerman ? 'Setzen Sie die Regeln in die Praxis um' : 'Put the Rules into Practice'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Testen Sie Ihre Risikomanagement-Fähigkeiten risikofrei mit Paper Trading.'
                : 'Test your risk management skills risk-free with paper trading.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/paper-trading`}
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Paper Trading
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/trading-journal`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Trading Journal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/iv-guide`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                IV Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
