import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Covered Call: Schritt-für-Schritt Anleitung | Regelmäßiges Einkommen generieren'
      : 'Covered Call: Step-by-Step Guide | Generate Regular Income',
    description: locale === 'de'
      ? 'Lernen Sie, wie Sie mit Covered Calls regelmäßiges Einkommen generieren. Eine bewährte Strategie für Aktienbesitzer in seitwärts tendierenden Märkten.'
      : 'Learn how to generate regular income with covered calls. A proven strategy for stock owners in sideways trending markets.',
  });
}

export default function CoveredCallPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {locale === 'de' ? 'Strategie-Guide | 6 Min Lesezeit' : 'Strategy Guide | 6 min read'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Covered Call: Schritt-für-Schritt'
                : 'Covered Call: Step-by-Step'}
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Wie Sie mit Covered Calls regelmäßiges Einkommen generieren. Eine bewährte Strategie für Aktienbesitzer in seitwärts tendierenden Märkten.'
                : 'How to generate regular income with covered calls. A proven strategy for stock owners in sideways trending markets.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Was ist ein Covered Call?' : 'What is a Covered Call?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Ein Covered Call ist eine der beliebtesten Optionsstrategien für Aktienbesitzer. Sie verkaufen Call-Optionen auf Aktien, die Sie bereits besitzen, und kassieren dafür eine Prämie.'
                  : 'A covered call is one of the most popular option strategies for stock owners. You sell call options on stocks you already own and collect a premium.'}
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-gray-800 font-semibold mb-2">
                  {locale === 'de' ? 'Einfach erklärt:' : 'Simply explained:'}
                </p>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Sie besitzen 100 Aktien und verkaufen das Recht, diese Aktien zu einem bestimmten Preis (Strike) zu kaufen. Dafür erhalten Sie sofort Geld (Prämie). Wenn die Aktie unter dem Strike bleibt, behalten Sie sowohl Aktien als auch Prämie.'
                    : 'You own 100 shares and sell the right to buy these shares at a specific price (strike). You receive money immediately (premium). If the stock stays below the strike, you keep both shares and premium.'}
                </p>
              </div>
            </div>

            {/* When to Use */}
            <div className="card bg-gradient-to-br from-blue-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {locale === 'de' ? 'Wann nutzen Sie Covered Calls?' : 'When to Use Covered Calls?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
                  <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Neutrale Markterwartung' : 'Neutral Market Outlook'}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Sie erwarten, dass Ihre Aktie seitwärts läuft oder nur leicht steigt.'
                      : 'You expect your stock to move sideways or rise only slightly.'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
                  <svg className="w-12 h-12 text-green-600 mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Zusatzeinkommen' : 'Additional Income'}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Sie möchten aus Ihren Aktien regelmäßige Einnahmen erzielen.'
                      : 'You want to generate regular income from your stocks.'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
                  <svg className="w-12 h-12 text-purple-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Kostenreduktion' : 'Cost Reduction'}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Sie wollen Ihre Einstandskosten durch Prämieneinnahmen senken.'
                      : 'You want to lower your cost basis through premium income.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Schritt-für-Schritt Anleitung' : 'Step-by-Step Guide'}
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Aktien besitzen' : 'Own the Stock'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Sie müssen mindestens 100 Aktien des Unternehmens besitzen. Ein Call-Option-Kontrakt deckt immer 100 Aktien ab.'
                          : 'You must own at least 100 shares of the company. One call option contract always covers 100 shares.'}
                      </p>
                      <div className="bg-white rounded p-4">
                        <p className="text-sm text-gray-800">
                          <strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong>{' '}
                          {locale === 'de'
                            ? 'Sie besitzen 100 Apple-Aktien à 180€ = 18.000€ Gesamtwert'
                            : 'You own 100 Apple shares at €180 = €18,000 total value'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Strike-Preis wählen' : 'Choose Strike Price'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Wählen Sie einen Strike-Preis oberhalb des aktuellen Kurses. Je höher der Strike, desto wahrscheinlicher behalten Sie die Aktien.'
                          : 'Choose a strike price above the current price. The higher the strike, the more likely you keep the shares.'}
                      </p>
                      <div className="bg-white rounded p-4 space-y-2">
                        <p className="text-sm text-gray-800">
                          <strong className="text-blue-700">{locale === 'de' ? 'Aktueller Kurs:' : 'Current Price:'}</strong> 180€
                        </p>
                        <p className="text-sm text-gray-800">
                          <strong className="text-green-700">{locale === 'de' ? 'Strike-Wahl:' : 'Strike Choice:'}</strong> 190€ (+5.5%)
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          {locale === 'de'
                            ? '→ Aktie muss über 190€ steigen, damit sie "called away" wird'
                            : '→ Stock must rise above €190 to be "called away"'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Laufzeit bestimmen' : 'Determine Expiration'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Wählen Sie das Verfallsdatum der Option. Typisch sind 30-45 Tage.'
                          : 'Choose the option expiration date. Typical is 30-45 days.'}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-white rounded p-3">
                          <p className="text-xs font-semibold text-gray-900 mb-1">{locale === 'de' ? 'Kurze Laufzeit' : 'Short Term'}</p>
                          <p className="text-xs text-gray-700">{locale === 'de' ? '7-14 Tage: Weniger Prämie, mehr Flexibilität' : '7-14 days: Less premium, more flexibility'}</p>
                        </div>
                        <div className="bg-purple-50 rounded p-3 border-2 border-purple-300">
                          <p className="text-xs font-semibold text-purple-900 mb-1">{locale === 'de' ? 'Optimal' : 'Optimal'}</p>
                          <p className="text-xs text-gray-700">{locale === 'de' ? '30-45 Tage: Beste Balance' : '30-45 days: Best balance'}</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="text-xs font-semibold text-gray-900 mb-1">{locale === 'de' ? 'Lange Laufzeit' : 'Long Term'}</p>
                          <p className="text-xs text-gray-700">{locale === 'de' ? '60+ Tage: Mehr Prämie, weniger Kontrolle' : '60+ days: More premium, less control'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gradient-to-r from-yellow-50 to-white rounded-lg p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Call-Option verkaufen' : 'Sell Call Option'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Verkaufen Sie die Call-Option "Sell to Open". Sie erhalten sofort die Prämie auf Ihr Konto.'
                          : 'Sell the call option "Sell to Open". You immediately receive the premium in your account.'}
                      </p>
                      <div className="bg-white rounded p-4">
                        <p className="text-sm text-gray-800 mb-2">
                          <strong>{locale === 'de' ? 'Prämienberechnung:' : 'Premium Calculation:'}</strong>
                        </p>
                        <p className="text-sm text-gray-700">
                          {locale === 'de'
                            ? 'Apple 190€ Call, 30 Tage Laufzeit = 3,50€ Prämie pro Aktie'
                            : 'Apple €190 call, 30 days expiration = €3.50 premium per share'}
                        </p>
                        <p className="text-lg font-bold text-green-700 mt-2">
                          {locale === 'de' ? 'Einnahme: 350€ (3,50€ × 100 Aktien)' : 'Income: €350 (€3.50 × 100 shares)'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-6 border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {locale === 'de' ? 'Warten und beobachten' : 'Wait and Monitor'}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {locale === 'de'
                          ? 'Jetzt gibt es drei mögliche Szenarien bis zum Verfallsdatum:'
                          : 'Now there are three possible scenarios until expiration:'}
                      </p>
                      <div className="space-y-3">
                        <div className="bg-green-50 rounded p-3 border-l-2 border-green-500">
                          <p className="text-sm font-semibold text-green-900 mb-1">
                            {locale === 'de' ? 'Szenario 1: Kurs unter Strike (Ideal)' : 'Scenario 1: Price Below Strike (Ideal)'}
                          </p>
                          <p className="text-xs text-gray-700">
                            {locale === 'de'
                              ? 'Aktie bleibt unter 190€ → Option verfällt wertlos → Sie behalten Aktien + 350€ Prämie'
                              : 'Stock stays below €190 → Option expires worthless → You keep shares + €350 premium'}
                          </p>
                        </div>
                        <div className="bg-yellow-50 rounded p-3 border-l-2 border-yellow-500">
                          <p className="text-sm font-semibold text-yellow-900 mb-1">
                            {locale === 'de' ? 'Szenario 2: Kurs über Strike' : 'Scenario 2: Price Above Strike'}
                          </p>
                          <p className="text-xs text-gray-700">
                            {locale === 'de'
                              ? 'Aktie steigt über 190€ → Ihre Aktien werden zu 190€ verkauft → Sie haben Gewinn + Prämie'
                              : 'Stock rises above €190 → Your shares are sold at €190 → You have profit + premium'}
                          </p>
                        </div>
                        <div className="bg-blue-50 rounded p-3 border-l-2 border-blue-500">
                          <p className="text-sm font-semibold text-blue-900 mb-1">
                            {locale === 'de' ? 'Szenario 3: Option zurückkaufen' : 'Scenario 3: Buy Back Option'}
                          </p>
                          <p className="text-xs text-gray-700">
                            {locale === 'de'
                              ? 'Wenn die Aktie stark steigt und Sie die Aktien behalten wollen: Kaufen Sie die Option zurück ("Buy to Close")'
                              : 'If stock rises strongly and you want to keep shares: Buy back the option ("Buy to Close")'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Example */}
            <div className="card bg-gradient-to-br from-purple-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Vollständiges Beispiel' : 'Complete Example'}
              </h2>
              <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  {locale === 'de' ? 'Apple Covered Call Trade' : 'Apple Covered Call Trade'}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded p-4">
                      <h4 className="font-bold text-gray-900 mb-3">{locale === 'de' ? 'Ausgangslage' : 'Starting Position'}</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>▸ {locale === 'de' ? '100 Apple-Aktien à 180€' : '100 Apple shares at €180'}</li>
                        <li>▸ {locale === 'de' ? 'Gesamtwert: 18.000€' : 'Total value: €18,000'}</li>
                        <li>▸ {locale === 'de' ? 'Erwartung: Seitwärtsbewegung' : 'Expectation: Sideways movement'}</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded p-4">
                      <h4 className="font-bold text-gray-900 mb-3">{locale === 'de' ? 'Trade-Details' : 'Trade Details'}</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>▸ {locale === 'de' ? 'Verkauf: 1 × Apple 190€ Call' : 'Sell: 1 × Apple €190 call'}</li>
                        <li>▸ {locale === 'de' ? 'Laufzeit: 30 Tage' : 'Expiration: 30 days'}</li>
                        <li>▸ {locale === 'de' ? 'Prämie: 3,50€ pro Aktie' : 'Premium: €3.50 per share'}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
                    <h4 className="font-bold text-green-900 mb-3">{locale === 'de' ? 'Ergebnis nach 30 Tagen' : 'Result After 30 Days'}</h4>
                    <p className="text-sm text-gray-800 mb-3">
                      <strong>{locale === 'de' ? 'Aktienkurs bei Verfall:' : 'Stock price at expiration:'}</strong> 185€
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>▸ {locale === 'de' ? 'Option verfällt wertlos (185€ < 190€)' : 'Option expires worthless (€185 < €190)'}</p>
                      <p>▸ {locale === 'de' ? 'Sie behalten alle 100 Aktien' : 'You keep all 100 shares'}</p>
                      <p>▸ {locale === 'de' ? 'Aktiengewinn: +500€ (5€ × 100)' : 'Stock profit: +€500 (€5 × 100)'}</p>
                      <p>▸ {locale === 'de' ? 'Prämieneinnahme: +350€' : 'Premium income: +€350'}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t-2 border-green-400">
                      <p className="text-lg font-bold text-green-800">
                        {locale === 'de' ? 'Gesamtgewinn: 850€ (+4.7% in 30 Tagen)' : 'Total profit: €850 (+4.7% in 30 days)'}
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        {locale === 'de' ? '≈ 57% annualisierte Rendite!' : '≈ 57% annualized return!'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Vor- und Nachteile' : 'Pros and Cons'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Vorteile' : 'Advantages'}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Regelmäßiges Einkommen:' : 'Regular income:'}</strong> {locale === 'de' ? 'Monatliche Prämieneinnahmen möglich' : 'Monthly premium income possible'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Kostenbasis senken:' : 'Lower cost basis:'}</strong> {locale === 'de' ? 'Reduzieren Sie Ihren Einstandspreis' : 'Reduce your entry price'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Geringes Risiko:' : 'Low risk:'}</strong> {locale === 'de' ? 'Konservativer als reiner Aktienbesitz' : 'More conservative than pure stock ownership'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Flexibilität:' : 'Flexibility:'}</strong> {locale === 'de' ? 'Sie können jederzeit zurückkaufen' : 'You can buy back anytime'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Nachteile' : 'Disadvantages'}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Begrenzter Gewinn:' : 'Limited profit:'}</strong> {locale === 'de' ? 'Gewinn ist auf Strike-Preis begrenzt' : 'Profit is capped at strike price'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Aktien können verkauft werden:' : 'Shares can be sold:'}</strong> {locale === 'de' ? 'Bei starkem Anstieg verlieren Sie die Aktien' : 'On strong rally you lose the shares'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Voller Abwärtsrisiko:' : 'Full downside risk:'}</strong> {locale === 'de' ? 'Prämie schützt nur teilweise' : 'Premium provides only partial protection'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">▸</span>
                      <span><strong>{locale === 'de' ? 'Zeitaufwand:' : 'Time commitment:'}</strong> {locale === 'de' ? 'Erfordert regelmäßige Überwachung' : 'Requires regular monitoring'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips for Success */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {locale === 'de' ? 'Tipps für den Erfolg' : 'Tips for Success'}
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    {locale === 'de' ? '1. Wählen Sie den richtigen Strike' : '1. Choose the Right Strike'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Out-of-the-Money (OTM) Calls: 5-10% über dem aktuellen Kurs. Dies gibt Ihnen Spielraum für Kurssteigerungen.'
                      : 'Out-of-the-Money (OTM) calls: 5-10% above current price. This gives you room for price appreciation.'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    {locale === 'de' ? '2. Timing ist wichtig' : '2. Timing Matters'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Verkaufen Sie Calls bei hoher IV (vor Earnings, bei Marktvolatilität). Die Prämien sind dann höher.'
                      : 'Sell calls during high IV (before earnings, during market volatility). Premiums are higher then.'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    {locale === 'de' ? '3. Rolliere regelmäßig' : '3. Roll Regularly'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Wenn die Option wertlos verfällt, verkaufen Sie sofort eine neue. Maximieren Sie Ihre Prämieneinnahmen!'
                      : 'When the option expires worthless, immediately sell a new one. Maximize your premium income!'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    {locale === 'de' ? '4. Diversifizieren Sie' : '4. Diversify'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {locale === 'de'
                      ? 'Nutzen Sie Covered Calls auf mehrere Aktien. Streuen Sie Ihr Risiko und Ihre Einnahmequellen.'
                      : 'Use covered calls on multiple stocks. Spread your risk and income sources.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="card bg-gradient-to-br from-green-600 to-emerald-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Starten Sie mit Covered Calls!'
                    : 'Start with Covered Calls!'}
                </h3>
                <p className="text-green-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Nutzen Sie Libertex für professionelles Options-Trading mit niedrigen Gebühren und exzellenten Tools!'
                    : 'Use Libertex for professional options trading with low fees and excellent tools!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-green-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Jetzt Konto eröffnen' : 'Open Account Now'}
                </a>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Covered Calls sind eine relativ konservative Strategie, bergen aber dennoch Risiken. Der Aktienkurs kann fallen, und die Prämie bietet nur begrenzten Schutz. Stellen Sie sicher, dass Sie die Strategie vollständig verstehen, bevor Sie sie anwenden.'
                  : 'Covered calls are a relatively conservative strategy but still carry risks. The stock price can fall, and the premium provides only limited protection. Make sure you fully understand the strategy before applying it.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2025-01-10</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
