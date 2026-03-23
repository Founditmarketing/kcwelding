import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'arc';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-brand-green text-white hover:bg-brand-green-dark green-glow',
    secondary: 'bg-deep-iron text-white border border-weathered-iron hover:border-brand-green hover:text-brand-green-light',
    outline: 'bg-transparent border-2 border-brand-green text-brand-green-light hover:bg-brand-green hover:text-white',
    arc: 'bg-arc-blue text-white hover:bg-torch-blue arc-glow',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center rounded-sm font-display uppercase tracking-wider transition-all duration-300 overflow-hidden group',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );
};
