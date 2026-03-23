import React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  riveted?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, riveted = true }) => {
  return (
    <div className={cn(
      'relative bg-deep-iron border border-weathered-iron p-6 group transition-all duration-500 hover:border-forge-orange/50',
      className
    )}>
      {riveted && (
        <>
          <div className="absolute top-2 left-2 rivet" />
          <div className="absolute top-2 right-2 rivet" />
          <div className="absolute bottom-2 left-2 rivet" />
          <div className="absolute bottom-2 right-2 rivet" />
        </>
      )}
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-forge-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
