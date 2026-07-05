import React from 'react';
import { useProjects } from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';

import Section from '../common/Section';



const MarketplaceGrid: React.FC = () => {
  const { projects } = useProjects();
  // Sort projects by launchNumber
  const sorted = [...projects].sort((a, b) => a.launchNumber - b.launchNumber);

  return (
    <Section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Explore Our <span className="text-purple-700">Digital Lab</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Browse the 18 alpha-stage Human-AI projects currently being tested and validated.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MarketplaceGrid;
