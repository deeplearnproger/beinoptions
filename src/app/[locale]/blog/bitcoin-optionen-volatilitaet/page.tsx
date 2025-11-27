import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Bitcoin fällt unter 90.000 USD: Welche Rolle Optionsstrategien jetzt spielen | BeInOptions' : 'Bitcoin Drops Below $90,000: How Options Are Driving Crypto Volatility | BeInOptions',
    description: locale === 'de'
      ? 'Bitcoin unter Druck: Wie Optionen die Volatilität am Kryptomarkt verstärken und was deutsche Trader jetzt wissen müssen.'
      : 'Bitcoin under pressure: How options amplify crypto market volatility and what traders need to know now.',
  });
}

export default function BitcoinOptionsVolatilityPost({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}/blog`} className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'de' ? 'Zurück zum Blog' : 'Back to Blog'}
            </Link>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Bitcoin unter Druck: Optionen verstärken die Volatilität am Kryptomarkt' : 'Bitcoin Under Pressure: Options Trading Increases Crypto Volatility'}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="font-medium">BeInOptions Team</span>
              <span>•</span>
              <time>26. November 2025</time>
              <span>•</span>
              <span>{locale === 'de' ? '8 Min. Lesezeit' : '8 min read'}</span>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white mb-8">
              <p className="text-xl leading-relaxed flex items-start gap-3">
                <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>
                  {locale === 'de'
                    ? 'Der Kryptomarkt erlebt erneut starke Bewegungen. Bitcoin fiel unter 90.000 USD; Optionsaktivitäten verstärken laut Analysten die Volatilität.'
                    : 'The crypto market is experiencing strong movements again. Bitcoin fell below $90,000 as crypto options amplified market volatility.'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Market Situation */}
            <div className="card mb-8">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-0">
                  {locale === 'de' ? 'Die aktuelle Marktsituation' : 'The Current Market Situation'}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {locale === 'de'
                  ? 'Bitcoin durchbrach die psychologisch wichtige Marke von 90.000 USD nach unten. Der Rückgang wird von erhöhter Optionsaktivität begleitet, die die Kursbewegungen verstärkt.'
                  : 'Bitcoin broke through the psychologically important mark of $90,000 downwards. The decline is accompanied by increased options activity that amplifies price movements.'}
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-gray-700 text-base mb-0">
                  <strong>Quelle:</strong> <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Reuters</a> — Bitcoin bears dominate: odds of year-end price below $90,000 rise
                </p>
              </div>
            </div>

            {/* Why is Bitcoin Falling */}
            <div className="card mb-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {locale === 'de' ? 'Warum fällt Bitcoin?' : 'Why is Bitcoin Dropping?'}
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                    <span className="text-red-600 mr-2">1.</span>
                    {locale === 'de' ? 'Gestiegene Short-Positionen' : 'Rising Short Positions'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {locale === 'de'
                      ? 'Institutionelle Anleger haben ihre Short-Positionen deutlich erhöht. Über Put-Optionen und Futures setzen große Player auf fallende Kurse.'
                      : 'Institutional investors have significantly increased their short positions. Through Put options and futures, large players are betting on falling prices.'}
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                    <span className="text-red-600 mr-2">2.</span>
                    {locale === 'de' ? 'Optionsmärkte signalisieren höhere Volatilität' : 'Options Markets Signal Higher Volatility'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {locale === 'de'
                      ? 'Die implizite Volatilität (IV) in Bitcoin-Optionen ist stark gestiegen. Dies deutet darauf hin, dass der Markt weitere große Bewegungen erwartet.'
                      : 'Implied volatility (IV) in Bitcoin options has risen sharply. This indicates that the market expects further large movements.'}
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                    <span className="text-red-600 mr-2">3.</span>
                    {locale === 'de' ? 'Makroökonomische Unsicherheit' : 'Macroeconomic Uncertainty'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {locale === 'de'
                      ? 'Globale wirtschaftliche Unsicherheiten, Zinspolitik und regulatorische Entwicklungen belasten den gesamten Kryptomarkt.'
                      : 'Global economic uncertainties, interest rate policies, and regulatory developments weigh on the entire crypto market.'}
                  </p>
                </div>
              </div>
            </div>

            {/* How Options Affect Crypto */}
            <div className="card mb-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Wie wirken Optionen auf die Kryptomärkte?' : 'How Do Options Affect Crypto Markets?'}
              </h2>

              <div className="bg-purple-50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {locale === 'de' ? 'Put-Optionen erhöhen Verkaufsdruck' : 'Put Options Increase Selling Pressure'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {locale === 'de'
                    ? 'Wenn große Mengen an Put-Optionen gekauft werden, müssen Market Maker sich absichern, indem sie Bitcoin verkaufen oder Short-Positionen eröffnen. Dies verstärkt die Abwärtsbewegung.'
                    : 'When large amounts of Put options are purchased, market makers must hedge by selling Bitcoin or opening short positions. This amplifies the downward movement.'}
                </p>
                <div className="bg-white rounded p-4 border border-purple-200">
                  <p className="text-gray-700 text-sm mb-0">
                    <strong>{locale === 'de' ? 'Technischer Effekt:' : 'Technical Effect:'}</strong> {locale === 'de' ? 'Je mehr Puts gekauft werden, desto mehr Bitcoin muss verkauft werden → Preis fällt weiter → mehr Puts werden gekauft (Spirale)' : 'The more Puts are bought, the more Bitcoin must be sold → price falls further → more Puts are bought (spiral)'}
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {locale === 'de' ? 'Gamma-Squeezes bei Verfallsdaten' : 'Gamma Squeezes at Expiration Dates'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {locale === 'de'
                    ? 'Große Verfallsdaten (Options Expiry) führen häufig zu extremer Volatilität. Market Maker müssen ihre Hedges anpassen, was zu plötzlichen Kursbewegungen führt.'
                    : 'Large expiration dates (Options Expiry) often lead to extreme volatility. Market makers must adjust their hedges, leading to sudden price movements.'}
                </p>
                <div className="bg-white rounded p-4 border border-purple-200">
                  <p className="text-gray-700 text-sm mb-0">
                    <strong>{locale === 'de' ? 'Max Pain Theory:' : 'Max Pain Theory:'}</strong> {locale === 'de' ? 'Der Preis bewegt sich oft zu dem Punkt, an dem die meisten Optionen wertlos verfallen ("Maximum Pain" für Optionskäufer)' : 'The price often moves to the point where most options expire worthless ("Maximum Pain" for option buyers)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Box */}
            <div className="card mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {locale === 'de' ? 'Marktdaten im Überblick' : 'Market Data Overview'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">{locale === 'de' ? 'Put/Call Ratio' : 'Put/Call Ratio'}</div>
                  <div className="text-2xl font-bold text-red-600">1.8</div>
                  <div className="text-xs text-gray-500">{locale === 'de' ? 'Überwiegend bearish' : 'Predominantly bearish'}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">{locale === 'de' ? 'Implizite Volatilität' : 'Implied Volatility'}</div>
                  <div className="text-2xl font-bold text-orange-600">+45%</div>
                  <div className="text-xs text-gray-500">{locale === 'de' ? 'Stark erhöht' : 'Significantly increased'}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">{locale === 'de' ? 'Open Interest Puts' : 'Open Interest Puts'}</div>
                  <div className="text-2xl font-bold text-purple-600">$2.8B</div>
                  <div className="text-xs text-gray-500">{locale === 'de' ? 'Rekordniveau' : 'Record level'}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-sm text-gray-600 mb-1">{locale === 'de' ? 'Nächster großer Expiry' : 'Next Large Expiry'}</div>
                  <div className="text-2xl font-bold text-blue-600">31. Dez</div>
                  <div className="text-xs text-gray-500">{locale === 'de' ? 'Hohe Aktivität erwartet' : 'High activity expected'}</div>
                </div>
              </div>
            </div>

            {/* For German Traders */}
            <div className="card mb-8 bg-yellow-50 border-2 border-yellow-300">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locale === 'de' ? 'Was heißt das für deutsche Trader?' : 'What Does This Mean for German Traders?'}
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Große Chancen, hohes Risiko:' : 'Great Opportunities, High Risk:'}</strong> {locale === 'de' ? 'Kryptoderivate bieten große Chancen — jedoch nur für erfahrene Anleger' : 'Crypto derivatives offer great opportunities — but only for experienced investors'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'IV-Kenntnisse wichtig:' : 'IV Knowledge Important:'}</strong> {locale === 'de' ? 'Besonders wichtig: Kenntnisse über IV (implizite Volatilität) und deren Auswirkungen' : 'Especially important: knowledge of IV (implied volatility) and its effects'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{locale === 'de' ? 'Liquidität beachten:' : 'Watch Liquidity:'}</strong> {locale === 'de' ? 'Nicht alle Strikes haben ausreichende Liquidität — dies kann zu ungünstigen Fills führen' : 'Not all strikes have sufficient liquidity — this can lead to unfavorable fills'}</span>
                </li>
              </ul>
            </div>

            {/* Trading Strategies */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                {locale === 'de' ? 'Strategien für volatile Krypto-Märkte' : 'Strategies for Volatile Crypto Markets'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
                  <h4 className="font-bold text-lg text-green-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Long Straddle' : 'Long Straddle'}
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {locale === 'de'
                      ? 'Kaufen Sie Call UND Put mit gleichem Strike. Profitieren Sie von großen Bewegungen in beide Richtungen.'
                      : 'Buy Call AND Put with same strike. Profit from large movements in both directions.'}
                  </p>
                  <div className="text-xs text-green-700">
                    ✓ {locale === 'de' ? 'Gut bei hoher erwarteter Volatilität' : 'Good for high expected volatility'}
                  </div>
                </div>

                <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
                  <h4 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Protective Put' : 'Protective Put'}
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {locale === 'de'
                      ? 'Sichern Sie Ihre Bitcoin-Position mit Put-Optionen ab. Schutz vor weiteren Kursverlusten.'
                      : 'Hedge your Bitcoin position with Put options. Protection against further price losses.'}
                  </p>
                  <div className="text-xs text-blue-700">
                    ✓ {locale === 'de' ? 'Portfolio-Absicherung' : 'Portfolio hedging'}
                  </div>
                </div>

                <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
                  <h4 className="font-bold text-lg text-purple-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Bear Put Spread' : 'Bear Put Spread'}
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {locale === 'de'
                      ? 'Kaufen Sie einen Put, verkaufen Sie einen Put mit niedrigerem Strike. Begrenzt Kosten und Gewinn.'
                      : 'Buy a Put, sell a Put with lower strike. Limits costs and profit.'}
                  </p>
                  <div className="text-xs text-purple-700">
                    ✓ {locale === 'de' ? 'Bearish, aber kosteneffizient' : 'Bearish but cost-efficient'}
                  </div>
                </div>

                <div className="border-2 border-orange-200 rounded-lg p-5 bg-orange-50">
                  <h4 className="font-bold text-lg text-orange-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Short Put (Vorsicht!)' : 'Short Put (Caution!)'}
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {locale === 'de'
                      ? 'Verkaufen Sie Puts bei hoher IV. Profitieren Sie vom IV-Crush. Nur für Erfahrene!'
                      : 'Sell Puts when IV is high. Profit from IV crush. For experienced traders only!'}
                  </p>
                  <div className="text-xs text-orange-700">
                    ⚠️ {locale === 'de' ? 'Hohes Risiko' : 'High risk'}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 text-center">
              <div className="text-5xl mb-4">₿</div>
              <h3 className="text-3xl font-heading font-bold mb-4">
                {locale === 'de' ? 'Bereit für Krypto-Options-Trading?' : 'Ready for Crypto Options Trading?'}
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                {locale === 'de'
                  ? 'Handeln Sie Krypto-Optionen mit professionellen Tools:'
                  : 'Trade crypto options with professional tools:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Krypto-CFDs & mehr' : 'Crypto CFDs & more'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Professionelle Plattform' : 'Professional platform'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? '24/7 Handel' : '24/7 trading'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'CySEC reguliert' : 'CySEC regulated'}</span>
                </div>
              </div>
              <a
                href="https://libertex.com/de/signup"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                {locale === 'de' ? 'Jetzt kostenlos registrieren bei Libertex' : 'Register for free at Libertex now'}
              </a>
              <p className="text-sm text-blue-200 mt-4">
                {locale === 'de' ? '✓ Nur 100€ Mindesteinlage • ✓ Über 70 Kryptowährungen' : '✓ Only €100 minimum deposit • ✓ Over 70 cryptocurrencies'}
              </p>
            </div>

            {/* Risks Warning */}
            <div className="card bg-red-50 border-2 border-red-300">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {locale === 'de' ? 'Wichtige Risiken bei Krypto-Optionen' : 'Important Risks with Crypto Options'}
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">•</span>
                  <span><strong>{locale === 'de' ? 'Extreme Volatilität:' : 'Extreme Volatility:'}</strong> {locale === 'de' ? 'Kryptomärkte sind wesentlich volatiler als traditionelle Märkte' : 'Crypto markets are much more volatile than traditional markets'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">•</span>
                  <span><strong>{locale === 'de' ? 'Totalverlustrisiko:' : 'Total Loss Risk:'}</strong> {locale === 'de' ? 'Der komplette Einsatz kann verloren gehen' : 'The entire investment can be lost'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">•</span>
                  <span><strong>{locale === 'de' ? 'Liquiditätsrisiken:' : 'Liquidity Risks:'}</strong> {locale === 'de' ? 'In volatilen Phasen kann die Liquidität stark sinken' : 'In volatile phases, liquidity can drop significantly'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">•</span>
                  <span><strong>{locale === 'de' ? 'Nur für Erfahrene:' : 'For Experienced Only:'}</strong> {locale === 'de' ? 'Krypto-Derivate sind nur für sehr erfahrene Trader geeignet' : 'Crypto derivatives are only suitable for very experienced traders'}</span>
                </li>
              </ul>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}
