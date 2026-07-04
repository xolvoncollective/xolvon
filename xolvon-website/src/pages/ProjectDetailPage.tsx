import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import NotFoundPage from './NotFoundPage';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Image from '../components/common/Image';
import { ArrowLeft, ExternalLink, Calendar, Tag as TagIcon, CheckCircle2 } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { getProjectById } = useProjects();
  const navigate = useNavigate();
  
  const project = projectId ? getProjectById(projectId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen pb-20 pt-24 bg-[var(--gray-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] mb-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-[var(--gray-500)] hover:text-[var(--purple-primary)] transition-colors font-poppins font-medium focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded px-2 py-1 -ml-2"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </button>
      </div>

      <article>
        {/* Hero Section */}
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[var(--purple-primary)] text-white text-sm font-bold uppercase tracking-wider rounded-full">
                {project.category}
              </span>
              <span className={`px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full ${
                project.status === 'Launched' ? 'bg-green-100 text-green-700' : 
                project.status === 'Alpha' ? 'bg-blue-100 text-blue-700' : 
                'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="flex items-center text-[var(--gray-500)] font-poppins font-medium">
              <Calendar size={18} className="mr-2" />
              Launch #{project.launchNumber}
            </div>
          </div>
          
          <Heading level={1} className="mb-6">
            {project.title}
          </Heading>
          
          <p className="text-xl md:text-2xl text-[var(--gray-500)] font-poppins max-w-4xl leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          {project.ctaLink && (
            <a 
              href={project.ctaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-poppins font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[var(--blue-primary)] text-white hover:bg-[var(--blue-secondary)] focus:ring-[var(--blue-primary)] text-lg px-8 py-4 shadow-md hover:shadow-lg"
            >
              {project.ctaText}
              <ExternalLink size={20} className="ml-2" />
            </a>
          )}
        </header>

        {/* Feature Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] mb-16">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            <Image 
              src={project.heroImageUrl} 
              fallbackSrc={project.thumbnailUrl}
              alt={`Hero image for ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Section className="!py-0 !px-0 bg-transparent">
                <Heading level={2} className="mb-6">About the Project</Heading>
                <div className="prose prose-lg max-w-none prose-p:font-poppins prose-p:text-[var(--gray-500)] prose-p:leading-relaxed">
                  <p className="whitespace-pre-line">{project.longDescription}</p>
                </div>

                <div className="mt-12">
                  <Heading level={3} className="mb-6">Key Features</Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <CheckCircle2 className="text-[var(--purple-primary)] mt-0.5 mr-3 flex-shrink-0" size={24} />
                        <span className="font-poppins text-[var(--gray-800)] font-medium leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
                <Heading level={3} className="mb-6 flex items-center">
                  <TagIcon size={24} className="mr-2 text-[var(--purple-primary)]" />
                  Technologies & Tags
                </Heading>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-purple-50 text-[var(--purple-primary)] font-poppins font-semibold text-sm rounded-lg"
                    >
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
