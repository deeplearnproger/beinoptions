'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function BrokersPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('brokers');
  const [sortBy, setSortBy] = useState<'rating' | 'fees'>('rating');

  const brokers = [
    {
      name: 'Interactive Brokers',
      regulation: 'BaFin, SEC, FCA',
      fees: locale === 'de' ? 'ab 0,65 € pro Kontrakt' : 'from €0.65 per contract',
      minDeposit: '0 €',
      options: locale === 'de' ? 'Ja, umfangreich' : 'Yes, comprehensive',
      rating: 4.8,
      pros: locale === 'de'
        ? ['Niedrige Gebühren', 'Große Produktauswahl', 'Professionelle Plattform']
        : ['Low fees', 'Wide product range', 'Professional platform'],
      cons: locale === 'de'
        ? ['Komplex für Anfänger', 'Inaktivitätsgebühr unter 100.000$']
        : ['Complex for beginners', 'Inactivity fee under $100,000'],
    },
    {
      name: 'TradeRepublic',
      regulation: 'BaFin',
      fees: locale === 'de' ? '1 € pro Trade' : '€1 per trade',
      minDeposit: '0 €',
      options: locale === 'de' ? 'Eingeschränkt' : 'Limited',
      rating: 4.2,
      pros: locale === 'de'
        ? ['Sehr einfache Bedienung', 'Deutsche App', 'Kostenlose Depotführung']
        : ['Very easy to use', 'German app', 'Free custody'],
      cons: locale === 'de'
        ? ['Begrenzte Optionsauswahl', 'Nur mobil optimiert', 'Keine komplexen Strategien']
        : ['Limited options selection', 'Mobile only', 'No complex strategies'],
    },
    {
      name: 'Consorsbank',
      regulation: 'BaFin, BNP Paribas',
      fees: locale === 'de' ? 'ab 4,95 € + 0,25% vom Ordervolumen' : 'from €4.95 + 0.25% of order volume',
      minDeposit: '0 €',
      options: locale === 'de' ? 'Ja, gut' : 'Yes, good',
      rating: 4.3,
      pros: locale === 'de'
        ? ['Deutsche Bank', 'Umfangreicher Support', 'Trader-Ausbildung']
        : ['German bank', 'Comprehensive support', 'Trader education'],
      cons: locale === 'de'
        ? ['Höhere Gebühren', 'Weniger moderne Plattform']
        : ['Higher fees', 'Less modern platform'],
    },
    {
      name: 'LYNX Broker',
      regulation: 'BaFin, AFM',
      fees: locale === 'de' ? 'ab 2 € pro Kontrakt' : 'from €2 per contract',
      minDeposit: '0 €',
      options: locale === 'de' ? 'Ja, umfangreich' : 'Yes, comprehensive',
      rating: 4.5,
      pros: locale === 'de'
        ? ['Deutscher Support', 'Interactive Brokers Technologie', 'Gute Bildungsressourcen']
        : ['German support', 'Interactive Brokers technology', 'Good educational resources'],
      cons: locale === 'de'
        ? ['Höhere Gebühren als IB direkt', 'Mindestaktivität erforderlich']
        : ['Higher fees than IB direct', 'Minimum activity required'],
    },
    {
      name: 'DEGIRO',
      regulation: 'BaFin, AFM',
      fees: locale === 'de' ? 'ab 0,75 € pro Kontrakt' : 'from €0.75 per contract',
      minDeposit: '0 €',
      options: locale === 'de' ? 'Ja, mittel' : 'Yes, medium',
      rating: 4.1,
      pros: locale === 'de'
        ? ['Niedrige Gebühren', 'Benutzerfreundlich', 'EU-reguliert']
        : ['Low fees', 'User-friendly', 'EU-regulated'],
      cons: locale === 'de'
        ? ['Begrenzte Optionsstrategien', 'Kein telefonischer Support']
        : ['Limited options strategies', 'No phone support'],
    },
  ];

  const sortedBrokers = [...brokers].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {locale === 'de'
                ? 'Finden Sie den passenden Broker für Ihren Optionshandel in Deutschland. Vergleichen Sie Gebühren, Regulierung und Leistungen.'
                : 'Find the right broker for your options trading in Germany. Compare fees, regulation and services.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-7xl mx-auto">
          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              {t('comparison')}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {locale === 'de' ? 'Sortieren nach:' : 'Sort by:'}
              </span>
              <button
                onClick={() => setSortBy('rating')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'rating'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('rating')}
              </button>
              <button
                onClick={() => setSortBy('fees')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'fees'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('fees')}
              </button>
            </div>
          </div>

          {/* Broker Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {sortedBrokers.map((broker, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {broker.name}
                  </h3>
                  <div className="flex items-center bg-financial-gold/20 px-3 py-1 rounded-full">
                    <span className="text-financial-gold text-lg mr-1">★</span>
                    <span className="font-semibold text-gray-900">{broker.rating}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{t('regulation')}:</span>
                    <span className="font-medium text-gray-900">{broker.regulation}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{t('fees')}:</span>
                    <span className="font-medium text-gray-900">{broker.fees}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{t('min_deposit')}:</span>
                    <span className="font-medium text-gray-900">{broker.minDeposit}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{t('options')}:</span>
                    <span className="font-medium text-gray-900">{broker.options}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-financial-green mb-2">
                      {locale === 'de' ? 'Vorteile:' : 'Pros:'}
                    </h4>
                    <ul className="space-y-1">
                      {broker.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-financial-green mr-2">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-financial-red mb-2">
                      {locale === 'de' ? 'Nachteile:' : 'Cons:'}
                    </h4>
                    <ul className="space-y-1">
                      {broker.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-financial-red mr-2">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selection Guide */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'So wählen Sie den richtigen Broker' : 'How to Choose the Right Broker'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Für Anfänger' : 'For Beginners'}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Einfache Bedienung, guter Support und Bildungsressourcen sind wichtiger als die niedrigsten Gebühren.'
                    : 'Easy operation, good support and educational resources are more important than the lowest fees.'}
                </p>
                <p className="text-sm font-medium text-primary-600">
                  → TradeRepublic, Consorsbank
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Für Aktive Trader' : 'For Active Traders'}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Niedrige Gebühren, professionelle Tools und große Produktauswahl sind entscheidend.'
                    : 'Low fees, professional tools and wide product range are crucial.'}
                </p>
                <p className="text-sm font-medium text-primary-600">
                  → Interactive Brokers, LYNX
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Für Sicherheitsbewusste' : 'For Security-Conscious'}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'BaFin-Regulierung, deutsche Bank und umfassende Einlagensicherung stehen im Vordergrund.'
                    : 'BaFin regulation, German bank and comprehensive deposit insurance are paramount.'}
                </p>
                <p className="text-sm font-medium text-primary-600">
                  → Consorsbank, LYNX Broker
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-blue-50 border-l-4 border-primary-600 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Wichtige Hinweise' : 'Important Notes'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>
                  {locale === 'de'
                    ? 'Alle genannten Broker sind reguliert und bieten Einlagensicherung'
                    : 'All mentioned brokers are regulated and offer deposit insurance'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>
                  {locale === 'de'
                    ? 'Gebühren können sich ändern - prüfen Sie die aktuellen Konditionen auf der Broker-Website'
                    : 'Fees may change - check current conditions on the broker website'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>
                  {locale === 'de'
                    ? 'Für Optionshandel ist oft eine Eignungsprüfung erforderlich'
                    : 'Options trading often requires a suitability assessment'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
