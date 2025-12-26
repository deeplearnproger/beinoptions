import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Deribit Bitcoin Options OI erreicht Rekord $42,5 Mrd.: Was es signalisiert'
      : 'Deribit Bitcoin Options Open Interest Hits Record $42.5B: What It Signals',
    description: locale === 'de'
      ? 'BTC Options Open Interest auf Deribit erreicht Rekord von $42,5 Mrd. Was das für Volatilität und Marktbewegungen bedeutet.'
      : 'BTC options open interest on Deribit hit a record $42.5B. What this means for volatility and market movements.',
    canonical: `https://beinoptions.com/${locale}/news/deribit-btc-options-rekord-oi`,
    keywords: ['Deribit', 'Bitcoin', 'Open Interest', 'BTC Options', 'Volatility', 'Crypto Derivatives'],
    type: 'article',
    publishedTime: '2025-12-22T10:00:00Z',
    modifiedTime: '2025-12-22T10:00:00Z',
    author: 'BeInOptions Team',
    section: 'Crypto Options',
    locale,
  });
}

export default function DeribitOIRecordPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-600 via-slate-900 to-orange-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-amber-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">
                Crypto Options
              </span>
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                Open Interest
              </span>
              <span className="text-amber-200">22. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Deribit BTC Options OI erreicht Rekord $42,5 Mrd.'
                : 'Deribit Bitcoin Options OI Hits Record $42.5B'}
            </h1>

            <p className="text-xl text-amber-100 mb-6">
              {isGerman
                ? 'Rekord-Open-Interest signalisiert massive Positionierung – mit potenziellen Auswirkungen auf Volatilität rund um Verfallstermine.'
                : 'Record open interest signals massive positioning – with potential implications for volatility around expiries.'}
            </p>

            <div className="flex items-center gap-4 text-amber-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">BO</span>
                </div>
                <span>BeInOptions Team</span>
              </div>
              <span>•</span>
              <span>{isGerman ? '5 Min. Lesezeit' : '5 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200"
          alt={isGerman ? 'Bitcoin Charts und Daten' : 'Bitcoin Charts and Data'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'Bitcoin Options Rekord' : 'Bitcoin Options Record'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* TL;DR */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
                TL;DR
              </h2>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'BTC Options Open Interest auf Deribit erreichte Rekord von $42,5 Mrd., als BTC neue Höchststände erreichte.'
                    : 'BTC options open interest on Deribit hit a record $42.5B as BTC surged to new highs.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Rekord-OI deutet auf massive Positionierung hin (bullische Calls, Hedging-Puts und Market-Maker-Inventar).'
                    : 'Record OI suggests heavy positioning (bullish calls, hedging puts, and market maker inventory).'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Großes OI kann Volatilität um Verfallstermine und wichtige Preisniveaus verstärken – ähnlich wie "Pinning"-Effekte bei Aktienoptionen.'
                    : 'Big OI can amplify volatility around expiries and key price levels—similar to "pinning" effects in equity options.'}</span>
                </li>
              </ul>
            </div>

            {/* What Happened */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isGerman ? 'Was ist passiert?' : 'What Happened?'}
              </h2>
              <p className="text-orange-800 leading-relaxed mb-4">
                {isGerman
                  ? 'Laut CoinDesk erreichte das nominale Open Interest in Bitcoin-Optionen auf Deribit $42,5 Milliarden – ein Rekord zu diesem Zeitpunkt – als Bitcoin über neue Höchststände rallyte.'
                  : 'According to CoinDesk, notional open interest in Bitcoin options on Deribit reached $42.5 billion, a record at the time, as Bitcoin rallied above new highs.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900">$42,5 Mrd.</div>
                  <div className="text-xs text-orange-600">{isGerman ? 'Rekord Open Interest' : 'Record Open Interest'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900">BTC + ETH</div>
                  <div className="text-xs text-orange-600">{isGerman ? 'Hauptwährungen' : 'Main Currencies'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900">ATH</div>
                  <div className="text-xs text-orange-600">{isGerman ? 'Bitcoin Allzeithoch' : 'Bitcoin All-Time High'}</div>
                </div>
              </div>
              <p className="text-orange-800 leading-relaxed">
                {isGerman
                  ? 'Der Bericht stellte fest, dass Trader aktiv in höheren Strike-Calls positioniert waren (bullische Wetten), während die gesamte Derivateaktivität stark zunahm.'
                  : 'The report noted that traders were actively positioning in higher strike calls (bullish bets), while overall derivatives activity increased sharply.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>{isGerman ? 'Quelle:' : 'Source:'}</strong>{' '}
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">CoinDesk</a>
                </p>
              </div>
            </div>

            {/* Info Box: What is Open Interest */}
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Was ist Open Interest (OI)?' : 'What is Open Interest (OI)?'}
              </h3>
              <p className="text-slate-700 mb-4">
                {isGerman
                  ? 'Open Interest (OI) ist eine wichtige Options-Metrik, die die Gesamtzahl der offenen (aktiven) Kontrakte anzeigt.'
                  : 'Open Interest (OI) is a key options metric that shows the total number of open (active) contracts.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Volume</h4>
                  <p className="text-sm text-slate-600">
                    {isGerman
                      ? '= Was heute gehandelt wurde'
                      : '= What traded today'}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Open Interest</h4>
                  <p className="text-sm text-slate-600">
                    {isGerman
                      ? '= Was noch offen ist (aktive Positionen)'
                      : '= What is still open (active positions)'}
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  {isGerman
                    ? 'Wenn OI Rekorde erreicht, bedeutet das normalerweise: Trader haben große direktionale Exposure aufgebaut, Market Maker halten größere Hedges, und Verfallsereignisse werden einflussreicher.'
                    : 'When OI hits records, it usually means: Traders have built large directional exposure, market makers hold larger hedges, and expiry events become more impactful.'}
                </p>
              </div>
            </div>

            {/* Why Record OI Moves Markets */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                {isGerman ? 'Warum Rekord-OI Märkte bewegen kann' : 'Why Record OI Can Move Markets'}
              </h2>
              <p className="text-purple-800 leading-relaxed mb-4">
                {isGerman
                  ? 'Sowohl bei Aktien- als auch Krypto-Optionen kann großes Open Interest "Feedback-Schleifen" erzeugen:'
                  : 'In both equity and crypto options, large open interest can create "feedback loops":'}
              </p>
              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Delta Hedging Effekt' : 'Delta Hedging Effect'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Wenn der Preis steigt und Call-OI hoch ist, müssen Market Maker möglicherweise den Underlying kaufen, um zu hedgen (Delta-Hedging). Dieses Hedging kann den Preis weiter nach oben treiben.'
                      : 'When price rises and call OI is high, market makers may need to buy underlying to hedge (delta hedging). That hedging can push price further up.'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Gamma-Effekt' : 'Gamma Effect'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Der verstärkende Effekt, wenn Hedging weitere Preisbewegungen auslöst, wird manchmal als Gamma-Effekt bezeichnet.'
                      : 'The amplifying effect when hedging triggers further price movement is sometimes called a gamma effect.'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Pin Risk bei Verfall' : 'Pin Risk at Expiry'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Nahe wichtiger Strikes kann der Preis "kleben" oder heftig um den Verfallstermin schwanken. Das ist ein Grund, warum Krypto intensive Bewegungen nahe großer Verfallsdaten erleben kann.'
                      : 'Near key strikes, price can "stick" or whip violently around expiration. This is one reason why crypto can experience intense moves near large expiry dates.'}
                  </p>
                </div>
              </div>
            </div>

            {/* What It Means for Stocks & Options */}
            <div className="bg-gradient-to-r from-primary-50 to-indigo-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                {isGerman ? 'Was bedeutet das für Aktien & Optionen?' : 'What Does It Mean for Stocks & Options?'}
              </h2>

              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Diese Krypto-Options-Dynamik ist sehr ähnlich zu dem, was bei großen Aktienindizes (SPX) passiert bei:'
                  : 'This crypto options dynamic is very similar to what happens in major equity indices (SPX) around:'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-gray-900">{isGerman ? 'Monatliche Verfälle' : 'Monthly Expiries'}</div>
                  <p className="text-xs text-gray-600">{isGerman ? 'Große OpEx-Tage' : 'Big OpEx Days'}</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-gray-900">{isGerman ? 'Earnings-Wochen' : 'Earnings Weeks'}</div>
                  <p className="text-xs text-gray-600">{isGerman ? 'Hohe IV-Umgebung' : 'High IV Environment'}</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-gray-900">Meme-Stock Squeezes</div>
                  <p className="text-xs text-gray-600">{isGerman ? 'Call-getriebene Rallyes' : 'Call-driven Rallies'}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Auch wenn Ihr Hauptinteresse Aktien & Optionen ist, ist diese Story relevant, weil sie zeigt:'
                  : 'So even if your core interest is stocks & options, this story matters because it shows:'}
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Options-Positionierung und Hedging ist jetzt eine wichtige Kraft in der Krypto-Preisbewegung'
                    : 'Options positioning and hedging is now a major force in crypto price action'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Krypto verhält sich zunehmend wie ein Volatilitätsmarkt, nicht nur ein "Spot"-Markt'
                    : 'Crypto is increasingly behaving like a volatility market, not just a "spot" market'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Techniken aus der Aktienoptionen-Analyse (OI-Clustering, Pin-Risk, Gamma-Exposure) migrieren zu Krypto'
                    : 'Techniques used in equity options analytics (OI clustering, pin risk, gamma exposure) are migrating to crypto'}</span>
                </li>
              </ul>
            </div>

            {/* Key Metrics to Monitor */}
            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8 not-prose">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {isGerman ? 'Wichtige Metriken zum Beobachten' : 'Key Metrics to Monitor'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium mb-1">IV</div>
                  <p className="text-xs text-gray-300">Implied Volatility</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium mb-1">Skew</div>
                  <p className="text-xs text-gray-300">{isGerman ? 'Put/Call Verhältnis' : 'Put/Call Ratio'}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium mb-1">Put/Call OI</div>
                  <p className="text-xs text-gray-300">{isGerman ? 'Positionierung' : 'Positioning'}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium mb-1">Max Pain</div>
                  <p className="text-xs text-gray-300">{isGerman ? 'Strike-Konzentration' : 'Strike Concentration'}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium mb-1">Dealer Gamma</div>
                  <p className="text-xs text-gray-300">{isGerman ? 'Hedging-Druck' : 'Hedging Pressure'}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium mb-1">Expiry Date</div>
                  <p className="text-xs text-gray-300">{isGerman ? 'Verfallstermine' : 'Expiration Dates'}</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-300">
                  {isGerman ? 'Datenquelle:' : 'Data source:'}{' '}
                  <a href="https://www.coinglass.com/options" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline hover:text-primary-300">
                    CoinGlass Options Dashboard
                  </a>
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Ist Rekord-Open-Interest bullisch?' : 'Is record open interest bullish?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Nicht immer. OI umfasst Hedges und Market-Maker-Inventar, nicht nur bullische Wetten.'
                      : 'Not always. OI includes hedges and market maker inventory, not just bullish bets.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Kann hohes OI Volatilität verursachen?' : 'Can high OI cause volatility?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Ja – besonders nahe Verfallsterminen und wichtigen Strikes.'
                      : 'Yes—especially near expiries and key strikes.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Was ist der Unterschied zwischen OI und Volume?' : 'What\'s the difference between OI and volume?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Volume sind gehandelte Kontrakte; OI sind offene Kontrakte.'
                      : 'Volume is traded contracts; OI is open contracts.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Warum ist OI bei Krypto manchmal wichtiger als bei Aktien?' : 'Why does OI matter more in crypto than stocks sometimes?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Weil Krypto-Märkte 24/7 handeln und schneller auf Hedging-Flows reagieren können.'
                      : 'Because crypto markets trade 24/7 and can react faster to hedging flows.'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Wo kann ich BTC Options OI verfolgen?' : 'Where can I track BTC options OI?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Deribit Analytics, CoinGlass oder institutionelle Dashboards.'
                      : 'Deribit analytics, CoinGlass, or institutional dashboards.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-3">{isGerman ? 'Quellen' : 'Sources'}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinDesk: Record $42.5B OI Report
                  </a>
                </li>
                <li>
                  <a href="https://www.coinglass.com/options" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinGlass: Options Dashboard (OI, IV, Max Pain)
                  </a>
                </li>
              </ul>
            </div>

            {/* Risk Disclaimer */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 not-prose">
              <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {isGerman ? 'Risikohinweis' : 'Risk Disclaimer'}
              </h3>
              <p className="text-amber-800 text-sm">
                {isGerman
                  ? 'Der Handel mit Krypto-Optionen birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Diese Analyse dient ausschließlich Informationszwecken und stellt keine Anlageberatung dar.'
                  : 'Crypto options trading involves significant risks and is not suitable for all investors. This analysis is for informational purposes only and does not constitute investment advice.'}
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Weiterführende Artikel' : 'Related Articles'}
              </h3>
              <div className="space-y-3">
                <Link
                  href={`/${locale}/news/coinbase-deribit-akquisition`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Coinbase kauft Deribit' : 'Coinbase Acquires Deribit'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? '$2,9 Mrd. Deal für Krypto-Optionen' : '$2.9B deal for crypto options'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/iv-guide`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Implied Volatility Guide
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'IV verstehen und nutzen' : 'Understanding and using IV'}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Share & Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Alle Nachrichten' : 'All News'}
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">{isGerman ? 'Teilen:' : 'Share:'}</span>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="p-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Giscus Comments */}
          <Giscus />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 to-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Implied Volatility verstehen'
                : 'Understand Implied Volatility'}
            </h2>
            <p className="text-amber-200 mb-8">
              {isGerman
                ? 'Lernen Sie, wie IV funktioniert und wie Sie es für bessere Trading-Entscheidungen nutzen können.'
                : 'Learn how IV works and how to use it for better trading decisions.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/iv-guide`}
                className="px-8 py-3 bg-white text-amber-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'IV Guide lesen' : 'Read IV Guide'}
              </Link>
              <Link
                href={`/${locale}/options-greeks`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-amber-900 transition-colors"
              >
                {isGerman ? 'Options Greeks lernen' : 'Learn Options Greeks'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
