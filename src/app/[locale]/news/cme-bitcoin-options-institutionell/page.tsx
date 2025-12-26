import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'CME Bitcoin Options erklärt: Institutioneller Flow, Volume & OI'
      : 'CME Bitcoin Options Explained: Institutional Flow, Volume & Open Interest',
    description: locale === 'de'
      ? 'CME Bitcoin Options sind der institutionelle Standard für Krypto-Derivate. Volume, Open Interest und was es für Trader bedeutet.'
      : 'CME Bitcoin Options are the institutional standard for crypto derivatives. Volume, open interest, and what it means for traders.',
    canonical: `https://beinoptions.com/${locale}/news/cme-bitcoin-options-institutionell`,
    keywords: ['CME', 'Bitcoin Options', 'Institutional', 'Open Interest', 'Volume', 'Regulated', 'Crypto Derivatives'],
    type: 'article',
    publishedTime: '2025-12-22T10:00:00Z',
    modifiedTime: '2025-12-22T10:00:00Z',
    author: 'BeInOptions Team',
    section: 'Crypto Options',
    locale,
  });
}

export default function CMEBitcoinOptionsPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                Crypto Options
              </span>
              <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Institutionell' : 'Institutional'}
              </span>
              <span className="text-blue-200">22. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'CME Bitcoin Options erklärt: Institutioneller Flow & Daten'
                : 'CME Bitcoin Options Explained: Institutional Flow & Data'}
            </h1>

            <p className="text-xl text-blue-100 mb-6">
              {isGerman
                ? 'CME ist der regulierte Standard für institutionelle Krypto-Derivate – mit transparenten Daten ähnlich wie bei Aktienindex-Optionen.'
                : 'CME is the regulated standard for institutional crypto derivatives – with transparent data similar to equity index options.'}
            </p>

            <div className="flex items-center gap-4 text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
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
          src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200"
          alt={isGerman ? 'Bitcoin und Finanzmärkte' : 'Bitcoin and Financial Markets'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'Institutionelle Krypto-Märkte' : 'Institutional Crypto Markets'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* TL;DR */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
                TL;DR
              </h2>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'CME veröffentlicht tägliche Volume- und Open-Interest-Daten für Bitcoin-Optionen auf regulierten Futures-Märkten.'
                    : 'CME publishes daily volume and open interest for Bitcoin options on regulated futures markets.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'CME gilt als institutionelle Venue: konforme Struktur, Clearing, regulierter Zugang.'
                    : 'CME is widely considered the institutional venue: compliant structure, clearing, regulated access.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{isGerman
                    ? 'CME-Options-Daten helfen Ihnen, "echtes Geld"-Positionierung zu verfolgen – ähnlich wie bei Aktienindex-Optionen-Analyse.'
                    : 'CME options data helps you track "real money" positioning—similar to equity index options analytics.'}</span>
                </li>
              </ul>
            </div>

            {/* What is CME Bitcoin Options */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isGerman ? 'Was bietet CME?' : 'What Does CME Offer?'}
              </h2>
              <p className="text-indigo-800 leading-relaxed mb-4">
                {isGerman
                  ? 'CME Group stellt ein öffentliches Dashboard für Bitcoin-Options-Volume und Open Interest bereit, das täglich aktualisiert wird.'
                  : 'CME Group provides a public dashboard for Bitcoin options volume and open interest, updated daily.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-indigo-900">{isGerman ? 'Tägliches Volume' : 'Daily Volume'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-indigo-900">Open Interest</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-indigo-900">Calls vs Puts</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-indigo-900">{isGerman ? 'Strike-Verteilung' : 'Strike Distribution'}</div>
                </div>
              </div>
              <p className="text-indigo-800 leading-relaxed">
                {isGerman
                  ? 'CME pflegt auch einen allgemeinen Hub für Volume/Open-Interest-Berichte über alle Märkte hinweg.'
                  : 'CME also maintains a general hub for volume/open interest reporting across markets.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-indigo-700">
                  <strong>{isGerman ? 'Quellen:' : 'Sources:'}</strong>{' '}
                  <a href="https://www.cmegroup.com/markets/cryptocurrencies/bitcoin/bitcoin.volume.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-900">CME Bitcoin Options Volume</a>,{' '}
                  <a href="https://www.cmegroup.com/market-data/volume-open-interest.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-900">CME Volume & OI Hub</a>
                </p>
              </div>
            </div>

            {/* Info Box: CME vs Deribit */}
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                CME vs Deribit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">CME Group</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• {isGerman ? 'Regulierte Futures-Börse' : 'Regulated futures exchange'}</li>
                    <li>• {isGerman ? 'Traditionelle Marktstruktur' : 'Traditional market structure'}</li>
                    <li>• {isGerman ? 'Clearing & Compliance' : 'Clearing & compliance'}</li>
                    <li>• {isGerman ? 'Institutionelle Teilnehmer' : 'Institutional participants'}</li>
                    <li>• {isGerman ? 'Ähnlich wie SPX Options' : 'Similar to SPX options'}</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Deribit</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• {isGerman ? 'Krypto-native Börse' : 'Crypto-native exchange'}</li>
                    <li>• {isGerman ? '24/7 Handel' : '24/7 trading'}</li>
                    <li>• {isGerman ? 'Höhere Liquidität in BTC/ETH' : 'Higher liquidity in BTC/ETH'}</li>
                    <li>• {isGerman ? 'Mehr Retail & Prop-Trader' : 'More retail & prop traders'}</li>
                    <li>• {isGerman ? 'Offshore-Struktur' : 'Offshore structure'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why CME Matters */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                {isGerman ? 'Warum CME wichtig ist' : 'Why CME Matters'}
              </h2>
              <p className="text-purple-800 leading-relaxed mb-4">
                {isGerman
                  ? 'CME Bitcoin Options sind wichtig, weil sie einen regulierten Derivatemarkt darstellen – der bevorzugte Weg für viele Institutionen.'
                  : 'CME Bitcoin options matter because they represent a regulated derivatives market, which is the preferred route for many institutions.'}
              </p>
              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Regulierte Struktur' : 'Regulated Structure'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'CME operiert unter traditionellen Futures-Marktregeln und Clearing. Teilnehmer sind oft Fonds, große Firmen und professionelle Hedger.'
                      : 'CME operates under traditional futures market rules and clearing. Participants are often funds, large firms, and professional hedgers.'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Institutionelle Stimmung' : 'Institutional Sentiment'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Aktivität kann institutionelles Hedging darstellen, nicht Retail-Spekulation. CME-Daten sind vergleichbar über Anlageklassen hinweg (Aktien, Commodities, Zinsen).'
                      : 'Activity may represent institutional hedging, not retail speculation. CME data is comparable across asset classes (equities, commodities, rates).'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Transparente Berichterstattung' : 'Transparent Reporting'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'CME hat transparente Berichterstattung und wird von professionellen Marktteilnehmern genutzt.'
                      : 'CME has transparent reporting and is used by professional market participants.'}
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
                  ? 'Wenn Sie bereits Aktienoptionen analysieren, gibt Ihnen CME BTC Options einen vertrauten Rahmen:'
                  : 'If you already analyze equity options, CME BTC options gives you a familiar framework:'}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-white/70 p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-gray-900">Calls vs Puts OI</div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-gray-900">{isGerman ? 'Strike-Konzentration' : 'Strike Concentration'}</div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-gray-900">{isGerman ? 'Verfall-Saisonalität' : 'Expiry Seasonality'}</div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg text-center">
                  <div className="text-sm font-bold text-gray-900">{isGerman ? 'Hedging Flow' : 'Hedging Flow'}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                {isGerman
                  ? 'Es deutet auch auf einen Trend hin: Bitcoin wird zunehmend wie ein Makro-Asset behandelt (wie Gold oder ein Aktienindex), mit Optionen für Hedging und strukturierte Exposure.'
                  : 'It also hints at a trend: Bitcoin is increasingly treated like a macro asset (like gold or an equity index), with options used for hedging and structured exposure.'}
              </p>

              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{isGerman ? 'Perfektes Brückenthema für Aktien/Options-Publikum:' : 'Perfect bridge topic for stocks/options audience:'}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• {isGerman ? 'Wie Institutionen BTC wie Indizes hedgen' : 'How institutions hedge BTC like they hedge indices'}</li>
                  <li>• {isGerman ? 'Wie Volatilitätsrisiko über Anlageklassen bepreist wird' : 'How volatility risk is priced across asset classes'}</li>
                  <li>• {isGerman ? 'Warum regulierte Venues oft bei Skalierung dominant werden' : 'Why regulated venues often become dominant at scale'}</li>
                </ul>
              </div>
            </div>

            {/* CME Data Dashboard Info */}
            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8 not-prose">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {isGerman ? 'CME Daten-Dashboard' : 'CME Data Dashboard'}
              </h3>
              <p className="text-gray-300 mb-4">
                {isGerman
                  ? 'Diese Seite zeigt:'
                  : 'This page shows:'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium">{isGerman ? 'Tägliches Volume' : 'Daily Volume'}</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium">Open Interest</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium">Calls vs Puts</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium">{isGerman ? 'Strike-Verteilung' : 'Strike Distribution'}</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium">{isGerman ? 'Historische Daten' : 'Historical Data'}</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium">{isGerman ? 'Download verfügbar' : 'Download Available'}</div>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>{isGerman ? 'Hinweis:' : 'Note:'}</strong>{' '}
                  {isGerman
                    ? 'CME gibt an, dass Marktdaten mindestens 10 Minuten verzögert sind.'
                    : 'CME states market data is delayed at least 10 minutes.'}
                </p>
              </div>
            </div>

            {/* Content Idea Box */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isGerman ? 'Was zu beobachten ist' : 'What to Watch'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{isGerman ? 'OI-Wachstum' : 'OI Growth'}</h4>
                  <p className="text-sm text-green-700">
                    {isGerman
                      ? 'Steigendes OI zeigt zunehmende institutionelle Beteiligung'
                      : 'Rising OI indicates increasing institutional participation'}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{isGerman ? 'Call/Put Balance' : 'Call/Put Balance'}</h4>
                  <p className="text-sm text-green-700">
                    {isGerman
                      ? 'Verhältnis zeigt Marktsentiment und Hedging-Aktivität'
                      : 'Ratio shows market sentiment and hedging activity'}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{isGerman ? 'Strike-Cluster' : 'Strike Clusters'}</h4>
                  <p className="text-sm text-green-700">
                    {isGerman
                      ? 'Konzentration um bestimmte Strikes kann Support/Resistance anzeigen'
                      : 'Concentration around certain strikes can indicate support/resistance'}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{isGerman ? 'Verfallstermine' : 'Expiry Dates'}</h4>
                  <p className="text-sm text-green-700">
                    {isGerman
                      ? 'Große Verfälle können erhöhte Volatilität auslösen'
                      : 'Large expiries can trigger increased volatility'}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Sind CME Bitcoin Options dasselbe wie Deribit Options?' : 'Are CME Bitcoin options the same as Deribit options?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Nein. CME Options sind auf Bitcoin Futures und operieren in einem regulierten Futures-Rahmen.'
                      : 'No. CME options are on Bitcoin futures and operate in a regulated futures framework.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Warum bevorzugen Institutionen CME?' : 'Why do institutions prefer CME?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Regulierung, Clearing, Compliance und Infrastruktur ähnlich wie bei traditionellen Märkten.'
                      : 'Regulation, clearing, compliance, and infrastructure similar to traditional markets.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Kann Retail CME BTC Options handeln?' : 'Can retail trade CME BTC options?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Ja, aber normalerweise über Broker, die Zugang zu CME Futures Options bieten.'
                      : 'Yes, but usually through brokers that provide access to CME futures options.'}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Sind CME-Daten verzögert?' : 'Is CME data delayed?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'Ja – CME gibt an, dass Marktdaten mindestens 10 Minuten verzögert sind.'
                      : 'Yes—CME states market data is delayed at least 10 minutes.'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{isGerman ? 'Was sollte ich beobachten?' : 'What should I watch?'}</h4>
                  <p className="text-sm text-gray-600">
                    {isGerman
                      ? 'OI-Wachstum, Call/Put-Balance und Strike-Cluster um große Verfallstermine.'
                      : 'OI growth, call/put balance, and strike clusters around major expiries.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-3">{isGerman ? 'Quellen' : 'Sources'}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.cmegroup.com/markets/cryptocurrencies/bitcoin/bitcoin.volume.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CME: Bitcoin Options Volume & Open Interest
                  </a>
                </li>
                <li>
                  <a href="https://www.cmegroup.com/market-data/volume-open-interest.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">
                    CME: Volume & Open Interest Reports Hub
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
                  ? 'Der Handel mit Bitcoin-Optionen birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Diese Analyse dient ausschließlich Informationszwecken und stellt keine Anlageberatung dar.'
                  : 'Bitcoin options trading involves significant risks and is not suitable for all investors. This analysis is for informational purposes only and does not constitute investment advice.'}
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
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Options-Grundlagen lernen'
                : 'Learn Options Fundamentals'}
            </h2>
            <p className="text-blue-200 mb-8">
              {isGerman
                ? 'Die gleichen Konzepte, die für CME Bitcoin Options gelten, sind auch die Basis für Aktienoptionen.'
                : 'The same concepts that apply to CME Bitcoin Options are also the foundation for equity options.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/options-basics`}
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Options Basics' : 'Options Basics'}
              </Link>
              <Link
                href={`/${locale}/options-greeks`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
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
