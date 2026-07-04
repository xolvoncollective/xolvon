import React from 'react';
import Section from '../common/Section';
import Heading from '../common/Heading';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="lg:w-1/2 w-full">
          <div className="glass-dark p-10 md:p-14 rounded-3xl aspect-square flex flex-col justify-center text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--purple-primary)] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--blue-primary)] opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 group-hover:scale-110 transition-transform duration-700" />
            
            <Heading level={2} className="text-white mb-6 relative z-10 tracking-tight leading-tight">
              A lab where human intelligence meets machine efficiency.
            </Heading>
            <p className="text-lg text-gray-300 relative z-10 font-poppins font-light leading-relaxed">
              We focus on building systems that bridge the gap between heavy technical implementation and everyday operational needs.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-8 text-[var(--gray-500)] font-poppins text-lg">
          <div>
            <div className="text-[var(--purple-primary)] font-semibold text-sm tracking-widest uppercase mb-2">Our Mission</div>
            <Heading level={2} className="text-[var(--black)] mb-6">
              About Project Xolvon
            </Heading>
          </div>
          <p className="leading-relaxed">
            We develop <strong>Human-AI Field Systems</strong>—which means we don't just write scripts, we build ecosystems. Our systems are designed to collaborate with your team, taking over the repetitive data tasks so humans can focus on strategy and creativity.
          </p>
          <p className="leading-relaxed">
            From scaling content workflows with <span className="text-[var(--purple-primary)] font-semibold">XFarming</span> to tracking real-time insights via our <span className="text-[var(--purple-primary)] font-semibold">Defense Narrative System</span>, we aim to solve complex operational problems efficiently.
          </p>
          <p className="leading-relaxed">
            This Alpha marketplace showcases our active experiments and validated solutions. We build, test, and ship tools that deliver actual impact.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
