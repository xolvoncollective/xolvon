import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { describe, it, expect, vi } from 'vitest';

const mockProject = {
  id: 'test-project',
  title: 'Test Project',
  client: 'Test Client',
  category: 'Automation',
  shortDescription: 'A test project',
  fullDescription: 'A long test project description',
  thumbnailUrl: '/test.jpg',
  heroImageUrl: '/test-hero.jpg',
  metrics: [{ label: 'Users', value: '100' }],
  features: ['Feature 1'],
  technologies: ['React'],
  tags: ['Tag1', 'Tag2']
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
