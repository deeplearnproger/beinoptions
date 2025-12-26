import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Coinbase kauft Deribit: Was es für Krypto-Optionen bedeutet'
      : 'Coinbase Acquires Deribit: What It Means for Crypto Options',
    description: locale === 'de'
      ? 'Coinbase übernimmt Deribit für $2,9 Mrd. Die Akquisition könnte den globalen Krypto-Derivatemarkt neu gestalten.'
      : 'Coinbase acquires Deribit for $2.9B. The acquisition could reshape global crypto derivatives markets.',
    canonical: `https://beinoptions.com/${locale}/news/coinbase-deribit-akquisition`,
    keywords: ['Coinbase', 'Deribit', 'Crypto Options', 'M&A', 'Bitcoin', 'Derivatives', 'Acquisition'],
    type: 'article',
    publishedTime: '2025-12-22T10:00:00Z',
    modifiedTime: '2025-12-22T10:00:00Z',
    author: 'BeInOptions Team',
    section: 'Crypto Options',
    locale,
  });
}

export default function CoinbaseDeribitPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 via-slate-900 to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                Crypto Options
              </span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                M&A
              </span>
              <span className="text-orange-200">22. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'Coinbase kauft Deribit: Was es für Krypto-Optionen bedeutet'
                : 'Coinbase Acquires Deribit: What It Means for Crypto Options'}
            </h1>

            <p className="text-xl text-orange-100 mb-6">
              {isGerman
                ? '$2,9 Mrd. Deal könnte den globalen Krypto-Derivatemarkt neu gestalten – mit Auswirkungen auf Liquidität, Regulierung und institutionelle Beteiligung.'
                : '$2.9B deal could reshape global crypto derivatives – with implications for liquidity, regulation, and institutional participation.'}
            </p>

            <div className="flex items-center gap-4 text-orange-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">BO</span>
                </div>
                <span>BeInOptions Team</span>
              </div>
              <span>•</span>
              <span>{isGerman ? '6 Min. Lesezeit' : '6 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200"
          alt={isGerman ? 'Bitcoin Kryptowährung' : 'Bitcoin Cryptocurrency'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'Krypto-Derivate im Wandel' : 'Crypto Derivatives in Transition'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* TL;DR */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
                TL;DR
              </h2>
              <ul className="space-y-2 text-orange-800">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Coinbase hat angekündigt, Deribit – die weltweit größte Krypto-Optionsbörse – für $2,9 Mrd. zu übernehmen.'
                    : 'Coinbase announced it will acquire Deribit, the world\'s largest crypto options exchange, in a $2.9B deal.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Die Akquisition könnte globale Krypto-Derivate neu gestalten, indem Coinbase\'s Distribution mit Deribits Options-Liquidität kombiniert wird.'
                    : 'The acquisition could reshape global crypto derivatives by combining Coinbase\'s distribution with Deribit\'s options liquidity.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'Erwarten Sie stärkere institutionelle Beteiligung, mehr regulatorische Aufmerksamkeit und potenziell engere Spreads langfristig.'
                    : 'Expect stronger institutional participation, more regulatory attention, and potentially tighter spreads and better product access long-term.'}</span>
                </li>
              </ul>
            </div>

            {/* What Happened */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isGerman ? 'Was ist passiert?' : 'What Happened?'}
              </h2>
              <p className="text-blue-800 leading-relaxed mb-4">
                {isGerman
                  ? 'Coinbase hat angekündigt, eine Vereinbarung zur Übernahme von Deribit getroffen zu haben – weithin als weltweit führende Krypto-Optionsbörse angesehen. Coinbase beschrieb den Schritt als wichtigen Meilenstein auf dem Weg zu einer "umfassenden globalen Krypto-Derivate-Plattform".'
                  : 'Coinbase announced it has entered into an agreement to acquire Deribit, widely considered the world\'s leading crypto options exchange. Coinbase framed the move as a major step toward becoming a "comprehensive global crypto derivatives platform."'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-900">$2,9 Mrd.</div>
                  <div className="text-xs text-blue-600">{isGerman ? 'Deal-Volumen' : 'Deal Size'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-900">Cash + Stock</div>
                  <div className="text-xs text-blue-600">{isGerman ? 'Zahlungsstruktur' : 'Payment Structure'}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-900">#1</div>
                  <div className="text-xs text-blue-600">{isGerman ? 'Krypto-Options-Börse' : 'Crypto Options Exchange'}</div>
                </div>
              </div>
              <p className="text-blue-800 leading-relaxed">
                {isGerman
                  ? 'Deribit ist bekannt dafür, den BTC- und ETH-Optionshandel zu dominieren und die tiefste Liquidität in Krypto-Optionsmärkten zu bieten.'
                  : 'Deribit is known for dominating BTC and ETH options trading and hosting the deepest liquidity in crypto options markets.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>{isGerman ? 'Quellen:' : 'Sources:'}</strong>{' '}
                  <a href="https://www.coinbase.com/blog" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Coinbase Blog</a>,{' '}
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">CoinDesk</a>,{' '}
                  <a href="https://insights.deribit.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Deribit Insights</a>
                </p>
              </div>
            </div>

            {/* Info Box: What is Deribit */}
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Was ist Deribit?' : 'What is Deribit?'}
              </h3>
              <p className="text-slate-700 mb-4">
                {isGerman
                  ? 'Deribit ist die weltweit größte Krypto-Optionsbörse, gegründet 2016 in den Niederlanden. Die Plattform dominiert den BTC/ETH-Optionsmarkt mit über 80% Marktanteil.'
                  : 'Deribit is the world\'s largest crypto options exchange, founded in 2016 in the Netherlands. The platform dominates the BTC/ETH options market with over 80% market share.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-900">80%+</div>
                  <div className="text-xs text-slate-500">{isGerman ? 'Marktanteil BTC Options' : 'BTC Options Market Share'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-xs text-slate-500">{isGerman ? 'Handel rund um die Uhr' : 'Round-the-clock Trading'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-900">2016</div>
                  <div className="text-xs text-slate-500">{isGerman ? 'Gegründet' : 'Founded'}</div>
                </div>
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
                  ? 'Diese Akquisition ist wichtig, weil Krypto-Optionen der Ort sind, wo anspruchsvoller Handel stattfindet:'
                  : 'This acquisition is important because crypto options are where sophisticated trading happens:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Institutionen' : 'Institutions'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Nutzen Optionen zum Hedging großer Spot-Positionen und zur Steuerung von Volatilitätsrisiken.'
                      : 'Use options for hedging large spot holdings and managing volatility risk.'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Market Maker</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Verlassen sich auf sie für Volatilitäts-Arbitrage und strukturierte Trades.'
                      : 'Rely on them for volatility arbitrage and structured trades.'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Retail</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Nutzt sie zunehmend für direktionale Wetten (Calls) und schützende Hedges (Puts).'
                      : 'Uses them increasingly for directional bets (calls) and protective hedges (puts).'}
                  </p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Was könnte passieren:' : 'What could happen:'}</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• {isGerman ? 'Mehr institutioneller Flow in Krypto-Optionen (Coinbase ist börsennotiert in den USA)' : 'More institutional flow into crypto options (Coinbase is publicly listed in the US)'}</li>
                  <li>• {isGerman ? 'Höhere Markteffizienz durch bessere Liquidität und engere Spreads' : 'Increased market efficiency through better liquidity and tighter spreads'}</li>
                  <li>• {isGerman ? 'Beschleunigte regulatorische Prüfung – besonders bei Leverage und Margin' : 'Accelerated regulatory scrutiny—especially around leverage and margin'}</li>
                </ul>
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
                  ? 'Auch wenn Sie "Aktien & Optionen" statt Krypto handeln, ist dieser Deal aus drei Gründen relevant:'
                  : 'Even if you trade "stocks & options" rather than crypto, this deal matters for three reasons:'}
              </p>

              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    1) {isGerman ? 'Krypto-Derivate werden echte Konkurrenz' : 'Crypto derivatives are becoming real competition'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Aktienoptionen waren lange das Zentrum des Volatilitätshandels, aber Krypto-Optionen holen schnell auf. Das Deribit-Ökosystem treibt Innovation bei 24/7-Derivatehandel, krypto-nativen Volatilitätsprodukten und sehr schneller Marktstruktur-Evolution.'
                      : 'Stock options have long been the center of volatility trading, but crypto options are catching up fast. The Deribit ecosystem pushes innovation in 24/7 derivatives trading, crypto-native volatility products, and very fast market structure evolution.'}
                  </p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2) {isGerman ? 'Volatilitätsmärkte konvergieren' : 'Volatility markets are converging'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Professionelle Trader handeln Volatilität zunehmend als "Cross-Asset"-Konzept: Aktien-Volatilität (VIX/SPX), Zins-Volatilität, Krypto-IV. Ein größerer regulierter Player bei Krypto-Optionen erhöht Cross-Market-Korrelationen in Stressphasen.'
                      : 'Professional traders increasingly trade volatility as a "cross-asset" concept: equities volatility (VIX/SPX options), rates volatility, crypto IV. A larger regulated player pushing crypto options forward increases cross-market correlations in stress periods.'}
                  </p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    3) {isGerman ? 'Es stärkt die "Derivate-first"-Strategie' : 'It strengthens the "derivatives-first" strategy'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Ähnlich wie traditionelle Börsen expandiert sind: Spot-Handel ist wettbewerbsintensiv und commoditisiert. Derivate sind der Ort, wo Margin- und Liquiditäts-Ökosysteme wachsen. Coinbase signalisiert: Optionen und Derivate sind Kern, nicht optional.'
                      : 'Similar to how traditional exchanges expanded: Spot trading is competitive and commoditized. Derivatives are where margin and liquidity ecosystems grow. Coinbase is signaling: options and derivatives are core, not optional.'}
                  </p>
                </div>
              </div>
            </div>

            {/* What to Watch */}
            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8 not-prose">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {isGerman ? 'Was zu beobachten ist' : 'What to Watch Next'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Werden Deribit-Kunden Zugang über Coinbase-Konten erhalten oder separat bleiben?'
                      : 'Will Deribit customers get access through Coinbase accounts, or remain separate?'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Werden Regulatoren bestimmte Krypto-Options-Angebote in EU/DE einschränken?'
                      : 'Will regulators restrict certain crypto options offerings in EU/DE?'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Neue Produktlaunches: strukturierte Produkte, Euro-settled Options, längerlaufende Kontrakte?'
                      : 'New product launches: structured products, euro-settled options, longer-dated contracts?'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Liquiditätsmigration von Deribit zu CME oder anderen Venues?'
                      : 'Any liquidity migration from Deribit to CME or other venues?'}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Warum ist Deribit so wichtig?' : 'Why is Deribit so important?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Weil es die BTC/ETH-Options-Liquidität dominiert und oft als Price-Discovery-Venue für Krypto-IV angesehen wird.'
                      : 'Because it dominates BTC/ETH options liquidity and is often considered the price discovery venue for crypto IV.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Macht das Krypto-Optionen sicherer?' : 'Does this make crypto options safer?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Nicht automatisch. Es könnte Compliance und Transparenz verbessern, aber Leverage-Risiko und Volatilität bleiben.'
                      : 'Not automatically. It may improve compliance and transparency, but leverage risk and volatility remain.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Werden Options-Spreads enger?' : 'Will options spreads get tighter?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Potenziell, wenn Coinbase Distribution und Liquiditätstiefe erhöht.'
                      : 'Potentially, if Coinbase increases distribution and liquidity depth.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Können EU-Trader profitieren?' : 'Can EU traders benefit?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Möglicherweise – abhängig von lokaler Regulierung und Broker-Zugang.'
                      : 'Possibly—depending on local regulation and broker access.'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Ändert das den Bitcoin-Preis?' : 'Does this change Bitcoin price?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Nicht direkt, aber es kann Volatilitäts-Flows und Hedging-Verhalten beeinflussen.'
                      : 'Not directly, but it can influence volatility flows and hedging behavior.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-3">{isGerman ? 'Quellen' : 'Sources'}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.coinbase.com/blog" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    Coinbase Blog: Acquisition Announcement
                  </a>
                </li>
                <li>
                  <a href="https://insights.deribit.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    Deribit Insights: &quot;Deribit to Join Coinbase&quot;
                  </a>
                </li>
                <li>
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CoinDesk: Deal Coverage and Terms
                  </a>
                </li>
                <li>
                  <a href="https://www.wsj.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    Wall Street Journal: Deal Size and Background
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
                  href={`/${locale}/call-options`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Call Options
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Grundlagen der Kaufoptionen' : 'Basics of call options'}
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
                      {isGerman ? 'Volatilität verstehen und nutzen' : 'Understanding and using volatility'}
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
      <div className="bg-gradient-to-r from-orange-600 to-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Optionen verstehen – traditionell & Krypto'
                : 'Understand Options – Traditional & Crypto'}
            </h2>
            <p className="text-orange-200 mb-8">
              {isGerman
                ? 'Lernen Sie die Grundlagen von Call- und Put-Optionen, die sowohl für Aktien als auch Krypto-Märkte gelten.'
                : 'Learn the fundamentals of call and put options that apply to both stock and crypto markets.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/call-options`}
                className="px-8 py-3 bg-white text-orange-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Call Options lernen' : 'Learn Call Options'}
              </Link>
              <Link
                href={`/${locale}/put-options`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-900 transition-colors"
              >
                {isGerman ? 'Put Options lernen' : 'Learn Put Options'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
