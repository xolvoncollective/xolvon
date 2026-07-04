import React from 'react';
import { pillars } from '../../data/pillars';
import PillarCard from './PillarCard';
import Section from '../common/Section';
import Heading from '../common/Heading';

const ThreePillarsSection: React.FC = () => {
  return (
    <Section id="pillars" className="bg-[var(--gray-50)]">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">
          Core Pillars
        </Heading>
        <p className="text-[var(--gray-500)] max-w-2xl mx-auto font-poppins text-lg">
          The foundation of our approach to solving complex problems through technology.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="w-full md:w-1/3">
            <PillarCard pillar={pillar} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ThreePillarsSection;
