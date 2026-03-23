import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered ? 'text-center' : 'text-left',
      className
    )}>
      {subtitle && (
        <span className="text-forge-orange font-display text-sm tracking-[0.2em] uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <div className={cn(
        'relative inline-block',
        centered ? 'mx-auto' : ''
      )}>
        <h2 className="text-4xl md:text-6xl mb-4 relative z-10">
          {title}
        </h2>
        <div className={cn(
          'h-1 bg-forge-orange absolute -bottom-2 left-0 transition-all duration-700 w-24 group-hover:w-full',
          centered ? 'left-1/2 -translate-x-1/2' : ''
        )} />
      </div>
    </div>
  );
};
