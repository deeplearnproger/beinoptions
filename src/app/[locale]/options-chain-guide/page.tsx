import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Optionskette lesen - Option Chain Guide | 2025'
      : 'How to Read Options Chain - Complete Guide | 2025',
    description: locale === 'de'
      ? 'Lernen Sie die Optionskette zu lesen: Bid/Ask, Open Interest, Volumen, Greeks und mehr. Schritt-für-Schritt Anleitung für Anfänger.'
      : 'Learn to read options chains: Bid/Ask, Open Interest, Volume, Greeks and more. Step-by-step guide for beginners.',
    keywords: locale === 'de'
      ? ['Optionskette', 'Option Chain', 'Bid Ask Spread', 'Open Interest', 'Volumen', 'Greeks', 'Optionen handeln']
      : ['options chain', 'option chain', 'bid ask spread', 'open interest', 'volume', 'greeks', 'options trading'],
  });
}

export default function OptionsChainGuidePage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const columns = [
    {
      name: 'Strike',
      description: isGerman
        ? 'Der Ausübungspreis. Der Preis, zu dem Sie die Aktie kaufen (Call) oder verkaufen (Put) können.'
        : 'The exercise price. The price at which you can buy (call) or sell (put) the stock.',
      example: '€100',
      tip: isGerman
        ? 'Strikes nahe am aktuellen Kurs (ATM) haben die höchste Liquidität.'
        : 'Strikes near current price (ATM) have highest liquidity.',
    },
    {
      name: 'Bid',
      description: isGerman
        ? 'Der höchste Preis, den jemand bereit ist zu ZAHLEN. Sie verkaufen zum Bid.'
        : 'The highest price someone is willing to PAY. You sell at the bid.',
      example: '€2.50',
      tip: isGerman
        ? 'Beim Verkauf ist dies Ihr tatsächlicher Erlös.'
        : 'When selling, this is your actual proceeds.',
    },
    {
      name: 'Ask',
      description: isGerman
        ? 'Der niedrigste Preis, zu dem jemand bereit ist zu VERKAUFEN. Sie kaufen zum Ask.'
        : 'The lowest price someone is willing to SELL. You buy at the ask.',
      example: '€2.70',
      tip: isGerman
        ? 'Beim Kauf ist dies Ihr tatsächlicher Preis.'
        : 'When buying, this is your actual price.',
    },
    {
      name: isGerman ? 'Bid-Ask Spread' : 'Bid-Ask Spread',
      description: isGerman
        ? 'Die Differenz zwischen Bid und Ask. Je enger, desto besser die Liquidität.'
        : 'The difference between bid and ask. Tighter spread = better liquidity.',
      example: '€0.20 (€2.70 - €2.50)',
      tip: isGerman
        ? 'Spread > €0.30 = geringe Liquidität. Vorsicht beim Handeln!'
        : 'Spread > €0.30 = low liquidity. Be careful when trading!',
    },
    {
      name: 'Last',
      description: isGerman
        ? 'Der letzte gehandelte Preis. Kann veraltet sein bei wenig Volumen.'
        : 'The last traded price. Can be stale with low volume.',
      example: '€2.55',
      tip: isGerman
        ? 'Nutzen Sie Bid/Ask für aktuelle Preise, nicht Last.'
        : 'Use Bid/Ask for current prices, not Last.',
    },
    {
      name: 'Volume',
      description: isGerman
        ? 'Anzahl der heute gehandelten Kontrakte. Zeigt aktuelle Aktivität.'
        : 'Number of contracts traded today. Shows current activity.',
      example: '1,234',
      tip: isGerman
        ? 'Hohes Volumen = gute Liquidität für diesen Strike heute.'
        : 'High volume = good liquidity for this strike today.',
    },
    {
      name: 'Open Interest (OI)',
      description: isGerman
        ? 'Anzahl der offenen Kontrakte. Zeigt wie viele Positionen existieren.'
        : 'Number of open contracts. Shows how many positions exist.',
      example: '5,678',
      tip: isGerman
        ? 'Hohes OI = etablierte Liquidität. Wichtiger als Volumen!'
        : 'High OI = established liquidity. More important than volume!',
    },
    {
      name: 'IV (Implizite Volatilität)',
      description: isGerman
        ? 'Die vom Markt erwartete Schwankung. Hohe IV = teure Optionen.'
        : 'Market-expected volatility. High IV = expensive options.',
      example: '35%',
      tip: isGerman
        ? 'Vergleichen Sie IV mit historischer Volatilität für Kaufentscheidungen.'
        : 'Compare IV to historical volatility for trading decisions.',
    },
  ];

  const greeks = [
    {
      name: 'Delta (Δ)',
      description: isGerman
        ? 'Preisänderung der Option pro €1 Aktienbewegung.'
        : 'Option price change per €1 stock movement.',
      range: '0 bis ±1.00',
      example: isGerman
        ? 'Delta 0.50 = Option steigt €0.50 wenn Aktie €1 steigt'
        : 'Delta 0.50 = Option rises €0.50 when stock rises €1',
      color: 'blue',
    },
    {
      name: 'Gamma (Γ)',
      description: isGerman
        ? 'Wie schnell sich Delta ändert. Höchstes ATM.'
        : 'How fast Delta changes. Highest ATM.',
      range: '0 bis ~0.10',
      example: isGerman
        ? 'Gamma 0.05 = Delta ändert sich um 0.05 pro €1 Bewegung'
        : 'Gamma 0.05 = Delta changes by 0.05 per €1 movement',
      color: 'green',
    },
    {
      name: 'Theta (Θ)',
      description: isGerman
        ? 'Täglicher Zeitwertverfall. Negativ für Long-Positionen.'
        : 'Daily time decay. Negative for long positions.',
      range: '-€0.01 bis -€0.50',
      example: isGerman
        ? 'Theta -0.05 = Option verliert €5 pro Tag (×100)'
        : 'Theta -0.05 = Option loses €5 per day (×100)',
      color: 'red',
    },
    {
      name: 'Vega (ν)',
      description: isGerman
        ? 'Preisänderung pro 1% IV-Änderung.'
        : 'Price change per 1% IV change.',
      range: '€0.01 bis €0.30',
      example: isGerman
        ? 'Vega 0.10 = Option steigt €10 wenn IV um 1% steigt'
        : 'Vega 0.10 = Option rises €10 when IV rises 1%',
      color: 'purple',
    },
  ];

  const moneyness = [
    {
      type: 'ITM',
      fullName: isGerman ? 'Im Geld (In The Money)' : 'In The Money',
      callCondition: isGerman ? 'Strike < Aktienkurs' : 'Strike < Stock Price',
      putCondition: isGerman ? 'Strike > Aktienkurs' : 'Strike > Stock Price',
      delta: isGerman ? 'Call: 0.50-1.00 | Put: -0.50 bis -1.00' : 'Call: 0.50-1.00 | Put: -0.50 to -1.00',
      characteristics: isGerman
        ? 'Hat inneren Wert. Teurer, aber höhere Gewinnwahrscheinlichkeit.'
        : 'Has intrinsic value. More expensive but higher probability of profit.',
      color: 'green',
    },
    {
      type: 'ATM',
      fullName: isGerman ? 'Am Geld (At The Money)' : 'At The Money',
      callCondition: isGerman ? 'Strike ≈ Aktienkurs' : 'Strike ≈ Stock Price',
      putCondition: isGerman ? 'Strike ≈ Aktienkurs' : 'Strike ≈ Stock Price',
      delta: isGerman ? 'Call: ~0.50 | Put: ~-0.50' : 'Call: ~0.50 | Put: ~-0.50',
      characteristics: isGerman
        ? 'Höchster Zeitwert und Gamma. Beste Liquidität.'
        : 'Highest time value and Gamma. Best liquidity.',
      color: 'blue',
    },
    {
      type: 'OTM',
      fullName: isGerman ? 'Aus dem Geld (Out of The Money)' : 'Out of The Money',
      callCondition: isGerman ? 'Strike > Aktienkurs' : 'Strike > Stock Price',
      putCondition: isGerman ? 'Strike < Aktienkurs' : 'Strike < Stock Price',
      delta: isGerman ? 'Call: 0.00-0.50 | Put: 0.00 bis -0.50' : 'Call: 0.00-0.50 | Put: 0.00 to -0.50',
      characteristics: isGerman
        ? 'Nur Zeitwert. Günstiger, aber geringere Gewinnwahrscheinlichkeit.'
        : 'Only time value. Cheaper but lower probability of profit.',
      color: 'orange',
    },
  ];

  const faqs = [
    {
      question: isGerman
        ? 'Welchen Strike soll ich wählen?'
        : 'Which strike should I choose?',
      answer: isGerman
        ? 'Es kommt auf Ihre Strategie an: ATM für maximale Hebelwirkung und Liquidität. Leicht OTM für günstigere Einstiege mit gutem Risk/Reward. ITM für konservativere Trades mit höherer Gewinnwahrscheinlichkeit. Achten Sie immer auf Open Interest > 100 und enge Spreads.'
        : 'It depends on your strategy: ATM for maximum leverage and liquidity. Slightly OTM for cheaper entries with good risk/reward. ITM for more conservative trades with higher probability of profit. Always look for Open Interest > 100 and tight spreads.',
    },
    {
      question: isGerman
        ? 'Was bedeutet ein weiter Bid-Ask Spread?'
        : 'What does a wide bid-ask spread mean?',
      answer: isGerman
        ? 'Ein weiter Spread (> €0.30 oder > 10% des Optionspreises) bedeutet geringe Liquidität. Sie verlieren sofort Geld beim Ein- und Ausstieg. Vermeiden Sie solche Optionen oder nutzen Sie Limit Orders zum Mittelkurs.'
        : 'A wide spread (> €0.30 or > 10% of option price) means low liquidity. You lose money immediately on entry and exit. Avoid such options or use limit orders at mid-price.',
    },
    {
      question: isGerman
        ? 'Wie nutze ich Open Interest für meine Entscheidung?'
        : 'How do I use Open Interest for my decision?',
      answer: isGerman
        ? 'OI > 1000: Sehr gute Liquidität. OI 100-1000: Akzeptabel. OI < 100: Vorsicht, schwer zu handeln. Hoher OI bei bestimmten Strikes kann auch institutionelle Aktivität anzeigen und als Support/Resistance fungieren.'
        : 'OI > 1000: Very good liquidity. OI 100-1000: Acceptable. OI < 100: Caution, hard to trade. High OI at certain strikes can also indicate institutional activity and act as support/resistance.',
    },
    {
      question: isGerman
        ? 'Welche Spalten sind am wichtigsten?'
        : 'Which columns are most important?',
      answer: isGerman
        ? 'Für Anfänger: 1) Strike (Position wählen), 2) Bid/Ask (realer Preis), 3) Open Interest (Liquidität). Für Fortgeschrittene zusätzlich: Delta (Richtungsrisiko), IV (Über-/Unterbewertung), Theta (Zeitverfall).'
        : 'For beginners: 1) Strike (choose position), 2) Bid/Ask (real price), 3) Open Interest (liquidity). For advanced traders add: Delta (directional risk), IV (over/undervaluation), Theta (time decay).',
    },
    {
      question: isGerman
        ? 'Was bedeuten die farbigen Zeilen?'
        : 'What do the colored rows mean?',
      answer: isGerman
        ? 'Die meisten Plattformen markieren ITM-Optionen farbig (oft gelb oder grau). Der aktuelle Aktienkurs wird meist durch eine Linie oder Hervorhebung gekennzeichnet. ATM-Optionen sind die direkt über/unter dieser Linie.'
        : 'Most platforms highlight ITM options with color (often yellow or gray). The current stock price is usually marked by a line or highlight. ATM options are directly above/below this line.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? 'Optionskette lesen - Vollständiger Guide' : 'How to Read Options Chain - Complete Guide'}
        description={isGerman
          ? 'Lernen Sie die Optionskette zu verstehen.'
          : 'Learn to understand the options chain.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/options-chain-guide`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Lernen' : 'Learn', url: `https://beinoptions.com/${locale}/basics` },
          { name: 'Options Chain', url: `https://beinoptions.com/${locale}/options-chain-guide` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              {isGerman ? 'Grundlagen' : 'Fundamentals'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isGerman
                ? 'Optionskette lesen lernen'
                : 'How to Read an Options Chain'}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              {isGerman
                ? 'Die Optionskette enthält alle Informationen, die Sie für intelligente Trading-Entscheidungen brauchen. Lernen Sie jede Spalte zu verstehen.'
                : 'The options chain contains all the information you need for smart trading decisions. Learn to understand every column.'}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Example */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Beispiel einer Optionskette' : 'Example Options Chain'}
          </h2>

          {/* Mock Options Chain Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-12">
            <div className="bg-gray-900 text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">AAPL</span>
                  <span className="text-gray-400 ml-3">Apple Inc.</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">€175.50</span>
                  <span className="text-green-400 ml-2">+1.25 (+0.72%)</span>
                </div>
              </div>
              <div className="text-sm text-gray-400 mt-2">
                {isGerman ? 'Verfall: 15. März 2025 (45 Tage)' : 'Expiration: March 15, 2025 (45 days)'}
              </div>
            </div>

            {/* Calls Header */}
            <div className="grid grid-cols-12 bg-green-600 text-white text-sm font-semibold">
              <div className="col-span-5 px-4 py-2 text-center">CALLS</div>
              <div className="col-span-2 px-4 py-2 text-center bg-gray-800">STRIKE</div>
              <div className="col-span-5 px-4 py-2 text-center">PUTS</div>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-12 bg-gray-100 text-xs font-semibold text-gray-600 border-b">
              <div className="px-2 py-2 text-center">OI</div>
              <div className="px-2 py-2 text-center">Vol</div>
              <div className="px-2 py-2 text-center">Bid</div>
              <div className="px-2 py-2 text-center">Ask</div>
              <div className="px-2 py-2 text-center">Δ</div>
              <div className="col-span-2 px-4 py-2 text-center bg-gray-200">Strike</div>
              <div className="px-2 py-2 text-center">Δ</div>
              <div className="px-2 py-2 text-center">Bid</div>
              <div className="px-2 py-2 text-center">Ask</div>
              <div className="px-2 py-2 text-center">Vol</div>
              <div className="px-2 py-2 text-center">OI</div>
            </div>

            {/* ITM Row */}
            <div className="grid grid-cols-12 text-sm border-b bg-green-50 hover:bg-green-100 transition-colors">
              <div className="px-2 py-3 text-center text-gray-600">2,450</div>
              <div className="px-2 py-3 text-center text-gray-600">156</div>
              <div className="px-2 py-3 text-center font-medium">8.50</div>
              <div className="px-2 py-3 text-center font-medium">8.70</div>
              <div className="px-2 py-3 text-center text-blue-600 font-medium">0.75</div>
              <div className="col-span-2 px-4 py-3 text-center font-bold bg-gray-200">€170</div>
              <div className="px-2 py-3 text-center text-blue-600 font-medium">-0.25</div>
              <div className="px-2 py-3 text-center font-medium">2.80</div>
              <div className="px-2 py-3 text-center font-medium">3.00</div>
              <div className="px-2 py-3 text-center text-gray-600">89</div>
              <div className="px-2 py-3 text-center text-gray-600">1,890</div>
            </div>

            {/* ATM Row (Highlighted) */}
            <div className="grid grid-cols-12 text-sm border-b bg-yellow-100 hover:bg-yellow-200 transition-colors border-l-4 border-yellow-500">
              <div className="px-2 py-3 text-center text-gray-600">5,678</div>
              <div className="px-2 py-3 text-center font-bold text-green-600">892</div>
              <div className="px-2 py-3 text-center font-medium">4.20</div>
              <div className="px-2 py-3 text-center font-medium">4.40</div>
              <div className="px-2 py-3 text-center text-blue-600 font-medium">0.52</div>
              <div className="col-span-2 px-4 py-3 text-center font-bold bg-yellow-200">€175 ← ATM</div>
              <div className="px-2 py-3 text-center text-blue-600 font-medium">-0.48</div>
              <div className="px-2 py-3 text-center font-medium">4.00</div>
              <div className="px-2 py-3 text-center font-medium">4.20</div>
              <div className="px-2 py-3 text-center font-bold text-green-600">756</div>
              <div className="px-2 py-3 text-center text-gray-600">4,234</div>
            </div>

            {/* OTM Row */}
            <div className="grid grid-cols-12 text-sm border-b hover:bg-gray-50 transition-colors">
              <div className="px-2 py-3 text-center text-gray-600">3,210</div>
              <div className="px-2 py-3 text-center text-gray-600">234</div>
              <div className="px-2 py-3 text-center font-medium">2.10</div>
              <div className="px-2 py-3 text-center font-medium">2.25</div>
              <div className="px-2 py-3 text-center text-blue-600 font-medium">0.35</div>
              <div className="col-span-2 px-4 py-3 text-center font-bold bg-gray-200">€180</div>
              <div className="px-2 py-3 text-center text-blue-600 font-medium">-0.65</div>
              <div className="px-2 py-3 text-center font-medium">6.30</div>
              <div className="px-2 py-3 text-center font-medium">6.50</div>
              <div className="px-2 py-3 text-center text-gray-600">167</div>
              <div className="px-2 py-3 text-center text-gray-600">2,567</div>
            </div>

            {/* Deep OTM Row */}
            <div className="grid grid-cols-12 text-sm hover:bg-gray-50 transition-colors">
              <div className="px-2 py-3 text-center text-gray-400">890</div>
              <div className="px-2 py-3 text-center text-gray-400">45</div>
              <div className="px-2 py-3 text-center text-gray-500">0.85</div>
              <div className="px-2 py-3 text-center text-gray-500">1.00</div>
              <div className="px-2 py-3 text-center text-blue-400">0.18</div>
              <div className="col-span-2 px-4 py-3 text-center font-bold bg-gray-200">€185</div>
              <div className="px-2 py-3 text-center text-blue-400">-0.82</div>
              <div className="px-2 py-3 text-center text-gray-500">9.20</div>
              <div className="px-2 py-3 text-center text-gray-500">9.50</div>
              <div className="px-2 py-3 text-center text-gray-400">34</div>
              <div className="px-2 py-3 text-center text-gray-400">1,234</div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="w-4 h-4 bg-green-200 rounded"></div>
              <span className="text-sm text-gray-700">
                {isGerman ? 'ITM (Im Geld) - Calls links' : 'ITM (In The Money) - Calls left'}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <div className="w-4 h-4 bg-yellow-300 rounded"></div>
              <span className="text-sm text-gray-700">
                {isGerman ? 'ATM (Am Geld) - Aktueller Kurs' : 'ATM (At The Money) - Current Price'}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <span className="text-sm text-gray-700">
                {isGerman ? 'OTM (Aus dem Geld) - Calls rechts' : 'OTM (Out of The Money) - Calls right'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Column Explanations */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? 'Jede Spalte erklärt' : 'Every Column Explained'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Verstehen Sie, was jede Zahl bedeutet und wie Sie sie für bessere Entscheidungen nutzen.'
                : 'Understand what each number means and how to use it for better decisions.'}
            </p>

            <div className="space-y-4">
              {columns.map((col, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                    <div className="bg-indigo-600 text-white p-6 md:rounded-l-xl">
                      <h3 className="text-xl font-bold">{col.name}</h3>
                      <div className="text-indigo-200 text-sm mt-1">{col.example}</div>
                    </div>
                    <div className="col-span-2 p-6">
                      <p className="text-gray-700">{col.description}</p>
                    </div>
                    <div className="p-6 bg-indigo-50">
                      <div className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">💡</span>
                        <p className="text-sm text-indigo-800">{col.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Greeks Section */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {isGerman ? 'Greeks in der Optionskette' : 'Greeks in the Options Chain'}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {isGerman
              ? 'Viele Plattformen zeigen auch die Greeks an. Hier eine Schnellübersicht.'
              : 'Many platforms also display Greeks. Here is a quick overview.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greeks.map((greek, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border-2 ${
                  greek.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                  greek.color === 'green' ? 'bg-green-50 border-green-200' :
                  greek.color === 'red' ? 'bg-red-50 border-red-200' :
                  'bg-purple-50 border-purple-200'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  greek.color === 'blue' ? 'text-blue-700' :
                  greek.color === 'green' ? 'text-green-700' :
                  greek.color === 'red' ? 'text-red-700' :
                  'text-purple-700'
                }`}>
                  {greek.name}
                </h3>
                <p className="text-gray-700 mb-3">{greek.description}</p>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">{isGerman ? 'Bereich' : 'Range'}:</span> {greek.range}
                </div>
                <div className={`text-sm px-3 py-2 rounded-lg ${
                  greek.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  greek.color === 'green' ? 'bg-green-100 text-green-800' :
                  greek.color === 'red' ? 'bg-red-100 text-red-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {greek.example}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/${locale}/greeks-explained`}
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              {isGerman ? 'Vollständiger Greeks-Guide' : 'Complete Greeks Guide'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Moneyness Section */}
      <div className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {isGerman ? 'ITM, ATM, OTM verstehen' : 'Understanding ITM, ATM, OTM'}
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Der Strike relativ zum Aktienkurs bestimmt die "Moneyness" einer Option.'
                : 'The strike relative to stock price determines an option\'s "moneyness".'}
            </p>

            <div className="space-y-6">
              {moneyness.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    item.color === 'green' ? 'bg-green-900/30 border border-green-700' :
                    item.color === 'blue' ? 'bg-blue-900/30 border border-blue-700' :
                    'bg-orange-900/30 border border-orange-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`text-3xl font-bold ${
                      item.color === 'green' ? 'text-green-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      'text-orange-400'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-white font-medium">{item.fullName}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 mb-1">Call</p>
                      <p className="text-white">{item.callCondition}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Put</p>
                      <p className="text-white">{item.putCondition}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Delta</p>
                      <p className="text-white">{item.delta}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mt-4 text-sm">{item.characteristics}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Schnellreferenz: Was sollte ich prüfen?' : 'Quick Reference: What Should I Check?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Vor dem Kauf prüfen' : 'Check Before Buying'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Bid-Ask Spread</strong>: {isGerman ? '< 10% des Optionspreises' : '< 10% of option price'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Open Interest</strong>: {isGerman ? '> 100, besser > 500' : '> 100, better > 500'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Volume</strong>: {isGerman ? 'Heute gehandelt = aktiver Markt' : 'Traded today = active market'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>IV</strong>: {isGerman ? 'Vergleich mit 30-Tage-Durchschnitt' : 'Compare with 30-day average'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {isGerman ? 'Warnsignale' : 'Warning Signs'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span>{isGerman ? 'Spread > €0.50 bei Optionen unter €5' : 'Spread > €0.50 for options under €5'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span>{isGerman ? 'Open Interest < 50 (schwer zu verkaufen)' : 'Open Interest < 50 (hard to sell)'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span>{isGerman ? 'Kein Volumen heute (inaktiver Markt)' : 'No volume today (inactive market)'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span>{isGerman ? 'IV > 100% ohne News (überteuert)' : 'IV > 100% without news (overpriced)'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {isGerman ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
                  <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <svg className="w-5 h-5 text-indigo-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {isGerman ? 'Bereit zum Handeln?' : 'Ready to Trade?'}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {isGerman
                ? 'Testen Sie Ihr Wissen mit unseren kostenlosen Tools und Kalkulatoren.'
                : 'Test your knowledge with our free tools and calculators.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/tools`}
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Options-Rechner' : 'Options Calculator'}
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 transition-colors"
              >
                {isGerman ? 'Strategien lernen' : 'Learn Strategies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
