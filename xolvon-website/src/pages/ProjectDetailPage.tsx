import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import NotFoundPage from './NotFoundPage';
import MediaCarousel from '../components/features/MediaCarousel';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { getProjectById } = useProjects();

  const project = projectId ? getProjectById(projectId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Back button + logo */}
      <div className="container-app pt-4 sm:pt-6 pb-4 flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors group px-4 sm:px-0"
        >
          <div className="p-2 bg-[var(--bg-secondary)] rounded-lg group-hover:bg-[var(--primary)]/20 transition-colors">
            <ArrowLeft size={20} className="group-hover:text-[var(--cyan)] transition-colors" />
          </div>
          <span className="font-medium hidden sm:block text-sm">Back to Projects</span>
        </Link>

        <div className="flex items-center gap-2 px-4 sm:px-0">
          <img src="/images/logo.svg" alt="Xolvon" className="w-6 h-auto" />
          <span className="font-bold text-[var(--text-primary)] text-sm sm:text-base hidden sm:block">
            ProjectXolvon
          </span>
        </div>
      </div>

      <article>
        {/* Header */}
        <header className="container-app mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="badge-status bg-[var(--purple)]/20 text-[var(--purple-light)] border border-[var(--purple)]/30">
              {project.category}
            </span>
            <span className={`badge-status ${
              project.status === 'Launched' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' :
              project.status === 'Alpha' ? 'bg-[var(--cyan)]/15 text-[var(--cyan)] border border-[var(--cyan)]/30' :
              'bg-amber-500/15 text-amber-400 border border-amber-500/30'
            }`}>
              {project.status}
            </span>
            <span className="text-[var(--text-muted)] text-xs ml-auto">
              Launch #{project.launchNumber}
            </span>
          </div>

          <h1 className="text-gradient-purple-cyan mb-3 text-xl sm:text-2xl md:text-3xl font-bold">
            {project.title}
          </h1>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-3xl leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {project.ctaLink && project.ctaLink !== '#' && (
            <a
              href={project.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--purple)] hover:bg-[var(--purple-light)] text-white font-semibold text-sm transition-colors"
            >
              {project.ctaText}
              <ExternalLink size={16} />
            </a>
          )}
        </header>

        {/* Media Carousel */}
        <div className="container-app mb-10">
          <MediaCarousel media={project.media} title={project.title} />
        </div>

        {/* Content */}
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="card-glass p-4 sm:p-6 mb-6">
                <h2 className="text-[var(--text-primary)] text-base sm:text-lg font-bold mb-3">About</h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>

              <div className="card-glass p-4 sm:p-6">
                <h2 className="text-[var(--text-primary)] text-base sm:text-lg font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <CheckCircle2 className="text-[var(--cyan)] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-[var(--text-secondary)] text-xs sm:text-sm leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-glass p-4 sm:p-6 lg:sticky lg:top-6">
                <h3 className="text-[var(--text-primary)] text-sm font-bold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
