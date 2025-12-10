import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isGerman = locale === 'de';

  return {
    title: isGerman ? 'Options Spreads erklärt' : 'Options Spreads Explained',
    description: isGerman
      ? 'Lernen Sie Bull Spreads, Bear Spreads und andere Spread-Strategien: Reduzieren Sie Risiko und Kosten beim Optionshandel.'
      : 'Learn Bull Spreads, Bear Spreads and other spread strategies: Reduce risk and costs in options trading.',
    keywords: isGerman
      ? ['Options Spreads', 'Bull Call Spread', 'Bear Put Spread', 'Vertical Spread', 'Optionsstrategie']
      : ['Options Spreads', 'Bull Call Spread', 'Bear Put Spread', 'Vertical Spread', 'Options strategy'],
    alternates: {
      canonical: `https://beinoptions.com/${locale}/spreads-guide`,
      languages: {
        'de': 'https://beinoptions.com/de/spreads-guide',
        'en': 'https://beinoptions.com/en/spreads-guide',
      },
    },
  };
}

export default function SpreadsGuidePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isGerman = locale === 'de';

  const content = {
    badge: isGerman ? 'Fortgeschrittene Strategie' : 'Advanced Strategy',
    title: isGerman ? 'Options Spreads' : 'Options Spreads',
    subtitle: isGerman
      ? 'Kombinieren Sie Optionen für definiertes Risiko, reduzierte Kosten und präzise Marktprognosen.'
      : 'Combine options for defined risk, reduced costs, and precise market predictions.',

    intro: {
      title: isGerman ? 'Was sind Options Spreads?' : 'What are Options Spreads?',
      content: isGerman
        ? 'Ein Spread ist eine Optionsstrategie, bei der Sie gleichzeitig eine Option kaufen und eine andere verkaufen. Beide Optionen haben den gleichen Basiswert, unterscheiden sich aber im Strike-Preis und/oder Verfallsdatum. Spreads ermöglichen es, das Risiko zu begrenzen und die Kosten zu reduzieren.'
        : 'A spread is an options strategy where you simultaneously buy one option and sell another. Both options have the same underlying asset but differ in strike price and/or expiration date. Spreads allow you to limit risk and reduce costs.',
    },

    benefits: {
      title: isGerman ? 'Vorteile von Spreads' : 'Benefits of Spreads',
      items: isGerman ? [
        {
          title: 'Definiertes Risiko',
          description: 'Ihr maximaler Verlust ist von Anfang an bekannt und begrenzt.',
          icon: 'shield',
        },
        {
          title: 'Reduzierte Kosten',
          description: 'Der verkaufte Teil finanziert teilweise den gekauften Teil.',
          icon: 'money',
        },
        {
          title: 'Geringere Margin',
          description: 'Broker verlangen oft weniger Sicherheit für Spreads.',
          icon: 'chart',
        },
        {
          title: 'Flexibilität',
          description: 'Passen Sie Ihre Position an verschiedene Marktszenarien an.',
          icon: 'adjust',
        },
      ] : [
        {
          title: 'Defined Risk',
          description: 'Your maximum loss is known and limited from the start.',
          icon: 'shield',
        },
        {
          title: 'Reduced Costs',
          description: 'The sold part partially finances the bought part.',
          icon: 'money',
        },
        {
          title: 'Lower Margin',
          description: 'Brokers often require less collateral for spreads.',
          icon: 'chart',
        },
        {
          title: 'Flexibility',
          description: 'Adapt your position to various market scenarios.',
          icon: 'adjust',
        },
      ],
    },

    bullCallSpread: {
      title: 'Bull Call Spread',
      badge: isGerman ? 'Moderat bullisch' : 'Moderately bullish',
      description: isGerman
        ? 'Ein Bull Call Spread profitiert von einem moderaten Kursanstieg. Sie kaufen einen Call mit niedrigerem Strike und verkaufen einen Call mit höherem Strike.'
        : 'A Bull Call Spread profits from a moderate price increase. You buy a call with a lower strike and sell a call with a higher strike.',
      setup: isGerman ? [
        'Kaufe 1 Call mit Strike A (niedriger)',
        'Verkaufe 1 Call mit Strike B (höher)',
        'Gleiche Laufzeit, gleicher Basiswert',
      ] : [
        'Buy 1 Call with Strike A (lower)',
        'Sell 1 Call with Strike B (higher)',
        'Same expiration, same underlying',
      ],
      example: {
        title: isGerman ? 'Beispiel: Apple bei 175€' : 'Example: Apple at $175',
        legs: isGerman ? [
          { action: 'Kaufe', strike: '175€ Call', premium: '-5€' },
          { action: 'Verkaufe', strike: '185€ Call', premium: '+2€' },
        ] : [
          { action: 'Buy', strike: '$175 Call', premium: '-$5' },
          { action: 'Sell', strike: '$185 Call', premium: '+$2' },
        ],
        metrics: isGerman ? [
          { label: 'Nettokosten', value: '3€ (300€ total)' },
          { label: 'Max. Gewinn', value: '7€ (700€ total)' },
          { label: 'Max. Verlust', value: '3€ (300€ total)' },
          { label: 'Break-Even', value: '178€' },
        ] : [
          { label: 'Net Cost', value: '$3 ($300 total)' },
          { label: 'Max Profit', value: '$7 ($700 total)' },
          { label: 'Max Loss', value: '$3 ($300 total)' },
          { label: 'Break-Even', value: '$178' },
        ],
      },
      scenarios: isGerman ? [
        { condition: 'Kurs > 185€', result: 'Max. Gewinn: 700€', color: 'green' },
        { condition: 'Kurs = 178€', result: 'Break-Even: 0€', color: 'gray' },
        { condition: 'Kurs < 175€', result: 'Max. Verlust: -300€', color: 'red' },
      ] : [
        { condition: 'Price > $185', result: 'Max Profit: $700', color: 'green' },
        { condition: 'Price = $178', result: 'Break-Even: $0', color: 'gray' },
        { condition: 'Price < $175', result: 'Max Loss: -$300', color: 'red' },
      ],
    },

    bearPutSpread: {
      title: 'Bear Put Spread',
      badge: isGerman ? 'Moderat bärisch' : 'Moderately bearish',
      description: isGerman
        ? 'Ein Bear Put Spread profitiert von einem moderaten Kursrückgang. Sie kaufen einen Put mit höherem Strike und verkaufen einen Put mit niedrigerem Strike.'
        : 'A Bear Put Spread profits from a moderate price decline. You buy a put with a higher strike and sell a put with a lower strike.',
      setup: isGerman ? [
        'Kaufe 1 Put mit Strike A (höher)',
        'Verkaufe 1 Put mit Strike B (niedriger)',
        'Gleiche Laufzeit, gleicher Basiswert',
      ] : [
        'Buy 1 Put with Strike A (higher)',
        'Sell 1 Put with Strike B (lower)',
        'Same expiration, same underlying',
      ],
      example: {
        title: isGerman ? 'Beispiel: Tesla bei 250€' : 'Example: Tesla at $250',
        legs: isGerman ? [
          { action: 'Kaufe', strike: '250€ Put', premium: '-8€' },
          { action: 'Verkaufe', strike: '240€ Put', premium: '+4€' },
        ] : [
          { action: 'Buy', strike: '$250 Put', premium: '-$8' },
          { action: 'Sell', strike: '$240 Put', premium: '+$4' },
        ],
        metrics: isGerman ? [
          { label: 'Nettokosten', value: '4€ (400€ total)' },
          { label: 'Max. Gewinn', value: '6€ (600€ total)' },
          { label: 'Max. Verlust', value: '4€ (400€ total)' },
          { label: 'Break-Even', value: '246€' },
        ] : [
          { label: 'Net Cost', value: '$4 ($400 total)' },
          { label: 'Max Profit', value: '$6 ($600 total)' },
          { label: 'Max Loss', value: '$4 ($400 total)' },
          { label: 'Break-Even', value: '$246' },
        ],
      },
      scenarios: isGerman ? [
        { condition: 'Kurs < 240€', result: 'Max. Gewinn: 600€', color: 'green' },
        { condition: 'Kurs = 246€', result: 'Break-Even: 0€', color: 'gray' },
        { condition: 'Kurs > 250€', result: 'Max. Verlust: -400€', color: 'red' },
      ] : [
        { condition: 'Price < $240', result: 'Max Profit: $600', color: 'green' },
        { condition: 'Price = $246', result: 'Break-Even: $0', color: 'gray' },
        { condition: 'Price > $250', result: 'Max Loss: -$400', color: 'red' },
      ],
    },

    creditSpreads: {
      title: isGerman ? 'Credit Spreads' : 'Credit Spreads',
      description: isGerman
        ? 'Bei Credit Spreads erhalten Sie eine Nettoprämie beim Eröffnen der Position. Sie profitieren, wenn die Optionen wertlos verfallen.'
        : 'With Credit Spreads, you receive a net premium when opening the position. You profit when the options expire worthless.',
      types: isGerman ? [
        {
          name: 'Bull Put Spread',
          outlook: 'Neutral bis bullisch',
          setup: 'Verkaufe Put (höherer Strike) + Kaufe Put (niedrigerer Strike)',
          profit: 'Kurs bleibt über dem verkauften Strike',
        },
        {
          name: 'Bear Call Spread',
          outlook: 'Neutral bis bärisch',
          setup: 'Verkaufe Call (niedrigerer Strike) + Kaufe Call (höherer Strike)',
          profit: 'Kurs bleibt unter dem verkauften Strike',
        },
      ] : [
        {
          name: 'Bull Put Spread',
          outlook: 'Neutral to bullish',
          setup: 'Sell Put (higher strike) + Buy Put (lower strike)',
          profit: 'Price stays above sold strike',
        },
        {
          name: 'Bear Call Spread',
          outlook: 'Neutral to bearish',
          setup: 'Sell Call (lower strike) + Buy Call (higher strike)',
          profit: 'Price stays below sold strike',
        },
      ],
    },

    comparison: {
      title: isGerman ? 'Debit vs. Credit Spreads' : 'Debit vs. Credit Spreads',
      headers: isGerman
        ? ['Aspekt', 'Debit Spread', 'Credit Spread']
        : ['Aspect', 'Debit Spread', 'Credit Spread'],
      rows: isGerman ? [
        ['Kosten beim Eröffnen', 'Sie zahlen Prämie', 'Sie erhalten Prämie'],
        ['Gewinn', 'Wenn Optionen an Wert gewinnen', 'Wenn Optionen wertlos verfallen'],
        ['Zeitwert (Theta)', 'Arbeitet gegen Sie', 'Arbeitet für Sie'],
        ['Beispiele', 'Bull Call, Bear Put', 'Bull Put, Bear Call'],
        ['Markterwartung', 'Direktionale Bewegung', 'Bewegung vermeiden'],
      ] : [
        ['Cost to Open', 'You pay premium', 'You receive premium'],
        ['Profit', 'When options gain value', 'When options expire worthless'],
        ['Time Value (Theta)', 'Works against you', 'Works for you'],
        ['Examples', 'Bull Call, Bear Put', 'Bull Put, Bear Call'],
        ['Market Expectation', 'Directional movement', 'Avoid movement'],
      ],
    },

    spreadTypes: {
      title: isGerman ? 'Arten von Spreads' : 'Types of Spreads',
      items: isGerman ? [
        {
          name: 'Vertical Spread',
          description: 'Gleiche Laufzeit, unterschiedliche Strikes',
          example: 'Bull Call Spread, Bear Put Spread',
        },
        {
          name: 'Horizontal (Calendar) Spread',
          description: 'Gleicher Strike, unterschiedliche Laufzeiten',
          example: 'Verkaufe kurzfristige, kaufe langfristige Option',
        },
        {
          name: 'Diagonal Spread',
          description: 'Unterschiedliche Strikes UND Laufzeiten',
          example: 'Kombination aus Vertical und Calendar',
        },
      ] : [
        {
          name: 'Vertical Spread',
          description: 'Same expiration, different strikes',
          example: 'Bull Call Spread, Bear Put Spread',
        },
        {
          name: 'Horizontal (Calendar) Spread',
          description: 'Same strike, different expirations',
          example: 'Sell short-term, buy long-term option',
        },
        {
          name: 'Diagonal Spread',
          description: 'Different strikes AND expirations',
          example: 'Combination of Vertical and Calendar',
        },
      ],
    },

    tips: {
      title: isGerman ? 'Tipps für Spread-Trading' : 'Tips for Spread Trading',
      items: isGerman ? [
        {
          title: 'Liquidität prüfen',
          description: 'Stellen Sie sicher, dass beide Legs ausreichend Volumen haben.',
        },
        {
          title: 'Spread-Orders verwenden',
          description: 'Handeln Sie den gesamten Spread als eine Order, nicht einzelne Legs.',
        },
        {
          title: 'Strike-Abstände beachten',
          description: 'Größere Abstände = mehr Gewinnpotenzial, aber höheres Risiko.',
        },
        {
          title: 'Laufzeit wählen',
          description: '30-45 Tage bieten oft das beste Risiko-Rendite-Verhältnis.',
        },
        {
          title: 'Gewinnziel setzen',
          description: 'Schließen Sie bei 50-75% des maximalen Gewinns, um Risiko zu reduzieren.',
        },
        {
          title: 'Verluste begrenzen',
          description: 'Setzen Sie einen Stop-Loss bei z.B. dem 1,5-fachen der Prämie.',
        },
      ] : [
        {
          title: 'Check liquidity',
          description: 'Ensure both legs have sufficient volume.',
        },
        {
          title: 'Use spread orders',
          description: 'Trade the entire spread as one order, not individual legs.',
        },
        {
          title: 'Consider strike width',
          description: 'Wider spreads = more profit potential, but higher risk.',
        },
        {
          title: 'Choose expiration',
          description: '30-45 days often offers the best risk-reward ratio.',
        },
        {
          title: 'Set profit target',
          description: 'Close at 50-75% of max profit to reduce risk.',
        },
        {
          title: 'Limit losses',
          description: 'Set a stop-loss at e.g., 1.5x the premium.',
        },
      ],
    },

    calculations: {
      title: isGerman ? 'Wichtige Berechnungen' : 'Important Calculations',
      formulas: isGerman ? [
        {
          name: 'Max. Gewinn (Debit Spread)',
          formula: '(Höherer Strike - Niedrigerer Strike) - Nettoprämie',
        },
        {
          name: 'Max. Verlust (Debit Spread)',
          formula: 'Bezahlte Nettoprämie',
        },
        {
          name: 'Break-Even (Bull Call)',
          formula: 'Niedrigerer Strike + Nettoprämie',
        },
        {
          name: 'Break-Even (Bear Put)',
          formula: 'Höherer Strike - Nettoprämie',
        },
        {
          name: 'Risiko/Rendite-Verhältnis',
          formula: 'Max. Verlust / Max. Gewinn',
        },
      ] : [
        {
          name: 'Max Profit (Debit Spread)',
          formula: '(Higher Strike - Lower Strike) - Net Premium',
        },
        {
          name: 'Max Loss (Debit Spread)',
          formula: 'Net Premium Paid',
        },
        {
          name: 'Break-Even (Bull Call)',
          formula: 'Lower Strike + Net Premium',
        },
        {
          name: 'Break-Even (Bear Put)',
          formula: 'Higher Strike - Net Premium',
        },
        {
          name: 'Risk/Reward Ratio',
          formula: 'Max Loss / Max Profit',
        },
      ],
    },

    cta: {
      title: isGerman ? 'Bereit für Spreads?' : 'Ready for Spreads?',
      description: isGerman
        ? 'Lernen Sie weitere fortgeschrittene Strategien oder finden Sie den passenden Broker.'
        : 'Learn more advanced strategies or find the right broker.',
      strategies: isGerman ? 'Alle Strategien' : 'All Strategies',
      brokers: isGerman ? 'Broker finden' : 'Find Broker',
    },
  };

  const renderSpreadSection = (spread: typeof content.bullCallSpread, isBullish: boolean) => (
    <section className="mb-16">
      <div className={`rounded-2xl overflow-hidden border ${isBullish ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
        <div className={`p-8 md:p-10 ${isBullish ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-red-600 to-rose-600'} text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">{spread.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${isBullish ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
              {spread.badge}
            </span>
          </div>
          <p className="text-lg opacity-90">{spread.description}</p>
        </div>

        <div className="p-8 md:p-10">
          {/* Setup */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {isGerman ? 'Setup:' : 'Setup:'}
            </h3>
            <ul className="space-y-2">
              {spread.setup.map((step, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${isBullish ? 'bg-green-500' : 'bg-red-500'}`}>
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">{spread.example.title}</h4>

            {/* Legs */}
            <div className="space-y-2 mb-6">
              {spread.example.legs.map((leg, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">{leg.action} {leg.strike}</span>
                  <span className={`font-semibold ${leg.premium.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                    {leg.premium}
                  </span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {spread.example.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                  <div className="font-semibold text-gray-900">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scenarios */}
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            {isGerman ? 'Szenarien bei Verfall:' : 'Scenarios at Expiration:'}
          </h4>
          <div className="space-y-2">
            {spread.scenarios.map((scenario, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  scenario.color === 'green' ? 'bg-green-100' :
                  scenario.color === 'red' ? 'bg-red-100' : 'bg-gray-100'
                }`}
              >
                <span className="text-gray-700">{scenario.condition}</span>
                <span className={`font-bold ${
                  scenario.color === 'green' ? 'text-green-600' :
                  scenario.color === 'red' ? 'text-red-600' : 'text-gray-600'
                }`}>{scenario.result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="container-custom py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {content.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {content.title}
              <span className="block text-orange-400 mt-2">{isGerman ? 'Leitfaden' : 'Guide'}</span>
            </h1>

            <p className="text-xl text-orange-100 max-w-2xl leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Intro */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.intro.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{content.intro.content}</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.benefits.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  {item.icon === 'shield' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {item.icon === 'money' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {item.icon === 'chart' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {item.icon === 'adjust' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bull Call Spread */}
        {renderSpreadSection(content.bullCallSpread, true)}

        {/* Bear Put Spread */}
        {renderSpreadSection(content.bearPutSpread, false)}

        {/* Credit Spreads */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{content.creditSpreads.title}</h2>
            <p className="text-slate-300 mb-8">{content.creditSpreads.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {content.creditSpreads.types.map((type, index) => (
                <div key={index} className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{type.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-slate-400">{isGerman ? 'Markterwartung:' : 'Outlook:'}</span> <span className="text-white">{type.outlook}</span></p>
                    <p><span className="text-slate-400">Setup:</span> <span className="text-white">{type.setup}</span></p>
                    <p><span className="text-slate-400">{isGerman ? 'Gewinn wenn:' : 'Profit when:'}</span> <span className="text-green-400">{type.profit}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.comparison.title}</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    {content.comparison.headers.map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {content.comparison.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-6 py-4 text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Spread Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.spreadTypes.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.spreadTypes.items.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <p className="text-sm text-orange-600">
                  <span className="font-medium">{isGerman ? 'Beispiel:' : 'Example:'}</span> {type.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Calculations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.calculations.title}</h2>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
            <div className="grid md:grid-cols-2 gap-4">
              {content.calculations.formulas.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">{item.name}</div>
                  <div className="font-mono text-gray-900 font-medium">{item.formula}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.tips.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.tips.items.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/strategies`}
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                {content.cta.strategies}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/brokers`}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-400 transition-colors"
              >
                {content.cta.brokers}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
