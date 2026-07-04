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
  const videoRef = useRef<HTMLVideoElement>(null);

  const media = project.media || [];
  const currentMedia = media[currentMediaIndex] || { url: '', type: 'image' as const };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovered && media.length > 1) {
      if (currentMedia.type === 'video' && videoRef.current) {
        videoRef.current.play().catch(() => {});
      } else {
        interval = setInterval(() => {
          setCurrentMediaIndex((prev) => (prev + 1) % media.length);
        }, 1500);
      }
    } else {
      setCurrentMediaIndex(0);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, media.length, currentMedia.type]);

  return (
    <div
      className="card-glass cursor-pointer overflow-hidden flex flex-col"
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
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)]">
        {currentMedia.type === 'video' ? (
          <video
            ref={videoRef}
            src={currentMedia.url}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={currentMedia.url}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
        )}

        {/* Launch number badge */}
        <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-[var(--cyan)] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
          #{project.launchNumber}
        </span>

        {/* Media indicator dots */}
        {media.length > 1 && (
          <div className="absolute bottom-1.5 right-2 flex gap-1">
            {media.map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-colors ${
                  i === currentMediaIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5 sm:p-3 flex flex-col flex-grow">
        <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm leading-tight mb-1 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-[var(--text-muted)] text-[10px] sm:text-xs line-clamp-2 mb-2 flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-chip text-[9px] sm:text-[10px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
