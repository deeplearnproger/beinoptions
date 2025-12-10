import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isGerman = locale === 'de';

  return {
    title: isGerman ? 'Long Call & Long Put erklärt' : 'Long Call & Long Put Explained',
    description: isGerman
      ? 'Verstehen Sie Long Call und Long Put Optionen: Die grundlegenden spekulativen Strategien im Optionshandel mit Beispielen und Risikoprofilen.'
      : 'Understand Long Call and Long Put options: The basic speculative strategies in options trading with examples and risk profiles.',
    keywords: isGerman
      ? ['Long Call', 'Long Put', 'Optionen kaufen', 'Call Option', 'Put Option', 'Optionshandel']
      : ['Long Call', 'Long Put', 'Buying options', 'Call Option', 'Put Option', 'Options trading'],
    alternates: {
      canonical: `https://beinoptions.com/${locale}/long-call-put`,
      languages: {
        'de': 'https://beinoptions.com/de/long-call-put',
        'en': 'https://beinoptions.com/en/long-call-put',
      },
    },
  };
}

export default function LongCallPutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isGerman = locale === 'de';

  const content = {
    badge: isGerman ? 'Grundstrategie' : 'Basic Strategy',
    title: isGerman ? 'Long Call & Long Put' : 'Long Call & Long Put',
    subtitle: isGerman
      ? 'Die fundamentalen Optionsstrategien: Profitieren Sie von Kursbewegungen mit begrenztem Risiko.'
      : 'The fundamental options strategies: Profit from price movements with limited risk.',

    intro: {
      title: isGerman ? 'Optionen kaufen: Die Basics' : 'Buying Options: The Basics',
      content: isGerman
        ? 'Wenn Sie eine Option kaufen (Long Position), erwerben Sie das Recht, aber nicht die Pflicht, einen Basiswert zu einem festgelegten Preis zu handeln. Long Calls und Long Puts sind die einfachsten Optionsstrategien und der perfekte Einstieg in den Optionshandel.'
        : 'When you buy an option (Long position), you acquire the right, but not the obligation, to trade an underlying asset at a fixed price. Long Calls and Long Puts are the simplest options strategies and the perfect entry into options trading.',
    },

    longCall: {
      title: 'Long Call',
      badge: isGerman ? 'Bullisch' : 'Bullish',
      definition: isGerman
        ? 'Ein Long Call gibt Ihnen das Recht, den Basiswert zum Strike-Preis zu KAUFEN.'
        : 'A Long Call gives you the right to BUY the underlying asset at the strike price.',
      when: isGerman
        ? 'Verwenden Sie einen Long Call, wenn Sie erwarten, dass der Kurs des Basiswerts steigen wird.'
        : 'Use a Long Call when you expect the price of the underlying asset to rise.',
      maxProfit: isGerman ? 'Unbegrenzt (Kurs kann theoretisch unendlich steigen)' : 'Unlimited (price can theoretically rise infinitely)',
      maxLoss: isGerman ? 'Bezahlte Prämie' : 'Premium paid',
      breakeven: isGerman ? 'Strike + Prämie' : 'Strike + Premium',
      example: {
        title: isGerman ? 'Beispiel: Long Call auf Apple' : 'Example: Long Call on Apple',
        details: isGerman ? [
          { label: 'Aktueller Kurs', value: '175€' },
          { label: 'Strike-Preis', value: '180€' },
          { label: 'Bezahlte Prämie', value: '5€ (500€ total)' },
          { label: 'Break-Even', value: '185€' },
          { label: 'Laufzeit', value: '30 Tage' },
        ] : [
          { label: 'Current Price', value: '$175' },
          { label: 'Strike Price', value: '$180' },
          { label: 'Premium Paid', value: '$5 ($500 total)' },
          { label: 'Break-Even', value: '$185' },
          { label: 'Expiration', value: '30 days' },
        ],
        scenarios: isGerman ? [
          { price: '200€', profit: '+1.500€', calc: '(200-180-5) × 100', color: 'green' },
          { price: '185€', profit: '0€', calc: 'Break-Even', color: 'gray' },
          { price: '175€', profit: '-500€', calc: 'Option verfällt wertlos', color: 'red' },
        ] : [
          { price: '$200', profit: '+$1,500', calc: '(200-180-5) × 100', color: 'green' },
          { price: '$185', profit: '$0', calc: 'Break-Even', color: 'gray' },
          { price: '$175', profit: '-$500', calc: 'Option expires worthless', color: 'red' },
        ],
      },
    },

    longPut: {
      title: 'Long Put',
      badge: isGerman ? 'Bärisch' : 'Bearish',
      definition: isGerman
        ? 'Ein Long Put gibt Ihnen das Recht, den Basiswert zum Strike-Preis zu VERKAUFEN.'
        : 'A Long Put gives you the right to SELL the underlying asset at the strike price.',
      when: isGerman
        ? 'Verwenden Sie einen Long Put, wenn Sie erwarten, dass der Kurs des Basiswerts fallen wird.'
        : 'Use a Long Put when you expect the price of the underlying asset to fall.',
      maxProfit: isGerman ? 'Strike - Prämie (wenn Kurs auf 0 fällt)' : 'Strike - Premium (if price falls to 0)',
      maxLoss: isGerman ? 'Bezahlte Prämie' : 'Premium paid',
      breakeven: isGerman ? 'Strike - Prämie' : 'Strike - Premium',
      example: {
        title: isGerman ? 'Beispiel: Long Put auf Tesla' : 'Example: Long Put on Tesla',
        details: isGerman ? [
          { label: 'Aktueller Kurs', value: '250€' },
          { label: 'Strike-Preis', value: '240€' },
          { label: 'Bezahlte Prämie', value: '8€ (800€ total)' },
          { label: 'Break-Even', value: '232€' },
          { label: 'Laufzeit', value: '45 Tage' },
        ] : [
          { label: 'Current Price', value: '$250' },
          { label: 'Strike Price', value: '$240' },
          { label: 'Premium Paid', value: '$8 ($800 total)' },
          { label: 'Break-Even', value: '$232' },
          { label: 'Expiration', value: '45 days' },
        ],
        scenarios: isGerman ? [
          { price: '200€', profit: '+3.200€', calc: '(240-200-8) × 100', color: 'green' },
          { price: '232€', profit: '0€', calc: 'Break-Even', color: 'gray' },
          { price: '260€', profit: '-800€', calc: 'Option verfällt wertlos', color: 'red' },
        ] : [
          { price: '$200', profit: '+$3,200', calc: '(240-200-8) × 100', color: 'green' },
          { price: '$232', profit: '$0', calc: 'Break-Even', color: 'gray' },
          { price: '$260', profit: '-$800', calc: 'Option expires worthless', color: 'red' },
        ],
      },
    },

    comparison: {
      title: isGerman ? 'Long Call vs. Long Put im Vergleich' : 'Long Call vs. Long Put Comparison',
      headers: isGerman
        ? ['Merkmal', 'Long Call', 'Long Put']
        : ['Feature', 'Long Call', 'Long Put'],
      rows: isGerman ? [
        ['Markterwartung', 'Bullisch (steigend)', 'Bärisch (fallend)'],
        ['Recht', 'Kaufen zum Strike', 'Verkaufen zum Strike'],
        ['Max. Gewinn', 'Unbegrenzt', 'Strike - Prämie'],
        ['Max. Verlust', 'Bezahlte Prämie', 'Bezahlte Prämie'],
        ['Break-Even', 'Strike + Prämie', 'Strike - Prämie'],
        ['Delta', 'Positiv (0 bis +1)', 'Negativ (0 bis -1)'],
        ['Theta', 'Negativ (Zeitwertverlust)', 'Negativ (Zeitwertverlust)'],
      ] : [
        ['Market Outlook', 'Bullish (rising)', 'Bearish (falling)'],
        ['Right', 'Buy at strike', 'Sell at strike'],
        ['Max Profit', 'Unlimited', 'Strike - Premium'],
        ['Max Loss', 'Premium paid', 'Premium paid'],
        ['Break-Even', 'Strike + Premium', 'Strike - Premium'],
        ['Delta', 'Positive (0 to +1)', 'Negative (0 to -1)'],
        ['Theta', 'Negative (time decay)', 'Negative (time decay)'],
      ],
    },

    moneyness: {
      title: isGerman ? 'Moneyness verstehen' : 'Understanding Moneyness',
      description: isGerman
        ? 'Die Moneyness beschreibt das Verhältnis zwischen dem aktuellen Kurs und dem Strike-Preis.'
        : 'Moneyness describes the relationship between the current price and the strike price.',
      types: isGerman ? [
        {
          name: 'In-the-Money (ITM)',
          call: 'Aktienkurs > Strike',
          put: 'Aktienkurs < Strike',
          description: 'Option hat inneren Wert',
          color: 'green',
        },
        {
          name: 'At-the-Money (ATM)',
          call: 'Aktienkurs ≈ Strike',
          put: 'Aktienkurs ≈ Strike',
          description: 'Kurs nahe am Strike',
          color: 'yellow',
        },
        {
          name: 'Out-of-the-Money (OTM)',
          call: 'Aktienkurs < Strike',
          put: 'Aktienkurs > Strike',
          description: 'Option hat nur Zeitwert',
          color: 'red',
        },
      ] : [
        {
          name: 'In-the-Money (ITM)',
          call: 'Stock Price > Strike',
          put: 'Stock Price < Strike',
          description: 'Option has intrinsic value',
          color: 'green',
        },
        {
          name: 'At-the-Money (ATM)',
          call: 'Stock Price ≈ Strike',
          put: 'Stock Price ≈ Strike',
          description: 'Price near strike',
          color: 'yellow',
        },
        {
          name: 'Out-of-the-Money (OTM)',
          call: 'Stock Price < Strike',
          put: 'Stock Price > Strike',
          description: 'Option has only time value',
          color: 'red',
        },
      ],
    },

    greeks: {
      title: isGerman ? 'Wichtige Greeks für Long Optionen' : 'Important Greeks for Long Options',
      items: isGerman ? [
        {
          greek: 'Delta',
          effect: 'Misst die Preisänderung der Option pro 1€ Bewegung im Basiswert',
          tip: 'ITM Optionen haben höheres Delta, OTM niedrigeres',
        },
        {
          greek: 'Theta',
          effect: 'Zeitwertverlust pro Tag - arbeitet GEGEN Long Positionen',
          tip: 'Je näher am Verfall, desto schneller der Wertverlust',
        },
        {
          greek: 'Vega',
          effect: 'Sensitivität gegenüber Volatilitätsänderungen',
          tip: 'Steigende Volatilität erhöht den Wert Ihrer Long Option',
        },
        {
          greek: 'Gamma',
          effect: 'Änderungsrate von Delta',
          tip: 'ATM Optionen haben das höchste Gamma',
        },
      ] : [
        {
          greek: 'Delta',
          effect: 'Measures price change of option per $1 move in underlying',
          tip: 'ITM options have higher delta, OTM lower',
        },
        {
          greek: 'Theta',
          effect: 'Time decay per day - works AGAINST long positions',
          tip: 'Closer to expiration means faster decay',
        },
        {
          greek: 'Vega',
          effect: 'Sensitivity to volatility changes',
          tip: 'Rising volatility increases your long option value',
        },
        {
          greek: 'Gamma',
          effect: 'Rate of change of Delta',
          tip: 'ATM options have highest gamma',
        },
      ],
    },

    tips: {
      title: isGerman ? 'Tipps für Anfänger' : 'Tips for Beginners',
      items: isGerman ? [
        {
          title: 'Beginnen Sie klein',
          description: 'Handeln Sie zuerst mit 1-2 Kontrakten, bis Sie die Mechanik verstehen.',
        },
        {
          title: 'Verstehen Sie Ihre Risiken',
          description: 'Sie können 100% Ihrer investierten Prämie verlieren.',
        },
        {
          title: 'Wählen Sie die richtige Laufzeit',
          description: '30-60 Tage geben der Position Zeit, sich zu entwickeln.',
        },
        {
          title: 'Achten Sie auf die Liquidität',
          description: 'Handeln Sie nur Optionen mit engem Bid-Ask-Spread.',
        },
        {
          title: 'Haben Sie einen Exit-Plan',
          description: 'Legen Sie vorher fest, wann Sie Gewinne mitnehmen oder Verluste begrenzen.',
        },
        {
          title: 'Vermeiden Sie Earnings',
          description: 'Optionen vor Quartalszahlen sind oft überbewertet (IV-Crush).',
        },
      ] : [
        {
          title: 'Start small',
          description: 'Trade with 1-2 contracts first until you understand the mechanics.',
        },
        {
          title: 'Understand your risks',
          description: 'You can lose 100% of your invested premium.',
        },
        {
          title: 'Choose the right expiration',
          description: '30-60 days gives the position time to develop.',
        },
        {
          title: 'Watch for liquidity',
          description: 'Only trade options with tight bid-ask spreads.',
        },
        {
          title: 'Have an exit plan',
          description: 'Decide in advance when to take profits or cut losses.',
        },
        {
          title: 'Avoid earnings',
          description: 'Options before quarterly reports are often overpriced (IV crush).',
        },
      ],
    },

    whenToUse: {
      title: isGerman ? 'Wann Long Optionen verwenden?' : 'When to Use Long Options?',
      call: {
        title: 'Long Call',
        situations: isGerman ? [
          'Sie erwarten einen Kursanstieg',
          'Sie wollen von einer bullischen Marktbewegung profitieren',
          'Sie möchten mit Hebelwirkung investieren',
          'Sie wollen Ihr Risiko auf die Prämie begrenzen',
          'Als Alternative zum direkten Aktienkauf',
        ] : [
          'You expect a price increase',
          'You want to profit from bullish market movement',
          'You want to invest with leverage',
          'You want to limit your risk to the premium',
          'As an alternative to buying stock directly',
        ],
      },
      put: {
        title: 'Long Put',
        situations: isGerman ? [
          'Sie erwarten einen Kursrückgang',
          'Zur Absicherung eines Aktienportfolios',
          'Sie möchten von fallenden Kursen profitieren',
          'Als Alternative zum Leerverkauf (Short Selling)',
          'Bei erhöhter Unsicherheit oder Volatilität',
        ] : [
          'You expect a price decline',
          'To hedge a stock portfolio',
          'You want to profit from falling prices',
          'As an alternative to short selling',
          'During increased uncertainty or volatility',
        ],
      },
    },

    cta: {
      title: isGerman ? 'Bereit für den nächsten Schritt?' : 'Ready for the Next Step?',
      description: isGerman
        ? 'Lernen Sie fortgeschrittenere Strategien wie Cash-Secured Puts und Spreads kennen.'
        : 'Learn more advanced strategies like Cash-Secured Puts and Spreads.',
      strategies: isGerman ? 'Alle Strategien' : 'All Strategies',
      brokers: isGerman ? 'Broker finden' : 'Find Broker',
    },
  };

  const renderOptionSection = (option: typeof content.longCall, isCall: boolean) => (
    <section className="mb-16">
      <div className={`rounded-2xl overflow-hidden ${isCall ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
        <div className={`p-8 md:p-12 ${isCall ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-red-600 to-rose-600'} text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold">{option.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${isCall ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
              {option.badge}
            </span>
          </div>
          <p className="text-xl opacity-90">{option.definition}</p>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {isGerman ? 'Wann verwenden?' : 'When to use?'}
            </h3>
            <p className="text-gray-600">{option.when}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">{isGerman ? 'Max. Gewinn' : 'Max Profit'}</div>
              <div className="font-semibold text-green-600">{option.maxProfit}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">{isGerman ? 'Max. Verlust' : 'Max Loss'}</div>
              <div className="font-semibold text-red-600">{option.maxLoss}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Break-Even</div>
              <div className="font-semibold text-gray-900">{option.breakeven}</div>
            </div>
          </div>

          {/* Example */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-4">{option.example.title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {option.example.details.map((detail, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-500 mb-1">{detail.label}</div>
                  <div className="font-semibold text-gray-900">{detail.value}</div>
                </div>
              ))}
            </div>

            <h5 className="text-sm font-medium text-gray-700 mb-3">
              {isGerman ? 'Szenarien bei Verfall:' : 'Scenarios at Expiration:'}
            </h5>
            <div className="space-y-2">
              {option.example.scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    scenario.color === 'green' ? 'bg-green-50' :
                    scenario.color === 'red' ? 'bg-red-50' : 'bg-gray-50'
                  }`}
                >
                  <span className="text-gray-600">{isGerman ? 'Kurs bei' : 'Price at'} {scenario.price}</span>
                  <span className="text-sm text-gray-500">{scenario.calc}</span>
                  <span className={`font-bold ${
                    scenario.color === 'green' ? 'text-green-600' :
                    scenario.color === 'red' ? 'text-red-600' : 'text-gray-600'
                  }`}>{scenario.profit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="container-custom py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {content.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {content.title}
            </h1>

            <p className="text-xl text-indigo-100 max-w-2xl leading-relaxed">
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

        {/* Long Call Section */}
        {renderOptionSection(content.longCall, true)}

        {/* Long Put Section */}
        {renderOptionSection(content.longPut, false)}

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

        {/* Moneyness */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.moneyness.title}</h2>
          <p className="text-gray-600 mb-8">{content.moneyness.description}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {content.moneyness.types.map((type, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border ${
                  type.color === 'green' ? 'bg-green-50 border-green-200' :
                  type.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-red-50 border-red-200'
                }`}
              >
                <h3 className="font-bold text-gray-900 mb-3">{type.name}</h3>
                <div className="space-y-2 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium">Call:</span>
                    <span className="text-gray-600">{type.call}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-medium">Put:</span>
                    <span className="text-gray-600">{type.put}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Greeks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.greeks.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.greeks.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-indigo-600">{item.greek}</span>
                </div>
                <p className="text-gray-700 mb-2">{item.effect}</p>
                <p className="text-sm text-indigo-600 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.whenToUse.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {content.whenToUse.call.title}
              </h3>
              <ul className="space-y-2">
                {content.whenToUse.call.situations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {situation}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                </svg>
                {content.whenToUse.put.title}
              </h3>
              <ul className="space-y-2">
                {content.whenToUse.put.situations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {situation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.tips.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.tips.items.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold mb-4">
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
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/strategies`}
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                {content.cta.strategies}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/brokers`}
                className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-400 transition-colors"
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
