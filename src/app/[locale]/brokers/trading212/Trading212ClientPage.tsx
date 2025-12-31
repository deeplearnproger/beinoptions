'use client';

import Link from 'next/link';
import { useState } from 'react';

type Props = {
  params: { locale: string };
};

export default function Trading212ClientPage({ params }: Props) {
  const locale = params.locale;
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  const reviews = [
    {
      author: 'Michael T.',
      rating: 5,
      date: '2025-01-16',
      title: locale === 'de' ? 'Perfekt für Einsteiger' : 'Perfect for beginners',
      text: locale === 'de'
        ? 'Trading212 ist super für Anfänger. Keine Kommissionen, sehr niedrige Mindesteinlage von nur 1€. Die App ist mega einfach zu bedienen. Innerhalb von 10 Minuten hatte ich mein erstes Trade gemacht.'
        : 'Trading212 is great for beginners. No commissions, very low minimum deposit of just €1. The app is super easy to use. I made my first trade within 10 minutes.',
      verified: true,
      helpful: 62,
    },
    {
      author: 'Sarah K.',
      rating: 5,
      date: '2025-01-13',
      title: locale === 'de' ? 'Beste Trading-App' : 'Best trading app',
      text: locale === 'de'
        ? 'Die mobile App ist wirklich die beste, die ich je benutzt habe. Alles läuft flüssig, Design ist modern und übersichtlich. Fractional Shares sind ein großer Pluspunkt!'
        : 'The mobile app is really the best I\'ve ever used. Everything runs smoothly, design is modern and clear. Fractional shares are a big plus!',
      verified: true,
      helpful: 45,
    },
    {
      author: 'Thomas B.',
      rating: 5,
      date: '2025-01-10',
      title: locale === 'de' ? 'Keine versteckten Gebühren' : 'No hidden fees',
      text: locale === 'de'
        ? 'Endlich ein Broker ohne versteckte Kosten! Bei anderen habe ich immer irgendwelche Gebühren bezahlt, die ich nicht erwartet hatte. Bei Trading212 ist alles transparent.'
        : 'Finally a broker without hidden costs! With others I always paid some fees I didn\'t expect. With Trading212 everything is transparent.',
      verified: true,
      helpful: 51,
    },
    {
      author: 'Anna W.',
      rating: 4,
      date: '2025-01-07',
      title: locale === 'de' ? 'Gut aber nur CFDs' : 'Good but only CFDs',
      text: locale === 'de'
        ? 'Die Plattform ist wirklich gut und benutzerfreundlich. Support antwortet schnell auf Deutsch. Einziger Nachteil: Für Optionen gibt es nur CFDs, keine echten Optionen. Aber für CFD-Trading top!'
        : 'The platform is really good and user-friendly. Support responds quickly in German. Only downside: for options there are only CFDs, no real options. But great for CFD trading!',
      verified: true,
      helpful: 38,
    },
    {
      author: 'David L.',
      rating: 5,
      date: '2025-01-04',
      title: locale === 'de' ? 'Sehr günstig' : 'Very affordable',
      text: locale === 'de'
        ? 'Für kleine Depots perfekt. Man kann schon mit 1€ anfangen und Bruchstücke von Aktien kaufen. Keine Kommissionen macht das Ganze noch besser. Spreads sind eng.'
        : 'Perfect for small portfolios. You can start with just €1 and buy fractional shares. No commissions makes it even better. Spreads are tight.',
      verified: true,
      helpful: 56,
    },
    {
      author: 'Julia M.',
      rating: 5,
      date: '2025-01-01',
      title: locale === 'de' ? 'Top Support' : 'Great support',
      text: locale === 'de'
        ? 'Der deutsche Kundenservice ist erstklassig. Hatte ein Problem mit der Verifizierung und es wurde innerhalb von 2 Stunden gelöst. Sehr freundlich und kompetent.'
        : 'The German customer service is first class. Had a problem with verification and it was solved within 2 hours. Very friendly and competent.',
      verified: true,
      helpful: 42,
    },
  ];

  const stats = {
    totalReviews: 1892,
    averageRating: 4.6,
    distribution: {
      5: 68,
      4: 24,
      3: 6,
      2: 1,
      1: 1,
    },
    trustScore: 89,
  };

  const features = [
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: locale === 'de' ? 'Keine Kommissionen' : 'No Commissions',
      description: locale === 'de'
        ? '0€ Kommission auf alle Trades, nur enge Spreads'
        : '€0 commission on all trades, only tight spreads',
    },
    {
      iconBg: 'from-cyan-50 to-teal-100',
      iconColor: 'text-cyan-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: locale === 'de' ? 'Nur 1€ Mindesteinlage' : 'Only €1 Minimum Deposit',
      description: locale === 'de'
        ? 'Starten Sie mit minimalem Kapital - perfekt für Einsteiger'
        : 'Start with minimal capital - perfect for beginners',
    },
    {
      iconBg: 'from-teal-50 to-cyan-100',
      iconColor: 'text-teal-600',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: locale === 'de' ? 'Top Mobile App' : 'Top Mobile App',
      description: locale === 'de'
        ? 'Preisgekrönte App mit 4.7 Rating im App Store'
        : 'Award-winning app with 4.7 rating in App Store',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M8 7h12M8 12h12m-12 5h12M3 7h.01M3 12h.01M3 17h.01',
      title: locale === 'de' ? 'Fractional Shares' : 'Fractional Shares',
      description: locale === 'de'
        ? 'Kaufen Sie Bruchteile von teuren Aktien'
        : 'Buy fractions of expensive stocks',
    },
    {
      iconBg: 'from-red-50 to-rose-100',
      iconColor: 'text-rose-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'FCA & CySEC Reguliert' : 'FCA & CySEC Regulated',
      description: locale === 'de'
        ? 'Streng reguliert durch britische und zypriotische Behörden'
        : 'Strictly regulated by British and Cypriot authorities',
    },
    {
      iconBg: 'from-cyan-50 to-blue-100',
      iconColor: 'text-cyan-600',
      iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      title: locale === 'de' ? 'Keine versteckten Gebühren' : 'No Hidden Fees',
      description: locale === 'de'
        ? 'Komplett transparente Kostenstruktur ohne Überraschungen'
        : 'Completely transparent cost structure without surprises',
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
      <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 text-white py-20">
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
                    <img src="/logos/trading212.png" alt="Trading212 Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Trading212</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(5)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-blue-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-blue-100 mb-6">
                  {locale === 'de'
                    ? 'Benutzerfreundlicher Broker mit 0€ Kommission und nur 1€ Mindesteinlage - Options coming soon'
                    : 'User-friendly broker with €0 commission and only €1 minimum deposit - Options coming soon'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? '0€ Kommission' : '€0 Commission'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'FCA Reguliert' : 'FCA Regulated'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Seit 2004' : 'Since 2004'}
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
                  href="https://www.trading212.com/de/cfd"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold text-center hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                  {locale === 'de' ? 'Nur 1€ Mindesteinlage' : 'Only €1 minimum deposit'}
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
                    <p className="text-gray-700">FCA (UK), CySEC (Cyprus)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Mindesteinzahlung' : 'Minimum Deposit'}</h3>
                    <p className="text-gray-700">1 €</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Optionen verfügbar' : 'Options Available'}</h3>
                    <p className="text-gray-700">Options coming soon</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Plattformen' : 'Platforms'}</h3>
                    <p className="text-gray-700">{locale === 'de' ? 'Web-Plattform, iOS & Android App' : 'Web platform, iOS & Android app'}</p>
                  </div>
                </div>
              </div>

              {/* Why Trading212 */}
              <div className="card bg-gradient-to-br from-cyan-50 to-teal-50">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Warum Trading212?' : 'Why Trading212?'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Für Kleinanleger' : 'For Small Investors'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Mit nur 1€ Mindesteinlage können Sie sofort starten. Fractional Shares ermöglichen Investitionen in teure Aktien mit kleinem Budget.'
                        : 'With only €1 minimum deposit you can start immediately. Fractional shares enable investments in expensive stocks with a small budget.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Mobile-First' : 'Mobile-First'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Die preisgekrönte mobile App wurde speziell für Smartphone-Trading optimiert. Alle Funktionen sind mobil verfügbar.'
                        : 'The award-winning mobile app has been specifically optimized for smartphone trading. All features are available on mobile.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Transparenz' : 'Transparency'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Keine versteckten Gebühren oder Überraschungen. Was Sie sehen, ist was Sie zahlen - nur der Spread, keine Kommissionen.'
                        : 'No hidden fees or surprises. What you see is what you pay - only the spread, no commissions.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Deutscher Support' : 'German Support'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Vollständig auf Deutsch verfügbar mit deutschsprachigem Kundensupport. Keine Sprachbarrieren beim Trading.'
                        : 'Fully available in German with German-speaking customer support. No language barriers when trading.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  {locale === 'de' ? 'Bereit zum Traden?' : 'Ready to Trade?'}
                </h2>
                <p className="text-xl mb-8 text-cyan-100">
                  {locale === 'de'
                    ? 'Starten Sie jetzt mit nur 1€ - keine Kommissionen, keine versteckten Gebühren'
                    : 'Start now with just €1 - no commissions, no hidden fees'}
                </p>
                <a
                  href="https://www.trading212.com/de/cfd"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  {locale === 'de' ? 'Jetzt kostenlos registrieren' : 'Register for free now'}
                </a>
                <p className="text-sm text-cyan-100 mt-4">
                  {locale === 'de' ? 'Nur 1€ Mindesteinlage - 0€ Kommission - Deutscher Support' : 'Only €1 minimum deposit - €0 commission - German support'}
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
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Eng, wettbewerbsfähig' : 'Tight, competitive'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Mindesteinzahlung' : 'Minimum Deposit'}</span>
                  <span className="font-semibold text-gray-900">1 €</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Ein-/Auszahlungsgebühr' : 'Deposit/Withdrawal Fee'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? 'Kostenlos' : 'Free'}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">{locale === 'de' ? 'Inaktivitätsgebühr' : 'Inactivity Fee'}</span>
                  <span className="font-semibold text-gray-900">{locale === 'de' ? '€10/Jahr nach 12 Monaten' : '€10/year after 12 months'}</span>
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
                  {locale === 'de' ? 'Trading212 Plattform' : 'Trading212 Platform'}
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  {locale === 'de'
                    ? 'Trading212 bietet eine moderne, benutzerfreundliche Plattform, die speziell für mobile Geräte optimiert wurde. Die App gehört zu den bestbewerteten Trading-Apps weltweit.'
                    : 'Trading212 offers a modern, user-friendly platform that has been specially optimized for mobile devices. The app is one of the highest-rated trading apps worldwide.'}
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
                        <span>iOS App (4.7)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>Android App (4.6)</span>
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
                        <span>{locale === 'de' ? 'Erweiterte Charts' : 'Advanced charts'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Fractional Shares' : 'Fractional shares'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Preisalarme' : 'Price alerts'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{locale === 'de' ? 'Practice Account' : 'Practice account'}</span>
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
