import React, { lazy, Suspense } from 'react';

const LazyCounterSection = lazy(() => import('./CounterSection'));

const CounterSection = props => (
  <Suspense fallback={null}>
    <LazyCounterSection {...props} />
  </Suspense>
);

export default CounterSection;
