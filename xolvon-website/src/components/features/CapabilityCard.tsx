import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { Capability } from '../../types/capability';
import Card from '../common/Card';
import Heading from '../common/Heading';

interface CapabilityCardProps {
  capability: Capability;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability }) => {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons as any)[capability.iconName] || LucideIcons.Activity;

  return (
    <Card 
      hoverable 
      className="flex flex-col h-full focus-within:ring-2 focus-within:ring-[var(--purple-primary)] transition-all duration-300 hover:bg-purple-50/50"
      tabIndex={0}
    >
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
        style={{ backgroundColor: `${capability.color}20`, color: capability.color }}
      >
        <IconComponent size={32} aria-hidden="true" />
      </div>
      <Heading level={3} className="text-xl mb-3">
        {capability.title}
      </Heading>
      <p className="text-[var(--gray-500)] font-poppins text-sm leading-relaxed flex-grow">
        {capability.description}
      </p>
    </Card>
  );
};

export default CapabilityCard;
