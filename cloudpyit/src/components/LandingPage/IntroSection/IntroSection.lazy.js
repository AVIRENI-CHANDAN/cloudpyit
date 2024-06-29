import React, { lazy, Suspense } from 'react';

const LazyIntroSection = lazy(() => import('./IntroSection'));

const IntroSection = props => (
  <Suspense fallback={null}>
    <LazyIntroSection {...props} />
  </Suspense>
);

export default IntroSection;
