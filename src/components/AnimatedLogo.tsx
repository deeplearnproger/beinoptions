'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface AnimatedLogoProps {
  className?: string;
  showIcon?: boolean;
}

export default function AnimatedLogo({ className = '', showIcon = true }: AnimatedLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount with slight delay for smoother effect
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Logo Icon with gradient animation */}
      {showIcon && (
        <div className="relative">
          {/* Christmas Hat */}
          <div
            className={`
              absolute -top-3 -right-3 z-20 w-9 h-9
              transition-all duration-700
              group-hover:scale-110
              ${isLoaded ? 'opacity-100 rotate-[15deg]' : 'opacity-0 rotate-45'}
            `}
            style={{ transitionDelay: '500ms' }}
          >
            <Image
              src="/logos/christmas-hat.png"
              alt="Christmas Hat"
              width={36}
              height={36}
              className="object-contain drop-shadow-md"
            />
          </div>

          <div
            className={`
              w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg
              flex items-center justify-center relative overflow-hidden
              transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]
              group-hover:scale-110 group-hover:shadow-lg
              ${isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'}
            `}
          >
            {/* Animated gradient overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-tl from-primary-600 to-primary-800
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            />

            {/* Shine effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 ease-out"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)',
                transform: 'translateX(-100%)',
              }}
            />

            <span className="text-white font-bold text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
              B
            </span>
          </div>
        </div>
      )}

      {/* Animated Text Logo */}
      <div className="font-heading font-bold text-xl text-gray-900 flex items-baseline select-none">
        {/* "Be" */}
        <span
          className={`
            inline-block transition-all duration-500
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
          `}
          style={{ transitionDelay: '100ms' }}
        >
          Be
        </span>

        {/* "In" with underline */}
        <span
          className={`
            inline-block mx-1.5 relative
            transition-all duration-500
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
          `}
          style={{ transitionDelay: '200ms' }}
        >
          In
          {/* Underline */}
          <span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
            style={{
              width: isLoaded ? '100%' : '0%',
              transition: 'width 500ms ease-out',
              transitionDelay: '400ms',
            }}
          />
        </span>

        {/* "Options" */}
        <span
          className={`
            inline-block transition-all duration-500
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
          `}
          style={{ transitionDelay: '300ms' }}
        >
          Options
        </span>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .group:hover .absolute.inset-0.opacity-0.group-hover\\:opacity-30 {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
