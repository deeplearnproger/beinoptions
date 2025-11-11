'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description: string;
  thumbnail?: string;
}

export default function VideoPlayer({ videoId, title, description, thumbnail }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailUrl = thumbnail || defaultThumbnail;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="group relative">
      <div className="relative pb-[56.25%] bg-gray-900 rounded-xl overflow-hidden shadow-lg">
        {!isPlaying ? (
          <>
            {/* Custom Thumbnail with Play Button */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={handlePlay}
            >
              {/* Thumbnail Image */}
              <img
                src={thumbnailUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to default quality if maxres not available
                  e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Custom Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulse Animation Ring */}
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-30" />

                  {/* Play Button */}
                  <button
                    className="relative w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:from-primary-400 group-hover:to-primary-500"
                    aria-label="Play video"
                  >
                    {/* Play Icon */}
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Duration Badge (Optional) */}
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
                <svg className="w-4 h-4 inline-block mr-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Video
              </div>
            </div>
          </>
        ) : (
          /* YouTube Iframe Player */
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      {/* Video Info */}
      <div className="mt-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Watch Icon Indicator */}
      {!isPlaying && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-lg flex items-center gap-1.5">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          Zum Ansehen klicken
        </div>
      )}
    </div>
  );
}
