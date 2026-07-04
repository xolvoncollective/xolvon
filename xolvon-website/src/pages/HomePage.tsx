import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/features/ProjectCard';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

const HomePage: React.FC = () => {
  const { projects } = useProjects();
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 pb-16 flex flex-col font-sans selection:bg-purple-200">
      
      {/* Navbar / Header Area */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              >
                <ArrowLeft className="text-gray-500 group-hover:text-purple-700" size={24} />
              </button>
              <div className="flex items-center gap-3">
                <img src="/images/logo.svg" alt="Xolvon Logo" className="w-10 h-auto" />
                <span className="text-2xl font-bold text-gray-900 tracking-tight hidden sm:block">ProjectXolvon<span className="text-purple-700">.</span></span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              18 / 67 Active Projects
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Explore Our <span className="text-purple-700">Digital Lab</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Browse the 18 alpha-stage Human-AI projects currently being tested and validated.
        </p>
      </header>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-16">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-700 shadow-sm transition-all disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      isActive 
                        ? 'bg-purple-700 text-white shadow-md shadow-purple-500/30' 
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-700'
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
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-700 shadow-sm transition-all disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
