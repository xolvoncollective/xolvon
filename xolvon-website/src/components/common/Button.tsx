import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-poppins font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[var(--purple-primary)] text-white hover:bg-[var(--purple-secondary)] focus:ring-[var(--purple-primary)]',
    secondary: 'bg-[var(--blue-primary)] text-white hover:bg-[var(--blue-secondary)] focus:ring-[var(--blue-primary)]',
    outline: 'bg-transparent border-2 border-[var(--purple-primary)] text-[var(--purple-primary)] hover:bg-[var(--purple-primary)] hover:text-white focus:ring-[var(--purple-primary)]',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2 min-h-[44px] min-w-[44px]',
    md: 'text-base px-6 py-3 min-h-[44px] min-w-[44px]',
    lg: 'text-lg px-8 py-4 min-h-[44px] min-w-[44px]',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
