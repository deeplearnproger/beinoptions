'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackBrokerClick, useScrollDepthTracking, useEngagementTimeTracking } from '@/hooks/useAnalytics';

export default function ConsorsbankClientPage({ params: { locale } }: { params: { locale: string } }) {
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
  useScrollDepthTracking('Consorsbank Page');
  useEngagementTimeTracking('Consorsbank Page');

  // Handler for broker signup clicks
  const handleSignupClick = (_location: string) => {
    trackBrokerClick('Consorsbank', 'signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors"
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
                    <img src="/logos/consorsbank.png" alt="Consorsbank Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Consorsbank</h1>
                    <div className="flex items-center gap-3">
                      {renderStars(4)}
                      <span className="text-2xl font-bold">{stats.averageRating}</span>
                      <span className="text-teal-200">({stats.totalReviews.toLocaleString()} {locale === 'de' ? 'Bewertungen' : 'reviews'})</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-teal-100 mb-6">
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
                  <span className="px-4 py-2 bg-teal-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    BaFin {locale === 'de' ? 'Reguliert' : 'Regulated'}
                  </span>
                  <span className="px-4 py-2 bg-teal-500/30 backdrop-blur-sm text-white rounded-full font-semibold">
                    {locale === 'de' ? 'Deutsche Bank' : 'German Bank'}
                  </span>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-teal-600 mb-2">{stats.trustScore}</div>
                  <div className="text-lg font-semibold text-gray-700">Trust Score</div>
                  <div className="text-sm text-gray-500">{locale === 'de' ? 'Sehr gut' : 'Very good'}</div>
                </div>
                <a
                  href="https://www.consorsbank.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSignupClick('Hero Sidebar')}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl font-bold text-center hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
      {/* Остальное содержимое страницы */}
    </div>
  );
}
