import React from 'react';
import type { HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ 
  level = 2, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'font-poppins font-bold text-[var(--black)]';
  
  const levelClasses = {
    1: 'text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight',
    2: 'text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug',
    3: 'text-xl md:text-2xl lg:text-3xl leading-snug',
    4: 'text-lg md:text-xl lg:text-2xl leading-normal',
    5: 'text-base md:text-lg lg:text-xl leading-normal',
    6: 'text-sm md:text-base lg:text-lg leading-normal',
  };

  const Tag = `h${level}` as any;

  return (
    <Tag 
      className={`${baseClasses} ${levelClasses[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
