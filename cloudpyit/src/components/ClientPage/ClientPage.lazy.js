import React, { lazy, Suspense } from 'react';

const LazyClientPage = lazy(() => import('./ClientPage'));

const ClientPage = props => (
  <Suspense fallback={null}>
    <LazyClientPage {...props} />
  </Suspense>
);

export default ClientPage;
