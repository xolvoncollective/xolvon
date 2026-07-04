import React, { createContext } from 'react';
import type { ReactNode } from 'react';
import type { Project  } from '../types/project';
import { projects } from '../data/projects';

interface ProjectDataContextType {
  projects: Project[];
  getProjectById: (id: string) => Project | undefined;
  projectsByCategory: (category: string) => Project[];
}

export const ProjectDataContext = createContext<ProjectDataContextType | undefined>(undefined);

export const ProjectDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };

  const projectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  return (
    <ProjectDataContext.Provider value={{ projects, getProjectById, projectsByCategory }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
