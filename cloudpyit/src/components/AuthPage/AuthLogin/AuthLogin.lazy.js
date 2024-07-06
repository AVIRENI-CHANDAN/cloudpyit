import React, { lazy, Suspense } from 'react';

const LazyAuthLogin = lazy(() => import('./AuthLogin'));

const AuthLogin = props => (
  <Suspense fallback={null}>
    <LazyAuthLogin {...props} />
  </Suspense>
);

export default AuthLogin;
