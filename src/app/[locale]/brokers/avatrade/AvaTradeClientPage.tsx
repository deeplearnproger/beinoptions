'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AvaTradeClientPage({ params: { locale } }: { params: { locale: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  const reviews = [
    {
      author: 'Peter M.',
      rating: 5,
      date: '2025-01-12',
      title: locale === 'de' ? 'AvaOptions Plattform ist erstklassig' : 'AvaOptions platform is first-class',
      text: locale === 'de'
        ? 'Die dedizierte AvaOptions Plattform macht Options-Trading sehr einfach. Sehr übersichtlich und professionell. Der Support ist deutsch und hilft schnell.'
        : 'The dedicated AvaOptions platform makes options trading very easy. Very clear and professional. Support is in German and helps quickly.',
      verified: true,
      helpful: 34,
    },
    {
      author: 'Anna K.',
      rating: 5,
      date: '2025-01-09',
      title: locale === 'de' ? 'Bildungsressourcen top!' : 'Educational resources are top!',
      text: locale === 'de'
        ? 'Habe als Anfänger angefangen und die Webinare und Video-Tutorials haben mir sehr geholfen. Die Plattform ist intuitiv bedienbar.'
        : 'Started as a beginner and the webinars and video tutorials helped me a lot. The platform is intuitive to use.',
      verified: true,
      helpful: 29,
    },
    {
      author: 'Maximilian T.',
      rating: 4,
      date: '2025-01-06',
      title: locale === 'de' ? 'Solider Broker für Options-Trading' : 'Solid broker for options trading',
      text: locale === 'de'
        ? 'Sehr gute Plattform, viele Instrumente verfügbar. Einziger Nachteil: Die Inaktivitätsgebühr nach 3 Monaten. Ansonsten top!'
        : 'Very good platform, many instruments available. Only downside: inactivity fee after 3 months. Otherwise top!',
      verified: true,
      helpful: 22,
    },
    {
      author: 'Sophie W.',
      rating: 5,
      date: '2025-01-04',
      title: locale === 'de' ? 'Multi-Regulierung gibt Sicherheit' : 'Multi-regulation provides security',
      text: locale === 'de'
        ? 'AvaTrade ist weltweit reguliert (Irland, Australien, Südafrika, Japan). Das gibt mir ein sicheres Gefühl. Copy Trading ist ein großes Plus.'
        : 'AvaTrade is regulated worldwide (Ireland, Australia, South Africa, Japan). This gives me a secure feeling. Copy trading is a big plus.',
      verified: true,
      helpful: 41,
    },
    {
      author: 'Daniel R.',
      rating: 4,
      date: '2024-12-29',
      title: locale === 'de' ? 'Gutes Gesamtpaket' : 'Good overall package',
      text: locale === 'de'
        ? 'MT4/MT5 plus AvaTradeGO App - perfekt für unterwegs. Spreads sind fair, wenn auch nicht die niedrigsten. Für Options-Trader aber sehr geeignet.'
        : 'MT4/MT5 plus AvaTradeGO app - perfect for on the go. Spreads are fair, although not the lowest. Very suitable for options traders though.',
      verified: true,
      helpful: 28,
    },
  ];

  const stats = {
    totalReviews: 1534,
    averageRating: 4.7,
    distribution: {
      5: 78,
      4: 17,
      3: 3,
      2: 1,
      1: 1,
    },
    trustScore: 94,
  };

  const features = [
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: locale === 'de' ? 'AvaOptions Plattform' : 'AvaOptions Platform',
      description: locale === 'de'
        ? 'Dedizierte Plattform speziell für Options-Trading'
        : 'Dedicated platform specifically for options trading',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'Multi-Regulierung' : 'Multi-Regulation',
      description: locale === 'de'
        ? 'CBI (Irland), ASIC, FSA, FSCA reguliert'
        : 'CBI (Ireland), ASIC, FSA, FSCA regulated',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: locale === 'de' ? 'MT4/MT5 + App' : 'MT4/MT5 + App',
      description: locale === 'de'
        ? 'MetaTrader 4, MT5 und AvaTradeGO App'
        : 'MetaTrader 4, MT5 and AvaTradeGO app',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: locale === 'de' ? 'Copy Trading' : 'Copy Trading',
      description: locale === 'de'
        ? 'Kopieren Sie erfolgreiche Trader automatisch'
        : 'Automatically copy successful traders',
    },
    {
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      title: locale === 'de' ? 'Bildung & Webinare' : 'Education & Webinars',
      description: locale === 'de'
        ? 'Umfangreiche Lernressourcen für alle Level'
        : 'Comprehensive learning resources for all levels',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? 'Ab 100€ starten' : 'Start from €100',
      description: locale === 'de'
        ? 'Niedrige Mindesteinzahlung'
        : 'Low minimum deposit',
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
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20">
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
                    <img src="/logos/avatrade.png" alt="AvaTrade Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">AvaTrade</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-blue-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-blue-100 mb-6">
                  {locale === 'de'
                    ? 'Multi-regulierter Broker mit dedizierter AvaOptions Plattform für professionelles Options-Trading'
                    : 'Multi-regulated broker with dedicated AvaOptions platform for professional options trading'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Verifiziert' : 'Verified'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Multi-Reguliert' : 'Multi-Regulated'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Seit 2006' : 'Since 2006'}
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
                  href="https://www.avatrade.com/de/trading-account"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-center hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                  {locale === 'de' ? 'Schnelle Registrierung' : 'Fast registration'}
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
                    ? 'text-blue-600 border-blue-600'
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
                    <p className="text-gray-700">Central Bank of Ireland (CBI), ASIC, FSA, FSCA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Mindesteinzahlung' : 'Minimum Deposit'}</h3>
                    <p className="text-gray-700">100 €</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Optionen verfügbar' : 'Options Available'}</h3>
                    <p className="text-gray-700">{locale === 'de' ? 'Ja, AvaOptions Plattform' : 'Yes, AvaOptions platform'}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Plattformen' : 'Platforms'}</h3>
                    <p className="text-gray-700">MT4, MT5, AvaTradeGO, AvaOptions, WebTrader</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  {locale === 'de' ? 'Bereit für professionelles Options-Trading?' : 'Ready for Professional Options Trading?'}
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  {locale === 'de'
                    ? 'Starten Sie jetzt mit AvaTrade und nutzen Sie die dedizierte AvaOptions Plattform'
                    : 'Start now with AvaTrade and use the dedicated AvaOptions platform'}
                </p>
                <a
                  href="https://www.avatrade.com/de/trading-account"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  {locale === 'de' ? 'Jetzt kostenlos registrieren' : 'Register for free now'}
                </a>
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
                  <span className="text-gray-700">{locale === 'de' ? 'Spreads' : 'Spreads'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Variabel, ab 0.9 Pips' : 'Variable, from 0.9 pips'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Kommission' : 'Commission'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Keine' : 'None'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Inaktivitätsgebühr' : 'Inactivity Fee'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? '50€ nach 3 Monaten' : '€50 after 3 months'}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">{locale === 'de' ? 'Auszahlungsgebühr' : 'Withdrawal Fee'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Kostenlos (Kreditkarte)' : 'Free (Credit card)'}</span>
                </div>
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
                    <button className="hover:text-gray-700">
                      👍 {locale === 'de' ? 'Hilfreich' : 'Helpful'} ({review.helpful})
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
                  {locale === 'de' ? 'AvaOptions - Dedizierte Options-Plattform' : 'AvaOptions - Dedicated Options Platform'}
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  {locale === 'de'
                    ? 'AvaTrade bietet mit AvaOptions eine spezialisierte Handelsplattform für Vanilla Options. Die Plattform kombiniert benutzerfreundliches Design mit professionellen Trading-Tools.'
                    : 'AvaTrade offers AvaOptions, a specialized trading platform for Vanilla Options. The platform combines user-friendly design with professional trading tools.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{locale === 'de' ? 'Verfügbare Plattformen' : 'Available Platforms'}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>AvaOptions (Web-basiert)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>MetaTrader 4</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>MetaTrader 5</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>AvaTradeGO (Mobile App)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>WebTrader</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{locale === 'de' ? 'Features' : 'Features'}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Echtzeit-Optionsketten' : 'Real-time options chains'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Greeks-Analyse' : 'Greeks analysis'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Multi-Leg-Strategien' : 'Multi-leg strategies'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Risiko-Rechner' : 'Risk calculator'}</span>
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
