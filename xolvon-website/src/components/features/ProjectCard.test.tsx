import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { describe, it, expect } from 'vitest';
import type { Project } from '../../types/project';
import { ProjectCategory, ProjectStatus } from '../../types/project';

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  category: ProjectCategory.DATA_INTELLIGENCE,
  shortDescription: 'A test project',
  longDescription: 'A long test project description',
  media: [{ url: '/test.jpg', type: 'image' }],
  features: ['Feature 1'],
  tags: ['Tag1', 'Tag2'],
  ctaText: 'View',
  ctaLink: '#',
  launchNumber: 1,
  status: ProjectStatus.ALPHA
};

describe('ProjectCard', () => {
  it('renders project details correctly', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project')).toBeInTheDocument();
  });
});
