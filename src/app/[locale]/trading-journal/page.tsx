import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isGerman = locale === 'de';
  return {
    title: isGerman ? 'Trading Journal Guide - Erfolg dokumentieren' : 'Trading Journal Guide - Document Your Success',
    description: isGerman
      ? 'Lernen Sie, wie Sie ein effektives Trading-Journal führen. Vorlagen, Tools und Best Practices für Optionshändler.'
      : 'Learn how to keep an effective trading journal. Templates, tools and best practices for options traders.',
    keywords: isGerman
      ? ['Trading Journal', 'Trading Tagebuch', 'Optionen Journal', 'Trade Dokumentation']
      : ['Trading Journal', 'Trade Log', 'Options Journal', 'Trade Documentation'],
  };
}

export default function TradingJournalPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const journalFields = [
    {
      category: isGerman ? 'Trade-Details' : 'Trade Details',
      fields: [
        { name: isGerman ? 'Datum & Uhrzeit' : 'Date & Time', description: isGerman ? 'Wann wurde der Trade eröffnet?' : 'When was the trade opened?' },
        { name: 'Symbol', description: isGerman ? 'Welches Underlying?' : 'Which underlying?' },
        { name: isGerman ? 'Strategie' : 'Strategy', description: isGerman ? 'Covered Call, Iron Condor, etc.' : 'Covered Call, Iron Condor, etc.' },
        { name: isGerman ? 'Strike(s) & Verfall' : 'Strike(s) & Expiration', description: isGerman ? 'Alle relevanten Optionsdaten' : 'All relevant option data' },
        { name: isGerman ? 'Positionsgröße' : 'Position Size', description: isGerman ? 'Anzahl der Kontrakte' : 'Number of contracts' },
        { name: isGerman ? 'Einstiegspreis' : 'Entry Price', description: isGerman ? 'Prämie erhalten/gezahlt' : 'Premium received/paid' },
      ],
    },
    {
      category: isGerman ? 'Analyse' : 'Analysis',
      fields: [
        { name: isGerman ? 'Marktbedingungen' : 'Market Conditions', description: isGerman ? 'Trend, Volatilität, News' : 'Trend, volatility, news' },
        { name: isGerman ? 'Trade-Begründung' : 'Trade Rationale', description: isGerman ? 'Warum dieser Trade?' : 'Why this trade?' },
        { name: isGerman ? 'IV-Level' : 'IV Level', description: isGerman ? 'Implizite Volatilität beim Einstieg' : 'Implied volatility at entry' },
        { name: isGerman ? 'Technische Analyse' : 'Technical Analysis', description: isGerman ? 'Support, Resistance, Indikatoren' : 'Support, resistance, indicators' },
      ],
    },
    {
      category: isGerman ? 'Risikomanagement' : 'Risk Management',
      fields: [
        { name: isGerman ? 'Max Gewinn' : 'Max Profit', description: isGerman ? 'Maximaler theoretischer Gewinn' : 'Maximum theoretical profit' },
        { name: isGerman ? 'Max Verlust' : 'Max Loss', description: isGerman ? 'Maximaler theoretischer Verlust' : 'Maximum theoretical loss' },
        { name: isGerman ? 'Stop-Loss Level' : 'Stop-Loss Level', description: isGerman ? 'Bei welchem Verlust schließen?' : 'At what loss to close?' },
        { name: isGerman ? 'Gewinnziel' : 'Profit Target', description: isGerman ? 'Bei welchem Gewinn schließen?' : 'At what profit to close?' },
        { name: isGerman ? 'Risiko/Trade' : 'Risk/Trade', description: isGerman ? '% des Portfolios im Risiko' : '% of portfolio at risk' },
      ],
    },
    {
      category: isGerman ? 'Ergebnis' : 'Result',
      fields: [
        { name: isGerman ? 'Ausstiegspreis' : 'Exit Price', description: isGerman ? 'Endgültiger Preis beim Schließen' : 'Final price at close' },
        { name: isGerman ? 'Gewinn/Verlust' : 'Profit/Loss', description: isGerman ? 'In Euro und Prozent' : 'In euro and percent' },
        { name: isGerman ? 'Haltedauer' : 'Holding Period', description: isGerman ? 'Wie lange war die Position offen?' : 'How long was position open?' },
        { name: isGerman ? 'Was lief gut?' : 'What Went Well?', description: isGerman ? 'Positive Aspekte' : 'Positive aspects' },
        { name: isGerman ? 'Was kann besser werden?' : 'What Can Improve?', description: isGerman ? 'Lernpunkte' : 'Learning points' },
      ],
    },
  ];

  const tools = [
    {
      name: 'Excel / Google Sheets',
      type: isGerman ? 'Tabellenkalkulation' : 'Spreadsheet',
      pros: isGerman
        ? ['Kostenlos', 'Vollständig anpassbar', 'Offline verfügbar', 'Eigene Formeln möglich']
        : ['Free', 'Fully customizable', 'Available offline', 'Custom formulas possible'],
      cons: isGerman
        ? ['Manuelle Eingabe', 'Keine automatische Synchronisierung']
        : ['Manual entry', 'No automatic sync'],
      rating: 4,
    },
    {
      name: 'Notion',
      type: isGerman ? 'Datenbank & Notizen' : 'Database & Notes',
      pros: isGerman
        ? ['Flexible Datenbanken', 'Vorlagen verfügbar', 'Cloud-basiert', 'Gute Mobile App']
        : ['Flexible databases', 'Templates available', 'Cloud-based', 'Good mobile app'],
      cons: isGerman
        ? ['Lernkurve', 'Kann überladen werden']
        : ['Learning curve', 'Can get cluttered'],
      rating: 4,
    },
    {
      name: 'Tradervue',
      type: isGerman ? 'Spezialisiertes Tool' : 'Specialized Tool',
      pros: isGerman
        ? ['Automatischer Import', 'Detaillierte Statistiken', 'Community', 'Professionelle Analyse']
        : ['Automatic import', 'Detailed statistics', 'Community', 'Professional analysis'],
      cons: isGerman
        ? ['Kostenpflichtig', 'Fokus auf Aktien']
        : ['Paid', 'Focus on stocks'],
      rating: 5,
    },
    {
      name: 'TradesViz',
      type: isGerman ? 'Spezialisiertes Tool' : 'Specialized Tool',
      pros: isGerman
        ? ['Kostenlose Version', 'Gute Visualisierungen', 'Options-Unterstützung', 'Broker-Import']
        : ['Free version', 'Good visualizations', 'Options support', 'Broker import'],
      cons: isGerman
        ? ['Begrenzte kostenlose Funktionen', 'Englisch']
        : ['Limited free features', 'English only'],
      rating: 4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {isGerman ? 'Erfolg dokumentieren' : 'Document Your Success'}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isGerman ? 'Trading Journal' : 'Trading Journal'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {isGerman ? 'Der Schlüssel zum Erfolg' : 'The Key to Success'}
              </span>
            </h1>

            <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Professionelle Trader führen ein Journal. Lernen Sie, wie Sie Ihre Trades dokumentieren und kontinuierlich verbessern.'
                : 'Professional traders keep a journal. Learn how to document your trades and continuously improve.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-emerald-300 text-sm">{isGerman ? 'Lerneffekt' : 'Learning'}</div>
                <div className="text-white font-bold">+50%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-emerald-300 text-sm">{isGerman ? 'Fehler reduziert' : 'Errors Reduced'}</div>
                <div className="text-white font-bold">-30%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-emerald-300 text-sm">{isGerman ? 'Disziplin' : 'Discipline'}</div>
                <div className="text-white font-bold">+100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Keep a Journal */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isGerman ? 'Warum ein Trading-Journal führen?' : 'Why Keep a Trading Journal?'}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-10">
              <p>
                {isGerman
                  ? 'Ein Trading-Journal ist mehr als nur eine Liste Ihrer Trades. Es ist Ihr persönlicher Coach, der Ihnen hilft, Muster zu erkennen, Fehler zu vermeiden und Ihre Strategie zu verfeinern. Die erfolgreichsten Trader dokumentieren jeden einzelnen Trade.'
                  : 'A trading journal is more than just a list of your trades. Its your personal coach that helps you recognize patterns, avoid mistakes, and refine your strategy. The most successful traders document every single trade.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Muster erkennen' : 'Recognize Patterns'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Entdecken Sie, welche Setups für Sie funktionieren und welche nicht.'
                    : 'Discover which setups work for you and which dont.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Fehler vermeiden' : 'Avoid Mistakes'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Lernen Sie aus vergangenen Fehlern und wiederholen Sie sie nicht.'
                    : 'Learn from past mistakes and dont repeat them.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Performance tracken' : 'Track Performance'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Behalten Sie den Überblick über Ihre Gewinn- und Verluststatistik.'
                    : 'Keep track of your profit and loss statistics.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Emotionen managen' : 'Manage Emotions'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Erkennen Sie emotionale Muster und bleiben Sie objektiv.'
                    : 'Recognize emotional patterns and stay objective.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Track */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? 'Was Sie dokumentieren sollten' : 'What You Should Document'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Ein vollständiges Journal erfasst alle relevanten Informationen für jeden Trade.'
                : 'A complete journal captures all relevant information for every trade.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {journalFields.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.fields.map((field, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">{field.name}</div>
                          <div className="text-sm text-gray-500">{field.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Entry */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Beispiel: Journal-Eintrag' : 'Example: Journal Entry'}
            </h2>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-slate-400 text-sm mb-1">{isGerman ? 'Datum' : 'Date'}</div>
                  <div className="font-semibold">10. Dezember 2025, 15:32</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Symbol</div>
                  <div className="font-semibold">AAPL (Apple Inc.)</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-emerald-400 text-sm mb-1">{isGerman ? 'Strategie' : 'Strategy'}</div>
                  <div className="font-semibold">Iron Condor</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-blue-400 text-sm mb-1">{isGerman ? 'Verfall' : 'Expiration'}</div>
                  <div className="font-semibold">17. Jan 2026 (38 DTE)</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-purple-400 text-sm mb-1">{isGerman ? 'Kontrakte' : 'Contracts'}</div>
                  <div className="font-semibold">2 Spreads</div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 mb-6">
                <div className="text-slate-400 text-sm mb-3">{isGerman ? 'Trade-Details' : 'Trade Details'}</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-green-400">Buy</span> $175 Put
                  </div>
                  <div>
                    <span className="text-red-400">Sell</span> $180 Put
                  </div>
                  <div>
                    <span className="text-red-400">Sell</span> $195 Call
                  </div>
                  <div>
                    <span className="text-green-400">Buy</span> $200 Call
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-slate-400 text-sm mb-2">{isGerman ? 'Trade-Begründung' : 'Trade Rationale'}</div>
                  <p className="text-slate-300 text-sm">
                    {isGerman
                      ? 'AAPL bewegt sich seit 2 Wochen seitwärts. IV Rank bei 45% - erhöht aber nicht extrem. Keine Earnings in den nächsten 6 Wochen. Support bei $178, Resistance bei $197.'
                      : 'AAPL has been moving sideways for 2 weeks. IV Rank at 45% - elevated but not extreme. No earnings in the next 6 weeks. Support at $178, resistance at $197.'}
                  </p>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-2">{isGerman ? 'Risiko-Parameter' : 'Risk Parameters'}</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>{isGerman ? 'Credit erhalten:' : 'Credit received:'} $2.40 ($480)</li>
                    <li>Max {isGerman ? 'Verlust:' : 'Loss:'} $520</li>
                    <li>{isGerman ? 'Gewinnziel:' : 'Profit target:'} 50% ($240)</li>
                    <li>Stop-Loss: 100% ({isGerman ? 'bei' : 'at'} $480 {isGerman ? 'Verlust' : 'loss'})</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-400 text-sm">{isGerman ? 'Status' : 'Status'}</div>
                    <div className="text-amber-400 font-semibold">{isGerman ? 'Offen' : 'Open'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-sm">{isGerman ? 'Aktueller P/L' : 'Current P/L'}</div>
                    <div className="text-green-400 font-semibold">+$156 (32.5%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? 'Tools für Ihr Trading-Journal' : 'Tools for Your Trading Journal'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Von einfachen Tabellen bis zu spezialisierten Plattformen - wählen Sie das Tool, das zu Ihnen passt.'
                : 'From simple spreadsheets to specialized platforms - choose the tool that fits you.'}
            </p>

            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                      <div className="text-sm text-gray-500">{tool.type}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < tool.rating ? 'text-amber-400' : 'text-gray-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-medium text-green-700 mb-2">{isGerman ? 'Vorteile' : 'Pros'}</div>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {tool.cons && (
                      <div>
                        <div className="text-sm font-medium text-red-700 mb-2">{isGerman ? 'Nachteile' : 'Cons'}</div>
                        <ul className="space-y-1">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isGerman ? 'Best Practices für Ihr Journal' : 'Best Practices for Your Journal'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-400">1</span>
                  <h3 className="font-semibold">{isGerman ? 'Sofort dokumentieren' : 'Document Immediately'}</h3>
                </div>
                <p className="text-emerald-200 text-sm">
                  {isGerman
                    ? 'Tragen Sie jeden Trade direkt nach der Ausführung ein. Warten Sie nicht bis zum Abend - Details werden vergessen.'
                    : 'Enter every trade immediately after execution. Dont wait until evening - details get forgotten.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-400">2</span>
                  <h3 className="font-semibold">{isGerman ? 'Ehrlich sein' : 'Be Honest'}</h3>
                </div>
                <p className="text-emerald-200 text-sm">
                  {isGerman
                    ? 'Schreiben Sie auch die unangenehmen Wahrheiten auf. Nur so können Sie wirklich lernen.'
                    : 'Write down the uncomfortable truths too. Only then can you truly learn.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-400">3</span>
                  <h3 className="font-semibold">{isGerman ? 'Wöchentlich reviewen' : 'Weekly Review'}</h3>
                </div>
                <p className="text-emerald-200 text-sm">
                  {isGerman
                    ? 'Nehmen Sie sich jeden Sonntag 30 Minuten Zeit, um Ihre Trades der Woche zu analysieren.'
                    : 'Take 30 minutes every Sunday to analyze your trades from the week.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-400">4</span>
                  <h3 className="font-semibold">{isGerman ? 'Screenshots machen' : 'Take Screenshots'}</h3>
                </div>
                <p className="text-emerald-200 text-sm">
                  {isGerman
                    ? 'Ein Bild sagt mehr als tausend Worte. Speichern Sie Charts bei Ein- und Ausstieg.'
                    : 'A picture is worth a thousand words. Save charts at entry and exit.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-400">5</span>
                  <h3 className="font-semibold">{isGerman ? 'Emotionen notieren' : 'Note Emotions'}</h3>
                </div>
                <p className="text-emerald-200 text-sm">
                  {isGerman
                    ? 'Wie haben Sie sich beim Trade gefühlt? Angst, Gier, Zuversicht? Emotionen beeinflussen Entscheidungen.'
                    : 'How did you feel during the trade? Fear, greed, confidence? Emotions influence decisions.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-400">6</span>
                  <h3 className="font-semibold">{isGerman ? 'Statistiken führen' : 'Keep Statistics'}</h3>
                </div>
                <p className="text-emerald-200 text-sm">
                  {isGerman
                    ? 'Tracken Sie Win-Rate, durchschnittlichen Gewinn/Verlust und andere Metriken über Zeit.'
                    : 'Track win rate, average profit/loss and other metrics over time.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Wichtige Metriken zum Tracken' : 'Important Metrics to Track'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">Win Rate</div>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Prozentsatz der profitablen Trades. Ziel: über 50%'
                    : 'Percentage of profitable trades. Goal: over 50%'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">Profit Factor</div>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Gesamtgewinn / Gesamtverlust. Ziel: über 1.5'
                    : 'Total profit / Total loss. Goal: over 1.5'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">Avg R:R</div>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Durchschnittliches Risiko/Rendite-Verhältnis'
                    : 'Average Risk/Reward ratio'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">Max DD</div>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Maximaler Drawdown. Wie viel vom Peak verloren?'
                    : 'Maximum Drawdown. How much lost from peak?'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">Avg Loss</div>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Durchschnittlicher Verlust pro Verlusttrade'
                    : 'Average loss per losing trade'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">Avg Win</div>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Durchschnittlicher Gewinn pro Gewinntrade'
                    : 'Average profit per winning trade'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isGerman ? 'Starten Sie heute mit Ihrem Journal' : 'Start Your Journal Today'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Der beste Zeitpunkt, ein Trading-Journal zu starten, war gestern. Der zweitbeste ist heute.'
                : 'The best time to start a trading journal was yesterday. The second best is today.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/paper-trading`}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
              >
                {isGerman ? 'Paper Trading starten' : 'Start Paper Trading'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/options-mistakes`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {isGerman ? 'Häufige Fehler' : 'Common Mistakes'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {isGerman ? 'Strategien lernen' : 'Learn Strategies'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
