import React from 'react';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className = '', 
  children, 
  hoverable = true,
  ...props 
}) => {
  const baseClasses = 'glass rounded-2xl p-6 md:p-8 transition-all duration-300';
  const hoverClasses = hoverable ? 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--purple-primary)]/10 hover:border-[var(--purple-primary)]/30' : '';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
