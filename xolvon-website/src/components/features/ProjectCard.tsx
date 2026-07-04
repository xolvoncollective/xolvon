import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const media = project.media || [];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovered && media.length > 1) {
      const currentMedia = media[currentMediaIndex];
      
      // If current is video, wait for it to finish (or cycle after 4s as fallback)
      if (currentMedia.type === 'video') {
        const video = videoRefs.current[currentMediaIndex];
        if (video) {
          video.play().catch(() => {});
          // We don't set interval here, we will use the onEnded event on the video to cycle
        }
      } else {
        interval = setInterval(() => {
          setCurrentMediaIndex((prev) => (prev + 1) % media.length);
        }, 2000);
      }
    } else {
      setCurrentIndex(0);
      // Pause all videos
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, currentMediaIndex, media]);

  const setCurrentIndex = (index: number) => {
    setCurrentMediaIndex(index);
  };

  const handleVideoEnded = () => {
    if (isHovered && media.length > 1) {
      setCurrentMediaIndex((prev) => (prev + 1) % media.length);
    }
  };

  return (
    <div
      className="card-glass cursor-pointer flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(103,232,249,0.15)] hover:border-[var(--cyan)]/30 group"
      onClick={() => navigate(`/project/${project.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/project/${project.id}`);
        }
      }}
      aria-label={`View ${project.title}`}
    >
      {/* Media Preview */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050508]">
        {media.map((item, index) => {
          const isActive = index === currentMediaIndex;
          return (
            <div 
              key={`${item.url}-${index}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {item.type === 'video' ? (
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={item.url}
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered && isActive ? 'scale-105' : 'scale-100'}`}
                />
              ) : (
                <img
                  src={item.url}
                  alt={`${project.title} preview ${index + 1}`}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered && isActive ? 'scale-105' : 'scale-100'}`}
                />
              )}
            </div>
          );
        })}

        {/* Launch number badge */}
        <span className="absolute top-2 left-2 z-20 bg-black/70 backdrop-blur-md text-[var(--cyan)] border border-[var(--cyan)]/20 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow-lg">
          #{project.launchNumber}
        </span>

        {/* Media indicator dots */}
        {media.length > 1 && (
          <div className="absolute bottom-2 right-2 z-20 flex gap-1 bg-black/40 px-1.5 py-1 rounded-full backdrop-blur-sm">
            {media.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentMediaIndex ? 'bg-[var(--cyan)] w-3' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/20">
        <h3 className="text-[var(--text-primary)] font-semibold text-sm sm:text-base leading-tight mb-2 line-clamp-2 group-hover:text-[var(--cyan)] transition-colors min-h-[2.5rem]">
          {project.title}
        </h3>
        <p className="text-[var(--text-muted)] text-[11px] sm:text-xs line-clamp-2 mb-4 flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-[var(--primary)]/10 text-[var(--primary-light)] border border-[var(--primary)]/20 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
