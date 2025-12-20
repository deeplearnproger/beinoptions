import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'EU: €90 Mrd. Ukraine-Kredit über gemeinsame Anleihen'
      : 'EU: €90bn Ukraine Loan via Joint Borrowing',
    description: locale === 'de'
      ? 'Die EU finanziert Ukraine-Hilfe über gemeinsame Kreditaufnahme statt Beschlagnahmung russischer Vermögenswerte. Auswirkungen auf Anleihen und Optionen.'
      : 'EU funds Ukraine aid via joint borrowing instead of seizing Russian assets. Impact on bonds and options.',
  });
}

export default function EUUkraineLoanPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-800 via-yellow-600 to-blue-800 text-white py-16">
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

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                🇪🇺 EU
              </span>
              <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium">
                🇺🇦 Ukraine
              </span>
              <span className="text-blue-100">20. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'EU: €90 Mrd. Ukraine-Kredit über gemeinsame Anleihen'
                : 'EU: €90bn Ukraine Loan via Joint Borrowing'}
            </h1>

            <p className="text-xl text-blue-100 mb-6">
              {isGerman
                ? 'Märkte begrüßen EU-Entscheidung, Ukraine-Hilfe über gemeinsame Verschuldung statt Beschlagnahmung russischer Assets zu finanzieren.'
                : 'Markets welcome EU decision to fund Ukraine aid via joint debt instead of seizing Russian assets.'}
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
          src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1200"
          alt={isGerman ? 'EU-Flaggen Brüssel' : 'EU Flags Brussels'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'EU-Kommission, Brüssel' : 'EU Commission, Brussels'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* What Happened */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isGerman ? 'Was ist passiert?' : 'What Happened?'}
              </h2>
              <p className="text-blue-800 leading-relaxed">
                {isGerman
                  ? 'Die Märkte reagierten positiv auf die Entscheidung der EU, ein €90 Milliarden-Darlehen für die Ukraine über gemeinsame Kreditaufnahme zu finanzieren. Damit umgeht die EU den umstritteneren Weg der Beschlagnahmung eingefrorener russischer Vermögenswerte.'
                  : 'Markets reacted positively to the EU\'s choice to fund a €90 billion Ukraine loan via joint borrowing, avoiding the more controversial route of seizing frozen Russian assets.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>{isGerman ? 'Quelle:' : 'Source:'}</strong>{' '}
                  <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">
                    Reuters
                  </a>
                </p>
              </div>
            </div>

            {/* Key Numbers Box */}
            <div className="bg-gradient-to-r from-blue-100 to-yellow-100 border border-blue-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💶</span>
                {isGerman ? 'Die Zahlen im Überblick' : 'Key Numbers'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-900">€90</div>
                  <div className="text-sm text-gray-600">{isGerman ? 'Milliarden Kredit' : 'Billion Loan'}</div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-900">27</div>
                  <div className="text-sm text-gray-600">{isGerman ? 'EU-Mitgliedstaaten' : 'EU Member States'}</div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-700">AAA</div>
                  <div className="text-sm text-gray-600">{isGerman ? 'EU-Anleihen Rating' : 'EU Bonds Rating'}</div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-amber-600">~€300</div>
                  <div className="text-sm text-gray-600">{isGerman ? 'Mrd. eingefrorene RU-Assets' : 'bn frozen RU assets'}</div>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                {isGerman ? 'Warum ist das wichtig?' : 'Why Does It Matter?'}
              </h2>
              <p className="text-amber-800 leading-relaxed mb-4">
                {isGerman
                  ? 'Gemeinsame Kreditaufnahme stärkt die Rolle der EU als dauerhafter Emittent großer Anleihevolumina. Dies beeinflusst Angebot, Renditen und das Vertrauen in den Euro – während rechtliche und Reputationsrisiken durch Vermögensbeschlagnahme vermieden werden.'
                  : 'Joint borrowing increases EU\'s profile as a regular large bond issuer. This affects supply, yields, and euro credibility – while avoiding legal and reputation risks tied to asset seizures.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    {isGerman ? 'Vorteile' : 'Benefits'}
                  </h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>{isGerman ? '• Keine rechtlichen Risiken' : '• No legal risks'}</li>
                    <li>{isGerman ? '• Stärkt EU-Anleihemarkt' : '• Strengthens EU bond market'}</li>
                    <li>{isGerman ? '• Vorhersehbare Finanzierung' : '• Predictable funding'}</li>
                  </ul>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <span className="text-amber-600">⚠</span>
                    {isGerman ? 'Zu beachten' : 'Considerations'}
                  </h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>{isGerman ? '• Mehr EU-Schulden' : '• More EU debt'}</li>
                    <li>{isGerman ? '• Potenzieller Renditedruck' : '• Potential yield pressure'}</li>
                    <li>{isGerman ? '• Langfristige Verpflichtungen' : '• Long-term commitments'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What It Means for Options */}
            <div className="bg-gradient-to-r from-primary-50 to-indigo-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                {isGerman ? 'Was bedeutet das für Aktien & Optionen?' : 'What Does It Mean for Stocks & Options?'}
              </h2>

              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isGerman ? 'Anleihen & Renditen' : 'Bonds & Yields'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isGerman
                          ? 'Mehr EU-Emissionen können Renditen bewegen und die Marktstimmung beeinflussen. Steigende Renditen können Druck auf zinssensitive Aktien ausüben.'
                          : 'More EU issuance can influence rates and risk sentiment. Rising yields can pressure rate-sensitive equities.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isGerman ? 'Zinssensitive Sektoren' : 'Rate-Sensitive Sectors'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isGerman
                          ? 'Immobilien, Versorger und Growth-Aktien reagieren empfindlich auf Zinsänderungen. Bei Renditebewegungen könnte die implizite Volatilität steigen.'
                          : 'Real estate, utilities, and growth stocks are sensitive to rate changes. Yield movements could increase implied volatility.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isGerman ? 'Index-Volatilität' : 'Index Volatility'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isGerman
                          ? 'Bei starken Zinsbewegungen kann die Volatilität in europäischen Indizes (EURO STOXX 50, DAX) steigen. Optionsstrategien auf diese Indizes werden interessanter.'
                          : 'Sharp rate movements can increase volatility in European indices (EURO STOXX 50, DAX). Options strategies on these indices become more interesting.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Ideas Box */}
            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8 not-prose">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isGerman ? 'Trading-Ideen' : 'Trading Ideas'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium mb-1">{isGerman ? 'Zins-Hedge' : 'Rate Hedge'}</div>
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Puts auf Immobilien-ETFs (VNQ, REET) bei steigenden Renditen'
                      : 'Puts on real estate ETFs (VNQ, REET) on rising yields'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium mb-1">{isGerman ? 'Volatilitäts-Play' : 'Volatility Play'}</div>
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Straddles auf EURO STOXX 50 vor wichtigen EU-Anleiheemissionen'
                      : 'Straddles on EURO STOXX 50 before major EU bond issuances'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium mb-1">{isGerman ? 'Euro-Play' : 'Euro Play'}</div>
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'FX-Optionen auf EUR/USD bei Vertrauensänderungen'
                      : 'FX options on EUR/USD on confidence shifts'}
                  </p>
                </div>
              </div>
            </div>

            {/* Affected Assets */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Betroffene Assets & Sektoren' : 'Affected Assets & Sectors'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="font-mono font-bold text-lg">SX5E</div>
                  <div className="text-xs text-gray-500">EURO STOXX 50</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="font-mono font-bold text-lg">BTP</div>
                  <div className="text-xs text-gray-500">{isGerman ? 'Italien Anleihen' : 'Italy Bonds'}</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="font-mono font-bold text-lg">VGK</div>
                  <div className="text-xs text-gray-500">Vanguard Europe ETF</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="font-mono font-bold text-lg">EUR/USD</div>
                  <div className="text-xs text-gray-500">{isGerman ? 'Euro/Dollar' : 'Euro/Dollar'}</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>{isGerman ? 'Zinssensitive Sektoren:' : 'Rate-sensitive sectors:'}</strong>{' '}
                  {isGerman
                    ? 'Immobilien, Versorger, Tech/Growth, Banken'
                    : 'Real Estate, Utilities, Tech/Growth, Banks'}
                </p>
              </div>
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
                  ? 'Der Handel mit Optionen birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Diese Analyse dient ausschließlich Informationszwecken und stellt keine Anlageberatung dar. Vergangene Ergebnisse sind keine Garantie für zukünftige Performance.'
                  : 'Options trading involves significant risks and is not suitable for all investors. This analysis is for informational purposes only and does not constitute investment advice. Past results are no guarantee of future performance.'}
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {isGerman ? 'Weiterführende Artikel' : 'Related Articles'}
              </h3>
              <div className="space-y-3">
                <Link
                  href={`/${locale}/protective-put`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Protective Put
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Portfolio gegen Verluste absichern' : 'Protect portfolio against losses'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/risks`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Risikomanagement' : 'Risk Management'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Makro-Risiken verstehen und managen' : 'Understanding and managing macro risks'}
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
      <div className="bg-gradient-to-r from-blue-900 to-yellow-700 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Makro-Risiken verstehen und absichern'
                : 'Understand and Hedge Macro Risks'}
            </h2>
            <p className="text-blue-100 mb-8">
              {isGerman
                ? 'Lernen Sie, wie Sie Ihr Portfolio mit Optionen gegen Zinsänderungen und geopolitische Risiken schützen können.'
                : 'Learn how to protect your portfolio against interest rate changes and geopolitical risks with options.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/risks`}
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Risikomanagement' : 'Risk Management'}
              </Link>
              <Link
                href={`/${locale}/protective-put`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                {isGerman ? 'Protective Put' : 'Protective Put'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
