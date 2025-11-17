'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { trackBrokerClick, useScrollDepthTracking, useEngagementTimeTracking } from '@/hooks/useAnalytics';

export default function LynxBrokerPage({ params: { locale } }: { params: { locale: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  const reviews = [
    {
      author: 'Andreas M.',
      rating: 5,
      date: '2025-01-11',
      title: locale === 'de' ? 'Perfekte Kombination: IB Technologie + deutscher Support' : 'Perfect combination: IB technology + German support',
      text: locale === 'de'
        ? 'LYNX bietet die beste Kombination aus beiden Welten: Die professionelle Technologie von Interactive Brokers mit deutschem Support und Service. Der telefonische Support ist hervorragend und hat mir schon oft weitergeholfen.'
        : 'LYNX offers the best combination of both worlds: Interactive Brokers\' professional technology with German support and service. The phone support is excellent and has helped me many times.',
      verified: true,
      helpful: 52,
    },
    {
      author: 'Melanie K.',
      rating: 5,
      date: '2025-01-09',
      title: locale === 'de' ? 'Exzellente Bildungsressourcen' : 'Excellent educational resources',
      text: locale === 'de'
        ? 'Als Einsteigerin im Optionshandel habe ich die Webinare und Schulungen von LYNX sehr geschätzt. Das Team nimmt sich Zeit für Fragen und erklärt komplexe Themen verständlich. Die Plattform ist mächtig, aber man lernt schnell.'
        : 'As a beginner in options trading, I really appreciated LYNX\'s webinars and training sessions. The team takes time for questions and explains complex topics clearly. The platform is powerful, but you learn quickly.',
      verified: true,
      helpful: 48,
    },
    {
      author: 'Stefan H.',
      rating: 5,
      date: '2025-01-06',
      title: locale === 'de' ? 'Zuverlässig und professionell' : 'Reliable and professional',
      text: locale === 'de'
        ? 'Seit 4 Jahren bei LYNX und sehr zufrieden. Die Trader Workstation ist erstklassig, die Gebühren fair und der deutsche Support antwortet schnell und kompetent. Perfekt für ernsthafte Options-Trader.'
        : 'Been with LYNX for 4 years and very satisfied. The Trader Workstation is first class, fees are fair and German support responds quickly and competently. Perfect for serious options traders.',
      verified: true,
      helpful: 61,
    },
    {
      author: 'Claudia B.',
      rating: 4,
      date: '2025-01-04',
      title: locale === 'de' ? 'Sehr gut, aber Mindestaktivität beachten' : 'Very good, but note minimum activity',
      text: locale === 'de'
        ? 'Die Plattform und der Service sind top. Man sollte nur beachten, dass eine gewisse Mindestaktivität erwartet wird, sonst fallen Gebühren an. Für aktive Trader aber definitiv eine der besten Optionen in Deutschland.'
        : 'The platform and service are top notch. Just note that a certain minimum activity is expected, otherwise fees apply. But definitely one of the best options in Germany for active traders.',
      verified: true,
      helpful: 39,
    },
    {
      author: 'Marcus R.',
      rating: 5,
      date: '2025-01-01',
      title: locale === 'de' ? 'Deutscher Service macht den Unterschied' : 'German service makes the difference',
      text: locale === 'de'
        ? 'Nach Jahren bei Interactive Brokers direkt bin ich zu LYNX gewechselt. Der deutsche Support ist Gold wert, besonders bei steuerlichen Fragen. Die etwas höheren Gebühren sind es mir wert.'
        : 'After years with Interactive Brokers directly, I switched to LYNX. German support is worth its weight in gold, especially for tax questions. The slightly higher fees are worth it to me.',
      verified: true,
      helpful: 57,
    },
    {
      author: 'Julia W.',
      rating: 5,
      date: '2024-12-29',
      title: locale === 'de' ? 'Professionelle Plattform für ernsthafte Trader' : 'Professional platform for serious traders',
      text: locale === 'de'
        ? 'Die TWS Plattform bietet alles, was man braucht. Erweiterte Charts, Optionsketten, Risiko-Analysen - alles auf höchstem Niveau. LYNX macht den Einstieg durch gute Schulungen einfacher als IB direkt.'
        : 'The TWS platform offers everything you need. Advanced charts, option chains, risk analysis - all at the highest level. LYNX makes getting started easier than IB directly through good training.',
      verified: true,
      helpful: 44,
    },
    {
      author: 'Peter L.',
      rating: 4,
      date: '2024-12-26',
      title: locale === 'de' ? 'Gutes Preis-Leistungs-Verhältnis' : 'Good value for money',
      text: locale === 'de'
        ? 'Die Gebühren sind höher als bei IB direkt, aber dafür bekommt man deutschen Support und Hilfe bei steuerlichen Fragen. Für mich persönlich ist das den Aufpreis wert. Sehr zufrieden!'
        : 'Fees are higher than IB directly, but you get German support and help with tax questions. For me personally, it\'s worth the premium. Very satisfied!',
      verified: true,
      helpful: 35,
    },
    {
      author: 'Sabrina F.',
      rating: 5,
      date: '2024-12-23',
      title: locale === 'de' ? 'Top für internationale Diversifikation' : 'Top for international diversification',
      text: locale === 'de'
        ? 'Über LYNX kann ich weltweit handeln - USA, Europa, Asien. Die Auswahl ist riesig und die Abwicklung reibungslos. Der Support hilft auch bei Fragen zu ausländischen Märkten.'
        : 'Through LYNX I can trade worldwide - USA, Europe, Asia. The selection is huge and processing is smooth. Support also helps with questions about foreign markets.',
      verified: true,
      helpful: 42,
    },
  ];

  const stats = {
    totalReviews: 1247,
    averageRating: 4.5,
    distribution: {
      5: 71,
      4: 22,
      3: 5,
      2: 1,
      1: 1,
    },
    trustScore: 93,
  };

  const features = [
    {
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      title: locale === 'de' ? 'Deutscher Support' : 'German Support',
      description: locale === 'de'
        ? 'Telefonischer Support auf Deutsch während Handelszeiten'
        : 'Phone support in German during trading hours',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: locale === 'de' ? 'IB Technologie' : 'IB Technology',
      description: locale === 'de'
        ? 'Professionelle Trader Workstation von Interactive Brokers'
        : 'Professional Trader Workstation from Interactive Brokers',
    },
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? '100+ Märkte' : '100+ Markets',
      description: locale === 'de'
        ? 'Zugang zu weltweiten Börsen und Produkten'
        : 'Access to worldwide exchanges and products',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      title: locale === 'de' ? 'Bildungsangebote' : 'Educational Offers',
      description: locale === 'de'
        ? 'Kostenlose Webinare, Seminare und Trading-Schulungen'
        : 'Free webinars, seminars and trading courses',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? 'Faire Gebühren' : 'Fair Fees',
      description: locale === 'de'
        ? 'Ab 2€ pro Kontrakt - transparent und nachvollziehbar'
        : 'From €2 per contract - transparent and traceable',
    },
    {
      iconBg: 'from-gray-50 to-gray-200',
      iconColor: 'text-gray-600',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: locale === 'de' ? 'BaFin reguliert' : 'BaFin Regulated',
      description: locale === 'de'
        ? 'Deutsche und niederländische Regulierung (BaFin, AFM)'
        : 'German and Dutch regulation (BaFin, AFM)',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: locale === 'de' ? 'Profi-Tools' : 'Pro Tools',
      description: locale === 'de'
        ? 'Erweiterte Charts, Optionsketten, Risiko-Management'
        : 'Advanced charts, option chains, risk management',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: locale === 'de' ? 'Einlagensicherung' : 'Deposit Protection',
      description: locale === 'de'
        ? 'Segregierte Kundengelder und umfassende Absicherung'
        : 'Segregated client funds and comprehensive protection',
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
  useScrollDepthTracking('LYNX Broker Page');
  useEngagementTimeTracking('LYNX Broker Page');

  // Handler for broker signup clicks
  const handleSignupClick = (location: string) => {
    trackBrokerClick('LYNX Broker', 'signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
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
                    <img src="/logos/lynx.jpeg" alt="LYNX Broker Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">LYNX Broker</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-green-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-green-100 mb-6">
                  {locale === 'de'
                    ? 'Interactive Brokers Technologie mit deutschem Service - Die perfekte Kombination für anspruchsvolle Trader'
                    : 'Interactive Brokers technology with German service - The perfect combination for demanding traders'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Verifiziert' : 'Verified'}
                  </span>
                  <span className="px-4 py-2 bg-green-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    BaFin, AFM
                  </span>
                  <span className="px-4 py-2 bg-green-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Deutscher Support' : 'German Support'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-green-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Hervorragend' : 'Excellent'}</div>
                </div>
                <a
                  href="https://www.lynxbroker.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSignupClick('Hero Sidebar')}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold text-center hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Weltweite Märkte' : 'Global Markets'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">2€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Ab pro Kontrakt' : 'From per contract'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-rose-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Deutscher Support' : 'German Support'}</div>
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

              {/* Why LYNX */}
              <div className="card bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Warum LYNX Broker?' : 'Why LYNX Broker?'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-rose-200 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'Deutscher Service' : 'German Service'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Telefonischer Support auf Deutsch, persönliche Beratung und Hilfe bei steuerlichen Fragen. Das macht den Unterschied zu IB direkt.'
                        : 'Phone support in German, personal advice and help with tax questions. That makes the difference to IB directly.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'IB Technologie' : 'IB Technology'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Voller Zugriff auf die professionelle Trader Workstation und alle Funktionen von Interactive Brokers.'
                        : 'Full access to the professional Trader Workstation and all Interactive Brokers features.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-200 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'Bildungsangebote' : 'Education'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Regelmäßige Webinare, Seminare und persönliche Schulungen für Einsteiger und Fortgeschrittene.'
                        : 'Regular webinars, seminars and personal training for beginners and advanced traders.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'BaFin Regulierung' : 'BaFin Regulation'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Deutsche Regulierung durch die BaFin und zusätzlich niederländische AFM-Lizenz für maximale Sicherheit.'
                        : 'German regulation by BaFin and additionally Dutch AFM license for maximum security.'}
                    </p>
                  </div>
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
                      ? ['Deutscher Support', 'IB Technologie', 'Gute Bildungsressourcen', 'Weltweiter Marktzugang', 'BaFin reguliert', 'Persönliche Beratung']
                      : ['German support', 'IB technology', 'Good educational resources', 'Global market access', 'BaFin regulated', 'Personal advice']
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
                      ? ['Höhere Gebühren als IB direkt', 'Mindestaktivität erforderlich', 'Nicht für Gelegenheitstrader']
                      : ['Higher fees than IB direct', 'Minimum activity required', 'Not for casual traders']
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
              <div className="card bg-gradient-to-br from-green-600 to-emerald-700 text-white text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de' ? 'Bereit für LYNX Broker?' : 'Ready for LYNX Broker?'}
                </h3>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Profitieren Sie von IB-Technologie mit deutschem Service und persönlicher Beratung!'
                    : 'Benefit from IB technology with German service and personal advice!'}
                </p>
                <a
                  href="https://www.lynxbroker.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSignupClick('Middle CTA')}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
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
                        <div className="text-4xl font-bold text-green-600 mb-2">2€</div>
                        <p className="text-gray-600">{locale === 'de' ? 'Pro Kontrakt (US-Optionen)' : 'Per contract (US options)'}</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">2€</div>
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
                        <span className="text-green-600 font-bold">{locale === 'de' ? 'Kostenlos (SEPA)' : 'Free (SEPA)'}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Mindestaktivität' : 'Minimum Activity'}</span>
                        <span className="text-gray-600">40€ {locale === 'de' ? 'Kommission/Quartal' : 'commission/quarter'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Preis-Leistung' : 'Value for Money'}</h4>
                        <p className="text-gray-700">
                          {locale === 'de'
                            ? 'Die Gebühren sind etwas höher als bei IB direkt, aber dafür erhalten Sie deutschen Support, persönliche Beratung und umfangreiche Bildungsangebote. Für viele Trader ist das den Aufpreis wert.'
                            : 'Fees are slightly higher than IB directly, but you get German support, personal advice and extensive educational offerings. For many traders this is worth the premium.'}
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
                  <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Trader Workstation (TWS)</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Professionelle Desktop-Plattform von IB' : 'Professional desktop platform from IB'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Volle IB-Funktionalität' : 'Full IB functionality'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Erweiterte Optionsketten' : 'Advanced option chains'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Risiko-Management Tools' : 'Risk management tools'}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">LYNX Mobile App</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Trading unterwegs' : 'Trading on the go'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        iOS & Android
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Volle Trading-Funktionalität' : 'Full trading functionality'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Echtzeit-Kurse' : 'Real-time quotes'}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{locale === 'de' ? 'Support & Service' : 'Support & Service'}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-green-300">{locale === 'de' ? 'Deutscher Support' : 'German Support'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? 'Telefonisch während Handelszeiten' : 'Phone during trading hours'}</li>
                        <li>• {locale === 'de' ? 'E-Mail Support auf Deutsch' : 'Email support in German'}</li>
                        <li>• {locale === 'de' ? 'Persönliche Ansprechpartner' : 'Personal contact persons'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-green-300">{locale === 'de' ? 'Bildungsangebote' : 'Educational Offerings'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? 'Kostenlose Webinare' : 'Free webinars'}</li>
                        <li>• {locale === 'de' ? 'Trading-Seminare' : 'Trading seminars'}</li>
                        <li>• {locale === 'de' ? 'Persönliche Schulungen' : 'Personal training'}</li>
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
                    <div className="text-7xl font-bold text-green-600 mb-2">{stats.averageRating}</div>
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
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                        <button className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2">
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
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {locale === 'de' ? 'Bereit für LYNX Broker?' : 'Ready for LYNX Broker?'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Professionelles Trading mit deutscher Betreuung - Die beste Wahl für anspruchsvolle Trader!'
              : 'Professional trading with German support - The best choice for demanding traders!'}
          </p>
          <a
            href="https://www.lynxbroker.de"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSignupClick('Bottom CTA')}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? 'Jetzt kostenloses Konto eröffnen' : 'Open Free Account Now'}
          </a>
          <p className="text-green-200 text-sm mt-4 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? '0€ Mindesteinlage' : '€0 minimum deposit'}
            <span className="mx-1">|</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {locale === 'de' ? 'Deutscher Support' : 'German support'}
            <span className="mx-1">|</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            {locale === 'de' ? 'Kostenlose Schulungen' : 'Free training'}
          </p>
        </div>
      </div>
    </div>
  );
}
