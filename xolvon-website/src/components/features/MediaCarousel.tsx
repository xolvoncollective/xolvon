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
    <div className="relative group w-full aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden bg-[#0a0a0f] border border-white/5 flex items-center justify-center">
      {/* Ambient background glow for images */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--cyan)]/5 blur-xl"></div>
      
      {currentMedia.type === 'video' ? (
        <video
          key={currentMedia.url}
          src={currentMedia.url}
          controls
          autoPlay
          muted
          className="w-full h-full object-contain relative z-10"
        />
      ) : (
        <img
          key={currentMedia.url}
          src={currentMedia.url}
          alt={`${title} - ${currentIndex + 1}`}
          className="w-full h-full object-contain relative z-10"
        />
      )}

      {media.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute z-20 left-2 sm:left-4 p-2 sm:p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute z-20 right-2 sm:right-4 p-2 sm:p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute z-20 bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-4 bg-[var(--cyan)]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
