import React from 'react';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  className = '', 
  containerClassName = '',
  children, 
  ...props 
}) => {
  return (
    <section className={`py-16 md:py-24 ${className}`} {...props}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
