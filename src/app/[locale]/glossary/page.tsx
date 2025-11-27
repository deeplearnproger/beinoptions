'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

export default function GlossaryPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('glossary');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const glossaryTerms = [
    // Basics
    { term: t('call_option'), definition: t('call_option_def'), category: 'basics', id: 'call' },
    { term: t('put_option'), definition: t('put_option_def'), category: 'basics', id: 'put' },
    { term: t('strike_price'), definition: t('strike_price_def'), category: 'basics', id: 'strike' },
    { term: t('expiration'), definition: t('expiration_def'), category: 'basics', id: 'expiration' },
    { term: t('premium'), definition: t('premium_def'), category: 'basics', id: 'premium' },
    { term: t('contract'), definition: t('contract_def'), category: 'basics', id: 'contract' },
    { term: t('underlying'), definition: t('underlying_def'), category: 'basics', id: 'underlying' },
    { term: t('long_short'), definition: t('long_short_def'), category: 'basics', id: 'long_short' },

    // Money positions
    { term: t('atm'), definition: t('atm_def'), category: 'money', id: 'atm' },
    { term: t('itm'), definition: t('itm_def'), category: 'money', id: 'itm' },
    { term: t('otm'), definition: t('otm_def'), category: 'money', id: 'otm' },
    { term: t('intrinsic_value'), definition: t('intrinsic_value_def'), category: 'money', id: 'intrinsic' },
    { term: t('extrinsic_value'), definition: t('extrinsic_value_def'), category: 'money', id: 'extrinsic' },

    // Greeks
    { term: t('delta'), definition: t('delta_def'), category: 'greeks', id: 'delta' },
    { term: t('gamma'), definition: t('gamma_def'), category: 'greeks', id: 'gamma' },
    { term: t('theta'), definition: t('theta_def'), category: 'greeks', id: 'theta' },
    { term: t('vega'), definition: t('vega_def'), category: 'greeks', id: 'vega' },
    { term: t('rho'), definition: t('rho_def'), category: 'greeks', id: 'rho' },

    // Advanced concepts
    { term: t('implied_volatility'), definition: t('implied_volatility_def'), category: 'advanced', id: 'iv' },
    { term: t('historical_volatility'), definition: t('historical_volatility_def'), category: 'advanced', id: 'hv' },
    { term: t('open_interest'), definition: t('open_interest_def'), category: 'advanced', id: 'oi' },
    { term: t('volume'), definition: t('volume_def'), category: 'advanced', id: 'volume' },
    { term: t('bid_ask'), definition: t('bid_ask_def'), category: 'advanced', id: 'bid_ask' },
    { term: t('spread'), definition: t('spread_def'), category: 'advanced', id: 'spread' },
    { term: t('liquidity'), definition: t('liquidity_def'), category: 'advanced', id: 'liquidity' },

    // Trading actions
    { term: t('assignment'), definition: t('assignment_def'), category: 'trading', id: 'assignment' },
    { term: t('exercise'), definition: t('exercise_def'), category: 'trading', id: 'exercise' },
    { term: t('roll'), definition: t('roll_def'), category: 'trading', id: 'roll' },
    { term: t('close'), definition: t('close_def'), category: 'trading', id: 'close' },
    { term: t('buy_to_open'), definition: t('buy_to_open_def'), category: 'trading', id: 'bto' },
    { term: t('sell_to_open'), definition: t('sell_to_open_def'), category: 'trading', id: 'sto' },
    { term: t('buy_to_close'), definition: t('buy_to_close_def'), category: 'trading', id: 'btc' },
    { term: t('sell_to_close'), definition: t('sell_to_close_def'), category: 'trading', id: 'stc' },

    // Strategies
    { term: t('covered_call'), definition: t('covered_call_def'), category: 'strategies', id: 'cc' },
    { term: t('protective_put'), definition: t('protective_put_def'), category: 'strategies', id: 'pp' },
    { term: t('iron_condor'), definition: t('iron_condor_def'), category: 'strategies', id: 'ic' },
    { term: t('bull_spread'), definition: t('bull_spread_def'), category: 'strategies', id: 'bull' },
    { term: t('bear_spread'), definition: t('bear_spread_def'), category: 'strategies', id: 'bear' },
    { term: t('straddle'), definition: t('straddle_def'), category: 'strategies', id: 'straddle' },
    { term: t('strangle'), definition: t('strangle_def'), category: 'strategies', id: 'strangle' },
    { term: t('butterfly'), definition: t('butterfly_def'), category: 'strategies', id: 'butterfly' },
    { term: t('calendar_spread'), definition: t('calendar_spread_def'), category: 'strategies', id: 'calendar' },

    // Risk management
    { term: t('max_profit'), definition: t('max_profit_def'), category: 'risk', id: 'max_profit' },
    { term: t('max_loss'), definition: t('max_loss_def'), category: 'risk', id: 'max_loss' },
    { term: t('breakeven'), definition: t('breakeven_def'), category: 'risk', id: 'breakeven' },
    { term: t('margin'), definition: t('margin_def'), category: 'risk', id: 'margin' },
    { term: t('naked_option'), definition: t('naked_option_def'), category: 'risk', id: 'naked' },

    // Regulators
    { term: t('cysec'), definition: t('cysec_def'), category: 'regulation', id: 'cysec' },
    { term: t('sec'), definition: t('sec_def'), category: 'regulation', id: 'sec' },
    { term: t('fca'), definition: t('fca_def'), category: 'regulation', id: 'fca' },
    { term: t('afm'), definition: t('afm_def'), category: 'regulation', id: 'afm' },
  ];

  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = {
    all: locale === 'de' ? 'Alle' : 'All',
    basics: locale === 'de' ? 'Grundlagen' : 'Basics',
    money: locale === 'de' ? 'Optionswerte' : 'Option Values',
    greeks: locale === 'de' ? 'Griechen' : 'Greeks',
    advanced: locale === 'de' ? 'Fortgeschritten' : 'Advanced',
    trading: locale === 'de' ? 'Trading-Aktionen' : 'Trading Actions',
    strategies: locale === 'de' ? 'Strategien' : 'Strategies',
    risk: locale === 'de' ? 'Risikomanagement' : 'Risk Management',
    regulation: locale === 'de' ? 'Regulierungsbehörden' : 'Regulators',
  };

  // Educational videos - using verified working YouTube videos
  const videos = {
    youtube: [
      {
        title: locale === 'de' ? 'Optionen einfach erklärt - Der komplette Guide' : 'Options Explained Simply - Complete Guide',
        embedId: 'jZRa8gW_TWs',
        description: locale === 'de'
          ? 'Der ultimative Einstieg in den Optionshandel: Alles was Sie wissen müssen, um zu starten'
          : 'The ultimate introduction to options trading: Everything you need to know to get started',
        thumbnail: undefined
      },
      {
        title: locale === 'de' ? 'Call und Put Optionen verstehen' : 'Understanding Call and Put Options',
        embedId: '5bmbaxa82QU',
        description: locale === 'de'
          ? 'Lernen Sie den Unterschied zwischen Calls und Puts und wann Sie welche verwenden'
          : 'Learn the difference between calls and puts and when to use each',
        thumbnail: undefined
      },
      {
        title: locale === 'de' ? 'Optionshandel: So funktioniert es wirklich' : 'Options Trading: How It Really Works',
        embedId: 'noUSD-8FzmU',
        description: locale === 'de'
          ? 'Praktische Beispiele und Strategien für den erfolgreichen Optionshandel'
          : 'Practical examples and strategies for successful options trading',
        thumbnail: undefined
      },
      {
        title: locale === 'de' ? 'Wie funktionieren Optionen? Tutorial' : 'How Do Options Work? Tutorial',
        embedId: 'EfmTWu2yn5Q',
        description: locale === 'de'
          ? 'Verstehen Sie die Grundlagen: Strike-Preise, Verfallsdaten und Prämien'
          : 'Understand the basics: Strike prices, expiration dates and premiums',
        thumbnail: 'custom' // Force custom thumbnail for this video
      },
      {
        title: locale === 'de' ? 'Optionsstrategien für Einsteiger' : 'Options Strategies for Beginners',
        embedId: 'RJkvPXf_LW0',
        description: locale === 'de'
          ? 'Die besten Einstiegsstrategien für den Optionshandel - Schritt für Schritt erklärt'
          : 'The best starter strategies for options trading - explained step by step',
        thumbnail: undefined
      },
      {
        title: locale === 'de' ? 'Fortgeschrittene Options Trading Strategien' : 'Advanced Options Trading Strategies',
        embedId: '7PM4rNDr4oI',
        description: locale === 'de'
          ? 'Komplexe Strategien und Techniken für erfahrene Trader'
          : 'Complex strategies and techniques for experienced traders',
        thumbnail: undefined
      }
    ]
  };

  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {locale === 'de'
                ? 'Über 45 wichtige Begriffe des Optionshandels einfach und verständlich erklärt. Von Grundlagen bis zu fortgeschrittenen Konzepten.'
                : 'Over 45 important options trading terms explained simply and clearly. From basics to advanced concepts.'}
            </p>

            {/* Search Bar with Live Results */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder={t('search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {/* Live Search Results Dropdown */}
              {searchTerm.length >= 2 && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-primary-200 max-h-96 overflow-y-auto z-50">
                  {filteredTerms.length > 0 ? (
                    <div className="p-2">
                      <div className="px-4 py-2 text-sm text-gray-500 font-medium border-b border-gray-200">
                        {filteredTerms.length} {locale === 'de' ? 'Ergebnisse gefunden' : 'results found'}
                      </div>
                      {filteredTerms.slice(0, 8).map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory(item.category);
                          }}
                          className="block px-4 py-3 hover:bg-primary-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-gray-900">{item.term}</span>
                            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                              {categories[item.category as keyof typeof categories]}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">{item.definition}</p>
                        </a>
                      ))}
                      {filteredTerms.length > 8 && (
                        <div className="px-4 py-2 text-sm text-primary-600 font-medium text-center">
                          {locale === 'de' ? `+ ${filteredTerms.length - 8} weitere Ergebnisse unten` : `+ ${filteredTerms.length - 8} more results below`}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-500">
                        {locale === 'de' ? 'Keine Begriffe gefunden' : 'No terms found'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  // Scroll to terms section after a small delay to allow state update
                  setTimeout(() => {
                    const termsSection = document.getElementById('glossary-terms');
                    if (termsSection) {
                      termsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="mb-8 text-center text-gray-600 text-lg">
            {filteredTerms.length} {locale === 'de' ? 'Begriffe gefunden' : 'terms found'}
          </div>

          {/* Educational Videos Section with Carousel */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2 text-center flex items-center justify-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-red-50 to-rose-100 rounded-lg flex items-center justify-center inline-flex flex-shrink-0">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              {locale === 'de' ? 'Lernvideos zum Optionshandel' : 'Options Trading Educational Videos'}
            </h2>
            <p className="text-center text-gray-600 mb-4">
              {locale === 'de'
                ? 'Schauen Sie sich diese Videos an, um die Konzepte besser zu verstehen'
                : 'Watch these videos to better understand the concepts'}
            </p>
            <p className="text-center text-sm text-primary-600 font-medium mb-8">
              {locale === 'de'
                ? `${videos.youtube.length} Videos verfügbar - Navigieren Sie mit den Pfeilen`
                : `${videos.youtube.length} videos available - Navigate with arrows`}
            </p>

            {/* Video Grid with Navigation */}
            <div className="relative">
              {/* Navigation Buttons */}
              {currentVideoIndex > 0 && (
                <button
                  onClick={() => setCurrentVideoIndex(Math.max(0, currentVideoIndex - 3))}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-50 transition-all duration-300 group border-2 border-primary-200"
                  aria-label={locale === 'de' ? 'Vorherige Videos' : 'Previous videos'}
                >
                  <svg className="w-6 h-6 text-primary-600 group-hover:text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {currentVideoIndex + 3 < videos.youtube.length && (
                <button
                  onClick={() => setCurrentVideoIndex(Math.min(videos.youtube.length - 3, currentVideoIndex + 3))}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-50 transition-all duration-300 group border-2 border-primary-200"
                  aria-label={locale === 'de' ? 'Nächste Videos' : 'Next videos'}
                >
                  <svg className="w-6 h-6 text-primary-600 group-hover:text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Video Grid - Show only 3 videos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videos.youtube.slice(currentVideoIndex, currentVideoIndex + 3).map((video, index) => (
                  <div key={currentVideoIndex + index} className="relative">
                    <VideoPlayer
                      videoId={video.embedId}
                      title={video.title}
                      description={video.description}
                      thumbnail={video.thumbnail}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: Math.ceil(videos.youtube.length / 3) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx * 3)}
                    className={`transition-all duration-300 ${
                      Math.floor(currentVideoIndex / 3) === idx
                        ? 'w-8 h-3 bg-primary-600 rounded-full'
                        : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-400'
                    }`}
                    aria-label={`${locale === 'de' ? 'Gehe zu Seite' : 'Go to page'} ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Video Counter */}
              <div className="text-center mt-4 text-sm text-gray-500">
                {locale === 'de' ? 'Zeige Videos' : 'Showing videos'} {currentVideoIndex + 1}-
                {Math.min(currentVideoIndex + 3, videos.youtube.length)} {locale === 'de' ? 'von' : 'of'} {videos.youtube.length}
              </div>
            </div>
          </div>

          {/* Quick Tips from TikTok Style Section */}
          <div className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2 text-center flex items-center justify-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center inline-flex flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              {locale === 'de' ? 'Schnelle Trading-Tipps' : 'Quick Trading Tips'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {locale === 'de'
                ? 'Kurze, prägnante Tipps für erfolgreiches Options-Trading'
                : 'Short, concise tips for successful options trading'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {locale === 'de' ? 'Tipp #1: Volatilität' : 'Tip #1: Volatility'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'de'
                    ? 'Verkaufe Optionen bei hoher IV, kaufe bei niedriger IV für bessere Gewinnchancen.'
                    : 'Sell options during high IV, buy during low IV for better profit chances.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {locale === 'de' ? 'Tipp #2: Zeitverfall' : 'Tip #2: Time Decay'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'de'
                    ? 'Theta arbeitet für dich als Optionsverkäufer. Nutze 30-45 Tage bis Verfall.'
                    : 'Theta works for you as an option seller. Use 30-45 days to expiration.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {locale === 'de' ? 'Tipp #3: Delta-Neutral' : 'Tip #3: Delta-Neutral'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'de'
                    ? 'Iron Condors mit Delta nahe 0 profitieren von Seitwärtsmärkten.'
                    : 'Iron Condors with Delta near 0 profit from sideways markets.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-rose-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {locale === 'de' ? 'Tipp #4: Risikomanagement' : 'Tip #4: Risk Management'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'de'
                    ? 'Riskiere nie mehr als 2-5% deines Kapitals pro Trade. Immer!'
                    : 'Never risk more than 2-5% of your capital per trade. Always!'}
                </p>
              </div>
            </div>
          </div>

          {/* Glossary Terms */}
          <div id="glossary-terms" className="space-y-6 scroll-mt-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg flex items-center justify-center inline-flex flex-shrink-0">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              {locale === 'de' ? 'Vollständiges Glossar' : 'Complete Glossary'}
            </h2>

            {filteredTerms.map((item, index) => (
              <div key={index} id={item.id} className="card hover:shadow-lg transition-all hover:scale-[1.01] scroll-mt-24">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {item.term}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium shrink-0 ml-4">
                    {categories[item.category as keyof typeof categories]}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600">
                {locale === 'de'
                  ? 'Keine Begriffe gefunden. Versuchen Sie eine andere Suche oder Kategorie.'
                  : 'No terms found. Try a different search or category.'}
              </p>
            </div>
          )}

          {/* Interactive Quiz Teaser */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              {locale === 'de' ? 'Teste dein Wissen!' : 'Test Your Knowledge!'}
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              {locale === 'de'
                ? 'Bist du bereit, dein Options-Wissen zu testen? Versuche, alle Begriffe zu lernen und werde zum Experten!'
                : 'Ready to test your options knowledge? Try to learn all terms and become an expert!'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{glossaryTerms.length}</div>
                <div className="text-sm">{locale === 'de' ? 'Begriffe' : 'Terms'}</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{Object.keys(categories).length - 1}</div>
                <div className="text-sm">{locale === 'de' ? 'Kategorien' : 'Categories'}</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{videos.youtube.length}</div>
                <div className="text-sm">{locale === 'de' ? 'Videos' : 'Videos'}</div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border-l-4 border-primary-600 rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {locale === 'de' ? 'Begriffe fehlen?' : 'Terms missing?'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Wir erweitern unser Glossar kontinuierlich. Wenn Sie einen wichtigen Begriff vermissen, kontaktieren Sie uns gerne über info@beinoptions.com'
                    : 'We continuously expand our glossary. If you miss an important term, please contact us at info@beinoptions.com'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
