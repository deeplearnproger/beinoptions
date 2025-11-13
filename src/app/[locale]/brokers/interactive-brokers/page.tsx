'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function InteractiveBrokersPage({ params: { locale } }: { params: { locale: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  const reviews = [
    {
      author: 'Dr. Klaus M.',
      rating: 5,
      date: '2025-01-09',
      title: locale === 'de' ? 'Professionelle Plattform für erfahrene Trader' : 'Professional platform for experienced traders',
      text: locale === 'de'
        ? 'Als professioneller Trader nutze ich IB seit über 10 Jahren. Die niedrigen Gebühren, die riesige Produktauswahl und die professionellen Tools sind unschlagbar. Für Anfänger vielleicht etwas komplex, aber wenn man sich einarbeitet, will man nichts anderes mehr.'
        : 'As a professional trader I\'ve been using IB for over 10 years. The low fees, huge product range and professional tools are unbeatable. Maybe a bit complex for beginners, but once you get into it, you won\'t want anything else.',
      verified: true,
      helpful: 67,
    },
    {
      author: 'Martin S.',
      rating: 5,
      date: '2025-01-07',
      title: locale === 'de' ? 'Beste Gebührenstruktur am Markt' : 'Best fee structure on the market',
      text: locale === 'de'
        ? 'Nach langer Recherche bin ich zu Interactive Brokers gewechselt. Die Gebühren sind konkurrenzlos niedrig. Bei meinem Handelsvolumen spare ich mehrere tausend Euro pro Jahr im Vergleich zu deutschen Brokern.'
        : 'After extensive research I switched to Interactive Brokers. The fees are unbeatable. With my trading volume I save several thousand euros per year compared to German brokers.',
      verified: true,
      helpful: 54,
    },
    {
      author: 'Alexandra W.',
      rating: 4,
      date: '2025-01-04',
      title: locale === 'de' ? 'Großartig, aber Lernkurve vorhanden' : 'Great, but learning curve exists',
      text: locale === 'de'
        ? 'Die Plattform ist extrem mächtig, aber definitiv nicht für Anfänger. Ich habe etwa 3 Monate gebraucht, um mich vollständig einzuarbeiten. Dafür habe ich jetzt Zugriff auf praktisch jeden Markt der Welt.'
        : 'The platform is extremely powerful, but definitely not for beginners. It took me about 3 months to fully get into it. But now I have access to practically every market in the world.',
      verified: true,
      helpful: 41,
    },
    {
      author: 'Robert K.',
      rating: 5,
      date: '2025-01-02',
      title: locale === 'de' ? 'Weltweiter Marktzugang' : 'Global market access',
      text: locale === 'de'
        ? 'Über 150 Märkte weltweit - das ist einzigartig. Ich kann Optionen in den USA, Europa und Asien handeln, alles über ein Konto. Die API ist auch hervorragend für automatisiertes Trading.'
        : 'Over 150 markets worldwide - that\'s unique. I can trade options in the US, Europe and Asia, all through one account. The API is also excellent for automated trading.',
      verified: true,
      helpful: 58,
    },
    {
      author: 'Petra B.',
      rating: 4,
      date: '2024-12-30',
      title: locale === 'de' ? 'Sehr gut für Aktive Trader' : 'Very good for active traders',
      text: locale === 'de'
        ? 'Als aktiver Optionshändler bin ich sehr zufrieden. Die TWS Plattform braucht Einarbeitung, ist dann aber extrem leistungsfähig. Einziger Nachteil: Bei unter 100k$ gibt es eine Inaktivitätsgebühr.'
        : 'As an active options trader I am very satisfied. The TWS platform needs some learning, but is then extremely powerful. Only downside: under $100k there is an inactivity fee.',
      verified: true,
      helpful: 36,
    },
    {
      author: 'Frank H.',
      rating: 5,
      date: '2024-12-27',
      title: locale === 'de' ? 'Beste Ausführungsqualität' : 'Best execution quality',
      text: locale === 'de'
        ? 'Die Order-Ausführung ist erstklassig. Smart Routing sucht automatisch den besten Preis über mehrere Börsen. Das hat mir schon oft bessere Fills gegeben als bei anderen Brokern.'
        : 'Order execution is first class. Smart routing automatically searches for the best price across multiple exchanges. This has often given me better fills than other brokers.',
      verified: true,
      helpful: 49,
    },
    {
      author: 'Sabine L.',
      rating: 5,
      date: '2024-12-24',
      title: locale === 'de' ? 'Transparent und zuverlässig' : 'Transparent and reliable',
      text: locale === 'de'
        ? 'Was mir besonders gefällt: Absolute Transparenz bei den Kosten. Keine versteckten Gebühren, alles ist klar aufgeschlüsselt. Seit 3 Jahren dabei und sehr zufrieden.'
        : 'What I especially like: Absolute transparency in costs. No hidden fees, everything is clearly broken down. Been with them for 3 years and very satisfied.',
      verified: true,
      helpful: 44,
    },
    {
      author: 'Thomas R.',
      rating: 4,
      date: '2024-12-20',
      title: locale === 'de' ? 'Top für internationale Diversifikation' : 'Top for international diversification',
      text: locale === 'de'
        ? 'Durch IB kann ich mein Portfolio global diversifizieren. Aktien aus den USA, Europa, Asien - alles in einer Plattform. Die Währungsumrechnung ist auch sehr günstig.'
        : 'Through IB I can diversify my portfolio globally. Stocks from the US, Europe, Asia - all in one platform. Currency conversion is also very cheap.',
      verified: true,
      helpful: 38,
    },
  ];

  const stats = {
    totalReviews: 1823,
    averageRating: 4.8,
    distribution: {
      5: 82,
      4: 14,
      3: 3,
      2: 0,
      1: 1,
    },
    trustScore: 96,
  };

  const features = [
    {
      icon: '💰',
      title: locale === 'de' ? 'Niedrigste Gebühren' : 'Lowest Fees',
      description: locale === 'de'
        ? 'Ab 0,65€ pro Kontrakt - unschlagbar günstig'
        : 'From €0.65 per contract - unbeatable',
    },
    {
      icon: '🌍',
      title: locale === 'de' ? '150+ Märkte' : '150+ Markets',
      description: locale === 'de'
        ? 'Zugang zu weltweiten Börsen und Märkten'
        : 'Access to worldwide exchanges and markets',
    },
    {
      icon: '🏆',
      title: locale === 'de' ? 'Mehrfach reguliert' : 'Multiple Regulations',
      description: locale === 'de'
        ? 'BaFin, SEC, FCA und weitere Aufsichtsbehörden'
        : 'BaFin, SEC, FCA and more supervisory authorities',
    },
    {
      icon: '⚡',
      title: locale === 'de' ? 'Smart Routing' : 'Smart Routing',
      description: locale === 'de'
        ? 'Beste Ausführungspreise über mehrere Börsen'
        : 'Best execution prices across multiple exchanges',
    },
    {
      icon: '📊',
      title: locale === 'de' ? 'TWS Plattform' : 'TWS Platform',
      description: locale === 'de'
        ? 'Professionelle Trader Workstation mit allen Tools'
        : 'Professional Trader Workstation with all tools',
    },
    {
      icon: '🤖',
      title: locale === 'de' ? 'API Trading' : 'API Trading',
      description: locale === 'de'
        ? 'Vollständige API für automatisiertes Trading'
        : 'Complete API for automated trading',
    },
    {
      icon: '💵',
      title: locale === 'de' ? 'Keine Mindesteinlage' : 'No Minimum Deposit',
      description: locale === 'de'
        ? 'Starten Sie bereits ab 0€'
        : 'Start from €0',
    },
    {
      icon: '📈',
      title: locale === 'de' ? 'Riesige Auswahl' : 'Huge Selection',
      description: locale === 'de'
        ? 'Aktien, Optionen, Futures, Forex, Anleihen'
        : 'Stocks, options, futures, forex, bonds',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'de' ? 'Zurück zu Brokern' : 'Back to Brokers'}
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-blue-600">IB</span>
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Interactive Brokers</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-blue-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-blue-100 mb-6">
                  {locale === 'de'
                    ? 'Der weltweit führende Broker für professionelle Trader mit niedrigsten Gebühren und Zugang zu 150+ Märkten'
                    : 'The world\'s leading broker for professional traders with lowest fees and access to 150+ markets'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Verifiziert' : 'Verified'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    BaFin, SEC, FCA
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Seit 1978' : 'Since 1978'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-blue-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Hervorragend' : 'Excellent'}</div>
                </div>
                <a
                  href="https://www.interactivebrokers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-center hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {locale === 'de' ? '🚀 Jetzt Konto eröffnen' : '🚀 Open Account Now'}
                </a>
                <p className="text-xs text-gray-500 text-center mt-3">
                  {locale === 'de' ? '⚡ 0€ Mindesteinlage' : '⚡ €0 minimum deposit'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'overview', label: locale === 'de' ? 'Übersicht' : 'Overview', icon: '📊' },
              { id: 'fees', label: locale === 'de' ? 'Gebühren' : 'Fees', icon: '💰' },
              { id: 'platform', label: locale === 'de' ? 'Plattform' : 'Platform', icon: '🖥️' },
              { id: 'reviews', label: locale === 'de' ? 'Bewertungen' : 'Reviews', icon: '⭐' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <div className="space-y-12">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card text-center">
                  <div className="text-4xl mb-3">💵</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">0€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Mindesteinzahlung' : 'Min. Deposit'}</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Weltweite Märkte' : 'Global Markets'}</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">0.65€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Ab pro Kontrakt' : 'From per contract'}</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl mb-3">👥</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">2.5M+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Kunden weltweit' : 'Customers Worldwide'}</div>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {locale === 'de' ? 'Hauptmerkmale' : 'Key Features'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="card hover:shadow-lg transition-shadow">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">✅</span>
                    {locale === 'de' ? 'Vorteile' : 'Advantages'}
                  </h3>
                  <ul className="space-y-3">
                    {(locale === 'de'
                      ? ['Niedrigste Gebühren', 'Riesige Produktauswahl', 'Professionelle Plattform', 'Weltweiter Marktzugang', 'Smart Order Routing', 'Mehrfach reguliert']
                      : ['Lowest fees', 'Huge product range', 'Professional platform', 'Global market access', 'Smart order routing', 'Multiple regulations']
                    ).map((pro, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">⚠️</span>
                    {locale === 'de' ? 'Nachteile' : 'Disadvantages'}
                  </h3>
                  <ul className="space-y-3">
                    {(locale === 'de'
                      ? ['Komplex für Anfänger', 'Inaktivitätsgebühr unter 100.000$', 'Steile Lernkurve']
                      : ['Complex for beginners', 'Inactivity fee under $100,000', 'Steep learning curve']
                    ).map((con, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="card bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de' ? 'Bereit für professionelles Trading?' : 'Ready for Professional Trading?'}
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Eröffnen Sie Ihr Konto bei Interactive Brokers und profitieren Sie von niedrigsten Gebühren!'
                    : 'Open your account at Interactive Brokers and benefit from the lowest fees!'}
                </p>
                <a
                  href="https://www.interactivebrokers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
                >
                  {locale === 'de' ? '✨ Jetzt kostenloses Konto eröffnen' : '✨ Open Free Account Now'}
                </a>
              </div>
            </div>
          )}

          {/* Fees Tab */}
          {selectedTab === 'fees' && (
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {locale === 'de' ? 'Gebührenstruktur' : 'Fee Structure'}
                </h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{locale === 'de' ? 'Options Gebühren' : 'Options Fees'}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">0.65€</div>
                        <p className="text-gray-600">{locale === 'de' ? 'Pro Kontrakt (US-Optionen)' : 'Per contract (US options)'}</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">1.25€</div>
                        <p className="text-gray-600">{locale === 'de' ? 'Pro Kontrakt (Europäische Optionen)' : 'Per contract (European options)'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{locale === 'de' ? 'Weitere Gebühren' : 'Additional Fees'}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Kontoführung' : 'Account Maintenance'}</span>
                        <span className="text-green-600 font-bold">{locale === 'de' ? 'Kostenlos' : 'Free'}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Einzahlung' : 'Deposit'}</span>
                        <span className="text-green-600 font-bold">{locale === 'de' ? 'Kostenlos' : 'Free'}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Auszahlung' : 'Withdrawal'}</span>
                        <span className="text-gray-600">1 {locale === 'de' ? 'kostenlos/Monat, dann 1$' : 'free/month, then $1'}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Inaktivitätsgebühr' : 'Inactivity Fee'}</span>
                        <span className="text-gray-600">20$ {locale === 'de' ? 'bei unter 100k$' : 'under $100k'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">💡</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Gebühren-Vorteil' : 'Fee Advantage'}</h4>
                        <p className="text-gray-700">
                          {locale === 'de'
                            ? 'Interactive Brokers bietet die niedrigsten Gebühren im Markt. Bei aktivem Trading können Sie mehrere tausend Euro pro Jahr sparen.'
                            : 'Interactive Brokers offers the lowest fees in the market. With active trading you can save several thousand euros per year.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Platform Tab */}
          {selectedTab === 'platform' && (
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {locale === 'de' ? 'Trading-Plattformen' : 'Trading Platforms'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <div className="text-5xl mb-4">🖥️</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Trader Workstation (TWS)</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Professionelle Desktop-Plattform' : 'Professional desktop platform'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Erweiterte Charting-Tools' : 'Advanced charting tools'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Option Chains' : 'Option chains'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Risiko-Analysen' : 'Risk analysis'}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                    <div className="text-5xl mb-4">📱</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">IBKR Mobile</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Mobile Trading App' : 'Mobile trading app'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        iOS & Android
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Volle Funktionalität' : 'Full functionality'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Touch ID / Face ID' : 'Touch ID / Face ID'}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{locale === 'de' ? 'API & Automatisierung' : 'API & Automation'}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-blue-300">API Support</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Python, Java, C++, C#</li>
                        <li>• {locale === 'de' ? 'Vollständige API-Dokumentation' : 'Complete API documentation'}</li>
                        <li>• {locale === 'de' ? 'Backtesting möglich' : 'Backtesting possible'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-blue-300">{locale === 'de' ? 'Algorithmic Trading' : 'Algorithmic Trading'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? 'Automatisierte Strategien' : 'Automated strategies'}</li>
                        <li>• {locale === 'de' ? 'Low-Latency-Verbindungen' : 'Low-latency connections'}</li>
                        <li>• {locale === 'de' ? 'Co-Location verfügbar' : 'Co-location available'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {selectedTab === 'reviews' && (
            <div className="space-y-8">
              {/* Rating Overview */}
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-blue-600 mb-2">{stats.averageRating}</div>
                    <div className="mb-4">{renderStars(5)}</div>
                    <div className="text-gray-600">
                      {locale === 'de' ? 'Basierend auf' : 'Based on'} {stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="font-bold text-gray-900 mb-4">{locale === 'de' ? 'Bewertungsverteilung' : 'Rating Distribution'}</h3>
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="w-12 text-sm font-semibold text-gray-700">{rating} {locale === 'de' ? 'Stern' : 'star'}{rating !== 1 ? (locale === 'de' ? 'e' : 's') : ''}</span>
                          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                              style={{ width: `${stats.distribution[rating as keyof typeof stats.distribution]}%` }}
                            />
                          </div>
                          <span className="w-12 text-sm font-semibold text-gray-700 text-right">
                            {stats.distribution[rating as keyof typeof stats.distribution]}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Kundenbewertungen' : 'Customer Reviews'}
                </h3>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="card hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{review.author}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                          {review.verified && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {locale === 'de' ? 'Verifiziert' : 'Verified'}
                            </span>
                          )}
                        </div>
                        {renderStars(review.rating)}
                      </div>

                      <h4 className="font-bold text-gray-900 text-lg mb-2">{review.title}</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <button className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span className="text-sm font-semibold">{locale === 'de' ? 'Hilfreich' : 'Helpful'} ({review.helpful})</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {locale === 'de' ? 'Bereit für Interactive Brokers?' : 'Ready for Interactive Brokers?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Schließen Sie sich 2.5 Millionen Tradern weltweit an und profitieren Sie von niedrigsten Gebühren!'
              : 'Join 2.5 million traders worldwide and benefit from the lowest fees!'}
          </p>
          <a
            href="https://www.interactivebrokers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            {locale === 'de' ? '🚀 Jetzt kostenloses Konto eröffnen' : '🚀 Open Free Account Now'}
          </a>
          <p className="text-blue-200 text-sm mt-4">
            {locale === 'de' ? '⚡ 0€ Mindesteinlage | 💯 Mehrfach reguliert' : '⚡ €0 minimum deposit | 💯 Multiple regulations'}
          </p>
        </div>
      </div>
    </div>
  );
}
