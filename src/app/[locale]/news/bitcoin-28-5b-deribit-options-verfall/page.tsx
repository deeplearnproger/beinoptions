import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Bitcoin fällt vor $28,5 Mrd. Deribit Options-Verfall'
      : 'Bitcoin Slips Ahead of $28.5B Deribit Options Expiry',
    description: locale === 'de'
      ? 'Bitcoin fiel unter $88.000 vor einem massiven $28,5 Mrd. Deribit Options-Verfall. Was das für Volatilität und Gamma-Hedging bedeutet.'
      : 'Bitcoin dipped below $88,000 ahead of a massive $28.5B Deribit options expiry. What this means for volatility and gamma hedging.',
    canonical: `https://beinoptions.com/${locale}/news/bitcoin-28-5b-deribit-options-verfall`,
    keywords: ['Bitcoin', 'Deribit', 'Options', 'Expiry', 'Volatility', 'Gamma', 'Crypto Options', 'BTC'],
    type: 'article',
    publishedTime: '2025-12-23T10:00:00Z',
    modifiedTime: '2025-12-23T10:00:00Z',
    author: 'BeInOptions Team',
    section: 'Crypto Options',
    locale,
  });
}

export default function BitcoinDeribitExpiryPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-700 via-slate-900 to-orange-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                Crypto Options
              </span>
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Verfall' : 'Expiry'}
              </span>
              <span className="text-red-200">23. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Bitcoin fällt vor $28,5 Mrd. Deribit Options-Verfall'
                : 'Bitcoin Slips Ahead of $28.5B Deribit Options Expiry'}
            </h1>

            <p className="text-xl text-red-100 mb-6">
              {isGerman
                ? 'Massive Options-Verfälle lösen oft Volatilitätsspitzen aus – ein Phänomen, das SPX-Optionshändlern bekannt ist.'
                : 'Massive options expiries often trigger volatility spikes – a phenomenon familiar to SPX options traders.'}
            </p>

            <div className="flex items-center gap-4 text-red-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
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
          src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200"
          alt={isGerman ? 'Bitcoin Kurs Chart' : 'Bitcoin Price Chart'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'Bitcoin vor großem Verfall' : 'Bitcoin ahead of major expiry'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* TL;DR */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
                TL;DR
              </h2>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Bitcoin fiel unter ein wichtiges Level, als Trader sich auf einen massiven $28,5 Mrd. Deribit Options-Verfall vorbereiteten.'
                    : 'Bitcoin dipped below a key level as traders positioned for a massive $28.5B Deribit options expiry.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Große Verfälle lösen oft Volatilitätsspitzen aus, da Dealer Gamma-Exposure hedgen und Trader Risiken anpassen.'
                    : 'Large expiries often trigger volatility spikes, as dealers hedge gamma exposure and traders adjust risk.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Für Aktien- & Optionshändler spiegelt dies das "Pinning/Gamma"-Verhalten bei SPX-Monatsverfällen wider.'
                    : 'For stocks & options traders, this mirrors the "pinning/gamma" behavior seen in SPX monthly expirations.'}</span>
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
                  ? 'Bitcoin fiel unter $88.000, als Trader sich auf einen großen Deribit Options-Verfall mit einem Nominalwert von $28,5 Milliarden vorbereiteten, laut CoinDesk.'
                  : 'Bitcoin slipped below $88,000 as traders braced for a major Deribit options expiration totaling $28.5B notional value, according to CoinDesk.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900">$28,5 Mrd.</div>
                  <div className="text-xs text-orange-600">{isGerman ? 'Options-Verfall' : 'Options Expiry'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900">&lt;$88K</div>
                  <div className="text-xs text-orange-600">{isGerman ? 'BTC Preisniveau' : 'BTC Price Level'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900">Deribit</div>
                  <div className="text-xs text-orange-600">{isGerman ? 'Größte Krypto-Options-Börse' : 'Largest Crypto Options Exchange'}</div>
                </div>
              </div>
              <p className="text-orange-800 leading-relaxed">
                {isGerman
                  ? 'Die Bewegung kam während einer Phase dünner Feiertagsliquidität, wobei Investoren sich auf die Positionierung zum Verfall konzentrierten.'
                  : 'The move came during a period of thinning holiday liquidity, with investors focusing on positioning into the expiry.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>{isGerman ? 'Quelle:' : 'Source:'}</strong>{' '}
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">CoinDesk</a>
                </p>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                {isGerman ? 'Warum ist das wichtig?' : 'Why Does It Matter?'}
              </h2>
              <p className="text-purple-800 leading-relaxed mb-4">
                {isGerman
                  ? 'Krypto-Options-Verfälle sind zu einem der stärksten kurzfristigen Katalysatoren für BTC-Volatilität geworden, weil:'
                  : 'Crypto options expiries have become one of the strongest short-term catalysts for BTC volatility because:'}
              </p>
              <div className="space-y-3">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-1">{isGerman ? 'Strike-Konzentration' : 'Strike Concentration'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Der Markt konzentriert sich oft um bestimmte Strikes ("Pain Points")'
                      : 'The market often concentrates around specific strikes ("pain points")'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-1">{isGerman ? 'Dealer-Hedging' : 'Dealer Hedging'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Dealer hedgen Delta und Gamma aggressiv nahe dem Verfall'
                      : 'Dealers hedge delta and gamma aggressively near expiration'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-1">{isGerman ? 'Positions-Rollover' : 'Position Rolling'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Trader rollen Positionen vorwärts oder schließen sie, was Spot/Futures-Flows erzwingt'
                      : 'Traders roll positions forward or close them, forcing spot/futures flows'}
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-purple-100 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">
                  {isGerman
                    ? '→ Je größer der Verfall, desto stärker können die mechanischen Flows werden.'
                    : '→ The bigger the expiry, the stronger the mechanical flows can become.'}
                </p>
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
                  ? 'Für jeden, der mit Aktien-/Index-Optionsmärkten vertraut ist, ist dies extrem ähnlich zu:'
                  : 'For anyone familiar with stock/index options markets, this is extremely similar to:'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-gray-900">SPX Monthly Expiry</div>
                  <p className="text-xs text-gray-600">{isGerman ? 'Monatlicher Options-Verfall' : 'Monthly options expiration'}</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-gray-900">Gamma-Driven</div>
                  <p className="text-xs text-gray-600">{isGerman ? 'Preisverhalten nahe Strikes' : 'Price behavior near strikes'}</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-gray-900">Pin Risk</div>
                  <p className="text-xs text-gray-600">{isGerman ? 'Max-Pain-Region' : 'Max pain region'}</p>
                </div>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{isGerman ? 'Kernbotschaft:' : 'Key Takeaway:'}</h4>
                <p className="text-gray-700">
                  {isGerman
                    ? 'Options-Positionierung kann Preisbewegungen antreiben, auch wenn Spot-Trader inaktiv sind. Deshalb sind Tools wie Verfall-Kalender, OI-nach-Strike-Charts und IV-Tracker so wertvoll.'
                    : 'Options positioning can drive price action, even if spot traders are inactive. That\'s why tools like expiry calendars, OI by strike charts, and IV trackers are so valuable.'}
                </p>
              </div>
            </div>

            {/* Market Structure Box */}
            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8 not-prose">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {isGerman ? 'Marktstruktur verstehen' : 'Understanding Market Structure'}
              </h3>
              <p className="text-gray-300 mb-4">
                {isGerman
                  ? 'Dies ist eine der besten "Marktstruktur"-Stories, weil sie erklärt, warum Preisbewegungen ohne fundamentale News passieren können.'
                  : 'This is one of the best "market structure" stories because it explains why price moves can happen without fundamental news.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium">{isGerman ? 'Verfall-Kalender' : 'Expiry Calendar'}</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium">OI by Strike</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium">IV Tracker</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <div className="text-primary-400 text-sm font-medium">Max Pain</div>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-3">{isGerman ? 'Quellen' : 'Sources'}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinDesk: &quot;Bitcoin slips below $88,000 as traders brace for $28.5B Deribit options expiry&quot;
                  </a>
                </li>
                <li>
                  <a href="https://www.coinglass.com/options" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinGlass: Options Dashboard (OI, IV, Max Pain, Expiry Info)
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
                {isGerman ? 'Risikohinweis' : 'Disclaimer'}
              </h3>
              <p className="text-amber-800 text-sm">
                {isGerman
                  ? 'Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Finanzberatung dar.'
                  : 'This article is for educational purposes only and does not constitute financial advice.'}
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Weiterführende Artikel' : 'Related Articles'}
              </h3>
              <div className="space-y-3">
                <Link
                  href={`/${locale}/news/deribit-btc-options-rekord-oi`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Deribit BTC Options OI Rekord' : 'Deribit BTC Options OI Record'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? '$42,5 Mrd. Open Interest' : '$42.5B Open Interest'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/options-greeks`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Options Greeks
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Delta, Gamma, Theta verstehen' : 'Understanding Delta, Gamma, Theta'}
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
      <div className="bg-gradient-to-r from-red-700 to-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Options Greeks verstehen'
                : 'Understand Options Greeks'}
            </h2>
            <p className="text-red-200 mb-8">
              {isGerman
                ? 'Lernen Sie, wie Delta und Gamma Preisbewegungen um Verfallstermine beeinflussen.'
                : 'Learn how Delta and Gamma influence price movements around expiration dates.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/options-greeks`}
                className="px-8 py-3 bg-white text-red-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Greeks lernen' : 'Learn Greeks'}
              </Link>
              <Link
                href={`/${locale}/iv-guide`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-900 transition-colors"
              >
                {isGerman ? 'IV Guide' : 'IV Guide'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
