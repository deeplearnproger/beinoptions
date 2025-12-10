import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isGerman = locale === 'de';
  return {
    title: isGerman ? 'Butterfly Strategie - Optionshandel Guide' : 'Butterfly Strategy - Options Trading Guide',
    description: isGerman
      ? 'Lernen Sie die Butterfly-Strategie für Optionen: Long Butterfly, Iron Butterfly, Broken Wing. Profitieren Sie von niedriger Volatilität.'
      : 'Learn the Butterfly options strategy: Long Butterfly, Iron Butterfly, Broken Wing. Profit from low volatility markets.',
    keywords: isGerman
      ? ['Butterfly Strategie', 'Iron Butterfly', 'Long Butterfly', 'Optionen', 'Volatilität']
      : ['Butterfly Strategy', 'Iron Butterfly', 'Long Butterfly', 'Options', 'Volatility'],
  };
}

export default function ButterflyStrategyPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isGerman ? 'Fortgeschrittene Strategie' : 'Advanced Strategy'}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isGerman ? 'Butterfly Strategie' : 'Butterfly Strategy'}
            </h1>

            <p className="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Profitieren Sie von Seitwärtsmärkten mit begrenztem Risiko. Die elegante Strategie für erfahrene Trader.'
                : 'Profit from sideways markets with limited risk. The elegant strategy for experienced traders.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-violet-300 text-sm">{isGerman ? 'Risiko' : 'Risk'}</div>
                <div className="text-white font-bold">{isGerman ? 'Begrenzt' : 'Limited'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-violet-300 text-sm">{isGerman ? 'Gewinn' : 'Profit'}</div>
                <div className="text-white font-bold">{isGerman ? 'Begrenzt' : 'Limited'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-violet-300 text-sm">{isGerman ? 'Marktmeinung' : 'Market View'}</div>
                <div className="text-white font-bold">{isGerman ? 'Neutral' : 'Neutral'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-violet-300 text-sm">{isGerman ? 'Volatilität' : 'Volatility'}</div>
                <div className="text-white font-bold">{isGerman ? 'Niedrig erwartet' : 'Low expected'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Butterfly */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isGerman ? 'Was ist eine Butterfly-Strategie?' : 'What is a Butterfly Strategy?'}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                {isGerman
                  ? 'Die Butterfly-Strategie ist eine neutrale Optionsstrategie, die aus drei Strike-Preisen besteht. Sie kombiniert einen Bull Spread und einen Bear Spread mit dem gleichen mittleren Strike. Der Name kommt von der Form des Gewinn-/Verlustdiagramms, das an einen Schmetterling erinnert.'
                  : 'The Butterfly strategy is a neutral options strategy consisting of three strike prices. It combines a bull spread and a bear spread with the same middle strike. The name comes from the shape of the profit/loss diagram, which resembles a butterfly.'}
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="mt-10 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {isGerman ? 'Butterfly Aufbau' : 'Butterfly Structure'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-violet-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">+1</span>
                  </div>
                  <div className="font-semibold text-gray-900">{isGerman ? 'Unterer Strike' : 'Lower Strike'}</div>
                  <div className="text-sm text-gray-500 mt-1">{isGerman ? 'Kaufen' : 'Buy'}</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-violet-200">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold">-2</span>
                  </div>
                  <div className="font-semibold text-gray-900">{isGerman ? 'Mittlerer Strike' : 'Middle Strike'}</div>
                  <div className="text-sm text-gray-500 mt-1">{isGerman ? 'Verkaufen (2x)' : 'Sell (2x)'}</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-violet-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">+1</span>
                  </div>
                  <div className="font-semibold text-gray-900">{isGerman ? 'Oberer Strike' : 'Upper Strike'}</div>
                  <div className="text-sm text-gray-500 mt-1">{isGerman ? 'Kaufen' : 'Buy'}</div>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                {isGerman
                  ? 'Der Abstand zwischen den Strikes sollte gleich sein (z.B. 95-100-105)'
                  : 'The distance between strikes should be equal (e.g., 95-100-105)'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Butterfly Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? 'Arten von Butterfly-Strategien' : 'Types of Butterfly Strategies'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Es gibt verschiedene Varianten der Butterfly-Strategie, jede mit eigenen Vorteilen.'
                : 'There are different variations of the Butterfly strategy, each with its own advantages.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Long Call Butterfly */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Long Call Butterfly</h3>
                    <p className="text-sm text-gray-500">{isGerman ? 'Mit Call-Optionen' : 'Using Call Options'}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Aufbau:' : 'Setup:'}</span>
                    <span className="text-gray-900">Buy 1 ITM Call + Sell 2 ATM Calls + Buy 1 OTM Call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Kosten:' : 'Cost:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Netto-Debit (zahlen)' : 'Net Debit (pay)'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Max Gewinn:' : 'Max Profit:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Strike-Differenz - Debit' : 'Strike Width - Debit'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Max Verlust:' : 'Max Loss:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Gezahlter Debit' : 'Debit Paid'}</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-sm font-medium text-green-800 mb-2">{isGerman ? 'Ideal wenn:' : 'Ideal when:'}</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• {isGerman ? 'Aktie bleibt nahe am mittleren Strike' : 'Stock stays near middle strike'}</li>
                    <li>• {isGerman ? 'Niedrige Volatilität erwartet' : 'Low volatility expected'}</li>
                    <li>• {isGerman ? 'Kurz vor Verfall' : 'Near expiration'}</li>
                  </ul>
                </div>
              </div>

              {/* Iron Butterfly */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Iron Butterfly</h3>
                    <p className="text-sm text-gray-500">{isGerman ? 'Credit-Strategie' : 'Credit Strategy'}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Aufbau:' : 'Setup:'}</span>
                    <span className="text-gray-900">Sell ATM Put + Sell ATM Call + Buy OTM Put + Buy OTM Call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Kosten:' : 'Cost:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Netto-Credit (erhalten)' : 'Net Credit (receive)'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Max Gewinn:' : 'Max Profit:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Erhaltener Credit' : 'Credit Received'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Max Verlust:' : 'Max Loss:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Strike-Differenz - Credit' : 'Strike Width - Credit'}</span>
                  </div>
                </div>

                <div className="bg-violet-50 rounded-xl p-4">
                  <div className="text-sm font-medium text-violet-800 mb-2">{isGerman ? 'Vorteile:' : 'Advantages:'}</div>
                  <ul className="text-sm text-violet-700 space-y-1">
                    <li>• {isGerman ? 'Sofortiger Credit' : 'Immediate credit'}</li>
                    <li>• {isGerman ? 'Höhere Gewinnwahrscheinlichkeit' : 'Higher probability of profit'}</li>
                    <li>• {isGerman ? 'Profitiert von Zeitwertverlust' : 'Benefits from time decay'}</li>
                  </ul>
                </div>
              </div>

              {/* Long Put Butterfly */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Long Put Butterfly</h3>
                    <p className="text-sm text-gray-500">{isGerman ? 'Mit Put-Optionen' : 'Using Put Options'}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Aufbau:' : 'Setup:'}</span>
                    <span className="text-gray-900">Buy 1 OTM Put + Sell 2 ATM Puts + Buy 1 ITM Put</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Kosten:' : 'Cost:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Netto-Debit (zahlen)' : 'Net Debit (pay)'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Ergebnis:' : 'Result:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Identisch zum Call Butterfly' : 'Identical to Call Butterfly'}</span>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4">
                  <div className="text-sm font-medium text-red-800 mb-2">{isGerman ? 'Hinweis:' : 'Note:'}</div>
                  <p className="text-sm text-red-700">
                    {isGerman
                      ? 'Funktioniert genauso wie der Call Butterfly. Wählen Sie basierend auf Liquidität und Spreads.'
                      : 'Works the same as the Call Butterfly. Choose based on liquidity and spreads.'}
                  </p>
                </div>
              </div>

              {/* Broken Wing Butterfly */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Broken Wing Butterfly</h3>
                    <p className="text-sm text-gray-500">{isGerman ? 'Asymmetrische Variante' : 'Asymmetric Variant'}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Aufbau:' : 'Setup:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Ungleiche Strike-Abstände' : 'Unequal strike widths'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Kosten:' : 'Cost:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Oft für Credit möglich' : 'Often possible for credit'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-gray-500">{isGerman ? 'Risiko:' : 'Risk:'}</span>
                    <span className="text-gray-900">{isGerman ? 'Asymmetrisch' : 'Asymmetric'}</span>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4">
                  <div className="text-sm font-medium text-amber-800 mb-2">{isGerman ? 'Wann nutzen:' : 'When to use:'}</div>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• {isGerman ? 'Leichte Richtungsmeinung' : 'Slight directional bias'}</li>
                    <li>• {isGerman ? 'Risiko auf eine Seite reduzieren' : 'Reduce risk on one side'}</li>
                    <li>• {isGerman ? 'Credit statt Debit erhalten' : 'Receive credit instead of debit'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isGerman ? 'Praxis-Beispiel: Iron Butterfly auf SPY' : 'Practical Example: Iron Butterfly on SPY'}
            </h2>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-300 mb-4">{isGerman ? 'Ausgangssituation' : 'Initial Setup'}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-violet-400">•</span>
                      <span>SPY {isGerman ? 'aktuell bei' : 'currently at'} $450</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-violet-400">•</span>
                      <span>{isGerman ? 'Verfall in 30 Tagen' : 'Expiration in 30 days'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-violet-400">•</span>
                      <span>{isGerman ? 'Erwartung: Seitwärtsbewegung' : 'Expectation: Sideways movement'}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-300 mb-4">{isGerman ? 'Trade-Aufbau' : 'Trade Setup'}</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-green-400">Buy</span>
                      <span>1x $445 Put @ $2.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-red-400">Sell</span>
                      <span>1x $450 Put @ $5.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-red-400">Sell</span>
                      <span>1x $450 Call @ $5.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-green-400">Buy</span>
                      <span>1x $455 Call @ $2.50</span>
                    </li>
                    <li className="border-t border-slate-700 pt-2 mt-2 flex justify-between font-semibold">
                      <span>{isGerman ? 'Netto-Credit:' : 'Net Credit:'}</span>
                      <span className="text-green-400">$5.00 ($500)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenarios */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {isGerman ? 'Mögliche Szenarien bei Verfall' : 'Possible Scenarios at Expiration'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-green-800">{isGerman ? 'Bestes Szenario' : 'Best Case'}</div>
                    <div className="text-sm text-green-600">SPY = $450</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  {isGerman
                    ? 'Alle Optionen verfallen wertlos. Sie behalten den vollen Credit.'
                    : 'All options expire worthless. You keep the full credit.'}
                </p>
                <div className="font-bold text-green-800">{isGerman ? 'Gewinn:' : 'Profit:'} $500 (100%)</div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-amber-800">{isGerman ? 'Breakeven' : 'Breakeven'}</div>
                    <div className="text-sm text-amber-600">SPY = $445 {isGerman ? 'oder' : 'or'} $455</div>
                  </div>
                </div>
                <p className="text-sm text-amber-700 mb-3">
                  {isGerman
                    ? 'An den Breakeven-Punkten ist der Trade neutral.'
                    : 'At breakeven points, the trade is neutral.'}
                </p>
                <div className="font-bold text-amber-800">{isGerman ? 'Gewinn:' : 'Profit:'} $0</div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-red-800">{isGerman ? 'Schlechtestes' : 'Worst Case'}</div>
                    <div className="text-sm text-red-600">SPY &lt; $445 {isGerman ? 'oder' : 'or'} &gt; $455</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 mb-3">
                  {isGerman
                    ? 'Außerhalb der Flügel ist der maximale Verlust begrenzt.'
                    : 'Beyond the wings, maximum loss is limited.'}
                </p>
                <div className="font-bold text-red-800">{isGerman ? 'Verlust:' : 'Loss:'} -$0 ({isGerman ? 'in diesem Beispiel' : 'in this example'})</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Wann Butterfly-Strategien nutzen?' : 'When to Use Butterfly Strategies?'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{isGerman ? 'Gute Bedingungen' : 'Good Conditions'}</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{isGerman ? 'Seitwärtsmarkt erwartet' : 'Sideways market expected'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{isGerman ? 'IV ist hoch (Iron Butterfly)' : 'IV is high (Iron Butterfly)'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{isGerman ? 'Klares Kursziel vorhanden' : 'Clear price target exists'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{isGerman ? 'Nach Earnings/Events' : 'After earnings/events'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{isGerman ? 'Begrenztes Kapital verfügbar' : 'Limited capital available'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{isGerman ? 'Schlechte Bedingungen' : 'Bad Conditions'}</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{isGerman ? 'Trending Markt' : 'Trending market'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{isGerman ? 'Vor wichtigen Events' : 'Before major events'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{isGerman ? 'Niedrige Liquidität' : 'Low liquidity'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{isGerman ? 'Breite Bid-Ask Spreads' : 'Wide bid-ask spreads'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{isGerman ? 'Unsichere Marktrichtung' : 'Uncertain market direction'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Butterfly vs Iron Condor */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Butterfly vs. Iron Condor' : 'Butterfly vs. Iron Condor'}
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">{isGerman ? 'Merkmal' : 'Feature'}</th>
                    <th className="text-center py-4 px-4 font-semibold text-violet-600">Butterfly</th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-600">Iron Condor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-4 text-gray-600">{isGerman ? 'Gewinnzone' : 'Profit Zone'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Eng' : 'Narrow'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Breit' : 'Wide'}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 text-gray-600">{isGerman ? 'Max Gewinn' : 'Max Profit'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Höher' : 'Higher'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Niedriger' : 'Lower'}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-600">{isGerman ? 'Gewinnwahrscheinlichkeit' : 'Probability of Profit'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Niedriger' : 'Lower'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Höher' : 'Higher'}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 text-gray-600">{isGerman ? 'Kursziel' : 'Price Target'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Präzise' : 'Precise'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Bereich' : 'Range'}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-600">{isGerman ? 'Komplexität' : 'Complexity'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Mittel' : 'Medium'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Mittel' : 'Medium'}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 text-gray-600">{isGerman ? 'Bester Einsatz' : 'Best Use'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Pin-Risk-Trades' : 'Pin-risk trades'}</td>
                    <td className="py-4 px-4 text-center">{isGerman ? 'Range-gebunden' : 'Range-bound'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-gradient-to-br from-violet-900 to-purple-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isGerman ? 'Tipps für Butterfly-Trades' : 'Tips for Butterfly Trades'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">1</span>
                  <h3 className="font-semibold">{isGerman ? 'Timing ist entscheidend' : 'Timing is Crucial'}</h3>
                </div>
                <p className="text-violet-200">
                  {isGerman
                    ? 'Eröffnen Sie Butterflies 2-4 Wochen vor Verfall. Zu früh = wenig Theta, zu spät = wenig Zeit für Anpassungen.'
                    : 'Open Butterflies 2-4 weeks before expiration. Too early = little theta, too late = little time for adjustments.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">2</span>
                  <h3 className="font-semibold">{isGerman ? 'Liquidität prüfen' : 'Check Liquidity'}</h3>
                </div>
                <p className="text-violet-200">
                  {isGerman
                    ? 'Handeln Sie nur in liquiden Underlyings (SPY, QQQ, etc.). Breite Spreads zerstören das Risiko-Rendite-Verhältnis.'
                    : 'Only trade liquid underlyings (SPY, QQQ, etc.). Wide spreads destroy the risk-reward ratio.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">3</span>
                  <h3 className="font-semibold">{isGerman ? 'Gewinnziel setzen' : 'Set Profit Target'}</h3>
                </div>
                <p className="text-violet-200">
                  {isGerman
                    ? 'Nehmen Sie Gewinne bei 25-50% des maximalen Gewinns mit. Warten auf 100% ist oft nicht realistisch.'
                    : 'Take profits at 25-50% of maximum gain. Waiting for 100% is often unrealistic.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">4</span>
                  <h3 className="font-semibold">{isGerman ? 'Positionsgröße beachten' : 'Mind Position Size'}</h3>
                </div>
                <p className="text-violet-200">
                  {isGerman
                    ? 'Risikieren Sie maximal 1-2% Ihres Kapitals pro Trade. Butterflies können schnell wertlos werden.'
                    : 'Risk maximum 1-2% of your capital per trade. Butterflies can quickly become worthless.'}
                </p>
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
              {isGerman ? 'Bereit für fortgeschrittene Strategien?' : 'Ready for Advanced Strategies?'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Entdecken Sie weitere Strategien und vertiefen Sie Ihr Wissen im Optionshandel.'
                : 'Discover more strategies and deepen your knowledge in options trading.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/iron-condor-strategy`}
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors"
              >
                Iron Condor
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/spreads-guide`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Spreads Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {isGerman ? 'Alle Strategien' : 'All Strategies'}
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
