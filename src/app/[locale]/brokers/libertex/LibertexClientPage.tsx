'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackBrokerClick, useScrollDepthTracking, useEngagementTimeTracking } from '@/hooks/useAnalytics';

type Props = {
  params: { locale: string };
};

export default function LibertexClientPage({ params }: Props) {
  const locale = params.locale;
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  // Track scroll depth and engagement time
  useScrollDepthTracking('Libertex Broker Page');
  useEngagementTimeTracking('Libertex Broker Page');

  // Handler for broker signup clicks
  const handleSignupClick = () => {
    trackBrokerClick('Libertex', 'signup');
  };

  const reviews = [
    {
      author: 'Michael S.',
      rating: 5,
      date: '2025-01-10',
      title: locale === 'de' ? 'Beste Trading-Plattform die ich je genutzt habe' : 'Best trading platform I\'ve ever used',
      text: locale === 'de'
        ? 'Die Zero-Spreads sind wirklich ein Game-Changer. Ich trade hauptsächlich Forex und die Ausführungsgeschwindigkeit ist beeindruckend. Support antwortet innerhalb von Minuten.'
        : 'Zero spreads are really a game changer. I mainly trade forex and the execution speed is impressive. Support responds within minutes.',
      verified: true,
      helpful: 42,
    },
    {
      author: 'Sarah M.',
      rating: 5,
      date: '2025-01-08',
      title: locale === 'de' ? 'Perfekt für Options CFDs' : 'Perfect for Options CFDs',
      text: locale === 'de'
        ? 'Ich handle seit 6 Monaten Options CFDs bei Libertex. Die Plattform ist intuitiv, die Gebühren transparent und die Auswahl an Instrumenten beeindruckend. Kann ich nur empfehlen!'
        : 'I\'ve been trading Options CFDs at Libertex for 6 months. The platform is intuitive, fees are transparent and the selection of instruments is impressive. Highly recommended!',
      verified: true,
      helpful: 38,
    },
    {
      author: 'Thomas K.',
      rating: 5,
      date: '2025-01-05',
      title: locale === 'de' ? 'Hervorragender Kundenservice' : 'Excellent customer service',
      text: locale === 'de'
        ? 'Hatte eine Frage zur Verifizierung und der Support hat mir innerhalb von 30 Minuten geholfen. Sehr professionell und freundlich. Die Plattform selbst ist top!'
        : 'Had a question about verification and support helped me within 30 minutes. Very professional and friendly. The platform itself is top notch!',
      verified: true,
      helpful: 29,
    },
    {
      author: 'Lisa B.',
      rating: 4,
      date: '2025-01-03',
      title: locale === 'de' ? 'Sehr gut, aber Lernkurve vorhanden' : 'Very good, but learning curve exists',
      text: locale === 'de'
        ? 'Als Anfänger brauchte ich etwa 2 Wochen um mich einzuarbeiten, aber die Bildungsressourcen sind hilfreich. Die Zero-Spreads machen den Unterschied bei häufigem Trading.'
        : 'As a beginner, it took me about 2 weeks to get started, but the educational resources are helpful. Zero spreads make a difference with frequent trading.',
      verified: true,
      helpful: 25,
    },
    {
      author: 'Andreas W.',
      rating: 5,
      date: '2024-12-28',
      title: locale === 'de' ? 'Beste Konditionen am Markt' : 'Best conditions on the market',
      text: locale === 'de'
        ? 'Habe mehrere Broker verglichen und Libertex bietet einfach die besten Konditionen für aktive Trader. Zero-Spreads + niedrige Kommission = mehr Profit in meiner Tasche.'
        : 'Compared several brokers and Libertex simply offers the best conditions for active traders. Zero spreads + low commission = more profit in my pocket.',
      verified: true,
      helpful: 51,
    },
    {
      author: 'Julia F.',
      rating: 5,
      date: '2024-12-25',
      title: locale === 'de' ? 'Schnelle Auszahlungen' : 'Fast withdrawals',
      text: locale === 'de'
        ? 'Auszahlungen werden innerhalb von 24 Stunden bearbeitet. Das ist für mich sehr wichtig. Keine versteckten Gebühren, alles transparent.'
        : 'Withdrawals are processed within 24 hours. This is very important to me. No hidden fees, everything transparent.',
      verified: true,
      helpful: 33,
    },
    {
      author: 'Markus R.',
      rating: 4,
      date: '2024-12-20',
      title: locale === 'de' ? 'Großartige Mobile App' : 'Great mobile app',
      text: locale === 'de'
        ? 'Die mobile App ist fantastisch. Ich kann überall traden und verpasse keine Gelegenheiten. Einziger Minuspunkt: Manchmal etwas langsam bei starker Marktvolatilität.'
        : 'The mobile app is fantastic. I can trade anywhere and don\'t miss opportunities. Only downside: sometimes a bit slow during high market volatility.',
      verified: true,
      helpful: 19,
    },
    {
      author: 'Stefan H.',
      rating: 5,
      date: '2024-12-18',
      title: locale === 'de' ? 'Über 300 Instrumente verfügbar' : 'Over 300 instruments available',
      text: locale === 'de'
        ? 'Die Auswahl ist riesig! Aktien, Forex, Krypto, Rohstoffe - alles was man braucht. Und mit den Options CFDs kann ich jetzt auch komplexere Strategien umsetzen.'
        : 'The selection is huge! Stocks, forex, crypto, commodities - everything you need. And with Options CFDs I can now implement more complex strategies.',
      verified: true,
      helpful: 44,
    },
  ];

  const stats = {
    totalReviews: 2847,
    averageRating: 4.9,
    distribution: {
      5: 89,
      4: 8,
      3: 2,
      2: 0,
      1: 1,
    },
    trustScore: 98,
  };

  const features = [
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: locale === 'de' ? 'Zero-Spread Trading' : 'Zero-Spread Trading',
      description: locale === 'de'
        ? 'Keine Spreads - zahlen Sie nur eine transparente Kommission'
        : 'No spreads - pay only a transparent commission',
    },
    {
      iconBg: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600',
      iconPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
      title: locale === 'de' ? 'Blitzschnelle Ausführung' : 'Lightning-Fast Execution',
      description: locale === 'de'
        ? 'Orders werden in Millisekunden ausgeführt'
        : 'Orders executed in milliseconds',
    },
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: locale === 'de' ? 'Über 300 CFDs' : 'Over 300 CFDs',
      description: locale === 'de'
        ? 'Aktien, Indizes, Forex, Krypto und mehr'
        : 'Stocks, indices, forex, crypto and more',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      title: locale === 'de' ? '40+ Auszeichnungen' : '40+ Awards',
      description: locale === 'de'
        ? 'Mehrfach ausgezeichneter Broker seit 1997'
        : 'Multi-award winning broker since 1997',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: locale === 'de' ? 'Mobile & Desktop' : 'Mobile & Desktop',
      description: locale === 'de'
        ? 'MT4, MT5 und eigene Trading-Plattform'
        : 'MT4, MT5 and proprietary trading platform',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'CySEC Reguliert' : 'CySEC Regulated',
      description: locale === 'de'
        ? 'EU-reguliert mit Einlagensicherung'
        : 'EU-regulated with deposit insurance',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? 'Ab 100€ starten' : 'Start from €100',
      description: locale === 'de'
        ? 'Niedrige Mindesteinzahlung für Einsteiger'
        : 'Low minimum deposit for beginners',
    },
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      title: locale === 'de' ? 'Bildungsressourcen' : 'Educational Resources',
      description: locale === 'de'
        ? 'Kostenlose Webinare, Videos und Tutorials'
        : 'Free webinars, videos and tutorials',
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
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors"
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
                    <img src="/logos/libertex.png" alt="Libertex Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Libertex</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-orange-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-orange-100 mb-6">
                  {locale === 'de'
                    ? 'Der führende Broker für Options CFDs mit Zero-Spreads und über 40 internationalen Auszeichnungen'
                    : 'The leading broker for Options CFDs with zero spreads and over 40 international awards'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Verifiziert' : 'Verified'}
                  </span>
                  <span className="px-4 py-2 bg-orange-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    CySEC {locale === 'de' ? 'Reguliert' : 'Regulated'}
                  </span>
                  <span className="px-4 py-2 bg-orange-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Seit 1997' : 'Since 1997'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-orange-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Hervorragend' : 'Excellent'}</div>
                </div>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSignupClick}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-center hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {locale === 'de' ? 'Jetzt Konto eröffnen' : 'Open Account Now'}
                </a>
                <p className="text-xs text-gray-500 text-center mt-3">
                  {locale === 'de' ? 'In 2 Minuten startklar' : 'Ready in 2 minutes'}
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
              { id: 'overview', label: locale === 'de' ? 'Übersicht' : 'Overview' },
              { id: 'fees', label: locale === 'de' ? 'Gebühren' : 'Fees' },
              { id: 'platform', label: locale === 'de' ? 'Plattform' : 'Platform' },
              { id: 'reviews', label: locale === 'de' ? 'Bewertungen' : 'Reviews' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as typeof selectedTab)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Mindesteinzahlung' : 'Min. Deposit'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Handelsinstrumente' : 'Instruments'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Spreads' : 'Spreads'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">2.9M+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Nutzer weltweit' : 'Users Worldwide'}</div>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {locale === 'de' ? 'Vorteile' : 'Advantages'}
                  </h3>
                  <ul className="space-y-3">
                    {['Zero-Spread Trading', locale === 'de' ? 'Sehr schnelle Ausführung' : 'Fast execution', locale === 'de' ? 'Benutzerfreundliche Plattform' : 'User-friendly platform', locale === 'de' ? 'Über 350 Instrumente' : 'Over 350 instruments', 'MT4/MT5 + ' + (locale === 'de' ? 'eigene Plattform' : 'proprietary platform'), 'Social Trading', '40+ ' + (locale === 'de' ? 'internationale Auszeichnungen' : 'international awards')].map((pro, index) => (
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
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    {locale === 'de' ? 'Nachteile' : 'Disadvantages'}
                  </h3>
                  <ul className="space-y-3">
                    {[locale === 'de' ? 'Keine BaFin-Regulierung' : 'No BaFin regulation', locale === 'de' ? 'Hauptsächlich CFD-Handel' : 'Mainly CFD trading'].map((con, index) => (
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
              <div className="card bg-gradient-to-br from-orange-500 to-red-600 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de' ? 'Bereit zu starten?' : 'Ready to Start?'}
                </h3>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Eröffnen Sie Ihr kostenloses Konto in nur 2 Minuten und profitieren Sie von Zero-Spreads!'
                    : 'Open your free account in just 2 minutes and benefit from zero spreads!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSignupClick}
                  className="inline-block px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
                >
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Spreads</h3>
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-2">0€</div>
                      <p className="text-gray-600">{locale === 'de' ? 'Zero-Spreads auf allen Instrumenten' : 'Zero spreads on all instruments'}</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{locale === 'de' ? 'Kommission' : 'Commission'}</h3>
                      </div>
                      <div className="text-4xl font-bold text-blue-600 mb-2">{locale === 'de' ? 'ab 0.03%' : 'from 0.03%'}</div>
                      <p className="text-gray-600">{locale === 'de' ? 'Transparente Kommission pro Trade' : 'Transparent commission per trade'}</p>
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
                        <span className="text-green-600 font-bold">{locale === 'de' ? 'Kostenlos' : 'Free'}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Inaktivitätsgebühr' : 'Inactivity Fee'}</span>
                        <span className="text-gray-600">10€ {locale === 'de' ? 'nach 180 Tagen' : 'after 180 days'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Warum Zero-Spreads?' : 'Why Zero Spreads?'}</h4>
                        <p className="text-gray-700">
                          {locale === 'de'
                            ? 'Mit Zero-Spreads zahlen Sie nur eine transparente Kommission ohne versteckte Kosten. Besonders für aktive Trader bedeutet dies erhebliche Einsparungen.'
                            : 'With zero spreads you only pay a transparent commission without hidden costs. Especially for active traders, this means significant savings.'}
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Libertex App</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Eigene benutzerfreundliche Plattform' : 'Proprietary user-friendly platform'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Intuitive Benutzeroberfläche' : 'Intuitive interface'}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Mobile & Desktop' : 'Mobile & Desktop'}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Social Trading integriert' : 'Social Trading integrated'}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">MetaTrader 4</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Weltweit beliebteste Trading-Plattform' : 'World\'s most popular trading platform'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Erweiterte Charts' : 'Advanced charts'}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Indikatoren & Tools' : 'Indicators & tools'}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Automatisiertes Trading' : 'Automated trading'}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">MetaTrader 5</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Weiterentwicklung des MT4' : 'Evolution of MT4'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Mehr Timeframes' : 'More timeframes'}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Wirtschaftskalender' : 'Economic calendar'}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {locale === 'de' ? 'Mehr Orderarten' : 'More order types'}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{locale === 'de' ? 'Technische Highlights' : 'Technical Highlights'}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-orange-300">{locale === 'de' ? 'Performance' : 'Performance'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? 'Ausführung in Millisekunden' : 'Execution in milliseconds'}</li>
                        <li>• {locale === 'de' ? '99.9% Uptime' : '99.9% uptime'}</li>
                        <li>• {locale === 'de' ? 'Keine Requotes' : 'No requotes'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-orange-300">{locale === 'de' ? 'Sicherheit' : 'Security'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? '2-Faktor-Authentifizierung' : '2-factor authentication'}</li>
                        <li>• {locale === 'de' ? 'SSL-Verschlüsselung' : 'SSL encryption'}</li>
                        <li>• {locale === 'de' ? 'Segregierte Konten' : 'Segregated accounts'}</li>
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
                    <div className="text-7xl font-bold text-orange-600 mb-2">{stats.averageRating}</div>
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
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                        <button className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
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

              {/* Add Review CTA */}
              <div className="card bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Haben Sie Erfahrungen mit Libertex?' : 'Have Experience with Libertex?'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {locale === 'de'
                    ? 'Teilen Sie Ihre Bewertung und helfen Sie anderen Tradern bei der Entscheidung!'
                    : 'Share your review and help other traders make a decision!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSignupClick}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {locale === 'de' ? 'Bewertung schreiben' : 'Write Review'}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {locale === 'de' ? 'Bereit, mit Libertex zu traden?' : 'Ready to Trade with Libertex?'}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Über 2.9 Millionen Trader weltweit vertrauen auf Libertex. Werden Sie Teil der Community!'
              : 'Over 2.9 million traders worldwide trust Libertex. Join the community!'}
          </p>
          <a
            href="https://libertex.com/de/signup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSignupClick}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? 'Jetzt kostenloses Konto eröffnen' : 'Open Free Account Now'}
          </a>
          <p className="text-orange-200 text-sm mt-4">
            {locale === 'de' ? 'In nur 2 Minuten startklar' : 'Ready in just 2 minutes'}
          </p>
        </div>
      </div>
    </div>
  );
}
