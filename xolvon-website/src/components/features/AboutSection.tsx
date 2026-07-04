import React from 'react';
import Section from '../common/Section';
import Heading from '../common/Heading';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <div className="bg-[var(--purple-primary)] p-8 rounded-2xl aspect-square flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/4" />
            <Heading level={2} className="text-white mb-6 relative z-10">
              67 Alpha-stage Digital Production Lab
            </Heading>
            <p className="text-lg text-[var(--purple-light)] relative z-10 font-poppins">
              Project Xolvon's mission is to bridge the gap between complex technology and everyday human problems through intuitive, end-to-end attention systems.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6 text-[var(--gray-500)] font-poppins text-lg">
          <Heading level={2} className="text-[var(--black)] mb-8">
            About Project Xolvon
          </Heading>
          <p>
            We build <strong>Human-AI Field Systems</strong>—intelligent ecosystems designed to collaborate with human ingenuity rather than replace it. By focusing on attention, data insights, and automation, we empower individuals and businesses.
          </p>
          <p>
            Whether it's helping creators scale their content with <span className="text-[var(--purple-primary)] font-semibold">XFarming</span>, or providing real-time sentiment analysis through our <span className="text-[var(--purple-primary)] font-semibold">Defense Narrative System</span>, we address society's conundrums systematically.
          </p>
          <p>
            Our Alpha-stage marketplace is just the beginning. We continuously experiment, validate, and launch solutions that deliver measurable impact.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
