import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types/project';
import Card from '../common/Card';
import Image from '../common/Image';
import Heading from '../common/Heading';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

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
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image 
          src={project.thumbnailUrl} 
          alt={`Thumbnail for ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-[var(--purple-primary)] uppercase tracking-wider shadow-sm">
            {project.category}
          </span>
        </div>
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
