import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isGerman = locale === 'de';
  return {
    title: isGerman ? 'Paper Trading Guide - Optionen risikofrei üben' : 'Paper Trading Guide - Practice Options Risk-Free',
    description: isGerman
      ? 'Lernen Sie Paper Trading: Die besten Demo-Konten für Optionshandel. Thinkorswim, Interactive Brokers, Libertex und mehr.'
      : 'Learn Paper Trading: Best demo accounts for options trading. Thinkorswim, Interactive Brokers, Libertex and more.',
    keywords: isGerman
      ? ['Paper Trading', 'Demo-Konto', 'Optionen üben', 'Thinkorswim', 'Libertex']
      : ['Paper Trading', 'Demo Account', 'Practice Options', 'Thinkorswim', 'Libertex'],
  };
}

export default function PaperTradingPage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const platforms = [
    {
      name: 'Libertex',
      logo: '/logos/libertex.png',
      description: isGerman
        ? 'Preisgekrönte Plattform mit kostenlosem Demo-Konto. Über 300 CFDs auf Aktien, Indizes und mehr. Ideal für Einsteiger.'
        : 'Award-winning platform with free demo account. Over 300 CFDs on stocks, indices and more. Ideal for beginners.',
      demoBalance: '€50.000',
      features: isGerman
        ? ['Unbegrenztes Demo-Konto', 'Echte Marktbedingungen', 'Mobile App verfügbar', 'Deutscher Support', '40+ internationale Auszeichnungen']
        : ['Unlimited demo account', 'Real market conditions', 'Mobile app available', 'German support', '40+ international awards'],
      pros: isGerman
        ? ['Sehr benutzerfreundlich', 'Zero-Spread Trading', 'Schnelle Ausführung', 'Social Trading']
        : ['Very user-friendly', 'Zero-spread trading', 'Fast execution', 'Social trading'],
      link: `/${locale}/brokers/libertex`,
      badge: isGerman ? 'Empfehlung' : 'Recommended',
      badgeColor: 'from-amber-400 to-orange-500',
    },
    {
      name: 'Thinkorswim (TD Ameritrade)',
      logo: '/logos/thinkorswim.png',
      description: isGerman
        ? 'Die Profi-Plattform für Optionshandel. PaperMoney-Funktion mit $100.000 virtuellem Kapital.'
        : 'The professional platform for options trading. PaperMoney feature with $100,000 virtual capital.',
      demoBalance: '$100.000',
      features: isGerman
        ? ['PaperMoney Simulator', 'Echte Options-Ketten', 'Fortgeschrittene Charts', 'Strategy Roller', 'Backtesting']
        : ['PaperMoney simulator', 'Real options chains', 'Advanced charts', 'Strategy Roller', 'Backtesting'],
      pros: isGerman
        ? ['Beste Analyse-Tools', 'Alle Strategien möglich', 'Große Community']
        : ['Best analysis tools', 'All strategies possible', 'Large community'],
      cons: isGerman
        ? ['Nur für US-Residenten', 'Steile Lernkurve']
        : ['US residents only', 'Steep learning curve'],
      link: 'https://www.tdameritrade.com/tools-and-platforms/thinkorswim.html',
      external: true,
    },
    {
      name: 'Interactive Brokers',
      logo: '/logos/interactive-brokers.webp',
      description: isGerman
        ? 'Paper Trading Account mit Zugang zu globalen Märkten. BaFin-reguliert.'
        : 'Paper Trading Account with access to global markets. BaFin-regulated.',
      demoBalance: '$1.000.000',
      features: isGerman
        ? ['Globaler Marktzugang', 'Echte Options-Daten', 'TWS Plattform', 'API-Zugang', 'Portfolio-Analyse']
        : ['Global market access', 'Real options data', 'TWS platform', 'API access', 'Portfolio analysis'],
      pros: isGerman
        ? ['BaFin-reguliert', 'Professionelle Tools', 'Niedrige Gebühren']
        : ['BaFin-regulated', 'Professional tools', 'Low fees'],
      cons: isGerman
        ? ['Komplex für Anfänger', 'Paper Account erfordert Live-Konto']
        : ['Complex for beginners', 'Paper account requires live account'],
      link: `/${locale}/brokers/interactive-brokers`,
      badge: isGerman ? 'Für Profis' : 'For Pros',
      badgeColor: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'AvaTrade',
      logo: '/logos/avatrade.png',
      description: isGerman
        ? 'AvaOptions Plattform mit dediziertem Demo-Modus. Spezialisiert auf Optionshandel.'
        : 'AvaOptions platform with dedicated demo mode. Specialized in options trading.',
      demoBalance: '€100.000',
      features: isGerman
        ? ['AvaOptions Demo', 'Vanilla Options', 'Risiko-Management-Tools', 'Bildungsressourcen', 'Multi-Device']
        : ['AvaOptions demo', 'Vanilla options', 'Risk management tools', 'Educational resources', 'Multi-device'],
      pros: isGerman
        ? ['Spezialisiert auf Optionen', 'Gute Schulungsmaterialien', 'Reguliert']
        : ['Specialized in options', 'Good training materials', 'Regulated'],
      link: `/${locale}/brokers/avatrade`,
    },
    {
      name: 'TradingView',
      logo: '/logos/tradingview.png',
      description: isGerman
        ? 'Paper Trading direkt im Chart. Ideal für Strategie-Tests und Charting.'
        : 'Paper Trading directly in the chart. Ideal for strategy testing and charting.',
      demoBalance: isGerman ? 'Unbegrenzt' : 'Unlimited',
      features: isGerman
        ? ['Im Chart integriert', 'Benutzerdefinierte Alerts', 'Community Ideen', 'Replay-Modus', 'Strategy Tester']
        : ['Integrated in chart', 'Custom alerts', 'Community ideas', 'Replay mode', 'Strategy tester'],
      pros: isGerman
        ? ['Beste Charts', 'Große Community', 'Kostenlos nutzbar']
        : ['Best charts', 'Large community', 'Free to use'],
      cons: isGerman
        ? ['Begrenzte Options-Funktionen', 'Kein echter Broker']
        : ['Limited options features', 'Not a real broker'],
      link: 'https://www.tradingview.com/paper-trading/',
      external: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {isGerman ? 'Risikofrei lernen' : 'Learn Risk-Free'}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isGerman ? 'Paper Trading' : 'Paper Trading'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {isGerman ? 'Optionen ohne Risiko üben' : 'Practice Options Risk-Free'}
              </span>
            </h1>

            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Testen Sie Ihre Strategien mit virtuellem Geld, bevor Sie echtes Kapital einsetzen. Der beste Weg, um Optionshandel zu lernen.'
                : 'Test your strategies with virtual money before risking real capital. The best way to learn options trading.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-blue-300 text-sm">{isGerman ? 'Kosten' : 'Cost'}</div>
                <div className="text-white font-bold">{isGerman ? 'Kostenlos' : 'Free'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-blue-300 text-sm">{isGerman ? 'Risiko' : 'Risk'}</div>
                <div className="text-white font-bold">{isGerman ? 'Null' : 'Zero'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-blue-300 text-sm">{isGerman ? 'Lerneffekt' : 'Learning'}</div>
                <div className="text-white font-bold">{isGerman ? 'Maximal' : 'Maximum'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Paper Trading */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isGerman ? 'Was ist Paper Trading?' : 'What is Paper Trading?'}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-10">
              <p>
                {isGerman
                  ? 'Paper Trading (auch Demokonto genannt) ermöglicht es Ihnen, mit virtuellem Geld unter echten Marktbedingungen zu handeln. Sie können Strategien testen, die Plattform kennenlernen und Erfahrungen sammeln - ohne einen einzigen Euro zu riskieren.'
                  : 'Paper Trading (also called demo account) allows you to trade with virtual money under real market conditions. You can test strategies, get to know the platform and gain experience - without risking a single euro.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Kein Risiko' : 'No Risk'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Lernen Sie aus Fehlern, ohne Geld zu verlieren. Perfekt für Anfänger.'
                    : 'Learn from mistakes without losing money. Perfect for beginners.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Echte Daten' : 'Real Data'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Handeln Sie mit echten Marktpreisen und realistischen Bedingungen.'
                    : 'Trade with real market prices and realistic conditions.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Strategie-Tests' : 'Strategy Tests'}</h3>
                <p className="text-gray-600 text-sm">
                  {isGerman
                    ? 'Testen Sie neue Strategien, bevor Sie echtes Geld einsetzen.'
                    : 'Test new strategies before using real money.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {isGerman ? 'Die besten Paper-Trading-Plattformen' : 'Best Paper Trading Platforms'}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {isGerman
                ? 'Vergleichen Sie die Top-Plattformen für risikofreies Optionstraining.'
                : 'Compare the top platforms for risk-free options training.'}
            </p>

            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border ${
                    platform.badge ? 'border-amber-200 ring-2 ring-amber-100' : 'border-gray-200'
                  } relative overflow-hidden`}
                >
                  {platform.badge && (
                    <div className={`absolute top-0 right-0 bg-gradient-to-r ${platform.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl`}>
                      {platform.badge}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-4">
                      {platform.logo && (
                        <div className="w-16 h-16 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-2 flex-shrink-0">
                          <Image
                            src={platform.logo}
                            alt={`${platform.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain max-h-12"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                        <div className="text-sm text-gray-500">
                          Demo: <span className="font-semibold text-gray-700">{platform.demoBalance}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {platform.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Link */}
                    <div className="flex flex-col justify-between">
                      <div className="space-y-1 mb-4">
                        {platform.pros?.slice(0, 3).map((pro, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{pro}</span>
                          </div>
                        ))}
                      </div>
                      {platform.external ? (
                        <a
                          href={platform.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                        >
                          {isGerman ? 'Website besuchen' : 'Visit Website'}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={platform.link}
                          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                            platform.badge
                              ? 'bg-amber-500 text-white hover:bg-amber-600'
                              : 'bg-primary-600 text-white hover:bg-primary-700'
                          }`}
                        >
                          {isGerman ? 'Mehr erfahren' : 'Learn More'}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'So starten Sie mit Paper Trading' : 'How to Start Paper Trading'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Plattform wählen' : 'Choose Platform'}</h3>
                <p className="text-sm text-gray-600">
                  {isGerman
                    ? 'Wählen Sie eine Plattform, die Ihren Bedürfnissen entspricht.'
                    : 'Choose a platform that fits your needs.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Demo eröffnen' : 'Open Demo'}</h3>
                <p className="text-sm text-gray-600">
                  {isGerman
                    ? 'Registrieren Sie sich und eröffnen Sie ein Demo-Konto.'
                    : 'Register and open a demo account.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Strategien testen' : 'Test Strategies'}</h3>
                <p className="text-sm text-gray-600">
                  {isGerman
                    ? 'Beginnen Sie mit einfachen Trades und steigern Sie die Komplexität.'
                    : 'Start with simple trades and increase complexity.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{isGerman ? 'Analysieren' : 'Analyze'}</h3>
                <p className="text-sm text-gray-600">
                  {isGerman
                    ? 'Führen Sie ein Trading-Journal und lernen Sie aus jedem Trade.'
                    : 'Keep a trading journal and learn from every trade.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isGerman ? 'Tipps für effektives Paper Trading' : 'Tips for Effective Paper Trading'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{isGerman ? 'Realistisch handeln' : 'Trade Realistically'}</h3>
                </div>
                <p className="text-blue-200 text-sm">
                  {isGerman
                    ? 'Handeln Sie mit dem gleichen Betrag, den Sie später auch real einsetzen würden. Unrealistische Positionsgrößen verzerren die Ergebnisse.'
                    : 'Trade with the same amount you would use in real trading. Unrealistic position sizes distort results.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{isGerman ? 'Journal führen' : 'Keep a Journal'}</h3>
                </div>
                <p className="text-blue-200 text-sm">
                  {isGerman
                    ? 'Dokumentieren Sie jeden Trade: Einstieg, Ausstieg, Begründung. So lernen Sie aus Fehlern und Erfolgen.'
                    : 'Document every trade: entry, exit, reasoning. This helps you learn from mistakes and successes.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{isGerman ? 'Zeit nehmen' : 'Take Your Time'}</h3>
                </div>
                <p className="text-blue-200 text-sm">
                  {isGerman
                    ? 'Üben Sie mindestens 2-3 Monate, bevor Sie zu echtem Geld wechseln. Geduld zahlt sich aus.'
                    : 'Practice for at least 2-3 months before switching to real money. Patience pays off.'}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{isGerman ? 'Emotionen beachten' : 'Mind Emotions'}</h3>
                </div>
                <p className="text-blue-200 text-sm">
                  {isGerman
                    ? 'Paper Trading fühlt sich anders an als echtes Trading. Bereiten Sie sich mental auf den Unterschied vor.'
                    : 'Paper trading feels different than real trading. Mentally prepare for the difference.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isGerman ? 'Grenzen des Paper Trading' : 'Limitations of Paper Trading'}
            </h2>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-amber-800 mb-4">{isGerman ? 'Was Paper Trading nicht simulieren kann:' : 'What Paper Trading Cannot Simulate:'}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600">•</span>
                      <div>
                        <span className="font-semibold text-amber-800">{isGerman ? 'Echte Emotionen:' : 'Real Emotions:'}</span>
                        <span className="text-amber-700 ml-1">
                          {isGerman
                            ? 'Angst und Gier beeinflussen echte Trades stark.'
                            : 'Fear and greed strongly influence real trades.'}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600">•</span>
                      <div>
                        <span className="font-semibold text-amber-800">Slippage:</span>
                        <span className="text-amber-700 ml-1">
                          {isGerman
                            ? 'In der Realität werden Orders nicht immer zum gewünschten Preis ausgeführt.'
                            : 'In reality, orders are not always filled at the desired price.'}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600">•</span>
                      <div>
                        <span className="font-semibold text-amber-800">{isGerman ? 'Liquiditätsprobleme:' : 'Liquidity Issues:'}</span>
                        <span className="text-amber-700 ml-1">
                          {isGerman
                            ? 'Bei großen Positionen kann die Ausführung schwierig sein.'
                            : 'Large positions can be difficult to execute.'}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600">•</span>
                      <div>
                        <span className="font-semibold text-amber-800">{isGerman ? 'Gebühren:' : 'Fees:'}</span>
                        <span className="text-amber-700 ml-1">
                          {isGerman
                            ? 'Manche Demo-Konten berücksichtigen keine realistischen Handelskosten.'
                            : 'Some demo accounts do not account for realistic trading costs.'}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
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
              {isGerman ? 'Bereit zum Üben?' : 'Ready to Practice?'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Starten Sie noch heute mit Paper Trading und bauen Sie Ihre Fähigkeiten auf, bevor Sie echtes Geld riskieren.'
                : 'Start paper trading today and build your skills before risking real money.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/brokers/libertex`}
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors"
              >
                {isGerman ? 'Libertex Demo starten' : 'Start Libertex Demo'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/trading-journal`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {isGerman ? 'Trading Journal Guide' : 'Trading Journal Guide'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/options-beginners-guide`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {isGerman ? 'Anfänger Guide' : 'Beginners Guide'}
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
