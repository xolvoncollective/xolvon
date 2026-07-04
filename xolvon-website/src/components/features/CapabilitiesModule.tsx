import React from 'react';
import { capabilities } from '../../data/capabilities';
import CapabilityCard from './CapabilityCard';
import Section from '../common/Section';
import Heading from '../common/Heading';

const CapabilitiesModule: React.FC = () => {
  return (
    <Section id="capabilities" className="bg-white">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">
          Our Capabilities
        </Heading>
        <p className="text-[var(--gray-500)] max-w-2xl mx-auto font-poppins text-lg">
          We leverage cutting-edge technology and human expertise to build comprehensive systems.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((capability) => (
          <div key={capability.id}>
            <CapabilityCard capability={capability} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CapabilitiesModule;
