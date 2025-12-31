'use client';

import { useState, useEffect } from 'react';

interface TrustpilotReviewsProps {
  locale: string;
}

// Real reviews from Trustpilot - https://www.trustpilot.com/review/www.beinoptions.com
const reviews = {
  score: 5.0,
  totalReviews: 4,
  items: [
    {
      author: 'Natalia',
      rating: 5,
      date: '2024-12-28',
      title: {
        de: 'Die Seite wirkt seriös und durchdacht',
        en: 'The site looks professional and well thought out',
      },
      text: {
        de: 'Ich habe lange nach verständlichen Infos zu Optionenhandel in Deutschland gesucht und bin hier fündig geworden. Ohne Marketing-Gerede, dafür mit relevanten Informationen und aktuellen Themen. Die Seite wirkt seriös und durchdacht, schaue definitiv wieder vorbei.',
        en: 'I was looking for understandable information about options trading in Germany for a long time and found it here. No marketing talk, but relevant information and current topics. The site looks professional and well thought out, will definitely visit again.',
      },
    },
    {
      author: 'Julie',
      rating: 5,
      date: '2024-12-27',
      title: {
        de: 'Sehr gute Plattform',
        en: 'Very good platform',
      },
      text: {
        de: 'Sehr gute Plattform, wenn man etwas über Optionen lernen möchte. Klare Anleitungen und viele interessante Neuigkeiten.',
        en: 'Very good platform if you want to learn about options. Clear guide and a lot of interesting news.',
      },
    },
    {
      author: 'Daria C',
      rating: 5,
      date: '2024-12-26',
      title: {
        de: 'Info über Optionen in Deutschland',
        en: 'Info about options in Germany',
      },
      text: {
        de: 'Ich habe Info über Optionen in DE gesucht, bin auf diese Webseite gelandet. Gut für Anfänger wie ich selbst, alle nötige Infos sind da, auch News oder Strategien. Habe auch P/L Simulator ausprobiert, wirklich cool, auch wenn etwas mehr Anleitung hilfreich wäre. Insgesamt top, ich habe keine echte Alternative gefunden!',
        en: 'I was looking for info about options in Germany and landed on this website. Good for beginners like myself, all necessary info is there, also news and strategies. Also tried the P/L Simulator, really cool, even if a bit more guidance would be helpful. Overall top, I haven\'t found a real alternative!',
      },
    },
    {
      author: 'Ant Cherk',
      rating: 5,
      date: '2024-12-03',
      title: {
        de: 'Eine wirklich hilfreiche Website rund um Optionen',
        en: 'A really helpful website about options',
      },
      text: {
        de: 'Eine wirklich hilfreiche Website rund um Optionen. Besonders die Informationen zu Regulierung und Besteuerung sind übersichtlich und verständlich erklärt. Sehr nützlich sind auch der Rechner und das Broker-Ranking. Zudem ist der Support ausgesprochen freundlich. Klare Empfehlung.',
        en: 'A really helpful website about options. Especially the information on regulation and taxation is clearly and understandably explained. The calculator and broker ranking are also very useful. In addition, the support is extremely friendly. Clear recommendation.',
      },
    },
  ],
};

// Star rating with Trustpilot green color
function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'bg-[#00b67a]' : 'bg-[#dcdce6]'}`}
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        />
      ))}
    </div>
  );
}

// Single review card component
function ReviewCard({
  review,
  locale,
  isActive
}: {
  review: typeof reviews.items[0];
  locale: string;
  isActive: boolean;
}) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      className={`absolute inset-0 bg-white rounded-xl p-6 border border-gray-200 transition-all duration-500 ${
        isActive
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
      }`}
    >
      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      {/* Title */}
      <h4 className="font-bold text-gray-900 mb-2 text-lg">
        {locale === 'de' ? review.title.de : review.title.en}
      </h4>

      {/* Text */}
      <p className="text-gray-600 mb-4 leading-relaxed min-h-[72px]">
        {locale === 'de' ? review.text.de : review.text.en}
      </p>

      {/* Author & Date */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#00b67a] flex items-center justify-center text-white font-bold text-sm">
            {review.author.charAt(0)}
          </div>
          <span className="font-medium text-gray-900">{review.author}</span>
        </div>
        <span className="text-sm text-gray-400">{formatDate(review.date)}</span>
      </div>
    </div>
  );
}

export default function TrustpilotReviews({ locale }: TrustpilotReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Das sagen unsere Nutzer' : 'What Our Users Say'}
            </h2>

            {/* Trustpilot Score Card */}
            <div className="inline-flex items-center gap-6 bg-gray-50 rounded-2xl px-8 py-6 border border-gray-100">
              {/* Trustpilot Logo */}
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.9 8.6L22 9.3L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.3L9.1 8.6L12 2Z" fill="#00b67a"/>
                </svg>
                <span className="text-xl font-bold text-[#191919]">Trustpilot</span>
              </div>

              <div className="w-px h-12 bg-gray-200" />

              {/* Rating */}
              <div className="text-center">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-4xl font-bold text-gray-900">{reviews.score.toFixed(1)}</span>
                  <StarRating rating={Math.round(reviews.score)} size="lg" />
                </div>
                <p className="text-sm text-gray-500">
                  {locale === 'de'
                    ? `Basierend auf ${reviews.totalReviews} Bewertungen`
                    : `Based on ${reviews.totalReviews} reviews`}
                </p>
              </div>
            </div>
          </div>

          {/* Review Carousel */}
          <div className="mb-10">
            <div
              className="relative h-[280px] max-w-lg mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {reviews.items.map((review, index) => (
                <ReviewCard
                  key={index}
                  review={review}
                  locale={locale}
                  isActive={index === activeIndex}
                />
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {reviews.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#00b67a] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.trustpilot.com/review/beinoptions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#00b67a] hover:text-[#00b67a] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.9 8.6L22 9.3L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.3L9.1 8.6L12 2Z"/>
              </svg>
              {locale === 'de' ? 'Alle Bewertungen auf Trustpilot' : 'All reviews on Trustpilot'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="https://www.trustpilot.com/evaluate/beinoptions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b67a] text-white rounded-xl font-semibold hover:bg-[#00a06a] transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {locale === 'de' ? 'Bewertung schreiben' : 'Write a review'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
