'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Plus500Page({ params: { locale } }: { params: { locale: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  const reviews = [
    {
      author: 'Robert K.',
      rating: 5,
      date: '2025-01-14',
      title: locale === 'de' ? 'Sehr einfach zu bedienen' : 'Very easy to use',
      text: locale === 'de'
        ? 'Die Plattform ist super intuitiv. Habe innerhalb von 30 Minuten mein erstes CFD-Options-Trade gemacht. Keine Kommissionen, alles transparent. Top!'
        : 'The platform is super intuitive. Made my first CFD options trade within 30 minutes. No commissions, everything transparent. Top!',
      verified: true,
      helpful: 47,
    },
    {
      author: 'Jessica L.',
      rating: 5,
      date: '2025-01-11',
      title: locale === 'de' ? 'Börsennotiert = Vertrauenswürdig' : 'Publicly traded = Trustworthy',
      text: locale === 'de'
        ? 'Plus500 ist an der Londoner Börse notiert, das gibt mir ein sehr sicheres Gefühl. Die App funktioniert einwandfrei, auch auf meinem Tablet.'
        : 'Plus500 is listed on the London Stock Exchange, which gives me a very safe feeling. The app works flawlessly, even on my tablet.',
      verified: true,
      helpful: 39,
    },
    {
      author: 'Martin S.',
      rating: 4,
      date: '2025-01-08',
      title: locale === 'de' ? 'Gute Plattform, aber nur CFDs' : 'Good platform, but only CFDs',
      text: locale === 'de'
        ? 'Für CFD-Trading perfekt. Spreads sind fair, keine Kommissionen. Einziger Nachteil: Man kann nur CFDs handeln, keine echten Aktien. Für Options CFDs aber ideal.'
        : 'Perfect for CFD trading. Spreads are fair, no commissions. Only downside: you can only trade CFDs, no real stocks. But ideal for options CFDs.',
      verified: true,
      helpful: 31,
    },
    {
      author: 'Elena M.',
      rating: 5,
      date: '2025-01-05',
      title: locale === 'de' ? 'Schnelle Kontoeröffnung' : 'Fast account opening',
      text: locale === 'de'
        ? 'Konto in 10 Minuten eröffnet und verifiziert. Einzahlung per PayPal war sofort da. Deutscher Support ist sehr hilfsbereit.'
        : 'Account opened and verified in 10 minutes. Deposit via PayPal was instant. German support is very helpful.',
      verified: true,
      helpful: 52,
    },
    {
      author: 'Christian W.',
      rating: 4,
      date: '2025-01-02',
      title: locale === 'de' ? 'Solide Plattform für Einsteiger' : 'Solid platform for beginners',
      text: locale === 'de'
        ? 'Als Anfänger war ich etwas überfordert mit MT4/MT5 bei anderen Brokern. Plus500 ist viel einfacher und übersichtlicher. Genau das richtige für mich.'
        : 'As a beginner, I was a bit overwhelmed with MT4/MT5 at other brokers. Plus500 is much simpler and clearer. Just right for me.',
      verified: true,
      helpful: 28,
    },
    {
      author: 'Sandra B.',
      rating: 5,
      date: '2024-12-30',
      title: locale === 'de' ? 'Ausgezeichnete Mobile App' : 'Excellent mobile app',
      text: locale === 'de'
        ? 'Die mobile App ist hervorragend. Sehr schnell, übersichtlich und alle Funktionen verfügbar. Ich trade fast nur noch mobil.'
        : 'The mobile app is excellent. Very fast, clear and all features available. I trade almost only on mobile now.',
      verified: true,
      helpful: 44,
    },
  ];

  const stats = {
    totalReviews: 2156,
    averageRating: 4.5,
    distribution: {
      5: 72,
      4: 21,
      3: 5,
      2: 1,
      1: 1,
    },
    trustScore: 92,
  };

  const features = [
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? 'Keine Kommissionen' : 'No Commissions',
      description: locale === 'de'
        ? 'Zahlen Sie nur den Spread, keine zusätzlichen Gebühren'
        : 'Pay only the spread, no additional fees',
    },
    {
      iconBg: 'from-blue-50 to-cyan-100',
      iconColor: 'text-blue-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'Börsennotiert' : 'Publicly Traded',
      description: locale === 'de'
        ? 'LSE-gelistet mit höchsten Transparenz-Standards'
        : 'LSE-listed with highest transparency standards',
    },
    {
      iconBg: 'from-cyan-50 to-blue-100',
      iconColor: 'text-cyan-600',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: locale === 'de' ? 'Mobile Excellence' : 'Mobile Excellence',
      description: locale === 'de'
        ? 'Preisgekrönte mobile App für iOS & Android'
        : 'Award-winning mobile app for iOS & Android',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: locale === 'de' ? 'Schnelle Ausführung' : 'Fast Execution',
      description: locale === 'de'
        ? 'Orders werden in Millisekunden ausgeführt'
        : 'Orders executed in milliseconds',
    },
    {
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'Multi-Reguliert' : 'Multi-Regulated',
      description: locale === 'de'
        ? 'FCA, CySEC, ASIC, FMA reguliert'
        : 'FCA, CySEC, ASIC, FMA regulated',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      title: locale === 'de' ? 'Einfach zu bedienen' : 'Easy to Use',
      description: locale === 'de'
        ? 'Intuitive Benutzeroberfläche für alle Level'
        : 'Intuitive user interface for all levels',
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
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white py-20">
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
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl p-3">
                    <img src="/logos/plus500.jpg" alt="Plus500 Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Plus500</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-blue-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-blue-100 mb-6">
                  {locale === 'de'
                    ? 'Börsennotierter CFD-Broker mit benutzerfreundlicher Plattform und Options CFDs'
                    : 'Publicly traded CFD broker with user-friendly platform and Options CFDs'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'LSE-Notiert' : 'LSE-Listed'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'FCA Reguliert' : 'FCA Regulated'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Seit 2008' : 'Since 2008'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-cyan-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Sehr gut' : 'Very Good'}</div>
                </div>
                <a
                  href="https://www.plus500.com/de/trading/cfd-trading"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-center hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                  {locale === 'de' ? 'In wenigen Minuten startklar' : 'Ready in minutes'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex gap-4 max-w-6xl mx-auto overflow-x-auto">
            {(['overview', 'fees', 'reviews', 'platform'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-4 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                  selectedTab === tab
                    ? 'text-cyan-600 border-cyan-600'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab === 'overview' && (locale === 'de' ? 'Übersicht' : 'Overview')}
                {tab === 'fees' && (locale === 'de' ? 'Gebühren' : 'Fees')}
                {tab === 'reviews' && (locale === 'de' ? 'Bewertungen' : 'Reviews')}
                {tab === 'platform' && (locale === 'de' ? 'Plattform' : 'Platform')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          {selectedTab === 'overview' && (
            <div className="space-y-12">
              {/* Features Grid */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {locale === 'de' ? 'Highlights' : 'Highlights'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="card hover:shadow-lg transition-shadow">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <svg className={`w-7 h-7 ${feature.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Info */}
              <div className="card">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Wichtige Informationen' : 'Key Information'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Regulierung' : 'Regulation'}</h3>
                    <p className="text-gray-700">FCA (UK), CySEC, ASIC, FMA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Mindesteinzahlung' : 'Minimum Deposit'}</h3>
                    <p className="text-gray-700">100 €</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Optionen verfügbar' : 'Options Available'}</h3>
                    <p className="text-gray-700">{locale === 'de' ? 'Ja, Options CFDs' : 'Yes, Options CFDs'}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Plattformen' : 'Platforms'}</h3>
                    <p className="text-gray-700">{locale === 'de' ? 'Web-Plattform, iOS & Android App' : 'Web platform, iOS & Android app'}</p>
                  </div>
                </div>
              </div>

              {/* Why Plus500 */}
              <div className="card bg-gradient-to-br from-cyan-50 to-blue-50">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Warum Plus500?' : 'Why Plus500?'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Für Anfänger' : 'For Beginners'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Die Plattform ist extrem benutzerfreundlich und intuitiv. Perfekt für Einsteiger, die keine komplexen Trading-Tools brauchen.'
                        : 'The platform is extremely user-friendly and intuitive. Perfect for beginners who don\'t need complex trading tools.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Mobile Trader' : 'Mobile Traders'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Die preisgekrönte mobile App macht Trading von überall möglich. Alle Funktionen auch unterwegs verfügbar.'
                        : 'The award-winning mobile app makes trading possible from anywhere. All features available on the go.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Transparenz' : 'Transparency'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Als börsennotiertes Unternehmen (LSE) unterliegt Plus500 strengsten Transparenz- und Compliance-Anforderungen.'
                        : 'As a publicly traded company (LSE), Plus500 is subject to the strictest transparency and compliance requirements.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Kostenstruktur' : 'Cost Structure'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Keine Kommissionen - Sie zahlen nur den Spread. Einfach, transparent, fair.'
                        : 'No commissions - you only pay the spread. Simple, transparent, fair.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  {locale === 'de' ? 'Bereit für CFD-Options-Trading?' : 'Ready for CFD Options Trading?'}
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  {locale === 'de'
                    ? 'Starten Sie jetzt mit Plus500 - dem benutzerfreundlichsten CFD-Broker'
                    : 'Start now with Plus500 - the most user-friendly CFD broker'}
                </p>
                <a
                  href="https://www.plus500.com/de/trading/cfd-trading"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  {locale === 'de' ? 'Jetzt kostenlos registrieren' : 'Register for free now'}
                </a>
                <p className="text-sm text-blue-100 mt-4">
                  {locale === 'de' ? 'Keine Kommissionen - Schnelle Kontoeröffnung - Deutscher Support' : 'No commissions - Fast account opening - German support'}
                </p>
              </div>
            </div>
          )}

          {selectedTab === 'fees' && (
            <div className="card">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Gebührenstruktur' : 'Fee Structure'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Kommission' : 'Commission'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Keine' : 'None'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Spreads' : 'Spreads'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Variabel, wettbewerbsfähig' : 'Variable, competitive'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Inaktivitätsgebühr' : 'Inactivity Fee'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? '€10/Monat nach 3 Monaten' : '€10/month after 3 months'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Ein-/Auszahlungsgebühr' : 'Deposit/Withdrawal Fee'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Kostenlos' : 'Free'}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">{locale === 'de' ? 'Overnight-Finanzierung' : 'Overnight Financing'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Variabel je Position' : 'Variable per position'}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <p className="text-sm text-gray-700">
                  <strong>{locale === 'de' ? 'Hinweis:' : 'Note:'}</strong> {locale === 'de' ? 'CFDs sind komplexe Instrumente und bergen ein hohes Risiko. Stellen Sie sicher, dass Sie die Risiken verstehen.' : 'CFDs are complex instruments and carry a high level of risk. Make sure you understand the risks.'}
                </p>
              </div>
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-gray-900">
                {locale === 'de' ? 'Kundenbewertungen' : 'Customer Reviews'}
              </h2>
              {reviews.map((review, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{review.author}</span>
                        {review.verified && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {locale === 'de' ? 'Verifiziert' : 'Verified'}
                          </span>
                        )}
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-3">{review.text}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="hover:text-gray-700 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {locale === 'de' ? 'Hilfreich' : 'Helpful'} ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'platform' && (
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Plus500 Plattform' : 'Plus500 Platform'}
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  {locale === 'de'
                    ? 'Plus500 bietet eine proprietäre, webbasierte Plattform, die speziell für CFD-Trading entwickelt wurde. Die Plattform ist bekannt für ihre Einfachheit und Benutzerfreundlichkeit.'
                    : 'Plus500 offers a proprietary web-based platform specifically designed for CFD trading. The platform is known for its simplicity and user-friendliness.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{locale === 'de' ? 'Verfügbare Plattformen' : 'Available Platforms'}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>{locale === 'de' ? 'Web-Plattform' : 'Web platform'}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>{locale === 'de' ? 'Windows App' : 'Windows app'}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>iOS App</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>Android App</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{locale === 'de' ? 'Features' : 'Features'}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Echtzeit-Kurse' : 'Real-time quotes'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Charts & Indikatoren' : 'Charts & indicators'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Risk-Management-Tools' : 'Risk management tools'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Preisalarme' : 'Price alerts'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
