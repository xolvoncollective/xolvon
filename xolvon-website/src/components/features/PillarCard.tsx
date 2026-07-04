import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { Pillar } from '../../types/pillar';
import Heading from '../common/Heading';

interface PillarCardProps {
  pillar: Pillar;
}

const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => {
  const IconComponent = (LucideIcons as any)[pillar.iconName] || LucideIcons.Zap;

  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 h-full transition-transform duration-300 hover:-translate-y-2">
      <div className="w-20 h-20 bg-blue-50 text-[var(--blue-primary)] rounded-full flex items-center justify-center mb-6">
        <IconComponent size={40} />
      </div>
      <Heading level={3} className="text-xl mb-4">
        {pillar.title}
      </Heading>
      <p className="text-[var(--gray-500)] font-poppins leading-relaxed">
        {pillar.description}
      </p>
    </div>
  );
};

export default PillarCard;
