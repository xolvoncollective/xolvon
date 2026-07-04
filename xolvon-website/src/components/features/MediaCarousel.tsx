import React, { useState } from 'react';
import type { ProjectMedia } from '../../types/project';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaCarouselProps {
  media: ProjectMedia[];
  title: string;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ media, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media || media.length === 0) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="relative group w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-xl bg-gray-900 flex items-center justify-center">
      {currentMedia.type === 'video' ? (
        <video
          key={currentMedia.url} // Force re-mount on src change
          src={currentMedia.url}
          controls
          autoPlay
          muted
          className="w-full h-full object-contain bg-black"
        />
      ) : (
        <img
          src={currentMedia.url}
          alt={`${title} - media ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      )}

      {/* Navigation Controls */}
      {media.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)]"
            aria-label="Previous media"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)]"
            aria-label="Next media"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to media ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
