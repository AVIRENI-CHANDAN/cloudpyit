import React, { lazy, Suspense } from 'react';

const LazyAuthPage = lazy(() => import('./AuthPage'));

const AuthPage = props => (
  <Suspense fallback={null}>
    <LazyAuthPage {...props} />
  </Suspense>
);

export default AuthPage;
