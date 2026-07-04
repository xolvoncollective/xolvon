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
      
      if (currentMedia.type === 'video') {
        const video = videoRefs.current[currentMediaIndex];
        if (video) {
          video.play().catch(() => {});
        }
      } else {
        interval = setInterval(() => {
          setCurrentMediaIndex((prev) => (prev + 1) % media.length);
        }, 2000);
      }
    } else {
      setCurrentMediaIndex(0);
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

  const handleVideoEnded = () => {
    if (isHovered && media.length > 1) {
      setCurrentMediaIndex((prev) => (prev + 1) % media.length);
    }
  };

  return (
    <div
      className="card-glass p-2 sm:p-3 cursor-pointer flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(103,232,249,0.15)] hover:-translate-y-1 group"
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
      {/* Media Preview (SniffAway Style padded container) */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#050508] shadow-inner">
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

        {/* Media indicator dots */}
        {media.length > 1 && (
          <div className="absolute bottom-2 right-2 z-20 flex gap-1 bg-black/60 px-2 py-1 rounded-full backdrop-blur-md border border-white/10">
            {media.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentMediaIndex ? 'bg-[var(--cyan)] w-3 shadow-[0_0_5px_var(--cyan)]' : 'bg-white/50 w-1.5 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
        <h3 className="text-[var(--text-primary)] font-bold text-base sm:text-lg leading-tight mb-2 group-hover:text-[var(--cyan)] transition-colors min-h-[2.5rem]">
          {project.title}
        </h3>
        <p className="text-[var(--text-muted)] text-xs sm:text-sm line-clamp-2 mb-4 flex-grow opacity-80">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-[var(--primary)]/10 text-[var(--cyan)] border border-[var(--cyan)]/20 text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
