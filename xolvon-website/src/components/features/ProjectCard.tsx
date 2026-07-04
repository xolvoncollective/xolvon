import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types';
import { ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Default image if no media provided
  const media = project.media && project.media.length > 0 
    ? project.media 
    : [{ type: 'image' as const, url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isHovered && media.length > 1) {
      const currentItem = media[currentMediaIndex];
      
      if (currentItem.type === 'video') {
        const videoElement = videoRefs.current[currentMediaIndex];
        if (videoElement) {
          videoElement.currentTime = 0;
          videoElement.play().catch(e => console.error("Video play failed", e));
        }
      } else {
        interval = setInterval(() => {
          setCurrentMediaIndex((prev) => (prev + 1) % media.length);
        }, 1500);
      }
    } else {
      setCurrentMediaIndex(0);
      media.forEach((item, index) => {
        if (item.type === 'video') {
          const videoElement = videoRefs.current[index];
          if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
          }
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

  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  return (
    <div 
      className="bg-white rounded-[2rem] p-4 shadow-xl shadow-purple-500/5 border border-purple-100 group overflow-hidden block hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => navigate(`/project/${project.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title}`}
    >
      {/* Media Preview (SniffAway Style padded container) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gray-50 flex items-center justify-center">
        {media.map((item, index) => {
          const isActive = index === currentMediaIndex;
          return (
            <div 
              key={`${item.url}-${index}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center p-2 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {item.type === 'video' ? (
                <video
                  ref={(el) => setVideoRef(el, index)}
                  src={item.url}
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  className={`w-full h-full object-contain transition-transform duration-1000 ${isHovered && isActive ? 'scale-105' : 'scale-100'}`}
                />
              ) : (
                <img
                  src={item.url}
                  alt={`${project.title} preview ${index + 1}`}
                  loading="lazy"
                  className={`w-full h-full object-contain transition-transform duration-1000 ${isHovered && isActive ? 'scale-105' : 'scale-100'}`}
                />
              )}
            </div>
          );
        })}

        {/* Hover Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
           <span className="text-white font-bold text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-lg flex items-center gap-1">
             View Project <ChevronRight className="w-4 h-4" />
           </span>
        </div>
      </div>

      {/* Info Section (SniffAway Pricing Card Style) */}
      <div className="pt-6 pb-2 px-2 flex flex-col flex-grow text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 mt-auto font-medium">
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
