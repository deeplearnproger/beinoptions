'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

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
      icon: '🇩🇪',
      title: locale === 'de' ? 'Deutscher Support' : 'German Support',
      description: locale === 'de'
        ? 'Telefonischer Support auf Deutsch während Handelszeiten'
        : 'Phone support in German during trading hours',
    },
    {
      icon: '⚡',
      title: locale === 'de' ? 'IB Technologie' : 'IB Technology',
      description: locale === 'de'
        ? 'Professionelle Trader Workstation von Interactive Brokers'
        : 'Professional Trader Workstation from Interactive Brokers',
    },
    {
      icon: '🌍',
      title: locale === 'de' ? '100+ Märkte' : '100+ Markets',
      description: locale === 'de'
        ? 'Zugang zu weltweiten Börsen und Produkten'
        : 'Access to worldwide exchanges and products',
    },
    {
      icon: '🎓',
      title: locale === 'de' ? 'Bildungsangebote' : 'Educational Offers',
      description: locale === 'de'
        ? 'Kostenlose Webinare, Seminare und Trading-Schulungen'
        : 'Free webinars, seminars and trading courses',
    },
    {
      icon: '💰',
      title: locale === 'de' ? 'Faire Gebühren' : 'Fair Fees',
      description: locale === 'de'
        ? 'Ab 2€ pro Kontrakt - transparent und nachvollziehbar'
        : 'From €2 per contract - transparent and traceable',
    },
    {
      icon: '🏦',
      title: locale === 'de' ? 'BaFin reguliert' : 'BaFin Regulated',
      description: locale === 'de'
        ? 'Deutsche und niederländische Regulierung (BaFin, AFM)'
        : 'German and Dutch regulation (BaFin, AFM)',
    },
    {
      icon: '📊',
      title: locale === 'de' ? 'Profi-Tools' : 'Pro Tools',
      description: locale === 'de'
        ? 'Erweiterte Charts, Optionsketten, Risiko-Management'
        : 'Advanced charts, option chains, risk management',
    },
    {
      icon: '🔒',
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
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-green-600">LX</span>
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
                  className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold text-center hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Weltweite Märkte' : 'Global Markets'}</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">2€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Ab pro Kontrakt' : 'From per contract'}</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl mb-3">🇩🇪</div>
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
                      <div className="text-5xl mb-4">{feature.icon}</div>
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
                      <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl">
                        🇩🇪
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
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                        ⚡
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
                      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl">
                        🎓
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
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl">
                        🏦
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">✅</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">⚠️</span>
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
                <div className="text-5xl mb-4">🎯</div>
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
                  className="inline-block px-10 py-5 bg-white text-green-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
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
                      <div className="text-3xl">💡</div>
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
                    <div className="text-5xl mb-4">🖥️</div>
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
                    <div className="text-5xl mb-4">📱</div>
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
            className="inline-block px-10 py-5 bg-white text-green-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            {locale === 'de' ? '🚀 Jetzt kostenloses Konto eröffnen' : '🚀 Open Free Account Now'}
          </a>
          <p className="text-green-200 text-sm mt-4">
            {locale === 'de' ? '⚡ 0€ Mindesteinlage | 💯 Deutscher Support | 🎓 Kostenlose Schulungen' : '⚡ €0 minimum deposit | 💯 German support | 🎓 Free training'}
          </p>
        </div>
      </div>
    </div>
  );
}
