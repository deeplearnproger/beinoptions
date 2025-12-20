'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'deeplearnproger/beinoptions');
    script.setAttribute('data-repo-id', 'R_kgDOQPPWyQ');
    script.setAttribute('data-category', 'News');
    script.setAttribute('data-category-id', 'DIC_kwDOQPPWyc4C0CHp');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', locale === 'de' ? 'de' : 'en');
    script.setAttribute('data-loading', 'lazy');

    ref.current.appendChild(script);
  }, [locale]);

  return (
    <div className="mt-16 relative">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-indigo-50 rounded-2xl -z-10" />

      {/* Основной контейнер */}
      <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-8 shadow-lg shadow-primary-100/50">
        {/* Заголовок секции */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {locale === 'de' ? 'Kommentare & Diskussion' : 'Comments & Discussion'}
            </h3>
            <p className="text-sm text-gray-500">
              {locale === 'de'
                ? 'Teilen Sie Ihre Gedanken mit der Community'
                : 'Share your thoughts with the community'}
            </p>
          </div>
        </div>

        {/* Разделитель */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
            <span className="w-1.5 h-1.5 bg-primary-300 rounded-full" />
            <span className="w-1.5 h-1.5 bg-primary-200 rounded-full" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
        </div>

        {/* Информационный блок */}
        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl mb-6 border border-primary-100">
          <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-gray-600">
            {locale === 'de'
              ? 'Um zu kommentieren, melden Sie sich mit Ihrem GitHub-Konto an. Ihre Kommentare werden als GitHub-Diskussionen gespeichert.'
              : 'To comment, sign in with your GitHub account. Your comments will be stored as GitHub discussions.'}
          </p>
        </div>

        {/* Giscus контейнер */}
        <div ref={ref} className="giscus-wrapper" />

        {/* Футер */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>{locale === 'de' ? 'Unterstützt von' : 'Powered by'} Giscus & GitHub Discussions</span>
        </div>
      </div>
    </div>
  );
}
