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
    <div className="relative group w-full aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center">
      {currentMedia.type === 'video' ? (
        <video
          key={currentMedia.url}
          src={currentMedia.url}
          controls
          autoPlay
          muted
          className="w-full h-full object-contain bg-black"
        />
      ) : (
        <img
          src={currentMedia.url}
          alt={`${title} - ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      )}

      {media.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-3 p-1.5 sm:p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-3 p-1.5 sm:p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
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
