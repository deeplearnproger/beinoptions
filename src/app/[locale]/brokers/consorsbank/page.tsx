'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function ConsorsbankPage({ params: { locale } }: { params: { locale: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'fees' | 'reviews' | 'platform'>('overview');

  const reviews = [
    {
      author: 'Werner K.',
      rating: 5,
      date: '2025-01-10',
      title: locale === 'de' ? 'Solide deutsche Bank mit hervorragendem Service' : 'Solid German bank with excellent service',
      text: locale === 'de'
        ? 'Als deutsche Traditionsbank bietet Consorsbank genau das, was ich suche: Sicherheit, Zuverlässigkeit und erstklassigen deutschen Support. Die Mitarbeiter sind kompetent und nehmen sich Zeit für Fragen. Perfekt für konservative Anleger.'
        : 'As a traditional German bank, Consorsbank offers exactly what I\'m looking for: security, reliability and first-class German support. The staff are competent and take time for questions. Perfect for conservative investors.',
      verified: true,
      helpful: 45,
    },
    {
      author: 'Petra M.',
      rating: 5,
      date: '2025-01-08',
      title: locale === 'de' ? 'Exzellente Trader-Ausbildung' : 'Excellent trader education',
      text: locale === 'de'
        ? 'Die Bildungsangebote der Consorsbank sind unschlagbar. Regelmäßige Webinare, persönliche Seminare und umfangreiche Materialien haben mir den Einstieg in den Optionshandel sehr erleichtert. Dafür zahle ich gerne etwas höhere Gebühren.'
        : 'Consorsbank\'s educational offerings are unbeatable. Regular webinars, personal seminars and extensive materials made it much easier for me to get into options trading. I\'m happy to pay slightly higher fees for this.',
      verified: true,
      helpful: 52,
    },
    {
      author: 'Hans-Peter S.',
      rating: 4,
      date: '2025-01-05',
      title: locale === 'de' ? 'Zuverlässig seit Jahren' : 'Reliable for years',
      text: locale === 'de'
        ? 'Seit über 8 Jahren bei Consorsbank und durchweg zufrieden. Die Plattform ist vielleicht nicht die modernste, aber sie ist stabil und zuverlässig. Noch nie Probleme gehabt. Der persönliche Ansprechpartner ist Gold wert.'
        : 'Been with Consorsbank for over 8 years and consistently satisfied. The platform may not be the most modern, but it is stable and reliable. Never had any problems. The personal contact is worth its weight in gold.',
      verified: true,
      helpful: 38,
    },
    {
      author: 'Monika L.',
      rating: 5,
      date: '2025-01-03',
      title: locale === 'de' ? 'Perfekt für Einsteiger' : 'Perfect for beginners',
      text: locale === 'de'
        ? 'Als Anfängerin im Optionshandel fühlte ich mich bei Consorsbank von Anfang an gut aufgehoben. Der Support erklärt geduldig, die Plattform ist übersichtlich und die Schulungsangebote sind hervorragend. Absolute Empfehlung!'
        : 'As a beginner in options trading, I felt in good hands at Consorsbank from the start. Support explains patiently, the platform is clear and the training offerings are excellent. Absolute recommendation!',
      verified: true,
      helpful: 49,
    },
    {
      author: 'Friedrich B.',
      rating: 4,
      date: '2024-12-30',
      title: locale === 'de' ? 'Sicherheit steht im Vordergrund' : 'Security comes first',
      text: locale === 'de'
        ? 'Bei Consorsbank weiß ich mein Geld sicher. Deutsche Bank, BaFin-Regulierung, Einlagensicherung - alles top. Die Gebühren sind höher als bei Discount-Brokern, aber Sicherheit und Service sind es mir wert.'
        : 'At Consorsbank I know my money is safe. German bank, BaFin regulation, deposit insurance - all top. Fees are higher than discount brokers, but security and service are worth it to me.',
      verified: true,
      helpful: 41,
    },
    {
      author: 'Angelika W.',
      rating: 5,
      date: '2024-12-27',
      title: locale === 'de' ? 'Umfassende Beratung' : 'Comprehensive advice',
      text: locale === 'de'
        ? 'Was mich besonders beeindruckt: Man kann tatsächlich persönlich mit kompetenten Beratern sprechen. Bei steuerlichen Fragen oder komplexen Strategien ist das unbezahlbar. Echte Premium-Betreuung.'
        : 'What particularly impresses me: you can actually speak personally with competent advisors. For tax questions or complex strategies, this is priceless. Real premium service.',
      verified: true,
      helpful: 44,
    },
    {
      author: 'Klaus R.',
      rating: 4,
      date: '2024-12-24',
      title: locale === 'de' ? 'Solide Plattform' : 'Solid platform',
      text: locale === 'de'
        ? 'Die Plattform ist nicht so fancy wie bei manchen anderen, aber sie funktioniert einwandfrei. Alles was man braucht ist da, und der Support hilft sofort wenn man Fragen hat. Für mich als langfristiger Anleger genau richtig.'
        : 'The platform is not as fancy as some others, but it works perfectly. Everything you need is there, and support helps immediately if you have questions. Just right for me as a long-term investor.',
      verified: true,
      helpful: 33,
    },
    {
      author: 'Sabine H.',
      rating: 5,
      date: '2024-12-20',
      title: locale === 'de' ? 'Vertrauen durch Tradition' : 'Trust through tradition',
      text: locale === 'de'
        ? 'In unsicheren Zeiten vertraue ich auf eine etablierte deutsche Bank. Consorsbank gibt es seit Jahrzehnten, sie sind seriös und verlässlich. Das beruhigt mich und ich kann mich aufs Trading konzentrieren.'
        : 'In uncertain times I trust an established German bank. Consorsbank has been around for decades, they are reputable and reliable. This reassures me and I can concentrate on trading.',
      verified: true,
      helpful: 47,
    },
  ];

  const stats = {
    totalReviews: 654,
    averageRating: 4.3,
    distribution: {
      5: 58,
      4: 32,
      3: 8,
      2: 1,
      1: 1,
    },
    trustScore: 90,
  };

  const features = [
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: locale === 'de' ? 'Deutsche Bank' : 'German Bank',
      description: locale === 'de'
        ? 'Etablierte deutsche Traditionsbank mit BaFin-Regulierung'
        : 'Established traditional German bank with BaFin regulation',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'Maximale Sicherheit' : 'Maximum Security',
      description: locale === 'de'
        ? 'Einlagensicherung und segregierte Kundengelder'
        : 'Deposit insurance and segregated client funds',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      title: locale === 'de' ? 'Umfangreiche Bildung' : 'Extensive Education',
      description: locale === 'de'
        ? 'Webinare, Seminare und persönliche Schulungen'
        : 'Webinars, seminars and personal training',
    },
    {
      iconBg: 'from-cyan-50 to-sky-100',
      iconColor: 'text-sky-600',
      iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: locale === 'de' ? 'Persönlicher Support' : 'Personal Support',
      description: locale === 'de'
        ? 'Kompetente Beratung auf Deutsch per Telefon'
        : 'Competent advice in German by phone',
    },
    {
      iconBg: 'from-orange-50 to-amber-100',
      iconColor: 'text-orange-600',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: locale === 'de' ? 'Gute Options-Auswahl' : 'Good Options Selection',
      description: locale === 'de'
        ? 'Umfangreiche Auswahl an Optionen und Derivaten'
        : 'Extensive selection of options and derivatives',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      title: locale === 'de' ? 'Keine Mindesteinlage' : 'No Minimum Deposit',
      description: locale === 'de'
        ? 'Starten Sie bereits ab 0€'
        : 'Start from €0',
    },
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: locale === 'de' ? 'Stabile Plattform' : 'Stable Platform',
      description: locale === 'de'
        ? 'Zuverlässige und bewährte Trading-Software'
        : 'Reliable and proven trading software',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: locale === 'de' ? 'Depot & Girokonto' : 'Depot & Checking Account',
      description: locale === 'de'
        ? 'Alles aus einer Hand - Banking und Trading'
        : 'Everything from one source - banking and trading',
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
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors"
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
                    <span className="text-3xl font-bold text-indigo-600">CB</span>
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Consorsbank</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(4)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-indigo-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-indigo-100 mb-6">
                  {locale === 'de'
                    ? 'Deutsche Traditionsbank mit hervorragendem Service und umfangreicher Trader-Ausbildung'
                    : 'Traditional German bank with excellent service and extensive trader education'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'de' ? 'Verifiziert' : 'Verified'}
                  </span>
                  <span className="px-4 py-2 bg-indigo-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    BaFin {locale === 'de' ? 'Reguliert' : 'Regulated'}
                  </span>
                  <span className="px-4 py-2 bg-indigo-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Deutsche Bank' : 'German Bank'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-indigo-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Sehr gut' : 'Very good'}</div>
                </div>
                <a
                  href="https://www.consorsbank.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-bold text-center hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">0€</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Mindesteinzahlung' : 'Min. Deposit'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Webinare/Jahr' : 'Webinars/Year'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-50 to-sky-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">24/5</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'Telefon-Support' : 'Phone Support'}</div>
                </div>
                <div className="card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600">{locale === 'de' ? 'BaFin Sicherheit' : 'BaFin Security'}</div>
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

              {/* Why Consorsbank */}
              <div className="card bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Warum Consorsbank?' : 'Why Consorsbank?'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'Sicherheit & Vertrauen' : 'Security & Trust'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Als etablierte deutsche Bank bietet Consorsbank maximale Sicherheit durch BaFin-Regulierung und umfassende Einlagensicherung.'
                        : 'As an established German bank, Consorsbank offers maximum security through BaFin regulation and comprehensive deposit insurance.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'Erstklassige Bildung' : 'First-Class Education'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Über 50 Webinare pro Jahr, persönliche Seminare und umfangreiche Lernmaterialien für Einsteiger und Profis.'
                        : 'Over 50 webinars per year, personal seminars and extensive learning materials for beginners and professionals.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'Persönlicher Support' : 'Personal Support'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Kompetente Beratung auf Deutsch per Telefon. Persönliche Ansprechpartner helfen bei allen Fragen.'
                        : 'Competent advice in German by phone. Personal contacts help with all questions.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {locale === 'de' ? 'Alles aus einer Hand' : 'All in One'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Depot, Girokonto, Kreditkarte - alle Banking-Produkte perfekt integriert auf einer Plattform.'
                        : 'Depot, checking account, credit card - all banking products perfectly integrated on one platform.'}
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
                      ? ['Deutsche Bank mit BaFin-Regulierung', 'Umfangreicher deutscher Support', 'Exzellente Trader-Ausbildung', 'Maximale Sicherheit', 'Persönliche Ansprechpartner', 'Banking + Trading integriert']
                      : ['German bank with BaFin regulation', 'Extensive German support', 'Excellent trader education', 'Maximum security', 'Personal contacts', 'Banking + trading integrated']
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
                      ? ['Höhere Gebühren als Discount-Broker', 'Plattform weniger modern', 'Nicht ideal für Daytrader']
                      : ['Higher fees than discount brokers', 'Platform less modern', 'Not ideal for day traders']
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
              <div className="card bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de' ? 'Bereit für Consorsbank?' : 'Ready for Consorsbank?'}
                </h3>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Profitieren Sie von Sicherheit, Service und erstklassiger Ausbildung einer deutschen Traditionsbank!'
                    : 'Benefit from security, service and first-class education from a traditional German bank!'}
                </p>
                <a
                  href="https://www.consorsbank.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
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
                  <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{locale === 'de' ? 'Trading Gebühren' : 'Trading Fees'}</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">4,95€ + 0,25%</div>
                        <p className="text-gray-600">{locale === 'de' ? 'Grundgebühr + Provision vom Ordervolumen' : 'Base fee + commission on order volume'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{locale === 'de' ? 'Weitere Gebühren' : 'Additional Fees'}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Depotführung' : 'Custody Account'}</span>
                        <span className="text-green-600 font-bold">{locale === 'de' ? 'Kostenlos*' : 'Free*'}</span>
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
                        <span className="font-semibold text-gray-700">{locale === 'de' ? 'Kontoführung' : 'Account Maintenance'}</span>
                        <span className="text-green-600 font-bold">{locale === 'de' ? 'Kostenlos' : 'Free'}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      * {locale === 'de' ? 'Bei mindestens 1 Trade/Quartal oder Sparplan' : 'With at least 1 trade/quarter or savings plan'}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Service rechtfertigt Kosten' : 'Service Justifies Costs'}</h4>
                        <p className="text-gray-700">
                          {locale === 'de'
                            ? 'Die Gebühren sind höher als bei Discount-Brokern, aber dafür erhalten Sie umfassenden deutschen Support, persönliche Beratung und exzellente Bildungsangebote. Für viele Anleger ist das jeden Cent wert.'
                            : 'Fees are higher than discount brokers, but you get comprehensive German support, personal advice and excellent educational offerings. For many investors this is worth every cent.'}
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
                  {locale === 'de' ? 'Trading-Plattform' : 'Trading Platform'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">ActiveTrader</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Professionelle Desktop-Plattform' : 'Professional desktop platform'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Übersichtliche Benutzeroberfläche' : 'Clear user interface'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Realtime-Kurse' : 'Real-time quotes'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Watchlists & Alerts' : 'Watchlists & alerts'}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Consorsbank App</h3>
                    <p className="text-gray-600 mb-4">{locale === 'de' ? 'Banking & Trading unterwegs' : 'Banking & trading on the go'}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        iOS & Android
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Trading & Banking integriert' : 'Trading & banking integrated'}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {locale === 'de' ? 'Biometrischer Login' : 'Biometric login'}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{locale === 'de' ? 'Support & Bildung' : 'Support & Education'}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-indigo-300">{locale === 'de' ? 'Persönlicher Support' : 'Personal Support'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? 'Telefon 24/5' : 'Phone 24/5'}</li>
                        <li>• {locale === 'de' ? 'E-Mail Support' : 'Email support'}</li>
                        <li>• {locale === 'de' ? 'Persönliche Ansprechpartner' : 'Personal contacts'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-indigo-300">{locale === 'de' ? 'Bildungsangebote' : 'Educational Offerings'}</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• {locale === 'de' ? '50+ Webinare/Jahr' : '50+ webinars/year'}</li>
                        <li>• {locale === 'de' ? 'Persönliche Seminare' : 'Personal seminars'}</li>
                        <li>• {locale === 'de' ? 'Trading-Akademie' : 'Trading academy'}</li>
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
                    <div className="text-7xl font-bold text-indigo-600 mb-2">{stats.averageRating}</div>
                    <div className="mb-4">{renderStars(4)}</div>
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
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                        <button className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {locale === 'de' ? 'Bereit für Consorsbank?' : 'Ready for Consorsbank?'}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Vertrauen Sie auf eine deutsche Traditionsbank mit erstklassigem Service und maximaler Sicherheit!'
              : 'Trust a traditional German bank with first-class service and maximum security!'}
          </p>
          <a
            href="https://www.consorsbank.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? 'Jetzt kostenloses Konto eröffnen' : 'Open Free Account Now'}
          </a>
          <p className="text-indigo-200 text-sm mt-4 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {locale === 'de' ? '0€ Mindesteinlage' : '€0 minimum deposit'}
            <span className="mx-1">|</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {locale === 'de' ? 'BaFin Sicherheit' : 'BaFin security'}
            <span className="mx-1">|</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            {locale === 'de' ? '50+ Webinare/Jahr' : '50+ webinars/year'}
          </p>
        </div>
      </div>
    </div>
  );
}
