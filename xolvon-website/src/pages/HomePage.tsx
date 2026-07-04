import React, { useEffect } from 'react';
import HeroSection from '../components/features/HeroSection';
import MetricsDisplay from '../components/features/MetricsDisplay';
import MarketplaceGrid from '../components/features/MarketplaceGrid';
import CapabilitiesModule from '../components/features/CapabilitiesModule';
import ThreePillarsSection from '../components/features/ThreePillarsSection';
import AboutSection from '../components/features/AboutSection';
import TargetAudiencesSection from '../components/features/TargetAudiencesSection';
import TeamSection from '../components/features/TeamSection';
import { useProjects } from '../hooks/useProjects';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useNavigation } from '../hooks/useNavigation';

const HomePage: React.FC = () => {
  const { projects } = useProjects();
  const { setActiveSection } = useNavigation();
  
  const sectionIds = ['hero', 'projects', 'capabilities', 'pillars', 'about', 'audiences', 'team'];
  const activeId = useScrollSpy(sectionIds, 300);

  useEffect(() => {
    if (activeId) {
      setActiveSection(activeId);
    }
  }, [activeId, setActiveSection]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MetricsDisplay />
      <MarketplaceGrid projects={projects} />
      <CapabilitiesModule />
      <ThreePillarsSection />
      <AboutSection />
      <TargetAudiencesSection />
      <TeamSection />
    </div>
  );
};

export default HomePage;
