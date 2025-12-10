'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import AnimatedLogo from './AnimatedLogo';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  // Structured navigation categories for mega menu
  const learnCategories = [
    {
      title: locale === 'de' ? 'Grundlagen' : 'Fundamentals',
      items: [
        {
          name: locale === 'de' ? 'Anfänger Guide' : 'Beginners Guide',
          href: `/${locale}/options-beginners-guide`,
          description: locale === 'de' ? 'Von Null zum ersten Trade' : 'Zero to first trade',
        },
        {
          name: t('basics'),
          href: `/${locale}/basics`,
          description: locale === 'de' ? 'Grundkonzepte' : 'Core concepts',
        },
        {
          name: locale === 'de' ? 'Greeks erklärt' : 'Greeks Explained',
          href: `/${locale}/greeks-explained`,
          description: locale === 'de' ? 'Delta, Gamma, Theta, Vega' : 'Delta, Gamma, Theta, Vega',
        },
        {
          name: locale === 'de' ? 'Options Chain' : 'Options Chain',
          href: `/${locale}/options-chain-guide`,
          description: locale === 'de' ? 'Bid, Ask, OI verstehen' : 'Bid, Ask, OI explained',
        },
        {
          name: locale === 'de' ? 'Assignment' : 'Assignment',
          href: `/${locale}/options-assignment`,
          description: locale === 'de' ? 'Verfall & Ausübung' : 'Expiration & exercise',
        },
      ],
    },
    {
      title: locale === 'de' ? 'Strategien' : 'Strategies',
      items: [
        {
          name: t('strategies'),
          href: `/${locale}/strategies`,
          description: locale === 'de' ? 'Alle Strategien' : 'All strategies',
          isMain: true,
        },
        {
          name: 'Covered Call',
          href: `/${locale}/covered-call-strategy`,
          description: locale === 'de' ? 'Einkommens-Strategie' : 'Income strategy',
        },
        {
          name: 'Cash-Secured Put',
          href: `/${locale}/cash-secured-put`,
          description: locale === 'de' ? 'Prämien kassieren' : 'Collect premiums',
        },
        {
          name: 'Iron Condor',
          href: `/${locale}/iron-condor-strategy`,
          description: locale === 'de' ? 'Für Seitwärtsmärkte' : 'For sideways markets',
        },
        {
          name: 'Long Call & Put',
          href: `/${locale}/long-call-put`,
          description: locale === 'de' ? 'Grundstrategie' : 'Basic strategy',
        },
        {
          name: 'Spreads Guide',
          href: `/${locale}/spreads-guide`,
          description: locale === 'de' ? 'Bull & Bear Spreads' : 'Bull & Bear Spreads',
        },
        {
          name: 'Butterfly',
          href: `/${locale}/butterfly-strategy`,
          description: locale === 'de' ? 'Fortgeschrittene Strategie' : 'Advanced strategy',
        },
      ],
    },
    {
      title: locale === 'de' ? 'Praxis & Lernen' : 'Practice & Learning',
      items: [
        {
          name: 'Paper Trading',
          href: `/${locale}/paper-trading`,
          description: locale === 'de' ? 'Risikofrei üben' : 'Practice risk-free',
        },
        {
          name: 'Trading Journal',
          href: `/${locale}/trading-journal`,
          description: locale === 'de' ? 'Erfolg dokumentieren' : 'Document success',
        },
        {
          name: locale === 'de' ? 'Trading Fehler' : 'Trading Mistakes',
          href: `/${locale}/options-mistakes`,
          description: locale === 'de' ? '10 Fehler vermeiden' : '10 mistakes to avoid',
        },
        {
          name: t('risks'),
          href: `/${locale}/risks`,
          description: locale === 'de' ? 'Risikomanagement' : 'Risk management',
        },
      ],
    },
    {
      title: locale === 'de' ? 'Wissen & Regulierung' : 'Knowledge & Regulation',
      items: [
        {
          name: t('crypto_options'),
          href: `/${locale}/crypto-options`,
          description: locale === 'de' ? 'Krypto Trading' : 'Crypto trading',
        },
        {
          name: t('regulation'),
          href: `/${locale}/regulation`,
          description: locale === 'de' ? 'Rechtlicher Rahmen' : 'Legal framework',
        },
        {
          name: t('taxes'),
          href: `/${locale}/taxes`,
          description: locale === 'de' ? 'Steuerinformationen' : 'Tax information',
        },
      ],
    },
  ];

  const resourcesItems = [
    {
      name: t('glossary'),
      href: `/${locale}/glossary`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: 'Terms & definitions',
    },
    {
      name: t('tutorials'),
      href: `/${locale}/tutorials`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Step-by-step guides',
    },
    {
      name: t('faq'),
      href: `/${locale}/faq`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Common questions',
    },
    {
      name: t('about'),
      href: `/${locale}/about`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Our story & mission',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="group">
            <AnimatedLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href={`/${locale}`}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all"
            >
              {t('home')}
            </Link>

            {/* Learn Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setLearnDropdownOpen(true)}
              onMouseLeave={() => setLearnDropdownOpen(false)}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all flex items-center gap-1">
                {t('learn')}
                <svg
                  className={`w-4 h-4 transition-transform ${learnDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {learnDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[900px]">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-2 left-0 right-0 h-4"></div>
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 animate-fadeIn">
                    <div className="grid grid-cols-5 gap-4">
                      {learnCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {category.title}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors group/item ${
                                  item.isMain ? 'bg-primary-50 border border-primary-200' : ''
                                }`}
                              >
                                <div className={`text-sm font-medium group-hover/item:text-primary-600 transition-colors ${
                                  item.isMain ? 'text-primary-700' : 'text-gray-900'
                                }`}>
                                  {item.name}
                                  {item.isMain && (
                                    <span className="ml-2 text-xs bg-primary-600 text-white px-1.5 py-0.5 rounded">
                                      {locale === 'de' ? 'Übersicht' : 'Overview'}
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/brokers`}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all"
            >
              {t('brokers')}
            </Link>

            <Link
              href={`/${locale}/tools`}
              className="relative px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-all"
            >
              <span className="flex items-center gap-1.5">
                Tools
                <svg className="w-3.5 h-3.5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all flex items-center gap-1">
                {t('resources')}
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {resourcesDropdownOpen && (
                <div className="absolute right-0 top-full pt-2 w-72">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-2 left-0 right-0 h-4"></div>
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-fadeIn">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-primary-50 transition-colors group/item"
                      >
                        <div className="flex-shrink-0 text-gray-400 group-hover/item:text-primary-600 transition-colors mt-0.5">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/blog`}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all"
            >
              {t('blog')}
            </Link>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 max-h-[70vh] overflow-y-auto">
            <Link
              href={`/${locale}`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>

            {/* Learn Section - Structured by Categories */}
            {learnCategories.map((category) => (
              <div key={category.title} className="mt-4">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {category.title}
                </div>
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors ${
                      item.isMain ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.isMain && (
                      <span className="ml-2 text-xs bg-primary-600 text-white px-1.5 py-0.5 rounded">
                        {locale === 'de' ? 'Übersicht' : 'Overview'}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}

            <Link
              href={`/${locale}/brokers`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('brokers')}
            </Link>

            <Link
              href={`/${locale}/tools`}
              className="flex items-center gap-2 px-3 py-2 text-base font-medium text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Tools</span>
              <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Link>

            {/* Resources Section */}
            <div className="mt-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t('resources')}
              </div>
              {resourcesItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="text-gray-400">{item.icon}</div>
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href={`/${locale}/blog`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('blog')}
            </Link>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
