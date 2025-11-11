'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface LibertexBannerProps {
  locale: string;
}

const bannerVariants = [
  {
    gradient: 'from-blue-600 via-blue-700 to-indigo-800',
    titleKey: 'banner1.title',
    subtitleKey: 'banner1.subtitle',
    icon: '🚀',
    accentColor: 'bg-yellow-400',
  },
  {
    gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
    titleKey: 'banner2.title',
    subtitleKey: 'banner2.subtitle',
    icon: '⭐',
    accentColor: 'bg-orange-400',
  },
  {
    gradient: 'from-purple-600 via-violet-700 to-fuchsia-800',
    titleKey: 'banner3.title',
    subtitleKey: 'banner3.subtitle',
    icon: '💎',
    accentColor: 'bg-pink-400',
  },
];

export default function LibertexBanner({ locale }: LibertexBannerProps) {
  const t = useTranslations('libertexBanner');
  const [showBanner, setShowBanner] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user came from external source
    const isExternalTraffic = () => {
      const referrer = document.referrer;
      const currentDomain = window.location.hostname;

      // Show banner if:
      // 1. No referrer (direct visit)
      // 2. Referrer is from different domain
      if (!referrer || !referrer.includes(currentDomain)) {
        return true;
      }
      return false;
    };

    // Check if banner was already shown in this session
    const bannerShown = sessionStorage.getItem('libertex_banner_shown');

    if (isExternalTraffic() && !bannerShown) {
      // Randomly select a banner variant
      const randomVariant = Math.floor(Math.random() * bannerVariants.length);
      setCurrentVariant(randomVariant);

      // Show banner after a short delay for smooth animation
      setTimeout(() => {
        setShowBanner(true);
      }, 500);

      // Mark as shown in session
      sessionStorage.setItem('libertex_banner_shown', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  if (!showBanner) return null;

  const variant = bannerVariants[currentVariant];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className={`bg-gradient-to-r ${variant.gradient} text-white shadow-2xl`}>
        <div className="container-custom py-4 px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Icon and Content */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {/* Animated Icon */}
              <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm animate-pulse">
                <span className="text-4xl">{variant.icon}</span>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`${variant.accentColor} text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {t('badge')}
                  </span>
                  <div className="hidden md:flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-sm ml-1 font-semibold">4.9</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 truncate">
                  {t(variant.titleKey)}
                </h3>

                <p className="text-sm sm:text-base text-white/90 line-clamp-1 sm:line-clamp-2">
                  {t(variant.subtitleKey)}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://libertex.com/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group relative overflow-hidden bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
                aria-label={t('close')}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Features Strip */}
          <div className="hidden lg:flex items-center justify-center gap-8 mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('feature4')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
