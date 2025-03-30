import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon,
  iconPosition = 'right',
  isExternal = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    text: 'bg-transparent text-primary hover:bg-primary/5 focus:ring-primary/50 px-4'
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'py-3 px-6',
    lg: 'text-lg py-4 px-8'
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link 
        to={href} 
        className={buttonClasses}
      >
        {content}
      </Link>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {content}
    </button>
  );
} 