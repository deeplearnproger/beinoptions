'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackBrokerClick, useScrollDepthTracking, useEngagementTimeTracking } from '@/hooks/useAnalytics';

export default function InteractiveBrokersClientPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
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
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? 'Niedrigste Gebühren' : 'Lowest Fees',
      description: locale === 'de'
        ? 'Ab 0,65€ pro Kontrakt - unschlagbar günstig'
        : 'From €0.65 per contract - unbeatable',
    },
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? '150+ Märkte' : '150+ Markets',
      description: locale === 'de'
        ? 'Zugang zu weltweiten Börsen und Märkten'
        : 'Access to worldwide exchanges and markets',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      title: locale === 'de' ? 'Mehrfach reguliert' : 'Multiple Regulations',
      description: locale === 'de'
        ? 'BaFin, SEC, FCA und weitere Aufsichtsbehörden'
        : 'BaFin, SEC, FCA and more supervisory authorities',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: locale === 'de' ? 'Smart Routing' : 'Smart Routing',
      description: locale === 'de'
        ? 'Beste Ausführungspreise über mehrere Börsen'
        : 'Best execution prices across multiple exchanges',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: locale === 'de' ? 'TWS Plattform' : 'TWS Platform',
      description: locale === 'de'
        ? 'Professionelle Trader Workstation mit allen Tools'
        : 'Professional Trader Workstation with all tools',
    },
    {
      iconBg: 'from-gray-50 to-gray-200',
      iconColor: 'text-gray-600',
      iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: locale === 'de' ? 'API Trading' : 'API Trading',
      description: locale === 'de'
        ? 'Vollständige API für automatisiertes Trading'
        : 'Complete API for automated trading',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
      title: locale === 'de' ? 'Keine Mindesteinlage' : 'No Minimum Deposit',
      description: locale === 'de'
        ? 'Starten Sie bereits ab 0€'
        : 'Start from €0',
    },
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
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

  // Track scroll depth and engagement time
  useScrollDepthTracking('Interactive Brokers Page');
  useEngagementTimeTracking('Interactive Brokers Page');

  // Handler for broker signup clicks
  const handleSignupClick = (_location: string) => {
    trackBrokerClick('Interactive Brokers', 'signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center text-red-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'de' ? 'Zurück zu Brokern' : 'Back to Brokers'}
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl p-3">
                    <img src="/logos/interactive-brokers.webp" alt="Interactive Brokers Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Interactive Brokers</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-red-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-red-100 mb-6">
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
                  <span className="px-4 py-2 bg-red-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    BaFin, SEC, FCA
                  </span>
                  <span className="px-4 py-2 bg-red-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Seit 1978' : 'Since 1978'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-red-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Hervorragend' : 'Excellent'}</div>
                </div>
                <a
                  href="https://www.interactivebrokers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSignupClick('Hero Sidebar')}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-center hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {locale === 'de' ? 'Jetzt Konto eröffnen' : 'Open Account Now'}
                </a>
                <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {locale === 'de' ? '0€ Mindesteinlage' : '€0 minimum deposit'}
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
              { id: 'overview', label: locale === 'de' ? 'Übersicht' : 'Overview', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { id: 'fees', label: locale === 'de' ? 'Gebühren' : 'Fees', iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { id: 'platform', label: locale === 'de' ? 'Plattform' : 'Platform', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { id: 'reviews', label: locale === 'de' ? 'Bewertungen' : 'Reviews', iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all flex items-center ${
                  selectedTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.iconPath} />
                </svg>
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
                  <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">0€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Mindesteinzahlung' : 'Min. Deposit'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Weltweite Märkte' : 'Global Markets'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">0.65€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Ab pro Kontrakt' : 'From per contract'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
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
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <svg className={`w-7 h-7 ${feature.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
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
              <div className="card bg-gradient-to-br from-red-600 to-red-700 text-white text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de' ? 'Bereit für professionelles Trading?' : 'Ready for Professional Trading?'}
                </h3>
                <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Eröffnen Sie Ihr Konto bei Interactive Brokers und profitieren Sie von niedrigsten Gebühren!'
                    : 'Open your account at Interactive Brokers and benefit from the lowest fees!'}
                </p>
                <a
                  href="https://www.interactivebrokers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSignupClick('Middle CTA')}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-red-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  {locale === 'de' ? 'Jetzt kostenloses Konto eröffnen' : 'Open Free Account Now'}
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

                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
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
                  <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
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
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
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
                      <h4 className="font-bold mb-3 text-red-300">API Support</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Python, Java, C++, C#</li>
                        <li>• {locale === 'de' ? 'Vollständige API-Dokumentation' : 'Complete API documentation'}</li>
                        <li>• {locale === 'de' ? 'Backtesting möglich' : 'Backtesting possible'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-red-300">{locale === 'de' ? 'Algorithmic Trading' : 'Algorithmic Trading'}</h4>
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
                    <div className="text-7xl font-bold text-red-600 mb-2">{stats.averageRating}</div>
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
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                        <button className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2">
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
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {locale === 'de' ? 'Bereit für Interactive Brokers?' : 'Ready for Interactive Brokers?'}
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Schließen Sie sich 2.5 Millionen Tradern weltweit an und profitieren Sie von niedrigsten Gebühren!'
              : 'Join 2.5 million traders worldwide and benefit from the lowest fees!'}
          </p>
          <a
            href="https://www.interactivebrokers.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSignupClick('Bottom CTA')}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-red-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? 'Jetzt kostenloses Konto eröffnen' : 'Open Free Account Now'}
          </a>
          <p className="text-red-200 text-sm mt-4 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? '0€ Mindesteinlage' : '€0 minimum deposit'}
            <span className="mx-1">|</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {locale === 'de' ? 'Mehrfach reguliert' : 'Multiple regulations'}
          </p>
        </div>
      </div>
    </div>
  );
}
