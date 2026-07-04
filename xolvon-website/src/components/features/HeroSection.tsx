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
      className="relative flex items-center justify-center bg-dot-pattern bg-[var(--bg)] min-h-[60vh] lg:min-h-[85vh] pt-24 overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[var(--purple-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[var(--blue-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 bg-[var(--purple-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }} />
      
      <div className="relative max-w-4xl mx-auto text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--purple-primary)] bg-[var(--purple-primary)]/10 text-[var(--purple-primary)] font-semibold text-sm tracking-wide animate-float">
            Alpha-stage Digital Production Lab
          </div>
          
          <Heading level={1} className="mb-6 tracking-tight text-[var(--black)] leading-[1.1] md:leading-[1.15]">
            Build systems that <br className="hidden md:block" />
            <span className="text-gradient">actually solve problems.</span>
          </Heading>
          
          <p className="text-lg md:text-xl text-[var(--gray-500)] mb-10 max-w-2xl mx-auto font-poppins leading-relaxed">
            We architect end-to-end attention systems where human intuition drives machine scale. No generic buzzwords, just field-tested results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={scrollToProjects}
              className="w-full sm:w-auto shadow-xl shadow-[var(--purple-primary)]/25 hover:scale-105"
            >
              Explore the Lab
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto hover:bg-[var(--gray-100)] hover:text-[var(--black)] border-[var(--gray-200)] text-[var(--black)] bg-white/50 backdrop-blur-sm"
            >
              How we work
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
