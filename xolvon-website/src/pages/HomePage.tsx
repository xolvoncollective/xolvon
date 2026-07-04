import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/features/ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

const HomePage: React.FC = () => {
  const { projects } = useProjects();
  const [currentPage, setCurrentPage] = useState(1);

  // Sort projects by launchNumber
  const sorted = [...projects].sort((a, b) => a.launchNumber - b.launchNumber);
  
  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = sorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  return (
    <div className="min-h-screen pb-12 flex flex-col">
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
      <section className="container-app flex-grow">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-[var(--bg-secondary)] border border-white/5 hover:bg-[var(--primary)]/20 hover:text-[var(--cyan)] transition-all disabled:opacity-30 disabled:hover:bg-[var(--bg-secondary)] disabled:hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      isActive 
                        ? 'bg-[var(--cyan)] text-black shadow-[0_0_15px_rgba(103,232,249,0.4)]' 
                        : 'bg-[var(--bg-secondary)] border border-white/5 text-[var(--text-muted)] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-[var(--bg-secondary)] border border-white/5 hover:bg-[var(--primary)]/20 hover:text-[var(--cyan)] transition-all disabled:opacity-30 disabled:hover:bg-[var(--bg-secondary)] disabled:hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
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
