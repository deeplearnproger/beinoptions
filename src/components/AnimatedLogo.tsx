'use client';

import { useEffect, useState } from 'react';

interface AnimatedLogoProps {
  className?: string;
  showIcon?: boolean;
}

export default function AnimatedLogo({ className = '', showIcon = true }: AnimatedLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  useEffect(() => {
    // Trigger animation on mount with slight delay for smoother effect
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Logo Icon with gradient animation */}
      {showIcon && (
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
      )}

      {/* Animated Text Logo */}
      <div className="font-heading font-bold text-xl text-gray-900 flex items-baseline select-none">
        {/* "Be" - First word */}
        <span
          className={`
            inline-block transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]
            cursor-pointer relative
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
            ${hoveredPart === 'be' ? 'text-primary-600 scale-105' : ''}
          `}
          style={{
            transitionDelay: '100ms',
          }}
          onMouseEnter={() => setHoveredPart('be')}
          onMouseLeave={() => setHoveredPart(null)}
        >
          Be
          {/* Animated dot accent */}
          <span
            className={`
              absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-primary-500
              transition-all duration-300
              ${hoveredPart === 'be' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `}
          />
        </span>

        {/* "In" - Second word with accent */}
        <span
          className={`
            inline-block mx-1.5 relative cursor-pointer
            transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
            ${hoveredPart === 'in' ? 'scale-110' : ''}
          `}
          style={{
            transitionDelay: '200ms',
          }}
          onMouseEnter={() => setHoveredPart('in')}
          onMouseLeave={() => setHoveredPart(null)}
        >
          <span className="relative">
            <span
              className={`
                bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text
                transition-all duration-300
                ${hoveredPart === 'in' ? 'text-transparent' : 'text-gray-900'}
              `}
            >
              In
            </span>

            {/* Animated underline */}
            <span
              className={`
                absolute -bottom-1 left-0 h-0.5 rounded-full
                bg-gradient-to-r from-primary-500 to-primary-700
                transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]
                ${hoveredPart === 'in' ? 'shadow-lg shadow-primary-500/50' : ''}
              `}
              style={{
                width: isLoaded ? '100%' : '0%',
                transitionDelay: '600ms',
              }}
            />

            {/* Glow effect on hover */}
            <span
              className={`
                absolute inset-0 blur-sm -z-10
                bg-gradient-to-r from-primary-400 to-primary-600
                transition-opacity duration-300
                ${hoveredPart === 'in' ? 'opacity-30' : 'opacity-0'}
              `}
            >
              In
            </span>
          </span>
        </span>

        {/* "Options" - Third word */}
        <span
          className={`
            inline-block transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]
            cursor-pointer relative
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
            ${hoveredPart === 'options' ? 'text-primary-600 scale-105' : ''}
          `}
          style={{
            transitionDelay: '300ms',
          }}
          onMouseEnter={() => setHoveredPart('options')}
          onMouseLeave={() => setHoveredPart(null)}
        >
          Options

          {/* Sliding underline on hover */}
          <span
            className={`
              absolute -bottom-0.5 left-0 h-0.5 bg-primary-600 rounded-full
              transition-all duration-300 ease-out
              ${hoveredPart === 'options' ? 'w-full opacity-100' : 'w-0 opacity-0'}
            `}
          />
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
