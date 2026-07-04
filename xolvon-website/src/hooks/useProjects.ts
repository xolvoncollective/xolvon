import { useContext } from 'react';
import { ProjectDataContext } from '../contexts/ProjectDataContext';

export const useProjects = () => {
  const context = useContext(ProjectDataContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectDataProvider');
  }
  return context;
};
