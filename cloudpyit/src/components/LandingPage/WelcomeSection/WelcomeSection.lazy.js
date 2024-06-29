import React, { lazy, Suspense } from 'react';

const LazyWelcomeSection = lazy(() => import('./WelcomeSection'));

const WelcomeSection = props => (
  <Suspense fallback={null}>
    <LazyWelcomeSection {...props} />
  </Suspense>
);

export default WelcomeSection;
