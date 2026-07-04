import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types/project';
import Card from '../common/Card';
import Heading from '../common/Heading';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const media = project.media || [];
  const currentMedia = media[currentMediaIndex] || { url: '', type: 'image' };

  // Handle sliding preview logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isHovered && media.length > 1) {
      // If we hover, check if the current media is a video. If it is, play it and don't slide.
      if (currentMedia.type === 'video' && videoRef.current) {
        videoRef.current.play().catch(() => {});
      } else {
        // If it's an image, cycle through images every 1.5 seconds
        interval = setInterval(() => {
          setCurrentMediaIndex(prev => (prev + 1) % media.length);
        }, 1500);
      }
    } else {
      // Reset when not hovered
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <Card 
      hoverable 
      className="cursor-pointer overflow-hidden p-0 h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)]"
      onClick={() => navigate(`/project/${project.id}`)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {currentMedia.type === 'video' ? (
          <video
            ref={videoRef}
            src={currentMedia.url}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 scale-105"
          />
        ) : (
          <img 
            src={currentMedia.url} 
            alt={`Thumbnail for ${project.title}`} 
            className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-[var(--purple-primary)] uppercase tracking-wider shadow-sm">
            {project.category}
          </span>
        </div>
        {media.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {media.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentMediaIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <Heading level={3} className="text-xl">
            {project.title}
          </Heading>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
            #{project.launchNumber}
          </span>
        </div>
        <p className="text-[var(--gray-500)] font-poppins text-sm mb-4 flex-grow line-clamp-3">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs font-medium text-[var(--blue-primary)] bg-blue-50 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
