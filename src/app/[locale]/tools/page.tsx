import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = locale === 'de' ? 'Options Trading Tools' : 'Options Trading Tools';
  const description =
    locale === 'de'
      ? 'Professionelle Tools für Optionshandel: Payoff Calculator, P/L Simulator und Implied Volatility Tools.'
      : 'Professional options trading tools: Payoff Calculator, P/L Simulator, and Implied Volatility Tools.';

  return {
    title,
    description,
  };
}

export default function ToolsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isGerman = locale === 'de';

  const tools = [
    {
      id: 'payoff',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: isGerman ? 'Payoff Calculator' : 'Payoff Calculator',
      description: isGerman
        ? 'Erstellen Sie Multi-Leg Optionsstrategien und visualisieren Sie Gewinn/Verlust bei Verfall. Bis zu 6 Legs mit Presets wie Covered Call, Iron Condor und mehr.'
        : 'Build multi-leg options strategies and visualize profit/loss at expiration. Up to 6 legs with presets like Covered Call, Iron Condor and more.',
      features: isGerman
        ? ['Multi-Leg Strategien (bis zu 6)', 'Break-Even Punkte', 'Max Gewinn/Verlust', 'CSV Export', 'URL Sharing']
        : ['Multi-leg strategies (up to 6)', 'Break-even points', 'Max profit/loss', 'CSV export', 'URL sharing'],
      href: `/${locale}/tools/payoff`,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'pl',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: isGerman ? 'P/L Simulator' : 'P/L Simulator',
      description: isGerman
        ? 'Berechnen Sie aktuellen Gewinn/Verlust vor dem Verfall mit Black-Scholes Pricing. Zeigt alle Greeks: Delta, Gamma, Theta, Vega, Rho.'
        : 'Calculate current profit/loss before expiration using Black-Scholes pricing. Shows all Greeks: Delta, Gamma, Theta, Vega, Rho.',
      features: isGerman
        ? ['Echtzeit P/L', 'Alle Greeks', 'P/L Kurve', 'Volatilitäts-Sensitivität', 'Zeitverfall']
        : ['Real-time P/L', 'All Greeks', 'P/L curve', 'Volatility sensitivity', 'Time decay'],
      href: `/${locale}/tools/pl`,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'iv',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: isGerman ? 'IV Tools' : 'IV Tools',
      description: isGerman
        ? 'Berechnen Sie Implied Volatility aus Marktpreisen oder theoretische Preise aus IV. Verwendet Newton-Raphson mit Bisection Fallback.'
        : 'Calculate implied volatility from market prices or theoretical prices from IV. Uses Newton-Raphson with bisection fallback.',
      features: isGerman
        ? ['IV Solver', 'Preis Calculator', 'Call/Put Support', 'Dividenden Support', 'Genauigkeit 0.01%']
        : ['IV solver', 'Price calculator', 'Call/Put support', 'Dividend support', 'Accuracy 0.01%'],
      href: `/${locale}/tools/iv`,
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              {isGerman ? 'Kostenlose Trading Tools' : 'Free Trading Tools'}
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              {isGerman ? 'Options Trading Tools' : 'Options Trading Tools'}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Professionelle Werkzeuge für Optionsanalyse, Strategieplanung und Risikomanagement. Kostenlos und Open Source.'
                : 'Professional tools for options analysis, strategy planning, and risk management. Free and open source.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/tools/payoff`} className="btn-primary">
                {isGerman ? 'Jetzt starten' : 'Get Started'}
              </Link>
              <Link href={`/${locale}/tutorials`} className="btn-secondary">
                {isGerman ? 'Tutorials ansehen' : 'View Tutorials'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tool.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  {isGerman ? 'Tool öffnen' : 'Open tool'}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {isGerman ? 'Warum unsere Tools?' : 'Why Our Tools?'}
            </h2>
            <p className="text-gray-600">
              {isGerman
                ? 'Entwickelt mit mathematischer Präzision und praktischer Erfahrung'
                : 'Built with mathematical precision and practical experience'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: isGerman ? 'Präzise' : 'Accurate',
                desc: isGerman
                  ? 'Black-Scholes Model mit 85%+ Test Coverage'
                  : 'Black-Scholes model with 85%+ test coverage',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: isGerman ? 'Schnell' : 'Fast',
                desc: isGerman
                  ? 'Optimierte Berechnungen mit React Memoization'
                  : 'Optimized calculations with React memoization',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                ),
                title: isGerman ? 'Open Source' : 'Open Source',
                desc: isGerman ? 'Vollständiger Code verfügbar' : 'Full code available',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: isGerman ? 'Daten-Sicher' : 'Data Safe',
                desc: isGerman
                  ? 'Keine Server - alles läuft lokal'
                  : 'No servers - everything runs locally',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  {isGerman ? 'Wichtiger Hinweis' : 'Important Notice'}
                </h3>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  {isGerman
                    ? 'Diese Tools dienen ausschließlich zu Bildungszwecken und stellen keine Anlageberatung dar. Optionshandel birgt erhebliche Risiken und ist nicht für jeden Anleger geeignet. Vergangene Ergebnisse sind keine Garantie für zukünftige Renditen. Bitte konsultieren Sie einen lizenzierten Finanzberater, bevor Sie Handelsentscheidungen treffen.'
                    : 'These tools are for educational purposes only and do not constitute investment advice. Options trading involves substantial risk and is not suitable for every investor. Past results are no guarantee of future returns. Please consult a licensed financial advisor before making trading decisions.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            {isGerman ? 'Bereit anzufangen?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {isGerman
              ? 'Wählen Sie ein Tool und beginnen Sie mit der Analyse Ihrer Optionsstrategien'
              : 'Choose a tool and start analyzing your options strategies'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/tools/payoff`}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {isGerman ? 'Payoff Calculator' : 'Payoff Calculator'}
            </Link>
            <Link
              href={`/${locale}/tutorials`}
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-800 transition-colors"
            >
              {isGerman ? 'Tutorials' : 'Tutorials'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
