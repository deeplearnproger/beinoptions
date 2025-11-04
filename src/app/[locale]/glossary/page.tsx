'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function GlossaryPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('glossary');
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    { term: t('atm'), definition: t('atm_def'), category: 'basics' },
    { term: t('itm'), definition: t('itm_def'), category: 'basics' },
    { term: t('otm'), definition: t('otm_def'), category: 'basics' },
    { term: t('implied_volatility'), definition: t('implied_volatility_def'), category: 'advanced' },
    { term: t('theta'), definition: t('theta_def'), category: 'greeks' },
    { term: t('delta'), definition: t('delta_def'), category: 'greeks' },
    { term: t('gamma'), definition: t('gamma_def'), category: 'greeks' },
    { term: t('vega'), definition: t('vega_def'), category: 'greeks' },
    { term: t('assignment'), definition: t('assignment_def'), category: 'trading' },
  ];

  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = {
    basics: locale === 'de' ? 'Grundlagen' : 'Basics',
    greeks: locale === 'de' ? 'Griechen (Greeks)' : 'Greeks',
    advanced: locale === 'de' ? 'Fortgeschritten' : 'Advanced',
    trading: locale === 'de' ? 'Trading' : 'Trading',
  };

  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {locale === 'de'
                ? 'Alle wichtigen Begriffe des Optionshandels einfach erklärt.'
                : 'All important options trading terms explained simply.'}
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
        <div className="max-w-5xl mx-auto">
          {/* Results count */}
          <div className="mb-8 text-gray-600">
            {filteredTerms.length} {locale === 'de' ? 'Begriffe gefunden' : 'terms found'}
          </div>

          {/* Glossary Terms */}
          <div className="space-y-6">
            {filteredTerms.map((item, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    {item.term}
                  </h2>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
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
                  ? 'Keine Begriffe gefunden. Versuchen Sie eine andere Suche.'
                  : 'No terms found. Try a different search.'}
              </p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border-l-4 border-primary-600 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Begriffe fehlen?' : 'Terms missing?'}
            </h3>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Wir erweitern unser Glossar kontinuierlich. Wenn Sie einen wichtigen Begriff vermissen, kontaktieren Sie uns gerne.'
                : 'We continuously expand our glossary. If you miss an important term, please contact us.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
