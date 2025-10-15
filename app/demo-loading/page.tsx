'use client';

import { useState } from 'react';
import Loading from '@/components/Loading';
import EggSpinner from '@/components/EggSpinner';
import PageLoader from '@/components/PageLoader';
import Button from '@/components/Button';

export default function LoadingDemo() {
  const [showPageLoader, setShowPageLoader] = useState(false);

  return (
    <div className="bg-black min-h-screen section-padding">
      <div className="container mx-auto container-padding">
        <h1 className="text-5xl font-bold text-center mb-4">
          <span className="text-white">Loading </span>
          <span className="text-brand-orange">Animations</span>
        </h1>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Demo of all egg-themed loading animations
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Loading Component - Small */}
          <div className="card card-padding">
            <h3 className="text-2xl font-bold text-brand-yellow mb-4">Loading - Small</h3>
            <div className="bg-black rounded-lg p-8">
              <Loading text="Loading" size="sm" />
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Compact loading animation for small spaces
            </p>
          </div>

          {/* Loading Component - Medium */}
          <div className="card card-padding">
            <h3 className="text-2xl font-bold text-brand-yellow mb-4">Loading - Medium</h3>
            <div className="bg-black rounded-lg p-8">
              <Loading text="Please wait" size="md" />
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Default loading animation for general use
            </p>
          </div>

          {/* Loading Component - Large */}
          <div className="card card-padding">
            <h3 className="text-2xl font-bold text-brand-yellow mb-4">Loading - Large</h3>
            <div className="bg-black rounded-lg p-8">
              <Loading text="Loading Mountain Yolks" size="lg" />
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Large loading animation for page-level loading
            </p>
          </div>

          {/* Egg Spinner */}
          <div className="card card-padding">
            <h3 className="text-2xl font-bold text-brand-yellow mb-4">Egg Spinner</h3>
            <div className="bg-black rounded-lg p-8 flex flex-col items-center gap-6">
              <EggSpinner size={60} />
              <EggSpinner size={80} />
              <EggSpinner size={100} />
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Compact egg spinner with gradient - various sizes
            </p>
          </div>
        </div>

        {/* Page Loader Demo */}
        <div className="card card-padding max-w-2xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-brand-yellow mb-4 text-center">
            Full Page Loader
          </h3>
          <p className="text-gray-300 mb-6 text-center">
            Click the button below to see the full-page loading animation
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowPageLoader(true)}
              variant="primary"
              size="lg"
            >
              Show Page Loader
            </Button>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="card card-padding max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-brand-yellow mb-6">Usage Examples</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-2">Basic Loading Component</h4>
              <pre className="bg-brand-dark p-4 rounded-lg overflow-x-auto text-sm">
                <code className="text-brand-orange">
{`import Loading from '@/components/Loading';

<Loading text="Loading..." size="md" />`}
                </code>
              </pre>
            </div>

            <div>
              <h4 className="text-white font-bold mb-2">Egg Spinner</h4>
              <pre className="bg-brand-dark p-4 rounded-lg overflow-x-auto text-sm">
                <code className="text-brand-orange">
{`import EggSpinner from '@/components/EggSpinner';

<EggSpinner size={80} />`}
                </code>
              </pre>
            </div>

            <div>
              <h4 className="text-white font-bold mb-2">Page Loader</h4>
              <pre className="bg-brand-dark p-4 rounded-lg overflow-x-auto text-sm">
                <code className="text-brand-orange">
{`import PageLoader from '@/components/PageLoader';

<PageLoader 
  duration={2000} 
  onComplete={() => console.log('Loading complete')} 
/>`}
                </code>
              </pre>
            </div>

            <div>
              <h4 className="text-white font-bold mb-2">Next.js Page Loading (Automatic)</h4>
              <pre className="bg-brand-dark p-4 rounded-lg overflow-x-auto text-sm">
                <code className="text-brand-orange">
{`// app/loading.tsx is automatically used
// when navigating between pages`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <Button href="/" variant="outline" size="lg">
            Back to Home
          </Button>
        </div>
      </div>

      {/* Page Loader */}
      {showPageLoader && (
        <PageLoader
          duration={3000}
          onComplete={() => setShowPageLoader(false)}
        />
      )}
    </div>
  );
}

