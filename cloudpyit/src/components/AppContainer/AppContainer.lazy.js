import React, { lazy, Suspense } from 'react';

const LazyAppContainer = lazy(() => import('./AppContainer'));

const AppContainer = props => (
  <Suspense fallback={null}>
    <LazyAppContainer {...props} />
  </Suspense>
);

export default AppContainer;
