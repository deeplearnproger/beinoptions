'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ============================================
// TYPES
// ============================================
interface ArticleItem {
  slug: string;
  titleDe: string;
  titleEn: string;
  descDe: string;
  descEn: string;
  category: string;
}

// ============================================
// Articles Carousel Component
// ============================================
export function ArticlesCarousel({ locale }: { locale: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const articles: ArticleItem[] = [
    {
      slug: 'put-vs-call-optionen',
      titleDe: 'Put vs Call Optionen',
      titleEn: 'Put vs Call Options',
      descDe: 'Detaillierter Vergleich der beiden Optionstypen',
      descEn: 'Detailed comparison of the two option types',
      category: 'Grundlagen',
    },
    {
      slug: 'options-cfds-teil-1',
      titleDe: 'Options CFDs Teil 1',
      titleEn: 'Options CFDs Part 1',
      descDe: 'Einführung in Options-CFDs',
      descEn: 'Introduction to Options CFDs',
      category: 'CFDs',
    },
    {
      slug: 'options-cfds-teil-2',
      titleDe: 'Options CFDs Teil 2',
      titleEn: 'Options CFDs Part 2',
      descDe: 'Strategien mit Options-CFDs',
      descEn: 'Strategies with Options CFDs',
      category: 'CFDs',
    },
    {
      slug: 'options-cfds-teil-3',
      titleDe: 'Options CFDs Teil 3',
      titleEn: 'Options CFDs Part 3',
      descDe: 'Fortgeschrittene Options-CFD Techniken',
      descEn: 'Advanced Options CFD techniques',
      category: 'CFDs',
    },
    {
      slug: 'options-trading-guide',
      titleDe: 'Options Trading Guide',
      titleEn: 'Options Trading Guide',
      descDe: 'Kompletter Leitfaden für den Optionshandel',
      descEn: 'Complete guide to options trading',
      category: 'Guide',
    },
    {
      slug: 'bitcoin-optionen-volatilitaet',
      titleDe: 'Bitcoin Optionen & Volatilität',
      titleEn: 'Bitcoin Options & Volatility',
      descDe: 'Wie Volatilität Bitcoin-Optionen beeinflusst',
      descEn: 'How volatility affects Bitcoin options',
      category: 'Krypto',
    },
    {
      slug: 'optionen-einnahmen-strategien',
      titleDe: 'Einnahmen-Strategien',
      titleEn: 'Income Strategies',
      descDe: 'Regelmäßige Einnahmen mit Optionen generieren',
      descEn: 'Generate regular income with options',
      category: 'Strategien',
    },
    {
      slug: 'fed-zinssenkung-optionen',
      titleDe: 'Fed Zinssenkung & Optionen',
      titleEn: 'Fed Rate Cuts & Options',
      descDe: 'Wie Zinsentscheidungen Optionen beeinflussen',
      descEn: 'How rate decisions affect options',
      category: 'Markt',
    },
    {
      slug: 'zero-day-options-0dte',
      titleDe: '0DTE Optionen',
      titleEn: '0DTE Options',
      descDe: 'Zero-Day-to-Expiration Optionen erklärt',
      descEn: 'Zero-Day-to-Expiration options explained',
      category: 'Fortgeschritten',
    },
    {
      slug: 'understanding-the-greeks',
      titleDe: 'Die Griechen verstehen',
      titleEn: 'Understanding the Greeks',
      descDe: 'Delta, Gamma, Theta, Vega erklärt',
      descEn: 'Delta, Gamma, Theta, Vega explained',
      category: 'Grundlagen',
    },
    {
      slug: 'covered-call-step-by-step',
      titleDe: 'Covered Call Schritt für Schritt',
      titleEn: 'Covered Call Step by Step',
      descDe: 'Die beliebteste Einkommensstrategie',
      descEn: 'The most popular income strategy',
      category: 'Strategien',
    },
    {
      slug: 'understanding-using-volatility',
      titleDe: 'Volatilität verstehen',
      titleEn: 'Understanding Volatility',
      descDe: 'Implizite vs. historische Volatilität',
      descEn: 'Implied vs. historical volatility',
      category: 'Fortgeschritten',
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-1 -mx-1 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${locale}/blog/${article.slug}`}
            className="group flex-shrink-0 w-72 snap-start"
          >
            <div className="bg-white rounded-2xl p-5 border border-slate-200 h-full transition-all group-hover:shadow-lg group-hover:border-slate-300 group-hover:-translate-y-1">
              <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md mb-3">
                {article.category}
              </span>
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {locale === 'de' ? article.titleDe : article.titleEn}
              </h4>
              <p className="text-sm text-slate-500 line-clamp-2">
                {locale === 'de' ? article.descDe : article.descEn}
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                <span>{locale === 'de' ? 'Lesen' : 'Read'}</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-4 gap-1">
        <div className={`h-1 w-8 rounded-full transition-colors ${canScrollLeft ? 'bg-slate-200' : 'bg-slate-400'}`} />
        <div className={`h-1 w-8 rounded-full transition-colors ${!canScrollLeft && !canScrollRight ? 'bg-slate-400' : canScrollLeft && canScrollRight ? 'bg-slate-400' : 'bg-slate-200'}`} />
        <div className={`h-1 w-8 rounded-full transition-colors ${canScrollRight ? 'bg-slate-200' : 'bg-slate-400'}`} />
      </div>
    </div>
  );
}

// ============================================
// TYPES
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface GlossaryItem {
  term: string;
  definition: string;
}

interface TOCItem {
  id: string;
  title: string;
}

// ============================================
// FAQ Accordion Component
// ============================================
export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-slate-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-slate-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// Glossary Accordion Component
// ============================================
export function GlossaryAccordion({ items }: { items: GlossaryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            className="w-full px-5 py-3 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-slate-800">{item.term}</span>
            <svg
              className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 text-slate-600 text-sm">
              {item.definition}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// Table of Contents Sidebar
// ============================================
export function TOCSidebar({ items, locale }: { items: TOCItem[]; locale: string }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Table of Contents */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
            {locale === 'de' ? 'Inhalt' : 'Contents'}
          </h4>
          <nav className="space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block py-1.5 px-3 rounded-lg text-sm transition-colors ${
                  activeId === item.id
                    ? 'bg-amber-100 text-amber-900 font-medium'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Quick Tools */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white">
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">
            {locale === 'de' ? 'Schnell-Tools' : 'Quick Tools'}
          </h4>
          <div className="space-y-2">
            <Link
              href={`/${locale}/tools/payoff`}
              className="flex items-center gap-2 py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>{locale === 'de' ? 'Payoff-Rechner' : 'Payoff Calculator'}</span>
            </Link>
            <Link
              href={`/${locale}/tools/pl`}
              className="flex items-center gap-2 py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{locale === 'de' ? 'P/L-Rechner' : 'P/L Calculator'}</span>
            </Link>
            <Link
              href={`/${locale}/tools/iv`}
              className="flex items-center gap-2 py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>{locale === 'de' ? 'IV-Rechner' : 'IV Calculator'}</span>
            </Link>
          </div>
        </div>

        {/* Newsletter Widget */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-5 text-white">
          <h4 className="font-bold mb-2">
            {locale === 'de' ? 'Newsletter' : 'Newsletter'}
          </h4>
          <p className="text-amber-100 text-sm mb-4">
            {locale === 'de'
              ? 'Wöchentliche Options-Tipps direkt in dein Postfach.'
              : 'Weekly options tips straight to your inbox.'}
          </p>
          <Link
            href={`/${locale}/newsletter`}
            className="block w-full py-2 px-4 bg-white text-amber-600 rounded-lg font-medium text-center hover:bg-amber-50 transition-colors text-sm"
          >
            {locale === 'de' ? 'Anmelden' : 'Subscribe'}
          </Link>
        </div>
      </div>
    </aside>
  );
}
