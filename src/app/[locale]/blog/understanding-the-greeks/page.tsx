import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Die Greeks verstehen: Delta, Gamma, Theta und Vega | Options Trading Guide'
      : 'Understanding the Greeks: Delta, Gamma, Theta and Vega | Options Trading Guide',
    description: locale === 'de'
      ? 'Ein umfassender Guide zu den Options-Greeks. Lernen Sie, wie Delta, Gamma, Theta und Vega Ihre Optionspositionen beeinflussen.'
      : 'A comprehensive guide to the options Greeks. Learn how Delta, Gamma, Theta and Vega affect your option positions.',
  });
}

export default function UnderstandingGreeksPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {locale === 'de' ? 'Strategie-Guide | 12 Min Lesezeit' : 'Strategy Guide | 12 min read'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Die Greeks verstehen: Delta, Gamma, Theta und Vega'
                : 'Understanding the Greeks: Delta, Gamma, Theta and Vega'}
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Ein umfassender Guide zu den Options-Greeks. Lernen Sie, wie Delta, Gamma, Theta und Vega Ihre Optionspositionen beeinflussen.'
                : 'A comprehensive guide to the options Greeks. Learn how Delta, Gamma, Theta and Vega affect your option positions.'}
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
                {locale === 'de' ? 'Was sind die Greeks?' : 'What are the Greeks?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Die "Greeks" sind Risikokennzahlen, die messen, wie sich der Preis einer Option bei Veränderungen verschiedener Faktoren verhält. Sie heißen Greeks, weil sie mit griechischen Buchstaben bezeichnet werden: Delta (Δ), Gamma (Γ), Theta (Θ), Vega (V) und Rho (ρ).'
                  : 'The "Greeks" are risk metrics that measure how an option\'s price behaves with changes in various factors. They\'re called Greeks because they\'re denoted by Greek letters: Delta (Δ), Gamma (Γ), Theta (Θ), Vega (V), and Rho (ρ).'}
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="text-gray-800 font-semibold mb-2">
                  {locale === 'de' ? 'Warum sind die Greeks wichtig?' : 'Why are the Greeks important?'}
                </p>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Die Greeks helfen Ihnen zu verstehen, wie Ihre Optionsposition auf Marktveränderungen reagiert. Ohne Greeks traden Sie blind – mit Greeks haben Sie volle Kontrolle über Ihre Risiken und Chancen.'
                    : 'The Greeks help you understand how your option position responds to market changes. Without Greeks you\'re trading blind – with Greeks you have full control over your risks and opportunities.'}
                </p>
              </div>
            </div>

            {/* Delta Section */}
            <div className="card bg-gradient-to-br from-blue-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl text-blue-600">Δ</span>
                {locale === 'de' ? 'Delta: Die Richtungssensitivität' : 'Delta: Directional Sensitivity'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Delta misst, um wie viel sich der Optionspreis ändert, wenn der Basiswert um 1€ steigt oder fällt.'
                  : 'Delta measures how much the option price changes when the underlying asset moves by €1.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Call-Optionen</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>{locale === 'de' ? 'Delta-Bereich:' : 'Delta range:'}</strong> 0 bis +1.0</p>
                    <p><strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong> Delta = 0.70</p>
                    <p className="text-xs text-gray-600">
                      {locale === 'de'
                        ? '→ Steigt die Aktie um 1€, steigt die Option um 0,70€'
                        : '→ If stock rises €1, option rises €0.70'}
                    </p>
                  </div>
                  <div className="mt-4 bg-green-50 rounded p-3">
                    <p className="text-xs font-semibold text-green-900 mb-1">
                      {locale === 'de' ? 'Delta-Werte:' : 'Delta values:'}
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• ITM Call: 0.70 - 1.0</li>
                      <li>• ATM Call: ~0.50</li>
                      <li>• OTM Call: 0.0 - 0.30</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Put-Optionen</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>{locale === 'de' ? 'Delta-Bereich:' : 'Delta range:'}</strong> -1.0 bis 0</p>
                    <p><strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong> Delta = -0.65</p>
                    <p className="text-xs text-gray-600">
                      {locale === 'de'
                        ? '→ Fällt die Aktie um 1€, steigt die Option um 0,65€'
                        : '→ If stock falls €1, option rises €0.65'}
                    </p>
                  </div>
                  <div className="mt-4 bg-red-50 rounded p-3">
                    <p className="text-xs font-semibold text-red-900 mb-1">
                      {locale === 'de' ? 'Delta-Werte:' : 'Delta values:'}
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• ITM Put: -0.70 bis -1.0</li>
                      <li>• ATM Put: ~-0.50</li>
                      <li>• OTM Put: 0.0 bis -0.30</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-600 p-5 rounded">
                <h4 className="font-bold text-blue-900 mb-2">
                  {locale === 'de' ? 'Delta als Wahrscheinlichkeit' : 'Delta as Probability'}
                </h4>
                <p className="text-sm text-gray-800">
                  {locale === 'de'
                    ? 'Delta kann auch als ungefähre Wahrscheinlichkeit interpretiert werden, dass die Option im Geld (ITM) verfällt. Ein Call mit Delta 0.70 hat etwa 70% Chance, ITM zu enden.'
                    : 'Delta can also be interpreted as approximate probability that the option expires in-the-money (ITM). A call with delta 0.70 has about 70% chance to end ITM.'}
                </p>
              </div>
            </div>

            {/* Gamma Section */}
            <div className="card bg-gradient-to-br from-green-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl text-green-600">Γ</span>
                {locale === 'de' ? 'Gamma: Die Beschleunigung' : 'Gamma: The Acceleration'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Gamma misst, wie schnell sich Delta ändert, wenn der Basiswert sich bewegt. Es ist sozusagen die "Beschleunigung" Ihrer Option.'
                  : 'Gamma measures how fast Delta changes when the underlying moves. It\'s essentially the "acceleration" of your option.'}
              </p>

              <div className="bg-white rounded-lg p-6 border-2 border-green-300 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Praktisches Beispiel' : 'Practical Example'}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold text-lg mb-3">1</div>
                      <p className="text-sm text-gray-700">
                        <strong>{locale === 'de' ? 'Start:' : 'Start:'}</strong><br />
                        Aktienkurs: 100€<br />
                        Delta: 0.50<br />
                        Gamma: 0.05
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold text-lg mb-3">2</div>
                      <p className="text-sm text-gray-700">
                        <strong>{locale === 'de' ? 'Aktie steigt:' : 'Stock rises:'}</strong><br />
                        Aktienkurs: 101€<br />
                        {locale === 'de' ? 'Neues Delta:' : 'New Delta:'} 0.55<br />
                        (0.50 + 0.05)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold text-lg mb-3">3</div>
                      <p className="text-sm text-gray-700">
                        <strong>{locale === 'de' ? 'Aktie steigt weiter:' : 'Stock rises more:'}</strong><br />
                        Aktienkurs: 102€<br />
                        {locale === 'de' ? 'Neues Delta:' : 'New Delta:'} 0.60<br />
                        (0.55 + 0.05)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-3">
                    {locale === 'de' ? 'Hohes Gamma (ATM Optionen)' : 'High Gamma (ATM Options)'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Delta ändert sich schnell' : 'Delta changes quickly'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Höheres Risiko und Chance' : 'Higher risk and reward'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Gut für Trader' : 'Good for traders'}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-5 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    {locale === 'de' ? 'Niedriges Gamma (ITM/OTM)' : 'Low Gamma (ITM/OTM)'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600">▸</span>
                      <span>{locale === 'de' ? 'Delta ändert sich langsam' : 'Delta changes slowly'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600">▸</span>
                      <span>{locale === 'de' ? 'Stabilere Positionen' : 'More stable positions'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600">▸</span>
                      <span>{locale === 'de' ? 'Gut für Hedging' : 'Good for hedging'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Theta Section */}
            <div className="card bg-gradient-to-br from-yellow-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl text-yellow-600">Θ</span>
                {locale === 'de' ? 'Theta: Der Zeitverfall' : 'Theta: Time Decay'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Theta misst, wie viel Wert eine Option pro Tag verliert – ausschließlich durch den Zeitablauf.'
                  : 'Theta measures how much value an option loses per day – purely due to time passing.'}
              </p>

              <div className="bg-white rounded-lg p-6 border-2 border-yellow-300 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Zeitverfall visualisiert' : 'Time Decay Visualized'}
                </h3>
                <div className="bg-yellow-50 rounded p-5">
                  <p className="text-sm text-gray-800 mb-4">
                    <strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong> {locale === 'de' ? 'Call-Option mit Theta = -0.05' : 'Call option with Theta = -0.05'}
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between items-center bg-white rounded p-2">
                      <span>{locale === 'de' ? 'Heute:' : 'Today:'}</span>
                      <span className="font-bold">Optionspreis: 5,00€</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded p-2">
                      <span>{locale === 'de' ? 'Morgen:' : 'Tomorrow:'}</span>
                      <span className="font-bold">Optionspreis: 4,95€</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded p-2">
                      <span>{locale === 'de' ? 'In 2 Tagen:' : 'In 2 days:'}</span>
                      <span className="font-bold">Optionspreis: 4,90€</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    {locale === 'de'
                      ? '* Angenommen, alle anderen Faktoren bleiben konstant'
                      : '* Assuming all other factors remain constant'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Theta ausnutzen' : 'Exploit Theta'}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {locale === 'de'
                      ? 'Verkaufen Sie Optionen (Covered Calls, Credit Spreads):'
                      : 'Sell options (covered calls, credit spreads):'}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Theta arbeitet FÜR Sie' : 'Theta works FOR you'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Verdienen Sie täglich Geld' : 'Earn money daily'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span>{locale === 'de' ? 'Ideal bei hoher IV' : 'Ideal at high IV'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border-2 border-red-200">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Theta bekämpfen' : 'Fight Theta'}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {locale === 'de'
                      ? 'Wenn Sie Optionen kaufen (Long Calls/Puts):'
                      : 'When you buy options (long calls/puts):'}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span>{locale === 'de' ? 'Theta arbeitet GEGEN Sie' : 'Theta works AGAINST you'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span>{locale === 'de' ? 'Zeitdruck beachten' : 'Consider time pressure'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">▸</span>
                      <span>{locale === 'de' ? 'Kaufen bei niedriger IV' : 'Buy at low IV'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-600 p-5 rounded">
                <h4 className="font-bold text-yellow-900 mb-2">
                  {locale === 'de' ? 'Wichtig: Theta-Beschleunigung' : 'Important: Theta Acceleration'}
                </h4>
                <p className="text-sm text-gray-800">
                  {locale === 'de'
                    ? 'Theta beschleunigt sich in den letzten 30 Tagen vor Verfall dramatisch! At-the-Money Optionen verlieren in den letzten Wochen am schnellsten an Wert.'
                    : 'Theta accelerates dramatically in the last 30 days before expiration! At-the-money options lose value fastest in the final weeks.'}
                </p>
              </div>
            </div>

            {/* Vega Section */}
            <div className="card bg-gradient-to-br from-purple-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl text-purple-600">V</span>
                {locale === 'de' ? 'Vega: Die Volatilitäts-Sensitivität' : 'Vega: Volatility Sensitivity'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Vega misst, wie stark sich der Optionspreis ändert, wenn die implizite Volatilität (IV) um 1% steigt oder fällt.'
                  : 'Vega measures how much the option price changes when implied volatility (IV) rises or falls by 1%.'}
              </p>

              <div className="bg-white rounded-lg p-6 border-2 border-purple-300 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Vega in Aktion' : 'Vega in Action'}
                </h3>
                <div className="bg-purple-50 rounded p-5">
                  <p className="text-sm text-gray-800 mb-4">
                    <strong>{locale === 'de' ? 'Szenario:' : 'Scenario:'}</strong> {locale === 'de' ? 'Call-Option mit Vega = 0.20' : 'Call option with Vega = 0.20'}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded p-4">
                      <h4 className="text-sm font-bold text-green-900 mb-2">
                        {locale === 'de' ? 'IV steigt um 10%' : 'IV rises 10%'}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {locale === 'de' ? 'Aktueller Preis:' : 'Current price:'} 5,00€<br />
                        {locale === 'de' ? 'IV-Anstieg:' : 'IV increase:'} 30% → 40%<br />
                        <span className="text-green-700 font-bold">{locale === 'de' ? 'Neuer Preis:' : 'New price:'} 7,00€ (+2€)</span>
                      </p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <h4 className="text-sm font-bold text-red-900 mb-2">
                        {locale === 'de' ? 'IV fällt um 10%' : 'IV falls 10%'}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {locale === 'de' ? 'Aktueller Preis:' : 'Current price:'} 5,00€<br />
                        {locale === 'de' ? 'IV-Rückgang:' : 'IV decrease:'} 40% → 30%<br />
                        <span className="text-red-700 font-bold">{locale === 'de' ? 'Neuer Preis:' : 'New price:'} 3,00€ (-2€)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-900 mb-2">
                    {locale === 'de' ? 'Bei hoher IV (IV Rank > 50%)' : 'At High IV (IV Rank > 50%)'}
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    {locale === 'de'
                      ? 'Optionen sind teuer wegen hoher Volatilitätserwartung:'
                      : 'Options are expensive due to high volatility expectations:'}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Strategie:' : 'Strategy:'}</strong> {locale === 'de' ? 'Verkaufen Sie Optionen' : 'Sell options'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Profitieren:' : 'Profit:'}</strong> {locale === 'de' ? 'Wenn IV auf normal zurückkehrt' : 'When IV returns to normal'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong> {locale === 'de' ? 'Vor Earnings verkaufen' : 'Sell before earnings'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">
                    {locale === 'de' ? 'Bei niedriger IV (IV Rank < 50%)' : 'At Low IV (IV Rank < 50%)'}
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    {locale === 'de'
                      ? 'Optionen sind günstig, Volatilität könnte steigen:'
                      : 'Options are cheap, volatility could rise:'}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Strategie:' : 'Strategy:'}</strong> {locale === 'de' ? 'Kaufen Sie Optionen' : 'Buy options'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Profitieren:' : 'Profit:'}</strong> {locale === 'de' ? 'Von IV-Anstieg + Kursbewegung' : 'From IV increase + price movement'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>{locale === 'de' ? 'Beispiel:' : 'Example:'}</strong> {locale === 'de' ? 'In ruhigen Märkten kaufen' : 'Buy in calm markets'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Greeks Together */}
            <div className="card bg-gradient-to-br from-gray-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Die Greeks zusammen nutzen' : 'Using Greeks Together'}
              </h2>
              <p className="text-gray-700 mb-6">
                {locale === 'de'
                  ? 'Die wahre Kraft liegt darin, alle Greeks zusammen zu betrachten:'
                  : 'The real power lies in considering all Greeks together:'}
              </p>

              <div className="bg-white rounded-lg p-6 border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  {locale === 'de' ? 'Beispiel: Earnings-Trade' : 'Example: Earnings Trade'}
                </h3>
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 mb-3">{locale === 'de' ? 'Situation vor Earnings' : 'Situation Before Earnings'}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="bg-white rounded p-2">
                        <p className="font-semibold text-blue-900">Delta: 0.50</p>
                        <p className="text-xs text-gray-600">{locale === 'de' ? 'Neutral' : 'Neutral'}</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="font-semibold text-green-900">Gamma: 0.08</p>
                        <p className="text-xs text-gray-600">{locale === 'de' ? 'Hoch (ATM)' : 'High (ATM)'}</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="font-semibold text-yellow-900">Theta: -0.10</p>
                        <p className="text-xs text-gray-600">{locale === 'de' ? 'Schneller Verfall' : 'Fast decay'}</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="font-semibold text-purple-900">Vega: 0.25</p>
                        <p className="text-xs text-gray-600">{locale === 'de' ? 'Sehr hoch' : 'Very high'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded p-4 border-2 border-green-300">
                      <h4 className="font-bold text-green-900 mb-2">
                        {locale === 'de' ? 'Optionen verkaufen:' : 'Sell Options:'}
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>▸ {locale === 'de' ? 'Profitieren von hohem Vega' : 'Profit from high Vega'}</li>
                        <li>▸ {locale === 'de' ? 'Kassieren hohe Prämien' : 'Collect high premiums'}</li>
                        <li>▸ {locale === 'de' ? 'Nach Earnings: IV fällt (IV Crush)' : 'After earnings: IV drops (IV crush)'}</li>
                        <li>▸ {locale === 'de' ? 'Theta arbeitet für Sie' : 'Theta works for you'}</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded p-4 border-2 border-red-300">
                      <h4 className="font-bold text-red-900 mb-2">
                        {locale === 'de' ? 'Optionen kaufen:' : 'Buy Options:'}
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>▸ {locale === 'de' ? 'Riskant bei hoher IV' : 'Risky at high IV'}</li>
                        <li>▸ {locale === 'de' ? 'Hohe Kosten durch Vega' : 'High cost due to Vega'}</li>
                        <li>▸ {locale === 'de' ? 'IV Crush schadet' : 'IV crush hurts'}</li>
                        <li>▸ {locale === 'de' ? 'Theta arbeitet gegen Sie' : 'Theta works against you'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="card bg-gradient-to-br from-blue-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Schnellreferenz: Die Greeks' : 'Quick Reference: The Greeks'}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-indigo-100">
                      <th className="p-3 text-left font-bold text-gray-900">{locale === 'de' ? 'Greek' : 'Greek'}</th>
                      <th className="p-3 text-left font-bold text-gray-900">{locale === 'de' ? 'Misst' : 'Measures'}</th>
                      <th className="p-3 text-left font-bold text-gray-900">{locale === 'de' ? 'Käufer möchten' : 'Buyers Want'}</th>
                      <th className="p-3 text-left font-bold text-gray-900">{locale === 'de' ? 'Verkäufer möchten' : 'Sellers Want'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-blue-900">Delta (Δ)</td>
                      <td className="p-3">{locale === 'de' ? 'Kursbewegung' : 'Price movement'}</td>
                      <td className="p-3">{locale === 'de' ? 'Hohes Delta' : 'High delta'}</td>
                      <td className="p-3">{locale === 'de' ? 'Niedriges Delta' : 'Low delta'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-semibold text-green-900">Gamma (Γ)</td>
                      <td className="p-3">{locale === 'de' ? 'Delta-Änderung' : 'Delta change'}</td>
                      <td className="p-3">{locale === 'de' ? 'Hohes Gamma' : 'High gamma'}</td>
                      <td className="p-3">{locale === 'de' ? 'Niedriges Gamma' : 'Low gamma'}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-yellow-900">Theta (Θ)</td>
                      <td className="p-3">{locale === 'de' ? 'Zeitverfall' : 'Time decay'}</td>
                      <td className="p-3">{locale === 'de' ? 'Niedriges Theta' : 'Low theta'}</td>
                      <td className="p-3">{locale === 'de' ? 'Hohes Theta' : 'High theta'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-semibold text-purple-900">Vega (V)</td>
                      <td className="p-3">{locale === 'de' ? 'IV-Änderung' : 'IV change'}</td>
                      <td className="p-3">{locale === 'de' ? 'IV steigt' : 'IV rises'}</td>
                      <td className="p-3">{locale === 'de' ? 'IV fällt' : 'IV falls'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Box */}
            <div className="card bg-gradient-to-br from-indigo-600 to-purple-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Meistern Sie die Greeks!'
                    : 'Master the Greeks!'}
                </h3>
                <p className="text-purple-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Nutzen Sie professionelle Trading-Tools bei Libertex, um die Greeks in Echtzeit zu analysieren!'
                    : 'Use professional trading tools at Libertex to analyze the Greeks in real-time!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Jetzt starten' : 'Start Now'}
                </a>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Das Verständnis der Greeks ist wichtig, aber garantiert keine Gewinne. Optionshandel birgt erhebliche Risiken und kann zum Totalverlust führen. Diese Informationen dienen nur zu Bildungszwecken.'
                  : 'Understanding the Greeks is important but doesn\'t guarantee profits. Options trading carries significant risks and can result in total loss. This information is for educational purposes only.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2025-01-05</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
