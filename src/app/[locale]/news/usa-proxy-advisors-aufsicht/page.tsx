import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Giscus from '@/components/Giscus';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'USA: Executive Order für stärkere Aufsicht über Proxy Advisors'
      : 'USA: Executive Order for Stronger Oversight of Proxy Advisors',
    description: locale === 'de'
      ? 'Trump unterzeichnet Executive Order zur verschärften Aufsicht über Proxy-Berater. Auswirkungen auf Corporate Governance und Options-Strategien.'
      : 'Trump signs executive order for enhanced oversight of proxy advisors. Impact on corporate governance and options strategies.',
  });
}

export default function ProxyAdvisorsPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-900 via-slate-900 to-red-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-red-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isGerman ? 'Zurück zu News' : 'Back to News'}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                🇺🇸 USA
              </span>
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">
                {isGerman ? 'Regulierung' : 'Regulation'}
              </span>
              <span className="text-red-200">20. Dezember 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {isGerman
                ? 'USA: Stärkere Aufsicht über Proxy Advisors'
                : 'USA: Stronger Oversight of Proxy Advisors'}
            </h1>

            <p className="text-xl text-red-100 mb-6">
              {isGerman
                ? 'Executive Order zielt auf einflussreiche Aktionärsberater – mit Folgen für Corporate Governance und Aktienmärkte.'
                : 'Executive order targets influential shareholder advisors – with consequences for corporate governance and stock markets.'}
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
          src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200"
          alt={isGerman ? 'US Capitol Washington DC' : 'US Capitol Washington DC'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {isGerman ? 'US Capitol, Washington D.C.' : 'US Capitol, Washington D.C.'}
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* What Happened */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 not-prose">
              <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isGerman ? 'Was ist passiert?' : 'What Happened?'}
              </h2>
              <p className="text-red-800 leading-relaxed">
                {isGerman
                  ? 'Der US-Präsident hat eine Executive Order unterzeichnet, um die Aufsicht über Proxy-Advisory-Firmen zu verstärken. Diese Firmen wie ISS (Institutional Shareholder Services) und Glass Lewis sind einflussreich bei Aktionärsabstimmungen und Corporate-Governance-Entscheidungen großer institutioneller Investoren.'
                  : 'The U.S. President signed an executive order to increase oversight of proxy advisory firms. These companies like ISS (Institutional Shareholder Services) and Glass Lewis are influential in shareholder voting and corporate governance decisions of large institutional investors.'}
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>{isGerman ? 'Quelle:' : 'Source:'}</strong>{' '}
                  <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">
                    Reuters
                  </a>
                </p>
              </div>
            </div>

            {/* Info Box: What are Proxy Advisors */}
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {isGerman ? 'Was sind Proxy Advisors?' : 'What are Proxy Advisors?'}
              </h3>
              <p className="text-slate-700 mb-4">
                {isGerman
                  ? 'Proxy Advisors sind Beratungsfirmen, die institutionellen Investoren (Pensionsfonds, Vermögensverwalter) Empfehlungen geben, wie sie bei Hauptversammlungen abstimmen sollen.'
                  : 'Proxy advisors are consulting firms that provide institutional investors (pension funds, asset managers) recommendations on how to vote at shareholder meetings.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-900">ISS</div>
                  <div className="text-xs text-slate-500">Institutional Shareholder Services</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-900">Glass Lewis</div>
                  <div className="text-xs text-slate-500">{isGerman ? 'Zweitgrößter Anbieter' : 'Second largest provider'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-900">~97%</div>
                  <div className="text-xs text-slate-500">{isGerman ? 'Marktanteil zusammen' : 'Combined market share'}</div>
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
                  ? 'Proxy Advisors beeinflussen, wie große Institutionen abstimmen. Änderungen hier können die Corporate Governance, Aktionärsanträge und die Bewertung von ESG-/Aktivismus-/Vorstandsentscheidungen durch den Markt verändern.'
                  : 'Proxy advisors influence how large institutions vote. Changes here can reshape corporate governance, shareholder proposals, and how markets price ESG / activism / board decisions.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'Governance-Einfluss' : 'Governance Influence'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'Weniger Macht für Proxy Advisors könnte bedeuten: mehr Einfluss für Unternehmensvorstände vs. aktivistische Investoren.'
                      : 'Less power for proxy advisors could mean: more influence for corporate boards vs. activist investors.'}
                  </p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{isGerman ? 'ESG-Auswirkungen' : 'ESG Impact'}</h4>
                  <p className="text-sm text-purple-700">
                    {isGerman
                      ? 'ESG-orientierte Abstimmungsempfehlungen könnten an Einfluss verlieren. Das betrifft Unternehmen mit ESG-Kontroversen.'
                      : 'ESG-oriented voting recommendations could lose influence. This affects companies with ESG controversies.'}
                  </p>
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
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isGerman ? 'Re-Pricing in Governance-sensitiven Sektoren' : 'Re-pricing in Governance-Sensitive Sectors'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isGerman
                          ? 'Unternehmen mit starken Aktivisten-Investoren oder ESG-Kontroversen könnten neu bewertet werden.'
                          : 'Companies with strong activist investors or ESG controversies could see re-valuation.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-primary-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isGerman ? 'Headline-Volatilität bei Large Caps' : 'Headline Volatility for Large Caps'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isGerman
                          ? 'Während der Proxy Season (März-Juni) können Governance-Headlines zu schnellen Kursbewegungen führen.'
                          : 'During proxy season (March-June), governance headlines can lead to rapid price movements.'}
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
                        {isGerman ? 'Event-Hedging mit Optionen' : 'Event Hedging with Options'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isGerman
                          ? 'Kurzfristige Puts/Calls und Straddles/Strangles werden wertvoller für Hedging rund um Governance-Headlines und Hauptversammlungen.'
                          : 'Short-dated puts/calls and straddles/strangles become more valuable for hedging around governance headlines and shareholder meetings.'}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium mb-1">{isGerman ? 'Proxy Season Play' : 'Proxy Season Play'}</div>
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Straddles auf Large Caps mit bekannten Aktivisten-Investoren vor Hauptversammlungen'
                      : 'Straddles on large caps with known activist investors before shareholder meetings'}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-primary-400 text-sm font-medium mb-1">{isGerman ? 'ESG-Kontroversenspiel' : 'ESG Controversy Play'}</div>
                  <p className="text-sm text-gray-300">
                    {isGerman
                      ? 'Puts auf Unternehmen, die von ESG-Abstimmungen negativ betroffen sein könnten'
                      : 'Puts on companies that could be negatively affected by ESG votes'}
                  </p>
                </div>
              </div>
            </div>

            {/* Calendar: Proxy Season */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {isGerman ? 'Proxy Season Kalender 2026' : 'Proxy Season Calendar 2026'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-lg text-center border border-amber-200">
                  <div className="text-sm font-bold text-amber-900">{isGerman ? 'März' : 'March'}</div>
                  <div className="text-xs text-amber-700">{isGerman ? 'Proxy-Statements' : 'Proxy Statements'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center border border-amber-200">
                  <div className="text-sm font-bold text-amber-900">{isGerman ? 'April' : 'April'}</div>
                  <div className="text-xs text-amber-700">{isGerman ? 'ISS/GL Empfehlungen' : 'ISS/GL Recommendations'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center border border-amber-200">
                  <div className="text-sm font-bold text-amber-900">{isGerman ? 'Mai' : 'May'}</div>
                  <div className="text-xs text-amber-700">{isGerman ? 'Hauptversammlungen' : 'Annual Meetings'}</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center border border-amber-200">
                  <div className="text-sm font-bold text-amber-900">{isGerman ? 'Juni' : 'June'}</div>
                  <div className="text-xs text-amber-700">{isGerman ? 'Abstimmungsergebnisse' : 'Voting Results'}</div>
                </div>
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
                  href={`/${locale}/straddle-strangle`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      Straddle & Strangle
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Event-Trading mit Volatilitätsstrategien' : 'Event trading with volatility strategies'}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${locale}/options-assignment`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {isGerman ? 'Assignment & Verfall' : 'Assignment & Expiration'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isGerman ? 'Timing bei kurzfristigen Optionen' : 'Timing with short-dated options'}
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
      <div className="bg-gradient-to-r from-red-900 to-slate-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? 'Event-Trading mit Optionen meistern'
                : 'Master Event Trading with Options'}
            </h2>
            <p className="text-red-200 mb-8">
              {isGerman
                ? 'Lernen Sie, wie Sie mit Straddles und Strangles von Volatilität rund um Corporate Events profitieren können.'
                : 'Learn how to profit from volatility around corporate events with straddles and strangles.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/straddle-strangle`}
                className="px-8 py-3 bg-white text-red-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Straddle lernen' : 'Learn Straddle'}
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-900 transition-colors"
              >
                {isGerman ? 'Alle Strategien' : 'All Strategies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
