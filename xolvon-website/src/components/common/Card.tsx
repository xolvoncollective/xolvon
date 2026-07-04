import React from 'react';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  hoverable = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl p-6 border border-[var(--gray-100)] shadow-sm';
  const hoverClasses = hoverable 
    ? 'transition-all duration-300 hover:shadow-md hover:border-[var(--purple-light)] hover:-translate-y-1' 
    : '';

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
