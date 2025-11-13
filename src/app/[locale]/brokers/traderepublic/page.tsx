'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function TradeRepublicPage() {
  const locale = useLocale();
  const t = useTranslations('brokers');
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalReviews: 892,
    averageRating: 4.2,
    distribution: {
      5: 68,
      4: 18,
      3: 8,
      2: 3,
      1: 3,
    },
    trustScore: 88,
  };

  const reviews = [
    {
      author: 'Laura K.',
      rating: 5,
      date: '2025-01-09',
      title: locale === 'de' ? 'Perfekt für Einsteiger' : 'Perfect for Beginners',
      text: locale === 'de'
        ? 'Als Anfängerin war ich von der Einfachheit begeistert. Die App ist intuitiv, die Kosten transparent und der Support schnell. Für meine ersten Schritte im Trading genau richtig!'
        : 'As a beginner, I was impressed by the simplicity. The app is intuitive, costs are transparent, and support is fast. Perfect for my first steps in trading!',
      verified: true,
      helpful: 38,
    },
    {
      author: 'Tim B.',
      rating: 5,
      date: '2025-01-07',
      title: locale === 'de' ? 'Günstig und unkompliziert' : 'Cheap and Uncomplicated',
      text: locale === 'de'
        ? 'Nur 1€ pro Trade - das kann kaum einer bieten. Die App läuft flüssig, Käufe sind in Sekunden erledigt. Für Buy-and-Hold Strategien ideal!'
        : 'Only €1 per trade - hardly anyone can offer that. The app runs smoothly, purchases are completed in seconds. Ideal for buy-and-hold strategies!',
      verified: true,
      helpful: 45,
    },
    {
      author: 'Nina M.',
      rating: 4,
      date: '2025-01-05',
      title: locale === 'de' ? 'Gut für ETFs und Aktien' : 'Good for ETFs and Stocks',
      text: locale === 'de'
        ? 'Für ETF-Sparpläne und Aktien super. Optionen fehlen leider komplett. Wenn man nur klassisch investiert, ist TradeRepublic top - für Options-Trader ungeeignet.'
        : 'Great for ETF savings plans and stocks. Options are unfortunately completely missing. If you only invest classically, TradeRepublic is top - unsuitable for options traders.',
      verified: true,
      helpful: 52,
    },
    {
      author: 'Fabian L.',
      rating: 5,
      date: '2025-01-03',
      title: locale === 'de' ? 'Beste App am Markt' : 'Best App on the Market',
      text: locale === 'de'
        ? 'Design und Bedienung sind einfach klasse. Alles auf Deutsch, alles verständlich. Die 4% Zinsen aufs Verrechnungskonto sind ein tolles Extra!'
        : 'Design and operation are simply great. Everything in German, everything understandable. The 4% interest on the settlement account is a great extra!',
      verified: true,
      helpful: 41,
    },
    {
      author: 'Julia R.',
      rating: 4,
      date: '2024-12-28',
      title: locale === 'de' ? 'Solide für langfristiges Investieren' : 'Solid for Long-term Investing',
      text: locale === 'de'
        ? 'Nutze TradeRepublic für meine ETF-Sparpläne. Die Ausführung ist kostenlos, die App übersichtlich. Für kurzfristiges Trading würde ich aber andere Broker bevorzugen.'
        : 'I use TradeRepublic for my ETF savings plans. Execution is free, the app is clear. For short-term trading, I would prefer other brokers though.',
      verified: true,
      helpful: 29,
    },
    {
      author: 'Marco S.',
      rating: 3,
      date: '2024-12-25',
      title: locale === 'de' ? 'Eingeschränkte Auswahl' : 'Limited Selection',
      text: locale === 'de'
        ? 'App ist gut, aber die Auswahl an Wertpapieren ist begrenzt. Manche ausländischen Aktien fehlen. Für deutsche Titel aber völlig ausreichend.'
        : 'App is good, but the selection of securities is limited. Some foreign stocks are missing. But completely sufficient for German titles.',
      verified: true,
      helpful: 34,
    },
    {
      author: 'Sarah W.',
      rating: 5,
      date: '2024-12-20',
      title: locale === 'de' ? 'Kundenservice top' : 'Customer Service Top',
      text: locale === 'de'
        ? 'Hatte ein Problem mit einer Order - Support hat innerhalb von 2 Stunden reagiert und geholfen. Sehr freundlich und kompetent. Das nenne ich Service!'
        : 'Had a problem with an order - support responded and helped within 2 hours. Very friendly and competent. That\'s what I call service!',
      verified: true,
      helpful: 27,
    },
    {
      author: 'Kevin H.',
      rating: 4,
      date: '2024-12-15',
      title: locale === 'de' ? 'Empfehlung für Sparplan-Investoren' : 'Recommendation for Savings Plan Investors',
      text: locale === 'de'
        ? 'Für alle, die regelmäßig in ETFs investieren wollen: TradeRepublic ist perfekt. Kostenlose Sparpläne, große Auswahl, einfache Einrichtung. Klare Empfehlung!'
        : 'For everyone who wants to invest regularly in ETFs: TradeRepublic is perfect. Free savings plans, large selection, easy setup. Clear recommendation!',
      verified: true,
      helpful: 48,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white py-16 overflow-hidden">
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
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-orange-600">TR</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">TradeRepublic</h1>
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
                  ? 'Deutschlands beliebtester mobiler Broker. Einfach, günstig und perfekt für Einsteiger - Trading ab 1€ pro Order!'
                  : 'Germany\'s most popular mobile broker. Simple, cheap and perfect for beginners - trading from €1 per order!'}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{stats.trustScore}</div>
                  <div className="text-sm text-white/80">Trust Score</div>
                </div>
              </div>
              <span className="px-4 py-2 bg-orange-500/30 backdrop-blur-sm text-white rounded-full text-center font-semibold">
                BaFin {locale === 'de' ? 'Reguliert' : 'Regulated'}
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
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-orange-600'
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
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">1€</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Pro Trade' : 'Per Trade'}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">0€</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Depotgebühr' : 'Custody Fee'}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">4%</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Zinsen p.a.' : 'Interest p.a.'}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">2M+</div>
                <div className="text-gray-700 font-medium">{locale === 'de' ? 'Kunden' : 'Customers'}</div>
              </div>
            </div>

            {/* Main Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'de' ? 'Hauptmerkmale' : 'Key Features'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Unschlagbare Preise' : 'Unbeatable Prices'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Nur 1€ pro Trade, egal ob Aktie oder ETF. Sparpläne komplett kostenlos. Keine versteckten Gebühren.'
                      : 'Only €1 per trade, whether stock or ETF. Savings plans completely free. No hidden fees.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Mobile First' : 'Mobile First'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Preisgekrönte App für iOS und Android. Intuitiv, schnell und komplett auf Deutsch. Trading von unterwegs.'
                      : 'Award-winning app for iOS and Android. Intuitive, fast and completely in German. Trading on the go.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Große Auswahl' : 'Large Selection'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Über 10.000 Aktien, 2.000+ ETFs und 50.000 Derivate. Alle wichtigen deutschen und internationalen Titel.'
                      : 'Over 10,000 stocks, 2,000+ ETFs and 50,000 derivatives. All important German and international titles.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Integriertes Konto' : 'Integrated Account'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Verrechnungskonto mit 4% Zinsen p.a. auf nicht investiertes Geld. Kostenlose Visa-Debitkarte inklusive.'
                      : 'Settlement account with 4% interest p.a. on uninvested money. Free Visa debit card included.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'BaFin Regulierung' : 'BaFin Regulation'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Deutsche Banklizenz und BaFin-Regulierung. Einlagensicherung bis 100.000€. Höchste Sicherheitsstandards.'
                      : 'German banking license and BaFin regulation. Deposit insurance up to €100,000. Highest security standards.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Echtzeit-Trading' : 'Real-time Trading'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Handel von 7:30 bis 23:00 Uhr. Echtzeit-Kurse ohne Verzögerung. Sofortige Orderausführung über LS Exchange.'
                      : 'Trading from 7:30 AM to 11:00 PM. Real-time quotes without delay. Instant order execution via LS Exchange.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Bildungsangebot' : 'Educational Offering'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Kostenlose Webinare, Trading-Academy und ausführliche Guides. Perfekt für Einsteiger zum Lernen.'
                      : 'Free webinars, Trading Academy and detailed guides. Perfect for beginners to learn.'}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'de' ? 'Steuer-Reporting' : 'Tax Reporting'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Automatische Steuerdokumente, Jahressteuerbescheinigung und Export für ELSTER. Einfache Steuererklärung.'
                      : 'Automatic tax documents, annual tax certificate and export for ELSTER. Simple tax return.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Why TradeRepublic */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'de' ? 'Warum TradeRepublic?' : 'Why TradeRepublic?'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-orange-700">
                    {locale === 'de' ? 'Perfekt für Einsteiger' : 'Perfect for Beginners'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'TradeRepublic ist die ideale Wahl für alle, die mit dem Investieren beginnen möchten. Die App ist intuitiv gestaltet, alle Funktionen sind selbsterklärend, und der Einstieg gelingt in wenigen Minuten. Dank der niedrigen Kosten von nur 1€ pro Trade können auch kleine Beträge sinnvoll investiert werden.'
                      : 'TradeRepublic is the ideal choice for everyone who wants to start investing. The app is intuitively designed, all functions are self-explanatory, and getting started succeeds in just a few minutes. Thanks to the low costs of only €1 per trade, even small amounts can be invested meaningfully.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-orange-700">
                    {locale === 'de' ? 'Kostenlose Sparpläne' : 'Free Savings Plans'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'Über 2.000 ETF- und Aktien-Sparpläne stehen kostenlos zur Verfügung. Ab 1€ monatlich können Sie automatisch investieren und so langfristig Vermögen aufbauen. Die Ausführung ist komplett gebührenfrei, egal wie oft Sie investieren.'
                      : 'Over 2,000 ETF and stock savings plans are available for free. From €1 per month you can invest automatically and thus build wealth in the long term. Execution is completely free of charge, no matter how often you invest.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-orange-700">
                    {locale === 'de' ? 'Deutsche Bank-Lizenz' : 'German Banking License'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'TradeRepublic besitzt eine deutsche Vollbanklizenz und wird von der BaFin reguliert. Ihre Einlagen sind bis 100.000€ durch die gesetzliche Einlagensicherung geschützt. Das Unternehmen hat seinen Sitz in Berlin und unterliegt deutschem Recht.'
                      : 'TradeRepublic has a German full banking license and is regulated by BaFin. Your deposits are protected up to €100,000 by the statutory deposit insurance. The company is based in Berlin and subject to German law.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-orange-700">
                    {locale === 'de' ? 'Zinsen auf Guthaben' : 'Interest on Balance'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Auf nicht investiertes Geld erhalten Sie aktuell 4% Zinsen pro Jahr. Ihr Geld liegt nicht ungenutzt auf dem Verrechnungskonto, sondern arbeitet für Sie. Die Zinsen werden monatlich gutgeschrieben und sind bis 801€ (1.602€ für Verheiratete) steuerfrei.'
                      : 'You currently receive 4% interest per year on uninvested money. Your money doesn\'t lie unused in the settlement account, but works for you. Interest is credited monthly and is tax-free up to €801 (€1,602 for married couples).'}
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
                    locale === 'de' ? 'Nur 1€ pro Trade - extrem günstig' : 'Only €1 per trade - extremely cheap',
                    locale === 'de' ? 'Kostenlose ETF-Sparpläne ab 1€' : 'Free ETF savings plans from €1',
                    locale === 'de' ? 'Intuitive und preisgekrönte App' : 'Intuitive and award-winning app',
                    locale === 'de' ? '4% Zinsen auf Verrechnungskonto' : '4% interest on settlement account',
                    locale === 'de' ? 'Deutsche BaFin-Regulierung' : 'German BaFin regulation',
                    locale === 'de' ? 'Große Auswahl: 10.000+ Titel' : 'Large selection: 10,000+ titles',
                    locale === 'de' ? 'Kostenlose Visa-Debitkarte' : 'Free Visa debit card',
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
                    locale === 'de' ? 'Keine Optionen verfügbar' : 'No options available',
                    locale === 'de' ? 'Nur eine Handelsplatz (LS Exchange)' : 'Only one trading venue (LS Exchange)',
                    locale === 'de' ? 'Eingeschränkte Auswahl bei US-Aktien' : 'Limited selection of US stocks',
                    locale === 'de' ? 'Keine Desktop-Plattform' : 'No desktop platform',
                    locale === 'de' ? 'Support nur per E-Mail/Chat' : 'Support only via email/chat',
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Jetzt mit TradeRepublic starten' : 'Start with TradeRepublic Now'}
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {locale === 'de'
                  ? 'Eröffnen Sie Ihr kostenloses Depot in wenigen Minuten und profitieren Sie von günstigen Konditionen!'
                  : 'Open your free depot in just a few minutes and benefit from favorable conditions!'}
              </p>
              <a
                href="https://www.traderepublic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {locale === 'de' ? 'Depot eröffnen' : 'Open Depot'}
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
                      <th className="px-6 py-4 text-left font-semibold">{locale === 'de' ? 'Leistung' : 'Service'}</th>
                      <th className="px-6 py-4 text-right font-semibold">{locale === 'de' ? 'Gebühr' : 'Fee'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Aktien & ETF Kauf/Verkauf' : 'Stock & ETF Buy/Sell'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-orange-600">1€</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Sparplan-Ausführung' : 'Savings Plan Execution'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Depotführung' : 'Custody'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Verrechnungskonto' : 'Settlement Account'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Zinsen auf Guthaben' : 'Interest on Balance'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">4% p.a.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Dividendenauszahlung' : 'Dividend Payment'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Einzahlung' : 'Deposit'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{locale === 'de' ? 'Auszahlung' : 'Withdrawal'}</td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">
                        {locale === 'de' ? 'Kostenlos' : 'Free'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-bold text-lg mb-2">{locale === 'de' ? 'Wichtige Hinweise' : 'Important Notes'}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>
                    {locale === 'de'
                      ? 'Handel nur über LS Exchange möglich (7:30-23:00 Uhr)'
                      : 'Trading only possible via LS Exchange (7:30 AM-11:00 PM)'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>
                    {locale === 'de'
                      ? 'Mindestordervolumen: 1€'
                      : 'Minimum order volume: €1'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>
                    {locale === 'de'
                      ? 'Keine Gebühren für Limit-Orders oder Orderänderungen'
                      : 'No fees for limit orders or order modifications'}
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
                  <h3 className="text-xl font-bold mb-4">{locale === 'de' ? 'Mobile App' : 'Mobile App'}</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'iOS und Android App' : 'iOS and Android app'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Intuitive Benutzeroberfläche' : 'Intuitive user interface'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Echtzeit-Kurse' : 'Real-time quotes'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Push-Benachrichtigungen' : 'Push notifications'}
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">{locale === 'de' ? 'Charting & Analyse' : 'Charting & Analysis'}</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Interaktive Charts' : 'Interactive charts'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Mehrere Zeitebenen' : 'Multiple timeframes'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Technische Indikatoren' : 'Technical indicators'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Watchlisten' : 'Watchlists'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold mb-4">
                  {locale === 'de' ? 'Handelszeiten' : 'Trading Hours'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Montag bis Freitag von 7:30 bis 23:00 Uhr über LS Exchange. Außerbörslicher Handel ermöglicht erweiterte Handelszeiten im Vergleich zu Xetra.'
                    : 'Monday to Friday from 7:30 AM to 11:00 PM via LS Exchange. Over-the-counter trading enables extended trading hours compared to Xetra.'}
                </p>
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
                  <div className="text-6xl font-bold text-orange-600 mb-2">{stats.averageRating}</div>
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
                          className="bg-orange-600 h-3 rounded-full transition-all"
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
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
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
                    <button className="flex items-center gap-1 hover:text-orange-600 transition-colors">
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Überzeugt?' : 'Convinced?'}
              </h3>
              <p className="text-white/90 mb-6">
                {locale === 'de'
                  ? 'Schließen Sie sich über 2 Millionen zufriedenen Kunden an!'
                  : 'Join over 2 million satisfied customers!'}
              </p>
              <a
                href="https://www.traderepublic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
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
