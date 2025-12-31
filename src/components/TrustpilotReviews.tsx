'use client';

interface TrustpilotReviewsProps {
  locale: string;
}

// Real reviews from Trustpilot - manually updated
const reviews = {
  score: 4.0,
  totalReviews: 4,
  items: [
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

export default function TrustpilotReviews({ locale }: TrustpilotReviewsProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {reviews.items.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#00b67a] hover:shadow-lg transition-all"
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
                <p className="text-gray-600 mb-4 leading-relaxed">
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
            ))}

            {/* Placeholder cards for visual balance if few reviews */}
            {reviews.items.length < 3 && (
              <>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center min-h-[250px]">
                  <div className="w-12 h-12 rounded-full bg-[#00b67a]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#00b67a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">
                    {locale === 'de' ? 'Ihre Meinung zählt!' : 'Your opinion matters!'}
                  </p>
                  <p className="text-sm text-gray-400">
                    {locale === 'de' ? 'Teilen Sie Ihre Erfahrung' : 'Share your experience'}
                  </p>
                </div>
                {reviews.items.length < 2 && (
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center min-h-[250px]">
                    <div className="w-12 h-12 rounded-full bg-[#00b67a]/10 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#00b67a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">
                      {locale === 'de' ? 'Werden Sie Teil der Community' : 'Join the community'}
                    </p>
                    <p className="text-sm text-gray-400">
                      {locale === 'de' ? 'Helfen Sie anderen Tradern' : 'Help other traders'}
                    </p>
                  </div>
                )}
              </>
            )}
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
