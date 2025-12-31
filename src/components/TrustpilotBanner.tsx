'use client';

interface TrustpilotBannerProps {
  locale: string;
}

export default function TrustpilotBanner({ locale }: TrustpilotBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#00b67a] via-[#00a870] to-[#009060] py-10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Message */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.9 8.6L22 9.3L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.3L9.1 8.6L12 2Z"/>
              </svg>
              <span className="text-2xl font-bold text-white">Trustpilot</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {locale === 'de'
                ? 'Gefällt Ihnen BeInOptions?'
                : 'Do you like BeInOptions?'}
            </h3>
            <p className="text-white/90 text-lg">
              {locale === 'de'
                ? 'Teilen Sie Ihre Erfahrung und helfen Sie anderen Tradern!'
                : 'Share your experience and help other traders!'}
            </p>
          </div>

          {/* Right side - Stars & CTA */}
          <div className="flex flex-col items-center gap-4">
            {/* Animated Stars */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-10 h-10 bg-white transform hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    animationDelay: `${star * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Review Button */}
            <a
              href="https://www.trustpilot.com/evaluate/beinoptions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#00b67a] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {locale === 'de' ? 'Jetzt bewerten' : 'Rate us now'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
