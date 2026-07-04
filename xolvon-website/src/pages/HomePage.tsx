import React from 'react';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/features/ProjectCard';

const HomePage: React.FC = () => {
  const { projects } = useProjects();

  // Sort projects by launchNumber
  const sorted = [...projects].sort((a, b) => a.launchNumber - b.launchNumber);

  return (
    <div className="min-h-screen pb-12">
      {/* Header - Logo + Title */}
      <header className="container-app pt-6 pb-4 sm:pt-8 sm:pb-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-1">
          <img
            src="/images/logo.svg"
            alt="Xolvon Logo"
            className="w-8 sm:w-10 h-auto"
          />
          <div>
            <h1 className="text-gradient-purple-cyan leading-tight text-lg sm:text-xl font-bold">
              ProjectXolvon
            </h1>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm">
              18/67 — Target 67 Active Projects
            </p>
          </div>
        </div>
        <p className="text-[var(--text-secondary)] text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
          Alpha launchpad digital production incubator. Setiap project diuji langsung di dunia nyata melalui sistem Human-AI end-to-end.
        </p>
      </header>

      {/* Project Grid */}
      <section className="container-app">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container-app mt-12 pt-6 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[var(--text-muted)] text-xs">
          <p>PT Xolvon Kehidupan Cerdas Abadi · Jakarta, Indonesia</p>
          <p>@xolvon.ai · @projectxolvon · xolvonai.web.app</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
