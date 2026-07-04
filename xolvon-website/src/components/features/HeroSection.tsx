import React from 'react';
import { motion } from 'motion/react';
import Button from '../common/Button';
import Section from '../common/Section';
import Heading from '../common/Heading';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section 
      id="hero" 
      className="flex items-center justify-center bg-gradient-to-b from-purple-50 to-white min-h-[60vh] lg:min-h-[80vh] pt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={1} className="mb-6 text-[var(--black)] leading-tight">
            Human-AI End-to-End <br className="hidden md:block" />
            <span className="text-[var(--purple-primary)]">Attention Systems</span>
          </Heading>
          
          <p className="text-xl md:text-2xl text-[var(--gray-500)] mb-8 font-poppins">
            67 Alpha-stage Digital Production Lab
          </p>
          
          <p className="text-lg text-[var(--gray-500)] mb-10 max-w-2xl mx-auto font-poppins">
            Browse our Human-AI Solutions designed to solve society conundrums through data-driven and collaborative systems.
          </p>
          
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToProjects}
            className="shadow-lg hover:shadow-xl"
          >
            Explore Projects
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
