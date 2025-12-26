import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Märkte ruhig bei $4,3 Mrd. BTC & ETH Options-Verfall'
      : 'Markets Stay Calm as $4.3B in BTC & ETH Options Expire',
    description: locale === 'de'
      ? 'BTC und ETH Märkte blieben relativ ruhig bei einem $4,3 Mrd. Options-Verfall. Was "ruhige Verfälle" für die nächste Bewegung signalisieren.'
      : 'BTC and ETH markets remained relatively calm during a $4.3B options expiry. What "quiet expiries" signal for the next move.',
    canonical: `https://beinoptions.com/${locale}/news/btc-eth-options-verfall-4-3b`,
    keywords: ['Bitcoin', 'Ethereum', 'BTC', 'ETH', 'Options Expiry', 'Max Pain', 'Volatility', 'Crypto Options'],
    type: 'article',
    publishedTime: '2025-12-23T10:00:00Z',
    modifiedTime: '2025-12-23T10:00:00Z',
    author: 'BeInOptions Team',
    section: 'Crypto Options',
    locale,
  });
}

export default function BTCETHExpiryPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-700 via-slate-900 to-teal-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                Crypto Options
              </span>
              <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Verfall' : 'Expiry'}
              </span>
              <span className="text-green-200">23. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Märkte ruhig bei $4,3 Mrd. BTC & ETH Options-Verfall'
                : 'Markets Stay Calm as $4.3B BTC & ETH Options Expire'}
            </h1>

            <p className="text-xl text-green-100 mb-6">
              {isGerman
                ? '"Ruhige Verfälle" sind kein Nichtereignis – sie können große strukturelle Signale sein.'
                : '"Quiet expiries" are not a non-event – they can be major structural signals.'}
            </p>

            <div className="flex items-center gap-4 text-green-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">BO</span>
                </div>
                <span>BeInOptions Team</span>
              </div>
              <span>•</span>
              <span>{isGerman ? '4 Min. Lesezeit' : '4 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=1200"
          alt={isGerman ? 'Krypto Trading Bildschirm' : 'Crypto Trading Screen'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'Ruhiger Krypto-Markt' : 'Calm Crypto Market'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* TL;DR */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
                TL;DR
              </h2>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'BTC und ETH Märkte blieben relativ ruhig vor einem kombinierten $4,3 Mrd. BTC/ETH Options-Verfall.'
                    : 'BTC and ETH markets remained relatively calm ahead of a $4.3B combined BTC/ETH options expiry.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Auch wenn der Preis stabil ist, kann ein Verfall versteckte Hedging-Flows und Volatilitätskompression verursachen.'
                    : 'Even when price is stable, expiry can still cause hidden hedging flows and volatility compression.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Für Aktien-/Options-Trader ähnelt dies niedrig-volatilen Verfallswochen bei Aktien vor plötzlichen Post-Verfall-Ausbrüchen.'
                    : 'For stock/options traders, this resembles low-volatility expiry weeks in equities before sudden post-expiry breakouts.'}</span>
                </li>
              </ul>
            </div>

            {/* What Happened */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-teal-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isGerman ? 'Was ist passiert?' : 'What Happened?'}
              </h2>
              <p className="text-teal-800 leading-relaxed mb-4">
                {isGerman
                  ? 'Eine große Charge von BTC- und ETH-Optionen im Gesamtwert von $4,3 Milliarden ist verfallen, während die Märkte relativ stabil blieben, laut CoinJournal.'
                  : 'A large batch of BTC and ETH options totaling $4.3B expired, while markets remained relatively stable, according to CoinJournal.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-900">$4,3 Mrd.</div>
                  <div className="text-xs text-teal-600">{isGerman ? 'Kombinierter Verfall' : 'Combined Expiry'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-900">~$92K</div>
                  <div className="text-xs text-teal-600">{isGerman ? 'BTC Handelspreis' : 'BTC Trading Price'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-900">~$90K</div>
                  <div className="text-xs text-teal-600">Max Pain Level</div>
                </div>
              </div>
              <p className="text-teal-800 leading-relaxed">
                {isGerman
                  ? 'Der Bericht stellte fest, dass BTC über ~$92K handelte und verwies auf ein Max-Pain-Level um $90K.'
                  : 'The report noted BTC trading above ~$92K and referenced a max pain level around $90K.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-teal-700">
                  <strong>{isGerman ? 'Quelle:' : 'Source:'}</strong>{' '}
                  <a href="https://coinjournal.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-900">CoinJournal</a>
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
                  ? '"Ruhige Verfälle" sagen Ihnen normalerweise eine von zwei Sachen:'
                  : '"Calm expiries" often tell you one of two things:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Ausbalancierte Positionierung' : 'Balanced Positioning'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Hedging-Flows heben sich gegenseitig auf'
                      : 'Hedging flows cancel out'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Volatilität wird verkauft' : 'Volatility is Being Sold'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Trader sind short Premium und halten den Preis stabil'
                      : 'Traders are short premium and keeping price stable'}
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {isGerman ? 'Wichtig:' : 'Important:'}
                </h4>
                <p className="text-sm text-amber-800">
                  {isGerman
                    ? 'Beide Fälle können die nächste Bewegung vorbereiten: Sobald der Verfall vorbei ist, werden Hedges abgebaut und das Volatilitätsregime kann schnell wechseln.'
                    : 'Both cases can set up the next move: once expiry passes, hedges unwind and volatility regime can flip quickly.'}
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
                  ? 'Dies spiegelt Aktienmärkte perfekt wider:'
                  : 'This parallels stock markets perfectly:'}
              </p>

              <div className="space-y-3 mb-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-gray-700">
                    • {isGerman
                      ? 'Niedrige IV zum Verfall ist üblich'
                      : 'Low IV into expiry is common'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-gray-700">
                    • {isGerman
                      ? 'Nach dem Verfall bricht der Markt oft aus, weil Hedging-Druck verschwindet'
                      : 'After expiry, the market often breaks out because hedging pressure disappears'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-gray-700">
                    • {isGerman
                      ? '"Max Pain"-Level und Strike-Pinning können wichtig sein – manchmal'
                      : '"Max pain" levels and strike pinning can matter—sometimes'}
                  </p>
                </div>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{isGerman ? 'Kernbotschaft:' : 'Key Takeaway:'}</h4>
                <p className="text-gray-700">
                  {isGerman
                    ? '"Ruhiger Verfall" bedeutet nicht "nichts passiert" – es kann ein wichtiges strukturelles Signal sein, das die nächste große Bewegung vorbereitet.'
                    : '"Quiet expiry" is not "nothing happened" — it can be a major structural signal that sets up the next big move.'}
                </p>
              </div>
            </div>

            {/* Max Pain Explainer Box */}
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Was ist Max Pain?' : 'What is Max Pain?'}
              </h3>
              <p className="text-slate-700 mb-4">
                {isGerman
                  ? 'Max Pain ist das Strike-Niveau, bei dem Options-Käufer den größten Verlust erleiden würden (und Options-Verkäufer den größten Gewinn). Die Theorie besagt, dass der Preis zum Verfall zu diesem Level tendiert.'
                  : 'Max Pain is the strike level where options buyers would experience the greatest loss (and options sellers the greatest profit). The theory suggests price tends toward this level at expiry.'}
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-slate-600">
                  <strong>{isGerman ? 'Hinweis:' : 'Note:'}</strong>{' '}
                  {isGerman
                    ? 'Max Pain ist kein Gesetz – es ist eine Tendenz, die nicht immer eintritt. Aber es ist ein nützliches Konzept zum Verständnis der Marktstruktur.'
                    : 'Max Pain is not a law – it\'s a tendency that doesn\'t always hold. But it\'s a useful concept for understanding market structure.'}
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-3">{isGerman ? 'Quellen' : 'Sources'}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://coinjournal.net" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinJournal: "Markets calm as $4.3B in BTC and ETH options expire"
                  </a>
                </li>
                <li>
                  <a href="https://www.coinglass.com/options" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinGlass: Options Dashboard (Max Pain, OI by Expiry)
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
                  href={`/${locale}/news/bitcoin-28-5b-deribit-options-verfall`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Bitcoin vor $28,5 Mrd. Verfall' : 'Bitcoin Ahead of $28.5B Expiry'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Volatilität bei großen Verfällen' : 'Volatility at major expiries'}
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
                      {isGerman ? 'IV und Volatilitätsregime verstehen' : 'Understanding IV and volatility regimes'}
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
      <div className="bg-gradient-to-r from-green-700 to-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Volatilität verstehen'
                : 'Understand Volatility'}
            </h2>
            <p className="text-green-200 mb-8">
              {isGerman
                ? 'Lernen Sie, wie IV funktioniert und warum Volatilitätsregime nach Verfällen oft wechseln.'
                : 'Learn how IV works and why volatility regimes often flip after expiries.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/iv-guide`}
                className="px-8 py-3 bg-white text-green-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                IV Guide
              </Link>
              <Link
                href={`/${locale}/options-greeks`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-900 transition-colors"
              >
                Options Greeks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
