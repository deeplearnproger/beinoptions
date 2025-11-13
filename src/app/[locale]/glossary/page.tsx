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

            {/* Search Bar */}
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
                onClick={() => setSelectedCategory(key)}
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
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2 text-center">
              {locale === 'de' ? '🎥 Lernvideos zum Optionshandel' : '🎥 Options Trading Educational Videos'}
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
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2 text-center">
              {locale === 'de' ? '💡 Schnelle Trading-Tipps' : '💡 Quick Trading Tips'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {locale === 'de'
                ? 'Kurze, prägnante Tipps für erfolgreiches Options-Trading'
                : 'Short, concise tips for successful options trading'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">⚡</div>
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
                <div className="text-4xl mb-3">📊</div>
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
                <div className="text-4xl mb-3">🎯</div>
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
                <div className="text-4xl mb-3">🛡️</div>
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
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              {locale === 'de' ? '📖 Vollständiges Glossar' : '📖 Complete Glossary'}
            </h2>

            {filteredTerms.map((item, index) => (
              <div key={index} className="card hover:shadow-lg transition-all hover:scale-[1.01]">
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
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">
                {locale === 'de'
                  ? 'Keine Begriffe gefunden. Versuchen Sie eine andere Suche oder Kategorie.'
                  : 'No terms found. Try a different search or category.'}
              </p>
            </div>
          )}

          {/* Interactive Quiz Teaser */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl mb-4">🎓</div>
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {locale === 'de' ? '💬 Begriffe fehlen?' : '💬 Terms missing?'}
            </h3>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Wir erweitern unser Glossar kontinuierlich. Wenn Sie einen wichtigen Begriff vermissen, kontaktieren Sie uns gerne über info@beinoptions.de'
                : 'We continuously expand our glossary. If you miss an important term, please contact us at info@beinoptions.de'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
