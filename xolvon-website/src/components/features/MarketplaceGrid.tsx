import React from 'react';
import type { Project } from '../../types/project';
import ProjectCard from './ProjectCard';
import Section from '../common/Section';
import Heading from '../common/Heading';

interface MarketplaceGridProps {
  projects: Project[];
}

const MarketplaceGrid: React.FC<MarketplaceGridProps> = ({ projects }) => {
  return (
    <Section id="projects" className="bg-[var(--gray-50)]">
      <div className="text-center mb-12">
        <Heading level={2} className="mb-4">
          Marketplace
        </Heading>
        <p className="text-[var(--gray-500)] max-w-2xl mx-auto font-poppins">
          Explore our portfolio of 18 Alpha-stage projects, each designed to solve specific society conundrums through Human-AI collaboration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MarketplaceGrid;
