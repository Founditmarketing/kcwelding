import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { PageSEO } from '@/src/components/seo/PageSEO';

export const NotFound: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="pt-20">
      <PageSEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Head back to KC Welding & Fabrication's homepage to find what you need."
        path={pathname}
        noIndex
      />
      <section className="relative py-40 bg-iron-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xl text-brand-green-light font-display tracking-[0.3em] uppercase mb-4">
            404 Error
          </p>
          <h1 className="text-6xl md:text-8xl mb-6">PAGE NOT FOUND</h1>
          <p className="text-xl text-weathered-iron mb-10 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <Link to="/">
            <Button size="lg">
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
