'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { trackBrokerClick, useScrollDepthTracking, useEngagementTimeTracking } from '@/hooks/useAnalytics';

export default function DEGIROClientPage() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('overview');

  // Track scroll depth and engagement time
  useScrollDepthTracking('DEGIRO Page');
  useEngagementTimeTracking('DEGIRO Page');

  // Handler for broker signup clicks
  const handleSignupClick = (_location: string) => {
    trackBrokerClick('DEGIRO', 'signup');
  };

  const stats = {
    totalReviews: 1456,
    averageRating: 4.4,
    distribution: {
      5: 72,
      4: 16,
      3: 7,
      2: 3,
      1: 2,
    },
    trustScore: 91,
  };

  const reviews = [
    {
      author: 'Andreas M.',
      rating: 5,
      date: '2025-01-11',
      title: locale === 'de' ? 'Beste Plattform für europäische Märkte' : 'Best Platform for European Markets',
      text: locale === 'de'
        ? 'DEGIRO bietet Zugang zu allen wichtigen europäischen Börsen zu unschlagbaren Preisen. Die Plattform ist professionell und zuverlässig. Für europäisches Trading absolut top!'
        : 'DEGIRO offers access to all major European exchanges at unbeatable prices. The platform is professional and reliable. Absolutely top for European trading!',
      verified: true,
      helpful: 56,
    },
    {
      author: 'Sabine K.',
      rating: 5,
      date: '2025-01-09',
      title: locale === 'de' ? 'Niedrige Gebühren, große Auswahl' : 'Low Fees, Large Selection',
      text: locale === 'de'
        ? 'Die Handelsgebühren sind wirklich günstig. Ich handle hauptsächlich europäische Aktien und zahle nur 2€ + 0,02% pro Order. Die Auswahl an Börsenplätzen ist beeindruckend!'
        : 'The trading fees are really cheap. I mainly trade European stocks and pay only €2 + 0.02% per order. The selection of exchanges is impressive!',
      verified: true,
      helpful: 48,
    },
    {
      author: 'Thomas W.',
      rating: 4,
      date: '2025-01-06',
      title: locale === 'de' ? 'Sehr gut für aktive Trader' : 'Very Good for Active Traders',
      text: locale === 'de'
        ? 'Als aktiver Trader schätze ich die niedrigen Gebühren und die schnelle Orderausführung. Die Desktop-Plattform ist funktional, wenn auch nicht die modernste. Für meine Zwecke perfekt.'
        : 'As an active trader, I appreciate the low fees and fast order execution. The desktop platform is functional, although not the most modern. Perfect for my purposes.',
      verified: true,
      helpful: 42,
    },
    {
      author: 'Maria L.',
      rating: 5,
      date: '2025-01-04',
      title: locale === 'de' ? 'Internationale Diversifikation leicht gemacht' : 'International Diversification Made Easy',
      text: locale === 'de'
        ? 'Mit DEGIRO kann ich problemlos in über 30 Ländern handeln. Von US-Aktien über asiatische Märkte bis zu europäischen Börsen - alles aus einer Hand. Genial für Diversifikation!'
        : 'With DEGIRO I can easily trade in over 30 countries. From US stocks to Asian markets to European exchanges - everything from one source. Brilliant for diversification!',
      verified: true,
      helpful: 51,
    },
    {
      author: 'Peter H.',
      rating: 4,
      date: '2025-01-02',
      title: locale === 'de' ? 'Solide Plattform mit gutem Preis-Leistungs-Verhältnis' : 'Solid Platform with Good Value',
      text: locale === 'de'
        ? 'DEGIRO überzeugt durch niedrige Gebühren und breite Produktpalette. Die Plattform ist nicht die schönste, aber sehr funktional. Support könnte schneller sein, aber insgesamt empfehlenswert.'
        : 'DEGIRO impresses with low fees and a wide product range. The platform is not the prettiest, but very functional. Support could be faster, but overall recommendable.',
      verified: true,
      helpful: 38,
    },
    {
      author: 'Christina B.',
      rating: 5,
      date: '2024-12-28',
      title: locale === 'de' ? 'Optionshandel zu fairen Preisen' : 'Options Trading at Fair Prices',
      text: locale === 'de'
        ? 'Endlich ein europäischer Broker mit vernünftigen Options-Gebühren! 0,75€ pro Kontrakt ist sehr fair. Die Auswahl an Optionsbörsen ist gut, Support kompetent.'
        : 'Finally a European broker with reasonable options fees! €0.75 per contract is very fair. The selection of options exchanges is good, support competent.',
      verified: true,
      helpful: 63,
    },
    {
      author: 'Michael R.',
      rating: 4,
      date: '2024-12-24',
      title: locale === 'de' ? 'Gute Alternative zu deutschen Brokern' : 'Good Alternative to German Brokers',
      text: locale === 'de'
        ? 'Niederländischer Broker mit deutscher Oberfläche. Gebühren deutlich günstiger als bei deutschen Banken. Einziges Manko: Keine automatische Abführung der Steuern.'
        : 'Dutch broker with German interface. Fees significantly cheaper than German banks. Only drawback: No automatic tax deduction.',
      verified: true,
      helpful: 44,
    },
    {
      author: 'Julia S.',
      rating: 5,
      date: '2024-12-20',
      title: locale === 'de' ? 'Top für ETF-Investoren' : 'Top for ETF Investors',
      text: locale === 'de'
        ? 'Die Auswahl an ETFs ist riesig und viele davon sind im Kernsortiment ohne Ordergebühren handelbar. Für meine Buy-and-Hold-Strategie ideal. Klare Empfehlung!'
        : 'The selection of ETFs is huge and many of them can be traded in the core selection without order fees. Ideal for my buy-and-hold strategy. Clear recommendation!',
      verified: true,
      helpful: 47,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={`/${locale}/brokers`}
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'de' ? 'Zurück zur Übersicht' : 'Back to Overview'}
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg p-3">
                  <img src="/logos/degiro.svg" alt="DEGIRO Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">DEGIRO</h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(stats.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-lg font-semibold">{stats.averageRating}/5</span>
                    </div>
                    <span className="text-white/80">
                      ({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'Reviews'})
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-white/90 max-w-2xl">
                {locale === 'de'
                  ? 'Europas führender Online-Broker. Günstige Gebühren, weltweiter Marktzugang und professionelle Tools für ambitionierte Anleger.'
                  : 'Europe\'s leading online broker. Low fees, worldwide market access and professional tools for ambitious investors.'}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{stats.trustScore}</div>
                  <div className="text-sm text-white/80">Trust Score</div>
                </div>
              </div>
              <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full text-center font-semibold">
                AFM/DNB {locale === 'de' ? 'Reguliert' : 'Regulated'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {['overview', 'fees', 'platform', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                {locale === 'de'
                  ? { overview: 'Übersicht', fees: 'Gebühren', platform: 'Plattform', reviews: 'Bewertungen' }[tab]
                  : { overview: 'Overview', fees: 'Fees', platform: 'Platform', reviews: 'Reviews' }[tab]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Börsen weltweit' : 'Exchanges Worldwide'}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">2,5M+</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Kunden' : 'Customers'}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">0,75€</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Pro Optionskontrakt' : 'Per Options Contract'}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Optionsbörsen' : 'Options Exchanges'}</div>
              </div>
            </div>

            {/* Main Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'de' ? 'Hauptmerkmale' : 'Key Features'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Weltweiter Marktzugang' : 'Worldwide Market Access'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Handeln Sie an über 50 Börsen in 30+ Ländern. Von Europa über USA und Kanada bis nach Asien - alles aus einem Depot.'
                      : 'Trade on over 50 exchanges in 30+ countries. From Europe to USA and Canada to Asia - all from one depot.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Niedrige Gebühren' : 'Low Fees'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Faire und transparente Preisgestaltung. Aktienhandel ab 2€ + 0,02%, Optionen 0,75€ pro Kontrakt. Viele ETFs sogar gebührenfrei.'
                      : 'Fair and transparent pricing. Stock trading from €2 + 0.02%, options €0.75 per contract. Many ETFs even free.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Optionshandel' : 'Options Trading'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Professioneller Zugang zu über 200 Optionsbörsen weltweit. Alle gängigen Strategien umsetzbar. Günstige 0,75€ pro Kontrakt.'
                      : 'Professional access to over 200 options exchanges worldwide. All common strategies implementable. Cheap €0.75 per contract.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Professionelle Tools' : 'Professional Tools'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Webtrader und mobile Apps für iOS/Android. Realtime-Kurse, fortgeschrittene Charts und Order-Tools für professionelles Trading.'
                      : 'Webtrader and mobile apps for iOS/Android. Real-time quotes, advanced charts and order tools for professional trading.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Niederländische Regulierung' : 'Dutch Regulation'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Reguliert durch AFM und DNB (niederländische Finanzaufsicht). Einlagensicherung bis 100.000€. Europäische Lizenz (MiFID).'
                      : 'Regulated by AFM and DNB (Dutch financial supervision). Deposit insurance up to €100,000. European license (MiFID).'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Kernsortiment' : 'Core Selection'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Über 700 ETFs ohne Ordergebühren handelbar. Ideal für langfristige Portfolios und ETF-Strategien. Nur Börsengebühren fallen an.'
                      : 'Over 700 ETFs tradable without order fees. Ideal for long-term portfolios and ETF strategies. Only exchange fees apply.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Breites Produktangebot' : 'Wide Product Range'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Aktien, ETFs, Fonds, Anleihen, Futures, Optionen, Zertifikate und mehr. Über 1 Million handelbare Produkte auf einer Plattform.'
                      : 'Stocks, ETFs, funds, bonds, futures, options, certificates and more. Over 1 million tradable products on one platform.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Investor Academy' : 'Investor Academy'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Kostenlose Webinare, Video-Tutorials und umfangreiche Knowledge-Base. Lernen Sie Trading und Anlagestrategien von Profis.'
                      : 'Free webinars, video tutorials and comprehensive knowledge base. Learn trading and investment strategies from professionals.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Why DEGIRO */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'de' ? 'Warum DEGIRO?' : 'Why DEGIRO?'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">
                    {locale === 'de' ? 'Europas führender Broker' : 'Europe\'s Leading Broker'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'DEGIRO ist mit über 2,5 Millionen Kunden einer der größten Online-Broker Europas. Seit 2013 revolutioniert das Unternehmen den Markt mit niedrigen Gebühren und professionellen Tools. Die Plattform richtet sich an ambitionierte Anleger und aktive Trader, die Wert auf günstige Konditionen und breiten Marktzugang legen.'
                      : 'With over 2.5 million customers, DEGIRO is one of the largest online brokers in Europe. Since 2013, the company has been revolutionizing the market with low fees and professional tools. The platform is aimed at ambitious investors and active traders who value favorable conditions and broad market access.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">
                    {locale === 'de' ? 'Perfekt für Options-Trader' : 'Perfect for Options Traders'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'Mit Zugang zu über 200 Optionsbörsen weltweit ist DEGIRO eine ausgezeichnete Wahl für Options-Strategien. Die Gebühren von 0,75€ pro Kontrakt sind sehr wettbewerbsfähig. Alle gängigen Strategien wie Covered Calls, Spreads, Straddles und Iron Condors können problemlos umgesetzt werden.'
                      : 'With access to over 200 options exchanges worldwide, DEGIRO is an excellent choice for options strategies. The fees of €0.75 per contract are very competitive. All common strategies like covered calls, spreads, straddles and iron condors can be easily implemented.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">
                    {locale === 'de' ? 'Internationale Diversifikation' : 'International Diversification'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'Handeln Sie an allen wichtigen Börsen weltweit: NYSE, NASDAQ, LSE, Euronext, Xetra, SIX, TSE und viele mehr. Diversifizieren Sie Ihr Portfolio über verschiedene Länder, Währungen und Märkte. DEGIRO macht globales Investieren einfach und erschwinglich.'
                      : 'Trade on all major exchanges worldwide: NYSE, NASDAQ, LSE, Euronext, Xetra, SIX, TSE and many more. Diversify your portfolio across different countries, currencies and markets. DEGIRO makes global investing simple and affordable.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">
                    {locale === 'de' ? 'Transparente Kosten' : 'Transparent Costs'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Bei DEGIRO zahlen Sie nur das, was Sie auch nutzen. Keine Depotgebühren, keine Kontoführungsgebühren, keine versteckten Kosten. Die Gebührenstruktur ist klar und nachvollziehbar. Sie behalten die volle Kontrolle über Ihre Investitionskosten und können Ihre Rendite maximieren.'
                      : 'At DEGIRO you only pay for what you use. No custody fees, no account management fees, no hidden costs. The fee structure is clear and comprehensible. You keep full control over your investment costs and can maximize your returns.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-800">
                  {locale === 'de' ? 'Vorteile' : 'Pros'}
                </h3>
                <ul className="space-y-2">
                  {[
                    locale === 'de' ? 'Sehr günstige Gebühren' : 'Very low fees',
                    locale === 'de' ? 'Weltweiter Marktzugang (50+ Börsen)' : 'Worldwide market access (50+ exchanges)',
                    locale === 'de' ? 'Professioneller Optionshandel' : 'Professional options trading',
                    locale === 'de' ? '700+ ETFs gebührenfrei' : '700+ ETFs fee-free',
                    locale === 'de' ? 'AFM/DNB Regulierung' : 'AFM/DNB regulation',
                    locale === 'de' ? 'Keine Depotgebühren' : 'No custody fees',
                    locale === 'de' ? 'Große Produktauswahl' : 'Large product selection',
                  ].map((pro, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-800">
                  {locale === 'de' ? 'Nachteile' : 'Cons'}
                </h3>
                <ul className="space-y-2">
                  {[
                    locale === 'de' ? 'Keine automatische Steuerabführung' : 'No automatic tax deduction',
                    locale === 'de' ? 'Plattform weniger modern' : 'Platform less modern',
                    locale === 'de' ? 'Support nur auf Englisch/Niederländisch' : 'Support only in English/Dutch',
                    locale === 'de' ? 'Negativzinsen auf Cashguthaben' : 'Negative interest on cash balances',
                    locale === 'de' ? 'Keine Sparpläne verfügbar' : 'No savings plans available',
                  ].map((con, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Jetzt mit DEGIRO starten' : 'Start with DEGIRO Now'}
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {locale === 'de'
                  ? 'Eröffnen Sie Ihr kostenloses Konto und handeln Sie weltweit zu besten Konditionen!'
                  : 'Open your free account and trade worldwide on favorable terms!'}
              </p>
              <a
                href="https://www.degiro.de"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSignupClick('Middle CTA')}
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {locale === 'de' ? 'Konto eröffnen' : 'Open Account'}
              </a>
            </div>
          </div>
        )}

        {/* Fees Tab */}
        {activeTab === 'fees' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'de' ? 'Gebührenstruktur' : 'Fee Structure'}
              </h2>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">{locale === 'de' ? 'Produkt/Börse' : 'Product/Exchange'}</th>
                      <th className="px-6 py-4 text-right font-semibold">{locale === 'de' ? 'Gebühr' : 'Fee'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Deutsche Aktien (Xetra)' : 'German Stocks (Xetra)'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-blue-600">2€ + 0,02%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'US-Aktien (NYSE/NASDAQ)' : 'US Stocks (NYSE/NASDAQ)'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-blue-600">0,50€ + $0,004/Aktie</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Europäische Aktien' : 'European Stocks'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-blue-600">4€ + 0,05%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Optionen (pro Kontrakt)' : 'Options (per contract)'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-blue-600">0,75€</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'ETFs (Kernsortiment)' : 'ETFs (Core Selection)'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'ETFs (andere)' : 'ETFs (other)'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-blue-600">2€ + 0,02%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Depotführung' : 'Custody'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Dividendenauszahlung' : 'Dividend Payment'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-blue-600">1€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-lg mb-2">{locale === 'de' ? 'Wichtige Hinweise' : 'Important Notes'}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    {locale === 'de'
                      ? 'Alle Preise zzgl. Börsengebühren und Fremdkosten'
                      : 'All prices plus exchange fees and external costs'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    {locale === 'de'
                      ? 'Über 700 ETFs im Kernsortiment ohne Ordergebühren'
                      : 'Over 700 ETFs in core selection without order fees'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    {locale === 'de'
                      ? 'Negativzinsen: -0,5% p.a. auf Guthaben über 2.500€'
                      : 'Negative interest: -0.5% p.a. on balances over €2,500'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Platform Tab */}
        {activeTab === 'platform' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'de' ? 'Handelsplattform' : 'Trading Platform'}
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">{locale === 'de' ? 'Webtrader' : 'Webtrader'}</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Browser-basiert, keine Installation' : 'Browser-based, no installation'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Alle Order-Typen verfügbar' : 'All order types available'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Portfolio-Übersicht' : 'Portfolio overview'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Realtime-Kurse' : 'Real-time quotes'}
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">{locale === 'de' ? 'Mobile Apps' : 'Mobile Apps'}</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'iOS und Android' : 'iOS and Android'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Trading von unterwegs' : 'Trading on the go'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Push-Benachrichtigungen' : 'Push notifications'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Biometrische Anmeldung' : 'Biometric login'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold mb-4">
                  {locale === 'de' ? 'Order-Typen' : 'Order Types'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {locale === 'de'
                    ? 'Market Orders, Limit Orders, Stop Loss, Stop Limit, Trailing Stop und mehr. Alle gängigen Order-Typen für professionelles Trading.'
                    : 'Market orders, limit orders, stop loss, stop limit, trailing stop and more. All common order types for professional trading.'}
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Market Order
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Limit Order
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Stop Loss
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Stop Limit
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Trailing Stop
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Und mehr...' : 'And more...'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            {/* Rating Overview */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">{stats.averageRating}</div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${i < Math.floor(stats.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-gray-600">
                    {locale === 'de' ? 'Basierend auf' : 'Based on'} {stats.totalReviews.toLocaleString()}{' '}
                    {locale === 'de' ? 'Bewertungen' : 'reviews'}
                  </div>
                </div>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-3">
                      <span className="text-sm font-medium w-12">{rating} {locale === 'de' ? 'Sterne' : 'stars'}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full transition-all"
                          style={{ width: `${stats.distribution[rating as keyof typeof stats.distribution]}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {stats.distribution[rating as keyof typeof stats.distribution]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.author}</span>
                        {review.verified && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            {locale === 'de' ? 'Verifiziert' : 'Verified'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {locale === 'de' ? 'Hilfreich' : 'Helpful'} ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Überzeugt?' : 'Convinced?'}
              </h3>
              <p className="text-white/90 mb-6">
                {locale === 'de'
                  ? 'Schließen Sie sich 2,5 Millionen zufriedenen Anlegern an!'
                  : 'Join 2.5 million satisfied investors!'}
              </p>
              <a
                href="https://www.degiro.de"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSignupClick('Bottom CTA')}
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {locale === 'de' ? 'Jetzt starten' : 'Get Started'}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
